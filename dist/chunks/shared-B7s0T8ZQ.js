import{af as yt,aR as kt,ag as z,ah as B,ai as P,aD as L,aj as u,aC as O,al as b,am as f,aQ as xt,b7 as St,ak as be,p as m,aw as g,v as q,aB as V,P as wt,e as Tt,a2 as $t,Y as T,R as y,a9 as K,a4 as Z,G as Et,a6 as l,aW as M,a5 as v,aa as Lt,j as At,ac as _t,aU as It,aV as Rt,A as Dt,l as j,a7 as A,aG as Y,J as Ot,B as Mt,K as ve,aK as Nt,z as fe,h as Ct,av as Bt,T as ye,a3 as Yt,ab as Ut,aL as zt,b8 as Pt}from"./shared-hrghWtVh.js";import{s as Vt}from"./shared-D4K7KsfJ.js";import{D as Gt}from"./shared-sTu0Wlge.js";import{r as le,D as Ft}from"./shared-DdefS1nG.js";const Kt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]],jt=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]],qt=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]],Ht=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"}],["circle",{cx:"12",cy:"12",r:"10"}]],Wt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]],Xt=[["circle",{cx:"12",cy:"12",r:"10"}]],Zt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]],Jt=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]],Qt=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"}]],ea=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]],Q=["gray","blue","violet","green","amber","accent"],ke=["progress","circle","lightbulb","flag","play","clock","eye","pause","check","x"],ta=z({id:b(u(),f(1)),name:b(u(),f(1))}),aa=z({id:O,name:b(u(),f(1)),actor:L(u()),steps:B(P(ta),[])}),sa=z({id:b(u(),f(1)),name:b(u(),f(1)),timeframe:L(u()),description:L(u())}),H=be(Q),de=be(ke),pe=b(u(),St(),xt(e=>/^https?:\/\//i.test(e),"a link must be an http(s) URL")),ia=z({url:pe,label:L(b(u(),f(1)))}),na=z({id:O,name:b(u(),f(1)),tone:B(H),icon:B(de)}),ra=z({id:O,name:b(u(),f(1)),tone:B(H)}),oa=z({id:O,name:b(u(),f(1)),description:L(u()),activityId:b(u(),f(1)),stepId:b(u(),f(1)),milestoneId:L(u()),statusId:L(u()),links:L(P(ia)),labelIds:L(P(b(u(),f(1))))}),la=z({title:L(u()),activities:B(P(aa),[]),milestones:B(P(sa),[]),statuses:B(P(na),[]),labels:B(P(ra),[]),stories:B(P(oa),[])}),ce=e=>Q[e%Q.length]??"gray",xe=e=>ce(e+1),Se=e=>{const t=yt(la,e),a=t.statuses[0]?.id,s={...t,stories:a===void 0?t.stories:t.stories.map(d=>d.statusId===void 0?{...d,statusId:a}:d),statuses:t.statuses.map((d,x)=>({...d,tone:d.tone??ce(x),icon:d.icon??"progress"})),labels:t.labels.map((d,x)=>({...d,tone:d.tone??xe(x)}))},i=new Map;for(const d of s.activities)for(const x of d.steps)i.set(x.id,d.id);const n=new Set(s.milestones.map(d=>d.id)),r=new Set(s.statuses.map(d=>d.id)),o=new Set(s.labels.map(d=>d.id)),p=new Set,c=(d,x)=>{if(p.has(x))throw new Error(`duplicate id "${x}" in ${d}`);p.add(x)};for(const d of s.activities){c("activities",d.id);for(const x of d.steps)c("steps",x.id)}for(const d of s.milestones)c("milestones",d.id);for(const d of s.statuses)c("statuses",d.id);for(const d of s.labels)c("labels",d.id);for(const d of s.stories){c("stories",d.id);const x=i.get(d.stepId);if(x===void 0||x!==d.activityId)throw new Error(`story "${d.id}" references unknown activityId/stepId`);if(d.milestoneId!==void 0&&!n.has(d.milestoneId))throw new Error(`story "${d.id}" references unknown milestoneId "${d.milestoneId}"`);const R=(d.links??[]).map(w=>w.url);if(new Set(R).size!==R.length)throw new Error(`story "${d.id}" links the same URL twice`);if(d.statusId!==void 0&&!r.has(d.statusId))throw new Error(`story "${d.id}" references unknown statusId "${d.statusId}"`);const k=d.labelIds??[];if(new Set(k).size!==k.length)throw new Error(`story "${d.id}" has a label twice`);const E=k.find(w=>!o.has(w));if(E!==void 0)throw new Error(`story "${d.id}" references unknown labelId "${E}"`)}return s},we=()=>({activities:[],milestones:[],statuses:[],labels:[],stories:[]}),U=(e,t)=>{if(t!==void 0)return e.activities.find(a=>a.id===t)},ee=(e,t)=>`${e}.${t}`,$=(e,t)=>{if(t===void 0)return;const a=kt(t,2);if(a){const[s,i]=a;if(s===void 0||i===void 0)return;const n=e.activities.find(o=>o.id===s),r=n?.steps.find(o=>o.id===i);return n&&r?{activity:n,step:r}:void 0}if(!t.includes("."))for(const s of e.activities){const i=s.steps.find(n=>n.id===t);if(i)return{activity:s,step:i}}},N=(e,t)=>{if(t!==void 0)return e.milestones.find(a=>a.id===t)},_=(e,t)=>{if(t!==void 0)return e.statuses.find(a=>a.id===t)},I=(e,t)=>{if(t!==void 0)return e.labels.find(a=>a.id===t)},da=(e,t)=>{const a=new Set(t.labelIds??[]);return e.labels.filter(s=>a.has(s.id))},S=(e,t)=>{if(t!==void 0)return e.stories.find(a=>a.id===t)},ue=e=>e.activities.flatMap(t=>t.steps.map(a=>({activity:t,step:a}))),pa=e=>({...e,stories:Vt(e.stories,[t=>`${t.activityId}/${t.stepId}/${t.milestoneId??""}`])}),te=(e,t,a)=>e.stories.filter(s=>s.stepId===t&&(s.milestoneId??void 0)===a),Te=(e,t,a)=>e.stories.filter(s=>s.activityId===t&&(s.milestoneId??void 0)===a),G=e=>[...e.activities.map(t=>t.id),...e.activities.flatMap(t=>t.steps.map(a=>a.id)),...e.milestones.map(t=>t.id),...e.statuses.map(t=>t.id),...e.labels.map(t=>t.id),...e.stories.map(t=>t.id)],$e=(e,t)=>e.stories.filter(a=>a.stepId===t).length,h={SET_ACTIVITY_NAME:m("SET_ACTIVITY_NAME","activity",g({name:b(u(),f(1))})),SET_ACTIVITY_ACTOR:m("SET_ACTIVITY_ACTOR","activity",g({actor:u()})),SET_STEP_NAME:m("SET_STEP_NAME","step",g({name:b(u(),f(1))})),REORDER_STEP:m("REORDER_STEP","step",g({after:V(u())}),{mode:"sequence"}),ADD_ACTIVITY:m("ADD_ACTIVITY","page",g({id:O,name:b(u(),f(1))}),{dedupeKey:q}),ADD_STEP:m("ADD_STEP","activity",g({id:O,name:b(u(),f(1))}),{dedupeKey:q}),DELETE_ACTIVITY:m("DELETE_ACTIVITY","activity",g({})),DELETE_STEP:m("DELETE_STEP","step",g({})),SET_STORY_NAME:m("SET_STORY_NAME","story",g({name:b(u(),f(1))})),SET_STORY_DESCRIPTION:m("SET_STORY_DESCRIPTION","story",g({description:u()})),SET_STORY_MILESTONE:m("SET_STORY_MILESTONE","story",g({milestoneId:V(u())})),MOVE_STORY:m("MOVE_STORY","story",g({activityId:b(u(),f(1)),stepId:b(u(),f(1)),milestoneId:V(u()),after:V(u())}),{mode:"sequence"}),REORDER_STORY:m("REORDER_STORY","story",g({after:V(u())}),{mode:"sequence"}),ADD_STORY:m("ADD_STORY","step",g({id:O,name:b(u(),f(1)),activityId:b(u(),f(1)),milestoneId:L(u())}),{dedupeKey:q}),DELETE_STORY:m("DELETE_STORY","story",g({})),ADD_STORY_LINK:m("ADD_STORY_LINK","story",g({url:pe,label:L(b(u(),f(1)))})),REMOVE_STORY_LINK:m("REMOVE_STORY_LINK","story",g({url:u()})),SET_STORY_STATUS:m("SET_STORY_STATUS","story",g({statusId:b(u(),f(1))})),SET_MILESTONE_NAME:m("SET_MILESTONE_NAME","milestone",g({name:b(u(),f(1))})),ADD_MILESTONE:m("ADD_MILESTONE","page",g({id:O,name:b(u(),f(1))}),{dedupeKey:q}),DELETE_MILESTONE:m("DELETE_MILESTONE","milestone",g({})),REORDER_MILESTONE:m("REORDER_MILESTONE","milestone",g({after:V(u())}),{mode:"sequence"}),ADD_STATUS:m("ADD_STATUS","page",g({id:O,name:b(u(),f(1)),tone:H,icon:L(de)}),{dedupeKey:q}),SET_STATUS_NAME:m("SET_STATUS_NAME","status",g({name:b(u(),f(1))})),SET_STATUS_TONE:m("SET_STATUS_TONE","status",g({tone:H})),SET_STATUS_ICON:m("SET_STATUS_ICON","status",g({icon:de})),DELETE_STATUS:m("DELETE_STATUS","status",g({})),REORDER_STATUS:m("REORDER_STATUS","status",g({after:V(u())}),{mode:"sequence"}),ADD_LABEL:m("ADD_LABEL","page",g({id:O,name:b(u(),f(1)),tone:H}),{dedupeKey:q}),SET_LABEL_NAME:m("SET_LABEL_NAME","label",g({name:b(u(),f(1))})),SET_LABEL_TONE:m("SET_LABEL_TONE","label",g({tone:H})),DELETE_LABEL:m("DELETE_LABEL","label",g({})),REORDER_LABEL:m("REORDER_LABEL","label",g({after:V(u())}),{mode:"sequence"}),ADD_STORY_LABEL:m("ADD_STORY_LABEL","story",g({labelId:b(u(),f(1))})),REMOVE_STORY_LABEL:m("REMOVE_STORY_LABEL","story",g({labelId:b(u(),f(1))}))},ca={setActivityName:(e,t)=>({type:"SET_ACTIVITY_NAME",target:{type:"activity",id:e},payload:{name:t}}),setStepName:(e,t)=>({type:"SET_STEP_NAME",target:{type:"step",id:e},payload:{name:t}})},Ee=(e,t)=>{const a=wt(h,t);if(a===null)return null;const s=a.target.id;switch(a.type){case"SET_ACTIVITY_NAME":{const{name:i}=a.payload;return e.activities.some(n=>n.id===s)?{...e,activities:e.activities.map(n=>n.id===s?{...n,name:i}:n)}:null}case"SET_ACTIVITY_ACTOR":{const i=a.payload.actor.trim();return e.activities.some(n=>n.id===s)?{...e,activities:e.activities.map(n=>{if(n.id!==s)return n;const{actor:r,...o}=n;return i===""?o:{...o,actor:i}})}:null}case"SET_STEP_NAME":{const{name:i}=a.payload,n=$(e,s);return n?{...e,activities:e.activities.map(r=>r.id===n.activity.id?{...r,steps:r.steps.map(o=>o.id===n.step.id?{...o,name:i}:o)}:r)}:null}case"REORDER_STEP":{const{after:i}=a.payload,n=$(e,s);if(!n)return null;const r=i===null?null:$(e,i);if(i!==null&&(!r||r.activity.id!==n.activity.id))return null;const o=ae(n.activity.steps,n.step.id,r?.step.id??null);return o===null?null:{...e,activities:e.activities.map(p=>p.id===n.activity.id?{...p,steps:o}:p)}}case"ADD_ACTIVITY":{const i=a.payload;return e.activities.some(n=>n.id===i.id)?e:{...e,activities:[...e.activities,{id:i.id,name:i.name,steps:[]}]}}case"ADD_STEP":{const i=a.payload,n=e.activities.find(r=>r.id===s);return n?n.steps.some(r=>r.id===i.id)?e:{...e,activities:e.activities.map(r=>r.id===s?{...r,steps:[...r.steps,{id:i.id,name:i.name}]}:r)}:null}case"DELETE_ACTIVITY":{const i=e.activities.find(r=>r.id===s);if(!i)return null;const n=new Set(i.steps.map(r=>r.id));return{...e,activities:e.activities.filter(r=>r.id!==s),stories:e.stories.filter(r=>r.activityId!==s&&!n.has(r.stepId))}}case"DELETE_STEP":{const i=$(e,s);return i?{...e,activities:e.activities.map(n=>n.id===i.activity.id?{...n,steps:n.steps.filter(r=>r.id!==i.step.id)}:n),stories:e.stories.filter(n=>n.activityId!==i.activity.id||n.stepId!==i.step.id)}:null}case"SET_STORY_NAME":{const{name:i}=a.payload;return F(e,s,n=>({...n,name:i}))}case"SET_STORY_DESCRIPTION":{const{description:i}=a.payload;return F(e,s,n=>({...n,description:i}))}case"SET_STORY_MILESTONE":{const{milestoneId:i}=a.payload;return i!==null&&!N(e,i)?null:F(e,s,n=>i===null?me(n):{...n,milestoneId:i})}case"MOVE_STORY":{const i=a.payload,n=S(e,s);if(!n)return null;const r=$(e,i.stepId);if(!r||r.activity.id!==i.activityId||i.milestoneId!==null&&!N(e,i.milestoneId))return null;const o=i.milestoneId??void 0,p=o===void 0?{...me(n),activityId:r.activity.id,stepId:r.step.id}:{...n,activityId:r.activity.id,stepId:r.step.id,milestoneId:o};return Ae(e,p,i.after)}case"REORDER_STORY":{const{after:i}=a.payload,n=S(e,s);return n?Ae(e,n,i,!0):null}case"ADD_STORY":{const i=a.payload,n=$(e,t.target.id);if(!n||n.activity.id!==i.activityId||i.milestoneId!==void 0&&!N(e,i.milestoneId))return null;if(e.stories.some(o=>o.id===i.id))return e;const r={id:i.id,name:i.name,activityId:i.activityId,stepId:n.step.id,...i.milestoneId===void 0?{}:{milestoneId:i.milestoneId},...e.statuses[0]===void 0?{}:{statusId:e.statuses[0].id}};return{...e,stories:[...e.stories,r]}}case"DELETE_STORY":return e.stories.some(i=>i.id===s)?{...e,stories:e.stories.filter(i=>i.id!==s)}:null;case"ADD_STORY_LINK":{const{url:i,label:n}=a.payload,r=S(e,s);if(!r)return null;if(r.links?.some(p=>p.url===i))return e;const o=n===void 0?{url:i}:{url:i,label:n};return F(e,s,p=>({...p,links:[...p.links??[],o]}))}case"REMOVE_STORY_LINK":{const{url:i}=a.payload;return S(e,s)?.links?.some(r=>r.url===i)?F(e,s,r=>{const o=(r.links??[]).filter(d=>d.url!==i),{links:p,...c}=r;return o.length===0?c:{...c,links:o}}):null}case"SET_STORY_STATUS":{const{statusId:i}=a.payload;return _(e,i)?F(e,s,n=>({...n,statusId:i})):null}case"SET_MILESTONE_NAME":{const{name:i}=a.payload;return e.milestones.some(n=>n.id===s)?{...e,milestones:e.milestones.map(n=>n.id===s?{...n,name:i}:n)}:null}case"ADD_MILESTONE":{const i=a.payload;return e.milestones.some(n=>n.id===i.id)?e:{...e,milestones:[...e.milestones,{id:i.id,name:i.name}]}}case"DELETE_MILESTONE":return e.milestones.some(i=>i.id===s)?{...e,milestones:e.milestones.filter(i=>i.id!==s),stories:e.stories.map(i=>i.milestoneId===s?me(i):i)}:null;case"REORDER_MILESTONE":{const{after:i}=a.payload,n=ae(e.milestones,s,i);return n===null?null:{...e,milestones:n}}case"ADD_STATUS":{const{id:i,name:n,tone:r,icon:o}=a.payload;if(e.statuses.some(c=>c.id===i))return e;const p=[...e.statuses,{id:i,name:n,tone:r,icon:o??"progress"}];return e.statuses.length===0?{...e,statuses:p,stories:e.stories.map(c=>({...c,statusId:i}))}:{...e,statuses:p}}case"SET_STATUS_NAME":{const{name:i}=a.payload;return _(e,s)?{...e,statuses:e.statuses.map(n=>n.id===s?{...n,name:i}:n)}:null}case"SET_STATUS_TONE":{const{tone:i}=a.payload;return _(e,s)?{...e,statuses:e.statuses.map(n=>n.id===s?{...n,tone:i}:n)}:null}case"SET_STATUS_ICON":{const{icon:i}=a.payload;return _(e,s)?{...e,statuses:e.statuses.map(n=>n.id===s?{...n,icon:i}:n)}:null}case"DELETE_STATUS":{if(!_(e,s))return null;const i=e.statuses.filter(r=>r.id!==s),n=i[0]?.id;return{...e,statuses:i,stories:e.stories.map(r=>r.statusId!==s?r:n===void 0?ua(r):{...r,statusId:n})}}case"REORDER_STATUS":{const{after:i}=a.payload,n=ae(e.statuses,s,i);return n===null?null:{...e,statuses:n}}case"ADD_LABEL":{const{id:i,name:n,tone:r}=a.payload;return I(e,i)?e:{...e,labels:[...e.labels,{id:i,name:n,tone:r}]}}case"SET_LABEL_NAME":{const{name:i}=a.payload;return I(e,s)?{...e,labels:e.labels.map(n=>n.id===s?{...n,name:i}:n)}:null}case"SET_LABEL_TONE":{const{tone:i}=a.payload;return I(e,s)?{...e,labels:e.labels.map(n=>n.id===s?{...n,tone:i}:n)}:null}case"DELETE_LABEL":return I(e,s)?{...e,labels:e.labels.filter(i=>i.id!==s),stories:e.stories.map(i=>i.labelIds?.includes(s)?Le(i,s):i)}:null;case"REORDER_LABEL":{const{after:i}=a.payload,n=ae(e.labels,s,i);return n===null?null:{...e,labels:n}}case"ADD_STORY_LABEL":{const{labelId:i}=a.payload,n=S(e,s);return!n||!I(e,i)?null:n.labelIds?.includes(i)?e:F(e,s,r=>({...r,labelIds:[...r.labelIds??[],i]}))}case"REMOVE_STORY_LABEL":{const{labelId:i}=a.payload;return S(e,s)?.labelIds?.includes(i)?F(e,s,n=>Le(n,i)):null}default:return Tt(a)}},F=(e,t,a)=>e.stories.some(s=>s.id===t)?{...e,stories:e.stories.map(s=>s.id===t?a(s):s)}:null,me=e=>{const{milestoneId:t,...a}=e;return a},Le=(e,t)=>{const{labelIds:a=[],...s}=e,i=a.filter(n=>n!==t);return i.length===0?s:{...s,labelIds:i}},ua=e=>{const{statusId:t,...a}=e;return a},Ae=(e,t,a,s=!1)=>{const i=t.milestoneId??void 0,n=e.stories.filter(k=>k.id!==t.id),r=n.filter(k=>k.stepId===t.stepId&&(k.milestoneId??void 0)===i);if(a!==null){const k=n.find(E=>E.id===a);if(!k||k.stepId!==t.stepId||(k.milestoneId??void 0)!==i)return null;if(s){const E=S(e,t.id);if(!E||k.stepId!==E.stepId||(k.milestoneId??void 0)!==(E.milestoneId??void 0))return null}}const o=a===null?[t,...r]:_e(r,t,a),p=n.findIndex(k=>k.stepId===t.stepId&&(k.milestoneId??void 0)===i),c=new Set(r.map(k=>k.id)),d=n.filter(k=>!c.has(k.id)),x=p<0?d.length:Math.min(p,d.length),R=[...d.slice(0,x),...o,...d.slice(x)];return{...e,stories:R}},ae=(e,t,a)=>{if(!e.some(n=>n.id===t)||a!==null&&!e.some(n=>n.id===a))return null;if(a===t)return[...e];const s=e.find(n=>n.id===t);if(s===void 0)return null;const i=e.filter(n=>n.id!==t);return _e(i,s,a)},_e=(e,t,a)=>{const s=[...e],i=a===null?-1:s.findIndex(n=>n.id===a);return s.splice(i+1,0,t),s},se=$t({en:{renameActivity:"Rename activity",changeActivityActor:"Change whose experience",renameStep:"Rename step",reorderStep:"Reorder step",addActivity:"Add activity",addStep:"Add step",deleteActivity:"Delete activity",deleteStep:"Delete step",renameStory:"Rename story",updateStoryDescription:"Update story description",changeMilestone:"Change milestone",moveStory:"Move story",reorderStory:"Reorder story",addStory:"Add story",deleteStory:"Delete story",renameMilestone:"Rename milestone",addMilestone:"Add milestone",deleteMilestone:"Delete milestone",reorderMilestone:"Reorder milestone",changeStoryStatus:"Change story status",addStatus:"Add status",renameStatus:"Rename status",changeStatusTone:"Change status color",changeStatusIcon:"Change status icon",addStoryLink:"Link to story",removeStoryLink:"Unlink from story",deleteStatus:"Delete status",reorderStatus:"Reorder status",addLabel:"Add label",renameLabel:"Rename label",changeLabelTone:"Change label color",deleteLabel:"Delete label",reorderLabel:"Reorder label",addStoryLabel:"Label story",removeStoryLabel:"Unlabel story",toValue:e=>`\u2192 \u201C${e}\u201D`,fromTo:(e,t)=>`\u201C${e}\u201D \u2192 \u201C${t}\u201D`,added:e=>`+ \u201C${e}\u201D`,removed:e=>`\u2212 \u201C${e}\u201D`,toFront:"\u2192 To the front",afterName:e=>`\u2192 Right after \u201C${e}\u201D`,toUnassigned:"\u2192 Unassigned",toName:e=>`\u2192 ${e}`,activityGroup:"Activity",stepGroup:"Step",storyGroup:"Story",milestoneGroup:"Milestone",statusGroup:"Status",labelGroup:"Label",mapGroup:"Map",targetLabel:(e,t)=>`${e} \xB7 ${t}`,targetMissing:(e,t)=>`${e} \xB7 ${t} (missing)`,wholeMap:"Whole map",unassigned:"Unassigned",emptyTitle:"No backbone yet",emptyBody:"Add activities and steps, and the story map appears here.",firstActivityButton:"+ First activity",groupingLabel:"Group by",groupViewTab:"Activity group",groupAxisHeader:"Activity group \u2192",activityAxis:"Activity \u2192",milestoneAxis:"Milestone \u2193",stepNameLabel:"Step name",activityNameLabel:"Activity name",milestoneNameLabel:"Milestone name",addStepAria:"Add a step to this activity",newActivityButton:"+ Activity",newMilestoneButton:"+ Milestone",addCellButton:"+ Add",addStoryCellAria:"Add a story to this cell",storyCount:e=>e===1?"1 story":`${e} stories`,pageTabsLabel:"Page",mapTab:"User Story Mapping",milestonesTab:"Milestones",statusesTab:"Statuses",labelsTab:"Labels",shareOfStories:e=>`${e}% of all stories`,coverageLabel:"Backbone coverage",coverage:(e,t)=>`${e} / ${t} steps`,storiesLabel:"Stories",timeframeUnset:"Timing not set",milestoneNoDescription:"No description yet.",noMilestonesTitle:"No milestones yet",noMilestonesBody:"Add a milestone to slice the map into releases.",commentCountAria:e=>e===1?"1 comment":`${e} comments`,statusNameLabel:"Status name",statusToneLabel:"Color",toneName:e=>({gray:"Gray",blue:"Blue",violet:"Violet",green:"Green",amber:"Amber",accent:"Orange"})[e],statusIconLabel:"Icon",iconName:e=>({progress:"Progress ring",circle:"Circle",lightbulb:"Light bulb",flag:"Flag",play:"Play",clock:"Clock",eye:"Eye",pause:"Pause",check:"Check",x:"Cross"})[e],statusShare:(e,t)=>`${e===1?"1 story":`${e} stories`} \xB7 ${t}%`,statusFilterLabel:"Status",clearFilter:"Clear",progressAria:e=>`Progress: ${e}`,activityActorLabel:"Who",noStatusesTitle:"No statuses yet",noStatusesBody:"Add statuses such as Idea / Ready / Done, and the map colors each story by where it stands.",newStatusButton:"+ Status",moveUpAria:"Move up",moveDownAria:"Move down",deleteStatusAria:"Delete this status",labelNameLabel:"Label name",noLabelsTitle:"No labels yet",noLabelsBody:"Add labels such as Dev / PdM to sort stories however the team likes. The kit gives them no meaning.",newLabelButton:"+ Label",deleteLabelAria:"Delete this label",moveDialogLabel:"Step to move to",moveDialogSelectLabel:"Destination",moveConfirm:"Move",moveCancel:"Cancel",storyStatusLabel:"Status",panelLabel:e=>`Story: ${e}`,closePanelAria:"Close",storyTitleLabel:"Title",storyDescriptionLabel:"Description",storyLinksLabel:"Links",storyLabelsLabel:"Labels",storyNoLabels:"No labels yet.",manageLabels:"Manage labels",linkUrlLabel:"URL",addLinkButton:"Add",removeLinkAria:e=>`Remove ${e}`,deleteStoryButton:"Delete story",storyCommentsLabel:"Comments",commentSubmit:"Comment",storyStatusAria:e=>`Status: ${e}`,newActivityName:"New activity",newStepName:"New step",newMilestoneName:"New milestone",newStoryName:"New story",newStatusName:"New status",newLabelName:"New label"},ja:{renameActivity:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u540D\u3092\u5909\u66F4",changeActivityActor:"\u4F53\u9A13\u3059\u308B\u4EBA\u3092\u5909\u66F4",renameStep:"\u30B9\u30C6\u30C3\u30D7\u540D\u3092\u5909\u66F4",reorderStep:"\u30B9\u30C6\u30C3\u30D7\u306E\u9806\u5E8F\u3092\u5909\u66F4",addActivity:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3092\u8FFD\u52A0",addStep:"\u30B9\u30C6\u30C3\u30D7\u3092\u8FFD\u52A0",deleteActivity:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3092\u524A\u9664",deleteStep:"\u30B9\u30C6\u30C3\u30D7\u3092\u524A\u9664",renameStory:"\u30B9\u30C8\u30FC\u30EA\u30FC\u540D\u3092\u5909\u66F4",updateStoryDescription:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u8AAC\u660E\u3092\u66F4\u65B0",changeMilestone:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u3092\u5909\u66F4",moveStory:"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u79FB\u52D5",reorderStory:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u9806\u5E8F\u3092\u5909\u66F4",addStory:"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u8FFD\u52A0",deleteStory:"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u524A\u9664",renameMilestone:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u540D\u3092\u5909\u66F4",addMilestone:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u3092\u8FFD\u52A0",deleteMilestone:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u3092\u524A\u9664",reorderMilestone:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u306E\u9806\u5E8F\u3092\u5909\u66F4",changeStoryStatus:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u5909\u66F4",addStatus:"\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8FFD\u52A0",renameStatus:"\u30B9\u30C6\u30FC\u30BF\u30B9\u540D\u3092\u5909\u66F4",changeStatusTone:"\u30B9\u30C6\u30FC\u30BF\u30B9\u306E\u8272\u3092\u5909\u66F4",changeStatusIcon:"\u30B9\u30C6\u30FC\u30BF\u30B9\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u5909\u66F4",addStoryLink:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306B\u30EA\u30F3\u30AF\u3092\u8FFD\u52A0",removeStoryLink:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30EA\u30F3\u30AF\u3092\u524A\u9664",deleteStatus:"\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u524A\u9664",reorderStatus:"\u30B9\u30C6\u30FC\u30BF\u30B9\u306E\u9806\u5E8F\u3092\u5909\u66F4",addLabel:"\u30E9\u30D9\u30EB\u3092\u8FFD\u52A0",renameLabel:"\u30E9\u30D9\u30EB\u540D\u3092\u5909\u66F4",changeLabelTone:"\u30E9\u30D9\u30EB\u306E\u8272\u3092\u5909\u66F4",deleteLabel:"\u30E9\u30D9\u30EB\u3092\u524A\u9664",reorderLabel:"\u30E9\u30D9\u30EB\u306E\u9806\u5E8F\u3092\u5909\u66F4",addStoryLabel:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306B\u30E9\u30D9\u30EB\u3092\u4ED8\u4E0E",removeStoryLabel:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30E9\u30D9\u30EB\u3092\u5916\u3059",toValue:e=>`\u2192 \u300C${e}\u300D`,fromTo:(e,t)=>`\u300C${e}\u300D\u2192\u300C${t}\u300D`,added:e=>`+ \u300C${e}\u300D`,removed:e=>`\u2212 \u300C${e}\u300D`,toFront:"\u2192 \u5148\u982D\u3078",afterName:e=>`\u2192 \u300C${e}\u300D\u306E\u76F4\u5F8C\u3078`,toUnassigned:"\u2192 \u672A\u5272\u5F53\u3078",toName:e=>`\u2192 ${e}`,activityGroup:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3",stepGroup:"\u30B9\u30C6\u30C3\u30D7",storyGroup:"\u30B9\u30C8\u30FC\u30EA\u30FC",milestoneGroup:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3",statusGroup:"\u30B9\u30C6\u30FC\u30BF\u30B9",labelGroup:"\u30E9\u30D9\u30EB",mapGroup:"\u30DE\u30C3\u30D7",targetLabel:(e,t)=>`${e} \xB7 ${t}`,targetMissing:(e,t)=>`${e} \xB7 ${t} (missing)`,wholeMap:"\u30DE\u30C3\u30D7\u5168\u4F53",unassigned:"\u672A\u5272\u5F53",emptyTitle:"\u30D0\u30C3\u30AF\u30DC\u30FC\u30F3\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",emptyBody:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3068\u30B9\u30C6\u30C3\u30D7\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u3053\u3053\u306B\u30B9\u30C8\u30FC\u30EA\u30FC\u30DE\u30C3\u30D7\u304C\u73FE\u308C\u307E\u3059\u3002",firstActivityButton:"+ \u6700\u521D\u306E\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3",groupingLabel:"\u307E\u3068\u3081\u308B\u5358\u4F4D",groupViewTab:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u30B0\u30EB\u30FC\u30D7",groupAxisHeader:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u30B0\u30EB\u30FC\u30D7 \u2192",activityAxis:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3 \u2192",milestoneAxis:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3 \u2193",stepNameLabel:"\u30B9\u30C6\u30C3\u30D7\u540D",activityNameLabel:"\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u540D",milestoneNameLabel:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u540D",addStepAria:"\u3053\u306E\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u306B\u30B9\u30C6\u30C3\u30D7\u3092\u8FFD\u52A0",newActivityButton:"+ \u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3",newMilestoneButton:"+ \u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3",addCellButton:"+ \u8FFD\u52A0",addStoryCellAria:"\u3053\u306E\u30DE\u30B9\u306B\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u8FFD\u52A0",storyCount:e=>`${e} \u30B9\u30C8\u30FC\u30EA\u30FC`,pageTabsLabel:"\u30DA\u30FC\u30B8",mapTab:"User Story Mapping",milestonesTab:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3",statusesTab:"\u30B9\u30C6\u30FC\u30BF\u30B9",labelsTab:"\u30E9\u30D9\u30EB",shareOfStories:e=>`\u5168\u30B9\u30C8\u30FC\u30EA\u30FC\u306E ${e}%`,coverageLabel:"\u30D0\u30C3\u30AF\u30DC\u30FC\u30F3\u306E\u7DB2\u7F85",coverage:(e,t)=>`${e} / ${t} \u30B9\u30C6\u30C3\u30D7`,storiesLabel:"\u30B9\u30C8\u30FC\u30EA\u30FC",timeframeUnset:"\u6642\u671F\u672A\u5B9A",milestoneNoDescription:"\u8AAC\u660E\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",noMilestonesTitle:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",noMilestonesBody:"\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30DE\u30C3\u30D7\u3092\u30EA\u30EA\u30FC\u30B9\u3054\u3068\u306B\u533A\u5207\u308C\u307E\u3059\u3002",commentCountAria:e=>`\u30B3\u30E1\u30F3\u30C8 ${e} \u4EF6`,statusNameLabel:"\u30B9\u30C6\u30FC\u30BF\u30B9\u540D",statusToneLabel:"\u8272",toneName:e=>({gray:"\u30B0\u30EC\u30FC",blue:"\u9752",violet:"\u7D2B",green:"\u7DD1",amber:"\u9EC4",accent:"\u30AA\u30EC\u30F3\u30B8"})[e],statusIconLabel:"\u30A2\u30A4\u30B3\u30F3",iconName:e=>({progress:"\u9032\u6357\u30EA\u30F3\u30B0",circle:"\u5186",lightbulb:"\u96FB\u7403",flag:"\u65D7",play:"\u518D\u751F",clock:"\u6642\u8A08",eye:"\u76EE",pause:"\u4E00\u6642\u505C\u6B62",check:"\u30C1\u30A7\u30C3\u30AF",x:"\u30D0\u30C4"})[e],statusShare:(e,t)=>`${e} \u30B9\u30C8\u30FC\u30EA\u30FC \xB7 ${t}%`,statusFilterLabel:"\u30B9\u30C6\u30FC\u30BF\u30B9",clearFilter:"\u30AF\u30EA\u30A2",progressAria:e=>`\u9032\u307F\u5177\u5408: ${e}`,activityActorLabel:"\u8AB0\u306E\u4F53\u9A13",noStatusesTitle:"\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",noStatusesBody:"Idea / Ready / Done \u306E\u3088\u3046\u306A\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30DE\u30C3\u30D7\u306E\u30AB\u30FC\u30C9\u304C\u9032\u307F\u5177\u5408\u3067\u8272\u5206\u3051\u3055\u308C\u307E\u3059\u3002",newStatusButton:"+ \u30B9\u30C6\u30FC\u30BF\u30B9",moveUpAria:"\u4E0A\u3078\u79FB\u52D5",moveDownAria:"\u4E0B\u3078\u79FB\u52D5",deleteStatusAria:"\u3053\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u524A\u9664",labelNameLabel:"\u30E9\u30D9\u30EB\u540D",noLabelsTitle:"\u30E9\u30D9\u30EB\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",noLabelsBody:"Dev / PdM \u306E\u3088\u3046\u306A\u30E9\u30D9\u30EB\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30C1\u30FC\u30E0\u306E\u904B\u7528\u306B\u5408\u308F\u305B\u3066\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u533A\u5206\u3051\u3067\u304D\u307E\u3059\u3002\u30E9\u30D9\u30EB\u306E\u610F\u5473\u306F\u4ED5\u7D44\u307F\u5074\u3067\u306F\u6C7A\u3081\u307E\u305B\u3093\u3002",newLabelButton:"+ \u30E9\u30D9\u30EB",deleteLabelAria:"\u3053\u306E\u30E9\u30D9\u30EB\u3092\u524A\u9664",moveDialogLabel:"\u79FB\u52D5\u5148\u306E\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3",moveDialogSelectLabel:"\u79FB\u52D5\u5148",moveConfirm:"\u79FB\u52D5\u3059\u308B",moveCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",storyStatusLabel:"\u30B9\u30C6\u30FC\u30BF\u30B9",panelLabel:e=>`\u30B9\u30C8\u30FC\u30EA\u30FC: ${e}`,closePanelAria:"\u9589\u3058\u308B",storyTitleLabel:"\u30BF\u30A4\u30C8\u30EB",storyDescriptionLabel:"\u8AAC\u660E",storyLinksLabel:"\u30EA\u30F3\u30AF",storyLabelsLabel:"\u30E9\u30D9\u30EB",storyNoLabels:"\u30E9\u30D9\u30EB\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",manageLabels:"\u30E9\u30D9\u30EB\u3092\u7BA1\u7406",linkUrlLabel:"URL",addLinkButton:"\u8FFD\u52A0",removeLinkAria:e=>`${e} \u3092\u5916\u3059`,deleteStoryButton:"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u524A\u9664",storyCommentsLabel:"\u30B3\u30E1\u30F3\u30C8",commentSubmit:"\u30B3\u30E1\u30F3\u30C8\u3059\u308B",storyStatusAria:e=>`\u30B9\u30C6\u30FC\u30BF\u30B9: ${e}`,newActivityName:"\u65B0\u3057\u3044\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3",newStepName:"\u65B0\u3057\u3044\u30B9\u30C6\u30C3\u30D7",newMilestoneName:"\u65B0\u3057\u3044\u30DE\u30A4\u30EB\u30B9\u30C8\u30FC\u30F3",newStoryName:"\u65B0\u3057\u3044\u30B9\u30C8\u30FC\u30EA\u30FC",newStatusName:"\u65B0\u3057\u3044\u30B9\u30C6\u30FC\u30BF\u30B9",newLabelName:"\u65B0\u3057\u3044\u30E9\u30D9\u30EB"}}),ge=/^[A-Z][A-Z0-9]+-\d+$/,Ie=e=>{let t=e;try{t=decodeURIComponent(e)}catch{}return t.replace(/[-_+]+/g," ").trim()},ma=(e,t)=>{if(e!=="github.com")return null;const[a,s,i,n]=t;if(a===void 0)return{kind:"github",text:"GitHub",title:"github.com"};if(s===void 0)return{kind:"github",text:a,title:a};const r=`${a}/${s}`;return(i==="issues"||i==="pull"||i==="discussions")&&n&&/^\d+$/.test(n)?{kind:"github",text:`#${n}`,title:`${r}#${n}`}:i==="commit"&&n?{kind:"github",text:n.slice(0,7),title:`${r}@${n}`}:{kind:"github",text:r,title:r}},ga=(e,t)=>{if(e!=="gitlab.com")return null;const a=t.indexOf("-"),s=(a<0?t:t.slice(0,a)).join("/"),i=a<0?void 0:t[a+1],n=a<0?void 0:t[a+2];if(n&&/^\d+$/.test(n)){if(i==="issues")return{kind:"gitlab",text:`#${n}`,title:`${s}#${n}`};if(i==="merge_requests")return{kind:"gitlab",text:`!${n}`,title:`${s}!${n}`}}return{kind:"gitlab",text:s||"GitLab",title:s||e}},ha=(e,t,a)=>{if(!t.endsWith(".atlassian.net")&&!t.startsWith("jira."))return null;const s=(a[0]==="browse"?a[1]:void 0)??e.searchParams.get("selectedIssue")??a.find(i=>ge.test(i));return s&&ge.test(s)?{kind:"jira",text:s,title:`${t} ${s}`}:{kind:"jira",text:"Jira",title:t}},ba=(e,t)=>{if(e!=="linear.app")return null;const a=t[1]==="issue"?t[2]?.toUpperCase():void 0;return a&&ge.test(a)?{kind:"linear",text:a,title:a}:{kind:"linear",text:"Linear",title:e}},va=(e,t)=>{if(e!=="figma.com")return null;const[a,,s]=t;if((a==="file"||a==="design"||a==="proto"||a==="board")&&s){const i=Ie(s);return{kind:"figma",text:i,title:i}}return{kind:"figma",text:"Figma",title:e}},fa=(e,t)=>{if(e!=="notion.so"&&!e.endsWith(".notion.site"))return null;const s=(t.at(-1)??"").replace(/-?[0-9a-f]{32}$/i,""),i=s===""?"Notion":Ie(s);return{kind:"notion",text:i,title:i}},ie=e=>{let t;try{t=new URL(e)}catch{return{kind:"web",text:e,title:e}}const a=t.hostname.replace(/^www\./,""),s=t.pathname.split("/").filter(i=>i!=="");return ma(a,s)??ga(a,s)??ha(t,a,s)??ba(a,s)??va(a,s)??fa(a,s)??{kind:"web",text:a,title:e}},Re=e=>{const t=e.tab;return t==="milestones"||t==="statuses"||t==="labels"?t:"map"},ne=e=>{const t=e.statuses.length-1;return e.statuses.map((a,s)=>({id:a.id,name:a.name,tone:a.tone,icon:a.icon,progress:t<=0?1:s/t}))},De=(e,t)=>e.find(a=>a.id===t.statusId),Oe=(e,t)=>ne(e).map(a=>({...a,count:t.filter(s=>s.statusId===a.id).length})).filter(a=>a.count>0),re=(e,t)=>{const a=t.status;if(a===void 0||a==="")return new Set;const s=new Set(a.split(","));return new Set(e.statuses.map(i=>i.id).filter(i=>s.has(i)))},Me=(e,t)=>{const a=e.statuses.map(s=>s.id).filter(s=>t.has(s));return a.length===0?null:a.join(",")},ya=(e,t)=>{const a=new Set(e);return a.has(t)?a.delete(t):a.add(t),a},Ne=(e,t)=>e.size===0?!0:t.statusId!==void 0&&e.has(t.statusId),C=(e,t,a)=>{const s=typeof a=="string"?a:"",i=typeof t=="string"?t:void 0;return i===void 0?e.toValue(s):e.fromTo(i,s)},J=(e,t)=>typeof t=="string"?e.afterName(t):e.toFront,ka={SET_ACTIVITY_NAME:(e,t,a)=>({title:e.renameActivity,tone:"update",body:C(e,U(a,t.target.id)?.name,y(h.SET_ACTIVITY_NAME,t).name??"")}),SET_ACTIVITY_ACTOR:(e,t,a)=>{const s=y(h.SET_ACTIVITY_ACTOR,t).actor.trim();return{title:e.changeActivityActor,tone:"update",body:s===""?e.removed(U(a,t.target.id)?.actor??""):C(e,U(a,t.target.id)?.actor,s)}},SET_STEP_NAME:(e,t,a)=>({title:e.renameStep,tone:"update",body:C(e,$(a,t.target.id)?.step.name,y(h.SET_STEP_NAME,t).name??"")}),REORDER_STEP:(e,t)=>({title:e.reorderStep,tone:"move",body:J(e,y(h.REORDER_STEP,t).after)}),ADD_ACTIVITY:(e,t)=>({title:e.addActivity,tone:"create",body:e.added(String(y(h.ADD_ACTIVITY,t).name??""))}),ADD_STEP:(e,t)=>({title:e.addStep,tone:"create",body:e.added(String(y(h.ADD_STEP,t).name??""))}),DELETE_ACTIVITY:(e,t,a)=>({title:e.deleteActivity,tone:"delete",body:e.removed(U(a,t.target.id)?.name??t.target.id)}),DELETE_STEP:(e,t,a)=>({title:e.deleteStep,tone:"delete",body:e.removed($(a,t.target.id)?.step.name??t.target.id)}),SET_STORY_NAME:(e,t,a)=>({title:e.renameStory,tone:"update",body:C(e,S(a,t.target.id)?.name,y(h.SET_STORY_NAME,t).name??"")}),SET_STORY_DESCRIPTION:(e,t)=>({title:e.updateStoryDescription,tone:"update",body:e.toValue(String(y(h.SET_STORY_DESCRIPTION,t).description??"").slice(0,90))}),SET_STORY_MILESTONE:(e,t,a)=>{const s=y(h.SET_STORY_MILESTONE,t).milestoneId;return{title:e.changeMilestone,tone:"move",body:s==null?e.toUnassigned:e.toName(N(a,String(s))?.name??String(s))}},MOVE_STORY:(e,t,a)=>({title:e.moveStory,tone:"move",body:e.toName($(a,String(y(h.MOVE_STORY,t).stepId))?.step.name??String(y(h.MOVE_STORY,t).stepId??""))}),REORDER_STORY:(e,t)=>({title:e.reorderStory,tone:"move",body:J(e,y(h.REORDER_STORY,t).after)}),ADD_STORY:(e,t)=>({title:e.addStory,tone:"create",body:e.added(String(y(h.ADD_STORY,t).name??""))}),DELETE_STORY:(e,t,a)=>({title:e.deleteStory,tone:"delete",body:e.removed(S(a,t.target.id)?.name??t.target.id)}),SET_MILESTONE_NAME:(e,t,a)=>({title:e.renameMilestone,tone:"update",body:C(e,N(a,t.target.id)?.name,y(h.SET_MILESTONE_NAME,t).name??"")}),ADD_MILESTONE:(e,t)=>({title:e.addMilestone,tone:"create",body:e.added(String(y(h.ADD_MILESTONE,t).name??""))}),DELETE_MILESTONE:(e,t,a)=>({title:e.deleteMilestone,tone:"delete",body:e.removed(N(a,t.target.id)?.name??t.target.id)}),REORDER_MILESTONE:(e,t)=>({title:e.reorderMilestone,tone:"move",body:J(e,y(h.REORDER_MILESTONE,t).after)}),ADD_STORY_LINK:(e,t)=>{const{url:a,label:s}=y(h.ADD_STORY_LINK,t);return{title:e.addStoryLink,tone:"create",body:e.added(s??ie(a).title)}},REMOVE_STORY_LINK:(e,t,a)=>{const{url:s}=y(h.REMOVE_STORY_LINK,t),i=S(a,t.target.id)?.links?.find(n=>n.url===s);return{title:e.removeStoryLink,tone:"delete",body:e.removed(i?.label??ie(s).title)}},SET_STORY_STATUS:(e,t,a)=>{const s=y(h.SET_STORY_STATUS,t).statusId;return{title:e.changeStoryStatus,tone:"update",body:e.toName(_(a,s)?.name??s)}},ADD_STATUS:(e,t)=>({title:e.addStatus,tone:"create",body:e.added(y(h.ADD_STATUS,t).name)}),SET_STATUS_NAME:(e,t,a)=>({title:e.renameStatus,tone:"update",body:C(e,_(a,t.target.id)?.name,y(h.SET_STATUS_NAME,t).name)}),SET_STATUS_TONE:(e,t,a)=>{const s=_(a,t.target.id)?.tone,i=y(h.SET_STATUS_TONE,t).tone;return{title:e.changeStatusTone,tone:"update",body:C(e,s===void 0?void 0:e.toneName(s),e.toneName(i))}},SET_STATUS_ICON:(e,t,a)=>{const s=_(a,t.target.id)?.icon,i=y(h.SET_STATUS_ICON,t).icon;return{title:e.changeStatusIcon,tone:"update",body:C(e,s===void 0?void 0:e.iconName(s),e.iconName(i))}},DELETE_STATUS:(e,t,a)=>({title:e.deleteStatus,tone:"delete",body:e.removed(_(a,t.target.id)?.name??t.target.id)}),REORDER_STATUS:(e,t)=>({title:e.reorderStatus,tone:"move",body:J(e,y(h.REORDER_STATUS,t).after)}),ADD_LABEL:(e,t)=>({title:e.addLabel,tone:"create",body:e.added(y(h.ADD_LABEL,t).name)}),SET_LABEL_NAME:(e,t,a)=>({title:e.renameLabel,tone:"update",body:C(e,I(a,t.target.id)?.name,y(h.SET_LABEL_NAME,t).name)}),SET_LABEL_TONE:(e,t,a)=>{const s=I(a,t.target.id)?.tone,i=y(h.SET_LABEL_TONE,t).tone;return{title:e.changeLabelTone,tone:"update",body:C(e,s===void 0?void 0:e.toneName(s),e.toneName(i))}},DELETE_LABEL:(e,t,a)=>({title:e.deleteLabel,tone:"delete",body:e.removed(I(a,t.target.id)?.name??t.target.id)}),REORDER_LABEL:(e,t)=>({title:e.reorderLabel,tone:"move",body:J(e,y(h.REORDER_LABEL,t).after)}),ADD_STORY_LABEL:(e,t,a)=>{const s=y(h.ADD_STORY_LABEL,t).labelId;return{title:e.addStoryLabel,tone:"create",body:e.added(I(a,s)?.name??s)}},REMOVE_STORY_LABEL:(e,t,a)=>{const s=y(h.REMOVE_STORY_LABEL,t).labelId;return{title:e.removeStoryLabel,tone:"delete",body:e.removed(I(a,s)?.name??s)}}},Ce=(e,t,a,s)=>{let i;try{const n=ka[t.type];i=n?n(e,t,s??a):{title:t.type,tone:"meta"}}catch{i={title:t.type,tone:"meta"}}return{title:i.title,targetLabel:Ye(e,a,t.target),tone:i.tone,...i.body===void 0?{}:{summary:i.body}}},Be=e=>`${e.type} ${T(e.target)} ${JSON.stringify(e.payload)}`,Ye=(e,t,a)=>{try{switch(a.type){case"activity":{const s=U(t,a.id);return s?e.targetLabel(e.activityGroup,s.name):e.targetMissing(e.activityGroup,a.id)}case"step":{const s=$(t,a.id)?.step;return s?e.targetLabel(e.stepGroup,s.name):e.targetMissing(e.stepGroup,a.id)}case"story":{const s=S(t,a.id);return s?e.targetLabel(e.storyGroup,s.name):e.targetMissing(e.storyGroup,a.id)}case"milestone":{const s=N(t,a.id);return s?e.targetLabel(e.milestoneGroup,s.name):e.targetMissing(e.milestoneGroup,a.id)}case"status":{const s=_(t,a.id);return s?e.targetLabel(e.statusGroup,s.name):e.targetMissing(e.statusGroup,a.id)}case"label":{const s=I(t,a.id);return s?e.targetLabel(e.labelGroup,s.name):e.targetMissing(e.labelGroup,a.id)}case"page":return e.targetLabel(e.mapGroup,he(t));default:return`${a.type} \xB7 ${a.id}`}}catch{return`${a.type} \xB7 ${a.id}`}},Ue=(e,t,a)=>{const s=[{value:"page:usm",label:e.wholeMap,group:e.mapGroup}];for(const i of t.activities){s.push({value:T({type:"activity",id:i.id}),label:i.name,group:e.activityGroup});for(const n of i.steps)s.push({value:T({type:"step",id:ee(i.id,n.id)}),label:`${i.name} \u203A ${n.name}`,group:e.stepGroup})}for(const i of t.milestones)s.push({value:T({type:"milestone",id:i.id}),label:i.name,group:e.milestoneGroup});for(const i of t.statuses)s.push({value:T({type:"status",id:i.id}),label:i.name,group:e.statusGroup});for(const i of t.labels)s.push({value:T({type:"label",id:i.id}),label:i.name,group:e.labelGroup});for(const i of t.stories)s.push({value:T({type:"story",id:i.id}),label:i.name,group:e.storyGroup});return s},ze=(e,t,a)=>{const s=t.stories.find(i=>i.id===a.story);if(s)return{value:T({type:"story",id:s.id}),label:s.name,group:e.storyGroup};for(const i of t.activities){const n=i.steps.find(r=>r.id===a.step);if(n)return{value:T({type:"step",id:ee(i.id,n.id)}),label:n.name,group:e.stepGroup}}return null},he=e=>e.title??"User Story Mapping",xa=e=>{switch(e.type){case"story":return{tab:null,status:null};case"step":case"activity":return{tab:null,view:null};case"milestone":return{tab:"milestones"};case"status":return{tab:"statuses"};case"label":return{tab:"labels"};default:return null}},Pe=(e,t)=>{const a=$(e,t.step),s=a?.activity??U(e,t.activity)??e.activities[0],i=a?.step??s?.steps.find(c=>c.id===t.step)??s?.steps[0],n=S(e,t.story),r={...t};s?r.activity=s.id:delete r.activity,i?r.step=i.id:delete r.step,n?r.story=n.id:delete r.story,r.view=t.view==="group"?"group":"activity";const o=Me(e,re(e,t));o===null?delete r.status:r.status=o;const p=Re(t);return p==="map"?delete r.tab:r.tab=p,r},Ve=(e,t)=>{switch(t.type){case"activity":return U(e,t.id)!==void 0;case"step":return $(e,t.id)!==void 0;case"story":return S(e,t.id)!==void 0;case"milestone":return N(e,t.id)!==void 0;case"status":return _(e,t.id)!==void 0;case"label":return I(e,t.id)!==void 0;case"page":return!0;default:return!1}},Ge=e=>{const t=se(e);return{name:"usm",label:"User Story Mapping",parseBase:Se,emptyBase:we,actions:h,apply:Ee,canonicalState:pa,hasTarget:Ve,canonicalTarget:(a,s)=>{if(s.type!=="step")return s;const i=$(a,s.id);return i?{...s,id:ee(i.activity.id,i.step.id)}:s},describe:(a,s,i)=>Ce(t,a,s,i),serialize:Be,resolveNavigation:Pe,navigationFor:(a,s)=>xa(s),commentTargets:(a,s)=>Ue(t,a),currentTarget:(a,s)=>ze(t,a,s),title:he}},Sa={github:K`<path fill-rule="evenodd" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>`,gitlab:K`<path d="M8 15 1.2 9.9a.7.7 0 0 1-.25-.78L2.7 2.6a.35.35 0 0 1 .66 0L5.1 7.6h5.8l1.74-5a.35.35 0 0 1 .66 0l1.75 6.52a.7.7 0 0 1-.25.78z"></path>`,jira:K`<path d="M14.6 7.4 8.6 1.4 8 .8 3.5 5.3 1.4 7.4a.85.85 0 0 0 0 1.2l4.1 4.1L8 15.2l4.5-4.5.07-.07 2.03-2.03a.85.85 0 0 0 0-1.2zM8 9.9 5.9 8 8 5.9 10.1 8z"></path>`,linear:K`<path d="M1.2 9.4a6.9 6.9 0 0 0 5.4 5.4zM1 7.3l7.7 7.7a7 7 0 0 0 1.9-.5L1.5 5.4a7 7 0 0 0-.5 1.9zm1.2-3.1 9.6 9.6a7 7 0 0 0 1.2-1.1L3.3 3a7 7 0 0 0-1.1 1.2zM4.3 2.3a7 7 0 1 1 9.4 9.4z"></path>`,figma:K`<path d="M5.5 1h2.3v4.6H5.5a2.3 2.3 0 1 1 0-4.6zm2.3 0h2.3a2.3 2.3 0 1 1 0 4.6H7.8zm2.3 4.6a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6zM5.5 5.6h2.3v4.6H5.5a2.3 2.3 0 1 1 0-4.6zm0 4.6h2.3v2.3a2.3 2.3 0 1 1-2.3-2.3z"></path>`,notion:K`<path fill-rule="evenodd" d="M2.5 1.6 11 1c1 0 1.3.1 2 .6l2.1 1.5c.4.3.5.4.5.7v9.6c0 .7-.3 1.1-1.1 1.2l-9.4.6c-.6 0-.9-.1-1.2-.5L1.9 12c-.3-.5-.5-.8-.5-1.3V2.8c0-.6.3-1.1 1.1-1.2zM5 4.4v8.9l8.6-.5V4zm1 1.2 2.9-.2 3 4.7V5.6l-.8-.1v-.5l2-.1v.6l-.6.1v6.1l-.9.1-3.5-5.4v4.9l.8.2v.5l-2.3.1v-.5l.6-.2V6.4l-.8-.1z"></path>`},Fe=e=>e==="web"?Et():l`<svg class="link-mark" viewBox="0 0 16 16" aria-hidden="true">${Sa[e]}</svg>`,Ke=Z`
  .link-mark {
    fill: currentColor;
  }
  .link-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    max-width: 100%;
    padding: 1px 8px 1px 6px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink-soft);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    font-weight: 600;
    line-height: 18px;
    text-decoration: none;
    transition:
      color 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }
  .link-chip:hover {
    border-color: var(--dpk-ink-faint);
    color: var(--dpk-ink);
  }
  .link-chip:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  .link-chip svg {
    flex: none;
    width: 12px;
    height: 12px;
  }
  .link-chip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,D=e=>`--usm-tone: var(--dpk-${e==null||e==="gray"?"ink-faint":e})`,je={circle:M(Xt),lightbulb:M(ea),flag:M(Qt),play:M(Ht),clock:M(Zt),eye:M(Jt),pause:M(qt),check:M(Kt),x:M(Wt)},wa=M(jt),Ta=e=>{if(e>=1)return je.check();const t=2*Math.PI*4.5;return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    ${e>0?K`<circle
            class="si-pie"
            cx="12"
            cy="12"
            r="4.5"
            stroke-dasharray=${`${e*t} ${t}`}
            transform="rotate(-90 12 12)"
          ></circle>`:v}
  </svg>`},W=e=>{const t=e===void 0?wa():e.icon==="progress"?Ta(e.progress??1):je[e.icon]();return l`<span class="status-icon">${t}</span>`},qe=(e,t)=>e.length===0?v:l`<span class="status-bar" role="img" aria-label=${t}>
    ${e.map(a=>l`<span
          class="status-bar-part"
          data-status=${a.id}
          title=${`${a.name}: ${a.count}`}
          style=${`${D(a.tone)};flex-grow:${a.count}`}
        ></span>`)}
  </span>`,He=Z`
  .status-icon {
    display: block;
    flex: none;
    width: 16px;
    height: 16px;
    color: var(--usm-tone);
  }
  .status-icon svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  .status-icon .si-pie {
    stroke-width: 9;
  }
  .status-bar {
    display: flex;
    gap: 2px;
    height: 6px;
    min-width: 0;
  }
  .status-bar-part {
    min-width: 4px;
    border-radius: 3px;
    background: var(--usm-tone);
  }
  .status-bar-part[data-status=''] {
    background: color-mix(in srgb, var(--dpk-ink-faint) 30%, transparent);
  }
`,$a=3,Ea=Z`
  /*
   * The card wears its status's color the way a modern board does: a flat,
   * barely tinted face and a hairline edge in that hue, with a neutral, soft
   * elevation. Tints are mixed in OKLab so every hue stays clean instead of
   * turning muddy.
   */
  :host {
    --card-tone: var(--usm-tone, var(--dpk-ink-faint));
    position: relative;
    display: grid;
    gap: 8px;
    padding: 12px 13px;
    border: 1px solid color-mix(in oklab, var(--card-tone) 24%, var(--dpk-rule));
    border-radius: 12px;
    background: color-mix(in oklab, var(--card-tone) 6%, var(--dpk-paper-raised));
    box-shadow:
      0 1px 1px var(--dpk-shade-1),
      0 2px 6px -3px var(--dpk-shade-2);
    cursor: pointer;
    transition:
      box-shadow 180ms var(--dpk-ease),
      transform 180ms var(--dpk-ease),
      border-color 180ms var(--dpk-ease);
  }

  :host(:hover) {
    border-color: color-mix(in oklab, var(--card-tone) 45%, var(--dpk-rule));
    box-shadow:
      0 1px 2px var(--dpk-shade-1),
      0 8px 20px -10px var(--dpk-shade-3);
    transform: translateY(-1px);
  }

  :host([focused]) {
    border-color: var(--dpk-blue);
    box-shadow:
      0 0 0 3px color-mix(in oklab, var(--dpk-blue) 20%, transparent),
      0 8px 20px -10px var(--dpk-shade-3);
  }

  /* The card is the button that opens its story; the keyboard ring is the focused look. */
  :host(:focus-visible) {
    outline: none;
    border-color: var(--dpk-blue);
    box-shadow: var(--dpk-focus);
  }

  :host([dragging]) {
    opacity: 0.45;
    transform: none;
  }

  .card-head {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    min-width: 0;
  }

  .card-status {
    flex: none;
    display: inline-flex;
    margin-top: 1.5px;
  }

  .card-name {
    flex: 1 1 auto;
    min-width: 0;
    color: var(--dpk-ink);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  /* The description, rendered from Markdown and cut after three lines. */
  .card-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: var(--dpk-ink-soft);
    font-size: 12px;
    line-height: 1.55;
    overflow-wrap: anywhere;
  }

  .card-text > * {
    margin: 0;
  }

  /* A heading in the description reads as a line of the preview, not a title over the card. */
  .card-text :is(h1, h2, h3, h4, h5, h6) {
    font-size: inherit;
    font-weight: 650;
  }

  .card-text ul,
  .card-text ol {
    padding-left: 1.2em;
  }

  .card-text code {
    padding: 0 3px;
    border-radius: 4px;
    background: var(--dpk-paper-inset);
    font-family: var(--dpk-mono);
    font-size: 0.92em;
  }

  .card-text a {
    color: var(--dpk-blue);
  }

  /* Where the story sits and what was said about it. */
  .card-foot {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  .card-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 1px 7px;
    border-radius: 6px;
    background: color-mix(in oklab, var(--card-tone) 10%, var(--dpk-paper-sunken));
    color: var(--dpk-ink-soft);
    font-size: 10.5px;
    font-weight: 600;
    line-height: 18px;
  }

  .card-chip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-chip[data-kind='comments'] {
    margin-left: auto;
    background: transparent;
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-variant-numeric: tabular-nums;
  }

  .card-chip svg {
    flex: none;
    width: 12px;
    height: 12px;
  }

  /* The labels the story carries, each in its own color. */
  .card-labels {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-width: 0;
  }

  .label-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    max-width: 100%;
    padding: 0 7px;
    border: 1px solid color-mix(in oklab, var(--usm-tone) 35%, transparent);
    border-radius: 999px;
    background: color-mix(in oklab, var(--usm-tone) 12%, var(--dpk-paper-raised));
    color: var(--dpk-ink);
    font-size: 10.5px;
    font-weight: 600;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .label-chip::before {
    content: '';
    flex: none;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--usm-tone);
  }

  .card-links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-width: 0;
  }

  .card-links .link-chip {
    border-color: color-mix(in oklab, var(--card-tone) 16%, var(--dpk-rule));
    background: var(--dpk-paper-raised);
  }
`;class La extends Lt{static{this.styles=[At,He,Ke,Ea]}static{this.properties={story:{attribute:!1},stepName:{attribute:!1},statuses:{attribute:!1},labels:{attribute:!1},notes:{attribute:!1},focused:{type:Boolean,reflect:!0},dragging:{type:Boolean,reflect:!0}}}#a=new _t(this);constructor(){super(),this.story=null,this.stepName="",this.statuses=[],this.labels=[],this.notes=[],this.focused=!1,this.dragging=!1}render(){const t=this.story;if(!t)return v;const a=se(this.#a.locale),s=this.stepName!==""||this.notes.length>0;return l`
      <div class="card-head">
        ${this.statuses.length===0?v:this.#e(a,t)}
        <div class="card-name"><span>${t.name}</span></div>
      </div>
      ${t.description?l`<div class="card-text" @click=${_a}>${It(Rt(t.description))}</div>`:v}
      ${this.labels.length>0?Aa(this.labels):v}
      ${t.links&&t.links.length>0?this.#t(t.links):v}
      ${s?l`<div class="card-foot">
              ${this.stepName===""?v:l`<span class="card-chip" data-kind="step"><span>${this.stepName}</span></span>`}
              ${this.notes.length>0?l`<span
                      class="card-chip"
                      data-kind="comments"
                      aria-label=${a.commentCountAria(this.notes.length)}
                    >
                      ${Dt()}<span>${this.notes.length}</span>
                    </span>`:v}
            </div>`:v}
    `}#e(t,a){const s=De(this.statuses,a);if(!s)return v;const i=s.name;return l`<span class="card-status" role="img" aria-label=${t.storyStatusAria(i)} title=${i}>
      ${W(s)}
    </span>`}#t(t){const a=t.slice(0,$a);return l`<div class="card-links">
      ${a.map(s=>{const i=ie(s.url);return l`<a
          class="link-chip"
          data-kind=${i.kind}
          href=${s.url}
          target="_blank"
          rel="noopener noreferrer"
          title=${s.label??i.title}
          draggable="false"
          tabindex="-1"
          @click=${n=>n.stopPropagation()}
          >${Fe(i.kind)}<span>${s.label??i.text}</span></a
        >`})}
      ${t.length>a.length?l`<span class="link-chip">+${t.length-a.length}</span>`:v}
    </div>`}}const Aa=e=>l`<div class="card-labels">
  ${e.map(t=>l`<span class="label-chip" data-label=${t.id} style=${D(t.tone)}>${t.name}</span>`)}
</div>`,_a=e=>{e.target instanceof Element&&e.target.closest("a")&&e.stopPropagation()},Ia=()=>{customElements.get("dpk-internal-usm-story-card")||customElements.define("dpk-internal-usm-story-card",La)},Ra=(e,t,a)=>{const s=e.at(-1)??null;if(t===null||a==="end")return s;const i=e.indexOf(t);return i<0?s:a==="after"?t:i===0?null:e.at(i-1)??null},We=(e,t,a,s,i)=>{const n=te(e,t.stepId,t.milestoneId).map(r=>r.id);return{type:"MOVE_STORY",target:{type:"story",id:a},payload:{activityId:t.activityId,stepId:t.stepId,milestoneId:t.milestoneId??null,after:le(n,a,s,i)}}},Xe=(e,t,a,s,i,n)=>{const r=S(e,s);if(!r||r.activityId!==t)return null;const o=Te(e,t,a).map(p=>p.id);return{type:"MOVE_STORY",target:{type:"story",id:s},payload:{activityId:t,stepId:r.stepId,milestoneId:a??null,after:le(o,s,i,n)}}},Ze=(e,t,a,s,i)=>{const n=te(e,s,i).filter(r=>r.id!==t);return{type:"MOVE_STORY",target:{type:"story",id:t},payload:{activityId:a,stepId:s,milestoneId:i??null,after:n.at(-1)?.id??null}}},Je=(e,t,a,s)=>e.includes(t)?{type:"REORDER_MILESTONE",target:{type:"milestone",id:t},payload:{after:le(e,t,a,s)}}:null,Da=e=>{const t=e.stories.length;return{rows:e.labels.map((s,i)=>{const n=e.stories.filter(r=>r.labelIds?.includes(s.id)).length;return{id:s.id,name:s.name,tone:s.tone,previousId:e.labels[i-1]?.id??null,nextId:e.labels[i+1]?.id??null,storyCount:n,share:t===0?0:n/t}})}},Oa=e=>{const t=e.stories.length,a=ue(e);return e.milestones.map((s,i)=>{const n=e.stories.filter(o=>o.milestoneId===s.id),r=new Set(n.map(o=>o.stepId));return{id:s.id,ordinal:i+1,name:s.name,timeframe:s.timeframe?.trim()??"",description:s.description?.trim()??"",storyCount:n.length,share:t===0?0:n.length/t,coverage:{covered:a.filter(({step:o})=>r.has(o.id)).length,total:a.length},progress:Oe(e,n)}})},Qe=(e,t)=>{const a=j("new-activity",G(t.state));if(!t.dispatch({type:"ADD_ACTIVITY",target:{type:"page",id:"usm"},payload:{id:a,name:e.newActivityName}}).ok)return;const i=j("new-step",[...G(t.state),a]);t.dispatch({type:"ADD_STEP",target:{type:"activity",id:a},payload:{id:i,name:e.newStepName}}),t.navigate({activity:a,step:null,story:null})},Ma=(e,t,a)=>{const s=j("new-step",G(t.state));t.dispatch({type:"ADD_STEP",target:{type:"activity",id:a},payload:{id:s,name:e.newStepName}})},et=(e,t)=>{const a=j("new-milestone",G(t.state));t.dispatch({type:"ADD_MILESTONE",target:{type:"page",id:"usm"},payload:{id:a,name:e.newMilestoneName}})},tt=(e,t,a,s,i)=>{const n=j("new-story",G(t.state));t.dispatch({type:"ADD_STORY",target:{type:"step",id:s},payload:{id:n,name:e.newStoryName,activityId:a,...i===void 0?{}:{milestoneId:i}}}).ok&&t.navigate({activity:a,step:s,story:n})},Na=(e,t)=>{const a=j("new-status",G(t.state));t.dispatch({type:"ADD_STATUS",target:{type:"page",id:"usm"},payload:{id:a,name:e.newStatusName,tone:ce(t.state.statuses.length)}})},Ca=(e,t)=>{const a=j("new-label",G(t.state));t.dispatch({type:"ADD_LABEL",target:{type:"page",id:"usm"},payload:{id:a,name:e.newLabelName,tone:xe(t.state.labels.length)}})},at=(e,t)=>{const a=s=>t.stories.filter(i=>i.milestoneId===s).length;return[...t.milestones.map(({id:s,name:i,timeframe:n})=>({id:s,name:i,timeframe:n?.trim()??"",storyCount:a(s)})),{id:void 0,name:e.unassigned,timeframe:"",storyCount:a(void 0)}]},Ba=(e,t)=>l`
    <div class="empty">
      <h2>${e.emptyTitle}</h2>
      <p>${e.emptyBody}</p>
      <button class="dpk-btn dpk-btn--accent" type="button" @click=${()=>Qe(e,t)}>
        ${e.firstActivityButton}
      </button>
    </div>
  `,Ya=e=>{const{m:t,context:a}=e,s=ue(a.state);return s.length===0?Ba(t,a):l`${Ua(t,a)}
  ${st(a)==="activity"?Pa(e,s):Va(e)}`},Ua=(e,t)=>{const{state:a}=t;if(a.statuses.length===0)return v;const s=re(a,t.navigation),i=ne(a),n=o=>a.stories.filter(p=>p.statusId===o).length,r=o=>{const p=o.id,c=s.has(p);return l`<a
      class="filter-chip"
      role="checkbox"
      data-status=${p}
      aria-checked=${String(c)}
      style=${D(o.tone)}
      href=${t.hashFor({status:Me(a,ya(s,p))})}
      >${W(o)}<span class="filter-name" title=${o.name}>${o.name}</span
      ><span class="filter-count">${n(p)}</span></a
    >`};return l`<div class="map-toolbar" role="group" aria-label=${e.statusFilterLabel} data-testid="usm-status-filter">
    <span class="filter-label">${e.statusFilterLabel}</span>
    ${i.map(r)}
    ${s.size===0?v:l`<a class="filter-clear" href=${t.hashFor({status:null})}>${e.clearFilter}</a>`}
  </div>`},st=e=>e.navigation.view==="group"?"group":"activity",za=(e,t)=>{const a=st(t);return l`<div class="segmented view-tabs" role="tablist" aria-label=${e.groupingLabel}>
    ${it(t,"activity",a,e.activityGroup)}
    ${it(t,"group",a,e.groupViewTab)}
  </div>`},it=(e,t,a,s)=>{const i=t===a;return l`<a
    class="tab"
    role="tab"
    data-current=${String(i)}
    aria-selected=${i?"true":"false"}
    href=${e.hashFor({view:t})}
    >${s}</a
  >`},Pa=(e,t)=>{const{m:a,context:s}=e,{state:i}=s,n=at(a,i);return l`
    <div class="map-scroll">
      <div class="map" style=${`--cols:${t.length+1}`} data-testid="usm-map">
        <div class="map-head">
          <div class="map-row">
            <div class="corner">
              <span class="dpk-label">${a.groupAxisHeader}</span>
            </div>
            ${A(i.activities,r=>r.id,r=>rt(a,s,r.id,`grid-column: span ${Math.max(r.steps.length,1)}`))}
            ${ot(a,s)}
          </div>
          <div class="map-row">
            ${nt(a)}
            ${A(t,({activity:r,step:o})=>`${r.id}.${o.id}`,({activity:r,step:o})=>l`
                <div
                  class="col-head"
                  data-current=${String(s.navigation.step===o.id)}
                  data-dpk-target=${T({type:"step",id:ee(r.id,o.id)})}
                >
                  <h4>
                    <dpk-component-inline-edit
                      .value=${o.name}
                      .label=${a.stepNameLabel}
                      @dpk-commit=${Y(p=>s.dispatch({type:"SET_STEP_NAME",target:{type:"step",id:o.id},payload:{name:p}}))}
                      @click=${p=>p.stopPropagation()}
                    ></dpk-component-inline-edit>
                  </h4>
                  <span class="count">${$e(i,o.id)}</span>
                </div>
              `)}
            <div class="corner"><span class="dpk-label">—</span></div>
          </div>
        </div>
        ${A(n,r=>r.id,r=>dt(e,r,l`${A(t,({activity:o,step:p})=>`${o.id}.${p.id}`,({activity:o,step:p})=>Fa(e,{activityId:o.id,stepId:p.id,milestoneId:r.id}))}`))}
        ${lt(a,s,t.length)}
      </div>
    </div>
  `},Va=e=>{const{m:t,context:a}=e,{state:s}=a,i=at(t,s);return l`
    <div class="map-scroll">
      <div class="map" style=${`--cols:${s.activities.length+1}`} data-testid="usm-map-group">
        <div class="map-head">
          <div class="map-row">
            ${nt(t)}
            ${A(s.activities,n=>n.id,n=>rt(t,a,n.id,void 0,!0))}
            ${ot(t,a)}
          </div>
        </div>
        ${A(i,n=>n.id,n=>dt(e,n,l`${A(s.activities,r=>r.id,r=>Ka(e,r.id,n.id))}`))}
        ${lt(t,a,s.activities.length)}
      </div>
    </div>
  `},nt=e=>l`<div class="corner">
    <span class="dpk-label">${e.activityAxis}</span>
    <span class="dpk-label">${e.milestoneAxis}</span>
  </div>`,rt=(e,t,a,s,i=!1)=>{const{state:n}=t,r=n.activities.find(c=>c.id===a);if(!r)return l`<div class="act-head"></div>`;const o=n.stories.filter(c=>c.activityId===r.id),p=Oe(n,o);return l`
    <div
      class="act-head"
      style=${s??""}
      data-activity=${r.id}
      data-dpk-target=${T({type:"activity",id:r.id})}
    >
      <div class="act-title">
        <dpk-component-inline-edit
          .value=${r.name}
          .label=${e.activityNameLabel}
          @dpk-commit=${Y(c=>t.dispatch({type:"SET_ACTIVITY_NAME",target:{type:"activity",id:r.id},payload:{name:c}}))}
        ></dpk-component-inline-edit>
        <span class="count">${o.length}</span>
        <button
          class="dpk-icon-btn"
          type="button"
          aria-label=${e.addStepAria}
          @click=${()=>Ma(e,t,r.id)}
        >
          ${Ot()}
        </button>
      </div>
      <div class="act-meta">
        <span class="act-actor" data-empty=${String(r.actor===void 0)}>
          <dpk-component-inline-edit
            truncate
            .value=${r.actor??""}
            .label=${e.activityActorLabel}
            .placeholder=${e.activityActorLabel}
            @dpk-commit=${Y(c=>t.dispatch({type:"SET_ACTIVITY_ACTOR",target:{type:"activity",id:r.id},payload:{actor:c}}))}
          ></dpk-component-inline-edit>
        </span>
        ${qe(p,e.progressAria(p.map(c=>`${c.name} ${c.count}`).join(", ")))}
      </div>
      ${i&&r.steps.length>0?l`<ol class="act-steps">
              ${r.steps.map(c=>l`<li>${c.name}</li>`)}
            </ol>`:v}
    </div>
  `},ot=(e,t)=>l`<div class="act-head">
    <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>Qe(e,t)}>
      ${e.newActivityButton}
    </button>
  </div>`,lt=(e,t,a)=>l`<div class="map-row">
    <div class="row-lead">
      <div class="row-head">
        <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>et(e,t)}>
          ${e.newMilestoneButton}
        </button>
      </div>
    </div>
    ${Array.from({length:a+1},()=>l`<div class="cell"></div>`)}
  </div>`,dt=(e,t,a)=>{const{m:s,context:i,drag:n,handlers:r}=e,o=t.id;if(o===void 0)return l`<div
      class="map-row"
      data-unassigned="true"
      data-draggable="false"
      data-row-dragging="false"
      data-row-drop="false"
    >
      <div class="row-lead">
        <div class="row-head" data-milestone="" draggable="false"><span>${t.name}</span></div>
        ${pt(s,t)}
      </div>
      ${a}
      <div class="cell"></div>
    </div>`;const p=Ga(s,i,o,t.name),c=`row:${o}`,d=n.target({key:c,accepts:"milestone",hovered:qa,onDrop:R=>r.dropOnMilestoneRow(o,R)}),x=n.source({type:"milestone",id:o});return l`
    <div
      class="map-row"
      data-draggable="true"
      data-row-dragging=${String(n.isDragging("milestone",o))}
      data-row-drop=${String(n.isOver(c))}
      @dragenter=${d.dragenter}
      @dragover=${d.dragover}
      @dragleave=${d.dragleave}
      @drop=${d.drop}
    >
      <div class="row-lead">
        <div
          class="row-head"
          data-milestone=${o}
          data-dpk-target=${T({type:"milestone",id:o})}
          draggable="true"
          @dragstart=${R=>{ja(R),x.dragstart(R)}}
          @dragend=${x.dragend}
        >
          <span class="row-grip" aria-hidden="true">${Mt()}</span>${p}
        </div>
        ${pt(s,t)}
      </div>
      ${a}
      <div class="cell"></div>
    </div>
  `},pt=(e,t)=>l`<div class="row-meta">
    ${t.timeframe===""?v:l`<span class="row-timeframe">${t.timeframe}</span>`}
    <span class="row-count">${e.storyCount(t.storyCount)}</span>
  </div>`,Ga=(e,t,a,s)=>l`<dpk-component-inline-edit
    draggable="false"
    .value=${s}
    .label=${e.milestoneNameLabel}
    @dpk-commit=${Y(i=>t.dispatch({type:"SET_MILESTONE_NAME",target:{type:"milestone",id:a},payload:{name:i}}))}
  ></dpk-component-inline-edit>`,Fa=(e,t)=>{const{m:a,context:s,drag:i,handlers:n}=e,r=re(s.state,s.navigation),o=te(s.state,t.stepId,t.milestoneId).filter(d=>Ne(r,d)),p=`cell:${t.stepId}:${t.milestoneId??""}`,c=i.target({key:p,accepts:"story",hovered:ut,onDrop:d=>n.dropOnCell(t,d)});return l`
    <div
      class="cell"
      data-step=${t.stepId}
      data-milestone=${t.milestoneId??""}
      data-drop=${String(i.isOver(p))}
      @dragenter=${c.dragenter}
      @dragover=${c.dragover}
      @dragleave=${c.dragleave}
      @drop=${c.drop}
    >
      <div class="card-list" data-testid=${`cell-${t.stepId}-${t.milestoneId??"unassigned"}`}>
        ${A(o,d=>d.id,d=>ct(e,d,""))}
      </div>
      <button
        class="dpk-btn dpk-btn--ghost add-cell"
        type="button"
        title=${a.addStoryCellAria}
        @click=${()=>tt(a,s,t.activityId,t.stepId,t.milestoneId)}
      >
        ${a.addCellButton}
      </button>
    </div>
  `},Ka=(e,t,a)=>{const{m:s,context:i,drag:n,handlers:r}=e,{state:o}=i,p=re(o,i.navigation),c=Te(o,t,a).filter(w=>Ne(p,w)),d=o.activities.find(w=>w.id===t)?.steps??[],x=d[0],R=w=>d.find(ft=>ft.id===w)?.name??"",k=`group:${t}:${a??""}`,E=n.target({key:k,accepts:"story",hovered:ut,onDrop:w=>r.dropOnGroupCell(t,a,w)});return l`
    <div
      class="cell"
      data-activity=${t}
      data-milestone=${a??""}
      data-drop=${String(n.isOver(k))}
      @dragenter=${E.dragenter}
      @dragover=${E.dragover}
      @dragleave=${E.dragleave}
      @drop=${E.drop}
    >
      <div class="card-list" data-testid=${`group-cell-${t}-${a??"unassigned"}`}>
        ${A(c,w=>w.id,w=>ct(e,w,R(w.stepId)))}
      </div>
      ${x?l`<button
              class="dpk-btn dpk-btn--ghost add-cell"
              type="button"
              aria-label=${s.addStoryCellAria}
              @click=${()=>tt(s,i,t,x.id,a)}
            >
              ${s.addCellButton}
            </button>`:v}
    </div>
  `},ct=(e,t,a)=>{const{context:s,drag:i,handlers:n}=e,r=ne(s.state),o=s.comments.filter(c=>c.target.type==="story"&&c.target.id===t.id),p=i.source({type:"story",id:t.id});return l`<dpk-internal-usm-story-card
    data-story=${t.id}
    data-status=${t.statusId??""}
    data-dpk-target=${T({type:"story",id:t.id})}
    draggable="true"
    tabindex="0"
    role="button"
    aria-haspopup="dialog"
    aria-label=${t.name}
    style=${D(De(r,t)?.tone)}
    .story=${t}
    .stepName=${a}
    .statuses=${r}
    .labels=${da(s.state,t)}
    .notes=${o}
    @click=${()=>n.selectStory(t.id)}
    @keydown=${c=>{c.composedPath()[0]!==c.currentTarget||c.key!=="Enter"&&c.key!==" "||(c.preventDefault(),n.selectStory(t.id))}}
    ?focused=${s.navigation.story===t.id}
    ?dragging=${i.isDragging("story",t.id)}
    @dragstart=${p.dragstart}
    @dragend=${p.dragend}
  ></dpk-internal-usm-story-card>`},ut=e=>{const t=e.target instanceof Element?e.target.closest("dpk-internal-usm-story-card"):null;return t?{id:t.getAttribute("data-story"),element:t}:null},ja=e=>{const a=(e.currentTarget instanceof Element?e.currentTarget:null)?.closest(".map-row");if(!a||!e.dataTransfer)return;const s=a.getBoundingClientRect();e.dataTransfer.setDragImage(a,e.clientX-s.left,e.clientY-s.top)},qa=e=>{const t=e.target instanceof Element?e.target.closest(".map-row"):null,a=t?.querySelector(".row-head[data-milestone]");if(!t||!a)return null;const s=a.getAttribute("data-milestone");return{id:s===""?null:s,element:t}},Ha=(e,t,a,s)=>l`
    <section class="st-overview" data-testid="usm-statuses">
      ${a.rows.length===0?l`<div class="empty">
              <h2>${e.noStatusesTitle}</h2>
              <p>${e.noStatusesBody}</p>
            </div>`:v}
      <ol class="st-list">
        ${A(a.rows,i=>i.id,i=>Wa(e,t,i,s))}
      </ol>
      <div>
        <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>Na(e,t)}>
          ${e.newStatusButton}
        </button>
      </div>
    </section>
  `,Wa=(e,t,a,s)=>{const i=s.openFor===a.id,n={type:"status",id:a.id},r=o=>{t.dispatch({type:"REORDER_STATUS",target:n,payload:{after:o}})};return l`
    <li class="st-row" data-status=${a.id} data-dpk-target=${T(n)} style=${D(a.tone)}>
      <button
        class="st-icon-trigger"
        type="button"
        data-icon-trigger=${a.id}
        aria-haspopup="menu"
        aria-expanded=${String(i)}
        aria-label=${`${e.statusIconLabel}: ${e.iconName(a.icon)}`}
        title=${e.iconName(a.icon)}
        @click=${()=>s.toggle(a.id)}
      >
        ${W(a)}
      </button>
      ${i?Xa(e,t,a,s):v}
      <span class="st-name">
        <dpk-component-inline-edit
          .value=${a.name}
          .label=${e.statusNameLabel}
          @dpk-commit=${Y(o=>t.dispatch({type:"SET_STATUS_NAME",target:n,payload:{name:o}}))}
        ></dpk-component-inline-edit>
      </span>
      ${ht(e,a.storyCount,a.share)}
      ${mt(e,a.tone,o=>t.dispatch({type:"SET_STATUS_TONE",target:n,payload:{tone:o}}))}
      ${gt(e,{ids:t.state.statuses.map(o=>o.id),row:a,deleteLabel:e.deleteStatusAria,reorder:r,remove:()=>t.dispatch({type:"DELETE_STATUS",target:n,payload:{}})})}
    </li>
  `},Xa=(e,t,a,s)=>l`<div
  id="icon-menu"
  class="comment-pop icon-menu"
  popover="manual"
  role="menu"
  aria-label=${e.statusIconLabel}
  style=${D(a.tone)}
  @keydown=${i=>{i.key==="Escape"&&(i.preventDefault(),s.close())}}
>
  ${ke.map(i=>l`<button
      class="icon-option"
      type="button"
      role="menuitemradio"
      data-icon=${i}
      title=${e.iconName(i)}
      aria-label=${e.iconName(i)}
      aria-checked=${String(i===a.icon)}
      @click=${()=>{i!==a.icon&&t.dispatch({type:"SET_STATUS_ICON",target:{type:"status",id:a.id},payload:{icon:i}}),s.close()}}
    >
      ${W({icon:i,progress:a.progress})}
    </button>`)}
</div>`,mt=(e,t,a)=>l`<span class="st-tones" role="radiogroup" aria-label=${e.statusToneLabel}>
  ${Q.map(s=>l`<button
      class="st-tone"
      type="button"
      role="radio"
      data-tone=${s}
      style=${D(s)}
      title=${e.toneName(s)}
      aria-label=${e.toneName(s)}
      aria-checked=${s===t?"true":"false"}
      @click=${()=>{s!==t&&a(s)}}
    ></button>`)}
</span>`,gt=(e,t)=>l`<span class="st-tools">
  <button
    class="dpk-icon-btn"
    type="button"
    aria-label=${e.moveUpAria}
    ?disabled=${t.row.previousId===null}
    @click=${()=>t.reorder(Za(t.ids,t.row.previousId))}
  >
    ↑
  </button>
  <button
    class="dpk-icon-btn"
    type="button"
    aria-label=${e.moveDownAria}
    ?disabled=${t.row.nextId===null}
    @click=${()=>t.reorder(t.row.nextId)}
  >
    ↓
  </button>
  <button class="dpk-icon-btn" type="button" data-role="delete" aria-label=${t.deleteLabel} @click=${t.remove}>
    ${ve()}
  </button>
</span>`,Za=(e,t)=>{const a=t===null?-1:e.indexOf(t);return a<=0?null:e[a-1]??null},ht=(e,t,a)=>l`
  <span class="st-share">
    <span class="st-share-text">${e.statusShare(t,Math.round(a*100))}</span>
    <span class="st-meter" aria-hidden="true"><span style=${`width:${a*100}%`}></span></span>
  </span>
`,Ja=(e,t,a)=>l`
    <section class="st-overview" data-testid="usm-labels">
      ${a.rows.length===0?l`<div class="empty">
              <h2>${e.noLabelsTitle}</h2>
              <p>${e.noLabelsBody}</p>
            </div>`:v}
      <ol class="st-list">
        ${A(a.rows,s=>s.id,s=>Qa(e,t,s))}
      </ol>
      <div>
        <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>Ca(e,t)}>
          ${e.newLabelButton}
        </button>
      </div>
    </section>
  `,Qa=(e,t,a)=>{const s={type:"label",id:a.id};return l`
    <li class="st-row" data-label=${a.id} data-dpk-target=${T(s)} style=${D(a.tone)}>
      <span class="label-swatch" aria-hidden="true"></span>
      <span class="st-name">
        <dpk-component-inline-edit
          .value=${a.name}
          .label=${e.labelNameLabel}
          @dpk-commit=${Y(i=>t.dispatch({type:"SET_LABEL_NAME",target:s,payload:{name:i}}))}
        ></dpk-component-inline-edit>
      </span>
      ${ht(e,a.storyCount,a.share)}
      ${mt(e,a.tone,i=>t.dispatch({type:"SET_LABEL_TONE",target:s,payload:{tone:i}}))}
      ${gt(e,{ids:t.state.labels.map(i=>i.id),row:a,deleteLabel:e.deleteLabelAria,reorder:i=>t.dispatch({type:"REORDER_LABEL",target:s,payload:{after:i}}),remove:()=>t.dispatch({type:"DELETE_LABEL",target:s,payload:{}})})}
    </li>
  `},es=(e,t,a)=>l`
    <section class="ms-overview" data-testid="usm-milestones">
      ${a.length===0?l`<div class="empty">
              <h2>${e.noMilestonesTitle}</h2>
              <p>${e.noMilestonesBody}</p>
            </div>`:v}
      <ol class="ms-timeline">
        ${A(a,s=>s.id,s=>ts(e,t,s))}
        <li class="ms-add">
          <span class="ms-when" aria-hidden="true"></span>
          <span class="ms-rail" aria-hidden="true"><span class="ms-node ms-node--add"></span></span>
          <div class="ms-body">
            <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>et(e,t)}>
              ${e.newMilestoneButton}
            </button>
          </div>
        </li>
      </ol>
    </section>
  `,ts=(e,t,a)=>{const s=a.id;return l`
    <li class="ms-entry" data-milestone-card=${s} data-dpk-target=${T({type:"milestone",id:s})}>
      <div class="ms-when">
        ${a.timeframe===""?l`<span class="ms-timeframe" data-empty="true">${e.timeframeUnset}</span>`:l`<span class="ms-timeframe">${a.timeframe}</span>`}
      </div>
      <span class="ms-rail" aria-hidden="true"><span class="ms-node">${a.ordinal}</span></span>
      <article class="ms-body">
        <h3 class="ms-name">
          <dpk-component-inline-edit
            .value=${a.name}
            .label=${e.milestoneNameLabel}
            @dpk-commit=${Y(i=>t.dispatch({type:"SET_MILESTONE_NAME",target:{type:"milestone",id:s},payload:{name:i}}))}
          ></dpk-component-inline-edit>
        </h3>
        ${a.description===""?l`<p class="ms-description" data-empty="true">${e.milestoneNoDescription}</p>`:l`<p class="ms-description">${a.description}</p>`}
        <dl class="ms-facts">
          <div>
            <dt>${e.storiesLabel}</dt>
            <dd>
              <strong>${a.storyCount}</strong>
              <span>${e.shareOfStories(Math.round(a.share*100))}</span>
            </dd>
          </div>
          <div>
            <dt>${e.coverageLabel}</dt>
            <dd>
              <strong>${e.coverage(a.coverage.covered,a.coverage.total)}</strong>
              <span class="ms-meter" aria-hidden="true">
                <span
                  style=${`width:${a.coverage.total===0?0:a.coverage.covered/a.coverage.total*100}%`}
                ></span>
              </span>
            </dd>
          </div>
        </dl>
        ${a.progress.length===0?v:as(e,a)}
      </article>
    </li>
  `},as=(e,t)=>l`
  <div class="ms-breakdown">
    ${qe(t.progress,e.progressAria(t.progress.map(a=>`${a.name} ${a.count}`).join(", ")))}
    <ul class="ms-legend" aria-hidden="true">
      ${t.progress.map(a=>l`<li data-status=${a.id} style=${D(a.tone)}>
            ${W(a)}
            <span class="ms-breakdown-name">${a.name}</span>
            <span class="ms-breakdown-count">${a.count}</span>
          </li>`)}
    </ul>
  </div>
`,ss=(e,t,a,s)=>{if(a.kind!=="picking-step")return v;const i=S(t.state,a.storyId),n=U(t.state,a.activityId);if(!i||!n)return v;const r=n.steps[0]?.id;return l`<div class="comment-pop move-dialog" id="move-dialog" popover="manual">
    <span class="dpk-label">${e.moveDialogLabel}</span>
    <select class="dpk-select" aria-label=${e.moveDialogSelectLabel} data-move-dialog>
      ${n.steps.map(o=>l`<option value=${o.id} ?selected=${o.id===r}>${o.name}</option>`)}
    </select>
    <div class="pop-actions">
      <button
        class="dpk-btn dpk-btn--accent"
        type="button"
        @click=${o=>{const c=(Nt(o.currentTarget,HTMLElement)?.closest("#move-dialog")??null)?.querySelector("select")?.value??r;c?s.confirm(c):s.cancel()}}
      >
        ${e.moveConfirm}
      </button>
      <button class="dpk-btn" type="button" @click=${s.cancel}>${e.moveCancel}</button>
    </div>
  </div>`},is=(e,t,a)=>{const{state:s}=t;return l`
    <div class="board-bar">
      <div class="page-tabs" role="tablist" aria-label=${e.pageTabsLabel}>
        ${oe(t,"map",a,e.mapTab,s.stories.length)}
        ${oe(t,"milestones",a,e.milestonesTab,s.milestones.length)}
        ${oe(t,"statuses",a,e.statusesTab,s.statuses.length)}
        ${oe(t,"labels",a,e.labelsTab,s.labels.length)}
      </div>
      ${a==="map"&&s.activities.some(i=>i.steps.length>0)?za(e,t):v}
    </div>
  `},oe=(e,t,a,s,i)=>l`<a
    role="tab"
    data-tab=${t}
    aria-selected=${t===a?"true":"false"}
    href=${e.hashFor({tab:t==="map"?null:t})}
    >${s}<span class="page-tab-count">${i}</span></a
  >`,ns=e=>S(e.state,e.navigation.story),rs=(e,t,a)=>{const{state:s}=t,i={type:"story",id:a.id},n=()=>t.navigate({story:null}),r=$(s,`${a.activityId}.${a.stepId}`),o=N(s,a.milestoneId);return l`<aside
    class="story-panel"
    role="dialog"
    aria-label=${e.panelLabel(a.name)}
    data-testid="usm-story-panel"
    data-story=${a.id}
    tabindex="-1"
  >
    <header class="sp-head">
      <span class="sp-where">
        ${r?l`<span>${r.activity.name}</span><span>${r.step.name}</span>`:v}
        <span>${o?.name??e.unassigned}</span>
      </span>
      <button class="dpk-icon-btn" type="button" data-role="close" aria-label=${e.closePanelAria} @click=${n}>
        ${fe()}
      </button>
    </header>
    <div class="sp-body">
      <h2 class="sp-title">
        <dpk-component-inline-edit
          wrap
          .value=${a.name}
          .label=${e.storyTitleLabel}
          @dpk-commit=${Y(p=>t.dispatch({type:"SET_STORY_NAME",target:i,payload:{name:p}}))}
        ></dpk-component-inline-edit>
      </h2>
      ${s.statuses.length===0?v:os(e,t,a)}
      ${ls(e,t,a)}
      <section class="sp-field">
        <h3>${e.storyDescriptionLabel}</h3>
        <dpk-component-inline-edit
          multiline
          markdown
          class="sp-description"
          .value=${a.description??""}
          .label=${e.storyDescriptionLabel}
          @dpk-commit=${Y(p=>t.dispatch({type:"SET_STORY_DESCRIPTION",target:i,payload:{description:p}}))}
        ></dpk-component-inline-edit>
      </section>
      ${ds(e,t,a)} ${ps(e,t,a)}
    </div>
    <footer class="sp-foot">
      <button
        class="dpk-btn dpk-btn--ghost sp-delete"
        type="button"
        @click=${()=>{t.dispatch({type:"DELETE_STORY",target:i,payload:{}}).ok&&n()}}
      >
        ${ve()}<span>${e.deleteStoryButton}</span>
      </button>
    </footer>
  </aside>`},os=(e,t,a)=>{const s=ne(t.state),i=a.statusId;return l`<section class="sp-field">
    <h3 id="sp-status-label">${e.storyStatusLabel}</h3>
    <div class="sp-statuses" role="radiogroup" aria-labelledby="sp-status-label">
      ${s.map(n=>l`<button
          class="sp-status"
          type="button"
          role="radio"
          data-status=${n.id}
          aria-checked=${String(n.id===i)}
          style=${D(n.tone)}
          @click=${()=>{n.id!==i&&t.dispatch({type:"SET_STORY_STATUS",target:{type:"story",id:a.id},payload:{statusId:n.id}})}}
        >
          ${W(n)}<span>${n.name}</span>
        </button>`)}
    </div>
  </section>`},ls=(e,t,a)=>{const s={type:"story",id:a.id},i=new Set(a.labelIds??[]);return l`<section class="sp-field">
    <h3 id="sp-labels-label" class="sp-field-head">
      <span>${e.storyLabelsLabel}</span>
      <a class="sp-manage" href=${t.hashFor({tab:"labels",story:null})}>${e.manageLabels}</a>
    </h3>
    ${t.state.labels.length===0?l`<p class="sp-empty">${e.storyNoLabels}</p>`:l`<div class="sp-labels" role="group" aria-labelledby="sp-labels-label">
            ${t.state.labels.map(n=>{const r=i.has(n.id);return l`<button
                class="sp-label"
                type="button"
                data-label=${n.id}
                aria-pressed=${String(r)}
                style=${D(n.tone)}
                @click=${()=>t.dispatch({type:r?"REMOVE_STORY_LABEL":"ADD_STORY_LABEL",target:s,payload:{labelId:n.id}})}
              >
                <span class="sp-label-dot" aria-hidden="true"></span><span>${n.name}</span>
              </button>`})}
          </div>`}
  </section>`},ds=(e,t,a)=>{const s={type:"story",id:a.id},i=a.links??[],n=r=>{r.preventDefault();const o=r.currentTarget instanceof HTMLFormElement?r.currentTarget:null,p=o?.querySelector("input");if(!o||!p)return;const c=p.value.trim();if(!Bt(pe,c).success){p.setAttribute("aria-invalid","true");return}t.dispatch({type:"ADD_STORY_LINK",target:s,payload:{url:c}}).ok&&(p.removeAttribute("aria-invalid"),o.reset())};return l`<section class="sp-field">
    <h3>${e.storyLinksLabel}</h3>
    ${i.length===0?v:l`<ul class="sp-links">
            ${i.map(r=>{const o=ie(r.url),p=r.label??o.text;return l`<li data-kind=${o.kind}>
                <a class="sp-link" href=${r.url} target="_blank" rel="noopener noreferrer" title=${r.url}>
                  ${Fe(o.kind)}
                  <span class="sp-link-text">${p}</span>
                  <span class="sp-link-url">${o.title===p?r.url:o.title}</span>
                </a>
                <button
                  class="dpk-icon-btn"
                  type="button"
                  aria-label=${e.removeLinkAria(p)}
                  @click=${()=>t.dispatch({type:"REMOVE_STORY_LINK",target:s,payload:{url:r.url}})}
                >
                  ${fe()}
                </button>
              </li>`})}
          </ul>`}
    <form class="sp-add-link" @submit=${n}>
      <input
        class="dpk-input"
        type="url"
        inputmode="url"
        placeholder="https://"
        aria-label=${e.linkUrlLabel}
        @input=${r=>{r.currentTarget instanceof HTMLInputElement&&r.currentTarget.removeAttribute("aria-invalid")}}
      />
      <button class="dpk-btn" type="submit">${e.addLinkButton}</button>
    </form>
  </section>`},ps=(e,t,a)=>{const s=t.comments.filter(n=>n.target.type==="story"&&n.target.id===a.id),i=n=>{const r=n.querySelector("textarea"),o=r?.value.trim()??"";if(!r||o==="")return;t.dispatch({type:"comment",target:`story:${a.id}`,payload:{body:o}}).ok&&(r.value="")};return l`<section class="sp-field sp-comments">
    <h3>${e.storyCommentsLabel}${s.length>0?l`<span class="sp-count">${s.length}</span>`:v}</h3>
    ${s.length===0?v:l`<ol class="sp-comment-list">
            ${s.map(n=>l`<li>${Ct(n)}</li>`)}
          </ol>`}
    <form
      class="sp-comment-form"
      @submit=${n=>{n.preventDefault(),n.currentTarget instanceof HTMLFormElement&&i(n.currentTarget)}}
    >
      <textarea
        class="dpk-textarea"
        rows="3"
        aria-label=${e.storyCommentsLabel}
        data-dpk-text-key=${`story:${a.id}`}
        @keydown=${n=>{if(n.isComposing||n.key!=="Enter"||!(n.ctrlKey||n.metaKey))return;n.preventDefault();const r=n.currentTarget instanceof HTMLElement?n.currentTarget.closest("form"):null;r&&i(r)}}
      ></textarea>
      <div class="sp-comment-actions">
        <button class="dpk-btn dpk-btn--accent" type="submit">${e.commentSubmit}</button>
      </div>
    </form>
  </section>`},cs=Z`
  /* Over the main column's edge, below the header: the page's own controls stay in reach. */
  .story-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    width: min(420px, 100%);
    border-left: 1px solid var(--dpk-rule-strong);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-lg);
    animation: sp-slide-in 220ms var(--dpk-ease);
  }
  /* The panel takes the focus when it opens; the ring belongs to its controls. */
  .story-panel:focus {
    outline: none;
  }
  @keyframes sp-slide-in {
    from {
      opacity: 0;
      transform: translateX(24px);
    }
  }
  .sp-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 22px 12px;
    min-height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--dpk-rule);
  }
  .sp-where {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 0;
    flex: 1 1 auto;
    min-width: 0;
    color: var(--dpk-ink-faint);
    font-size: 11.5px;
    font-weight: 600;
  }
  .sp-where > span + span::before {
    content: '›';
    margin: 0 6px;
    color: var(--dpk-rule-strong);
  }
  .sp-body {
    display: grid;
    align-content: start;
    gap: 22px;
    overflow: auto;
    padding: 18px 22px 24px;
  }
  .sp-title {
    margin: 0;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.35;
  }
  .sp-title dpk-component-inline-edit {
    display: block;
    margin: 0 -4px;
  }
  .sp-field {
    display: grid;
    gap: 8px;
  }
  .sp-field h3 {
    margin: 0;
    color: var(--dpk-ink-faint);
    font-size: 11px;
    font-weight: 650;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .sp-statuses {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .sp-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 5px 12px 5px 9px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font: inherit;
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }
  .sp-status:hover {
    border-color: color-mix(in oklab, var(--usm-tone) 60%, var(--dpk-rule-strong));
  }
  .sp-status:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  .sp-status[aria-checked='true'] {
    border-color: var(--usm-tone);
    background: color-mix(in oklab, var(--usm-tone) 14%, var(--dpk-paper-raised));
    box-shadow: inset 0 0 0 1px var(--usm-tone);
  }
  .sp-field-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
  }
  .sp-manage {
    color: var(--dpk-ink-faint);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
  }
  .sp-manage:hover {
    color: var(--dpk-blue);
  }
  .sp-empty {
    margin: 0;
    color: var(--dpk-ink-faint);
    font-size: 12.5px;
  }
  .sp-labels {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .sp-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px 3px 8px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: 999px;
    background: transparent;
    color: var(--dpk-ink-soft);
    font: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }
  .sp-label:hover {
    border-color: color-mix(in oklab, var(--usm-tone) 60%, var(--dpk-rule-strong));
  }
  .sp-label:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  .sp-label[aria-pressed='true'] {
    border-style: solid;
    border-color: color-mix(in oklab, var(--usm-tone) 55%, transparent);
    background: color-mix(in oklab, var(--usm-tone) 14%, var(--dpk-paper-raised));
    color: var(--dpk-ink);
  }
  .sp-label-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--usm-tone);
    opacity: 0.5;
  }
  .sp-label[aria-pressed='true'] .sp-label-dot {
    opacity: 1;
  }
  .sp-description {
    display: block;
    margin: 0 -4px;
    color: var(--dpk-ink-soft);
    font-size: 13px;
    line-height: 1.65;
  }
  .sp-links {
    display: grid;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .sp-links li {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-sunken);
  }
  .sp-link {
    display: grid;
    grid-template-columns: 16px minmax(0, 1fr);
    column-gap: 9px;
    align-items: center;
    flex: 1 1 auto;
    min-width: 0;
    padding: 7px 4px 7px 10px;
    color: var(--dpk-ink);
    text-decoration: none;
  }
  .sp-link:hover .sp-link-text {
    text-decoration: underline;
  }
  .sp-link svg {
    grid-row: span 2;
    width: 16px;
    height: 16px;
    color: var(--dpk-ink-soft);
  }
  .sp-link-text {
    overflow: hidden;
    font-family: var(--dpk-mono);
    font-size: 12.5px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sp-link-url {
    overflow: hidden;
    color: var(--dpk-ink-faint);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sp-add-link {
    display: flex;
    gap: 6px;
  }
  .sp-add-link input {
    flex: 1 1 auto;
    min-width: 0;
  }
  .sp-add-link input[aria-invalid='true'] {
    border-color: var(--dpk-accent);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--dpk-accent) 22%, transparent);
  }
  /* The handoff dock floats at the bottom right, so the footer keeps left. */
  .sp-field h3 .sp-count {
    margin-left: 6px;
    font-family: var(--dpk-mono);
    letter-spacing: 0;
  }
  .sp-comment-list {
    display: grid;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .sp-comment-list li {
    padding: 8px 11px;
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink);
    font-size: 12.5px;
    line-height: 1.6;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
  .sp-comment-form {
    display: grid;
    gap: 6px;
  }
  .sp-comment-form textarea {
    resize: vertical;
    min-height: 64px;
  }
  .sp-comment-actions {
    display: flex;
    justify-content: flex-end;
  }
  .sp-foot {
    display: flex;
    justify-content: flex-start;
    padding: 12px 22px;
    border-top: 1px solid var(--dpk-rule);
  }
  .sp-delete {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--dpk-ink-soft);
  }
  .sp-delete svg {
    width: 14px;
    height: 14px;
  }
`,us=e=>{const t=e.stories.length,a=n=>t===0?0:n/t,s=n=>e.stories.filter(r=>r.statusId===n).length;return{rows:e.statuses.map((n,r)=>{const o=s(n.id);return{id:n.id,name:n.name,tone:n.tone,icon:n.icon,progress:e.statuses.length<=1?1:r/(e.statuses.length-1),previousId:e.statuses[r-1]?.id??null,nextId:e.statuses[r+1]?.id??null,storyCount:o,share:a(o)}})}},ms=Z`
  :host {
    --dpk-usm-accent: var(--dpk-blue);
  }
  /*
   * A wide table must scroll inside itself and never widen the template shell.
   * It scrolls both ways so the backbone can stick to its top and the
   * milestone column to its left: a box that scrolls only sideways still
   * becomes the sticky ancestor, and its top would never move. Capped near the
   * viewport height, it fits under the tab bar once the page brings it up.
   */
  .map-scroll {
    min-width: 0;
    max-width: 100%;
    max-height: max(320px, calc(100dvh - 170px));
    overflow: auto;
    overscroll-behavior-x: contain;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-sunken);
    box-shadow: var(--dpk-shadow);
  }
  .map {
    display: grid;
    gap: 0;
    min-width: max-content;
    /* The map scrolls on its own: its last row clears the hand-off dock at the end of that scroll. */
    padding-bottom: var(--dpk-dock-clearance, 0px);
  }
  .map-row {
    display: grid;
    grid-template-columns: 140px repeat(var(--cols), minmax(180px, 240px));
  }
  .map-row + .map-row {
    border-top: 1px solid var(--dpk-rule);
  }

  /* The backbone (activities and steps) stays at the top while the rows scroll. */
  .map-head {
    position: sticky;
    top: 0;
    z-index: 3;
    border-bottom: 1px solid var(--dpk-rule-strong);
    box-shadow: 0 8px 14px -12px var(--dpk-shade-3);
  }

  /* The leading column (axis corners and milestone labels) stays at the left
     while the steps scroll sideways; it is opaque so cards pass under it. */
  .corner:first-child,
  .row-lead {
    position: sticky;
    left: 0;
    z-index: 2;
    box-shadow: 1px 0 0 var(--dpk-rule);
  }
  .row-lead {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2px;
    min-width: 0;
    padding: 8px 6px 8px 4px;
    background: var(--dpk-paper-sunken);
  }
  /* Row names and their meta line share one column: past the grip (15px), its
     gap (6px) and the inline edit's own padding (4px). */
  .row-lead {
    --usm-row-indent: 25px;
  }
  .row-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 8px;
    padding-left: var(--usm-row-indent);
    font-size: 10.5px;
    color: var(--dpk-ink-faint);
  }
  .row-timeframe {
    color: var(--dpk-ink-soft);
    font-weight: 600;
  }
  .row-count {
    font-family: var(--dpk-mono);
    font-variant-numeric: tabular-nums;
  }
  .corner,
  .act-head,
  .col-head,
  .row-head,
  .cell {
    padding: 10px;
  }
  .corner {
    background: var(--dpk-paper-sunken);
    display: grid;
    gap: 3px;
    align-content: start;
  }

  /* Above the content: the page tabs (map / milestones) and, on the map, the
     unit toggle (group band vs one column per activity). */
  /* The grid's status filter: one toggle per status, which also reads as the
     legend of the card colors. */
  .map-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin: 16px 0 12px;
  }
  .filter-label {
    margin-right: 4px;
    color: var(--dpk-ink-faint);
    font-size: 11px;
    font-weight: 650;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    max-width: 100%;
    padding: 3px 9px 3px 7px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    color: var(--dpk-ink);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }
  /* A long status name ends in an ellipsis; the chip stays a one-line pill. */
  .filter-chip > :not(.filter-name) {
    flex: none;
  }
  .filter-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .filter-chip:hover {
    border-color: color-mix(in oklab, var(--usm-tone) 60%, var(--dpk-rule-strong));
  }
  .filter-chip:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  .filter-chip[aria-checked='true'] {
    border-color: var(--usm-tone);
    background: color-mix(in oklab, var(--usm-tone) 14%, var(--dpk-paper-raised));
    box-shadow: inset 0 0 0 1px var(--usm-tone);
  }
  .filter-count {
    line-height: 1;
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    font-variant-numeric: tabular-nums;
  }
  .filter-clear {
    margin-left: 4px;
    color: var(--dpk-blue);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
  }
  .filter-clear:hover {
    text-decoration: underline;
  }

  .board-bar {
    border-bottom: 1px solid var(--dpk-rule);
    /* Stays on top while a long milestone list scrolls under it. */
    position: sticky;
    top: 0;
    z-index: 5;
    margin: -24px -24px 0;
    padding: 12px 24px;
    background: var(--dpk-glass);
    backdrop-filter: saturate(1.6) blur(14px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 14px;
    min-width: 0;
  }

  /* The two pages: an underlined tab strip, heavier than the view toggle. It
     scrolls sideways on a phone rather than cutting off the last tab; the
     bottom padding keeps the selected tab's underline inside the scroller. */
  .page-tabs {
    display: inline-flex;
    gap: 4px;
    min-width: 0;
    max-width: 100%;
    margin-right: auto;
    margin-bottom: -13px;
    padding-bottom: 13px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .page-tabs [role='tab'] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 12px;
    border-radius: var(--dpk-radius-sm);
    color: var(--dpk-ink-soft);
    font-size: 13.5px;
    font-weight: 600;
    letter-spacing: -0.005em;
    text-decoration: none;
    white-space: nowrap;
    transition:
      color 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease);
  }
  .page-tabs [role='tab']:hover {
    color: var(--dpk-ink);
    background: var(--dpk-paper-inset);
  }
  .page-tabs [role='tab']:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  .page-tabs [role='tab'][aria-selected='true'] {
    color: var(--dpk-ink);
    font-weight: 700;
  }
  .page-tabs [role='tab'][aria-selected='true']::after {
    content: '';
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: -13px;
    height: 2px;
    border-radius: 2px;
    background: var(--dpk-usm-accent);
  }
  .page-tab-count {
    min-width: 18px;
    padding: 0 6px;
    border-radius: 999px;
    background: var(--dpk-rule);
    color: var(--dpk-ink-soft);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    line-height: 17px;
    text-align: center;
  }
  [role='tab'][aria-selected='true'] .page-tab-count {
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  /* A sunken track with the selected segment raised on top of it. */
  .segmented {
    display: inline-flex;
    gap: 2px;
    padding: 3px;
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 3px var(--dpk-shade-1);
  }

  .tab {
    padding: 5px 14px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 550;
    text-decoration: none;
    color: var(--dpk-ink-soft);
    white-space: nowrap;
    transition:
      background 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease);
  }

  .tab:hover {
    color: var(--dpk-ink);
    background: var(--dpk-paper-inset);
  }

  .tab[data-current='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 650;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  /* Activity band: raised above the working canvas. A head spans its steps,
     so its contents stay in view beside the sticky column while the map
     scrolls sideways. */
  .act-head {
    position: relative;
    display: grid;
    align-content: start;
    gap: 7px;
    border-left: 1px solid var(--dpk-rule);
    background: var(--dpk-paper-raised);
    box-shadow:
      var(--dpk-bevel),
      inset 0 -1px 0 var(--dpk-rule-strong);
    font-size: 13px;
    font-weight: 650;
    letter-spacing: -0.005em;
  }
  .act-title,
  .act-meta,
  .act-steps {
    position: sticky;
    left: 150px;
    width: min(100%, 340px);
    min-width: 0;
  }
  .act-title {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .act-title > dpk-component-inline-edit {
    flex: 1 1 auto;
    min-width: 0;
  }
  .act-meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .act-meta .status-bar {
    flex: 1 1 auto;
  }
  /* Whose experience the activity is: a label, editable in place. */
  .act-actor {
    flex: none;
    max-width: 60%;
    padding: 0 4px;
    border-radius: 999px;
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
    font-size: 11px;
    font-weight: 650;
    line-height: 20px;
  }
  .act-actor[data-empty='true'] {
    background: transparent;
    opacity: 0;
    transition: opacity 150ms ease;
  }
  .act-head:hover .act-actor[data-empty='true'],
  .act-actor[data-empty='true']:focus-within {
    opacity: 1;
  }
  /* The group view gives the steps no columns; the head lists them instead. */
  .act-steps {
    display: grid;
    gap: 3px;
    margin: 0;
    padding: 0 0 0 18px;
    color: var(--dpk-ink-soft);
    font-size: 11.5px;
    font-weight: 500;
    line-height: 1.45;
  }
  .act-steps li::marker {
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 10px;
  }
  .act-head .count,
  .col-head .count {
    flex: 0 0 auto;
    padding: 0 6px;
    border-radius: 999px;
    background: var(--dpk-rule);
    line-height: 16px;
  }
  .col-head {
    display: flex;
    align-items: center;
    gap: 6px;
    border-left: 1px solid var(--dpk-rule);
    background: var(--dpk-paper-sunken);
    transition: background 160ms var(--dpk-ease);
  }
  .col-head h4 {
    flex: 1 1 auto;
    min-width: 0;
  }
  .col-head[data-current='true'] {
    background: color-mix(in srgb, var(--dpk-usm-accent) 8%, var(--dpk-paper-sunken));
  }
  .col-head h4 {
    font-size: 13px;
    font-weight: 600;
    margin: 0;
  }

  .row-head {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Milestone row label: plain text with a grip, not a chip. The "add
     milestone" row reuses \`.row-head\` for its ghost button. */
  .row-head[data-milestone] {
    align-self: stretch;
    margin: 0;
    padding: 0 6px 0 0;
    color: var(--dpk-ink);
    font-size: 12.5px;
    font-weight: 650;
    max-width: 100%;
  }

  .row-head[draggable='true'] {
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
  }

  .row-head[draggable='true'] dpk-component-inline-edit {
    -webkit-user-drag: none;
  }

  .row-head[draggable='true']:active {
    cursor: grabbing;
  }

  .row-grip {
    flex: 0 0 auto;
    display: inline-flex;
    color: var(--dpk-ink-faint);
  }

  .row-grip svg {
    display: block;
    width: 15px;
    height: 15px;
  }

  /* Row-level drag affordance: only the grip answers the hover. */
  .map-row[data-draggable='true']:hover .row-grip {
    color: var(--dpk-blue);
  }
  .map-row[data-draggable='true'] {
    cursor: grab;
  }
  .map-row[data-draggable='true']:active {
    cursor: grabbing;
  }

  /*
   * Dragging state: entire row fades. Never disable pointer events on the
   * source here: Lit applies this state in the microtask right after
   * \`dragstart\`, and Blink then re-hit-tests the pointer and aborts the drag
   * when the source is no longer under it.
   */
  .map-row[data-row-dragging='true'] {
    opacity: 0.45;
  }

  /* Drop target: entire row highlights. */
  .map-row[data-row-drop='true'] {
    outline: 2px dashed var(--dpk-blue);
    outline-offset: -2px;
  }

  /* Unassigned is a holding area, not a release: its label is quieter. */
  .map-row[data-unassigned='true'] .row-head {
    padding-left: var(--usm-row-indent);
    color: var(--dpk-ink-soft);
  }

  /* Cells are the working canvas: sunken, with a quiet dot lattice, so raised
     story cards read as things placed on the board. */
  .cell {
    border-left: 1px solid var(--dpk-rule);
    border-top: 1px solid var(--dpk-rule);
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 100px;
    background: var(--dpk-dots), var(--dpk-paper-sunken);
    transition: background 160ms var(--dpk-ease);
  }
  .cell[data-drop='true'] {
    outline: 2px dashed var(--dpk-blue);
    outline-offset: -2px;
  }
  .card-list {
    display: grid;
    gap: 10px;
    align-content: start;
    flex: 1 1 auto;
  }
  .add-cell {
    margin-top: auto;
    opacity: 0;
    transition:
      opacity 180ms var(--dpk-ease),
      background 160ms var(--dpk-ease),
      border-color 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease);
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    color: var(--dpk-ink-faint);
    padding: 4px 8px;
    font-size: 11.5px;
  }
  .add-cell:hover {
    background: var(--dpk-blue-soft);
    border-color: var(--dpk-blue);
    color: var(--dpk-blue);
  }
  .cell:hover .add-cell {
    opacity: 1;
  }
  .empty {
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    padding: 28px 24px;
    background: var(--dpk-dots), var(--dpk-paper-sunken);
    max-width: 620px;
    display: grid;
    gap: 10px;
  }
  .count {
    font-family: var(--dpk-mono);
    font-variant-numeric: tabular-nums;
    font-size: 10px;
    color: var(--dpk-ink-faint);
  }

  /* ------------------------------------------------------ milestones tab */

  /* The release slices as a timeline, like the experience section of a
     portfolio: when on the left, one node per slice on a single rail, what
     and how big on the right. Nothing is boxed; the rail carries the order. */
  .ms-overview {
    --ms-node: 30px;
    --ms-when: 132px;
    --ms-gap: 44px;
    display: grid;
    gap: 28px;
    max-width: 920px;
    padding: 28px 0 40px;
  }
  .ms-timeline {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ms-entry,
  .ms-add {
    display: grid;
    grid-template-columns: var(--ms-when) var(--ms-node) minmax(0, 1fr);
    grid-template-areas: 'when rail body';
    column-gap: 24px;
  }
  .ms-entry {
    padding-bottom: var(--ms-gap);
  }
  .ms-when {
    grid-area: when;
    display: flex;
    justify-content: flex-end;
    padding-top: 5px;
  }
  .ms-timeframe {
    color: var(--dpk-ink);
    font-size: 13px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.01em;
    text-align: right;
  }
  .ms-timeframe[data-empty='true'] {
    color: var(--dpk-ink-faint);
    font-weight: 500;
  }

  /* The rail runs through every entry's padding, so the nodes read as one line;
     it starts at the first node and fades out into the add node. */
  .ms-rail {
    grid-area: rail;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .ms-rail::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: calc(-1 * var(--ms-gap));
    left: calc(50% - 1px);
    width: 2px;
    border-radius: 1px;
    background: var(--dpk-rule-strong);
  }
  .ms-entry:first-child .ms-rail::before {
    top: calc(var(--ms-node) / 2);
  }
  .ms-add .ms-rail::before {
    bottom: auto;
    height: calc(var(--ms-node) / 2);
    background: repeating-linear-gradient(to bottom, var(--dpk-rule-strong) 0 3px, transparent 3px 7px);
  }
  .ms-node {
    position: relative;
    display: grid;
    place-items: center;
    width: var(--ms-node);
    height: var(--ms-node);
    box-sizing: border-box;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 50%;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-family: var(--dpk-mono);
    font-size: 12px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    /* A ring of page color cuts the rail around the node. */
    box-shadow:
      0 0 0 5px var(--dpk-paper),
      var(--dpk-bevel),
      var(--dpk-shadow-xs);
    transition:
      border-color 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease);
  }
  .ms-entry:hover .ms-node,
  .ms-entry:focus-within .ms-node {
    border-color: var(--dpk-blue);
    color: var(--dpk-blue-strong);
  }
  .ms-node--add {
    border-style: dashed;
    background: var(--dpk-paper);
    box-shadow: 0 0 0 5px var(--dpk-paper);
  }
  .ms-node--add::before,
  .ms-node--add::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 1.5px;
    border-radius: 1px;
    background: var(--dpk-ink-faint);
    transform: translate(-50%, -50%);
  }
  .ms-node--add::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .ms-add .ms-body {
    display: flex;
    align-items: center;
    min-height: var(--ms-node);
  }
  /* The label lines up with the names above; the button's padding hangs out. */
  .ms-add .dpk-btn {
    margin-left: -12px;
  }

  .ms-body {
    grid-area: body;
    display: grid;
    gap: 10px;
    min-width: 0;
    justify-items: start;
  }
  .ms-name {
    justify-self: stretch;
    min-width: 0;
    margin: 0;
    padding-top: 1px;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.015em;
  }
  /* The field pads its text by 4px; pull it out by as much so the name lines
     up with the description and keeps its place when editing starts. */
  .ms-name dpk-component-inline-edit {
    display: block;
    margin: 0 -4px;
  }
  .ms-description {
    margin: 0;
    max-width: 64ch;
    color: var(--dpk-ink-soft);
    font-size: 14px;
    line-height: 1.75;
    white-space: pre-wrap;
  }
  .ms-description[data-empty='true'] {
    color: var(--dpk-ink-faint);
    font-size: 13px;
  }
  .ms-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 36px;
    margin: 6px 0 0;
  }
  .ms-facts dt {
    margin-bottom: 3px;
    color: var(--dpk-ink-faint);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .ms-facts dd {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    color: var(--dpk-ink-faint);
    font-size: 12px;
  }
  .ms-facts strong {
    color: var(--dpk-ink);
    font-size: 15px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
  }
  .ms-meter {
    display: block;
    width: 72px;
    height: 4px;
    border-radius: 2px;
    background: var(--dpk-paper-inset);
    overflow: hidden;
  }
  .ms-meter > span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--dpk-blue);
  }

  /* Where the slice's stories sit across the backbone, in activity tones. */
  .ms-breakdown {
    display: grid;
    gap: 10px;
    width: min(100%, 460px);
    margin-top: 4px;
  }
  .ms-breakdown .status-bar {
    height: 8px;
  }
  .ms-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ms-legend li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--dpk-ink-soft);
    font-size: 12px;
  }
  .ms-breakdown-count {
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
  }

  /* Narrow: the date moves above the name, the rail stays on the left. */
  @media (max-width: 640px) {
    .ms-overview {
      --ms-node: 26px;
    }
    .ms-entry,
    .ms-add {
      grid-template-columns: var(--ms-node) minmax(0, 1fr);
      grid-template-areas:
        'rail when'
        'rail body';
      column-gap: 16px;
    }
    .ms-add {
      grid-template-areas: 'rail body';
    }
    .ms-add .ms-when {
      display: none;
    }
    .ms-when {
      justify-content: flex-start;
      padding: 4px 0 2px;
    }
    .ms-timeframe {
      text-align: left;
    }
  }

  /* ------------------------------------------------------- statuses tab */

  /* The statuses in order, one row each: color, name, how many stories stand
     there, the palette to recolor it, and the order / delete tools. */
  .st-overview {
    display: grid;
    gap: 20px;
    max-width: 1040px;
    padding: 28px 0 40px;
  }
  .st-list {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-xs);
  }
  .st-row {
    display: grid;
    /* Fixed tool columns keep the unset row, which has no tools, in line. */
    grid-template-columns: 16px minmax(120px, 1fr) minmax(140px, 200px) 150px 84px;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
  }
  .st-row + .st-row {
    border-top: 1px solid var(--dpk-rule);
  }
  .st-name {
    min-width: 0;
    font-size: 14px;
    font-weight: 650;
  }
  .st-share {
    display: grid;
    gap: 5px;
  }
  .st-share-text {
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
  }
  .st-meter {
    height: 5px;
    border-radius: 3px;
    background: var(--dpk-paper-sunken);
    overflow: hidden;
  }
  .st-meter > span {
    display: block;
    height: 100%;
    border-radius: 3px;
    background: var(--usm-tone);
  }
  .st-tones {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  /* The status's own icon opens the menu of icons. */
  .st-icon-trigger {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    margin: -7px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }
  .st-icon-trigger:hover,
  .st-icon-trigger[aria-expanded='true'] {
    border-color: var(--dpk-rule-strong);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-xs);
  }
  .st-icon-trigger:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  .comment-pop.icon-menu {
    grid-template-columns: repeat(5, 36px);
    gap: 4px;
    padding: 8px;
  }
  .icon-option {
    display: inline-grid;
    place-items: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    cursor: pointer;
  }
  .icon-option .status-icon {
    width: 18px;
    height: 18px;
  }
  .icon-option:hover,
  .icon-option:focus-visible {
    outline: none;
    background: var(--dpk-paper-inset);
  }
  .icon-option[aria-checked='true'] {
    border-color: color-mix(in oklab, var(--usm-tone) 55%, transparent);
    background: color-mix(in oklab, var(--usm-tone) 12%, transparent);
  }
  .st-tone {
    width: 18px;
    height: 18px;
    padding: 0;
    border: 2px solid var(--dpk-paper-raised);
    border-radius: 50%;
    background: var(--usm-tone);
    box-shadow: 0 0 0 1px var(--dpk-rule-strong);
    cursor: pointer;
    transition: box-shadow 150ms ease;
  }
  .st-tone:hover {
    box-shadow: 0 0 0 1px var(--usm-tone);
  }
  .st-tone[aria-checked='true'] {
    box-shadow: 0 0 0 2px var(--usm-tone);
  }
  .st-tone:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
  /* A label's color, where a status shows its icon. */
  .label-swatch {
    width: 12px;
    height: 12px;
    border-radius: 4px;
    background: var(--usm-tone);
  }
  .st-tools {
    display: inline-flex;
    gap: 2px;
  }
  .st-tools .dpk-icon-btn {
    width: 26px;
    height: 26px;
    font-size: 13px;
  }
  @media (max-width: 640px) {
    .st-row {
      grid-template-columns: 16px minmax(0, 1fr) auto;
      row-gap: 8px;
    }
    .st-share,
    .st-tones {
      grid-column: 2 / -1;
    }
    /* The tools stay on the name's row, so the rows below are the name's width. */
    .st-tools {
      grid-column: 3;
      grid-row: 1;
    }
  }

  /* Step picker shown after a cross-activity drop. */
  .move-dialog {
    min-width: 220px;
  }
`,X={kind:"idle"},gs={width:300,height:240},hs={width:228,height:116};class bt extends ye{static{this.styles=[ye.styles,ms,He,Ke,cs,Yt]}definitionFor(t){return Ge(t)}static{this.properties={mode:{state:!0}}}#a=new Ft(this);#e=new Ut(this);#t=null;#i=null;constructor(){super(),this.mode=X,new Gt(this,{open:()=>this.#s()!==null,closesOn:t=>this.#n(t),ownsEscape:t=>this.mode.kind==="idle"&&(t.includes(this)||t[0]===document.body||t[0]===document.documentElement),dismiss:()=>this.context().navigate({story:null})})}renderRegions(t){return{main:this.#l(t)}}updated(){if(super.updated(),this.#o(),this.#r(),this.mode.kind==="picking-icon"){const a=this.renderRoot.querySelector("#icon-menu"),s=this.renderRoot.querySelector(`[data-icon-trigger="${CSS.escape(this.mode.statusId)}"]`);a&&s&&this.#e.open(a,s,hs);return}if(this.mode.kind!=="picking-step")return;const t=this.renderRoot.querySelector("#move-dialog");t&&this.#e.open(t,zt(this.mode.point.x,this.mode.point.y),gs)}#s(){return this.renderRoot.querySelector(".story-panel")}#n(t){const a=this.#s(),s=this.renderRoot.querySelector(".dpk-main");return!a||!s||t.includes(a)||!t.includes(s)?!1:!t.some(i=>i instanceof Element&&(i.localName==="dpk-internal-usm-story-card"||i.hasAttribute("popover")))}#r(){const t=this.#s(),a=t?.dataset.story??null,s=this.#t;if(a===s)return;this.#t=a;const i=this.shadowRoot?.activeElement??null;if(t){(!i||!t.contains(i))&&t.focus({preventScroll:!0});return}s===null||i!==null&&i.isConnected||this.renderRoot.querySelector(`dpk-internal-usm-story-card[data-story="${CSS.escape(s)}"]`)?.focus({preventScroll:!0})}#o(){const t=this.renderRoot.querySelector(".page-tabs"),a=t?.querySelector('[aria-selected="true"]'),s=a?.getAttribute("href")??null;!t||!a||s===this.#i||(this.#i=s,Pt(t,a))}#l(t){const a=se(this.locale),s=Re(t.navigation);return l`
      ${is(a,t,s)} ${this.#p(a,t,s)} ${this.#d(a,t,s)}
      ${ss(a,t,this.mode,{confirm:i=>this.#b(i),cancel:()=>this.mode=X})}
    `}#d(t,a,s){if(s!=="map")return v;const i=ns(a);return i?rs(t,a,i):v}#p(t,a,s){switch(s){case"milestones":return es(t,a,Oa(a.state));case"statuses":return Ha(t,a,us(a.state),{openFor:this.mode.kind==="picking-icon"?this.mode.statusId:null,toggle:i=>{const n=this.mode.kind==="picking-icon"&&this.mode.statusId===i;this.mode=n?X:{kind:"picking-icon",statusId:i}},close:()=>this.mode=X});case"labels":return Ja(t,a,Da(a.state));case"map":return this.#c(t,a)}}#c(t,a){return Ya({m:t,context:a,drag:this.#a,handlers:{selectStory:s=>this.#u(s),dropOnCell:(s,i)=>this.#m(s,i),dropOnGroupCell:(s,i,n)=>this.#g(s,i,n),dropOnMilestoneRow:(s,i)=>this.#h(s,i)}})}#u(t){const a=this.context(),s=S(a.state,t);s&&a.navigate({step:s.stepId,story:s.id})}#m(t,a){const s=this.context();s.dispatch(We(s.state,t,a.item.id,a.hoveredId,a.place))}#g(t,a,s){const i=this.context(),n=S(i.state,s.item.id);if(!n)return;if(n.activityId!==t){this.mode={kind:"picking-step",storyId:n.id,activityId:t,milestoneId:a,point:{x:s.event.clientX,y:s.event.clientY}};return}const r=Xe(i.state,t,a,n.id,s.hoveredId,s.place);r&&i.dispatch(r)}#h(t,a){const s=this.context(),i=s.state.milestones.map(r=>r.id),n=Je(i,a.item.id,a.hoveredId,a.place);n&&s.dispatch(n)}#b(t){const a=this.mode;if(a.kind!=="picking-step")return;const s=this.context();s.dispatch(Ze(s.state,a.storyId,a.activityId,t,a.milestoneId)),this.mode=X}}const vt=()=>{Ia(),customElements.get("dpk-template-usm")||customElements.define("dpk-template-usm",bt)},bs=Object.freeze(Object.defineProperty({__proto__:null,DpkTemplateUsm:bt,IDLE_MODE:X,allUsmIds:G,applyUsmAction:Ee,defineUsmElement:vt,describeUsmAction:Ce,dropAfter:Ra,emptyUsmBase:we,findActivity:U,findMilestone:N,findStep:$,findStory:S,flatSteps:ue,parseUsmBase:Se,resolveCellDrop:We,resolveGroupDrop:Xe,resolveMilestoneDrop:Je,resolvePickedStepMove:Ze,resolveUsmNavigation:Pe,serializeUsmAction:Be,storiesInCell:te,storyCountForStep:$e,usmAction:ca,usmActions:h,usmCommentTargets:Ue,usmCurrentTarget:ze,usmDefinitionFor:Ge,usmHasTarget:Ve,usmMessages:se,usmTargetLabel:Ye,usmTitle:he},Symbol.toStringTag,{value:"Module"}));export{vt as d,bs as i};
