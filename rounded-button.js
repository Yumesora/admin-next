import{d as i,h as e,A as o,aX as r,x as l,I as u}from"./vendor.js";const c=i({props:{variant:{type:String,default:"primary"},onClick:{type:Function},disabled:{type:Boolean}},setup(t,{slots:n}){return()=>e(o,{type:t.variant,circle:!0,onClick:t.onClick,disabled:t.disabled},n)}}),s=i({props:{to:{type:[Object,String]},variant:{type:String},icon:{type:Object,required:!0},onClick:{type:Function},disabled:{type:Boolean},name:{type:String}},setup(t){const n=()=>e(c,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled},e(u,{size:"16"},t.icon)),a=()=>t.name?e(l,{trigger:"hover",placement:"bottom"},{trigger(){return e(n,null)},default(){return t.name}}):e(n,null);return()=>t.to?e(r,{to:t.to},e(a,null)):e(a,null)}});export{s as H};
