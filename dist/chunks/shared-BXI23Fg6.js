import{a2 as r,a5 as a,a6 as o}from"./shared-hrghWtVh.js";const i=r({en:{comment:"Comment",commentOn:s=>`Comment on ${s}`,submit:"Send",cancel:"Cancel"},ja:{comment:"\u30B3\u30E1\u30F3\u30C8",commentOn:s=>`${s}\u3078\u306E\u30B3\u30E1\u30F3\u30C8`,submit:"\u9001\u4FE1",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB"}}),c=(s,t,n={})=>({body:s,notes:t,submission:s.trim()||null,label:n.label??null,error:n.error??null,key:n.key??null}),p=(s,t,n)=>{const l=()=>{t.submission!==null&&n({kind:"comment",body:t.submission})};return o`<div
    class="comment-pop"
    popover="manual"
    role="dialog"
    aria-label=${t.label?s.commentOn(t.label):s.comment}
    @click=${e=>e.stopPropagation()}
    @keydown=${e=>{e.isComposing||e.key!=="Escape"||(e.preventDefault(),e.stopPropagation(),n({kind:"dismiss"}))}}
  >
    ${t.label?o`<strong class="comment-target">${t.label}</strong>`:a}
    ${t.error?o`<p class="comment-error" role="alert">${t.error}</p>`:a}
    ${t.notes.length?o`<ul class="comment-list">
            ${t.notes.map(e=>o`<li>${e}</li>`)}
          </ul>`:a}
    <textarea
      class="dpk-textarea"
      aria-label=${s.comment}
      data-dpk-text-key=${t.key??a}
      .value=${t.body}
      @input=${e=>{e.currentTarget instanceof HTMLTextAreaElement&&n({kind:"input",body:e.currentTarget.value})}}
      @keydown=${e=>{e.isComposing||e.key==="Enter"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),l())}}
    ></textarea>
    <div class="pop-actions">
      <button class="dpk-btn dpk-btn--accent" type="button" ?disabled=${t.submission===null} @click=${l}>
        ${s.submit}
      </button>
      <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>n({kind:"dismiss"})}>
        ${s.cancel}
      </button>
    </div>
  </div>`};export{i as c,c as p,p as r};
