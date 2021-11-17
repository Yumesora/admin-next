import{a as N,R as y}from"./index.js";import{r as P}from"./index10.js";import{d as D,r as v,G as S,w as T,h as t,b0 as B,b1 as w,b3 as A,A as E,J as L,aZ as R,B as U,bH as H,k as Y,bi as I,T as V,b4 as j}from"./vendor.js";class _{constructor(s){this.strList=s}parse(s){const l=s,i=/-{3,}\n(.*?)-{3,}\n*(.*)$/gms.exec(l);if(!i)return{text:l};const d=i[1],F=i.pop(),b=d.split(`
`),m=[],f=[];let c=null;const g=b.reduce((e,p)=>{const u=p.trim().split(":").filter(a=>a.length),n=u.length>=2?[u[0],u.slice(1).filter(a=>a.length).join(":").trim()]:[u[0]];if(n.length===2){const[a,o]=n;["date","updated"].includes(a)?e[a]=new Date(o.trim()).toISOString():["categories:","tags:"].includes(a)?c=a==="categories:"?"cate":"tag":e[a]=o.trim()}else{const a=p.trim().replace(/^\s*-\s*/,"");if(["","tags:","categories:"].includes(a))return c=a==="categories:"?"cate":"tag",e;c==="tag"?m.push(a):f.push(a)}return e},{});return g.categories=f,g.tags=m,{meta:g,text:F}}start(){const s=this.strList,l=[];for(const i of s)l.push(this.parse(i));return l}}var h;(function(r){r.Post="post",r.Note="note"})(h||(h={}));const G=[{value:h.Post,label:"\u535A\u6587"},{label:"\u65E5\u8BB0",value:h.Note}];var z=D(()=>{const r=v(h.Post),s=v([]),l=v([]);function i(e){return new _(e).start().map((u,n)=>{const o=s.value[n].file.name.replace(/\.md$/,"");return u.meta?u.meta.slug=u.meta.slug??o:u.meta={title:o,slug:o},u.meta?.date||(u.meta.date=new Date().toISOString()),u})}const d=S();async function F(e){if(e?.preventDefault(),e?.stopPropagation(),!s.value.length)throw new ReferenceError("fileList is empty");const p=[];for await(const n of s.value){const a=await Promise.resolve(new Promise((o,C)=>{const x=n.file;if(!x)return C("File is empty");if(x.type!=="text/markdown")return d.error("\u53EA\u80FD\u8F6C\u6362 markdown \u6587\u4EF6"),C("File must be markdown.");const k=new FileReader;k.onload=M=>{o(M.target?.result||"")},k.readAsText(x)}));p.push(a)}const u=i(p);d.success("\u89E3\u6790\u5B8C\u6210, \u7ED3\u679C\u67E5\u770B console \u54E6"),l.value=u.map((n,a)=>({...n,filename:s.value[a].file?.name??""})),console.log(j(l))}async function b(e){if(e.stopPropagation(),e.preventDefault(),!l.value.length)return d.error("\u8BF7\u5148\u89E3\u6790!!");await y.api.markdown.import.post({data:{type:r.value,data:l.value}}),d.success("\u4E0A\u4F20\u6210\u529F!"),s.value=[]}const m=v(!0),f=v(!1),c=v(!1);async function g(){const e=await y.api.markdown.export.get({params:{slug:c.value,yaml:m.value,show_title:f.value},responseType:"blob"});P(e,"markdown.zip")}return T(()=>s.value,e=>{e.length==0?l.value=[]:F()}),()=>t(N,null,t(L,null,"\u4ECE MarkDown \u5BFC\u5165\u6570\u636E"),t(B,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},t(w,{label:"\u5BFC\u5165\u5230:"},t(R,{options:G,value:r.value,onUpdateValue:e=>void(r.value=e)})),t(w,{label:"\u51C6\u5907\u597D\u4E86\u5417."},t(U,{vertical:!0},t(H,{multiple:!0,accept:".md,.markdown",onChange:Y(e=>{s.value=e.fileList},250),onRemove:e=>{const u=e.file.name,n=l.value.findIndex(a=>a.filename===u);n!=-1&&l.value.splice(n,1)}},t(I,null,t(E,{round:!0},"\u5148\u4E0A\u4F20"),t(E,{onClick:F,disabled:!s.value.length},"\u518D\u89E3\u6790"),t(E,{onClick:b,round:!0,disabled:!l.value.length},"\u6700\u540E\u5BFC\u5165"))),t(V,{depth:2,class:"!text-sm"},"\u53EA\u80FD\u4E0A\u4F20markdown\u6587\u4EF6")))),t(L,null,"\u5BFC\u51FA\u6570\u636E\u5230 Markdown (Hexo YAML Format)"),t(B,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},t(w,{label:"\u662F\u5426\u5305\u62EC yaml header"},t(A,{value:m.value,onUpdateValue:e=>void(m.value=e)})),t(w,{label:"\u662F\u5426\u5728\u7B2C\u4E00\u884C\u663E\u793A\u6587\u7AE0\u6807\u9898"},t(A,{value:f.value,onUpdateValue:e=>void(f.value=e)})),t(w,{label:"\u6839\u636E slug \u751F\u6210\u6587\u4EF6\u540D"},t(A,{value:c.value,onUpdateValue:e=>void(c.value=e)})),t("div",{class:"text-right w-full"},t(E,{type:"primary",onClick:g},"\u5BFC\u51FA"))))});export{z as default};
