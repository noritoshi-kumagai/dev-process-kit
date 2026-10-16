import{al as m,aQ as Cr,ag as C,aC as P,aD as g,aj as u,ah as M,ak as le,af as Or,aR as Qe,aS as Mr,ai as L,am as x,aT as Lr,au as et,ar as Nr,p as w,aw as y,v as ue,aB as te,P as zr,e as Vr,a2 as Ur,h as tt,N as Ae,Y,X as Yr,R as k,a6 as p,a5 as l,aU as Ie,aV as Pe,aH as _e,a7 as Hr,z as Re,aG as rt,l as Wr,aW as D,aX as Br,A as it,aY as Gr,aZ as qr,J as nt,a_ as jr,ae as Fr,ad as Kr,a4 as Xr,T as ot,a3 as Zr,a$ as Jr,ab as Qr,C as ei,b0 as ti}from"./shared-hrghWtVh.js";import{p as ri,r as ii,c as ni}from"./shared-BXI23Fg6.js";import{D as oi}from"./shared-sTu0Wlge.js";import{i as st}from"./shared-DgJxvnql.js";const si=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]],ai=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]],di=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]],pi=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]],ci=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]],li=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]],ui=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]],hi=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]],vi=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]],at=["browser","native","mail","plain"],dt=["mobile","tablet","desktop","fluid"],K=e=>"screen"in e,gi=C({from:g(u()),to:g(u()),cc:g(u()),subject:g(u()),date:g(u())}),fi={id:P,kind:M(le(at),"browser"),viewport:M(le(dt),"fluid"),label:g(u()),url:g(u()),mail:g(gi)},De=m(C(fi),Cr(e=>e.mail===void 0||e.kind==="mail",'a preview `mail` envelope needs `"kind": "mail"`')),pt=et([C({screen:P,preview:g(P)}),C({material:De})]),bi=C({id:P,name:m(u(),x(1)),description:g(u()),actor:g(m(u(),x(1))),situation:g(m(u(),x(1))),panes:M(L(pt),[])}),wi=C({id:P,name:m(u(),x(1)),description:g(u()),actor:g(m(u(),x(1))),steps:M(L(bi),[])}),mi=C({id:P,name:m(u(),x(1)),description:g(u()),actor:g(m(u(),x(1))),stories:M(L(wi),[])}),ct=m(u(),x(1)),yi=C({id:P,label:m(u(),x(1)),description:g(u()),fill:g(Lr(ct,et([u(),Nr()]))),click:g(L(ct))}),ki=C({id:P,title:m(u(),x(1)),description:g(u()),previews:M(L(De),[]),actions:M(L(yi),[])}),xi=C({id:P,name:m(u(),x(1)),description:g(u()),actor:g(m(u(),x(1))),screens:M(L(ki),[])}),lt=C({title:g(u()),baseUrl:g(u()),apps:M(L(xi),[]),activities:M(L(mi),[])}),ut=e=>e.flatMap(t=>K(t)?[]:[t.material]),$i=e=>{const t=new Set,r=s=>{for(const a of s){if(t.has(a.id))return`duplicate preview id "${a.id}": preview ids are global, they name a light DOM slot`;t.add(a.id)}return null},i=new Set,n=new Set;for(const s of e.apps){if(i.has(s.id))return`duplicate app id "${s.id}"`;i.add(s.id);for(const a of s.screens){if(n.has(a.id))return`duplicate screen id "${a.id}": screen ids are global`;n.add(a.id);const d=r(a.previews);if(d!==null)return d;const c=new Set;for(const f of a.actions){if(c.has(f.id))return`duplicate action id "${f.id}" on screen "${a.id}"`;c.add(f.id)}}}const o=new Set;for(const s of e.activities){if(o.has(s.id))return`duplicate activity id "${s.id}"`;o.add(s.id);const a=new Set;for(const d of s.stories){if(a.has(d.id))return`duplicate story id "${d.id}" in activity "${s.id}"`;a.add(d.id);const c=new Set;for(const f of d.steps){if(c.has(f.id))return`duplicate step id "${f.id}" in story "${d.id}"`;c.add(f.id);const h=r(ut(f.panes));if(h!==null)return h}}}return null},ht=(e,t)=>{const r=new Map;for(const i of t.panes){if(!K(i))continue;const n=e(i.screen);if(n===void 0)return`unknown screen "${i.screen}" on step "${t.id}": declare it under \`apps[].screens\``;if(i.preview!==void 0&&!n.includes(i.preview))return`preview "${i.preview}" on step "${t.id}" is not a rendition of screen "${i.screen}"`;const o=r.get(i.screen)??[];if(o.length>0&&(i.preview===void 0||o.includes(i.preview)||o.includes(void 0)))return`screen "${i.screen}" is shown twice on step "${t.id}": give each pane a different \`preview\``;r.set(i.screen,[...o,i.preview])}return null},Ei=e=>{const t=new Map(e.apps.flatMap(r=>r.screens.map(i=>[i.id,i.previews.map(n=>n.id)])));for(const r of e.activities.flatMap(i=>i.stories.flatMap(n=>n.steps))){const i=ht(n=>t.get(n),r);if(i!==null)return i}return null},Si=(e,t)=>ht(r=>N(e,r)?.screen.previews.map(i=>i.id),t),re="ui",vt=e=>{const t=e.text?.replaceAll('"',"'");return`${e.previewId}/${e.selector}${t===void 0?"":` "${t}"`}`},Ce=e=>{const t=e.indexOf("/");if(t<=0)return;const r=e.slice(0,t);if(!Mr(P,r))return;const i=e.slice(t+1),n=/ "([^"]*)"$/.exec(i),o=(n?i.slice(0,n.index):i).trim();if(o!=="")return n?.[1]===void 0?{previewId:r,selector:o}:{previewId:r,selector:o,text:n[1]}},gt=e=>{const t=Or(lt,e),r=$i(t)??Ei(t);if(r!==null)throw new Error(r);return t},ft=()=>({apps:[],activities:[]}),H=e=>e.apps.flatMap(t=>t.screens.map(r=>({app:t,screen:r}))),N=(e,t)=>{if(t!==void 0)return H(e).find(r=>r.screen.id===t)},he=(e,t)=>t.panes.flatMap(r=>{const i=K(r)?N(e,r.screen):void 0;return i?[i]:[]}),X=e=>ut(e.panes),Ti=(e,t)=>e.panes.some(r=>K(r)&&r.screen===t),z=(e,t)=>{if(t!==void 0)return e.activities.find(r=>r.id===t)},O=(e,t)=>`${e}.${t}`,E=(e,t)=>{if(t===void 0)return;const r=Qe(t,2);if(r){const[n,o]=r;if(n===void 0||o===void 0)return;const s=e.activities.find(d=>d.id===n),a=s?.stories.find(d=>d.id===o);return s&&a?{activity:s,story:a}:void 0}if(t.includes("."))return;const i=e.activities.flatMap(n=>n.stories.filter(o=>o.id===t).map(o=>({activity:n,story:o})));return i.length===1?i[0]:void 0},bt=e=>{const t=e.lastIndexOf(".");return t>=0?e.slice(t+1):e},ie=e=>`${e.activity.id}.${e.story.id}.${e.step.id}`,ve=(e,t,r)=>`${e.id}.${t.id}.${r.id}`,$=(e,t)=>{if(t===void 0)return;const r=Qe(t,3);if(r){const[n,o,s]=r;if(n===void 0||o===void 0||s===void 0)return;const a=e.activities.find(h=>h.id===n),d=a?.stories.find(h=>h.id===o),c=d?d.steps.findIndex(h=>h.id===s):-1,f=d&&c>=0?d.steps[c]:void 0;return a&&d&&f?{activity:a,story:d,step:f,stepIndex:c}:void 0}if(t.includes("."))return;const i=W(e).filter(n=>n.step.id===t);return i.length===1?i[0]:void 0},T=(e,t)=>{if(t!==void 0){for(const r of H(e)){const i=r.screen.previews.find(n=>n.id===t);if(i)return{owner:{kind:"screen",...r},preview:i}}for(const r of W(e)){const i=X(r.step).find(n=>n.id===t);if(i)return{owner:{kind:"step",...r},preview:i}}}},W=e=>e.activities.flatMap(t=>t.stories.flatMap(r=>r.steps.map((i,n)=>({activity:t,story:r,step:i,stepIndex:n})))),wt=e=>W(e).map(t=>t.step.id),b={SET_ACTIVITY_NAME:w("SET_ACTIVITY_NAME","activity",y({name:m(u(),x(1))})),SET_ACTIVITY_DESCRIPTION:w("SET_ACTIVITY_DESCRIPTION","activity",y({description:u()})),SET_STORY_NAME:w("SET_STORY_NAME","story",y({name:m(u(),x(1))})),SET_STORY_DESCRIPTION:w("SET_STORY_DESCRIPTION","story",y({description:u()})),SET_STEP_NAME:w("SET_STEP_NAME","step",y({name:m(u(),x(1))})),SET_STEP_DESCRIPTION:w("SET_STEP_DESCRIPTION","step",y({description:u()})),SET_PREVIEW_KIND:w("SET_PREVIEW_KIND","preview",y({kind:le(at)})),SET_PREVIEW_VIEWPORT:w("SET_PREVIEW_VIEWPORT","preview",y({viewport:le(dt)})),SET_PREVIEW_LABEL:w("SET_PREVIEW_LABEL","preview",y({label:u()})),REORDER_ACTIVITY:w("REORDER_ACTIVITY","activity",y({after:te(u())}),{mode:"sequence"}),REORDER_STORY:w("REORDER_STORY","story",y({after:te(u())}),{mode:"sequence"}),REORDER_STEP:w("REORDER_STEP","step",y({after:te(u())}),{mode:"sequence"}),MOVE_STORY:w("MOVE_STORY","story",y({toActivity:m(u(),x(1)),after:te(u())}),{mode:"sequence"}),MOVE_STEP:w("MOVE_STEP","step",y({toStory:m(u(),x(1)),after:te(u())}),{mode:"sequence"}),ADD_ACTIVITY:w("ADD_ACTIVITY","page",y({id:P,name:m(u(),x(1)),description:g(u())}),{dedupeKey:ue}),ADD_STORY:w("ADD_STORY","activity",y({id:P,name:m(u(),x(1)),description:g(u())}),{dedupeKey:ue}),ADD_STEP:w("ADD_STEP","story",y({id:P,name:m(u(),x(1)),description:g(u()),panes:g(L(pt))}),{dedupeKey:ue}),ADD_PREVIEW:w("ADD_PREVIEW","step",De,{dedupeKey:ue}),DELETE_ACTIVITY:w("DELETE_ACTIVITY","activity",y({})),DELETE_STORY:w("DELETE_STORY","story",y({})),DELETE_STEP:w("DELETE_STEP","step",y({})),DELETE_PREVIEW:w("DELETE_PREVIEW","preview",y({}))},ne={setActivityName:(e,t)=>({type:"SET_ACTIVITY_NAME",target:{type:"activity",id:e},payload:{name:t}}),setActivityDescription:(e,t)=>({type:"SET_ACTIVITY_DESCRIPTION",target:{type:"activity",id:e},payload:{description:t}}),setStoryName:(e,t)=>({type:"SET_STORY_NAME",target:{type:"story",id:e},payload:{name:t}}),setStoryDescription:(e,t)=>({type:"SET_STORY_DESCRIPTION",target:{type:"story",id:e},payload:{description:t}}),setStepName:(e,t)=>({type:"SET_STEP_NAME",target:{type:"step",id:e},payload:{name:t}}),setStepDescription:(e,t)=>({type:"SET_STEP_DESCRIPTION",target:{type:"step",id:e},payload:{description:t}}),setPreviewViewport:(e,t)=>({type:"SET_PREVIEW_VIEWPORT",target:{type:"preview",id:e},payload:{viewport:t}}),setPreviewKind:(e,t)=>({type:"SET_PREVIEW_KIND",target:{type:"preview",id:e},payload:{kind:t}}),setPreviewLabel:(e,t)=>({type:"SET_PREVIEW_LABEL",target:{type:"preview",id:e},payload:{label:t}}),reorderActivity:(e,t)=>({type:"REORDER_ACTIVITY",target:{type:"activity",id:e},payload:{after:t}}),reorderStory:(e,t)=>({type:"REORDER_STORY",target:{type:"story",id:e},payload:{after:t}}),reorderStep:(e,t)=>({type:"REORDER_STEP",target:{type:"step",id:e},payload:{after:t}}),moveStep:(e,t,r)=>({type:"MOVE_STEP",target:{type:"step",id:e},payload:{toStory:t,after:r}}),moveStory:(e,t,r)=>({type:"MOVE_STORY",target:{type:"story",id:e},payload:{toActivity:t,after:r}}),addActivity:(e,t,r)=>({type:"ADD_ACTIVITY",target:{type:"page",id:"prototype"},payload:{id:e,name:t,...r===void 0?{}:{description:r}}}),addStory:(e,t,r,i)=>({type:"ADD_STORY",target:{type:"activity",id:e},payload:{id:t,name:r,...i===void 0?{}:{description:i}}}),addStep:(e,t,r,i)=>({type:"ADD_STEP",target:{type:"story",id:e},payload:{id:t,name:r,...i===void 0?{}:{panes:i}}}),addPreview:(e,t)=>({type:"ADD_PREVIEW",target:{type:"step",id:e},payload:{...t}}),deleteActivity:e=>({type:"DELETE_ACTIVITY",target:{type:"activity",id:e},payload:{}}),deleteStory:e=>({type:"DELETE_STORY",target:{type:"story",id:e},payload:{}}),deleteStep:e=>({type:"DELETE_STEP",target:{type:"step",id:e},payload:{}}),deletePreview:e=>({type:"DELETE_PREVIEW",target:{type:"preview",id:e},payload:{}})},mt=(e,t)=>{const r=zr(b,t);if(r===null)return null;const i=r.target.id;switch(r.type){case"SET_ACTIVITY_NAME":return B(e,i,n=>({...n,name:r.payload.name}));case"SET_ACTIVITY_DESCRIPTION":return B(e,i,n=>({...n,description:r.payload.description}));case"SET_STORY_NAME":return G(e,i,n=>({...n,name:r.payload.name}));case"SET_STORY_DESCRIPTION":return G(e,i,n=>({...n,description:r.payload.description}));case"SET_STEP_NAME":return ge(e,i,n=>({...n,name:r.payload.name}));case"SET_STEP_DESCRIPTION":return ge(e,i,n=>({...n,description:r.payload.description}));case"SET_PREVIEW_KIND":return Me(e,i,n=>({...n,kind:r.payload.kind}));case"SET_PREVIEW_VIEWPORT":return Me(e,i,n=>({...n,viewport:r.payload.viewport}));case"SET_PREVIEW_LABEL":return Me(e,i,n=>({...n,label:r.payload.label}));case"REORDER_ACTIVITY":{const{after:n}=r.payload,o=oe(e.activities,i,n);return o===null?null:{...e,activities:o}}case"REORDER_STORY":{const{after:n}=r.payload,o=E(e,i);if(!o)return null;const s=n===null?null:E(e,n);if(n!==null&&(!s||s.activity!==o.activity))return null;const a=oe(o.activity.stories,o.story.id,s?.story.id??null);return a===null?null:B(e,o.activity.id,d=>({...d,stories:a}))}case"REORDER_STEP":{const{after:n}=r.payload,o=$(e,i);if(!o)return null;const s=n===null?null:$(e,n);if(n!==null&&(!s||s.story!==o.story))return null;const a=oe(o.story.steps,o.step.id,s?.step.id??null);return a===null?null:G(e,O(o.activity.id,o.story.id),d=>({...d,steps:a}))}case"MOVE_STORY":{const{toActivity:n,after:o}=r.payload,s=E(e,i);if(!s)return null;const a=e.activities.find(h=>h.id===n);if(!a)return null;const d=o===null?null:E(e,o);if(o!==null&&(!d||d.activity!==a))return null;const c=d?.story.id??null;if(s.activity.id===n){const h=oe(s.activity.stories,s.story.id,c);return h===null?null:B(e,n,v=>({...v,stories:h}))}if(a.stories.some(h=>h.id===s.story.id))return null;const f=Le(a.stories,s.story,c);return Oe(e,h=>h.id===s.activity.id?{...h,stories:h.stories.filter(v=>v.id!==bt(i))}:h.id===n?{...h,stories:f}:h)}case"MOVE_STEP":{const{toStory:n,after:o}=r.payload,s=$(e,i);if(!s)return null;const a=E(e,n);if(!a)return null;const d=o===null?null:$(e,o);if(o!==null&&(!d||d.story!==a.story))return null;const c=d?.step.id??null;if(s.story===a.story){const h=oe(s.story.steps,s.step.id,c);return h===null?null:G(e,n,v=>({...v,steps:h}))}if(a.story.steps.some(h=>h.id===s.step.id))return null;const f=Le(a.story.steps,s.step,c);return Oe(e,h=>({...h,stories:h.stories.map(v=>v===s.story?{...v,steps:v.steps.filter(I=>I.id!==bt(i))}:v===a.story?{...v,steps:f}:v)}))}case"ADD_ACTIVITY":{const n=r.payload;if(e.activities.some(s=>s.id===n.id))return e;const o={id:n.id,name:n.name,...n.description===void 0?{}:{description:n.description},stories:[]};return{...e,activities:[...e.activities,o]}}case"ADD_STORY":{const n=r.payload,o=e.activities.find(a=>a.id===i);if(!o)return null;if(o.stories.some(a=>a.id===n.id))return e;const s={id:n.id,name:n.name,...n.description===void 0?{}:{description:n.description},steps:[]};return B(e,i,a=>({...a,stories:[...a.stories,s]}))}case"ADD_STEP":{const n=r.payload,o=E(e,i)?.story;if(!o)return null;if(o.steps.some(d=>d.id===n.id))return e;const s=n.panes??[],a={id:n.id,name:n.name,...n.description===void 0?{}:{description:n.description},panes:s};return Ai(e,a)?G(e,i,d=>({...d,steps:[...d.steps,a]})):null}case"ADD_PREVIEW":{const n=r.payload,o=$(e,i)?.step;return o?X(o).some(s=>s.id===n.id)?e:T(e,n.id)?null:ge(e,i,s=>({...s,panes:[...s.panes,{material:n}]})):null}case"DELETE_ACTIVITY":{const n=i;return e.activities.some(o=>o.id===n)?{...e,activities:e.activities.filter(o=>o.id!==n)}:null}case"DELETE_STORY":{const n=E(e,i);return n?B(e,n.activity.id,o=>({...o,stories:o.stories.filter(s=>s.id!==n.story.id)})):null}case"DELETE_STEP":{const n=$(e,i);return n?G(e,O(n.activity.id,n.story.id),o=>({...o,steps:o.steps.filter(s=>s.id!==n.step.id)})):null}case"DELETE_PREVIEW":{const n=T(e,i);return n?yt(e,n.owner,o=>o.filter(s=>s.id!==n.preview.id)):null}default:return Vr(r)}},Oe=(e,t)=>({...e,activities:e.activities.map(t)}),B=(e,t,r)=>{const i=t;return e.activities.some(n=>n.id===i)?Oe(e,n=>n.id===i?r(n):n):null},G=(e,t,r)=>{const i=E(e,t);if(!i)return null;const n=i.story.id;return B(e,i.activity.id,o=>({...o,stories:o.stories.map(s=>s.id===n?r(s):s)}))},ge=(e,t,r)=>{const i=$(e,t);if(!i)return null;const n=i.step.id;return G(e,O(i.activity.id,i.story.id),o=>({...o,steps:o.steps.map(s=>s.id===n?r(s):s)}))},Me=(e,t,r)=>{const i=T(e,t);if(!i)return null;const n=i.preview.id;return yt(e,i.owner,o=>o.map(s=>s.id===n?r(s):s))},Ai=(e,t)=>{const r=X(t).map(i=>i.id);return Si(e,t)===null&&new Set(r).size===r.length&&!r.some(i=>T(e,i))},yt=(e,t,r)=>{if(t.kind==="step")return ge(e,ie(t),n=>{const o=new Map(r([...X(n)]).map(s=>[s.id,s]));return{...n,panes:n.panes.flatMap(s=>{if(K(s))return[s];const a=o.get(s.material.id);return a?[{material:a}]:[]})}});const i=t.screen.id;return{...e,apps:e.apps.map(n=>n.id===t.app.id?{...n,screens:n.screens.map(o=>o.id===i?{...o,previews:r(o.previews)}:o)}:n)}},oe=(e,t,r)=>{const i=e.findIndex(s=>s.id===t);if(i<0||r!==null&&!e.some(s=>s.id===r))return null;if(t===r)return[...e];const n=e[i];if(n===void 0)return null;const o=e.filter(s=>s.id!==t);return Le(o,n,r)},Le=(e,t,r)=>{const i=[...e],n=r===null?-1:i.findIndex(o=>o.id===r);return i.splice(n+1,0,t),i},kt={"iphone-se":"iPhone SE","iphone-16":"iPhone 16","iphone-16-pro-max":"iPhone 16 Pro Max","pixel-7":"Pixel 7","galaxy-s24":"Galaxy S24","ipad-mini":"iPad mini","ipad-air-11":'iPad Air 11"',"ipad-pro-11":'iPad Pro 11"',"ipad-pro-13":'iPad Pro 13"'},Ii={"laptop-13":'13" laptop',"laptop-15":'15" laptop',"full-hd":"Full HD","monitor-27":'27" monitor',ultrawide:"Ultrawide"},Pi={"laptop-13":"13 \u30A4\u30F3\u30C1 \u30CE\u30FC\u30C8","laptop-15":"15 \u30A4\u30F3\u30C1 \u30CE\u30FC\u30C8","full-hd":"\u30D5\u30EB HD","monitor-27":"27 \u30A4\u30F3\u30C1 \u30E2\u30CB\u30BF\u30FC",ultrawide:"\u30A6\u30EB\u30C8\u30E9\u30EF\u30A4\u30C9"},fe=Ur({en:{renameActivity:"Rename Activity",updateActivityDescription:"Update Activity description",renameStory:"Rename UserStory",updateStoryDescription:"Update UserStory description",renameStep:"Rename Step",updateStepDescription:"Update Step description",changePreviewKind:"Change Preview kind",changePreviewViewport:"Change Preview viewport",changePreviewLabel:"Change Preview label",moveStory:"Move UserStory",moveStep:"Move Step",deleteTitle:"Delete",reorderTitle:e=>`Reorder ${e}`,addTitle:e=>`Add ${e}`,toFront:"\u2192 To the front",afterName:e=>`\u2192 Right after "${e}"`,unknownTarget:"(unknown target)",activityGroup:"Activity",storyGroup:"UserStory",stepGroup:"Step",screenGroup:"Screen",openInApp:"Open this screen in the app view",previewGroup:"Preview",pageGroup:"Page",uiGroup:"UI",targetLabel:(e,t)=>`${e} \xB7 ${t}`,targetMissing:(e,t)=>`${e} \xB7 ${t} (missing)`,noActivityBefore:"There are no Activities yet. Add ",noActivityAfter:" to the base JSON, or ask the agent.",deleteStepAria:"Delete step",addStepButton:"+ Step",stepNameLabel:"Step name",descriptionLabel:"Description",descriptionPlaceholder:"What happens in this Step (click to edit)",newStepName:"New step",viewLabel:"View",viewScenario:"Scenario",viewApp:"App",viewScenarioHint:"Follow one user story step by step",viewAppHint:"Use the UI as one app, whatever the scenario",appScreens:"Screens",appScreensHint:"Pick a screen to start from, then move around through the UI itself.",appSelectLabel:"App",appOutsideBrowser:"Outside the browser",noStepBefore:"There are no Steps yet. A Prototype has the meaning structure ",noStepAfter:" \u2014 one Step is one moment of the story: the screen the user is on and what they have at hand. Add a Step to the base JSON, and its screen will appear here.",noScreens:"This product has no screens yet. Declare its apps and their screens under apps[].screens in the base JSON, and they will appear here.",noPreviewMetadata:"No preview metadata \u2014 ask the agent to add it.",storyWithoutSteps:"This UserStory has no Steps yet, so there is no screen to show. Add one with + Step, or ask the agent to prototype it.",pageActor:e=>`Used by ${e}`,maximize:"Maximize",restore:"Restore size",maximizeHint:"Show the preview alone across the tab \xB7 Esc to restore",situation:"Situation",uiComment:"Comment on UI",uiCommentHint:"Click any part of the preview to comment on it \xB7 Esc to finish",uiCommentPin:(e,t)=>`Comment ${e}: ${t}`,mailFrom:"From",mailTo:"To",mailCc:"Cc",mailDate:"Date",demo:"Demo",demoHint:"Use the app in a browser across the tab, with nothing else on screen \xB7 Esc to finish",exitDemo:"Exit demo",browserBack:"Back",browserForward:"Forward",browserReload:"Reload",browserAddress:"Address",browserTabs:"Tabs",newTab:"New tab",closeTab:"Close tab",browserProfile:e=>`Profile: ${e}`,browserGuest:"Guest",newTabShortcuts:"Pages of this app",unreachableTitle:"This site can\u2019t be reached",unreachableBody:"No page of the prototype has this address.",device:"Device",deviceHint:"The window the app runs in: a page taller than it scrolls inside, as on the device",deviceName:e=>kt[e]??Ii[e]??e,deviceZoom:e=>`Shown at ${e}% to fit`,actions:"Actions",actionsHint:"Make the screen do something in one go, e.g. fill its form with sample data"},ja:{renameActivity:"Activity \u540D\u3092\u5909\u66F4",updateActivityDescription:"Activity \u306E\u8AAC\u660E\u3092\u66F4\u65B0",renameStory:"UserStory \u540D\u3092\u5909\u66F4",updateStoryDescription:"UserStory \u306E\u8AAC\u660E\u3092\u66F4\u65B0",renameStep:"Step \u540D\u3092\u5909\u66F4",updateStepDescription:"Step \u306E\u8AAC\u660E\u3092\u66F4\u65B0",changePreviewKind:"Preview \u306E\u7A2E\u5225\u3092\u5909\u66F4",changePreviewViewport:"Preview \u306E\u30D3\u30E5\u30FC\u30DD\u30FC\u30C8\u3092\u5909\u66F4",changePreviewLabel:"Preview \u306E\u30E9\u30D9\u30EB\u3092\u5909\u66F4",moveStory:"UserStory \u3092\u79FB\u52D5",moveStep:"Step \u3092\u79FB\u52D5",deleteTitle:"\u524A\u9664",reorderTitle:e=>`${e} \u306E\u9806\u5E8F\u3092\u5909\u66F4`,addTitle:e=>`${e} \u3092\u8FFD\u52A0`,toFront:"\u2192 \u5148\u982D\u3078",afterName:e=>`\u2192 "${e}" \u306E\u76F4\u5F8C\u3078`,unknownTarget:"(unknown target)",activityGroup:"Activity",storyGroup:"UserStory",stepGroup:"Step",screenGroup:"\u753B\u9762",openInApp:"\u3053\u306E\u753B\u9762\u3092\u30A2\u30D7\u30EA\u30D3\u30E5\u30FC\u3067\u958B\u304F",previewGroup:"Preview",pageGroup:"Page",uiGroup:"UI",targetLabel:(e,t)=>`${e} \xB7 ${t}`,targetMissing:(e,t)=>`${e} \xB7 ${t} (missing)`,noActivityBefore:"Activity \u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002base JSON \u306E ",noActivityAfter:" \u3092\u8FFD\u52A0\u3059\u308B\u304B\u3001Agent \u306B\u4F9D\u983C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",deleteStepAria:"\u30B9\u30C6\u30C3\u30D7\u3092\u524A\u9664",addStepButton:"+ Step",stepNameLabel:"Step \u540D",descriptionLabel:"\u8AAC\u660E",descriptionPlaceholder:"\u3053\u306E Step \u3067\u4F55\u304C\u8D77\u304D\u308B\u304B\uFF08\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7DE8\u96C6\uFF09",newStepName:"\u65B0\u3057\u3044\u30B9\u30C6\u30C3\u30D7",viewLabel:"\u8868\u793A",viewScenario:"\u30B7\u30CA\u30EA\u30AA",viewApp:"\u30A2\u30D7\u30EA",viewScenarioHint:"\u30E6\u30FC\u30B6\u30FC\u30B9\u30C8\u30FC\u30EA\u30FC\u306B\u6CBF\u3063\u3066 Step \u3092\u9806\u306B\u305F\u3069\u308B",viewAppHint:"\u30B7\u30CA\u30EA\u30AA\u306B\u95A2\u4FC2\u306A\u304F\u3001UI \u3092 1 \u3064\u306E\u30A2\u30D7\u30EA\u3068\u3057\u3066\u89E6\u308B",appScreens:"\u753B\u9762",appScreensHint:"\u8D77\u70B9\u306B\u3059\u308B\u753B\u9762\u3092\u9078\u3073\u3001\u3042\u3068\u306F UI \u306E\u30EA\u30F3\u30AF\u3067\u79FB\u52D5\u3057\u307E\u3059\u3002",appSelectLabel:"\u30A2\u30D7\u30EA",appOutsideBrowser:"\u30D6\u30E9\u30A6\u30B6\u4EE5\u5916",noStepBefore:"Step \u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002Prototype \u306F ",noStepAfter:" \u306E\u610F\u5473\u69CB\u9020\u3092\u6301\u3061\u30011 Step = \u30B7\u30CA\u30EA\u30AA\u306E 1 \u5834\u9762\uFF08\u30E6\u30FC\u30B6\u30FC\u304C\u3044\u308B\u753B\u9762\u3068\u3001\u624B\u5143\u306B\u3042\u308B\u3082\u306E\uFF09\u3067\u3059\u3002base JSON \u306B Step \u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u3053\u3053\u306B\u305D\u306E\u753B\u9762\u304C\u73FE\u308C\u307E\u3059\u3002",noScreens:"\u3053\u306E\u30D7\u30ED\u30C0\u30AF\u30C8\u306B\u306F\u307E\u3060\u753B\u9762\u304C\u3042\u308A\u307E\u305B\u3093\u3002base JSON \u306E apps[].screens \u306B\u30A2\u30D7\u30EA\u3068\u753B\u9762\u3092\u5BA3\u8A00\u3059\u308B\u3068\u3001\u3053\u3053\u306B\u73FE\u308C\u307E\u3059\u3002",noPreviewMetadata:"preview metadata \u304C\u3042\u308A\u307E\u305B\u3093 \u2014 \u8FFD\u52A0\u306F Agent \u306B\u4F9D\u983C\u3057\u3066\u304F\u3060\u3055\u3044",storyWithoutSteps:"\u3053\u306E UserStory \u306B\u306F\u307E\u3060 Step \u304C\u306A\u304F\u3001\u898B\u305B\u308B\u753B\u9762\u304C\u3042\u308A\u307E\u305B\u3093\u3002+ Step \u3067\u8FFD\u52A0\u3059\u308B\u304B\u3001Agent \u306B\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F9D\u983C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",pageActor:e=>`\u5229\u7528\u8005: ${e}`,maximize:"\u6700\u5927\u5316",restore:"\u5143\u306E\u30B5\u30A4\u30BA\u306B\u623B\u3059",maximizeHint:"\u30D7\u30EC\u30D3\u30E5\u30FC\u3060\u3051\u3092\u30BF\u30D6\u3044\u3063\u3071\u3044\u306B\u8868\u793A \xB7 Esc \u3067\u623B\u308B",situation:"\u72B6\u6CC1",uiComment:"UI \u306B\u30B3\u30E1\u30F3\u30C8",uiCommentHint:"\u30D7\u30EC\u30D3\u30E5\u30FC\u306E\u8981\u7D20\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30B3\u30E1\u30F3\u30C8 \xB7 Esc \u3067\u7D42\u4E86",uiCommentPin:(e,t)=>`\u30B3\u30E1\u30F3\u30C8 ${e}: ${t}`,mailFrom:"\u5DEE\u51FA\u4EBA",mailTo:"\u5B9B\u5148",mailCc:"Cc",mailDate:"\u65E5\u6642",demo:"\u30C7\u30E2",demoHint:"\u307B\u304B\u306B\u4F55\u3082\u51FA\u3055\u305A\u3001\u30BF\u30D6\u3044\u3063\u3071\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u30A2\u30D7\u30EA\u3092\u89E6\u308B \xB7 Esc \u3067\u7D42\u4E86",exitDemo:"\u30C7\u30E2\u3092\u7D42\u4E86",browserBack:"\u623B\u308B",browserForward:"\u9032\u3080",browserReload:"\u518D\u8AAD\u307F\u8FBC\u307F",browserAddress:"\u30A2\u30C9\u30EC\u30B9",browserTabs:"\u30BF\u30D6",newTab:"\u65B0\u3057\u3044\u30BF\u30D6",closeTab:"\u30BF\u30D6\u3092\u9589\u3058\u308B",browserProfile:e=>`\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB: ${e}`,browserGuest:"\u30B2\u30B9\u30C8",newTabShortcuts:"\u3053\u306E\u30A2\u30D7\u30EA\u306E\u30DA\u30FC\u30B8",unreachableTitle:"\u3053\u306E\u30B5\u30A4\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093",unreachableBody:"\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u306B\u3053\u306E\u30A2\u30C9\u30EC\u30B9\u306E\u30DA\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002",device:"\u30C7\u30D0\u30A4\u30B9",deviceHint:"\u30A2\u30D7\u30EA\u3092\u52D5\u304B\u3059\u753B\u9762\u306E\u5927\u304D\u3055\u3002\u53CE\u307E\u3089\u306A\u3044\u30DA\u30FC\u30B8\u306F\u5B9F\u6A5F\u3068\u540C\u3058\u304F\u753B\u9762\u306E\u4E2D\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B",deviceName:e=>kt[e]??Pi[e]??e,deviceZoom:e=>`\u53CE\u307E\u308B\u3088\u3046 ${e}% \u3067\u8868\u793A`,actions:"\u30A2\u30AF\u30B7\u30E7\u30F3",actionsHint:"\u30D5\u30A9\u30FC\u30E0\u306B\u30B5\u30F3\u30D7\u30EB\u30C7\u30FC\u30BF\u3092\u5165\u308C\u308B\u306A\u3069\u3001\u753B\u9762\u306B\u7528\u610F\u3055\u308C\u305F\u64CD\u4F5C\u3092\u4E00\u5EA6\u306B\u884C\u3046"}}),_i=["scenario","app"],V="view",se=e=>e[V]==="app"?"app":"scenario",xt=e=>({[V]:e==="app"?"app":null}),ae=(e,t)=>e===void 0?`\u2192 "${t}"`:`"${e}" \u2192 "${t}"`,Ri=e=>({SET_ACTIVITY_NAME:(t,r)=>({title:e.renameActivity,tone:"update",body:ae(z(r,t.target.id)?.name,k(b.SET_ACTIVITY_NAME,t).name)}),SET_ACTIVITY_DESCRIPTION:(t,r)=>({title:e.updateActivityDescription,tone:"update",body:Ne(z(r,t.target.id)?.description,k(b.SET_ACTIVITY_DESCRIPTION,t).description)}),SET_STORY_NAME:(t,r)=>({title:e.renameStory,tone:"update",body:ae(E(r,t.target.id)?.story.name,k(b.SET_STORY_NAME,t).name)}),SET_STORY_DESCRIPTION:(t,r)=>({title:e.updateStoryDescription,tone:"update",body:Ne(E(r,t.target.id)?.story.description,k(b.SET_STORY_DESCRIPTION,t).description)}),SET_STEP_NAME:(t,r)=>({title:e.renameStep,tone:"update",body:ae($(r,t.target.id)?.step.name,k(b.SET_STEP_NAME,t).name)}),SET_STEP_DESCRIPTION:(t,r)=>({title:e.updateStepDescription,tone:"update",body:Ne($(r,t.target.id)?.step.description,k(b.SET_STEP_DESCRIPTION,t).description)}),SET_PREVIEW_KIND:(t,r)=>({title:e.changePreviewKind,tone:"update",body:ae(T(r,t.target.id)?.preview.kind,k(b.SET_PREVIEW_KIND,t).kind)}),SET_PREVIEW_VIEWPORT:(t,r)=>({title:e.changePreviewViewport,tone:"update",body:ae(T(r,t.target.id)?.preview.viewport,k(b.SET_PREVIEW_VIEWPORT,t).viewport)}),SET_PREVIEW_LABEL:t=>({title:e.changePreviewLabel,tone:"update",body:`\u2192 "${k(b.SET_PREVIEW_LABEL,t).label}"`}),REORDER_ACTIVITY:t=>ze(e,e.activityGroup,k(b.REORDER_ACTIVITY,t).after),REORDER_STORY:t=>ze(e,e.storyGroup,k(b.REORDER_STORY,t).after),REORDER_STEP:t=>ze(e,e.stepGroup,k(b.REORDER_STEP,t).after),MOVE_STORY:(t,r)=>({title:e.moveStory,tone:"move",body:`\u2192 ${z(r,k(b.MOVE_STORY,t).toActivity)?.name??k(b.MOVE_STORY,t).toActivity}`}),MOVE_STEP:(t,r)=>({title:e.moveStep,tone:"move",body:`\u2192 ${E(r,k(b.MOVE_STEP,t).toStory)?.story.name??k(b.MOVE_STEP,t).toStory}`}),ADD_ACTIVITY:t=>be(e,e.activityGroup,k(b.ADD_ACTIVITY,t).name),ADD_STORY:t=>be(e,e.storyGroup,k(b.ADD_STORY,t).name),ADD_STEP:t=>be(e,e.stepGroup,k(b.ADD_STEP,t).name),ADD_PREVIEW:t=>be(e,e.previewGroup,k(b.ADD_PREVIEW,t).label??k(b.ADD_PREVIEW,t).id),DELETE_ACTIVITY:(t,r)=>we(e,z(r,t.target.id)?.name),DELETE_STORY:(t,r)=>we(e,E(r,t.target.id)?.story.name),DELETE_STEP:(t,r)=>we(e,$(r,t.target.id)?.step.name),DELETE_PREVIEW:(t,r)=>we(e,T(r,t.target.id)?.preview.label)}),Ne=(e,t)=>{const r=t.length>90?`${t.slice(0,90)}\u2026`:t;return e===void 0||e===""?`\u2192 "${r}"`:`"${Di(e)}" \u2192 "${r}"`},Di=e=>e.length>60?`${e.slice(0,60)}\u2026`:e,ze=(e,t,r)=>({title:e.reorderTitle(t),tone:"move",body:r===null?e.toFront:e.afterName(r)}),be=(e,t,r)=>({title:e.addTitle(t),tone:"create",body:`+ "${r}"`}),we=(e,t)=>({title:e.deleteTitle,tone:"delete",body:t===void 0?e.unknownTarget:`\u2212 "${t}"`}),$t=(e,t,r,i)=>{const n=Ri(e),o=Object.hasOwn(n,t.type)?n[t.type]:void 0,s=o?o(t,i??r):{title:t.type,tone:"meta"};return{title:s.title,targetLabel:St(e,r,t.target),tone:s.tone,...s.body===void 0?{}:{summary:s.body}}},Et=e=>`${e.type} ${Y(e.target)} ${JSON.stringify(e.payload)}`,St=(e,t,r)=>{switch(r.type){case"activity":{const i=z(t,r.id);return i?e.targetLabel(e.activityGroup,i.name):e.targetMissing(e.activityGroup,r.id)}case"story":{const i=E(t,r.id)?.story;return i?e.targetLabel(e.storyGroup,i.name):e.targetMissing(e.storyGroup,r.id)}case"step":{const i=$(t,r.id)?.step;return i?e.targetLabel(e.stepGroup,i.name):e.targetMissing(e.stepGroup,r.id)}case"screen":{const i=N(t,r.id)?.screen;return i?e.targetLabel(e.screenGroup,i.title):e.targetMissing(e.screenGroup,r.id)}case"preview":{const i=T(t,r.id)?.preview;return i?e.targetLabel(e.previewGroup,i.label??i.id):e.targetMissing(e.previewGroup,r.id)}case"page":return e.targetLabel(e.pageGroup,Ye(t));case re:{const i=Ce(r.id),n=i?T(t,i.previewId)?.preview:void 0;return i&&n?e.targetLabel(e.uiGroup,Tt(n,i)):e.targetMissing(e.uiGroup,r.id)}default:return e.targetLabel(r.type,r.id)}},Tt=(e,t)=>{const r=t.text===void 0?t.selector:`"${t.text}"`;return`${e.label??e.id} \u203A ${r}`},At=(e,t)=>{const r=[];for(const i of e){if(i.target.type!==re)continue;const n=Ce(i.target.id);!n||!t.includes(n.previewId)||r.push({id:i.id,previewId:n.previewId,selector:n.selector,number:r.length+1,body:tt(i)})}return r},It=(e,t)=>At(e,t).length,Ci=/^[a-z][a-z0-9+.-]*:/i,Oi=e=>{const t=e.baseUrl?.trim(),r=Yr(e.title??"");return`${(t?t.startsWith("http")?t:`https://${t}`:`https://${r==="item"?"page":r}.example.com`).replace(/\/+$/,"")}/`},me=(e,t)=>{const r=Oi(e);if(!t.url)return`${r}${t.id}`;if(Ci.test(t.url))return t.url;try{return decodeURI(new URL(t.url,r).href)}catch{return t.url}},Mi=e=>{switch(e.type){case"activity":return{[V]:null,activity:e.id};case"story":return{[V]:null,activity:null,story:e.id};case"step":return{[V]:null,activity:null,story:null,step:e.id};case"screen":return{screen:e.id};default:return null}},Pt=(e,t)=>{const r=e.kind==="screen"?[{type:"screen",id:e.screen.id}]:[{type:"activity",id:e.activity.id},{type:"story",id:O(e.activity.id,e.story.id)},...e.kind==="step"?[{type:"step",id:ie(e)}]:[]];for(const i of t?.panes??[])i.kind==="screen"&&r.push({type:"screen",id:i.screen.screen.id});return[...new Set(r.map(Y))].join(" ")},Ve=",",_t=e=>e.preview?.split(Ve)??[],Li=(e,t)=>e.kind===t.kind&&e.viewport===t.viewport,Rt=(e,t,r)=>{const i=t.find(o=>r.includes(o.id));if(i)return i;const n=r.flatMap(o=>T(e,o)?.preview??[]);return t.find(o=>n.some(s=>Li(o,s)))??t[0]},Dt=(e,t,r,i)=>{const n=t.screen.previews,o=r===void 0?Rt(e,n,_t(i)):n.find(a=>a.id===r);if(!o)return;const s=r===void 0&&n.length>1;return{kind:"screen",screen:t,preview:o,pinned:r!==void 0,tabs:s?n:[]}},Ct=e=>({layout:e.length>1?"side-by-side":"single",panes:e,shown:e.map(t=>t.preview)}),Ot=(e,t,r)=>t.panes.flatMap(i=>{if(!K(i))return[{kind:"material",preview:i.material}];const n=N(e,i.screen),o=n&&Dt(e,n,i.preview,r);return o?[o]:[]}),Ue=(e,t,r)=>{if(t.kind==="screen"){const i=Dt(e,t,void 0,r);return Ct(i?[i]:[])}return Ct(Ot(e,t.step,r))},Ni=(e,t)=>e.panes.flatMap(r=>r.kind!=="screen"||r.tabs.length===0?[]:[r.tabs.some(i=>i.id===t)?t:r.preview.id]).join(Ve),Mt=(e,t)=>{const r=new Map;for(const i of t){const n=T(e,i)?.owner;if(n?.kind!=="screen"||n.screen.actions.length===0)continue;const o=r.get(n.screen.id)??{screen:n.screen,previewIds:[]};o.previewIds.push(i),r.set(n.screen.id,o)}return[...r.values()].map(({screen:i,previewIds:n})=>({screen:i,previewIds:n,actions:i.actions}))},zi=(e,t)=>[...X(t),...he(e,t).flatMap(r=>r.screen.previews)],Vi=["activity","story","step","screen","preview"],Ui=(e,t,r)=>{switch(t){case"activity":return z(e,r)!==void 0;case"story":return E(e,r)!==void 0||e.activities.some(i=>i.stories.some(n=>n.id===r));case"step":return $(e,r)!==void 0||W(e).some(i=>i.step.id===r);case"screen":return N(e,r)!==void 0;case"preview":return T(e,r)!==void 0;default:return!1}},Yi=(e,t)=>{let r;if(t.navigate!==null)r=t.navigate.includes("=")?t.navigate:`step=${t.navigate}`;else{const o=t.href?.trim()??"";if(o===""||o==="#"||o.toLowerCase().startsWith("javascript:"))return"no-destination";if(!o.startsWith("#"))return null;r=o}const i=Ae(r),n=Vi.filter(o=>i[o]!==void 0);return n.length===0?t.navigate===null?null:"unknown-target":n.every(o=>Ui(e,o,i[o]??""))?null:"unknown-target"},Hi=(e,t)=>{const r=t.mail??{},i=[{label:e.mailFrom,value:r.from},{label:e.mailTo,value:r.to},{label:e.mailCc,value:r.cc},{label:e.mailDate,value:r.date}].flatMap(s=>s.value===void 0||s.value.trim()===""?[]:[{label:s.label,value:s.value}]),n=r.from?.replace(/<[^>]*>/g,"").replace(/["']/g,"").trim()||r.from?.trim(),o=n?Array.from(n)[0]?.toUpperCase():void 0;return{...r.subject===void 0||r.subject.trim()===""?{}:{subject:r.subject},...n?{sender:n}:{},...o===void 0?{}:{initial:o},rows:i}},Lt=(e,t)=>{const r=[];for(const i of t.activities){r.push({value:Y({type:"activity",id:i.id}),label:i.name,group:e.activityGroup});for(const n of i.stories){r.push({value:Y({type:"story",id:O(i.id,n.id)}),label:`${i.name} \u203A ${n.name}`,group:e.storyGroup});for(const o of n.steps)r.push({value:Y({type:"step",id:ve(i,n,o)}),label:`${n.name} \u203A ${o.name}`,group:e.stepGroup})}}for(const{app:i,screen:n}of H(t))r.push({value:Y({type:"screen",id:n.id}),label:`${i.name} \u203A ${n.title}`,group:e.screenGroup});return r},Wi=(e,t,r)=>{const i=Z(t,r);if(i?.kind==="screen"){const{screen:n}=i;return{value:Y({type:"screen",id:n.id}),label:n.title,group:e.screenGroup}}return i?.kind!=="step"?null:{value:Y({type:"step",id:ie(i)}),label:i.step.name,group:e.stepGroup}},Z=(e,t)=>{if(se(t)==="app"){const o=N(e,t.screen);return o?{kind:"screen",...o}:void 0}const r=$(e,t.step);if(r)return{kind:"step",...r};const i=z(e,t.activity),n=i?.stories.find(o=>o.id===t.story||O(i.id,o.id)===t.story);return i&&n?{kind:"story",activity:i,story:n}:void 0},Nt=(e,t)=>{const r=(d,c)=>c===void 0?{title:d}:{actor:c,title:d};if(t.kind==="screen")return r(t.screen.title,t.app.actor);const{activity:i,story:n,step:o}=t,s=he(e,o),a=s.length===1?s[0]:void 0;return r(a?.screen.title??o.name,o.actor??n.actor??i.actor??a?.app.actor)},Bi=(e,t)=>{const r=t.actor??e.actor;return r===void 0?{title:t.name}:{actor:r,title:t.name}},Ye=e=>e.title??"UX Prototype",zt=(e,t)=>(t?e.preview=t:delete e.preview,e),Gi=(e,t,r)=>{if(!t)return;const i=Ot(e,t,r).flatMap(n=>n.kind==="screen"&&!n.pinned?[n.preview.id]:[]);return i.length===0?void 0:i.join(Ve)},Vt=(e,t)=>{const r=()=>{if(t.step===void 0&&t.story===void 0)return;const o=Ut(e,{...t,[V]:""}),s=$(e,o.step);return s&&he(e,s.step)[0]},i=N(e,t.screen)??r()??H(e)[0],n={...t,[V]:"app"};for(const o of["activity","story","step"])delete n[o];return i?n.screen=i.screen.id:delete n.screen,zt(n,i&&Rt(e,i.screen.previews,_t(t))?.id)},qi=(e,t,r)=>{const i=s=>Ti(s.step,t);if(r&&i(r))return r;const n=r?.story.steps??[],o=s=>{const a=n[s];return r&&a?{...r,step:a,stepIndex:s}:void 0};for(let s=(r?.stepIndex??0)+1;s<n.length;s+=1){const a=o(s);if(a&&i(a))return a}for(let s=(r?.stepIndex??0)-1;s>=0;s-=1){const a=o(s);if(a&&i(a))return a}return W(e).find(i)},Ut=(e,t)=>{const r=z(e,t.activity),i=t.story,n=r?.stories.find(U=>U.id===i||O(r.id,U.id)===i),o=n&&r?{activity:r,story:n}:E(e,i),s=t.step,d=(o&&s?$(e,`${O(o.activity.id,o.story.id)}.${s}`):void 0)??$(e,s),c=t.screen,f=c===void 0?void 0:qi(e,c,d);if(c!==void 0&&!f&&N(e,c))return Vt(e,{...t,[V]:"app"});const h=f??d,v=h?.activity??o?.activity??r??e.activities[0],I=h?.story??(o&&o.activity===v?o.story:void 0)??v?.stories[0],_=h?.step??I?.steps[0],S={...t};return delete S.screen,v?S.activity=v.id:delete S.activity,I&&v?S.story=E(e,I.id)?I.id:O(v.id,I.id):delete S.story,_&&I&&v?S.step=$(e,_.id)?_.id:ve(v,I,_):delete S.step,delete S[V],zt(S,Gi(e,_,t))},ji=["activity","story","step","screen"],ye=(e,t)=>se(t)==="app"?Vt(e,t):Ut(e,t),Fi=(e,t)=>{const r=t.screen.previews.find(o=>o.kind==="browser");if(!r)return;let i;try{i=new URL(me(e,r),"https://page.example.com")}catch{return}const n=i.pathname.split("/").filter(o=>o!=="").map(o=>{try{return decodeURIComponent(o)}catch{return o}});return{origin:i.origin,segments:n}},Yt=()=>({screens:[],children:new Map}),He=(e,t,r)=>{const[i,...n]=e.children.entries();if(e.screens.length===0&&i&&n.length===0&&r!=="/"){const[o,s]=i;return He(s,`${t}/${o}`,`${r}/${o}`)}return{segment:t,path:r,screens:e.screens,children:[...e.children.entries()].map(([o,s])=>He(s,`/${o}`,`${r==="/"?"":r}/${o}`))}},Ki=e=>{const t=new Map;for(const[r,i]of e){const n=t.get(i.origin)??Yt();t.set(i.origin,n);let o=n;for(const s of i.segments){const a=o.children.get(s)??Yt();o.children.set(s,a),o=a}o.screens.push(r)}return[...t.entries()].map(([r,i])=>({origin:r,root:He(i,"/","/")}))},Xi=(e,t)=>{const r=t.screens.map(o=>({app:t,screen:o})),i=[],n=[];for(const o of r){const s=Fi(e,o);s?i.push([o,s]):n.push(o)}return{app:t,screens:r,trees:Ki(i),others:n}},Ht=e=>e.apps.map(t=>Xi(e,t)).filter(t=>t.screens.length>0),Wt=(e,t)=>t?.kind!=="screen"?e[0]:e.find(r=>r.app.id===t.app.id)??e[0],Zi=(e,t)=>{switch(t.type){case"activity":return z(e,t.id)!==void 0;case"story":return E(e,t.id)!==void 0;case"step":return $(e,t.id)!==void 0;case"screen":return N(e,t.id)!==void 0;case"preview":return T(e,t.id)!==void 0;case"page":return!0;case re:{const r=Ce(t.id);return r!==void 0&&T(e,r.previewId)!==void 0}default:return!1}},Bt=e=>{const t=fe(e);return{name:"prototype",label:"UX Prototype",parseBase:gt,emptyBase:ft,actions:b,apply:mt,hasTarget:Zi,canonicalTarget:(r,i)=>{if(i.type==="step"){const n=$(r,i.id);return n?{...i,id:ie(n)}:i}if(i.type==="story"){const n=E(r,i.id);return n?{...i,id:O(n.activity.id,n.story.id)}:i}if(i.type==="preview"){const n=T(r,i.id);return n?{...i,id:n.preview.id}:i}return i},describe:(r,i,n)=>$t(t,r,i,n),serialize:Et,resolveNavigation:ye,navigationHierarchy:ji,navigationFor:(r,i)=>Mi(i),commentTargets:(r,i)=>Lt(t,r),currentTarget:(r,i)=>Wi(t,r,i),title:Ye}},Ji=(e,t)=>{const r=t.flatMap(i=>{const n=Math.max(i.left,e.left)-e.left,o=Math.max(i.top,e.top)-e.top,s=Math.min(i.right,e.right)-e.left-n,a=Math.min(i.bottom,e.bottom)-e.top-o;return s>0&&a>0?[`M${n} ${o}h${s}v${a}h-${s}Z`]:[]});return r.length===0?"none":`path(evenodd, 'M0 0H${e.width}V${e.height}H0Z ${r.join(" ")}')`},ke="data-dpk-modal",Qi=e=>{try{return e.matches(":modal")}catch{return!1}},Gt=e=>{e.setAttribute(ke,""),e.open||e.show()},qt=e=>{Object.hasOwn(e,"showModal")||Object.defineProperty(e,"showModal",{configurable:!0,value:()=>Gt(e)})},jt=(e,t)=>{if(!Qi(t))return;const r=i=>{i.target===t&&(i.stopImmediatePropagation(),e.removeEventListener("close",r,!0))};e.addEventListener("close",r,!0),t.close(),Gt(t)},Ft=(e,t)=>{try{return Array.from(e.querySelectorAll(t))}catch{return[]}},en=(e,t)=>{const r=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value");r?.set?r.set.call(e,t):e.value=t},tn=e=>e instanceof HTMLInputElement&&(e.type==="checkbox"||e.type==="radio"),rn=(e,t)=>{if(tn(e)){const i=typeof t=="boolean"?t:e.value===t;return typeof t=="string"&&!i?!1:(e.checked=i,!0)}const r=String(t);return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?(en(e,r),!0):(e.textContent=r,!1)},nn=(e,t)=>{const r=[];for(const[i,n]of Object.entries(t)){const o=Ft(e,i);o.length===0&&r.push(i);for(const s of o)rn(s,n)&&(s.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})))}return r},on=(e,t)=>{const r=[];for(const i of t){const[n]=Ft(e,i);n instanceof HTMLElement?n.click():r.push(i)}return r},sn='a, button, input, select, textarea, label, summary, [role="button"], [role="link"], [role="tab"]',Kt=/^-?[A-Za-z_][\w-]*$/,Xt=40,an=(e,t)=>{const r=e.closest(sn);return r!==null&&r!==t&&t.contains(r)?r:e},xe=e=>{const t=e.replace(/\s+/g," ").trim();if(t==="")return;const r=Array.from(t);return r.length>Xt?`${r.slice(0,Xt).join("")}\u2026`:t},dn=e=>{const t=e.getAttribute("aria-label")??e.getAttribute("title");if(t)return xe(t);const r=e.tagName.toLowerCase();return xe(r==="input"||r==="textarea"||r==="select"?e.getAttribute("placeholder")??e.getAttribute("name")??"":r==="img"?e.getAttribute("alt")??"":e.textContent??"")},pn=e=>{const t=e.getAttribute("id");if(t&&Kt.test(t))return`#${t}`;const r=e.tagName.toLowerCase(),i=Array.from(e.classList).filter(a=>Kt.test(a)).slice(0,2).map(a=>`.${a}`).join(""),n=e.parentElement,o=n?Array.from(n.children).filter(a=>a.tagName===e.tagName):[],s=o.length>1?`:nth-of-type(${o.indexOf(e)+1})`:"";return`${r}${i}${s}`},cn=(e,t,r)=>{try{const i=e.querySelectorAll(t);return i.length===1&&i[0]===r}catch{return!1}},ln=(e,t)=>{const r=[];let i=e;for(;i!==null&&i!==t;){const o=pn(i);if(r.unshift(o),o.startsWith("#")||cn(t,r.join(" > "),e))break;i=i.parentElement}const n=dn(e);return{selector:r.length===0?":scope":r.join(" > "),tag:e.tagName.toLowerCase(),...n===void 0?{}:{text:n}}},un=(e,t)=>{if(t===":scope")return e;try{return e.querySelector(t)}catch{return null}},hn=["screen","preview"],de=e=>JSON.stringify(hn.map(t=>e[t]??null)),Zt=(e,t)=>e?.kind==="page"&&de(e.page)===t,$e=e=>`tab-${e}`,vn=e=>({tabs:[{id:$e(1),history:[{kind:"page",page:e}],index:0}],activeId:$e(1),seen:de(e),nextId:2}),gn={id:"",history:[],index:0},J=e=>e.tabs.find(t=>t.id===e.activeId)??e.tabs[0]??gn,pe=e=>{const t=J(e);return t.history[t.index]},fn=e=>J(e).index>0,bn=e=>{const t=J(e);return t.index<t.history.length-1},Jt=(e,t)=>({...e,tabs:e.tabs.map(r=>r.id===e.activeId?t(r):r)}),We=(e,t)=>Jt(e,r=>({...r,history:[...r.history.slice(0,r.index+1),t],index:r.index+1})),Ee=e=>{const t=pe(e);return t?.kind==="page"?{...e,seen:de(t.page)}:e},Qt=(e,t)=>{const r=J(e),i=r.index+t;return i<0||i>=r.history.length?e:Ee(Jt(e,n=>({...n,index:i})))},er=(e,t,r)=>{const i=$e(e.nextId),n=e.tabs.findIndex(o=>o.id===e.activeId)+1;return Ee({...e,tabs:[...e.tabs.slice(0,n),{id:i,history:[t],index:0},...e.tabs.slice(n)],activeId:r?e.activeId:i,nextId:e.nextId+1})},wn=(e,t)=>{const r=e.tabs.findIndex(o=>o.id===t);if(r<0)return e;if(e.tabs.length===1){const o=$e(e.nextId);return{...e,tabs:[{id:o,history:[{kind:"new-tab"}],index:0}],activeId:o,nextId:e.nextId+1}}const i=e.tabs.filter(o=>o.id!==t);if(t!==e.activeId)return{...e,tabs:i};const n=i[r]??i[r-1];return Ee({...e,tabs:i,activeId:n?.id??e.activeId})},mn=(e,t)=>{const r=t===null?null:de(t);if(r===e.seen)return e;const i={...e,seen:r};return t===null||r===null||Zt(pe(e),r)?i:We(i,{kind:"page",page:t})},yn=(e,t)=>{const r=de(t);return Zt(pe(e),r)?e.seen===r?e:{...e,seen:r}:We({...e,seen:r},{kind:"page",page:t})},tr=(e,t)=>{switch(t.kind){case"observe":return mn(e,t.page);case"visit":return yn(e,t.page);case"back":return Qt(e,-1);case"forward":return Qt(e,1);case"open-tab":return er(e,t.entry,t.background);case"new-tab":return er(e,{kind:"new-tab"},!1);case"unreachable":return We(e,{kind:"unreachable",url:t.url});case"activate":return e.tabs.some(r=>r.id===t.id)&&t.id!==e.activeId?Ee({...e,activeId:t.id}):e;case"close-tab":return wn(e,t.id);default:return e}},rr=(e,t)=>{const r=ye(e,t),i=Z(e,r);if(i?.kind!=="screen")return null;const[n]=Ue(e,i,r).shown;return n?.kind!=="browser"?null:{screen:i.screen.id,preview:n.id}},Se=(e,t)=>{const r=Z(e,ye(e,{[V]:"app",...t}));return r?.kind==="screen"?r:void 0},ir=(e,t)=>{const r=e.trim();if(r==="")return null;try{return r.startsWith("/")?new URL(r,t):new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(r)?r:`https://${r}`)}catch{return null}},nr=e=>`${e.origin}${e.pathname.replace(/\/+$/,"")}`,kn=(e,t,r)=>{const i=ir(t,r);if(i===null)return null;const n=nr(i);for(const{screen:o}of H(e))for(const s of o.previews){if(s.kind!=="browser")continue;const a=ir(me(e,s),r);if(a!==null&&nr(a)===n)return{screen:o.id,preview:s.id}}return null},or=e=>{try{return new URL(e).host||e}catch{return e}},xn=(e,t,r)=>t===void 0||t.kind==="new-tab"?r.newTab:t.kind==="unreachable"?or(t.url):Se(e,t.page)?.screen.title??r.newTab,sr=(e,t)=>{if(t===void 0||t.kind==="new-tab")return"";if(t.kind==="unreachable")return t.url;const r=Se(e,t.page)?.screen.previews.find(i=>i.id===t.page.preview);return r===void 0?"":me(e,r)},ar=e=>{const t=J(e);for(let r=t.index;r>=0;r-=1){const i=t.history[r];if(i?.kind==="page")return i.page}for(const r of e.tabs){const i=r.history[r.index];if(i?.kind==="page")return i.page}},$n=(e,t)=>t===void 0?void 0:Se(e,t)?.app.actor,dr=(e,t,r,i=null)=>{const n=J(t),o=n.history[n.index],s=$n(e,ar(t)??i??void 0);return{tabs:t.tabs.map(a=>({id:a.id,title:xn(e,a.history[a.index],r),url:sr(e,a.history[a.index]),active:a.id===n.id})),entry:o,url:sr(e,o),canBack:fn(t),canForward:bn(t),...s===void 0?{}:{profile:s}}},En=e=>ar(e)??null,Sn=(e,t)=>{const r=t===null?void 0:Se(e,t),i=Wt(Ht(e),r),n=[],o=(s,a)=>{for(const{screen:d}of a.screens){const c=d.previews.find(f=>f.kind==="browser");c!==void 0&&n.push({title:d.title,url:`${s}${a.path==="/"?"":a.path}`,page:{screen:d.id,preview:c.id}})}for(const d of a.children)o(s,d)};for(const s of i?.trees??[])o(or(s.origin),s.root);return n},A=(e,t,r,i)=>({id:t,deviceClass:e,width:r,height:i}),pr=[A("phone","iphone-se",375,667),A("phone","iphone-16",393,852),A("phone","iphone-16-pro-max",440,956),A("phone","pixel-7",412,915),A("phone","galaxy-s24",360,780),A("tablet","ipad-mini",744,1133),A("tablet","ipad-air-11",820,1180),A("tablet","ipad-pro-11",834,1194),A("tablet","ipad-pro-13",1024,1366),A("desktop","laptop-13",1280,800),A("desktop","laptop-15",1440,900),A("desktop","full-hd",1920,1080),A("desktop","monitor-27",2560,1440),A("desktop","ultrawide",3440,1440)],Tn={phone:A("phone","iphone-16",393,852),tablet:A("tablet","ipad-pro-11",834,1194),desktop:A("desktop","laptop-13",1280,800)},cr=e=>e==="mobile"?"phone":e==="tablet"?"tablet":"desktop",An=e=>e!=="plain",lr=e=>pr.filter(t=>t.deviceClass===e),In=(e,t)=>{const r=cr(e),i=t[r];return lr(r).find(n=>n.id===i)??Tn[r]},Pn=(e,t)=>{const r=pr.find(i=>i.id===t);return r===void 0||e[r.deviceClass]===t?e:{...e,[r.deviceClass]:t}},_n=(e,t)=>`${e.deviceName(t.id)} \xB7 ${t.width}\xD7${t.height}`,Rn=(e,t)=>{const r=[1,t.width/e.width];t.height!==void 0&&r.push(t.height/e.height);const i=Math.min(...r);return!Number.isFinite(i)||i<=0?1:Math.max(.1,Math.floor(i*100)/100)},ur=(e,t)=>{const{state:r,navigation:i}=e,n=Z(r,i),o=se(i);return p`
    <div class="nav">
      ${On(e,t,o)}
      ${o==="app"?Mn(e,t,n):n!==void 0&&n.kind!=="screen"?zn(e,t,n):p`<p class="nav-empty">${t.noActivityBefore}<code>activities</code>${t.noActivityAfter}</p>`}
    </div>
  `},Dn={scenario:"viewScenario",app:"viewApp"},Cn={scenario:"viewScenarioHint",app:"viewAppHint"},On=(e,t,r)=>p`<nav class="view-switch" aria-label=${t.viewLabel}>
  ${_i.map(i=>p`<a
        class="view-option"
        href=${e.hashFor(xt(i))}
        title=${t[Cn[i]]}
        aria-current=${i===r?"page":l}
        data-view=${i}
        >${t[Dn[i]]}</a
      >`)}
</nav>`,Mn=(e,t,r)=>{const i=r?.kind==="screen"?r:void 0,n=Ht(e.state),o=Wt(n,r),s={context:e,currentId:i?.screen.id},a=o?.others??[];return p`
    ${n.length>1&&o?Ln(e,t,n,o):l}
    ${n.length===1&&o?.app.description?p`<p class="app-description">${o.app.description}</p>`:l}
    <div class="steps-head">
      <span class="dpk-label">${t.appScreens}</span>
      <span class="dpk-label">${o?.screens.length??0}</span>
    </div>
    <p class="app-hint">${t.appScreensHint}</p>
    ${o?.trees.map(d=>p`<section class="app-tree">
        <h3 class="app-origin">${Nn(d.origin)}</h3>
        <ul class="tree">
          ${hr(s,d.root,0)}
        </ul>
      </section>`)}
    ${a.length===0?l:p`<section class="app-group">
            ${(o?.trees.length??0)>0?p`<h3 class="app-group-heading">${t.appOutsideBrowser}</h3>`:l}
            <ul class="steps app-screens">
              ${a.map(d=>{const c=vr(s,d);return p`<li class="step-row" data-current=${String(c)}>
                  <a class="step-link" href=${fr(e,d)} aria-current=${c?"page":l}>
                    <span class="step-name">${d.screen.title}</span>
                    ${br(e,d)}
                  </a>
                </li>`})}
            </ul>
          </section>`}
    ${i?.screen.description?p`<div class="detail">
            <div class="screen-description dpk-prose">${Ie(Pe(i.screen.description))}</div>
          </div>`:l}
  `},Ln=(e,t,r,i)=>p`<div class="field">
  <span class="dpk-label">${t.appSelectLabel}</span>
  <select
    class="dpk-select"
    aria-label=${t.appSelectLabel}
    @change=${_e(n=>{const o=r[Number(n)]?.screens[0];o&&e.navigate(gr(o))})}
  >
    ${r.map((n,o)=>p`<option value=${String(o)} ?selected=${n===i}>${n.app.name}</option>`)}
  </select>
  ${i.app.description?p`<p class="app-description">${i.app.description}</p>`:l}
</div>`,hr=(e,t,r)=>p`<li
  class="tree-node"
>
  ${t.screens.length===0&&r===0?l:t.screens.length===0?p`<div class="tree-row" data-depth=${String(r)} data-current="false">
            <span class="tree-link" title=${t.path}><code class="tree-path">${t.segment}</code></span>
          </div>`:t.screens.map(i=>{const n=vr(e,i);return p`<div class="tree-row" data-depth=${String(r)} data-current=${String(n)}>
              <a
                class="tree-link"
                href=${fr(e.context,i)}
                title=${t.path}
                aria-current=${n?"page":l}
              >
                <code class="tree-path">${t.segment}</code>
                <span class="tree-title">${i.screen.title}</span>
                ${br(e.context,i)}
              </a>
            </div>`})}
  ${t.children.length>0?p`<ul class="tree">
          ${t.children.map(i=>hr(e,i,r+1))}
        </ul>`:l}
</li>`,vr=(e,t)=>t.screen.id===e.currentId,gr=e=>({screen:e.screen.id,preview:null}),fr=(e,t)=>e.hashFor(gr(t)),br=(e,t)=>{const r=e.commentCount({type:"screen",id:t.screen.id})+It(e.comments,t.screen.previews.map(i=>i.id));return r>0?p`<span class="step-note">${r}</span>`:l},Nn=e=>e.replace(/^[a-z][a-z0-9+.-]*:\/\//i,""),zn=(e,t,r)=>{const{state:i}=e,{activity:n,story:o}=r,s=o.steps,a=r.kind==="step"?r.step:void 0,d=r.kind==="step"?ie(r):void 0;return p`
    <div class="field">
      <span class="dpk-label">Activity</span>
      <select
        class="dpk-select"
        aria-label="Activity"
        @change=${_e(c=>e.navigate({activity:c,story:null,step:null}))}
      >
        ${i.activities.map(c=>p`<option value=${c.id} ?selected=${c.id===n.id}>${c.name}</option>`)}
      </select>
    </div>
    <div class="field">
      <span class="dpk-label">User Story</span>
      <select
        class="dpk-select"
        aria-label="User Story"
        @change=${_e(c=>e.navigate({activity:n.id,story:c,step:null}))}
      >
        ${n.stories.map(c=>p`<option value=${c.id} ?selected=${c.id===o.id}>${c.name}</option>`)}
      </select>
    </div>
    <div class="steps-head">
      <span class="dpk-label">Step</span>
      <span class="dpk-label">${s.length}</span>
    </div>
    <ol class="steps">
      ${Hr(s,c=>ve(n,o,c),(c,f)=>{const h=ve(n,o,c),v=e.commentCount({type:"step",id:h})+It(e.comments,zi(i,c).map(I=>I.id));return p`
            <li class="step-row" data-current=${String(c.id===a?.id)}>
              <a class="step-link" href=${e.hashFor({activity:n.id,story:o.id,step:c.id})}>
                <span class="step-index">${String(f+1).padStart(2,"0")}</span>
                <span class="step-name">${c.name}</span>
                ${v>0?p`<span class="step-note">${v}</span>`:l}
              </a>
              <span class="row-tools">
                <button
                  class="dpk-icon-btn"
                  type="button"
                  aria-label=${t.deleteStepAria}
                  @click=${()=>e.dispatch(ne.deleteStep(h))}
                >
                  ${Re()}
                </button>
              </span>
            </li>
          `})}
    </ol>
    <button class="dpk-btn" type="button" @click=${()=>Un(e,t,O(n.id,o.id))}>
      ${t.addStepButton}
    </button>
    ${a?st(d,p`<div class="detail">
              <div class="detail-row">
                <span class="dpk-label">${t.stepNameLabel}</span>
                <span class="detail-value">
                  <dpk-component-inline-edit
                    .value=${a.name}
                    .label=${t.stepNameLabel}
                    @dpk-commit=${rt(c=>e.dispatch(ne.setStepName(d??a.id,c)))}
                  ></dpk-component-inline-edit>
                </span>
              </div>
              <div class="detail-row">
                <span class="dpk-label">${t.descriptionLabel}</span>
                <span class="detail-value">
                  <dpk-component-inline-edit
                    multiline
                    markdown
                    .value=${a.description??""}
                    .placeholder=${t.descriptionPlaceholder}
                    .label=${t.descriptionLabel}
                    @dpk-commit=${rt(c=>e.dispatch(ne.setStepDescription(d??a.id,c)))}
                  ></dpk-component-inline-edit>
                </span>
              </div>
              ${Vn(e,t,a)}
            </div>`):l}
  `},Vn=(e,t,r)=>{const i=he(e.state,r);return i.length===0?l:p`<div class="detail-row">
    <span class="dpk-label">${t.screenGroup}</span>
    <span class="detail-value">
      ${i.map(({app:n,screen:o})=>p`<div class="step-screen-entry">
            <a
              class="step-screen"
              href=${e.hashFor({...xt("app"),screen:o.id})}
              title=${t.openInApp}
              >${n.name} › ${o.title}</a
            >
            ${o.description?p`<div class="screen-description dpk-prose">
                    ${Ie(Pe(o.description))}
                  </div>`:l}
          </div>`)}
    </span>
  </div>`},Un=(e,t,r)=>{const i=Wr("new-step",wt(e.state));e.dispatch(ne.addStep(r,i,t.newStepName)).ok&&e.navigate({story:r,step:i})},Yn=D(vi),Hn=D(Br),wr=(e,t,r="bar")=>p`<button
    class=${r==="demo"?"demo-control actions-toggle":"dpk-btn actions-toggle"}
    type="button"
    data-role="actions"
    aria-haspopup="menu"
    aria-expanded=${String(t.open)}
    title=${e.actionsHint}
    @click=${t.toggle}
  >
    ${Yn()} ${e.actions} ${Hn()}
  </button>`,Wn=e=>{const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=[...t.querySelectorAll('[role="menuitem"]')],i=r.findIndex(a=>a===e.composedPath()[0]),n=e.key==="ArrowDown"?1:e.key==="ArrowUp"?-1:0,o=e.key==="Home"?0:e.key==="End"?r.length-1:n===0?-1:(i+n+r.length)%r.length,s=r[o];s!==void 0&&(e.preventDefault(),s.focus())},Bn=(e,t)=>{if(!t.open||t.groups.length===0)return l;const r=t.groups.length>1;return p`<div
    class="comment-pop actions-menu"
    popover="manual"
    role="menu"
    aria-label=${e.actions}
    @keydown=${Wn}
  >
    ${t.groups.map(i=>p`<div class="actions-group" role="group" aria-label=${i.screen.title}>
        ${r?p`<span class="actions-group-title" aria-hidden="true">${i.screen.title}</span>`:l}
        ${i.actions.map(n=>p`<button
            class="actions-item"
            type="button"
            role="menuitem"
            data-action=${n.id}
            @click=${()=>t.run(i.screen.id,n.id)}
          >
            <span class="actions-label">${n.label}</span>
            ${n.description===void 0?l:p`<span class="actions-description">${n.description}</span>`}
          </button>`)}
      </div>`)}
  </div>`},mr=(e,t,r="bar")=>{const i=t.mode.kind!=="off";return p`<button
    class=${`${r==="demo"?"demo-control":i?"dpk-btn dpk-btn--accent":"dpk-btn"} ui-comment-toggle`}
    type="button"
    aria-pressed=${i?"true":"false"}
    title=${e.uiCommentHint}
    @click=${()=>t.send({kind:"toggle"})}
  >
    ${it()} ${e.uiComment}
  </button>`},Gn=(e,t)=>t.mode.kind==="off"?l:p`<p class="ui-comment-hint" role="status">${it()} ${e.uiCommentHint}</p>`,qn=(e,t)=>t.mode.kind==="off"?l:p`<div class="ui-layer" aria-hidden="true">
    <div class="ui-catcher"></div>
    <div class="ui-box ui-hover" hidden></div>
    <div class="ui-box ui-picked" hidden></div>
    ${t.pins.map(r=>p`<span
          class="ui-pin"
          hidden
          data-preview=${r.previewId}
          data-selector=${r.selector}
          title=${e.uiCommentPin(r.number,r.body)}
          >${r.number}</span
        >`)}
  </div>`,jn=e=>{const t=e.mode;if(t.kind!=="composing")return l;const r=ri(t.body,e.notes,{key:`ui:${t.target.previewId}/${t.target.selector}`,...e.targetLabel===void 0?{}:{label:e.targetLabel}});return p`${st(`${t.target.previewId}/${t.target.selector}`,ii(e.composer,r,i=>{i.kind==="input"?e.send({kind:"input",body:i.body}):i.kind==="comment"?e.submit(i.body):e.send({kind:"dismiss"})}))}`},yr=(e,t)=>p`<div class="demo-controls">
    ${t.actions.groups.length>0?wr(e,t.actions,"demo"):l}
    ${mr(e,t.uiComment,"demo")}
    <button class="demo-control demo-exit" type="button" title=${e.exitDemo} @click=${t.onExit}>
      ${Re()} ${e.exitDemo} <kbd>Esc</kbd>
    </button>
  </div>`,kr={mobile:"390px",tablet:"834px",desktop:"1180px",fluid:"100%"},xr={mobile:"620px",tablet:"640px",desktop:"520px",fluid:"420px"},Fn={browser:0,native:22,mail:0,plain:0},$r=(e,t,r)=>{const i=`--frame-width:${kr[t]};--frame-min-height:${xr[t]}`;if(r?.kind!=="device")return i;const n=Fn[e];return`${i};--device-width:${r.width+n}px;--device-height:${r.height+n}px;zoom:${r.zoom}`},Kn=D(Gr),Xn=D(qr),Zn=D(ci),Jn=D(ai),Be=D(si),Qn=(e,t,r)=>{const i=t.length-1;if(e==="ArrowRight")return t[r===i?0:r+1];if(e==="ArrowLeft")return t[r===0?i:r-1];if(e==="Home")return t[0];if(e==="End")return t[i]},eo=(e,t)=>{const{view:r,send:i}=t,n=o=>s=>{const a=r.tabs[o],d=s.key==="Enter"||s.key===" "?a:Qn(s.key,r.tabs,o);d!==void 0&&(s.preventDefault(),i({kind:"activate",id:d.id,focus:!0}))};return p`<div class="browser-tabs">
    <div class="browser-tab-list" role="tablist" aria-label=${e.browserTabs}>
      ${r.tabs.map((o,s)=>p`<div
            class="browser-tab"
            role="tab"
            tabindex=${o.active?"0":"-1"}
            aria-selected=${o.active?"true":"false"}
            title=${o.title}
            @click=${()=>i({kind:"activate",id:o.id})}
            @keydown=${n(s)}
          >
            <span class="browser-favicon">${Be()}</span>
            <span class="browser-tab-title">${o.title}</span>
            ${Er(e,t,o.id)}
          </div>`)}
    </div>
    <button
      class="browser-new-tab"
      type="button"
      aria-label=${e.newTab}
      title=${e.newTab}
      @click=${()=>i({kind:"new-tab"})}
    >
      ${nt()}
    </button>
    ${t.demo===void 0?l:yr(e,t.demo)}
  </div>`},Er=(e,t,r)=>p`<button
    class="browser-tab-close"
    type="button"
    aria-label=${e.closeTab}
    title=${e.closeTab}
    @click=${i=>{i.stopPropagation(),t.send({kind:"close-tab",id:r})}}
  >
    ${Re()}
  </button>`,to={back:Kn,forward:Xn,reload:Zn},Q=(e,t,r)=>{const{view:i,send:n}=t,o={back:e.browserBack,forward:e.browserForward,reload:e.browserReload}[r],s={back:!i.canBack,forward:!i.canForward,reload:i.entry?.kind!=="page"}[r];return p`<button
    class=${`browser-nav browser-${r}`}
    type="button"
    aria-label=${o}
    title=${o}
    ?disabled=${s}
    @click=${()=>n({kind:r})}
  >
    ${to[r]()}
  </button>`},ro=(e,t,r)=>{const{view:i,send:n}=t,o=i.profile??e.browserGuest;return p`<div class="browser-toolbar">
    ${r?l:p`${Q(e,t,"back")} ${Q(e,t,"forward")} ${Q(e,t,"reload")}`}
    <form
      class="browser-address-form"
      @submit=${s=>{s.preventDefault();const a=s.currentTarget,d=a instanceof HTMLFormElement?a.querySelector("input"):null;!d||d.value.trim()===""||(d.blur(),n({kind:"address",input:d.value}))}}
    >
      <span class="browser-lock">${i.entry?.kind==="page"?Jn():Be()}</span>
      <input
        class="browser-address"
        type="text"
        aria-label=${e.browserAddress}
        spellcheck="false"
        autocomplete="off"
        .value=${jr(i.url)}
        @focus=${s=>{s.currentTarget instanceof HTMLInputElement&&s.currentTarget.select()}}
        @keydown=${s=>{if(s.key!=="Escape")return;s.preventDefault();const a=s.currentTarget;a instanceof HTMLInputElement&&(a.value=i.url,a.blur())}}
      />
    </form>
    <span class="browser-profile" title=${e.browserProfile(o)}>
      <span class="browser-avatar" aria-hidden="true">${Array.from(o)[0]??""}</span>
      ${r?l:p`<span class="browser-profile-name">${o}</span>`}
    </span>
  </div>`},io=(e,t)=>{const{view:r,send:i}=t;return p`<div class="browser-bottom">
    ${Q(e,t,"back")} ${Q(e,t,"forward")}
    <button
      class="browser-nav browser-new-tab"
      type="button"
      aria-label=${e.newTab}
      title=${e.newTab}
      @click=${()=>i({kind:"new-tab"})}
    >
      ${nt()}
    </button>
    <button
      class="browser-nav browser-tab-count"
      type="button"
      aria-label=${e.browserTabs}
      title=${e.browserTabs}
      aria-expanded=${t.switcher?"true":"false"}
      @click=${()=>i({kind:"switcher",open:!t.switcher})}
    >
      <span class="browser-tab-count-box">${r.tabs.length}</span>
    </button>
    ${Q(e,t,"reload")}
  </div>`},no=(e,t)=>{const{view:r,send:i}=t;return p`<div class="browser-switcher" role="dialog" aria-label=${e.browserTabs}>
    ${r.tabs.map(n=>p`<div class="browser-card" aria-current=${n.active?"true":l}>
          <button class="browser-card-open" type="button" @click=${()=>i({kind:"activate",id:n.id})}>
            <span class="browser-favicon">${Be()}</span>
            <span class="browser-card-title">${n.title}</span>
            <span class="browser-card-url">${n.url}</span>
          </button>
          ${Er(e,t,n.id)}
        </div>`)}
  </div>`},oo=(e,t,r)=>p`<div class="browser-newtab">
    <p class="browser-newtab-label">${t.newTabShortcuts}</p>
    <div class="browser-shortcuts">
      ${r.shortcuts.map(i=>p`<a
            class="browser-shortcut"
            href=${e.hashFor(i.page)}
            @click=${n=>{n.preventDefault(),r.send({kind:"visit",page:i.page})}}
          >
            <span class="browser-shortcut-icon" aria-hidden="true">${Array.from(i.title)[0]??""}</span>
            <span class="browser-shortcut-title">${i.title}</span>
            <span class="browser-shortcut-url">${i.url}</span>
          </a>`)}
    </div>
  </div>`,so=(e,t)=>p`<div class="browser-unreachable" role="alert">
    <h3>${e.unreachableTitle}</h3>
    <p>${e.unreachableBody}</p>
    <code>${t}</code>
  </div>`,ao=(e,t,r)=>{const{view:i,preview:n,viewport:o}=r,s=i.entry,a=o==="mobile";return p`<figure
    class="frame browser"
    data-kind="browser"
    data-viewport=${o}
    ?data-loading=${r.loading}
    ?data-empty=${n!==void 0&&!r.hasContent}
    data-window=${r.window.kind}
    style=${$r("browser",o,r.window)}
  >
    ${a?l:eo(t,r)} ${ro(t,r,a)}
    <div class="browser-progress" aria-hidden="true"></div>
    <div class="viewport">
      ${a&&r.switcher?no(t,r):l}
      ${s?.kind==="unreachable"?so(t,s.url):n===void 0?oo(e,t,r):p`<slot name=${`preview:${n.id}`}></slot> ${r.hasContent?l:p`<div class="frame-placeholder">
                        <span class="dpk-label">light dom preview</span>
                        <code>&lt;div slot="preview" data-preview-id="${n.id}"&gt;</code>
                      </div>`}`}
    </div>
    ${a?io(t,r):l}
  </figure>`},Sr=(e,t,r)=>{const{state:i,navigation:n}=e,o=Z(i,n),s=o===void 0||o.kind==="story"?void 0:o,a=se(n)==="app",d=Ir(i,[]);if(o?.kind==="story"){const{activity:R,story:Te}=o;return p`
      <div class="stage">
        <section class="stage-story" data-dpk-target=${Pt(o,null)}>
          ${Tr(t,Bi(R,Te))}
          ${Te.description?p`<div class="story-description dpk-prose">${Ie(Pe(Te.description))}</div>`:l}
          <p class="stage-empty">${t.storyWithoutSteps}</p>
        </section>
        ${d}
      </div>
    `}if(!s)return p`
      <div class="stage">
        ${a?p`<p class="stage-empty">${t.noScreens}</p>`:p`<p class="stage-empty">
                ${t.noStepBefore}<strong>Activity › UserStory › Step</strong>${t.noStepAfter}
              </p>`}
        ${d}
      </div>
    `;const c=Ue(i,s,n),{layout:f,panes:h,shown:v}=c,[I]=f==="single"?h:[],_=r.uiComment,S=r.lift,U=S?.mode==="demo",q=r.browser,je=q!==null&&q.view.entry?.kind!=="page"?[]:v,[j]=je,ce=(j??v[0])?.viewport??"desktop",Fe=U&&q!==null&&ce!=="mobile",Ke={onExit:r.onToggleDemo,uiComment:_,actions:r.actions},Dr=j??v[0],Xe=q!==null?"browser":Dr?.kind??"browser",Ze=U&&Xe==="browser"&&cr(ce)==="desktop",F=r.devices,ee=F===null||Ze||!An(Xe)?null:In(ce,F.choice),Je=ee!==null&&F!==null?{kind:"device",width:ee.width,height:ee.height,zoom:F.zoom}:Ze?{kind:"fill"}:null;return p`
    ${S===null?l:p`<div class="stage-placeholder" style=${`height:${S.height}px`}></div>`}
    <div
      class=${S===null?"stage":U?"stage is-demo":"stage is-maximized"}
      data-ui-comment=${_.mode.kind}
      popover=${S===null?l:"manual"}
      @wheel=${S===null?l:{handleEvent:r.onLiftedWheel,passive:!1}}
    >
      ${U?Fe?l:yr(t,Ke):p`<div class="stage-bar">
              ${Tr(t,Nt(i,s))}
              <div class="stage-tools">
                ${I?.kind==="screen"&&I.tabs.length>0?Ar(e,c,I):l}
                ${ee!==null&&F!==null?vo(t,ee,F):l}
                ${r.actions.groups.length>0?wr(t,r.actions):l}
                ${v.length>0?mr(t,_):l}
                ${v.length===0?l:a?go(t,r.onToggleDemo):fo(t,S!==null,r.onToggleMaximize)}
              </div>
            </div>`}
      ${s.kind==="step"&&s.step.situation!==void 0?uo(t,s.step.situation):l}
      ${U?l:Gn(t,_)}
      <div
        class="canvas"
        data-layout=${f}
        data-dpk-target=${Pt(s,c)}
        @click=${{handleEvent:r.canvasEvents.click,capture:!0}}
        @pointermove=${{handleEvent:r.canvasEvents.pointermove,capture:!0}}
        @pointerleave=${r.canvasEvents.pointerleave}
        @wheel=${{handleEvent:r.canvasEvents.wheel,passive:!1}}
        @scroll=${{handleEvent:r.canvasEvents.scroll,capture:!0}}
      >
        ${q!==null?ao(e,t,{...q,...j===void 0?{}:{preview:j},...Fe?{demo:Ke}:{},hasContent:j===void 0||r.hasPreviewContent(j.id),viewport:ce,window:Je??{kind:"fill"}}):f==="side-by-side"?p`<div class="panes">
                  ${h.map(R=>p`<div class="pane" data-viewport=${R.preview.viewport} data-pane=${R.kind}>
                        ${ho(e,c,R)}
                        ${Ge(e,t,R.preview,r.hasPreviewContent(R.preview.id))}
                      </div>`)}
                </div>`:v.map(R=>Ge(e,t,R,r.hasPreviewContent(R.id),Je))}
        ${v.length===0?p`<p class="dpk-label">${t.noPreviewMetadata}</p>`:l}
        ${qn(t,_)}
      </div>
      ${jn(_)} ${Bn(t,r.actions)}
      ${Ir(i,je.map(R=>R.id))}
    </div>
  `},po=D(hi),co=D(pi),lo={phone:D(li),tablet:D(ui),desktop:D(di)},Tr=(e,t)=>p`<div class="page-head">
    ${t.actor===void 0?l:p`<span class="page-actor" role="note" aria-label=${e.pageActor(t.actor)} title=${t.actor}>
            ${po()} <span class="page-actor-name">${t.actor}</span>
          </span>`}
    <h2 class="page-title">${t.title}</h2>
  </div>`,uo=(e,t)=>p`<aside class="situation">
    <span class="situation-label">${e.situation}</span>
    <p class="situation-text">${t}</p>
  </aside>`,Ar=(e,t,r)=>p`<div class="tabs" role="tablist">
    ${r.tabs.map(i=>{const n=i.id===r.preview.id;return p`<a
        class="tab"
        role="tab"
        data-current=${String(n)}
        aria-selected=${n?"true":"false"}
        href=${e.hashFor({preview:Ni(t,i.id)})}
        >${i.label??i.viewport}</a
      >`})}
  </div>`,ho=(e,t,r)=>r.kind==="material"?r.preview.label===void 0?l:p`<span class="pane-label" title=${r.preview.label}>${r.preview.label}</span>`:p`<div class="pane-head">
    <span class="pane-label" title=${r.screen.screen.title}>${r.screen.screen.title}</span>
    ${r.tabs.length>0?Ar(e,t,r):l}
  </div>`,vo=(e,t,r)=>{const i=Math.round(r.zoom*100);return p`<span class="device-pick" title=${e.deviceHint}>
    ${lo[t.deviceClass]()}
    <select
      class="device-select"
      aria-label=${e.device}
      @change=${n=>{n.currentTarget instanceof HTMLSelectElement&&r.onPick(n.currentTarget.value)}}
    >
      ${lr(t.deviceClass).map(n=>p`<option value=${n.id} ?selected=${n.id===t.id}>
            ${_n(e,n)}
          </option>`)}
    </select>
    ${i<100?p`<span class="device-zoom" title=${e.deviceZoom(i)}>${i}%</span>`:l}
  </span>`},go=(e,t)=>p`<button class="dpk-btn stage-demo" type="button" title=${e.demoHint} @click=${t}>
    ${co()} ${e.demo}
  </button>`,fo=(e,t,r)=>p`<button
    class="dpk-btn stage-maximize"
    type="button"
    aria-pressed=${t?"true":"false"}
    title=${e.maximizeHint}
    @click=${r}
  >
    ${t?p`${Fr()} ${e.restore}`:p`${Kr()} ${e.maximize}`}
  </button>`,Ge=(e,t,r,i,n=null)=>p`
    <figure
      class="frame"
      data-kind=${r.kind}
      data-viewport=${r.viewport}
      data-window=${n?.kind??l}
      ?data-empty=${!i}
      style=${$r(r.kind,r.viewport,n)}
    >
      ${r.kind==="browser"?p`<div class="chrome">
              <span class="dots"><i></i><i></i><i></i></span>
              <span class="url">${me(e.state,r)}</span>
            </div>`:r.kind==="mail"?bo(Hi(t,r)):l}
      <div class="viewport">
        ${r.kind==="native"?wo():l}
        <slot name=${`preview:${r.id}`}></slot>
        ${i?l:p`<div class="frame-placeholder">
                <span class="dpk-label">light dom preview</span>
                <code>&lt;div slot="preview" data-preview-id="${r.id}"&gt;</code>
              </div>`}
      </div>
    </figure>
  `,bo=e=>p`<header class="mail-head">
    ${e.subject===void 0?l:p`<h3 class="mail-subject">${e.subject}</h3>`}
    <div class="mail-envelope">
      ${e.initial===void 0?l:p`<span class="mail-avatar" aria-hidden="true">${e.initial}</span>`}
      <dl class="mail-meta">
        ${e.rows.map(t=>p`<div class="mail-row">
              <dt>${t.label}</dt>
              <dd>${t.value}</dd>
            </div>`)}
      </dl>
    </div>
  </header>`,wo=()=>p`<div class="status-bar">
    <span class="status-time">9:41</span>
    <span class="punch-hole" aria-hidden="true"></span>
    <svg class="status-wifi" viewBox="0 0 16 12" aria-hidden="true">
      <path d="M8 9.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      <path
        d="M4.7 7.4a4.8 4.8 0 0 1 6.6 0"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2.1 4.7a8.4 8.4 0 0 1 11.8 0"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </div>`,Ir=(e,t)=>{const i=[...H(e).flatMap(n=>n.screen.previews),...W(e).flatMap(n=>X(n.step))].filter(n=>!t.includes(n.id));return i.length===0?p`${l}`:p`<div class="parked" aria-hidden="true">
    ${i.map(n=>p`<slot name=${`preview:${n.id}`}></slot>`)}
  </div>`},mo=Xr`
  :host {
    --dpk-prototype-accent: var(--dpk-blue);
  }

  /* ---------------------------------------------------------------- sidebar */

  .nav {
    display: grid;
    gap: 14px;
    align-content: start;
    min-width: 188px;
  }

  .field {
    display: grid;
    gap: 5px;
  }

  /* Scenario or app: a segmented control at the top of the sidebar. */
  .view-switch {
    display: flex;
    gap: 3px;
    padding: 3px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-inset);
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
  }

  .view-option {
    flex: 1 1 0;
    padding: 6px 9px;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-sm);
    color: var(--dpk-ink-soft);
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease);
  }

  .view-option:hover {
    color: var(--dpk-ink);
  }

  .view-option[aria-current='page'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 600;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .view-option:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .app-hint {
    margin: -6px 0 0;
    font-size: 11.5px;
    line-height: 1.55;
    color: var(--dpk-ink-faint);
  }

  .app-group {
    display: grid;
    gap: 4px;
  }

  .app-group-heading {
    margin: 0;
    padding-left: 9px;
    font-size: 11px;
    font-weight: 600;
    color: var(--dpk-ink-soft);
  }

  .app-description {
    margin: 2px 0 0;
    font-size: 11.5px;
    line-height: 1.5;
    color: var(--dpk-ink-faint);
  }

  .step-screen {
    color: var(--dpk-ink);
    font-size: 12.5px;
    font-weight: 550;
  }

  .screen-description {
    font-size: 12.5px;
    line-height: 1.6;
    color: var(--dpk-ink);
  }

  .app-tree {
    display: grid;
    gap: 4px;
  }

  .app-origin {
    margin: 0;
    padding-left: 9px;
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    font-weight: 500;
    color: var(--dpk-ink-faint);
    overflow-wrap: anywhere;
  }

  .tree {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 2px;
  }

  /* A path below another one is indented under it, with a guide line. */
  .tree .tree {
    margin-left: 14px;
    padding-left: 6px;
    border-left: 1px solid var(--dpk-rule);
  }

  .tree-node {
    display: grid;
    gap: 2px;
  }

  .tree-row {
    position: relative;
    border-radius: var(--dpk-radius-sm);
    transition: background 140ms ease;
  }

  .tree-row:has(a):hover {
    background: var(--dpk-paper-inset);
  }

  .tree-row[data-current='true'] {
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--dpk-prototype-accent) 10%, var(--dpk-paper-raised)),
      color-mix(in srgb, var(--dpk-prototype-accent) 5%, var(--dpk-paper-raised))
    );
    box-shadow:
      inset 0 0 0 1px color-mix(in srgb, var(--dpk-prototype-accent) 22%, transparent),
      var(--dpk-shadow-xs);
  }

  .tree-link {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 2px 8px;
    padding: 6px 4px 6px 9px;
    text-decoration: none;
    color: var(--dpk-ink-soft);
    font-size: 12.5px;
  }

  .tree-path {
    font-family: var(--dpk-mono);
    font-size: 11.5px;
    color: var(--dpk-ink);
    overflow-wrap: anywhere;
  }

  span.tree-link .tree-path {
    color: var(--dpk-ink-faint);
  }

  .tree-title {
    min-width: 0;
    color: var(--dpk-ink-soft);
  }

  .tree-row[data-current='true'] .tree-path,
  .tree-row[data-current='true'] .tree-title {
    color: var(--dpk-ink);
    font-weight: 550;
  }

  .tree-link .step-note {
    align-self: center;
  }

  .tree-link:focus-visible {
    outline: none;
    border-radius: var(--dpk-radius-sm);
    box-shadow: var(--dpk-focus);
  }

  .steps.app-screens {
    max-height: none;
  }

  .steps-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--dpk-rule);
  }

  .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    /* A row is no wider than the list: a long step name ends in an ellipsis. */
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
    max-height: 38vh;
    overflow: auto;
  }

  .step-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 4px 0 9px;
    border-radius: var(--dpk-radius-sm);
    transition:
      background 140ms ease,
      box-shadow 140ms ease;
  }

  .step-row:hover {
    background: var(--dpk-paper-inset);
  }

  .step-row[data-current='true'] {
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--dpk-prototype-accent) 10%, var(--dpk-paper-raised)),
      color-mix(in srgb, var(--dpk-prototype-accent) 5%, var(--dpk-paper-raised))
    );
    box-shadow:
      inset 0 0 0 1px color-mix(in srgb, var(--dpk-prototype-accent) 22%, transparent),
      var(--dpk-shadow-xs);
  }

  .step-row[data-current='true']::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 3px;
    border-radius: var(--dpk-radius-xs);
    background: linear-gradient(180deg, var(--dpk-blue), var(--dpk-blue-strong));
    box-shadow: 0 0 8px color-mix(in srgb, var(--dpk-prototype-accent) 45%, transparent);
  }

  .step-link {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    gap: 7px;
    padding: 7px 0;
    text-decoration: none;
    color: var(--dpk-ink-soft);
    font-size: 12.5px;
    font-weight: 460;
  }

  .step-row[data-current='true'] .step-link {
    color: var(--dpk-ink);
    font-weight: 550;
  }

  .step-index {
    flex: 0 0 auto;
    min-width: 17px;
    padding: 1px 4px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-inset);
    font-family: var(--dpk-mono);
    font-size: 9.5px;
    font-variant-numeric: tabular-nums;
    text-align: center;
    color: var(--dpk-ink-faint);
    transition:
      background 140ms ease,
      color 140ms ease;
  }

  .step-row[data-current='true'] .step-index {
    background: linear-gradient(180deg, var(--dpk-blue), var(--dpk-blue-strong));
    color: #fff;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
  }

  .step-name {
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .step-note {
    margin-left: auto;
    min-width: 16px;
    padding: 1px 5px;
    border-radius: 999px;
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 9px;
    font-variant-numeric: tabular-nums;
    text-align: center;
  }

  .row-tools {
    display: flex;
    gap: 0;
    opacity: 0;
    transition: opacity 120ms ease;
  }

  .step-row:hover .row-tools,
  .step-row[data-current='true'] .row-tools {
    opacity: 1;
  }

  .detail {
    display: grid;
    /* As wide as the panel, not as a description's widest table or code line: those scroll. */
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    padding: 12px 12px 14px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
  }

  .detail-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }

  .detail-value {
    font-size: 12.5px;
    color: var(--dpk-ink-soft);
  }

  .nav-empty {
    font-size: 12px;
    line-height: 1.6;
    color: var(--dpk-ink-faint);
  }

  /* ------------------------------------------------------------------ stage */

  .stage {
    display: grid;
    /* One column no wider than the main area: a wide row of panes scrolls inside the canvas. */
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
    width: 100%;
    min-width: 0;
  }

  /* A tighter top than the shell's leaves the preview more of the main column. */
  .dpk-main-body {
    padding-top: 12px;
  }

  .stage-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px 16px;
    min-width: 0;
    flex-wrap: wrap;
  }

  /*
   * The page head and its tools stick to the top of the main column, so they
   * stay in reach while a tall preview scrolls under them; the situation and
   * the canvas scroll on. The bar spans the column edge to edge (cancelling
   * the body's padding) on a frosted ground the content passes beneath. Above
   * the UI-comment layer, below the memo, which opens over everything.
   */
  .stage:not(.is-maximized) > .stage-bar {
    position: sticky;
    top: 0;
    z-index: 5;
    margin: -12px -24px 0;
    padding: 10px 24px;
    border-bottom: 1px solid var(--dpk-rule);
    background: color-mix(in srgb, var(--dpk-paper-raised) 92%, transparent);
    backdrop-filter: saturate(1.6) blur(14px);
  }

  /* ------------------------------------------------------------- page head */

  .page-head {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    animation: dpk-page-head-in 260ms var(--dpk-ease) backwards;
  }

  @keyframes dpk-page-head-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
  }

  .page-actor {
    display: inline-flex;
    /* A long role name gives way to the title first, down to a recognizable stub. */
    flex: 0 1000 auto;
    min-width: 72px;
    align-items: center;
    gap: 6px;
    height: 26px;
    padding: 0 11px 0 8px;
    border-radius: 999px;
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--dpk-blue) 16%, var(--dpk-paper-raised)),
      color-mix(in srgb, var(--dpk-blue) 9%, var(--dpk-paper-raised))
    );
    box-shadow:
      var(--dpk-bevel),
      inset 0 0 0 1px color-mix(in srgb, var(--dpk-blue) 32%, transparent),
      var(--dpk-shadow-xs);
    color: var(--dpk-blue);
    font-size: 12px;
    font-weight: 650;
    letter-spacing: 0.01em;
    white-space: nowrap;
    max-width: 280px;
  }

  .page-actor-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .page-actor svg {
    flex: none;
    width: 13px;
    height: 13px;
    opacity: 0.9;
  }

  .page-title {
    margin: 0;
    min-width: 0;
    overflow: hidden;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: var(--dpk-ink);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Wraps on a phone rather than pushing the last tools off the screen. */
  .stage-tools {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    min-width: 0;
    margin-left: auto;
  }

  .stage-maximize svg,
  .stage-demo svg {
    width: 13px;
    height: 13px;
  }

  .stage-demo {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .actions-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .actions-toggle svg {
    width: 13px;
    height: 13px;
  }

  .actions-toggle svg:last-child {
    width: 12px;
    height: 12px;
    margin-left: -2px;
    opacity: 0.7;
  }

  .actions-toggle[aria-expanded='true'] {
    opacity: 1;
    color: var(--dpk-ink);
  }

  /* A menu of what each screen on stage can do in one go. */
  .actions-menu {
    gap: 8px;
    width: max-content;
    min-width: 220px;
    max-width: min(320px, calc(100vw - 24px));
    padding: 6px;
  }

  .actions-group {
    display: grid;
    gap: 2px;
  }

  .actions-group + .actions-group {
    padding-top: 6px;
    border-top: 1px solid var(--dpk-rule);
  }

  .actions-group-title {
    padding: 4px 10px 2px;
    font-size: 11px;
    font-weight: 600;
    color: var(--dpk-ink-faint);
  }

  .actions-item {
    display: grid;
    gap: 2px;
    width: 100%;
    padding: 8px 10px;
    border: 0;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    color: var(--dpk-ink);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .actions-item:hover,
  .actions-item:focus-visible {
    background: var(--dpk-accent-soft);
  }

  .actions-item:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .actions-label {
    font-weight: 600;
  }

  .actions-description {
    font-size: 11.5px;
    line-height: 1.45;
    color: var(--dpk-ink-soft);
  }

  /* The app view's device: a pill like the rendition tabs, with the zoom it is drawn at. */
  .device-pick {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 6px 0 10px;
    box-sizing: border-box;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 2px rgba(20, 28, 44, 0.04);
    color: var(--dpk-ink-soft);
  }

  .device-pick:focus-within {
    box-shadow: var(--dpk-focus);
  }

  .device-pick svg {
    flex: none;
    width: 14px;
    height: 14px;
  }

  .device-select {
    min-width: 0;
    padding: 0 18px 0 0;
    border: 0;
    outline: none;
    background: transparent
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'><path d='M3 4.5 6 7.5 9 4.5' fill='none' stroke='%23878e9e' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>")
      no-repeat right 2px center;
    appearance: none;
    /* As wide as the device shown, not the longest name in the list. */
    field-sizing: content;
    color: var(--dpk-ink);
    font: 600 12px/1 var(--dpk-body);
    cursor: pointer;
  }

  .device-zoom {
    padding: 3px 7px;
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    font: 600 10.5px/1 var(--dpk-mono);
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-soft);
  }

  .tabs {
    display: inline-flex;
    gap: 2px;
    padding: 3px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 2px rgba(20, 28, 44, 0.04);
  }

  .tab {
    padding: 4px 14px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    color: var(--dpk-ink-soft);
    white-space: nowrap;
    transition:
      background 120ms ease,
      color 120ms ease;
  }

  .tab:hover {
    color: var(--dpk-ink);
    background: var(--dpk-paper-raised);
  }

  .tab[data-current='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 600;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .stage-empty {
    max-width: 62ch;
    padding: 16px 18px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-sunken);
    font-size: 13px;
    line-height: 1.7;
    color: var(--dpk-ink-soft);
  }

  /* A story that has no steps yet: its heading, what it is for, and why no frame. */
  .stage-story {
    display: grid;
    gap: 12px;
    justify-items: start;
  }

  .story-description {
    max-width: 62ch;
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--dpk-ink);
  }

  /* -------------------------------------------------------------- situation */

  /*
   * What is going on around the previews: a stage direction, read before them.
   * The band spans the stage at any width (a maximized stage too); only the
   * text keeps a readable line length.
   */
  .situation {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: -4px 0 -2px;
    padding: 8px 14px 8px 10px;
    border: 1px solid color-mix(in srgb, var(--dpk-prototype-accent) 16%, var(--dpk-rule));
    border-radius: var(--dpk-radius);
    background: color-mix(in srgb, var(--dpk-prototype-accent) 5%, var(--dpk-paper-raised));
    box-shadow: var(--dpk-bevel);
  }

  .situation-label {
    flex: none;
    padding: 2px 8px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--dpk-prototype-accent) 13%, transparent);
    font-size: 10.5px;
    font-weight: 650;
    letter-spacing: 0.06em;
    color: var(--dpk-prototype-accent);
  }

  .situation-text {
    max-width: 90ch;
    margin: 0;
    min-width: 0;
    font-size: 13px;
    line-height: 1.65;
    color: var(--dpk-ink);
    white-space: pre-line;
    overflow-wrap: anywhere;
  }

  /* ----------------------------------------------------------------- canvas */

  /*
   * The work surface the frame sits on: a quiet dot lattice that reads as a
   * canvas rather than empty page background, giving the frame somewhere to
   * cast its shadow.
   */
  .canvas {
    display: flex;
    justify-content: center;
    padding: 30px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-xl);
    background: var(--dpk-dots), var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 3px var(--dpk-shade-1);
  }

  /* ---------------------------------------------------------- comment on UI */

  .ui-comment-toggle svg,
  .ui-comment-hint svg {
    width: 14px;
    height: 14px;
  }

  .ui-comment-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .ui-comment-hint {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: -4px 0 -2px;
    padding: 7px 12px;
    border-radius: var(--dpk-radius);
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent-strong, var(--dpk-accent));
    font-size: 12.5px;
    font-weight: 550;
  }

  .canvas {
    position: relative;
  }

  .stage:not([data-ui-comment='off']) .canvas ::slotted(*) {
    cursor: crosshair;
  }

  /* Sized to the canvas's scroll area by the element; the boxes and pins show through. */
  .ui-catcher {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    cursor: crosshair;
  }

  /* Positioned against the canvas by the element, which measures the author's markup. */
  .ui-layer {
    display: contents;
  }

  .ui-box {
    position: absolute;
    z-index: 2;
    box-sizing: border-box;
    border-radius: 4px;
    pointer-events: none;
  }

  .ui-hover {
    outline: 2px solid var(--dpk-accent);
    outline-offset: 1px;
    background: color-mix(in srgb, var(--dpk-accent) 8%, transparent);
  }

  .ui-picked {
    outline: 2px solid var(--dpk-accent);
    outline-offset: 2px;
    background: color-mix(in srgb, var(--dpk-accent) 14%, transparent);
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--dpk-accent) 18%, transparent);
  }

  .ui-pin {
    position: absolute;
    z-index: 3;
    display: grid;
    place-items: center;
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    border: 2px solid var(--dpk-paper-raised);
    border-radius: 999px 999px 999px 2px;
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
    box-shadow: var(--dpk-shadow-sm);
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 700;
    pointer-events: none;
  }

  .ui-box[hidden],
  .ui-pin[hidden] {
    display: none;
  }

  /*
   * Side by side: what the user sees together, in one row. A fixed viewport
   * keeps its width as long as the row allows it, a fluid one takes the rest;
   * a row wider than the canvas scrolls sideways instead of squeezing a device.
   */
  .panes {
    display: flex;
    align-items: flex-start;
    justify-content: safe center;
    gap: 28px;
    width: 100%;
    min-width: 0;
    overflow-x: auto;
    padding-bottom: 4px;
  }

  /*
   * A row wider than the stage fades out at the edge it scrolls toward, so the
   * panes past it read as a scroll away rather than cut off. The scroll timeline
   * is inactive while the row fits, which leaves it unmasked.
   */
  @supports (animation-timeline: scroll()) {
    .panes {
      animation: panes-edge linear both;
      animation-timeline: scroll(self inline);
    }

    @keyframes panes-edge {
      0% {
        mask-image: linear-gradient(90deg, #000 calc(100% - 40px), transparent);
      }
      2%,
      98% {
        mask-image: linear-gradient(90deg, transparent, #000 40px, #000 calc(100% - 40px), transparent);
      }
      100% {
        mask-image: linear-gradient(90deg, transparent, #000 40px);
      }
    }
  }

  /* A device shrinks at most to a width its layout still reads at, then the row scrolls. */
  .pane {
    display: grid;
    /* The pane's width is the device's: a long label never widens it. */
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
    flex: 0 1 var(--pane-width);
    min-width: min(var(--pane-width), 720px);
  }

  .pane[data-viewport='mobile'] {
    --pane-width: 390px;
  }

  .pane[data-viewport='tablet'] {
    --pane-width: 834px;
  }

  .pane[data-viewport='desktop'] {
    --pane-width: 1180px;
  }

  .pane[data-viewport='fluid'] {
    flex: 1 1 0;
    min-width: 240px;
  }

  .pane .frame {
    width: 100%;
  }

  .pane-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .pane-head .tabs {
    padding: 2px;
  }

  .pane-head .tab {
    padding: 3px 11px;
    font-size: 11.5px;
  }

  /* One line over the pane; hovering names the whole label. */
  .pane-label {
    justify-self: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 9px;
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    font-size: 11.5px;
    font-weight: 600;
    color: var(--dpk-ink-soft);
  }

  /*
   * Maximized: the stage covers the tab — the page head, the tabs and the canvas
   * alone. It is also a manual popover in the top layer, so the UA popover box
   * (fit-content, margin, border, padding, colors) is reset here. The canvas
   * scrolls instead of the page, and a browser preview is at least as tall as
   * the tab allows; a phone keeps its device shape. Whatever sits above the
   * canvas (the situation, the comment-on-UI hint) keeps its own height, and the
   * canvas takes the rest.
   */
  .stage.is-maximized {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: 16px 20px 20px;
    border: 0;
    color: var(--dpk-ink);
    background: var(--dpk-paper);
    overflow: hidden;
  }

  .stage.is-maximized > * {
    flex: none;
  }

  .canvas:has(> .frame[data-window='device']) {
    align-items: flex-start;
    /* A device wider than the stage is drawn smaller to fit it, so it never widens the page. */
    min-width: 0;
    contain: inline-size;
  }

  .stage.is-maximized > .canvas {
    flex: 1 1 0;
    min-height: 0;
    align-items: flex-start;
    overflow: auto;
    overscroll-behavior: contain;
  }

  .stage.is-maximized .frame:not([data-kind='native'], [data-kind='plain']) {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .stage.is-maximized .frame:not([data-kind='native'], [data-kind='plain']) .viewport {
    flex: 1 0 auto;
  }

  /*
   * Demo: the app view's browser alone across the tab, as if the reader were
   * using the app — no title, no tools, no canvas around it. The browser fills
   * the tab and its page scrolls inside the viewport; a phone stays phone wide.
   */
  .stage.is-demo {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--dpk-ink);
    background: var(--dpk-paper-sunken);
    overflow: hidden;
  }

  .stage.is-demo > .canvas {
    flex: 1 1 0;
    min-height: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: var(--dpk-dots), var(--dpk-paper-sunken);
    box-shadow: none;
    overflow: auto;
    overscroll-behavior: contain;
  }

  .stage.is-demo .frame[data-window='fill'] {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  /* A device keeps its size, in the middle of the tab (the element leaves 24px around it). */
  .stage.is-demo > .canvas > .frame[data-window='device'] {
    margin: auto;
  }

  .stage.is-demo > .canvas > .frame:not([data-window]) {
    margin: 24px auto;
  }

  /*
   * The demo's controls (commenting on the UI, the way out). Over a phone or a
   * frame outside the browser, they float at the top right.
   */
  .demo-controls {
    position: absolute;
    top: 12px;
    right: 16px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .demo-control {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 30px;
    padding: 0 10px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 999px;
    background: color-mix(in srgb, var(--dpk-paper-raised) 82%, transparent);
    backdrop-filter: blur(10px);
    box-shadow: var(--dpk-shadow);
    color: var(--dpk-ink-soft);
    font: 600 12px/1 var(--dpk-body);
    cursor: pointer;
    opacity: 0.55;
    transition:
      opacity 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease);
  }

  .demo-exit {
    padding-right: 8px;
  }

  .demo-control:hover,
  .demo-control:focus-visible {
    opacity: 1;
    color: var(--dpk-ink);
  }

  .demo-control:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus), var(--dpk-shadow);
  }

  /* Commenting stays in sight: a click on the app now picks an element instead of using it. */
  .demo-control[aria-pressed='true'] {
    opacity: 1;
    border-color: var(--dpk-accent-strong);
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
  }

  .demo-control svg {
    width: 12px;
    height: 12px;
  }

  /* A desktop browser has them at the free end of the tab strip, like window controls. */
  .browser-tabs .demo-controls {
    position: static;
    flex: none;
    align-self: center;
    margin: 0 0 3px auto;
  }

  .browser-tabs .demo-control {
    height: 26px;
  }

  .browser-tabs .demo-control:not([aria-pressed='true']) {
    opacity: 0.85;
  }

  .demo-exit kbd {
    padding: 2px 5px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-sunken);
    font: 600 10px/1 var(--dpk-mono);
  }

  /* ------------------------------------------------------------------ frame */

  .frame {
    width: min(var(--frame-width), 100%);
    max-width: 100%;
    margin: 0;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
    overflow: hidden;
    /* However high the mock stacks its own layers, they stay under what the stage draws over the frame. */
    isolation: isolate;
    transition: box-shadow 200ms var(--dpk-ease);
  }

  .chrome {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--dpk-paper-raised) 88%, transparent),
      color-mix(in srgb, var(--dpk-paper-inset) 88%, transparent)
    );
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--dpk-rule);
    box-shadow: inset 0 1px 0 var(--dpk-highlight);
  }

  .dots {
    display: inline-flex;
    gap: 5px;
  }

  .dots i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--dpk-rule-strong);
  }

  .dots i:nth-child(1) {
    background: #ff5f57;
  }

  .dots i:nth-child(2) {
    background: #febc2e;
  }

  .dots i:nth-child(3) {
    background: #28c840;
  }

  .chrome .url {
    flex: 1;
    min-width: 0;
    padding: 4px 14px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    box-shadow: inset 0 1px 2px rgba(20, 28, 44, 0.04);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    color: var(--dpk-ink-faint);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /*
   * Native previews are recognised by their device shape: a slim bezel, a status
   * bar with a punch-hole camera, and a home indicator. No address bar.
   */
  .frame[data-kind='native'] {
    padding: 10px;
    border-color: #22262e;
    border-radius: 28px;
    background: linear-gradient(160deg, #2e3440, #1a1d24);
    box-shadow:
      var(--dpk-shadow-lg),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .frame[data-kind='native'] .viewport {
    overflow: hidden;
    border-radius: 18px;
  }

  /* A phone is portrait: derive the screen height from its width (~1:2.05)
     instead of reusing the browser preview heights. */
  .frame[data-kind='native'][data-viewport='mobile'] .viewport {
    min-height: calc((var(--frame-width, 390px) - 16px) * 2.05);
  }

  /*
   * A mail preview reads as one opened message in a mail client: the subject,
   * the sender's avatar and the envelope rows, then the body (the light DOM).
   */
  .mail-head {
    display: grid;
    gap: 12px;
    padding: 18px 22px 14px;
    border-bottom: 1px solid #e3e6ec;
    background: #fff;
    color: #1f2430;
    color-scheme: light;
  }

  .mail-subject {
    margin: 0;
    font-size: 18px;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }

  .mail-envelope {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    min-width: 0;
  }

  .mail-avatar {
    display: inline-grid;
    flex: none;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(160deg, #6b8af5, #3f5fd8);
    color: #fff;
    font-size: 14px;
    font-weight: 650;
  }

  .mail-meta {
    display: grid;
    gap: 2px;
    min-width: 0;
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
  }

  .mail-row {
    display: flex;
    gap: 8px;
    min-width: 0;
  }

  .mail-row dt {
    flex: none;
    min-width: 3.5em;
    color: #7a8294;
  }

  .mail-row dd {
    min-width: 0;
    margin: 0;
    overflow-wrap: anywhere;
    color: #1f2430;
  }

  .mail-row:first-child dd {
    font-weight: 600;
  }

  /*
   * A plain preview is not a screen: no chrome, no bezel, no frame of its own.
   * The light DOM draws the whole object (a memo, a FAX, a paper form) and the
   * canvas is its desk, so it is as tall as its content.
   */
  .frame[data-kind='plain'] {
    border: none;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    overflow: visible;
  }

  .frame[data-kind='plain'] .viewport {
    min-height: 0;
    background: transparent;
  }

  .frame[data-kind='plain'][data-empty] .viewport {
    min-height: 180px;
  }

  .status-bar {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 0 12px;
    background: #0c0e13;
    color: #e9edf4;
    font-size: 11.5px;
    font-weight: 550;
    font-variant-numeric: tabular-nums;
  }

  .status-time {
    letter-spacing: 0.02em;
  }

  .punch-hole {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #04060a;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.07);
  }

  .status-wifi {
    width: 15px;
    height: 12px;
    fill: currentColor;
    color: #e9edf4;
  }

  /* Home indicator. */
  .frame[data-kind='native'] .viewport::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 88px;
    height: 4px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: rgba(138, 146, 160, 0.55);
  }

  /*
   * The preview is never scrolled on its own: it shows everything it contains and
   * the page scrolls as a whole. The flex column keeps a short mock filling
   * the frame's minimum height without pinning a maximum.
   */
  .viewport {
    position: relative;
    contain: layout;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: var(--frame-min-height, 480px);
    /* A preview is the product's screen, not the kit's chrome: it stays light in a dark theme. */
    color-scheme: light;
    background: #fff;
    /* …and so does its ink: the kit's dark-theme text color would be invisible on it. */
    color: #1f2430;
  }

  /*
   * The author's wrapper becomes the frame's filling layer: a one-cell grid makes
   * its height definite, so a mock that asks for height:100% fills the frame
   * instead of collapsing to its content.
   */
  /*
   * The author's wrapper is a stretch row: a mock fills a short frame and grows
   * the frame when its own content is taller. Stretching (rather than a
   * percentage height) is what makes the fill reliable.
   */
  /* Only the viewport carries the minimum height; the wrapper grows to fill it. */
  .viewport ::slotted(*) {
    display: grid;
    flex: 1 0 auto;
    min-width: 0;
  }

  /*
   * The app view is a simulation: a screen runs in a window of a fixed size (a
   * device's screen, or the whole demo) and what does not fit scrolls inside
   * the author's wrapper, the way the real page scrolls under the device's own
   * chrome — the status bar, the address bar and a phone browser's bottom bar
   * stay where they are. The viewport contains layout, so a mock's
   * fixed position element (a tab bar, a modal) stays on the device screen.
   */
  .frame[data-window] {
    display: flex;
    flex: none;
    flex-direction: column;
    box-sizing: border-box;
    max-width: none;
  }

  .frame[data-window='device'] {
    width: var(--device-width);
    height: var(--device-height);
  }

  .frame[data-kind][data-window] .viewport {
    flex: 1 1 0;
    min-height: 0;
    overflow: hidden;
  }

  .frame[data-window] .viewport ::slotted(*) {
    flex: 1 1 0;
    min-height: 0;
    overflow: auto;
    overscroll-behavior: contain;
  }

  .frame-placeholder {
    position: absolute;
    inset: 12px;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 8px;
    padding: 12px;
    text-align: center;
    color: var(--dpk-ink-faint);
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius);
    background: var(--dpk-dots), var(--dpk-paper-sunken);
  }

  .frame-placeholder code {
    padding: 3px 7px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-raised);
    font-family: var(--dpk-mono);
    font-size: 10px;
  }

  /* ---------------------------------------------------------------- browser */

  /*
   * The app view's browser: a tab strip on a darker band, the active tab merged
   * into the toolbar below it, round navigation buttons, a pill address bar and
   * the profile of the user the window belongs to.
   */
  .frame.browser {
    display: flex;
    flex-direction: column;
    --browser-band: var(--dpk-paper-inset);
    --browser-bar: var(--dpk-paper-raised);
  }

  .browser-tabs {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    padding: 7px 10px 0;
    background: var(--browser-band);
  }

  .browser-tab-list {
    display: flex;
    flex: 0 1 auto;
    align-items: flex-end;
    gap: 2px;
    min-width: 0;
  }

  .browser-tab {
    position: relative;
    display: flex;
    flex: 0 1 220px;
    align-items: center;
    gap: 8px;
    min-width: 64px;
    height: 32px;
    padding: 0 8px 0 12px;
    border-radius: 9px 9px 0 0;
    color: var(--dpk-ink-soft);
    font-size: 12px;
    cursor: default;
    user-select: none;
    transition: background 140ms var(--dpk-ease);
  }

  .browser-tab:not([aria-selected='true']):hover {
    background: color-mix(in srgb, var(--browser-bar) 55%, transparent);
  }

  /* A thin rule between two inactive tabs, as in Chrome. */
  .browser-tab:not([aria-selected='true']) + .browser-tab:not([aria-selected='true'])::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 9px;
    bottom: 9px;
    width: 1px;
    background: var(--dpk-rule-strong);
  }

  .browser-tab[aria-selected='true'] {
    background: var(--browser-bar);
    color: var(--dpk-ink);
    box-shadow: 0 -1px 0 var(--dpk-rule);
  }

  .browser-tab:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .browser-favicon {
    display: inline-flex;
    flex: none;
    color: var(--dpk-ink-faint);
  }

  .browser-favicon svg {
    width: 14px;
    height: 14px;
  }

  .browser-tab-title {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .browser-tab-close,
  .browser-new-tab,
  .browser-nav {
    display: inline-grid;
    flex: none;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: var(--dpk-ink-soft);
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease);
  }

  .browser-tab-close {
    width: 18px;
    height: 18px;
  }

  .browser-tab-close svg {
    width: 10px;
    height: 10px;
  }

  .browser-new-tab {
    width: 26px;
    height: 26px;
    margin-bottom: 3px;
  }

  .browser-new-tab svg {
    width: 14px;
    height: 14px;
  }

  .browser-tab-close:hover,
  .browser-new-tab:hover,
  .browser-nav:not(:disabled):hover {
    background: color-mix(in srgb, var(--dpk-ink) 9%, transparent);
    color: var(--dpk-ink);
  }

  .browser-tab-close:focus-visible,
  .browser-new-tab:focus-visible,
  .browser-nav:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .browser-toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 6px 10px;
    background: var(--browser-bar);
    border-bottom: 1px solid var(--dpk-rule);
  }

  .browser-nav {
    width: 30px;
    height: 30px;
  }

  .browser-nav svg {
    width: 15px;
    height: 15px;
  }

  .browser-nav:disabled {
    color: var(--dpk-ink-faint);
    opacity: 0.5;
    cursor: default;
  }

  .browser-address-form {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 0;
    margin: 0 4px;
  }

  .browser-lock {
    position: absolute;
    left: 12px;
    display: inline-flex;
    color: var(--dpk-ink-faint);
    pointer-events: none;
  }

  .browser-lock svg {
    width: 13px;
    height: 13px;
  }

  .browser-address {
    width: 100%;
    min-width: 0;
    height: 30px;
    padding: 0 14px 0 33px;
    border: 1px solid transparent;
    border-radius: 999px;
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink);
    font: 13px/1 var(--dpk-body);
    text-overflow: ellipsis;
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }

  .browser-address:hover {
    background: var(--dpk-paper-inset);
  }

  .browser-address:focus {
    outline: none;
    border-color: var(--dpk-blue);
    background: var(--browser-bar);
    box-shadow: 0 0 0 1px var(--dpk-blue);
  }

  .browser-profile {
    display: inline-flex;
    flex: none;
    align-items: center;
    gap: 6px;
    max-width: 160px;
    height: 28px;
    padding: 0 10px 0 3px;
    border-radius: 999px;
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue-strong, var(--dpk-blue));
    font-size: 12px;
    font-weight: 600;
  }

  .browser-avatar {
    display: inline-grid;
    flex: none;
    place-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--dpk-blue);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
  }

  .browser-profile-name {
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /* The bar a reload draws under the toolbar while the page comes back. */
  .browser-progress {
    position: relative;
    height: 2px;
    margin-top: -2px;
    overflow: hidden;
    pointer-events: none;
  }

  .browser[data-loading] .browser-progress::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--dpk-blue);
    transform-origin: left;
    animation: dpk-browser-load 360ms var(--dpk-ease) forwards;
  }

  @keyframes dpk-browser-load {
    from {
      transform: scaleX(0.08);
    }
    to {
      transform: scaleX(1);
    }
  }

  .browser .viewport {
    transition: opacity 160ms var(--dpk-ease);
  }

  .browser[data-loading] .viewport {
    opacity: 0.45;
  }

  /* The new tab page: the pages of the app the reader is in, as tiles. */
  .browser-newtab {
    display: grid;
    flex: 1;
    align-content: start;
    justify-items: center;
    gap: 18px;
    padding: 72px 24px 40px;
    background: #f8f9fb;
    color: #3c4250;
  }

  .browser-newtab-label {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #6b7282;
  }

  .browser-shortcuts {
    display: grid;
    grid-template-columns: repeat(auto-fill, 112px);
    justify-content: center;
    gap: 8px;
    width: min(100%, 600px);
  }

  .browser-shortcut {
    display: grid;
    justify-items: center;
    gap: 6px;
    padding: 14px 8px 12px;
    border-radius: 12px;
    color: inherit;
    text-align: center;
    text-decoration: none;
    transition: background 140ms var(--dpk-ease);
  }

  .browser-shortcut:hover,
  .browser-shortcut:focus-visible {
    outline: none;
    background: #eceef2;
  }

  .browser-shortcut-icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #e3e7ee;
    color: #3563d9;
    font-size: 17px;
    font-weight: 700;
  }

  .browser-shortcut-title,
  .browser-shortcut-url {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .browser-shortcut-title {
    font-size: 12.5px;
    font-weight: 600;
  }

  .browser-shortcut-url {
    font-size: 10.5px;
    color: #8a91a0;
  }

  .browser-unreachable {
    display: grid;
    flex: 1;
    align-content: start;
    gap: 10px;
    padding: 88px max(24px, 12%) 40px;
    background: #fff;
    color: #3c4250;
  }

  .browser-unreachable::before {
    content: '';
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
    border-radius: 10px;
    background:
      linear-gradient(135deg, transparent 46%, #9aa1ae 46% 54%, transparent 54%),
      linear-gradient(45deg, transparent 46%, #9aa1ae 46% 54%, transparent 54%), #eceef2;
  }

  .browser-unreachable h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1f2430;
  }

  .browser-unreachable p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.6;
  }

  .browser-unreachable code {
    justify-self: start;
    max-width: 100%;
    overflow-wrap: anywhere;
    font-family: var(--dpk-mono);
    font-size: 12px;
    color: #6b7282;
  }

  /*
   * A phone browser: the address and the avatar on top, the controls and the
   * tab count in a bar under the page, the tabs as cards over the page.
   */
  .browser[data-viewport='mobile'] .browser-toolbar {
    gap: 8px;
    padding: 8px 10px;
  }

  .browser[data-viewport='mobile'] .browser-profile {
    padding-right: 3px;
  }

  .browser[data-viewport='mobile'] .browser-shortcuts {
    grid-template-columns: repeat(auto-fill, 96px);
  }

  .browser-bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 6px 8px 10px;
    border-top: 1px solid var(--dpk-rule);
    background: var(--browser-bar);
  }

  .browser-bottom .browser-new-tab {
    width: 30px;
    height: 30px;
    margin: 0;
  }

  .browser-tab-count-box {
    display: inline-grid;
    place-items: center;
    min-width: 17px;
    height: 17px;
    padding: 0 3px;
    border: 1.5px solid currentColor;
    border-radius: 4px;
    font: 700 10px/1 var(--dpk-body);
  }

  .browser-tab-count[aria-expanded='true'] {
    background: color-mix(in srgb, var(--dpk-ink) 9%, transparent);
    color: var(--dpk-ink);
  }

  .browser-switcher {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-content: start;
    gap: 10px;
    padding: 12px;
    color-scheme: normal;
    background: var(--browser-band);
    overflow: auto;
  }

  .browser-card {
    position: relative;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 12px;
    background: var(--browser-bar);
    box-shadow: var(--dpk-shadow);
  }

  .browser-card[aria-current='true'] {
    border-color: var(--dpk-blue);
    box-shadow: 0 0 0 1px var(--dpk-blue);
  }

  .browser-card-open {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 4px 6px;
    width: 100%;
    min-height: 84px;
    padding: 10px 30px 10px 10px;
    border: 0;
    border-radius: inherit;
    background: transparent;
    color: var(--dpk-ink);
    font: 600 12px/1.3 var(--dpk-body);
    text-align: left;
    align-content: start;
    cursor: pointer;
  }

  .browser-card-open:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .browser-card-title,
  .browser-card-url {
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .browser-card-url {
    grid-column: 1 / -1;
    color: var(--dpk-ink-faint);
    font: 400 11px/1.3 var(--dpk-mono);
  }

  .browser-card .browser-tab-close {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .parked {
    display: none;
  }
`,yo=`
  /*
   * The wrapper is a stretch grid (see \`.viewport ::slotted(*)\`): one child
   * fills the frame, but several would share the extra height as gaps between
   * them, so they stack from the top instead (a \`<style>\` or \`<script>\` beside
   * the one child draws nothing and does not count). A shadow tree cannot see a
   * slotted element's children, hence the document rule; \`:where\` lets the
   * author's own \`align-content\` win.
   */
  :where(
      dpk-template-prototype
        > [data-preview-id]:has(> :not(style, script, template, link) ~ :not(style, script, template, link))
    ) {
    align-content: start;
  }

  dpk-template-prototype > [data-preview-id]:has(dialog[${ke}][open]) {
    position: relative;
  }

  dpk-template-prototype > [data-preview-id]:has(dialog[${ke}][open])::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: color-mix(in srgb, var(--dpk-ink, #111827) 38%, transparent);
  }

  dpk-template-prototype > [data-preview-id] dialog[${ke}][open] {
    position: absolute;
    inset: 0;
    z-index: 2;
    max-width: calc(100% - 32px);
    max-height: calc(100% - 32px);
    margin: auto;
  }
`,qe={kind:"off"},ko=(e,t)=>{switch(t.kind){case"toggle":return e.kind==="off"?{kind:"picking"}:qe;case"exit":return qe;case"pick":return e.kind==="off"?e:{kind:"composing",target:t.target,body:e.kind==="composing"?e.body:""};case"input":return e.kind==="composing"?{...e,body:t.body}:e;case"dismiss":case"submitted":return e.kind==="off"?e:{kind:"picking"};default:return e}},xo={width:300,height:300},$o=360,Eo={width:280,height:360},Pr="dpk-template-prototype-document-styles",So=24,To=()=>{if(document.getElementById(Pr)!==null)return;const e=Object.assign(document.createElement("style"),{id:Pr,textContent:yo});document.head.append(e)},Ao=(e,t,r)=>{const i=getComputedStyle(e),n=/auto|scroll/.test(i.overflowX)&&e.scrollWidth>e.clientWidth,o=/auto|scroll/.test(i.overflowY)&&e.scrollHeight>e.clientHeight,s=t<0?e.scrollLeft>0:t>0&&e.scrollLeft+e.clientWidth<e.scrollWidth-1,a=r<0?e.scrollTop>0:r>0&&e.scrollTop+e.clientHeight<e.scrollHeight-1;return n&&s||o&&a},Io=e=>{if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.getRootNode();return t instanceof ShadowRoot?t.host:null};class _r extends ot{static{this.styles=[ot.styles,Zr,Jr,mo]}#e=qe;#v=!1;#s=null;#n=[];#S=new Qr(this);#T=!1;#t=null;#r=null;#A=!1;#c=!1;#g=!1;#i=null;#f=null;#b={};#w=1;#l=typeof ResizeObserver>"u"?null:new ResizeObserver(()=>this.#O());#a=null;#d=null;#u=null;#m=!1;constructor(){super(),new oi(this,{open:()=>this.#u!==null,closesOn:t=>!t.some(r=>r instanceof Element&&this.#U(r)),ownsEscape:()=>!0,dismiss:()=>this.#y(!0)})}definitionFor(t){return Bt(t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.#R),window.addEventListener("resize",this.#x),this.addEventListener("toggle",this.#M,!0),this.addEventListener("click",this.#h,!0),this.addEventListener("auxclick",this.#h,!0),To()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.#R),window.removeEventListener("resize",this.#x),this.removeEventListener("toggle",this.#M,!0),this.removeEventListener("click",this.#h,!0),this.removeEventListener("auxclick",this.#h,!0),this.#l?.disconnect(),this.#a=null,this.#N()}renderRegions(t){const r=fe(this.locale),i=Z(t.state,t.navigation),n=se(t.navigation)==="app";this.#t!==null&&this.#t.mode==="demo"!==n&&this.#L();const o=n?this.#re(t,r):null;return this.#A=o!==null,this.#n=i!==void 0&&i.kind!=="story"&&(o===null||o.view.entry?.kind==="page")?Ue(t.state,i,t.navigation).shown.map(s=>s.id):[],this.#i!==null&&this.#i.page!==this.#n.join(" ")&&this.#N(),{sidebar:ur(t,r),main:Sr(t,r,{hasPreviewContent:s=>this.#de(s),lift:this.#t,onToggleMaximize:()=>this.#E(this.#t===null?"maximized":null),onToggleDemo:()=>this.#E(this.#t===null?"demo":null),onLiftedWheel:this.#te,browser:o===null?null:{...o,loading:this.#i!==null},devices:n?{choice:this.#b,zoom:this.#w,onPick:s=>{this.#b=Pn(this.#b,s),this.requestUpdate()}}:null,uiComment:this.#W(t),actions:this.#z(t),canvasEvents:{click:this.#q,pointermove:this.#j,pointerleave:this.#F,wheel:this.#K,scroll:this.#x}})}}updated(){super.updated(),this.#Q(),this.#Z(),this.#X(),this.#O();const t=this.#e;if(t.kind==="composing"&&!this.#n.includes(t.target.previewId)){this.#p({kind:"dismiss"});return}this.#ee(),this.#Y(),this.#g&&(this.#g=!1,this.renderRoot.querySelector('.browser-tab[aria-selected="true"]')?.focus()),this.#D();const r=t.kind==="composing"&&!this.#v;if(this.#v=t.kind==="composing",t.kind!=="composing"||this.#s===null)return;const i=this.renderRoot.querySelector(".comment-pop");i&&(this.#S.open(i,this.#s,xo,{placement:"right-start"}),r&&i.querySelector("textarea")?.focus({preventScroll:!0}))}#z(t){const r=Mt(t.state,this.#n),i=r.map(o=>o.screen.id).join(" "),n=r.length>0&&this.#d===i;return{groups:r,open:n,toggle:()=>n?this.#y(!1):this.#V(i),run:(o,s)=>this.#H(o,s)}}#V(t){this.#d=t,this.requestUpdate()}#y(t){this.#d!==null&&(this.#d=null,this.#m=t,this.requestUpdate())}#U(t){return t.classList.contains("actions-menu")||t.getAttribute("data-role")==="actions"}#Y(){const t=this.renderRoot.querySelector(".actions-menu"),r=this.renderRoot.querySelector('[data-role="actions"]');if(t===null){this.#u=null,this.#m&&r?.focus({preventScroll:!0}),this.#m=!1;return}t===this.#u||r===null||(this.#u=t,this.#S.open(t,r,Eo),t.querySelector('[role="menuitem"]')?.focus({preventScroll:!0}))}#H(t,r){this.#y(!0);const i=Mt(this.derivation.state,this.#n).find(d=>d.screen.id===t),n=i?.actions.find(d=>d.id===r);if(i===void 0||n===void 0)return;const s=this.#k().filter(d=>i.previewIds.includes(d.getAttribute("data-preview-id")??"")).map(d=>{const c=[...nn(d,n.fill??{}),...on(d,n.click??[])];return d.dispatchEvent(new CustomEvent("dpk-action",{bubbles:!0,detail:{id:n.id,screen:i.screen.id}})),c}),a=(s[0]??[]).filter(d=>s.every(c=>c.includes(d)));a.length!==0&&console.warn(`[dev-process-kit] <dpk-template-prototype>: action "${n.id}" of screen "${i.screen.id}" found nothing on screen for: ${a.join(", ")}`)}#W(t){const r=this.#e,i=r.kind==="composing"?r.target:void 0,n=i?T(t.state,i.previewId)?.preview:void 0,o=i?vt(i):void 0;return{mode:r,pins:r.kind==="off"?[]:At(t.comments,this.#n),...i&&n?{targetLabel:Tt(n,i)}:{},notes:t.comments.filter(s=>s.target.type===re&&s.target.id===o).map(s=>tt(s)),composer:ni(this.locale),send:s=>this.#p(s),submit:s=>this.#B(s)}}#p(t){const r=ko(this.#e,t);r!==this.#e&&(this.#e=r,r.kind!=="composing"&&(this.#s=null),this.requestUpdate())}#B(t){const r=this.#e;if(r.kind!=="composing")return;this.dispatch({type:ei,target:{type:re,id:vt(r.target)},payload:{body:t}}).ok&&this.#p({kind:"submitted"})}#I(t){const r=t.composedPath(),i=r[0];if(i instanceof Element&&i.classList.contains("ui-catcher"))return this.#G(t.clientX,t.clientY);const n=r.find(o=>o instanceof Element&&o.parentElement===this&&o.hasAttribute("data-preview-id"));return!n||!(i instanceof Element)||!n.contains(i)?null:this.#_(i,n)}#G(t,r){const i=this.#P(t,r);return i===null?null:this.#_(i.element,i.wrapper)}#P(t,r){if(typeof document.elementsFromPoint!="function")return null;const i=this.#k();for(const n of document.elementsFromPoint(t,r)){const o=i.find(s=>s.contains(n));if(o!==void 0)return{element:n,wrapper:o}}return null}#_(t,r){const i=r.getAttribute("data-preview-id");if(!i)return null;const n=an(t,r),o=ln(n,r);return{element:n,target:{previewId:i,selector:o.selector,...o.text===void 0?{}:{text:o.text}}}}#k(){return Array.from(this.children).filter(t=>{const r=t.getAttribute("data-preview-id");return r!==null&&this.#n.includes(r)})}#q=t=>{if(this.#e.kind==="off")return;const r=this.#I(t);r&&(t.preventDefault(),t.stopPropagation(),this.#s=r.element,this.#p({kind:"pick",target:r.target}))};#j=t=>{if(this.#e.kind==="off")return;const r=this.#I(t);this.#$(".ui-hover",r?.element??null)};#F=()=>{this.#$(".ui-hover",null)};#K=t=>{const r=t.composedPath()[0];if(!(r instanceof Element)||!r.classList.contains("ui-catcher"))return;const i=this.renderRoot.querySelector(".canvas");let n=this.#P(t.clientX,t.clientY)?.element??null;for(;n!==null&&n!==i;){if(Ao(n,t.deltaX,t.deltaY)){t.preventDefault(),n.scrollBy({left:t.deltaX,top:t.deltaY});return}n=Io(n)}};#R=t=>{t.key!=="Escape"||t.defaultPrevented||(this.#e.kind!=="off"?this.#p({kind:"exit"}):this.#E(null))};#x=()=>{this.#e.kind!=="off"&&this.#D()};#D(){if(this.#e.kind==="off")return;this.#$(".ui-picked",this.#s);const t=this.renderRoot.querySelector(".canvas");if(!t)return;const r=this.renderRoot.querySelector(".ui-catcher");if(r){r.style.width=`${t.scrollWidth}px`,r.style.height=`${t.scrollHeight}px`;const i=[...this.renderRoot.querySelectorAll(".demo-controls")].map(n=>n.getBoundingClientRect());r.style.clipPath=Ji(r.getBoundingClientRect(),i)}for(const i of this.renderRoot.querySelectorAll(".ui-pin")){const n=this.#J(i.dataset.preview??""),s=(n?un(n,i.dataset.selector??""):null)?.getBoundingClientRect();if(!s||s.width===0&&s.height===0){i.hidden=!0;continue}const a=this.#C(t);i.hidden=!1,i.style.left=`${s.right-a.left}px`,i.style.top=`${s.top-a.top}px`}}#$(t,r){const i=this.renderRoot.querySelector(t),n=this.renderRoot.querySelector(".canvas");if(!i||!n)return;const o=r?.getBoundingClientRect();if(!o){i.hidden=!0;return}const s=this.#C(n);i.hidden=!1,i.style.left=`${o.left-s.left}px`,i.style.top=`${o.top-s.top}px`,i.style.width=`${o.width}px`,i.style.height=`${o.height}px`}#C(t){const r=t.getBoundingClientRect();return{left:r.left+t.clientLeft-t.scrollLeft,top:r.top+t.clientTop-t.scrollTop}}#X(){const t=this.renderRoot.querySelector(".canvas");t===this.#a||this.#l===null||(this.#a!==null&&this.#l.unobserve(this.#a),this.#a=t,t!==null&&this.#l.observe(t))}#O(){const t=this.renderRoot.querySelector('.frame[data-window="device"]'),r=t?.closest(".canvas");if(!t||!(r instanceof HTMLElement))return;const i=getComputedStyle(t),n={width:parseFloat(i.getPropertyValue("--device-width")),height:parseFloat(i.getPropertyValue("--device-height"))},o=getComputedStyle(r),s=r.clientWidth-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight),a=this.#t?.mode==="demo",d=a?So*2:0,c=Rn(n,{width:s-d,...a?{height:r.clientHeight-d}:{}});c!==this.#w&&(this.#w=c,this.requestUpdate())}#Z(){for(const t of this.querySelectorAll(":scope > [data-preview-id]"))for(const r of t.querySelectorAll("dialog"))qt(r),jt(this,r)}#M=t=>{const r=t.target;!(r instanceof HTMLDialogElement)||!r.open||Array.from(this.children).some(i=>i.hasAttribute("data-preview-id")&&i.contains(r))&&(qt(r),jt(this,r))};#J(t){return Array.from(this.children).find(r=>r.getAttribute("data-preview-id")===t)}#Q(){if(this.#T||this.renderRoot.querySelector(".stage")===null)return;this.#T=!0;const t=this.derivation.state,r=[];for(const i of Array.from(this.children)){const n=i.getAttribute("data-preview-id");if(n!==null)for(const o of i.querySelectorAll("a, [data-dpk-navigate]")){const s=Yi(t,{href:o.getAttribute("href"),navigate:o.getAttribute("data-dpk-navigate")});if(s===null)continue;const a=(o.textContent??"").replace(/\s+/g," ").trim().slice(0,40),d=o.getAttribute("data-dpk-navigate")??o.getAttribute("href")??"(no href)";r.push(`  ${n}: <${o.tagName.toLowerCase()}> "${a}" \u2192 ${d} (${s})`)}}r.length!==0&&console.warn(`[dev-process-kit] <dpk-template-prototype>: ${r.length} link(s) in the previews lead nowhere. Point each at the screen it opens (data-dpk-navigate="screen=\u2026"); a link that only moves the scenario on can name a step (data-dpk-navigate="step=\u2026") or a user story (data-dpk-navigate="story=\u2026"):
`+r.join(`
`))}#E(t){if(t===(this.#t?.mode??null))return;const r=this.renderRoot.querySelector(".stage"),i=this.#t?.height??r?.offsetHeight??0;this.#L(),t!==null&&(this.#t={mode:t,height:i}),this.#d=null,t!==null&&this.#e.kind==="composing"&&(ti(this.renderRoot.querySelector(".comment-pop")),this.#v=!1),this.requestUpdate()}#L(){this.#t=null,this.#f=null}#ee(){const t=this.renderRoot.querySelector(".stage");if(!(this.#t===null||!t||typeof t.showPopover!="function")&&t!==this.#f){this.#f=t;try{t.showPopover()}catch{}}}#te=t=>{const r=this.renderRoot.querySelector(".canvas");(r===null||!t.composedPath().includes(r))&&t.preventDefault()};#re(t,r){const i=rr(t.state,t.navigation);this.#r=this.#r===null?i===null?null:vn(i):tr(this.#r,{kind:"observe",page:i});const n=this.#r;if(n===null)return null;const o=pe(n),s=o?.kind!=="page"&&n.seen!==null;if(i===null&&!s)return null;const a=En(n)??i;return{view:dr(t.state,n,r,a),shortcuts:o?.kind==="new-tab"?Sn(t.state,a):[],switcher:this.#c,send:d=>this.#ne(d)}}#o(t){if(this.#r===null)return;const r=tr(this.#r,t);if(r===this.#r)return;this.#r=r;const i=pe(r);i?.kind==="page"&&this.#ie(i.page),this.requestUpdate()}#ie(t){this.navigate({screen:t.screen??null,preview:t.preview??null})}#ne(t){switch(t.kind){case"reload":this.#se();return;case"address":this.#oe(t.input);return;case"back":case"forward":case"new-tab":this.#c=!1,this.#o({kind:t.kind});return;case"switcher":this.#c=t.open,this.requestUpdate();return;case"activate":this.#c=!1,this.#g=t.focus===!0,this.#o({kind:"activate",id:t.id}),this.requestUpdate();return;case"close-tab":this.#o({kind:t.kind,id:t.id});return;case"visit":this.#o({kind:"visit",page:t.page});return;default:return}}#oe(t){const r=this.#r;if(r===null)return;const i=this.derivation.state,n=dr(i,r,fe(this.locale)).url||"https://page.example.com/",o=kn(i,t,n);if(o!==null){this.#o({kind:"visit",page:o});return}const s=t.trim(),a=s.startsWith("/")?new URL(s,n).href:/^[a-z][a-z0-9+.-]*:\/\//i.test(s)?s:`https://${s}`;this.#o({kind:"unreachable",url:a})}#se(){if(this.#i!==null)return;const t=setTimeout(()=>{this.#i=null;for(const r of this.#k()){for(const i of r.querySelectorAll("form"))i.reset();for(const i of r.querySelectorAll("dialog"))i.close();r.scrollTop=0,r.dispatchEvent(new CustomEvent("dpk-reload",{bubbles:!0}))}this.renderRoot.querySelector(".browser .viewport")?.scrollTo?.({top:0}),this.requestUpdate()},$o);this.#i={page:this.#n.join(" "),timer:t},this.requestUpdate()}#N(){this.#i!==null&&(clearTimeout(this.#i.timer),this.#i=null)}#h=t=>{if(!this.#A||this.#e.kind!=="off"||this.#r===null||t.type==="auxclick"&&t.button!==1)return;const r=this.#ae(t);if(r===null)return;const i=t.metaKey||t.ctrlKey||t.button===1;if(!r.blank&&!i)return;t.preventDefault(),t.stopPropagation();const n=rr(this.derivation.state,Ae(this.hashFor(r.patch)));if(n===null){i||this.navigate(r.patch);return}this.#o({kind:"open-tab",entry:{kind:"page",page:n},background:i})};#ae(t){const r=t.composedPath();if(!r.some(n=>n instanceof Element&&n.parentElement===this&&n.hasAttribute("data-preview-id")))return null;for(const n of r){if(!(n instanceof Element)||n===this)break;const o=n.getAttribute("data-dpk-navigate"),s=n instanceof HTMLAnchorElement?n.getAttribute("href"):null,a=o??(s?.startsWith("#")?s:null);if(a===null)continue;const d=o!==null&&!o.includes("=")?`step=${o}`:a;return{patch:{...Ae(d)},blank:n.getAttribute("target")==="_blank"}}return null}#de(t){return Array.from(this.querySelectorAll("[data-preview-id]")).some(r=>r.getAttribute("data-preview-id")===t)}}const Rr=()=>{customElements.get("dpk-template-prototype")||customElements.define("dpk-template-prototype",_r)},Po=Object.freeze(Object.defineProperty({__proto__:null,DpkTemplatePrototype:_r,VIEWPORT_MIN_HEIGHT:xr,VIEWPORT_WIDTH:kr,allScreens:H,allStepIds:wt,applyPrototypeAction:mt,definePrototypeElement:Rr,describePrototypeAction:$t,emptyPrototypeBase:ft,findActivity:z,findPreview:T,findScreen:N,findStep:$,findStory:E,flattenSteps:W,parsePrototypeBase:gt,prototypeAction:ne,prototypeActions:b,prototypeBaseSchema:lt,prototypeCommentTargets:Lt,prototypeDefinitionFor:Bt,prototypeMessages:fe,prototypePageHeading:Nt,prototypeTargetLabel:St,prototypeTitle:Ye,renderFrame:Ge,renderNav:ur,renderStage:Sr,resolvePrototypeNavigation:ye,serializePrototypeAction:Et},Symbol.toStringTag,{value:"Module"}));export{Rr as d,Po as i};
