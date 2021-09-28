import{A as e}from"./Add12Filled-c66d91b6-040da50.js";import{D as a}from"./Delete16Regular-d7fd2d43-040da50.js";import{T as t}from"./index-4cabcba3-040da50.js";import{R as i}from"./relative-time-9b1f14ed-040da50.js";import{u as s}from"./use-table-5123a82e-040da50.js";import{d,G as o,z as r,ae as n,w as l,o as c,aV as u,h as p,aX as y,A as m,B as g,aY as f,F as v}from"./vendor-836ee71d-040da50.js";import{H as w}from"./rounded-button-5ac97de0-040da50.js";import{R as x,a as h}from"./index-040da50.js";const k=d({name:"SayList",setup(k,j){const{checkedRowKeys:b,data:R,pager:T,loading:z,fetchDataFn:C}=s(((e,a)=>async(t=A.query.page||1,i=30)=>{const s=await x.api.says.get({params:{page:t,size:i,select:"title text _id id created modified author source"}});e.value=s.data,a.value=s.pagination})),D=o(),F=r(),A=n(),q=C;l((()=>A.query.page),(async e=>{await q(e)})),c((async()=>{await q()}));const K=d({setup(){const e=u([{type:"selection",options:["none","all"]},{title:"创建于",key:"created",width:100,render:e=>p(y,{to:"/says/edit?id="+e.id},p(i,{time:e.created}))},{title:"内容",key:"text"},{title:"作者",key:"author"},{title:"来源",key:"source"},{title:"操作",fixed:"right",key:"id",width:130,render:e=>p(g,{wrap:!1},p(y,{to:"/says/edit?id="+e.id},p(m,{text:!0,type:"primary",size:"tiny"},"编辑")),p(f,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await x.api.says(e.id).delete(),D.success("删除成功"),await q(T.value.currentPage)}},{trigger:()=>p(m,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>p("span",{style:{maxWidth:"12rem"}},"确定要删除“",e.text,"” ?")}))}]);return()=>p(t,{loading:z.value,columns:e,data:R,onFetchData:q,pager:T,onUpdateCheckedRowKeys:e=>{b.value=e}})}});return()=>p(h,null,{actions:()=>p(v,null,p(w,{variant:"error",disabled:0==b.value.length,onClick:()=>{F.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const e of b.value)await x.api.says(e).delete();b.value.length=0,D.success("删除成功"),await q()}})},icon:p(a,null)}),p(w,{to:"/says/edit",icon:p(e,null)})),default:()=>p(K,null)})}});export{k as default};
