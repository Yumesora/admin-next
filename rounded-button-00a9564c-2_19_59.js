import{d as t,h as e,J as a,aR as n,t as i,I as o}from"./vendor-a3bf3ad0-2_19_59.js";const l=t({props:{variant:{type:String,default:"primary"},onClick:{type:Function},disabled:{type:Boolean}},setup:(t,{slots:n})=>()=>e(a,{type:t.variant,circle:!0,onClick:t.onClick,disabled:t.disabled},n)}),r=t({props:{to:{type:[Object,String]},variant:{type:String},icon:{type:Object,required:!0},onClick:{type:Function},disabled:{type:Boolean},name:{type:String}},setup(t){const a=()=>e(l,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled},e(o,{size:"16"},t.icon)),r=()=>t.name?e(i,{trigger:"hover",placement:"bottom"},{trigger:()=>e(a,null),default:()=>t.name}):e(a,null);return()=>t.to?e(n,{to:t.to},e(r,null)):e(r,null)}});export{r as H};
//# sourceMappingURL=rounded-button-00a9564c-2_19_59.js.map
