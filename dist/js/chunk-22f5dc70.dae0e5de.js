(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22f5dc70"],{"25ff":function(t,e,n){},5715:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-content"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:2}},[n("span",[t._v("部门")])]),n("el-col",{attrs:{span:4}},[n("el-select",{attrs:{placeholder:"选择部门",label:"部门",filterable:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}},[n("el-option",{attrs:{label:"全部",value:""}}),t._l(t.options,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2)],1),n("el-col",{attrs:{span:2}},[n("span",[t._v("人员工号")])]),n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{placeholder:"人员工号",label:"人员工号"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),n("el-col",{attrs:{span:2}},[n("span",[t._v("人员名字")])]),n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{placeholder:"人员名字",label:"人员名字"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")]),n("el-button",{on:{click:t.onReset}},[t._v("重置")])],1)],1),n("el-table",{staticStyle:{width:"520px","margin-bottom":"10px"},attrs:{data:t.tableData,stripe:"",height:"calc(100% - 138px)"}},[n("el-table-column",{attrs:{prop:"id",label:"#",width:"80",sortable:"true",align:"center"}}),n("el-table-column",{attrs:{prop:"code",label:"人员工号",width:"200",sortable:"true"}}),n("el-table-column",{attrs:{prop:"name",label:"人员名字",width:"150",sortable:"true",align:"center"}}),n("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.onDelete(e.row)}}},[t._v("删除")])]}}])})],1),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==t.total,expression:"total !== 0"}],staticStyle:{padding:"0px 5px"},attrs:{"current-page":t.currentPage,"page-sizes":[10,25,50,100],"page-size":t.pageSize,total:t.total,"pager-count":5,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.onSizeChange,"current-change":t.onCurrentChange}})],1)},r=[],o=(n("7f7f"),n("96cf"),n("3b8d")),i={props:[],data:function(){return{id:"",code:"",name:"",tableData:[],currentPage:1,pageSize:10,total:0}},components:{},created:function(){},mounted:function(){},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.currentPage=e||1,n={id:this.id,code:this.code,name:this.name},a="/department/member/query/?page=".concat(this.currentPage,"&limit=").concat(this.pageSize),t.next=5,this.$request.post(a,n).then(function(t){if(console.log("res",t),!0===t.data.success){var e=t.data,n=e.data,a=e.paging;r.tableData=n,r.total=a.records}});case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onSubmit:function(){this.getData()},onReset:function(){this.id="",this.code="",this.name=""},onDelete:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={id:e.id},a="/department/member/delete/",t.next=4,this.$request.post(a,n).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!0!==e.data.success){t.next=4;break}return r.$alert("删除人员成功","成功",{confirmButtonText:"确定",type:"success"}),t.next=4,r.getData();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onSizeChange:function(t){this.pageSize=t,this.getData()},onCurrentChange:function(t){this.getData(t)}},computed:{options:function(){return this.$store.getters.getDepartmentList}}},s=i,c=(n("9a9b"),n("2877")),l=Object(c["a"])(s,a,r,!1,null,"84a5216e",null);l.options.__file="memberQuery.vue";e["default"]=l.exports},"7f7f":function(t,e,n){var a=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"9a9b":function(t,e,n){"use strict";var a=n("25ff"),r=n.n(a);r.a}}]);