import{T as v}from"./TelegramPlane.js";import{H as f}from"./rounded-button.js";import{MonacoEditor as y}from"./monaco.js";import{u as h}from"./use-parse-payload.js";import{R as s,a as g,d as E}from"./index.js";import{d as w,ag as j,g as P,aU as F,c as x,o as S,h as t,b1 as U,b2 as o,y as u,b3 as I,F as R,b6 as C,bq as D,b5 as T}from"./vendor.js";import"./index6.js";import"./props.js";const $=w({setup(){const i=j(),c=P(),d=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:""}),m=e=>h(a)(e),a=F(d()),n=x(()=>i.query.id);S(async()=>{const e=n.value;if(e&&typeof e=="string"){const r=(await s.api.projects(e).get({})).data;m(r)}});const p=async()=>{const e=()=>{try{if(!a.text||a.text.trim().length==0)throw"\u5185\u5BB9\u4E3A\u7A7A";return{...D(T(a),(l,r,b)=>(l[b]=typeof r=="undefined"?null:typeof r=="string"&&r.length==0?"":r,l)),text:a.text.trim()}}catch(l){throw message.error(l),l}};if(n.value){if(!C(n.value))return;const l=n.value;await s.api.projects(l).put({data:e()}),message.success("\u4FEE\u6539\u6210\u529F")}else await s.api.projects.post({data:e()}),message.success("\u53D1\u5E03\u6210\u529F");c.push({name:E.ListProject})};return()=>t(g,{actionsElement:t(R,null,t(f,{variant:"primary",onClick:p,icon:t(v,null)}))},t(U,null,t(o,{label:"\u9879\u76EE\u540D\u79F0",required:!0,labelPlacement:"left",labelStyle:{width:"6rem"}},t(u,{autofocus:!0,placeholder:"",value:a.name,onInput:e=>void(a.name=e)})),t(o,{label:"\u6587\u6863\u5730\u5740",labelPlacement:"left",labelStyle:{width:"6rem"}},t(u,{placeholder:"",value:a.docUrl,onInput:e=>void(a.docUrl=e)})),t(o,{label:"\u9884\u89C8\u5730\u5740",labelPlacement:"left",labelStyle:{width:"6rem"}},t(u,{placeholder:"",value:a.previewUrl,onInput:e=>void(a.previewUrl=e)})),t(o,{label:"\u9879\u76EE\u5730\u5740",labelPlacement:"left",labelStyle:{width:"6rem"}},t(u,{placeholder:"",value:a.projectUrl,onInput:e=>void(a.projectUrl=e)})),t(o,{label:"\u9879\u76EE\u63CF\u8FF0",required:!0,labelPlacement:"left",labelStyle:{width:"6rem"}},t(u,{placeholder:"",value:a.description,onInput:e=>void(a.description=e)})),t(o,{label:"\u9879\u76EE\u56FE\u6807",labelPlacement:"left",labelStyle:{width:"6rem"}},t(u,{placeholder:"",value:a.avatar,onInput:e=>void(a.avatar=e)})),t(o,{label:"\u9879\u76EE\u56FE\u6807",labelPlacement:"left",labelStyle:{width:"6rem"}},t(I,{value:a.images,onUpdateValue:e=>void(a.images=e)})),t(o,{label:"\u6B63\u6587",required:!0,labelPlacement:"left"},t(y,{onChange:e=>void(a.text=e),text:a.text,class:"h-40 w-full",unSaveConfirm:!1}))))}});export{$ as default};
