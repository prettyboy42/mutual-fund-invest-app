(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"6be3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"q-pa-xs row items-start q-gutter-sm"},[a("div",{staticClass:"q-gutter-sm"},t._l(t.state.mutualFundList,(function(e,n){return a("q-checkbox",{key:n,attrs:{val:e,label:e},model:{value:t.state.selections,callback:function(e){t.$set(t.state,"selections",e)},expression:"state.selections"}})})),1),a("q-card",{staticClass:"col"},[a("q-card-section",[a("apexchart",{attrs:{type:"area",height:"450",options:t.state.options,series:t.state.series}})],1)],1)],1),a("div",{staticClass:"q-pa-xs q-pt-md"},[a("q-table",{attrs:{title:"Dữ liệu NAV của các quỹ",dense:"",data:t.state.data,columns:t.state.columns,"row-key":"name",pagination:t.state.initialPagination}})],1)])},s=[],o=a("9ab4"),i=a("e4fd"),r=a("bc3a"),c=a.n(r),l=a("2a19"),d=a("6edf"),u=a.n(d),m=a("93c6"),p=a.n(m),F=a("9e86"),g=a.n(F);const b=["TCFF","SSIBF","VFB","TCBF","VF1","SCA","BVBF","VNDAF","BVPF","ETFVN30","BCF","ETFVN50","VFC","VF4","TBF","FIF","TCEF","VEOF","VFF","VIBF","VCAMBF","VNDBF","FUESSVFL"],f={chart:{id:"hurua"},xaxis:{type:"datetime"},legend:{show:!0,showForSingleSeries:!0},title:{text:"Finhay - Các hủ đang đầu tư",align:"middle",style:{fontSize:"16px",fontWeight:"bold"}},stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1},tooltip:{x:{format:"dd/MM/yy HH:mm"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,90,100]}}},h=[{name:"series-1",data:[[]]}];function v(t){return Object(o["a"])(this,void 0,void 0,(function*(){const e=yield c.a.get("https://nav.finhay.com.vn/public/nav?name="+t);return 200==e.status&&e.data?e.data:(l["a"].create({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"}),[[]])}))}function C(t){const e=[{name:"transDate",required:!0,label:"Ngày giao dịch",align:"center",field:t=>t.transDate,format:t=>new Date(t).toLocaleDateString("en-GB",{timeZone:"UTC"}),sortable:!0}],a=t.map(t=>({name:t,required:!0,label:t,align:"right",field:e=>e[t]||0,format:t=>(new Intl.NumberFormat).format(t),sortable:!0}));return[...e,...a]}const y=t=>{const e={};return t.reduce((t,e)=>Object.assign(Object.assign({},t),{transDate:e.transDate,[e.symbol]:e.nav}),e)};var V=Object(i["defineComponent"])({name:"MutualFundChart",setup(t,e){const a=e.root.$q,n=[],s=[],r=Object(i["reactive"])({options:f,series:h,mutualFundList:b,selections:["TCBF","TCFF","SSIBF"],columns:n,data:s,initialPagination:{page:1,rowsPerPage:20}}),c=()=>{Promise.all(r.selections.map(t=>Object(o["a"])(this,void 0,void 0,(function*(){const e=yield v(t);return{name:t,data:e}})))).then(t=>{r.series=t;const e=t.flatMap(t=>t.data.map(e=>({transDate:e[0],symbol:t.name,nav:e[1]}))),a=p()(Object.values(g()(u()(e,"transDate"),t=>y(t))),["transDate"],["desc"]);r.data=a}).catch(t=>{a.notify({color:"negative",position:"top",message:t,icon:"report_problem"})})};return Object(i["onMounted"])(()=>{r.columns=C(r.selections),c()}),Object(i["watch"])(()=>r.selections,(t,e)=>{r.columns=C(r.selections),console.log("current is "+t.toString()),console.log("oldList is  "+e.toString()),c()}),{state:r}}}),w=V,q=a("2877"),B=a("9989"),S=a("f09f"),x=a("a370"),D=a("8f8e"),O=a("eaac"),T=a("eebe"),j=a.n(T),k=Object(q["a"])(w,n,s,!1,null,null,null);e["default"]=k.exports;j()(k,"components",{QPage:B["a"],QCard:S["a"],QCardSection:x["a"],QCheckbox:D["a"],QTable:O["a"]})}}]);