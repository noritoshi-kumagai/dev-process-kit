import{a2 as _,af as N,ag as f,ah as c,ai as k,aj as p,aC as R,al as G,am as Y,ak as I,Y as u,C as v,h as U,a7 as x,a5 as l,a6 as d,b4 as J,as as W,ad as Q,z as V,a4 as X,T as w}from"./shared-hrghWtVh.js";const m=_({en:{wholeDeck:"Whole deck",slideGroup:"Slide",outline:"Slides",previous:"Previous slide",next:"Next slide",position:(t,e)=>`Slide ${t} of ${e}`,commentOnSlide:"Comment on this slide",commentPlaceholder:"A question, or what should change (passed to the agent)",addComment:"Add comment",deleteComment:"Delete this comment",submitHint:"\u2318 / Ctrl + Enter",fullscreen:"Full screen",fullscreenHint:"\u2190 \u2192 to move \xB7 Esc to leave",noSlidesBefore:"There are no slides yet. Add them to ",noSlidesAfter:" in the base data."},ja:{wholeDeck:"\u30C7\u30C3\u30AD\u5168\u4F53",slideGroup:"\u30B9\u30E9\u30A4\u30C9",outline:"\u30B9\u30E9\u30A4\u30C9",previous:"\u524D\u306E\u30B9\u30E9\u30A4\u30C9",next:"\u6B21\u306E\u30B9\u30E9\u30A4\u30C9",position:(t,e)=>`${e} \u679A\u4E2D ${t} \u679A\u76EE`,commentOnSlide:"\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u306B\u30B3\u30E1\u30F3\u30C8",commentPlaceholder:"\u8CEA\u554F\u3084\u3001\u5909\u3048\u3066\u307B\u3057\u3044\u3053\u3068\uFF08Agent \u306B\u6E21\u308B\uFF09",addComment:"\u30B3\u30E1\u30F3\u30C8\u3092\u8FFD\u52A0",deleteComment:"\u3053\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u524A\u9664",submitHint:"\u2318 / Ctrl + Enter",fullscreen:"\u5168\u753B\u9762\u8868\u793A",fullscreenHint:"\u2190 \u2192 \u3067\u79FB\u52D5 \xB7 Esc \u3067\u623B\u308B",noSlidesBefore:"\u30B9\u30E9\u30A4\u30C9\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002base data \u306E ",noSlidesAfter:" \u306B\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}}),y=["title","section","content"],Z=f({id:R,layout:c(I(y),"content"),title:G(p(),Y(1)),subtitle:c(p(),""),points:c(k(p()),[])}),$=f({title:c(p(),""),slides:c(k(Z),[])}),S=t=>{const e=N($,t),i=new Set;for(const n of e.slides){if(i.has(n.id))throw new Error(`duplicate slide id: ${n.id}`);i.add(n.id)}return{title:e.title,slides:e.slides}},C=()=>({title:"",slides:[]}),r=(t,e)=>e===void 0?-1:t.slides.findIndex(i=>i.id===e),T=(t,e)=>t.slides[r(t,e)],q=t=>t.title===""?"Slides":t.title,h=(t,e)=>`${e+1}. ${t.title}`,E=(t,e,i)=>{switch(i.type){case"slide":{const n=r(e,i.id),s=e.slides[n];return s===void 0?i.id:h(s,n)}case"page":return t.wholeDeck;default:return i.id}},z=(t,e,i)=>({title:e.type,targetLabel:E(t,i,e.target),tone:"meta"}),A=t=>`${t.type} ${u(t.target)} ${JSON.stringify(t.payload)}`,D=(t,e)=>e.slides.map((i,n)=>({value:u({type:"slide",id:i.id}),label:h(i,n),group:t.slideGroup})),M=(t,e,i)=>{const n=r(e,i.slide),s=e.slides[n];return s===void 0?null:{value:u({type:"slide",id:s.id}),label:h(s,n),group:t.slideGroup}},F=(t,e)=>{const i=t.slides[r(t,e.slide)]??t.slides[0],n={...e};return i?n.slide=i.id:delete n.slide,n},H=(t,e)=>{const i=r(t,e.slide),n=i===-1?0:i,s=t.slides[n];return s===void 0?null:{slide:s,index:n,total:t.slides.length,previous:t.slides[n-1],next:t.slides[n+1]}},ee=(t,e)=>t.filter(i=>i.type===v&&i.target.type==="slide"&&i.target.id===e).map(i=>({id:i.id,body:U(i)})).filter(i=>i.body!==""),L=(t,e)=>{switch(e.type){case"slide":return T(t,e.id)!==void 0;case"page":return!0;default:return!1}},O=t=>{const e=m(t);return{name:"slides",label:"Slides",parseBase:S,emptyBase:C,actions:{},apply:()=>null,hasTarget:L,describe:(i,n)=>z(e,i,n),serialize:A,resolveNavigation:F,navigationFor:(i,n)=>n.type==="slide"?{slide:n.id}:null,commentTargets:i=>D(e,i),currentTarget:(i,n)=>M(e,i,n),title:q}},te={ArrowRight:"next",PageDown:"next",ArrowLeft:"previous",PageUp:"previous",Home:"first",End:"last"},P=t=>t.altKey===!0||t.ctrlKey===!0||t.metaKey===!0||t.shiftKey===!0?null:te[t.key]??null,j=(t,e,i)=>{const n=t.slides.length-1;if(n<0)return;const s=Math.max(r(t,e),0),o={next:Math.min(s+1,n),previous:Math.max(s-1,0),first:0,last:n}[i];return t.slides[o]?.id},ie=(t,e)=>{const{state:i,navigation:n}=t,s=n.slide;return d`
    <nav class="outline" aria-label=${e.outline}>
      <div class="outline-head">
        <span class="dpk-label">${e.outline}</span>
        <span class="dpk-label">${i.slides.length}</span>
      </div>
      <ol class="outline-list">
        ${x(i.slides,o=>o.id,(o,a)=>{const g=o.id===s,b=t.commentCount({type:"slide",id:o.id});return d`
              <li class="outline-row" data-current=${String(g)} data-layout=${o.layout}>
                <a href=${t.hashFor({slide:o.id})} aria-current=${g?"page":l}>
                  <span class="outline-index">${String(a+1).padStart(2,"0")}</span>
                  <span class="outline-title">${o.title}</span>
                  ${b>0?d`<span class="outline-note">${b}</span>`:l}
                </a>
              </li>
            `})}
      </ol>
    </nav>
  `},ne=(t,e,i)=>{const n=H(t.state,t.navigation);if(n===null)return d`<div class="deck">
      <p class="deck-empty">${e.noSlidesBefore}<code>slides</code>${e.noSlidesAfter}</p>
    </div>`;const{slide:s,index:o,total:a}=n;return d`
    <div class="deck">
      <div class="stage">${se(s,o)}</div>
      <div class="deck-bar">
        <div class="deck-move">
          <button
            class="dpk-icon-btn deck-prev"
            type="button"
            aria-label=${e.previous}
            title=${e.previous}
            ?disabled=${n.previous===void 0}
            @click=${()=>i.onStep("previous")}
          >
            ${J()}
          </button>
          <span class="deck-counter" role="status" aria-label=${e.position(o+1,a)}>
            <strong>${o+1}</strong> / ${a}
          </span>
          <button
            class="dpk-icon-btn deck-next"
            type="button"
            aria-label=${e.next}
            title=${e.next}
            ?disabled=${n.next===void 0}
            @click=${()=>i.onStep("next")}
          >
            ${W()}
          </button>
        </div>
        <div class="deck-progress" aria-hidden="true">
          <span style=${`width:${(o+1)/a*100}%`}></span>
        </div>
        ${i.canFullscreen?d`<button
                class="dpk-btn deck-fullscreen"
                type="button"
                title=${e.fullscreenHint}
                @click=${i.onFullscreen}
              >
                ${Q()} ${e.fullscreen}
              </button>`:l}
      </div>
      ${ae(e,s,ee(t.comments,s.id),i)}
      ${oe(t.state,s.id)}
    </div>
  `},se=(t,e)=>d`
  <article
    class="slide"
    data-layout=${t.layout}
    data-dpk-target=${u({type:"slide",id:t.id})}
    aria-roledescription="slide"
    aria-label=${`${e+1}. ${t.title}`}
  >
    <div class="slide-content">
      <h2 class="slide-title">${t.title}</h2>
      ${t.subtitle===""?l:d`<p class="slide-subtitle">${t.subtitle}</p>`}
      ${t.points.length===0?l:d`<ul class="slide-points">
              ${t.points.map(i=>d`<li>${i}</li>`)}
            </ul>`}
      <div class="slide-body"><slot name=${`preview:${t.id}`}></slot></div>
    </div>
    <span class="slide-number" aria-hidden="true">${e+1}</span>
  </article>
`,ae=(t,e,i,n)=>{const s=n.draftFor(e.id),o=s.trim()!=="";return d`
    <section class="slide-comments" aria-label=${t.commentOnSlide}>
      ${i.length===0?l:d`<ul class="slide-comment-list">
              ${x(i,a=>a.id,a=>d`<li>
                  <span class="slide-comment-body">${a.body}</span>
                  <button
                    class="dpk-icon-btn slide-comment-delete"
                    type="button"
                    aria-label=${t.deleteComment}
                    title=${t.deleteComment}
                    @click=${()=>n.onDeleteComment(a.id)}
                  >
                    ${V()}
                  </button>
                </li>`)}
            </ul>`}
      <div class="slide-comment-form">
        <textarea
          class="dpk-textarea slide-comment-input"
          aria-label=${t.commentOnSlide}
          placeholder=${t.commentPlaceholder}
          .value=${s}
          @input=${a=>{a.currentTarget instanceof HTMLTextAreaElement&&n.onDraft(e.id,a.currentTarget.value)}}
          @keydown=${a=>{a.isComposing||a.key!=="Enter"||!(a.metaKey||a.ctrlKey)||(a.preventDefault(),o&&n.onComment(e.id))}}
        ></textarea>
        <div class="slide-comment-actions">
          <button
            class="dpk-btn dpk-btn--accent slide-comment-submit"
            type="button"
            ?disabled=${!o}
            @click=${()=>n.onComment(e.id)}
          >
            ${t.addComment}
          </button>
          <span class="slide-comment-hint">${t.submitHint}</span>
        </div>
      </div>
    </section>
  `},oe=(t,e)=>{const i=t.slides.filter(n=>n.id!==e);return i.length===0?l:d`<div class="parked" aria-hidden="true">
    ${i.map(n=>d`<slot name=${`preview:${n.id}`}></slot>`)}
  </div>`},de=X`
  /* ------------------------------------------------------------ outline */

  .outline-head {
    display: flex;
    justify-content: space-between;
    padding: 0 6px 8px;
    border-bottom: 1px solid var(--dpk-rule);
    margin-bottom: 6px;
  }

  .outline-list {
    display: grid;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .outline-row {
    position: relative;
  }

  .outline-row::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 3px;
    border-radius: var(--dpk-radius-xs);
    background: transparent;
    transition: background 140ms var(--dpk-ease);
  }

  .outline-row a {
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 7px 8px 7px 14px;
    border-radius: var(--dpk-radius-sm);
    color: var(--dpk-ink-soft);
    font-size: 13px;
    line-height: 1.4;
    text-decoration: none;
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease);
  }

  .outline-row a:hover {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
  }

  .outline-row a:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .outline-row[data-current='true']::before {
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
    box-shadow: 0 0 8px color-mix(in srgb, var(--dpk-accent) 45%, transparent);
  }

  .outline-row[data-current='true'] a {
    background: color-mix(in srgb, var(--dpk-accent) 8%, var(--dpk-paper-raised));
    color: var(--dpk-ink);
    box-shadow:
      inset 0 0 0 1px color-mix(in srgb, var(--dpk-accent) 20%, transparent),
      var(--dpk-shadow-xs);
  }

  /* A section slide opens a chapter: it reads as a heading in the outline. */
  .outline-row[data-layout='section']:not(:first-child) {
    margin-top: 10px;
  }

  .outline-row[data-layout='section'] .outline-title,
  .outline-row[data-layout='title'] .outline-title {
    font-weight: 620;
    color: var(--dpk-ink);
  }

  .outline-index {
    flex: none;
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-faint);
  }

  .outline-row[data-current='true'] .outline-index {
    color: var(--dpk-accent);
  }

  .outline-title {
    flex: 1;
    min-width: 0;
  }

  .outline-note {
    flex: none;
    min-width: 18px;
    padding: 1px 6px;
    border-radius: 999px;
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent);
    font-family: var(--dpk-mono);
    font-size: 10px;
    text-align: center;
  }

  /* -------------------------------------------------------------- deck */

  .deck {
    display: grid;
    /* The column follows the main area, not the widest thing in it. */
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
    justify-items: center;
  }

  .deck-empty {
    margin: 48px auto;
    color: var(--dpk-ink-faint);
  }

  /*
   * The work surface the slide is projected onto: a quiet dot lattice, sunken
   * a shade below the page, so the slide's own shadow has somewhere to land.
   */
  .stage {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 28px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-xl);
    background: var(--dpk-dots), var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 3px var(--dpk-shade-1);
  }

  /*
   * As wide as the column allows, but never taller than the window leaves room
   * for: the header, the bar and the comments beneath (the list at its full
   * height and the form) and the padding around them. The form stays on screen.
   */
  .slide {
    position: relative;
    width: min(100%, 1180px, max(420px, calc((100dvh - 340px) * 16 / 9)));
    aspect-ratio: 16 / 9;
    overflow: hidden;
    container-type: inline-size;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
  }

  .slide-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 2.2cqw;
    /* The bottom keeps the last line clear of the page number once it scrolls. */
    padding: 5.5cqw 6.5cqw 6cqw;
    overflow: auto;
    overflow-wrap: anywhere;
    font-size: 2.1cqw;
    line-height: 1.55;
    color: var(--dpk-ink-soft);
  }

  .slide-title {
    font-size: 3.6cqw;
    font-weight: 680;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: var(--dpk-ink);
  }

  .slide-subtitle {
    margin: 0;
    font-size: 2.4cqw;
    color: var(--dpk-ink-soft);
  }

  .slide-points {
    display: grid;
    gap: 1.3cqw;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 2.5cqw;
    color: var(--dpk-ink);
  }

  .slide-points li {
    position: relative;
    padding-left: 2.6cqw;
  }

  .slide-points li::before {
    content: '';
    position: absolute;
    left: 0.2cqw;
    top: 0.62em;
    width: 0.9cqw;
    height: 0.9cqw;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--dpk-accent) 14%, transparent);
  }

  .slide-body {
    flex: 1 1 auto;
    min-height: 0;
  }

  .slide-body ::slotted(*) {
    margin: 0;
  }

  /* Over the content, which may scroll beneath it: a backdrop keeps both legible. */
  .slide-number {
    position: absolute;
    right: 2cqw;
    bottom: 1.6cqw;
    z-index: 1;
    padding: 0.3cqw 0.7cqw;
    border-radius: 999px;
    background: color-mix(in srgb, var(--dpk-paper-raised) 88%, transparent);
    font-family: var(--dpk-mono);
    font-size: 1.2cqw;
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-faint);
  }

  /* The cover: large title, the subtitle beneath, an accent rule on the left. */
  /* \`safe\`: content taller than the slide starts at the top, where scrolling reaches it. */
  .slide[data-layout='title'] .slide-content {
    justify-content: safe center;
    padding-left: 9cqw;
  }

  .slide[data-layout='title'] .slide-content::before {
    content: '';
    position: absolute;
    left: 6.5cqw;
    top: 50%;
    width: 0.55cqw;
    height: 16cqw;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
    box-shadow: 0 0 20px color-mix(in srgb, var(--dpk-accent) 35%, transparent);
    transform: translateY(-50%);
  }

  .slide[data-layout='title'] .slide-title {
    font-size: 5.6cqw;
  }

  .slide[data-layout='title'] .slide-body,
  .slide[data-layout='section'] .slide-body {
    flex: 0 0 auto;
  }

  /* A chapter divider: the title alone, on the accent tint. */
  .slide[data-layout='section'] {
    background: linear-gradient(135deg, var(--dpk-accent-soft), transparent 70%), var(--dpk-paper-raised);
  }

  .slide[data-layout='section'] .slide-content {
    justify-content: safe center;
  }

  .slide[data-layout='section'] .slide-title {
    font-size: 4.8cqw;
  }

  .slide[data-layout='section'] .slide-title::after {
    content: '';
    display: block;
    width: 7cqw;
    height: 0.5cqw;
    margin-top: 2.4cqw;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
  }

  /* Full screen: the stage alone, the slide as large as the screen allows. */
  .stage:fullscreen {
    align-items: center;
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: var(--dpk-dots), var(--dpk-paper-sunken);
  }

  .stage:fullscreen .slide {
    width: min(100vw, calc(100vh * 16 / 9));
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  /* ---------------------------------------------------------------- bar */

  .deck-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
    width: min(100%, 1180px);
    padding: 8px 12px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .deck-move {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .deck-move .dpk-icon-btn {
    width: 30px;
    height: 30px;
  }

  .deck-counter {
    min-width: 54px;
    font-family: var(--dpk-mono);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    text-align: center;
    color: var(--dpk-ink-faint);
  }

  .deck-counter strong {
    color: var(--dpk-ink);
    font-weight: 600;
  }

  .deck-progress {
    flex: 1 1 80px;
    height: 4px;
    border-radius: 999px;
    background: var(--dpk-paper-inset);
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
    overflow: hidden;
  }

  .deck-progress span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--dpk-accent);
    transition: width 200ms ease;
  }

  .deck-bar .dpk-btn svg {
    width: 14px;
    height: 14px;
  }

  /* ----------------------------------------------------------- comments */

  .slide-comments {
    display: grid;
    gap: 10px;
    width: min(100%, 1180px);
    padding: 14px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  /* About three short comments; more scroll inside the list, not the page. */
  .slide-comment-list {
    display: grid;
    align-content: start;
    gap: 6px;
    max-height: 96px;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    list-style: none;
  }

  .slide-comment-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 6px 6px 6px 12px;
    border-left: 2px solid var(--dpk-accent);
    border-radius: 0 var(--dpk-radius-sm) var(--dpk-radius-sm) 0;
    background: var(--dpk-paper-sunken);
    font-size: 13px;
    line-height: 1.55;
    color: var(--dpk-ink);
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .slide-comment-body {
    flex: 1;
    min-width: 0;
  }

  .slide-comment-delete {
    flex: none;
    width: 22px;
    height: 22px;
    opacity: 0.55;
  }

  .slide-comment-list li:hover .slide-comment-delete,
  .slide-comment-delete:focus-visible {
    opacity: 1;
  }

  .slide-comment-delete svg {
    width: 12px;
    height: 12px;
  }

  .slide-comment-form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 10px;
    align-items: start;
  }

  .slide-comment-input {
    height: 60px;
    min-height: 60px;
    resize: none;
  }

  .slide-comment-actions {
    display: grid;
    justify-items: end;
    gap: 6px;
  }

  .slide-comment-hint {
    font-family: var(--dpk-mono);
    font-size: 10.5px;
    color: var(--dpk-ink-faint);
    white-space: nowrap;
  }

  @media (max-width: 560px) {
    .slide-comment-body {
      flex: 1;
      min-width: 0;
    }

    .slide-comment-delete {
      flex: none;
      width: 22px;
      height: 22px;
      opacity: 0.55;
    }

    .slide-comment-list li:hover .slide-comment-delete,
    .slide-comment-delete:focus-visible {
      opacity: 1;
    }

    .slide-comment-delete svg {
      width: 12px;
      height: 12px;
    }

    .slide-comment-form {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  .parked {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .deck-progress span {
      transition: none;
    }
  }
`,le='input, textarea, select, [contenteditable]:not([contenteditable="false"])',re=t=>t instanceof HTMLElement&&(t.isContentEditable||t.matches(le));class B extends w{static{this.styles=[w.styles,de]}#e=new Map;#t={slide:"",count:0};definitionFor(e){return O(e)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.#s)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.#s)}renderRegions(e){const i=m(this.locale);return{sidebar:ie(e,i),sidebarHidden:e.state.slides.length===0,main:ne(e,i,{canFullscreen:document.fullscreenEnabled===!0,draftFor:n=>this.#e.get(n)??"",onStep:n=>this.#i(n),onFullscreen:()=>this.#d(),onDraft:(n,s)=>this.#n(n,s),onComment:n=>this.#o(n),onDeleteComment:n=>this.removeAction(n)})}}updated(){super.updated(),this.#a()}#a(){const e=this.renderRoot.querySelector(".slide-comment-list"),i={slide:this.navigation.slide??"",count:e?.childElementCount??0},n=this.#t;this.#t=i,!(e===null||i.slide===n.slide&&i.count<=n.count)&&(e.scrollTop=e.scrollHeight)}#i(e){const i=j(this.derivation.state,this.navigation.slide,e);i!==void 0&&this.navigate({slide:i})}#n(e,i){const n=new Map(this.#e);i===""?n.delete(e):n.set(e,i),this.#e=n,this.requestUpdate()}#o(e){const i=(this.#e.get(e)??"").trim();if(i==="")return;this.dispatch({type:v,target:{type:"slide",id:e},payload:{body:i}}).ok&&this.#n(e,"")}#d(){const e=this.renderRoot.querySelector(".stage");!(e instanceof HTMLElement)||document.fullscreenElement!==null||e.requestFullscreen().catch(()=>{})}#s=e=>{if(e.defaultPrevented)return;const i=P(e);i===null||e.composedPath().some(re)||(e.preventDefault(),this.#i(i))}}const K=()=>{customElements.get("dpk-template-slides")||customElements.define("dpk-template-slides",B)},ce=Object.freeze(Object.defineProperty({__proto__:null,DpkTemplateSlides:B,SLIDE_LAYOUTS:y,defineSlidesElement:K,describeSlidesAction:z,emptySlidesBase:C,findSlide:T,findSlideIndex:r,parseSlidesBase:S,resolveSlidesNavigation:F,serializeSlidesAction:A,slideKeyStep:P,slidePosition:H,slidesBaseSchema:$,slidesCommentTargets:D,slidesCurrentTarget:M,slidesDefinitionFor:O,slidesHasTarget:L,slidesMessages:m,slidesTargetLabel:E,slidesTitle:q,stepSlide:j},Symbol.toStringTag,{value:"Module"}));export{K as d,ce as i};
