import{V as H,b as G,I as M,u as J,E as Y,M as Z,P as K,S as Q}from"./parse-button.js";import{T as X}from"./TelegramPlane.js";import{bh as ee,d as E,b as V,aT as R,ai as B,G as $,r as w,h as t,A as b,I as P,w as U,k as te,bb as ae,V as ue,F as D,b1 as j,b2 as g,bi as oe,B as F,b5 as z,bd as le,ag as ne,l as N,E as re,aU as se,o as ie,u as ce,a$ as de,b0 as pe,a_ as L,bj as ve,b4 as k,y as fe,bk as me,bl as x,b3 as ge,b6 as he}from"./vendor.js";import{H as we}from"./rounded-button.js";import{R as C,f as W,B as be,a as ye,d as Ee}from"./index.js";import{u as Ce}from"./use-parse-payload.js";import"./use-react.js";import"./props.js";var I={exports:{}};(function(n,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=c;function u(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(l){return typeof l}:u=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},u(r)}function c(r){var e=typeof r=="string"||r instanceof String;if(!e){var l=u(r);throw r===null?l="null":l==="object"&&(l=r.constructor.name),new TypeError("Expected a string but received a ".concat(l))}}n.exports=o.default,n.exports.default=o.default})(I,I.exports);var O={exports:{}};(function(n,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=s;var u=c(I.exports);function c(d){return d&&d.__esModule?d:{default:d}}var r=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,e=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,l=function(p){var i=p.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(i){var f=Number(i[1]),h=Number(i[2]);return f%4==0&&f%100!=0||f%400==0?h<=366:h<=365}var y=p.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),a=y[1],v=y[2],m=y[3],S=v&&"0".concat(v).slice(-2),q=m&&"0".concat(m).slice(-2),_=new Date("".concat(a,"-").concat(S||"01","-").concat(q||"01"));return v&&m?_.getUTCFullYear()===a&&_.getUTCMonth()+1===v&&_.getUTCDate()===m:!0};function s(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(0,u.default)(d);var i=p.strictSeparator?e.test(d):r.test(d);return i&&p.strict?l(d):i}n.exports=o.default,n.exports.default=o.default})(O,O.exports);var Se=ee(O.exports),Be="isIso8601";function De(n,o){return typeof n=="string"&&Se(n,o)}function Fe(n,o){return H({name:Be,constraints:[n],validator:{validate:function(u,c){return De(u,c.constraints[0])},defaultMessage:G(function(u){return u+"$property must be a valid ISO 8601 date string"},o)}},o)}const xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ae=B("g",{fill:"none"},[B("path",{d:"M5.843 4.568a8.707 8.707 0 1 1 12.314 12.314l-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.439-.431-.806-.794-1.102-1.09a8.707 8.707 0 0 1 0-12.314zm11.253 1.06A7.207 7.207 0 1 0 6.904 15.822L8.39 17.29a753.98 753.98 0 0 0 3.088 3a.75.75 0 0 0 1.043 0l3.394-3.3c.47-.461.863-.85 1.18-1.168a7.207 7.207 0 0 0 0-10.192zM12 7.999a3.002 3.002 0 1 1 0 6.004a3.002 3.002 0 0 1 0-6.003zm0 1.5a1.501 1.501 0 1 0 0 3.004a1.501 1.501 0 0 0 0-3.003z",fill:"currentColor"})],-1);var _e=E({name:"Location24Regular",render:function(o,u){return V(),R("svg",xe,[Ae])}});const Pe=E({props:{onChange:{type:Function,required:!0}},setup(n){const o=$(),u=w(!1),c=async()=>{const r=()=>new Promise((e,l)=>{navigator.geolocation.getCurrentPosition(s=>{u.value=!0,e(s),u.value=!1},s=>{u.value=!1,l(s)})});if(navigator.geolocation)try{const e=await r(),{coords:{latitude:l,longitude:s}}=e,d=[s,l],p=await C.api.tools.geocode.location.get({params:{longitude:s,latitude:l}});n.onChange(p.regeocode,d)}catch(e){o.error("\u5B9A\u4F4D\u6743\u9650\u672A\u6253\u5F00")}else o.error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5B9A\u4F4D")};return()=>t(b,{ghost:!0,round:!0,type:"primary",onClick:c,loading:u.value},{icon(){return t(P,null,t(_e,null))},default(){return"\u5B9A\u4F4D"}})}}),Ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ke=B("g",{fill:"none"},[B("path",{d:"M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073l-4.901-4.9A7.25 7.25 0 1 1 10 2.75zm0 1.5a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5z",fill:"currentColor"})],-1);var Ie=E({name:"Search24Regular",render:function(o,u){return V(),R("svg",Ne,[ke])}});const Oe=E({props:{placeholder:{type:String,default:""},onChange:{type:Function,required:!0}},setup(n){const o=w(!1),u=w(!1),c=w(""),r=async s=>await C.api.tools.geocode.search.get({params:{keywords:s}}),e=w([]);U(()=>c.value,te(async s=>{o.value=!0;const d=await r(s);e.value=[],d.pois.forEach(p=>{const i=p.cityname+p.adname+p.address+p.name,[f,h]=p.location.split(",").map(Number);e.value.push({key:p.cityname,label:i,value:JSON.stringify([i,{latitude:h,longitude:f}])})}),o.value=!1},400,{trailing:!0,leading:!0}));let l;return()=>t(D,null,t(b,{ghost:!0,round:!0,onClick:()=>{u.value=!0}},{icon(){return t(P,null,t(Ie,null))},default(){return"\u81EA\u5B9A\u4E49"}}),t(ae,{show:u.value,onUpdateShow:s=>void(u.value=s)},t(ue,{class:"modal-card sm",bordered:!1,closable:!0,onClose:()=>{u.value=!1},title:"\u641C\u7D22\u5173\u952E\u5B57\u67E5\u627E\u5730\u70B9"},{default:()=>t(D,null,t(j,{labelPlacement:"top"},t(g,{label:"\u641C\u7D22\u5730\u70B9"},t(oe,{placeholder:n.placeholder||"",onSelect:s=>{l=s},options:e.value,loading:o.value,onUpdateValue:s=>{c.value=s},value:c.value}))),t(F,{justify:"end"},t(b,{round:!0,type:"primary",onClick:()=>{const s=JSON.parse(l);n.onChange.apply(this,s),u.value=!1},disabled:o.value},"\u786E\u5B9A")))})))}}),Te=["\u5F00\u5FC3","\u4F24\u5FC3","\u51B3\u5FC3","\u575A\u5B9A","\u75DB\u6068","\u751F\u6C14","\u60B2\u54C0","\u75DB\u82E6","\u53EF\u6015","\u4E0D\u5FEB","\u53EF\u6076","\u62C5\u5FC3","\u7EDD\u671B","\u7126\u8651","\u6FC0\u52A8"],Me=["\u6674","\u591A\u4E91","\u96E8","\u9634","\u96EA","\u96F7\u96E8"];var Ve=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,T=(n,o,u,c)=>{for(var r=c>1?void 0:c?Re(o,u):o,e=n.length-1,l;e>=0;e--)(l=n[e])&&(r=(c?l(o,u,r):l(r))||r);return c&&r&&Ve(o,u,r),r};class A{savedTime;text;title}T([Fe()],A.prototype,"savedTime",2);T([M()],A.prototype,"text",2);T([M()],A.prototype,"title",2);const $e=(n,o,u)=>{let c;const{storage:r,reset:e,clear:l}=J(A,"auto-save-"+n,!1);let s=u();const d=()=>{const{text:i,title:f}=u();!i&&!f||s.text==i&&s.title==f||(s={text:i,title:f},Object.assign(r,{savedTime:new Date().toISOString(),text:i,title:f}),console.log("saved data: ",r))};function p(){clearInterval(c)}return{reset:e,getPrevSaved(){return{...z(r)}},save:d,track(){p(),d(),c=setInterval(d,o)},disposer:p,clearSaved:l}},Ue=(n,o)=>{const{disposer:u,clearSaved:c,getPrevSaved:r,reset:e,save:l,track:s}=o,d=window.dialog;return(async()=>{const i=r();console.log("prev saved: ",i),(i.text||i.title)&&(i.text!==n.text||i.title!==n.title)&&requestAnimationFrame(()=>{d.info({title:"\u53D1\u73B0\u6709\u672A\u4FDD\u5B58\u7684\u5185\u5BB9, \u662F\u5426\u8FD8\u539F?",negativeText:"\u6E05\u695A",positiveText:"\u55EF",onNegativeClick(){c()},onPositiveClick(){Object.assign(n,{text:i.text,title:i.title})}})})})(),s(),le(()=>{l(),u()}),o},Ye=E(()=>{const n=ne(),o=w("\u5199\u70B9\u4EC0\u4E48\u5462"),u=N(()=>n.query.id);re(()=>{if(u.value)return;const a=new Date;o.value=`\u8BB0\u5F55 ${a.getFullYear()} \u5E74\u7B2C ${W(a)} \u5929`});const c=()=>({text:"",title:"",hide:!1,hasMemory:!1,mood:"",music:[],password:null,secret:null,weather:"",location:"",coordinates:null}),r=a=>Ce(e)(a),e=se(c()),l=w(),s=N(()=>!!(u.value&&!e.title)),d=U(()=>s.value,a=>{if(a)return;const v=$e("note-"+(u.value||"new"),3e3,()=>({text:e.text,title:e.title}));Ue(e,v),requestAnimationFrame(()=>{d()})},{immediate:!0});ie(async()=>{const a=u.value;if(a&&typeof a=="string"){const m=(await C.api.notes(a).get({params:{single:!0}})).data;l.value=m.nid,m.secret=m.secret?new Date(m.secret):null;const S=new Date(m.created);o.value=`\u8BB0\u5F55 ${S.getFullYear()} \u5E74\u7B2C ${W(S)} \u5929`,r(m)}});const p=w(!1),i=$(),f=ce(),h=N(()=>typeof e.password=="string"),y=async()=>{const a=()=>({...z(e),title:e.title&&e.title.trim()?e.title.trim():o.value,password:e.password&&e.password.length>0?e.password:null,secret:e.secret?(()=>{const v=new Date(e.secret);return+v-+new Date<=0?null:v})():null,music:e.music});if(u.value){if(!he(u.value))return;const v=u.value;await C.api.notes(v).put({data:a()}),i.success("\u4FEE\u6539\u6210\u529F")}else await C.api.notes.post({data:a()}),i.success("\u53D1\u5E03\u6210\u529F");f.push({name:Ee.ViewNote,hash:"|publish"})};return()=>t(ye,{title:"\u6811\u6D1E",actionsElement:t(D,null,t(K,{data:e}),t(we,{icon:t(X,null),onClick:y})),footerButtonElement:t(D,null,t("button",{onClick:()=>{p.value=!0}},t(P,null,t(Q,null))))},t(Z,{class:"mt-3 relative z-10",label:o.value,value:e.title,onChange:a=>{e.title=a}}),t("div",{class:"text-gray-500 py-3"},t("label",null,`${be}/notes/${l.value??""}`)),t(Y,{loading:s.value,onChange:a=>{e.text=a},text:e.text}),t(de,{show:p.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:a=>{p.value=a}},t(pe,{title:"\u6587\u7AE0\u8BBE\u5B9A"},t(j,{name:"note-options"},t(g,{label:"\u5FC3\u60C5",required:!0},t(L,{value:e.mood,filterable:!0,tag:!0,options:Te.map(a=>({label:a,value:a})),onUpdateValue:a=>void(e.mood=a)})),t(g,{label:"\u5929\u6C14",required:!0},t(L,{value:e.weather,filterable:!0,tag:!0,options:Me.map(a=>({label:a,value:a})),onUpdateValue:a=>void(e.weather=a)})),t(g,{label:"\u83B7\u53D6\u5F53\u524D\u5730\u5740",labelPlacement:"left"},t(F,{vertical:!0},t(ve,null,t(Pe,{onChange:(a,v)=>{e.location=a.formattedAddress,e.coordinates={longitude:v[0],latitude:v[1]}}}),t(Oe,{placeholder:e.location,onChange:(a,v)=>{e.location=a,e.coordinates=v}}),t(b,{round:!0,disabled:!e.location,onClick:()=>{e.location="",e.coordinates=null}},"\u6E05\u695A")),t(F,{vertical:!0},t("span",null,e.location),e.coordinates&&t("span",null,e.coordinates.longitude,", ",e.coordinates.latitude)))),t(g,{label:"\u8BBE\u5B9A\u5BC6\u7801?",labelAlign:"right",labelPlacement:"left"},t(k,{value:h.value,onUpdateValue:a=>{a?e.password="":e.password=null}})),h.value&&t(g,{label:"\u8F93\u5165\u5BC6\u7801"},t(fe,{disabled:!h.value,placeholder:"",type:"password",value:e.password,inputProps:{name:"note-password",autocapitalize:"off",autocomplete:"new-password"},onInput:a=>void(e.password=a)})),t(g,{label:"\u591A\u4E45\u4E4B\u540E\u516C\u5F00",labelWidth:"50%",labelAlign:"right",labelPlacement:"left"},t(me,{type:"datetime",isDateDisabled:a=>+new Date(a)-+new Date<0,placeholder:"\u9009\u62E9\u65F6\u95F4",value:e.secret,onUpdateValue:a=>{e.secret=a?new Date(a):null}},{footer:()=>{const a=new Date;return t(F,null,t(b,{round:!0,type:"default",size:"small",onClick:()=>{e.secret=x(a,{days:1})}},"\u4E00\u5929\u540E"),t(b,{round:!0,type:"default",size:"small",onClick:()=>{e.secret=x(a,{weeks:1})}},"\u4E00\u5468\u540E"),t(b,{round:!0,type:"default",size:"small",onClick:()=>{e.secret=x(a,{days:14})}},"\u534A\u4E2A\u6708\u540E"),t(b,{round:!0,type:"default",size:"small",onClick:()=>{e.secret=x(a,{months:1})}},"\u4E00\u4E2A\u6708\u540E"))}})),t(g,{label:"\u9690\u85CF",labelWidth:"50%",labelAlign:"right",labelPlacement:"left"},t(k,{value:e.hide,onUpdateValue:a=>void(e.hide=a)})),t(g,{label:"\u662F\u5426\u5B58\u5728\u56DE\u5FC6, \u65E5\u540E\u9700\u8981\u91CD\u6E29?",labelAlign:"right",labelPlacement:"left",labelWidth:"50%"},t(k,{value:e.hasMemory,onUpdateValue:a=>void(e.hasMemory=a)})),t(g,{label:"\u97F3\u4E50 (\u7F51\u6613\u4E91 ID)"},t(ge,{value:e.music.map(a=>a.id),onUpdateValue:a=>{e.music=a.map(v=>({type:"netease",id:v}))}}))))))});export{Ye as default};
