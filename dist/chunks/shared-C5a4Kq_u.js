import{p as ve,ao as N,ag as f,al as x,am as m,aj as c,aq as T,ah as k,ar as xe,ai as A,af as me,R as O,a2 as we,Y as F,a6 as s,a7 as P,a5 as p,as as G,a4 as ye,T as B,aN as $e,aO as Te,aP as Se}from"./shared-hrghWtVh.js";import{s as Re}from"./shared-D4K7KsfJ.js";import{c as H}from"./shared-ml5h7U5L.js";const qe=N("kind",[f({kind:T("option"),optionId:x(c(),m(1))}),f({kind:T("free"),text:c()}),f({kind:T("clear")})]),C={ANSWER_QUESTION:ve("ANSWER_QUESTION","question",qe)},M=(t,e)=>({type:"ANSWER_QUESTION",target:{type:"question",id:t},payload:e}),Ae=f({id:x(c(),m(1)),label:x(c(),m(1))}),_=f({id:x(c(),m(1)),ref:k(x(c(),m(1))),title:x(c(),m(1)),description:k(c()),note:k(c()),options:k(A(Ae),[]),freeText:k(xe(),!0)}),Ce=N("kind",[f({kind:T("option"),optionId:x(c(),m(1))}),f({kind:T("free"),text:c()})]),Ee=f({..._.entries,answer:k(Ce)}),Ie=f({label:k(x(c(),m(1))),questions:A(Ee)}),U=f({title:k(c(),""),questions:A(_),history:k(A(Ie),[])}),W=t=>{const e=new Set;return t.map((r,i)=>{if(e.has(r.id))throw new Error(`duplicate question id: ${r.id}`);e.add(r.id);const n=new Set;for(const a of r.options){if(n.has(a.id))throw new Error(`duplicate option id: ${a.id} in question ${r.id}`);n.add(a.id)}return{...r,ref:r.ref??`Q${i+1}`,description:r.description??null,note:r.note??null}})},j=t=>({id:t.id,ref:t.ref,title:t.title,description:t.description,note:t.note,options:t.options,freeText:t.freeText}),Qe=t=>{const e=t.answer??null;if(e?.kind==="option"&&!t.options.some(r=>r.id===e.optionId))throw new Error(`unknown option id: ${e.optionId} in question ${t.id}`);return{...j(t),answer:e}},Y=t=>{const e=me(U,t);return{title:e.title,questions:W(e.questions).map(j),answers:{},pastRounds:e.history.map((r,i)=>({label:r.label??`v${i+1}`,questions:W(r.questions).map(Qe)}))}},D=()=>({title:"",questions:[],answers:{},pastRounds:[]}),v=(t,e)=>t.questions.find(r=>r.id===e),ze=(t,e)=>v(t,e)?.ref??e,z=(t,e)=>{const r=v(t,e);return r?`${r.ref} \xB7 ${r.title}`:e},S=(t,e)=>e?e.kind==="option"?t.options.find(r=>r.id===e.optionId)?.label??"":e.text.trim():"",E=(t,e)=>S(t,e)!=="",V=t=>{let e="";for(let r=t+1;r>0;r=Math.floor((r-1)/26))e=String.fromCharCode(97+(r-1)%26)+e;return e},K=t=>({total:t.questions.length,answered:t.questions.filter(e=>E(e,t.answers[e.id])).length}),I=(t,e,r)=>{const i=t.answers[e];if(r===null){if(i===void 0)return t;const n={...t.answers};return delete n[e],{...t,answers:n}}return i?.kind===r.kind&&(i.kind==="option"&&r.kind==="option"&&i.optionId===r.optionId||i.kind==="free"&&r.kind==="free"&&i.text===r.text)?t:{...t,answers:{...t.answers,[e]:r}}},J=(t,e)=>{if(e.type!=="ANSWER_QUESTION")return null;const r=v(t,e.target.id);if(!r)return null;const i=O(C.ANSWER_QUESTION,e);return i.kind==="clear"?I(t,r.id,null):i.kind==="option"?r.options.some(n=>n.id===i.optionId)?I(t,r.id,{kind:"option",optionId:i.optionId}):null:I(t,r.id,{kind:"free",text:i.text})},R=we({en:{wholePage:"Whole page",questionGroup:"Question",answerCleared:"Clear answer",answered:"Answer",answeredFreely:"Answer in your own words",quoted:t=>`\u2192 \u201C${t}\u201D`,progress:(t,e)=>`${t} of ${e} answered`,openPanel:"Show questions / review",closePanel:"Hide questions / review",toggleLabel:(t,e)=>`${t} (${e})`,tabs:"Questions / review",questionsTab:"Questions",reviewTab:"Review",copied:"Copied",copyFailed:"Could not copy",copyAll:"Copy answers and review",sending:"Sending\u2026",sent:"Sent to Claude",sendFailed:"Could not send",sendAll:"Send answers and review to Claude",copyDone:"Copied",copy:"Copy",noQuestions:"No matching questions.",freeText:"Your own answer",freeTextOf:t=>`Your own answer to ${t}`,freeTextPlaceholder:"Type an answer\u2026 (\u2318/Ctrl+Enter for next)",clearAnswer:"Clear answer",roundSelect:"Question round",currentRound:"Current questions",roundOption:(t,e)=>`${t} (${e})`,pastRound:t=>`${t}: earlier questions, read-only`,unanswered:"Not answered"},ja:{wholePage:"\u30DA\u30FC\u30B8\u5168\u4F53",questionGroup:"\u8CEA\u554F",answerCleared:"\u56DE\u7B54\u3092\u30AF\u30EA\u30A2",answered:"\u56DE\u7B54",answeredFreely:"\u81EA\u7531\u8A18\u8FF0\u3067\u56DE\u7B54",quoted:t=>`\u2192 \u300C${t}\u300D`,progress:(t,e)=>`\u56DE\u7B54\u6E08\u307F ${t} / ${e}`,openPanel:"\u8CEA\u554F / Review \u3092\u3072\u3089\u304F",closePanel:"\u8CEA\u554F / Review \u3092\u305F\u305F\u3080",toggleLabel:(t,e)=>`${t}\uFF08${e}\uFF09`,tabs:"\u8CEA\u554F / Review",questionsTab:"\u8CEA\u554F",reviewTab:"Review",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",copyFailed:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",copyAll:"\u56DE\u7B54\u30FBReview \u3092\u307E\u3068\u3081\u3066\u30B3\u30D4\u30FC",sending:"\u9001\u4FE1\u4E2D\u2026",sent:"Claude \u306B\u9001\u308A\u307E\u3057\u305F",sendFailed:"\u9001\u308C\u307E\u305B\u3093\u3067\u3057\u305F",sendAll:"\u56DE\u7B54\u30FBReview \u3092 Claude \u306B\u9001\u308B",copyDone:"\u30B3\u30D4\u30FC\u6E08\u307F",copy:"\u30B3\u30D4\u30FC",noQuestions:"\u8A72\u5F53\u3059\u308B\u8CEA\u554F\u306F\u3042\u308A\u307E\u305B\u3093\u3002",freeText:"\u81EA\u7531\u8A18\u8FF0",freeTextOf:t=>`${t} \u306E\u81EA\u7531\u8A18\u8FF0`,freeTextPlaceholder:"\u56DE\u7B54\u3092\u5165\u529B\u2026\uFF08\u2318/Ctrl+Enter \u3067\u6B21\u3078\uFF09",clearAnswer:"\u56DE\u7B54\u3092\u30AF\u30EA\u30A2",roundSelect:"\u8CEA\u554F\u306E\u30E9\u30A6\u30F3\u30C9",currentRound:"\u73FE\u5728\u306E\u8CEA\u554F",roundOption:(t,e)=>`${t}\uFF08${e} \u554F\uFF09`,pastRound:t=>`${t}: \u904E\u53BB\u306E\u8CEA\u554F\uFF08\u95B2\u89A7\u306E\u307F\uFF09`,unanswered:"\u672A\u56DE\u7B54"}}),X=t=>t.title===""?"Visually Grill":t.title,Z=(t,e,r)=>{switch(r.type){case"question":return z(e,r.id);case"page":return t.wholePage;default:return r.id}},Le=(t,e,r)=>{const i=O(C.ANSWER_QUESTION,r);if(i.kind==="clear")return{title:t.answerCleared,tone:"delete"};if(i.kind==="option"){const n=v(e,r.target.id)?.options.find(a=>a.id===i.optionId);return{title:t.answered,tone:"update",body:t.quoted(n?.label??i.optionId)}}return{title:t.answeredFreely,tone:"update",body:t.quoted(i.text.slice(0,120))}},ee=(t,e,r,i)=>{let n;try{n=Le(t,i??r,e)}catch{n={title:e.type,tone:"meta"}}return{title:n.title,targetLabel:Z(t,r,e.target),tone:n.tone,...n.body===void 0?{}:{summary:n.body}}},te=t=>`${t.type} ${F(t.target)} ${JSON.stringify(t.payload)}`,re=(t,e)=>e.questions.map(r=>({value:`question:${r.id}`,label:z(e,r.id),group:t.questionGroup})),ie=(t,e)=>{const r=e.question;if(r!==void 0&&v(t,r))return e;const i=t.questions[0];return i===void 0?e:{...e,question:i.id}},ne=(t,e)=>{const r=e.question;return r!==void 0&&v(t,r)?r:t.questions[0]?.id??null},Ne=(t,e)=>{const r=t.questions,i=r.findIndex(a=>a.id===e);return(i===-1?r:[...r.slice(i+1),...r.slice(0,i)]).find(a=>!E(a,t.answers[a.id]))?.id??null},ae=(t,e)=>t.options.map((r,i)=>({id:r.id,letter:V(i),label:r.label,checked:e?.kind==="option"&&e.optionId===r.id})),Oe=(t,e,r)=>{const i=e.answers[t.id];return{id:t.id,ref:t.ref,title:t.title,description:t.description,note:t.note,open:t.id===r,answered:S(t,i)!=="",summary:S(t,i),choices:ae(t,i),draft:i?.kind==="free"?i.text:"",freeSelected:i?.kind==="free",allowFreeText:t.freeText}},oe=(t,e)=>{const r=ne(t,e);return{questions:t.questions.map(i=>Oe(i,t,r))}},se=(t,e)=>{const r=K(e);return{progress:t.progress(r.answered,r.total),answered:r.answered,total:r.total}},le=(t,e)=>e!=="current"&&t.pastRounds[e]!==void 0?e:"current",Fe=(t,e,r)=>{if(e.pastRounds.length===0)return[];const i=le(e,r),n=e.pastRounds.map((a,o)=>({value:String(o),label:t.roundOption(a.label,a.questions.length),selected:i===o}));return[{value:"current",label:t.roundOption(t.currentRound,e.questions.length),selected:i==="current"},...[...n].reverse()]},Pe=(t,e,r)=>{const i=e.pastRounds[r];return i===void 0?null:{label:i.label,questions:i.questions.map(n=>{const a=n.answer??void 0,o=S(n,a);return{id:n.id,ref:n.ref,title:n.title,description:n.description,note:n.note,answered:o!=="",summary:o===""?t.unanswered:o,choices:ae(n,a),freeText:a?.kind==="free"?a.text:null}})}},de=(t,e)=>{switch(e.type){case"question":return v(t,e.id)!==void 0;case"page":return!0;default:return!1}},pe=t=>{const e=R(t);return{name:"grill",label:"Visually Grill",parseBase:Y,emptyBase:D,actions:C,apply:J,hasTarget:de,describe:(r,i,n)=>ee(e,r,i,n),serialize:te,resolveNavigation:ie,navigationFor:(r,i)=>i.type==="question"&&v(r,i.id)?{question:i.id}:null,commentTargets:r=>re(e,r),title:X}},Ge=5,L=4,ce=8,Be=(t,e)=>{const r=e.badgeHeight,i=t.target.right+ce,n=t.target.left-ce,a=[];let o=0,l=i;for(let u=t.widths.length-1;u>=0;u-=1){const g=t.widths[u]??0;l!==i&&l-g<n&&(o+=1,l=i),a[u]={x:l-g,y:t.target.top-r/2-o*(r+L)},l-=g+Ge}return a},ge=(t,e)=>{const r=t.map(()=>[]),i=Re(t.map((a,o)=>({group:a,index:o})).filter(({group:a})=>a.gutter),[({group:a})=>a.target.top]);let n=Number.NEGATIVE_INFINITY;for(const{group:a,index:o}of i){let l=Math.max(a.target.top,n);r[o]=a.widths.map(u=>{const g={x:e.width-u,y:l};return l+=e.badgeHeight+L,g}),n=l}return{points:r,bottom:n-L}},He=(t,e)=>Math.max(0,ge(t,e).bottom),Me=(t,e)=>{const r=ge(t,e),i=Math.max(e.height,r.bottom);return t.map((n,a)=>(n.gutter?r.points[a]??[]:Be(n,e)).map((o,l)=>({x:H(o.x,0,Math.max(0,e.width-(n.widths[l]??0))),y:H(o.y,0,Math.max(0,i-e.badgeHeight))})))},q="data-grill-questions",_e=t=>{const e=[t];for(const r of t.querySelectorAll("*"))r.shadowRoot&&e.push(r.shadowRoot);return e},ue=(t,e,r)=>{const i=r.question??e.questions[0]?.id??null,n=new Map(e.questions.map(o=>[o.ref,o])),a=[];for(const o of _e(t))for(const l of o.querySelectorAll(`[${q}]`)){const u=l.getAttribute(q)??"";for(const g of u.split(/\s+/)){if(g==="")continue;const h=n.get(g);h&&a.push({index:a.length,target:l,questionId:h.id,ref:h.ref,title:h.title,answered:E(h,e.answers[h.id]),open:h.id===i})}}return a},he=(t,e)=>{const r=t.getBoundingClientRect(),i=t.getRootNode(),n=i instanceof ShadowRoot?i.host:null,a=new Map;e.forEach((b,w)=>{const d=t.querySelector(`[data-label="${w}"]`);if(!d)return;const y=a.get(b.target)??[];y.push(d),a.set(b.target,y)});const o=[];for(const[b,w]of a){const d=b.getBoundingClientRect(),y=Ue(b,t),$=(d.width>0||d.height>0)&&d.bottom>r.top&&d.top<r.bottom&&d.right>r.left&&d.left<r.right&&d.bottom>y.top&&d.top<y.bottom;for(const Q of w)Q.dataset.visible=String($);$&&o.push({buttons:w,group:{target:{left:d.left-r.left,top:d.top-r.top,right:d.right-r.left,bottom:d.bottom-r.top},widths:w.map(Q=>Q.offsetWidth),gutter:n?.contains(b)===!0}})}const l=o[0]?.buttons[0]?.offsetHeight??0,u=o.map(({group:b})=>b),g={width:t.clientWidth,height:t.clientHeight,badgeHeight:l},h=He(u,g);t.parentElement&&(t.parentElement.style.minHeight=h>0?`${Math.ceil(h)}px`:"");const ke=Me(u,{...g,height:Math.max(g.height,h)});o.forEach(({buttons:b},w)=>{b.forEach((d,y)=>{const $=ke[w]?.[y];$&&(d.style.transform=`translate(${$.x}px, ${$.y}px)`)})})},Ue=(t,e)=>{const r=t.getRootNode(),i=r instanceof ShadowRoot?r.host:null,n=i?.shadowRoot?.querySelector(".diagram-canvas")??null;return n instanceof Element?n.getBoundingClientRect():i instanceof Element?i.getBoundingClientRect():e.getBoundingClientRect()},We=(t,e,r)=>s`
  <div class="grill-list">
    ${e.questions.length===0?s`<p class="grill-empty">${t.noQuestions}</p>`:P(e.questions,i=>i.id,i=>je(t,i,r))}
  </div>
`,je=(t,e,r)=>s`
  <section
    class="grill-question"
    data-question=${e.id}
    data-answered=${String(e.answered)}
    data-dpk-target=${F({type:"question",id:e.id})}
  >
    <button
      class="grill-heading"
      type="button"
      aria-expanded=${e.open?"true":"false"}
      aria-controls=${`grill-body-${e.id}`}
      @click=${()=>r.open(e.id)}
    >
      <span class="grill-ref">${e.ref}</span>
      <span class="grill-heading-text">
        <strong>${e.title}</strong>
        ${!e.open&&e.answered?s`<span class="grill-summary">${e.summary}</span>`:p}
      </span>
      <span class="grill-chevron" aria-hidden="true">${G()}</span>
    </button>
    ${e.open?s`<div class="grill-body" id=${`grill-body-${e.id}`}>
            ${e.description?s`<p class="grill-description">${e.description}</p>`:p}
            ${e.note?s`<p class="grill-note">${e.note}</p>`:p}
            <div class="grill-choices" role="radiogroup" aria-label=${e.title}>
              ${e.choices.map(i=>Ye(e.id,i,r))}
              ${e.allowFreeText?s`<label class="grill-choice grill-choice--free" data-free=${String(e.freeSelected)}>
                      <input
                        type="radio"
                        name=${`grill-${e.id}`}
                        value="__free"
                        .checked=${e.freeSelected}
                        @change=${()=>r.answer(e.id,{kind:"free",text:""})}
                      />
                      <span class="grill-choice-text">${t.freeText}</span>
                    </label>`:p}
            </div>
            ${e.allowFreeText?s`<textarea
                    class="dpk-textarea grill-free"
                    data-free-text=${e.id}
                    aria-label=${t.freeTextOf(e.ref)}
                    placeholder=${t.freeTextPlaceholder}
                    .value=${e.draft}
                    ?hidden=${!e.freeSelected}
                    @input=${i=>{const n=i.currentTarget;n instanceof HTMLTextAreaElement&&r.answer(e.id,{kind:"free",text:n.value})}}
                    @keydown=${i=>{i.isComposing||!(i.metaKey||i.ctrlKey)||i.key!=="Enter"||(i.preventDefault(),r.next(e.id))}}
                  ></textarea>`:p}
            ${e.answered?s`<button
                    type="button"
                    class="grill-clear"
                    @click=${()=>r.answer(e.id,{kind:"clear"})}
                  >
                    ${t.clearAnswer}
                  </button>`:p}
          </div>`:p}
  </section>
`,Ye=(t,e,r)=>s`
  <label class="grill-choice" data-choice=${e.id}>
    <input
      type="radio"
      name=${`grill-${t}`}
      value=${e.id}
      .checked=${e.checked}
      @change=${()=>r.answer(t,{kind:"option",optionId:e.id})}
    />
    <span class="grill-choice-text">
      <span class="grill-letter">(${e.letter})</span>
      <span>${e.label}</span>
    </span>
  </label>
`,De=(t,e)=>s`
  <div class="grill-list">
    <p class="grill-round-note">${t.pastRound(e.label)}</p>
    ${e.questions.length===0?s`<p class="grill-empty">${t.noQuestions}</p>`:P(e.questions,r=>r.id,r=>Ve(r))}
  </div>
`,Ve=t=>s`
  <details
    class="grill-question grill-question--past"
    data-question=${t.id}
    data-answered=${String(t.answered)}
  >
    <summary class="grill-heading">
      <span class="grill-ref">${t.ref}</span>
      <span class="grill-heading-text">
        <strong>${t.title}</strong>
        <span class="grill-summary">${t.summary}</span>
      </span>
      <span class="grill-chevron" aria-hidden="true">${G()}</span>
    </summary>
    <div class="grill-body">
      ${t.description?s`<p class="grill-description">${t.description}</p>`:p}
      ${t.note?s`<p class="grill-note">${t.note}</p>`:p}
      ${t.choices.length===0?p:s`<ul class="grill-past-choices">
              ${t.choices.map(e=>s`<li class="grill-past-choice" data-checked=${String(e.checked)}>
                  <span class="grill-letter">(${e.letter})</span>
                  <span>${e.label}</span>
                </li>`)}
            </ul>`}
      ${t.freeText===null?p:s`<p class="grill-past-choice grill-past-free" data-checked="true">${t.freeText}</p>`}
    </div>
  </details>
`,Ke=ye`
  /* The shell's sidebar is a right-hand rail (see \`sidebarLayout\`), keeping its scroll. */
  .dpk-sidebar {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
  }

  /* The header reserves room for the corner button, exactly like the review
     button in the other templates. */
  .grill-panel {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
  }

  .grill-tab-panel {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: auto;
  }

  .grill-tab-panel[hidden],
  .dpk-sidebar[hidden] {
    display: none;
  }

  /* A phone has no room for the main area beside the questions: they open
     over it, and the corner control folds them away to show it. */
  @media (max-width: 760px) {
    .dpk-sidebar {
      position: absolute;
      inset: 0;
      z-index: 25;
      width: auto;
      max-width: none;
      border-left: 0;
    }

    .dpk-sidebar-resizer {
      display: none;
    }
  }

  .grill-tab-panel dpk-component-comment-panel {
    flex: 1;
  }

  /* ------------------------------------------------------- header control */

  /*
   * The one control the reader always needs: the questions. It sits where the
   * other templates put their review button, and folds the question column away
   * so the diagrams get the width back.
   */
  .grill-toggle {
    position: fixed;
    top: 10px;
    right: 16px;
    z-index: 60;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 999px;
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    color: var(--dpk-ink-soft);
    font-size: 16.5px;
    font-weight: 650;
    line-height: 1;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow);
    cursor: pointer;
    transition:
      color 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease),
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease-spring);
  }

  .grill-toggle:hover {
    color: var(--dpk-ink);
    transform: translateY(-2px) scale(1.05);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
  }

  .grill-toggle:active {
    transform: translateY(0) scale(0.97);
    box-shadow: var(--dpk-shadow-xs);
  }

  .grill-toggle:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .grill-toggle[aria-expanded='true'] {
    color: var(--dpk-accent-ink);
    border-color: transparent;
    background: linear-gradient(135deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.24),
      0 2px 8px color-mix(in srgb, var(--dpk-accent) 40%, transparent);
  }

  .grill-toggle-glyph {
    display: block;
  }

  .grill-toggle-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 22px;
    height: 18px;
    padding: 0 5px;
    border: 2px solid var(--dpk-paper-raised);
    border-radius: 999px;
    background: linear-gradient(180deg, var(--dpk-paper-raised), var(--dpk-paper-inset));
    color: var(--dpk-ink-soft);
    font-family: var(--dpk-mono);
    font-size: 9px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    line-height: 14px;
    /* The widest value is wider than the button it sits on: keep it on one line. */
    white-space: nowrap;
    text-align: center;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .grill-toggle[aria-expanded='true'] .grill-toggle-badge {
    background: var(--dpk-paper-raised);
    color: var(--dpk-accent);
  }

  /* ------------------------------------------------------------- the list */

  /* A segmented control: a sunken track with the active tab raised out of it. */
  .grill-tabs {
    display: flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    margin: 10px;
    padding: 3px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
  }

  .grill-tabs button {
    flex: 1 1 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 6px 9px;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    color: var(--dpk-ink-faint);
    font-size: 11.5px;
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease);
  }

  .grill-tabs button:hover {
    color: var(--dpk-ink);
  }

  .grill-tabs button[aria-selected='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 600;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .grill-count {
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-faint);
  }

  .grill-tabs button[aria-selected='true'] .grill-count {
    color: var(--dpk-accent);
  }

  /* With earlier rounds, the questions tab is a select of rounds: the same
     segment, with a chevron drawn from the text color. */
  .grill-round-tab {
    position: relative;
    flex: 1 1 0;
    display: flex;
    min-width: 0;
  }

  .grill-round {
    flex: 1;
    min-width: 0;
    padding: 6px 22px 6px 9px;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-sm);
    appearance: none;
    background-color: transparent;
    background-image:
      linear-gradient(45deg, transparent 50%, currentColor 50%),
      linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position:
      calc(100% - 12px) 52%,
      calc(100% - 8px) 52%;
    background-size: 4px 4px;
    background-repeat: no-repeat;
    color: var(--dpk-ink-faint);
    font: inherit;
    font-size: 11.5px;
    text-align: center;
    text-align-last: center;
    text-overflow: ellipsis;
    cursor: pointer;
    transition:
      background-color 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease);
  }

  .grill-round-tab:hover .grill-round {
    color: var(--dpk-ink);
  }

  /* From Review the select is disabled and only looks like the other tab. */
  .grill-round:disabled {
    opacity: 1;
  }

  .grill-tabs .grill-round-switch {
    position: absolute;
    inset: 0;
    padding: 0;
  }

  .grill-round-tab[data-selected='true'] .grill-round {
    background-color: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 600;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .grill-round option {
    color: var(--dpk-ink);
    background: var(--dpk-paper-raised);
    font-weight: 400;
  }

  .grill-round-note {
    margin: 4px 0 2px;
    padding: 0 8px;
    font-size: 10.5px;
    line-height: 1.6;
    color: var(--dpk-ink-faint);
  }

  .grill-list {
    flex: 1;
    min-height: 0;
    overflow: auto;
    overscroll-behavior: contain;
    padding: 2px 10px 12px;
  }

  .grill-empty {
    margin: 0;
    padding: 22px 8px;
    text-align: center;
    font-size: 12px;
    color: var(--dpk-ink-faint);
  }

  .grill-question {
    margin: 6px 0;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius);
    transition:
      background 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease);
  }

  .grill-question:has(.grill-heading[aria-expanded='true']) {
    border-color: var(--dpk-rule);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .grill-heading {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    width: 100%;
    padding: 10px 8px;
    border: 0;
    border-radius: var(--dpk-radius-sm);
    background: none;
    text-align: left;
    cursor: pointer;
  }

  .grill-heading:hover {
    background: var(--dpk-paper-sunken);
  }

  .grill-question:has(.grill-heading[aria-expanded='true']) .grill-heading:hover {
    background: none;
  }

  .grill-ref {
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    min-width: 30px;
    height: 22px;
    padding: 0 6px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 999px;
    background: var(--dpk-paper-sunken);
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-faint);
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      border-color 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease);
  }

  .grill-question[data-answered='true'] .grill-ref {
    border-color: transparent;
    background: linear-gradient(180deg, var(--dpk-green-soft), color-mix(in srgb, var(--dpk-green) 16%, transparent));
    color: var(--dpk-green);
    box-shadow: var(--dpk-bevel);
  }

  .grill-question:has(.grill-heading[aria-expanded='true']) .grill-ref {
    border-color: transparent;
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent));
    color: var(--dpk-accent-ink);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.24),
      0 2px 6px -2px color-mix(in srgb, var(--dpk-accent) 55%, transparent);
  }

  .grill-heading-text {
    flex: 1;
    min-width: 0;
  }

  .grill-heading-text strong {
    display: block;
    font-size: 12.5px;
    font-weight: 620;
    line-height: 1.6;
    letter-spacing: -0.005em;
  }

  .grill-summary {
    display: block;
    margin-top: 4px;
    font-size: 10.5px;
    line-height: 1.6;
    color: var(--dpk-green);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .grill-chevron {
    flex: 0 0 auto;
    width: 16px;
    color: var(--dpk-ink-faint);
    line-height: 22px;
    text-align: center;
  }

  .grill-chevron svg {
    display: block;
    width: 13px;
    height: 13px;
    margin: 4.5px auto 0;
    transition: transform 180ms var(--dpk-ease);
  }

  .grill-heading[aria-expanded='true'] .grill-chevron svg {
    transform: rotate(90deg);
    color: var(--dpk-accent);
  }

  .grill-body {
    padding: 2px 8px 14px 47px;
    animation: dpk-grill-open 180ms var(--dpk-ease) backwards;
  }

  @keyframes dpk-grill-open {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  .grill-description {
    margin: 0 0 8px;
    font-size: 11.5px;
    line-height: 1.85;
    color: var(--dpk-ink-soft);
  }

  .grill-note {
    margin: 0 0 10px;
    padding: 7px 10px;
    border-left: 2px solid var(--dpk-amber);
    border-radius: 0 var(--dpk-radius-xs) var(--dpk-radius-xs) 0;
    background: linear-gradient(90deg, var(--dpk-amber-soft), transparent);
    font-size: 11px;
    line-height: 1.7;
    color: var(--dpk-ink-soft);
  }

  .grill-choices {
    display: grid;
    gap: 6px;
  }

  .grill-choice {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 9px 8px 12px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper);
    font-size: 11.5px;
    line-height: 1.7;
    cursor: pointer;
    overflow: hidden;
    transition:
      border-color 140ms var(--dpk-ease),
      background 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease),
      transform 140ms var(--dpk-ease);
  }

  /* Selection indicator: a colored bar on the leading edge, like the rail's
     comment cards — quiet until a choice is actually picked. */
  .grill-choice::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: transparent;
    transition: background 140ms var(--dpk-ease);
  }

  .grill-choice:hover {
    border-color: var(--dpk-rule-hover);
    background: var(--dpk-paper-inset);
  }

  .grill-choice:has(input:checked) {
    border-color: color-mix(in srgb, var(--dpk-green) 45%, transparent);
    background: var(--dpk-green-soft);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--dpk-green) 30%, transparent);
  }

  .grill-choice:has(input:checked)::before {
    background: var(--dpk-green);
  }

  .grill-choice--free {
    border-style: dashed;
  }

  .grill-choice--free[data-free='true'] {
    border-style: solid;
  }

  .grill-choice input {
    flex: 0 0 auto;
    margin: 3px 0 0;
    accent-color: var(--dpk-green);
  }

  .grill-choice-text {
    display: flex;
    gap: 7px;
    min-width: 0;
  }

  .grill-letter {
    flex: 0 0 auto;
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 600;
    line-height: 1.9;
    color: var(--dpk-green);
  }

  /* An earlier round: a disclosure per question, nothing to answer with. */
  .grill-question--past > summary {
    list-style: none;
  }

  .grill-question--past > summary::-webkit-details-marker {
    display: none;
  }

  .grill-question--past[open] {
    border-color: var(--dpk-rule);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .grill-question--past[open] .grill-heading:hover {
    background: none;
  }

  .grill-question--past[open] .grill-chevron svg {
    transform: rotate(90deg);
  }

  .grill-question--past[open] .grill-summary {
    display: none;
  }

  .grill-question--past[data-answered='false'] .grill-summary {
    color: var(--dpk-ink-faint);
  }

  .grill-past-choices {
    display: grid;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .grill-past-choice {
    display: flex;
    gap: 7px;
    margin: 0;
    padding: 7px 9px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    font-size: 11.5px;
    line-height: 1.7;
    color: var(--dpk-ink-faint);
  }

  .grill-past-choice[data-checked='true'] {
    border-color: color-mix(in srgb, var(--dpk-green) 45%, transparent);
    background: var(--dpk-green-soft);
    color: var(--dpk-ink);
  }

  .grill-past-free {
    margin-top: 6px;
    white-space: pre-wrap;
  }

  .grill-free {
    margin-top: 7px;
    min-height: 76px;
    max-height: 240px;
  }

  .grill-clear {
    margin-top: 10px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--dpk-ink-faint);
    font-size: 10.5px;
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
  }

  .grill-clear:hover {
    color: var(--dpk-ink);
  }

  .grill-footer {
    flex-shrink: 0;
    padding: 10px 12px;
    border-top: 1px solid var(--dpk-rule);
    background: var(--dpk-paper-raised);
    box-shadow: 0 -6px 12px -10px var(--dpk-shade-2);
  }

  .grill-copy {
    width: 100%;
  }

  /* Inside a Claude Artifact: send is the way, copy the fallback beside it. */
  .grill-footer-actions {
    display: flex;
    gap: 6px;
  }

  .grill-send {
    flex: 1;
    min-width: 0;
  }

  .grill-footer-actions .grill-copy {
    width: auto;
    flex-shrink: 0;
  }

  .grill-send[data-status='sent'] {
    border-color: transparent;
    background: var(--dpk-green);
    color: var(--dpk-accent-ink);
  }

  .grill-send[data-status='failed'] {
    border-color: transparent;
    background: var(--dpk-amber);
    color: var(--dpk-accent-ink);
  }

  .grill-footer-note {
    margin: 8px 0 0;
    color: var(--dpk-ink-soft);
    font-size: 11.5px;
    line-height: 1.5;
  }

  /* The copy button reports the outcome, so a click is never silent. */
  .grill-copy[data-status='copied'] {
    border-color: transparent;
    background: var(--dpk-green);
    color: var(--dpk-accent-ink);
  }

  .grill-copy[data-status='copied']:hover:not([disabled]) {
    border-color: transparent;
    background: color-mix(in srgb, var(--dpk-green) 85%, #000);
  }

  .grill-copy[data-status='failed'] {
    border-color: transparent;
    background: var(--dpk-amber);
    color: var(--dpk-accent-ink);
  }

  .grill-copy[data-status='failed']:hover:not([disabled]) {
    border-color: transparent;
    background: color-mix(in srgb, var(--dpk-amber) 85%, #000);
  }

  /* Announced to assistive tech; the button label change alone is easy to miss. */
  .grill-sr {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  /* -------------------------------------------------- main area and badges */

  .grill-stage {
    position: relative;
    min-width: 0;
  }

  /* Badges on the author's own markup stand in a column of their own on the
     right, beside the line they mark, so they never cover its words. */
  .grill-stage[data-gutter] {
    padding-right: 48px;
  }

  /* The author's own markup lands in slot="main": nudge its prose toward the
     kit's own type scale, so the diagrams it wraps don't feel bolted on. */
  .grill-stage ::slotted(h1),
  .grill-stage ::slotted(h2),
  .grill-stage ::slotted(h3) {
    font-family: var(--dpk-display);
    font-weight: 660;
    letter-spacing: -0.015em;
    color: var(--dpk-ink);
  }

  .grill-stage ::slotted(p) {
    line-height: 1.75;
    color: var(--dpk-ink-soft);
  }

  .grill-labels {
    position: absolute;
    inset: 0;
    z-index: 3;
    overflow: hidden;
    pointer-events: none;
  }

  .grill-label {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    height: 22px;
    padding: 0 7px;
    border: 2px solid var(--dpk-paper-raised);
    border-radius: 999px;
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent));
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.28),
      0 2px 6px -2px color-mix(in srgb, var(--dpk-accent) 55%, transparent);
    cursor: pointer;
    pointer-events: auto;
    transition:
      transform 160ms var(--dpk-ease-spring),
      box-shadow 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease);
  }

  .grill-label[data-visible='false'] {
    visibility: hidden;
  }

  .grill-label:hover {
    transform: translateY(-1px) scale(1.06);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 4px 10px -2px color-mix(in srgb, var(--dpk-accent) 60%, transparent);
  }

  .grill-label[data-answered='true'] {
    background: linear-gradient(180deg, color-mix(in srgb, var(--dpk-green) 85%, white), var(--dpk-green));
  }

  .grill-label[aria-pressed='true'] {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--dpk-accent) 45%, transparent),
      var(--dpk-shadow-sm);
  }

  .grill-label:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }
`;class be extends B{static{this.styles=[B.styles,Ke]}get sidebarLayout(){return{side:"right",defaultWidth:336,collapsible:!1}}definitionFor(e){return pe(e)}static{this.properties={tab:{state:!0},folded:{state:!0},round:{state:!0}}}#o=[];#s=!1;#a=null;#l=null;#r=null;#e="idle";#i=null;#n={kind:"idle"};constructor(){super(),this.tab="questions",this.folded=!1,this.round="current"}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#t,!0),window.addEventListener("resize",this.#t),this.addEventListener("dpk-diagram-view",this.#t)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("scroll",this.#t,!0),window.removeEventListener("resize",this.#t),this.removeEventListener("dpk-diagram-view",this.#t),this.#r?.disconnect(),this.#r=null,this.#d()}renderRegions(e){return this.#o=ue(this,e.state,e.navigation),{header:this.#b(e),main:this.#m(e,this.#o),sidebar:this.#f(e),sidebarHidden:this.folded}}updated(){super.updated(),this.#T(),this.#t(),this.#S();const e=this.#l;e!==null&&(this.#l=null,this.renderRoot.querySelector(`[data-free-text="${e}"]`)?.focus())}get integratedReview(){return!0}requestComment(e){this.tab="review",this.folded=!1,super.requestComment(e)}showTarget(e){e.type==="question"&&(this.tab="questions",this.folded=!1,this.round="current")}#p(e,r){this.tab="questions",this.folded=!1,this.round="current",this.#a=null,e.navigate({question:r})}#b(e){const r=R(this.locale),i=se(r,e.state),n=r.toggleLabel(this.folded?r.openPanel:r.closePanel,i.progress);return s`
      <button
        type="button"
        class="grill-toggle"
        aria-expanded=${this.folded?"false":"true"}
        aria-label=${n}
        title=${n}
        @click=${()=>this.folded=!this.folded}
      >
        <span class="grill-toggle-glyph" aria-hidden="true">?</span>
        <span class="grill-toggle-badge" aria-hidden="true">${i.answered} / ${i.total}</span>
      </button>
    `}#f(e){const r=R(this.locale),i=le(e.state,this.round),n=Fe(r,e.state,i),a=i==="current"?null:Pe(r,e.state,i);return s`
      <div class="grill-panel">
        <div class="grill-tabs" role="tablist" aria-label=${r.tabs}>
          ${["questions","review"].map(o=>o==="questions"&&n.length>0?this.#v(r,n):s`
                  <button
                    type="button"
                    role="tab"
                    id=${`grill-tab-${o}`}
                    data-tab=${o}
                    aria-controls=${`grill-panel-${o}`}
                    aria-selected=${String(this.tab===o)}
                    tabindex=${this.tab===o?0:-1}
                    @click=${()=>this.tab=o}
                    @keydown=${l=>this.#c(l)}
                  >
                    ${o==="questions"?r.questionsTab:r.reviewTab}<span class="grill-count"
                      >${o==="questions"?e.state.questions.length:e.actions.length}</span
                    >
                  </button>
                `)}
        </div>
        <div
          class="grill-tab-panel"
          id="grill-panel-questions"
          role="tabpanel"
          aria-labelledby="grill-tab-questions"
          ?hidden=${this.tab!=="questions"}
        >
          ${a===null?We(r,oe(e.state,e.navigation),{open:o=>this.#p(e,o),answer:(o,l)=>this.#w(o,l),next:o=>this.#g(o)}):De(r,a)}
        </div>
        <div
          class="grill-tab-panel"
          id="grill-panel-review"
          role="tabpanel"
          aria-labelledby="grill-tab-review"
          ?hidden=${this.tab!=="review"}
        >
          ${this.renderReviewPanel(e)}
        </div>
        ${this.#k(e.actions.length===0)}
      </div>
    `}#k(e){const r=R(this.locale),i=this.#e==="copied"?r.copied:this.#e==="failed"?r.copyFailed:r.copyAll;if(!this.canSendToClaude)return s`
        <div class="grill-footer">
          <button
            class="dpk-btn dpk-btn--accent grill-copy"
            type="button"
            data-status=${this.#e}
            ?disabled=${e}
            @click=${()=>{this.#u()}}
          >
            ${i}
          </button>
          <span class="grill-sr" role="status">${this.#e==="idle"?"":i}</span>
        </div>
      `;const n=this.#n,a=n.kind==="pending"?r.sending:n.kind==="sent"?r.sent:n.kind==="failed"?r.sendFailed:r.sendAll,o=n.kind==="failed"?$e(n.reason,this.locale):null,l=o??(n.kind==="sent"?a:this.#e==="idle"?"":i);return s`
      <div class="grill-footer">
        <div class="grill-footer-actions">
          <button
            class="dpk-btn dpk-btn--accent grill-send"
            type="button"
            data-status=${n.kind}
            ?disabled=${e||n.kind==="pending"}
            @click=${()=>{this.#y()}}
          >
            ${a}
          </button>
          <button
            class="dpk-btn dpk-btn--ghost grill-copy"
            type="button"
            data-status=${this.#e}
            title=${r.copyAll}
            ?disabled=${e}
            @click=${()=>{this.#u()}}
          >
            ${this.#e==="copied"?r.copyDone:r.copy}
          </button>
        </div>
        ${o===null?null:s`<p class="grill-footer-note">${o}</p>`}
        <span class="grill-sr" role="status">${l}</span>
      </div>
    `}#v(e,r){const i=this.tab==="questions",n=s`
      <select
        class="grill-round"
        id=${i?"grill-tab-questions":p}
        data-tab=${i?"questions":p}
        aria-label=${e.roundSelect}
        aria-controls="grill-panel-questions"
        ?disabled=${!i}
        @change=${a=>this.#x(a)}
      >
        ${r.map(a=>s`<option value=${a.value} ?selected=${a.selected}>${a.label}</option>`)}
      </select>
    `;return s`
      <div class="grill-round-tab" data-selected=${String(i)}>
        ${n}
        ${i?p:s`<button
                type="button"
                role="tab"
                class="grill-round-switch"
                id="grill-tab-questions"
                data-tab="questions"
                aria-controls="grill-panel-questions"
                aria-selected="false"
                aria-label=${r.find(a=>a.selected)?.label??e.questionsTab}
                tabindex="-1"
                @click=${()=>this.tab="questions"}
                @keydown=${a=>this.#c(a)}
              ></button>`}
      </div>
    `}#x(e){const r=e.currentTarget;r instanceof HTMLSelectElement&&(this.tab="questions",this.round=r.value==="current"?"current":Number(r.value),this.#a=null)}#c(e){if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault(),this.tab=e.key==="Home"?"questions":e.key==="End"||this.tab==="questions"?"review":"questions";const r=this.tab;this.updateComplete.then(()=>this.renderRoot.querySelector(`[data-tab="${r}"]`)?.focus())}#m(e,r){return s`
      <div class="grill-stage" ?data-gutter=${r.some(i=>this.contains(i.target))}>
        <slot name="main"></slot>
        <div class="grill-labels">
          ${r.map(i=>s`
              <button
                type="button"
                class="grill-label"
                data-label=${i.index}
                data-answered=${String(i.answered)}
                data-visible="false"
                aria-pressed=${i.open?"true":"false"}
                aria-label=${`${i.ref} \xB7 ${i.title}`}
                title=${`${i.ref} \xB7 ${i.title}`}
                @click=${()=>this.#p(e,i.questionId)}
              >
                ${i.ref}
              </button>
            `)}
        </div>
      </div>
    `}#w(e,r){if(this.dispatch(M(e,r)).ok){if(r.kind==="option"){this.#g(e);return}r.kind==="free"&&r.text===""&&(this.#l=e)}}#g(e){const r=Ne(this.derivation.state,e);r!==null&&this.navigate({question:r})}async#u(){const e=this.api.exportBrief(),r=await Te(e);this.#d(),this.#e=r?"copied":"failed",this.#h()}async#y(){this.#d(),this.#n={kind:"pending"},this.requestUpdate();const e=await this.sendToClaude();this.#n=e.ok?{kind:"sent"}:{kind:"failed",reason:e.reason},e.ok?this.#h():this.requestUpdate()}#h(){this.requestUpdate(),this.#i=setTimeout(()=>{this.#i=null,this.#e="idle",this.#n={kind:"idle"},this.requestUpdate()},2400)}#d(){this.#i!==null&&clearTimeout(this.#i),this.#i=null,this.#e="idle",this.#n={kind:"idle"}}#$(){this.requestUpdate()}#T(){this.#r?.disconnect(),this.#r??=new MutationObserver(()=>{this.#$(),this.#t()}),this.#r.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[q]});for(const e of this.querySelectorAll("*"))e===this||!e.shadowRoot||this.#r.observe(e.shadowRoot,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[q]})}#t=()=>{this.#s||(this.#s=!0,requestAnimationFrame(()=>{this.#s=!1;const e=this.renderRoot.querySelector(".grill-labels");e&&he(e,this.#o)}))};#S(){const e=this.navigation.question??null;if(this.tab!=="questions"||this.round!=="current"||this.folded||e===null||e===this.#a)return;this.#a=e;const r=this.renderRoot.querySelector(`[data-question="${e}"]`),i=r?.closest(".grill-list");r&&i&&Se(i,r)}}const fe=()=>{customElements.get("dpk-template-grill")||customElements.define("dpk-template-grill",be)},Je=Object.freeze(Object.defineProperty({__proto__:null,DpkTemplateGrill:be,GRILL_QUESTIONS_ATTRIBUTE:q,answerCounts:K,answerQuestion:M,answerText:S,applyGrillAction:J,collectLabelBindings:ue,defineGrillElement:fe,describeGrillAction:ee,emptyGrillBase:D,findQuestion:v,grillActions:C,grillBaseSchema:U,grillCommentTargets:re,grillDefinitionFor:pe,grillHasTarget:de,grillMessages:R,grillTargetLabel:Z,grillTitle:X,isAnswered:E,openQuestionId:ne,optionLetter:V,parseGrillBase:Y,positionLabels:he,presentGrillHeader:se,presentGrillPanel:oe,questionLabel:z,questionRef:ze,resolveGrillNavigation:ie,serializeGrillAction:te,withAnswer:I},Symbol.toStringTag,{value:"Module"}));export{fe as d,Je as i};
