import{bp as n,bA as t,b1 as e,bB as o}from"./vendor-a3bf3ad0-2_19_59.js";import"./index-2_19_59.js";const s=(n,o)=>{const s={};for(const c in o)if(t(o[c])){const r=o[c],a=n[c];Object.keys(e(r)).map((n=>{if(t(r[n])){const t=r[n];for(const e in t)if(t[e]!==a[n][e]){s[c]=r;break}}else r[n]!==a[n]&&(s[c]=r)}))}else o[c]!==n[c]&&(s[c]=o[c]);return s};function c(e,s){return function e(s,c){return n(s,(function(n,s,r){o(s,c[r])||(n[r]=t(s)&&t(c[r])?e(s,c[r]):s)}))}(s,e)}function r(n,t){const e=window.URL.createObjectURL(new Blob([n])),o=document.createElement("a");o.href=e,o.setAttribute("download",t),document.body.appendChild(o),o.click()}export{c as d,r,s};
//# sourceMappingURL=index-1fab7b65-2_19_59.js.map
