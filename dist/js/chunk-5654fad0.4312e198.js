(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5654fad0"],{"6fda":function(t,e,n){"use strict";var r=n("e134"),o=n.n(r);o.a},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,c="name";c in o||n("9e1e")&&r(o,c,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},c7f2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-content"},[n("el-form",{ref:"mfrAddForm",staticStyle:{},attrs:{model:t.form,rules:t.rules,"label-width":"140px"}},[n("el-form-item",{attrs:{label:"厂家名称",prop:"name"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit()}}},[t._v("提交")]),n("el-button",{on:{click:function(e){t.onReset()}}},[t._v("重置")])],1)],1)],1)},o=[],a=(n("7f7f"),{props:[],data:function(){return{form:{name:""},rules:{name:[{required:!0,message:"请输入厂家名称",trigger:"blur"}]}}},components:{},created:function(){},mounted:function(){},methods:{onSubmit:function(){var t=this;this.$refs.mfrAddForm.validate(function(e){if(e){var n={name:t.form.name},r="/manufacturer/add/";t.$request.post(r,n).then(function(e){!0===e.data.success&&(t.$alert("添加厂家成功！","成功",{confirmButtonText:"确定",type:"success"}),t.$store.dispatch("getManufacturerList"))})}else t.$alert("填写有误，请检查！","错误",{confirmButtonText:"确定",type:"error"})})},onReset:function(){this.$refs.mfrAddForm.resetFields()}},computed:{}}),c=a,i=(n("6fda"),n("2877")),u=Object(i["a"])(c,r,o,!1,null,"719f016c",null);u.options.__file="add.vue";e["default"]=u.exports},e134:function(t,e,n){}}]);