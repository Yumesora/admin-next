import{T as e}from"./TelegramPlane-e86ea1e2-2c222dc.js";import{H as a}from"./rounded-button-84021239-2c222dc.js";import{M as l}from"./monaco-8e7a4212-2c222dc.js";import{u as t}from"./use-parse-payload-3940334c-2c222dc.js";import{R as r,a as s,e as o}from"./index-2c222dc.js";import{d as n,aa as c,l as i,aP as p,k as m,o as u,h as d,aZ as b,a_ as f,aW as h,a$ as v,F as w,b2 as y,bp as g,b1 as j}from"./vendor-ab93f390-2c222dc.js";const x=n({setup(){const n=c(),x=i(),P=p({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:""}),U=m((()=>n.query.id));u((async()=>{const e=U.value;if(e&&"string"==typeof e){(e=>{t(P)(e)})((await r.api.projects(e).get({})).data)}}));const S=async()=>{const e=()=>{try{if(!P.text||0==P.text.trim().length)throw"内容为空";return{...g(j(P),((e,a,l)=>(e[l]=void 0===a?null:"string"==typeof a&&0==a.length?"":a,e))),text:P.text.trim()}}catch(e){throw message.error(e),e}};if(U.value){if(!y(U.value))return;const a=U.value;await r.api.projects(a).put({data:e()}),message.success("修改成功")}else await r.api.projects.post({data:e()}),message.success("发布成功");x.push({name:o.ListProject})};return()=>d(s,{actionsElement:d(w,null,d(a,{variant:"primary",onClick:S,icon:d(e,null)}))},d(b,null,d(f,{label:"项目名称",required:!0,labelPlacement:"left",labelStyle:{width:"6rem"}},d(h,{autofocus:!0,placeholder:"",value:P.name,onInput:e=>{P.name=e}})),d(f,{label:"文档地址",labelPlacement:"left",labelStyle:{width:"6rem"}},d(h,{placeholder:"",value:P.docUrl,onInput:e=>{P.docUrl=e}})),d(f,{label:"预览地址",labelPlacement:"left",labelStyle:{width:"6rem"}},d(h,{placeholder:"",value:P.previewUrl,onInput:e=>{P.previewUrl=e}})),d(f,{label:"项目地址",labelPlacement:"left",labelStyle:{width:"6rem"}},d(h,{placeholder:"",value:P.projectUrl,onInput:e=>{P.projectUrl=e}})),d(f,{label:"项目描述",required:!0,labelPlacement:"left",labelStyle:{width:"6rem"}},d(h,{placeholder:"",value:P.description,onInput:e=>{P.description=e}})),d(f,{label:"项目图标",labelPlacement:"left",labelStyle:{width:"6rem"}},d(h,{placeholder:"",value:P.avatar,onInput:e=>{P.avatar=e}})),d(f,{label:"项目图标",labelPlacement:"left",labelStyle:{width:"6rem"}},d(v,{value:P.images,onUpdateValue:e=>{P.images=e}})),d(f,{label:"正文",required:!0},d(l,{onChange:e=>{P.text=e},text:P.text,class:"h-40 w-full",unSaveConfirm:!1}))))}});export{x as default};
//# sourceMappingURL=edit-44e67eb7-2c222dc.js.map