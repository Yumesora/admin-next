import{A as e}from"./Add12Filled-4be3cb62-4a68e52.js";import{D as a}from"./Delete16Regular-4a9d2bd7-4a68e52.js";import{T as t}from"./index-14aadcb3-4a68e52.js";import{R as i}from"./relative-time-8c2ba76f-4a68e52.js";import{u as s}from"./use-table-855ee2a5-4a68e52.js";import{d as o,B as r,aH as n,ab as d,w as l,o as c,aT as u,h as p,aV as y,J as m,G as f,aW as g,F as v}from"./vendor-96c780fc-4a68e52.js";import{H as w}from"./rounded-button-d3b148ff-4a68e52.js";import{R as x,a as h}from"./index-4a68e52.js";const b=o({name:"SayList",setup(b,k){const{checkedRowKeys:j,data:T,pager:R,loading:C,fetchDataFn:D}=s(((e,a)=>async(t=q.query.page||1,i=30)=>{const s=await x.api.says.get({params:{page:t,size:i,select:"title text _id id created modified author source"}});e.value=s.data,a.value=s.pagination})),F=r(),z=n(),q=d(),A=D;l((()=>q.query.page),(async e=>{await A(e)})),c((async()=>{await A()}));const H=o({setup(){const e=u([{type:"selection",options:["none","all"]},{title:"创建于",key:"created",width:100,render:e=>p(y,{to:"/says/edit?id="+e.id},p(i,{time:e.created}))},{title:"内容",key:"text"},{title:"作者",key:"author"},{title:"来源",key:"source"},{title:"操作",fixed:"right",key:"id",width:130,render:e=>p(f,{wrap:!1},p(y,{to:"/says/edit?id="+e.id},p(m,{text:!0,type:"primary",size:"tiny"},"编辑")),p(g,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await x.api.says(e.id).delete(),F.success("删除成功"),await A(R.value.currentPage)}},{trigger:()=>p(m,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>p("span",{style:{maxWidth:"12rem"}},"确定要删除“",e.text,"” ?")}))}]);return()=>p(t,{loading:C.value,columns:e,data:T,onFetchData:A,pager:R,onUpdateCheckedRowKeys:e=>{j.value=e}})}});return()=>p(h,null,{actions:()=>p(v,null,p(w,{variant:"error",disabled:0==j.value.length,onClick:()=>{z.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const e of j.value)await x.api.says(e).delete();j.value.length=0,F.success("删除成功"),await A()}})},icon:p(a,null)}),p(w,{to:"/says/edit",icon:p(e,null)})),default:()=>p(H,null)})}});export{b as default};
//# sourceMappingURL=list-d4a411ff-4a68e52.js.map