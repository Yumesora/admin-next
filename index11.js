import{_ as D}from"./CheckCircleOutlined.js";import{bc as O,d as m,r as C,b5 as q,w as b,o as x,h as e,F,ag as B,u as g,l as _,bo as A,bp as k,B as N,A as h,I as U,aX as J,G as M,K as P,L as S,b1 as R,b2 as d,y as f,a_ as z,b4 as H,aV as L}from"./vendor.js";import{A as I}from"./Add12Filled.js";import{H as V}from"./rounded-button.js";import{T as G}from"./index3.js";import{R as $}from"./relative-time.js";import{u as j}from"./use-react.js";import{u as K}from"./use-table.js";import{u as W,_ as X,U as Q,a as Y,e as E,R as p,g as Z}from"./index.js";import{C as ee}from"./index6.js";var T={};Object.defineProperty(T,"__esModule",{value:!0});const y=O.exports,te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ae=y.createVNode("path",{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z",fill:"currentColor"},null,-1);var ue=T.default=y.defineComponent({name:"LockFilled",render:function(o,u){return y.openBlock(),y.createBlock("svg",te,[ae])}});class ne{created;id}var v;(function(n){n.JSON="json",n.Text="text"})(v||(v={}));class re extends ne{type=v.JSON;private=!0;raw="{}";name="";reference="root";comment;metatype}const se=m({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(n){const o=C();q(n.value);let u;b(()=>n.value,s=>{u&&s!=u.getValue()&&u.setValue(s)});const{isDark:t}=W(Q);return b(()=>t.value,s=>{u.updateOptions({theme:s?"vs-dark":"vs"})}),x(()=>{X(()=>import("./editor.main.js").then(function(s){return s.b}),["editor.main.js","assets/editor.main.49249f9e.css"]).then(s=>{u=s.editor.create(o.value,{value:n.value,language:"json",theme:t.value?"vs-dark":"vs",automaticLayout:!0,minimap:{enabled:!1}}),["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(i=>{u[i](()=>{const r=u.getValue();n.onChange(r)})})})}),()=>e(F,null,e("div",{ref:o,class:"h-full w-full relative"},e(ee,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."})))}});var ge=m({name:"SnippetView",setup(){const n=B(),o=g(),u=_(()=>n.query.tab||"0");return()=>e(Y,null,e(A,{size:"medium",value:u.value,onUpdateValue:t=>{o.push({query:{tab:t}})}},e(k,{name:"0",tab:"\u5217\u8868"},e(le,null)),e(k,{name:"1",tab:"\u7F16\u8F91"},e(oe,null))))}});const le=m({setup(){x(async()=>{await u(1,20)});const n=E();j(()=>(n.setHeaderButton(e(V,{onClick:()=>{i.push({query:{tab:1}})},icon:e(I,null)})),()=>{n.setHeaderButton(null)}));const{data:o,fetchDataFn:u,loading:t,pager:s}=K((r,a)=>async(l,c)=>{const w=await p.api.snippets.get({params:{page:l,size:c,select:"-raw"}});r.value=w.data,a.value=w.pagination}),i=g();return()=>e(F,null,e(G,{data:o,pager:s,columns:[{key:"name",title:"\u540D\u79F0",render(r){const a=r.name,l=r.private;return e(N,{align:"center"},e(h,{tag:"a",text:!0,href:p.endpoint+"/snippets/"+r.reference+"/"+r.name+(r.private?`?token=bearer%20${Z()}`:""),target:"_blank",size:"tiny"},a),l&&e(U,{class:"items-center flex "},e(ue,null)))}},{title:"\u7C7B\u578B",key:"type"},{title:"\u5F15\u7528",key:"reference"},{key:"comment",title:"\u5907\u6CE8",width:300,ellipsis:{tooltip:!0}},{title:"\u521B\u5EFA\u4E8E",key:"created",render(r){return e($,{time:r.created})}},{title:"\u64CD\u4F5C",key:"id",render(r){return e(N,null,e(h,{text:!0,size:"tiny",type:"primary",onClick:()=>{i.push({query:{tab:1,id:r.id}})}},"\u7F16\u8F91"),e(J,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await p.api.snippets(r.id).delete(),message.success("\u5220\u9664\u6210\u529F"),await u(s.value.currentPage)}},{trigger:()=>e(h,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",r.title," ?")}))}}],loading:t.value}))}}),oe=m({setup(){const n=g(),o=B(),u=_(()=>o.query.id),t=C(new re);b(()=>u,async a=>{if(a.value){const l=await p.api.snippets(a.value).get();switch(l.type){case v.JSON:{l.raw=JSON.stringify(JSON.parse(l.raw),null,2);break}}t.value=l}},{immediate:!0});const s=E(),i=M(),r=async()=>{const a=(()=>{try{return JSON.stringify(JSON.parse(t.value.raw),null,0)}catch{i.error("JSON \u683C\u5F0F\u9519\u8BEF")}})(),c={...L(t.value,["_id","id","created","updated"]),raw:a};c.metatype||delete c.metatype,u.value?await p.api.snippets(u.value).put({data:c}):await p.api.snippets.post({data:c}),i.success(`${u.value?"\u66F4\u65B0":"\u521B\u5EFA"}\u6210\u529F`),n.replace({query:{...o.query,tab:0}})};return j(()=>(s.setHeaderButton(e(V,{variant:"success",onClick:r,icon:e(D,null)})),()=>{s.setHeaderButton(null)})),()=>e(F,null,e(P,{cols:"36 1:12 1024:36 1600:36"},e(S,{span:12},e(R,null,e(d,{label:"\u540D\u79F0",required:!0},e(f,{onUpdateValue:a=>void(t.value.name=a),value:t.value.name})),e(d,{label:"\u5F15\u7528",required:!0},e(f,{value:t.value.reference,onUpdateValue:a=>void(t.value.reference=a),defaultValue:"root"})),e(d,{label:"\u5143\u7C7B\u578B"},e(f,{value:t.value.metatype,onUpdateValue:a=>void(t.value.metatype=a)})),e(d,{label:"\u6570\u636E\u7C7B\u578B"},e(z,{value:t.value.type,defaultValue:v.JSON,onUpdateValue:a=>void(t.value.type=a),options:Object.entries(v).map(([a,l])=>({label:a,value:l}))})),e(d,{label:"\u516C\u5F00",labelPlacement:"left"},e("div",{class:"w-full flex justify-end"},e(H,{value:!t.value.private,onUpdateValue:a=>void(t.value.private=!a)}))),e(d,{label:"\u5907\u6CE8"},e(f,{resizable:!1,value:t.value.comment,onUpdateValue:a=>void(t.value.comment=a),type:"textarea",rows:4})))),e(S,{span:24,class:"ml-[40px]"},e(se,{value:t.value.raw,onChange:a=>{t.value.raw=a}}))))}});export{ge as default};
