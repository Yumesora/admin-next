import{u as e,U as a}from"./index-f99ecc5.js";import{d as t,l as o,ab as r,r as n,aT as d,w as s,aX as u,h as l,aY as c}from"./vendor-e2ba4753-f99ecc5.js";var p="_table-row_1brqz_3";const i=p,y=t({props:{data:{type:Object,required:!0},noPagination:{type:Boolean,default:!1},pager:{type:Object,required:!1},onUpdateCheckedRowKeys:{type:Function,default:()=>{}},onUpdateSorter:{type:Function,default:()=>{}},onFetchData:{type:Function,required:!1},columns:{type:Array,required:!0},nTableProps:{type:Object,default:{}},maxWidth:{type:Number},loading:{type:Boolean,default:!1},checkedRowKey:{type:String,default:"id"}},setup(t,i){const{data:y,noPagination:v=!1,pager:h,onUpdateCheckedRowKeys:g,onUpdateSorter:m,nTableProps:w,columns:b,onFetchData:f,checkedRowKey:K="id",maxWidth:O=1200}=t,k=o(),q=r(),U=n([]),B=d({sortBy:"",sortOrder:0}),C=n(!0),P=s((()=>y.value),(e=>{C.value=!1,P()}));u(((e,a,t)=>{C.value=!0,t(),C.value=!1}));const R=e(a);return()=>{var e;return l(c,{...w,loading:null!=(e=t.loading)?e:C.value,remote:!0,scrollX:Math.max(R.contentInsetWidth.value,O),pagination:v?void 0:h&&{page:h.value.currentPage,pageSize:h.value.size,pageCount:h.value.totalPage,showQuickJumper:!0,pageSlot:R.viewport.value.mobile?R.contentInsetWidth.value<400?2:3:void 0,onChange:async e=>{k.push({query:{...q.query,page:e},path:q.path})}},bordered:!1,data:y.value,checkedRowKeys:U.value,rowKey:e=>e[K],onUpdateCheckedRowKeys:e=>{U.value=e,null==g||g(e)},rowClassName:()=>p,onUpdateSorter:async e=>{if(!e)return;b.forEach((a=>{"sortOrder"in a&&void 0!==a.sortOrder&&(e&&a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=!1)}));const{columnKey:a,order:t}=e;B.sortBy=B.sortBy&&B.sortBy==a?"":a,B.sortOrder=t?{descend:-1,ascend:1}[t]:1,null==m||m(B,e),f&&await f()},columns:b})}}});export{y as T,i as t};
//# sourceMappingURL=index-9183aa5d-f99ecc5.js.map