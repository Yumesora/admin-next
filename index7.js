import{P as $e}from"./Plus.js";import{H as Me}from"./rounded-button.js";import{T as Be}from"./index3.js";import{u as Fe}from"./use-table.js";import{R as C,d as Ie,a as Ae}from"./index.js";import{bQ as S,by as re,bR as Te,bS as Ee,bT as Ne,d as de,ag as Ve,u as Ke,r as I,G as De,w as fe,E as ke,h as l,bb as ze,V as Re,b1 as qe,b2 as A,y as D,a_ as He,B as se,A as T,o as Ue,bM as ue,aX as Le,bK as We,bL as ve,Z as Ge,T as Qe,F as Xe,b5 as Ze}from"./vendor.js";import{v as E}from"./index4.js";var N;(function(e){e[e.Friend=0]="Friend",e[e.Collection=1]="Collection"})(N||(N={}));var h;(function(e){e[e.Pass=0]="Pass",e[e.Audit=1]="Audit"})(h||(h={}));var ye={},me={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.getSlot=void 0;function Je(e,t="default",o=[]){const u=e.$slots[t];return u===void 0?o:u()}k.getSlot=Je;var z={};Object.defineProperty(z,"__esModule",{value:!0});z.getVNodeChildren=void 0;function Ye(e,t="default",o=[]){const{children:n}=e;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const u=n[t];if(typeof u=="function")return u()}return o}z.getVNodeChildren=Ye;var R={};Object.defineProperty(R,"__esModule",{value:!0});R.keep=void 0;function xe(e,t=[],o){const n={};return t.forEach(u=>{n[u]=e[u]}),Object.assign(n,o)}R.keep=xe;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.omit=void 0;function et(e,t=[],o){const n={};return Object.getOwnPropertyNames(e).forEach(y=>{t.includes(y)||(n[y]=e[y])}),Object.assign(n,o)}q.omit=et;var V={};Object.defineProperty(V,"__esModule",{value:!0});V.flatten=void 0;const ae=E.exports;function ie(e,t=!0,o=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&o.push((0,ae.createTextVNode)(String(n)));return}if(Array.isArray(n)){ie(n,t,o);return}if(n.type===ae.Fragment){if(n.children===null)return;Array.isArray(n.children)&&ie(n.children,t,o)}else n.type!==ae.Comment&&o.push(n)}}),o}V.flatten=ie;var H={};Object.defineProperty(H,"__esModule",{value:!0});H.call=void 0;function be(e,...t){if(Array.isArray(e))e.forEach(o=>be(o,...t));else return e(...t)}H.call=be;var U={};Object.defineProperty(U,"__esModule",{value:!0});U.keysOf=void 0;function tt(e){return Object.keys(e)}U.keysOf=tt;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.render=void 0;const ge=E.exports,nt=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?(0,ge.createTextVNode)(e):typeof e=="number"?(0,ge.createTextVNode)(String(e)):null;L.render=nt;var W={},oe={},w={};Object.defineProperty(w,"__esModule",{value:!0});w.throwError=w.warn=w.warnOnce=void 0;const _e=new Set;function rt(e,t){const o=`[naive/${e}]: ${t}`;_e.has(o)||(_e.add(o),console.error(o))}w.warnOnce=rt;function ut(e,t){console.error(`[naive/${e}]: ${t}`)}w.warn=ut;function at(e,t){throw new Error(`[naive/${e}]: ${t}`)}w.throwError=at;var $={};Object.defineProperty($,"__esModule",{value:!0});$.smallerSize=$.largerSize=void 0;function it(e){switch(e){case"tiny":return"small";case"small":return"medium";case"medium":return"large";case"large":return"huge"}}$.largerSize=it;function ot(e){switch(e){case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}}$.smallerSize=ot;var G={};Object.defineProperty(G,"__esModule",{value:!0});G.getTitleAttribute=void 0;function lt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}G.getTitleAttribute=lt;var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.hasWindow=void 0;Q.hasWindow=typeof window!="undefined";(function(e){var t=S&&S.__createBinding||(Object.create?function(f,m,c,a){a===void 0&&(a=c),Object.defineProperty(f,a,{enumerable:!0,get:function(){return m[c]}})}:function(f,m,c,a){a===void 0&&(a=c),f[a]=m[c]}),o=S&&S.__exportStar||function(f,m){for(var c in f)c!=="default"&&!Object.prototype.hasOwnProperty.call(m,c)&&t(m,f,c)};Object.defineProperty(e,"__esModule",{value:!0}),e.getTitleAttribute=e.largerSize=e.smallerSize=e.throwError=e.warnOnce=e.warn=void 0;var n=w;Object.defineProperty(e,"warn",{enumerable:!0,get:function(){return n.warn}}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return n.warnOnce}}),Object.defineProperty(e,"throwError",{enumerable:!0,get:function(){return n.throwError}});var u=$;Object.defineProperty(e,"smallerSize",{enumerable:!0,get:function(){return u.smallerSize}}),Object.defineProperty(e,"largerSize",{enumerable:!0,get:function(){return u.largerSize}});var y=G;Object.defineProperty(e,"getTitleAttribute",{enumerable:!0,get:function(){return y.getTitleAttribute}}),o(Q,e)})(oe);Object.defineProperty(W,"__esModule",{value:!0});W.getFirstSlotVNode=void 0;const ct=V,je=oe;function dt(e,t="default",o=void 0){const n=e[t];if(!n)return(0,je.warn)("getFirstSlotVNode",`slot[${t}] is empty`),null;const u=(0,ct.flatten)(n(o));return u.length===1?u[0]:((0,je.warn)("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}W.getFirstSlotVNode=dt;var X={};Object.defineProperty(X,"__esModule",{value:!0});X.createDataKey=void 0;function ft(e){return typeof e=="string"?`s-${e}`:`n-${e}`}X.createDataKey=ft;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.createRefSetter=void 0;function st(e){return t=>{t?e.value=t.$el:e.value=null}}Z.createRefSetter=st;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createRefSetter=e.createDataKey=e.getFirstSlotVNode=e.render=e.keysOf=e.call=e.flatten=e.omit=e.keep=e.getVNodeChildren=e.getSlot=void 0;var t=k;Object.defineProperty(e,"getSlot",{enumerable:!0,get:function(){return t.getSlot}});var o=z;Object.defineProperty(e,"getVNodeChildren",{enumerable:!0,get:function(){return o.getVNodeChildren}});var n=R;Object.defineProperty(e,"keep",{enumerable:!0,get:function(){return n.keep}});var u=q;Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return u.omit}});var y=V;Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return y.flatten}});var f=H;Object.defineProperty(e,"call",{enumerable:!0,get:function(){return f.call}});var m=U;Object.defineProperty(e,"keysOf",{enumerable:!0,get:function(){return m.keysOf}});var c=L;Object.defineProperty(e,"render",{enumerable:!0,get:function(){return c.render}});var a=W;Object.defineProperty(e,"getFirstSlotVNode",{enumerable:!0,get:function(){return a.getFirstSlotVNode}});var d=X;Object.defineProperty(e,"createDataKey",{enumerable:!0,get:function(){return d.createDataKey}});var i=Z;Object.defineProperty(e,"createRefSetter",{enumerable:!0,get:function(){return i.createRefSetter}})})(me);var pe={},le={};Object.defineProperty(le,"__esModule",{value:!0});const vt=/^(\d|\.)+$/,Oe=/(\d|\.)+/;function yt(e,{c:t=1,offset:o=0,attachPx:n=!0}={}){if(typeof e=="number"){const u=(e+o)*t;return u===0?"0":`${u}px`}else if(typeof e=="string")if(vt.test(e)){const u=(Number(e)+o)*t;return n?u===0?"0":`${u}px`:`${u}`}else{const u=Oe.exec(e);return u?e.replace(Oe,String((Number(u[0])+o)*t)):e}return e}le.default=yt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.formatLength=void 0;var t=le;Object.defineProperty(e,"formatLength",{enumerable:!0,get:function(){return t.default}})})(pe);var Pe={},mt=re(Te),bt=re(Ee),J={};Object.defineProperty(J,"__esModule",{value:!0});J.createKey=void 0;function Se(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,o=>o.toUpperCase()))}J.createKey=Se;Se("abc","def");(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createKey=e.find=e.namespace=e.prefix=e.asModal=e.insidePopover=e.insideModal=e.insideFormItem=e.cCB=e.cNotM=e.cM=e.cE=e.cB=e.c=void 0;const t=mt,o=bt,n="n";e.namespace=n;const u=`.${n}-`;e.prefix=u;const y="__",f="--",m=(0,t.default)(),c=(0,o.default)({blockPrefix:u,elementPrefix:y,modifierPrefix:f});m.use(c);const{c:a,find:d}=m;e.c=a,e.find=d;const{cB:i,cE:s,cM:_,cNotM:j}=c;e.cB=i,e.cE=s,e.cM=_,e.cNotM=j;function r(O,P){return O===null?P:a([({props:{bPrefix:ne}})=>a(`${ne||u}form-item`,[a(`${ne||u}form-item-blank`,[a(`&${ne||u}form-item-blank${f}${O}`,[P])])])])}e.insideFormItem=r;function g(O){return a(({props:{bPrefix:P}})=>`${P||u}modal, ${P||u}drawer`,[O])}e.insideModal=g;function v(O){return a(({props:{bPrefix:P}})=>`${P||u}popover:not(${P||u}tooltip)`,[O])}e.insidePopover=v;function b(O){return a(({props:{bPrefix:P}})=>`&${P||u}modal`,O)}e.asModal=b;const p=(...O)=>a(">",[i(...O)]);e.cCB=p;var K=J;Object.defineProperty(e,"createKey",{enumerable:!0,get:function(){return K.createKey}})})(Pe);var he={},Y={},gt=re(Ne),M={};Object.defineProperty(M,"__esModule",{value:!0});M.modalInjectionKey=M.modalBodyInjectionKey=void 0;M.modalBodyInjectionKey=Symbol("modalBody");M.modalInjectionKey=Symbol("modal");var B={};Object.defineProperty(B,"__esModule",{value:!0});B.drawerInjectionKey=B.drawerBodyInjectionKey=void 0;B.drawerBodyInjectionKey=Symbol("drawerBody");B.drawerInjectionKey=Symbol("drawer");var x={};Object.defineProperty(x,"__esModule",{value:!0});x.popoverBodyInjectionKey=void 0;x.popoverBodyInjectionKey=Symbol("popoverBodyInjection");var F={};Object.defineProperty(F,"__esModule",{value:!0});F.internalSelectionMenuBodyInjectionKey=F.internalSelectionMenuInjectionKey=void 0;F.internalSelectionMenuInjectionKey=Symbol("internal-select-menu");F.internalSelectionMenuBodyInjectionKey=Symbol("internal-select-menu-body");Object.defineProperty(Y,"__esModule",{value:!0});Y.useAdjustedTo=void 0;const _t=gt,ee=E.exports,jt=M,pt=B,Ot=x,Pt=F,we="__disabled__";function ce(e){const t=(0,ee.inject)(jt.modalBodyInjectionKey,null),o=(0,ee.inject)(pt.drawerBodyInjectionKey,null),n=(0,ee.inject)(Ot.popoverBodyInjectionKey,null),u=(0,ee.inject)(Pt.internalSelectionMenuBodyInjectionKey,null);return(0,_t.useMemo)(()=>{var y;const{to:f}=e;return f!==void 0?f===!1?we:f===!0?"body":f:(t==null?void 0:t.value)?(y=t.value.$el)!==null&&y!==void 0?y:t.value:(o==null?void 0:o.value)?o.value:(n==null?void 0:n.value)?n.value:(u==null?void 0:u.value)?u.value:f??"body"})}Y.useAdjustedTo=ce;ce.tdkey=we;ce.propTo={type:[String,Object,Boolean],default:void 0};var te={};Object.defineProperty(te,"__esModule",{value:!0});te.useHoudini=void 0;const St=E.exports;let Ce=!1;function ht(){(0,St.onBeforeMount)(()=>{var e;Ce||(Ce=!0,((e=window==null?void 0:window.CSS)===null||e===void 0?void 0:e.registerProperty)&&(CSS.registerProperty({name:"--color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})))})}te.useHoudini=ht;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useHoudini=e.useAdjustedTo=e.useDeferredTrue=e.useInjectionElementCollection=e.useInjectionCollection=e.useInjectionInstanceCollection=void 0;const t=E.exports;function o(c,a,d){var i;const s=(0,t.inject)(c,null);if(s===null)return;const _=(i=(0,t.getCurrentInstance)())===null||i===void 0?void 0:i.proxy;(0,t.watch)(d,j),j(d.value),(0,t.onBeforeUnmount)(()=>{j(void 0,d.value)});function j(v,b){const p=s[a];b!==void 0&&r(p,b),v!==void 0&&g(p,v)}function r(v,b){v[b]||(v[b]=[]),v[b].splice(v[b].findIndex(p=>p===_),1)}function g(v,b){v[b]||(v[b]=[]),~v[b].findIndex(p=>p===_)||v[b].push(_)}}e.useInjectionInstanceCollection=o;function n(c,a,d){const i=(0,t.inject)(c,null);i!==null&&(a in i||(i[a]=[]),i[a].push(d.value),(0,t.watch)(d,(s,_)=>{const j=i[a],r=j.findIndex(g=>g===_);~r&&j.splice(r,1),j.push(s)}),(0,t.onBeforeUnmount)(()=>{const s=i[a],_=s.findIndex(j=>j===d.value);~_&&s.splice(_,1)}))}e.useInjectionCollection=n;function u(c,a,d){const i=(0,t.inject)(c,null);i!==null&&(a in i||(i[a]=[]),(0,t.onMounted)(()=>{const s=d();!s||i[a].push(s)}),(0,t.onBeforeUnmount)(()=>{const s=i[a],_=d(),j=s.findIndex(r=>r===_);~j&&s.splice(j,1)}))}e.useInjectionElementCollection=u;function y(c,a,d){if(!a)return c;const i=(0,t.ref)(c.value);let s=null;return(0,t.watch)(c,_=>{s!==null&&window.clearTimeout(s),_===!0?d&&!d.value?i.value=!0:s=window.setTimeout(()=>{i.value=!0},a):i.value=!1}),i}e.useDeferredTrue=y;var f=Y;Object.defineProperty(e,"useAdjustedTo",{enumerable:!0,get:function(){return f.useAdjustedTo}});var m=te;Object.defineProperty(e,"useHoudini",{enumerable:!0,get:function(){return m.useHoudini}})})(he);(function(e){var t=S&&S.__createBinding||(Object.create?function(m,c,a,d){d===void 0&&(d=a),Object.defineProperty(m,d,{enumerable:!0,get:function(){return c[a]}})}:function(m,c,a,d){d===void 0&&(d=a),m[d]=c[a]}),o=S&&S.__exportStar||function(m,c){for(var a in m)a!=="default"&&!Object.prototype.hasOwnProperty.call(c,a)&&t(c,m,a)};Object.defineProperty(e,"__esModule",{value:!0}),e.createKey=e.formatLength=e.getTitleAttribute=e.largerSize=e.smallerSize=e.throwError=e.warnOnce=e.warn=e.createRefSetter=e.createDataKey=e.getFirstSlotVNode=e.render=e.keysOf=e.getVNodeChildren=e.getSlot=e.flatten=e.omit=e.keep=e.call=void 0;var n=me;Object.defineProperty(e,"call",{enumerable:!0,get:function(){return n.call}}),Object.defineProperty(e,"keep",{enumerable:!0,get:function(){return n.keep}}),Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return n.omit}}),Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return n.flatten}}),Object.defineProperty(e,"getSlot",{enumerable:!0,get:function(){return n.getSlot}}),Object.defineProperty(e,"getVNodeChildren",{enumerable:!0,get:function(){return n.getVNodeChildren}}),Object.defineProperty(e,"keysOf",{enumerable:!0,get:function(){return n.keysOf}}),Object.defineProperty(e,"render",{enumerable:!0,get:function(){return n.render}}),Object.defineProperty(e,"getFirstSlotVNode",{enumerable:!0,get:function(){return n.getFirstSlotVNode}}),Object.defineProperty(e,"createDataKey",{enumerable:!0,get:function(){return n.createDataKey}}),Object.defineProperty(e,"createRefSetter",{enumerable:!0,get:function(){return n.createRefSetter}});var u=oe;Object.defineProperty(e,"warn",{enumerable:!0,get:function(){return u.warn}}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return u.warnOnce}}),Object.defineProperty(e,"throwError",{enumerable:!0,get:function(){return u.throwError}}),Object.defineProperty(e,"smallerSize",{enumerable:!0,get:function(){return u.smallerSize}}),Object.defineProperty(e,"largerSize",{enumerable:!0,get:function(){return u.largerSize}}),Object.defineProperty(e,"getTitleAttribute",{enumerable:!0,get:function(){return u.getTitleAttribute}});var y=pe;Object.defineProperty(e,"formatLength",{enumerable:!0,get:function(){return y.formatLength}});var f=Pe;Object.defineProperty(e,"createKey",{enumerable:!0,get:function(){return f.createKey}}),o(he,e)})(ye);var At=de({setup(){const e=Ve(),t=Ke(),o=I(e.query.state??h.Pass),{data:n,checkedRowKeys:u,fetchDataFn:y,pager:f,loading:m}=Fe((r,g)=>async(v=e.query.page||1,b=50,p=e.query.state??h.Pass)=>{const K=await C.api.links.get({params:{page:v,size:b,state:p|0}});r.value=K.data,g.value=K.pagination}),c=De(),a=()=>({avatar:"",name:"",type:N.Friend,url:"",id:null,description:""}),d=I(!1),i=I(a());fe(()=>e.query.state,async r=>{await y()}),fe(()=>e.query.page,async r=>{await y()},{immediate:!0});const s=I(0),_=async()=>{const r=await C.api.links.state.get();s.value=r.audit};ke(()=>{_()});const j=async()=>{const r=i.value.id;if(i.value.id,r){await C.api.links(r).put({data:ye.omit(i.value,["id"])});const g=n.value.findIndex(v=>v.id==r);n.value[g]={...n.value[g],...Ze(i.value)}}else{const{data:g}=await C.api.links.post({data:{...i.value}});n.value.unshift(g)}c.success("\u64CD\u4F5C\u6210\u529F"),i.value=a(),d.value=!1};return()=>l(Ae,{actionsElement:l(Xe,null,l(Me,{icon:l($e,null),variant:"primary",onClick:()=>{i.value=a(),d.value=!0}}))},l(We,{size:"medium",value:o.value,onUpdateValue:r=>{o.value=r,t.replace({name:Ie.Friend,query:{state:r}})}},l(ve,{name:h.Pass,tab:"\u670B\u53CB\u4EEC"},l("div",{class:""})),l(ve,{name:h.Audit,tab:()=>l(Ge,{value:s.value,processing:!0},l(Qe,null,"\u5F85\u5BA1\u6838"))},l("div",{class:""}))),l(Be,{loading:m.value,data:n,nTableProps:{maxHeight:"calc(100vh - 22rem)"},columns:[{title:"\u5934\u50CF",key:"avatar",render(r){const g=de(()=>{const v=I(!r.avatar);return Ue(()=>{if(r.avatar){const b=new Image;b.src=r.avatar,b.onload=p=>{v.value=!0}}}),()=>r.avatar?v.value?l(ue,{src:r.avatar,round:!0}):l(ue,{round:!0},r.name.charAt(0)):l(ue,{round:!0},r.name.charAt(0))});return l(g,null)}},{title:"\u540D\u79F0",key:"name"},{title:"\u7C7B\u578B",key:"type",render(r){return["\u670B\u53CB","\u6536\u85CF"][r.type|0]}},{title:"\u7F51\u5740",key:"url",render(r){return l("a",{target:"_blank",href:r.url,rel:"noreferrer"},r.url)}},{title:"\u63CF\u8FF0",key:"description"},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(r){return l(se,{wrap:!1},r.state==h.Audit&&l(T,{text:!0,size:"tiny",type:"success",onClick:async()=>{await C.api.links.audit(r.id).patch(),c.success("\u901A\u8FC7\u4E86\u6765\u81EA"+r.name+"\u7684\u53CB\u94FE\u9080\u8BF7");const g=n.value.findIndex(v=>v.id==r.id);n.value.splice(g,1),s.value--}},"\u901A\u8FC7"),l(T,{text:!0,size:"tiny",type:"info",onClick:g=>{d.value=!0,i.value={...r}}},"\u7F16\u8F91"),l(Le,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await C.api.links(r.id).delete(),c.success("\u5220\u9664\u6210\u529F"),await y(f.value.currentPage),r.state==h.Audit&&s.value--}},{trigger:()=>l(T,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>l("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664\u53CB\u94FE ",r.name," ?")}))}}],onFetchData:y,pager:f}),l(ze,{show:d.value,onUpdateShow:r=>void(d.value=r)},l(Re,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:i.value.id?"\u7F16\u8F91: "+i.value.name:"\u65B0\u589E"},l(qe,null,l(A,{label:"\u540D\u5B57",required:!0},l(D,{autofocus:!0,value:i.value.name,onInput:r=>void(i.value.name=r)})),l(A,{label:"\u5934\u50CF"},l(D,{autofocus:!0,value:i.value.avatar,onInput:r=>void(i.value.avatar=r)})),l(A,{label:"\u7F51\u5740",required:!0},l(D,{autofocus:!0,value:i.value.url,onInput:r=>void(i.value.url=r)})),l(A,{label:"\u63CF\u8FF0"},l(D,{autofocus:!0,value:i.value.description,onInput:r=>void(i.value.description=r)})),l(A,{label:"\u7C7B\u578B"},l(He,{placeholder:"\u9009\u62E9\u7C7B\u578B",options:[{label:"\u670B\u53CB",value:N.Friend},{label:"\u6536\u85CF",value:N.Collection}],value:i.value.type,onUpdateValue:r=>void(i.value.type=r|0)}))),l("div",{class:"text-right"},l(se,{size:12,align:"center",inline:!0},l(T,{type:"success",onClick:j,round:!0},"\u786E\u5B9A"),l(T,{onClick:()=>{d.value=!1,i.value=a()},round:!0},"\u53D6\u6D88"))))))}});export{At as default};
