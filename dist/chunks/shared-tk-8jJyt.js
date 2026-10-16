import{af as xt,ag as q,ah as oe,ai as ie,aD as _,aj as v,aC as X,ak as K,al as M,am as N,p as I,aw as L,v as se,aB as Ee,P as bt,e as vt,a2 as kt,Y as W,R as $,a4 as ye,aa as Et,j as yt,a3 as we,ab as $e,ac as wt,a5 as T,aG as $t,a6 as k,A as Tt,K as St,h as It,aJ as Lt,a9 as F,a7 as Te,aK as Mt,T as Se,aL as Nt,aM as _t,l as z}from"./shared-hrghWtVh.js";import{c as Ct,r as Ot,p as At}from"./shared-BXI23Fg6.js";import{c as Ie}from"./shared-ml5h7U5L.js";function zt(t,e){let n=0;for(let o=0;o<t.length;o++)n+=e(t[o],o);return n}const j=["actor","command","aggregate","event","policy","readmodel","external","hotspot"],Dt=q({id:X,name:M(v(),N(1)),description:_(v())}),Pt=q({id:X,type:K(j),name:M(v(),N(1)),description:_(v()),contextId:_(v())}),Rt=q({id:X,from:M(v(),N(1)),to:M(v(),N(1)),label:_(v()),kind:_(K(["member","flow"]))}),Le=q({title:_(v()),contexts:oe(ie(Dt),[]),elements:oe(ie(Pt),[]),links:oe(ie(Rt),[])}),Me=t=>{const e=xt(Le,t),n=new Set(e.elements.map(i=>i.id)),o=new Set(e.contexts.map(i=>i.id));for(const i of e.elements)if(i.contextId!==void 0&&!o.has(i.contextId))throw new Error(`unknown context "${i.contextId}" for note "${i.id}"`);for(const i of e.links){if(!n.has(i.from))throw new Error(`unknown note "${i.from}" in link "${i.id}"`);if(!n.has(i.to))throw new Error(`unknown note "${i.to}" in link "${i.id}"`)}return e},Ne=()=>({contexts:[],elements:[],links:[]}),D=(t,e)=>{if(e!==void 0)return t.elements.find(n=>n.id===e)},Y=(t,e)=>{if(e!==void 0)return t.contexts.find(n=>n.id===e)},re=(t,e)=>{if(e!==void 0)return t.links.find(n=>n.id===e)},G=t=>t.elements.map(e=>e.id),w={SET_ELEMENT_NAME:I("SET_ELEMENT_NAME","element",L({name:M(v(),N(1))})),SET_ELEMENT_DESCRIPTION:I("SET_ELEMENT_DESCRIPTION","element",L({description:v()})),SET_ELEMENT_TYPE:I("SET_ELEMENT_TYPE","element",L({type:K(j)})),SET_ELEMENT_CONTEXT:I("SET_ELEMENT_CONTEXT","element",L({contextId:Ee(v())})),MOVE_ELEMENT:I("MOVE_ELEMENT","element",L({after:Ee(v())}),{mode:"sequence"}),ADD_ELEMENT:I("ADD_ELEMENT","page",L({id:X,type:K(j),name:M(v(),N(1)),description:_(v()),contextId:_(v())}),{dedupeKey:se}),DELETE_ELEMENT:I("DELETE_ELEMENT","element",L({})),LINK_ELEMENTS:I("LINK_ELEMENTS","page",L({id:X,from:M(v(),N(1)),to:M(v(),N(1)),label:_(v()),kind:_(K(["member","flow"]))}),{dedupeKey:se}),SET_LINK_LABEL:I("SET_LINK_LABEL","link",L({label:v()})),UNLINK_ELEMENTS:I("UNLINK_ELEMENTS","page",L({from:M(v(),N(1)),to:M(v(),N(1))}),{mode:"sequence"}),ADD_CONTEXT:I("ADD_CONTEXT","page",L({id:X,name:M(v(),N(1)),description:_(v())}),{dedupeKey:se}),SET_CONTEXT_NAME:I("SET_CONTEXT_NAME","context",L({name:M(v(),N(1))})),DELETE_CONTEXT:I("DELETE_CONTEXT","context",L({}))},y={setElementName:(t,e)=>({type:"SET_ELEMENT_NAME",target:{type:"element",id:t},payload:{name:e}}),setElementDescription:(t,e)=>({type:"SET_ELEMENT_DESCRIPTION",target:{type:"element",id:t},payload:{description:e}}),setElementType:(t,e)=>({type:"SET_ELEMENT_TYPE",target:{type:"element",id:t},payload:{type:e}}),setElementContext:(t,e)=>({type:"SET_ELEMENT_CONTEXT",target:{type:"element",id:t},payload:{contextId:e}}),moveElement:(t,e)=>({type:"MOVE_ELEMENT",target:{type:"element",id:t},payload:{after:e}}),addElement:(t,e,n)=>({type:"ADD_ELEMENT",target:{type:"page",id:"event-storming"},payload:{id:t,type:e,name:n}}),deleteElement:t=>({type:"DELETE_ELEMENT",target:{type:"element",id:t},payload:{}}),linkElements:(t,e,n,o)=>({type:"LINK_ELEMENTS",target:{type:"page",id:"event-storming"},payload:{id:t,from:e,to:n,...o?.label===void 0?{}:{label:o.label},...o?.kind===void 0?{}:{kind:o.kind}}}),setLinkLabel:(t,e)=>({type:"SET_LINK_LABEL",target:{type:"link",id:t},payload:{label:e}}),unlinkElements:(t,e)=>({type:"UNLINK_ELEMENTS",target:{type:"page",id:"event-storming"},payload:{from:t,to:e}}),addContext:(t,e)=>({type:"ADD_CONTEXT",target:{type:"page",id:"event-storming"},payload:{id:t,name:e}}),setContextName:(t,e)=>({type:"SET_CONTEXT_NAME",target:{type:"context",id:t},payload:{name:e}}),deleteContext:t=>({type:"DELETE_CONTEXT",target:{type:"context",id:t},payload:{}})},_e=(t,e)=>{const n=bt(w,e);if(n===null)return null;const o=n.target.id;switch(n.type){case"SET_ELEMENT_NAME":return Z(t,o,i=>({...i,name:n.payload.name}));case"SET_ELEMENT_DESCRIPTION":return Z(t,o,i=>({...i,description:n.payload.description}));case"SET_ELEMENT_TYPE":return Z(t,o,i=>({...i,type:n.payload.type}));case"SET_ELEMENT_CONTEXT":{const{contextId:i}=n.payload;return i!==null&&!t.contexts.some(s=>s.id===i)?null:Z(t,o,s=>i===null?Ce(s):{...s,contextId:i})}case"MOVE_ELEMENT":{const{after:i}=n.payload,s=Bt(t.elements,o,i);return s===null?null:{...t,elements:s}}case"ADD_ELEMENT":{const i=n.payload;if(t.elements.some(r=>r.id===i.id))return t;if(i.contextId!==void 0&&!t.contexts.some(r=>r.id===i.contextId))return null;const s={id:i.id,type:i.type,name:i.name,...i.description===void 0?{}:{description:i.description},...i.contextId===void 0?{}:{contextId:i.contextId}};return{...t,elements:[...t.elements,s]}}case"DELETE_ELEMENT":return t.elements.some(i=>i.id===o)?{...t,elements:t.elements.filter(i=>i.id!==o),links:t.links.filter(i=>i.from!==o&&i.to!==o)}:null;case"LINK_ELEMENTS":{const i=n.payload;return t.links.some(s=>s.id===i.id)?t:!t.elements.some(s=>s.id===i.from)||!t.elements.some(s=>s.id===i.to)?null:{...t,links:[...t.links,{id:i.id,from:i.from,to:i.to,...i.label===void 0?{}:{label:i.label},...i.kind===void 0?{}:{kind:i.kind}}]}}case"SET_LINK_LABEL":return t.links.some(i=>i.id===o)?{...t,links:t.links.map(i=>i.id===o?{...i,label:n.payload.label}:i)}:null;case"UNLINK_ELEMENTS":{const i=n.payload;return t.links.some(s=>s.from===i.from&&s.to===i.to)?{...t,links:t.links.filter(s=>!(s.from===i.from&&s.to===i.to))}:null}case"ADD_CONTEXT":{const i=n.payload;if(t.contexts.some(r=>r.id===i.id))return t;const s={id:i.id,name:i.name,...i.description===void 0?{}:{description:i.description}};return{...t,contexts:[...t.contexts,s]}}case"SET_CONTEXT_NAME":return t.contexts.some(i=>i.id===o)?{...t,contexts:t.contexts.map(i=>i.id===o?{...i,name:n.payload.name}:i)}:null;case"DELETE_CONTEXT":return t.contexts.some(i=>i.id===o)?{...t,contexts:t.contexts.filter(i=>i.id!==o),elements:t.elements.map(i=>i.contextId===o?Ce(i):i)}:null;default:return vt(n)}},Ce=t=>{const e={...t};return delete e.contextId,e},Z=(t,e,n)=>t.elements.some(o=>o.id===e)?{...t,elements:t.elements.map(o=>o.id===e?n(o):o)}:null,Bt=(t,e,n)=>{const o=t.findIndex(a=>a.id===e);if(o<0||n!==null&&!t.some(a=>a.id===n))return null;const i=t[o];if(i===void 0)return null;const r=[...t.filter(a=>a.id!==e)];return r.splice(n===null?0:r.findIndex(a=>a.id===n)+1,0,i),r},Xt=new Set(["actor>command","command>aggregate","aggregate>event","command>event","policy>command","external>event"]),J=(t,e)=>Xt.has(`${t}>${e}`),Yt=(t,e,n)=>t.kind!==void 0?t.kind==="member":J(e,n),Ht=["readmodel","actor","policy","command","aggregate","external","event","hotspot"],Kt=(t,e)=>{const n=new Map;for(const o of t.links){const i=e.get(o.from),s=e.get(o.to);if(i===void 0||s===void 0||i==="hotspot"==(s==="hotspot")||o.kind!==void 0&&o.kind!=="member")continue;const r=i==="hotspot"?o.from:o.to;n.has(r)||n.set(r,i==="hotspot"?o.to:o.from)}return n},Wt=(t,e,n)=>{const o=new Map(t.map(a=>[a.id,a.id])),i=a=>{let d=a;for(;o.get(d)!==d;)d=o.get(d)??d;let l=a;for(;l!==d;){const p=o.get(l)??d;o.set(l,d),l=p}return d};for(const a of e){if(!o.has(a.from)||!o.has(a.to))continue;const d=n.get(a.from),l=n.get(a.to);d===void 0||l===void 0||Yt(a,d,l)&&o.set(i(a.from),i(a.to))}const s=new Map,r=new Map;for(const a of t){const d=i(a.id);r.set(a.id,d);const l=s.get(d);l?l.push(a):s.set(d,[a])}return{groups:s,rootOf:r}},B=t=>{const e=new Map(t.elements.map(l=>[l.id,l.type])),n=Kt(t,e),o=t.elements.filter(l=>!n.has(l.id)),{groups:i,rootOf:s}=Wt(o,t.links,e),r=new Map;for(const[l,p]of n){const m=D(t,l),u=s.get(p);if(m===void 0||u===void 0)continue;const b=r.get(u);b?b.push({note:m,targetId:p}):r.set(u,[{note:m,targetId:p}])}const a=new Map(Ht.map((l,p)=>[l,p])),d=new Map(t.elements.map((l,p)=>[l.id,p]));return[...i].map(([l,p])=>{const m=[...p].sort((u,b)=>(a.get(u.type)??0)-(a.get(b.type)??0)||(d.get(u.id)??0)-(d.get(b.id)??0));return{id:p[0]?.id??"",notes:m,pins:r.get(l)??[],contextId:p.find(u=>u.contextId!==void 0)?.contextId}})},Ft=t=>{const e=B(t).flatMap(o=>[...o.notes,...o.pins.map(i=>i.note)]),n=new Set(e.map(o=>o.id));return{...t,elements:[...e,...t.elements.filter(o=>!n.has(o.id))]}},Oe=(t,e)=>{const n=[...t.notes,...t.pins.map(r=>r.note)],o=n.find(r=>J(e,r.type));if(o!==void 0)return{anchorId:o.id,incoming:!0};const i=n.find(r=>J(r.type,e));if(i!==void 0)return{anchorId:i.id,incoming:!1};const s=n[0];return s===void 0?void 0:{anchorId:s.id,incoming:!0}},Ae=(t,e)=>{const n=new Map(e.flatMap(o=>o.notes.map(i=>[i.id,o.id])));return t.links.flatMap(o=>{const i=n.get(o.from),s=n.get(o.to);return i===void 0||s===void 0||i===s?[]:[{id:o.id,from:i,to:s,...o.label!==void 0?{label:o.label}:{}}]})},ae=(t,e)=>`${t}\0${e}`,ze=(t,e,n)=>{const{widthOf:o,gapX:i,padX:s,maxWidth:r}=n,a=new Map;for(const c of e)a.set(ae(c.from,c.to),c),a.set(ae(c.to,c.from),c);const d=(c,g)=>c===void 0||g===void 0?void 0:a.get(ae(c,g)),l=c=>zt(c,g=>o(g))+i*Math.max(0,c.length-1)+s*2<=r,p=[];let m=[],u;const b=()=>{m.length!==0&&(p.push({sliceIds:m,...u===void 0?{}:{cutFrom:u}}),m=[],u=void 0)};for(const c of t.map(g=>g.id)){if(m.length>0&&!l([...m,c])){let g=m.length;for(;d(m[g-1],g===m.length?c:m[g])!==void 0&&(g-=1,g!==0););const f=g===0?[]:m.splice(g),x=g===0?d(m.at(-1),c):d(m.at(-1),f[0]);b(),m=f,u=x}m.push(c)}return b(),p},U=t=>[...t.notes].reverse().find(e=>e.type==="event")??t.notes.at(-1),De=(t,e)=>{const n=U(t),o=e.notes[0];if(!(n===void 0||o===void 0))return{from:n.id,to:o.id}},Pe={actor:"Actor",command:"Command",aggregate:"Aggregate",event:"Domain Event",policy:"Policy",readmodel:"Read Model",external:"External System",hotspot:"Hotspot"},Re={actor:"\u30A2\u30AF\u30BF\u30FC",command:"\u30B3\u30DE\u30F3\u30C9",aggregate:"\u96C6\u7D04",event:"\u30A4\u30D9\u30F3\u30C8",policy:"\u30DD\u30EA\u30B7\u30FC",readmodel:"\u30EA\u30FC\u30C9\u30E2\u30C7\u30EB",external:"\u5916\u90E8\u30B7\u30B9\u30C6\u30E0",hotspot:"\u30DB\u30C3\u30C8\u30B9\u30DD\u30C3\u30C8"},O=kt({en:{renameElementTitle:"Rename element",updateDescriptionTitle:"Update element description",changeTypeTitle:"Change element type",changeContextTitle:"Change the element\u2019s context",moveTitle:"Change timeline position",addElementTitle:"Add element",deleteElementTitle:"Delete element",linkTitle:"Link elements",renameLinkTitle:"Change link label",unlinkTitle:"Remove link",addContextTitle:"Add bounded context",renameContextTitle:"Rename bounded context",deleteContextTitle:"Delete bounded context",renamed:(t,e)=>`"${t}" \u2192 "${e}"`,noContext:"No context",moveToFront:"\u2192 To the front",moveAfter:t=>`\u2192 Right after "${t}"`,elementLabel:t=>`Element \xB7 ${t}`,contextLabel:t=>`Bounded context \xB7 ${t}`,linkLabel:(t,e)=>`Link \xB7 ${t}\u2192${e}`,linkGroup:"Link",pageLabel:t=>`Page \xB7 ${t}`,elementGroup:"Element",contextGroup:"Bounded context",noteTypeLabel:t=>Pe[t],addTypeLabel:t=>`+ ${Pe[t]}`,addHotspot:"+ Hotspot",pinHotspotTitle:"Pin a hotspot on this note",deleteNote:"Delete",noteNameLabel:"Note name",newContextTitle:"New bounded context",contextNamePlaceholder:"Context name",cancel:"Cancel",create:"Create",save:"Save",appendMenuNext:"Note to add next",appendMenuAfter:t=>`Continue after \u201C${t}\u201D`,emptyTitle:"No notes yet",emptyBody:"Start Event Storming by placing domain events on the timeline.",addFirstEvent:"+ First event",portAriaLabel:"Add what comes next (pick a type, or drag to connect to another slice)",portTitle:"Click: pick a note to continue / Drag: connect to another slice",renameContextHint:"Click to rename",dissolveContextAria:t=>`Dissolve bounded context "${t}"`,dissolveContextTitle:"Dissolve the bounded context (notes stay)",noteCount:t=>`${t} notes`,sliceCount:t=>`${t} slices`,contextCount:t=>`${t} bounded contexts`,hudHint:"Wheel: pan \xB7 Pinch: zoom \xB7 Drag background: select area",zoomOut:"Zoom out",zoomReset:"Reset to 100%",zoomIn:"Zoom in",zoomFit:"Fit to view",selectedLinks:t=>`${t} links selected`,deleteLinks:"Delete links",deleteHint:"Delete works too",clearSelection:"Clear selection",selectedSlices:t=>`${t} slices selected`,groupIntoContext:"Group into a bounded context",addToExistingAria:"Add to an existing bounded context",addToExistingOption:"Add to existing\u2026",removeFromContext:"Remove from context",deleteButton:"Delete"},ja:{renameElementTitle:"\u8981\u7D20\u540D\u3092\u5909\u66F4",updateDescriptionTitle:"\u8981\u7D20\u306E\u8AAC\u660E\u3092\u66F4\u65B0",changeTypeTitle:"\u8981\u7D20\u306E\u7A2E\u5225\u3092\u5909\u66F4",changeContextTitle:"\u6240\u5C5E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4",moveTitle:"\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u4F4D\u7F6E\u3092\u5909\u66F4",addElementTitle:"\u8981\u7D20\u3092\u8FFD\u52A0",deleteElementTitle:"\u8981\u7D20\u3092\u524A\u9664",linkTitle:"\u8981\u7D20\u3092\u9023\u7D50",renameLinkTitle:"\u30EA\u30F3\u30AF\u540D\u3092\u5909\u66F4",unlinkTitle:"\u30EA\u30F3\u30AF\u3092\u524A\u9664",addContextTitle:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0",renameContextTitle:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u540D\u3092\u5909\u66F4",deleteContextTitle:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u524A\u9664",renamed:(t,e)=>`"${t}" \u2192 "${e}"`,noContext:"\u672A\u6240\u5C5E",moveToFront:"\u2192 \u5148\u982D\u3078",moveAfter:t=>`\u2192 "${t}" \u306E\u76F4\u5F8C\u3078`,elementLabel:t=>`\u8981\u7D20 \xB7 ${t}`,contextLabel:t=>`\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8 \xB7 ${t}`,linkLabel:(t,e)=>`\u30EA\u30F3\u30AF \xB7 ${t}\u2192${e}`,linkGroup:"\u30EA\u30F3\u30AF",pageLabel:t=>`\u30DA\u30FC\u30B8 \xB7 ${t}`,elementGroup:"\u8981\u7D20",contextGroup:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8",noteTypeLabel:t=>Re[t],addTypeLabel:t=>`+ ${Re[t]}`,addHotspot:"+ \u30DB\u30C3\u30C8\u30B9\u30DD\u30C3\u30C8",pinHotspotTitle:"\u3053\u306E\u4ED8\u7B8B\u306B\u30DB\u30C3\u30C8\u30B9\u30DD\u30C3\u30C8\u3092\u7ACB\u3066\u308B",deleteNote:"\u524A\u9664",noteNameLabel:"\u4ED8\u7B8B\u540D",newContextTitle:"\u65B0\u3057\u3044\u5883\u754C\u3065\u3051\u3089\u308C\u305F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8",contextNamePlaceholder:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u540D",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",create:"\u4F5C\u6210",save:"\u4FDD\u5B58",appendMenuNext:"\u7D9A\u304D\u306B\u8FFD\u52A0\u3059\u308B\u4ED8\u7B8B",appendMenuAfter:t=>`\u300C${t}\u300D\u306E\u7D9A\u304D\u306B\u8FFD\u52A0`,emptyTitle:"\u4ED8\u7B8B\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",emptyBody:"\u30A4\u30D9\u30F3\u30C8\u30B9\u30C8\u30FC\u30DF\u30F3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3057\u3087\u3046\u3002\u30C9\u30E1\u30A4\u30F3\u30A4\u30D9\u30F3\u30C8\u3092\u6642\u7CFB\u5217\u306B\u8CBC\u308B\u3068\u3053\u308D\u304B\u3089\u59CB\u3081\u307E\u3059\u3002",addFirstEvent:"+ \u6700\u521D\u306E\u30A4\u30D9\u30F3\u30C8",portAriaLabel:"\u7D9A\u304D\u3092\u8FFD\u52A0\uFF08\u7A2E\u985E\u3092\u9078\u3093\u3067\u8FFD\u52A0 / \u30C9\u30E9\u30C3\u30B0\u3067\u4ED6\u306E\u30B9\u30E9\u30A4\u30B9\u3078\u63A5\u7D9A\uFF09",portTitle:"\u30AF\u30EA\u30C3\u30AF: \u7D9A\u304D\u306E\u4ED8\u7B8B\u3092\u9078\u3093\u3067\u8FFD\u52A0 / \u30C9\u30E9\u30C3\u30B0: \u4ED6\u306E\u30B9\u30E9\u30A4\u30B9\u3078\u63A5\u7D9A",renameContextHint:"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u540D\u524D\u3092\u5909\u66F4",dissolveContextAria:t=>`\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u300C${t}\u300D\u3092\u89E3\u4F53`,dissolveContextTitle:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u89E3\u4F53\uFF08\u4ED8\u7B8B\u306F\u6B8B\u308A\u307E\u3059\uFF09",noteCount:t=>`${t} \u4ED8\u7B8B`,sliceCount:t=>`${t} \u30B9\u30E9\u30A4\u30B9`,contextCount:t=>`${t} \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8`,hudHint:"\u30DB\u30A4\u30FC\u30EB: \u79FB\u52D5 \xB7 \u30D4\u30F3\u30C1: \u30BA\u30FC\u30E0 \xB7 \u80CC\u666F\u30C9\u30E9\u30C3\u30B0: \u7BC4\u56F2\u9078\u629E",zoomOut:"\u7E2E\u5C0F",zoomReset:"100% \u306B\u623B\u3059",zoomIn:"\u62E1\u5927",zoomFit:"\u5168\u4F53\u3092\u8868\u793A",selectedLinks:t=>`${t} \u672C\u306E\u30EA\u30F3\u30AF\u3092\u9078\u629E\u4E2D`,deleteLinks:"\u30EA\u30F3\u30AF\u3092\u524A\u9664",deleteHint:"Delete \u3067\u3082\u524A\u9664\u3067\u304D\u307E\u3059",clearSelection:"\u9078\u629E\u89E3\u9664",selectedSlices:t=>`${t} \u30B9\u30E9\u30A4\u30B9\u3092\u9078\u629E\u4E2D`,groupIntoContext:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u307E\u3068\u3081\u308B",addToExistingAria:"\u65E2\u5B58\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3078\u8FFD\u52A0",addToExistingOption:"\u65E2\u5B58\u3078\u8FFD\u52A0\u2026",removeFromContext:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u89E3\u9664",deleteButton:"\u524A\u9664"}}),Gt={SET_ELEMENT_NAME:(t,e,n)=>({title:t.renameElementTitle,tone:"update",body:t.renamed(D(n,e.target.id)?.name??"?",$(w.SET_ELEMENT_NAME,e).name)}),SET_ELEMENT_DESCRIPTION:(t,e)=>({title:t.updateDescriptionTitle,tone:"update",body:`\u2192 "${$(w.SET_ELEMENT_DESCRIPTION,e).description.slice(0,60)}"`}),SET_ELEMENT_TYPE:(t,e)=>({title:t.changeTypeTitle,tone:"update",body:`\u2192 ${$(w.SET_ELEMENT_TYPE,e).type}`}),SET_ELEMENT_CONTEXT:(t,e)=>({title:t.changeContextTitle,tone:"move",body:`\u2192 ${$(w.SET_ELEMENT_CONTEXT,e).contextId??t.noContext}`}),MOVE_ELEMENT:(t,e)=>({title:t.moveTitle,tone:"move",body:$(w.MOVE_ELEMENT,e).after===null?t.moveToFront:t.moveAfter($(w.MOVE_ELEMENT,e).after??"")}),ADD_ELEMENT:(t,e)=>({title:t.addElementTitle,tone:"create",body:`+ "${$(w.ADD_ELEMENT,e).name}"`}),DELETE_ELEMENT:(t,e,n)=>({title:t.deleteElementTitle,tone:"delete",body:`\u2212 "${D(n,e.target.id)?.name??e.target.id}"`}),LINK_ELEMENTS:(t,e)=>({title:t.linkTitle,tone:"create",body:`${$(w.LINK_ELEMENTS,e).from} \u2192 ${$(w.LINK_ELEMENTS,e).to}`}),SET_LINK_LABEL:(t,e)=>({title:t.renameLinkTitle,tone:"update",body:`\u2192 "${$(w.SET_LINK_LABEL,e).label}"`}),UNLINK_ELEMENTS:(t,e)=>({title:t.unlinkTitle,tone:"delete",body:`${$(w.UNLINK_ELEMENTS,e).from} \u2192 ${$(w.UNLINK_ELEMENTS,e).to}`}),ADD_CONTEXT:(t,e)=>({title:t.addContextTitle,tone:"create",body:`+ "${$(w.ADD_CONTEXT,e).name}"`}),SET_CONTEXT_NAME:(t,e)=>({title:t.renameContextTitle,tone:"update",body:`\u2192 "${$(w.SET_CONTEXT_NAME,e).name}"`}),DELETE_CONTEXT:(t,e,n)=>({title:t.deleteContextTitle,tone:"delete",body:`\u2212 "${Y(n,e.target.id)?.name??e.target.id}"`})},Be=(t,e,n,o)=>{const i=Gt[e.type],r=i?i(t,e,o??n):{title:e.type,tone:"meta"};return{title:r.title,targetLabel:Ye(t,n,e.target),tone:r.tone,...r.body===void 0?{}:{summary:r.body}}},Xe=t=>`${t.type} ${W(t.target)} ${JSON.stringify(t.payload)}`,Ye=(t,e,n)=>{switch(n.type){case"element":{const o=D(e,n.id);return o?t.elementLabel(o.name):`${t.elementLabel(n.id)} (missing)`}case"context":{const o=Y(e,n.id);return o?t.contextLabel(o.name):`${t.contextLabel(n.id)} (missing)`}case"link":{const o=re(e,n.id);return o?t.linkLabel(o.from,o.to):`${t.linkGroup} \xB7 ${n.id} (missing)`}case"page":return t.pageLabel(de(e));default:return`${n.type} \xB7 ${n.id}`}},He=(t,e)=>[...e.elements.map(n=>({value:W({type:"element",id:n.id}),label:n.name,group:t.elementGroup})),...e.contexts.map(n=>({value:W({type:"context",id:n.id}),label:n.name,group:t.contextGroup}))],Ut=(t,e,n)=>{const o=e.elements.find(i=>i.id===n.note);return o?{value:W({type:"element",id:o.id}),label:o.name,group:t.elementGroup}:null},de=t=>t.title??"Event Storming",Ke=(t,e)=>{const n={...e},o=D(t,e.note);e.note!==void 0&&!o&&delete n.note;const i=Y(t,e.context);return e.context!==void 0&&!i&&delete n.context,n},We=(t,e)=>{switch(e.type){case"element":return D(t,e.id)!==void 0;case"context":return Y(t,e.id)!==void 0;case"link":return re(t,e.id)!==void 0;case"page":return!0;default:return!1}},Fe=t=>{const e=O(t);return{name:"event-storming",label:"Event Storming",parseBase:Me,emptyBase:Ne,actions:w,apply:_e,canonicalState:Ft,hasTarget:We,describe:(n,o,i)=>Be(e,n,o,i),serialize:Xe,resolveNavigation:Ke,navigationFor:(n,o)=>o.type==="element"&&D(n,o.id)!==void 0?{note:o.id}:null,commentTargets:(n,o)=>He(e,n),currentTarget:(n,o)=>Ut(e,n,o),title:de}},Vt={width:300,height:260},qt={event:{bg:"linear-gradient(178deg, #ffbc55, #f8a52e)",ink:"#402703"},command:{bg:"linear-gradient(178deg, #93c9f2, #74b4e8)",ink:"#0e2c4b"},aggregate:{bg:"linear-gradient(178deg, #fff3a6, #fdea7e)",ink:"#4a3a06"},actor:{bg:"linear-gradient(178deg, #ffdf63, #fdd23e)",ink:"#423204"},policy:{bg:"linear-gradient(178deg, #dcc2f7, #c9a6f0)",ink:"#32195c"},readmodel:{bg:"linear-gradient(178deg, #c0e788, #a8dc63)",ink:"#22380a"},external:{bg:"linear-gradient(178deg, #f9bcd3, #f4a0c0)",ink:"#4b1029"},hotspot:{bg:"linear-gradient(178deg, #d63550, #b81c33)",ink:"#ffffff"}},le=t=>{const{bg:e,ink:n}=qt[t];return`--es-note-bg:${e};--es-note-ink:${n}`},jt=ye`
  :host {
    display: flex;
    flex-direction: column;
    /* Top-aligned: the name stays put when the editor takes its place. */
    justify-content: flex-start;
    position: relative;
    box-sizing: border-box;
    padding: 16px 9px 8px;
    border-radius: 3px;
    background:
      linear-gradient(165deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0) 40%),
      var(--es-note-bg, var(--dpk-paper-raised));
    color: var(--es-note-ink, var(--dpk-ink));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 1px 2px rgba(30, 24, 10, 0.14),
      0 5px 10px -4px rgba(30, 24, 10, 0.24);
    cursor: pointer;
    transform: rotate(var(--es-tilt, 0deg));
    transition:
      transform 180ms var(--dpk-ease),
      box-shadow 180ms var(--dpk-ease);
    overflow: visible;
  }

  /* A dog-eared corner: a quiet cue that this is a paper note, not a flat chip. */
  :host::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 13px;
    height: 13px;
    background: linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.16) 50%);
    border-bottom-left-radius: 3px;
    opacity: 0.6;
    pointer-events: none;
  }

  :host(:hover) {
    transform: rotate(0deg) translateY(-2px);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.32),
      0 2px 4px rgba(30, 24, 10, 0.16),
      0 12px 22px -6px rgba(30, 24, 10, 0.3);
    z-index: 6;
  }

  :host([focused]) {
    outline: 2px solid var(--dpk-blue);
    outline-offset: 2px;
    transform: rotate(0deg);
    z-index: 5;
  }

  :host([data-mode='editing']),
  :host([data-mode='commenting']) {
    z-index: 7;
    transform: rotate(0deg);
  }

  /* --------------------------------------------------- sticky note palette */

  /* Small, faint, top-left: readable when looked for, quiet when not. */
  .note-type {
    position: absolute;
    top: 5px;
    left: 7px;
    font-family: var(--dpk-mono);
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.12em;
    opacity: 0.5;
  }

  /* Pinned hotspots are small: the type label is off and the name is centered. */
  :host([compact]) {
    justify-content: center;
    padding: 7px 9px 8px;
  }

  :host([compact]) .note-type {
    display: none;
  }

  .note-name {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    font-size: 13px;
    font-weight: 680;
    line-height: 1.32;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
    /* As many lines as the fixed-size card holds; the rest ends in an ellipsis. */
    --dpk-inline-edit-lines: 4;
  }

  :host([compact]) .note-name {
    flex: 0 1 auto;
    font-size: 11.5px;
    line-height: 1.3;
  }

  /* Comments already left: a passive corner flag, readable without hover. */
  .note-flag {
    position: absolute;
    top: -7px;
    right: -7px;
    min-width: 17px;
    height: 17px;
    padding: 0 4px;
    border: 1.5px solid var(--dpk-paper-raised);
    border-radius: 999px;
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent));
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 9.5px;
    font-weight: 650;
    line-height: 17px;
    text-align: center;
    box-shadow: 0 1px 4px rgba(217, 73, 32, 0.35);
  }

  /* A side rail of round buttons that fades in on hover, like the hotspot chip:
     nothing crosses the card's face, and it stays clear of the pins above. */
  .note-tools {
    position: absolute;
    top: 9px;
    right: -11px;
    z-index: 8;
    display: flex;
    flex-direction: column;
    gap: 3px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 140ms ease;
  }

  /* Labelled, not a glyph: the hotspot affordance names itself on the card's
     top-right corner. It stays above the pins, which hang above that corner. */
  .note-hotspot {
    position: absolute;
    top: -9px;
    right: -4px;
    z-index: 9;
    padding: 2px 7px;
    border: 1px solid color-mix(in srgb, var(--dpk-danger) 45%, transparent);
    border-radius: 999px;
    font-size: 9.5px;
    font-weight: 620;
    white-space: nowrap;
    color: var(--dpk-danger);
    background: color-mix(in srgb, var(--dpk-paper-raised) 94%, transparent);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 140ms var(--dpk-ease),
      transform 140ms var(--dpk-ease-spring),
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }

  :host(:hover) .note-hotspot,
  :host([data-mode='editing']) .note-hotspot,
  .note-hotspot:focus-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .note-hotspot:hover {
    border-color: var(--dpk-danger);
    background: var(--dpk-danger-soft);
    transform: translateY(-1px);
  }

  :host(:hover) .note-tools,
  :host([data-mode='commenting']) .note-tools,
  .note-tools:focus-within {
    opacity: 1;
    pointer-events: auto;
  }

  .note-tools .dpk-icon-btn {
    width: 22px;
    height: 22px;
    border: 1px solid var(--dpk-rule);
    border-radius: 50%;
    background: color-mix(in srgb, var(--dpk-paper-raised) 94%, transparent);
    backdrop-filter: blur(4px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }
`;class Zt extends Et{static{this.styles=[yt,jt,we]}static{this.properties={note:{attribute:!1},notes:{attribute:!1},mode:{type:String,reflect:!0,attribute:"data-mode"},focused:{type:Boolean,reflect:!0},compact:{type:Boolean,reflect:!0},onIntent:{attribute:!1}}}#e="";#n=new $e(this);#o=new wt(this);constructor(){super(),this.note=null,this.notes=[],this.mode="view",this.focused=!1,this.compact=!1,this.onIntent=null,this.addEventListener("click",()=>this.#r({kind:"select"}))}updated(e){if(e.has("note")&&this.note&&(this.setAttribute("data-type",this.note.type),this.note.description===void 0?this.removeAttribute("title"):this.setAttribute("title",this.note.description)),e.has("mode")&&(this.mode!=="commenting"&&(this.#e=""),this.mode==="editing"&&this.renderRoot.querySelector("dpk-component-inline-edit")?.startEditing()),this.mode!=="commenting")return;const n=this.renderRoot.querySelector(".comment-pop"),o=this.renderRoot.querySelector('[data-role="comment"]');n&&o&&this.#n.open(n,o,Vt)}render(){const e=this.note;if(!e)return T;const n=O(this.#o.locale),o=Ct(this.#o.locale);return k`
      <div class="note-type">${n.noteTypeLabel(e.type)}</div>
      <dpk-component-inline-edit
        class="note-name"
        ?wrap=${!0}
        ?truncate=${!this.compact}
        ?seamless=${!0}
        .value=${e.name}
        .label=${n.noteNameLabel}
        @dpk-commit=${$t(i=>this.#r({kind:"rename",name:i}))}
      ></dpk-component-inline-edit>
      ${this.notes.length>0?k`<span class="note-flag">${this.notes.length}</span>`:T}
      ${e.type==="hotspot"?T:k`<button
              class="note-hotspot"
              type="button"
              data-role="hotspot"
              title=${n.pinHotspotTitle}
              @click=${this.#s(()=>({kind:"add-hotspot"}))}
            >
              ${n.addHotspot}
            </button>`}
      <div class="note-tools">
        <button
          class="dpk-icon-btn"
          type="button"
          data-role="comment"
          aria-label=${o.comment}
          data-active=${String(this.mode==="commenting")}
          @click=${this.#s(()=>({kind:"toggle-comment"}))}
        >
          ${Tt()}
        </button>
        <button
          class="dpk-icon-btn"
          type="button"
          data-role="delete"
          aria-label=${n.deleteNote}
          @click=${this.#s(()=>({kind:"delete"}))}
        >
          ${St()}
        </button>
      </div>
      ${this.mode==="commenting"?this.#t(o):T}
    `}#t(e){return Ot(e,At(this.#e,this.notes.map(It),this.note?{key:`note:${this.note.id}`}:{}),n=>{n.kind==="input"?(this.#e=n.body,this.requestUpdate()):this.#r(n)})}#s(e){return n=>{n.stopPropagation(),this.#r(e(n))}}#r(e){this.onIntent?.(e)}}const Jt=()=>{customElements.get("dpk-internal-event-storming-note")||customElements.define("dpk-internal-event-storming-note",Zt)},ce=.25,Ge=2,pe=(t,e,n)=>({...t,panX:t.panX+e,panY:t.panY+n}),Ue=(t,e,n,o)=>t>=o&&t+e<=n-o?0:t<o||e>n-2*o?o-t:n-o-(t+e),Qt=(t,e,n,o)=>{const i=Ue(e.left,e.width,n.width,o),s=Ue(e.top,e.height,n.height,o);return i===0&&s===0?t:pe(t,i,s)},he=(t,e,n,o)=>{const i=Ie(t.zoom*o,ce,Ge),s=(e-t.panX)/t.zoom,r=(n-t.panY)/t.zoom;return{panX:e-s*i,panY:n-r*i,zoom:i}},Ve=(t,e,n)=>{const o=Math.max(1,e.width-n*2),i=Math.max(1,e.height-n*2),s=Math.max(ce,Math.min(1,o/Math.max(1,t.width),i/Math.max(1,t.height)));return{panX:(e.width-t.width*s)/2,panY:(e.height-t.height*s)/2,zoom:s}},qe=(t,e,n,o)=>{const i=(s,r,a,d)=>{const l=a*t.zoom;return l<=d?(d-l)/2-r*t.zoom:Math.min(-r*t.zoom,Math.max(d-(r+a)*t.zoom,s))};return{zoom:t.zoom,panX:i(t.panX,-o,e.width+o*2,n.width),panY:i(t.panY,-o,e.height+o*2,n.height)}},en=(t,e,n)=>e>=t.left&&e<=t.left+t.width&&n>=t.top&&n<=t.top+t.height,me=(t,e,n)=>{for(let o=t.length-1;o>=0;o-=1){const i=t[o];if(i!==void 0&&en(i.rect,e,n))return i.id}},je=(t,e)=>e<t.left+t.width/2?"before":"after",Ze=(t,e)=>t.filter(({rect:n})=>n.left<e.left+e.width&&e.left<n.left+n.width&&n.top<e.top+e.height&&e.top<n.top+n.height).map(({id:n})=>n),ue=(t,e,n,o)=>{const i=new Set(e);if(n.some(p=>i.has(p)))return[];const s=t.filter(p=>!i.has(p)),r=n.map(p=>s.indexOf(p)).filter(p=>p>=0);if(r.length===0)return[];const a=o==="before"?Math.min(...r):Math.max(...r)+1,d=[];let l=s[a-1]??null;for(const p of t)i.has(p)&&(d.push({id:p,after:l}),l=p);return d},Je=(t,e,n,o)=>{const i=ue(t,e,n,o);if(i.length===0)return i;const s=[...t];for(const r of i){const a=s.indexOf(r.id),d=a<0?void 0:s[a];d!==void 0&&(s.splice(a,1),s.splice(r.after===null?0:s.indexOf(r.after)+1,0,d))}return Lt(s,t)?[]:i},Qe=(t,e,n,o=4)=>{if(e.pointerId!==t.pointerId)return t;const{point:i}=e,s={pointerId:t.pointerId,start:t.start,current:i,moved:t.moved||Math.hypot(i.x-t.start.x,i.y-t.start.y)>o},r=me(n,i.x,i.y);switch(t.kind){case"connect":return{...s,kind:"connect",fromSliceId:t.fromSliceId,...r!==void 0&&r!==t.fromSliceId?{targetSliceId:r}:{}};case"move-slice":{const a=n.find(d=>d.id===r)?.rect;return{...s,kind:"move-slice",sliceId:t.sliceId,...r!==void 0&&r!==t.sliceId&&a!==void 0?{drop:{sliceId:r,side:je(a,i.x)}}:{}}}case"select":return{...s,kind:"select"}}},fe="data-pin";class tn{#e;#n=new Set;#o;#t=new Map;constructor(e){this.#e=e,e.addController(this)}get heights(){return this.#t}hostConnected(){typeof ResizeObserver>"u"||(this.#o=new ResizeObserver(e=>this.#s(e)))}hostUpdated(){const e=this.#o;if(e===void 0)return;const n=new Set(this.#e.renderRoot.querySelectorAll(`[${fe}]`));for(const i of this.#n)n.has(i)||(e.unobserve(i),this.#n.delete(i));for(const i of n)this.#n.has(i)||(e.observe(i),this.#n.add(i));const o=new Set([...n].map(i=>i.getAttribute(fe)));[...this.#t.keys()].some(i=>!o.has(i))&&(this.#t=new Map([...this.#t].filter(([i])=>o.has(i))))}hostDisconnected(){this.#o?.disconnect(),this.#o=void 0,this.#n.clear()}#s(e){const n=new Map(this.#t);for(const o of e){const i=o.target.getAttribute(fe),s=o.borderBoxSize[0]?.blockSize;i===null||s===void 0||s===0||n.set(i,s)}[...n].every(([o,i])=>this.#t.get(o)===i)||(this.#t=n,this.#e.requestUpdate())}}const C={kind:"idle"},et=(t,e)=>t.kind==="editing"&&t.noteId===e?"editing":t.kind==="commenting"&&t.noteId===e?"commenting":"view",tt=(t,e,n)=>{switch(n.kind){case"toggle-comment":return t.kind==="commenting"&&t.noteId===e?C:{kind:"commenting",noteId:e};case"comment":case"delete":case"dismiss":return C;case"select":case"add-hotspot":return t;case"rename":return t.kind==="editing"&&t.noteId===e?C:t}},nn=6,on=10,nt="\u2026",sn=[[4352,4447],[11904,42191],[44032,55203],[63744,64255],[65072,65103],[65280,65376],[65504,65510],[127744,129791],[131072,262141]],ge=t=>{const e=t.codePointAt(0)??0;return sn.some(([n,o])=>e>=n&&e<=o)?on:nn},rn=(t,e)=>{const n=Array.from(t);if(n.reduce((s,r)=>s+ge(r),0)<=e)return t;let o=ge(nt),i="";for(const s of n){if(o+=ge(s),o>e)break;i+=s}return`${i}${nt}`},ot=92,xe=54,an=18,it=4,st=t=>{const e=[];let n=an;for(const o of t)e.push(n),n+=o+it;return{lifts:e,extent:t.length===0?0:n-it}},rt=240,V=132,at=96,be=10,Q=24,ee=12,P=at+ee*2,te=46,ne=16,dt=44,lt=40,ve=16,ct=13,H=8,dn=6,ln=26,cn=(t,e)=>Math.max(dt,t-ee+(e?ln:0)),pn=st([xe]).extent,hn=["actor","command","aggregate","event","policy","readmodel","external"],pt=t=>Q*2+t*V+(t-1)*be,mn=(t,e)=>{const n=new Map;let o=0;for(const i of t.notes){const s=t.pins.filter(a=>a.targetId===i.id),r=st(s.map(a=>e(a.note.id)));s.forEach((a,d)=>n.set(a.note.id,r.lifts[d]??0)),o=Math.max(o,r.extent)}return{liftOf:n,extent:o}},un=(t,e,n,o)=>{const i=new Map(e.map(f=>[f.id,pt(f.notes.length)])),s=Ae(t,e),r=ze(e,s,{widthOf:f=>i.get(f)??0,gapX:te,padX:ne,maxWidth:Math.max(n,pt(1))}),a=new Map,d=new Map,l=new Map,p=new Map,m=new Map,u=new Map(e.map(f=>[f.id,f.contextId]));for(const f of e){const x=mn(f,E=>o.get(E)??xe);for(const[E,h]of x.liftOf)p.set(E,h);m.set(f.id,x.extent)}let b=H;const c=r.map((f,x)=>{const E=f.cutFrom===void 0?void 0:d.get(f.cutFrom.from),h=E===void 0?0:Math.max(0,E-ne);let S=h+ne;const A=cn(Math.max(pn,...f.sliceIds.map(R=>m.get(R)??0)),f.sliceIds.some(R=>u.get(R)!==void 0));for(const R of f.sliceIds)a.set(R,S-h),d.set(R,S),l.set(R,x),S+=(i.get(R)??0)+te;const ke=A+P+lt,gt={sliceIds:f.sliceIds,x:h,width:S-te+ne-h,height:ke,y:b,head:A,cutFrom:f.cutFrom};return b+=ke+dn,gt}),g=c.at(-1);return{slices:e,bands:c,xOf:a,absXOf:d,bandOf:l,widthOf:i,pinLiftOf:p,arrows:s,width:Math.max(0,...c.map(f=>f.x+f.width))+H*2,height:g===void 0?H*2:g.y+g.height+H}},fn=t=>{const{m:e,context:n,maxRowWidth:o,pinHeights:i,viewport:s,handlers:r}=t,{state:a}=n,d=24*s.zoom,l=`background-size:${d}px ${d}px;background-position:${s.panX}px ${s.panY}px`;if(a.elements.length===0)return k`<div class="board-viewport board-viewport--empty" style=${l}>
      <div class="empty">
        <h2>${e.emptyTitle}</h2>
        <p>${e.emptyBody}</p>
        <button class="dpk-btn dpk-btn--accent" type="button" @click=${()=>r.addFirst()}>
          ${e.addFirstEvent}
        </button>
      </div>
    </div>`;const p=B(a),m=un(a,p,o,i);return k`
    <div
      class="board-viewport${t.gesture!==void 0?" board-viewport--gesturing":""}"
      data-testid="es-viewport"
      tabindex="0"
      style=${l}
      @pointerdown=${r.viewportPointerDown}
      @pointermove=${r.viewportPointerMove}
      @pointerup=${r.viewportPointerUp}
      @pointercancel=${r.viewportPointerCancel}
      @pointerleave=${r.viewportPointerLeave}
      @wheel=${r.viewportWheel}
      @keydown=${r.keyDown}
    >
      <div
        class="board-content"
        style=${`transform:translate(${s.panX}px, ${s.panY}px) scale(${s.zoom})`}
      >
        <div class="wall" data-testid="es-wall" style=${`width:${m.width}px;height:${m.height}px`}>
          ${$n(t,m)}
          ${m.bands.map((u,b)=>xn(t,m,u,b))}
        </div>
      </div>
      ${vn(t.gesture)} ${kn(e,a,p)} ${En(t)}
      ${yn(t)}
    </div>
  `},gn=(t,e)=>{const n=["slice"];t.selectedSliceIds.includes(e.id)&&n.push("slice--selected");const o=t.gesture;return o?.kind==="connect"&&o.moved&&(o.fromSliceId!==e.id&&n.push("slice--candidate"),o.targetSliceId===e.id&&n.push("slice--target")),o?.kind==="move-slice"&&o.moved&&(o.sliceId===e.id&&n.push("slice--lifted"),o.drop?.sliceId===e.id&&n.push(o.drop.side==="before"?"slice--insert-before":"slice--insert-after")),n.join(" ")},xn=(t,e,n,o)=>{const{m:i,context:s,mode:r,gesture:a,hoverSliceId:d,handlers:l}=t,{navigation:p}=s,m=n.sliceIds.flatMap(c=>e.slices.filter(g=>g.id===c)),u=c=>({x:e.xOf.get(c.id)??0,y:n.head,w:e.widthOf.get(c.id)??0}),b=(c,g,f=!1)=>k`<dpk-internal-event-storming-note
      style=${g}
      .note=${c}
      .notes=${s.comments.filter(x=>x.target.type==="element"&&x.target.id===c.id)}
      .mode=${et(r,c.id)}
      ?focused=${p.note===c.id}
      ?compact=${f}
      data-pin=${f?c.id:T}
      data-dpk-target=${`element:${c.id}`}
      .onIntent=${x=>l.noteIntent(c.id,x)}
    ></dpk-internal-event-storming-note>`;return k`
    <section class="band" data-band=${o} style=${`left:${H+n.x}px;top:${n.y}px`}>
      <div class="band-canvas" style=${`width:${n.width}px;height:${n.height}px`}>
        ${bn(t,e,o)}
        ${m.map(c=>{const{x:g,y:f,w:x}=u(c);return k`<div
            class=${gn(t,c)}
            data-slice-id=${c.id}
            style=${`left:${g}px;top:${f}px;width:${x}px;height:${P}px`}
            @pointerdown=${E=>l.slicePointerDown(c.id,E)}
          ></div>`})}
        ${Te(m.flatMap(c=>c.notes.map((g,f)=>({slice:c,note:g,slot:f}))),({note:c})=>c.id,({slice:c,note:g,slot:f})=>{const{x,y:E}=u(c),h=x+Q+f*(V+be);return b(g,`${le(g.type)};position:absolute;left:${h}px;top:${E+ee}px;width:${V}px;height:${at}px;--es-tilt:${In(g.id)}deg;z-index:2`)})}
        ${Te(m.flatMap(c=>{const g=u(c);return c.notes.flatMap((f,x)=>c.pins.filter(h=>h.targetId===f.id).map((h,S)=>({pin:h,slot:x,index:S,at:g})))}),({pin:c})=>c.note.id,({pin:c,slot:g,index:f,at:x})=>{const E=x.x+Q+g*(V+be),h=x.y+ee;return b(c.note,`${le(c.note.type)};position:absolute;left:${E+V-ot-6-f*10}px;bottom:${n.height-(h-(e.pinLiftOf.get(c.note.id)??0))}px;width:${ot}px;min-height:${xe}px;--es-tilt:-2.4deg;z-index:3`,!0)})}
        ${m.map(c=>{const{x:g,y:f,w:x}=u(c),E=d===c.id||a?.kind==="connect"&&a.fromSliceId===c.id;return k`<button
            class="slice-port${E?" slice-port--on":""}"
            type="button"
            style=${`left:${g+x-ct}px;top:${f+P/2-ct}px`}
            aria-label=${i.portAriaLabel}
            title=${i.portTitle}
            @pointerdown=${h=>l.portPointerDown(c.id,h)}
          >
            →
          </button>`})}
        ${m.map(c=>{if(d!==c.id||a!==void 0)return T;const{x:g,y:f}=u(c),x=new Set(c.notes.map(h=>h.type)),E=hn.filter(h=>!x.has(h));return k`<div
            class="slice-chips"
            style=${`left:${g}px;top:${f+P+6}px`}
            @pointerdown=${h=>h.stopPropagation()}
          >
            ${E.map(h=>k`<button class="slice-chip" type="button" @click=${()=>l.attachNote(c.id,h)}>
                  ${i.addTypeLabel(h)}
                </button>`)}
          </div>`})}
      </div>
    </section>
  `},bn=(t,e,n)=>{const{m:o,context:i,handlers:s}=t,r=i.state.contexts.flatMap((a,d)=>{const p=e.slices.filter(h=>h.contextId===a.id).flatMap(h=>{const S=e.xOf.get(h.id),A=e.bandOf.get(h.id);return S===void 0||A===void 0?[]:[{x:S,band:A,width:e.widthOf.get(h.id)??0}]}),m=p.filter(h=>h.band===n);if(m.length===0)return[];const u=Math.min(...m.map(h=>h.x))-10,b=Math.max(...m.map(h=>h.x+h.width))+10,c=14,g=(e.bands[n]?.head??dt)+P+12,f=p.some(h=>h.band<n)?"\u2026 ":"",x=p.some(h=>h.band>n)?" \u2026":"",E=String(d%5);return[k`<div
          class="context-region"
          data-hue=${E}
          data-dpk-target=${`context:${a.id}`}
          style=${`left:${u}px;top:${c}px;width:${b-u}px;height:${g-c}px`}
          title=${a.description??a.name}
        ></div>
        <div
          class="context-label"
          data-hue=${E}
          style=${`left:${u+10}px;top:${c}px;max-width:${b-u-20}px`}
          @pointerdown=${h=>h.stopPropagation()}
        >
          <button
            class="context-label-name"
            type="button"
            title=${`${a.name}
${o.renameContextHint}`}
            @click=${h=>s.renameContext(a.id,{x:h.clientX,y:h.clientY})}
          >
            ${f}${a.name}${x}
          </button>
          <button
            class="context-label-x"
            type="button"
            aria-label=${o.dissolveContextAria(a.name)}
            title=${o.dissolveContextTitle}
            @click=${()=>s.dissolveContext(a.id)}
          >
            ✕
          </button>
        </div>`]});return r.length>0?k`${r}`:T},vn=t=>{if(t===void 0||!t.moved)return T;if(t.kind==="connect")return k`<svg class="gesture-layer" aria-hidden="true">
      ${F`<path class="connect-line" d=${`M ${t.start.x} ${t.start.y} L ${t.current.x} ${t.current.y}`}></path>
      <circle class="connect-tip" cx=${t.current.x} cy=${t.current.y} r="5"></circle>`}
    </svg>`;if(t.kind==="select"){const e=Math.min(t.start.x,t.current.x),n=Math.min(t.start.y,t.current.y),o=Math.abs(t.current.x-t.start.x),i=Math.abs(t.current.y-t.start.y);return k`<div
      class="select-rect"
      style=${`left:${e}px;top:${n}px;width:${o}px;height:${i}px`}
    ></div>`}return T},kn=(t,e,n)=>k`<div class="board-hud">
    <span class="board-hud-stat">${t.noteCount(e.elements.length)}</span>
    <span class="board-hud-stat">${t.sliceCount(n.length)}</span>
    <span class="board-hud-stat">${t.contextCount(e.contexts.length)}</span>
    <span class="board-hint">${t.hudHint}</span>
  </div>`,En=t=>{const{m:e,viewport:n,handlers:o}=t;return k`<div class="board-zoom" @pointerdown=${i=>i.stopPropagation()}>
    <button type="button" aria-label=${e.zoomOut} @click=${()=>o.zoomStep(-1)}>−</button>
    <button type="button" class="board-zoom-pct" title=${e.zoomReset} @click=${()=>o.zoomReset()}>
      ${Math.round(n.zoom*100)}%
    </button>
    <button type="button" aria-label=${e.zoomIn} @click=${()=>o.zoomStep(1)}>+</button>
    <button type="button" aria-label=${e.zoomFit} title=${e.zoomFit} @click=${()=>o.zoomFit()}>⛶</button>
  </div>`},yn=t=>{const{m:e,context:n,selectedSliceIds:o,selectedLinkIds:i,handlers:s}=t;if(i.length===0&&o.length===0)return T;const r=n.state.contexts;return i.length>0?k`<div class="board-selection" @pointerdown=${a=>a.stopPropagation()}>
      <span class="board-selection-count">${e.selectedLinks(i.length)}</span>
      <button class="dpk-btn dpk-btn--accent" type="button" @click=${()=>s.deleteSelection()}>
        ${e.deleteLinks}
      </button>
      <span class="board-selection-hint">${e.deleteHint}</span>
      <button
        class="dpk-icon-btn"
        type="button"
        aria-label=${e.clearSelection}
        @click=${()=>s.clearSelection()}
      >
        ✕
      </button>
    </div>`:k`<div class="board-selection" @pointerdown=${a=>a.stopPropagation()}>
    <span class="board-selection-count">${e.selectedSlices(o.length)}</span>
    <button
      class="dpk-btn dpk-btn--accent"
      type="button"
      @click=${a=>s.groupSelection({x:a.clientX,y:a.clientY})}
    >
      ${e.groupIntoContext}
    </button>
    ${r.length>0?k`<select
            class="dpk-select"
            aria-label=${e.addToExistingAria}
            @change=${a=>{const d=Mt(a.target,HTMLSelectElement);d!==null&&(d.value!==""&&s.assignSelection(d.value),d.value="")}}
          >
            <option value="" selected>${e.addToExistingOption}</option>
            ${r.map(a=>k`<option value=${a.id}>${a.name}</option>`)}
          </select>`:T}
    <button class="dpk-btn" type="button" @click=${()=>s.stripSelectionContext()}>
      ${e.removeFromContext}
    </button>
    <button class="dpk-btn" type="button" @click=${()=>s.deleteSelection()}>${e.deleteButton}</button>
    <button class="dpk-icon-btn" type="button" aria-label=${e.clearSelection} @click=${()=>s.clearSelection()}>
      ✕
    </button>
  </div>`},ht=(t,e,n,o)=>({d:`M ${t.x} ${t.y} C ${e.x} ${e.y}, ${n.x} ${n.y}, ${o.x} ${o.y}`,mid:{x:(t.x+3*e.x+3*n.x+o.x)/8,y:(t.y+3*e.y+3*n.y+o.y)/8}}),wn=()=>F`<marker id="es-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,0 L8,4 L0,8 z"></path>
  </marker>`,$n=(t,e)=>{const n="url(#es-arrow)",o=[],i=a=>{const d=e.absXOf.get(a),l=e.bandOf.get(a),p=l===void 0?void 0:e.bands[l];if(!(d===void 0||l===void 0||p===void 0))return{x:H+d,y:p.y+p.head,w:e.widthOf.get(a)??0,band:l}},s=a=>{const d=e.bands[a];return d===void 0?0:d.y+d.height},r=(a,d,l,p,m)=>{const u=t.selectedLinkIds.includes(a.id)?" is-selected":"",b={start:6,end:-6,middle:0}[p];o.push(F`<g data-link-id=${a.id} data-dpk-target=${`link:${a.id}`}>
        <path class="link-hit" d=${d} @pointerdown=${c=>c.stopPropagation()} @click=${c=>t.handlers.linkClick(a.id,c.shiftKey||c.metaKey||c.ctrlKey)}></path>
        <path class=${`link-path${u}`} d=${d} marker-end=${n}></path>
        ${a.label===void 0?T:F`<text class="link-label" x=${l.x+b} y=${l.y-6} text-anchor=${p}><title>${a.label}</title>${rn(a.label,Math.min(m,rt))}</text>`}
      </g>`)};for(const a of e.arrows){const d=i(a.from),l=i(a.to);if(d===void 0||l===void 0)continue;if(d.band===l.band){const f=l.x>=d.x+d.w,x=f?l.x-(d.x+d.w):d.x-(l.x+l.w);if(x<=te+2){const h=d.y+P/2,S=f?d.x+d.w:d.x,A=f?l.x:l.x+l.w;r(a,`M ${S} ${h} L ${A} ${h}`,{x:(S+A)/2,y:h},"middle",Math.abs(A-S)-4);continue}const E=Tn(d,l,s(d.band)-lt/2);r(a,E.d,E.mid,"middle",x+2*Q);continue}const p=d.y<l.y,m=d.x+ve,u=Ie(m,l.x+ve,l.x+l.w-ve),b={x:m,y:p?d.y+P:d.y},c={x:u,y:p?l.y:l.y+P},g=p?(s(d.band)+(e.bands[l.band]?.y??0))/2:(s(l.band)+(e.bands[d.band]?.y??0))/2;r(a,Sn([b,{x:b.x,y:g},{x:c.x,y:g},c]),{x:c.x-6,y:g},"end",rt)}return F`<svg class="links-layer" width=${e.width} height=${e.height}>
    <defs>${wn()}</defs>
    ${o}
  </svg>`},Tn=(t,e,n)=>{const o=t.y+P;if(e.x>=t.x+t.w){const r={x:t.x+t.w-18,y:o},a={x:e.x+18,y:o};return ht(r,{x:r.x+48,y:n},{x:a.x-48,y:n},a)}const i={x:t.x+18,y:o},s={x:e.x+e.w-18,y:o};return ht(i,{x:i.x-48,y:n},{x:s.x+48,y:n},s)},Sn=(t,e=10)=>{let n=`M ${t[0]?.x??0} ${t[0]?.y??0}`;for(let i=1;i<t.length-1;i+=1){const s=t[i-1],r=t[i],a=t[i+1];if(s===void 0||r===void 0||a===void 0)continue;const d=Math.sign(r.x-s.x),l=Math.sign(r.y-s.y),p=Math.sign(a.x-r.x),m=Math.sign(a.y-r.y),u=Math.hypot(r.x-s.x,r.y-s.y),b=Math.hypot(a.x-r.x,a.y-r.y),c=Math.max(0,Math.min(e,u/2,b/2));n+=` L ${r.x-d*c} ${r.y-l*c} Q ${r.x} ${r.y} ${r.x+p*c} ${r.y+m*c}`}const o=t.at(-1);return o===void 0?n:`${n} L ${o.x} ${o.y}`},In=t=>{let e=0;for(const n of t)e=(e*31+n.charCodeAt(0))%997;return(e%17-8)*.09},Ln=ye`
  /* The board owns the whole main area; the viewport clips, never the shell. */
  .dpk-main {
    overflow: hidden;
  }

  .dpk-main-body {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0;
  }

  /* ------------------------------------------------------------- viewport */

  /* An infinite pannable surface; the dot grid scrolls with the content
     (background-position/-size are set inline from the viewport state). A
     quiet sunken tray reads as the working surface under the wall. */
  .board-viewport {
    position: relative;
    /* The board's own floating controls stack inside it, under the page's overlays (the review rail). */
    isolation: isolate;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    touch-action: none;
    background: var(--dpk-dots), var(--dpk-paper-sunken);
  }

  .board-viewport--gesturing,
  .board-viewport--gesturing * {
    user-select: none;
  }

  .board-viewport--empty {
    display: grid;
    place-items: center;
    padding: 24px;
  }

  .board-viewport:focus-visible {
    outline: none;
    box-shadow: inset var(--dpk-focus);
  }

  .board-content {
    position: absolute;
    left: 0;
    top: 0;
    width: max-content;
    transform-origin: 0 0;
    will-change: transform;
  }

  /* The wall is a fixed-size canvas: bands and the arrow layer are placed inside
     it at explicit coordinates, so an arrow may span several bands. */
  .wall {
    position: relative;
  }

  .band {
    position: absolute;
    display: flex;
    align-items: flex-start;
  }

  .band-canvas {
    position: relative;
    flex: 0 0 auto;
  }

  /* ---------------------------------------------------------------- slices */

  /* One causal slice: its notes framed together, read left to right.
     The frame is also the drag handle for moving the whole slice. */
  .slice {
    position: absolute;
    z-index: 1;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: color-mix(in srgb, var(--dpk-paper-raised) 82%, transparent);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: grab;
    transition:
      border-color 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease);
  }

  .slice:hover {
    border-color: var(--dpk-rule-hover);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
  }

  .slice--selected {
    border-color: var(--dpk-blue);
    background: color-mix(in srgb, var(--dpk-blue-soft) 60%, var(--dpk-paper-raised));
    box-shadow:
      var(--dpk-bevel),
      0 0 0 2px var(--dpk-blue-soft),
      var(--dpk-shadow-sm);
  }

  /* While a connection drag is out: everywhere it may land lights up dashed… */
  .slice--candidate {
    border: 1.5px dashed color-mix(in srgb, var(--dpk-blue) 55%, transparent);
  }

  /* …and the slice under the cursor confirms the landing. */
  .slice--target {
    border: 1.5px solid var(--dpk-blue);
    background: color-mix(in srgb, var(--dpk-blue-soft) 55%, transparent);
    box-shadow:
      0 0 0 3px var(--dpk-blue-soft),
      var(--dpk-shadow-sm);
  }

  /* The slice being carried by a move drag. */
  .slice--lifted {
    opacity: 0.45;
    border-style: dashed;
    cursor: grabbing;
  }

  /* Insertion bar on the side of the drop target the slice will land on. */
  .slice--insert-before::before,
  .slice--insert-after::after {
    content: '';
    position: absolute;
    top: -6px;
    bottom: -6px;
    width: 3px;
    border-radius: 2px;
    background: var(--dpk-blue);
  }

  .slice--insert-before::before {
    left: -10px;
  }

  .slice--insert-after::after {
    right: -10px;
  }

  /* Connection port on a slice's right edge: click continues, drag connects.
     Shown only for the hovered slice (hover is hit-tested by the element,
     with padding, so it stays up while the cursor crosses over to it). */
  .slice-port {
    position: absolute;
    z-index: 5;
    width: 26px;
    height: 26px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 50%;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink-soft);
    font-size: 13px;
    line-height: 1;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: crosshair;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 120ms var(--dpk-ease),
      border-color 120ms var(--dpk-ease),
      color 120ms var(--dpk-ease),
      background 120ms var(--dpk-ease),
      transform 160ms var(--dpk-ease-spring);
  }

  .slice-port--on,
  .slice-port:focus-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .slice-port:hover {
    border-color: var(--dpk-blue);
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
    transform: scale(1.08);
  }

  /* Add-note chips under the hovered slice: the roles it is still missing. */
  .slice-chips {
    position: absolute;
    z-index: 6;
    display: flex;
    gap: 4px;
    padding: 2px 0;
  }

  .slice-chip {
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: 999px;
    padding: 3px 9px;
    font-size: 10.5px;
    font-weight: 620;
    white-space: nowrap;
    color: var(--dpk-ink-soft);
    background: color-mix(in srgb, var(--dpk-paper-raised) 90%, transparent);
    box-shadow: var(--dpk-shadow-xs);
    cursor: pointer;
    transition:
      border-color 120ms var(--dpk-ease),
      color 120ms var(--dpk-ease),
      background 120ms var(--dpk-ease),
      transform 140ms var(--dpk-ease-spring);
  }

  .slice-chip:hover {
    border-color: var(--dpk-blue);
    border-style: solid;
    color: var(--dpk-blue);
    background: var(--dpk-blue-soft);
    transform: translateY(-1px);
  }

  /* ------------------------------------------------------ bounded contexts */

  .context-region[data-hue='0'],
  .context-label[data-hue='0'] {
    --ctx-rgb: 51, 102, 204;
  }
  .context-region[data-hue='1'],
  .context-label[data-hue='1'] {
    --ctx-rgb: 13, 148, 136;
  }
  .context-region[data-hue='2'],
  .context-label[data-hue='2'] {
    --ctx-rgb: 174, 110, 6;
  }
  .context-region[data-hue='3'],
  .context-label[data-hue='3'] {
    --ctx-rgb: 124, 58, 237;
  }
  .context-region[data-hue='4'],
  .context-label[data-hue='4'] {
    --ctx-rgb: 190, 50, 100;
  }

  .context-region {
    position: absolute;
    z-index: 0;
    border: 1.5px dashed rgba(var(--ctx-rgb), 0.36);
    border-radius: var(--dpk-radius-lg);
    background: linear-gradient(180deg, rgba(var(--ctx-rgb), 0.07), rgba(var(--ctx-rgb), 0.025));
    box-shadow: inset 0 1px 0 rgba(var(--ctx-rgb), 0.14);
    pointer-events: none;
  }

  /* The label rides the region's top edge and carries the rename/dissolve UI. */
  .context-label {
    position: absolute;
    z-index: 7;
    transform: translateY(-55%);
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* No wider than its region (the element sets the label's max-width); a long name ends in an ellipsis. */
  .context-label-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    border: none;
    border-radius: 999px;
    padding: 3px 10px;
    font-family: var(--dpk-mono);
    font-size: 9.5px;
    font-weight: 650;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    white-space: nowrap;
    color: #fff;
    background: linear-gradient(180deg, rgba(var(--ctx-rgb), 0.98), rgba(var(--ctx-rgb), 0.84));
    cursor: pointer;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.28),
      0 1px 2px rgba(var(--ctx-rgb), 0.3),
      var(--dpk-shadow-xs);
    transition: transform 140ms var(--dpk-ease-spring);
  }

  .context-label-name:hover {
    background: linear-gradient(180deg, rgba(var(--ctx-rgb), 1), rgba(var(--ctx-rgb), 0.92));
    transform: translateY(-1px);
  }

  .context-label-x {
    flex: none;
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 50%;
    font-size: 9px;
    line-height: 1;
    color: rgba(var(--ctx-rgb), 0.9);
    background: color-mix(in srgb, var(--dpk-paper-raised) 92%, transparent);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: pointer;
    opacity: 0;
    transition:
      opacity 120ms var(--dpk-ease),
      transform 140ms var(--dpk-ease-spring);
  }

  .context-label-x:hover {
    transform: scale(1.1);
  }

  .context-label:hover .context-label-x,
  .context-label-x:focus-visible {
    opacity: 1;
  }

  /* ---------------------------------------------------------------- arrows */

  .links-layer {
    position: absolute;
    inset: 0;
    /* Causality strokes are annotations drawn over the wall. */
    z-index: 4;
    pointer-events: none;
    overflow: visible;
  }

  /* Stroke must come from a stylesheet, not a presentation attribute:
     a var() inside stroke="..." is not substituted and the line stays invisible. */
  .link-path {
    fill: none;
    stroke: var(--dpk-ink-soft);
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.65;
  }

  /* Invisible fat stroke on top of the line: a mistaken connection is easy to
     pick, and picking it never starts a wall gesture. */
  .link-hit {
    fill: none;
    stroke: transparent;
    stroke-width: 14;
    stroke-linecap: round;
    pointer-events: stroke;
    cursor: pointer;
  }

  .link-path.is-selected {
    stroke: var(--dpk-blue);
    stroke-width: 2.6;
    opacity: 1;
  }

  .link-label {
    font-family: var(--dpk-mono);
    font-size: 9px;
    font-weight: 620;
    letter-spacing: 0.06em;
    fill: var(--dpk-ink-soft);
    paint-order: stroke;
    stroke: var(--dpk-paper-sunken);
    stroke-width: 4;
    stroke-linejoin: round;
  }

  .links-layer marker path {
    fill: var(--dpk-ink-soft);
    opacity: 0.8;
  }

  /* --------------------------------------------------------------- gesture */

  /* Overlays live in viewport space, above the transformed content. */
  .gesture-layer {
    position: absolute;
    inset: 0;
    z-index: 30;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: visible;
  }

  .connect-line {
    fill: none;
    stroke: var(--dpk-blue);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: 6 4;
  }

  .connect-tip {
    fill: var(--dpk-blue);
  }

  .select-rect {
    position: absolute;
    z-index: 30;
    border: 1px solid var(--dpk-blue);
    background: color-mix(in srgb, var(--dpk-blue-soft) 40%, transparent);
    pointer-events: none;
  }

  /* ------------------------------------------------------------ floating UI */

  /* Keeps clear of the zoom control on the right: the hint's ellipsis gives way first. */
  .board-hud {
    position: absolute;
    left: 12px;
    bottom: 12px;
    z-index: 40;
    max-width: calc(100% - 200px);
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 6px 8px 6px 14px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    font-family: var(--dpk-mono);
    font-size: 10px;
    letter-spacing: 0.05em;
    color: var(--dpk-ink-faint);
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    pointer-events: none;
    animation: dpk-hud-in 220ms var(--dpk-ease) backwards;
  }

  .board-hud-stat {
    padding-right: 10px;
    border-right: 1px solid var(--dpk-rule);
    font-variant-numeric: tabular-nums;
  }

  .board-hud-stat:last-of-type {
    padding-right: 0;
    border-right: 0;
  }

  .board-hint {
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--dpk-ink-faint);
    opacity: 0.8;
    letter-spacing: 0.02em;
  }

  /* A phone has no room beside the zoom control for the stats; the counts are in the review. */
  @media (max-width: 760px) {
    .board-hud {
      display: none;
    }
  }

  @keyframes dpk-hud-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
  }

  /* Above the shell's hand-off dock while it floats in the same corner. */
  .board-zoom {
    position: absolute;
    right: 12px;
    /* Above the page's hand-off dock while it floats over this corner. */
    bottom: calc(12px + var(--dpk-dock-clearance, 0px));
    z-index: 40;
    display: flex;
    align-items: center;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    overflow: hidden;
    animation: dpk-hud-in 220ms var(--dpk-ease) backwards;
  }

  .board-zoom button {
    border: none;
    background: transparent;
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1;
    color: var(--dpk-ink-soft);
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease);
  }

  .board-zoom button:hover {
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  .board-zoom .board-zoom-pct {
    min-width: 48px;
    font-family: var(--dpk-mono);
    font-size: 10.5px;
  }

  .board-selection {
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
    z-index: 45;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius);
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
    animation: dpk-hud-in 200ms var(--dpk-ease-spring) backwards;
  }

  .board-selection-count {
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    color: var(--dpk-ink-soft);
    white-space: nowrap;
  }

  .board-selection-hint {
    font-size: 10.5px;
    color: var(--dpk-ink-faint);
    white-space: nowrap;
  }

  /* ----------------------------------------------------------------- empty */

  .empty {
    border: 1.5px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-xl);
    padding: 28px 24px;
    background: var(--dpk-paper-raised);
    max-width: 560px;
    display: grid;
    gap: 10px;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    justify-items: start;
    animation: dpk-hud-in 220ms var(--dpk-ease) backwards;
  }

  /* --------------------------------------------------------------- pickers */

  .context-pop {
    min-width: 220px;
  }

  /* -------------------------------------------------------- append picker */

  /* The palette travels in --es-note-bg/-ink, so a chip previews what it adds. */
  .append-menu {
    min-width: 220px;
  }

  .append-menu .type-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }

  .type-chip {
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-xs);
    padding: 6px 8px;
    font-size: 11px;
    font-weight: 620;
    text-align: left;
    background: var(--es-note-bg, var(--dpk-paper-raised));
    color: var(--es-note-ink, var(--dpk-ink));
    box-shadow: var(--dpk-shadow-xs);
    cursor: pointer;
    transition:
      transform 140ms var(--dpk-ease-spring),
      box-shadow 140ms var(--dpk-ease);
  }

  .type-chip:hover {
    transform: translateY(-1px);
    box-shadow: var(--dpk-shadow-sm);
  }

  .link-add .dpk-select {
    flex: 1 1 auto;
    min-width: 0;
  }
`,Mn={width:260,height:150},Nn={width:236,height:210},_n=64,Cn=48,On=["event","command","aggregate","actor","policy","readmodel","external"],An=1200,mt=5,zn={x:20,top:46,bottom:40};class ut extends Se{static{this.styles=[Se.styles,Ln,we]}definitionFor(e){return Fe(e)}static{this.properties={mode:{state:!0},boardWidth:{state:!0},viewport:{state:!0},gesture:{state:!0},hoverSliceId:{state:!0},selectedSliceIds:{state:!0},selectedLinkIds:{state:!0},naming:{state:!0}}}#e;#n=new $e(this);#o=new tn(this);constructor(){super(),this.mode=C,this.boardWidth=An,this.viewport={panX:24,panY:16,zoom:1},this.gesture=void 0,this.hoverSliceId=void 0,this.selectedSliceIds=[],this.selectedLinkIds=[],this.naming=void 0}disconnectedCallback(){super.disconnectedCallback(),this.#e?.disconnect(),this.#e=void 0}firstUpdated(){typeof ResizeObserver>"u"||(this.#e=new ResizeObserver(e=>{const n=e[0]?.contentRect.width;n!==void 0&&n>0&&(this.boardWidth=n)}),this.#e.observe(this))}updated(){super.updated(),this.#c(this.viewport),this.mode.kind==="append"&&this.#t("#append-menu",this.mode.point,Nn),this.naming!==void 0&&this.#t("#context-pop",this.naming.point,Mn,"#context-name")}#t(e,n,o,i){const s=this.renderRoot.querySelector(e);if(!s||s.matches(":popover-open")||(this.#n.open(s,Nt(n.x,n.y),o),i===void 0))return;const r=this.renderRoot.querySelector(i);r?.focus(),r instanceof HTMLInputElement&&r.select()}#s(){return Math.max(Dn,this.boardWidth-96)}renderRegions(e){return{main:this.#r(e)}}#r(e){const n=O(this.locale);return k`
      ${fn({m:n,context:e,mode:this.mode,maxRowWidth:this.#s(),pinHeights:this.#o.heights,viewport:this.viewport,gesture:this.gesture,hoverSliceId:this.hoverSliceId,selectedSliceIds:this.selectedSliceIds,selectedLinkIds:this.selectedLinkIds,handlers:{noteIntent:(o,i)=>this.#S(o,i),addFirst:()=>this.#R(e),attachNote:(o,i)=>this.#C(e,o,i),viewportPointerDown:o=>this.#k(o),viewportPointerMove:o=>this.#E(o),viewportPointerUp:o=>this.#y(e,o),viewportPointerCancel:()=>this.gesture=void 0,viewportPointerLeave:()=>{this.gesture===void 0&&(this.hoverSliceId=void 0)},viewportWheel:o=>this.#w(o),portPointerDown:(o,i)=>this.#b(o,i),slicePointerDown:(o,i)=>this.#v(o,i),zoomStep:o=>this.#$(o),zoomFit:()=>this.#T(),zoomReset:()=>this.#m(1/this.viewport.zoom),groupSelection:o=>{this.selectedSliceIds.length>0&&(this.naming={kind:"create-context",sliceIds:this.selectedSliceIds,point:o})},assignSelection:o=>this.#g(e,o),stripSelectionContext:()=>this.#g(e,null),clearSelection:()=>{this.selectedSliceIds=[],this.selectedLinkIds=[]},linkClick:(o,i)=>this.#A(o,i),deleteSelection:()=>this.#f(e),keyDown:o=>this.#z(e,o),renameContext:(o,i)=>this.naming={kind:"rename-context",contextId:o,point:i},dissolveContext:o=>e.dispatch(y.deleteContext(o))}})}
      ${this.mode.kind==="append"?this.#P(e,this.mode.sliceId):T}
      ${this.naming!==void 0?this.#D(e,this.naming):T}
    `}#i(){return this.renderRoot.querySelector(".board-viewport")}#a(e){const n=this.#i()?.getBoundingClientRect();return n===void 0?{x:e.clientX,y:e.clientY}:{x:e.clientX-n.left,y:e.clientY-n.top}}#l(e){const n=this.#i();if(n===null)return[];const o=n.getBoundingClientRect();return[...this.renderRoot.querySelectorAll("[data-slice-id]")].map(i=>{const s=i.getBoundingClientRect();return{id:i.dataset.sliceId??"",rect:{left:s.left-o.left-(e?.x??0),top:s.top-o.top-(e?.top??0),width:s.width+(e?.x??0)*2,height:s.height+(e?.top??0)+(e?.bottom??0)}}})}#h(e,n){const o=this.#i();o!==null&&(o.setPointerCapture(e.pointerId),this.gesture=n)}#b(e,n){if(n.button!==0)return;n.stopPropagation(),n.preventDefault();const o=this.#a(n);this.#h(n,{kind:"connect",pointerId:n.pointerId,fromSliceId:e,start:o,current:o,moved:!1})}#v(e,n){if(n.button!==0)return;n.stopPropagation(),n.preventDefault();const o=this.#a(n);this.#h(n,{kind:"move-slice",pointerId:n.pointerId,sliceId:e,start:o,current:o,moved:!1})}#k(e){if(e.button!==0||this.gesture!==void 0)return;for(const o of e.composedPath()){if(o===e.currentTarget)break;if(o instanceof Element&&(o.tagName.toLowerCase()==="dpk-internal-event-storming-note"||o.matches("button, select, textarea, input, a")))return}const n=this.#a(e);(this.mode.kind==="editing"||this.mode.kind==="append")&&(this.mode=C),this.selectedLinkIds=[],this.#h(e,{kind:"select",pointerId:e.pointerId,start:n,current:n,moved:!1})}#E(e){const n=this.gesture,o=this.#a(e);if(n===void 0){const i=me(this.#l(zn),o.x,o.y);i!==this.hoverSliceId&&(this.hoverSliceId=i);return}this.gesture=Qe(n,{pointerId:e.pointerId,point:o},this.#l(),mt)}#y(e,n){const o=this.gesture;if(o===void 0||n.pointerId!==o.pointerId)return;const i=Qe(o,{pointerId:n.pointerId,point:this.#a(n)},this.#l(),mt);if(this.gesture=void 0,i.kind==="connect"){i.moved?i.targetSliceId!==void 0&&this.#I(e,i.fromSliceId,i.targetSliceId):this.#M(i.fromSliceId);return}if(i.kind==="move-slice"){if(!i.moved){this.selectedSliceIds=this.selectedSliceIds.includes(i.sliceId)?this.selectedSliceIds.filter(r=>r!==i.sliceId):[...this.selectedSliceIds,i.sliceId];return}i.drop!==void 0&&this.#O(e,i.sliceId,i.drop.sliceId,i.drop.side);return}if(!i.moved){this.selectedSliceIds=[];return}const s={left:Math.min(i.start.x,i.current.x),top:Math.min(i.start.y,i.current.y),width:Math.abs(i.current.x-i.start.x),height:Math.abs(i.current.y-i.start.y)};this.selectedSliceIds=[...Ze(this.#l(),s)]}#w(e){e.preventDefault();const n=this.#a(e);this.#c(e.ctrlKey||e.metaKey?he(this.viewport,n.x,n.y,Math.exp(-e.deltaY*.01)):pe(this.viewport,-e.deltaX,-e.deltaY))}#m(e){const n=this.#i()?.getBoundingClientRect();this.#c(he(this.viewport,(n?.width??0)/2,(n?.height??0)/2,e))}#$(e){this.#m(e===1?1.2:1/1.2)}showTarget(e){this.updateComplete.then(()=>{const n=this.#i(),o=_t(this,W(e));if(n===null||o===null)return;const i=n.getBoundingClientRect(),s=o.getBoundingClientRect();if(i.width===0||i.height===0)return;const r={left:s.left-i.left,top:s.top-i.top,width:s.width,height:s.height};this.#c(Qt(this.viewport,r,i,Cn))})}#T(){const e=this.#i()?.getBoundingClientRect(),n=this.#u();e===void 0||n===void 0||this.#c(Ve(n,{width:e.width,height:e.height},48))}#u(){const e=this.renderRoot.querySelector(".wall");return e===null?void 0:{width:e.offsetWidth,height:e.offsetHeight}}#c(e){const n=this.#i()?.getBoundingClientRect(),o=this.#u(),i=n===void 0||o===void 0||o.width===0||n.width===0?e:qe(e,o,{width:n.width,height:n.height},_n),s=this.viewport;i.panX===s.panX&&i.panY===s.panY&&i.zoom===s.zoom||(this.viewport=i)}#S(e,n){const o=this.context();switch(n.kind){case"select":o.navigate({note:e});break;case"rename":o.dispatch(y.setElementName(e,n.name));break;case"comment":o.dispatch({type:"comment",target:`element:${e}`,payload:{body:n.body}});break;case"delete":o.dispatch(y.deleteElement(e)),o.navigation.note===e&&o.navigate({note:null});break;case"add-hotspot":this.#_(o,e);break}this.mode=tt(this.mode,e,n)}#p(e,n){return B(e).find(o=>o.id===n)}#d(e){return e===void 0?[]:[...e.notes,...e.pins.map(n=>n.note)].map(n=>n.id)}#I(e,n,o){if(n===o)return;const i=B(e.state),s=i.find(u=>u.id===n),r=i.find(u=>u.id===o),a=s&&r?De(s,r):void 0;if(s===void 0||r===void 0||a===void 0||e.state.links.some(u=>u.from===a.from&&u.to===a.to))return;const d=e.state.links.map(u=>u.id),l=e.state.elements.map(u=>u.id),p=U(s)?.id,m=p!==void 0&&i.indexOf(r)>i.indexOf(s)?Je(l,this.#d(r),[p],"after"):[];e.dispatchBatch([y.linkElements(z(`link-${a.from}`,d),a.from,a.to,{kind:"flow"}),...m.map(u=>y.moveElement(u.id,u.after))])}#L(e){const n=this.#i(),o=this.#l().find(s=>s.id===e)?.rect;if(n===null||o===void 0)return;const i=n.getBoundingClientRect();return{x:i.left+o.left+o.width,y:i.top+o.top+o.height/2}}#M(e){const n=this.#L(e);n!==void 0&&(this.mode={kind:"append",sliceId:e,point:n})}#N(e,n,o){const i=this.#p(e.state,n),s=i?U(i):void 0;if(s===void 0){this.mode=C;return}const r=z(`new-${o}`,G(e.state)),a=e.state.links.map(l=>l.id);if(!e.dispatchBatch([y.addElement(r,o,O(this.locale).noteTypeLabel(o)),y.linkElements(z(`link-${s.id}`,a),s.id,r,{kind:"flow"})]).ok){this.mode=C;return}e.navigate({note:r}),this.mode={kind:"editing",noteId:r}}#_(e,n){const o=z("new-hotspot",G(e.state)),i=e.state.links.map(r=>r.id);e.dispatchBatch([y.addElement(o,"hotspot",O(this.locale).noteTypeLabel("hotspot")),y.linkElements(z(`link-${o}`,i),o,n,{kind:"member"})]).ok&&(e.navigate({note:o}),this.mode={kind:"editing",noteId:o})}#C(e,n,o){const i=this.#p(e.state,n),s=i===void 0?void 0:Oe(i,o);if(s===void 0)return;const r=z(`new-${o}`,G(e.state)),[a,d]=s.incoming?[r,s.anchorId]:[s.anchorId,r],l=e.state.links.map(m=>m.id);e.dispatchBatch([y.addElement(r,o,O(this.locale).noteTypeLabel(o)),y.linkElements(z(`link-${a}`,l),a,d,{kind:"member"})]).ok&&(e.navigate({note:r}),this.mode={kind:"editing",noteId:r})}#O(e,n,o,i){const s=e.state,r=ue(s.elements.map(a=>a.id),this.#d(this.#p(s,n)),this.#d(this.#p(s,o)),i);e.dispatchBatch(r.map(a=>y.moveElement(a.id,a.after)))}#A(e,n){this.mode.kind==="editing"&&(this.mode=C),this.selectedSliceIds=[],this.selectedLinkIds=n?this.selectedLinkIds.includes(e)?this.selectedLinkIds.filter(o=>o!==e):[...this.selectedLinkIds,e]:[e],this.#i()?.focus()}#f(e){if(this.selectedLinkIds.length>0){const i=e.state.links.filter(s=>this.selectedLinkIds.includes(s.id));e.dispatchBatch(i.map(s=>y.unlinkElements(s.from,s.to))),this.selectedLinkIds=[];return}if(this.selectedSliceIds.length===0)return;const n=B(e.state),o=this.selectedSliceIds.flatMap(i=>this.#d(n.find(s=>s.id===i)));e.dispatchBatch(o.map(i=>y.deleteElement(i))),this.selectedSliceIds=[]}#z(e,n){if(n.target!==n.currentTarget)return;if(n.key==="Escape"){this.selectedSliceIds=[],this.selectedLinkIds=[];return}if(n.key!=="Delete"&&n.key!=="Backspace"||this.mode.kind!=="idle"||this.naming!==void 0)return;if(n.preventDefault(),this.selectedLinkIds.length>0||this.selectedSliceIds.length>0){this.#f(e);return}const o=e.navigation.note;o===void 0||D(e.state,o)===void 0||(e.dispatch(y.deleteElement(o)),e.navigate({note:null}))}#g(e,n){const o=B(e.state),i=this.selectedSliceIds.flatMap(r=>this.#d(o.find(a=>a.id===r)));e.dispatchBatch(i.map(r=>y.setElementContext(r,n))).ok&&(this.selectedSliceIds=[])}#x(e,n){const i=this.renderRoot.querySelector("#context-name")?.value.trim()??"";if(i==="")return;if(n.kind==="rename-context"){e.dispatch(y.setContextName(n.contextId,i)).ok&&(this.naming=void 0);return}const s=z("context",e.state.contexts.map(l=>l.id)),r=B(e.state),a=n.sliceIds.flatMap(l=>this.#d(r.find(p=>p.id===l)));e.dispatchBatch([y.addContext(s,i),...a.map(l=>y.setElementContext(l,s))]).ok&&(this.selectedSliceIds=[],this.naming=void 0)}#D(e,n){const o=O(this.locale),i=n.kind==="rename-context"?Y(e.state,n.contextId)?.name??"":"";return k`<div id="context-pop" class="comment-pop context-pop" popover="manual">
      <span class="dpk-label"> ${n.kind==="create-context"?o.newContextTitle:o.renameContextTitle} </span>
      <input
        id="context-name"
        class="dpk-input"
        type="text"
        placeholder=${o.contextNamePlaceholder}
        .value=${i}
        @keydown=${s=>{s.key==="Enter"&&this.#x(e,n),s.key==="Escape"&&(this.naming=void 0)}}
      />
      <div class="pop-actions">
        <button class="dpk-btn" type="button" @click=${()=>this.naming=void 0}>${o.cancel}</button>
        <button class="dpk-btn dpk-btn--accent" type="button" @click=${()=>this.#x(e,n)}>
          ${n.kind==="create-context"?o.create:o.save}
        </button>
      </div>
    </div>`}#P(e,n){const o=O(this.locale),i=this.#p(e.state,n),s=i===void 0?void 0:U(i);return k`<div id="append-menu" class="comment-pop append-menu" popover="manual">
      <span class="dpk-label">${s===void 0?o.appendMenuNext:o.appendMenuAfter(s.name)}</span>
      <div class="type-options">
        ${On.map(r=>k`<button
              class="type-chip"
              type="button"
              data-type=${r}
              style=${le(r)}
              @click=${()=>this.#N(e,n,r)}
            >
              ${o.noteTypeLabel(r)}
            </button>`)}
      </div>
      <div class="pop-actions">
        <button class="dpk-btn" type="button" @click=${()=>this.mode=C}>${o.cancel}</button>
      </div>
    </div>`}#R(e){const n=z("new-event",G(e.state));if(!e.dispatch(y.addElement(n,"event",O(this.locale).noteTypeLabel("event"))).ok){this.mode=C;return}e.navigate({note:n}),this.mode={kind:"editing",noteId:n}}}const Dn=264,ft=()=>{Jt(),customElements.get("dpk-template-event-storming")||customElements.define("dpk-template-event-storming",ut)},Pn=Object.freeze(Object.defineProperty({__proto__:null,DpkTemplateEventStorming:ut,ES_IDLE:C,NOTE_TYPES:j,ZOOM_MAX:Ge,ZOOM_MIN:ce,allNoteIds:G,applyEventStormingAction:_e,attachAnchor:Oe,buildSlices:B,connectionEndpoints:De,constrainViewport:qe,defineEventStormingElement:ft,describeEventStormingAction:Be,dropSide:je,emptyEventStormingBase:Ne,eventStormingAction:y,eventStormingActions:w,eventStormingBaseSchema:Le,eventStormingCommentTargets:He,eventStormingDefinitionFor:Fe,eventStormingHasTarget:We,eventStormingMessages:O,eventStormingTargetLabel:Ye,eventStormingTitle:de,findContext:Y,findLink:re,findNote:D,fitViewport:Ve,hitRect:me,noteCardModeOf:et,panBy:pe,parseEventStormingBase:Me,planSliceBands:ze,rectsInBand:Ze,reduceNoteIntent:tt,resolveEventStormingNavigation:Ke,sameSlice:J,serializeEventStormingAction:Xe,sliceArrows:Ae,sliceMovePlan:ue,sliceMoveSteps:Je,sliceVoice:U,zoomAt:he},Symbol.toStringTag,{value:"Module"}));export{ft as d,Pn as i};
