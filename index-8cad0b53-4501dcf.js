import{A as e}from"./Add12Filled-e074f121-4501dcf.js";import{R as t,i as a,p as s,a as i}from"./index-4501dcf.js";import{d,r,o as l,h as n,aY as o,B as c,aW as u,A as m,F as f}from"./vendor-bf4cdcd7-4501dcf.js";import{H as p}from"./rounded-button-6d40a7b5-4501dcf.js";var v=d({setup(){const d=r([]),v=r(!0);l((async()=>{t.api.recently.all.get().then((e=>{d.value=e.data,v.value=!1}))}));const{create:y}=a();return()=>n(i,{actionsElement:n(f,null,n(p,{onClick:()=>{y().then((e=>{e&&d.value.unshift(e)}))},icon:n(e,null)}))},n(o,{remote:!0,loading:v.value,bordered:!1,data:d.value,columns:[{title:"内容",key:"content",width:500},{title:"记录时间",key:"created",width:100,render:e=>s(e.created,"M-d HH:mm:ss")},{title:"操作",fixed:"right",width:60,key:"id",render:e=>n(c,null,n(u,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await t.api.recently(e.id).delete(),message.success("删除成功"),d.value.splice(d.value.indexOf(e),1)}},{trigger:()=>n(m,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>n("span",{style:{maxWidth:"12rem"}},"确定要删除 ",e.title," ?")}))}]}))}});export{v as default};
