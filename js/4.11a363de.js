(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"row items-center justify-evenly"},[n("example-component",{attrs:{title:"Example component",active:"",todos:t.todos,meta:t.meta}})],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.title))]),n("ul",t._l(t.todos,(function(e){return n("li",{key:e.id,on:{click:t.increment}},[t._v("\n      "+t._s(e.id)+" - "+t._s(e.content)+"\n    ")])})),0),n("p",[t._v("Count: "+t._s(t.todoCount)+" / "+t._s(t.meta.totalCount))]),n("p",[t._v("Active: "+t._s(t.active?"yes":"no"))]),n("p",[t._v("Clicks on todos: "+t._s(t.clickCount))])])},s=[],r=n("e4fd");function u(){const t=Object(r["ref"])(0);function e(){return t.value+=1,t.value}return{clickCount:t,increment:e}}function a(t){const e=Object(r["computed"])(()=>t.value.length);return{todoCount:e}}var l=Object(r["defineComponent"])({name:"CompositionComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(t){return Object.assign(Object.assign({},u()),a(Object(r["toRef"])(t,"todos")))}}),p=l,d=n("2877"),m=Object(d["a"])(p,i,s,!1,null,null,null),f=m.exports,v=Object(r["defineComponent"])({name:"PageIndex",components:{ExampleComponent:f},setup(){const t=Object(r["ref"])([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),e=Object(r["ref"])({totalCount:1200});return{todos:t,meta:e}}}),_=v,b=n("9989"),C=n("eebe"),j=n.n(C),O=Object(d["a"])(_,o,c,!1,null,null,null);e["default"]=O.exports;j()(O,"components",{QPage:b["a"]})}}]);