import{A as t}from"./Add12Filled-4be3cb62-4a68e52.js";import{D as e}from"./Delete16Regular-4a9d2bd7-4a68e52.js";import{T as r}from"./index-14aadcb3-4a68e52.js";import{R as a}from"./relative-time-8c2ba76f-4a68e52.js";import{u as n}from"./use-table-855ee2a5-4a68e52.js";import{R as o,p as i,d as l,a as c}from"./index-4a68e52.js";import{d as s,B as u,aH as f,ab as p,w as d,o as g,aT as h,h as v,O as _,aV as m,J as y,G as w,aW as b,F as j}from"./vendor-96c780fc-4a68e52.js";import{H as x}from"./rounded-button-d3b148ff-4a68e52.js";function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t){if(!("string"==typeof t||t instanceof String)){var e=q(t);throw null===t?e="null":"object"===e&&(e=t.constructor.name),new TypeError("Expected a string but received a ".concat(e))}}function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)void 0===t[r]&&(t[r]=e[r]);return t}var R={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};var S="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",$="(".concat(S,"[.]){3}").concat(S),z=new RegExp("^".concat($,"$")),D="(?:[0-9a-fA-F]{1,4})",E=new RegExp("^("+"(?:".concat(D,":){7}(?:").concat(D,"|:)|")+"(?:".concat(D,":){6}(?:").concat($,"|:").concat(D,"|:)|")+"(?:".concat(D,":){5}(?::").concat($,"|(:").concat(D,"){1,2}|:)|")+"(?:".concat(D,":){4}(?:(:").concat(D,"){0,1}:").concat($,"|(:").concat(D,"){1,3}|:)|")+"(?:".concat(D,":){3}(?:(:").concat(D,"){0,2}:").concat($,"|(:").concat(D,"){1,4}|:)|")+"(?:".concat(D,":){2}(?:(:").concat(D,"){0,3}:").concat($,"|(:").concat(D,"){1,5}|:)|")+"(?:".concat(D,":){1}(?:(:").concat(D,"){0,4}:").concat($,"|(:").concat(D,"){1,6}|:)|")+"(?::((?::".concat(D,"){0,5}:").concat($,"|(?::").concat(D,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(k(t),!(e=String(e)))return T(t,4)||T(t,6);if("4"===e){if(!z.test(t))return!1;var r=t.split(".").sort((function(t,e){return t-e}));return r[3]<=255}return"6"===e&&!!E.test(t)}var C={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,validate_length:!0},A=/^\[([^\]]+)\](?::([0-9]+))?$/;function O(t,e){for(var r=0;r<e.length;r++){var a=e[r];if(t===a||(n=a,"[object RegExp]"===Object.prototype.toString.call(n)&&a.test(t)))return!0}var n;return!1}function B(t,e){if(k(t),!t||/[\s<>]/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;if((e=F(e,C)).validate_length&&t.length>=2083)return!1;var r,a,n,o,i,l,c,s;if(c=t.split("#"),t=c.shift(),c=t.split("?"),t=c.shift(),(c=t.split("://")).length>1){if(r=c.shift().toLowerCase(),e.require_valid_protocol&&-1===e.protocols.indexOf(r))return!1}else{if(e.require_protocol)return!1;if("//"===t.substr(0,2)){if(!e.allow_protocol_relative_urls)return!1;c[0]=t.substr(2)}}if(""===(t=c.join("://")))return!1;if(c=t.split("/"),""===(t=c.shift())&&!e.require_host)return!0;if((c=t.split("@")).length>1){if(e.disallow_auth)return!1;if(""===c[0]||":"===c[0].substr(0,1))return!1;if((a=c.shift()).indexOf(":")>=0&&a.split(":").length>2)return!1}l=null,s=null;var u=(o=c.join("@")).match(A);if(u?(n="",s=u[1],l=u[2]||null):(n=(c=o.split(":")).shift(),c.length&&(l=c.join(":"))),null!==l){if(i=parseInt(l,10),!/^[0-9]+$/.test(l)||i<=0||i>65535)return!1}else if(e.require_port)return!1;return!!(T(n)||function(t,e){k(t),(e=F(e,R)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var r=t.split("."),a=r[r.length-1];if(e.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(a))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(a))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(a))&&r.every((function(t){return!(t.length>63||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)||/[\uff01-\uff5e]/.test(t)||/^-|-$/.test(t)||!e.allow_underscores&&/_/.test(t))}))}(n,e)||s&&T(s,6))&&(n=n||s,!(e.host_whitelist&&!O(n,e.host_whitelist))&&(!e.host_blacklist||!O(n,e.host_blacklist)))}const P=s({setup(q,k){const{checkedRowKeys:F,data:R,pager:S,sortProps:$,fetchDataFn:z}=n(((t,e)=>async(r=T.query.page||1,a=30)=>{const n=await o.api.projects.get({params:{page:r,size:a}});t.value=n.data,e.value=n.pagination})),D=u(),E=f(),T=p(),C=z;d((()=>T.query.page),(async t=>{await C(t)})),g((async()=>{await C()}));const A=s({setup(){const t=h([{type:"selection",options:["none","all"]},{title:"项目名称",key:"name",width:100,render(t){const e=[t.previewUrl,t.projectUrl,t.docUrl].filter(Boolean).find((t=>B(t,{require_protocol:!0})));return e?v("a",{href:e,target:"_blank",rel:"noreferrer"},t.name):v(_,null,t.name)}},{title:"项目描述",key:"description"},{title:"创建时间",key:"created",render:t=>i(t.created)},{title:"修改于",key:"created",render:t=>v(a,{time:t.created})},{title:"操作",fixed:"right",key:"id",width:130,render:t=>v(w,{wrap:!1},v(m,{to:{name:l.EditProject,query:{id:t.id}}},v(y,{text:!0,type:"primary",size:"tiny"},"编辑")),v(b,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await o.api.projects(t.id).delete(),D.success("删除成功"),await C(S.value.currentPage)}},{trigger:()=>v(y,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>v("span",{style:{maxWidth:"12rem"}},"确定要删除项目 [",t.name,"] ?")}))}]);return()=>v(r,{columns:t,data:R,onFetchData:C,pager:S,onUpdateCheckedRowKeys:t=>{F.value=t}})}});return()=>v(c,null,{actions:()=>v(j,null,v(x,{variant:"error",disabled:0==F.value.length,onClick:()=>{E.warning({title:"警告",content:"你确定要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{for(const t of F.value)await o.api.projects(t).delete();F.value.length=0,D.success("删除成功"),await C()}})},icon:v(e,null)}),v(x,{to:"/projects/edit",icon:v(t,null)})),default:()=>v(A,null)})}});export{P as default};
//# sourceMappingURL=list-d84fa8e6-4a68e52.js.map