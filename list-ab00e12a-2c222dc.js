import{A as e}from"./Add12Filled-5bd173d2-2c222dc.js";import{D as a}from"./Delete16Regular-72592335-2c222dc.js";import{T as t}from"./index-0f402714-2c222dc.js";import{R as s}from"./relative-time-8aae25ce-2c222dc.js";import{u as i}from"./use-table-40ad1473-2c222dc.js";import{d as o,B as r,aE as d,aa as n,w as c,o as l,aP as u,h as p,aR as y,J as m,G as g,aS as f,F as v}from"./vendor-ab93f390-2c222dc.js";import{H as w}from"./rounded-button-84021239-2c222dc.js";import{R as x,a as h}from"./index-2c222dc.js";const k=o({name:"SayList",setup(k,j){const{checkedRowKeys:R,data:b,pager:T,loading:C,fetchDataFn:D}=i(((e,a)=>async(t=P.query.page||1,s=30)=>{const i=await x.api.says.get({params:{page:t,size:s,select:"title text _id id created modified author source"}});e.value=i.data,a.value=i.page})),F=r(),z=d(),P=n(),q=D;c((()=>P.query.page),(async e=>{await q(e)})),l((async()=>{await q()}));const A=o({setup(){const e=u([{type:"selection",options:["none","all"]},{title:"创建于",key:"created",width:100,render:e=>p(y,{to:"/says/edit?id="+e.id},p(s,{time:e.created}))},{title:"内容",key:"text"},{title:"作者",key:"author"},{title:"来源",key:"source"},{title:"操作",fixed:"right",key:"id",width:130,render:e=>p(g,{wrap:!1},p(y,{to:"/says/edit?id="+e.id},p(m,{text:!0,type:"primary",size:"tiny"},"编辑")),p(f,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await x.api.says(e.id).delete(),F.success("删除成功"),await q(T.value.currentPage)}},{trigger:()=>p(m,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>p("span",{style:{maxWidth:"12rem"}},"确定要删除“",e.text,"” ?")}))}]);return()=>p(t,{loading:C.value,columns:e,data:b,onFetchData:q,pager:T,onUpdateCheckedRowKeys:e=>{R.value=e}})}});return()=>p(h,null,{actions:()=>p(v,null,p(w,{variant:"error",disabled:0==R.value.length,onClick:()=>{z.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const e of R.value)await x.api.says(e).delete();R.value.length=0,F.success("删除成功"),await q()}})},icon:p(a,null)}),p(w,{to:"/says/edit",icon:p(e,null)})),default:()=>p(A,null)})}});export{k as default};
//# sourceMappingURL=list-ab00e12a-2c222dc.js.map