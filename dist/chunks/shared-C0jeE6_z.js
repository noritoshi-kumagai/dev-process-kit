import{a2 as B,$ as Be,j as _e,a3 as Ge,a4 as _,a5 as b,a6 as h,a7 as J,a8 as zs,J as Ds,a9 as I,aa as Ye,ab as Ve,ac as We,A as Ke,ad as Ts,ae as As,af as G,ag as q,ah as f,ai as z,aj as u,ak as H,al as S,am as M,an as ae,ao as Xe,ap as Je,aq as Z,ar as we,as as Ze,at as Ls,au as Rs,av as $e,aw as Se,ax as Os,ay as Me,l as Qe,az as Is,aA as Ps,aB as js,aC as ne,q as Fs,r as Ns}from"./shared-hrghWtVh.js";import{i as et}from"./shared-DgJxvnql.js";import{p as tt,r as st,c as at}from"./shared-BXI23Fg6.js";import{c as me}from"./shared-ml5h7U5L.js";const Us='script[type="application/json"]',nt=(a,e)=>{const t=a.querySelector(Us);if(!t)return null;const s=t.textContent??"";if(s.trim()==="")return{ok:!1,error:"JSON block is empty"};try{return{ok:!0,value:e(JSON.parse(s))}}catch(n){return{ok:!1,error:n instanceof Error?n.message:String(n)}}},rt=(a,e,t)=>{const s=nt(a,e);if(s)return t(s),()=>{};const n=new MutationObserver(()=>{const r=nt(a,e);r&&(n.disconnect(),t(r))});return n.observe(a,{childList:!0,subtree:!0}),()=>n.disconnect()},it={nodeSpacing:34,layerSpacing:84,padding:28,sweeps:4,coordinatePasses:6},ge=a=>{const e=[...a].sort((s,n)=>s-n);if(e.length===0)return 0;const t=Math.floor(e.length/2);return e.length%2===1?e[t]??0:((e[t-1]??0)+(e[t]??0))/2},Hs=(a,e)=>{const t=new Map;for(const i of a)t.set(i.id,[]);for(const i of e)t.get(i.from)?.push(i);const s=new Map,n=new Set,r=i=>{s.set(i,"open");for(const o of t.get(i)??[]){const d=s.get(o.to)??"new";d==="open"?n.add(o.id):d==="new"&&r(o.to)}s.set(i,"done")};for(const i of a)(s.get(i.id)??"new")==="new"&&r(i.id);return{reversed:n,forward:e.filter(i=>!n.has(i.id))}},Bs=(a,e)=>{const t=new Map,s=new Map;for(const o of a)t.set(o.id,[]),s.set(o.id,[]);for(const o of e)s.get(o.from)?.push(o),t.get(o.to)?.push(o);const n=new Map(a.map(o=>[o.id,0])),r=new Map(a.map(o=>[o.id,(t.get(o.id)??[]).length])),i=a.filter(o=>(r.get(o.id)??0)===0).map(o=>o.id);for(const o of i)for(const d of s.get(o)??[]){const l=n.get(d.to)??0;n.set(d.to,Math.max(l,(n.get(o)??0)+1));const c=(r.get(d.to)??0)-1;r.set(d.to,c),c===0&&i.push(d.to)}return n},_s=(a,e,t,s)=>{const n=[...a.keys()].sort((r,i)=>r-i);for(let r=0;r<s;r++){const i=r%2===0;for(const o of i?n:[...n].reverse()){const d=a.get(o)??[],l=new Map(d.map((p,k)=>[p,k])),c=p=>{const k=l.get(p);return k===void 0?null:k},g=d.map(p=>{const k=(e.get(p)??[]).filter(x=>(t.get(x)??o)===o+(i?-1:1)).map(c).filter(x=>x!==null);return{id:p,want:k.length>0?ge(k):l.get(p)??0}});g.sort((p,k)=>p.want-k.want||(l.get(p.id)??0)-(l.get(k.id)??0)),a.set(o,g.map(p=>p.id))}}},ot=(a,e,t,s)=>{const n=a.map((i,o)=>({id:i,want:t.get(i)??o*100,index:o}));n.sort((i,o)=>i.want-o.want||i.index-o.index);let r=0;for(const i of n){const o=e.get(i.id);o&&(o.y=r,r+=o.spec.height+s)}return{height:Math.max(0,r-s)}},Gs=(a,e,t,s,n)=>{const r=[...a.keys()].sort((l,c)=>l-c),i=new Map;for(const l of r)i.set(l,ot(a.get(l)??[],e,new Map,n.nodeSpacing).height);const o=Math.max(0,...i.values());for(const l of r){const c=(o-(i.get(l)??0))/2;for(const g of a.get(l)??[]){const p=e.get(g);p&&(p.y+=c)}}const d=(l,c)=>{const g=(t.get(l)??[]).filter(p=>s.get(p)===c).flatMap(p=>{const k=e.get(p);return k?[k.y+k.spec.height/2]:[]});return g.length>0?ge(g):null};for(let l=0;l<n.coordinatePasses;l++){const c=l%2===0;for(const g of c?r:[...r].reverse()){const p=a.get(g)??[],k=new Map;for(const w of p){const D=d(w,g+(c?-1:1)),L=e.get(w);L!==void 0&&k.set(w,D===null?L.y+L.spec.height/2:D)}const x=p.map(w=>e.get(w)?.y??0);ot(p,e,k,n.nodeSpacing);const v=p.map(w=>e.get(w)?.y??0),y=ge(x)-ge(v);for(const w of p){const D=e.get(w);D&&(D.y+=y)}}}},dt=(a,e,t)=>{const s=e===void 0?void 0:a.spec.ports?.[e];return s?{x:a.x+s.x,y:a.y+s.y}:t==="out"?{x:a.x+a.spec.width,y:a.y+a.spec.height/2}:{x:a.x,y:a.y+a.spec.height/2}},lt=(a,e,t)=>{let s=0;const n=[];for(const r of a){const i=t.byId.get(r.from),o=t.byId.get(r.to);if(!i||!o)continue;const d=dt(i,r.fromPort,"out"),l=dt(o,r.toPort,"in");if(r.from===r.to){const x=i.x+i.spec.width,v=i.y+i.spec.height,y=Math.max(t.padding/2,v+18);n.push({id:r.id,points:[d,{x:x+20,y:d.y},{x:x+20,y},{x:i.x-20,y},{x:i.x-20,y:l.y},l]});continue}if(!e.has(r.id)&&(i.layer<o.layer||i.layer===o.layer&&l.x>d.x+12)){if(Math.abs(d.y-l.y)<.5){n.push({id:r.id,points:[d,l]});continue}const v=i.layer<o.layer?Math.max(d.x+14,o.x-Math.max(12,t.layerSpacing/2)):(d.x+l.x)/2;n.push({id:r.id,points:[d,{x:v,y:d.y},{x:v,y:l.y},l]});continue}const c=r.fromPort===void 0?{x:i.x+i.spec.width/2,y:i.y+i.spec.height}:d,g=r.toPort===void 0?{x:o.x+o.spec.width/2,y:o.y+o.spec.height}:l,p=Math.max(c.y,g.y)+18+s*14;s+=1;const k=[d,c,{x:c.x,y:p},{x:g.x,y:p},g,l].filter((x,v,y)=>v===0||x.x!==y[v-1]?.x||x.y!==y[v-1]?.y);n.push({id:r.id,points:k})}return n},ct=(a,e,t)=>{const s=e.flatMap(p=>[...p.points]),n=[...a.map(p=>p.x),...a.map(p=>p.x+p.spec.width),...s.map(p=>p.x)],r=[...a.map(p=>p.y),...a.map(p=>p.y+p.spec.height),...s.map(p=>p.y)],i=Math.min(0,...n),o=Math.min(0,...r),d=Math.max(0,...n),l=Math.max(0,...r),c=t-i,g=t-o;return{width:d-i+t*2,height:l-o+t*2,nodes:a.map(p=>({id:p.spec.id,x:p.x+c,y:p.y+g,width:p.spec.width,height:p.spec.height,layer:p.layer,order:p.order})),routes:e.map(p=>({id:p.id,points:p.points.map(k=>({x:k.x+c,y:k.y+g}))}))}},pt=(a,e)=>{const t=new Map(a.map(s=>[s.id,[]]));for(const s of e)s.from!==s.to&&(t.get(s.from)?.push(s.to),t.get(s.to)?.push(s.from));return t},ht=(a,e,t,s)=>a.map(n=>({spec:n,layer:e.get(n.id)??0,order:t.get(n.id)??0,...s(n)})),Ys=(a,e)=>{const t=new Map;for(const s of a){const n=e.get(s.id)??0,r=t.get(n);r?r.push(s.id):t.set(n,[s.id])}return t},Vs=(a,e,t={})=>{const s={...it,...t};if(a.length===0)return{width:0,height:0,nodes:[],routes:[]};const n=new Set(a.map(v=>v.id)),r=e.filter(v=>n.has(v.from)&&n.has(v.to)),{forward:i,reversed:o}=Hs(a,r),d=Bs(a,i),l=Ys(a,d);_s(l,pt(a,r),d,s.sweeps);const c=new Map;for(const v of l.values())v.forEach((y,w)=>c.set(y,w));const g=ht(a,d,c,()=>({x:0,y:0})),p=new Map(g.map(v=>[v.spec.id,v]));Gs(l,p,pt(a,r),d,s);const k=[...l.keys()].sort((v,y)=>v-y);let x=0;for(const v of k){const y=Math.max(...(l.get(v)??[]).map(w=>p.get(w)?.spec.width??0));for(const w of l.get(v)??[]){const D=p.get(w);D&&(D.x=x)}x+=y+s.layerSpacing}return ct(g,lt(r,o,{byId:p,layerSpacing:s.layerSpacing,padding:s.padding}),s.padding)},Ws=(a,e,t={})=>{const s={...it,...t};if(a.length===0)return{width:0,height:0,nodes:[],routes:[]};const n=new Set(a.map(d=>d.id)),r=e.filter(d=>n.has(d.from)&&n.has(d.to)),i=ht(a,new Map,new Map,d=>d.position??{x:0,y:0}),o=new Map(i.map(d=>[d.spec.id,d]));return ct(i,lt(r,new Set,{byId:o,layerSpacing:s.layerSpacing,padding:s.padding}),s.padding)},Ks=B({en:{tagFilter:"Filter by tag",tagMatch:"Tag matching",clearTags:"Clear",zoomOut:"Zoom out",fit:"Fit to view",zoomIn:"Zoom in",sendFailed:"Could not send. Please try again.",commentOn:a=>`Comment on ${a}`,noMatches:"No matching elements.",maximize:"Maximize",restore:"Restore size",canvas:"Diagram. Arrow keys pan, plus and minus zoom, 0 fits the view.",dataError:"Could not load the diagram data.",nodes:"elements",edges:"relations",change:(a,e)=>`\u201C${a}\u201D \u2192 \u201C${e}\u201D`},ja:{tagFilter:"\u30BF\u30B0\u306E\u7D5E\u308A\u8FBC\u307F",tagMatch:"\u30BF\u30B0\u306E\u4E00\u81F4\u6761\u4EF6",clearTags:"\u89E3\u9664",zoomOut:"\u7E2E\u5C0F",fit:"\u5168\u4F53\u3092\u8868\u793A",zoomIn:"\u62E1\u5927",sendFailed:"\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",commentOn:a=>`${a}\u306B\u30B3\u30E1\u30F3\u30C8`,noMatches:"\u8A72\u5F53\u3059\u308B\u8981\u7D20\u306F\u3042\u308A\u307E\u305B\u3093\u3002",maximize:"\u6700\u5927\u5316",restore:"\u5143\u306E\u30B5\u30A4\u30BA\u306B\u623B\u3059",canvas:"\u56F3\u3002\u77E2\u5370\u30AD\u30FC\u3067\u30D1\u30F3\u3001\u30D7\u30E9\u30B9\u30FB\u30DE\u30A4\u30CA\u30B9\u3067\u30BA\u30FC\u30E0\u30010\u3067\u5168\u4F53\u8868\u793A\u3002",dataError:"\u56F3\u306E\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",nodes:"\u8981\u7D20",edges:"\u95A2\u9023",change:(a,e)=>`\u300C${a}\u300D\u2192\u300C${e}\u300D`}}),Xs={active:[],match:"single"},Q=(a,e)=>e.active.length===0?!0:e.match==="all"?e.active.every(t=>a.includes(t)):e.active.some(t=>a.includes(t)),Js=(a,e)=>a.active.includes(e)?{...a,active:a.active.filter(t=>t!==e)}:a.match==="single"?{...a,active:[e]}:{...a,active:[...a.active,e]},Zs=(a,e)=>({match:e,active:e==="single"&&a.active.length>1?a.active.slice(-1):a.active}),Qs=a=>({...a,active:[]}),ea=a=>{const e=new Map;for(const t of a)for(const s of new Set(t))e.set(s,(e.get(s)??0)+1);return[...e].map(([t,s])=>({tag:t,count:s}))},Y={nodes:new Map,edges:new Set},N=(a,e,t,s)=>{const n=new Map,r=new Set,i=[{id:e,depth:0}],o=new Set([e]);for(const d of i)if(!(!s&&d.depth>=1))for(const l of a){const c=t==="outgoing"?l.from:l.to,g=t==="outgoing"?l.to:l.from;c===d.id&&(r.add(l.id),!o.has(g)&&(o.add(g),n.set(g,d.depth+1),i.push({id:g,depth:d.depth+1})))}return{nodes:n,edges:r}},ta=(a,e)=>{const t=new Map(a.map(r=>[r,N(e,r,"outgoing",!0).nodes])),s=new Set,n=[];for(const r of a){if(s.has(r))continue;const i=a.filter(o=>o===r||t.get(r)?.has(o)===!0&&t.get(o)?.has(r)===!0);for(const o of i)s.add(o);(i.length>1||e.some(o=>o.from===r&&o.to===r))&&n.push(i)}return n},Ce=a=>new Map(a.flatMap((e,t)=>e.map(s=>[s,t]))),ut=(a,e)=>e.get(a.from)===e.get(a.to)&&e.has(a.from),mt=a=>{try{return a.split("/").map(e=>decodeURIComponent(e))}catch{return null}},gt=(a,e,t,s)=>{const n=e!==null&&e.kind===t&&e.id===a,r=t==="node"?s.nodes.has(a):s.edges.has(a),i=t==="node"?s.nodes.get(a)??null:null;return{selected:n,related:r&&!n,dimmed:e!==null&&!n&&!r,depth:i}},ee=(...a)=>a.filter(e=>typeof e=="string"&&e!=="").join(" "),sa=a=>{const e=a[0]??{x:0,y:0},t=a.at(-1)??e;if(a.length<=2)return{x:(e.x+t.x)/2,y:(e.y+t.y)/2};if(a.length===4){const r=a[1]??e,i=a[2]??t;return{x:r.x,y:(r.y+i.y)/2}}const s=a[2]??e,n=a[3]??t;return{x:(s.x+n.x)/2,y:s.y}},aa=(a,e)=>ea(a).map(t=>({tag:t.tag,count:t.count,selected:e.active.includes(t.tag)})),na=(a,e,t)=>`${a} ${t.node} \xB7 ${e} ${t.edge}`,W=[Be,_e,Ge,_`
    :host {
      display: block;
      container-type: inline-size;
    }

    .diagram {
      display: flex;
      flex-direction: column;
      /* The sizing knob: the shell may be resized vertically, and the canvas
         takes whatever is left of it. */
      height: var(--diagram-height, 560px);
      min-height: 260px;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius-lg);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
      overflow: hidden;
      resize: vertical;
    }

    /*
     * Maximized: the shell covers the viewport. It is also a manual popover in
     * the top layer, so the UA popover box (fit-content, margin, border,
     * padding) is reset here. A vertical resize leaves an inline height behind,
     * which only !important overrides.
     */
    .diagram.is-maximized {
      position: fixed;
      inset: 0;
      z-index: 2147483000;
      width: auto !important;
      height: auto !important;
      max-width: none;
      max-height: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      color: var(--dpk-ink);
      background:
        radial-gradient(
          ellipse 900px 400px at 0% 0%,
          color-mix(in srgb, var(--dpk-accent) 4%, transparent),
          transparent 70%
        ),
        var(--dpk-paper-raised);
      box-shadow: none;
      resize: none;
    }

    .diagram-maximize {
      flex-shrink: 0;
    }

    .diagram-toolbar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      min-height: 44px;
      padding: 8px 14px;
      border-bottom: 1px solid var(--dpk-rule);
      background: linear-gradient(180deg, var(--dpk-paper-raised), var(--dpk-paper));
      box-shadow: 0 1px 0 var(--dpk-highlight) inset;
      flex-shrink: 0;
    }

    .diagram-title {
      font-family: var(--dpk-display);
      font-size: 12.5px;
      font-weight: 660;
      letter-spacing: -0.015em;
      color: var(--dpk-ink);
    }

    /* A long heading or subject elides (the full text is its tooltip) instead of pushing the actions off the toolbar. */
    .diagram-title,
    .diagram-subject {
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .diagram-subject {
      font-size: 10px;
      color: var(--dpk-ink-faint);
      padding-left: 10px;
      border-left: 1px solid var(--dpk-rule-strong);
    }

    .diagram-toolbar-actions {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      flex-wrap: wrap;
    }

    .diagram-stats {
      font-family: var(--dpk-mono);
      font-size: 10px;
      font-weight: 550;
      padding: 3px 9px;
      border: 1px solid var(--dpk-rule);
      border-radius: 999px;
      background: var(--dpk-paper-sunken);
      color: var(--dpk-ink-faint);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    .diagram-tags {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
      padding: 7px 12px;
      border-bottom: 1px solid var(--dpk-rule);
      background: var(--dpk-paper);
      flex-shrink: 0;
    }

    .diagram-match {
      display: flex;
      gap: 2px;
      padding: 3px;
      margin-right: 6px;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius-sm);
      background: var(--dpk-paper-sunken);
      box-shadow: inset 0 1px 2px var(--dpk-shade-1);
    }

    .diagram-match button {
      border: 0;
      border-radius: var(--dpk-radius-xs);
      padding: 4px 8px;
      background: transparent;
      color: var(--dpk-ink-faint);
      font-size: 9.5px;
      font-weight: 600;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition:
        background 160ms var(--dpk-ease),
        color 160ms var(--dpk-ease),
        box-shadow 160ms var(--dpk-ease);
    }

    .diagram-match button:hover[aria-pressed='false'] {
      color: var(--dpk-ink-soft);
    }

    .diagram-match button[aria-pressed='true'] {
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink);
      font-weight: 650;
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    }

    .dpk-tag {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      max-width: 100%;
      padding: 4px 9px;
      border: 1px solid transparent;
      border-radius: var(--dpk-radius-xs);
      background: var(--dpk-paper-inset);
      color: var(--dpk-ink-soft);
      font-size: 10.5px;
      cursor: pointer;
      transition:
        background 140ms var(--dpk-ease),
        color 140ms var(--dpk-ease),
        border-color 140ms var(--dpk-ease),
        box-shadow 140ms var(--dpk-ease);
    }

    .dpk-tag:hover {
      background: var(--dpk-paper-sunken);
      color: var(--dpk-ink);
    }

    .dpk-tag[aria-pressed='true'] {
      border-color: color-mix(in srgb, var(--dpk-blue) 45%, transparent);
      background: var(--dpk-blue-soft);
      color: var(--dpk-blue);
      font-weight: 600;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--dpk-blue) 20%, transparent);
    }

    .dpk-tag-name {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dpk-tag-count {
      flex: none;
      font-family: var(--dpk-mono);
      font-size: 9px;
      opacity: 0.7;
      font-variant-numeric: tabular-nums;
    }

    .dpk-tag-clear {
      border: 0;
      background: none;
      padding: 4px 6px;
      color: var(--dpk-ink-faint);
      font-size: 10px;
      cursor: pointer;
    }

    .diagram-canvas {
      position: relative;
      flex: 1;
      min-height: 220px;
      overflow: hidden;
      touch-action: none;
      cursor: grab;
      background: var(--dpk-dots), var(--dpk-paper-sunken);
    }

    .diagram-canvas:focus-visible {
      outline: none;
      box-shadow: inset var(--dpk-focus);
    }

    .diagram-canvas.is-panning {
      cursor: grabbing;
    }

    .diagram-world {
      position: absolute;
      inset: 0 auto auto 0;
      transform-origin: 0 0;
    }

    .diagram-edges {
      position: absolute;
      inset: 0;
      overflow: visible;
      pointer-events: none;
    }

    .diagram-zoom {
      position: absolute;
      right: 12px;
      bottom: 12px;
      display: flex;
      overflow: hidden;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-sm);
      background: var(--dpk-glass);
      backdrop-filter: blur(12px);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    }

    .diagram-zoom button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 0;
      padding: 6px 9px;
      background: transparent;
      color: var(--dpk-ink-soft);
      font-size: 10.5px;
      cursor: pointer;
      transition:
        background 140ms var(--dpk-ease),
        color 140ms var(--dpk-ease);
    }

    .diagram-zoom button svg {
      width: 12px;
      height: 12px;
    }

    .diagram-zoom button + button {
      border-left: 1px solid var(--dpk-rule);
    }

    .diagram-zoom button:hover {
      background: var(--dpk-paper-inset);
      color: var(--dpk-ink);
    }

    .diagram-zoom-value {
      font-family: var(--dpk-mono);
      font-variant-numeric: tabular-nums;
    }

    .diagram-legend {
      position: absolute;
      left: 12px;
      bottom: 14px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      max-width: calc(100% - 150px);
      padding: 4px 8px;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius-xs);
      background: var(--dpk-glass);
      backdrop-filter: blur(10px);
      box-shadow: var(--dpk-shadow-xs);
      font-size: 9.5px;
      color: var(--dpk-ink-faint);
    }

    .diagram-legend span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .diagram-legend i {
      width: 16px;
      border-top: 1.6px solid var(--dpk-rule-strong);
    }

    .diagram-empty,
    .diagram-notice {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      max-width: min(80%, 360px);
      font-size: 12px;
      color: var(--dpk-ink-faint);
      text-align: center;
      pointer-events: none;
    }

    .diagram-empty {
      padding: 16px 26px;
      border: 1.5px dashed var(--dpk-rule-strong);
      border-radius: var(--dpk-radius);
      background: color-mix(in srgb, var(--dpk-paper-raised) 55%, transparent);
    }

    .diagram-notice {
      pointer-events: auto;
      padding: 12px 16px 12px 19px;
      border: 1px solid color-mix(in srgb, var(--dpk-danger) 35%, transparent);
      border-radius: var(--dpk-radius);
      background: linear-gradient(90deg, var(--dpk-danger) 0 3px, transparent 3px), var(--dpk-danger-soft);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow);
      color: var(--dpk-ink-soft);
      text-align: left;
    }

    .diagram-notice p {
      margin: 0 0 9px;
    }

    /*
     * Contextual comments: an icon per element, revealed while the element that
     * contains it (or the element just before it) is hovered, focused or
     * selected, and always on touch devices. It opens the composer beside it.
     */
    .diagram-comment-trigger {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      padding: 5px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-sm);
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink-soft);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition:
        opacity 120ms ease,
        background 160ms var(--dpk-ease),
        color 160ms var(--dpk-ease),
        border-color 160ms var(--dpk-ease),
        box-shadow 160ms var(--dpk-ease),
        transform 160ms var(--dpk-ease-spring);
    }

    .diagram-comment-trigger.is-placed {
      position: absolute;
      z-index: 2;
    }

    .diagram-comment-trigger svg {
      width: 16px;
      height: 16px;
    }

    .diagram-edge-comment {
      overflow: visible;
    }

    .diagram-edge-comment .diagram-comment-trigger {
      margin: 2px;
    }

    :is(.d-node, .d-edge):is(:hover, :focus-within, .is-selected) .diagram-comment-trigger,
    :is(:hover, :focus-visible, .is-selected) + .diagram-comment-trigger,
    .diagram-comment-trigger:is(:hover, :focus-visible, [aria-expanded='true']) {
      opacity: 1;
      pointer-events: auto;
    }

    .diagram-comment-trigger:hover,
    .diagram-comment-trigger:focus-visible {
      color: var(--dpk-accent);
      border-color: var(--dpk-accent);
      background: var(--dpk-accent-soft);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
      transform: translateY(-1px);
    }

    .diagram-comment-trigger:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    @media (hover: none) {
      .diagram-comment-trigger {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .comment-target {
      font-size: 12px;
      overflow-wrap: anywhere;
    }

    .comment-error {
      margin: 0;
      font-size: 11px;
      color: var(--dpk-accent);
    }

    /* Element state, shared by every diagram so highlighting reads the same. */
    .d-node {
      position: absolute;
      cursor: pointer;
      transition:
        opacity 150ms ease,
        border-color 160ms var(--dpk-ease),
        box-shadow 160ms var(--dpk-ease),
        background 160ms var(--dpk-ease),
        transform 160ms var(--dpk-ease);
    }

    .d-node.is-dimmed,
    .d-edge.is-dimmed {
      opacity: 0.26;
    }

    .d-edge {
      outline: none;
      cursor: pointer;
    }

    .d-edge-hit {
      fill: none;
      stroke: transparent;
      stroke-width: 16;
      pointer-events: stroke;
      cursor: pointer;
    }

    .d-edge-path {
      fill: none;
      stroke: var(--dpk-rule-strong);
      stroke-width: 1.5;
      stroke-linejoin: round;
      stroke-linecap: round;
      transition:
        stroke 160ms var(--dpk-ease),
        stroke-width 160ms var(--dpk-ease);
    }

    .d-edge.is-selected .d-edge-path,
    .d-edge:focus-visible .d-edge-path {
      stroke: var(--dpk-ink);
      stroke-width: 2.6;
    }

    .d-edge:focus-visible .d-edge-hit {
      stroke: var(--dpk-blue-soft);
    }

    .d-edge-label {
      font-size: 9.5px;
      fill: var(--dpk-ink-faint);
      paint-order: stroke;
      stroke: var(--dpk-paper-raised);
      stroke-width: 5px;
      stroke-linejoin: round;
    }

    .d-edge-label.is-dimmed {
      opacity: 0.3;
    }

    @media (max-width: 700px) {
      .diagram-subject {
        display: none;
      }
    }
  `],re=a=>a.map((e,t)=>`${t===0?"M":"L"}${e.x} ${e.y}`).join(" "),ft=a=>I`
  <defs>
    ${a.map(e=>I`
        <marker
          id=${e.id}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path
            class="diagram-arrow"
            d=${e.open===!0?"M1 1 L9 5 L1 9":"M1 1 L9 5 L1 9 Z"}
            fill=${e.open===!0||e.color===void 0?b:e.color}
            stroke=${e.color??b}
            stroke-width="1.3"
          ></path>
        </marker>
      `)}
  </defs>
`,ra=(a,e,t,s)=>h`
  <div class="diagram-tags" role="group" aria-label=${a.tagFilter}>
    <div class="diagram-match" role="group" aria-label=${a.tagMatch}>
      ${[["single","Single"],["all","AND"],["any","OR"]].map(([n,r])=>h`
          <button
            type="button"
            data-match=${n}
            aria-pressed=${t===n?"true":"false"}
            @click=${()=>s({kind:"match",match:n})}
          >
            ${r}
          </button>
        `)}
    </div>
    ${J(e,n=>n.tag,n=>h`
        <button
          type="button"
          class="dpk-tag"
          data-tag=${n.tag}
          aria-pressed=${n.selected?"true":"false"}
          @click=${()=>s({kind:"tag",tag:n.tag})}
        >
          <span class="dpk-tag-name" title=${n.tag}>${n.tag}</span><span class="dpk-tag-count">${n.count}</span>
        </button>
      `)}
    ${e.some(n=>n.selected)?h`<button type="button" class="dpk-tag-clear" @click=${()=>s({kind:"clear-tags"})}>
            ${a.clearTags}
          </button>`:b}
  </div>
`,ia=(a,e)=>h`
  <div class="diagram-zoom">
    <button
      type="button"
      aria-label=${a.zoomOut}
      @click=${t=>{t.stopPropagation(),e?.({kind:"zoom",factor:1/1.1})}}
    >
      ${zs()}
    </button>
    <button
      type="button"
      class="diagram-zoom-value"
      title=${a.fit}
      aria-label=${a.fit}
      @click=${()=>e?.({kind:"fit"})}
    >
      100%
    </button>
    <button
      type="button"
      aria-label=${a.zoomIn}
      @click=${t=>{t.stopPropagation(),e?.({kind:"zoom",factor:1.1})}}
    >
      ${Ds()}
    </button>
  </div>
`,Ee=.08,oa=1.8,da=a=>{if(a.length===0)return{x:0,y:0,width:0,height:0};const e=Math.min(...a.map(r=>r.x)),t=Math.min(...a.map(r=>r.y)),s=Math.max(...a.map(r=>r.x+r.width))-e,n=Math.max(...a.map(r=>r.y+r.height))-t;return{x:e-s*.1,y:t-n*.1,width:s*1.2,height:n*1.2}},qe=(a,e)=>a+e/12,la=(a,e)=>{if(a.length===0)return null;const t=Math.min(...a.map(n=>n.y)),s=a.filter(n=>n.y<t+e);return{x:Math.min(...s.map(n=>n.x)),y:t}},ze=16,bt=(a,e,t,s,n="center")=>{if(e.width===0||e.height===0)return{...a,x:0,y:0};const r=(i,o,d,l)=>{const c=d*a.scale;return c<=l?n==="start"?ze-qe(o,d)*a.scale:(l-c)/2-o*a.scale:Math.min(-o*a.scale,Math.max(l-(o+d)*a.scale,i))};return{...a,x:r(a.x,e.x,e.width,t),y:r(a.y,e.y,e.height,s)}},ca=(a,e,t,s,n,r,i="center")=>{const o=bt({...a,x:a.x-n,y:a.y-r},e,t,s,i);return Math.abs(r)>Math.abs(n)&&o.y===a.y?null:o},kt='button,[role="button"],a,input,textarea,select',pa=a=>{const{canvas:e,world:t,onClearSelection:s,onView:n,align:r="center"}=a;let i={x:0,y:0,width:0,height:0},o={x:0,y:0,scale:1};const d=()=>({width:e.clientWidth||1e3,height:e.clientHeight||560}),l=()=>{const{width:m,height:C}=d();o=bt(o,i,m,C,r),t.style.transform=`translate(${o.x}px, ${o.y}px) scale(${o.scale})`,n?.(o)},c=()=>{const{width:m,height:C}=d(),E=i.width/1.2||1,O=i.height/1.2||1;o={...o,scale:me(Math.min((m-24)/E,(C-40)/O),Ee,1)},o={...o,x:(m-i.width*o.scale)/2-i.x*o.scale,y:(C-i.height*o.scale)/2-i.y*o.scale},l()},g=()=>{const{width:m}=d(),C=i.width/1.2||1,E=me((m-24)/C,Ee,1);o={scale:E,x:(m-i.width*E)/2-i.x*E,y:16},l()},p=m=>{o={scale:1,x:ze-(m?.x??qe(i.x,i.width)),y:ze-(m?.y??qe(i.y,i.height))},l()},k=(m,C=d().width/2,E=d().height/2)=>{const O=o.scale,P=me(O*m,Ee,oa);P!==O&&(o={scale:P,x:C-(C-o.x)*P/O,y:E-(E-o.y)*P/O},l())},x=m=>{if(m.target instanceof Element&&m.target.closest(".diagram-zoom"))return;const C=m.deltaMode===1?16:m.deltaMode===2?d().height:1;if(m.ctrlKey||m.metaKey){m.preventDefault();const X=e.getBoundingClientRect();k(Math.exp(-me(m.deltaY*C,-60,60)*.0012),m.clientX-X.left,m.clientY-X.top);return}const{width:E,height:O}=d(),P=ca(o,i,E,O,m.deltaX*C,m.deltaY*C,r);P!==null&&(m.preventDefault(),o=P,l())},v=new Map;let y=null,w=!1;const D=()=>{const m=[...v.values()],C=m[0];if(!C)return null;const E=m[1];return E?{x:(C.x+E.x)/2,y:(C.y+E.y)/2,distance:Math.hypot(E.x-C.x,E.y-C.y)}:{...C,distance:0}},L=m=>{v.size===0&&(w=!1);const E=(m.target instanceof Element?m.target:null)?.closest(kt)??null;m.button!==0||m.pointerType!=="touch"&&E!==null||(v.set(m.pointerId,{x:m.clientX,y:m.clientY}),y=D(),E===null&&e.setPointerCapture(m.pointerId),m.pointerType!=="touch"&&E===null&&(m.preventDefault(),e.focus({preventScroll:!0})))},T=m=>{if(!v.has(m.pointerId)||y===null)return;v.set(m.pointerId,{x:m.clientX,y:m.clientY});const C=D();if(C===null)return;const E=C.x-y.x,O=C.y-y.y;if((Math.abs(E)+Math.abs(O)>1||Math.abs(C.distance-y.distance)>1)&&(w=!0),C.distance>0&&y.distance>0){const P=e.getBoundingClientRect();k(Math.pow(C.distance/y.distance,.45),y.x-P.left,y.y-P.top)}o={...o,x:o.x+E,y:o.y+O},l(),y=C,e.classList.toggle("is-panning",w)},j=m=>{v.delete(m.pointerId),y=D(),!(v.size>0)&&(e.classList.remove("is-panning"),m.type==="pointercancel"&&(w=!1))},V=m=>{w&&(m.preventDefault(),m.stopPropagation()),j(m)},$=m=>{if(w){m.preventDefault(),m.stopPropagation(),w=!1;return}const C=m.target instanceof Element?m.target:null;C===null||C.closest(kt)!==null||s()},A=m=>{if(m.target!==e)return;const C=30;if(m.key==="+"||m.key==="=")k(1.1);else if(m.key==="-")k(1/1.1);else if(m.key==="0")c();else if(m.key==="Escape")s();else if(m.key==="ArrowLeft"||m.key==="ArrowRight"||m.key==="ArrowUp"||m.key==="ArrowDown")o={...o,x:o.x+(m.key==="ArrowLeft"?C:m.key==="ArrowRight"?-C:0),y:o.y+(m.key==="ArrowUp"?C:m.key==="ArrowDown"?-C:0)},l();else return;m.preventDefault()},R=m=>{const C=m.target instanceof HTMLElement?m.target:null;if(C===null||!t.contains(C))return;const E=C.getBoundingClientRect(),O=e.getBoundingClientRect();let P=0,X=0;E.left<O.left+12?P=O.left+12-E.left:E.right>O.right-12&&(P=O.right-12-E.right),E.top<O.top+12?X=O.top+12-E.top:E.bottom>O.bottom-40&&(X=O.bottom-40-E.bottom),!(P===0&&X===0)&&(o={...o,x:o.x+P,y:o.y+X},l())};e.addEventListener("wheel",x,{passive:!1}),e.addEventListener("pointerdown",L),e.addEventListener("pointermove",T),e.addEventListener("pointerup",V),e.addEventListener("pointercancel",j),e.addEventListener("lostpointercapture",j),e.addEventListener("click",$,!0),e.addEventListener("keydown",A),e.addEventListener("focusin",R);const U=typeof ResizeObserver>"u"?null:new ResizeObserver(()=>l());return U?.observe(e),{setContent(m){i=da(m.width===0&&m.height===0?[]:[m]),t.style.width=`${m.width}px`,t.style.height=`${m.height}px`,l()},apply:l,fit:c,fitWidth:g,reset:p,zoom:k,view:()=>({...o}),destroy(){U?.disconnect(),e.removeEventListener("wheel",x),e.removeEventListener("pointerdown",L),e.removeEventListener("pointermove",T),e.removeEventListener("pointerup",V),e.removeEventListener("pointercancel",j),e.removeEventListener("lostpointercapture",j),e.removeEventListener("click",$,!0),e.removeEventListener("keydown",A),e.removeEventListener("focusin",R)}}};class De extends Ye{static{this.styles=W}static{this.properties={data:{attribute:!1},id:{type:String,reflect:!0},heading:{type:String},subject:{type:String}}}#e=null;#s=null;#a=[];#t=[];#n=null;#r=Xs;#i=null;#o=null;#c=null;#u=null;#l=-1;#p="";#h=null;#f=null;#d=new Map;#m=null;#g=new Map;#b=null;#k=new Ve(this);#v=new We(this,()=>{this.#p=""});constructor(){super(),this.id=this.getAttribute("id")??"",this.data=null,this.heading=null,this.subject=null}connectedCallback(){super.connectedCallback(),this.#p="",this.requestUpdate(),this.#u=rt(this,e=>this.parseData(e),e=>{e.ok?this.#x(e.value):this.#R(e.error)})}disconnectedCallback(){super.disconnectedCallback(),this.#u?.(),this.#u=null,this.#o?.destroy(),this.#o=null,this.#c=null}willUpdate(e){e.has("data")&&this.data!==null&&this.#x(this.data)}updated(){this.#M(),this.#$(),this.#A(),this.#C()}#$(){const e=this.renderRoot.querySelector(".diagram");if(!(this.#b===null||!e||typeof e.showPopover!="function")&&!e.matches(":popover-open"))try{e.showPopover()}catch{}}#M(){const e=JSON.stringify([this.commentTargets,this.#t]);e!==this.#p&&(this.#p=e,this.dispatchEvent(new CustomEvent("dpk-comment-targets-change",{bubbles:!0,composed:!0})))}#A(){this.#c=this.renderRoot.querySelector(".diagram-zoom-value");const e=this.renderRoot.querySelector(".diagram-canvas"),t=this.renderRoot.querySelector(".diagram-world");if(!e||!t)return;this.#o??=pa({canvas:e,world:t,align:this.viewAlign(),onClearSelection:()=>this.#y(null),onView:r=>{this.#c&&(this.#c.textContent=`${Math.round(r.scale*100)}%`),this.dispatchEvent(new CustomEvent("dpk-diagram-view",{detail:{view:r},bubbles:!0,composed:!0})),this.onViewChange(r)}});const s=this.contentSize();if(s===null){this.#o.apply();return}this.#o.setContent({x:0,y:0,width:s.width,height:s.height});const n=this.layoutVersion();n!==this.#l&&(this.#l=n,this.initialView())}#C(){const e=this.#f!==this.#h;this.#f=this.#h;const t=this.renderRoot.querySelector(".comment-pop"),s=this.#S();!t||!s||(this.#k.open(t,s,{width:300,height:280},{placement:"right-start",trackTransform:!0}),e&&t.querySelector("textarea")?.focus({preventScroll:!0}))}get commentTargets(){if(!this.id||this.#n!==null)return[];const e=`${this.subject??this.heading??this.defaultHeading()} \xB7 ${this.id}`;return this.commentItems().map(t=>({...t,group:e}))}commentItems(){return[]}commentRef(e,...t){return`element:${[this.id,e,...t].map(s=>encodeURIComponent(s)).join("/")}`}requestElementComment(e,...t){const s=this.commentRef(e,...t);this.commentTargets.some(n=>n.value===s)&&this.dispatchEvent(new CustomEvent("dpk-comment-request",{detail:{target:s},bubbles:!0,composed:!0}))}get elementActions(){return this.#a}set elementActions(e){this.#a=e,this.#w()}get elementActionResults(){return this.#t}reduceElementActions(e,t){return{data:e,results:t.map(s=>({id:s.id,title:s.type,stale:"unsupported-action-type"}))}}dispatchElementAction(e,t,s){const n=new CustomEvent("dpk-element-action",{detail:{type:e,target:this.commentRef(...t),payload:s},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(n),n.defaultPrevented}get selection(){return this.#i}select(e){this.#y(e)}get tagFilter(){return this.#r}set tagFilter(e){this.#r=e,this.requestUpdate()}get dataError(){return this.#n}resetView(){this.fitViewport()}#E(e){if(e===(this.#b!==null))return;const t=this.renderRoot.querySelector(".diagram");this.#b=e?{height:t?.offsetHeight??0}:null,this.#h=null,this.requestUpdate()}#L={handleEvent:e=>e.preventDefault(),passive:!1};#q={handleEvent:e=>{e.key!=="Escape"||this.#i!==null||(e.preventDefault(),this.#E(!1))},capture:!0};get locale(){return this.#v.locale}get chromeMessages(){return Ks(this.#v.locale)}renderSelection(){const e=this.#h,t=e===null?void 0:this.#g.get(e);if(e===null||t===void 0)return b;const s=tt(this.#d.get(e)??"",[],{label:t,key:e,...this.#m===e?{error:this.chromeMessages.sendFailed}:{}});return h`${et(e,st(at(this.#v.locale),s,n=>this.#z(e,n)))}`}renderCommentTrigger(e,t,s){if(!this.id)return b;const n=this.commentRef(e.kind,e.id);return this.#g.set(n,t),h`<button
      type="button"
      class=${ee("diagram-comment-trigger",s&&"is-placed")}
      style=${s?`left:${s.x}px; top:${s.y}px`:b}
      data-comment-kind=${e.kind}
      data-comment-id=${e.id}
      aria-label=${this.chromeMessages.commentOn(t)}
      title=${this.chromeMessages.commentOn(t)}
      aria-haspopup="dialog"
      aria-expanded=${this.#h===n?"true":"false"}
      @click=${()=>{this.#y(e),this.#h=n,this.requestUpdate()}}
    >
      ${Ke()}
    </button>`}renderEdgeCommentTrigger(e,t,s){const n=Math.floor((s.length-1)/2),r=s[n],i=s[n+1]??r;return!this.id||!r||!i?b:I`<foreignObject
      class="diagram-edge-comment"
      x=${(r.x+i.x)/2-16}
      y=${(r.y+i.y)/2-16}
      width="32"
      height="32"
    >${this.renderCommentTrigger(e,t)}</foreignObject>`}layoutVersion(){return 0}fitViewport(){this.viewport?.fit()}initialView(){this.viewport?.reset()}viewAlign(){return"center"}questionsOf(e){const t=e.questions?.trim();return t===void 0||t===""?b:t}onViewChange(e){}statsText(){return""}tagItems(){return[]}isEmpty(){return this.contentSize()===null}shellClass(){return""}defaultHeading(){return""}defaultSubject(){return""}emptyMessage(){return this.chromeMessages.noMatches}renderToolbarActions(){return b}renderLegend(){return b}renderAboveCanvas(){return b}get viewport(){return this.#o}items(){return this.#s??this.emptyData()}authoredItems(){return this.#e??this.emptyData()}elementClass(e,...t){return ee(...t,e.selected&&"is-selected",e.related&&"is-related",e.dimmed&&"is-dimmed")}#x(e){this.#n=null,this.#e=e,this.#w()}#w(){if(this.#e===null){this.#t=this.#a.map(t=>({id:t.id,title:t.type,stale:"target-missing"})),this.requestUpdate();return}const e=this.reduceElementActions(this.#e,this.#a);this.#s=e.data,this.#t=e.results,this.#i!==null&&(this.hasSelection(this.#i)||(this.#i=null,this.#h=null)),this.requestUpdate()}#S(){const e=this.#i;return e?[...this.renderRoot.querySelectorAll("[data-comment-kind]")].find(t=>t.dataset.commentKind===e.kind&&t.dataset.commentId===e.id)??null:null}#z(e,t){if(t.kind==="input"){this.#d=new Map(this.#d).set(e,t.body),this.#m=null,this.requestUpdate();return}if(t.kind==="comment"){if(!!this.dispatchEvent(new CustomEvent("dpk-comment-submit",{detail:{target:e,body:t.body},bubbles:!0,composed:!0,cancelable:!0}))){this.#m=e,this.requestUpdate();return}const r=new Map(this.#d);r.delete(e),this.#d=r}this.#m=null;const s=this.#S();this.#y(null),s?.focus({preventScroll:!0})}#R(e){this.#n=e,this.#e=null,this.#s=null,this.#w(),console.error("[dev-process-kit] invalid diagram data:",e),this.requestUpdate()}hasSelection(e){return!0}#y(e){(e===null?this.#i===null:this.#i!==null&&this.#i.kind===e.kind&&this.#i.id===e.id)||(this.#i=e,this.#h=null,this.dispatchEvent(new CustomEvent("dpk-diagram-select",{detail:{selection:e},bubbles:!0,composed:!0})),this.requestUpdate())}#D=e=>{switch(e.kind){case"tag":this.#r=Js(this.#r,e.tag),this.requestUpdate();return;case"match":this.#r=Zs(this.#r,e.match),this.requestUpdate();return;case"clear-tags":this.#r=Qs(this.#r),this.requestUpdate();return;case"select":this.#y(e.selection);return;case"zoom":this.#o?.zoom(e.factor);return;case"fit":this.fitViewport();return;default:return}};refreshContent(){}render(){this.#g=new Map,this.refreshContent();const e=aa(this.tagItems(),this.#r),t=this.#b,s=this.chromeMessages,n=t===null?s.maximize:s.restore;return h`
      ${t===null?b:h`<div class="diagram-placeholder" style="height:${t.height}px"></div>`}
      <div
        class=${ee("diagram",this.shellClass(),t!==null&&"is-maximized")}
        popover=${t===null?b:"manual"}
        @wheel=${t===null?b:this.#L}
        @keydown=${t===null?b:this.#q}
      >
        <div class="diagram-toolbar">
          <span class="diagram-title" title=${this.heading??this.defaultHeading()}
            >${this.heading??this.defaultHeading()}</span
          >
          ${(this.subject??this.defaultSubject())===""?b:h`<span class="diagram-subject" title=${this.subject??this.defaultSubject()}
                  >${this.subject??this.defaultSubject()}</span
                >`}
          <div class="diagram-toolbar-actions">
            ${this.renderToolbarActions()}
            <span class="diagram-stats">${this.statsText()}</span>
            <button
              type="button"
              class="dpk-icon-btn diagram-maximize"
              aria-label=${n}
              title=${n}
              aria-pressed=${t===null?"false":"true"}
              @click=${()=>this.#E(t===null)}
            >
              ${t===null?Ts():As()}
            </button>
          </div>
        </div>
        ${ra(s,e,this.#r.match,this.#D)} ${this.renderAboveCanvas()}
        <div class="diagram-canvas" tabindex="0" aria-label=${s.canvas}>
          <div class="diagram-world">${this.renderCanvas()}</div>
          ${this.isEmpty()?h`<p class="diagram-empty">${this.emptyMessage()}</p>`:b}
          ${this.#n===null?b:h`<p class="diagram-notice" role="alert">${s.dataError}<br />${this.#n}</p>`}
          ${this.renderLegend()} ${ia(s,this.#D)}
        </div>
        ${this.renderSelection()}
      </div>
    `}}class ie extends De{#e=null;#s="";#a=0;#t=Y;commentItems(){const e=this.items();return[...e.nodes.map(t=>({value:this.commentRef("node",t.id),label:t.id})),...e.edges.map(t=>({value:this.commentRef("edge",t.id),label:`${t.from} \u2192 ${t.to} (${t.id})`}))]}get visible(){const e=this.filtered();return{nodes:e.nodes,edges:e.edges}}get layout(){return this.#e}get layoutMode(){return"layered"}get tagDimension(){return"node"}layoutOptions(){return{}}matchesFilter(e){return!0}layoutSignature(){return""}statsLabels(){return{node:this.chromeMessages.nodes,edge:this.chromeMessages.edges}}statsText(){const e=this.filtered();return na(e.nodes.length,e.edges.length,this.statsLabels())}tagItems(){const e=this.items();return(this.tagDimension==="edge"?e.edges:e.nodes).map(t=>t.tags)}contentSize(){const e=this.#e;return e===null||e.nodes.length===0?null:{width:e.width,height:e.height}}layoutVersion(){return this.#a}hasSelection(e){const t=this.items();return e.kind==="node"?t.nodes.some(s=>s.id===e.id):t.edges.some(s=>s.id===e.id)}placedNode(e){return this.#e?.nodes.find(t=>t.id===e)}routeOf(e){return this.#e?.routes.find(t=>t.id===e)?.points??[]}nodeState(e){return gt(e,this.selection,"node",this.#t)}edgeState(e){return gt(e,this.selection,"edge",this.#t)}renderEdges(e,t){const s=this.#e?.width??0,n=this.#e?.height??0;return h`<svg class="diagram-edges" width=${s} height=${n}>
      ${ft(t)}${e}
    </svg>`}filtered(){const e=this.items();if(this.tagDimension==="edge"){const n=e.edges.filter(i=>Q(i.tags,this.tagFilter)&&this.matchesFilter(i)),r=new Set(n.flatMap(i=>[i.from,i.to]));return{...e,edges:n,nodes:e.nodes.filter(i=>r.has(i.id))}}const t=e.nodes.filter(n=>Q(n.tags,this.tagFilter)&&this.matchesFilter(n)),s=new Set(t.map(n=>n.id));return{...e,nodes:t,edges:e.edges.filter(n=>s.has(n.from)&&s.has(n.to))}}refreshContent(){const e=this.filtered(),t=[this.layoutMode,e.nodes.map(s=>`${s.id}:${s.width}x${s.height}`).join(","),e.edges.map(s=>`${s.id}:${s.from}>${s.to}`).join(","),this.layoutSignature()].join("|");t!==this.#s&&(this.#s=t,this.#a+=1,this.#e=this.computePlacement(e)),this.#t=this.relations(this.selection,e)}computePlacement(e){const t=e.nodes.map(r=>({id:r.id,width:r.width,height:r.height,...r.ports===void 0?{}:{ports:r.ports},...r.position===void 0?{}:{position:r.position}})),s=e.edges.map(r=>({id:r.id,from:r.from,to:r.to,...r.fromPort===void 0?{}:{fromPort:r.fromPort},...r.toPort===void 0?{}:{toPort:r.toPort}})),n=this.layoutOptions();return this.layoutMode==="fixed"?Ws(t,s,n):Vs(t,s,n)}}const fe=B({en:{heading:"State machine",node:"State",edge:"Transition",empty:"No matching transitions.",transitionLabel:(a,e,t)=>`${t} from ${a} to ${e}`},ja:{heading:"\u30B9\u30C6\u30FC\u30C8\u30DE\u30B7\u30F3",node:"\u72B6\u614B",edge:"\u9077\u79FB",empty:"\u8A72\u5F53\u3059\u308B\u9077\u79FB\u306F\u3042\u308A\u307E\u305B\u3093\u3002",transitionLabel:(a,e,t)=>`${a} \u304B\u3089 ${e} \u3078\u306E ${t}`}}),ha=q({x:ae(),y:ae()}),ua=q({id:S(u(),M(1)),name:S(u(),M(1)),code:f(u()),kind:f(H(["normal","initial","terminal","compensation"]),"normal"),description:f(u()),position:f(ha),questions:f(u())}),ma=q({id:S(u(),M(1)),from:S(u(),M(1)),to:S(u(),M(1)),title:S(u(),M(1)),kind:f(H(["normal","exception"]),"normal"),tags:f(z(u()),[]),guard:f(u()),effect:f(u()),questions:f(u())}),xt={width:178,height:86},ga=()=>({nodes:[],edges:[]}),fa=q({states:z(ua),transitions:f(z(ma),[])}),vt=a=>{const e=G(fa,a),t=new Set;for(const i of e.states){if(t.has(i.id))throw new Error(`duplicate state id: ${i.id}`);t.add(i.id)}const s=new Set,n=e.transitions.map(i=>{if(s.has(i.id))throw new Error(`duplicate transition id: ${i.id}`);if(s.add(i.id),!t.has(i.from))throw new Error(`unknown transition source: ${i.from}`);if(!t.has(i.to))throw new Error(`unknown transition target: ${i.to}`);return{id:i.id,from:i.from,to:i.to,title:i.title,kind:i.kind,tags:i.tags,guard:i.guard??null,effect:i.effect??null,...i.questions===void 0?{}:{questions:i.questions}}});return{nodes:e.states.map(i=>({id:i.id,name:i.name,code:i.code??null,kind:i.kind,description:i.description??null,width:xt.width,height:xt.height,tags:[],...i.position===void 0?{}:{position:i.position},...i.questions===void 0?{}:{questions:i.questions}})),edges:n}},ba=a=>a.length>0&&a.every(e=>e.position!==void 0),ka=_`
  .state-node {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 0 15px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    text-align: left;
    overflow: hidden;
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease);
  }

  .state-node:hover {
    border-color: var(--dpk-blue);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .state-node.is-initial {
    border-left-width: 3px;
  }

  .state-node.is-terminal {
    border: 3px double var(--dpk-rule-strong);
  }

  .state-node.is-compensation {
    border-color: color-mix(in srgb, var(--dpk-amber) 50%, transparent);
    background: var(--dpk-amber-soft);
  }

  .state-node.is-selected {
    border-color: var(--dpk-blue);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-blue-soft);
  }

  .state-node.is-related {
    border-color: color-mix(in srgb, var(--dpk-green) 60%, transparent);
  }

  .state-code {
    font-family: var(--dpk-mono);
    font-size: 9px;
    letter-spacing: 0.02em;
    color: var(--dpk-ink-faint);
  }

  .state-name {
    font-size: 13.5px;
    font-weight: 640;
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* The slot centres a label on its route and carries the label's comment icon beside it. */
  .state-label-slot {
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
  }

  /* Overlaps the label by a hair so the pointer never crosses a gap that would hide it. */
  .state-label-slot > .diagram-comment-trigger {
    position: absolute;
    left: calc(100% - 2px);
    top: 50%;
    transform: translateY(-50%);
  }

  .state-label {
    max-width: 190px;
    padding: 3px 7px;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink-soft);
    font-size: 10px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    box-shadow: var(--dpk-shadow-xs);
    transition:
      border-color 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease);
  }

  .state-label:hover {
    border-color: color-mix(in srgb, var(--dpk-blue) 40%, transparent);
    color: var(--dpk-blue);
    box-shadow: var(--dpk-shadow-sm);
  }

  .state-label.is-selected {
    border-color: color-mix(in srgb, var(--dpk-blue) 55%, transparent);
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
    font-weight: 600;
    box-shadow:
      var(--dpk-shadow-xs),
      inset 0 0 0 1px color-mix(in srgb, var(--dpk-blue) 20%, transparent);
  }

  .state-label.is-dimmed {
    opacity: 0.35;
  }

  .state-edge.is-exception .d-edge-path {
    stroke: color-mix(in srgb, var(--dpk-amber) 65%, var(--dpk-rule-strong));
    stroke-dasharray: 5 4;
  }

  .state-edge.is-related .d-edge-path {
    stroke: var(--dpk-green);
  }

  .state-edge.is-selected .d-edge-path {
    stroke: var(--dpk-blue);
  }

  .state-initial-mark {
    fill: var(--dpk-ink-faint);
    stroke: var(--dpk-ink-faint);
  }

  .state-initial-mark.is-dimmed {
    opacity: 0.26;
  }

  #state-arrow .diagram-arrow {
    fill: var(--dpk-ink-faint);
    stroke: var(--dpk-ink-faint);
  }

  #state-arrow-active .diagram-arrow {
    fill: var(--dpk-blue);
    stroke: var(--dpk-blue);
  }

  #state-arrow-exception .diagram-arrow {
    fill: var(--dpk-amber);
    stroke: var(--dpk-amber);
  }
`,xa=[{id:"state-arrow"},{id:"state-arrow-active"},{id:"state-arrow-exception"}];class yt extends ie{static{this.styles=[W,ka]}parseData(e){return vt(e)}emptyData(){return ga()}defaultHeading(){return fe(this.locale).heading}statsLabels(){const e=fe(this.locale);return{node:e.node,edge:e.edge}}emptyMessage(){return fe(this.locale).empty}get tagDimension(){return"edge"}get layoutMode(){return ba(this.filtered().nodes)?"fixed":"layered"}layoutOptions(){return this.layoutMode==="fixed"?{padding:44}:{nodeSpacing:40,layerSpacing:110,padding:44}}relations(e,t){if(e===null||e.kind!=="node")return Y;const s=N(t.edges,e.id,"outgoing",!1),n=N(t.edges,e.id,"incoming",!1);return{nodes:new Map([...s.nodes,...n.nodes]),edges:new Set([...s.edges,...n.edges])}}renderCanvas(){const e=this.visible.nodes,t=e.filter(s=>s.kind==="initial").map(s=>this.#a(s));return h`
      ${this.renderEdges([...t,...this.visible.edges.map(s=>this.#t(s))],xa)}
      ${e.map(s=>this.#n(s))} ${this.visible.edges.map(s=>this.#r(s))}
    `}#e(e){return this.filtered().nodes.find(t=>t.id===e)?.name??e}#s(e){return[e.guard,e.effect].filter(t=>t!==null).join(`
`)||e.title}#a(e){const t=this.placedNode(e.id);if(!t)return b;const s=t.y+t.height/2,n=this.nodeState(e.id);return I`
      <g class=${ee("state-initial-mark",n.dimmed&&"is-dimmed")}>
        <circle cx=${t.x-22} cy=${s} r="5"></circle>
        <path
          d=${re([{x:t.x-17,y:s},{x:t.x-1,y:s}])}
          stroke-width="1.6"
        ></path>
      </g>
    `}#t(e){const t=fe(this.locale),s=this.edgeState(e.id),n=this.routeOf(e.id),r=re(n),o=s.selected||s.related?"state-arrow-active":e.kind==="exception"?"state-arrow-exception":"state-arrow",d=()=>this.select({kind:"edge",id:e.id});return I`
      <g
        class=${this.elementClass(s,"d-edge","state-edge",e.kind==="exception"&&"is-exception")}
        data-transition=${e.id}
      >
        <title>${this.#s(e)}</title>
        <path class="d-edge-path" d=${r} marker-end=${`url(#${o})`}></path>
        <path
          class="d-edge-hit"
          d=${r}
          role="button"
          tabindex="0"
          aria-label=${t.transitionLabel(this.#e(e.from),this.#e(e.to),e.title)}
          @click=${d}
          @keydown=${l=>{l.key!=="Enter"&&l.key!==" "||(l.preventDefault(),d())}}
        ></path>
      </g>
    `}#n(e){const t=this.placedNode(e.id);if(!t)return b;const s=this.nodeState(e.id);return h`
      <button
        type="button"
        class=${this.elementClass(s,"d-node","state-node",`is-${e.kind}`)}
        data-state=${e.id}
        data-grill-questions=${this.questionsOf(e)}
        style="left:${t.x}px; top:${t.y}px; width:${e.width}px; height:${e.height}px"
        aria-pressed=${s.selected?"true":"false"}
        title=${e.description??e.name}
        @click=${()=>this.select({kind:"node",id:e.id})}
      >
        <span class="state-name">${e.name}</span>
        ${e.code===null?b:h`<span class="state-code">${e.code}</span>`}
      </button>
      ${this.renderCommentTrigger({kind:"node",id:e.id},e.name,{x:t.x+e.width-20,y:t.y-14})}
    `}#r(e){const t=this.edgeState(e.id),s=sa(this.routeOf(e.id));return h`
      <span class="state-label-slot" style="left:${s.x}px; top:${s.y}px">
        <button
          type="button"
          class=${this.elementClass(t,"state-label")}
          data-transition-label=${e.id}
          data-grill-questions=${this.questionsOf(e)}
          title=${this.#s(e)}
          @click=${()=>this.select({kind:"edge",id:e.id})}
        >
          ${e.title}
        </button>
        ${this.renderCommentTrigger({kind:"edge",id:e.id},`${this.#e(e.from)} \u2192 ${this.#e(e.to)} \xB7 ${e.title}`)}
      </span>
    `}}const wt=()=>{customElements.get("dpk-component-state-diagram")||customElements.define("dpk-component-state-diagram",yt)},$t=(a,e)=>e?{request:"Process / guarantee",response:"Response / guarantee",async:"Async / guarantee"}[a]:{request:"\u51E6\u7406 / \u4FDD\u8A3C",response:"\u5FDC\u7B54 / \u4FDD\u8A3C",async:"\u975E\u540C\u671F\u51E6\u7406 / \u4FDD\u8A3C"}[a],oe=B({en:{heading:"Sequence",empty:"No matching messages.",participants:"Participants",stats:(a,e)=>`${a} / ${e} messages`,detailLabel:a=>$t(a,!0),selectMessage:a=>`Select ${a}`,frameHeaderLabel:(a,e,t)=>`${a} \xB7 ${t?`Expand ${e}`:`Collapse ${e}`}`,frameCount:a=>`${a} message${a===1?"":"s"}`},ja:{heading:"\u30B7\u30FC\u30B1\u30F3\u30B9\u56F3",empty:"\u8A72\u5F53\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002",participants:"\u53C2\u52A0\u8005",stats:(a,e)=>`${a} / ${e} \u30E1\u30C3\u30BB\u30FC\u30B8`,detailLabel:a=>$t(a,!1),selectMessage:a=>`${a}\u3092\u9078\u629E`,frameHeaderLabel:(a,e,t)=>`${a} \xB7 ${e}\u3092${t?"\u5C55\u958B":"\u6298\u308A\u305F\u305F\u3080"}`,frameCount:a=>`${a} \u30E1\u30C3\u30BB\u30FC\u30B8`}}),va=q({kind:Z("message"),id:S(u(),M(1)),from:S(u(),M(1)),to:S(u(),M(1)),title:S(u(),M(1)),style:f(H(["request","response","async"]),"request"),tags:f(z(u()),[]),guard:f(u()),detail:f(u()),questions:f(u())}),ya=q({label:S(u(),M(1)),items:z(Je())}),wa=q({kind:Z("fragment"),id:S(u(),M(1)),operator:H(["alt","opt","loop","par"]),title:S(u(),M(1)),collapsed:f(we(),!1),branches:S(z(ya),M(1))}),$a=Xe("kind",[va,wa]),Sa=q({id:S(u(),M(1)),name:S(u(),M(1)),role:f(u()),symbol:f(u()),kind:f(H(["internal","external"]),"internal"),description:f(u()),questions:f(u())}),Ma=q({participants:S(z(Sa),M(1)),items:f(z(Je()),[])}),St=240,Te=(a,e,t)=>{if(a.has(e))throw new Error(`duplicate ${t} id: ${e}`);a.add(e)},Mt=(a,e,t)=>a.map(s=>{const n=G($a,s);if(n.kind==="message"){if(Te(t,n.id,"message"),!e.has(n.from))throw new Error(`unknown sender: ${n.from}`);if(!e.has(n.to))throw new Error(`unknown receiver: ${n.to}`);return{kind:"message",id:n.id,from:n.from,to:n.to,title:n.title,style:n.style,tags:n.tags,guard:n.guard??null,detail:n.detail??null,questions:n.questions??null}}return Te(t,n.id,"fragment"),{kind:"fragment",id:n.id,operator:n.operator,title:n.title,collapsed:n.collapsed,branches:n.branches.map(i=>({label:i.label,items:Mt(i.items,e,t)}))}}),Ct=a=>{const e=G(Ma,a),t=new Set;for(const s of e.participants)Te(t,s.id,"participant");return{participants:e.participants.map(s=>({id:s.id,name:s.name,role:s.role??null,symbol:s.symbol??null,external:s.kind==="external",description:s.description??null,questions:s.questions??null})),items:Mt(e.items,t,new Set)}},Ca=()=>({participants:[],items:[]}),Et=(a,e)=>{for(const t of a)if(t.kind==="message")e.push(t);else for(const s of t.branches)Et(s.items,e)},K=a=>{const e=[];return Et(a,e),e},Ea=a=>new Map(K(a.items).map((e,t)=>[e.id,String(t+1).padStart(2,"0")])),qa=a=>K(a).length,qt=(a,e)=>{const t=[];for(const s of a){if(s.kind==="message"){e(s)&&t.push(s);continue}const n=s.branches.map(r=>({label:r.label,items:qt(r.items,e)})).filter(r=>r.items.length>0);n.length>0&&t.push({...s,branches:n})}return t},za=64,Da=86,Ta=31,Aa=32,La=40,Ra=(a,e)=>{const t=qt(a.items,e),s=new Set;for(const x of K(t))s.add(x.from),s.add(x.to);const n=a.participants.filter(x=>s.has(x.id)),r=new Map(n.map((x,v)=>[x.id,120+v*St])),i=Math.max(360,n.length*St),o=[],d=[],l=[],c=[],g=[];let p=25;const k=(x,v)=>{for(const y of x){if(y.kind==="message"){o.push({message:y,y:p+29,depth:v}),p+=y.from===y.to?Da:za;continue}const w=22+v*13,D=p,L=i-44-v*26;p+=Ta,y.collapsed?(g.push({fragment:y,x:w,y:p+6,width:L}),p+=La):y.branches.forEach((T,j)=>{j>0&&(c.push({x:w,y:p,width:L}),p+=8),l.push({label:T.label,x:w+12,y:p,width:L-24}),p+=Aa,k(T.items,v+1),p+=8}),d.push({fragment:y,x:w,y:D,width:L,height:p-D,count:qa([y])}),p+=14}};return k(t,0),{width:i,height:p+24,participants:n,rows:o,frames:d,branches:l,dividers:c,folds:g,x:r}},Oa=_`
  .sequence .diagram-canvas {
    background-image: none;
  }

  .sequence-rail {
    position: relative;
    height: 62px;
    flex-shrink: 0;
    overflow: hidden;
    border-bottom: 1px solid var(--dpk-rule);
    background: linear-gradient(180deg, var(--dpk-paper-raised), var(--dpk-paper));
  }

  .sequence-rail-world {
    position: absolute;
    top: 0;
    left: 0;
    height: 62px;
    transform-origin: 0 0;
  }

  .sequence-participant {
    position: absolute;
    top: 9px;
    width: 190px;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 6px 10px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    text-align: left;
    cursor: pointer;
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease);
  }

  .sequence-participant.is-external {
    border-style: dashed;
  }

  .sequence-participant:hover {
    border-color: var(--dpk-blue);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .sequence-participant[aria-pressed='true'] {
    border-color: var(--dpk-blue);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-blue-soft);
  }

  .sequence-participant.is-related {
    border-color: color-mix(in srgb, var(--dpk-green) 60%, transparent);
  }

  .sequence-symbol {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-inset);
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 9.5px;
  }

  .sequence-participant.is-external .sequence-symbol {
    background: var(--dpk-amber-soft);
    color: var(--dpk-amber);
  }

  /* The lane is a fixed width: a long name or role elides inside it (the button's title has it whole). */
  .sequence-names {
    min-width: 0;
  }

  .sequence-name {
    display: block;
    font-size: 11.5px;
    font-weight: 640;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sequence-role {
    display: block;
    margin-top: 2px;
    font-size: 9px;
    color: var(--dpk-ink-faint);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sequence-lifeline {
    stroke: var(--dpk-rule-strong);
    stroke-width: 1;
    stroke-dasharray: 4 6;
  }

  .sequence-divider {
    stroke: var(--dpk-rule-strong);
    stroke-dasharray: 4 4;
  }

  .sequence-message {
    fill: none;
    stroke: var(--dpk-ink-faint);
    stroke-width: 1.5;
    stroke-linejoin: round;
  }

  .sequence-message.is-response {
    stroke-dasharray: 5 4;
  }

  .sequence-message.is-async {
    stroke: var(--dpk-blue);
  }

  .sequence-message-row.is-related .sequence-message {
    stroke: var(--dpk-green);
    stroke-width: 2;
  }

  .sequence-message-row.is-selected .sequence-message {
    stroke: var(--dpk-ink);
    stroke-width: 2.4;
  }

  .sequence-message-row.is-dimmed,
  .sequence-label.is-dimmed {
    opacity: 0.24;
  }

  .sequence-frame {
    position: absolute;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-xs);
    background: color-mix(in srgb, var(--dpk-blue-soft) 50%, transparent);
    box-shadow: 0 1px 2px var(--dpk-shade-1);
    pointer-events: none;
  }

  .sequence-frame-chevron {
    display: inline-flex;
  }

  .sequence-frame-chevron svg {
    width: 11px;
    height: 11px;
  }

  .sequence-frame-header {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 5px 9px;
    border: 1px solid var(--dpk-rule-strong);
    border-bottom: 0;
    border-radius: var(--dpk-radius-xs) var(--dpk-radius-xs) 0 0;
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink-soft);
    font-size: 10px;
    text-align: left;
    cursor: pointer;
    transition:
      background 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease);
  }

  .sequence-frame-header:hover {
    background: var(--dpk-paper-inset);
    color: var(--dpk-ink);
  }

  .sequence-operator {
    flex: none;
    min-width: 26px;
    font-family: var(--dpk-mono);
    font-weight: 700;
    color: var(--dpk-blue);
  }

  .sequence-frame-count {
    flex: none;
    margin-left: auto;
    font-family: var(--dpk-mono);
    font-size: 9px;
    color: var(--dpk-ink-faint);
  }

  /* A branch or fold label is bounded by its frame (an inline max-width) and elides past it. */
  :is(.sequence-branch, .sequence-fold) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sequence-branch {
    position: absolute;
    font-size: 9.5px;
    color: var(--dpk-ink-faint);
  }

  .sequence-fold {
    position: absolute;
    font-size: 10px;
    color: var(--dpk-ink-faint);
  }

  .sequence-label {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 6px;
    max-height: 27px;
    padding: 3px 5px;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink-soft);
    font-size: 10px;
    text-align: left;
    cursor: pointer;
    box-shadow: var(--dpk-shadow-xs);
    transition:
      border-color 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease);
  }

  .sequence-label:hover {
    border-color: color-mix(in srgb, var(--dpk-blue) 40%, transparent);
    color: var(--dpk-blue);
    box-shadow: var(--dpk-shadow-sm);
  }

  .sequence-label.is-selected {
    border-color: color-mix(in srgb, var(--dpk-blue) 55%, transparent);
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
    box-shadow:
      var(--dpk-shadow-xs),
      inset 0 0 0 1px color-mix(in srgb, var(--dpk-blue) 20%, transparent);
  }

  .sequence-number {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 19px;
    height: 17px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: 3px;
    font-family: var(--dpk-mono);
    font-size: 8px;
    font-variant-numeric: tabular-nums;
    color: var(--dpk-ink-faint);
  }

  .sequence-text {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #seq-request .diagram-arrow,
  #seq-response .diagram-arrow {
    fill: var(--dpk-ink-faint);
    stroke: var(--dpk-ink-faint);
  }

  #seq-async .diagram-arrow {
    stroke: var(--dpk-blue);
  }

  #seq-related .diagram-arrow {
    fill: var(--dpk-green);
    stroke: var(--dpk-green);
  }

  #seq-selected .diagram-arrow {
    fill: var(--dpk-ink);
    stroke: var(--dpk-ink);
  }
`,Ia=[{id:"seq-request"},{id:"seq-response"},{id:"seq-async"},{id:"seq-related"},{id:"seq-selected"}];class zt extends De{static{this.styles=[W,Oa]}#e=null;#s=new Map;#a=new Map;#t=new Set;#n=new Set;#r="";#i=0;commentItems(){const e=this.items();return[...e.participants.map(t=>({value:this.commentRef("participant",t.id),label:t.name})),...K(e.items).map(t=>({value:this.commentRef("message",t.id),label:t.title}))]}parseData(e){return this.#a.clear(),Ct(e)}emptyData(){return Ca()}defaultHeading(){return oe(this.locale).heading}shellClass(){return"sequence"}emptyMessage(){return oe(this.locale).empty}fitViewport(){this.viewport?.fitWidth()}onViewChange(e){const t=this.renderRoot.querySelector(".sequence-rail-world");t&&(t.style.transform=`translateX(${e.x}px) scale(${e.scale})`)}hasSelection(e){const t=this.items();return e.kind==="participant"?t.participants.some(s=>s.id===e.id):K(t.items).some(s=>s.id===e.id)}tagItems(){return K(this.items().items).map(e=>e.tags)}statsText(){const e=this.#e,t=K(this.items().items).length;return e===null?"":oe(this.locale).stats(e.rows.length,t)}contentSize(){const e=this.#e;return e===null||e.rows.length===0?null:{width:e.width,height:e.height}}isEmpty(){return this.contentSize()===null}layoutVersion(){return this.#i}refreshContent(){const e=this.#c(),t=this.tagFilter,s=[t.match,[...t.active].join(","),[...this.#a].map(([i,o])=>`${i}:${o}`).join(","),K(e.items).map(i=>i.id).join(",")].join("|");s!==this.#r&&(this.#r=s,this.#i+=1,this.#s=Ea(this.items()),this.#e=Ra(e,i=>Q(i.tags,t))),this.#t=new Set,this.#n=new Set;const n=this.selection,r=this.#e;if(n!==null&&r!==null)if(n.kind==="message"){const i=r.rows.find(o=>o.message.id===n.id);this.#t.add(n.id),i&&(this.#n.add(i.message.from),this.#n.add(i.message.to))}else for(const i of r.rows)i.message.from!==n.id&&i.message.to!==n.id||this.#t.add(i.message.id)}#o(e,t){const s=e.detail===null?null:`${t.detailLabel(e.style)}: ${e.detail}`;return[e.guard,s].filter(n=>n!==null).join(`
`)||e.title}#c(){const e=this.items(),t=s=>s.map(n=>n.kind==="message"?n:{...n,collapsed:this.#a.get(n.id)??n.collapsed,branches:n.branches.map(r=>({label:r.label,items:t(r.items)}))});return{participants:e.participants,items:t(e.items)}}#u(e){return this.#e?.frames.find(t=>t.fragment.id===e.id)?.fragment.collapsed??e.collapsed}#l(e){this.#a.set(e.id,!this.#u(e)),this.requestUpdate()}#p(e){const t=this.selection?.kind==="message"&&this.selection.id===e,s=!t&&this.#t.has(e);return{selected:t,related:s,dimmed:this.selection!==null&&!t&&!s,depth:null}}#h(e){const t=this.selection?.kind==="participant"&&this.selection.id===e,s=!t&&this.#n.has(e);return{selected:t,related:s,dimmed:this.selection!==null&&!t&&!s,depth:null}}renderAboveCanvas(){const e=this.#e;if(e===null)return b;const t=oe(this.locale);return h`
      <div class="sequence-rail" role="group" aria-label=${t.participants}>
        <div class="sequence-rail-world">
          ${e.participants.map(s=>this.#f(s,e))}
        </div>
      </div>
    `}#f(e,t){const s=t.x.get(e.id)??0,n=this.#h(e.id);return h`
      <button
        type="button"
        class=${this.elementClass(n,"sequence-participant",e.external&&"is-external")}
        data-participant=${e.id}
        data-grill-questions=${this.questionsOf(e)}
        style="left:${s-95}px"
        aria-pressed=${n.selected?"true":"false"}
        title=${e.description??e.name}
        @click=${()=>this.select({kind:"participant",id:e.id})}
      >
        <span class="sequence-symbol" aria-hidden="true">${e.symbol??e.name.slice(0,2)}</span>
        <span class="sequence-names">
          <span class="sequence-name">${e.name}</span>
          ${e.role===null?b:h`<span class="sequence-role">${e.role}</span>`}
        </span>
      </button>
      ${this.renderCommentTrigger({kind:"participant",id:e.id},e.name,{x:s+95-34,y:17})}
    `}renderCanvas(){const e=this.#e;if(e===null)return h``;const t=oe(this.locale);return h`
      ${this.#d(e,t)}
      ${e.frames.map(s=>h`<div
          class="sequence-frame"
          style="left:${s.x}px; top:${s.y}px; width:${s.width}px; height:${s.height}px"
        ></div>`)}
      ${e.frames.map(s=>this.#m(s.fragment,s.x,s.y,s.width,s.count,t))}
      ${e.branches.map(s=>h`<span
          class="sequence-branch"
          style="left:${s.x}px; top:${s.y}px; max-width:${s.width}px"
          title=${s.label}
          >[${s.label}]</span
        >`)}
      ${e.folds.map(s=>{const n=s.fragment.branches.map(r=>`[${r.label}]`).join(" / ");return h`<span
          class="sequence-fold"
          style="left:${s.x}px; top:${s.y}px; max-width:${s.width}px"
          title=${n}
          >${n}</span
        >`})}
      ${e.rows.map(s=>this.#g(s.y,s.message,e,t))}
    `}#d(e,t){const s=e.participants.map(i=>I`<path
          class="sequence-lifeline"
          d=${`M${e.x.get(i.id)??0} 0 V${e.height}`}
        ></path>`),n=e.dividers.map(i=>I`<path class="sequence-divider" d=${`M${i.x} ${i.y} h${i.width}`}></path>`),r=e.rows.map(i=>{const o=e.x.get(i.message.from)??0,d=e.x.get(i.message.to)??0,l=o===d?`M${o} ${i.y} h42 v25 H${o}`:`M${o} ${i.y} H${d}`,c=this.#p(i.message.id),g=c.selected?"seq-selected":c.related?"seq-related":i.message.style==="async"?"seq-async":i.message.style==="response"?"seq-response":"seq-request",p=()=>this.select({kind:"message",id:i.message.id});return I`
        <g
          class=${this.elementClass(c,"sequence-message-row","d-edge",`is-${i.message.style}`)}
          data-message=${i.message.id}
        >
          <title>${this.#o(i.message,t)}</title>
          <path class="d-edge-hit" d=${l} role="button" tabindex="0"
            aria-label=${t.selectMessage(i.message.title)}
            @click=${p}
            @keydown=${k=>{k.key!=="Enter"&&k.key!==" "||(k.preventDefault(),p())}}></path>
          <path class="sequence-message is-${i.message.style}" d=${l} marker-end=${`url(#${g})`}></path>
        </g>
      `});return h`<svg class="diagram-edges" width=${e.width} height=${e.height}>
      ${ft(Ia)} ${s} ${n} ${r}
    </svg>`}#m(e,t,s,n,r,i){const o=this.#u(e);return h`
      <button
        type="button"
        class="sequence-frame-header"
        data-fragment=${e.id}
        style="left:${t}px; top:${s}px; width:${n}px"
        aria-expanded=${o?"false":"true"}
        aria-label=${i.frameHeaderLabel(e.operator,e.title,o)}
        @click=${()=>this.#l(e)}
      >
        <span class="sequence-frame-chevron">${o?Ze():Ls()}</span>
        <span class="sequence-operator">${e.operator}</span>
        <span class="sequence-text">${e.title}</span>
        <span class="sequence-frame-count">${i.frameCount(r)}</span>
      </button>
    `}#g(e,t,s,n){const r=s.x.get(t.from)??0,i=s.x.get(t.to)??0,o=r===i,d=this.#p(t.id),l=o?r+12:Math.min(r,i)+14,c=o?175:Math.abs(i-r)-28;return h`
      <button
        type="button"
        class=${this.elementClass(d,"sequence-label")}
        data-message-label=${t.id}
        data-grill-questions=${this.questionsOf(t)}
        style="left:${l}px; top:${e-28}px; width:${c}px"
        title=${this.#o(t,n)}
        @click=${()=>this.select({kind:"message",id:t.id})}
      >
        <span class="sequence-number">${this.#s.get(t.id)??""}</span>
        <span class="sequence-text">${t.title}</span>
      </button>
      ${this.renderCommentTrigger({kind:"message",id:t.id},`${this.#s.get(t.id)??""} ${t.title}`.trim(),{x:l+c-30,y:e-31})}
    `}}const Dt=()=>{customElements.get("dpk-component-sequence-diagram")||customElements.define("dpk-component-sequence-diagram",zt)},te=B({en:{heading:"Dependencies",node:"Module",edge:"Dependency",emptyCycles:"No matching cycles.",emptyModules:"No matching modules.",directionGroup:"Direction to follow from the selected module",directionOutgoing:"Depends on",directionIncoming:"Depended on by",directionBoth:"Both",transitive:"Include indirect",cyclesToggleLabel:a=>`Show only ${a} cycle group(s)`,cyclesCount:a=>`Cycles ${a}`,legendOutgoing:"Depends on",legendIncoming:"Depended on by",legendCycle:"Cycle",edgeLabel:(a,e)=>`${a} depends on ${e}`,cyclicSuffix:a=>`${a}, part of a cycle`,cycleBadge:"Cycle"},ja:{heading:"\u4F9D\u5B58\u95A2\u4FC2\u30B0\u30E9\u30D5",node:"\u30E2\u30B8\u30E5\u30FC\u30EB",edge:"\u4F9D\u5B58",emptyCycles:"\u8A72\u5F53\u3059\u308B\u5FAA\u74B0\u4F9D\u5B58\u306F\u3042\u308A\u307E\u305B\u3093\u3002",emptyModules:"\u8A72\u5F53\u3059\u308B\u30E2\u30B8\u30E5\u30FC\u30EB\u306F\u3042\u308A\u307E\u305B\u3093\u3002",directionGroup:"\u9078\u629E\u3057\u305F\u30E2\u30B8\u30E5\u30FC\u30EB\u304B\u3089\u8FFD\u3046\u65B9\u5411",directionOutgoing:"\u4F9D\u5B58\u5148",directionIncoming:"\u4F9D\u5B58\u5143",directionBoth:"\u4E21\u65B9",transitive:"\u9593\u63A5\u3082\u542B\u3080",cyclesToggleLabel:a=>`\u5FAA\u74B0\u4F9D\u5B58 ${a} \u30B0\u30EB\u30FC\u30D7\u3060\u3051\u8868\u793A`,cyclesCount:a=>`\u5FAA\u74B0 ${a}`,legendOutgoing:"\u4F9D\u5B58\u5148",legendIncoming:"\u4F9D\u5B58\u5143",legendCycle:"\u5FAA\u74B0",edgeLabel:(a,e)=>`${a} \u304C ${e} \u306B\u4F9D\u5B58`,cyclicSuffix:a=>`${a}\u30FB\u5FAA\u74B0\u4F9D\u5B58\u3042\u308A`,cycleBadge:"\u5FAA\u74B0"}}),Tt={width:176,height:84},Pa=q({id:S(u(),M(1)),name:S(u(),M(1)),path:f(u()),layer:f(u()),tags:f(z(u()),[]),description:f(u()),questions:f(u())}),ja=q({id:S(u(),M(1)),from:S(u(),M(1)),to:S(u(),M(1)),contract:f(u()),description:f(u()),questions:f(u())}),Fa=q({modules:z(Pa),dependencies:f(z(ja),[])}),Na=()=>({nodes:[],edges:[]}),Ua=a=>{const e=G(Fa,a),t=new Set;for(const i of e.modules){if(t.has(i.id))throw new Error(`duplicate module id: ${i.id}`);t.add(i.id)}const s=new Set,n=e.dependencies.map(i=>{if(s.has(i.id))throw new Error(`duplicate dependency id: ${i.id}`);if(s.add(i.id),!t.has(i.from))throw new Error(`unknown dependency source: ${i.from}`);if(!t.has(i.to))throw new Error(`unknown dependency target: ${i.to}`);return{id:i.id,from:i.from,to:i.to,tags:[],contract:i.contract??null,description:i.description??null}});return{nodes:e.modules.map(i=>({id:i.id,name:i.name,path:i.path??null,layer:i.layer??null,description:i.description??null,tags:i.tags,width:Tt.width,height:Tt.height,...i.questions===void 0?{}:{questions:i.questions}})),edges:n}},Ha=_`
  .dep-direction {
    display: flex;
    gap: 2px;
    padding: 3px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
  }

  .dep-direction button {
    border: 0;
    border-radius: var(--dpk-radius-xs);
    padding: 4px 8px;
    background: transparent;
    color: var(--dpk-ink-faint);
    font-size: 9.5px;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease);
  }

  .dep-direction button[aria-pressed='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-weight: 650;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  .dep-toggle {
    min-height: 26px;
    padding: 0 8px;
    font-size: 10.5px;
  }

  .dep-toggle[aria-pressed='true'] {
    border-color: color-mix(in srgb, var(--dpk-blue) 40%, transparent);
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  .dep-module {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 11px 12px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    text-align: left;
    overflow: hidden;
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease);
  }

  .dep-module:hover {
    border-color: var(--dpk-blue);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .dep-module.is-cyclic:not(.is-selected) {
    border-color: color-mix(in srgb, var(--dpk-amber) 55%, transparent);
  }

  .dep-module.is-selected {
    border-color: var(--dpk-blue);
    background: var(--dpk-blue-soft);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-blue-soft);
  }

  .dep-module.is-related {
    border-color: color-mix(in srgb, var(--dpk-green) 55%, transparent);
    background: var(--dpk-green-soft);
  }

  .dep-module.is-dependency {
    border-color: color-mix(in srgb, #6e9b61 60%, transparent);
    background: color-mix(in srgb, #6e9b61 8%, transparent);
  }

  .dep-module.is-dependent {
    border-color: color-mix(in srgb, #729aaa 60%, transparent);
    background: color-mix(in srgb, #729aaa 8%, transparent);
  }

  .dep-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 14px;
  }

  .dep-layer {
    font-size: 9px;
    color: var(--dpk-ink-faint);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dep-cycle-badge {
    flex-shrink: 0;
    padding: 1px 4px;
    border-radius: 3px;
    background: var(--dpk-amber-soft);
    color: var(--dpk-amber);
    font-size: 8.5px;
  }

  .dep-name {
    font-size: 13px;
    font-weight: 640;
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dep-path {
    font-family: var(--dpk-mono);
    font-size: 9px;
    color: var(--dpk-ink-faint);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dep-edge .d-edge-path {
    stroke: var(--dpk-rule-strong);
    stroke-width: 1.4;
  }

  .dep-edge.is-related .d-edge-path {
    stroke: var(--dpk-green);
    stroke-width: 2;
  }

  .dep-edge.is-selected .d-edge-path {
    stroke: var(--dpk-blue);
    stroke-width: 2.6;
  }

  .dep-edge:focus-visible .d-edge-path {
    stroke: var(--dpk-blue);
  }

  .diagram-legend .dep-swatch-outgoing {
    border-color: #6e9b61;
  }

  .diagram-legend .dep-swatch-incoming {
    border-color: #729aaa;
  }

  .diagram-legend .dep-swatch-cycle {
    border-color: var(--dpk-amber);
  }

  #dep-neutral .diagram-arrow {
    fill: var(--dpk-rule-strong);
    stroke: var(--dpk-rule-strong);
  }

  #dep-outgoing .diagram-arrow {
    fill: #6e9b61;
    stroke: #6e9b61;
  }

  #dep-incoming .diagram-arrow {
    fill: #729aaa;
    stroke: #729aaa;
  }

  #dep-cycle .diagram-arrow {
    fill: var(--dpk-amber);
    stroke: var(--dpk-amber);
  }

  #dep-selected .diagram-arrow {
    fill: var(--dpk-blue);
    stroke: var(--dpk-blue);
  }
`,Ba=[{id:"dep-neutral"},{id:"dep-outgoing"},{id:"dep-incoming"},{id:"dep-cycle"},{id:"dep-selected"}];class At extends ie{static{this.styles=[W,Ha]}#e="both";#s=!1;#a=!1;#t=[];#n=Y;#r=Y;parseData(e){return Ua(e)}emptyData(){return Na()}defaultHeading(){return te(this.locale).heading}statsLabels(){const e=te(this.locale);return{node:e.node,edge:e.edge}}emptyMessage(){const e=te(this.locale);return this.#a?e.emptyCycles:e.emptyModules}layoutOptions(){return{nodeSpacing:40,layerSpacing:96,padding:32}}relations(e,t){return e===null||e.kind!=="node"?Y:{nodes:new Map([...this.#n.nodes,...this.#r.nodes]),edges:new Set([...this.#n.edges,...this.#r.edges])}}refreshContent(){const e=this.items(),t=this.tagFilter,s=e.nodes.filter(o=>Q(o.tags,t)),n=new Set(s.map(o=>o.id)),r=e.edges.filter(o=>n.has(o.from)&&n.has(o.to));this.#t=ta(s.map(o=>o.id),r);const i=this.selection;this.#n=i!==null&&i.kind==="node"&&this.#e!=="incoming"?N(r,i.id,"outgoing",this.#s):Y,this.#r=i!==null&&i.kind==="node"&&this.#e!=="outgoing"?N(r,i.id,"incoming",this.#s):Y,super.refreshContent()}matchesFilter(e){return this.#a?Ce(this.#t).has(e.id):!0}filtered(){const e=super.filtered();if(!this.#a)return e;const t=Ce(this.#t),s=e.edges.filter(r=>ut(r,t)),n=new Set(s.flatMap(r=>[r.from,r.to]));return{nodes:e.nodes.filter(r=>n.has(r.id)),edges:s}}renderToolbarActions(){const e=te(this.locale),t=this.#t.length;return h`
      <div class="dep-direction" role="group" aria-label=${e.directionGroup}>
        ${[["outgoing",e.directionOutgoing],["incoming",e.directionIncoming],["both",e.directionBoth]].map(([s,n])=>h`
            <button
              type="button"
              data-direction=${s}
              aria-pressed=${this.#e===s?"true":"false"}
              @click=${()=>this.#i(s)}
            >
              ${n}
            </button>
          `)}
      </div>
      <button
        type="button"
        class="dpk-btn dpk-btn--ghost dep-toggle"
        data-toggle="transitive"
        aria-pressed=${this.#s?"true":"false"}
        @click=${()=>{this.#s=!this.#s,this.requestUpdate()}}
      >
        ${e.transitive}
      </button>
      <button
        type="button"
        class="dpk-btn dpk-btn--ghost dep-toggle"
        data-toggle="cycles"
        aria-pressed=${this.#a?"true":"false"}
        aria-label=${e.cyclesToggleLabel(t)}
        ?disabled=${!this.#a&&t===0}
        @click=${()=>{this.#a=!this.#a,this.requestUpdate()}}
      >
        ${e.cyclesCount(t)}
      </button>
    `}renderLegend(){const e=te(this.locale);return h`<div class="diagram-legend">
      <span><i class="dep-swatch-outgoing"></i>${e.legendOutgoing}</span>
      <span><i class="dep-swatch-incoming"></i>${e.legendIncoming}</span>
      <span><i class="dep-swatch-cycle"></i>${e.legendCycle}</span>
    </div>`}#i(e){this.#e=e,this.requestUpdate()}#o(e,t){const s=this.selection;return s!==null&&s.kind==="edge"&&s.id===e.id?"dep-selected":ut(e,t)?"dep-cycle":this.#n.edges.has(e.id)?"dep-outgoing":this.#r.edges.has(e.id)?"dep-incoming":"dep-neutral"}renderCanvas(){const e=te(this.locale),t=this.visible,s=Ce(this.#t),n=o=>t.nodes.find(d=>d.id===o)?.name??o,r=t.edges.map(o=>{const d=this.edgeState(o.id),l=this.routeOf(o.id),c=re(l),g=()=>this.select({kind:"edge",id:o.id});return I`
        <g class=${this.elementClass(d,"d-edge","dep-edge")} data-dependency=${o.id}>
          <title>${[o.contract,o.description].filter(p=>p!==null).join(`
`)||o.id}</title>
          <path class="d-edge-path" d=${c} marker-end=${`url(#${this.#o(o,s)})`}></path>
          <path
            class="d-edge-hit"
            d=${c}
            role="button"
            tabindex="0"
            aria-label=${e.edgeLabel(n(o.from),n(o.to))}
            @click=${g}
            @keydown=${p=>{p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),g())}}
          ></path>
          ${this.renderEdgeCommentTrigger({kind:"edge",id:o.id},`${n(o.from)} \u2192 ${n(o.to)}`,l)}
        </g>
      `}),i=t.nodes.map(o=>{const d=this.placedNode(o.id);if(!d)return b;const l=this.nodeState(o.id),c=s.has(o.id),g=this.#n.nodes.has(o.id),p=this.#r.nodes.has(o.id);return h`
        <button
          type="button"
          class=${this.elementClass(l,"d-node","dep-module",c&&"is-cyclic",g&&"is-dependency",p&&"is-dependent")}
          data-module=${o.id}
          data-grill-questions=${this.questionsOf(o)}
          style="left:${d.x}px; top:${d.y}px; width:${o.width}px; height:${o.height}px"
          aria-pressed=${l.selected?"true":"false"}
          aria-label=${c?e.cyclicSuffix(o.name):o.name}
          title=${[o.path??o.name,o.description].filter(k=>k!==null).join(`
`)}
          @click=${()=>this.select({kind:"node",id:o.id})}
        >
          <span class="dep-head">
            <span class="dep-layer">${o.layer??""}</span>
            ${c?h`<span class="dep-cycle-badge">${e.cycleBadge}</span>`:b}
          </span>
          <span class="dep-name">${o.name}</span>
          <span class="dep-path">${o.path??""}</span>
        </button>
        ${this.renderCommentTrigger({kind:"node",id:o.id},o.name,{x:d.x+o.width-20,y:d.y-14})}
      `});return h`${this.renderEdges(r,Ba)}${i}`}}const Lt=()=>{customElements.get("dpk-component-dependency-graph")||customElements.define("dpk-component-dependency-graph",At)},Rt=(a,e)=>e?{same:"Unchanged",added:"Added",removed:"Removed",changed:"Changed"}[a]:{same:"\u5909\u66F4\u306A\u3057",added:"\u8FFD\u52A0",removed:"\u524A\u9664",changed:"\u5909\u66F4"}[a],se=B({en:{heading:"ERD",node:"Table",edge:"Relation",empty:"No matching tables.",search:"Search",legendAdded:"Added",legendRemoved:"Removed",legendChanged:"Changed",legendCardinality:"Crow\u2019s foot: | one \xB7 \u25CB zero \xB7 fork many \u2014 each end counts that table\u2019s rows per row across the line",statusLabel:a=>Rt(a,!0),edgeLabel:(a,e,t)=>`${a} and ${e}, related ${t}`,was:a=>`was ${a}`,nullable:"nullable"},ja:{heading:"ER\u56F3",node:"\u30C6\u30FC\u30D6\u30EB",edge:"\u95A2\u9023",empty:"\u8A72\u5F53\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306F\u3042\u308A\u307E\u305B\u3093\u3002",search:"\u691C\u7D22",legendAdded:"\u8FFD\u52A0",legendRemoved:"\u524A\u9664",legendChanged:"\u5909\u66F4",legendCardinality:"\u30AB\u30E9\u30B9\u306E\u8DB3\u8A18\u6CD5: | 1 \xB7 \u25CB 0 \xB7 \u4E09\u53C9 \u591A \u2014 \u5404\u7AEF\u306E\u8A18\u53F7\u3068\u6570\u5B57\u306F\u3001\u76F8\u624B\u5074 1 \u884C\u306B\u5BFE\u3059\u308B\u305D\u306E\u7AEF\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u884C\u6570",statusLabel:a=>Rt(a,!1),edgeLabel:(a,e,t)=>`${a} \u3068 ${e} \u306E\u95A2\u9023 (${t})`,was:a=>`\u5909\u66F4\u524D ${a}`,nullable:"null\u53EF"}}),Ot=276,Ae=74,_a=28,Ga=44,It=["1","0..1"],Pt=["1","0..1","1..N","0..N"],Ya=It.flatMap(a=>Pt.map(e=>`${a}:${e}`)),jt=H(["PK","FK","UQ"]),Va=q({id:S(u(),M(1)),type:S(u(),M(1)),key:f(Rs([jt,S(z(jt),M(1))])),ref:f(u()),nullable:f(we(),!1),cardinality:f(H(Ya)),label:f(S(u(),M(1))),questions:f(u())}),Wa=q({id:S(u(),M(1)),name:S(u(),M(1)),tags:f(z(u()),[]),fields:z(Va),questions:f(u())}),Ft=q({tables:z(Wa)}),Ka=q({before:f(Ft),after:Ft}),Xa=()=>({nodes:[],edges:[]}),Le=a=>a.key===void 0?[]:[...new Set(typeof a.key=="string"?[a.key]:a.key)],Nt=a=>({id:a.id,type:a.type,keys:Le(a),ref:a.ref??null,nullable:a.nullable,cardinality:a.cardinality??null,label:a.label??null,questions:a.questions??null}),Ut=(a,e)=>a.type===e.type&&a.keys.join()===e.keys.join()&&a.ref===e.ref&&a.nullable===e.nullable&&a.cardinality===e.cardinality&&a.label===e.label,be=a=>`${a.parent} : ${a.child}`,Ja=(a,e)=>be(a.cardinality)===be(e.cardinality)&&a.label===e.label,Za=(a,e)=>{const t=Le(e);return t.includes("UQ")?!0:t.includes("PK")&&a.fields.filter(s=>Le(s).includes("PK")).length===1},Qa=new Map(It.map(a=>[a,a])),en=new Map(Pt.map(a=>[a,a])),tn=(a,e)=>{const t=Za(a,e),s={parent:e.nullable?"0..1":"1",child:t?"0..1":"0..N"};if(e.cardinality===void 0)return s;const[n="",r=""]=e.cardinality.split(":"),i=Qa.get(n),o=en.get(r),d=`${a.id}.${e.id}`;if(i===void 0||o===void 0)throw new Error(`invalid cardinality on ${d}`);if(i!==s.parent)throw new Error(`cardinality "${e.cardinality}" on ${d} needs the parent end ${s.parent}: the FK is ${e.nullable?"":"not "}nullable`);if(t&&(o==="1..N"||o==="0..N"))throw new Error(`cardinality "${e.cardinality}" on ${d} allows many rows, but the column is unique`);return{parent:i,child:o}},Re=a=>a.status==="changed"?Ga:_a,sn=a=>Ae+a.reduce((e,t)=>e+Re(t),0),Ht=(a,e)=>{let t=Ae;for(const s of a){if(s.id===e)return t+Re(s)/2;t+=Re(s)}return Ae/2},an=14,nn=(a,e)=>(a-(e-1)/2)*an,Oe=a=>{const e=new Map;for(const t of a){const s=`${t.from}.${t.sourceField}`;e.set(s,[...e.get(s)??[],t.id])}return new Map([...e.values()].flatMap(t=>t.map((s,n)=>[s,nn(n,t.length)])))},Bt=a=>a.flatMap(e=>e.fields.flatMap(t=>{if(t.ref===void 0){if(t.cardinality!==void 0||t.label!==void 0)throw new Error(`cardinality and label on ${e.id}.${t.id} describe a relation; add its ref`);return[]}const[s,n]=t.ref.split(".");if(s===void 0||n===void 0)throw new Error(`invalid ref "${t.ref}" on ${e.id}.${t.id}; expected table.field`);return[{id:`${s}:${n}>${e.id}:${t.id}`,from:s,to:e.id,sourceField:n,targetField:t.id,cardinality:tn(e,t),label:t.label??null}]})),rn=(a,e)=>[...new Set([...a,...e].map(s=>s.id))].flatMap(s=>{const n=a.find(l=>l.id===s),r=e.find(l=>l.id===s),i=r??n;if(!i)return[];const o=Nt(i);if(!n)return[{...o,status:"added",before:null}];if(!r)return[{...o,status:"removed",before:null}];const d=Nt(n);return[{...o,status:Ut(d,o)?"same":"changed",before:Ut(d,o)?null:d}]}),on=a=>{const e=G(Ka,a),t=e.before?.tables??e.after.tables,s=e.after.tables,n=[...new Set([...t,...s].map(x=>x.id))],r=new Map;for(const x of[...t,...s])r.set(x.id,x.tags);const i=n.flatMap(x=>{const v=t.find(T=>T.id===x),y=s.find(T=>T.id===x),w=y??v;if(!w)return[];const D=rn(v?.fields??[],y?.fields??[]),L=v?y?D.some(T=>T.status!=="same")?"changed":"same":"removed":"added";return[{id:x,name:w.name,status:L,fields:D,tags:r.get(x)??[],width:Ot,height:sn(D),...w.questions===void 0?{}:{questions:w.questions}}]}),o=new Map(i.map(x=>[x.id,x])),d=Bt(t),l=Bt(s),g=[...new Set([...d,...l].map(x=>x.id))].flatMap(x=>{const v=d.find(V=>V.id===x),y=l.find(V=>V.id===x),w=y??v;if(!w)return[];const D=o.get(w.from),L=o.get(w.to);if(!D||!L)return[];const T=v&&y&&!Ja(v,y)?v:null,j=v?y?T?"changed":"same":"removed":"added";return[{id:x,from:w.from,to:w.to,sourceField:w.sourceField,targetField:w.targetField,cardinality:w.cardinality,label:w.label,before:T&&{cardinality:T.cardinality,label:T.label},status:j,tags:[],fromPort:`${x}:out`,toPort:`${x}:in`}]}),p=Oe(g),k=x=>{const v={},y={};for(const w of g)w.from===x.id&&(v[`${w.id}:out`]={x:Ot,y:Ht(x.fields,w.sourceField)+(p.get(w.id)??0)}),w.to===x.id&&(y[`${w.id}:in`]={x:0,y:Ht(x.fields,w.targetField)});return{out:v,in:y}};return{nodes:i.map(x=>{const v=k(x);return{...x,ports:{...v.out,...v.in}}}),edges:g}},dn=a=>{switch(a){case"1":return{min:"one",max:"one"};case"0..1":return{min:"zero",max:"one"};case"1..N":return{min:"one",max:"many"};case"0..N":return{min:"zero",max:"many"}}},Ie=4,_t=6,ln=12,Gt=7,cn=7,pn=14,hn=19,un=6,mn=(a,e)=>{const t=e==="start"?a:[...a].reverse(),[s]=t,n=t.find(i=>s!==void 0&&(i.x!==s.x||i.y!==s.y));if(s===void 0||n===void 0)return{x:e==="start"?1:-1,y:0};const r=Math.hypot(n.x-s.x,n.y-s.y);return{x:(n.x-s.x)/r,y:(n.y-s.y)/r}},Yt=a=>Math.round(a*100)/100||0,gn=(a,e,t)=>{const s=(e==="start"?a[0]:a.at(-1))??{x:0,y:0},n=mn(a,e),r={x:-n.y,y:n.x},i=(y,w=0)=>({x:Yt(s.x+n.x*y+r.x*w),y:Yt(s.y+n.y*y+r.y*w)}),o=y=>[i(y,-_t),i(y,_t)],d=dn(t),l=d.max==="many"?[-Gt,0,Gt].map(y=>[i(ln),i(0,y)]):[o(cn)],c=d.max==="many"?hn:pn,g=c+Ie-2,p=d.min==="one"?[...l,o(c)]:l,k=d.min==="zero"?i(g):null,x=(d.min==="zero"?g+Ie:c)+un,v=i(x);return{segments:p,circle:k,label:{...v,anchor:n.x>=0?"start":"end"}}},fn=_`
  .er-search {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .er-search .dpk-input {
    width: 150px;
    min-height: 26px;
    font-size: 11px;
  }

  .er-table {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    overflow: hidden;
    cursor: default;
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease);
  }

  .er-table:hover {
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .er-table.is-added {
    border-color: color-mix(in srgb, var(--dpk-green) 55%, transparent);
  }

  .er-table.is-removed {
    border-color: color-mix(in srgb, var(--dpk-accent) 55%, transparent);
  }

  .er-table.is-changed {
    border-color: color-mix(in srgb, var(--dpk-amber) 55%, transparent);
  }

  .er-table.is-selected {
    border-color: var(--dpk-blue);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-blue-soft);
  }

  .er-table.is-related {
    border-color: color-mix(in srgb, var(--dpk-green) 50%, transparent);
  }

  .er-head {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      'mark name name'
      'mark label label'
      '. status status';
    align-items: center;
    gap: 1px 8px;
    width: 100%;
    min-height: 74px;
    flex-shrink: 0;
    padding: 7px 11px;
    border: 0;
    border-bottom: 1px solid var(--dpk-rule);
    border-radius: 0;
    background: var(--dpk-paper);
    text-align: left;
    cursor: pointer;
  }

  .er-head:hover {
    background: var(--dpk-paper-sunken);
  }

  .er-table:has(> .diagram-comment-trigger) .er-head {
    padding-right: 46px;
  }

  .er-table > .diagram-comment-trigger {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .er-table:hover,
  .er-table:focus-within,
  .er-edge:hover,
  .er-edge:focus-within {
    opacity: 1;
  }

  .er-mark {
    grid-area: mark;
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    font-family: var(--dpk-mono);
    font-size: 10px;
  }

  .er-table.is-added .er-mark {
    background: var(--dpk-green-soft);
    color: var(--dpk-green);
  }

  .er-table.is-removed .er-mark {
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent);
  }

  .er-table.is-changed .er-mark {
    background: var(--dpk-amber-soft);
    color: var(--dpk-amber);
  }

  .er-name {
    grid-area: name;
    font-family: var(--dpk-mono);
    font-size: 12px;
    font-weight: 640;
    letter-spacing: -0.01em;
    white-space: normal;
    overflow-wrap: anywhere;
    min-width: 0;
  }

  .er-label {
    grid-area: label;
    font-size: 9.5px;
    color: var(--dpk-ink-faint);
    white-space: normal;
    overflow-wrap: anywhere;
    min-width: 0;
  }

  .er-status {
    grid-area: status;
    font-size: 8.5px;
    text-align: right;
  }

  .er-fields {
    display: flex;
    flex-direction: column;
  }

  .er-field {
    display: grid;
    grid-template-columns: 14px 26px minmax(0, 1fr);
    grid-template-areas: 'mark key name' '. . type';
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    min-height: 28px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--dpk-rule);
    font-size: 10.5px;
  }

  .er-field:last-child {
    border-bottom: 0;
  }

  .er-field.is-added {
    background: color-mix(in srgb, var(--dpk-green) 10%, transparent);
    box-shadow: inset 2px 0 0 var(--dpk-green);
  }

  .er-field.is-removed {
    background: color-mix(in srgb, var(--dpk-accent) 10%, transparent);
    box-shadow: inset 2px 0 0 var(--dpk-accent);
    text-decoration: line-through;
    color: var(--dpk-ink-faint);
  }

  .er-field.is-changed {
    background: color-mix(in srgb, var(--dpk-amber) 10%, transparent);
    box-shadow: inset 2px 0 0 var(--dpk-amber);
  }

  .er-field.is-match {
    box-shadow: inset 2px 0 0 var(--dpk-blue);
  }

  .er-field-mark {
    grid-area: mark;
    font-family: var(--dpk-mono);
    font-size: 10px;
    text-align: center;
  }

  .er-field.is-added .er-field-mark {
    color: var(--dpk-green);
  }

  .er-field.is-removed .er-field-mark {
    color: var(--dpk-accent);
  }

  .er-field.is-changed .er-field-mark {
    color: var(--dpk-amber);
  }

  .er-key {
    grid-area: key;
    display: grid;
    place-items: center;
    /* A column with several roles (FK + UQ) stacks one badge line per key. */
    line-height: 1.25;
    padding: 1px 0;
    border-radius: 3px;
    background: var(--dpk-paper-inset);
    font-family: var(--dpk-mono);
    font-size: 8.5px;
    color: var(--dpk-ink-faint);
  }

  .er-key[data-empty='true'] {
    background: transparent;
  }

  .er-field-name {
    grid-area: name;
    font-family: var(--dpk-mono);
    white-space: normal;
    overflow-wrap: anywhere;
    min-width: 0;
  }

  .er-field-type {
    grid-area: type;
    font-size: 9.5px;
    color: var(--dpk-ink-faint);
    white-space: normal;
    overflow-wrap: anywhere;
    min-width: 0;
  }

  .er-change {
    grid-area: type;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 9px;
    line-height: 1.6;
    white-space: normal;
    overflow-wrap: anywhere;
    min-width: 0;
    text-align: left;
  }

  .er-change del {
    color: var(--dpk-accent);
    text-decoration: line-through;
  }

  .er-change ins {
    color: var(--dpk-green);
    text-decoration: none;
  }

  .er-edge .d-edge-path {
    stroke-width: 1.5;
  }

  .er-edge.is-added .d-edge-path {
    stroke: var(--dpk-green);
  }

  .er-edge.is-removed .d-edge-path {
    stroke: var(--dpk-accent);
    stroke-dasharray: 5 4;
  }

  .er-edge.is-selected .d-edge-path {
    stroke: var(--dpk-blue);
    stroke-width: 2.6;
  }

  .er-cardinality {
    font-family: var(--dpk-mono);
    font-size: 10px;
    fill: var(--dpk-ink-soft);
    paint-order: stroke;
    stroke: var(--dpk-paper-sunken);
    stroke-width: 5px;
    stroke-linejoin: round;
  }

  .er-cardinality.is-added {
    fill: var(--dpk-green);
  }

  .er-cardinality.is-removed {
    fill: var(--dpk-accent);
  }

  .er-relation-label {
    font-size: 10px;
    font-style: italic;
    fill: var(--dpk-ink-soft);
    paint-order: stroke;
    stroke: var(--dpk-paper-sunken);
    stroke-width: 4px;
  }

  .er-relation-label.is-added {
    fill: var(--dpk-green);
  }

  .er-relation-label.is-removed {
    fill: var(--dpk-accent);
  }

  .er-cardinality.is-changed,
  .er-relation-label.is-changed {
    fill: var(--dpk-amber);
  }

  .er-was {
    fill: var(--dpk-accent);
    text-decoration: line-through;
  }

  .er-edge.is-changed .d-edge-path {
    stroke: var(--dpk-amber);
  }

  /* Crow's foot ends take the line's colour; the "zero" circle is hollow. */
  .er-end {
    pointer-events: none;
    fill: var(--dpk-paper-raised);
    stroke: var(--dpk-ink-faint);
    stroke-width: 1.5;
    stroke-linecap: round;
  }

  .er-edge.is-added .er-end {
    stroke: var(--dpk-green);
  }

  .er-edge.is-removed .er-end {
    stroke: var(--dpk-accent);
  }

  .er-edge.is-changed .er-end {
    stroke: var(--dpk-amber);
  }

  .er-edge.is-selected .er-end {
    stroke: var(--dpk-blue);
    stroke-width: 2;
  }

  .diagram-legend .er-legend-cardinality {
    font-family: var(--dpk-mono);
    font-size: 9px;
  }

  .diagram-legend .er-swatch-added {
    border-color: var(--dpk-green);
  }

  .diagram-legend .er-swatch-removed {
    border-color: var(--dpk-accent);
  }

  .diagram-legend .er-swatch-changed {
    border-color: var(--dpk-amber);
  }
`,Pe=7,Vt={same:"",added:"+",removed:"\u2212",changed:"~"};class Wt extends ie{static{this.styles=[W,fn]}#e="";#s=new Map;#a=null;disconnectedCallback(){this.#a?.disconnect(),this.#a=null,super.disconnectedCallback()}updated(){super.updated(),typeof ResizeObserver<"u"&&(this.#a??=new ResizeObserver(()=>this.#t())),this.#a?.disconnect();for(const e of this.renderRoot.querySelectorAll(".er-table")){this.#a?.observe(e);for(const t of e.querySelectorAll(".er-field"))this.#a?.observe(t)}this.#t()}#t(){let e=!1;for(const t of this.renderRoot.querySelectorAll(".er-table")){const s=t.dataset.erTable,n=t.getBoundingClientRect();if(s===void 0||n.width===0)continue;const r=n.width/t.offsetWidth,i=d=>Math.round(d*64)/64,o={height:i(n.height/r),rows:[...t.querySelectorAll(".er-field")].map(d=>{const l=d.getBoundingClientRect();return i((l.top+l.height/2-n.top)/r)})};JSON.stringify(this.#s.get(s))!==JSON.stringify(o)&&(this.#s.set(s,o),e=!0)}e&&this.requestUpdate()}layoutSignature(){return JSON.stringify([...this.#s])}filtered(){const e=super.filtered(),t=Oe(e.edges);return{...e,nodes:e.nodes.map(s=>{const n=this.#s.get(s.id);if(!n)return s;const r={...s.ports};for(const i of e.edges){if(i.from===s.id&&i.fromPort!==void 0){const o=n.rows[s.fields.findIndex(d=>d.id===i.sourceField)];o!==void 0&&(r[i.fromPort]={x:s.width,y:o+(t.get(i.id)??0)})}if(i.to===s.id&&i.toPort!==void 0){const o=n.rows[s.fields.findIndex(d=>d.id===i.targetField)];o!==void 0&&(r[i.toPort]={x:0,y:o})}}return{...s,height:n.height,ports:r}})}}parseData(e){return on(e)}emptyData(){return Xa()}defaultHeading(){return se(this.locale).heading}statsLabels(){const e=se(this.locale);return{node:e.node,edge:e.edge}}emptyMessage(){return se(this.locale).empty}layoutOptions(){return{nodeSpacing:38,layerSpacing:128,padding:32}}matchesFilter(e){return this.#e===""?!0:[e.id,e.name,...e.fields.map(t=>t.id)].some(t=>t.toLowerCase().includes(this.#e))}relations(e,t){if(e===null||e.kind!=="node")return Y;const s=N(t.edges,e.id,"outgoing",!1),n=N(t.edges,e.id,"incoming",!1);return{nodes:new Map([...s.nodes,...n.nodes]),edges:new Set([...s.edges,...n.edges])}}renderToolbarActions(){const e=se(this.locale);return h`
      <label class="er-search">
        <span class="dpk-label">${e.search}</span>
        <input
          class="dpk-input"
          type="search"
          placeholder="table / field"
          .value=${this.#e}
          @input=${t=>{const s=t.currentTarget;s instanceof HTMLInputElement&&(this.#e=s.value.trim().toLowerCase(),this.requestUpdate())}}
        />
      </label>
    `}renderLegend(){const e=se(this.locale);return h`<div class="diagram-legend">
      <span><i class="er-swatch-added"></i>${e.legendAdded}</span>
      <span><i class="er-swatch-removed"></i>${e.legendRemoved}</span>
      <span><i class="er-swatch-changed"></i>${e.legendChanged}</span>
      <span class="er-legend-cardinality">${e.legendCardinality}</span>
    </div>`}renderCanvas(){const e=se(this.locale),t=this.visible,s=Oe(t.edges),n=t.edges.map(r=>{const i=this.edgeState(r.id),o=this.routeOf(r.id),d=re(o),l=()=>this.select({kind:"edge",id:r.id}),c=[be(r.cardinality),r.label].filter(Boolean).join(" \xB7 "),g=r.before===null?null:[be(r.before.cardinality),r.before.label].filter(Boolean).join(" \xB7 ");return I`
        <g class=${this.elementClass(i,"d-edge","er-edge",`is-${r.status}`)} data-relation=${r.id}>
          <title>${[`${r.from}.${r.sourceField} \u2192 ${r.to}.${r.targetField}`,c,g===null?null:`(${e.was(g)})`].filter(Boolean).join(" \xB7 ")}</title>
          <path class="d-edge-path" d=${d}></path>
          <path
            class="d-edge-hit"
            d=${d}
            role="button"
            tabindex="0"
            aria-label=${e.edgeLabel(r.from,r.to,c)}
            @click=${l}
            @keydown=${p=>{p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),l())}}
          ></path>
          ${o.length>0?this.#n(o,r,s.get(r.id)??0):b}
          ${this.renderEdgeCommentTrigger({kind:"edge",id:r.id},`${r.from}.${r.sourceField} \u2192 ${r.to}.${r.targetField}`,o)}
        </g>
      `});return h`${this.renderEdges(n,[])}${t.nodes.map(r=>this.#r(r,e))}`}#n(e,t,s){const n=t.before,r=(c,g)=>I`${g!=null&&g!==c?I`<tspan class="er-was">${g}</tspan> `:b}${c??b}`,i=c=>{const g=c==="start"?t.cardinality.parent:t.cardinality.child,p=n&&(c==="start"?n.cardinality.parent:n.cardinality.child),k=gn(e,c,g);return{glyph:k,content:I`
          <g class="er-end" data-end=${c} data-multiplicity=${g}>
            ${k.segments.map(([x,v])=>I`<line x1=${x.x} y1=${x.y} x2=${v.x} y2=${v.y}></line>`)}
            ${k.circle===null?b:I`<circle cx=${k.circle.x} cy=${k.circle.y} r=${Ie}></circle>`}
          </g>
          <text
            class="er-cardinality is-${t.status}"
            data-end=${c}
            text-anchor=${k.label.anchor}
            dominant-baseline="central"
            x=${k.label.x}
            y=${k.label.y+(c==="start"&&s>0?Pe:-Pe)}
          >${r(g,p)}</text>
        `}},o=i("start"),d=i("end"),l=t.label??n?.label??null;return I`
      ${o.content}${d.content}
      ${l===null?b:I`<text
              class="er-relation-label is-${t.status}"
              text-anchor=${d.glyph.label.anchor}
              x=${d.glyph.label.x}
              dominant-baseline="central"
              y=${d.glyph.label.y+Pe}
            >${r(t.label,n?.label)}</text>`}
    `}#r(e,t){const s=this.placedNode(e.id);if(!s)return b;const n=this.nodeState(e.id);return h`
      <div
        class=${this.elementClass(n,"d-node","er-table",`is-${e.status}`)}
        data-er-table=${e.id}
        data-grill-questions=${this.questionsOf(e)}
        style="left:${s.x}px; top:${s.y}px; width:${e.width}px"
      >
        <button
          type="button"
          class="er-head"
          data-table=${e.id}
          aria-pressed=${n.selected?"true":"false"}
          title=${`${e.id} / ${e.name}`}
          @click=${()=>this.select({kind:"node",id:e.id})}
        >
          ${e.status==="same"?b:h`<span class="er-mark" aria-hidden="true">${Vt[e.status]}</span>`}
          <span class="er-name">${e.id}</span>
          <span class="er-label">${e.name}</span>
          <span class="dpk-label er-status">${t.statusLabel(e.status)}</span>
        </button>
        ${this.renderCommentTrigger({kind:"node",id:e.id},`${e.id} \xB7 ${e.name}`)}
        <div class="er-fields">${e.fields.map(r=>this.#i(r,t))}</div>
      </div>
    `}#i(e,t){const s=r=>[r.type,r.keys.length===0?"\u2014":r.keys.join("+"),r.ref,r.cardinality,r.label===null?null:`\u201C${r.label}\u201D`,r.nullable?t.nullable:null].filter(Boolean).join(" \xB7 "),n=this.#e!==""&&e.id.toLowerCase().includes(this.#e);return h`
      <div
        class="er-field is-${e.status} ${n?"is-match":""}"
        data-grill-questions=${this.questionsOf(e)}
        title=${[t.statusLabel(e.status),e.id,s(e)].filter(Boolean).join(" / ")}
      >
        <span class="er-field-mark" aria-hidden="true">${Vt[e.status]}</span>
        <span class="er-key" data-empty=${e.keys.length===0?"true":"false"}
          >${e.keys.length===0?"\xB7":e.keys.map(r=>h`<span>${r}</span>`)}</span
        >
        <span class="er-field-name">${e.id}</span>
        ${e.status==="changed"&&e.before!==null?h`<span class="er-change">
                <del>− ${s(e.before)}</del>
                <ins>+ ${s(e)}</ins>
              </span>`:h`<span class="er-field-type">${s(e)}</span>`}
      </div>
    `}}const Kt=()=>{customElements.get("dpk-component-er-diagram")||customElements.define("dpk-component-er-diagram",Wt)},de=B({en:{heading:"Architecture",node:"Service",edge:"Connection",empty:"No matching services.",boundaries:"Boundaries",edgeLabel:(a,e)=>`Connection from ${a} to ${e}`,artworkCredit:a=>`Icon credit: ${a}`},ja:{heading:"\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u56F3",node:"\u30B5\u30FC\u30D3\u30B9",edge:"\u63A5\u7D9A",empty:"\u8A72\u5F53\u3059\u308B\u30B5\u30FC\u30D3\u30B9\u306F\u3042\u308A\u307E\u305B\u3093\u3002",boundaries:"\u5883\u754C",edgeLabel:(a,e)=>`${a} \u304B\u3089 ${e} \u3078\u306E\u63A5\u7D9A`,artworkCredit:a=>`\u30A2\u30A4\u30B3\u30F3\u51FA\u5178: ${a}`}}),Xt={width:220,height:112},ke=26,bn=q({src:S(u(),M(1)),alt:S(u(),M(1)),license:f(u())}),kn=q({id:S(u(),M(1)),name:S(u(),M(1)),description:f(u()),boundary:f(u()),symbol:f(u()),tags:f(z(u()),[]),artwork:f(bn),position:q({x:ae(),y:ae()}),questions:f(u())}),xn=q({id:S(u(),M(1)),label:S(u(),M(1)),kind:f(H(["internal","external"]),"internal")}),vn=q({id:S(u(),M(1)),from:S(u(),M(1)),to:S(u(),M(1)),label:f(u())}),yn=q({boundaries:f(z(xn),[]),services:z(kn),links:f(z(vn),[])}),wn=()=>({nodes:[],edges:[],boundaries:[]}),$n=a=>{const e=G(yn,a),t=new Set;for(const o of e.boundaries){if(t.has(o.id))throw new Error(`duplicate boundary id: ${o.id}`);t.add(o.id)}const s=new Set,n=e.services.map(o=>{if(s.has(o.id))throw new Error(`duplicate service id: ${o.id}`);if(s.add(o.id),o.boundary!==void 0&&!t.has(o.boundary))throw new Error(`unknown boundary: ${o.boundary}`);return{id:o.id,name:o.name,description:o.description??null,boundary:o.boundary??null,symbol:o.symbol??null,artwork:o.artwork?{src:o.artwork.src,alt:o.artwork.alt,license:o.artwork.license??null}:null,tags:o.tags,width:Xt.width,height:Xt.height,position:o.position,...o.questions===void 0?{}:{questions:o.questions}}}),r=new Set,i=e.links.map(o=>{if(r.has(o.id))throw new Error(`duplicate link id: ${o.id}`);if(r.add(o.id),!s.has(o.from))throw new Error(`unknown link source: ${o.from}`);if(!s.has(o.to))throw new Error(`unknown link target: ${o.to}`);return{id:o.id,from:o.from,to:o.to,label:o.label??null,tags:[]}});return{nodes:n,edges:i,boundaries:e.boundaries.map(o=>({id:o.id,label:o.label,kind:o.kind}))}},je={left:ke,top:ke*1.6,right:ke,bottom:ke},Sn={left:0,top:0,right:0,bottom:0},Mn=12,Jt=a=>({left:Math.min(...a.map(e=>e.position?.x??0)),top:Math.min(...a.map(e=>e.position?.y??0)),right:Math.max(...a.map(e=>(e.position?.x??0)+e.width)),bottom:Math.max(...a.map(e=>(e.position?.y??0)+e.height))}),Cn=(a,e,t,s)=>{const n=a.left-e.left<t.right+s.right&&t.left-s.left<a.right+e.right,r=a.top-e.top<t.bottom+s.bottom&&t.top-s.top<a.bottom+e.bottom;if(!n||!r)return e;const i=Math.max(t.left-a.right,a.left-t.right),o=Math.max(t.top-a.bottom,a.top-t.bottom);if(i<0&&o<0)return e;const d=(l,c,g)=>l===0?0:Math.max(0,g-Mn)*l/(l+c);return i>=o?t.left>=a.right?{...e,right:Math.min(e.right,d(e.right,s.left,i))}:{...e,left:Math.min(e.left,d(e.left,s.right,i))}:t.top>=a.bottom?{...e,bottom:Math.min(e.bottom,d(e.bottom,s.top,o))}:{...e,top:Math.min(e.top,d(e.top,s.bottom,o))}},En=(a,e)=>{const t=e.flatMap(n=>{const r=a.filter(i=>i.boundary===n.id);return r.length===0?[]:[{boundary:n,bounds:Jt(r)}]}),s=[...t.map(n=>({id:n.boundary.id,bounds:n.bounds,padding:je})),...a.filter(n=>n.boundary===null||!t.some(r=>r.boundary.id===n.boundary)).map(n=>({id:null,bounds:Jt([n]),padding:Sn}))];return t.map(({boundary:n,bounds:r})=>{const i=s.filter(l=>l.id!==n.id).map(l=>Cn(r,je,l.bounds,l.padding)).reduce((l,c)=>({left:Math.min(l.left,c.left),top:Math.min(l.top,c.top),right:Math.min(l.right,c.right),bottom:Math.min(l.bottom,c.bottom)}),je),o=r.left-i.left,d=r.top-i.top;return{boundary:n,x:o,y:d,width:r.right+i.right-o,height:r.bottom+i.bottom-d}})},qn=(a,e)=>{const t=r=>r.y+r.height/2,s=r=>r.x+r.width/2,n=(r,i,o)=>{if(o?r.y===i.y:r.x===i.x)return[r,i];if(o){const l=(r.x+i.x)/2;return[r,{x:l,y:r.y},{x:l,y:i.y},i]}const d=(r.y+i.y)/2;return[r,{x:r.x,y:d},{x:i.x,y:d},i]};return e.x>=a.x+a.width?n({x:a.x+a.width,y:t(a)},{x:e.x,y:t(e)},!0):a.x>=e.x+e.width?n({x:a.x,y:t(a)},{x:e.x+e.width,y:t(e)},!0):e.y>=a.y+a.height?n({x:s(a),y:a.y+a.height},{x:s(e),y:e.y},!1):a.y>=e.y+e.height?n({x:s(a),y:a.y},{x:s(e),y:e.y+e.height},!1):null},zn=(a,e)=>{const t=new Map(a.nodes.map(n=>[n.id,n])),s=a.routes.map(n=>{const r=e.find(l=>l.id===n.id),i=r?t.get(r.from):void 0,o=r?t.get(r.to):void 0,d=i&&o&&i!==o?qn(i,o):null;return d===null?n:{id:n.id,points:d}});return{...a,routes:s}},Dn=_`
  .arch-toggle {
    min-height: 26px;
    padding: 0 9px;
    font-size: 10.5px;
  }

  .arch-toggle[aria-pressed='true'] {
    border-color: color-mix(in srgb, var(--dpk-blue) 40%, transparent);
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  .arch-boundary {
    position: absolute;
    border: 1.5px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: color-mix(in srgb, var(--dpk-blue) 3%, transparent);
    pointer-events: none;
  }

  .arch-boundary.is-external {
    border-color: color-mix(in srgb, var(--dpk-amber) 45%, transparent);
    background: color-mix(in srgb, var(--dpk-amber) 4%, transparent);
  }

  .arch-boundary span {
    position: absolute;
    top: 9px;
    left: 14px;
    /* Stays inside its own boundary, eliding a long label, rather than running over its neighbours. */
    box-sizing: border-box;
    max-width: calc(100% - 28px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 7px;
    border-radius: 999px;
    background: var(--dpk-glass);
    backdrop-filter: blur(8px);
    font-family: var(--dpk-mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dpk-ink-faint);
  }

  .arch-service {
    display: grid;
    grid-template-columns: 38px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
    padding: 14px 13px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    text-align: left;
    overflow: hidden;
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease);
  }

  .arch-service:hover {
    border-color: var(--dpk-blue);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .arch-service.is-selected {
    border-color: var(--dpk-blue);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-blue-soft);
  }

  .arch-service.is-related {
    border-color: color-mix(in srgb, var(--dpk-green) 55%, transparent);
    background: var(--dpk-green-soft);
  }

  .arch-artwork {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }

  .arch-symbol {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-inset);
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 12px;
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
  }

  .arch-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .arch-name {
    font-size: 13px;
    font-weight: 640;
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .arch-description {
    font-size: 10px;
    line-height: 1.6;
    color: var(--dpk-ink-faint);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .arch-link .d-edge-path {
    stroke: var(--dpk-rule-strong);
    stroke-width: 1.5;
  }

  .arch-link.is-related .d-edge-path {
    stroke: var(--dpk-green);
    stroke-width: 2;
  }

  .arch-link.is-selected .d-edge-path {
    stroke: var(--dpk-blue);
    stroke-width: 2.4;
  }

  .arch-link-label {
    font-size: 9.5px;
    fill: var(--dpk-ink-faint);
    paint-order: stroke;
    stroke: var(--dpk-paper-raised);
    stroke-width: 5px;
    stroke-linejoin: round;
  }

  #arch-neutral .diagram-arrow {
    fill: var(--dpk-rule-strong);
    stroke: var(--dpk-rule-strong);
  }

  #arch-selected .diagram-arrow {
    fill: var(--dpk-blue);
    stroke: var(--dpk-blue);
  }
`,Tn=[{id:"arch-neutral"},{id:"arch-selected"}];class Zt extends ie{static{this.styles=[W,Dn]}#e=!0;parseData(e){return $n(e)}emptyData(){return wn()}defaultHeading(){return de(this.locale).heading}statsLabels(){const e=de(this.locale);return{node:e.node,edge:e.edge}}emptyMessage(){return de(this.locale).empty}get layoutMode(){return"fixed"}layoutOptions(){return{padding:40}}computePlacement(e){return zn(super.computePlacement(e),e.edges)}isEmpty(){return this.visible.nodes.length===0}contentSize(){const e=super.contentSize();if(e===null)return null;const t=this.#s();return t.length===0?e:{width:Math.max(e.width,...t.map(s=>s.x+s.width)),height:Math.max(e.height,...t.map(s=>s.y+s.height))}}initialView(){const e=this.visible.nodes.flatMap(n=>{const r=this.placedNode(n.id);return r?[r]:[]}),t=this.renderRoot.querySelector(".diagram-canvas"),s=la([...e,...this.#s()],t?.clientHeight??0);this.viewport?.reset(s??void 0)}relations(e,t){if(e===null||e.kind!=="node")return Y;const s=N(t.edges,e.id,"outgoing",!1),n=N(t.edges,e.id,"incoming",!1);return{nodes:new Map([...s.nodes,...n.nodes]),edges:new Set([...s.edges,...n.edges])}}renderToolbarActions(){const e=de(this.locale);return h`
      <button
        type="button"
        class="dpk-btn dpk-btn--ghost arch-toggle"
        data-toggle="boundaries"
        aria-pressed=${this.#e?"true":"false"}
        @click=${()=>{this.#e=!this.#e,this.requestUpdate()}}
      >
        ${e.boundaries}
      </button>
    `}#s(){const e=this.visible.nodes.flatMap(t=>{const s=this.placedNode(t.id);return s?[{...t,position:{x:s.x,y:s.y}}]:[]});return En(e,this.items().boundaries)}renderCanvas(){const e=de(this.locale),t=this.visible,s=r=>t.nodes.find(i=>i.id===r)?.name??r,n=t.edges.map(r=>{const i=this.edgeState(r.id),o=this.routeOf(r.id),d=re(o),l=()=>this.select({kind:"edge",id:r.id});return I`
        <g class=${this.elementClass(i,"d-edge","arch-link")} data-link=${r.id}>
          <title>${r.label??r.id}</title>
          <path
            class="d-edge-path"
            d=${d}
            marker-end=${`url(#${i.selected?"arch-selected":"arch-neutral"})`}
          ></path>
          <path
            class="d-edge-hit"
            d=${d}
            role="button"
            tabindex="0"
            aria-label=${e.edgeLabel(s(r.from),s(r.to))}
            @click=${l}
            @keydown=${c=>{c.key!=="Enter"&&c.key!==" "||(c.preventDefault(),l())}}
          ></path>
          ${r.label===null||o.length===0?b:this.#a(r.label,o)}
          ${this.renderEdgeCommentTrigger({kind:"edge",id:r.id},`${s(r.from)} \u2192 ${s(r.to)}${r.label===null?"":` \xB7 ${r.label}`}`,o)}
        </g>
      `});return h`
      ${this.#e?this.#s().map(r=>h`<div
                class=${`arch-boundary ${r.boundary.kind==="external"?"is-external":""}`}
                data-boundary=${r.boundary.id}
                style="left:${r.x}px; top:${r.y}px; width:${r.width}px; height:${r.height}px"
              >
                <span>${r.boundary.label}</span>
              </div>`):b}
      ${this.renderEdges(n,Tn)} ${t.nodes.map(r=>this.#t(r,e))}
    `}#a(e,t){const s=t[Math.floor(t.length/2)]??t[0];return s?I`<text class="arch-link-label" x=${s.x} y=${s.y-6}>${e}</text>`:h``}#t(e,t){const s=this.placedNode(e.id);if(!s)return b;const n=this.nodeState(e.id);return h`
      <button
        type="button"
        class=${this.elementClass(n,"d-node","arch-service")}
        data-service=${e.id}
        data-grill-questions=${this.questionsOf(e)}
        style="left:${s.x}px; top:${s.y}px; width:${e.width}px; height:${e.height}px"
        aria-pressed=${n.selected?"true":"false"}
        title=${e.description??e.name}
        @click=${()=>this.select({kind:"node",id:e.id})}
      >
        ${e.artwork===null?h`<span class="arch-symbol" aria-hidden="true">${e.symbol??e.name.slice(0,2)}</span>`:h`<img
                class="arch-artwork"
                src=${e.artwork.src}
                alt=${e.artwork.alt}
                title=${e.artwork.license===null?b:t.artworkCredit(e.artwork.license)}
              />`}
        <span class="arch-body">
          <span class="arch-name">${e.name}</span>
          ${e.description===null?b:h`<span class="arch-description">${e.description}</span>`}
        </span>
      </button>
      ${this.renderCommentTrigger({kind:"node",id:e.id},e.name,{x:s.x+e.width-20,y:s.y-14})}
    `}}const Qt=()=>{customElements.get("dpk-component-architecture-map")||customElements.define("dpk-component-architecture-map",Zt)},es=[72,52,40],ts=[0,22,10,8],An=a=>es[Math.min(a,es.length-1)]??40,ss=a=>ts[Math.min(a,ts.length-1)]??8,Ln=(a,e={})=>{const t=e.padding??40,s=a.nodes.find($=>$.parent===null);if(s===void 0)return{width:0,height:0,nodes:[],routes:[]};const n=new Map(a.nodes.map($=>[$.id,$])),r=$=>$.children.flatMap(A=>{const R=n.get(A);return R===void 0?[]:[R]}),i=new Map,o=$=>$.reduce((A,R,U)=>A+d(R)+(U===0?0:ss(R.depth)),0),d=$=>{const A=i.get($.id);if(A!==void 0)return A;const R=Math.max($.height,o(r($)));return i.set($.id,R),R},l=[],c=($,A,R)=>{if(A.length===0)return;const U=An($.node.depth);let m=$.y+$.node.height/2-o(A)/2;for(const C of A){const E=d(C),P={x:R==="right"?$.x+$.node.width+U:$.x-U-C.width,y:m+E/2-C.height/2,node:C};l.push(P),c(P,r(C),R),m+=E+ss(C.depth)}},g={x:-s.width/2,y:-s.height/2,node:s};l.push(g);const p=r(s);c(g,p.filter($=>$.side!=="left"),"right"),c(g,p.filter($=>$.side==="left"),"left");const k=Math.min(...l.map($=>$.x)),x=Math.min(...l.map($=>$.y)),v=Math.max(...l.map($=>$.x+$.node.width)),y=Math.max(...l.map($=>$.y+$.node.height)),w=t-k,D=t-x,L=new Map,T=l.map($=>{const A=L.get($.node.depth)??0;return L.set($.node.depth,A+1),{id:$.node.id,x:$.x+w,y:$.y+D,width:$.node.width,height:$.node.height,layer:$.node.depth,order:A}}),j=new Map(T.map($=>[$.id,$])),V=a.edges.flatMap($=>{const A=j.get($.from),R=j.get($.to),U=n.get($.to);if(A===void 0||R===void 0||U===void 0)return[];const m=U.side==="left",C={x:m?A.x:A.x+A.width,y:A.y+A.height/2},E={x:m?R.x+R.width:R.x,y:R.y+R.height/2};return[{id:$.id,points:[C,E]}]});return{width:v-k+t*2,height:y-x+t*2,nodes:T,routes:V}},Rn=a=>{const e=a[0],t=a.at(-1);if(e===void 0||t===void 0)return"";const s=(t.x-e.x)/2;return`M${e.x} ${e.y} C${e.x+s} ${e.y} ${t.x-s} ${t.y} ${t.x} ${t.y}`},le=B({en:{heading:"Mind map",empty:"No matching topics.",topics:"Topic",toggleOpen:(a,e)=>`Open ${e} subtopics of ${a}`,toggleClose:a=>`Collapse subtopics of ${a}`,addSubtopicButton:"+ Subtopic",commentButton:"Comment",addSubtopicAriaLabel:a=>`Subtopic of ${a}`,addSubtopicPlaceholder:"Subtopic title (Enter to add)",notRecorded:"Could not record it. Place this inside a dpk-template-* element.",addTopicTitle:"Add topic",addSummary:(a,e)=>`${a} \u203A ${e}`},ja:{heading:"\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7",empty:"\u8A72\u5F53\u3059\u308B\u30C8\u30D4\u30C3\u30AF\u306F\u3042\u308A\u307E\u305B\u3093\u3002",topics:"\u30C8\u30D4\u30C3\u30AF",toggleOpen:(a,e)=>`${a} \u306E\u30B5\u30D6\u30C8\u30D4\u30C3\u30AF ${e} \u4EF6\u3092\u3072\u3089\u304F`,toggleClose:a=>`${a} \u306E\u30B5\u30D6\u30C8\u30D4\u30C3\u30AF\u3092\u305F\u305F\u3080`,addSubtopicButton:"\uFF0B \u30B5\u30D6\u30C8\u30D4\u30C3\u30AF",commentButton:"\u30B3\u30E1\u30F3\u30C8",addSubtopicAriaLabel:a=>`${a} \u306E\u30B5\u30D6\u30C8\u30D4\u30C3\u30AF`,addSubtopicPlaceholder:"\u30B5\u30D6\u30C8\u30D4\u30C3\u30AF\u540D\uFF08Enter \u3067\u8FFD\u52A0\uFF09",notRecorded:"\u8A18\u9332\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08dpk-template-* \u8981\u7D20\u306E\u4E2D\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\uFF09\u3002",addTopicTitle:"\u30C8\u30D4\u30C3\u30AF\u3092\u8FFD\u52A0",addSummary:(a,e)=>`${a} \u203A ${e}`}}),as=Os(()=>q({id:S(u(),M(1)),label:S(u(),M(1)),description:f(u()),tags:f(z(u())),questions:f(u()),collapsed:f(we()),side:f(H(["left","right"])),children:f(z(as))})),On=q({root:as}),ns=()=>({root:null,nodes:[],edges:[]}),rs=[{fontSize:16,padding:22,height:48,min:120,max:280},{fontSize:13.5,padding:15,height:34,min:80,max:240},{fontSize:12.5,padding:12,height:28,min:56,max:220}],In=a=>rs[Math.min(a,rs.length-1)]??{fontSize:12.5,padding:12,height:28,min:56,max:220},Pn=(a,e)=>{let t=0;for(const s of a)t+=(s.codePointAt(0)??0)>=11904?e:e*.62;return t},jn=(a,e)=>{const t=In(e),s=Math.ceil(Pn(a,t.fontSize)+t.padding*2+4);return{width:Math.min(t.max,Math.max(t.min,s)),height:t.height}},Fe=a=>a.children===void 0||a.children.length===0?1:a.children.reduce((e,t)=>e+Fe(t),0),is=a=>{const e={left:0,right:0};for(const t of a)t.side!==void 0&&(e[t.side]+=Fe(t));return a.map(t=>{if(t.side!==void 0)return t.side;const s=e.right<=e.left?"right":"left";return e[s]+=Fe(t),s})},os=a=>ds(G(On,a).root),ds=(a,e=new Set)=>{const t=[],s=[],n=new Set,r=(i,o,d,l,c)=>{if(n.has(i.id))throw new Error(`duplicate topic id: ${i.id}`);if(n.add(i.id),i.side!==void 0&&d!==1)throw new Error(`side is only allowed on a main topic (a child of the root): ${i.id}`);const g=i.children??[];t.push({id:i.id,label:i.label,description:i.description??null,parent:o,depth:d,branch:l,side:c,children:g.map(k=>k.id),collapsed:i.collapsed??!1,added:e.has(i.id),tags:i.tags??[],...jn(i.label,d),...i.questions===void 0?{}:{questions:i.questions}}),o!==null&&s.push({id:i.id,from:o,to:i.id,tags:[]});const p=d===0?is(g):[];g.forEach((k,x)=>r(k,i.id,d+1,d===0?x:l,d===0?p[x]??"right":c))};return r(a,null,0,-1,null),{root:a,nodes:t,edges:s}},ls="ADD_TOPIC",Fn=Se({id:S(u(),M(1)),label:S(u(),Me(),M(1))}),Nn=a=>{const e=mt(a);return e?.length===3&&e[1]==="node"?e[2]??null:null},cs=(a,e,t)=>a.id===e?{...a,children:[...a.children??[],t]}:a.children===void 0?a:{...a,children:a.children.map(s=>cs(s,e,t))},Un=a=>{if(a.children===void 0)return a;const e=is(a.children);return{...a,children:a.children.map((t,s)=>({...t,side:e[s]??"right"}))}},Hn=(a,e,t)=>{const s=a.addTopicTitle,n=new Map(e.nodes.map(d=>[d.id,d.label])),r=new Set,i=[];let o=e.root===null?null:Un(e.root);for(const d of t){if(d.type!==ls){i.push({id:d.id,title:d.type,stale:"unsupported-action-type"});continue}const l=Nn(d.target.id),c=l===null?void 0:n.get(l),g=$e(Fn,d.payload);if(o===null||l===null||c===void 0){i.push({id:d.id,title:s,stale:"target-missing"});continue}if(!g.success||n.has(g.output.id)){i.push({id:d.id,title:s,stale:"constraint-violated"});continue}const{id:p,label:k}=g.output;o=cs(o,l,{id:p,label:k}),n.set(p,k),r.add(p),i.push({id:d.id,title:s,summary:a.addSummary(c,k),tone:"create"})}return{data:o===null||r.size===0?e:ds(o,r),results:i}},Ne=(a,e)=>{const t=new Map(a.nodes.map(r=>[r.id,r])),s=[];let n=t.get(e)?.parent??null;for(;n!==null&&!s.includes(n);)s.push(n),n=t.get(n)?.parent??null;return s},Bn=(a,e)=>{const t=new Map(a.nodes.map(r=>[r.id,r]));let s=0;const n=[...t.get(e)?.children??[]];for(let r=n.pop();r!==void 0;r=n.pop())s+=1,n.push(...t.get(r)?.children??[]);return s},_n=(a,e,t)=>{let s=null;if(e!==null){const i=a.nodes.filter(e);if(i.length===0)return ns();const o=new Map(a.nodes.map(l=>[l.id,l])),d=new Set;for(const l of i){d.add(l.id);for(const g of Ne(a,l.id))d.add(g);const c=[...l.children];for(let g=c.pop();g!==void 0;g=c.pop())d.add(g),c.push(...o.get(g)?.children??[])}s=d}const n=a.nodes.filter(i=>(s===null||s.has(i.id))&&!Ne(a,i.id).some(o=>t.has(o))),r=new Set(n.map(i=>i.id));return{...a,nodes:n,edges:a.edges.filter(i=>r.has(i.from)&&r.has(i.to))}},Gn=_`
  .branch-root {
    --mind-color: var(--dpk-ink);
    --mind-soft: var(--dpk-paper-sunken);
  }
  .branch-0 {
    --mind-color: var(--dpk-blue);
    --mind-soft: var(--dpk-blue-soft);
  }
  .branch-1 {
    --mind-color: var(--dpk-green);
    --mind-soft: var(--dpk-green-soft);
  }
  .branch-2 {
    --mind-color: var(--dpk-violet);
    --mind-soft: var(--dpk-violet-soft);
  }
  .branch-3 {
    --mind-color: var(--dpk-amber);
    --mind-soft: var(--dpk-amber-soft);
  }
  .branch-4 {
    --mind-color: var(--dpk-accent);
    --mind-soft: var(--dpk-accent-soft);
  }

  .mind-topic {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    border: 1px solid color-mix(in srgb, var(--mind-color) 45%, transparent);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-family: var(--dpk-body);
    font-size: 12.5px;
    line-height: 1.3;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease);
  }

  .mind-label {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mind-topic.depth-0 {
    padding: 0 22px;
    border: 0;
    background: linear-gradient(155deg, color-mix(in srgb, var(--dpk-ink) 88%, transparent), var(--dpk-ink));
    color: var(--dpk-paper-raised);
    font-size: 16px;
    font-weight: 680;
    letter-spacing: -0.01em;
    box-shadow:
      inset 0 1px 0 var(--dpk-highlight),
      var(--dpk-shadow-sm);
  }

  .mind-topic.depth-1 {
    padding: 0 15px;
    border-width: 1.5px;
    border-color: var(--mind-color);
    background: var(--mind-soft);
    font-size: 13.5px;
    font-weight: 620;
  }

  .mind-topic.depth-1 .mind-label {
    color: color-mix(in srgb, var(--mind-color) 70%, var(--dpk-ink));
  }

  .mind-topic:hover {
    border-color: var(--mind-color);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .mind-topic.is-selected {
    border-color: var(--mind-color);
    box-shadow:
      var(--dpk-bevel),
      var(--dpk-shadow-sm),
      0 0 0 3px color-mix(in srgb, var(--mind-color) 22%, transparent);
  }

  .mind-topic.depth-0.is-selected {
    box-shadow:
      inset 0 1px 0 var(--dpk-highlight),
      var(--dpk-shadow-sm),
      0 0 0 3px var(--dpk-blue-soft);
  }

  .mind-topic.is-related {
    border-color: var(--mind-color);
  }

  .mind-topic:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  /* Added on this page by a draft action: not authored yet. */
  .mind-topic.is-added {
    border-style: dashed;
    border-color: var(--mind-color);
  }

  .mind-actions {
    position: absolute;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    width: 220px;
  }

  .mind-actions .dpk-btn {
    padding: 3px 9px;
    font-size: 12px;
    box-shadow: var(--dpk-shadow-xs);
  }

  .mind-actions .dpk-input {
    width: 100%;
    font-size: 12.5px;
    box-shadow: var(--dpk-shadow-xs);
  }

  .mind-actions-error {
    font-size: 11.5px;
    line-height: 1.4;
    color: var(--dpk-accent);
  }

  .mind-branch {
    fill: none;
    stroke: color-mix(in srgb, var(--mind-color) 55%, transparent);
    stroke-width: 1.5;
    stroke-linecap: round;
    cursor: default;
    transition: opacity 150ms ease;
  }

  .mind-branch.depth-1 {
    stroke-width: 3;
  }

  .mind-branch.depth-2 {
    stroke-width: 2;
  }

  .mind-branch.is-related {
    stroke: var(--mind-color);
  }

  .mind-toggle {
    position: absolute;
    z-index: 1;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    transform: translate(-50%, -50%);
    border: 1.5px solid var(--mind-color);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    color: var(--mind-color);
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    opacity: 0;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    transition:
      opacity 120ms ease,
      box-shadow 160ms var(--dpk-ease);
  }

  .mind-toggle:hover,
  .mind-toggle:focus-visible {
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
  }

  /* Expanded toggles appear with their topic; folded ones always show the count. */
  .mind-topic:hover + .mind-toggle,
  .mind-toggle:hover,
  .mind-toggle:focus-visible,
  .mind-toggle.is-folded {
    opacity: 1;
  }

  .mind-toggle.is-dimmed {
    opacity: 0;
  }

  .mind-toggle.is-folded.is-dimmed {
    opacity: 0.26;
  }

  .mind-toggle:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  @media (hover: none) {
    .mind-toggle {
      opacity: 1;
    }
  }
`,Yn=5,ps=.6;class hs extends ie{static{this.styles=[W,Gn]}#e=new Set;#s=null;#a=!1;#t=null;toggle(e,t){const s=this.items().nodes.find(r=>r.id===e);if(s===void 0||s.children.length===0)return;const n=t??!this.#e.has(e);if(n!==this.#e.has(e)){if(n){this.#e.add(e);const r=this.selection;r!==null&&Ne(this.items(),r.id).includes(e)&&this.select(null)}else this.#e.delete(e);this.requestUpdate()}}get collapsed(){return[...this.#e]}parseData(e){return os(e)}emptyData(){return ns()}reduceElementActions(e,t){return Hn(le(this.locale),e,t)}defaultHeading(){return le(this.locale).heading}emptyMessage(){return le(this.locale).empty}statsText(){const e=le(this.locale),t=this.items().nodes.length,s=this.filtered().nodes.length;return s===t?`${t} ${e.topics}`:`${s} / ${t} ${e.topics}`}filtered(){const e=this.tagFilter,t=e.active.length===0?null:s=>Q(s.tags,e);return _n(this.items(),t,this.#e)}layoutSignature(){return this.filtered().nodes.map(e=>`${e.id}<${e.parent??""}:${e.side??""}`).join(",")}computePlacement(e){return Ln(e)}refreshContent(){const e=this.authoredItems();e!==this.#s&&(this.#s=e,this.#e=new Set(e.nodes.filter(t=>t.collapsed).map(t=>t.id)),this.#a=!1,this.#t=null),super.refreshContent()}initialView(){const e=this.viewport;if(e===null)return;if(this.#a){e.apply();return}this.#a=!0,e.fit();const{scale:t}=e.view();t<ps&&e.zoom(ps/t)}commentItems(){return this.items().nodes.map(e=>({value:this.commentRef("node",e.id),label:e.label}))}hasSelection(e){return e.kind==="node"&&this.items().nodes.some(t=>t.id===e.id)}relations(e,t){if(e===null||e.kind!=="node")return{nodes:new Map,edges:new Set};const s=N(t.edges,e.id,"outgoing",!0),n=N(t.edges,e.id,"incoming",!0);return{nodes:new Map([...s.nodes,...n.nodes]),edges:new Set([...s.edges,...n.edges])}}renderSelection(){return b}renderCanvas(){const e=this.filtered(),t=le(this.locale);return h`
      ${this.renderEdges(e.edges.map(s=>this.#r(s)),[])}
      ${e.nodes.map(s=>this.#i(s,t))} ${this.#c(t)}
    `}#n(e){return e===void 0||e.branch<0?"branch-root":`branch-${e.branch%Yn}`}#r(e){const t=this.items().nodes.find(n=>n.id===e.to),s=this.edgeState(e.id);return I`
      <path
        class=${this.elementClass(s,"d-edge","mind-branch",this.#n(t),`depth-${Math.min(t?.depth??1,3)}`)}
        data-branch=${e.id}
        d=${Rn(this.routeOf(e.id))}
      ></path>
    `}#i(e,t){const s=this.placedNode(e.id);if(!s)return b;const n=this.nodeState(e.id),r=this.#e.has(e.id),i=`depth-${Math.min(e.depth,3)}`;return h`
      <button
        type="button"
        class=${this.elementClass(n,"d-node","mind-topic",i,this.#n(e),r&&"is-folded",e.added&&"is-added")}
        data-topic=${e.id}
        data-grill-questions=${this.questionsOf(e)}
        style="left:${s.x}px; top:${s.y}px; width:${s.width}px; height:${s.height}px"
        aria-pressed=${n.selected?"true":"false"}
        title=${e.description??e.label}
        @click=${()=>this.select({kind:"node",id:e.id})}
      >
        <span class="mind-label">${e.label}</span>
      </button>
      ${e.depth===0||e.children.length===0?b:this.#o(e,s,r,n.dimmed,t)}
    `}#o(e,t,s,n,r){const i=s?Bn(this.items(),e.id):0,o=e.side==="left"?t.x:t.x+t.width,d=s?r.toggleOpen(e.label,i):r.toggleClose(e.label);return h`
      <button
        type="button"
        class=${this.elementClass({selected:!1,related:!1,dimmed:n,depth:null},"mind-toggle",this.#n(e),s&&"is-folded")}
        data-toggle=${e.id}
        style="left:${o}px; top:${t.y+t.height/2}px"
        aria-expanded=${s?"false":"true"}
        aria-label=${d}
        title=${d}
        @click=${l=>{l.stopPropagation(),this.toggle(e.id)}}
      >
        ${s?i:"\u2212"}
      </button>
    `}#c(e){const t=this.selection;if(t===null||t.kind!=="node")return b;const s=this.items().nodes.find(i=>i.id===t.id),n=this.placedNode(t.id);if(s===void 0||n===void 0)return b;const r=this.#t?.parent===s.id?this.#t:null;return h`
      <div
        class="mind-actions"
        data-for=${s.id}
        style="left:${this.#u(s,n)}px; top:${n.y+n.height+8}px"
        @click=${i=>i.stopPropagation()}
      >
        ${r===null?h`
                <button type="button" class="dpk-btn" data-action="add" @click=${()=>this.#l(s.id)}>
                  ${e.addSubtopicButton}
                </button>
                <button
                  type="button"
                  class="dpk-btn"
                  data-action="comment"
                  @click=${()=>this.requestElementComment("node",s.id)}
                >
                  ${e.commentButton}
                </button>
              `:h`
                <input
                  class="dpk-input"
                  aria-label="${e.addSubtopicAriaLabel(s.label)}"
                  placeholder="${e.addSubtopicPlaceholder}"
                  .value=${r.label}
                  @input=${i=>{const o=i.currentTarget;o instanceof HTMLInputElement&&(this.#t={...r,label:o.value,failed:!1})}}
                  @keydown=${i=>this.#p(i,s.id)}
                />
                ${r.failed?h`<span class="mind-actions-error" role="alert">${e.notRecorded}</span>`:b}
              `}
      </div>
    `}#u(e,t){return e.side==="left"?t.x+t.width-220:t.x}#l(e){this.#t={parent:e,label:"",failed:!1},this.requestUpdate(),this.updateComplete.then(()=>this.renderRoot.querySelector(".mind-actions input")?.focus())}#p(e,t){if(e.isComposing)return;if(e.key==="Escape"){e.preventDefault(),this.#t=null,this.requestUpdate();return}if(e.key!=="Enter")return;e.preventDefault();const s=this.#t?.label.trim()??"";if(s.length===0)return;const n=Qe(`topic ${s}`,this.items().nodes.map(i=>i.id));if(!this.dispatchElementAction(ls,["node",t],{id:n,label:s})){this.#t={parent:t,label:s,failed:!0},this.requestUpdate();return}this.#t=null,this.#e.delete(t),this.select({kind:"node",id:n}),this.requestUpdate()}}const us=()=>{customElements.get("dpk-component-mind-map")||customElements.define("dpk-component-mind-map",hs)},ce=B({en:{heading:"Kanban",empty:"No columns.",cards:"Card",notRecorded:"Could not record it. Place this inside a dpk-template-* element.",wipLimit:a=>`WIP limit ${a}`,addCardButton:"+ Card",addCardAriaLabel:a=>`Card to add to ${a}`,addCardPlaceholder:"Card title (Enter to add)",addCardTitle:"Add card",moveCardTitle:"Move card",addSummary:(a,e)=>`${a} \u203A ${e}`,moveSummarySame:(a,e)=>`${a}: reorder within ${e}`,moveSummaryAcross:(a,e,t)=>`${a}: ${e} \u2192 ${t}`},ja:{heading:"\u30AB\u30F3\u30D0\u30F3",empty:"\u5217\u304C\u3042\u308A\u307E\u305B\u3093\u3002",cards:"\u30AB\u30FC\u30C9",notRecorded:"\u8A18\u9332\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08dpk-template-* \u8981\u7D20\u306E\u4E2D\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\uFF09\u3002",wipLimit:a=>`WIP \u4E0A\u9650 ${a}`,addCardButton:"\uFF0B \u30AB\u30FC\u30C9",addCardAriaLabel:a=>`${a} \u306B\u8FFD\u52A0\u3059\u308B\u30AB\u30FC\u30C9`,addCardPlaceholder:"\u30AB\u30FC\u30C9\u540D\uFF08Enter \u3067\u8FFD\u52A0\uFF09",addCardTitle:"\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0",moveCardTitle:"\u30AB\u30FC\u30C9\u3092\u79FB\u52D5",addSummary:(a,e)=>`${a} \u203A ${e}`,moveSummarySame:(a,e)=>`${a}: ${e} \u5185\u3067\u4E26\u3079\u66FF\u3048`,moveSummaryAcross:(a,e,t)=>`${a}: ${e} \u2192 ${t}`}}),Vn=q({id:S(u(),M(1)),title:S(u(),M(1)),description:f(u()),tags:f(z(u())),assignee:f(u()),questions:f(u())}),Wn=["gray","blue","green","amber","violet","red"],Kn=q({id:S(u(),M(1)),label:S(u(),M(1)),description:f(u()),color:f(H(Wn)),limit:f(S(ae(),Ps(),Is(1))),cards:f(z(Vn))}),Xn=q({columns:z(Kn)}),Jn=()=>({columns:[]}),ms=a=>{const e=G(Xn,a),t=new Set,s=new Set;return{columns:e.columns.map(r=>{if(t.has(r.id))throw new Error(`duplicate column id: ${r.id}`);return t.add(r.id),{id:r.id,label:r.label,description:r.description??null,color:r.color??null,limit:r.limit??null,cards:(r.cards??[]).map(i=>{if(s.has(i.id))throw new Error(`duplicate card id: ${i.id}`);return s.add(i.id),{id:i.id,title:i.title,description:i.description??null,tags:i.tags??[],assignee:i.assignee??null,...i.questions===void 0?{}:{questions:i.questions},column:r.id,change:null}})}})}},xe=(a,e)=>a.columns.flatMap(t=>t.cards).find(t=>t.id===e),pe=a=>a.columns.flatMap(e=>e.cards),Zn=(a,e)=>e===null?a:{columns:a.columns.map(t=>({...t,cards:t.cards.filter(e)}))},Qn=(a,e,t,s)=>{const n=xe(a,e);if(n===void 0||n.column!==t)return!1;if(s===e)return!0;const r=a.columns.find(o=>o.id===t)?.cards??[],i=r.findIndex(o=>o.id===e);return(r[i+1]?.id??null)===s},gs="ADD_CARD",fs="MOVE_CARD",er=Se({id:S(u(),M(1)),title:S(u(),Me(),M(1))}),tr=Se({column:S(u(),M(1)),before:js(S(u(),M(1)))}),bs=(a,e)=>{const t=mt(a);return t?.length===3&&t[1]===e?t[2]??null:null},sr=(a,e)=>({columns:a.columns.map(t=>t.cards.some(s=>s.id===e)?{...t,cards:t.cards.filter(s=>s.id!==e)}:t)}),ks=(a,e,t)=>({columns:a.columns.map(s=>{if(s.id!==t.column)return s;const n={...e,column:s.id},r=t.before===null?-1:s.cards.findIndex(i=>i.id===t.before);return{...s,cards:r<0?[...s.cards,n]:[...s.cards.slice(0,r),n,...s.cards.slice(r)]}})}),ar=(a,e,t)=>{const s=a.addCardTitle,n=bs(t.target.id,"column"),r=e.columns.find(d=>d.id===n);if(r===void 0)return{data:e,result:{id:t.id,title:s,stale:"target-missing"}};const i=$e(er,t.payload);if(!i.success||xe(e,i.output.id)!==void 0)return{data:e,result:{id:t.id,title:s,stale:"constraint-violated"}};const o={id:i.output.id,title:i.output.title,description:null,tags:[],assignee:null,column:r.id,change:"added"};return{data:ks(e,o,{column:r.id,before:null}),result:{id:t.id,title:s,summary:a.addSummary(r.label,o.title),tone:"create"}}},nr=(a,e,t)=>{const s=a.moveCardTitle,n=bs(t.target.id,"card"),r=n===null?void 0:xe(e,n);if(r===void 0)return{data:e,result:{id:t.id,title:s,stale:"target-missing"}};const i=$e(tr,t.payload),o=e.columns.find(k=>k.id===r.column),d=i.success?e.columns.find(k=>k.id===i.output.column):void 0,l=i.success?i.output.before:null,c=l===null||l!==r.id&&d?.cards.some(k=>k.id===l)===!0;if(!i.success||o===void 0||d===void 0||!c)return{data:e,result:{id:t.id,title:s,stale:"constraint-violated"}};const g={...r,change:r.change??"moved"},p=o.id===d.id?a.moveSummarySame(r.title,d.label):a.moveSummaryAcross(r.title,o.label,d.label);return{data:ks(sr(e,r.id),g,{column:d.id,before:l}),result:{id:t.id,title:s,summary:p,tone:"move"}}},rr=(a,e,t)=>{let s=e;const n=[];for(const r of t){const i=r.type===gs?ar(a,s,r):r.type===fs?nr(a,s,r):{data:s,result:{id:r.id,title:r.type,stale:"unsupported-action-type"}};s=i.data,n.push(i.result)}return{data:s,results:n}},ir=_`
  .kanban-board {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    width: max-content;
    padding: 18px;
  }

  .kanban-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 264px;
    padding: 10px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-sunken);
    box-shadow: inset 0 1px 3px var(--dpk-shade-1);
    cursor: default;
    transition:
      border-color 150ms var(--dpk-ease),
      box-shadow 150ms var(--dpk-ease);
  }

  .kanban-column.is-selected {
    border-color: color-mix(in srgb, var(--dpk-blue) 55%, transparent);
    box-shadow:
      inset 0 1px 3px var(--dpk-shade-1),
      inset 0 0 0 2px color-mix(in srgb, var(--dpk-blue) 40%, transparent);
  }

  .kanban-column.is-drop-target {
    border-color: var(--dpk-blue);
    background: color-mix(in srgb, var(--dpk-blue-soft) 60%, var(--dpk-paper-sunken));
    box-shadow:
      inset 0 1px 3px var(--dpk-shade-1),
      inset 0 0 0 2px color-mix(in srgb, var(--dpk-blue) 30%, transparent);
  }

  .kanban-column-head {
    position: relative;
    display: flex;
    align-items: center;
  }

  .kanban-column-title {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 2px 34px 2px 2px;
    border: 0;
    border-radius: var(--dpk-radius-xs);
    background: none;
    color: var(--dpk-ink);
    font-family: var(--dpk-body);
    font-size: 13px;
    font-weight: 650;
    letter-spacing: -0.01em;
    text-align: left;
    cursor: pointer;
  }

  .kanban-column-title:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .kanban-column-label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* An authored color marks the heading, not the cards: the status reads at a glance. */
  .kanban-column[data-color='gray'] {
    --kanban-tone: var(--dpk-ink-soft);
  }

  .kanban-column[data-color='blue'] {
    --kanban-tone: var(--dpk-blue);
  }

  .kanban-column[data-color='green'] {
    --kanban-tone: var(--dpk-green);
  }

  .kanban-column[data-color='amber'] {
    --kanban-tone: var(--dpk-amber);
  }

  .kanban-column[data-color='violet'] {
    --kanban-tone: var(--dpk-violet);
  }

  .kanban-column[data-color='red'] {
    --kanban-tone: var(--dpk-accent);
  }

  .kanban-column[data-color] .kanban-column-label {
    padding: 2px 9px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--kanban-tone) 14%, transparent);
    color: var(--kanban-tone);
  }

  .kanban-count {
    flex: none;
    padding: 1px 7px;
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink-soft);
    font-family: var(--dpk-mono);
    font-size: 11px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
  }

  /* Over its WIP limit: the column asks for attention, not the cards. */
  .kanban-column.is-over {
    border-color: color-mix(in srgb, var(--dpk-accent) 55%, transparent);
  }

  .kanban-column.is-over .kanban-count {
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent);
  }

  .kanban-column-head > .diagram-comment-trigger {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .kanban-column-description {
    margin: 0 2px;
    color: var(--dpk-ink-soft);
    font-size: 11.5px;
    line-height: 1.45;
  }

  .kanban-cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 44px;
  }

  .kanban-card-slot {
    position: relative;
  }

  .kanban-card {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 9px 34px 9px 11px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-family: var(--dpk-body);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: grab;
    transition:
      border-color 150ms var(--dpk-ease),
      box-shadow 150ms var(--dpk-ease),
      opacity 150ms var(--dpk-ease),
      transform 150ms var(--dpk-ease);
  }

  .kanban-card:hover {
    border-color: var(--dpk-rule-hover);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    transform: translateY(-1px);
  }

  .kanban-card.is-selected {
    border-color: color-mix(in srgb, var(--dpk-blue) 55%, transparent);
    box-shadow:
      var(--dpk-bevel),
      inset 0 0 0 2px color-mix(in srgb, var(--dpk-blue) 45%, transparent),
      var(--dpk-shadow-xs);
  }

  .kanban-card:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .kanban-card.is-dragging {
    opacity: 0.45;
    transform: rotate(-1.5deg) scale(0.98);
    box-shadow: var(--dpk-shadow-sm);
  }

  /* Changed on this page by a draft action: not authored yet. */
  .kanban-card.is-added {
    border-style: dashed;
    border-color: var(--dpk-green);
    background: linear-gradient(90deg, var(--dpk-green-soft), transparent 60%), var(--dpk-paper-raised);
  }

  .kanban-card.is-moved {
    border-left: 3px solid var(--dpk-blue);
    background: linear-gradient(90deg, var(--dpk-blue-soft), transparent 60%), var(--dpk-paper-raised);
  }

  .kanban-card-title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.005em;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  .kanban-card-description {
    display: -webkit-box;
    overflow: hidden;
    color: var(--dpk-ink-soft);
    font-size: 11.5px;
    line-height: 1.45;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow-wrap: anywhere;
  }

  .kanban-card-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
  }

  .kanban-tag {
    padding: 1px 7px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-sunken);
    color: var(--dpk-ink-soft);
    font-size: 10.5px;
  }

  .kanban-assignee {
    margin-left: auto;
    color: var(--dpk-ink-faint);
    font-size: 11px;
  }

  .kanban-assignee::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 4px;
    border-radius: 999px;
    background: var(--dpk-ink-faint);
    vertical-align: middle;
  }

  .kanban-card-slot > .diagram-comment-trigger {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;
  }

  .kanban-error {
    margin: 6px 0 0;
    padding: 4px 7px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-accent-soft);
    color: var(--dpk-accent);
    font-size: 11.5px;
    line-height: 1.4;
  }

  /* Takes no room of its own, so the cards do not jump while dragging. */
  .kanban-drop-marker {
    height: 3px;
    margin: -5.5px 0;
    border-radius: 2px;
    background: var(--dpk-blue);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--dpk-blue) 22%, transparent);
    animation: dpk-drop-in 140ms var(--dpk-ease-spring) backwards;
  }

  @keyframes dpk-drop-in {
    from {
      opacity: 0;
      transform: scaleX(0.4);
    }
  }

  .kanban-add {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .kanban-add-button {
    padding: 6px 8px;
    border: 1px dashed var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: none;
    color: var(--dpk-ink-soft);
    font-family: var(--dpk-body);
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    transition:
      border-color 140ms var(--dpk-ease),
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease);
  }

  .kanban-add-button:hover,
  .kanban-add-button:focus-visible {
    border-color: color-mix(in srgb, var(--dpk-blue) 45%, var(--dpk-rule-strong));
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    outline: none;
  }

  .kanban-add .dpk-input {
    width: 100%;
    font-size: 12.5px;
  }
`;class xs extends De{static{this.styles=[W,ir]}#e=null;#s=null;#a=null;#t=null;#n=null;parseData(e){return ms(e)}emptyData(){return Jn()}reduceElementActions(e,t){return rr(ce(this.locale),e,t)}defaultHeading(){return ce(this.locale).heading}shellClass(){return"kanban"}emptyMessage(){return ce(this.locale).empty}commentItems(){const e=this.items();return[...e.columns.map(t=>({value:this.commentRef("column",t.id),label:t.label})),...pe(e).map(t=>({value:this.commentRef("card",t.id),label:t.title}))]}hasSelection(e){const t=this.items();return e.kind==="column"?t.columns.some(s=>s.id===e.id):xe(t,e.id)!==void 0}tagItems(){return pe(this.items()).map(e=>e.tags)}statsText(){const e=ce(this.locale),t=pe(this.items()).length,s=pe(this.#r()).length;return s===t?`${t} ${e.cards}`:`${s} / ${t} ${e.cards}`}isEmpty(){return this.items().columns.length===0}viewAlign(){return"start"}contentSize(){if(this.isEmpty())return null;const e=this.renderRoot.querySelector(".kanban-board");return{width:e?.offsetWidth??0,height:e?.offsetHeight??0}}refreshContent(){const e=this.authoredItems();e!==this.#e&&(this.#e=e,this.#s=null,this.#a=null)}renderCanvas(){const e=this.#r(),t=new Map(this.items().columns.map(s=>[s.id,s.cards.length]));return h`<div class="kanban-board">
      ${J(e.columns,s=>s.id,s=>this.#o(s,t.get(s.id)??0))}
    </div>`}#r(){const e=this.tagFilter;return Zn(this.items(),e.active.length===0?null:t=>Q(t.tags,e))}#i(e,t){const s=this.selection;return s!==null&&s.kind===e&&s.id===t}#o(e,t){const s=ce(this.locale),n=e.limit!==null&&t>e.limit,r=this.#n?.column===e.id?this.#n:null;return h`
      <section
        class=${ee("kanban-column",n&&"is-over",this.#i("column",e.id)&&"is-selected",r!==null&&"is-drop-target")}
        data-column=${e.id}
        data-color=${e.color??b}
        aria-label=${e.label}
      >
        <div class="kanban-column-head">
          <button
            type="button"
            class="kanban-column-title"
            aria-pressed=${this.#i("column",e.id)?"true":"false"}
            title=${e.description??e.label}
            @click=${()=>this.select({kind:"column",id:e.id})}
          >
            <span class="kanban-column-label">${e.label}</span>
            <span class="kanban-count" title=${e.limit===null?b:s.wipLimit(e.limit)}>
              ${e.limit===null?t:`${t} / ${e.limit}`}
            </span>
          </button>
          ${this.renderCommentTrigger({kind:"column",id:e.id},e.label)}
        </div>
        ${e.description===null?b:h`<p class="kanban-column-description">${e.description}</p>`}
        <div
          class="kanban-cards"
          @dragover=${i=>this.#d(i,e.id)}
          @dragleave=${i=>this.#m(i)}
          @drop=${i=>this.#g(i,e.id)}
        >
          ${J(e.cards,i=>i.id,i=>h`${r?.before===i.id?this.#c():b}${this.#u(i,s)}`)}
          ${r!==null&&r.before===null?this.#c():b}
        </div>
        ${this.#l(e,s)}
      </section>
    `}#c(){return h`<div class="kanban-drop-marker" aria-hidden="true"></div>`}#u(e,t){const s=this.#i("card",e.id);return h`
      <div class="kanban-card-slot">
        <div
          role="button"
          tabindex="0"
          draggable="true"
          class=${ee("kanban-card",s&&"is-selected",e.change==="added"&&"is-added",e.change==="moved"&&"is-moved",this.#t===e.id&&"is-dragging")}
          data-card=${e.id}
          data-grill-questions=${this.questionsOf(e)}
          title=${e.description??e.title}
          aria-pressed=${s?"true":"false"}
          @click=${()=>this.select({kind:"card",id:e.id})}
          @keydown=${n=>this.#p(n,e.id)}
          @dragstart=${n=>this.#f(n,e.id)}
          @dragend=${()=>this.#b()}
        >
          <span class="kanban-card-title">${e.title}</span>
          ${e.description===null?b:h`<span class="kanban-card-description">${e.description}</span>`}
          ${e.tags.length===0&&e.assignee===null?b:h`<span class="kanban-card-meta">
                  ${e.tags.map(n=>h`<span class="kanban-tag">${n}</span>`)}
                  ${e.assignee===null?b:h`<span class="kanban-assignee">${e.assignee}</span>`}
                </span>`}
        </div>
        ${this.renderCommentTrigger({kind:"card",id:e.id},e.title)}
        ${this.#a===e.id?h`<p class="kanban-error" role="alert">${t.notRecorded}</p>`:b}
      </div>
    `}#l(e,t){const s=this.#s?.column===e.id?this.#s:null;return h`<div class="kanban-add">
      ${s===null?h`<button
              type="button"
              class="kanban-add-button"
              data-action="add"
              @click=${()=>this.#v(e.id)}
            >
              ${t.addCardButton}
            </button>`:h`
              <input
                class="dpk-input"
                aria-label="${t.addCardAriaLabel(e.label)}"
                placeholder="${t.addCardPlaceholder}"
                .value=${s.title}
                @input=${n=>{const r=n.currentTarget;r instanceof HTMLInputElement&&(this.#s={...s,title:r.value,failed:!1})}}
                @keydown=${n=>this.#$(n,e.id)}
              />
              ${s.failed?h`<span class="kanban-error" role="alert">${t.notRecorded}</span>`:b}
            `}
    </div>`}#p(e,t){e.target!==e.currentTarget||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.select({kind:"card",id:t}))}#h(e,t){const s=this.dispatchElementAction(fs,["card",e],{column:t.column,before:t.before});this.#a=s?null:e,this.select({kind:"card",id:e}),this.requestUpdate()}#f(e,t){this.#t=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t)),this.requestUpdate()}#d(e,t){if(this.#t===null)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move");const s=this.#k(e,t);this.#n?.column===s.column&&this.#n.before===s.before||(this.#n=s,this.requestUpdate())}#m(e){const t=e.currentTarget;!(t instanceof HTMLElement)||e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this.#n=null,this.requestUpdate())}#g(e,t){const s=this.#t;if(s===null)return;e.preventDefault();const n=this.#k(e,t);this.#b(),Qn(this.items(),s,n.column,n.before)||this.#h(s,n)}#b(){this.#t===null&&this.#n===null||(this.#t=null,this.#n=null,this.requestUpdate())}#k(e,t){const s=e.currentTarget,r=(s instanceof HTMLElement?[...s.querySelectorAll("[data-card]")]:[]).find(i=>{if(i.dataset.card===this.#t)return!1;const o=i.getBoundingClientRect();return o.top+o.height/2>e.clientY});return{column:t,before:r?.dataset.card??null}}#v(e){this.#s={column:e,title:"",failed:!1},this.requestUpdate(),this.updateComplete.then(()=>this.renderRoot.querySelector(`[data-column="${CSS.escape(e)}"] .kanban-add input`)?.focus({preventScroll:!0}))}#$(e,t){if(e.isComposing)return;if(e.key==="Escape"){e.preventDefault(),this.#s=null,this.requestUpdate();return}if(e.key!=="Enter")return;e.preventDefault();const s=this.#s?.title.trim()??"";if(s.length===0)return;const n=[...this.items().columns.map(i=>i.id),...pe(this.items()).map(i=>i.id)],r=Qe(`card ${s}`,n);if(!this.dispatchElementAction(gs,["column",t],{id:r,title:s})){this.#s={column:t,title:s,failed:!0},this.requestUpdate();return}this.#s=null,this.select({kind:"card",id:r}),this.requestUpdate()}}const vs=()=>{customElements.get("dpk-component-kanban")||customElements.define("dpk-component-kanban",xs)},or=B({en:{heading:"Formal spec",empty:"No claims.",dataError:"Could not load the specification data.",claims:a=>`${a} ${a===1?"claim":"claims"}`,subjects:"For",premises:"Given",conclusions:"Then",noPremises:"None \u2014 holds unconditionally",showDetails:"Show the details of this claim",hideDetails:"Hide the details of this claim",examples:"Examples",notClaimed:"Not claimed",usesTerms:"Terms",source:"Source",proved:"Proved",conditional:"Proved under assumptions",bounded:"Checked within bounds",incomplete:"Incomplete",provedDetail:"Machine-checked to hold in every case.",conditionalDetail:"Holds in every case, provided the assumptions are true.",boundedDetail:"Every case within the bound was checked; nothing outside it was.",incompleteDetail:"The proof is not finished. Nothing here is guaranteed yet.",planned:"Planned",plannedDetail:"Not proved yet: a property proposed to be proved, for agreement before the work starts.",target:"About",noClaims:"No claims yet.",assumptions:"Assumes",bound:"Checked within",gaps:"Unfinished",commentOn:a=>`Comment on ${a}`,sendFailed:"Could not send. Place this inside a dpk-template-* element."},ja:{heading:"\u5F62\u5F0F\u4ED5\u69D8",empty:"\u4E3B\u5F35\u304C\u3042\u308A\u307E\u305B\u3093\u3002",dataError:"\u4ED5\u69D8\u306E\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",claims:a=>`${a} \u4EF6\u306E\u4E3B\u5F35`,subjects:"\u5165\u529B\u30FB\u72B6\u6CC1",premises:"\u524D\u63D0",conclusions:"\u7D50\u8AD6",noPremises:"\u306A\u3057 \u2014 \u7121\u6761\u4EF6\u306B\u6210\u308A\u7ACB\u3064",showDetails:"\u3053\u306E\u4E3B\u5F35\u306E\u8A73\u7D30\u3092\u958B\u304F",hideDetails:"\u3053\u306E\u4E3B\u5F35\u306E\u8A73\u7D30\u3092\u9589\u3058\u308B",examples:"\u5177\u4F53\u4F8B",notClaimed:"\u4E3B\u5F35\u3057\u3066\u3044\u306A\u3044\u3053\u3068",usesTerms:"\u4F7F\u3046\u7528\u8A9E",source:"\u51FA\u5178",proved:"\u8A3C\u660E\u6E08\u307F",conditional:"\u4EEE\u5B9A\u3064\u304D\u3067\u8A3C\u660E\u6E08\u307F",bounded:"\u7BC4\u56F2\u3092\u9650\u3063\u3066\u78BA\u8A8D",incomplete:"\u672A\u5B8C\u6210",provedDetail:"\u3059\u3079\u3066\u306E\u5834\u5408\u306B\u6210\u308A\u7ACB\u3064\u3053\u3068\u304C\u6A5F\u68B0\u7684\u306B\u78BA\u304B\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002",conditionalDetail:"\u4EEE\u5B9A\u304C\u6B63\u3057\u3051\u308C\u3070\u3001\u3059\u3079\u3066\u306E\u5834\u5408\u306B\u6210\u308A\u7ACB\u3061\u307E\u3059\u3002",boundedDetail:"\u7BC4\u56F2\u5185\u306F\u3059\u3079\u3066\u306E\u5834\u5408\u3092\u78BA\u304B\u3081\u307E\u3057\u305F\u3002\u7BC4\u56F2\u306E\u5916\u306F\u78BA\u304B\u3081\u3066\u3044\u307E\u305B\u3093\u3002",incompleteDetail:"\u8A3C\u660E\u304C\u7D42\u308F\u3063\u3066\u3044\u307E\u305B\u3093\u3002\u3053\u306E\u4E3B\u5F35\u306F\u307E\u3060\u4FDD\u8A3C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",planned:"\u8A3C\u660E\u4E88\u5B9A",plannedDetail:"\u307E\u3060\u8A3C\u660E\u3057\u3066\u3044\u307E\u305B\u3093\u3002\u3053\u308C\u304B\u3089\u8A3C\u660E\u3059\u308B\u6027\u8CEA\u3068\u3057\u3066\u3001\u5408\u610F\u3092\u3068\u308B\u305F\u3081\u306E\u6848\u3067\u3059\u3002",target:"\u5BFE\u8C61",noClaims:"\u307E\u3060\u4E3B\u5F35\u304C\u3042\u308A\u307E\u305B\u3093\u3002",assumptions:"\u4EEE\u5B9A",bound:"\u78BA\u8A8D\u3057\u305F\u7BC4\u56F2",gaps:"\u7D42\u308F\u3063\u3066\u3044\u306A\u3044\u90E8\u5206",commentOn:a=>`${a}\u306B\u30B3\u30E1\u30F3\u30C8`,sendFailed:"\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08dpk-template-* \u8981\u7D20\u306E\u4E2D\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\uFF09\u3002"}}),F=S(u(),Me(),M(1)),he=q({id:ne,text:F}),dr=Xe("kind",[q({kind:Z("proved"),assumptions:f(z(F))}),q({kind:Z("bounded"),bound:F}),q({kind:Z("incomplete"),gaps:f(z(F))}),q({kind:Z("planned")})]),lr=q({id:ne,target:f(ne),statement:F,subjects:f(z(he)),premises:f(z(he)),conclusions:S(z(he),M(1,"a claim needs at least one conclusion")),examples:f(z(he)),notClaimed:f(z(he)),assurance:dr,source:f(q({tool:f(F),ref:F}))}),cr=q({id:ne,name:F,meaning:F}),pr=q({id:ne,name:F,code:f(F),summary:f(F)}),hr=q({targets:f(z(pr)),terms:f(z(cr)),claims:z(lr)}),ur=()=>({targets:[],terms:[],claims:[]}),mr=/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,gr=(a,e)=>{const t=[];let s=0;for(const n of a.matchAll(mr)){const r=(n[1]??"").trim(),i=e.get(r);if(i===void 0)throw new Error(`unknown term reference: [[${r}]]`);n.index>s&&t.push({kind:"text",text:a.slice(s,n.index)}),t.push({kind:"term",id:r,label:n[2]?.trim()||i}),s=n.index+n[0].length}return s<a.length&&t.push({kind:"text",text:a.slice(s)}),t},Ue=a=>a.map(e=>e.kind==="text"?e.text:e.label).join(""),fr=a=>[...new Set(a.flatMap(e=>e.flatMap(t=>t.kind==="term"?[t.id]:[])))],ve=(a,e)=>{const t=new Set;for(const s of a){if(t.has(s))throw new Error(`duplicate ${e} id: ${s}`);t.add(s)}},ys=a=>{const e=G(hr,a),t=e.targets??[],s=e.terms??[];ve(t.map(c=>c.id),"target"),ve(s.map(c=>c.id),"term"),ve(e.claims.map(c=>c.id),"claim");const n=new Map(s.map(c=>[c.id,c.name])),r=c=>gr(c,n),i=s.map(c=>({id:c.id,name:c.name,meaning:r(c.meaning)})),o=t.map(c=>({id:c.id,name:c.name,code:c.code??null,summary:c.summary===void 0?null:r(c.summary)})),d=new Set(o.map(c=>c.id)),l=e.claims.map(c=>{if(c.target!==void 0&&!d.has(c.target))throw new Error(`unknown target (in claim ${c.id}): ${c.target}`);const g=T=>(T??[]).map(j=>({id:j.id,text:r(j.text)})),p=g(c.subjects),k=g(c.premises),x=g(c.conclusions),v=g(c.examples),y=g(c.notClaimed),w=[...p,...k,...x,...v,...y];ve(w.map(T=>T.id),`clause (in claim ${c.id})`);const D=br(c.assurance,r),L=r(c.statement);return{id:c.id,target:c.target??null,statement:L,subjects:p,premises:k,conclusions:x,examples:v,notClaimed:y,assurance:D,source:c.source===void 0?null:{tool:c.source.tool??null,ref:c.source.ref},terms:fr([L,...w.map(T=>T.text),...kr(D)])}});return{targets:o,terms:i,claims:l}},br=(a,e)=>{switch(a.kind){case"proved":return{kind:"proved",assumptions:(a.assumptions??[]).map(e)};case"bounded":return{kind:"bounded",bound:e(a.bound)};case"incomplete":return{kind:"incomplete",gaps:(a.gaps??[]).map(e)};case"planned":return{kind:"planned"}}},kr=a=>{switch(a.kind){case"proved":return a.assumptions;case"bounded":return[a.bound];case"incomplete":return a.gaps;case"planned":return[]}},xr=a=>{const e={proved:0,conditional:0,bounded:0,incomplete:0,planned:0};for(const t of a.claims)e[ws(t.assurance)?"conditional":t.assurance.kind]+=1;return e},ws=a=>a.kind==="proved"&&a.assumptions.length>0,$s=a=>{const e=new Map(a.targets.map(s=>[s.id,s])),t=new Map;for(const s of a.claims)t.set(s.target,[...t.get(s.target)??[],s]);for(const s of a.targets)t.has(s.id)||t.set(s.id,[]);return[...t].map(([s,n])=>({target:s===null?null:e.get(s)??null,claims:n}))},ue=(a,e)=>e.length===0?{itemsLabel:null,items:e}:{itemsLabel:a,items:e},He=(a,e)=>{switch(e.kind){case"proved":return ws(e)?{tone:"caveat",label:a.conditional,detail:a.conditionalDetail,...ue(a.assumptions,e.assumptions)}:{tone:"sound",label:a.proved,detail:a.provedDetail,...ue("",[])};case"bounded":return{tone:"caveat",label:a.bounded,detail:a.boundedDetail,...ue(a.bound,[e.bound])};case"incomplete":return{tone:"unsound",label:a.incomplete,detail:a.incompleteDetail,...ue(a.gaps,e.gaps)};case"planned":return{tone:"planned",label:a.planned,detail:a.plannedDetail,...ue("",[])}}},vr=a=>{switch(a.kind){case"target":return["target",a.target];case"claim":return["claim",a.claim];case"clause":return["clause",a.claim,a.clause]}},yr=a=>[...a.subjects,...a.premises,...a.conclusions,...a.examples,...a.notClaimed],Ss=32,ye=a=>{const e=Ue(a.statement);return e.length<=Ss?e:`${e.slice(0,Ss).trimEnd()}\u2026`},wr=a=>[{target:{kind:"claim",claim:a.id},label:ye(a)},...yr(a).map(e=>({target:{kind:"clause",claim:a.id,clause:e.id},label:`${ye(a)} \u203A ${Ue(e.text)}`}))],$r=a=>$s(a).flatMap(e=>[...e.target===null?[]:[{target:{kind:"target",target:e.target.id},label:e.target.name}],...e.claims.flatMap(wr)]),Sr=[Be,_e,Ge,_`
    :host {
      display: block;
      container-type: inline-size;
      color: var(--dpk-ink);
      font-family: var(--dpk-body);
    }

    .spec {
      display: grid;
      gap: 14px;
    }

    /* ----------------------------------------------------------- toolbar */

    .spec-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 4px 10px;
      padding: 0 2px 10px;
      border-bottom: 1px solid var(--dpk-rule);
    }

    .spec-title {
      font-family: var(--dpk-display);
      font-size: 14px;
      font-weight: 650;
    }

    .spec-subject {
      color: var(--dpk-ink-soft);
      font-size: 12.5px;
    }

    .spec-stats {
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      color: var(--dpk-ink-faint);
      font-size: 12px;
    }

    .spec-chip {
      padding: 1px 8px;
      border-radius: 999px;
      font-weight: 600;
    }

    .spec-notice,
    .spec-empty {
      margin: 0;
      padding: 14px;
      border-radius: var(--dpk-radius);
      font-size: 12.5px;
    }

    .spec-notice {
      background: var(--dpk-danger-soft);
      color: var(--dpk-danger);
    }

    .spec-empty {
      color: var(--dpk-ink-faint);
      text-align: center;
    }

    /* ------------------------------------------------------------ tones */

    [data-tone='sound'] {
      --tone: var(--dpk-green);
      --tone-soft: var(--dpk-green-soft);
    }

    [data-tone='caveat'] {
      --tone: var(--dpk-amber);
      --tone-soft: var(--dpk-amber-soft);
    }

    [data-tone='unsound'] {
      --tone: var(--dpk-danger);
      --tone-soft: var(--dpk-danger-soft);
    }

    [data-tone='planned'] {
      --tone: var(--dpk-blue);
      --tone-soft: var(--dpk-blue-soft);
    }

    .spec-chip,
    .assurance-badge {
      background: var(--tone-soft);
      color: var(--tone);
    }

    /* ----------------------------------------------------------- targets */

    .spec-groups {
      display: grid;
      gap: 28px;
    }

    .target-group {
      display: grid;
      gap: 12px;
    }

    .target-head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 4px 10px;
    }

    .target-label {
      color: var(--dpk-ink-faint);
      font-size: 11.5px;
      font-weight: 650;
      letter-spacing: 0.04em;
    }

    .target-name {
      margin: 0;
      font-family: var(--dpk-display);
      font-size: 17px;
      font-weight: 700;
    }

    .target-code {
      padding: 1px 7px;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius-sm);
      background: var(--dpk-paper-sunken);
      color: var(--dpk-ink-soft);
      font-family: var(--dpk-mono);
      font-size: 12px;
    }

    .target-head .comment-trigger {
      align-self: center;
      margin-left: auto;
    }

    .target-summary {
      margin: -4px 0 0;
      color: var(--dpk-ink-soft);
      font-size: 13.5px;
      line-height: 1.7;
    }

    /* ------------------------------------------------------------ claims */

    .spec-claims {
      display: grid;
      gap: 8px;
    }

    .claim {
      padding: 10px 14px 10px 8px;
      border: 1px solid var(--dpk-rule);
      border-left: 4px solid var(--tone);
      border-radius: var(--dpk-radius-lg);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
    }

    /* Folded, the head row is the whole card: the statement and how strongly it holds. */
    .claim-head {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
    }

    .claim-toggle {
      display: grid;
      flex: none;
      place-items: center;
      width: 24px;
      height: 24px;
      margin-top: 1px;
      padding: 0;
      border: none;
      border-radius: var(--dpk-radius);
      background: transparent;
      color: var(--dpk-ink-faint);
      cursor: pointer;
    }

    .claim-toggle svg {
      width: 14px;
      height: 14px;
      transition: transform 120ms ease;
    }

    .claim-toggle[aria-expanded='true'] svg {
      transform: rotate(90deg);
    }

    .claim-toggle:hover,
    .claim-toggle:focus-visible {
      background: var(--dpk-paper-sunken);
      color: var(--dpk-ink);
    }

    .claim-body {
      display: grid;
      gap: 14px;
      margin: 12px 0 6px 32px;
    }

    /* The badge explains itself in a tooltip, so it is a button that hover, focus or a tap opens. */
    .assurance-badge {
      flex: none;
      margin-top: 2px;
      padding: 2px 10px;
      border: none;
      border-radius: 999px;
      font: inherit;
      font-size: 11.5px;
      font-weight: 650;
      white-space: nowrap;
      cursor: help;
    }

    .assurance-badge:focus-visible {
      outline: 2px solid var(--tone);
      outline-offset: 2px;
    }

    .claim-head .comment-trigger {
      margin-left: auto;
    }

    .claim-statement {
      flex: 1;
      margin: 0;
      font-size: 14.5px;
      line-height: 1.65;
      font-weight: 500;
    }

    /* Subjects / premises / conclusions: the structure of the claim, one row per part. */
    .claim-parts {
      display: grid;
      grid-template-columns: max-content 1fr;
      margin: 0;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius);
      background: var(--dpk-paper-sunken);
      overflow: hidden;
    }

    .claim-part {
      display: contents;
    }

    .claim-part > dt,
    .claim-part > dd {
      margin: 0;
      padding: 9px 12px;
      border-top: 1px solid var(--dpk-rule);
    }

    .claim-part:first-child > dt,
    .claim-part:first-child > dd {
      border-top: none;
    }

    .claim-part > dt {
      color: var(--dpk-ink-soft);
      font-size: 11.5px;
      font-weight: 650;
      letter-spacing: 0.04em;
      padding-top: 11px;
    }

    /* The conclusion is what the claim asserts: its label reads strongest. */
    .claim-part[data-part='conclusions'] > dt {
      color: var(--dpk-ink);
    }

    .claim-none {
      margin: 0;
      color: var(--dpk-ink-faint);
      font-size: 13px;
    }

    .clauses {
      display: grid;
      gap: 2px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .clause {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 6px;
      min-height: 28px;
      padding: 2px 0 2px 14px;
      font-size: 13.5px;
      line-height: 1.7;
    }

    .clause::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 0.95em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--dpk-ink-faint);
    }

    .clause-text {
      flex: 1;
      min-width: 0;
      overflow-wrap: anywhere;
    }

    /* ---------------------------------------------------------- assurance */

    .assurance {
      padding: 10px 14px;
      border-radius: var(--dpk-radius);
      background: var(--tone-soft);
      font-size: 12.5px;
      line-height: 1.6;
    }

    .assurance-label {
      margin: 0;
      color: var(--tone);
      font-weight: 650;
    }

    .assurance ul {
      margin: 4px 0 0;
      padding-left: 18px;
      color: var(--dpk-ink);
    }

    /* ---------------------------------------------------- examples / not */

    .claim-aside h5 {
      margin: 0 0 2px;
      color: var(--dpk-ink-soft);
      font-size: 11.5px;
      font-weight: 650;
      letter-spacing: 0.04em;
    }

    .claim-aside[data-part='not-claimed'] {
      padding: 10px 14px;
      border: 1px dashed var(--dpk-rule-strong);
      border-radius: var(--dpk-radius);
    }

    .claim-aside[data-part='not-claimed'] .clause::before {
      content: '×';
      left: 0;
      top: 0;
      width: auto;
      height: auto;
      border-radius: 0;
      background: none;
      color: var(--dpk-ink-faint);
      font-weight: 700;
    }

    .claim-aside[data-part='not-claimed'] .clause-text {
      color: var(--dpk-ink-soft);
    }

    /* ------------------------------------------------------------- footer */

    .claim-foot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px 8px;
      padding-top: 10px;
      border-top: 1px solid var(--dpk-rule);
      color: var(--dpk-ink-faint);
      font-size: 11.5px;
    }

    .claim-foot-label {
      font-weight: 650;
    }

    .term-chip {
      padding: 1px 9px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: 999px;
      background: var(--dpk-paper);
      color: var(--dpk-ink-soft);
      font: inherit;
      cursor: help;
    }

    .term-chip:is(:hover, :focus-visible) {
      border-color: var(--dpk-violet);
      color: var(--dpk-violet);
    }

    .claim-source {
      margin-left: auto;
    }

    .claim-source code {
      font-family: var(--dpk-mono);
      font-size: 11px;
    }

    /* -------------------------------------------------------------- terms */

    .term {
      display: inline;
      padding: 0 1px;
      border: none;
      border-bottom: 1.5px dotted var(--dpk-violet);
      background: none;
      color: inherit;
      font: inherit;
      font-weight: 600;
      cursor: help;
    }

    .term:hover,
    .term:focus-visible {
      background: var(--dpk-violet-soft);
      outline: none;
    }

    /* ----------------------------------------------------------- tooltip */

    /* Sized to its text: the popover helper sets a fixed width, which only !important overrides. */
    .spec-tip {
      box-sizing: border-box;
      position: fixed;
      inset: auto;
      width: max-content !important;
      max-width: min(300px, calc(100vw - 16px));
      margin: 0;
      padding: 8px 11px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
      color: var(--dpk-ink);
      font-size: 12.5px;
      line-height: 1.6;
      pointer-events: none;
    }

    .spec-tip p {
      margin: 0;
    }

    .tip-title {
      color: var(--dpk-violet);
      font-weight: 650;
    }

    .spec-tip[data-tone] .tip-title {
      color: var(--tone);
    }

    .term-static {
      border-bottom: 1.5px dotted var(--dpk-violet);
      font-weight: 600;
    }

    @container (max-width: 520px) {
      .claim-parts {
        grid-template-columns: 1fr;
      }

      .claim-part > dd {
        border-top: none;
        padding-top: 0;
      }
    }

    /* ---------------------------------------------------------- comments */

    .comment-trigger {
      flex: none;
      display: grid;
      place-items: center;
      width: 24px;
      height: 24px;
      padding: 4px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-sm);
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink-soft);
      cursor: pointer;
      opacity: 0;
      transition: opacity 120ms ease;
    }

    .comment-trigger svg {
      width: 14px;
      height: 14px;
    }

    :is(.target-head, .claim-head, .clause):is(:hover, :focus-within) > .comment-trigger,
    .comment-trigger[aria-expanded='true'] {
      opacity: 1;
    }

    .comment-trigger:hover,
    .comment-trigger:focus-visible {
      border-color: var(--dpk-accent);
      background: var(--dpk-accent-soft);
      color: var(--dpk-accent);
      outline: none;
    }

    @media (hover: none) {
      .comment-trigger {
        opacity: 1;
      }
    }

    .comment-target {
      font-size: 12px;
      overflow-wrap: anywhere;
    }

    .comment-error {
      margin: 0;
      font-size: 11px;
      color: var(--dpk-accent);
    }
  `],Ms=a=>`claim-body-${a}`;class Cs extends Ye{static{this.styles=Sr}static{this.properties={data:{attribute:!1},id:{type:String,reflect:!0},heading:{type:String},subject:{type:String}}}#e=null;#s=new Map;#a=null;#t=null;#n="";#r=null;#i=null;#o=new Map;#c=null;#u=new Set;#l=null;#p=null;#h=new Ve(this);#f=new We(this,()=>{this.#n=""});constructor(){super(),this.id=this.getAttribute("id")??"",this.data=null,this.heading=null,this.subject=null}connectedCallback(){super.connectedCallback(),this.#n="",document.addEventListener("keydown",this.#w),document.addEventListener("pointerdown",this.#S),this.#t=rt(this,ys,e=>{e.ok?this.#g(e.value):this.#b(e.error)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.#w),document.removeEventListener("pointerdown",this.#S),this.#t?.(),this.#t=null}willUpdate(e){e.has("data")&&this.data!==null&&this.#g(this.data)}updated(){this.#v(),this.#$(),this.#L()}get commentTargets(){if(!this.id||this.#e===null)return[];const e=`${this.subject??this.heading??this.#d.heading} \xB7 ${this.id}`;return $r(this.#e).map(({target:t,label:s})=>({value:this.#k(t),label:s,group:e}))}get dataError(){return this.#a}get#d(){return or(this.#f.locale)}#m(){return this.#e??ur()}#g(e){this.#e=e,this.#s=new Map(e.terms.map(t=>[t.id,t])),this.#a=null,this.requestUpdate()}#b(e){this.#e=null,this.#s=new Map,this.#a=e,console.error("[dev-process-kit] invalid formal spec data:",e),this.requestUpdate()}#k(e){return`element:${[this.id,...vr(e)].map(t=>encodeURIComponent(t)).join("/")}`}#v(){const e=JSON.stringify(this.commentTargets);e!==this.#n&&(this.#n=e,this.dispatchEvent(new CustomEvent("dpk-comment-targets-change",{bubbles:!0,composed:!0})))}#$(){const e=this.#i!==this.#r;this.#i=this.#r;const t=this.renderRoot.querySelector(".comment-pop"),s=this.#M(this.#r);!t||!s||(this.#h.open(t,s,{width:300,height:280},{placement:"right-start"}),e&&t.querySelector("textarea")?.focus({preventScroll:!0}))}#M(e){return e===null?null:[...this.renderRoot.querySelectorAll("[data-comment-ref]")].find(t=>t.dataset.commentRef===e)??null}#A(e,t){if(t.kind==="input"){this.#o=new Map(this.#o).set(e,t.body),this.#c=null,this.requestUpdate();return}if(t.kind==="comment"){if(!!this.dispatchEvent(new CustomEvent("dpk-comment-submit",{detail:{target:e,body:t.body},bubbles:!0,composed:!0,cancelable:!0}))){this.#c=e,this.requestUpdate();return}const r=new Map(this.#o);r.delete(e),this.#o=r}this.#c=null;const s=this.#M(e);this.#r=null,this.requestUpdate(),s?.focus({preventScroll:!0})}#C(e){const t=new Set(this.#u);if(t.delete(e)||t.add(e),this.#u=t,!t.has(e)){const s=this.#k({kind:"clause",claim:e,clause:""});this.#r?.startsWith(s)&&(this.#r=null);const n=this.#l?.anchor;n?.closest(".claim-body")?.id===Ms(e)&&this.#x(n)}this.requestUpdate()}#E(e,t){const s=e.composedPath()[0];s instanceof Element&&s.closest("button, a")||(document.getSelection()?.toString()??"")===""&&this.#C(t)}#L(){const e=this.#l?.anchor??null,t=this.#p!==e;t&&(this.#p?.removeAttribute("aria-describedby"),e?.setAttribute("aria-describedby","spec-tip")),this.#p=e;const s=this.renderRoot.querySelector(".spec-tip");!s||!e||!t||this.#h.open(s,e,{width:300,height:240},{placement:"top-start"})}#q(e,t){this.#l?.anchor!==t&&(this.#l={tip:e,anchor:t},this.requestUpdate())}#x(e){this.#l===null||e!==void 0&&this.#l.anchor!==e||(this.#l=null,this.requestUpdate())}#w=e=>{e.key==="Escape"&&this.#x()};#S=e=>{this.#l!==null&&!e.composedPath().includes(this.#l.anchor)&&this.#x()};#z(e){const t=(n,r)=>{n.currentTarget instanceof HTMLElement&&r(n.currentTarget)},s=n=>n.pointerType!=="touch";return{enter:n=>s(n)&&t(n,r=>this.#q(e,r)),leave:n=>s(n)&&t(n,r=>this.#x(r)),show:n=>t(n,r=>this.#q(e,r)),hide:n=>t(n,r=>this.#x(r))}}render(){const e=this.#d,t=this.#m();return h`
      <section class="spec">
        <header class="spec-toolbar">
          <span class="spec-title">${this.heading??e.heading}</span>
          ${this.subject?h`<span class="spec-subject">${this.subject}</span>`:b}
          <span class="spec-stats">${this.#R(t)}</span>
        </header>
        ${this.#a===null?b:h`<p class="spec-notice" role="alert">${e.dataError}<br />${this.#a}</p>`}
        ${this.#a===null&&t.claims.length===0?h`<p class="spec-empty">${e.empty}</p>`:b}
        <div class="spec-groups">
          ${J($s(t),s=>s.target?.id??"",s=>this.#y(s))}
        </div>
      </section>
      ${this.#H()} ${this.#_()}
    `}#R(e){const t=this.#d,s=xr(e),n=[{tone:"unsound",label:t.incomplete,count:s.incomplete},{tone:"caveat",label:t.bounded,count:s.bounded},{tone:"caveat",label:t.conditional,count:s.conditional},{tone:"planned",label:t.planned,count:s.planned}].filter(r=>r.count>0);return h`${t.claims(e.claims.length)}
    ${n.map(r=>h`<span class="spec-chip" data-tone=${r.tone}>${r.label} ${r.count}</span>`)}`}#y(e){const t=h`<div class="spec-claims">
      ${J(e.claims,n=>n.id,n=>this.#D(n))}
    </div>`,s=e.target;return s===null?t:h`<section class="target-group" data-target=${s.id}>
      <header class="target-head">
        <span class="target-label">${this.#d.target}</span>
        <h3 class="target-name">${s.name}</h3>
        ${s.code===null?b:h`<code class="target-code">${s.code}</code>`}
        ${this.#P({kind:"target",target:s.id},s.name)}
      </header>
      ${s.summary===null?b:h`<p class="target-summary">${this.#T(s.summary)}</p>`}
      ${e.claims.length===0?h`<p class="spec-empty">${this.#d.noClaims}</p>`:t}
    </section>`}#D(e){const t=this.#d,s=He(t,e.assurance),n=this.#u.has(e.id),r=this.#z({kind:"assurance",claim:e.id}),i=Ms(e.id);return h`
      <article class="claim" data-claim=${e.id} data-tone=${s.tone}>
        <div class="claim-head" @click=${o=>this.#E(o,e.id)}>
          <button
            type="button"
            class="claim-toggle"
            aria-expanded=${n?"true":"false"}
            aria-controls=${n?i:b}
            aria-label=${n?t.hideDetails:t.showDetails}
            @click=${()=>this.#C(e.id)}
          >
            ${Ze()}
          </button>
          <h4 class="claim-statement">${this.#T(e.statement)}</h4>
          <button
            type="button"
            class="assurance-badge"
            data-tone=${s.tone}
            @pointerenter=${r.enter}
            @pointerleave=${r.leave}
            @focus=${r.show}
            @blur=${r.hide}
            @click=${r.show}
          >
            ${s.label}
          </button>
          ${this.#P({kind:"claim",claim:e.id},ye(e))}
        </div>
        ${n?this.#F(e,i):b}
      </article>
    `}#F(e,t){const s=this.#d,n=He(s,e.assurance);return h`<div class="claim-body" id=${t}>
      <dl class="claim-parts">
        ${e.subjects.length===0?b:this.#O("subjects",s.subjects,e,e.subjects)}
        ${e.premises.length===0?h`<div class="claim-part" data-part="premises">
                <dt>${s.premises}</dt>
                <dd><p class="claim-none">${s.noPremises}</p></dd>
              </div>`:this.#O("premises",s.premises,e,e.premises)}
        ${this.#O("conclusions",s.conclusions,e,e.conclusions)}
      </dl>
      ${n.itemsLabel===null?b:h`<div class="assurance" data-tone=${n.tone}>
              <p class="assurance-label">${n.itemsLabel}</p>
              <ul>
                ${n.items.map(r=>h`<li>${this.#T(r)}</li>`)}
              </ul>
            </div>`}
      ${e.examples.length===0?b:h`<section class="claim-aside" data-part="examples">
              <h5>${s.examples}</h5>
              ${this.#I(e,e.examples)}
            </section>`}
      ${e.notClaimed.length===0?b:h`<section class="claim-aside" data-part="not-claimed">
              <h5>${s.notClaimed}</h5>
              ${this.#I(e,e.notClaimed)}
            </section>`}
      ${this.#N(e)}
    </div>`}#O(e,t,s,n){return h`<div class="claim-part" data-part=${e}>
      <dt>${t}</dt>
      <dd>${this.#I(s,n)}</dd>
    </div>`}#I(e,t){return h`<ul class="clauses">
      ${J(t,s=>s.id,s=>h`<li class="clause" data-clause=${s.id}>
            <span class="clause-text">${this.#T(s.text)}</span>
            ${this.#P({kind:"clause",claim:e.id,clause:s.id},`${ye(e)} \u203A ${Ue(s.text)}`)}
          </li>`)}
    </ul>`}#N(e){const t=this.#d,s=e.terms.flatMap(n=>this.#s.get(n)??[]);return s.length===0&&e.source===null?b:h`<footer class="claim-foot">
      ${s.length===0?b:h`<span class="claim-foot-label">${t.usesTerms}</span> ${s.map(n=>this.#j("term-chip",n.id,n.name))}`}
      ${e.source===null?b:h`<span class="claim-source"
              >${t.source}: ${e.source.tool===null?b:h`${e.source.tool} · `}<code
                >${e.source.ref}</code
              ></span
            >`}
    </footer>`}#T(e){return h`${e.map(t=>t.kind==="text"?t.text:this.#j("term",t.id,t.label))}`}#U(e){return h`${e.map(t=>t.kind==="text"?t.text:h`<span class="term-static">${t.label}</span>`)}`}#j(e,t,s){const n=this.#z({kind:"term",term:t});return h`<button
      type="button"
      class=${e}
      data-term=${t}
      @pointerenter=${n.enter}
      @pointerleave=${n.leave}
      @focus=${n.show}
      @blur=${n.hide}
      @click=${n.show}
    >
      ${s}
    </button>`}#H(){const e=this.#l?.tip;if(e===void 0)return b;const t=this.#B(e);return t===null?b:h`<div
      id="spec-tip"
      class="spec-tip"
      role="tooltip"
      popover="manual"
      data-tone=${t.tone??b}
    >
      <p class="tip-title">${t.title}</p>
      <p class="tip-body">${t.body}</p>
    </div>`}#B(e){if(e.kind==="term"){const n=this.#s.get(e.term);return n===void 0?null:{title:n.name,body:this.#U(n.meaning)}}const t=this.#e?.claims.find(n=>n.id===e.claim);if(t===void 0)return null;const s=He(this.#d,t.assurance);return{title:s.label,body:s.detail,tone:s.tone}}#P(e,t){if(!this.id)return b;const s=this.#k(e),n=this.#d.commentOn(t);return h`<button
      type="button"
      class="comment-trigger"
      data-comment-ref=${s}
      aria-label=${n}
      title=${n}
      aria-haspopup="dialog"
      aria-expanded=${this.#r===s?"true":"false"}
      @click=${()=>{this.#r=this.#r===s?null:s,this.requestUpdate()}}
    >
      ${Ke()}
    </button>`}#_(){const e=this.#r,t=e===null?void 0:this.commentTargets.find(n=>n.value===e)?.label;if(e===null||t===void 0)return b;const s=tt(this.#o.get(e)??"",[],{label:t,key:e,...this.#c===e?{error:this.#d.sendFailed}:{}});return h`${et(e,st(at(this.#f.locale),s,n=>this.#A(e,n)))}`}}const Es=()=>{customElements.get("dpk-component-formal-spec")||customElements.define("dpk-component-formal-spec",Cs)},qs=()=>{wt(),Dt(),Lt(),Kt(),Qt(),us(),vs()},Mr=()=>{Fs(),Ns(),qs(),Es()};export{Zt as D,At as a,Wt as b,Cs as c,xs as d,hs as e,zt as f,yt as g,Qt as h,Lt as i,Kt as j,Es as k,vs as l,us as m,Dt as n,wt as o,ys as p,ms as q,Mr as r,os as s,Ct as t,vt as u,qs as v};
