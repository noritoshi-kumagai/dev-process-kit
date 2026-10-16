import{p as m,aw as E,v as A,aC as k,aD as S,aj as s,al as x,am as h,aB as D,af as Ue,ag as M,ah as q,ai as N,P as Pe,e as Qe,a2 as Ce,Y as I,R as g,l as Xe,a4 as G,aa as Ye,j as Be,a3 as Ve,ab as ze,ac as Ke,a5 as $,aG as Fe,a6 as f,A as je,K as Je,h as We,a7 as z,T as H}from"./shared-hrghWtVh.js";import{s as K}from"./shared-D4K7KsfJ.js";import{r as U,D as Ge}from"./shared-DdefS1nG.js";import{r as He,p as Ze,c as et}from"./shared-BXI23Fg6.js";const u={SET_STORY_NAME:m("SET_STORY_NAME","story",E({name:x(s(),h(1))})),SET_STORY_DESCRIPTION:m("SET_STORY_DESCRIPTION","story",E({description:s()})),REORDER_STORY:m("REORDER_STORY","story",E({after:D(s())}),{mode:"sequence"}),ADD_STORY:m("ADD_STORY","page",E({id:k,name:x(s(),h(1)),description:S(s())}),{dedupeKey:A}),DELETE_STORY:m("DELETE_STORY","story",E({})),SET_RULE_NAME:m("SET_RULE_NAME","rule",E({name:x(s(),h(1))})),SET_RULE_DESCRIPTION:m("SET_RULE_DESCRIPTION","rule",E({description:s()})),MOVE_RULE:m("MOVE_RULE","rule",E({storyId:x(s(),h(1)),after:D(s())}),{mode:"sequence"}),REORDER_RULE:m("REORDER_RULE","rule",E({after:D(s())}),{mode:"sequence"}),ADD_RULE:m("ADD_RULE","story",E({id:k,name:x(s(),h(1)),description:S(s())}),{dedupeKey:A}),DELETE_RULE:m("DELETE_RULE","rule",E({})),SET_EXAMPLE_NAME:m("SET_EXAMPLE_NAME","example",E({name:x(s(),h(1))})),SET_EXAMPLE_DESCRIPTION:m("SET_EXAMPLE_DESCRIPTION","example",E({description:s()})),MOVE_EXAMPLE:m("MOVE_EXAMPLE","example",E({ruleId:x(s(),h(1)),after:D(s())}),{mode:"sequence"}),REORDER_EXAMPLE:m("REORDER_EXAMPLE","example",E({after:D(s())}),{mode:"sequence"}),ADD_EXAMPLE:m("ADD_EXAMPLE","rule",E({id:k,name:x(s(),h(1)),description:S(s())}),{dedupeKey:A}),DELETE_EXAMPLE:m("DELETE_EXAMPLE","example",E({})),SET_QUESTION_NAME:m("SET_QUESTION_NAME","question",E({name:x(s(),h(1))})),SET_QUESTION_DESCRIPTION:m("SET_QUESTION_DESCRIPTION","question",E({description:s()})),MOVE_QUESTION:m("MOVE_QUESTION","question",E({ruleId:x(s(),h(1)),after:D(s())}),{mode:"sequence"}),REORDER_QUESTION:m("REORDER_QUESTION","question",E({after:D(s())}),{mode:"sequence"}),ADD_QUESTION:m("ADD_QUESTION","rule",E({id:k,name:x(s(),h(1)),description:S(s())}),{dedupeKey:A}),DELETE_QUESTION:m("DELETE_QUESTION","question",E({}))},w={setStoryName:(e,t)=>({type:"SET_STORY_NAME",target:{type:"story",id:e},payload:{name:t}}),setStoryDescription:(e,t)=>({type:"SET_STORY_DESCRIPTION",target:{type:"story",id:e},payload:{description:t}}),reorderStory:(e,t)=>({type:"REORDER_STORY",target:{type:"story",id:e},payload:{after:t}}),addStory:(e,t)=>({type:"ADD_STORY",target:{type:"page",id:"example-mapping"},payload:{id:e,name:t}}),deleteStory:e=>({type:"DELETE_STORY",target:{type:"story",id:e},payload:{}}),setRuleName:(e,t)=>({type:"SET_RULE_NAME",target:{type:"rule",id:e},payload:{name:t}}),setRuleDescription:(e,t)=>({type:"SET_RULE_DESCRIPTION",target:{type:"rule",id:e},payload:{description:t}}),moveRule:(e,t,r)=>({type:"MOVE_RULE",target:{type:"rule",id:e},payload:{storyId:t,after:r}}),reorderRule:(e,t)=>({type:"REORDER_RULE",target:{type:"rule",id:e},payload:{after:t}}),addRule:(e,t,r)=>({type:"ADD_RULE",target:{type:"story",id:e},payload:{id:t,name:r}}),deleteRule:e=>({type:"DELETE_RULE",target:{type:"rule",id:e},payload:{}}),setExampleName:(e,t)=>({type:"SET_EXAMPLE_NAME",target:{type:"example",id:e},payload:{name:t}}),setExampleDescription:(e,t)=>({type:"SET_EXAMPLE_DESCRIPTION",target:{type:"example",id:e},payload:{description:t}}),moveExample:(e,t,r)=>({type:"MOVE_EXAMPLE",target:{type:"example",id:e},payload:{ruleId:t,after:r}}),reorderExample:(e,t)=>({type:"REORDER_EXAMPLE",target:{type:"example",id:e},payload:{after:t}}),addExample:(e,t,r)=>({type:"ADD_EXAMPLE",target:{type:"rule",id:e},payload:{id:t,name:r}}),deleteExample:e=>({type:"DELETE_EXAMPLE",target:{type:"example",id:e},payload:{}}),setQuestionName:(e,t)=>({type:"SET_QUESTION_NAME",target:{type:"question",id:e},payload:{name:t}}),setQuestionDescription:(e,t)=>({type:"SET_QUESTION_DESCRIPTION",target:{type:"question",id:e},payload:{description:t}}),moveQuestion:(e,t,r)=>({type:"MOVE_QUESTION",target:{type:"question",id:e},payload:{ruleId:t,after:r}}),reorderQuestion:(e,t)=>({type:"REORDER_QUESTION",target:{type:"question",id:e},payload:{after:t}}),addQuestion:(e,t,r)=>({type:"ADD_QUESTION",target:{type:"rule",id:e},payload:{id:t,name:r}}),deleteQuestion:e=>({type:"DELETE_QUESTION",target:{type:"question",id:e},payload:{}})},tt=M({id:k,name:x(s(),h(1)),description:S(s())}),rt=M({id:k,storyId:x(s(),h(1)),name:x(s(),h(1)),description:S(s())}),Z=M({id:k,ruleId:x(s(),h(1)),name:x(s(),h(1)),description:S(s())}),ee=M({title:S(s()),stories:q(N(tt),[]),rules:q(N(rt),[]),examples:q(N(Z),[]),questions:q(N(Z),[])}),te=e=>{const t=Ue(ee,e),r=new Set,a=(i,d)=>{if(r.has(d))throw new Error(`duplicate id "${d}" in ${i}`);r.add(d)},n=new Set(t.stories.map(i=>i.id));for(const i of t.stories)a("stories",i.id);for(const i of t.rules)if(a("rules",i.id),!n.has(i.storyId))throw new Error(`rule "${i.id}" references unknown storyId "${i.storyId}"`);const o=new Map(t.rules.map(i=>[i.id,i]));for(const i of t.examples)if(a("examples",i.id),!o.has(i.ruleId))throw new Error(`example "${i.id}" references unknown ruleId "${i.ruleId}"`);for(const i of t.questions)if(a("questions",i.id),!o.has(i.ruleId))throw new Error(`question "${i.id}" references unknown ruleId "${i.ruleId}"`);return t},re=()=>({stories:[],rules:[],examples:[],questions:[]}),at=e=>({...e,rules:K(e.rules,["storyId"]),examples:K(e.examples,["ruleId"]),questions:K(e.questions,["ruleId"])}),T=(e,t)=>{if(t!==void 0)return e.stories.find(r=>r.id===t)},y=(e,t)=>{if(t!==void 0)return e.rules.find(r=>r.id===t)},b=(e,t)=>{if(t!==void 0)return e.examples.find(r=>r.id===t)},R=(e,t)=>{if(t!==void 0)return e.questions.find(r=>r.id===t)},L=(e,t)=>{if(t===void 0)return;const r=T(e,t);if(r)return{kind:"story",id:r.id,name:r.name,...r.description===void 0?{}:{description:r.description}};const a=y(e,t);if(a)return{kind:"rule",id:a.id,name:a.name,...a.description===void 0?{}:{description:a.description}};const n=b(e,t);if(n)return{kind:"example",id:n.id,name:n.name,...n.description===void 0?{}:{description:n.description}};const o=R(e,t);if(o)return{kind:"question",id:o.id,name:o.name,...o.description===void 0?{}:{description:o.description}}},ae=(e,t)=>e.rules.filter(r=>r.storyId===t),ne=(e,t)=>e.examples.filter(r=>r.ruleId===t),oe=(e,t)=>e.questions.filter(r=>r.ruleId===t),nt=(e,t)=>{if(T(e,t))return t;const r=y(e,t);if(r)return r.storyId;const a=b(e,t)?.ruleId??R(e,t)?.ruleId;return a===void 0?void 0:y(e,a)?.storyId},ie=e=>[...e.stories.map(t=>t.id),...e.rules.map(t=>t.id),...e.examples.map(t=>t.id),...e.questions.map(t=>t.id)],de=(e,t)=>y(e,t)?.storyId,ot=(e,t)=>{const r=b(e,t);return r?de(e,r.ruleId):void 0},se=(e,t)=>{const r=Pe(u,t);if(r===null)return null;const a=r.target.id;switch(r.type){case"SET_STORY_NAME":return le(e,a,n=>({...n,name:r.payload.name}));case"SET_STORY_DESCRIPTION":return le(e,a,n=>({...n,description:r.payload.description}));case"REORDER_STORY":{const n=Ee(e.stories,a,r.payload.after);return n===null?null:{...e,stories:n}}case"ADD_STORY":{const n=r.payload;return e.stories.some(o=>o.id===n.id)?e:P(e,n.id)?null:{...e,stories:[...e.stories,{id:n.id,name:n.name,...n.description===void 0?{}:{description:n.description}}]}}case"DELETE_STORY":{if(!e.stories.some(o=>o.id===a))return null;const n=new Set(e.rules.filter(o=>o.storyId===a).map(o=>o.id));return{...e,stories:e.stories.filter(o=>o.id!==a),rules:e.rules.filter(o=>o.storyId!==a),examples:e.examples.filter(o=>!n.has(o.ruleId)),questions:e.questions.filter(o=>!n.has(o.ruleId))}}case"SET_RULE_NAME":return pe(e,a,n=>({...n,name:r.payload.name}));case"SET_RULE_DESCRIPTION":return pe(e,a,n=>({...n,description:r.payload.description}));case"MOVE_RULE":{const n=r.payload,o=y(e,a);if(!o||!e.stories.some(d=>d.id===n.storyId))return null;const i=e.rules.filter(d=>d.storyId===n.storyId&&d.id!==a);return n.after!==null&&!i.some(d=>d.id===n.after)?null:{...e,rules:me(e.rules,{...o,storyId:n.storyId},n.after)}}case"REORDER_RULE":{const n=y(e,a);if(!n)return null;const o=e.rules.filter(i=>i.storyId===n.storyId);return r.payload.after!==null&&!o.some(i=>i.id===r.payload.after)?null:{...e,rules:me(e.rules,n,r.payload.after)}}case"ADD_RULE":{const n=r.payload,o=T(e,a);return o?e.rules.some(i=>i.id===n.id)?e:P(e,n.id)?null:{...e,rules:[...e.rules,{id:n.id,storyId:o.id,name:n.name,...n.description===void 0?{}:{description:n.description}}]}:null}case"DELETE_RULE":return y(e,a)?{...e,rules:e.rules.filter(n=>n.id!==a),examples:e.examples.filter(n=>n.ruleId!==a),questions:e.questions.filter(n=>n.ruleId!==a)}:null;case"SET_EXAMPLE_NAME":return ue(e,a,n=>({...n,name:r.payload.name}));case"SET_EXAMPLE_DESCRIPTION":return ue(e,a,n=>({...n,description:r.payload.description}));case"MOVE_EXAMPLE":{const n=r.payload,o=b(e,a);if(!o||!y(e,n.ruleId))return null;const i=e.examples.filter(d=>d.ruleId===n.ruleId&&d.id!==a);return n.after!==null&&!i.some(d=>d.id===n.after)?null:{...e,examples:Q(e.examples,{...o,ruleId:n.ruleId},n.after)}}case"REORDER_EXAMPLE":{const n=b(e,a);if(!n)return null;const o=e.examples.filter(i=>i.ruleId===n.ruleId);return r.payload.after!==null&&!o.some(i=>i.id===r.payload.after)?null:{...e,examples:Q(e.examples,n,r.payload.after)}}case"ADD_EXAMPLE":{const n=r.payload,o=y(e,a);return o?e.examples.some(i=>i.id===n.id)?e:P(e,n.id)?null:{...e,examples:[...e.examples,{id:n.id,ruleId:o.id,name:n.name,...n.description===void 0?{}:{description:n.description}}]}:null}case"DELETE_EXAMPLE":return b(e,a)?{...e,examples:e.examples.filter(n=>n.id!==a)}:null;case"SET_QUESTION_NAME":return ce(e,a,n=>({...n,name:r.payload.name}));case"SET_QUESTION_DESCRIPTION":return ce(e,a,n=>({...n,description:r.payload.description}));case"MOVE_QUESTION":{const n=r.payload,o=R(e,a);if(!o||!y(e,n.ruleId))return null;const i=e.questions.filter(d=>d.ruleId===n.ruleId&&d.id!==a);return n.after!==null&&!i.some(d=>d.id===n.after)?null:{...e,questions:Q(e.questions,{...o,ruleId:n.ruleId},n.after)}}case"REORDER_QUESTION":{const n=R(e,a);if(!n)return null;const o=e.questions.filter(i=>i.ruleId===n.ruleId);return r.payload.after!==null&&!o.some(i=>i.id===r.payload.after)?null:{...e,questions:Q(e.questions,n,r.payload.after)}}case"ADD_QUESTION":{const n=r.payload,o=y(e,a);return o?e.questions.some(i=>i.id===n.id)?e:P(e,n.id)?null:{...e,questions:[...e.questions,{id:n.id,ruleId:o.id,name:n.name,...n.description===void 0?{}:{description:n.description}}]}:null}case"DELETE_QUESTION":return R(e,a)?{...e,questions:e.questions.filter(n=>n.id!==a)}:null;default:return Qe(r)}},P=(e,t)=>e.stories.some(r=>r.id===t)||e.rules.some(r=>r.id===t)||e.examples.some(r=>r.id===t)||e.questions.some(r=>r.id===t),le=(e,t,r)=>e.stories.some(a=>a.id===t)?{...e,stories:e.stories.map(a=>a.id===t?r(a):a)}:null,pe=(e,t,r)=>e.rules.some(a=>a.id===t)?{...e,rules:e.rules.map(a=>a.id===t?r(a):a)}:null,ue=(e,t,r)=>e.examples.some(a=>a.id===t)?{...e,examples:e.examples.map(a=>a.id===t?r(a):a)}:null,ce=(e,t,r)=>e.questions.some(a=>a.id===t)?{...e,questions:e.questions.map(a=>a.id===t?r(a):a)}:null,me=(e,t,r)=>{const a=e.filter(l=>l.id!==t.id),n=a.filter(l=>l.storyId===t.storyId),o=r===null?[t,...n]:F(n,t,r),i=a.findIndex(l=>l.storyId===t.storyId),d=new Set(n.map(l=>l.id)),c=a.filter(l=>!d.has(l.id)),p=i<0?c.length:Math.min(i,c.length);return[...c.slice(0,p),...o,...c.slice(p)]},Q=(e,t,r)=>{const a=e.filter(l=>l.id!==t.id),n=a.filter(l=>l.ruleId===t.ruleId),o=r===null?[t,...n]:F(n,t,r),i=a.findIndex(l=>l.ruleId===t.ruleId),d=new Set(n.map(l=>l.id)),c=a.filter(l=>!d.has(l.id)),p=i<0?c.length:Math.min(i,c.length);return[...c.slice(0,p),...o,...c.slice(p)]},Ee=(e,t,r)=>{if(!e.some(o=>o.id===t)||r!==null&&!e.some(o=>o.id===r))return null;if(r===t)return[...e];const a=e.find(o=>o.id===t);if(a===void 0)return null;const n=e.filter(o=>o.id!==t);return F(n,a,r)},F=(e,t,r)=>{const a=[...e],n=r===null?-1:a.findIndex(o=>o.id===r);return a.splice(n+1,0,t),a},it={story:"Story",rule:"Rule",example:"Example",question:"Question"},dt={story:"\u30B9\u30C8\u30FC\u30EA\u30FC",rule:"\u30EB\u30FC\u30EB",example:"\u5177\u4F53\u4F8B",question:"\u8CEA\u554F"},st={empty:"No rules yet","open-questions":"Open questions","too-big":"Consider splitting",thin:"A rule has no example",ready:"Looks ready"},lt={empty:"\u30EB\u30FC\u30EB\u672A\u6574\u7406","open-questions":"\u672A\u89E3\u6C7A\u306E\u8CEA\u554F\u3042\u308A","too-big":"\u5206\u5272\u3092\u691C\u8A0E",thin:"\u5177\u4F53\u4F8B\u306E\u7121\u3044\u30EB\u30FC\u30EB\u3042\u308A",ready:"\u5408\u610F\u3067\u304D\u305D\u3046"},C=Ce({en:{kindLabel:e=>it[e],readinessLabel:e=>st[e],map:"Map",cardKinds:"Card kinds",noStoriesTitle:"No stories yet",noStoriesBody:"Place one story (yellow), then line up the rules (blue) that accept it beneath it. For each rule, stack examples (green) in the top area and open questions (red) in the bottom area.",firstStory:"+ First story",addStoryButton:"+ Story",noExamples:"No examples yet",noQuestions:"No open questions",commentButton:"Comment",deleteButton:"Delete",nameField:e=>`${e} name`,newStory:"New story",newRule:"New rule",newExample:"New example",newQuestion:"New question",storyRenamedTitle:"Renamed the story",storyDescriptionUpdatedTitle:"Updated the story\u2019s description",storyReorderedTitle:"Reordered the story",storyAddedTitle:"Added a story",storyDeletedTitle:"Deleted the story",ruleRenamedTitle:"Renamed the rule",ruleDescriptionUpdatedTitle:"Updated the rule\u2019s description",ruleMovedTitle:"Moved the rule",ruleReorderedTitle:"Reordered the rule",ruleAddedTitle:"Added a rule",ruleDeletedTitle:"Deleted the rule",exampleRenamedTitle:"Renamed the example",exampleDescriptionUpdatedTitle:"Updated the example\u2019s description",exampleMovedTitle:"Moved the example",exampleReorderedTitle:"Reordered the example",exampleAddedTitle:"Added an example",exampleDeletedTitle:"Deleted the example",questionRenamedTitle:"Renamed the question",questionDescriptionUpdatedTitle:"Updated the question\u2019s description",questionMovedTitle:"Moved the question",questionReorderedTitle:"Reordered the question",questionAddedTitle:"Added a question",questionDeletedTitle:"Deleted the question",arrowTo:e=>`\u2192 \u201C${e}\u201D`,arrowFrom:(e,t)=>`\u201C${e}\u201D \u2192 \u201C${t}\u201D`,added:e=>`+ \u201C${e}\u201D`,deleted:e=>`\u2212 \u201C${e}\u201D`,toTop:"\u2192 To the top",afterPlacement:e=>`\u2192 After \u201C${e}\u201D`,wholeMap:"Whole map"},ja:{kindLabel:e=>dt[e],readinessLabel:e=>lt[e],map:"\u30DE\u30C3\u30D7",cardKinds:"\u30AB\u30FC\u30C9\u306E\u7A2E\u985E",noStoriesTitle:"\u30B9\u30C8\u30FC\u30EA\u30FC\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",noStoriesBody:"\u30B9\u30C8\u30FC\u30EA\u30FC\uFF08\u9EC4\uFF09\u30921\u679A\u7F6E\u304D\u3001\u305D\u306E\u4E0B\u306B\u53D7\u3051\u5165\u308C\u6761\u4EF6\u3068\u306A\u308B\u30EB\u30FC\u30EB\uFF08\u9752\uFF09\u3092\u4E26\u3079\u307E\u3059\u3002\u30EB\u30FC\u30EB\u3054\u3068\u306B\u3001\u4E0A\u306E\u6B04\u3078\u5177\u4F53\u4F8B\uFF08\u7DD1\uFF09\u3092\u3001\u4E0B\u306E\u6B04\u3078\u7B54\u3048\u306E\u51FA\u306A\u3044\u8AD6\u70B9\u3092\u8CEA\u554F\uFF08\u8D64\uFF09\u3068\u3057\u3066\u7A4D\u307F\u307E\u3059\u3002",firstStory:"+ \u6700\u521D\u306E\u30B9\u30C8\u30FC\u30EA\u30FC",addStoryButton:"+ \u30B9\u30C8\u30FC\u30EA\u30FC",noExamples:"\u5177\u4F53\u4F8B\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",noQuestions:"\u672A\u89E3\u6C7A\u306E\u8CEA\u554F\u306F\u3042\u308A\u307E\u305B\u3093",commentButton:"\u30B3\u30E1\u30F3\u30C8",deleteButton:"\u524A\u9664",nameField:e=>`${e}\u540D`,newStory:"\u65B0\u3057\u3044\u30B9\u30C8\u30FC\u30EA\u30FC",newRule:"\u65B0\u3057\u3044\u30EB\u30FC\u30EB",newExample:"\u65B0\u3057\u3044\u5177\u4F53\u4F8B",newQuestion:"\u65B0\u3057\u3044\u8CEA\u554F",storyRenamedTitle:"\u30B9\u30C8\u30FC\u30EA\u30FC\u540D\u3092\u5909\u66F4",storyDescriptionUpdatedTitle:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u8AAC\u660E\u3092\u66F4\u65B0",storyReorderedTitle:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u9806\u5E8F\u3092\u5909\u66F4",storyAddedTitle:"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u8FFD\u52A0",storyDeletedTitle:"\u30B9\u30C8\u30FC\u30EA\u30FC\u3092\u524A\u9664",ruleRenamedTitle:"\u30EB\u30FC\u30EB\u540D\u3092\u5909\u66F4",ruleDescriptionUpdatedTitle:"\u30EB\u30FC\u30EB\u306E\u8AAC\u660E\u3092\u66F4\u65B0",ruleMovedTitle:"\u30EB\u30FC\u30EB\u3092\u79FB\u52D5",ruleReorderedTitle:"\u30EB\u30FC\u30EB\u306E\u9806\u5E8F\u3092\u5909\u66F4",ruleAddedTitle:"\u30EB\u30FC\u30EB\u3092\u8FFD\u52A0",ruleDeletedTitle:"\u30EB\u30FC\u30EB\u3092\u524A\u9664",exampleRenamedTitle:"\u5177\u4F53\u4F8B\u540D\u3092\u5909\u66F4",exampleDescriptionUpdatedTitle:"\u5177\u4F53\u4F8B\u306E\u8AAC\u660E\u3092\u66F4\u65B0",exampleMovedTitle:"\u5177\u4F53\u4F8B\u3092\u79FB\u52D5",exampleReorderedTitle:"\u5177\u4F53\u4F8B\u306E\u9806\u5E8F\u3092\u5909\u66F4",exampleAddedTitle:"\u5177\u4F53\u4F8B\u3092\u8FFD\u52A0",exampleDeletedTitle:"\u5177\u4F53\u4F8B\u3092\u524A\u9664",questionRenamedTitle:"\u8CEA\u554F\u540D\u3092\u5909\u66F4",questionDescriptionUpdatedTitle:"\u8CEA\u554F\u306E\u8AAC\u660E\u3092\u66F4\u65B0",questionMovedTitle:"\u8CEA\u554F\u3092\u79FB\u52D5",questionReorderedTitle:"\u8CEA\u554F\u306E\u9806\u5E8F\u3092\u5909\u66F4",questionAddedTitle:"\u8CEA\u554F\u3092\u8FFD\u52A0",questionDeletedTitle:"\u8CEA\u554F\u3092\u524A\u9664",arrowTo:e=>`\u2192 \u300C${e}\u300D`,arrowFrom:(e,t)=>`\u300C${e}\u300D\u2192\u300C${t}\u300D`,added:e=>`+ \u300C${e}\u300D`,deleted:e=>`\u2212 \u300C${e}\u300D`,toTop:"\u2192 \u5148\u982D\u3078",afterPlacement:e=>`\u2192 \u300C${e}\u300D\u306E\u76F4\u5F8C\u3078`,wholeMap:"\u30DE\u30C3\u30D7\u5168\u4F53"}}),X=(e,t,r)=>{const a=typeof r=="string"?r:"",n=typeof t=="string"?t:void 0;return n===void 0?e.arrowTo(a):e.arrowFrom(n,a)},pt={SET_STORY_NAME:(e,t,r)=>({title:e.storyRenamedTitle,tone:"update",body:X(e,T(r,t.target.id)?.name,g(u.SET_STORY_NAME,t).name??"")}),SET_STORY_DESCRIPTION:(e,t)=>({title:e.storyDescriptionUpdatedTitle,tone:"update",body:e.arrowTo(String(g(u.SET_STORY_DESCRIPTION,t).description??"").slice(0,90))}),REORDER_STORY:(e,t)=>({title:e.storyReorderedTitle,tone:"move",body:Y(e,g(u.REORDER_STORY,t).after)}),ADD_STORY:(e,t)=>({title:e.storyAddedTitle,tone:"create",body:e.added(String(g(u.ADD_STORY,t).name??""))}),DELETE_STORY:(e,t,r)=>({title:e.storyDeletedTitle,tone:"delete",body:e.deleted(T(r,t.target.id)?.name??t.target.id)}),SET_RULE_NAME:(e,t,r)=>({title:e.ruleRenamedTitle,tone:"update",body:X(e,y(r,t.target.id)?.name,g(u.SET_RULE_NAME,t).name??"")}),SET_RULE_DESCRIPTION:(e,t)=>({title:e.ruleDescriptionUpdatedTitle,tone:"update",body:e.arrowTo(String(g(u.SET_RULE_DESCRIPTION,t).description??"").slice(0,90))}),MOVE_RULE:(e,t,r)=>({title:e.ruleMovedTitle,tone:"move",body:e.arrowTo(T(r,String(g(u.MOVE_RULE,t).storyId))?.name??String(g(u.MOVE_RULE,t).storyId??""))}),REORDER_RULE:(e,t)=>({title:e.ruleReorderedTitle,tone:"move",body:Y(e,g(u.REORDER_RULE,t).after)}),ADD_RULE:(e,t)=>({title:e.ruleAddedTitle,tone:"create",body:e.added(String(g(u.ADD_RULE,t).name??""))}),DELETE_RULE:(e,t,r)=>({title:e.ruleDeletedTitle,tone:"delete",body:e.deleted(y(r,t.target.id)?.name??t.target.id)}),SET_EXAMPLE_NAME:(e,t,r)=>({title:e.exampleRenamedTitle,tone:"update",body:X(e,b(r,t.target.id)?.name,g(u.SET_EXAMPLE_NAME,t).name??"")}),SET_EXAMPLE_DESCRIPTION:(e,t)=>({title:e.exampleDescriptionUpdatedTitle,tone:"update",body:e.arrowTo(String(g(u.SET_EXAMPLE_DESCRIPTION,t).description??"").slice(0,90))}),MOVE_EXAMPLE:(e,t,r)=>({title:e.exampleMovedTitle,tone:"move",body:e.arrowTo(y(r,String(g(u.MOVE_EXAMPLE,t).ruleId))?.name??String(g(u.MOVE_EXAMPLE,t).ruleId??""))}),REORDER_EXAMPLE:(e,t)=>({title:e.exampleReorderedTitle,tone:"move",body:Y(e,g(u.REORDER_EXAMPLE,t).after)}),ADD_EXAMPLE:(e,t)=>({title:e.exampleAddedTitle,tone:"create",body:e.added(String(g(u.ADD_EXAMPLE,t).name??""))}),DELETE_EXAMPLE:(e,t,r)=>({title:e.exampleDeletedTitle,tone:"delete",body:e.deleted(b(r,t.target.id)?.name??t.target.id)}),SET_QUESTION_NAME:(e,t,r)=>({title:e.questionRenamedTitle,tone:"update",body:X(e,R(r,t.target.id)?.name,g(u.SET_QUESTION_NAME,t).name??"")}),SET_QUESTION_DESCRIPTION:(e,t)=>({title:e.questionDescriptionUpdatedTitle,tone:"update",body:e.arrowTo(String(g(u.SET_QUESTION_DESCRIPTION,t).description??"").slice(0,90))}),MOVE_QUESTION:(e,t,r)=>({title:e.questionMovedTitle,tone:"move",body:e.arrowTo(y(r,String(g(u.MOVE_QUESTION,t).ruleId))?.name??String(g(u.MOVE_QUESTION,t).ruleId??""))}),REORDER_QUESTION:(e,t)=>({title:e.questionReorderedTitle,tone:"move",body:Y(e,g(u.REORDER_QUESTION,t).after)}),ADD_QUESTION:(e,t)=>({title:e.questionAddedTitle,tone:"create",body:e.added(String(g(u.ADD_QUESTION,t).name??""))}),DELETE_QUESTION:(e,t,r)=>({title:e.questionDeletedTitle,tone:"delete",body:e.deleted(R(r,t.target.id)?.name??t.target.id)})},Y=(e,t)=>t==null?e.toTop:e.afterPlacement(t),ge=(e,t,r,a)=>{let n;try{const o=pt[t.type];n=o?o(e,t,a??r):{title:t.type,tone:"meta"}}catch{n={title:t.type,tone:"meta"}}return{title:n.title,targetLabel:xe(e,r,t.target),tone:n.tone,...n.body===void 0?{}:{summary:n.body}}},ye=e=>`${e.type} ${I(e.target)} ${JSON.stringify(e.payload)}`,xe=(e,t,r)=>{try{switch(r.type){case"story":{const a=T(t,r.id);return a?`${e.kindLabel("story")} \xB7 ${a.name}`:`${e.kindLabel("story")} \xB7 ${r.id} (missing)`}case"rule":{const a=y(t,r.id);return a?`${e.kindLabel("rule")} \xB7 ${a.name}`:`${e.kindLabel("rule")} \xB7 ${r.id} (missing)`}case"example":{const a=b(t,r.id);return a?`${e.kindLabel("example")} \xB7 ${a.name}`:`${e.kindLabel("example")} \xB7 ${r.id} (missing)`}case"question":{const a=R(t,r.id);return a?`${e.kindLabel("question")} \xB7 ${a.name}`:`${e.kindLabel("question")} \xB7 ${r.id} (missing)`}case"page":return`${e.map} \xB7 ${j(t)}`;default:return`${r.type} \xB7 ${r.id}`}}catch{return`${r.type} \xB7 ${r.id}`}},he=(e,t,r)=>{const a=[{value:"page:example-mapping",label:e.wholeMap,group:e.map}];for(const n of t.stories)a.push({value:I({type:"story",id:n.id}),label:n.name,group:e.kindLabel("story")});for(const n of t.rules){const o=T(t,n.storyId);a.push({value:I({type:"rule",id:n.id}),label:o?`${o.name} \u203A ${n.name}`:n.name,group:e.kindLabel("rule")})}for(const n of t.examples){const o=y(t,n.ruleId);a.push({value:I({type:"example",id:n.id}),label:o?`${o.name} \u203A ${n.name}`:n.name,group:e.kindLabel("example")})}for(const n of t.questions){const o=y(t,n.ruleId);a.push({value:I({type:"question",id:n.id}),label:o?`${o.name} \u203A ${n.name}`:n.name,group:e.kindLabel("question")})}return a},fe=(e,t,r)=>{const a=L(t,r.card);return a?{value:I({type:a.kind,id:a.id}),label:a.name,group:e.kindLabel(a.kind)}:null},ut=4,Te=(e,t,r)=>{const a=t.rules.filter(p=>p.storyId===r),n=new Set(a.map(p=>p.id)),o=t.examples.filter(p=>n.has(p.ruleId)),i=t.questions.filter(p=>n.has(p.ruleId)).length,d=a.some(p=>!o.some(l=>l.ruleId===p.id)),c=a.length===0?"empty":i>0?"open-questions":a.length>ut?"too-big":d?"thin":"ready";return{rules:a.length,examples:o.length,questions:i,readiness:c,label:e.readinessLabel(c)}},j=e=>e.title??"Example Mapping",be=(e,t)=>{const r=L(e,t.card),a={...t};return r?a.card=r.id:delete a.card,a},Re=(e,t)=>{switch(t.type){case"story":case"rule":case"example":case"question":return L(e,t.id)?.kind===t.type;case"page":return!0;default:return!1}},Se=e=>{const t=C(e);return{name:"example-mapping",label:"Example Mapping",parseBase:te,emptyBase:re,actions:u,apply:se,canonicalState:at,hasTarget:Re,describe:(r,a,n)=>ge(t,r,a,n),serialize:ye,resolveNavigation:be,navigationFor:(r,a)=>L(r,a.id)?.kind===a.type?{card:a.id}:null,commentTargets:(r,a)=>he(t,r),currentTarget:(r,a)=>fe(t,r,a),title:j}},B=(e,t,r)=>{const a=Xe(t,ie(e.state));return e.dispatch(r(a)).ok?(e.navigate({card:a}),a):null},ct=(e,t)=>B(e,"new-story",r=>w.addStory(r,t.newStory)),mt=(e,t,r)=>B(e,"new-rule",a=>w.addRule(r,a,t.newRule)),Et=(e,t,r)=>B(e,"new-example",a=>w.addExample(r,a,t.newExample)),gt=(e,t,r)=>B(e,"new-question",a=>w.addQuestion(r,a,t.newQuestion)),yt={width:300,height:260},ve=["story","rule","example","question"],_e={story:{bg:"linear-gradient(178deg, #fff3a6, #fde77a)",ink:"#4a3a06"},rule:{bg:"linear-gradient(178deg, #a3d1f5, #7cb8ea)",ink:"#0e2c4b"},example:{bg:"linear-gradient(178deg, #c9eb95, #a8dc63)",ink:"#22380a"},question:{bg:"linear-gradient(178deg, #fbc6d9, #f4a0c0)",ink:"#4b1029"}},O=e=>{const{bg:t,ink:r}=_e[e];return`--em-card-bg:${t};--em-card-ink:${r}`},xt=G`
  :host {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box;
    min-height: 76px;
    padding: 17px 11px 11px;
    border-radius: 3px;
    background: var(--em-card-bg, var(--dpk-paper-raised));
    color: var(--em-card-ink, var(--dpk-ink));
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    cursor: grab;
    transform: rotate(var(--em-tilt, 0deg));
    transition:
      transform 180ms var(--dpk-ease),
      box-shadow 180ms var(--dpk-ease),
      opacity 180ms var(--dpk-ease);
  }

  :host(:hover) {
    z-index: 6;
    transform: rotate(0deg) translateY(-2px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow);
  }

  :host([focused]) {
    z-index: 5;
    transform: rotate(0deg);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow),
      0 0 0 2px color-mix(in srgb, var(--dpk-blue) 30%, transparent);
  }

  :host([data-mode='editing']),
  :host([data-mode='commenting']) {
    z-index: 7;
    transform: rotate(0deg);
  }

  :host([dragging]) {
    opacity: 0.4;
  }

  :host([data-kind='story']) {
    min-height: 68px;
    padding: 19px 14px 13px;
  }

  /* Small, faint, top-left: readable when looked for, quiet when not. */
  .card-kind {
    position: absolute;
    top: 5px;
    left: 8px;
    font-family: var(--dpk-mono);
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.12em;
    opacity: 0.5;
  }

  .card-name {
    min-width: 0;
    font-size: 13px;
    font-weight: 680;
    line-height: 1.35;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
    cursor: text;
  }

  :host([data-kind='story']) .card-name {
    font-size: 15.5px;
    line-height: 1.3;
  }

  .card-text {
    font-size: 11.5px;
    line-height: 1.5;
    opacity: 0.72;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  /* Comments already left: a corner flag, readable without hover. */
  .card-flag {
    position: absolute;
    top: -7px;
    right: -7px;
    min-width: 17px;
    height: 17px;
    padding: 0 4px;
    box-sizing: border-box;
    border-radius: 999px;
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 9.5px;
    font-weight: 650;
    line-height: 17px;
    text-align: center;
    box-shadow: 0 1px 4px color-mix(in srgb, var(--dpk-accent) 35%, transparent);
  }

  /* A side rail of round buttons that fades in on hover, like Event Storming:
     nothing crosses the card's face. */
  .card-tools {
    position: absolute;
    top: 9px;
    right: -11px;
    z-index: 8;
    display: flex;
    flex-direction: column;
    gap: 3px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 140ms var(--dpk-ease);
  }

  :host(:hover) .card-tools,
  :host([data-mode='commenting']) .card-tools,
  .card-tools:focus-within {
    opacity: 1;
    pointer-events: auto;
  }

  .card-tools .dpk-icon-btn {
    width: 22px;
    height: 22px;
    border: 1px solid var(--dpk-rule);
    border-radius: 50%;
    background: color-mix(in srgb, var(--dpk-paper-raised) 94%, transparent);
    box-shadow: var(--dpk-shadow-xs);
  }
`;class ht extends Ye{static{this.styles=[Be,xt,Ve]}static{this.properties={card:{attribute:!1},notes:{attribute:!1},tilt:{attribute:!1},mode:{type:String,reflect:!0,attribute:"data-mode"},focused:{type:Boolean,reflect:!0},dragging:{type:Boolean,reflect:!0},onIntent:{attribute:!1}}}#r="";#n=new ze(this);#e=new Ke(this);constructor(){super(),this.card=null,this.notes=[],this.tilt=0,this.mode="view",this.focused=!1,this.dragging=!1,this.onIntent=null,this.addEventListener("click",()=>this.#t({kind:"select"})),this.addEventListener("focusin",()=>this.draggable=!1),this.addEventListener("focusout",()=>this.draggable=!0)}updated(t){if(t.has("card")&&this.card){const{bg:n,ink:o}=_e[this.card.kind];this.setAttribute("data-kind",this.card.kind),this.style.setProperty("--em-card-bg",n),this.style.setProperty("--em-card-ink",o)}if(t.has("tilt")&&this.style.setProperty("--em-tilt",`${this.tilt}deg`),t.has("mode")&&(this.mode!=="commenting"&&(this.#r=""),this.mode==="editing"&&this.renderRoot.querySelector("dpk-component-inline-edit")?.startEditing()),this.mode!=="commenting")return;const r=this.renderRoot.querySelector(".comment-pop"),a=this.renderRoot.querySelector('[data-role="comment"]');r&&a&&this.#n.open(r,a,yt)}render(){const t=this.card;if(!t)return $;const r=C(this.#e.locale),a=r.kindLabel(t.kind);return f`
      <div class="card-kind">${a}</div>
      <dpk-component-inline-edit
        class="card-name"
        ?wrap=${!0}
        ?seamless=${!0}
        .value=${t.name}
        .label=${r.nameField(a)}
        @dpk-commit=${Fe(n=>this.#t({kind:"rename",name:n}))}
      ></dpk-component-inline-edit>
      ${t.description?f`<div class="card-text">${t.description}</div>`:$}
      ${this.notes.length>0?f`<span class="card-flag">${this.notes.length}</span>`:$}
      <div class="card-tools">
        <button
          class="dpk-icon-btn"
          type="button"
          data-role="comment"
          aria-label=${r.commentButton}
          data-active=${String(this.mode==="commenting")}
          @click=${this.#a({kind:"toggle-comment"})}
        >
          ${je()}
        </button>
        <button
          class="dpk-icon-btn"
          type="button"
          data-role="delete"
          aria-label=${r.deleteButton}
          @click=${this.#a({kind:"delete"})}
        >
          ${Je()}
        </button>
      </div>
      ${this.mode==="commenting"?this.#o(t):$}
    `}#o(t){return He(et(this.#e.locale),Ze(this.#r,this.notes.map(We),{label:t.name,key:`card:${t.id}`}),r=>{r.kind==="input"?(this.#r=r.body,this.requestUpdate()):this.#t(r)})}#a(t){return r=>{r.stopPropagation(),this.#t(t)}}#t(t){this.onIntent?.(t)}}const ft=()=>{customElements.get("dpk-internal-example-mapping-card")||customElements.define("dpk-internal-example-mapping-card",ht)},Tt=(e,t,r)=>{const a=e.at(-1)??null;if(t===null||r==="end")return a;const n=e.indexOf(t);return n<0?a:r==="after"?t:n===0?null:e.at(n-1)??null},ke=(e,t,r,a)=>{if(!T(e,t))return null;const n=e.stories.map(o=>o.id);return{type:"REORDER_STORY",target:{type:"story",id:t},payload:{after:U(n,t,r,a)}}},De=(e,t,r,a,n)=>{if(!T(e,t)||!y(e,r))return null;const o=e.rules.filter(i=>i.storyId===t).map(i=>i.id);return{type:"MOVE_RULE",target:{type:"rule",id:r},payload:{storyId:t,after:U(o,r,a,n)}}},Ie=(e,t,r,a,n)=>{if(!y(e,t)||!b(e,r))return null;const o=e.examples.filter(i=>i.ruleId===t).map(i=>i.id);return{type:"MOVE_EXAMPLE",target:{type:"example",id:r},payload:{ruleId:t,after:U(o,r,a,n)}}},Oe=(e,t,r,a,n)=>{if(!y(e,t)||!R(e,r))return null;const o=e.questions.filter(i=>i.ruleId===t).map(i=>i.id);return{type:"MOVE_QUESTION",target:{type:"question",id:r},payload:{ruleId:t,after:U(o,r,a,n)}}},V={kind:"idle"},J=(e,t)=>e.kind!=="idle"&&e.cardId===t,$e=(e,t)=>J(e,t)&&(e.kind==="editing"||e.kind==="commenting")?e.kind:"view",we=(e,t,r)=>{switch(r.kind){case"toggle-comment":return e.kind==="commenting"&&e.cardId===t?V:{kind:"commenting",cardId:t};case"rename":case"comment":case"dismiss":case"delete":return J(e,t)?V:e;case"select":return e}},bt=(e,t)=>{if(e==="story")return 0;let r=0;for(const a of t)r=r*31+a.charCodeAt(0)|0;return(Math.abs(r)%5-2)*.45},Rt=e=>f`<ul class="legend" aria-label=${e.cardKinds}>
    ${ve.map(t=>f`<li><span class="legend-swatch" style=${O(t)}></span>${e.kindLabel(t)}</li>`)}
  </ul>`,St=e=>{const{context:t,handlers:r,m:a}=e;return t.state.stories.length===0?f`
      <div class="empty">
        <h2>${a.noStoriesTitle}</h2>
        <p>${a.noStoriesBody}</p>
        <button class="dpk-btn dpk-btn--accent" type="button" @click=${r.addStory}>${a.firstStory}</button>
      </div>
    `:f`
    <div class="board" data-testid="example-mapping-board">
      ${z(t.state.stories,n=>n.id,n=>vt(e,n))}
      <button class="add-story" type="button" @click=${r.addStory}>${a.addStoryButton}</button>
    </div>
  `},W=(e,t,r)=>{const{context:a,mode:n,drag:o,handlers:i}=e,d=a.comments.filter(p=>p.target.type===t&&p.target.id===r.id),c=o.source({type:t,id:r.id});return f`<dpk-internal-example-mapping-card
    data-card=${r.id}
    data-card-kind=${t}
    data-dpk-target=${I({type:t,id:r.id})}
    draggable="true"
    .card=${{kind:t,id:r.id,name:r.name,...r.description===void 0?{}:{description:r.description}}}
    .notes=${d}
    .tilt=${bt(t,r.id)}
    .mode=${$e(n,r.id)}
    .onIntent=${p=>i.cardIntent(r.id,t,p)}
    ?focused=${a.navigation.card===r.id}
    ?dragging=${o.isDragging(t,r.id)}
    @dragstart=${c.dragstart}
    @dragend=${c.dragend}
  ></dpk-internal-example-mapping-card>`},vt=(e,t)=>{const{context:r,drag:a,handlers:n,m:o}=e,i=Te(o,r.state,t.id),d=`story:${t.id}`,c=a.target({key:d,accepts:"story",hovered:Me(".story-section","story"),onDrop:n.dropStory}),p=`rules:${t.id}`,l=a.target({key:p,accepts:"rule",hovered:Me(".rule-col","rule"),onDrop:v=>n.dropRule(t.id,v)});return f`
    <section
      class="story-section"
      data-story=${t.id}
      data-drop=${String(a.isOver(d))}
      @dragenter=${c.dragenter}
      @dragover=${c.dragover}
      @dragleave=${c.dragleave}
      @drop=${c.drop}
    >
      <header class="story-row">
        <div class="story-slot">${W(e,"story",t)}</div>
        <div class="story-meta">
          <span class="readiness" data-readiness=${i.readiness}>${i.label}</span>
          <span class="tally"
            ><i class="tally-dot" style=${O("rule")}></i>${o.kindLabel("rule")} ${i.rules}</span
          >
          <span class="tally"
            ><i class="tally-dot" style=${O("example")}></i>${o.kindLabel("example")}
            ${i.examples}</span
          >
          <span class="tally"
            ><i class="tally-dot" style=${O("question")}></i>${o.kindLabel("question")}
            ${i.questions}</span
          >
        </div>
      </header>
      <div
        class="rules-row"
        data-testid=${`rules-${t.id}`}
        data-drop=${String(a.isOver(p))}
        @dragenter=${l.dragenter}
        @dragover=${l.dragover}
        @dragleave=${l.dragleave}
        @drop=${l.drop}
      >
        ${z(ae(r.state,t.id),v=>v.id,v=>_t(e,v))}
        <button class="add-rule" type="button" @click=${()=>n.addRule(t.id)}>
          <span class="add-plus">+</span>${o.kindLabel("rule")}
        </button>
      </div>
    </section>
  `},_t=(e,t)=>{const{drag:r}=e;return f`
    <div class="rule-col" data-rule=${t.id} ?data-dragging=${r.isDragging("rule",t.id)}>
      ${W(e,"rule",t)} ${Le(e,t.id,"example")}
      ${Le(e,t.id,"question")}
    </div>
  `},kt={example:"examples",question:"questions"},Dt=(e,t)=>({testid:kt[t],label:e.kindLabel(t),empty:t==="example"?e.noExamples:e.noQuestions,add:`+ ${e.kindLabel(t)}`}),Le=(e,t,r)=>{const{context:a,drag:n,handlers:o,m:i}=e,d=Dt(i,r),c=`${d.testid}:${t}`,p=r==="example"?n.target({key:c,accepts:"example",hovered:Ae("example"),onDrop:_=>o.dropExample(t,_)}):n.target({key:c,accepts:"question",hovered:Ae("question"),onDrop:_=>o.dropQuestion(t,_)}),l=r==="example"?ne(a.state,t):oe(a.state,t),v=r==="example"?o.addExample:o.addQuestion;return f`<div
    class="card-area card-area--${r}"
    data-testid=${`${d.testid}-${t}`}
    data-drop=${String(n.isOver(c))}
    @dragenter=${p.dragenter}
    @dragover=${p.dragover}
    @dragleave=${p.dragleave}
    @drop=${p.drop}
  >
    <h3 class="area-label"><i class="tally-dot" style=${O(r)}></i>${d.label}</h3>
    ${z(l,_=>_.id,_=>W(e,r,_))}
    ${l.length===0?f`<p class="stack-hint">${d.empty}</p>`:$}
    <button class="add-card add-${r}" type="button" @click=${()=>v(t)}>${d.add}</button>
  </div>`},Ae=e=>t=>{const r=t.target instanceof Element?t.target.closest("dpk-internal-example-mapping-card"):null;return!r||r.getAttribute("data-card-kind")!==e?null:{id:r.getAttribute("data-card"),element:r}},Me=(e,t)=>r=>{const a=r.target instanceof Element?r.target.closest(e):null;return a?{id:a.getAttribute(`data-${t}`),element:a}:null},It=G`
  /* ------------------------------------------------------------ legend */

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 11.5px;
    color: var(--dpk-ink-soft);
  }

  /* Each entry reads as a small raised chip, matching the pill vocabulary
     used for the readiness / tally summary next to it. */
  .legend li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px 4px 6px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    white-space: nowrap;
  }

  .legend-swatch {
    width: 14px;
    height: 11px;
    border-radius: 2px;
    background: var(--em-card-bg);
    box-shadow: var(--dpk-shadow-xs);
  }

  /* ------------------------------------------------------------- board */

  .board {
    display: grid;
    gap: 22px;
    align-content: start;
  }

  .story-section {
    position: relative;
    display: grid;
    gap: 18px;
    min-width: 0;
    padding: 20px 22px 24px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background:
      radial-gradient(circle, var(--dpk-rule) 1px, transparent 1.2px) 0 0 / 18px 18px,
      var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow);
    transition: outline-color 150ms ease;
  }

  /* A quiet top edge marks the section as one grouped unit, echoing the
     activity band accent used elsewhere in the kit. */
  .story-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: var(--dpk-radius-lg) var(--dpk-radius-lg) 0 0;
    background: color-mix(in srgb, var(--dpk-accent) 45%, transparent);
  }

  .story-section[data-drop='true'] {
    outline: 2px dashed var(--dpk-blue);
    outline-offset: 4px;
  }

  /* The story heads the table: one wide card, with where it stands beside it. */
  .story-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 20px;
  }

  .story-slot {
    width: min(420px, 100%);
  }

  .story-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }

  .readiness {
    padding: 4px 11px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 650;
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink-soft);
    box-shadow: var(--dpk-shadow-xs);
  }

  .readiness[data-readiness='ready'] {
    background: var(--dpk-green-soft);
    color: var(--dpk-green);
  }

  .readiness[data-readiness='open-questions'],
  .readiness[data-readiness='too-big'] {
    background: var(--dpk-danger-soft);
    color: var(--dpk-danger);
  }

  .readiness[data-readiness='thin'] {
    background: var(--dpk-amber-soft);
    color: var(--dpk-amber);
  }

  .tally {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-soft);
  }

  .tally-dot {
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: var(--em-card-bg);
  }

  /* ------------------------------------------------- rules and examples */

  /* Rules side by side under the story; the row scrolls, never the page. */
  .rules-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    min-width: 0;
    overflow-x: auto;
    padding: 4px 4px 16px;
    border-radius: var(--dpk-radius);
  }

  /* A fade pinned to the row's right edge says more rules are a scroll away;
     scrolled to the end, it rests on the empty room after the last one. */
  .rules-row::after {
    content: '';
    position: sticky;
    right: -4px;
    flex: 0 0 36px;
    align-self: stretch;
    margin-left: -14px;
    background: linear-gradient(90deg, transparent, var(--dpk-paper-raised));
    pointer-events: none;
  }

  .rules-row[data-drop='true'] {
    background: var(--dpk-blue-soft);
  }

  /* A rule and its examples read as one lane: a soft tint plus a quiet left
     accent, so the grouping reads even where the tint thins out lower down. */
  .rule-col {
    position: relative;
    flex: 0 0 204px;
    display: grid;
    gap: 16px;
    align-content: start;
    padding: 10px 10px 14px;
    border-radius: var(--dpk-radius-lg);
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--dpk-blue) 9%, transparent),
      color-mix(in srgb, var(--dpk-blue) 3%, transparent) 70%,
      transparent
    );
    box-shadow: inset 2px 0 0 color-mix(in srgb, var(--dpk-blue) 40%, transparent);
  }

  .rule-col[data-dragging] {
    opacity: 0.45;
  }

  /* Examples on top, questions below: two areas, each its own drop target. */
  .card-area {
    display: grid;
    gap: 12px;
    align-content: start;
    min-height: 44px;
    padding: 8px 8px 10px;
    border-radius: var(--dpk-radius);
    box-shadow: inset 0 1px 3px var(--dpk-shade-1);
  }

  .card-area--example {
    background: var(--dpk-green-soft);
  }

  .card-area--question {
    background: var(--dpk-danger-soft);
  }

  .card-area--question dpk-internal-example-mapping-card {
    min-height: 56px;
  }

  .card-area[data-drop='true'] {
    outline: 2px dashed var(--dpk-blue);
    outline-offset: 2px;
  }

  .area-label {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--dpk-ink-soft);
  }

  .stack-hint {
    margin: 0;
    font-size: 11px;
    color: var(--dpk-ink-faint);
    text-align: center;
  }

  /* -------------------------------------------------------- add buttons */

  .add-card,
  .add-rule,
  .add-story {
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: color-mix(in srgb, var(--dpk-paper-raised) 60%, transparent);
    color: var(--dpk-ink-faint);
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      transform 140ms var(--dpk-ease);
  }

  .add-card {
    padding: 6px 8px;
  }

  .add-rule {
    flex: 0 0 120px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 2px;
    min-height: 96px;
  }

  .add-plus {
    font-size: 18px;
    line-height: 1;
  }

  .add-story {
    justify-self: start;
    padding: 10px 18px;
    font-size: 12.5px;
  }

  .add-card:hover,
  .add-rule:hover,
  .add-story:hover {
    border-color: var(--dpk-blue);
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
    transform: translateY(-1px);
  }

  /* The empty state is the working canvas before anything is on it: same
     dot-grid ground as the other templates' boards. */
  .empty {
    display: grid;
    gap: 10px;
    max-width: 620px;
    padding: 28px 24px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-dots), var(--dpk-paper-sunken);
  }

  .empty p {
    margin: 0;
    color: var(--dpk-ink-soft);
    line-height: 1.7;
  }
`,Ot={story:"SET_STORY_NAME",rule:"SET_RULE_NAME",example:"SET_EXAMPLE_NAME",question:"SET_QUESTION_NAME"},$t={story:"DELETE_STORY",rule:"DELETE_RULE",example:"DELETE_EXAMPLE",question:"DELETE_QUESTION"};class qe extends H{static{this.styles=[H.styles,It]}definitionFor(t){return Se(t)}static{this.properties={mode:{state:!0}}}#r=new Ge(this);constructor(){super(),this.mode=V}renderRegions(t){const r=C(this.locale);return{header:Rt(r),main:this.#n(t,r)}}#n(t,r){return f`
      ${St({context:t,mode:this.mode,drag:this.#r,m:r,handlers:{cardIntent:(a,n,o)=>this.#o(a,n,o),addStory:()=>this.#e(ct(t,r)),addRule:a=>this.#e(mt(t,r,a)),addExample:a=>this.#e(Et(t,r,a)),addQuestion:a=>this.#e(gt(t,r,a)),dropStory:a=>this.#a(a),dropRule:(a,n)=>this.#t(a,n),dropExample:(a,n)=>this.#d(a,n),dropQuestion:(a,n)=>this.#s(a,n)}})}
    `}#e(t){t!==null&&(this.mode={kind:"editing",cardId:t})}#o(t,r,a){const n=this.context();switch(a.kind){case"select":n.navigate({card:t});break;case"rename":n.dispatch({type:Ot[r],target:{type:r,id:t},payload:{name:a.name}});break;case"comment":n.dispatch({type:"comment",target:`${r}:${t}`,payload:{body:a.body}});break;case"delete":n.dispatch({type:$t[r],target:{type:r,id:t},payload:{}}),n.navigation.card===t&&n.navigate({card:null});break}this.mode=we(this.mode,t,a)}#a(t){const r=this.context(),a=ke(r.state,t.item.id,t.hoveredId,t.place);a&&r.dispatch(a)}#t(t,r){const a=this.context(),n=this.#i(r.hoveredId,r.event.clientX,r.place),o=De(a.state,t,r.item.id,r.hoveredId,n);o&&a.dispatch(o)}#i(t,r,a){if(t===null)return a;const n=this.renderRoot.querySelector(`.rule-col[data-rule="${t}"]`);if(!n)return a;const o=n.getBoundingClientRect();return r<=o.left+o.width/2?"before":"after"}#d(t,r){const a=this.context(),n=Ie(a.state,t,r.item.id,r.hoveredId,r.place);n&&a.dispatch(n)}#s(t,r){const a=this.context(),n=Oe(a.state,t,r.item.id,r.hoveredId,r.place);n&&a.dispatch(n)}}const Ne=()=>{ft(),customElements.get("dpk-template-example-mapping")||customElements.define("dpk-template-example-mapping",qe)},wt=Object.freeze(Object.defineProperty({__proto__:null,CARD_KINDS:ve,DpkTemplateExampleMapping:qe,IDLE_MODE:V,allMappingIds:ie,applyExampleMappingAction:se,cardModeOf:$e,cardPaletteStyle:O,defineExampleMappingElement:Ne,describeExampleMappingAction:ge,dropAfter:Tt,emptyExampleMappingBase:re,exampleMappingAction:w,exampleMappingActions:u,exampleMappingBaseSchema:ee,exampleMappingCommentTargets:he,exampleMappingCurrentTarget:fe,exampleMappingDefinitionFor:Se,exampleMappingHasTarget:Re,exampleMappingMessages:C,exampleMappingTargetLabel:xe,exampleMappingTitle:j,examplesOfRule:ne,findCard:L,findExample:b,findQuestion:R,findRule:y,findStory:T,modeConcerns:J,parseExampleMappingBase:te,presentStorySummary:Te,questionsOfRule:oe,reduceCardIntent:we,reorderById:Ee,resolveExampleDrop:Ie,resolveExampleMappingNavigation:be,resolveQuestionDrop:Oe,resolveRuleDrop:De,resolveStoryDrop:ke,rulesOfStory:ae,serializeExampleMappingAction:ye,storyIdOfCard:nt,storyIdOfExample:ot,storyIdOfRule:de},Symbol.toStringTag,{value:"Module"}));export{Ne as d,wt as i};
