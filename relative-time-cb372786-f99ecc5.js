import{b as e,p as t}from"./index-f99ecc5.js";import{d as r,r as o,o as s,y as a,h as i,x as m}from"./vendor-e2ba4753-f99ecc5.js";const p=r({props:{time:{type:[String,Date],required:!0}},setup(t){const r=o(e(t.time));let i;return s((()=>{i=setInterval((()=>{r.value=e(t.time)}),1e3)})),a((()=>{i&&(i=clearInterval(i))})),()=>r.value}}),n=r({props:{time:{type:[String,Date],required:!0},showPopoverInfoAbsoluteTime:{type:Boolean,default:!0}},setup:e=>()=>e.showPopoverInfoAbsoluteTime?i(m,{trigger:"hover"},{trigger:()=>i("span",null,i(p,{time:e.time})),default:()=>t(e.time,"yyyy年M月d日 HH:mm:ss")}):i(p,{time:e.time})});export{n as R};
//# sourceMappingURL=relative-time-cb372786-f99ecc5.js.map