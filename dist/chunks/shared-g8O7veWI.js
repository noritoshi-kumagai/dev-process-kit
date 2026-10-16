import{af as se,ak as le,ag as v,ah as w,ai as E,aC as D,aD as l,aj as p,al as A,am as L,p as b,aw as f,v as ce,P as pe,e as R,a2 as ue,Y as B,R as $,aE as ge,aF as me,a5 as c,A as ve,a6 as s,a7 as be,aG as he,K as ke,aH as ye,aI as fe,a4 as $e,T as z,l as xe}from"./shared-hrghWtVh.js";const h=[1,2,3,4,5,6,7],k=le(h,"a delegation level is an integer from 1 to 7"),y=A(p(),L(1)),we=v({player:y,level:k,reason:l(p())}),K=v({title:l(p()),parties:l(v({delegator:l(y),delegate:l(y)})),players:w(E(v({id:D,name:y})),[]),decisions:w(E(v({id:D,name:y,description:l(p()),cards:w(E(we),[]),agreed:l(k)})),[])}),M=e=>{const a=se(K,e),r=new Set;for(const t of a.players){if(r.has(t.id))throw new Error(`duplicate id "${t.id}" in players`);r.add(t.id)}const o=new Set;for(const t of a.decisions){if(o.has(t.id))throw new Error(`duplicate id "${t.id}" in decisions`);o.add(t.id);const i=new Set;for(const d of t.cards){if(!r.has(d.player))throw new Error(`decision "${t.id}" has a card from unknown player "${d.player}"`);if(i.has(d.player))throw new Error(`player "${d.player}" played more than one card on decision "${t.id}"`);i.add(d.player)}}return a},F=()=>({players:[],decisions:[]}),u=(e,a)=>{if(a!==void 0)return e.decisions.find(r=>r.id===a)},j=(e,a)=>e.players.find(r=>r.id===a),T=e=>[...e.players.map(a=>a.id),...e.decisions.map(a=>a.id)],x="delegation-poker",g={PLAY_CARD:b("PLAY_CARD","decision",v({level:k})),AGREE_LEVEL:b("AGREE_LEVEL","decision",f({level:k})),ADD_DECISION:b("ADD_DECISION","page",f({id:D,name:A(p(),L(1)),description:l(p())}),{dedupeKey:ce}),SET_DECISION_NAME:b("SET_DECISION_NAME","decision",f({name:A(p(),L(1))})),DELETE_DECISION:b("DELETE_DECISION","decision",f({}))},m={playCard:(e,a)=>({type:"PLAY_CARD",target:{type:"decision",id:e},payload:{level:a}}),agreeLevel:(e,a)=>({type:"AGREE_LEVEL",target:{type:"decision",id:e},payload:{level:a}}),addDecision:(e,a)=>({type:"ADD_DECISION",target:{type:"page",id:x},payload:{id:e,name:a}}),setDecisionName:(e,a)=>({type:"SET_DECISION_NAME",target:{type:"decision",id:e},payload:{name:a}}),deleteDecision:e=>({type:"DELETE_DECISION",target:{type:"decision",id:e},payload:{}})},Y=(e,a)=>{const r=pe(g,a);if(r===null)return null;const o=r.target.id;switch(r.type){case"PLAY_CARD":return C(e,o,t=>({...t,yours:r.payload.level}));case"AGREE_LEVEL":return C(e,o,t=>({...t,agreed:r.payload.level}));case"ADD_DECISION":{const t=r.payload;return e.decisions.some(i=>i.id===t.id)?e:T(e).includes(t.id)?null:{...e,decisions:[...e.decisions,{id:t.id,name:t.name,...t.description===void 0?{}:{description:t.description},cards:[]}]}}case"SET_DECISION_NAME":return C(e,o,t=>({...t,name:r.payload.name}));case"DELETE_DECISION":return e.decisions.some(t=>t.id===o)?{...e,decisions:e.decisions.filter(t=>t.id!==o)}:null;default:return R(r)}},C=(e,a,r)=>e.decisions.some(o=>o.id===a)?{...e,decisions:e.decisions.map(o=>o.id===a?r(o):o)}:null,G={1:"Tell",2:"Sell",3:"Consult",4:"Agree",5:"Advise",6:"Inquire",7:"Delegate"},H={1:"\u547D\u4EE4\u3059\u308B",2:"\u8AAC\u5F97\u3059\u308B",3:"\u76F8\u8AC7\u3059\u308B",4:"\u5408\u610F\u3059\u308B",5:"\u52A9\u8A00\u3059\u308B",6:"\u5C0B\u306D\u308B",7:"\u59D4\u4EFB\u3059\u308B"},Ee={1:(e,a)=>`${e} decide and tell ${a}`,2:(e,a)=>`${e} decide and convince ${a}`,3:(e,a)=>`${e} decide after hearing ${a}`,4:(e,a)=>`${e} and ${a} decide together`,5:(e,a)=>`${a} decides after ${e} advise`,6:(e,a)=>`${a} decides, then ${e} ask why`,7:(e,a)=>`${a} decides; ${e} need not know`},De={1:(e,a)=>`${e}\u304C\u6C7A\u3081\u3066\u3001${a}\u306B\u4F1D\u3048\u308B`,2:(e,a)=>`${e}\u304C\u6C7A\u3081\u3066\u3001${a}\u306B\u7D0D\u5F97\u3057\u3066\u3082\u3089\u3046`,3:(e,a)=>`${e}\u304C${a}\u306E\u610F\u898B\u3092\u805E\u3044\u3066\u304B\u3089\u6C7A\u3081\u308B`,4:(e,a)=>`${e}\u3068${a}\u304C\u4E00\u7DD2\u306B\u6C7A\u3081\u308B`,5:(e,a)=>`${e}\u304C\u52A9\u8A00\u3057\u3001${a}\u304C\u6C7A\u3081\u308B`,6:(e,a)=>`${a}\u304C\u6C7A\u3081\u3001\u3042\u3068\u3067${e}\u304C\u7406\u7531\u3092\u5C0B\u306D\u308B`,7:(e,a)=>`${a}\u304C\u6C7A\u3081\u308B\u3002${e}\u306F\u77E5\u3089\u306A\u304F\u3066\u3088\u3044`},Ae={"to-play":"Your card",discuss:"Discuss",consensus:"Same card",agreed:"Agreed"},Le={"to-play":"\u30AB\u30FC\u30C9\u5F85\u3061",discuss:"\u8981\u8B70\u8AD6",consensus:"\u4E00\u81F4",agreed:"\u5408\u610F\u6E08\u307F"},S=ue({en:{levelName:e=>G[e],levelPhrase:(e,a,r)=>Ee[e](a,r),levelLabel:e=>`${e} ${G[e]}`,statusLabel:e=>Ae[e],defaultDelegator:"Leaders",defaultDelegate:"Team",you:"You",progress:(e,a,r)=>`Played ${e}/${r} \xB7 Agreed ${a}/${r}`,partiesLabel:"Who delegates to whom",board:"Delegation board",boardHint:e=>e==="strict"?"Click a cell to play your card for that decision area. The other cards on a row stay face down until you play on it, and your card cannot be changed afterwards.":"Click a cell to play your card for that decision area. The other cards on a row stay face down until you play on it; you can still change your card afterwards.",modeLabel:e=>e==="strict"?"One card only":"Card can be changed",modeTitle:e=>e==="strict"?"Strict mode: a card, once played, is final":"Lax mode: you may change your card after seeing the others",locked:"Final",confirmTitle:"Your card is final",confirmBody:(e,a)=>`You are playing ${e} on \u201C${a}\u201D. On this board a card cannot be changed once played, even after you see the others.`,confirmSkip:"Don\u2019t ask again",confirmPlay:"Play this card",confirmCancel:"Cancel",decisionColumn:"Decision area",agreeColumn:"Agreed",notAgreed:"Not yet",agreeLabel:e=>`Agreed level for \u201C${e}\u201D`,playAt:(e,a)=>`Play ${e} on \u201C${a}\u201D`,hiddenCards:e=>`${e} face down`,addDecision:"+ Decision area",newDecision:"New decision area",noDecisionsTitle:"No decision areas yet",noDecisionsBody:"List the key decisions whose ownership is unclear. For each one, everyone plays one of seven cards, from 1 (the delegator decides alone) to 7 (fully delegated), and then settles on one level.",firstDecision:"+ First decision area",commentCount:e=>`${e} comments`,decisionNameLabel:"Decision area name",commentButton:"Comment",deleteButton:"Delete",cardPlayedTitle:"Played a card",levelAgreedTitle:"Agreed on a level",decisionAddedTitle:"Added a decision area",decisionRenamedTitle:"Renamed the decision area",decisionDeletedTitle:"Deleted the decision area",arrowTo:e=>`\u2192 ${e}`,arrowFrom:(e,a)=>`${e} \u2192 ${a}`,quotedArrowTo:e=>`\u2192 \u201C${e}\u201D`,quotedArrowFrom:(e,a)=>`\u201C${e}\u201D \u2192 \u201C${a}\u201D`,added:e=>`+ \u201C${e}\u201D`,deleted:e=>`\u2212 \u201C${e}\u201D`,decisionKind:"Decision area",boardKind:"Board",wholeBoard:"Whole board"},ja:{levelName:e=>H[e],levelPhrase:(e,a,r)=>De[e](a,r),levelLabel:e=>`${e} ${H[e]}`,statusLabel:e=>Le[e],defaultDelegator:"\u30EA\u30FC\u30C0\u30FC",defaultDelegate:"\u30C1\u30FC\u30E0",you:"\u3042\u306A\u305F",progress:(e,a,r)=>`\u63D0\u51FA ${e}/${r} \xB7 \u5408\u610F ${a}/${r}`,partiesLabel:"\u8AB0\u304C\u8AB0\u306B\u4EFB\u305B\u308B\u304B",board:"\u30C7\u30EA\u30B2\u30FC\u30B7\u30E7\u30F3\u30DC\u30FC\u30C9",boardHint:e=>e==="strict"?"\u30BB\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u305D\u306E\u5224\u65AD\u9818\u57DF\u306B\u3042\u306A\u305F\u306E\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u307E\u3059\u3002\u30AB\u30FC\u30C9\u3092\u51FA\u3059\u307E\u3067\u305D\u306E\u884C\u306E\u4ED6\u306E\u30AB\u30FC\u30C9\u306F\u4F0F\u305B\u305F\u307E\u307E\u3067\u3059\u3002\u51FA\u3057\u305F\u30AB\u30FC\u30C9\u306F\u3042\u3068\u304B\u3089\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002":"\u30BB\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u305D\u306E\u5224\u65AD\u9818\u57DF\u306B\u3042\u306A\u305F\u306E\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u307E\u3059\u3002\u30AB\u30FC\u30C9\u3092\u51FA\u3059\u307E\u3067\u305D\u306E\u884C\u306E\u4ED6\u306E\u30AB\u30FC\u30C9\u306F\u4F0F\u305B\u305F\u307E\u307E\u3067\u3059\u3002\u51FA\u3057\u305F\u3042\u3068\u3082\u5909\u66F4\u3067\u304D\u307E\u3059\u3002",modeLabel:e=>e==="strict"?"\u51FA\u3057\u76F4\u3057\u4E0D\u53EF":"\u51FA\u3057\u76F4\u3057\u53EF",modeTitle:e=>e==="strict"?"strict \u30E2\u30FC\u30C9: \u4E00\u5EA6\u51FA\u3057\u305F\u30AB\u30FC\u30C9\u306F\u5909\u66F4\u3067\u304D\u307E\u305B\u3093":"lax \u30E2\u30FC\u30C9: \u4ED6\u306E\u4EBA\u306E\u30AB\u30FC\u30C9\u3092\u898B\u305F\u3042\u3068\u3067\u3082\u30AB\u30FC\u30C9\u3092\u5909\u66F4\u3067\u304D\u307E\u3059",locked:"\u78BA\u5B9A",confirmTitle:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059\u3068\u5909\u66F4\u3067\u304D\u307E\u305B\u3093",confirmBody:(e,a)=>`\u300C${a}\u300D\u306B\u300C${e}\u300D\u306E\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u307E\u3059\u3002\u3053\u306E\u30DC\u30FC\u30C9\u3067\u306F\u3001\u4E00\u5EA6\u51FA\u3057\u305F\u30AB\u30FC\u30C9\u306F\u4ED6\u306E\u4EBA\u306E\u30AB\u30FC\u30C9\u3092\u898B\u305F\u3042\u3068\u3067\u3082\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002`,confirmSkip:"\u6B21\u56DE\u304B\u3089\u78BA\u8A8D\u3057\u306A\u3044",confirmPlay:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u51FA\u3059",confirmCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",decisionColumn:"\u5224\u65AD\u9818\u57DF",agreeColumn:"\u5408\u610F",notAgreed:"\u672A\u5408\u610F",agreeLabel:e=>`\u300C${e}\u300D\u306E\u5408\u610F\u30EC\u30D9\u30EB`,playAt:(e,a)=>`\u300C${a}\u300D\u306B ${e} \u3092\u51FA\u3059`,hiddenCards:e=>`\u4F0F\u305B\u672D ${e} \u679A`,addDecision:"+ \u5224\u65AD\u9818\u57DF",newDecision:"\u65B0\u3057\u3044\u5224\u65AD\u9818\u57DF",noDecisionsTitle:"\u5224\u65AD\u9818\u57DF\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093",noDecisionsBody:"\u8AB0\u304C\u6C7A\u3081\u308B\u306E\u304B\u304C\u66D6\u6627\u306A\u5224\u65AD\u3092\u4E26\u3079\u307E\u3059\u3002\u5224\u65AD\u3054\u3068\u306B\u5168\u54E1\u304C 1\uFF08\u4EFB\u305B\u308B\u5074\u3060\u3051\u3067\u6C7A\u3081\u308B\uFF09\u301C 7\uFF08\u5B8C\u5168\u306B\u4EFB\u305B\u308B\uFF09\u306E\u30AB\u30FC\u30C9\u3092 1 \u679A\u51FA\u3057\u3001\u8A71\u3057\u5408\u3063\u3066 1 \u3064\u306E\u30EC\u30D9\u30EB\u306B\u5408\u610F\u3057\u307E\u3059\u3002",firstDecision:"+ \u6700\u521D\u306E\u5224\u65AD\u9818\u57DF",commentCount:e=>`\u30B3\u30E1\u30F3\u30C8 ${e} \u4EF6`,decisionNameLabel:"\u5224\u65AD\u9818\u57DF\u306E\u540D\u524D",commentButton:"\u30B3\u30E1\u30F3\u30C8",deleteButton:"\u524A\u9664",cardPlayedTitle:"\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u305F",levelAgreedTitle:"\u30EC\u30D9\u30EB\u306B\u5408\u610F",decisionAddedTitle:"\u5224\u65AD\u9818\u57DF\u3092\u8FFD\u52A0",decisionRenamedTitle:"\u5224\u65AD\u9818\u57DF\u306E\u540D\u524D\u3092\u5909\u66F4",decisionDeletedTitle:"\u5224\u65AD\u9818\u57DF\u3092\u524A\u9664",arrowTo:e=>`\u2192 ${e}`,arrowFrom:(e,a)=>`${e} \u2192 ${a}`,quotedArrowTo:e=>`\u2192 \u300C${e}\u300D`,quotedArrowFrom:(e,a)=>`\u300C${e}\u300D\u2192\u300C${a}\u300D`,added:e=>`+ \u300C${e}\u300D`,deleted:e=>`\u2212 \u300C${e}\u300D`,decisionKind:"\u5224\u65AD\u9818\u57DF",boardKind:"\u30DC\u30FC\u30C9",wholeBoard:"\u30DC\u30FC\u30C9\u5168\u4F53"}}),_=e=>e==="strict"?"strict":"lax",P=(e,a)=>e==="strict"&&a.yours!==void 0,V=(e,a,r)=>e==="lax"?{kind:"play"}:P(e,a)?{kind:"locked"}:r?{kind:"play"}:{kind:"confirm"},I=(e,a)=>({delegator:a.parties?.delegator??e.defaultDelegator,delegate:a.parties?.delegate??e.defaultDelegate}),q=e=>e.yours!==void 0||e.agreed!==void 0,Te=(e,a,r)=>[...r.yours===void 0?[]:[{label:e.you,kind:"you",level:r.yours}],...r.cards.map(t=>({label:j(a,t.player)?.name??t.player,kind:"player",level:t.level,...t.reason===void 0?{}:{reason:t.reason}}))],Ce=(e,a)=>e.agreed!==void 0?"agreed":e.yours===void 0?"to-play":a.every(r=>r.level===e.yours)?"consensus":"discuss",Se=(e,a,r,o)=>{const t=Te(e,a,o),i=q(o)?t:[];return{id:o.id,name:o.name,...o.description===void 0?{}:{description:o.description},status:Ce(o,t),hidden:q(o)?0:o.cards.length,...o.agreed===void 0?{}:{agreed:o.agreed},locked:P(r,o),cells:h.map(d=>({level:d,chips:i.filter(n=>n.level===d).map(({level:n,...ne})=>ne),yours:o.yours===d,agreed:o.agreed===d}))}},N=(e,a,r)=>{const{delegator:o,delegate:t}=I(e,a);return{levels:h.map(i=>({level:i,name:e.levelName(i),label:e.levelLabel(i),phrase:e.levelPhrase(i,o,t)})),rows:a.decisions.map(i=>Se(e,a,r,i)),progress:{played:a.decisions.filter(i=>i.yours!==void 0).length,agreed:a.decisions.filter(i=>i.agreed!==void 0).length,total:a.decisions.length}}},J=(e,a,r)=>{const o=r===void 0?"":e.levelLabel(r);return a===void 0?e.arrowTo(o):e.arrowFrom(e.levelLabel(a),o)},_e=(e,a,r)=>a===void 0?e.quotedArrowTo(r):e.quotedArrowFrom(a,r),U={PLAY_CARD:(e,a,r)=>{const o=$(g.PLAY_CARD,a);return{title:e.cardPlayedTitle,tone:"update",body:J(e,u(r,a.target.id)?.yours,o.level)}},AGREE_LEVEL:(e,a,r)=>({title:e.levelAgreedTitle,tone:"update",body:J(e,u(r,a.target.id)?.agreed,$(g.AGREE_LEVEL,a).level)}),ADD_DECISION:(e,a)=>({title:e.decisionAddedTitle,tone:"create",body:e.added(String($(g.ADD_DECISION,a).name??""))}),SET_DECISION_NAME:(e,a,r)=>({title:e.decisionRenamedTitle,tone:"update",body:_e(e,u(r,a.target.id)?.name,String($(g.SET_DECISION_NAME,a).name??""))}),DELETE_DECISION:(e,a,r)=>({title:e.decisionDeletedTitle,tone:"delete",body:e.deleted(u(r,a.target.id)?.name??a.target.id)})},W=(e,a,r,o)=>{let t;try{const i=Object.hasOwn(U,a.type)?U[a.type]:void 0;t=i?i(e,a,o??r):{title:a.type,tone:"meta"}}catch{t={title:a.type,tone:"meta"}}return{title:t.title,targetLabel:X(e,r,a.target),tone:t.tone,...t.body===void 0?{}:{summary:t.body}}},Q=e=>`${e.type} ${B(e.target)} ${JSON.stringify(e.payload)}`,X=(e,a,r)=>{switch(r.type){case"decision":{const o=u(a,r.id);return o?`${e.decisionKind} \xB7 ${o.name}`:`${e.decisionKind} \xB7 ${r.id} (missing)`}case"page":return`${e.boardKind} \xB7 ${O(a)}`;default:return`${r.type} \xB7 ${r.id}`}},Z=(e,a,r)=>[{value:`page:${x}`,label:e.wholeBoard,group:e.boardKind},...a.decisions.map(o=>({value:B({type:"decision",id:o.id}),label:o.name,group:e.decisionKind}))],O=e=>e.title??"Delegation Poker",ee=(e,a)=>a,ae=(e,a)=>{switch(a.type){case"decision":return u(e,a.id)!==void 0;case"page":return a.id===x;default:return!1}},re=e=>{const a=S(e);return{name:"delegation-poker",label:"Delegation Poker",parseBase:M,emptyBase:F,actions:g,apply:Y,hasTarget:ae,describe:(r,o,t)=>W(a,r,o,t),serialize:Q,resolveNavigation:ee,commentTargets:(r,o)=>Z(a,r),title:O}},oe="dev-process-kit:delegation-poker:skip-strict-confirm",te=e=>e===!0?!0:null,Pe=e=>{const a=e?ge(te):me(te);return{read:()=>a.read(oe)===!0,remember:()=>a.write(oe,!0)}},Ie=(e,a,r,o)=>s`
  <button
    class="dpk-icon-btn"
    type="button"
    data-comment=${e}
    aria-label=${a}
    title=${a}
    @click=${()=>o.comment(e)}
  >
    ${ve()} ${r>0?s`<span class="dpk-icon-badge">${r}</span>`:c}
  </button>
`,Ne=e=>{const{context:a,m:r,mode:o}=e,{progress:t}=N(r,a.state,o),{delegator:i,delegate:d}=I(r,a.state);return s`<div class="summary">
    <span class="summary-chip" title=${`${r.partiesLabel}
${i} \u2192 ${d}`}
      >${i} → ${d}</span
    >
    <span class="summary-chip" data-testid="mode" data-mode=${o} title=${r.modeTitle(o)}
      >${r.modeLabel(o)}</span
    >
    <span class="summary-chip" data-testid="progress"
      >${r.progress(t.played,t.agreed,t.total)}</span
    >
  </div>`},Oe=e=>{const{handlers:a,m:r}=e;return s`<div class="empty">
    <h2>${r.noDecisionsTitle}</h2>
    <p>${r.noDecisionsBody}</p>
    <button class="dpk-btn dpk-btn--accent" type="button" data-testid="add-decision" @click=${a.addDecision}>
      ${r.firstDecision}
    </button>
  </div>`},Re=e=>{const{context:a,handlers:r,m:o,mode:t}=e,i=N(o,a.state,t);return s`<section class="board-panel" aria-labelledby="dp-board-title">
    <header class="board-head">
      <h2 id="dp-board-title">${o.board}</h2>
      <p class="board-hint">${o.boardHint(t)}</p>
    </header>
    <div class="board" role="table" aria-labelledby="dp-board-title" data-testid="board">
      <div class="board-head-scroll" role="rowgroup">
        <div class="board-row board-row--head" role="row">
          <span class="cell-name" role="columnheader">${o.decisionColumn}</span>
          ${i.levels.map(ze)}
          <span class="cell-agree" role="columnheader">${o.agreeColumn}</span>
        </div>
      </div>
      <div class="board-scroll" role="rowgroup" @scroll=${Be}>
        ${be(i.rows,d=>d.id,d=>Ke(e,i.levels,d))}
      </div>
    </div>
    <button class="add-decision" type="button" data-testid="add-decision" @click=${r.addDecision}>
      ${o.addDecision}
    </button>
  </section>`},Be=e=>{const a=e.currentTarget;if(!(a instanceof HTMLElement))return;const r=a.previousElementSibling;r instanceof HTMLElement&&(r.scrollLeft=a.scrollLeft)},ze=e=>s`<span
  class="cell cell--head"
  role="columnheader"
  data-level=${e.level}
>
  <b>${e.level}</b>
  <span class="level-name">${e.name}</span>
  <small class="level-phrase">${e.phrase}</small>
</span>`,Ke=(e,a,r)=>{const{context:o,handlers:t,m:i}=e,d=`decision:${r.id}`;return s`<div
    class="board-row"
    role="row"
    data-decision=${r.id}
    data-dpk-target=${d}
    data-status=${r.status}
    ?data-locked=${r.locked}
  >
    <div class="cell-name" role="rowheader">
      <div class="row-title">
        <dpk-component-inline-edit
          class="row-name"
          .value=${r.name}
          .label=${i.decisionNameLabel}
          @dpk-commit=${he(n=>t.rename(r.id,n))}
        ></dpk-component-inline-edit>
        <span class="row-tools">
          ${Ie(d,i.commentButton,o.commentCount(d),t)}
          <button
            class="dpk-icon-btn"
            type="button"
            data-testid="delete-decision"
            aria-label=${i.deleteButton}
            title=${i.deleteButton}
            @click=${()=>t.deleteDecision(r.id)}
          >
            ${ke()}
          </button>
        </span>
      </div>
      ${r.description===void 0?c:s`<p class="row-description">${r.description}</p>`}
      <div class="row-meta">
        <span class="status" data-status=${r.status}>${i.statusLabel(r.status)}</span>
        ${r.locked?s`<span class="locked" data-testid="locked">${i.locked}</span>`:c}
        ${r.hidden>0?s`<small>${i.hiddenCards(r.hidden)}</small>`:c}
      </div>
    </div>
    ${r.cells.map(n=>Me(e,r,a,n))}
    <div class="cell-agree" role="cell">${Fe(e,a,r)}</div>
  </div>`},Me=(e,a,r,o)=>{const{handlers:t,m:i}=e,d=r.find(n=>n.level===o.level)?.label??String(o.level);return s`<div class="cell" role="cell" data-level=${o.level} ?data-agreed=${o.agreed}>
    <button
      class="cell-play"
      type="button"
      data-level=${o.level}
      aria-pressed=${o.yours?"true":"false"}
      aria-disabled=${a.locked?"true":c}
      aria-label=${i.playAt(d,a.name)}
      @click=${()=>t.play(a.id,o.level)}
    >
      ${o.chips.map(n=>s`<span
            class="chip"
            data-kind=${n.kind}
            ?data-reason=${n.reason!==void 0}
            title=${n.reason??c}
            >${n.label}</span
          >`)}
    </button>
  </div>`},Fe=(e,a,r)=>{const{handlers:o,m:t}=e;return s`<select
    class="dpk-select agree-select"
    data-testid="agree"
    aria-label=${t.agreeLabel(r.name)}
    @change=${ye(i=>{const d=h.find(n=>String(n)===i);d!==void 0&&d!==r.agreed&&o.agree(r.id,d)})}
  >
    ${r.agreed===void 0?s`<option value="" disabled selected>${t.notAgreed}</option>`:c}
    ${a.map(i=>s`<option value=${i.level} ?selected=${i.level===r.agreed}>${i.label}</option>`)}
  </select>`},je=(e,a,r)=>a===null?c:s`<div class="confirm-backdrop" @click=${r.cancel}>
    <div
      class="confirm"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="dp-confirm-title"
      aria-describedby="dp-confirm-body"
      data-testid="confirm-play"
      @click=${o=>o.stopPropagation()}
      @keydown=${o=>{o.key==="Escape"&&r.cancel()}}
    >
      <h2 id="dp-confirm-title">${e.confirmTitle}</h2>
      <p id="dp-confirm-body">${e.confirmBody(e.levelLabel(a.level),a.decisionName)}</p>
      <label class="confirm-skip">
        <input type="checkbox" .checked=${a.skip} @change=${fe(r.toggleSkip)} />
        ${e.confirmSkip}
      </label>
      <div class="confirm-actions">
        <button class="dpk-btn" type="button" data-testid="confirm-play-cancel" @click=${r.cancel}>
          ${e.confirmCancel}
        </button>
        <button
          class="dpk-btn dpk-btn--accent"
          type="button"
          data-testid="confirm-play-ok"
          data-level=${a.level}
          @click=${r.confirm}
        >
          ${e.confirmPlay}
        </button>
      </div>
    </div>
  </div>`,Ye=$e`
  [data-level='1'] {
    --lv: var(--dpk-blue);
  }
  [data-level='2'] {
    --lv: color-mix(in oklab, var(--dpk-blue) 83%, var(--dpk-green));
  }
  [data-level='3'] {
    --lv: color-mix(in oklab, var(--dpk-blue) 67%, var(--dpk-green));
  }
  [data-level='4'] {
    --lv: color-mix(in oklab, var(--dpk-blue) 50%, var(--dpk-green));
  }
  [data-level='5'] {
    --lv: color-mix(in oklab, var(--dpk-blue) 33%, var(--dpk-green));
  }
  [data-level='6'] {
    --lv: color-mix(in oklab, var(--dpk-blue) 17%, var(--dpk-green));
  }
  [data-level='7'] {
    --lv: var(--dpk-green);
  }

  /* ---------------------------------------------------------- summary */

  .summary {
    display: flex;
    flex-wrap: wrap;
    min-width: 0;
    gap: 6px;
    font-size: 12px;
    color: var(--dpk-ink-soft);
  }

  /* A chip stays one line: a party name too long for the header ellipsizes,
     its title has it whole. */
  .summary-chip {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 10px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    font-variant-numeric: tabular-nums;
  }

  /* ----------------------------------------------------------- status */

  .status {
    display: inline-block;
    padding: 2px 9px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 600;
    white-space: nowrap;
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink-soft);
  }

  .status[data-status='discuss'] {
    background: var(--dpk-amber-soft);
    color: var(--dpk-amber);
  }

  .status[data-status='consensus'] {
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  .status[data-status='agreed'] {
    background: var(--dpk-green-soft);
    color: var(--dpk-green);
  }

  .locked {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 8px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    font-size: 11px;
    color: var(--dpk-ink-soft);
  }

  .locked::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: currentColor;
  }

  .summary-chip[data-mode='strict'] {
    border-color: color-mix(in srgb, var(--dpk-amber) 45%, var(--dpk-rule));
    color: var(--dpk-amber);
  }

  /* ----------------------------------------------------------- confirm */

  .confirm-backdrop {
    position: fixed;
    inset: 0;
    z-index: 20;
    display: grid;
    place-items: center;
    padding: 16px;
    background: color-mix(in srgb, var(--dpk-ink) 28%, transparent);
    animation: dp-fade-in 140ms var(--dpk-ease);
  }

  .confirm {
    box-sizing: border-box;
    display: grid;
    gap: 12px;
    width: min(420px, 100%);
    padding: 20px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
    color: var(--dpk-ink);
  }

  .confirm h2 {
    margin: 0;
    font-size: 15px;
  }

  .confirm p {
    margin: 0;
    color: var(--dpk-ink-soft);
    font-size: 13px;
    line-height: 1.6;
  }

  .confirm-skip {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12.5px;
    color: var(--dpk-ink-soft);
    cursor: pointer;
  }

  .confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  @keyframes dp-fade-in {
    from {
      opacity: 0;
    }
  }

  /* ------------------------------------------------------------- board */

  .board-panel {
    display: grid;
    gap: 12px;
    align-content: start;
  }

  .board-head {
    display: grid;
    gap: 4px;
  }

  .board-head h2 {
    margin: 0;
    font-size: 16px;
  }

  .board-hint {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.6;
    color: var(--dpk-ink-soft);
  }

  .board {
    display: grid;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-shadow-sm);
  }

  /* The level heads stay in sight while the decisions scroll under them. */
  .board-head-scroll {
    position: sticky;
    top: 0;
    z-index: 2;
    overflow: hidden;
    border-bottom: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg) var(--dpk-radius-lg) 0 0;
    background: var(--dpk-paper-raised);
    box-shadow: 0 6px 14px -12px var(--dpk-shade-3);
  }

  .board-scroll {
    overflow-x: auto;
    border-radius: 0 0 var(--dpk-radius-lg) var(--dpk-radius-lg);
  }

  .board-head-scroll > .board-row,
  .board-scroll > .board-row {
    min-width: 980px;
  }

  .board-scroll > .board-row:first-child {
    border-top: 0;
  }

  .board-row {
    display: grid;
    grid-template-columns: minmax(220px, 2fr) repeat(7, minmax(84px, 1fr)) minmax(132px, 1fr);
    align-items: stretch;
    border-top: 1px solid var(--dpk-rule);
  }

  .board-row--head {
    border-top: 0;
    font-size: 11.5px;
    color: var(--dpk-ink-soft);
  }

  .board-row:not(.board-row--head):hover {
    background: color-mix(in srgb, var(--dpk-paper-sunken) 60%, transparent);
  }

  .board-row--head .cell-name,
  .board-row--head .cell-agree {
    align-content: end;
    font-weight: 600;
  }

  /* Decision area: its name, description, where it stands and its tools. */
  .cell-name {
    display: grid;
    align-content: center;
    gap: 4px;
    padding: 10px 12px;
    min-width: 0;
  }

  .row-title {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }

  .row-name {
    flex: 1;
    min-width: 0;
    font-size: 13.5px;
    font-weight: 600;
    line-height: 1.4;
  }

  .row-tools {
    display: flex;
    gap: 2px;
    opacity: 0;
    transition: opacity 120ms ease;
  }

  .board-row:hover .row-tools,
  .row-tools:focus-within {
    opacity: 1;
  }

  .row-description {
    margin: 0;
    font-size: 11.5px;
    line-height: 1.5;
    color: var(--dpk-ink-soft);
  }

  .row-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--dpk-ink-faint);
  }

  /* Level columns. */
  .cell {
    display: grid;
    border-left: 1px solid var(--dpk-rule);
    background: color-mix(in srgb, var(--lv) 5%, transparent);
  }

  .cell--head {
    align-content: end;
    justify-items: center;
    gap: 2px;
    padding: 10px 6px;
    background: color-mix(in srgb, var(--lv) 10%, transparent);
    text-align: center;
  }

  .cell--head b {
    font-size: 16px;
    line-height: 1;
    color: var(--lv);
  }

  .level-name {
    font-weight: 600;
    color: var(--dpk-ink);
  }

  .level-phrase {
    font-size: 10.5px;
    line-height: 1.45;
    color: var(--dpk-ink-faint);
  }

  .cell[data-agreed] {
    background: color-mix(in srgb, var(--lv) 26%, var(--dpk-paper-raised));
    box-shadow: inset 0 0 0 2px var(--lv);
  }

  /* The whole cell is the button that plays the reader's card at its level. */
  .cell-play {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    align-content: center;
    justify-content: center;
    min-height: 56px;
    margin: 0;
    padding: 6px 4px;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }

  .cell-play:hover {
    background: color-mix(in srgb, var(--lv) 14%, transparent);
  }

  /* strict mode: the reader's card is final, so the row no longer takes clicks. */
  .cell-play[aria-disabled='true'] {
    cursor: default;
  }

  .cell-play[aria-disabled='true']:hover {
    background: transparent;
  }

  .cell-play:focus-visible {
    outline: none;
    box-shadow: inset var(--dpk-focus);
  }

  .chip {
    max-width: 100%;
    padding: 1px 7px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    border: 1px solid color-mix(in srgb, var(--lv) 45%, var(--dpk-rule));
    font-size: 10.5px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /* A chip with a reason: hover it to read why. */
  .chip[data-reason] {
    text-decoration: underline dotted color-mix(in srgb, var(--dpk-ink-faint) 70%, transparent);
    text-underline-offset: 2px;
    cursor: help;
  }

  .chip[data-kind='you'] {
    border-color: var(--dpk-accent);
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
    font-weight: 600;
  }

  /* The settled level. */
  .cell-agree {
    display: grid;
    align-content: center;
    padding: 8px 10px;
    border-left: 1px solid var(--dpk-rule);
  }

  .agree-select {
    width: 100%;
    min-width: 0;
    font-size: 12px;
  }

  .board-row[data-status='agreed'] .agree-select {
    border-color: color-mix(in srgb, var(--dpk-green) 55%, var(--dpk-rule));
  }

  .add-decision {
    justify-self: start;
    padding: 8px 14px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius);
    background: transparent;
    color: var(--dpk-ink-soft);
    font: inherit;
    cursor: pointer;
  }

  .add-decision:hover {
    border-color: var(--dpk-accent);
    color: var(--dpk-accent);
  }

  .add-decision:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  /* ------------------------------------------------------------- empty */

  .empty {
    display: grid;
    gap: 10px;
    max-width: 620px;
    padding: 28px 24px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-dots), var(--dpk-paper-sunken);
  }

  .empty h2 {
    margin: 0;
  }

  .empty p {
    margin: 0;
    color: var(--dpk-ink-soft);
    line-height: 1.7;
  }

  .empty .dpk-btn {
    justify-self: start;
  }
`;class ie extends z{static{this.styles=[z.styles,Ye]}static{this.properties={mode:{type:String},pending:{state:!0},skipConfirm:{state:!0}}}#a=null;#e=null;constructor(){super(),this.mode=null,this.pending=null,this.skipConfirm=!1}connectedCallback(){super.connectedCallback(),this.#a=Pe(this.storage!=="off"&&this.storage!=="memory"),this.skipConfirm=this.#a.read()}definitionFor(a){return re(a)}renderRegions(a){const r=S(this.locale),o=this.#r(a,r),t={context:a,handlers:o,m:r,mode:_(this.mode)},i=a.state.decisions.length===0?Oe(t):Re(t);return{header:Ne(t),main:s`${i}${je(r,this.pending,this.#o(a))}`}}updated(){super.updated();const a=this.#e;if(a!==null){if(this.#e=null,a==="dialog"){this.renderRoot.querySelector('[data-testid="confirm-play-ok"]')?.focus();return}this.renderRoot.querySelector(`[data-decision="${a.decisionId}"] .cell-play[data-level="${a.level}"]`)?.focus()}}#r(a,r){return{play:(o,t)=>{const i=a.state.decisions.find(n=>n.id===o);if(i===void 0)return;const d=V(_(this.mode),i,this.skipConfirm);switch(d.kind){case"play":a.dispatch(m.playCard(o,t));return;case"confirm":this.pending={decisionId:o,decisionName:i.name,level:t,skip:!1},this.#e="dialog";return;case"locked":return;default:R(d)}},agree:(o,t)=>{a.dispatch(m.agreeLevel(o,t))},addDecision:()=>{const o=xe("decision",T(a.state));a.dispatch(m.addDecision(o,r.newDecision))},rename:(o,t)=>{a.dispatch(m.setDecisionName(o,t))},deleteDecision:o=>{a.dispatch(m.deleteDecision(o))},comment:o=>this.requestComment(o)}}#o(a){const r=o=>{this.pending=null,this.#e={decisionId:o.decisionId,level:o.level}};return{toggleSkip:o=>{this.pending!==null&&(this.pending={...this.pending,skip:o})},confirm:()=>{const o=this.pending;o!==null&&(o.skip&&(this.#a?.remember(),this.skipConfirm=!0),a.dispatch(m.playCard(o.decisionId,o.level)),r(o))},cancel:()=>{this.pending!==null&&r(this.pending)}}}}const de=()=>{customElements.get("dpk-template-delegation-poker")||customElements.define("dpk-template-delegation-poker",ie)},Ge=Object.freeze(Object.defineProperty({__proto__:null,DELEGATION_LEVELS:h,DELEGATION_POKER_PAGE:x,DpkTemplateDelegationPoker:ie,allDelegationPokerIds:T,applyDelegationPokerAction:Y,defineDelegationPokerElement:de,delegationLevelSchema:k,delegationParties:I,delegationPokerAction:m,delegationPokerActions:g,delegationPokerBaseSchema:K,delegationPokerCommentTargets:Z,delegationPokerDefinitionFor:re,delegationPokerHasTarget:ae,delegationPokerMessages:S,delegationPokerTargetLabel:X,delegationPokerTitle:O,describeDelegationPokerAction:W,emptyDelegationPokerBase:F,findDecision:u,findPlayer:j,isLocked:P,parseDelegationPokerBase:M,parsePlayMode:_,playIntent:V,presentBoard:N,resolveDelegationPokerNavigation:ee,serializeDelegationPokerAction:Q},Symbol.toStringTag,{value:"Module"}));export{de as d,Ge as i};
