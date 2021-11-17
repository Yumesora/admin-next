import{u as v,_ as E,U as x}from"./index.js";import{d as p,r as S,o as w,b4 as y,w as C,h as _,s as K}from"./vendor.js";import{C as L}from"./index6.js";import{e as R,u as k,s as A}from"./props.js";const Y=p({props:{innerRef:{type:Object},...R},setup(a){const i=S();let r;const{isDark:o}=v(x);w(async()=>{!i.value||(r=await N(i.value,a.text,o),["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(e=>{r[e](()=>{const t=r.getValue();a.onChange(t)})}),a.innerRef&&(a.innerRef.value=r))});let n=y(a.text);return C(()=>a.text,e=>{!n&&e&&(n=e),r&&e!=r.getValue()&&r.setValue(e)}),k(a.unSaveConfirm,()=>n===r.getValue()),()=>_("div",{class:K("editor relative overflow-hidden",A.editor),ref:i},_(L,null))}}),O=Y,N=async(a,i,r)=>{const{editor:o,KeyCode:n,KeyMod:e}=await E(()=>import("./editor.main.js").then(function(s){return s.b}),["editor.main.js","assets/editor.main.7f9fc815.css"]),t=o.create(a,{value:i,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:r.value?"vs-dark":"vs",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});C(()=>r.value,s=>{t.updateOptions({theme:s?"vs-dark":"vs"})}),t.addAction({id:"bold",label:"bold",keybindings:[e.CtrlCmd|n.KEY_B],run:s=>(c(t,"**"),null)}),t.addAction({id:"em",label:"em",keybindings:[e.CtrlCmd|n.KEY_I],run:s=>(c(t,"*"),null)}),t.addAction({id:"null",label:"null",keybindings:[e.CtrlCmd|n.KEY_S,e.Shift|e.Alt|n.KEY_F],run:s=>null}),t.addAction({id:"del",label:"del",keybindings:[e.Alt|n.KEY_D],run:s=>(c(t,"~~"),null)});const b=[,n.KEY_1,n.KEY_2,n.KEY_3,n.KEY_4,n.KEY_5];return Array.from({length:5}).fill(null).forEach((s,h)=>{const l=h+1;t.addAction({id:"head-"+l,label:"heading",keybindings:[e.CtrlCmd|b[l]],run:u=>{const m=u.getSelection();if(!m)return null;const d=m.startLineNumber,f={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:l+2},g=u.getModel()?.getValueInRange(f);if(g&&g=="#".repeat(l)+" "){u.executeEdits("",[{range:f,text:""}]);return}u.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(l)} `}])}})}),t},c=async(a,i)=>{const{Selection:r}=await E(()=>import("./editor.main.js").then(function(t){return t.b}),["editor.main.js","assets/editor.main.7f9fc815.css"]),o=a;if(!o)return;const n=i.length,e=o.getSelection();if(!!e)if(e.startLineNumber==e.endLineNumber&&e.startColumn==e.endColumn){o.executeEdits("",[{range:e,text:i.repeat(2)}]);const t=new r(e.startLineNumber,e.startColumn+n,e.startLineNumber,e.startColumn+n);o.setSelection(t)}else{const t=o.getModel()?.getValueInRange(e);if(!t)return;if(t.startsWith(i)&&t.endsWith(i)){o.executeEdits("",[{range:e,text:`${t.slice(n,t.length-n)}`}]);return}o.executeEdits("",[{range:e,text:`${i}${t}${i}`}])}};export{O as MonacoEditor};
