import{d as v,b as P,aT as A,ai as O,G as R,z as I,ag as _,w as M,o as z,l as N,aU as U,h as t,aV as L,ar as V,I as F,aW as H,A as q,B as K,F as S}from"./vendor.js";import{A as W}from"./Add12Filled.js";import{D as G}from"./Delete16Regular.js";import{T as J}from"./index3.js";import{E as Q}from"./edit-column.js";import{R as B}from"./relative-time.js";import{R as i,u as X,C as Y,a as Z}from"./index.js";import{u as $}from"./use-table.js";import{H as b}from"./rounded-button.js";const ee={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},te=O("path",{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z",fill:"currentColor"},null,-1);var ae=v({name:"ThumbsUp",render:function(o,l){return P(),A("svg",ee,[te])}});const pe=v({name:"PostList",setup(){const{loading:w,checkedRowKeys:o,data:l,pager:p,sortProps:n,fetchDataFn:C}=$((r,m)=>async(e=k.query.page||1,y=20)=>{const a=await i.api.posts.get({params:{page:e,size:y,select:"title _id id created modified categoryId copyright tags count",...n.sortBy?{sortBy:n.sortBy,sortOrder:n.sortOrder}:{}}});r.value=a.data,m.value=a.pagination}),g=R(),E=I(),k=_(),s=C;M(()=>k.query.page,async r=>{await s(r)});const u=X(Y);z(async()=>{await s(),await u.fetch()});const x=v({setup(){const r=N(()=>u.data.value?.map(e=>({label:e.name,value:e.id}))||[]),m=U([{type:"selection",options:["none","all"]},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:200,ellipsis:!0,render(e){return t(L,{to:"/posts/edit?id="+e.id},e.title)}},{title:"\u5206\u7C7B",sortOrder:!1,sorter:"default",key:"category",width:80,ellipsis:!0,filterOptions:r,filter:!0,render(e){return u.map.value?t(Q,{returnToConfrim:!1,initialValue:u.map.value.get(e.categoryId)?.name??"",onSubmit:async a=>{await i.api.posts(e.id).patch({data:{categoryId:a}}),g.success("\u4FEE\u6539\u6210\u529F~!"),l.value.find(f=>f.id===e.id).categoryId=a},type:"select",options:u.data.value?.map(a=>({label:a.name,value:a.id,key:a.id}))||[]}):""}},{title:"\u6807\u7B7E",key:"tags",width:100,ellipsis:!0,render(e){return e.tags?.join("\uFF0C")}},{title:()=>t(F,null,t(V,null)),key:"count.read",width:50,render(e){return e.count?.read||0}},{title:()=>t(F,null,t(ae,null)),width:50,key:"count.like",render(e){return e.count?.like||0}},{title:"\u521B\u5EFA\u4E8E",width:100,key:"created",sortOrder:"descend",sorter:"default",render(e){return t(B,{time:e.created})}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,width:100,render(e){return t(B,{time:e.modified})}},{title:"\u64CD\u4F5C",fixed:"right",width:60,key:"id",render(e){return t(K,null,t(H,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.posts(e.id).delete(),g.success("\u5220\u9664\u6210\u529F"),await s(p.value.currentPage)}},{trigger:()=>t(q,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>t("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",e.title," ?")}))}}]);return()=>t(J,{loading:w.value,columns:m,data:l,nTableProps:{onUpdateFilters:async(e,y)=>{if(!!e&&e.category&&Array.isArray(e.category)){if(!e.category.length){await s();return}const f=e.category.join(",");let{entries:j}=await i.api.categories.get({params:{ids:f}});const T=Object.values(j).reduce((h,c)=>{const D=c.children?.map(d=>(Object.defineProperty(d,"categoryId",{value:c.id,enumerable:!0}),Object.defineProperty(d,"category",{get(){return d},enumerable:!1}),d));return[...h,...D]},[]).sort((h,c)=>+new Date(h.created)-+new Date(c.created));l.value=T,p.value={currentPage:1,total:1,size:0,hasNextPage:!1,hasPrevPage:!1,totalPage:1}}}},onFetchData:s,pager:p,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{n.sortBy=e.sortBy,n.sortOrder=e.sortOrder}})}});return()=>t(Z,null,{actions:()=>t(S,null,t(b,{variant:"error",disabled:o.value.length==0,onClick:()=>{E.warning({title:"\u8B66\u544A",content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:async()=>{for(const r of o.value)await i.api.posts(r).delete();o.value.length=0,g.success("\u5220\u9664\u6210\u529F"),await s()}})},icon:t(G,null)}),t(b,{to:"/posts/edit",icon:t(W,null)})),default:()=>t(x,null)})}});export{pe as ManagePostListView};
