import{A as e}from"./Add12Filled-5bd173d2-2c222dc.js";import{D as t}from"./Delete16Regular-72592335-2c222dc.js";import{T as a}from"./index-0f402714-2c222dc.js";import{R as r}from"./relative-time-8aae25ce-2c222dc.js";import{u as s}from"./use-table-40ad1473-2c222dc.js";import{d as i,B as o,aE as d,aa as n,w as l,o as c,aP as u,h as p,aR as g,aS as m,J as y,G as f,F as v}from"./vendor-ab93f390-2c222dc.js";import{H as w}from"./rounded-button-84021239-2c222dc.js";import{R as k,a as x}from"./index-2c222dc.js";const h=i({name:"PageList",setup(){const{checkedRowKeys:h,data:j,pager:b,sortProps:O,fetchDataFn:B}=s(((e,t)=>async(t=T.query.page||1,a=20)=>{const r=await k.api.pages.get({params:{page:t,size:a,select:"title subtitle _id id created modified slug",...O.sortBy?{sortBy:O.sortBy,sortOrder:O.sortOrder}:{}}});e.value=r.data})),P=o(),R=d(),T=n(),C=B;l((()=>T.query.page),(async e=>{await C(e)})),c((async()=>{await C()}));const D=i({setup(){const e=u([{type:"selection",options:["none","all"]},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:300,render:e=>p(g,{to:"/pages/edit?id="+e.id},e.title)},{title:"副标题",key:"subtitle"},{title:"路径",key:"slug",render:e=>"/"+e.slug},{title:"创建于",key:"created",sortOrder:"descend",sorter:"default",render:e=>p(r,{time:e.created})},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,render:e=>p(r,{time:e.modified})},{title:"操作",fixed:"right",key:"id",render:e=>p(f,null,p(m,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await k.api.pages(e.id).delete(),P.success("删除成功"),await C(b.value.currentPage)}},{trigger:()=>p(y,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>p("span",{style:{maxWidth:"12rem"}},"确定要删除 ",e.title," ?")}))}]);return()=>p(a,{noPagination:!0,columns:e,data:j,onFetchData:C,pager:b,onUpdateCheckedRowKeys:e=>{h.value=e},onUpdateSorter:async e=>{O.sortBy=e.sortBy,O.sortOrder=e.sortOrder}})}});return()=>p(x,null,{actions:()=>p(v,null,p(w,{variant:"error",disabled:0==h.value.length,onClick:()=>{R.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const e of h.value)await k.api.pages(e).delete();h.value.length=0,P.success("删除成功"),await C()}})},icon:p(t,null)}),p(w,{to:"/pages/edit",icon:p(e,null)})),default:()=>p(D,null)})}});export{h as ManagePageListView};
//# sourceMappingURL=list-255d5d43-2c222dc.js.map