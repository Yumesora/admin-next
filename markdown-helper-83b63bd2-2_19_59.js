import{a as e,R as a}from"./index-2_19_59.js";import{r as t}from"./index-1fab7b65-2_19_59.js";import{d as l,r as n,B as s,w as r,h as o,aZ as i,a_ as u,b0 as c,J as m,C as p,aV as d,G as v,bC as g,bg as f,O as h,bk as w}from"./vendor-a3bf3ad0-2_19_59.js";class b{constructor(e){this.strList=e}parse(e){const a=e,t=/-{3,}\n(.*?)-{3,}\n*(.*)$/gms.exec(a);if(!t)return{text:a};const l=t[1],n=t.pop(),s=l.split("\n"),r=[],o=[];let i=null;const u=s.reduce(((e,a)=>{const t=a.trim().split(":").filter((e=>e.length)),l=t.length>=2?[t[0],t.slice(1).filter((e=>e.length)).join(":").trim()]:[t[0]];if(2===l.length){const[a,t]=l;["date","updated"].includes(a)?e[a]=new Date(t.trim()).toISOString():["categories:","tags:"].includes(a)?i="categories:"===a?"cate":"tag":e[a]=t.trim()}else{const t=a.trim().replace(/^\s*-\s*/,"");if(["","tags:","categories:"].includes(t))return i="categories:"===t?"cate":"tag",e;"tag"===i?r.push(t):o.push(t)}return e}),{});return u.categories=o,u.tags=r,{meta:u,text:n}}start(){const e=this.strList,a=[];for(const t of e)a.push(this.parse(t));return a}}var x,k;(k=x||(x={}))[k.Post=0]="Post",k[k.Note=1]="Note";const y=[{value:0,label:"博文"},{label:"日记",value:1}];var P=l((()=>{const l=n(0),x=n([]),k=n([]);const P=s();async function _(e){if(null==e||e.preventDefault(),null==e||e.stopPropagation(),!x.value.length)throw new ReferenceError("fileList is empty");const a=[];for await(const l of x.value){const e=await Promise.resolve(new Promise(((e,a)=>{const t=l.file;if(!t)return a("File is empty");if("text/markdown"!==t.type)return P.error("只能转换 markdown 文件"),a("File must be markdown.");const n=new FileReader;n.onload=a=>{var t;e((null==(t=a.target)?void 0:t.result)||"")},n.readAsText(t)})));a.push(e)}const t=function(e){return new b(e).start().map(((e,a)=>{var t,l;const n=x.value[a].file.name.replace(/\.md$/,"");return e.meta?e.meta.slug=null!=(t=e.meta.slug)?t:n:e.meta={title:n,slug:n},(null==(l=e.meta)?void 0:l.date)||(e.meta.date=(new Date).toISOString()),e}))}(a);P.success("解析完成, 结果查看 console 哦"),k.value=t.map(((e,a)=>{var t,l;return{...e,filename:null!=(l=null==(t=x.value[a].file)?void 0:t.name)?l:""}})),console.log(w(k))}async function C(e){if(e.stopPropagation(),e.preventDefault(),!k.value.length)return P.error("请先解析!!");await a.api.helper.markdown.import.post({data:{type:l.value,data:k.value}}),P.success("上传成功!"),x.value=[]}const D=n(!0),L=n(!1);async function j(){const e=await a.api.helper.markdown.export.get({params:{slug:1,yaml:D.value,show_title:L.value},responseType:"blob"});t(e,"markdown.zip")}return r((()=>x.value),(e=>{console.log(e),0==e.length?k.value=[]:_()})),()=>o(e,null,o(p,null,"从 MarkDown 导入数据"),o(i,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},o(u,{label:"导入到:"},o(d,{options:y,value:l.value,onUpdateValue:e=>{l.value=e}})),o(u,{label:"准备好了吗."},o(v,{vertical:!0},o(g,{multiple:!0,accept:".md,.markdown",onChange:e=>{x.value=e.fileList},onRemove:e=>{const a=e.file.name,t=k.value.findIndex((e=>e.filename===a));-1!=t&&k.value.splice(t,1)}},o(f,null,o(m,{round:!0},"先上传"),o(m,{onClick:_,disabled:!x.value.length},"再解析"),o(m,{onClick:C,round:!0,disabled:!k.value.length},"最后导入"))),o(h,{depth:2,class:"!text-sm"},"只能上传markdown文件")))),o(p,null,"导出数据到 Markdown (Hexo YAML Format)"),o(i,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},o(u,{label:"是否包括 yaml header"},o(c,{value:D.value,onUpdateValue:e=>{D.value=e}})),o(u,{label:"是否在第一行显示文章标题"},o(c,{value:L.value,onUpdateValue:e=>{L.value=e}})),o("div",{class:"text-right w-full"},o(m,{type:"primary",onClick:j},"导出"))))}));export default P;
//# sourceMappingURL=markdown-helper-83b63bd2-2_19_59.js.map
