import{T as c}from"./index3.js";import{u as p}from"./use-table.js";import{R as n,a as d}from"./index.js";import{t as f}from"./index10.js";import{d as h,o as y,h as s,v as C,B as g,aV as x,A as v}from"./vendor.js";var F=h({setup(){const{data:r,fetchDataFn:o,loading:i}=p(e=>async()=>{const a=await n.api.health.cron.get();e.value=Array.from(Object.values(a.data).map(t=>({...t,_name:t.name,name:f(t.name)})))});y(async()=>{await o()});const l=async(e,a)=>{await n.api.health.cron.run(e).post();let t=setTimeout(function m(){n.api.health.cron.task(e).get().then(u=>{u.status==="fulfill"?(message.success(`${a} \u6267\u884C\u5B8C\u6210`),t=clearTimeout(t)):u.status==="reject"?(message.error(`${a} \u6267\u884C\u5931\u8D25, `+u.message),t=clearTimeout(t)):t=setTimeout(m,1e3)})},1e3)};return()=>s(d,null,s(c,{noPagination:!0,data:r,loading:i.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},maxWidth:500,columns:[{title:"\u4EFB\u52A1",key:"name",ellipsis:{tooltip:!0},width:150},{title:"\u63CF\u8FF0",key:"description",width:250,ellipsis:{tooltip:!0}},{title:"\u72B6\u6001",key:"status"},{title:"\u4E0B\u6B21\u6267\u884C",key:"",render(e){const a=e.nextDate;return a?C(new Date(a),"MM/dd/yyyy hh:mm:ss"):"N/A"}},{title:"\u64CD\u4F5C",key:"",render(e){return s(g,null,s(x,{onPositiveClick:()=>void l(e._name,e.name)},{trigger(){return s(v,{size:"tiny",text:!0,type:"success"},"\u6267\u884C")},default:()=>s("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u6267\u884C?")}))}}]}))}});export{F as default};
