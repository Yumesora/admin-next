import{A as e}from"./Add12Filled-e850f595-2_19_59.js";import{D as a}from"./Delete16Regular-af8ac10e-2_19_59.js";import{T as t}from"./index-348633d5-2_19_59.js";import{R as s}from"./relative-time-b7c52aa8-2_19_59.js";import{u as i}from"./use-table-917c3adc-2_19_59.js";import{d as o,B as r,aE as n,aa as l,w as d,o as c,aP as u,h as p,aR as y,J as m,G as g,aS as f,F as v}from"./vendor-a3bf3ad0-2_19_59.js";import{H as _}from"./rounded-button-00a9564c-2_19_59.js";import{R as w,a as x}from"./index-2_19_59.js";const h=o({name:"SayList",setup(h,k){const{checkedRowKeys:j,data:R,pager:b,loading:T,fetchDataFn:C}=i(((e,a)=>async(t=z.query.page||1,s=30)=>{const i=await w.api.says.get({params:{page:t,size:s,select:"title text _id id created modified author source"}});e.value=i.data,a.value=i.page})),D=r(),F=n(),z=l(),P=C;d((()=>z.query.page),(async e=>{await P(e)})),c((async()=>{await P()}));const q=o({setup(){const e=u([{type:"selection",options:["none","all"]},{title:"创建于",key:"created",width:100,render:e=>p(y,{to:"/says/edit?id="+e.id},p(s,{time:e.created}))},{title:"内容",key:"text"},{title:"作者",key:"author"},{title:"来源",key:"source"},{title:"操作",fixed:"right",key:"id",width:130,render:e=>p(g,{wrap:!1},p(y,{to:"/says/edit?id="+e.id},p(m,{text:!0,type:"primary",size:"tiny"},"编辑")),p(f,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await w.api.says(e.id).delete(),D.success("删除成功"),await P(b.value.currentPage)}},{trigger:()=>p(m,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>p("span",{style:{maxWidth:"12rem"}},"确定要删除“",e.text,"” ?")}))}]);return()=>p(t,{loading:T.value,columns:e,data:R,onFetchData:P,pager:b,onUpdateCheckedRowKeys:e=>{j.value=e}})}});return()=>p(x,null,{actions:()=>p(v,null,p(_,{variant:"error",disabled:0==j.value.length,onClick:()=>{F.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const e of j.value)await w.api.says(e).delete();j.value.length=0,D.success("删除成功"),await P()}})},icon:p(a,null)}),p(_,{to:"/says/edit",icon:p(e,null)})),default:()=>p(q,null)})}});export default h;
//# sourceMappingURL=list-8ab33719-2_19_59.js.map
