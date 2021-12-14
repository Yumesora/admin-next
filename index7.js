import{P as Me}from"./Plus.js";import{H as Be}from"./rounded-button.js";import{T as Fe}from"./index3.js";import{u as Ie}from"./use-table.js";import{R as C,d as Ae,a as Te}from"./index.js";import{bc as I,bt as O,bu as re,bv as Ee,bw as Ne,bx as Ve,d as de,ag as De,g as Ke,r as A,G as ke,w as fe,E as ze,h as c,bb as Re,V as qe,b1 as He,b2 as T,y as K,a_ as Ue,B as se,A as E,o as Le,bp as ue,aV as We,bn as Ge,bo as ve,Z as Ze,T as Je,F as Qe,b5 as Xe}from"./vendor.js";var N;(function(e){e[e.Friend=0]="Friend",e[e.Collection=1]="Collection"})(N||(N={}));var h;(function(e){e[e.Pass=0]="Pass",e[e.Audit=1]="Audit"})(h||(h={}));var ye={},me={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.getSlot=void 0;function Ye(e,n="default",u=[]){const i=e.$slots[n];return i===void 0?u:i()}k.getSlot=Ye;var z={};Object.defineProperty(z,"__esModule",{value:!0});z.getVNodeChildren=void 0;function xe(e,n="default",u=[]){const{children:t}=e;if(t!==null&&typeof t=="object"&&!Array.isArray(t)){const i=t[n];if(typeof i=="function")return i()}return u}z.getVNodeChildren=xe;var R={};Object.defineProperty(R,"__esModule",{value:!0});R.keep=void 0;function et(e,n=[],u){const t={};return n.forEach(i=>{t[i]=e[i]}),Object.assign(t,u)}R.keep=et;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.omit=void 0;function tt(e,n=[],u){const t={};return Object.getOwnPropertyNames(e).forEach(f=>{n.includes(f)||(t[f]=e[f])}),Object.assign(t,u)}q.omit=tt;var V={};Object.defineProperty(V,"__esModule",{value:!0});V.flatten=void 0;const ae=I;function ie(e,n=!0,u=[]){return e.forEach(t=>{if(t!==null){if(typeof t!="object"){(typeof t=="string"||typeof t=="number")&&u.push((0,ae.createTextVNode)(String(t)));return}if(Array.isArray(t)){ie(t,n,u);return}if(t.type===ae.Fragment){if(t.children===null)return;Array.isArray(t.children)&&ie(t.children,n,u)}else t.type!==ae.Comment&&u.push(t)}}),u}V.flatten=ie;var H={};Object.defineProperty(H,"__esModule",{value:!0});H.call=void 0;function be(e,...n){if(Array.isArray(e))e.forEach(u=>be(u,...n));else return e(...n)}H.call=be;var U={};Object.defineProperty(U,"__esModule",{value:!0});U.keysOf=void 0;function nt(e){return Object.keys(e)}U.keysOf=nt;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.render=void 0;const ge=I,rt=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?(0,ge.createTextVNode)(e):typeof e=="number"?(0,ge.createTextVNode)(String(e)):null;L.render=rt;var W={},oe={},w={};Object.defineProperty(w,"__esModule",{value:!0});w.throwError=w.warn=w.warnOnce=void 0;const _e=new Set;function ut(e,n){const u=`[naive/${e}]: ${n}`;_e.has(u)||(_e.add(u),console.error(u))}w.warnOnce=ut;function at(e,n){console.error(`[naive/${e}]: ${n}`)}w.warn=at;function it(e,n){throw new Error(`[naive/${e}]: ${n}`)}w.throwError=it;var $={};Object.defineProperty($,"__esModule",{value:!0});$.smallerSize=$.largerSize=void 0;function ot(e){switch(e){case"tiny":return"small";case"small":return"medium";case"medium":return"large";case"large":return"huge"}}$.largerSize=ot;function lt(e){switch(e){case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}}$.smallerSize=lt;var G={};Object.defineProperty(G,"__esModule",{value:!0});G.getTitleAttribute=void 0;function ct(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}G.getTitleAttribute=ct;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.hasWindow=void 0;Z.hasWindow=typeof window!="undefined";(function(e){var n=O&&O.__createBinding||(Object.create?function(s,m,d,o){o===void 0&&(o=d),Object.defineProperty(s,o,{enumerable:!0,get:function(){return m[d]}})}:function(s,m,d,o){o===void 0&&(o=d),s[o]=m[d]}),u=O&&O.__exportStar||function(s,m){for(var d in s)d!=="default"&&!Object.prototype.hasOwnProperty.call(m,d)&&n(m,s,d)};Object.defineProperty(e,"__esModule",{value:!0}),e.getTitleAttribute=e.largerSize=e.smallerSize=e.throwError=e.warnOnce=e.warn=void 0;var t=w;Object.defineProperty(e,"warn",{enumerable:!0,get:function(){return t.warn}}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t.warnOnce}}),Object.defineProperty(e,"throwError",{enumerable:!0,get:function(){return t.throwError}});var i=$;Object.defineProperty(e,"smallerSize",{enumerable:!0,get:function(){return i.smallerSize}}),Object.defineProperty(e,"largerSize",{enumerable:!0,get:function(){return i.largerSize}});var f=G;Object.defineProperty(e,"getTitleAttribute",{enumerable:!0,get:function(){return f.getTitleAttribute}}),u(Z,e)})(oe);Object.defineProperty(W,"__esModule",{value:!0});W.getFirstSlotVNode=void 0;const dt=V,je=oe;function ft(e,n="default",u=void 0){const t=e[n];if(!t)return(0,je.warn)("getFirstSlotVNode",`slot[${n}] is empty`),null;const i=(0,dt.flatten)(t(u));return i.length===1?i[0]:((0,je.warn)("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}W.getFirstSlotVNode=ft;var J={};Object.defineProperty(J,"__esModule",{value:!0});J.createDataKey=void 0;function st(e){return typeof e=="string"?`s-${e}`:`n-${e}`}J.createDataKey=st;var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.createRefSetter=void 0;function vt(e){return n=>{n?e.value=n.$el:e.value=null}}Q.createRefSetter=vt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createRefSetter=e.createDataKey=e.getFirstSlotVNode=e.render=e.keysOf=e.call=e.flatten=e.omit=e.keep=e.getVNodeChildren=e.getSlot=void 0;var n=k;Object.defineProperty(e,"getSlot",{enumerable:!0,get:function(){return n.getSlot}});var u=z;Object.defineProperty(e,"getVNodeChildren",{enumerable:!0,get:function(){return u.getVNodeChildren}});var t=R;Object.defineProperty(e,"keep",{enumerable:!0,get:function(){return t.keep}});var i=q;Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return i.omit}});var f=V;Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return f.flatten}});var s=H;Object.defineProperty(e,"call",{enumerable:!0,get:function(){return s.call}});var m=U;Object.defineProperty(e,"keysOf",{enumerable:!0,get:function(){return m.keysOf}});var d=L;Object.defineProperty(e,"render",{enumerable:!0,get:function(){return d.render}});var o=W;Object.defineProperty(e,"getFirstSlotVNode",{enumerable:!0,get:function(){return o.getFirstSlotVNode}});var l=J;Object.defineProperty(e,"createDataKey",{enumerable:!0,get:function(){return l.createDataKey}});var a=Q;Object.defineProperty(e,"createRefSetter",{enumerable:!0,get:function(){return a.createRefSetter}})})(me);var pe={},le={};Object.defineProperty(le,"__esModule",{value:!0});const yt=/^(\d|\.)+$/,Oe=/(\d|\.)+/;function mt(e,{c:n=1,offset:u=0,attachPx:t=!0}={}){if(typeof e=="number"){const i=(e+u)*n;return i===0?"0":`${i}px`}else if(typeof e=="string")if(yt.test(e)){const i=(Number(e)+u)*n;return t?i===0?"0":`${i}px`:`${i}`}else{const i=Oe.exec(e);return i?e.replace(Oe,String((Number(i[0])+u)*n)):e}return e}le.default=mt;(function(e){var n=O&&O.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.formatLength=void 0;var u=le;Object.defineProperty(e,"formatLength",{enumerable:!0,get:function(){return n(u).default}})})(pe);var Pe={},bt=re(Ee),gt=re(Ne),X={};Object.defineProperty(X,"__esModule",{value:!0});X.createKey=void 0;function Se(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,u=>u.toUpperCase()))}X.createKey=Se;Se("abc","def");(function(e){var n=O&&O.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(e,"__esModule",{value:!0}),e.createKey=e.find=e.namespace=e.prefix=e.asModal=e.insidePopover=e.insideModal=e.insideFormItem=e.cCB=e.cNotM=e.cM=e.cE=e.cB=e.c=void 0;const u=n(bt),t=n(gt),i="n";e.namespace=i;const f=`.${i}-`;e.prefix=f;const s="__",m="--",d=(0,u.default)(),o=(0,t.default)({blockPrefix:f,elementPrefix:s,modifierPrefix:m});d.use(o);const{c:l,find:a}=d;e.c=l,e.find=a;const{cB:v,cE:_,cM:j,cNotM:r}=o;e.cB=v,e.cE=_,e.cM=j,e.cNotM=r;function g(p,S){return p===null?S:l([({props:{bPrefix:ne}})=>l(`${ne||f}form-item`,[l(`${ne||f}form-item-blank`,[l(`&${ne||f}form-item-blank${m}${p}`,[S])])])])}e.insideFormItem=g;function y(p){return l(({props:{bPrefix:S}})=>`${S||f}modal, ${S||f}drawer`,[p])}e.insideModal=y;function b(p){return l(({props:{bPrefix:S}})=>`${S||f}popover:not(${S||f}tooltip)`,[p])}e.insidePopover=b;function P(p){return l(({props:{bPrefix:S}})=>`&${S||f}modal`,p)}e.asModal=P;const D=(...p)=>l(">",[v(...p)]);e.cCB=D;var $e=X;Object.defineProperty(e,"createKey",{enumerable:!0,get:function(){return $e.createKey}})})(Pe);var he={},Y={},_t=re(Ve),M={};Object.defineProperty(M,"__esModule",{value:!0});M.modalInjectionKey=M.modalBodyInjectionKey=void 0;M.modalBodyInjectionKey=Symbol("modalBody");M.modalInjectionKey=Symbol("modal");var B={};Object.defineProperty(B,"__esModule",{value:!0});B.drawerInjectionKey=B.drawerBodyInjectionKey=void 0;B.drawerBodyInjectionKey=Symbol("drawerBody");B.drawerInjectionKey=Symbol("drawer");var x={};Object.defineProperty(x,"__esModule",{value:!0});x.popoverBodyInjectionKey=void 0;x.popoverBodyInjectionKey=Symbol("popoverBodyInjection");var F={};Object.defineProperty(F,"__esModule",{value:!0});F.internalSelectionMenuBodyInjectionKey=F.internalSelectionMenuInjectionKey=void 0;F.internalSelectionMenuInjectionKey=Symbol("internal-select-menu");F.internalSelectionMenuBodyInjectionKey=Symbol("internal-select-menu-body");Object.defineProperty(Y,"__esModule",{value:!0});Y.useAdjustedTo=void 0;const jt=_t,ee=I,pt=M,Ot=B,Pt=x,St=F,we="__disabled__";function ce(e){const n=(0,ee.inject)(pt.modalBodyInjectionKey,null),u=(0,ee.inject)(Ot.drawerBodyInjectionKey,null),t=(0,ee.inject)(Pt.popoverBodyInjectionKey,null),i=(0,ee.inject)(St.internalSelectionMenuBodyInjectionKey,null);return(0,jt.useMemo)(()=>{var f;const{to:s}=e;return s!==void 0?s===!1?we:s===!0?"body":s:(n==null?void 0:n.value)?(f=n.value.$el)!==null&&f!==void 0?f:n.value:(u==null?void 0:u.value)?u.value:(t==null?void 0:t.value)?t.value:(i==null?void 0:i.value)?i.value:s??"body"})}Y.useAdjustedTo=ce;ce.tdkey=we;ce.propTo={type:[String,Object,Boolean],default:void 0};var te={};Object.defineProperty(te,"__esModule",{value:!0});te.useHoudini=void 0;const ht=I;let Ce=!1;function wt(){(0,ht.onBeforeMount)(()=>{var e;Ce||(Ce=!0,((e=window==null?void 0:window.CSS)===null||e===void 0?void 0:e.registerProperty)&&(CSS.registerProperty({name:"--color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})))})}te.useHoudini=wt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useHoudini=e.useAdjustedTo=e.useDeferredTrue=e.useInjectionElementCollection=e.useInjectionCollection=e.useInjectionInstanceCollection=void 0;const n=I;function u(d,o,l){var a;const v=(0,n.inject)(d,null);if(v===null)return;const _=(a=(0,n.getCurrentInstance)())===null||a===void 0?void 0:a.proxy;(0,n.watch)(l,j),j(l.value),(0,n.onBeforeUnmount)(()=>{j(void 0,l.value)});function j(y,b){const P=v[o];b!==void 0&&r(P,b),y!==void 0&&g(P,y)}function r(y,b){y[b]||(y[b]=[]),y[b].splice(y[b].findIndex(P=>P===_),1)}function g(y,b){y[b]||(y[b]=[]),~y[b].findIndex(P=>P===_)||y[b].push(_)}}e.useInjectionInstanceCollection=u;function t(d,o,l){const a=(0,n.inject)(d,null);a!==null&&(o in a||(a[o]=[]),a[o].push(l.value),(0,n.watch)(l,(v,_)=>{const j=a[o],r=j.findIndex(g=>g===_);~r&&j.splice(r,1),j.push(v)}),(0,n.onBeforeUnmount)(()=>{const v=a[o],_=v.findIndex(j=>j===l.value);~_&&v.splice(_,1)}))}e.useInjectionCollection=t;function i(d,o,l){const a=(0,n.inject)(d,null);a!==null&&(o in a||(a[o]=[]),(0,n.onMounted)(()=>{const v=l();!v||a[o].push(v)}),(0,n.onBeforeUnmount)(()=>{const v=a[o],_=l(),j=v.findIndex(r=>r===_);~j&&v.splice(j,1)}))}e.useInjectionElementCollection=i;function f(d,o,l){if(!o)return d;const a=(0,n.ref)(d.value);let v=null;return(0,n.watch)(d,_=>{v!==null&&window.clearTimeout(v),_===!0?l&&!l.value?a.value=!0:v=window.setTimeout(()=>{a.value=!0},o):a.value=!1}),a}e.useDeferredTrue=f;var s=Y;Object.defineProperty(e,"useAdjustedTo",{enumerable:!0,get:function(){return s.useAdjustedTo}});var m=te;Object.defineProperty(e,"useHoudini",{enumerable:!0,get:function(){return m.useHoudini}})})(he);(function(e){var n=O&&O.__createBinding||(Object.create?function(m,d,o,l){l===void 0&&(l=o),Object.defineProperty(m,l,{enumerable:!0,get:function(){return d[o]}})}:function(m,d,o,l){l===void 0&&(l=o),m[l]=d[o]}),u=O&&O.__exportStar||function(m,d){for(var o in m)o!=="default"&&!Object.prototype.hasOwnProperty.call(d,o)&&n(d,m,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.createKey=e.formatLength=e.getTitleAttribute=e.largerSize=e.smallerSize=e.throwError=e.warnOnce=e.warn=e.createRefSetter=e.createDataKey=e.getFirstSlotVNode=e.render=e.keysOf=e.getVNodeChildren=e.getSlot=e.flatten=e.omit=e.keep=e.call=void 0;var t=me;Object.defineProperty(e,"call",{enumerable:!0,get:function(){return t.call}}),Object.defineProperty(e,"keep",{enumerable:!0,get:function(){return t.keep}}),Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return t.omit}}),Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return t.flatten}}),Object.defineProperty(e,"getSlot",{enumerable:!0,get:function(){return t.getSlot}}),Object.defineProperty(e,"getVNodeChildren",{enumerable:!0,get:function(){return t.getVNodeChildren}}),Object.defineProperty(e,"keysOf",{enumerable:!0,get:function(){return t.keysOf}}),Object.defineProperty(e,"render",{enumerable:!0,get:function(){return t.render}}),Object.defineProperty(e,"getFirstSlotVNode",{enumerable:!0,get:function(){return t.getFirstSlotVNode}}),Object.defineProperty(e,"createDataKey",{enumerable:!0,get:function(){return t.createDataKey}}),Object.defineProperty(e,"createRefSetter",{enumerable:!0,get:function(){return t.createRefSetter}});var i=oe;Object.defineProperty(e,"warn",{enumerable:!0,get:function(){return i.warn}}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return i.warnOnce}}),Object.defineProperty(e,"throwError",{enumerable:!0,get:function(){return i.throwError}}),Object.defineProperty(e,"smallerSize",{enumerable:!0,get:function(){return i.smallerSize}}),Object.defineProperty(e,"largerSize",{enumerable:!0,get:function(){return i.largerSize}}),Object.defineProperty(e,"getTitleAttribute",{enumerable:!0,get:function(){return i.getTitleAttribute}});var f=pe;Object.defineProperty(e,"formatLength",{enumerable:!0,get:function(){return f.formatLength}});var s=Pe;Object.defineProperty(e,"createKey",{enumerable:!0,get:function(){return s.createKey}}),u(he,e)})(ye);var At=de({setup(){const e=De(),n=Ke(),u=A(e.query.state??h.Pass),{data:t,checkedRowKeys:i,fetchDataFn:f,pager:s,loading:m}=Ie((r,g)=>async(y=e.query.page||1,b=50,P=e.query.state??h.Pass)=>{const D=await C.api.links.get({params:{page:y,size:b,state:P|0}});r.value=D.data,g.value=D.pagination}),d=ke(),o=()=>({avatar:"",name:"",type:N.Friend,url:"",id:null,description:""}),l=A(!1),a=A(o());fe(()=>e.query.state,async r=>{await f()}),fe(()=>e.query.page,async r=>{await f()},{immediate:!0});const v=A(0),_=async()=>{const r=await C.api.links.state.get();v.value=r.audit};ze(()=>{_()});const j=async()=>{const r=a.value.id;if(a.value.id,r){await C.api.links(r).put({data:ye.omit(a.value,["id"])});const g=t.value.findIndex(y=>y.id==r);t.value[g]={...t.value[g],...Xe(a.value)}}else{const{data:g}=await C.api.links.post({data:{...a.value}});t.value.unshift(g)}d.success("\u64CD\u4F5C\u6210\u529F"),a.value=o(),l.value=!1};return()=>c(Te,{actionsElement:c(Qe,null,c(Be,{icon:c(Me,null),variant:"primary",onClick:()=>{a.value=o(),l.value=!0}}))},c(Ge,{size:"medium",value:u.value,onUpdateValue:r=>{u.value=r,n.replace({name:Ae.Friend,query:{state:r}})}},c(ve,{name:h.Pass,tab:"\u670B\u53CB\u4EEC"},c("div",{class:""})),c(ve,{name:h.Audit,tab:()=>c(Ze,{value:v.value,processing:!0},c(Je,null,"\u5F85\u5BA1\u6838"))},c("div",{class:""}))),c(Fe,{loading:m.value,data:t,nTableProps:{maxHeight:"calc(100vh - 22rem)"},columns:[{title:"\u5934\u50CF",key:"avatar",render(r){const g=de(()=>{const y=A(!r.avatar);return Le(()=>{if(r.avatar){const b=new Image;b.src=r.avatar,b.onload=P=>{y.value=!0}}}),()=>r.avatar?y.value?c(ue,{src:r.avatar,round:!0}):c(ue,{round:!0},r.name.charAt(0)):c(ue,{round:!0},r.name.charAt(0))});return c(g,null)}},{title:"\u540D\u79F0",key:"name"},{title:"\u7C7B\u578B",key:"type",render(r){return["\u670B\u53CB","\u6536\u85CF"][r.type|0]}},{title:"\u7F51\u5740",key:"url",render(r){return c("a",{target:"_blank",href:r.url,rel:"noreferrer"},r.url)}},{title:"\u63CF\u8FF0",key:"description"},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(r){return c(se,{wrap:!1},r.state==h.Audit&&c(E,{text:!0,size:"tiny",type:"success",onClick:async()=>{await C.api.links.audit(r.id).patch(),d.success("\u901A\u8FC7\u4E86\u6765\u81EA"+r.name+"\u7684\u53CB\u94FE\u9080\u8BF7");const g=t.value.findIndex(y=>y.id==r.id);t.value.splice(g,1),v.value--}},"\u901A\u8FC7"),c(E,{text:!0,size:"tiny",type:"info",onClick:g=>{l.value=!0,a.value={...r}}},"\u7F16\u8F91"),c(We,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await C.api.links(r.id).delete(),d.success("\u5220\u9664\u6210\u529F"),await f(s.value.currentPage),r.state==h.Audit&&v.value--}},{trigger:()=>c(E,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>c("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664\u53CB\u94FE ",r.name," ?")}))}}],onFetchData:f,pager:s}),c(Re,{show:l.value,onUpdateShow:r=>void(l.value=r)},c(qe,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:a.value.id?"\u7F16\u8F91: "+a.value.name:"\u65B0\u589E"},c(He,null,c(T,{label:"\u540D\u5B57",required:!0},c(K,{autofocus:!0,value:a.value.name,onInput:r=>void(a.value.name=r)})),c(T,{label:"\u5934\u50CF"},c(K,{autofocus:!0,value:a.value.avatar,onInput:r=>void(a.value.avatar=r)})),c(T,{label:"\u7F51\u5740",required:!0},c(K,{autofocus:!0,value:a.value.url,onInput:r=>void(a.value.url=r)})),c(T,{label:"\u63CF\u8FF0"},c(K,{autofocus:!0,value:a.value.description,onInput:r=>void(a.value.description=r)})),c(T,{label:"\u7C7B\u578B"},c(Ue,{placeholder:"\u9009\u62E9\u7C7B\u578B",options:[{label:"\u670B\u53CB",value:N.Friend},{label:"\u6536\u85CF",value:N.Collection}],value:a.value.type,onUpdateValue:r=>void(a.value.type=r|0)}))),c("div",{class:"text-right"},c(se,{size:12,align:"center",inline:!0},c(E,{type:"success",onClick:j,round:!0},"\u786E\u5B9A"),c(E,{onClick:()=>{l.value=!1,a.value=o()},round:!0},"\u53D6\u6D88"))))))}});export{At as default};
