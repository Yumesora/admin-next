import{d as i,j as l,aT as s,ai as n,c as u,h as t,A as c,I as d,aW as k,aX as p}from"./vendor.js";import{W as x}from"./index.js";const h={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},g=n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("path",{d:"M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"}),n("path",{d:"M10 14L20 4"}),n("path",{d:"M15 4h5v5"})],-1);var m=i({name:"ExternalLink",render:function(a,r){return l(),s("svg",h,[g])}});const f=i({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1}},setup(e,{slots:a}){const r=u(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?x:void 0).toString()}catch{return null}});return()=>t(p,{to:e.inPageTo,class:"flex items-center space-x-2"},t(k,{lineClamp:2,tooltip:{width:500}},e.title),a.default?.(),r.value&&t(c,{text:!0,tag:"a",style:{cursor:"alias"},href:r.value,target:"_blank",type:"primary",onClick:o=>o.stopPropagation()},t(d,null,t(m,null))))}});export{f as T};
