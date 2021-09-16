import{d as e,b as t,aS as a,af as r,B as l,aH as n,ab as o,w as i,o as s,aT as d,h as c,I as u,aV as p,bi as w,ao as m,aW as v,J as h,G as f,F as g}from"./vendor-96c780fc-4a68e52.js";import{A as y}from"./Add12Filled-4be3cb62-4a68e52.js";import{D as x}from"./Delete16Regular-4a9d2bd7-4a68e52.js";import{T as k}from"./index-14aadcb3-4a68e52.js";import{E as b}from"./edit-column-4774306c-4a68e52.js";import{R as C}from"./relative-time-8c2ba76f-4a68e52.js";import{u as B}from"./use-table-855ee2a5-4a68e52.js";import{H as j}from"./rounded-button-d3b148ff-4a68e52.js";import{R as z,a as M}from"./index-4a68e52.js";const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},D=r("path",{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400L0 512z",fill:"currentColor"},null,-1);var T=e({name:"Bookmark",render:function(e,r){return t(),a("svg",O,[D])}});const F={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},L=r("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"currentColor"},null,-1);var R=e({name:"Heart",render:function(e,r){return t(),a("svg",F,[L])}});const H={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},S=r("g",{fill:"none"},[r("path",{d:"M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.09 7.09 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708l-15-15z",fill:"currentColor"}),r("path",{d:"M10.124 8.003l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363z",fill:"currentColor"}),r("path",{d:"M7.531 5.41l.803.803A6.632 6.632 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41z",fill:"currentColor"})],-1);var V=e({name:"EyeHide20Filled",render:function(e,r){return t(),a("svg",H,[S])}});const A=e({name:"NoteList",setup(){const{loading:t,checkedRowKeys:a,data:r,pager:O,sortProps:D,fetchDataFn:F}=B(((e,t)=>async(a=S.query.page||1,r=20)=>{const l=await z.api.notes.get({params:{page:a,size:r,select:"title _id id created modified mood weather hide secret hasMemory coordinates location count",...D.sortBy?{sortBy:D.sortBy,sortOrder:D.sortOrder}:{}}});e.value=l.data,t.value=l.pagination})),L=l(),H=n(),S=o(),A=F;i((()=>S.query.page),(async e=>{await A(e)})),s((async()=>{await A()}));const P=e({setup(){const e=d([{type:"selection",options:["none","all"]},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:300,render:e=>c(p,{to:"/notes/edit?id="+e.id,class:"flex items-center space-x-2"},c("span",null,e.title),e.hide||e.secret&&+new Date(e.secret)-+new Date>0?c(u,{color:"#34495e"},c(V,null)):null,e.hasMemory?c(u,{color:"#e74c3c"},c(T,null)):null)},{title:"心情",key:"mood",width:100,render(e,t){var a;return c(b,{initialValue:null!=(a=r.value[t].mood)?a:"",onSubmit:async a=>{await z.api.notes(e.id).put({data:{mood:a}}),L.success("修改成功"),r.value[t].mood=a},placeholder:"心情"})}},{title:"天气",key:"weather",width:100,render(e,t){var a;return c(b,{initialValue:null!=(a=r.value[t].weather)?a:"",onSubmit:async a=>{await z.api.notes(e.id).put({data:{weather:a}}),L.success("修改成功"),r.value[t].weather=a},placeholder:"天气"})}},{title:"地点",key:"location",width:200,render(e){const{coordinates:t,location:a}=e;return a?c(w,{class:"truncate max-w-[200px]"},{tooltip:()=>c("div",{class:""},c("p",null,a),c("p",null,null==t?void 0:t.longitude,", ",null==t?void 0:t.latitude)),default:()=>a}):null}},{title:()=>c(u,null,c(m,null)),key:"count.read",ellipsis:!0,render(e){var t;return(null==(t=e.count)?void 0:t.read)||0}},{title:()=>c(u,null,c(R,null)),ellipsis:!0,key:"count.like",render(e){var t;return(null==(t=e.count)?void 0:t.like)||0}},{title:"创建于",key:"created",sortOrder:"descend",sorter:"default",width:200,render:e=>c(C,{time:e.created})},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,width:200,render:e=>c(C,{time:e.modified})},{title:"操作",key:"id",width:100,fixed:"right",render:e=>c(f,null,c(v,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await z.api.notes(e.id).delete(),L.success("删除成功"),await A(O.value.currentPage)}},{trigger:()=>c(h,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>c("span",{style:{maxWidth:"12rem"}},"确定要删除 ",e.title," ?")}))}]);return()=>c(k,{loading:t.value,columns:e,data:r,onFetchData:A,pager:O,onUpdateCheckedRowKeys:e=>{a.value=e},onUpdateSorter:async e=>{D.sortBy=e.sortBy,D.sortOrder=e.sortOrder}})}});return()=>c(M,null,{actions:()=>c(g,null,c(j,{variant:"error",disabled:0==a.value.length,onClick:()=>{H.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const e of a.value)await z.api.notes(e).delete();a.value.length=0,L.success("删除成功"),await A()}})},icon:c(x,null)}),c(j,{to:"/notes/edit",icon:c(y,null)})),default:()=>c(P,null)})}});export{A as ManageNoteListView};
//# sourceMappingURL=list-e7652660-4a68e52.js.map