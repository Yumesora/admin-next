var e=Object.defineProperty,t=("undefined"!=typeof require&&require,(t,a,l)=>(((t,a,l)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l})(t,"symbol"!=typeof a?a+"":a,l),l));import{V as a,b as l,I as o,u as n,E as s,M as r,P as i,S as u}from"./parse-button-33f67bc7-fcbadbd.js";import{T as d}from"./TelegramPlane-b413053c-fcbadbd.js";import{aR as c,d as p,b as v,aS as m,af as f,B as b,r as g,h as w,J as y,I as h,w as x,k as C,bc as S,Q as k,F as P,b1 as j,b2 as D,bj as T,G as z,b5 as U,bd as M,ab as O,l as q,A as $,aT as A,o as V,u as I,a$ as F,b0 as N,aZ as _,bk as E,b4 as W,a_ as B,bl as R,bm as J,b3 as Y,b6 as Z}from"./vendor-c7057fff-fcbadbd.js";import{H as L}from"./rounded-button-c3c9daf1-fcbadbd.js";import"./monaco-9e291b95-fcbadbd.js";import{R as G,f as H,B as Q,a as K,d as X}from"./index-fcbadbd.js";import{u as ee}from"./use-parse-payload-b0407417-fcbadbd.js";import"./vue.runtime.esm-bundler-c90a3cb8-fcbadbd.js";var te={exports:{}};!function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t=a(e);throw null===e?t="null":"object"===t&&(t=e.constructor.name),new TypeError("Expected a string but received a ".concat(t))}},e.exports=t.default,e.exports.default=t.default}(te,te.exports);var ae={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,l.default)(e);var a=t.strictSeparator?n.test(e):o.test(e);return a&&t.strict?s(e):a};var a,l=(a=te.exports)&&a.__esModule?a:{default:a};var o=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,n=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,s=function(e){var t=e.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(t){var a=Number(t[1]),l=Number(t[2]);return a%4==0&&a%100!=0||a%400==0?l<=366:l<=365}var o=e.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),n=o[1],s=o[2],r=o[3],i=s?"0".concat(s).slice(-2):s,u=r?"0".concat(r).slice(-2):r,d=new Date("".concat(n,"-").concat(i||"01","-").concat(u||"01"));return!s||!r||d.getUTCFullYear()===n&&d.getUTCMonth()+1===s&&d.getUTCDate()===r};e.exports=t.default,e.exports.default=t.default}(ae,ae.exports);var le=c(ae.exports);const oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ne=f("g",{fill:"none"},[f("path",{d:"M5.843 4.568a8.707 8.707 0 1 1 12.314 12.314l-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.439-.431-.806-.794-1.102-1.09a8.707 8.707 0 0 1 0-12.314zm11.253 1.06A7.207 7.207 0 1 0 6.904 15.822L8.39 17.29a753.98 753.98 0 0 0 3.088 3a.75.75 0 0 0 1.043 0l3.394-3.3c.47-.461.863-.85 1.18-1.168a7.207 7.207 0 0 0 0-10.192zM12 7.999a3.002 3.002 0 1 1 0 6.004a3.002 3.002 0 0 1 0-6.003zm0 1.5a1.501 1.501 0 1 0 0 3.004a1.501 1.501 0 0 0 0-3.003z",fill:"currentColor"})],-1);var se=p({name:"Location24Regular",render:function(e,t){return v(),m("svg",oe,[ne])}});const re=p({props:{onChange:{type:Function,required:!0}},setup(e){const t=b(),a=g(!1),l=async()=>{if(navigator.geolocation)try{const t=await new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition((t=>{a.value=!0,e(t),a.value=!1}),(e=>{a.value=!1,t(e)}))})),{coords:{latitude:l,longitude:o}}=t,n=[o,l],s=await G.api.tools.geocode.location.get({longitude:o,latitude:l});e.onChange(s.regeocode,n)}catch(l){t.error("定位权限未打开")}else t.error("浏览器不支持定位")};return()=>w(y,{ghost:!0,round:!0,type:"primary",onClick:l,loading:a.value},{icon:()=>w(h,null,w(se,null)),default:()=>"定位"})}}),ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ue=f("g",{fill:"none"},[f("path",{d:"M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073l-4.901-4.9A7.25 7.25 0 1 1 10 2.75zm0 1.5a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5z",fill:"currentColor"})],-1);var de=p({name:"Search24Regular",render:function(e,t){return v(),m("svg",ie,[ue])}});const ce=p({props:{placeholder:{type:String,default:""},onChange:{type:Function,required:!0}},setup(e){const t=g(!1),a=g(!1),l=g(""),o=g([]);let n;return x((()=>l.value),C((async e=>{t.value=!0;const a=await(async e=>await G.api.tools.geocode.search.get({params:{keywords:e}}))(e);o.value=[],a.pois.forEach((e=>{const t=e.cityname+e.adname+e.address+e.name,[a,l]=e.location.split(",").map(Number);o.value.push({key:e.cityname,label:t,value:JSON.stringify([t,{latitude:l,longitude:a}])})})),t.value=!1}),400,{trailing:!0,leading:!0})),()=>w(P,null,w(y,{ghost:!0,round:!0,onClick:()=>{a.value=!0}},{icon:()=>w(h,null,w(de,null)),default:()=>"自定义"}),w(S,{show:a.value,onUpdateShow:e=>{a.value=e}},w(k,{class:"modal-card sm",bordered:!1,closable:!0,onClose:()=>{a.value=!1},title:"搜索关键字查找地点"},{default:()=>w(P,null,w(j,{labelPlacement:"top"},w(D,{label:"搜索地点"},w(T,{placeholder:e.placeholder||"",onSelect:e=>{n=e},options:o.value,loading:t.value,onUpdateValue:e=>{l.value=e},value:l.value}))),w(z,{justify:"end"},w(y,{round:!0,type:"primary",onClick:()=>{const t=JSON.parse(n);e.onChange.apply(this,t),a.value=!1},disabled:t.value},"确定")))})))}}),pe=["开心","伤心","决心","坚定","痛恨","生气","悲哀","痛苦","可怕","不快","可恶","担心","绝望","焦虑","激动"],ve=["晴","多云","雨","阴","雪","雷雨"];var me=Object.defineProperty,fe=Object.getOwnPropertyDescriptor;"undefined"!=typeof require&&require;var be,ge,we=(e,t,a,l)=>{for(var o,n=l>1?void 0:l?fe(t,a):t,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(l?o(t,a,n):o(n))||n);return l&&n&&me(t,a,n),n};class ye{constructor(){t(this,"savedTime"),t(this,"text"),t(this,"title")}}we([a({name:"isIso8601",constraints:[be],validator:{validate:function(e,t){return function(e,t){return"string"==typeof e&&le(e,t)}(e,t.constraints[0])},defaultMessage:l((function(e){return e+"$property must be a valid ISO 8601 date string"}),ge)}},ge)],ye.prototype,"savedTime",2),we([o()],ye.prototype,"text",2),we([o()],ye.prototype,"title",2);const he=p((()=>{const e=O(),t=g("写点什么呢"),a=q((()=>e.query.id));$((()=>{if(a.value)return;const e=new Date;t.value=`记录 ${e.getFullYear()} 年第 ${H(e)} 天`}));const l=A({text:"",title:"",hide:!1,hasMemory:!1,mood:"",music:[],password:null,secret:null,weather:"",location:"",coordinates:null}),o=g(),c=q((()=>!(!a.value||l.title))),p=x((()=>c.value),(e=>{if(e)return;const t=((e,t,a)=>{let l;const{storage:o,reset:s,clear:r}=n(ye,"auto-save-"+e,!1);let i=a();const u=()=>{const{text:e,title:t}=a();(e||t)&&(i.text==e&&i.title==t||(i={text:e,title:t},Object.assign(o,{savedTime:(new Date).toISOString(),text:e,title:t}),console.log("saved data: ",o)))};function d(){clearInterval(l)}return{reset:s,getPrevSaved:()=>({...U(o)}),save:u,track(){d(),u(),l=setInterval(u,t)},disposer:d,clearSaved:r}})("note-"+(a.value||"new"),3e3,(()=>({text:l.text,title:l.title})));((e,t)=>{const{disposer:a,clearSaved:l,getPrevSaved:o,reset:n,save:s,track:r}=t,i=window.dialog;(async()=>{const t=o();console.log("prev saved: ",t),!t.text&&!t.title||t.text===e.text&&t.title===e.title||requestAnimationFrame((()=>{i.info({title:"发现有未保存的内容, 是否还原?",negativeText:"不用啦",positiveText:"嗯",onPositiveClick(){Object.assign(e,{text:t.text,title:t.title})}})}))})(),r(),M((()=>{s(),a()}))})(l,t),requestAnimationFrame((()=>{p()}))}),{immediate:!0});V((async()=>{const e=a.value;if(e&&"string"==typeof e){const a=(await G.api.notes(e).get({params:{single:!0}})).data;o.value=a.nid,a.secret=a.secret?new Date(a.secret):null;const n=new Date(a.created);t.value=`记录 ${n.getFullYear()} 年第 ${H(n)} 天`,(e=>{ee(l)(e)})(a)}}));const v=g(!1),m=b(),f=I(),C=q((()=>"string"==typeof l.password)),S=async()=>{const e=()=>({...U(l),title:l.title&&l.title.trim()?l.title.trim():t.value,password:l.password&&l.password.length>0?l.password:null,secret:l.secret?(()=>{const e=new Date(l.secret);return+e-+new Date<=0?null:e})():null,music:l.music});if(a.value){if(!Z(a.value))return;const t=a.value;await G.api.notes(t).put({data:e()}),m.success("修改成功")}else await G.api.notes.post({data:e()}),m.success("发布成功");f.push({name:X.ViewNote,hash:"|publish"})};return()=>{var e;return w(K,{title:"树洞",actionsElement:w(P,null,w(i,{data:l}),w(L,{icon:w(d,null),onClick:S})),footerButtonElement:w(P,null,w("button",{onClick:()=>{v.value=!0}},w(h,null,w(u,null))))},w(r,{class:"mt-3 relative z-10",label:t.value,value:l.title,onChange:e=>{l.title=e}}),w("div",{class:"text-gray-500 py-3"},w("label",null,`${Q}/notes/${null!=(e=o.value)?e:""}`)),w(s,{loading:c.value,onChange:e=>{l.text=e},text:l.text}),w(F,{show:v.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:e=>{v.value=e}},w(N,{title:"文章设定"},w(j,{name:"note-options"},w(D,{label:"心情",required:!0},w(_,{value:l.mood,filterable:!0,tag:!0,options:pe.map((e=>({label:e,value:e}))),onUpdateValue:e=>{l.mood=e}})),w(D,{label:"天气",required:!0},w(_,{value:l.weather,filterable:!0,tag:!0,options:ve.map((e=>({label:e,value:e}))),onUpdateValue:e=>{l.weather=e}})),w(D,{label:"获取当前地址",labelPlacement:"left"},w(z,{vertical:!0},w(E,null,w(re,{onChange:(e,t)=>{l.location=e.formattedAddress,l.coordinates={longitude:t[0],latitude:t[1]}}}),w(ce,{placeholder:l.location,onChange:(e,t)=>{l.location=e,l.coordinates=t}}),w(y,{round:!0,disabled:!l.location,onClick:()=>{l.location="",l.coordinates=null}},"清楚")),w(z,{vertical:!0},w("span",null,l.location),l.coordinates&&w("span",null,l.coordinates.longitude,", ",l.coordinates.latitude)))),w(D,{label:"设定密码?",labelAlign:"right",labelPlacement:"left"},w(W,{value:C.value,onUpdateValue:e=>{l.password=e?"":null}})),C.value&&w(D,{label:"输入密码"},w(B,{disabled:!C.value,placeholder:"",type:"password",value:l.password,inputProps:{name:"note-password",autocapitalize:"off",autocomplete:"new-password"},onInput:e=>{l.password=e}})),w(D,{label:"多久之后公开",labelWidth:"50%",labelAlign:"right",labelPlacement:"left"},w(R,{type:"datetime",isDateDisabled:e=>+new Date(e)-+new Date<0,placeholder:"选择时间",value:l.secret,onUpdateValue:e=>{l.secret=e?new Date(e):null}},{footer:()=>{const e=new Date;return w(z,null,w(y,{round:!0,type:"default",size:"small",onClick:()=>{l.secret=J(e,{days:1})}},"一天后"),w(y,{round:!0,type:"default",size:"small",onClick:()=>{l.secret=J(e,{weeks:1})}},"一周后"),w(y,{round:!0,type:"default",size:"small",onClick:()=>{l.secret=J(e,{days:14})}},"半个月后"),w(y,{round:!0,type:"default",size:"small",onClick:()=>{l.secret=J(e,{months:1})}},"一个月后"))}})),w(D,{label:"隐藏",labelWidth:"50%",labelAlign:"right",labelPlacement:"left"},w(W,{value:l.hide,onUpdateValue:e=>{l.hide=e}})),w(D,{label:"是否存在回忆, 日后需要重温?",labelAlign:"right",labelPlacement:"left",labelWidth:"50%"},w(W,{value:l.hasMemory,onUpdateValue:e=>{l.hasMemory=e}})),w(D,{label:"音乐 (网易云 ID)"},w(Y,{value:l.music.map((e=>e.id)),onUpdateValue:e=>{l.music=e.map((e=>({type:"netease",id:e})))}}))))))}}));export{he as default};
//# sourceMappingURL=write-3d84638e-fcbadbd.js.map