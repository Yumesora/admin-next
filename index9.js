import{e as Q,u as j,R as F,U as R,p as Y,j as $,d as ee,A as ae,I as ue,a as le}from"./index.js";import{d as B,o as O,h as e,C as te,r as E,bA as oe,w as x,l as L,aU as D,bB as M,bC as b,b1 as m,K as I,bD as w,y as o,b2 as t,b3 as S,b4 as y,b9 as se,B as N,T as P,F as U,bz as T,aV as _,bE as ne,b5 as ie,E as re,aZ as pe,aX as de,A as h,I as ve,bb as ce,V as me,bk as be,q as fe,u as G,G as Ee,L as z,ag as Fe,bo as we,bp as V}from"./vendor.js";import{P as ye}from"./Plus.js";import{R as q}from"./relative-time.js";import{_ as H}from"./CheckCircleOutlined.js";import{H as W}from"./rounded-button.js";import{d as ge,s as Be}from"./index10.js";const he="mt-6",Ae={class:he,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"chrome-off"},v={autosize:!0,clearable:!0,style:"min-width: 300px; max-width: 100%"},ke=B(()=>{const{setHeaderButton:l}=Q();O(()=>{l(e(W,{disabled:!0,onClick:r,icon:e(H,null)}))}),te(()=>{l(null)});let d={};const a=E(X({})),c=E({});x(()=>a.value,u=>{c.value=ge(d,ie(u))},{deep:!0}),x(()=>c.value,u=>{let f=!1;T(u)?f=!1:f=!0,l(e(W,{disabled:!f,icon:e(H,null),onClick:r}))});async function r(){if(T(c.value))return;const u=Object.entries(c.value);for await(const[f,g]of u){const J=Object.fromEntries(Object.entries(g).map(([C,K])=>Array.isArray(K)?[C,a.value[f][C]]:[C,K]));await F.api.options(f).patch({data:J})}await p(),message.success("\u4FEE\u6539\u6210\u529F")}const p=async()=>{let u=await F.api.options.get();u=X(_(u,["ok"])),d=ne(u),a.value=u};O(()=>{p()});const n=E(["website"]),A=j(R),s=L(()=>A.viewport.value.mobile?1:2),i=D(Ae);return x(()=>A.viewport.value.mobile,u=>{u?(i.labelPlacement="top",i.labelAlign="left"):(i.labelPlacement="left",i.labelAlign="right")},{immediate:!0}),()=>e(U,null,e("div",{class:"pt-4"}),e(M,{accordion:!0,displayDirective:"if",expandedNames:n.value,onUpdateExpandedNames:u=>{n.value=u}},e(b,{title:"\u7F51\u7AD9\u8BBE\u7F6E",name:"website"},e(m,{...i},e(I,{cols:s.value,xGap:12},e(w,{span:1,label:"\u524D\u7AEF\u5730\u5740"},e(o,{value:a.value.url.webUrl,onInput:u=>void(a.value.url.webUrl=u)})),e(w,{span:1,label:"API \u5730\u5740"},e(o,{value:a.value.url.serverUrl,onInput:u=>void(a.value.url.serverUrl=u)})),e(w,{span:1,label:"\u540E\u53F0\u5730\u5740"},e(o,{value:a.value.url.adminUrl,onInput:u=>void(a.value.url.adminUrl=u)})),e(w,{span:1,label:"Gateway \u5730\u5740"},e(o,{value:a.value.url.wsUrl,onInput:u=>void(a.value.url.wsUrl=u)}))))),e(b,{title:"SEO \u4F18\u5316",name:"seo"},e(m,{...i},e(t,{label:"\u7F51\u7AD9\u6807\u9898"},e(o,{...v,value:a.value.seo.title,onInput:u=>void(a.value.seo.title=u)})),e(t,{label:"\u7F51\u7AD9\u63CF\u8FF0"},e(o,{...v,value:a.value.seo.description,onInput:u=>void(a.value.seo.description=u)})),e(t,{label:"\u5173\u952E\u5B57"},e(S,{round:!0,type:"primary",value:a.value.seo.keywords,onChange:u=>void(a.value.seo.keywords=u)})))),e(b,{title:"\u540E\u53F0\u9644\u52A0\u8BBE\u7F6E",name:"adminExtra"},e(m,{...i},e(t,{label:"\u5F00\u542F\u540E\u53F0\u7BA1\u7406\u53CD\u4EE3"},e(y,{value:a.value.adminExtra.enableAdminProxy,onUpdateValue:u=>void(a.value.adminExtra.enableAdminProxy=u)})),e(t,{label:"\u4E2D\u540E\u53F0\u6807\u9898"},e(o,{...v,value:a.value.adminExtra.title,onUpdateValue:u=>void(a.value.adminExtra.title=u)})),e(t,{label:"\u767B\u5F55\u9875\u9762\u80CC\u666F"},e(o,{...v,value:a.value.adminExtra.background,inputProps:{autocomplete:"off"},onUpdateValue:u=>void(a.value.adminExtra.background=u)})),e(t,{label:"\u9AD8\u5FB7\u67E5\u8BE2 API Key"},e(o,{...v,value:a.value.adminExtra.gaodemapKey,type:"password",showPasswordToggle:!0,clearable:!0,inputProps:{autocomplete:"off"},onUpdateValue:u=>{a.value.adminExtra.gaodemapKey=u}})))),e(b,{title:"\u8BC4\u8BBA\u8BBE\u7F6E",name:"comment"},e(m,{...i},e(t,{label:"\u53CD\u5783\u573E\u8BC4\u8BBA"},e(y,{value:a.value.commentOptions.antiSpam,onUpdateValue:u=>void(a.value.commentOptions.antiSpam=u)})),e(t,{label:"\u81EA\u5B9A\u4E49\u5C4F\u853D\u5173\u952E\u8BCD"},e(S,{disabled:!a.value.commentOptions.antiSpam,value:a.value.commentOptions.spamKeywords,onUpdateValue:u=>void(a.value.commentOptions.spamKeywords=u),type:"primary"})),e(t,{label:"\u81EA\u5B9A\u4E49\u5C4F\u853D IP"},e(S,{disabled:!a.value.commentOptions.antiSpam,value:a.value.commentOptions.blockIps,onUpdateValue:u=>void(a.value.commentOptions.blockIps=u),type:"primary"})),e(t,{label:"\u7981\u6B62\u975E\u4E2D\u6587\u8BC4\u8BBA"},e(y,{value:a.value.commentOptions.disableNoChinese,onUpdateValue:u=>void(a.value.commentOptions.disableNoChinese=u)})))),e(b,{title:"\u90AE\u4EF6\u901A\u77E5\u8BBE\u7F6E",name:"mail"},e(m,{...i},e(t,{label:"\u5F00\u542F\u8BC4\u8BBA\u90AE\u7BB1\u63D0\u9192"},e(y,{value:a.value.mailOptions.enable,onUpdateValue:u=>void(a.value.mailOptions.enable=u)})),e(I,{cols:s.value,xGap:12},e(w,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1 host"},e(o,{value:a.value.mailOptions.options?.host||"",onInput:u=>{a.value.mailOptions.options||(a.value.mailOptions.options={}),a.value.mailOptions.options.host=u}})),e(w,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u7AEF\u53E3"},e(se,{value:a.value.mailOptions.options?.port||465,onChange:u=>{a.value.mailOptions.options||(a.value.mailOptions.options={}),a.value.mailOptions.options.port=u??465}})),e(w,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u5730\u5740"},e(o,{value:a.value.mailOptions.user,onInput:u=>void(a.value.mailOptions.user=u)})),e(w,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u5BC6\u7801"},e(o,{type:"password",showPasswordToggle:!0,inputProps:{name:"email-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},value:a.value.mailOptions.pass,onInput:u=>void(a.value.mailOptions.pass=u)}))))),e(b,{name:"backup",title:"\u5907\u4EFD"},e(m,{...i},e(t,{label:"\u5F00\u542F\u81EA\u52A8\u5907\u4EFD"},e(N,{vertical:!0},e(y,{value:a.value.backupOptions.enable,onUpdateValue:u=>void(a.value.backupOptions.enable=u)}),e(P,{class:"text-xs",depth:3},"\u586B\u5199\u4EE5\u4E0B COS \u4FE1\u606F, \u5C06\u540C\u65F6\u4E0A\u4F20\u5907\u4EFD\u5230 COS"))),e(t,{label:"\u5730\u57DF Region"},e(o,{...v,value:a.value.backupOptions.region,onInput:u=>void(a.value.backupOptions.region=u)})),e(t,{label:"SecretId"},e(o,{...v,value:a.value.backupOptions.secretId,onInput:u=>void(a.value.backupOptions.secretId=u)})),e(t,{label:"SecretKey"},e(o,{...v,type:"password",inputProps:{name:"secret-key-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},showPasswordToggle:!0,value:a.value.backupOptions.secretKey,onInput:u=>void(a.value.backupOptions.secretKey=u)})))),e(b,{name:"baidu_push",title:"\u767E\u5EA6\u63A8\u9001"},e(m,{...i},e(t,{label:"\u5F00\u542F\u63A8\u9001"},e(y,{value:a.value.baiduSearchOptions.enable,onUpdateValue:u=>void(a.value.baiduSearchOptions.enable=u)})),e(t,{label:"Token",path:"baidu_push"},e(o,{...v,showPasswordToggle:!0,type:"password",inputProps:{name:"baidu-push-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},disabled:!a.value.baiduSearchOptions.enable,value:a.value.baiduSearchOptions.token,onUpdateValue:u=>void(a.value.baiduSearchOptions.token=u)})))),e(b,{name:"algolia",title:"Algolia Search"},e(m,{...i},e(t,{label:"\u5F00\u542F Algolia Search"},e(y,{value:a.value.algoliaSearchOptions.enable,onUpdateValue:u=>void(a.value.algoliaSearchOptions.enable=u)})),e(t,{label:"AppId"},e(o,{...v,disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.appId,onInput:u=>void(a.value.algoliaSearchOptions.appId=u)})),e(t,{label:"apiKey"},e(o,{...v,type:"password",disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.apiKey,onInput:u=>void(a.value.algoliaSearchOptions.apiKey=u)})),e(t,{label:"indexName"},e(o,{...v,disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.indexName,onInput:u=>void(a.value.algoliaSearchOptions.indexName=u)}))))))});function X(l){return oe({seo:{title:"",description:"",keywords:[]},url:{wsUrl:"",adminUrl:"",serverUrl:"",webUrl:""},mailOptions:{user:"",pass:"",options:{host:"",port:465},enable:!1},commentOptions:{antiSpam:!1,spamKeywords:[],blockIps:[],disableNoChinese:!1},backupOptions:{enable:!1,secretId:"",secretKey:"",bucket:"",region:""},baiduSearchOptions:{enable:!1,token:""},algoliaSearchOptions:{enable:!1},adminExtra:{enableAdminProxy:!1,background:"",gaodemapKey:"",title:"\u9759\u304B\u306A\u68EE"}},l)}const xe=B(()=>()=>e(U,null,e("div",{class:"pt-4"}),e(M,{defaultExpandedNames:["reset"],displayDirective:"if"},e(b,{name:"reset",title:"\u4FEE\u6539\u5BC6\u7801"},e(Oe,null)),e(b,{name:"token",title:"API Token"},e(Ce,null))))),Ce=B(()=>{const l=E([]),d=()=>({name:"",expired:!1,expiredTime:new Date}),a=D(d()),c=async()=>{const{data:s}=await F.api.auth.token.get();l.value=s};re(()=>{c()});const r=E(!1),p=async()=>{const s={name:a.name,expired:a.expired?a.expiredTime.toISOString():void 0},i=await F.api.auth.token.post({data:s});await navigator.clipboard.writeText(i.token),r.value=!1;const u=d();for(const g in u)a[g]=u[g];message.success("\u751F\u6210\u6210\u529F, Token \u5DF2\u590D\u5236, "+i.token),await c();const f=l.value.findIndex(g=>g.name===s.name);f!==-1&&(l.value[f].token=i.token)},n=async s=>{await F.api.auth.token.delete({params:{id:s}}),message.success("\u5220\u9664\u6210\u529F");const i=l.value.findIndex(u=>u.id===s);i!=-1&&l.value.splice(i,1)},A=j(R);return()=>e(fe,{class:"!overflow-visible"},e(ce,{show:r.value,onUpdateShow:s=>void(r.value=s)},e(me,{bordered:!1,title:"\u521B\u5EFA Token",class:"max-w-full w-[500px]"},e(m,null,e(t,{label:"\u540D\u79F0",required:!0},e(o,{value:a.name,onInput:s=>void(a.name=s)})),e(t,{label:"\u662F\u5426\u8FC7\u671F"},e(y,{value:a.expired,onUpdateValue:s=>void(a.expired=s)})),e(t,{label:"\u8FC7\u671F\u65F6\u95F4"},e(be,{disabled:!a.expired,value:a.expiredTime,type:"datetime",onUpdateValue:s=>void(a.expiredTime=new Date(s))}))),e(N,null,e(h,{round:!0,onClick:()=>void(r.value=!1)},"\u53D6\u6D88"),e(h,{round:!0,type:"primary",onClick:p},"\u786E\u5B9A")))),e(h,{class:"absolute right-0 top-[-3rem]",round:!0,type:"primary",onClick:()=>{r.value=!0}},e(ve,null,e(ye,null)),e("span",{class:"ml-2"},"\u65B0\u589E")),e(pe,{scrollX:Math.max(800,A.contentWidth.value-A.contentInsetWidth.value),remote:!0,bordered:!1,data:l.value,columns:[{key:"name",title:"\u540D\u79F0"},{key:"token",title:"Token",render({token:s}){return s??"*".repeat(40)}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created",render({created:s}){return e(q,{time:s})}},{title:"\u8FC7\u671F\u65F6\u95F4",key:"expired",render({expired:s}){return Y(s,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")}},{title:"\u64CD\u4F5C",key:"id",render({id:s,name:i}){return e(N,null,e(de,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{n(s)}},{trigger:()=>e(h,{text:!0,type:"error"},"\u5220\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"}},'\u786E\u5B9A\u8981\u5220\u9664 Token "',i,'"?')}))}}]}))}),Oe=B(()=>{const l=D({password:"",reenteredPassword:""}),d=E(),a=G(),c=async()=>{!d.value||d.value.validate(async p=>{p?console.log(p):(await F.api.master.patch({data:{password:l.password}}),message.success("\u66F4\u6539\u6210\u529F"),$(),a.push({name:ee.Login}))})};function r(p,n){return console.log(p),n===l.password}return()=>e(m,{class:"max-w-[300px]",ref:d,model:l,rules:{password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],reenteredPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]},{validator:r,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:["blur","password-input"]}]}},e(t,{label:"\u65B0\u5BC6\u7801",required:!0,path:"password"},e(o,{...v,value:l.password,onInput:p=>void(l.password=p),type:"password"})),e(t,{label:"\u91CD\u590D\u5BC6\u7801",required:!0,path:"reenteredPassword"},e(o,{...v,value:l.reenteredPassword,onInput:p=>void(l.reenteredPassword=p),type:"password"})),e("div",{class:"w-full text-right"},e(h,{onClick:c,type:"primary",round:!0},"\u4FDD\u5B58")))}),De="_avatar_9leer_3";var Z={"tab-user":"_tab-user_9leer_1",avatar:De};const Ie=B(()=>{const l=E({});let d;async function a(){const n=await F.api.master.get();l.value=_(n,["ok"]),d={...n}}O(async()=>{await a()});const c=Ee(),r=L(()=>Be(d,l.value)),p=async()=>{await F.api.master.patch({data:r.value}),c.success("\u4FDD\u5B58\u6210\u529F~"),await a()};return()=>e(U,null,e(I,{cols:"1 400:1 600:2",class:Z["tab-user"],xGap:20,yGap:20},e(z,null,e(m,{class:"flex flex-col justify-center items-center "},e(t,null,e("div",{class:Z.avatar},e(ae,{src:l.value.avatar,size:200}))),e(t,{label:"\u4E0A\u6B21\u767B\u9646\u65F6\u95F4",class:"!mt-4"},e("div",{class:"text-center w-full"},e(P,null,l.value.lastLoginTime?e(q,{time:l.value.lastLoginTime}):"N/A"))),e(t,{label:"\u4E0A\u6B21\u767B\u9646\u5730\u5740"},e("div",{class:"text-center w-full"},l.value.lastLoginIp?e(ue,{trigger:"hover",ip:l.value.lastLoginIp,triggerEl:e(P,{class:"cursor-pointer"},l.value.lastLoginIp)}):"N/A")),e(t,null,e(h,{round:!0,class:"-mt-14",type:"primary",onClick:p,disabled:T(r.value)},"\u4FDD\u5B58")))),e(z,null,e(m,null,e(t,{label:"\u4E3B\u4EBA\u540D (username)"},e(o,{value:l.value.username,onInput:n=>{l.value.username=n}})),e(t,{label:"\u4E3B\u4EBA\u6635\u79F0 (name)"},e(o,{value:l.value.name,onInput:n=>{l.value.name=n}})),e(t,{label:"\u4E3B\u4EBA\u90AE\u7BB1 (mail)"},e(o,{value:l.value.mail,onInput:n=>{l.value.mail=n}})),e(t,{label:"\u4E2A\u4EBA\u9996\u9875"},e(o,{value:l.value.url,onInput:n=>{l.value.url=n}})),e(t,{label:"\u5934\u50CF"},e(o,{value:l.value.avatar,onInput:n=>{l.value.avatar=n}})),e(t,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(o,{value:l.value.introduce,onInput:n=>{l.value.introduce=n}}))))))});var k;(function(l){l.User="user",l.System="system",l.Security="security"})(k||(k={}));var je=B({setup(){const l=Fe(),d=G(),a=E(l.params.type);x(()=>l.params.type,r=>{!r||(a.value=r)});const c=E(null);return()=>e(le,{actionsElement:c.value},e(we,{value:a.value,onUpdateValue:r=>{d.replace({...l,params:{...l.params,type:r}})}},e(V,{tab:"\u7528\u6237",name:k.User},e(Ie,null)),e(V,{tab:"\u7CFB\u7EDF",name:k.System},e(ke,null)),e(V,{tab:"\u5B89\u5168",name:k.Security},e(xe,null))))}});export{je as default};
