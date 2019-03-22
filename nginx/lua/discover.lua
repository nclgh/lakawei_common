string.split = function(s, p)
	local rt= {}
	if s == nil then 
		return rt
	end
	string.gsub(s, '[^'..p..']+', function(w) table.insert(rt, w) end )
	return rt
end

string.join = function(strs,p) 
	local rt = {}
	for i,v in ipairs(strs) do
		if i>1 then
			table.insert(rt,p)
		end
		table.insert(rt,v)
	end
	return table.concat(rt)	
end

function red_connect(red,addrs,timeout) 
	local addr = string.split(addrs,':')
	red:set_timeout(timeout)
	local _,err = red.connect(red,addr[1],addr[2])
	return err
end

function my_connect(lcache,red,failedAddr)
        redis_list = {"127.0.0.1:8888","127.0.0.1:8886","127.0.0.1:8887"}
        for _,v in ipairs(redis_list) do
		repeat
			if v == failedAddr then
				break
			end
		until true
		local err = red_connect(red,v,100)
		if not err then
                        lcache:set("discover_redis",v)
			ngx.log(ngx.ERR,"connect success addr: ",v)
                        return 0
                end
        end
        return 1
end

local service_name = ngx.ctx.service_name
local lcache = ngx.shared.localcache
local service_list = lcache:get(service_name)
if service_list == nil then
	local redis = require "resty.redis"
        redis.add_commands("zrangebyscore","ping")
	local discover_redis = lcache:get("discover_redis")
	local red = redis.new()
	if discover_redis == nil then 
		local err = my_connect(lcache,red)
		if err ~= 0 then 
			ngx.log(ngx.ERR,"all redis connect err")
			ngx.exit(500)
			return
		end
	else
		local err = red_connect(red,discover_redis,100)
		if err then
			local err2 = my_connect(lcache,red,discover_redis)
			if err2 ~= 0 then
                        	ngx.log(ngx.ERR,"all redis connect err")
                        	ngx.exit(500)
                        	return
                	end
		end 
	end
	ngx.update_time()
	local now = ngx.time()

	local res, err = red:zrangebyscore(service_name,now-2,"+inf")
	if not res then
		ngx.log(ngx.ERR,"service discover failed")
		ngx.exit(500)
        	return
	end
	service_list = string.join(res,",")
	ngx.log(ngx.ERR,"diccover found :",service_list)
	lcache:set(service_name,service_list,10)
end

local addrs = string.split(service_list,',')

if next(addrs) == nil then
	ngx.log(ngx.ERR,"service has no instance: ",service_name)
	ngx.exit(500)
	return
end

ngx.var.target = addrs[math.random(#addrs)]
