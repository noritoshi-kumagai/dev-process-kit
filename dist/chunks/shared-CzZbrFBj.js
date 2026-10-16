import{af as Ne,ag as b,ah as i,ai as f,aj as c,ak as w,aC as h,ar as X,al as J,am as V,p as $,v as Re,aB as qe,ay as Ie,ao as Qe,aq as B,P as Ue,e as He,a2 as Ke,Y as Me,R as S,a5 as s,a6 as n,A as je,a7 as y,b5 as Z,b6 as Fe,aK as P,K as Ye,aH as Xe,a4 as Je,T as ee,l as Ve,aO as Ze}from"./shared-hrghWtVh.js";const oe=["working","waiting","blocked","done"],D=["todo","doing","blocked","done"],ae=["agent","human"],E=["why","what","goals","nonGoals"],T=J(c(),V(1)),eo=b({id:h,name:T,kind:i(w(ae),"agent")}),oo=b({id:h,title:T,status:i(w(D),"todo"),assignee:i(h),note:i(c()),proposed:i(X(),!1),reason:i(c())}),ao=b({id:h,label:i(c()),href:T,kind:i(c()),description:i(c())}),to=b({why:i(c()),what:i(c()),goals:i(f(c()),[]),nonGoals:i(f(c()),[])}),ro=b({id:h,from:i(h),at:i(c()),title:i(c()),body:i(c()),points:i(f(c()),[])}),no=b({id:h,ref:i(T),title:T,description:i(c()),blocking:i(X(),!1),assumption:i(c())}),te=b({title:i(c(),""),status:i(w(oe)),updatedAt:i(c()),context:i(to,{}),members:i(f(eo),[]),todos:i(f(oo),[]),outputs:i(f(ao),[]),log:i(f(ro),[]),questions:i(f(no),[])}),A=(o,e)=>{const a=new Set;for(const t of e){if(a.has(t))throw new Error(`duplicate ${o} id: ${t}`);a.add(t)}},u=o=>o===void 0||o.trim()===""?null:o,W=o=>o.filter(e=>e.trim()!==""),re=o=>{const e=Ne(te,o);A("member",e.members.map(t=>t.id)),A("todo",e.todos.map(t=>t.id)),A("output",e.outputs.map(t=>t.id)),A("log",e.log.map(t=>t.id)),A("question",e.questions.map(t=>t.id));const a=new Set(e.members.map(t=>t.id));for(const t of e.todos)if(t.assignee!==void 0&&!a.has(t.assignee))throw new Error(`todo ${t.id} is assigned to ${t.assignee}, which is not in members`);for(const t of e.log){if(t.from!==void 0&&!a.has(t.from))throw new Error(`log entry ${t.id} is from ${t.from}, which is not in members`);if(u(t.title)===null&&u(t.body)===null)throw new Error(`log entry ${t.id} needs a title or a body`)}for(const t of e.questions)if(!t.blocking&&u(t.assumption)===null)throw new Error(`question ${t.id} does not block, so it needs the assumption the agent works on`);return{title:e.title,status:e.status??null,updatedAt:u(e.updatedAt),context:{why:u(e.context.why),what:u(e.context.what),goals:W(e.context.goals),nonGoals:W(e.context.nonGoals)},members:e.members,todos:e.todos.map(t=>({id:t.id,title:t.title,status:t.status,assignee:t.assignee??null,note:u(t.note),proposed:t.proposed,reason:u(t.reason),added:!1})),outputs:e.outputs.map(t=>({id:t.id,label:u(t.label),href:t.href,kind:u(t.kind),description:u(t.description)})),log:e.log.map(t=>({id:t.id,from:t.from??null,at:u(t.at),title:u(t.title),body:u(t.body),points:W(t.points)})),questions:e.questions.map((t,r)=>({id:t.id,ref:t.ref??`Q${r+1}`,title:t.title,description:u(t.description),blocking:t.blocking,assumption:u(t.assumption)})),answers:{},decisions:{}}},ne=()=>({title:"",status:null,updatedAt:null,context:{why:null,what:null,goals:[],nonGoals:[]},members:[],todos:[],outputs:[],log:[],questions:[],answers:{},decisions:{}}),O=(o,e)=>e===null?void 0:o.members.find(a=>a.id===e),k=(o,e)=>o.todos.find(a=>a.id===e),de=(o,e)=>o.log.find(a=>a.id===e),se=o=>E.includes(o),N=(o,e)=>{const a=o.context[e];return typeof a=="string"||a!==null&&a.length>0},C=(o,e)=>o.questions.find(a=>a.id===e),ie=(o,e)=>{const a=o.answers[e.id];return a===void 0?!1:a.kind==="approve"||a.text.trim()!==""},R=(o,e)=>!e.proposed||o.decisions[e.id]==="accept",q=(o,e)=>R(o,e)&&O(o,e.assignee)?.kind==="human",le=(o,e,a)=>{const t={...o};return a===null?delete t[e]:t[e]=a,t},I=(o,e,a)=>({...o,answers:le(o.answers,e,a)}),so=(o,e,a)=>({...o,decisions:le(o.decisions,e,a)}),io=(o,e,a)=>({...o,todos:o.todos.map(t=>t.id===e?a(t):t)}),m={ANSWER_QUESTION:$("ANSWER_QUESTION","question",Qe("kind",[b({kind:B("approve")}),b({kind:B("answer"),text:c()}),b({kind:B("clear")})])),DECIDE_PROPOSAL:$("DECIDE_PROPOSAL","todo",b({decision:w(["accept","decline","clear"])})),SET_TODO_STATUS:$("SET_TODO_STATUS","todo",b({status:w(D)})),ADD_TODO:$("ADD_TODO","page",b({id:h,title:J(c(),Ie(),V(1)),assignee:qe(h)}),{dedupeKey:Re}),DELETE_TODO:$("DELETE_TODO","todo",b({}))},pe={type:"page",id:"task-board"},Q=(o,e)=>({type:"ANSWER_QUESTION",target:{type:"question",id:o},payload:e}),ce=(o,e)=>({type:"DECIDE_PROPOSAL",target:{type:"todo",id:o},payload:{decision:e}}),ue=(o,e)=>({type:"SET_TODO_STATUS",target:{type:"todo",id:o},payload:{status:e}}),be=(o,e,a)=>({type:"ADD_TODO",target:pe,payload:{id:o,title:e,assignee:a}}),ge=o=>({type:"DELETE_TODO",target:{type:"todo",id:o},payload:{}}),he=(o,e)=>{const a=Ue(m,e);if(a===null)return null;const t=a.target.id;switch(a.type){case"ANSWER_QUESTION":{const r=C(o,t);if(r===void 0)return null;const d=a.payload;return d.kind==="clear"?I(o,t,null):d.kind==="approve"?r.assumption===null?null:I(o,t,{kind:"approve"}):I(o,t,{kind:"answer",text:d.text})}case"DECIDE_PROPOSAL":{if(k(o,t)?.proposed!==!0)return null;const{decision:r}=a.payload;return so(o,t,r==="clear"?null:r)}case"SET_TODO_STATUS":{const r=k(o,t);if(r===void 0||!q(o,r))return null;const{status:d}=a.payload;return io(o,t,l=>({...l,status:d}))}case"ADD_TODO":{const{payload:r}=a;return k(o,r.id)!==void 0||r.assignee!==null&&O(o,r.assignee)===void 0?null:{...o,todos:[...o.todos,{id:r.id,title:r.title,status:"todo",assignee:r.assignee,note:null,proposed:!1,reason:null,added:!0}]}}case"DELETE_TODO":return k(o,t)?.added!==!0?null:{...o,todos:o.todos.filter(r=>r.id!==t)};default:return He(a)}},U=Ke({en:{wholeBoard:"Whole board",statusWorking:"Working",statusWaiting:"Waiting on you",statusBlocked:"Blocked",statusDone:"Done",todoTodo:"To do",todoDoing:"In progress",todoBlocked:"Blocked",todoDone:"Done",kindAgent:"Agent",kindHuman:"Human",updatedAt:o=>`Updated ${o}`,context:"What this task is about",contextWhy:"Why",contextWhat:"What",contextGoals:"Goals",contextNonGoals:"Non-goals",noContext:"The agent has not written down why and what yet.",tabs:"Board sections",tabContext:"Context",tabLog:"Work log",tabQuestions:"Questions",openCount:o=>`${o} open`,noQuestions:"The agent has nothing to ask right now.",questions:"Questions from the agent",questionsProgress:(o,e)=>`${o} of ${e} replied`,blockingGroup:"Blocking \u2014 the agent waits for your decision",provisionalGroup:"Going ahead on an assumption \u2014 the agent adjusts if you answer otherwise",blockingTag:"Blocking",assumption:"Assumption",recommendation:"Agent recommends",approveAssumption:"OK, go with this",approveRecommendation:"OK, go with the recommendation",answerOther:"Answer differently",answerOf:o=>`Your answer to ${o}`,answerPlaceholder:"What you expect instead\u2026",blockingPlaceholder:"Your decision\u2026",approvedTag:"Approved",answeredTag:"Answered",todos:"Todo",progress:(o,e)=>`${o} of ${e} done`,noTodosYet:"No todos yet",assignee:"Assignee",unassigned:"Unassigned",memberOption:(o,e)=>`${o} (${e})`,statusOf:o=>`Status of \u201C${o}\u201D`,filterTodos:"Show todos",filterAll:"All",filterHuman:"People",doneGroup:o=>`Done (${o})`,noHumanTodos:"Nobody but the agent has a todo.",addedTag:"Added by you",changedTag:"Changed",removeAdded:"Remove this todo you added",noTodos:"There are no todos yet.",newTodo:"New todo",newTodoPlaceholder:"Add a todo for the agent\u2026",newTodoAssignee:"Assignee of the new todo",addTodo:"Add",proposedMark:"Proposed by the agent",reason:"Why",accept:"Accept",decline:"Decline",decisionOf:o=>`Decision on \u201C${o}\u201D`,acceptedTag:"Accepted",declinedTag:"Declined",undoDecision:"Undo",outputs:"Outputs",noOutputs:"Nothing has been produced yet.",copy:o=>`Copy ${o}`,copied:"Copied",log:"Conversation with the agent",logLede:"Newest first",noLog:"Nothing has been exchanged yet.",fromAgent:"Agent",latestTag:"Latest",commentOn:o=>`Comment on ${o}`,todoGroup:"Todo",logGroup:"Log",contextGroup:"Context",proposalGroup:"Proposal",questionGroup:"Question",approved:"Approve the assumption",answered:"Answer",answerCleared:"Clear the reply",accepted:"Accept the proposal",declined:"Decline the proposal",decisionCleared:"Clear the decision",statusChanged:"Change the status",todoAdded:"Add a todo",todoRemoved:"Remove the added todo",quoted:o=>`\u2192 \u201C${o}\u201D`,change:(o,e)=>`${o} \u2192 ${e}`},ja:{wholeBoard:"\u30DC\u30FC\u30C9\u5168\u4F53",statusWorking:"\u4F5C\u696D\u4E2D",statusWaiting:"\u3042\u306A\u305F\u306E\u8FD4\u7B54\u5F85\u3061",statusBlocked:"\u30D6\u30ED\u30C3\u30AF\u4E2D",statusDone:"\u5B8C\u4E86",todoTodo:"\u672A\u7740\u624B",todoDoing:"\u9032\u884C\u4E2D",todoBlocked:"\u30D6\u30ED\u30C3\u30AF",todoDone:"\u5B8C\u4E86",kindAgent:"Agent",kindHuman:"\u4EBA\u9593",updatedAt:o=>`\u66F4\u65B0 ${o}`,context:"\u3053\u306E\u30BF\u30B9\u30AF\u306E\u524D\u63D0",contextWhy:"Why \u2014 \u306A\u305C\u3084\u308B\u304B",contextWhat:"What \u2014 \u4F55\u3092\u3084\u308B\u304B",contextGoals:"\u30B4\u30FC\u30EB",contextNonGoals:"\u3084\u3089\u306A\u3044\u3053\u3068",noContext:"Agent \u306F\u307E\u3060 Why / What \u3092\u66F8\u3044\u3066\u3044\u307E\u305B\u3093\u3002",tabs:"\u30DC\u30FC\u30C9\u306E\u533A\u5206",tabContext:"Context",tabLog:"\u4F5C\u696D\u30ED\u30B0",tabQuestions:"\u8CEA\u554F",openCount:o=>`\u672A\u56DE\u7B54 ${o} \u4EF6`,noQuestions:"\u4ECA Agent \u304B\u3089\u805E\u304D\u305F\u3044\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002",questions:"Agent \u304B\u3089\u306E\u8CEA\u554F",questionsProgress:(o,e)=>`\u8FD4\u7B54\u6E08\u307F ${o} / ${e}`,blockingGroup:"\u30D6\u30ED\u30C3\u30AB\u30FC \u2014 \u6C7A\u3081\u3066\u3082\u3089\u3046\u307E\u3067\u5148\u306B\u9032\u3081\u306A\u3044",provisionalGroup:"\u4EEE\u306E\u524D\u63D0\u3067\u9032\u884C\u4E2D \u2014 \u9055\u3048\u3070\u65B9\u91DD\u3092\u76F4\u3059",blockingTag:"\u30D6\u30ED\u30C3\u30AB\u30FC",assumption:"\u4EEE\u56DE\u7B54",recommendation:"Agent \u306E\u63A8\u5968",approveAssumption:"\u3053\u306E\u524D\u63D0\u3067 OK",approveRecommendation:"\u63A8\u5968\u3069\u304A\u308A\u3067 OK",answerOther:"\u5225\u306E\u56DE\u7B54\u3092\u3059\u308B",answerOf:o=>`${o} \u3078\u306E\u56DE\u7B54`,answerPlaceholder:"\u671F\u5F85\u3059\u308B\u56DE\u7B54\u3092\u5165\u529B\u2026",blockingPlaceholder:"\u3069\u3046\u3059\u308B\u304B\u3092\u5165\u529B\u2026",approvedTag:"\u627F\u8A8D\u6E08\u307F",answeredTag:"\u56DE\u7B54\u6E08\u307F",todos:"Todo",progress:(o,e)=>`${e} \u4EF6\u4E2D ${o} \u4EF6\u5B8C\u4E86`,noTodosYet:"Todo \u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093",assignee:"\u62C5\u5F53",unassigned:"\u672A\u5272\u308A\u5F53\u3066",memberOption:(o,e)=>`${o}\uFF08${e}\uFF09`,statusOf:o=>`\u300C${o}\u300D\u306E\u72B6\u614B`,filterTodos:"\u8868\u793A\u3059\u308B Todo",filterAll:"\u3059\u3079\u3066",filterHuman:"\u4EBA\u9593\u306E\u62C5\u5F53",doneGroup:o=>`\u5B8C\u4E86 ${o} \u4EF6`,noHumanTodos:"\u4EBA\u9593\u304C\u62C5\u5F53\u3059\u308B Todo \u306F\u3042\u308A\u307E\u305B\u3093\u3002",addedTag:"\u3042\u306A\u305F\u304C\u8FFD\u52A0",changedTag:"\u5909\u66F4\u3042\u308A",removeAdded:"\u8FFD\u52A0\u3057\u305F Todo \u3092\u53D6\u308A\u6D88\u3059",noTodos:"Todo \u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",newTodo:"\u65B0\u3057\u3044 Todo",newTodoPlaceholder:"Agent \u306B\u983C\u3080 Todo \u3092\u8FFD\u52A0\u2026",newTodoAssignee:"\u65B0\u3057\u3044 Todo \u306E\u62C5\u5F53",addTodo:"\u8FFD\u52A0",proposedMark:"Agent \u304B\u3089\u306E\u63D0\u6848",reason:"\u306A\u305C",accept:"\u627F\u8A8D",decline:"\u898B\u9001\u308A",decisionOf:o=>`\u300C${o}\u300D\u306E\u5224\u65AD`,acceptedTag:"\u627F\u8A8D\u6E08\u307F",declinedTag:"\u898B\u9001\u308A",undoDecision:"\u53D6\u308A\u6D88\u3059",outputs:"\u6210\u679C\u7269",noOutputs:"\u307E\u3060\u6210\u679C\u7269\u306F\u3042\u308A\u307E\u305B\u3093\u3002",copy:o=>`${o} \u3092\u30B3\u30D4\u30FC`,copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",log:"Agent \u3068\u306E\u3084\u308A\u3068\u308A",logLede:"\u65B0\u3057\u3044\u9806",noLog:"\u307E\u3060\u3084\u308A\u3068\u308A\u306F\u3042\u308A\u307E\u305B\u3093\u3002",fromAgent:"Agent",latestTag:"\u6700\u65B0",commentOn:o=>`${o} \u306B\u30B3\u30E1\u30F3\u30C8`,todoGroup:"Todo",logGroup:"\u4F5C\u696D\u30ED\u30B0",contextGroup:"Context",proposalGroup:"\u63D0\u6848",questionGroup:"\u8CEA\u554F",approved:"\u524D\u63D0\u3092\u627F\u8A8D",answered:"\u56DE\u7B54",answerCleared:"\u8FD4\u7B54\u3092\u30AF\u30EA\u30A2",accepted:"\u63D0\u6848\u3092\u627F\u8A8D",declined:"\u63D0\u6848\u3092\u898B\u9001\u308A",decisionCleared:"\u63D0\u6848\u306E\u5224\u65AD\u3092\u30AF\u30EA\u30A2",statusChanged:"\u72B6\u614B\u3092\u5909\u66F4",todoAdded:"Todo \u3092\u8FFD\u52A0",todoRemoved:"\u8FFD\u52A0\u3057\u305F Todo \u3092\u53D6\u308A\u6D88\u3057",quoted:o=>`\u2192 \u300C${o}\u300D`,change:(o,e)=>`${o} \u2192 ${e}`}}),ke=(o,e)=>{switch(e){case"working":return o.statusWorking;case"waiting":return o.statusWaiting;case"blocked":return o.statusBlocked;case"done":return o.statusDone}},z=(o,e)=>{switch(e){case"todo":return o.todoTodo;case"doing":return o.todoDoing;case"blocked":return o.todoBlocked;case"done":return o.todoDone}},lo=(o,e)=>e==="agent"?o.kindAgent:o.kindHuman,L=(o,e)=>{switch(e){case"why":return o.contextWhy;case"what":return o.contextWhat;case"goals":return o.contextGoals;case"nonGoals":return o.contextNonGoals}},xe=48,H=o=>{const e=o.title??o.body??o.id;return e.length<=xe?e:`${e.slice(0,xe-1)}\u2026`},po=(o,e,a)=>a===null?o.unassigned:O(e,a)?.name??a,fe=o=>o.title===""?"Task Context Board":o.title,me=(o,e,a)=>{switch(a.type){case"todo":{const t=k(e,a.id);return`${t?.proposed===!0?o.proposalGroup:o.todoGroup} \xB7 ${t?.title??a.id}`}case"log":{const t=de(e,a.id);return`${o.logGroup} \xB7 ${t===void 0?a.id:H(t)}`}case"context":return`${o.contextGroup} \xB7 ${se(a.id)?L(o,a.id):a.id}`;case"question":{const t=C(e,a.id);return t===void 0?a.id:`${t.ref} \xB7 ${t.title}`}case"page":return o.wholeBoard;default:return a.id}},co=(o,e)=>{switch(e){case"accept":return{title:o.accepted,tone:"update"};case"decline":return{title:o.declined,tone:"update"};case"clear":return{title:o.decisionCleared,tone:"delete"}}},uo=(o,e,a)=>{switch(a.type){case"ANSWER_QUESTION":{const t=S(m.ANSWER_QUESTION,a);if(t.kind==="clear")return{title:o.answerCleared,tone:"delete"};if(t.kind==="approve"){const r=C(e,a.target.id)?.assumption??null;return{title:o.approved,tone:"update",...r===null?{}:{body:o.quoted(r)}}}return{title:o.answered,tone:"update",body:o.quoted(t.text.slice(0,120))}}case"DECIDE_PROPOSAL":return co(o,S(m.DECIDE_PROPOSAL,a).decision);case"SET_TODO_STATUS":{const{status:t}=S(m.SET_TODO_STATUS,a),r=k(e,a.target.id)?.status,d=z(o,t);return{title:o.statusChanged,tone:"update",body:r===void 0?d:o.change(z(o,r),d)}}case"ADD_TODO":{const t=S(m.ADD_TODO,a);return{title:o.todoAdded,tone:"create",targetLabel:`${o.todoGroup} \xB7 ${t.title}`,...t.assignee===null?{}:{body:`${o.assignee}: ${po(o,e,t.assignee)}`}}}case"DELETE_TODO":return{title:o.todoRemoved,tone:"delete"};default:return{title:a.type,tone:"meta"}}},ve=(o,e,a,t)=>{let r;try{r=uo(o,t??a,e)}catch{r={title:e.type,tone:"meta"}}return{title:r.title,targetLabel:r.targetLabel??me(o,a,e.target),tone:r.tone,...r.body===void 0?{}:{summary:r.body}}},we=o=>`${o.type} ${Me(o.target)} ${JSON.stringify(o.payload)}`,$e=(o,e)=>[...e.questions.map(a=>({value:`question:${a.id}`,label:`${a.ref} \xB7 ${a.title}`,group:o.questionGroup})),...e.todos.map(a=>({value:`todo:${a.id}`,label:a.title,group:a.proposed?o.proposalGroup:o.todoGroup})),...e.log.map(a=>({value:`log:${a.id}`,label:H(a),group:o.logGroup})),...E.filter(a=>N(e,a)).map(a=>({value:`context:${a}`,label:L(o,a),group:o.contextGroup}))],ye=(o,e)=>e,Te=(o,e,a)=>({parts:E.filter(t=>N(e,t)).map(t=>{const r=e.context[t];return{id:t,title:L(o,t),text:typeof r=="string"?r:null,items:typeof r=="string"||r===null?[]:r,comments:a(`context:${t}`)}})}),bo=(o,e,a)=>{const t=o.answers[e.id];return{id:e.id,ref:e.ref,title:e.title,description:e.description,blocking:e.blocking,assumption:e.assumption,reply:t?.kind??"none",resolved:ie(o,e),draft:t?.kind==="answer"?t.text:"",comments:a(`question:${e.id}`)}},Ae=(o,e)=>{const a=o.questions.map(r=>bo(o,r,e)),t=a.filter(r=>r.resolved).length;return{blocking:a.filter(r=>r.blocking),provisional:a.filter(r=>!r.blocking),resolved:t,total:a.length,open:a.length-t,blockingOpen:a.filter(r=>r.blocking&&!r.resolved).length}},go=(o,e,a,t,r)=>{const d=k(a,t.id),l=O(e,t.assignee);return{id:t.id,title:t.title,note:t.note,reason:t.reason,status:t.status,statusLabel:z(o,t.status),assignee:t.assignee,assigneeName:l?.name??null,assigneeKind:l?.kind??null,editable:q(e,t),proposal:t.proposed?e.decisions[t.id]??"pending":null,added:t.added,changed:d!==void 0&&d.status!==t.status,comments:r(`todo:${t.id}`)}},Oe=(o,e,a,t,r="all")=>{const d=e.todos.filter(p=>R(e,p)),l=d.filter(p=>p.status==="done").length,g=e.members.some(p=>p.kind==="human"),x=g?r:"all",j=p=>p.assigneeKind==="human",G=e.todos.map(p=>go(o,e,a,p,t)),F=x==="human"?G.filter(j):G,Y=p=>p.status==="done"&&k(a,p.id)?.status==="done";return{todos:F.filter(p=>!Y(p)),done:F.filter(Y),filter:x,canFilter:g,humanCount:G.filter(j).length,progress:{done:l,total:d.length,label:d.length===0?o.noTodosYet:o.progress(l,d.length)},statuses:D.map(p=>({value:p,label:z(o,p)})),members:e.members.map(p=>({id:p.id,label:o.memberOption(p.name,lo(o,p.kind))}))}},Se=o=>{if(!/^[a-z][a-z\d+.-]*:\/\//i.test(o))return{kind:"path"};try{return{kind:"url",host:new URL(o).host}}catch{return{kind:"path"}}},De=o=>o.outputs.map(e=>({id:e.id,title:e.label??e.href,labelled:e.label!==null,href:e.href,kind:e.kind,description:e.description,place:Se(e.href)})),Ee=(o,e,a)=>({entries:e.log.map((t,r)=>{const d=O(e,t.from);return{id:t.id,author:d===void 0?null:{name:d.name,kind:d.kind},at:t.at,title:t.title,body:t.body,points:t.points,label:H(t),latest:r===e.log.length-1,comments:a(`log:${t.id}`)}}).reverse(),status:e.status===null&&e.updatedAt===null?null:{status:e.status,label:e.status===null?null:ke(o,e.status),updatedAt:e.updatedAt}}),Ce=(o,e)=>{switch(e.type){case"todo":return k(o,e.id)!==void 0;case"log":return de(o,e.id)!==void 0;case"context":return se(e.id)&&N(o,e.id);case"question":return C(o,e.id)!==void 0;case"page":return!0;default:return!1}},ze=o=>{const e=U(o);return{name:"task-board",label:"Task Context Board",parseBase:re,emptyBase:ne,actions:m,apply:he,hasTarget:Ce,describe:(a,t,r)=>ve(e,a,t,r),serialize:we,resolveNavigation:ye,commentTargets:a=>$e(e,a),title:fe}},_=(o,e,a,t)=>n`
  <button
    class="dpk-icon-btn board-comment"
    type="button"
    data-comment=${o}
    aria-label=${e}
    title=${e}
    @click=${()=>t.comment(o)}
  >
    ${je()} ${a>0?n`<span class="dpk-icon-badge">${a}</span>`:s}
  </button>
`,K=(o,e,a,t=null)=>n`
  <header class="board-section-head">
    <h2 id=${o}>${e}</h2>
    ${a===null?s:n`<span class="board-section-meta">${a}</span>`}
  </header>
  ${t===null?s:n`<p class="board-lede">${t}</p>`}
`,ho=(o,e,a,t)=>n`
  <section class="board-context" aria-label=${o.context}>
    ${e.parts.length===0&&!a?n`<p class="board-empty">${o.noContext}</p>`:s}
    ${e.parts.length===0?s:n`<div class="board-context-parts">
            ${y(e.parts,r=>r.id,r=>ko(o,r,t))}
          </div>`}
    <div class="board-figures"><slot name="main"></slot></div>
  </section>
`,ko=(o,e,a)=>n`
  <article
    class="board-context-part"
    data-context=${e.id}
    data-dpk-target=${`context:${e.id}`}
    aria-labelledby=${`board-context-${e.id}`}
  >
    <header class="board-context-head">
      <h3 class="board-context-title" id=${`board-context-${e.id}`}>${e.title}</h3>
      ${_(`context:${e.id}`,o.commentOn(e.title),e.comments,a)}
    </header>
    ${e.text===null?s:n`<p class="board-context-text">${e.text}</p>`}
    ${e.items.length===0?s:n`<ul class="board-context-items">
            ${e.items.map(t=>n`<li>${t}</li>`)}
          </ul>`}
  </article>
`,xo=(o,e,a)=>e.total===0?s:n`
    <section class="board-section" data-section="questions" aria-labelledby="board-questions">
      ${K("board-questions",o.questions,o.questionsProgress(e.resolved,e.total))}
      ${Le(o,"blocking",o.blockingGroup,e.blocking,a)}
      ${Le(o,"provisional",o.provisionalGroup,e.provisional,a)}
    </section>
  `,Le=(o,e,a,t,r)=>t.length===0?s:n`<div class="board-group" data-group=${e}>
        <h3 class="board-group-title">${a}</h3>
        <ol class="board-questions">
          ${y(t,d=>d.id,d=>fo(o,d,r))}
        </ol>
      </div>`,fo=(o,e,a)=>{const t=e.assumption!==null;return n`
    <li
      class="board-card board-question"
      data-question=${e.id}
      data-dpk-target=${`question:${e.id}`}
      data-blocking=${String(e.blocking)}
      data-reply=${e.reply}
      data-resolved=${String(e.resolved)}
    >
      <div class="board-card-head">
        <span class="board-ref">${e.ref}</span>
        <h4 class="board-card-title">${e.title}</h4>
        ${e.resolved?n`<span class="board-tag" data-tone="done">
                ${e.reply==="approve"?o.approvedTag:o.answeredTag}
              </span>`:s}
        ${_(`question:${e.id}`,o.commentOn(e.ref),e.comments,a)}
      </div>
      ${e.description===null?s:n`<p class="board-card-text">${e.description}</p>`}
      ${t?mo(o,e,a):s}
      <textarea
        class="dpk-textarea board-answer"
        data-answer-text=${e.id}
        rows="2"
        aria-label=${o.answerOf(e.ref)}
        placeholder=${t?o.answerPlaceholder:o.blockingPlaceholder}
        .value=${e.draft}
        ?hidden=${t&&e.reply!=="answer"}
        @input=${r=>{const d=r.currentTarget;d instanceof HTMLTextAreaElement&&a.answer(e.id,!t&&d.value===""?{kind:"clear"}:{kind:"answer",text:d.value})}}
      ></textarea>
    </li>
  `},mo=(o,e,a)=>n`
  <div class="board-assumption">
    <span class="board-assumption-label">${e.blocking?o.recommendation:o.assumption}</span>
    <p class="board-assumption-text">${e.assumption}</p>
  </div>
  <div class="board-reply" role="group" aria-label=${o.answerOf(e.ref)}>
    <button
      type="button"
      class="dpk-btn board-approve"
      aria-pressed=${e.reply==="approve"?"true":"false"}
      @click=${()=>a.answer(e.id,e.reply==="approve"?{kind:"clear"}:{kind:"approve"})}
    >
      ${Z()} ${e.blocking?o.approveRecommendation:o.approveAssumption}
    </button>
    <button
      type="button"
      class="dpk-btn dpk-btn--ghost board-other"
      aria-pressed=${e.reply==="answer"?"true":"false"}
      @click=${()=>e.reply==="answer"?a.answer(e.id,{kind:"clear"}):a.answerOther(e.id)}
    >
      ${o.answerOther}
    </button>
  </div>
`,vo=(o,e,a,t)=>n`
  <section class="board-section board-rail-section" data-section="outputs" aria-labelledby="board-outputs">
    ${K("board-outputs",o.outputs,e.length===0?null:String(e.length))}
    ${e.length===0?n`<p class="board-empty">${o.noOutputs}</p>`:n`<ul class="board-outputs">
            ${y(e,r=>r.id,r=>wo(o,r,a===r.id,t))}
          </ul>`}
  </section>
`,wo=(o,e,a,t)=>{const r=e.place,d=a?o.copied:o.copy(e.href);return n`
    <li class="board-output" data-output=${e.id} data-place=${r.kind}>
      <div class="board-output-body">
        <div class="board-output-head">
          ${e.kind===null?s:n`<span class="board-kind">${e.kind}</span>`}
          ${r.kind==="url"?n`<a class="board-output-link" href=${e.href} target="_blank" rel="noopener noreferrer"
                  >${e.title}</a
                >`:e.labelled?n`<span class="board-output-label">${e.title}</span>`:n`<code class="board-output-path">${e.href}</code>`}
        </div>
        ${r.kind==="url"?n`<span class="board-output-sub">${r.host}</span>`:e.labelled?n`<code class="board-output-path board-output-sub">${e.href}</code>`:s}
        ${e.description===null?s:n`<p class="board-output-text">${e.description}</p>`}
      </div>
      <button
        class="dpk-icon-btn board-copy"
        type="button"
        data-copied=${String(a)}
        aria-label=${d}
        title=${d}
        @click=${()=>t.copy(e.id,e.href)}
      >
        ${a?Z():Fe()}
      </button>
    </li>
  `},_e=(o,e)=>n`
  <div class="board-log-now">
    ${e.status===null?s:n`<span class="board-status" data-status=${e.status}>
            <span class="board-status-dot" aria-hidden="true"></span>${e.label}
          </span>`}
    ${e.updatedAt===null?s:n`<span class="board-updated">${o.updatedAt(e.updatedAt)}</span>`}
  </div>
`,$o=(o,e,a)=>n`
  <section class="board-section" data-section="log" aria-labelledby="board-log">
    ${K("board-log",o.log,e.entries.length===0?null:o.logLede)}
    ${e.entries.length===0?n`${e.status===null?s:_e(o,e.status)}
            <p class="board-empty">${o.noLog}</p>`:n`<ol class="board-log">
            ${y(e.entries,t=>t.id,t=>yo(o,t,t.latest?e.status:null,a))}
          </ol>`}
  </section>
`,yo=(o,e,a,t)=>{const r=e.author?.name??o.fromAgent;return n`
    <li
      class="board-log-entry"
      data-log=${e.id}
      data-dpk-target=${`log:${e.id}`}
      data-from=${e.author?.kind??"agent"}
      data-latest=${String(e.latest)}
    >
      <span class="board-log-avatar" aria-hidden="true">${r.slice(0,1)}</span>
      <div class="board-log-body">
        ${a===null?s:_e(o,a)}
        <div class="board-log-head">
          <span class="board-log-author">${r}</span>
          ${e.at===null?s:n`<time class="board-log-at">${e.at}</time>`}
          ${e.latest?n`<span class="board-log-latest">${o.latestTag}</span>`:s}
          ${_(`log:${e.id}`,o.commentOn(e.label),e.comments,t)}
        </div>
        ${e.title===null?s:n`<h3 class="board-log-title">${e.title}</h3>`}
        ${e.body===null?s:n`<p class="board-log-text">${e.body}</p>`}
        ${e.points.length===0?s:n`<ul class="board-log-points">
                ${e.points.map(d=>n`<li>${d}</li>`)}
              </ul>`}
      </div>
    </li>
  `},v=["context","log","questions"],To=(o,e)=>{const a=v.indexOf(o),t=v.length-1;switch(e){case"ArrowRight":return v[a===t?0:a+1]??null;case"ArrowLeft":return v[a===0?t:a-1]??null;case"Home":return v[0];case"End":return v[t]??null;default:return null}},Ao=(o,e)=>{switch(e){case"context":return o.tabContext;case"log":return o.tabLog;case"questions":return o.tabQuestions}},Oo=(o,e)=>{switch(o){case"context":return null;case"log":return e.log;case"questions":return e.questions}},So=(o,e,a,t,r)=>n`
  <div class="board-tabs" role="tablist" aria-label=${o.tabs}>
    ${v.map(d=>{const l=Oo(d,a);return n`<button
        type="button"
        role="tab"
        id=${`board-tab-${d}`}
        data-tab=${d}
        data-alert=${d==="questions"?String(a.alert):s}
        aria-controls=${`board-panel-${d}`}
        aria-selected=${String(e===d)}
        tabindex=${e===d?0:-1}
        title=${d==="questions"&&a.questions>0?o.openCount(a.questions):s}
        @click=${()=>t(d)}
        @keydown=${r}
      >
        <span class="board-tab-label">${Ao(o,d)}</span
        >${l===null||l===0?s:n`<span class="board-tab-count">${l}</span>`}
      </button>`})}
  </div>
`,M=(o,e,a)=>n`
  <div
    class="board-panel"
    id=${`board-panel-${o}`}
    role="tabpanel"
    aria-labelledby=${`board-tab-${o}`}
    ?hidden=${e!==o}
  >
    ${a}
  </div>
`,Ge="",Do=(o,e)=>e.statuses.some(a=>a.value===o),Eo=(o,e,a)=>n`
  <section class="board-section board-rail-section" data-section="todos" aria-labelledby="board-todos">
    <header class="board-section-head">
      <h2 id="board-todos">${o.todos}</h2>
      <span class="board-section-meta">${e.progress.label}</span>
    </header>
    ${e.progress.total===0?s:n`<div
            class="board-progress"
            role="progressbar"
            aria-label=${e.progress.label}
            aria-valuemin="0"
            aria-valuemax=${e.progress.total}
            aria-valuenow=${e.progress.done}
          >
            <span class="board-progress-fill" style=${`width: ${e.progress.done/e.progress.total*100}%`}></span>
          </div>`}
    ${e.canFilter?Co(o,e,a):s}
    ${e.todos.length===0&&e.done.length===0?n`<p class="board-empty">${e.filter==="human"?o.noHumanTodos:o.noTodos}</p>`:s}
    ${e.done.length===0?s:n`<details class="board-done">
            <summary class="board-done-summary">
              <span class="board-done-chevron" aria-hidden="true"></span>${o.doneGroup(e.done.length)}
            </summary>
            ${Be(o,e,e.done,a)}
          </details>`}
    ${e.todos.length===0?s:Be(o,e,e.todos,a)} ${Po(o,e,a)}
  </section>
`,Be=(o,e,a,t)=>n`
  <ul class="board-todos">
    ${y(a,r=>r.id,r=>_o(o,e,r,t))}
  </ul>
`,Co=(o,e,a)=>{const t=(r,d,l)=>n`
    <button
      type="button"
      class="board-filter-option"
      data-filter=${r}
      aria-pressed=${e.filter===r?"true":"false"}
      @click=${()=>a.filterTodos(r)}
    >
      ${d}${l===null?s:n`<span class="board-filter-count">${l}</span>`}
    </button>
  `;return n`<div class="board-filter" role="group" aria-label=${o.filterTodos}>
    ${t("all",o.filterAll,null)} ${t("human",o.filterHuman,e.humanCount)}
  </div>`},zo=(o,e)=>e.proposal==="pending"||e.proposal==="decline"?n`<span
        class="board-todo-mark board-todo-mark--proposal"
        role="img"
        aria-label=${o.proposedMark}
        title=${o.proposedMark}
        >?</span
      >`:n`<span class="board-todo-mark" data-status=${e.status} aria-hidden="true"></span>`,Lo=(o,e)=>n`
  ${e.proposal==="accept"?n`<span class="board-tag" data-tone="done">${o.acceptedTag}</span>`:s}
  ${e.proposal==="decline"?n`<span class="board-tag" data-tone="muted">${o.declinedTag}</span>`:s}
  ${e.added?n`<span class="board-tag" data-tone="new">${o.addedTag}</span>`:s}
  ${e.changed?n`<span class="board-tag" data-tone="changed">${o.changedTag}</span>`:s}
`,_o=(o,e,a,t)=>n`
  <li
    class="board-todo"
    data-todo=${a.id}
    data-dpk-target=${`todo:${a.id}`}
    data-status=${a.status}
    data-proposal=${a.proposal??"none"}
    data-added=${String(a.added)}
    data-changed=${String(a.changed)}
  >
    ${zo(o,a)}
    <div class="board-todo-body">
      <div class="board-todo-title"><span class="board-todo-text">${a.title}</span>${Lo(o,a)}</div>
      ${a.note===null?s:n`<p class="board-todo-note">${a.note}</p>`}
      ${a.reason===null||a.proposal==="accept"?s:n`<p class="board-reason"><span class="board-reason-label">${o.reason}</span>${a.reason}</p>`}
      <div class="board-todo-controls">
        ${a.proposal==="pending"?Go(o,a,t):a.proposal==="decline"?s:Bo(o,e,a,t)}
        ${a.assigneeName===null?s:n`<span class="board-assignee" data-kind=${a.assigneeKind??"agent"} title=${o.assignee}
                >${a.assigneeName}</span
              >`}
        ${a.proposal==="accept"||a.proposal==="decline"?n`<button
                type="button"
                class="dpk-btn dpk-btn--ghost board-undo"
                @click=${()=>t.decide(a.id,"clear")}
              >
                ${o.undoDecision}
              </button>`:s}
        ${_(`todo:${a.id}`,o.commentOn(a.title),a.comments,t)}
        ${a.added?n`<button
                class="dpk-icon-btn board-todo-remove"
                type="button"
                aria-label=${o.removeAdded}
                title=${o.removeAdded}
                @click=${()=>t.deleteTodo(a.id)}
              >
                ${Ye()}
              </button>`:s}
      </div>
    </div>
  </li>
`,Go=(o,e,a)=>n`
  <div class="board-decision" role="group" aria-label=${o.decisionOf(e.title)}>
    <button
      type="button"
      class="dpk-btn board-decide"
      data-decision="accept"
      @click=${()=>a.decide(e.id,"accept")}
    >
      ${o.accept}
    </button>
    <button
      type="button"
      class="dpk-btn dpk-btn--ghost board-decide"
      data-decision="decline"
      @click=${()=>a.decide(e.id,"decline")}
    >
      ${o.decline}
    </button>
  </div>
`,Bo=(o,e,a,t)=>a.editable?n`<select
        class="dpk-select board-todo-status"
        data-status=${a.status}
        aria-label=${o.statusOf(a.title)}
        @change=${Xe(r=>{Do(r,e)&&r!==a.status&&t.setStatus(a.id,r)})}
      >
        ${e.statuses.map(r=>n`<option value=${r.value} ?selected=${r.value===a.status}>${r.label}</option>`)}
      </select>`:n`<span class="board-todo-state" data-status=${a.status}>${a.statusLabel}</span>`,Po=(o,e,a)=>n`
  <form
    class="board-add-todo"
    @submit=${t=>{t.preventDefault();const r=P(t.currentTarget,HTMLFormElement);if(r===null)return;const d=P(r.elements.namedItem("title"),HTMLInputElement),l=P(r.elements.namedItem("assignee"),HTMLSelectElement),g=d?.value.trim()??"";d===null||g===""||(a.addTodo(g,l===null||l.value===Ge?null:l.value),d.value="")}}
  >
    <input
      class="dpk-input board-add-title"
      name="title"
      type="text"
      autocomplete="off"
      aria-label=${o.newTodo}
      placeholder=${o.newTodoPlaceholder}
    />
    <div class="board-add-row">
      ${e.members.length===0?s:n`<select class="dpk-select board-add-assignee" name="assignee" aria-label=${o.newTodoAssignee}>
              <option value=${Ge}>${o.unassigned}</option>
              ${e.members.map(t=>n`<option value=${t.id}>${t.label}</option>`)}
            </select>`}
      <button class="dpk-btn board-add-submit" type="submit">${o.addTodo}</button>
    </div>
  </form>
`,Wo=Je`
  /* The shell's sidebar is a right-hand rail (see \`sidebarLayout\`). */
  .dpk-sidebar {
    padding: 10px 14px 20px;
  }

  .board-rail {
    display: grid;
    gap: 14px;
  }

  /* The review opens where it always does, on the right, but over the rail:
     a third column would squeeze the board, and the shell's order would put
     it on the left of the main area. */
  .dpk-body {
    position: relative;
  }

  .dpk-notes {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    width: 360px;
    max-width: 100%;
    box-shadow: var(--dpk-shadow-lg);
  }

  .board {
    display: grid;
    gap: 18px;
    max-width: 880px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 760px) {
    /* Without a zero minimum, a truncated output row's full text width would
       widen the whole shell past the screen. */
    .dpk-body {
      flex-direction: column;
      min-width: 0;
      overflow: auto;
    }

    .dpk-main,
    .dpk-sidebar {
      flex: 0 0 auto;
      overflow: visible;
    }

    .dpk-sidebar {
      width: auto;
      max-width: none;
      border-left: 0;
      border-top: 1px solid var(--dpk-rule);
    }

    /* Stacked, the rail is what ends the page: it clears the hand-off dock, not the board above it. */
    .dpk-main-body {
      padding-bottom: 24px;
    }

    /* Stacked, the rail takes the full width: there is no edge to drag or
       fold on. A rail folded on a wider screen is a bar to unfold it. */
    .dpk-sidebar-resizer,
    .dpk-body > .dpk-sidebar-toggle {
      display: none;
    }

    .dpk-sidebar-strip {
      width: auto;
      padding: 8px 14px;
      justify-content: flex-start;
      border-left: 0;
      border-top: 1px solid var(--dpk-rule);
    }

    /* The body scrolls here, so an absolute panel would scroll away with it:
       the review takes the screen instead, below the floating button. */
    .dpk-notes {
      position: fixed;
      inset: 0;
      z-index: 50;
      width: auto;
      padding-top: 60px;
      border-left: 0;
    }
  }

  [data-status='working'],
  [data-status='doing'] {
    --board-tone: var(--dpk-blue);
    --board-tone-soft: var(--dpk-blue-soft);
  }

  [data-status='waiting'] {
    --board-tone: var(--dpk-amber);
    --board-tone-soft: var(--dpk-amber-soft);
  }

  [data-status='blocked'] {
    --board-tone: var(--dpk-danger);
    --board-tone-soft: var(--dpk-danger-soft);
  }

  [data-status='done'] {
    --board-tone: var(--dpk-green);
    --board-tone-soft: var(--dpk-green-soft);
  }

  [data-status='todo'] {
    --board-tone: var(--dpk-rule-strong);
    --board-tone-soft: var(--dpk-paper-sunken);
  }

  /* ------------------------------------------------------------- status */

  .board-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 4px 11px 4px 9px;
    border-radius: 999px;
    background: var(--board-tone-soft);
    color: color-mix(in srgb, var(--board-tone) 80%, var(--dpk-ink));
    font-size: 12.5px;
    font-weight: 650;
    white-space: nowrap;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--board-tone) 28%, transparent);
  }

  /* On a phone the header has no room; the Context tab says the same. */
  @media (max-width: 720px) {
    .board-status--header {
      display: none;
    }
  }

  .board-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--board-tone);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--board-tone) 22%, transparent);
  }

  .board-status[data-status='working'] .board-status-dot {
    animation: board-pulse 1.8s var(--dpk-ease) infinite;
  }

  @keyframes board-pulse {
    50% {
      box-shadow: 0 0 0 6px color-mix(in srgb, var(--board-tone) 0%, transparent);
    }
  }

  /* --------------------------------------------------------------- tabs */

  /* Stays at the top of the main area while a long log or question list scrolls. */
  .board-tabs {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    gap: 3px;
    padding: 3px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-sunken);
    box-shadow:
      inset 0 1px 2px var(--dpk-shade-1),
      0 6px 14px -10px var(--dpk-shade-3);
  }

  .board-tabs [role='tab'] {
    flex: 1 1 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    min-width: 0;
    padding: 7px 10px;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    color: var(--dpk-ink-soft);
    font: inherit;
    font-size: 13px;
    font-weight: 550;
    white-space: nowrap;
    cursor: pointer;
    transition:
      color 140ms var(--dpk-ease),
      background 140ms var(--dpk-ease);
  }

  .board-tabs [role='tab']:hover {
    color: var(--dpk-ink);
  }

  .board-tabs [role='tab']:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .board-tabs [role='tab'][aria-selected='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 700;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  @media (max-width: 400px) {
    .board-tabs [role='tab'] {
      gap: 5px;
      padding-inline: 6px;
    }
  }

  /* Too narrow for every label whole, a label gives way before its count does. */
  .board-tab-label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .board-tab-count {
    flex: none;
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

  /* An open blocker: the agent is stuck until the reader answers. */
  .board-tabs [data-alert='true'] .board-tab-count {
    background: var(--dpk-danger);
    color: #fff;
  }

  .board-panel {
    display: grid;
    gap: 18px;
    min-width: 0;
    animation: board-fade 180ms var(--dpk-ease);
  }

  .board-panel[hidden] {
    display: none;
  }

  @keyframes board-fade {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
  }

  /* ------------------------------------------------------------ context */

  .board-context {
    display: grid;
    gap: 14px;
    min-width: 0;
  }

  /* Why / What side by side, then Goals / Non-goals: a design doc at a glance. */
  .board-context-parts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  @media (max-width: 760px) {
    .board-context-parts {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  .board-context-part {
    display: grid;
    align-content: start;
    gap: 6px;
    min-width: 0;
    padding: 14px 16px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-xs), var(--dpk-bevel);
  }

  .board-context-part[data-context='why'],
  .board-context-part[data-context='what'] {
    border-top: 3px solid var(--dpk-accent);
  }

  .board-context-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .board-context-title {
    margin: 0;
    color: var(--dpk-ink-soft);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .board-context-text {
    margin: 0;
    color: var(--dpk-ink);
    font-size: 14px;
    line-height: 1.7;
    white-space: pre-line;
  }

  .board-context-items {
    display: grid;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
    color: var(--dpk-ink);
    font-size: 13.5px;
    line-height: 1.6;
  }

  .board-context-items li {
    position: relative;
    padding-left: 20px;
  }

  .board-context-items li::before {
    position: absolute;
    left: 0;
    font-weight: 700;
  }

  .board-context-part[data-context='goals'] li::before {
    content: '✓';
    color: var(--dpk-green);
  }

  .board-context-part[data-context='nonGoals'] li::before {
    content: '−';
    color: var(--dpk-ink-faint);
  }

  .board-context-part[data-context='nonGoals'] .board-context-items {
    color: var(--dpk-ink-soft);
  }

  .board-figures {
    display: grid;
    gap: 14px;
    min-width: 0;
  }

  .board-figures ::slotted(*) {
    min-width: 0;
  }

  .board-updated {
    color: var(--dpk-ink-faint);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
  }

  /* ----------------------------------------------------------- sections */

  .board-section {
    display: grid;
    gap: 12px;
    min-width: 0;
  }

  .board-rail-section {
    gap: 6px;
  }

  .board-section-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--dpk-rule);
  }

  .board-section-head h2 {
    margin: 0;
    color: var(--dpk-ink);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  /* The rail is narrow and always in view: its headings are labels, not breaks. */
  .board-rail-section .board-section-head {
    padding-bottom: 3px;
    line-height: 1.3;
  }

  .board-rail-section .board-section-head h2 {
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--dpk-ink-soft);
  }

  .board-section-meta {
    color: var(--dpk-ink-faint);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
  }

  .board-lede {
    margin: -4px 0 0;
    color: var(--dpk-ink-soft);
    font-size: 12.5px;
  }

  .board-empty {
    margin: 0;
    padding: 12px 14px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius);
    color: var(--dpk-ink-faint);
    font-size: 13px;
  }

  .board-tag {
    flex: 0 0 auto;
    padding: 1px 7px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 650;
    line-height: 1.6;
    white-space: nowrap;
  }

  .board-tag[data-tone='done'] {
    background: var(--dpk-green-soft);
    color: color-mix(in srgb, var(--dpk-green) 75%, var(--dpk-ink));
  }

  .board-tag[data-tone='new'] {
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent-ink);
  }

  .board-tag[data-tone='changed'] {
    background: var(--dpk-blue-soft);
    color: color-mix(in srgb, var(--dpk-blue) 75%, var(--dpk-ink));
  }

  .board-tag[data-tone='muted'] {
    background: var(--dpk-paper-inset);
    color: var(--dpk-ink-soft);
  }

  .board-comment {
    flex: 0 0 auto;
    position: relative;
  }

  /* ---------------------------------------------------------- questions */

  /* Blocking questions are red: the agent is waiting. The rest are amber: the
     agent goes on under its assumption. Either turns green once replied to. */
  .board-group {
    --board-group-tone: var(--dpk-amber);
    --board-group-soft: var(--dpk-amber-soft);
    display: grid;
    gap: 8px;
  }

  .board-group[data-group='blocking'] {
    --board-group-tone: var(--dpk-danger);
    --board-group-soft: var(--dpk-danger-soft);
  }

  .board-group-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    color: color-mix(in srgb, var(--board-group-tone) 75%, var(--dpk-ink));
    font-size: 12.5px;
    font-weight: 700;
  }

  .board-group-title::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--board-group-tone);
  }

  .board-group + .board-group {
    margin-top: 6px;
  }

  .board-questions {
    display: grid;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .board-card {
    display: grid;
    gap: 10px;
    padding: 14px 16px;
    border: 1px solid var(--dpk-rule);
    border-left: 3px solid var(--board-group-tone);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-xs);
    transition:
      border-color 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease);
  }

  .board-question[data-resolved='true'] {
    border-left-color: var(--dpk-green);
  }

  .board-card-head {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .board-card-title {
    flex: 1 1 auto;
    margin: 0;
    color: var(--dpk-ink);
    font-size: 14px;
    font-weight: 650;
    line-height: 1.5;
  }

  .board-card-text {
    margin: 0;
    color: var(--dpk-ink-soft);
    font-size: 13px;
    line-height: 1.65;
    white-space: pre-line;
  }

  .board-ref {
    flex: 0 0 auto;
    padding: 2px 7px;
    border-radius: var(--dpk-radius-xs);
    background: var(--board-group-soft);
    color: color-mix(in srgb, var(--board-group-tone) 75%, var(--dpk-ink));
    font-family: var(--dpk-mono);
    font-size: 11.5px;
    font-weight: 700;
    line-height: 1.6;
  }

  .board-question[data-resolved='true'] .board-ref {
    background: var(--dpk-green-soft);
    color: color-mix(in srgb, var(--dpk-green) 75%, var(--dpk-ink));
  }

  .board-assumption {
    display: grid;
    gap: 3px;
    padding: 9px 12px;
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-sunken);
  }

  .board-assumption-label {
    color: var(--dpk-ink-faint);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .board-assumption-text {
    margin: 0;
    color: var(--dpk-ink);
    font-size: 13.5px;
    line-height: 1.55;
    white-space: pre-line;
  }

  .board-question[data-reply='answer'] .board-assumption-text {
    color: var(--dpk-ink-faint);
    text-decoration: line-through;
    text-decoration-color: color-mix(in srgb, var(--dpk-ink-faint) 60%, transparent);
  }

  .board-reply {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .board-approve svg {
    width: 14px;
    height: 14px;
  }

  .board-approve[aria-pressed='true'] {
    border-color: var(--dpk-green);
    background: var(--dpk-green-soft);
    color: color-mix(in srgb, var(--dpk-green) 70%, var(--dpk-ink));
  }

  .board-other[aria-pressed='true'] {
    border-color: color-mix(in srgb, var(--dpk-accent) 55%, var(--dpk-rule));
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent-ink);
  }

  .board-answer {
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
  }

  .board-answer[hidden] {
    display: none;
  }

  /* -------------------------------------------------------------- todos */

  .board-progress {
    height: 6px;
    border-radius: 999px;
    background: var(--dpk-rule);
    overflow: hidden;
  }

  .board-progress-fill {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--dpk-green);
    transition: width 240ms var(--dpk-ease);
  }

  .board-todos {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-xs);
    overflow: hidden;
  }

  .board-todo {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: start;
    gap: 10px;
    padding: 9px 12px;
    border-top: 1px solid var(--dpk-rule);
  }

  .board-todo:first-child {
    border-top: 0;
  }

  .board-todo[data-added='true'] {
    background: color-mix(in srgb, var(--dpk-accent) 5%, var(--dpk-paper-raised));
  }

  .board-todo[data-proposal='pending'] {
    background: color-mix(in srgb, var(--dpk-violet) 5%, var(--dpk-paper-raised));
  }

  .board-todo[data-proposal='decline'] {
    background: var(--dpk-paper-sunken);
  }

  .board-todo[data-proposal='decline'] .board-todo-text,
  .board-todo[data-proposal='decline'] .board-reason {
    color: var(--dpk-ink-faint);
  }

  .board-todo[data-proposal='decline'] .board-todo-text {
    text-decoration: line-through;
  }

  .board-todo-mark {
    width: 12px;
    height: 12px;
    margin-top: 4px;
    border: 2px solid var(--board-tone);
    border-radius: 50%;
    box-sizing: border-box;
  }

  .board-todo-mark[data-status='doing'] {
    background: linear-gradient(90deg, var(--board-tone) 50%, transparent 50%);
  }

  .board-todo-mark[data-status='done'],
  .board-todo-mark[data-status='blocked'] {
    background: var(--board-tone);
  }

  /* A proposal is not work yet: a question mark in place of the status. */
  .board-todo-mark--proposal {
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    margin: 2px -2px 0;
    border: 1.5px dashed var(--dpk-violet);
    background: var(--dpk-violet-soft);
    color: var(--dpk-violet);
    font-size: 10.5px;
    font-weight: 800;
    line-height: 1;
  }

  .board-todo[data-proposal='decline'] .board-todo-mark--proposal {
    border-color: var(--dpk-rule-strong);
    background: transparent;
    color: var(--dpk-ink-faint);
  }

  .board-todo-body {
    display: grid;
    gap: 4px;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .board-todo-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 6px;
    color: var(--dpk-ink);
    font-size: 13.5px;
    line-height: 1.5;
  }

  .board-todo[data-status='done'] .board-todo-text {
    color: var(--dpk-ink-faint);
    text-decoration: line-through;
    text-decoration-color: color-mix(in srgb, var(--dpk-ink-faint) 60%, transparent);
  }

  .board-todo-note,
  .board-reason {
    margin: 0;
    color: var(--dpk-ink-soft);
    font-size: 12px;
    line-height: 1.55;
  }

  .board-reason-label {
    margin-right: 6px;
    padding: 0 5px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-violet-soft);
    color: var(--dpk-violet);
    font-size: 10.5px;
    font-weight: 700;
  }

  .board-todo-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
  }

  .board-todo-status {
    width: auto;
    min-width: 0;
    min-height: 26px;
    height: 26px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 12px;
  }

  .board-todo-status {
    border-color: color-mix(in srgb, var(--board-tone) 45%, var(--dpk-rule));
    background-color: var(--board-tone-soft);
    color: var(--dpk-ink);
    font-weight: 600;
  }

  /* The agent's own status: it reports it by rewriting the board. */
  .board-todo-state {
    display: inline-flex;
    align-items: center;
    height: 22px;
    padding: 0 8px;
    border-radius: 999px;
    background: var(--board-tone-soft);
    color: color-mix(in srgb, var(--board-tone) 75%, var(--dpk-ink));
    font-size: 11.5px;
    font-weight: 600;
    white-space: nowrap;
  }

  .board-todo-state[data-status='todo'] {
    color: var(--dpk-ink-soft);
  }

  .board-assignee {
    display: inline-flex;
    align-items: center;
    max-width: 140px;
    height: 22px;
    padding: 0 8px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    color: var(--dpk-ink-soft);
    font-size: 11.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .board-assignee::before {
    content: '@';
    margin-right: 1px;
    color: var(--dpk-ink-faint);
  }

  .board-assignee[data-kind='human'] {
    border-color: color-mix(in srgb, var(--dpk-violet) 35%, var(--dpk-rule));
    background: var(--dpk-violet-soft);
    color: var(--dpk-violet);
    font-weight: 600;
  }

  .board-assignee[data-kind='human']::before {
    color: inherit;
  }

  /* ------------------------------------------------------ filter / done */

  .board-filter {
    display: inline-flex;
    justify-self: start;
    gap: 2px;
    padding: 2px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-sunken);
  }

  .board-filter-option {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    border: 0;
    border-radius: var(--dpk-radius-xs);
    background: transparent;
    color: var(--dpk-ink-soft);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
  }

  .board-filter-option:hover {
    color: var(--dpk-ink);
  }

  .board-filter-option:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .board-filter-option[aria-pressed='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 650;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .board-filter-count {
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    color: var(--dpk-violet);
  }

  .board-done {
    display: grid;
    gap: 6px;
  }

  .board-done-summary {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    justify-self: start;
    padding: 3px 8px 3px 4px;
    border-radius: var(--dpk-radius-xs);
    color: var(--dpk-ink-soft);
    font-size: 12px;
    font-weight: 600;
    list-style: none;
    cursor: pointer;
    user-select: none;
  }

  .board-done-summary::-webkit-details-marker {
    display: none;
  }

  .board-done-summary:hover {
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink);
  }

  .board-done-summary:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .board-done-chevron {
    width: 6px;
    height: 6px;
    margin: 0 3px;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    transform: rotate(-45deg);
    transition: transform 160ms var(--dpk-ease);
  }

  .board-done[open] .board-done-chevron {
    transform: rotate(45deg);
  }

  .board-todo-controls .board-comment {
    margin-left: auto;
  }

  .board-decision {
    display: flex;
    gap: 6px;
  }

  .board-decide,
  .board-undo {
    min-height: 26px;
    height: 26px;
    padding: 0 10px;
    font-size: 12px;
  }

  .board-decide[data-decision='accept'] {
    border-color: color-mix(in srgb, var(--dpk-green) 50%, var(--dpk-rule));
    color: color-mix(in srgb, var(--dpk-green) 70%, var(--dpk-ink));
  }

  .board-decide[data-decision='accept']:hover {
    background: var(--dpk-green-soft);
  }

  .board-add-todo {
    display: grid;
    gap: 6px;
  }

  .board-add-row {
    display: flex;
    gap: 6px;
  }

  .board-add-assignee {
    flex: 1 1 auto;
    width: auto;
    min-width: 0;
  }

  .board-add-submit {
    flex: 0 0 auto;
  }

  /* ------------------------------------------------------------ outputs */

  .board-outputs {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-xs);
    overflow: hidden;
  }

  .board-output {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 8px;
    padding: 6px 6px 6px 10px;
    border-top: 1px solid var(--dpk-rule);
  }

  .board-output:first-child {
    border-top: 0;
  }

  .board-output-body {
    display: grid;
    gap: 1px;
    min-width: 0;
  }

  .board-output-head {
    display: flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
  }

  .board-kind {
    flex: 0 0 auto;
    padding: 0 5px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink-soft);
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 700;
    line-height: 1.7;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .board-output-link,
  .board-output-label,
  .board-output-head .board-output-path {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--dpk-ink);
    font-size: 13px;
    font-weight: 600;
  }

  .board-output-link {
    text-decoration: none;
  }

  .board-output-link:hover {
    color: var(--dpk-blue);
    text-decoration: underline;
  }

  .board-output-link:focus-visible {
    outline: none;
    border-radius: var(--dpk-radius-xs);
    box-shadow: var(--dpk-focus);
  }

  .board-output-path {
    font-family: var(--dpk-mono);
    font-size: 12px;
  }

  .board-output-head .board-output-path {
    font-size: 12px;
  }

  .board-output-sub {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 11px;
    font-weight: 400;
  }

  .board-output-text {
    margin: 2px 0 0;
    color: var(--dpk-ink-soft);
    font-size: 12px;
    line-height: 1.5;
  }

  .board-copy[data-copied='true'] {
    color: var(--dpk-green);
  }

  /* ---------------------------------------------------------------- log */

  .board-log {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .board-log-entry {
    position: relative;
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 10px;
    padding-bottom: 14px;
  }

  /* The line that joins the exchanges into one conversation. */
  .board-log-entry::before {
    content: '';
    position: absolute;
    left: 13px;
    top: 30px;
    bottom: 0;
    width: 2px;
    background: var(--dpk-rule);
  }

  .board-log-entry:last-child::before {
    display: none;
  }

  .board-log-avatar {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent-strong);
    font-size: 12px;
    font-weight: 700;
  }

  .board-log-entry[data-from='human'] .board-log-avatar {
    background: var(--dpk-violet-soft);
    color: var(--dpk-violet);
  }

  .board-log-body {
    min-width: 0;
    padding: 10px 14px 12px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
  }

  .board-log-entry[data-from='human'] .board-log-body {
    background: color-mix(in srgb, var(--dpk-violet) 4%, var(--dpk-paper-raised));
    border-color: color-mix(in srgb, var(--dpk-violet) 22%, var(--dpk-rule));
  }

  .board-log-entry[data-latest='true'] .board-log-body {
    border-color: color-mix(in srgb, var(--dpk-accent) 45%, var(--dpk-rule));
    box-shadow:
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-accent-soft);
  }

  /* Where the task stands, on the newest entry only. */
  .board-log-now {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: -2px 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--dpk-rule);
  }

  .board-section > .board-log-now {
    margin: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }

  .board-log-head {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 24px;
  }

  .board-log-author {
    color: var(--dpk-ink);
    font-size: 12.5px;
    font-weight: 700;
  }

  .board-log-entry[data-from='human'] .board-log-author {
    color: var(--dpk-violet);
  }

  .board-log-at {
    color: var(--dpk-ink-faint);
    font-size: 11.5px;
    font-variant-numeric: tabular-nums;
  }

  .board-log-latest {
    padding: 1px 7px;
    border-radius: 999px;
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent-strong);
    font-size: 10.5px;
    font-weight: 700;
  }

  .board-log-head .board-comment {
    margin-left: auto;
  }

  .board-log-title {
    margin: 4px 0 0;
    color: var(--dpk-ink);
    font-size: 14px;
    font-weight: 650;
    line-height: 1.5;
  }

  .board-log-text {
    margin: 4px 0 0;
    color: var(--dpk-ink);
    font-size: 13.5px;
    line-height: 1.65;
    white-space: pre-line;
  }

  .board-log-title + .board-log-text {
    color: var(--dpk-ink-soft);
    font-size: 13px;
  }

  .board-log-points {
    margin: 6px 0 0;
    padding-left: 18px;
    color: var(--dpk-ink-soft);
    font-size: 12.5px;
    line-height: 1.6;
  }

  @media (prefers-reduced-motion: reduce) {
    .board-status[data-status='working'] .board-status-dot {
      animation: none;
    }

    .board-progress-fill {
      transition: none;
    }

    .board-panel {
      animation: none;
    }
  }
`,No=1500;class Pe extends ee{static{this.styles=[ee.styles,Wo]}static{this.properties={tab:{state:!0},todoFilter:{state:!0}}}#e=null;#o=null;#a;constructor(){super(),this.tab="context",this.todoFilter="all"}get sidebarLayout(){return{side:"right",defaultWidth:360,narrow:"stack"}}definitionFor(e){return ze(e)}showTarget(e){switch(e.type){case"context":case"log":this.tab=e.type;return;case"question":this.tab="questions";return;case"todo":this.todoFilter="all";return}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.#a)}renderRegions(e){const a=U(this.locale),t=x=>e.commentCount(x),r=Ae(e.state,t),d=Ee(a,e.state,t),l=this.#d(),g=this.tab;return{header:this.#r(a,e.state),sidebar:n`
        <div class="board-rail">
          ${vo(a,De(e.state),this.#o,l)}
          ${Eo(a,Oe(a,e.state,e.base,t,this.todoFilter),l)}
        </div>
      `,main:n`
        <div class="board">
          ${So(a,g,{log:d.entries.length,questions:r.open,alert:r.blockingOpen>0},x=>{this.tab=x},x=>this.#t(x))}
          ${M("context",g,ho(a,Te(a,e.state,t),this.#n(),l))}
          ${M("log",g,$o(a,d,l))}
          ${M("questions",g,r.total===0?n`<p class="board-empty">${a.noQuestions}</p>`:xo(a,r,l))}
        </div>
      `}}updated(){super.updated();const e=this.#e;e!==null&&(this.#e=null,this.renderRoot.querySelector(`[data-answer-text="${e}"]`)?.focus())}#t(e){const a=To(this.tab,e.key);a!==null&&(e.preventDefault(),this.tab=a,this.updateComplete.then(()=>this.renderRoot.querySelector(`[data-tab="${a}"]`)?.focus()))}#r(e,a){return a.status===null?s:n`<span class="board-status board-status--header" data-status=${a.status}>
      <span class="board-status-dot" aria-hidden="true"></span>${ke(e,a.status)}
    </span>`}#n(){return this.querySelector(':scope > [slot="main"]')!==null}#d(){return{answer:(e,a)=>this.#s(e,a),answerOther:e=>this.#i(e),decide:(e,a)=>this.dispatch(ce(e,a)),setStatus:(e,a)=>this.dispatch(ue(e,a)),filterTodos:e=>{this.todoFilter=e},addTodo:(e,a)=>this.#l(e,a),deleteTodo:e=>this.dispatch(ge(e)),copy:(e,a)=>{this.#p(e,a)},comment:e=>this.requestComment(e)}}#s(e,a){this.dispatch(Q(e,a))}#i(e){this.dispatch(Q(e,{kind:"answer",text:""})).ok&&(this.#e=e)}#l(e,a){const{base:t,state:r}=this.derivation,d=[...t.todos,...r.todos].map(l=>l.id);this.dispatch(be(Ve(e,d),e,a))}async#p(e,a){await Ze(a)&&(clearTimeout(this.#a),this.#o=e,this.requestUpdate(),this.#a=setTimeout(()=>{this.#o=null,this.requestUpdate()},No))}}const We=()=>{customElements.get("dpk-template-task-board")||customElements.define("dpk-template-task-board",Pe)},Ro=Object.freeze(Object.defineProperty({__proto__:null,CONTEXT_PARTS:E,DpkTemplateTaskBoard:Pe,MEMBER_KINDS:ae,TASK_BOARD_PAGE:pe,TASK_STATUSES:oe,TODO_STATUSES:D,addTodo:be,answerQuestion:Q,applyTaskBoardAction:he,contextPartTitle:L,decideProposal:ce,defineTaskBoardElement:We,deleteTodo:ge,describeTaskBoardAction:ve,emptyTaskBoardBase:ne,isAnswered:ie,isHumanTodo:q,isPlanned:R,outputLocation:Se,parseTaskBoardBase:re,presentContext:Te,presentLog:Ee,presentOutputs:De,presentQuestions:Ae,presentTodos:Oe,resolveTaskBoardNavigation:ye,serializeTaskBoardAction:we,setTodoStatus:ue,taskBoardActions:m,taskBoardBaseSchema:te,taskBoardCommentTargets:$e,taskBoardDefinitionFor:ze,taskBoardHasTarget:Ce,taskBoardMessages:U,taskBoardTargetLabel:me,taskBoardTitle:fe},Symbol.toStringTag,{value:"Module"}));export{We as d,Ro as i};
