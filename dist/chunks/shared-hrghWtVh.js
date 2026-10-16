const wt=globalThis,on=wt.ShadowRoot&&(wt.ShadyCSS===void 0||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,an=Symbol(),Rs=new WeakMap;let _s=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==an)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(on&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=Rs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Rs.set(n,e))}return e}toString(){return this.cssText}};const Ls=t=>new _s(typeof t=="string"?t:t+"",void 0,an),de=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new _s(n,t,an)},Bo=(t,e)=>{if(on)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const s=document.createElement("style"),i=wt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,t.appendChild(s)}},Os=on?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return Ls(n)})(t):t,{is:Uo,defineProperty:Ho,getOwnPropertyDescriptor:Fo,getOwnPropertyNames:Wo,getOwnPropertySymbols:Vo,getPrototypeOf:Ko}=Object,$t=globalThis,Ps=$t.trustedTypes,Go=Ps?Ps.emptyScript:"",Zo=$t.reactiveElementPolyfillSupport,Ye=(t,e)=>t,ln={toAttribute(t,e){switch(e){case Boolean:t=t?Go:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},zs=(t,e)=>!Uo(t,e),Ms={attribute:!0,type:String,converter:ln,reflect:!1,useDefault:!1,hasChanged:zs};Symbol.metadata??=Symbol("metadata"),$t.litPropertyMetadata??=new WeakMap;let Ne=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Ms){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,n);i!==void 0&&Ho(this.prototype,e,i)}}static getPropertyDescriptor(e,n,s){const{get:i,set:r}=Fo(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const a=i?.call(this);r?.call(this,o),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ms}static _$Ei(){if(this.hasOwnProperty(Ye("elementProperties")))return;const e=Ko(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ye("properties"))){const n=this.properties,s=[...Wo(n),...Vo(n)];for(const i of s)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)n.unshift(Os(i))}else e!==void 0&&n.push(Os(e));return n}static _$Eu(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$ET(e,n){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:ln).toAttribute(n,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,n){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ln;this._$Em=i;const a=o.fromAttribute(n,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,n,s,i=!1,r){if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??zs)(r,n)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s){const{wrapped:o}=r,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Ne[Ye("elementProperties")]=new Map,Ne[Ye("finalized")]=new Map,Zo?.({ReactiveElement:Ne}),($t.reactiveElementVersions??=[]).push("2.1.2");const cn=globalThis,Is=t=>t,St=cn.trustedTypes,Ns=St?St.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ds="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,js="?"+pe,Yo=`<${js}>`,we=document,Je=()=>we.createComment(""),Qe=t=>t===null||typeof t!="object"&&typeof t!="function",dn=Array.isArray,Jo=t=>dn(t)||typeof t?.[Symbol.iterator]=="function",pn=`[ 	
\f\r]`,Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qs=/-->/g,Bs=/>/g,$e=RegExp(`>|${pn}(?:([^\\s"'>=/]+)(${pn}*=${pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Us=/'/g,Hs=/"/g,Fs=/^(?:script|style|textarea|title)$/i,Ws=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),v=Ws(1),Qo=Ws(2),H=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Vs=new WeakMap,Se=we.createTreeWalker(we,129);function Ks(t,e){if(!dn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ns!==void 0?Ns.createHTML(e):e}const Xo=(t,e)=>{const n=t.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=Xe;for(let a=0;a<n;a++){const l=t[a];let c,p,d=-1,h=0;for(;h<l.length&&(o.lastIndex=h,p=o.exec(l),p!==null);)h=o.lastIndex,o===Xe?p[1]==="!--"?o=qs:p[1]!==void 0?o=Bs:p[2]!==void 0?(Fs.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=$e):p[3]!==void 0&&(o=$e):o===$e?p[0]===">"?(o=i??Xe,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?$e:p[3]==='"'?Hs:Us):o===Hs||o===Us?o=$e:o===qs||o===Bs?o=Xe:(o=$e,i=void 0);const u=o===$e&&t[a+1].startsWith("/>")?" ":"";r+=o===Xe?l+Yo:d>=0?(s.push(c),l.slice(0,d)+Ds+l.slice(d)+pe+u):l+pe+(d===-2?a:u)}return[Ks(t,r+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};let hn=class Do{constructor({strings:e,_$litType$:n},s){let i;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,p]=Xo(e,n);if(this.el=Do.createElement(c,s),Se.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Se.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Ds)){const h=p[o++],u=i.getAttribute(d).split(pe),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:f[2],strings:u,ctor:f[1]==="."?ta:f[1]==="?"?na:f[1]==="@"?sa:Ct}),i.removeAttribute(d)}else d.startsWith(pe)&&(l.push({type:6,index:r}),i.removeAttribute(d));if(Fs.test(i.tagName)){const d=i.textContent.split(pe),h=d.length-1;if(h>0){i.textContent=St?St.emptyScript:"";for(let u=0;u<h;u++)i.append(d[u],Je()),Se.nextNode(),l.push({type:2,index:++r});i.append(d[h],Je())}}}else if(i.nodeType===8)if(i.data===js)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(pe,d+1))!==-1;)l.push({type:7,index:r}),d+=pe.length-1}r++}}static createElement(e,n){const s=we.createElement("template");return s.innerHTML=e,s}};function De(t,e,n=t,s){if(e===H)return e;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const r=Qe(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(t),i._$AT(t,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(e=De(t,i._$AS(t,e.values),i,s)),e}let ea=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:s}=this._$AD,i=(e?.creationScope??we).importNode(n,!0);Se.currentNode=i;let r=Se.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new At(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new ia(r,this,e)),this._$AV.push(c),l=s[++a]}o!==l?.index&&(r=Se.nextNode(),o++)}return Se.currentNode=we,i}p(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}},At=class jo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=De(this,e,n),Qe(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Jo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(we.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=hn.createElement(Ks(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const r=new ea(i,this),o=r.u(this.options);r.p(n),this.T(o),this._$AH=r}}_$AC(e){let n=Vs.get(e.strings);return n===void 0&&Vs.set(e.strings,n=new hn(e)),n}k(e){dn(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const r of e)i===n.length?n.push(s=new jo(this.O(Je()),this.O(Je()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){const s=Is(e).nextSibling;Is(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}};class Ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,s,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,n=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=De(this,e,n,0),o=!Qe(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=De(this,a[s+l],n,l),c===H&&(c=this._$AH[l]),o||=!Qe(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let ta=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},na=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},sa=class extends Ct{constructor(e,n,s,i,r){super(e,n,s,i,r),this.type=5}_$AI(e,n=this){if((e=De(this,e,n,0)??g)===H)return;const s=this._$AH,i=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class ia{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}}const ra={I:At},oa=cn.litHtmlPolyfillSupport;oa?.(hn,At),(cn.litHtmlVersions??=[]).push("3.3.3");const aa=(t,e,n)=>{const s=n?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const r=n?.renderBefore??null;s._$litPart$=i=new At(e.insertBefore(Je(),r),r,void 0,n??{})}return i._$AI(t),i},un=globalThis;let he=class extends Ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=aa(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};he._$litElement$=!0,he.finalized=!0,un.litElementHydrateSupport?.({LitElement:he});const la=un.litElementPolyfillSupport;la?.({LitElement:he}),(un.litElementVersions??=[]).push("4.2.2");const ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},et=t=>(...e)=>({_$litDirective$:t,values:e});let Tt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,s){this._$Ct=e,this._$AM=n,this._$Ci=s}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const{I:ca}=ra,Gs=t=>t,da=t=>t.strings===void 0,Zs=()=>document.createComment(""),tt=(t,e,n)=>{const s=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const r=s.insertBefore(Zs(),i),o=s.insertBefore(Zs(),i);n=new ca(r,o,t,t.options)}else{const r=n._$AB.nextSibling,o=n._$AM,a=o!==t;if(a){let l;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(l=t._$AU)!==o._$AU&&n._$AP(l)}if(r!==i||a){let l=n._$AA;for(;l!==r;){const c=Gs(l).nextSibling;Gs(s).insertBefore(l,i),l=c}}}return n},Ae=(t,e,n=t)=>(t._$AI(e,n),t),pa={},fn=(t,e=pa)=>t._$AH=e,ha=t=>t._$AH,gn=t=>{t._$AR(),t._$AA.remove()},mn=et(class extends Tt{constructor(t){if(super(t),t.type!==ue.PROPERTY&&t.type!==ue.ATTRIBUTE&&t.type!==ue.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!da(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===g)return e;const n=t.element,s=t.name;if(t.type===ue.PROPERTY){if(e===n[s])return H}else if(t.type===ue.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(s))return H}else if(t.type===ue.ATTRIBUTE&&n.getAttribute(s)===e+"")return H;return fn(t),e}});class Et extends Tt{constructor(e){if(super(e),this.it=g,e.type!==ue.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===H)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Et.directiveName="unsafeHTML",Et.resultType=1;const Ys=et(Et),Rt=t=>{let e=t;for(;e!==null;){if(e instanceof Element){const n=e.getAttribute("lang");if(n!==null)return n}e=e instanceof ShadowRoot?e.host:e.parentNode}return null},kn=["en","ja"],Js="en",Qs=t=>kn.some(e=>e===t),_t=t=>{const e=(t??"").split("-")[0]?.toLowerCase()??"";return Qs(e)?e:Js},Xs=t=>_t(Rt(t)),bn="dpk-locale-change",ei=t=>typeof t=="string"&&Qs(t)?t:null,ua=t=>t.preference??t.authored,fa=(t,e)=>t===e?null:t,Lt=t=>e=>e==="ja"?t.ja:t.en;class vn{#e;#n;#i=Js;constructor(e,n=()=>{}){this.#e=e,this.#n=n,e.addController(this)}get locale(){return this.#i}hostConnected(){this.#i=Xs(this.#e),document.addEventListener(bn,this.#r)}hostDisconnected(){document.removeEventListener(bn,this.#r)}#r=()=>{const e=Xs(this.#e);e!==this.#i&&(this.#i=e,this.#n(),this.#e.requestUpdate())}}const ga={paper:["#f6f7f9","#0e1014"],"paper-raised":["#ffffff","#171a20"],"paper-sunken":["#eff1f4","#0a0b0e"],"paper-inset":["#e7eaef","#22262e"],ink:["#11141b","#eceef3"],"ink-soft":["#464e5f","#a9b0bd"],"ink-faint":["#788195","#737b8b"],rule:["rgba(17, 24, 39, 0.08)","rgba(226, 232, 244, 0.08)"],"rule-strong":["rgba(17, 24, 39, 0.13)","rgba(226, 232, 244, 0.14)"],"rule-hover":["rgba(17, 24, 39, 0.24)","rgba(226, 232, 244, 0.26)"],accent:["#e04e1f","#f26a3d"],"accent-strong":["#c63f12","#dc5226"],"accent-bright":["#f0652f","#ff8a5e"],"accent-soft":["rgba(224, 78, 31, 0.08)","rgba(242, 106, 61, 0.14)"],"accent-ink":["#ffffff","#ffffff"],blue:["#3563d9","#7aa2f7"],"blue-strong":["#2a4fb3","#5b86e8"],"blue-soft":["rgba(53, 99, 217, 0.09)","rgba(122, 162, 247, 0.15)"],green:["#15894a","#4cc787"],"green-soft":["rgba(21, 137, 74, 0.09)","rgba(76, 199, 135, 0.14)"],amber:["#b27406","#e9ae45"],"amber-soft":["rgba(178, 116, 6, 0.1)","rgba(233, 174, 69, 0.15)"],violet:["#7549d6","#ab90f5"],"violet-soft":["rgba(117, 73, 214, 0.09)","rgba(171, 144, 245, 0.15)"],danger:["#c11d38","#f5707f"],"danger-soft":["rgba(214, 53, 80, 0.09)","rgba(245, 112, 127, 0.14)"],shade:["rgb(17, 24, 39)","rgb(0, 0, 0)"],"shade-1":["rgba(17, 24, 39, 0.06)","rgba(0, 0, 0, 0.32)"],"shade-2":["rgba(17, 24, 39, 0.08)","rgba(0, 0, 0, 0.38)"],"shade-3":["rgba(17, 24, 39, 0.13)","rgba(0, 0, 0, 0.5)"],highlight:["rgba(255, 255, 255, 0.9)","rgba(255, 255, 255, 0.05)"]},ti=t=>Ls(Object.entries(ga).map(([e,[n,s]])=>`--dpk-${e}: ${t(n,s)};`).join(`
`)),Ot=de`
  :host {
    /* Browsers without light-dark() stay light. */
    ${ti(t=>t)}
    --dpk-display: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --dpk-body: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --dpk-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;

    /* Shape + elevation scale, so every surface reads as one system. */
    --dpk-radius-xs: 6px;
    --dpk-radius-sm: 8px;
    --dpk-radius: 10px;
    --dpk-radius-lg: 14px;
    --dpk-radius-xl: 20px;
    --dpk-bevel: inset 0 1px 0 var(--dpk-highlight);
    --dpk-shadow-xs: 0 1px 2px var(--dpk-shade-1);
    --dpk-shadow-sm: 0 1px 2px var(--dpk-shade-1), 0 3px 8px -2px var(--dpk-shade-2);
    --dpk-shadow:
      0 1px 2px var(--dpk-shade-1), 0 6px 16px -4px var(--dpk-shade-2), 0 14px 32px -12px var(--dpk-shade-3);
    --dpk-shadow-lg:
      0 2px 4px var(--dpk-shade-1), 0 12px 28px -6px var(--dpk-shade-2), 0 32px 64px -20px var(--dpk-shade-3);
    --dpk-focus: 0 0 0 1px var(--dpk-paper-raised), 0 0 0 3.5px color-mix(in srgb, var(--dpk-blue) 45%, transparent);
    --dpk-control-h: 32px;
    --dpk-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
    --dpk-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    /* Frosted chrome: headers and toolbars that float over scrolling content. */
    --dpk-glass: color-mix(in srgb, var(--dpk-paper-raised) 78%, transparent);
    /* Working surface behind boards and canvases: a quiet dot lattice. */
    --dpk-dots: radial-gradient(circle at 1px 1px, var(--dpk-rule-strong) 1px, transparent 0) 0 0 / 20px 20px;

    color: var(--dpk-ink);
    font-family: var(--dpk-body);
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    display: block;
  }

  @supports (color: light-dark(#000, #fff)) {
    :host {
      ${ti((t,e)=>`light-dark(${t}, ${e})`)}
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--dpk-display);
    font-weight: 660;
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  button {
    font: inherit;
    color: inherit;
  }

  ::selection {
    background: color-mix(in srgb, var(--dpk-blue) 22%, transparent);
  }

  .dpk-mono,
  .dpk-num {
    font-variant-numeric: tabular-nums;
  }

  .dpk-label {
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 550;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dpk-ink-faint);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 1ms !important;
    }
  }
`,xn=de`
  .dpk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 30px;
    padding: 0 12px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font-size: 12.5px;
    font-weight: 550;
    line-height: 1;
    white-space: nowrap;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: pointer;
    transition:
      background 160ms var(--dpk-ease),
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease),
      transform 120ms var(--dpk-ease);
  }

  .dpk-btn:hover:not([disabled]) {
    border-color: var(--dpk-rule-hover);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
  }

  .dpk-btn:active:not([disabled]) {
    transform: translateY(1px) scale(0.985);
    box-shadow: none;
  }

  .dpk-btn:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .dpk-btn[disabled] {
    opacity: 0.45;
    box-shadow: none;
    cursor: not-allowed;
  }

  .dpk-btn--accent {
    border-color: color-mix(in srgb, var(--dpk-accent-strong) 70%, transparent);
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent) 55%, var(--dpk-accent-strong));
    color: var(--dpk-accent-ink);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.12);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      0 1px 2px color-mix(in srgb, var(--dpk-accent) 30%, transparent),
      0 4px 12px -4px color-mix(in srgb, var(--dpk-accent) 55%, transparent);
  }

  .dpk-btn--accent:hover:not([disabled]) {
    border-color: color-mix(in srgb, var(--dpk-accent-strong) 70%, transparent);
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent-bright) 40%, var(--dpk-accent));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.25),
      0 2px 4px color-mix(in srgb, var(--dpk-accent) 30%, transparent),
      0 8px 20px -6px color-mix(in srgb, var(--dpk-accent) 65%, transparent);
  }

  /* Selection state, shared by every template's filter/nav controls. */
  .dpk-btn--selected {
    border-color: color-mix(in srgb, var(--dpk-blue-strong) 70%, transparent);
    background: linear-gradient(180deg, var(--dpk-blue), var(--dpk-blue-strong));
    color: #fff;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 2px 8px -2px color-mix(in srgb, var(--dpk-blue) 60%, transparent);
  }

  .dpk-btn--selected:hover:not([disabled]) {
    border-color: color-mix(in srgb, var(--dpk-blue-strong) 70%, transparent);
    background: linear-gradient(180deg, var(--dpk-blue), var(--dpk-blue));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      0 4px 12px -3px color-mix(in srgb, var(--dpk-blue) 65%, transparent);
  }

  .dpk-btn--ghost {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    color: var(--dpk-ink-soft);
  }

  .dpk-btn--ghost:hover:not([disabled]) {
    background: var(--dpk-paper-inset);
    border-color: transparent;
    box-shadow: none;
    color: var(--dpk-ink);
  }

  .dpk-icon-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--dpk-radius-xs);
    background: transparent;
    color: var(--dpk-ink-faint);
    font-size: 11px;
    line-height: 1;
    cursor: pointer;
    transition:
      background 160ms var(--dpk-ease),
      color 160ms var(--dpk-ease),
      transform 160ms var(--dpk-ease-spring);
  }

  .dpk-icon-btn:hover:not([disabled]) {
    background: var(--dpk-paper-inset);
    color: var(--dpk-ink);
  }

  .dpk-icon-btn:active:not([disabled]) {
    transform: scale(0.92);
  }

  .dpk-icon-btn:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .dpk-icon-btn[disabled] {
    opacity: 0.35;
    cursor: default;
  }

  .dpk-icon-btn[data-active='true'] {
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  .dpk-icon-btn svg {
    display: block;
    width: 15px;
    height: 15px;
  }

  /* Count badge for an icon-only control (comments on a card, drafts on the rail). */
  .dpk-icon-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border: 1.5px solid var(--dpk-paper-raised);
    border-radius: 999px;
    background: linear-gradient(180deg, var(--dpk-accent-bright), var(--dpk-accent));
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 9px;
    font-weight: 650;
    font-variant-numeric: tabular-nums;
    line-height: 13px;
    text-align: center;
    box-shadow: 0 2px 6px -1px color-mix(in srgb, var(--dpk-accent) 55%, transparent);
    animation: dpk-pop 260ms var(--dpk-ease-spring);
  }

  @keyframes dpk-pop {
    from {
      transform: scale(0.4);
      opacity: 0;
    }
  }

  .dpk-input,
  .dpk-textarea,
  .dpk-select {
    box-sizing: border-box;
    width: 100%;
    min-height: var(--dpk-control-h);
    padding: 6px 10px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink);
    font: inherit;
    font-size: 12.5px;
    box-shadow: inset 0 1px 2px var(--dpk-shade-1);
    transition:
      border-color 160ms var(--dpk-ease),
      box-shadow 160ms var(--dpk-ease),
      background 160ms var(--dpk-ease);
  }

  .dpk-input::placeholder,
  .dpk-textarea::placeholder {
    color: var(--dpk-ink-faint);
  }

  .dpk-input:hover,
  .dpk-textarea:hover,
  .dpk-select:hover {
    border-color: var(--dpk-rule-hover);
  }

  .dpk-input:focus,
  .dpk-textarea:focus,
  .dpk-select:focus {
    outline: none;
    border-color: var(--dpk-blue);
    box-shadow: var(--dpk-focus);
  }

  .dpk-select {
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M3 4.5 6 7.5 9 4.5' fill='none' stroke='%23878e9e' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>");
    background-repeat: no-repeat;
    background-position: right 8px center;
    padding-right: 28px;
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    cursor: pointer;
  }

  .dpk-textarea {
    resize: vertical;
    min-height: 64px;
    line-height: 1.55;
  }
`,ma=de`
  .comment-pop {
    box-sizing: border-box;
    overflow: auto;
    position: fixed;
    inset: auto;
    margin: 0;
    display: grid;
    gap: 10px;
    padding: 14px;
    border: 1px solid var(--dpk-rule-strong);
    border-radius: var(--dpk-radius-lg);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
    color: var(--dpk-ink);
    font-size: 12.5px;
    animation: dpk-pop-in 180ms var(--dpk-ease);
  }

  @keyframes dpk-pop-in {
    from {
      opacity: 0;
      transform: translateY(4px) scale(0.98);
    }
  }

  .comment-pop .comment-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 6px;
    max-height: 140px;
    overflow: auto;
    font-size: 12px;
    color: var(--dpk-ink-soft);
  }

  .comment-pop .comment-list li {
    padding: 6px 10px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-accent-soft);
    border-left: 2px solid var(--dpk-accent);
  }

  .comment-pop .dpk-textarea {
    min-height: 54px;
  }

  .pop-actions {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: flex-end;
  }
`,ni=de`
  .dpk-prose {
    overflow-wrap: anywhere;
  }

  .dpk-prose > :first-child {
    margin-top: 0;
  }

  .dpk-prose > :last-child {
    margin-bottom: 0;
  }

  .dpk-prose :is(p, ul, ol, pre, blockquote, table) {
    margin: 0 0 0.6em;
  }

  .dpk-prose :is(h1, h2, h3, h4, h5, h6) {
    margin: 0.8em 0 0.3em;
    font-size: 1em;
    font-weight: 650;
    line-height: 1.4;
    color: var(--dpk-ink);
  }

  .dpk-prose :is(ul, ol) {
    padding-left: 1.3em;
  }

  .dpk-prose li + li {
    margin-top: 0.15em;
  }

  /* A task list item: its checkbox is the marker, so it has no bullet of its own. */
  .dpk-prose li:has(> input[type='checkbox']:first-child) {
    margin-left: -1.3em;
    list-style: none;
  }

  .dpk-prose li > input[type='checkbox']:first-child {
    margin: 0 0.4em 0 0;
    vertical-align: -0.1em;
  }

  .dpk-prose strong {
    font-weight: 650;
    color: var(--dpk-ink);
  }

  .dpk-prose a {
    color: var(--dpk-blue);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .dpk-prose code {
    padding: 0.05em 0.3em;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-sunken);
    font-family: var(--dpk-mono);
    font-size: 0.9em;
  }

  .dpk-prose pre {
    padding: 8px 10px;
    border-radius: var(--dpk-radius-xs);
    background: var(--dpk-paper-sunken);
    overflow: auto;
  }

  .dpk-prose pre code {
    padding: 0;
    background: none;
  }

  .dpk-prose blockquote {
    padding-left: 0.8em;
    border-left: 2px solid var(--dpk-rule-strong);
    color: var(--dpk-ink-soft);
  }

  /* A table wider than its box scrolls on its own instead of being clipped by it. */
  .dpk-prose table {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  /* A cell breaks a word only once it runs out of room: the box's 'anywhere' would
     let the table shrink a column to one letter rather than scroll. */
  .dpk-prose :is(th, td) {
    overflow-wrap: break-word;
    padding: 2px 8px;
    border: 1px solid var(--dpk-rule);
    text-align: left;
  }

  .dpk-prose hr {
    border: none;
    border-top: 1px solid var(--dpk-rule);
  }

  .dpk-prose img {
    max-width: 100%;
  }
`,je=(t,e)=>t instanceof e?t:null;function yn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ce=yn();function si(t){Ce=t}var Te={exec:()=>null};function qe(t){let e=[];return n=>{let s=Math.max(0,Math.min(3,n-1)),i=e[s];return i||(i=t(s),e[s]=i),i}}function w(t,e=""){let n=typeof t=="string"?t:t.source,s={replace:(i,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(z.caret,"$1"),n=n.replace(i,o),s},getRegex:()=>new RegExp(n,e)};return s}var ka=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),z={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:qe(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:qe(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:qe(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:qe(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:qe(t=>new RegExp(`^ {0,${t}}(?:</?(?:${st})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:qe(t=>new RegExp(`^ {0,${t}}>`))},ba=/^(?:[ \t]*(?:\n|$))+/,va=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,xa=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,nt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ya=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ii=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ri=w(ii).replace(/bull/g,wn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),wa=w(ii).replace(/bull/g,wn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),$n=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,$a=/^[^\n]+/,Sn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Sa=w(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Sn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Aa=w(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,wn).getRegex(),st="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",An=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ca=w("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",An).replace("tag",st).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),oi=t=>w($n).replace("hr",nt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",st).getRegex(),Ta=oi(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Ea=oi(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Ra=w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ea).getRegex(),Cn={blockquote:Ra,code:va,def:Sa,fences:xa,heading:ya,hr:nt,html:Ca,lheading:ri,list:Aa,newline:ba,paragraph:Ta,table:Te,text:$a},ai=w("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",st).getRegex(),_a={...Cn,lheading:wa,table:ai,paragraph:w($n).replace("hr",nt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ai).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",st).getRegex()},La={...Cn,html:w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",An).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Te,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:w($n).replace("hr",nt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ri).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Oa=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Pa=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,li=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,za=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ne=/[\p{P}\p{S}]/u,Be=/[\s\p{P}\p{S}]/u,it=/[^\s\p{P}\p{S}]/u,Ma=w(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Be).getRegex(),Ia=/[\p{Pi}\p{Ps}"']/u,ci=/(?!~)[\p{P}\p{S}]/u,Na=/(?!~)[\s\p{P}\p{S}]/u,Da=/(?:[^\s\p{P}\p{S}]|~)/u,ja=w(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ka?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),di=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,qa=w(di,"u").replace(/punct/g,ne).getRegex(),Ba=w(di,"u").replace(/punct/g,ci).getRegex(),Ua=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,Ha=w(Ua,"u").replace(/openQuote/g,Ia).replace(/punct/g,ne).getRegex(),pi="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Fa=w(pi,"gu").replace(/notPunctSpace/g,it).replace(/punctSpace/g,Be).replace(/punct/g,ne).getRegex(),Wa=w(pi,"gu").replace(/notPunctSpace/g,Da).replace(/punctSpace/g,Na).replace(/punct/g,ci).getRegex(),Va="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Ka=w(Va,"gu").replace(/notPunctSpace/g,it).replace(/punctSpace/g,Be).replace(/punct/g,ne).getRegex(),Ga=w("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,it).replace(/punctSpace/g,Be).replace(/punct/g,ne).getRegex(),Za="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Ya=w(Za,"gu").replace(/notPunctSpace/g,it).replace(/punctSpace/g,Be).replace(/punct/g,ne).getRegex(),Ja=w(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,ne).getRegex(),Qa="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Xa=w(Qa,"gu").replace(/notPunctSpace/g,it).replace(/punctSpace/g,Be).replace(/punct/g,ne).getRegex(),el=w(/\\(punct)/,"gu").replace(/punct/g,ne).getRegex(),tl=w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nl=w(An).replace("(?:-->|$)","-->").getRegex(),sl=w("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),hi=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Pt=w(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",hi).getRegex(),il=w(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Pt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),rl=w(/^!?\[(label)\]\[(ref)\]/).replace("label",Pt).replace("ref",Sn).getRegex(),ol=w(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sn).getRegex(),ui=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,al=w(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",hi).getRegex(),ll=w("reflink|nolink(?!\\()","g").replace("reflink",w(/^!?\[(label)\]\[(ref)\]/).replace("label",al).replace("ref",ui).getRegex()).replace("nolink",w(/^!?\[(ref)\](?:\[\])?/).replace("ref",ui).getRegex()).getRegex(),fi=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,cl=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,dl=w(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,cl).getRegex(),Tn={_backpedal:Te,anyPunctuation:el,autolink:tl,blockSkip:ja,br:li,code:Pa,del:Te,delLDelim:Te,delRDelim:Te,emStrongLDelim:qa,emStrongRDelimAst:Fa,emStrongRDelimUnd:Ga,escape:Oa,link:il,nolink:ol,punctuation:Ma,reflink:rl,reflinkSearch:ll,tag:sl,text:za,url:Te},pl={...Tn,emStrongLDelim:Ha,emStrongRDelimAst:Ka,emStrongRDelimUnd:Ya,link:w(/^!?\[(label)\]\((.*?)\)/).replace("label",Pt).getRegex(),reflink:w(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pt).getRegex()},En={...Tn,emStrongRDelimAst:Wa,emStrongLDelim:Ba,delLDelim:Ja,delRDelim:Xa,url:w(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",dl).replace("protocol",fi).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:w(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",fi).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},hl={...En,br:w(li).replace("{2,}","*").getRegex(),text:w(En.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},zt={normal:Cn,gfm:_a,pedantic:La},rt={normal:Tn,gfm:En,breaks:hl,pedantic:pl},ul={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gi=t=>ul[t];function B(t,e){if(e){if(z.escapeTest.test(t))return t.replace(z.escapeReplace,gi)}else if(z.escapeTestNoEncode.test(t))return t.replace(z.escapeReplaceNoEncode,gi);return t}function fl(t){return t.replace(z.numericCharacterReference,(e,n,s)=>{let i=n===void 0?Number.parseInt(s,16):Number.parseInt(n,10);return i===0||i>1114111||i>=55296&&i<=57343?"\uFFFD":String.fromCodePoint(i)})}function mi(t){try{t=encodeURI(t).replace(z.percentDecode,"%")}catch{return null}return t}function ki(t,e){let n=t.replace(z.findPipe,(r,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),s=n.split(z.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(z.slashPipe,"|");return s}function fe(t,e,n){let s=t.length;if(s===0)return"";let i=0;for(;i<s&&t.charAt(s-i-1)===e;)i++;return t.slice(0,s-i)}function bi(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&z.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Mt(t){return t.trim().toLowerCase().toUpperCase().toLowerCase()}function vi(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])n++;else if(t[s]===e[1]&&(n--,n<0))return s;return n>0?-2:-1}function xi(t,e=0){let n=e,s="";for(let i of t)if(i==="	"){let r=4-n%4;s+=" ".repeat(r),n+=r}else s+=i,n++;return s}function yi(t,e,n,s,i){let r=e.href,o=e.title||null,a=t[1].replace(i.other.outputLinkReplace,"$1"),l=t[0].charAt(0)==="!";s.state.inLink=!0;let c=s.state.linkEmitted,p=s.state.inRawBlock;s.state.linkEmitted=!1;let d=s.inlineTokens(a),h=s.state.linkEmitted;if(s.state.linkEmitted=c,s.state.inLink=!1,!l){if(h){s.state.inRawBlock=p;return}s.state.linkEmitted=!0}return{type:l?"image":"link",raw:n,href:r,title:o,text:a,tokens:d}}function gl(t,e,n){let s=t.match(n.other.indentCodeCompensation);if(s===null)return e;let i=s[1];return e.split(`
`).map(r=>{let o=r.match(n.other.beginningSpace);if(o===null)return r;let[a]=o;return r.slice(Math.min(a.length,i.length))}).join(`
`)}function wi(t,e,n,s){if(!e.includes("<"))return!1;for(let i=0;i<e.length;i++){if(e[i]==="\\"){i++;continue}if(e[i]==="`"){let a=s.inline.code.exec(e.slice(i));if(a){i+=a[0].length-1;continue}}if(e[i]!=="<")continue;let r=t.slice(n+i),o=s.inline.tag.exec(r)||s.inline.autolink.exec(r);if(o){if(o[0].length>e.length-i)return!0;i+=o[0].length-1}}return!1}var It=class{options;rules;lexer;constructor(t){this.options=t||Ce}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:bi(e[0]),s=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:s}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],s=gl(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let s=fe(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceTabChar.test(s))&&(n=s.trim())}return{type:"heading",raw:fe(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:fe(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=fe(e[0],`
`).split(`
`),s="",i="",r=[];for(;n.length>0;){let o=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),o=!0;else if(!o)a.push(n[l]);else break;n=n.slice(l);let c=a.join(`
`),p=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${c}`:c,i=i?`${i}
${p}`:p;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,r,!0),this.lexer.state.top=d,n.length===0)break;let h=r.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let u=h,f=n.join(`
`),k=u.raw+`
`+f.replace(this.rules.other.blockquoteSetextReplace2,""),m=this.blockquote(k);r[r.length-1]=m;let x=k.substring(m.raw.length).replace(/^\n/,""),S=x?x.split(`
`).length:0,A=S?n.slice(0,-S):n;A.length>0&&(s=`${s}
${A.join(`
`)}`),i=i.substring(0,i.length-u.text.length)+m.text;break}else if(h?.type==="list"){let u=h,f=u.raw+`
`+n.join(`
`),k=this.list(f);r[r.length-1]=k,s=s.substring(0,s.length-h.raw.length)+k.raw,i=i.substring(0,i.length-u.raw.length)+k.raw,n=f.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:r,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let r=this.rules.other.listItemRegex(n),o=!1;for(;t;){let l=!1,c="",p="";if(!(e=r.exec(t))||this.rules.block.hr.test(t))break;c=e[0],t=t.substring(c.length);let d=e[2].split(`
`,1)[0],h=e[1].length,u=this.options.pedantic?xi(d,h):d.replace(this.rules.other.leadingSpaceTab,x=>xi(x,h)),f=t.split(`
`,1)[0],k=!u.trim(),m=0;if(this.options.pedantic?(m=2,p=u.trimStart()):k?m=h+1:(m=u.search(this.rules.other.nonSpaceChar),m=m>4?1:m,p=u.slice(m),m+=h),k&&this.rules.other.blankLine.test(f)&&(c+=f+`
`,t=t.substring(f.length+1),l=!0),!l){let x=this.rules.other.nextBulletRegex(m),S=this.rules.other.hrRegex(m),A=this.rules.other.fencesBeginRegex(m),E=this.rules.other.headingBeginRegex(m),N=this.rules.other.htmlBeginRegex(m),O=this.rules.other.blockquoteBeginRegex(m);for(;t;){let U=t.split(`
`,1)[0],I;if(f=U,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),I=f):I=f.replace(this.rules.other.leadingSpaceTab,te=>te.replace(this.rules.other.tabCharGlobal,"    ")),A.test(f)||E.test(f)||N.test(f)||O.test(f)||x.test(f)||S.test(f))break;if(I.search(this.rules.other.nonSpaceChar)>=m||!f.trim())p+=`
`+I.slice(m);else{if(k||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||A.test(u)||E.test(u)||S.test(u))break;p+=`
`+f}k=!f.trim(),c+=U+`
`,t=t.substring(U.length+1),u=I.slice(m)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(o=!0)),i.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),i.raw+=c}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items)if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),!i.loose){let c=l.tokens.filter(d=>d.type==="space"),p=c.length>0&&c.some(d=>this.rules.other.anyLine.test(d.raw));i.loose=p}for(let l of i.items){let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(l.raw);if(p){let d={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};l.checked=d.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=d.raw+l.tokens[0].raw,l.tokens[0].text=d.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(d)):l.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):l.tokens.unshift(d)}}else l.task&&(l.task=!1)}if(i.loose)for(let l of i.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return i}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=bi(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&vi(e[2],"()")!==-1)return;let n=Mt(e[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:fe(e[0],`
`),href:s,title:i}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=ki(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:fe(e[0],`
`),header:[],align:[],rows:[]};if(n.length===s.length){for(let o of s)this.rules.other.tableAlignRight.test(o)?r.align.push("right"):this.rules.other.tableAlignCenter.test(o)?r.align.push("center"):this.rules.other.tableAlignLeft.test(o)?r.align.push("left"):r.align.push(null);for(let o=0;o<n.length;o++)r.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:r.align[o]});for(let o of i)r.rows.push(ki(o,r.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:r.align[l]})));return r}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:fe(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(t);if(e){let n=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&wi(t,e[1],n,this.rules))return;let s=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let o=fe(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{let o=vi(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],r=o[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),yi(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let s=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&wi(t,n[1],s,this.rules))return;let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[Mt(i)];if(!r){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return yi(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,r,o,a=i,l=0,c=s[0][0],p=n===c,d=c==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+i);(s=d.exec(e))!==null;){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(o=[...r].length,s[3]||s[4]){a+=o;continue}else if(s[5]||s[6]){if(i%3&&!((i+o)%3)){l+=o;continue}if(p)break}if(a-=o,a>0)continue;o=Math.min(o,o+a+l);let h=[...s[0]][0].length,u=t.slice(0,i+s.index+h+o);if(Math.min(i,o)%2){let k=u.slice(1,-1);return{type:"em",raw:u,text:k,tokens:this.lexer.inlineTokens(k)}}let f=u.slice(2,-2);return{type:"strong",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let s=this.rules.inline.delLDelim.exec(t);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,r,o,a=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+i);(s=l.exec(e))!==null;){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r||(o=[...r].length,o!==i))continue;if(s[3]||s[4]){a+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a);let c=[...s[0]][0].length,p=t.slice(0,i+s.index+c+o),d=p.slice(i,-i);return{type:"del",raw:p,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,s;return e[2]==="@"?(n=e[1],s="mailto:"+n):(n=e[1],s=n),{type:"link",raw:e[0],text:n,href:s,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,s;if(e[2]==="@")n=e[0],s="mailto:"+n;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);n=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:n,href:s,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:fl(e[0]),escaped:n}}}},K=class Ss{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ce,this.options.tokenizer=this.options.tokenizer||new It,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:z,block:zt.normal,inline:rt.normal};this.options.pedantic?(n.block=zt.pedantic,n.inline=rt.pedantic):this.options.gfm&&(n.block=zt.gfm,this.options.breaks?n.inline=rt.breaks:n.inline=rt.gfm),this.tokenizer.rules=n}static get rules(){return{block:zt,inline:rt}}static lex(e,n){return new Ss(n).lex(e)}static lexInline(e,n){return new Ss(n).inlineTokens(e)}lex(e){e=e.replace(z.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],s=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(z.tabCharGlobal,"    ").replace(z.spaceLine,""));let i=1/0;for(;e;){if(e.length<i)i=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let r;if(this.options.extensions?.block?.some(a=>(r=a.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let a=n.at(-1);r.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.at(-1).src=a.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},n.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}let o=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(p=>{c=p.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let a=n.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(r),s=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let s of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(s[0])&&e.charAt(s.index-1)!=="!")return!0;for(let s of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let i=s[0],r=i.lastIndexOf("[");if(!(i.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,Mt(i.slice(r+1,-1))))&&!(r>1&&this.linkInText(i.slice(1,r-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let s=this.state.linkParenPossible;this.state.linkParenPossible=s&&e.includes(")");try{return this.#e(e,n)}finally{this.state.linkParenPossible=s}}#e(e,n){let s=e;if(this.tokens.links&&e.includes("[")){let a=this.tokenizer.rules.inline.reflinkSearch,l=c=>{let p=c.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,Mt(c.slice(p+1,-1))))return c;if(p>1&&c.charAt(0)!=="!"){let d=c.slice(1,p-1);if(this.linkInText(d))return"["+d.replace(a,l)+"]["+"a".repeat(c.length-p-2)+"]"}return"["+"a".repeat(c.length-2)+"]"};s=s.replace(a,l)}s=s.replace(this.tokenizer.rules.inline.anyPunctuation,a=>"+".repeat(a.length)),s=s.replace(this.tokenizer.rules.inline.blockSkip,(a,l,c)=>{let p=c?c.length:0;return a.slice(0,p)+"["+"a".repeat(a.length-p-2)+"]"}),s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let i=!1,r="",o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}i||(r=""),i=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let c=n.at(-1);a.type==="text"&&c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(e,s,r)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(e,s,r)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),n.push(a);continue}let l=e;if(this.options.extensions?.startInline){let c=1/0,p=e.slice(1),d;this.options.extensions.startInline.forEach(h=>{d=h.call({lexer:this},p),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(a=this.tokenizer.inlineText(l)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(r=a.raw.slice(-1)),i=!0;let c=n.at(-1);c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):n.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Nt=class{options;parser;constructor(t){this.options=t||Ce}space(t){return""}code({text:t,lang:e,escaped:n}){let s=(e||"").match(z.notSpaceStart)?.[0],i=t?t.replace(z.endingNewline,"")+`
`:"";return s?'<pre><code class="language-'+B(s)+'">'+(n?i:B(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:B(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,s="";for(let o=0;o<t.items.length;o++){let a=t.items[o];s+=this.listitem(a)}let i=e?"ol":"ul",r=e&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+s+"</"+i+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let i=0;i<t.header.length;i++)n+=this.tablecell(t.header[i]);e+=this.tablerow({text:n});let s="";for(let i=0;i<t.rows.length;i++){let r=t.rows[i];n="";for(let o=0;o<r.length;o++)n+=this.tablecell(r[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${B(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:s,autolink:i}){let r=i?B(n,!0):this.parser.parseInline(s),o=mi(t);if(o===null)return r;t=B(o,i);let a='<a href="'+t+'"';return e&&(a+=' title="'+B(e)+'"'),a+=">"+r+"</a>",a}image({href:t,title:e,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=mi(t);if(i===null)return B(n);t=i;let r=`<img src="${B(t)}" alt="${B(n)}"`;return e&&(r+=` title="${B(e)}"`),r+=">",r}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:B(t.text)}},Rn=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},G=class As{options;renderer;textRenderer;constructor(e){this.options=e||Ce,this.options.renderer=this.options.renderer||new Nt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Rn}static parse(e,n){return new As(n).parse(e)}static parseInline(e,n){return new As(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let s=0;s<e.length;s++){let i=e[s];if(this.options.extensions?.renderers?.[i.type]){let o=i,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(o.type)){n+=a||"";continue}}let r=i;switch(r.type){case"space":{n+=this.renderer.space(r);break}case"hr":{n+=this.renderer.hr(r);break}case"heading":{n+=this.renderer.heading(r);break}case"code":{n+=this.renderer.code(r);break}case"table":{n+=this.renderer.table(r);break}case"blockquote":{n+=this.renderer.blockquote(r);break}case"list":{n+=this.renderer.list(r);break}case"checkbox":{n+=this.renderer.checkbox(r);break}case"html":{n+=this.renderer.html(r);break}case"def":{n+=this.renderer.def(r);break}case"paragraph":{n+=this.renderer.paragraph(r);break}case"text":{n+=this.renderer.text(r);break}default:{let o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let s="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let a=this.options.extensions.renderers[r.type].call({parser:this},r);if(a!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(r.type)){s+=a||"";continue}}let o=r;switch(o.type){case"escape":{s+=n.text(o);break}case"html":{s+=n.html(o);break}case"link":{s+=n.link(o);break}case"image":{s+=n.image(o);break}case"checkbox":{s+=n.checkbox(o);break}case"strong":{s+=n.strong(o);break}case"em":{s+=n.em(o);break}case"codespan":{s+=n.codespan(o);break}case"br":{s+=n.br(o);break}case"del":{s+=n.del(o);break}case"text":{s+=n.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}},ot=class{options;block;constructor(t){this.options=t||Ce}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?K.lex:K.lexInline}provideParser(t=this.block){return t?G.parse:G.parseInline}},$i=class{defaults=yn();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=G;Renderer=Nt;TextRenderer=Rn;Lexer=K;Tokenizer=It;Hooks=ot;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{let i=s;for(let r of i.header)n=n.concat(this.walkTokens(r.tokens,e));for(let r of i.rows)for(let o of r)n=n.concat(this.walkTokens(o.tokens,e));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,e));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(r=>{let o=i[r].flat(1/0);n=n.concat(this.walkTokens(o,e))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let r=e.renderers[i.name];r?e.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=r.apply(this,o)),a}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=e[i.level];r?r.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),s.extensions=e),n.renderer){let i=this.defaults.renderer||new Nt(this.defaults);for(let r in n.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let o=r,a=n.renderer[o],l=i[o];i[o]=(...c)=>{let p=a.apply(i,c);return p===!1&&(p=l.apply(i,c)),p||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new It(this.defaults);for(let r in n.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let o=r,a=n.tokenizer[o],l=i[o];i[o]=(...c)=>{let p=a.apply(i,c);return p===!1&&(p=l.apply(i,c)),p}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new ot;for(let r in n.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let o=r,a=n.hooks[o],l=i[o];ot.passThroughHooks.has(r)?i[o]=c=>{if(this.defaults.async&&ot.passThroughHooksRespectAsync.has(r))return(async()=>{let d=await a.call(i,c);return l.call(i,d)})();let p=a.call(i,c);return l.call(i,p)}:i[o]=(...c)=>{if(this.defaults.async)return(async()=>{let d=await a.apply(i,c);return d===!1&&(d=await l.apply(i,c)),d})();let p=a.apply(i,c);return p===!1&&(p=l.apply(i,c)),p}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,r=n.walkTokens;s.walkTokens=function(o){let a=[];return a.push(r.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return K.lex(t,e??this.defaults)}parser(t,e){return G.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let s={...n},i={...this.defaults,...s},r=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=t),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(e):e,a=await(i.hooks?await i.hooks.provideLexer(t):t?K.lex:K.lexInline)(o,i),l=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let c=await(i.hooks?await i.hooks.provideParser(t):t?G.parse:G.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(c):c})().catch(r);try{i.hooks&&(e=i.hooks.preprocess(e));let o=(i.hooks?i.hooks.provideLexer(t):t?K.lex:K.lexInline)(e,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let a=(i.hooks?i.hooks.provideParser(t):t?G.parse:G.parseInline)(o,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(o){return r(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+B(n.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(n);throw n}}},Ee=new $i;function T(t,e){return Ee.parse(t,e)}T.options=T.setOptions=function(t){return Ee.setOptions(t),T.defaults=Ee.defaults,si(T.defaults),T},T.getDefaults=yn,T.defaults=Ce;function ml(...t){return Ee.use(...t),T.defaults=Ee.defaults,si(T.defaults),T}T.use=ml,T.walkTokens=function(t,e){return Ee.walkTokens(t,e)},T.parseInline=Ee.parseInline,T.Parser=G,T.parser=G.parse,T.Renderer=Nt,T.TextRenderer=Rn,T.Lexer=K,T.lexer=K.lex,T.Tokenizer=It,T.Hooks=ot,T.parse=T,T.options,T.setOptions,T.walkTokens,T.parseInline,G.parse,K.lex;const kl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Re=t=>t.replace(/[&<>"']/g,e=>kl[e]??e),bl=new Set(["http","https","mailto"]),Si=t=>{const e=t.replace(/[\u0000- \u007f]/g,""),n=/^([a-z][a-z0-9+.-]*):/i.exec(e)?.[1];return n===void 0||bl.has(n.toLowerCase())},vl=t=>/^https?:/i.test(t.trim()),xl=new $i({gfm:!0,breaks:!0,renderer:{html({text:t}){return Re(t)},link({href:t,title:e,tokens:n}){const s=this.parser.parseInline(n);if(!Si(t))return s;const i=e?` title="${Re(e)}"`:"",r=vl(t)?' target="_blank" rel="noopener noreferrer"':"";return`<a href="${Re(t)}"${i}${r}>${s}</a>`},image({href:t,title:e,text:n}){if(!Si(t))return Re(n);const s=e?` title="${Re(e)}"`:"";return`<img src="${Re(t)}" alt="${Re(n)}"${s}>`}}}),Ai=t=>xl.parse(t,{async:!1}),yl=Lt({en:{clickToEdit:"Click to edit",unset:"Not set",edit:"Edit"},ja:{clickToEdit:"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7DE8\u96C6",unset:"\u672A\u8A2D\u5B9A",edit:"\u7DE8\u96C6"}});class Ci extends he{static{this.styles=[Ot,ni,de`
      /* One atomic box in both states, so the text can be edited where it sits:
         while editing, the text stays (hidden) underneath and keeps sizing the
         box, and the field lies over it. Starting an edit moves nothing; the
         box grows only as the draft does. */
      :host {
        display: inline-block;
        max-width: 100%;
        vertical-align: baseline;
        /* Inherit the surrounding type scale instead of forcing the chrome size:
           an inline edit inside a 17px heading must look like a 17px heading.
           Color comes along too, so an edit on a colored card stays legible. */
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        color: inherit;
      }

      .box {
        position: relative;
        display: block;
      }

      /* No vertical padding or border: the box is exactly the lines of text.
         The underline and ring are shadows, which never move the layout. */
      .view {
        display: block;
        padding: 0 4px;
        border-radius: var(--dpk-radius-xs);
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        cursor: text;
        transition:
          background 140ms var(--dpk-ease),
          box-shadow 140ms var(--dpk-ease);
      }

      .view:hover {
        background: var(--dpk-blue-soft);
        box-shadow:
          inset 0 -1px 0 var(--dpk-blue),
          inset 0 0 0 1px color-mix(in srgb, var(--dpk-blue) 22%, transparent);
      }

      /* Formatted text keeps its own line breaks: a break in the source is a <br>. */
      .view.dpk-prose {
        white-space: normal;
      }

      .view[data-empty='true'] {
        box-shadow: inset 0 -1px 0 var(--dpk-rule-strong);
        color: var(--dpk-ink-faint);
        font-style: italic;
      }

      .view[data-empty='true']:hover {
        box-shadow: inset 0 -1px 0 var(--dpk-blue);
      }

      .view[aria-hidden='true'] {
        visibility: hidden;
        transition: none;
      }

      .field {
        position: absolute;
        inset: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-width: 0;
        margin: 0;
        padding: 0 4px;
        border: none;
        border-radius: var(--dpk-radius-xs);
        outline: none;
        background: var(--dpk-paper-raised);
        box-shadow:
          inset 0 0 0 1px var(--dpk-blue),
          var(--dpk-focus);
        font: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        color: inherit;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        overflow: hidden;
        resize: none;
        animation: dpk-inline-edit-in 140ms var(--dpk-ease) backwards;
      }

      .field::placeholder {
        color: var(--dpk-ink-faint);
        font-style: italic;
        opacity: 1;
      }

      @keyframes dpk-inline-edit-in {
        from {
          opacity: 0;
        }
      }

      :host([truncate]) .view {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
      }

      /* Wrapped, it keeps --dpk-inline-edit-lines lines; the hidden text under a
         field still sizes the box to the whole draft. */
      :host([truncate][wrap]) .view:not([aria-hidden='true']) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--dpk-inline-edit-lines, 3);
        white-space: pre-wrap;
      }

      /* seamless: no field chrome at all — the text is edited where it sits. */
      :host([seamless]) .view,
      :host([seamless]) .field {
        padding: 0;
      }

      :host([seamless]) .field {
        border-radius: 0;
        background: transparent;
        box-shadow: none;
      }
    `]}static{this.properties={value:{type:String},placeholder:{type:String},multiline:{type:Boolean},wrap:{type:Boolean,reflect:!0},truncate:{type:Boolean,reflect:!0},seamless:{type:Boolean,reflect:!0},markdown:{type:Boolean},label:{type:String},editing:{state:!0}}}#e="";#n=0;#i=new vn(this);connectedCallback(){super.connectedCallback(),this.#n+=1}constructor(){super(),this.value="",this.placeholder="",this.multiline=!1,this.wrap=!1,this.truncate=!1,this.seamless=!1,this.markdown=!1,this.label="",this.editing=!1,this.#e=""}startEditing(){this.#e=this.value,this.editing=!0}willUpdate(e){e.has("value")&&!this.editing&&(this.#e=this.value)}updated(){if(!this.editing)return;const e=this.renderRoot.querySelector(".field"),n=this.renderRoot,s=n instanceof ShadowRoot?n.activeElement:document.activeElement;e&&s!==e&&(e.focus(),e.setSelectionRange(0,e.value.length,"backward"),e.scrollLeft=0,e.scrollTop=0)}render(){const e=yl(this.#i.locale),n=this.placeholder||e.unset,{editing:s}=this,i=s?this.#e:this.value,r=i===""?n:s&&i.endsWith(`
`)?`${i}\u200B`:i;return this.markdown&&!s&&i!==""?v`<span class="box"
        ><div
          class="view dpk-prose"
          data-empty="false"
          role="button"
          tabindex="0"
          title=${e.clickToEdit}
          @click=${this.#t}
          @keydown=${this.#s}
        >
          ${Ys(Ai(i))}
        </div></span
      >`:v`<span class="box"
      ><span
        class="view"
        data-empty=${String(i==="")}
        aria-hidden=${s?"true":g}
        role=${s?g:"button"}
        tabindex=${s?g:"0"}
        title=${s?g:this.truncate&&i!==""?i:e.clickToEdit}
        @click=${this.#t}
        @keydown=${this.#s}
        >${r}</span
      >${s?this.#r(this.label||this.placeholder||e.edit,n):g}</span
    >`}#r(e,n){return this.multiline||this.wrap?v`<textarea
          class="field"
          rows="1"
          .value=${mn(this.#e)}
          placeholder=${n}
          aria-label=${e}
          @input=${this.#o}
          @keydown=${this.#l}
          @blur=${this.#a}
        ></textarea>`:v`<input
          class="field"
          .value=${mn(this.#e)}
          placeholder=${n}
          aria-label=${e}
          @input=${this.#o}
          @keydown=${this.#l}
          @blur=${this.#a}
        />`}#t=e=>{e.composedPath().some(n=>n instanceof HTMLAnchorElement)||(e.stopPropagation(),!this.editing&&(this.#e=this.value,this.editing=!0))};#s=e=>{e.isComposing||this.editing||e.target instanceof HTMLAnchorElement||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.editing=!0)};#o=e=>{const n=je(e.target,HTMLInputElement)??je(e.target,HTMLTextAreaElement);n!==null&&(this.#e=n.value,this.requestUpdate())};#l=e=>{if(!e.isComposing){if(e.key==="Escape"){e.preventDefault(),this.#e=this.value,this.editing=!1;return}e.key==="Enter"&&(!this.multiline||this.wrap||e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.#p())}};#a=e=>{const n=e.currentTarget;if(!(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement))return;const s=this.#n,{selectionStart:i,selectionEnd:r}=n;queueMicrotask(()=>{!this.isConnected||!this.editing||(s!==this.#n?(n.focus(),n.setSelectionRange(i,r)):this.#p())})};#p=()=>{if(!this.editing)return;this.editing=!1;const n=(this.wrap?this.#e.replace(/\r?\n/g," "):this.#e).trim();n!==this.value&&this.dispatchEvent(new CustomEvent("dpk-commit",{detail:{value:n},bubbles:!0,composed:!0}))}}const wl=()=>{customElements.get("dpk-component-inline-edit")||customElements.define("dpk-component-inline-edit",Ci)},$l={lang:void 0,message:void 0,abortEarly:void 0,abortPipeEarly:void 0};function _n(t){return $l}let Sl;function Al(t){return Sl?.get(t)}let Cl;function Tl(t){return Cl?.get(t)}let El;function Rl(t,e){return El?.get(t)?.get(e)}function Ue(t){const e=typeof t;return e==="string"?`"${t}"`:e==="number"||e==="bigint"||e==="boolean"?`${t}`:e==="object"||e==="function"?(t&&Object.getPrototypeOf(t)?.constructor?.name)??"null":e}function R(t,e,n,s,i){const r=i&&"input"in i?i.input:n.value,o=i?.expected??t.expects??null,a=i?.received??Ue(r),l={kind:t.kind,type:t.type,input:r,expected:o,received:a,message:`Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${a}`,requirement:t.requirement,path:i?.path,issues:i?.issues,lang:s.lang,abortEarly:s.abortEarly,abortPipeEarly:s.abortPipeEarly},c=t.kind==="schema",p=i?.message??t.message??Rl(t.reference,l.lang)??(c?Tl(l.lang):null)??s.message??Al(l.lang);p!==void 0&&(l.message=typeof p=="function"?p(l):p),c&&(n.typed=!1),n.issues?n.issues.push(l):n.issues=[l]}function _l(t,e){return t===e||Number.isNaN(t)&&Number.isNaN(e)}function Ll(t,e){return Object.prototype.hasOwnProperty.call(t,e)&&e!=="__proto__"&&e!=="prototype"&&e!=="constructor"}function Ln(t,e){const n=[...new Set(t)];return n.length>1?`(${n.join(` ${e} `)})`:n[0]??"never"}function M(t){return t["~standard"]={version:1,vendor:"valibot",validate:e=>t["~run"]({value:e},_n())},t}function Ol(t){if(t.path){let e="";for(const n of t.path)if(typeof n.key=="string"||typeof n.key=="number")e?e+=`.${n.key}`:e+=n.key;else return null;return e}return null}var Pl=class extends Error{constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function Ti(t,e){return{kind:"validation",type:"check",reference:Ti,async:!1,expects:null,requirement:t,message:e,"~run"(n,s){return n.typed&&!this.requirement(n.value)&&R(this,"input",n,s),n}}}function Ei(t){return{kind:"validation",type:"finite",reference:Ei,async:!1,expects:null,requirement:Number.isFinite,message:t,"~run"(e,n){return e.typed&&!this.requirement(e.value)&&R(this,"finite",e,n),e}}}function Ri(t,e){const n=Ue(t);return{kind:"validation",type:"includes",reference:Ri,async:!1,expects:n,requirement:t,message:e,"~run"(s,i){return s.typed&&!s.value.includes(this.requirement)&&R(this,"content",s,i,{received:`!${n}`}),s}}}function _i(t){return{kind:"validation",type:"integer",reference:_i,async:!1,expects:null,requirement:Number.isInteger,message:t,"~run"(e,n){return e.typed&&!this.requirement(e.value)&&R(this,"integer",e,n),e}}}function $(t,e){return{kind:"validation",type:"min_length",reference:$,async:!1,expects:`>=${t}`,requirement:t,message:e,"~run"(n,s){return n.typed&&n.value.length<this.requirement&&R(this,"length",n,s,{received:`${n.value.length}`}),n}}}function Li(t,e){return{kind:"validation",type:"min_value",reference:Li,async:!1,expects:`>=${t instanceof Date?t.toJSON():Ue(t)}`,requirement:t,message:e,"~run"(n,s){return n.typed&&!(n.value>=this.requirement)&&R(this,"value",n,s,{received:n.value instanceof Date?n.value.toJSON():Ue(n.value)}),n}}}function ge(t,e){return{kind:"validation",type:"regex",reference:ge,async:!1,expects:`${t}`,requirement:t,message:e,"~run"(n,s){return n.typed&&!this.requirement.test(n.value)&&R(this,"format",n,s),n}}}function On(){return{kind:"transformation",type:"trim",reference:On,async:!1,"~run"(t){return t.value=t.value.trim(),t}}}function Oi(t){return{kind:"validation",type:"url",reference:Oi,async:!1,expects:null,requirement(e){try{return URL.canParse?URL.canParse(e):(new URL(e),!0)}catch{return!1}},message:t,"~run"(e,n){return e.typed&&!this.requirement(e.value)&&R(this,"URL",e,n),e}}}const Pi={abortEarly:!0};function zi(t,e,n){return typeof t.fallback=="function"?t.fallback(e,n):t.fallback}function Dt(t,e,n){return typeof t.default=="function"?t.default(e,n):t.default}function zl(t,e){return!t["~run"]({value:e},Pi).issues}function F(t,e){return M({kind:"schema",type:"array",reference:F,expects:"Array",async:!1,item:t,message:e,"~run"(n,s){const i=n.value;if(Array.isArray(i)){n.typed=!0,n.value=[];for(let r=0;r<i.length;r++){const o=i[r],a=this.item["~run"]({value:o},s);if(a.issues){const l={type:"array",origin:"value",input:i,key:r,value:o};for(const c of a.issues)c.path?c.path.unshift(l):c.path=[l],n.issues?.push(c);if(n.issues||(n.issues=a.issues),s.abortEarly){n.typed=!1;break}}a.typed||(n.typed=!1),n.value.push(a.value)}}else R(this,"type",n,s);return n}})}function Mi(t){return M({kind:"schema",type:"boolean",reference:Mi,expects:"boolean",async:!1,message:t,"~run"(e,n){return typeof e.value=="boolean"?e.typed=!0:R(this,"type",e,n),e}})}function P(t,e){return M({kind:"schema",type:"exact_optional",reference:P,expects:t.expects,async:!1,wrapped:t,default:e,"~run"(n,s){return this.wrapped["~run"](n,s)}})}function Ii(t){return M({kind:"schema",type:"lazy",reference:Ii,expects:"unknown",async:!1,getter:t,"~run"(e,n){return this.getter(e.value)["~run"](e,n)}})}function me(t,e){return M({kind:"schema",type:"literal",reference:me,expects:Ue(t),async:!1,literal:t,message:e,"~run"(n,s){return _l(n.value,this.literal)?n.typed=!0:R(this,"type",n,s),n}})}function Ni(t,e){return M({kind:"schema",type:"nullable",reference:Ni,expects:`(${t.expects} | null)`,async:!1,wrapped:t,default:e,"~run"(n,s){return n.value===null&&(this.default!==void 0&&(n.value=Dt(this,n,s)),n.value===null)?(n.typed=!0,n):this.wrapped["~run"](n,s)}})}function Di(t){return M({kind:"schema",type:"number",reference:Di,expects:"number",async:!1,message:t,"~run"(e,n){return typeof e.value=="number"&&!isNaN(e.value)?e.typed=!0:R(this,"type",e,n),e}})}function L(t,e){return M({kind:"schema",type:"object",reference:L,expects:"Object",async:!1,entries:t,message:e,"~run"(n,s){const i=n.value;if(i&&typeof i=="object"){n.typed=!0,n.value={};for(const r in this.entries){const o=this.entries[r];if(r in i||(o.type==="exact_optional"||o.type==="optional"||o.type==="nullish")&&o.default!==void 0){const a=r in i?i[r]:Dt(o),l=o["~run"]({value:a},s);if(l.issues){const c={type:"object",origin:"value",input:i,key:r,value:a};for(const p of l.issues)p.path?p.path.unshift(c):p.path=[c],n.issues?.push(p);if(n.issues||(n.issues=l.issues),s.abortEarly){n.typed=!1;break}}l.typed||(n.typed=!1),n.value[r]=l.value}else if(o.fallback!==void 0)n.value[r]=zi(o);else if(o.type!=="exact_optional"&&o.type!=="optional"&&o.type!=="nullish"&&(R(this,"key",n,s,{input:void 0,expected:`"${r}"`,path:[{type:"object",origin:"key",input:i,key:r,value:i[r]}]}),s.abortEarly))break}}else R(this,"type",n,s);return n}})}function se(t,e){return M({kind:"schema",type:"optional",reference:se,expects:`(${t.expects} | undefined)`,async:!1,wrapped:t,default:e,"~run"(n,s){return n.value===void 0&&(this.default!==void 0&&(n.value=Dt(this,n,s)),n.value===void 0)?(n.typed=!0,n):this.wrapped["~run"](n,s)}})}function jt(t,e){return M({kind:"schema",type:"picklist",reference:jt,expects:Ln(t.map(Ue),"|"),async:!1,options:t,message:e,"~run"(n,s){return this.options.includes(n.value)?n.typed=!0:R(this,"type",n,s),n}})}function He(t,e,n){return M({kind:"schema",type:"record",reference:He,expects:"Object",async:!1,key:t,value:e,message:n,"~run"(s,i){const r=s.value;if(r&&typeof r=="object"){s.typed=!0,s.value={};for(const o in r)if(Ll(r,o)){const a=r[o],l=this.key["~run"]({value:o},i);if(l.issues){const p={type:"object",origin:"key",input:r,key:o,value:a};for(const d of l.issues)d.path=[p],s.issues?.push(d);if(s.issues||(s.issues=l.issues),i.abortEarly){s.typed=!1;break}}const c=this.value["~run"]({value:a},i);if(c.issues){const p={type:"object",origin:"value",input:r,key:o,value:a};for(const d of c.issues)d.path?d.path.unshift(p):d.path=[p],s.issues?.push(d);if(s.issues||(s.issues=c.issues),i.abortEarly){s.typed=!1;break}}(!l.typed||!c.typed)&&(s.typed=!1),l.typed&&(s.value[l.value]=c.value)}}else R(this,"type",s,i);return s}})}function Z(t,e){return M({kind:"schema",type:"strict_object",reference:Z,expects:"Object",async:!1,entries:t,message:e,"~run"(n,s){const i=n.value;if(i&&typeof i=="object"){n.typed=!0,n.value={};for(const r in this.entries){const o=this.entries[r];if(r in i||(o.type==="exact_optional"||o.type==="optional"||o.type==="nullish")&&o.default!==void 0){const a=r in i?i[r]:Dt(o),l=o["~run"]({value:a},s);if(l.issues){const c={type:"object",origin:"value",input:i,key:r,value:a};for(const p of l.issues)p.path?p.path.unshift(c):p.path=[c],n.issues?.push(p);if(n.issues||(n.issues=l.issues),s.abortEarly){n.typed=!1;break}}l.typed||(n.typed=!1),n.value[r]=l.value}else if(o.fallback!==void 0)n.value[r]=zi(o);else if(o.type!=="exact_optional"&&o.type!=="optional"&&o.type!=="nullish"&&(R(this,"key",n,s,{input:void 0,expected:`"${r}"`,path:[{type:"object",origin:"key",input:i,key:r,value:i[r]}]}),s.abortEarly))break}if(!n.issues||!s.abortEarly){for(const r in i)if(!Object.prototype.hasOwnProperty.call(this.entries,r)){R(this,"key",n,s,{input:r,expected:"never",path:[{type:"object",origin:"key",input:i,key:r,value:i[r]}]});break}}}else R(this,"type",n,s);return n}})}function b(t){return M({kind:"schema",type:"string",reference:b,expects:"string",async:!1,message:t,"~run"(e,n){return typeof e.value=="string"?e.typed=!0:R(this,"type",e,n),e}})}function ji(t){let e;if(t)for(const n of t)if(e)for(const s of n.issues)e.push(s);else e=n.issues;return e}function Pn(t,e){return M({kind:"schema",type:"union",reference:Pn,expects:Ln(t.map(n=>n.expects),"|"),async:!1,options:t,message:e,"~run"(n,s){let i,r,o;for(const a of this.options){const l=a["~run"]({value:n.value},s);if(l.typed)if(l.issues)r?r.push(l):r=[l];else{i=l;break}else o?o.push(l):o=[l]}if(i)return i;if(r){if(r.length===1)return r[0];R(this,"type",n,s,{issues:ji(r)}),n.typed=!0}else{if(o?.length===1)return o[0];R(this,"type",n,s,{issues:ji(o)})}return n}})}function ke(){return M({kind:"schema",type:"unknown",reference:ke,expects:"unknown",async:!1,"~run"(t){return t.typed=!0,t}})}function qi(t,e,n){return M({kind:"schema",type:"variant",reference:qi,expects:"Object",async:!1,key:t,options:e,message:n,"~run"(s,i){const r=s.value;if(r&&typeof r=="object"){let o,a=0,l=this.key,c=[];const p=(d,h)=>{for(const u of d.options){if(u.type==="variant")p(u,new Set(h).add(u.key));else{let f=!0,k=0;for(const m of h){const x=u.entries[m];if(m in r?x["~run"]({typed:!1,value:r[m]},Pi).issues:x.type!=="exact_optional"&&x.type!=="optional"&&x.type!=="nullish"){f=!1,l!==m&&(a<k||a===k&&m in r&&!(l in r))&&(a=k,l=m,c=[]),l===m&&c.push(u.entries[m].expects);break}k++}if(f){const m=u["~run"]({value:r},i);(!o||!o.typed&&m.typed)&&(o=m)}}if(o&&!o.issues)break}};if(p(this,new Set([this.key])),o)return o;R(this,"type",s,i,{input:r[l],expected:Ln(c,"|"),path:[{type:"object",origin:"value",input:r,key:l,value:r[l]}]})}else R(this,"type",s,i);return s}})}function zn(t,e,n){const s=t["~run"]({value:e},_n());if(s.issues)throw new Pl(s.issues);return s.value}function y(...t){return M({...t[0],pipe:t,"~run"(e,n){for(const s of t)if(s.kind!=="metadata"){if(e.issues&&(s.kind==="schema"||s.kind==="transformation")){e.typed=!1;break}(!e.issues||!n.abortEarly&&!n.abortPipeEarly)&&(e=s["~run"](e,n))}return e}})}function C(t,e,n){const s=t["~run"]({value:e},_n());return{typed:s.typed,success:!s.issues,output:s.value,issues:s.issues}}function Ml(t){let e="";for(const n of t){e&&(e+=`
`),e+=`\xD7 ${n.message}`;const s=Ol(n);s&&(e+=`
  \u2192 at ${s}`)}return e}const qt=L({type:y(b(),$(1)),id:y(b(),$(1))}),Il=y(b(),$(1),ge(/^[A-Za-z0-9_-]+$/,'ids may only contain letters, digits, "_" and "-" (a "." builds a path)')),Nl=(t,e)=>{if(e===1)return t.includes(".")?null:[t];const n=t.split(".");return n.length===e&&n.every(s=>s.length>0)?n:null},_e=L({id:y(b(),$(1)),type:y(b(),$(1)),target:qt,payload:ke(),note:P(b()),createdAt:y(b(),$(1)),author:P(y(b(),$(1)))}),Dl=(t,e,n,s={})=>{const i=L({id:y(b(),$(1)),type:me(t),target:qt,payload:n,note:P(b()),createdAt:y(b(),$(1)),author:P(y(b(),$(1)))}),r=o=>{const a=C(_e,o);if(!a.success||a.output.type!==t)return null;const l=C(n,o.payload);return l.success?{id:a.output.id,type:t,target:a.output.target,payload:l.output,...a.output.note===void 0?{}:{note:a.output.note},createdAt:a.output.createdAt,...a.output.author===void 0?{}:{author:a.output.author}}:null};return{schema:i,mode:s.mode??"patch",targetType:e,actionType:t,payloadSchema:n,parse:r,...s.dedupeKey?{dedupeKey:s.dedupeKey}:{}}},jl=(t,e)=>{const n=Bt(t,e.type);if(n===void 0)return null;const s=n.parse(e);return s===null?null:s},ql=(t,e)=>{const n=C(t.payloadSchema,e.payload);if(!n.success)throw new Error(`invalid payload for action "${e.type}"`);return n.output},Bt=(t,e)=>Object.hasOwn(t,e)?t[e]:void 0,Bl=t=>{throw new Error(`unhandled action: ${JSON.stringify(t)}`)},Ul=L({id:y(b(),$(1))}),Hl=t=>{const e=C(Ul,t.payload);return`${t.type}|${e.success?e.output.id:JSON.stringify(t.payload)}`},D=t=>`${t.type}:${t.id}`,at=t=>{const e=t.indexOf(":");return e<=0?{type:"unknown",id:t}:{type:t.slice(0,e),id:t.slice(e+1)}},Mn=(t,e)=>typeof t=="string"?at(t.includes(":")?t:`${e}:${t}`):{type:t.type,id:t.id},Fl=(t,e)=>t.type===e.type&&t.id===e.id,Bi=t=>{const e=t.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40);return e.length>0?e:"item"},Wl=(t,e)=>{const n=Bi(t),s=new Set(e);if(!s.has(n))return n;for(let i=2;i<1e3;i+=1){const r=`${n}-${i}`;if(!s.has(r))return r}return`${n}-${Math.random().toString(36).slice(2,8)}`},Ui=()=>{const t=globalThis.crypto;return t?.randomUUID?t.randomUUID():`a-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`},j="comment",Le=t=>{const[e]=t;return{path:e?.path?.map(n=>String(n.key)).join(".")??"",message:e?.message??"invalid action"}},Hi=L({type:y(b(),$(1)),target:Pn([y(b(),$(1)),qt]),payload:se(ke()),note:P(b()),id:P(y(b(),$(1))),createdAt:P(y(b(),$(1))),author:P(y(b(),$(1)))}),Vl=(t,e,n)=>{const s=C(Hi,t);if(!s.success)return{ok:!1,issue:Le(s.issues)};const i=s.output,r=Mn(i.target,e.targetType),o=i.author??n,a={id:i.id??Ui(),type:i.type,target:r,payload:i.payload??{},...i.note===void 0?{}:{note:i.note},createdAt:i.createdAt??new Date().toISOString(),...o===void 0?{}:{author:o}},l=C(e.schema,a);if(!l.success)return{ok:!1,issue:Le(l.issues)};const c=C(_e,l.output);return c.success?{ok:!0,action:c.output}:{ok:!1,issue:Le(c.issues)}},In=(t,e)=>e.dedupeKey?e.dedupeKey(t):e.mode!=="patch"?null:`${t.type}|${D(t.target)}`,Nn=(t,e,n)=>{const s=In(e,n);if(s===null)return[...t,e];const i=t.at(-1);return!i||In(i,n)!==s||!Kl(i,e)?[...t,e]:[...t.slice(0,-1),e]},Kl=(t,e)=>Fl(t.target,e.target),Dn=t=>JSON.stringify(t.map(e=>({id:e.id,type:e.type,target:e.target,payload:e.payload,...e.note===void 0?{}:{note:e.note},createdAt:e.createdAt,...e.author===void 0?{}:{author:e.author}})),null,2),Fi=L({id:y(b(),$(1)),type:me(j),target:L({type:y(b(),$(1)),id:y(b(),$(1))}),payload:L({body:y(b(),$(1))}),note:P(b()),createdAt:y(b(),$(1)),author:P(y(b(),$(1)))}),jn={schema:Fi,mode:"append",targetType:"page"},Gl=L({body:b()}),lt=t=>{const e=C(Gl,t.payload);return e.success?e.output.body:""},qn="element",Wi=y(b(),ge(/^[A-Z][A-Z0-9_]*$/,"component action types are CONSTANT_CASE")),Vi=He(b(),ke()),Zl=L({type:me(qn),id:y(b(),ge(/^[^/]+\/.+/,"component references start with a provider id"))}),Yl=L({id:y(b(),$(1)),type:Wi,target:Zl,payload:Vi,note:P(b()),createdAt:y(b(),$(1)),author:P(y(b(),$(1)))}),Jl={schema:Yl,mode:"sequence",targetType:qn},Ql=Z({type:Wi,target:y(b(),ge(/^element:[^/]+\/.+/)),payload:se(Vi,{})}),Ki=Z({id:y(b(),$(1)),title:y(b(),$(1)),summary:P(b()),tone:P(jt(["create","update","delete","move","meta"])),stale:P(jt(["unsupported-action-type","target-missing","constraint-violated"]))}),Bn=t=>{if(t.type!==qn)return null;const e=t.id.indexOf("/");if(e<=0)return null;try{return decodeURIComponent(t.id.slice(0,e))}catch{return null}},J=t=>t.type!==j&&Bn(t.target)!==null,Xl=(t,e)=>t.filter(n=>J(n)&&Bn(n.target)===e),Gi=(t,e)=>{const n=new Map(t.flatMap(s=>J(s)?[[s.id,Bn(s.target)]]:[]));return new Map(e.flatMap(s=>s.results.flatMap(i=>n.get(i.id)===s.id?[[i.id,i]]:[])))},Un=Object.freeze({}),Ut=t=>{const e=t.startsWith("#")?t.slice(1):t;if(e.length===0)return Un;const n=new URLSearchParams(e.startsWith("?")?e.slice(1):e),s={};for(const[i,r]of n)i.length>0&&r.length>0&&(s[i]=r);return s},Fe=t=>{const e=new URLSearchParams;for(const s of Object.keys(t).sort((i,r)=>i<r?-1:i>r?1:0)){const i=t[s];i!=null&&i!==""&&e.set(s,i)}const n=e.toString();return n.length===0?"":`#${n}`},Hn=(t,e,n=[])=>{const s={...t},i=Object.keys(e).map(r=>n.indexOf(r)).filter(r=>r>=0);if(i.length>0)for(const r of n.slice(Math.min(...i)+1))Object.hasOwn(e,r)||delete s[r];for(const[r,o]of Object.entries(e))o==null||o===""?delete s[r]:s[r]=o;return s},ec=(t,e="json")=>`\`\`\`${e}
${t}
\`\`\``,tc=t=>JSON.stringify({type:t.type,target:t.target,payload:t.payload,...t.note===void 0?{}:{note:t.note}},null,2),Fn=(t,e,n)=>{const{actions:s,state:i}=t,r=new Set(t.stale.map(p=>p.action.id)),o=s.filter(p=>!r.has(p.id)),a=o.filter(p=>p.type===j),l=o.filter(p=>p.type!==j),c=[];if(c.push(`# Review draft \u2014 ${e.label}`),c.push(""),c.push(`- template: \`${e.name}\``),c.push(`- framework: \`dev-process-kit@${n}\``),c.push(`- navigation: \`${Fe(t.navigation)||"(none)"}\``),c.push(`- pending: ${l.length} change(s), ${a.length} comment(s)`),t.stale.length>0&&c.push(`- stale (not applicable to the current base): ${t.stale.length}`),c.push(""),c.push("## How to apply"),c.push(""),c.push("These are patches against the base HTML, not a command log. Apply the requested end state to the meaning model, keep the stable ids of surviving concepts, and keep the base JSON free of any draft envelope."),l.some(J)&&(c.push(""),c.push("Changes targeting `element:<id>/\u2026` belong to the component with that `id` (for example a diagram): apply them to that component's own JSON, following its documented action vocabulary.")),c.push(""),a.length>0){c.push(`## Comments (${a.length})`),c.push("");for(const[p,d]of a.entries()){const h=e.describe(d,i,t.base);c.push(`${p+1}. **${h.targetLabel}** \u2014 \`${D(d.target)}\``),c.push(`   > ${lt(d).replace(/\n/g,`
   > `)}`)}c.push("")}if(l.length>0){c.push(`## Requested changes (${l.length})`),c.push("");for(const[p,d]of l.entries()){const h=e.describe(d,i,t.base),u=h.summary?` \u2014 ${h.summary}`:"";c.push(`${p+1}. **${h.title}**${u}`),c.push(`   target: \`${D(d.target)}\` (${d.target.type})`),c.push(`   \`\`\`json
   ${tc(d).replace(/\n/g,`
   `)}
   \`\`\``)}c.push("")}if(l.length===0&&a.length===0&&(c.push("_No pending draft actions._"),c.push("")),t.stale.length>0){c.push(`## Not applicable to the current base (${t.stale.length})`),c.push(""),c.push("These actions were made against an earlier base and no longer fit it. Do not apply them; mention them if they still matter. The reader can remove them from the review rail."),c.push("");for(const[p,{action:d,reason:h}]of t.stale.entries()){const u=e.describe(d,i,t.base),f=d.type===j?lt(d):u.title;c.push(`${p+1}. \`${d.type}\` on \`${D(d.target)}\` (${h}) \u2014 ${f}`)}c.push("")}return c.push("## Canonical draft (JSON)"),c.push(""),c.push(ec(Dn(s))),c.push(""),c.join(`
`)},Q="0.0.16",Wn=async t=>{try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}const e=document.activeElement,n=document.createElement("textarea");try{return n.value=t,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.append(n),n.select(),document.execCommand("copy")}catch{return!1}finally{n.remove(),e instanceof HTMLElement&&e.focus()}},Zi=Lt({en:{heading:"Review notes",rejected:"Action rejected.",commentLabel:"Review comment",commentPlaceholder:"What should change, or what you noticed (passed to the agent as an instruction)",detach:"Detach",attachTo:t=>`Attach to this ${t}`,addNote:"Add note",empty:"No draft actions yet.",emptyHint:"Comments and structural patches both land here, and survive reload via LocalStorage.",sendToClaude:"Send to Claude",copy:"Copy changes & comments",copyTitle:"Copy the review to paste it to the agent",clear:"Clear",deleteAction:"Delete this draft action",editComment:"Edit this comment",editLabel:"Edit the comment",saveEdit:"Save",cancelEdit:"Cancel",editHint:"Ctrl/Cmd + Enter to save, Esc to cancel",wholePage:"Whole page",comment:"Comment",sent:"Sent to Claude \u2713",copied:"Copied \u2713",copyFailed:"Could not copy"},ja:{heading:"\u30EC\u30D3\u30E5\u30FC\u30CE\u30FC\u30C8",rejected:"action \u3092\u53D7\u3051\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002",commentLabel:"\u30EC\u30D3\u30E5\u30FC\u30B3\u30E1\u30F3\u30C8",commentPlaceholder:"\u5909\u66F4\u3057\u305F\u3044\u3053\u3068 / \u6C17\u3065\u304D\u3092\u66F8\u304F\uFF08Agent \u3078\u306E\u6307\u793A\u3068\u3057\u3066\u6E21\u308B\uFF09",detach:"\u7D10\u3065\u3051\u3092\u89E3\u9664",attachTo:t=>`\u3053\u306E ${t} \u306B\u7D10\u3065\u3051\u308B`,addNote:"\u30CE\u30FC\u30C8\u3092\u8FFD\u52A0",empty:"draft action \u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",emptyHint:"\u30B3\u30E1\u30F3\u30C8\u3082\u69CB\u9020\u306E\u5909\u66F4\u3082\u3053\u3053\u306B\u96C6\u307E\u308A\u3001LocalStorage \u306B\u6B8B\u308B\u306E\u3067\u30EA\u30ED\u30FC\u30C9\u3057\u3066\u3082\u6D88\u3048\u307E\u305B\u3093\u3002",sendToClaude:"Claude \u306B\u9001\u308B",copy:"\u5909\u66F4\u30FB\u30B3\u30E1\u30F3\u30C8\u3092\u30B3\u30D4\u30FC",copyTitle:"Review \u3092\u30B3\u30D4\u30FC\u3057\u3066 Agent \u306B\u8CBC\u308A\u4ED8\u3051\u308B",clear:"\u30AF\u30EA\u30A2",deleteAction:"\u3053\u306E draft action \u3092\u524A\u9664",editComment:"\u3053\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u7DE8\u96C6",editLabel:"\u30B3\u30E1\u30F3\u30C8\u3092\u7DE8\u96C6",saveEdit:"\u4FDD\u5B58",cancelEdit:"\u30AD\u30E3\u30F3\u30BB\u30EB",editHint:"Ctrl/Cmd + Enter \u3067\u4FDD\u5B58\u3001Esc \u3067\u30AD\u30E3\u30F3\u30BB\u30EB",wholePage:"\u30DA\u30FC\u30B8\u5168\u4F53",comment:"\u30B3\u30E1\u30F3\u30C8",sent:"Claude \u306B\u9001\u308A\u307E\u3057\u305F \u2713",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u2713",copyFailed:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}),nc=()=>({body:"",editing:null,attachment:{kind:"page"},copy:{kind:"idle"},copyRequest:0,send:{kind:"idle"},sendRequest:0}),Yi=t=>t.kind==="explicit"?{kind:t.resume}:t,Ji=(t,e)=>{switch(e.kind){case"input":return{...t,body:e.body};case"attach":return{...t,attachment:{kind:e.current?"current":"page"}};case"clear-target":return{...t,attachment:Yi(t.attachment)};case"edit-start":return{...t,editing:{id:e.id,body:e.body}};case"edit-input":return t.editing?{...t,editing:{...t.editing,body:e.body}}:t;case"edit-cancel":case"edited":return{...t,editing:null};case"target-requested":return{...t,attachment:{kind:"explicit",ref:e.ref,resume:t.attachment.kind==="explicit"?t.attachment.resume:t.attachment.kind}};case"submitted":return{...t,body:"",attachment:Yi(t.attachment),copy:{kind:"idle"},copyRequest:t.copyRequest+1,send:{kind:"idle"},sendRequest:t.sendRequest+1};case"copy-started":return{...t,copy:{kind:"pending"},copyRequest:t.copyRequest+1,send:{kind:"idle"},sendRequest:t.sendRequest+1};case"copy-finished":return e.request!==t.copyRequest||t.copy.kind!=="pending"?t:{...t,copy:{kind:e.ok?"copied":"failed"}};case"send-started":return{...t,send:{kind:"pending"},sendRequest:t.sendRequest+1,copy:{kind:"idle"},copyRequest:t.copyRequest+1};case"send-finished":return e.request!==t.sendRequest||t.send.kind!=="pending"?t:{...t,send:e.outcome.ok?{kind:"sent"}:{kind:"failed",reason:e.outcome.reason}}}},sc=(t,e)=>{const n=t.body.trim();return n===""?null:{target:e,body:n}},ic=t=>{if(!t.editing)return null;const e=t.editing.body.trim();return e===""?null:{id:t.editing.id,body:e}},rc={en:"English",ja:"\u65E5\u672C\u8A9E"},W=Lt({en:{review:"Review",reviewToggle:"Review / comments",useLightTheme:"Switch to light theme",useDarkTheme:"Switch to dark theme",language:"Language",versionLabel:"dev-process-kit version (reloads the page)",versionPinned:"Pinned by the page",versionLatest:t=>`${t} (latest)`,resizeSidebar:"Resize sidebar",resizeSidebarHint:"Drag to resize. Double-click to reset",collapseSidebar:"Collapse sidebar",expandSidebar:"Expand sidebar",baseDataError:"Could not read the base data (showing an empty page)",memo:"Memo",draftCount:(t,e)=>`${t} ${t===1?"change":"changes"} \xB7 ${e} ${e===1?"note":"notes"}`,handoffTooLarge:"The review is too long to send. Copy it and paste it instead",handoffConsent:"Commenting needs your permission. Allow it, then send again",handoffForbidden:"This page cannot send to Claude. Copy the review and paste it instead",handoffClaudeUnavailable:"Could not reach the Claude session. Copy the review and paste it instead",handoffRateLimited:"Too many sends in a row. Wait a moment, then send again",handoffStorage:"Could not save the review. Copy it and paste it instead",handoffError:"Could not send. Copy the review and paste it instead",handoffLabel:"Hand the review to the agent",handoffSend:"Send to Claude",handoffSending:"Sending\u2026",handoffSent:"Sent to Claude \u2713",handoffCopy:"Copy changes & comments",handoffCopyTitle:"Copy the review to paste it to the agent",handoffCopied:"Copied \u2713",handoffCopyFailed:"Could not copy",changes:"Updates",changesUnread:t=>`Updates (${t} new)`,changesTitle:"Changes by version",changesCurrent:"This version",changesReadAll:"Mark all as read",changesNew:"New",changesShow:"Show",changesDismiss:"Dismiss",changesWaiting:t=>`${t} more`,changesSeeAll:"See all",changesError:"Could not read the change log"},ja:{review:"\u30EC\u30D3\u30E5\u30FC",reviewToggle:"\u30EC\u30D3\u30E5\u30FC / \u30B3\u30E1\u30F3\u30C8",useLightTheme:"\u30E9\u30A4\u30C8\u30C6\u30FC\u30DE\u306B\u3059\u308B",useDarkTheme:"\u30C0\u30FC\u30AF\u30C6\u30FC\u30DE\u306B\u3059\u308B",language:"\u8A00\u8A9E",versionLabel:"dev-process-kit \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\uFF08\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u307E\u3059\uFF09",versionPinned:"\u30DA\u30FC\u30B8\u6307\u5B9A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3",versionLatest:t=>`${t}\uFF08\u6700\u65B0\uFF09`,resizeSidebar:"\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u5909\u66F4",resizeSidebarHint:"\u30C9\u30E9\u30C3\u30B0\u3067\u5E45\u3092\u5909\u66F4\u3002\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u5143\u306B\u623B\u3059",collapseSidebar:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080",expandSidebar:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u958B\u304F",baseDataError:"base data \u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\uFF08\u7A7A\u306E\u30DA\u30FC\u30B8\u3068\u3057\u3066\u8868\u793A\u4E2D\uFF09",memo:"\u30E1\u30E2",draftCount:(t,e)=>`\u5909\u66F4 ${t} \xB7 \u30B3\u30E1\u30F3\u30C8 ${e}`,handoffTooLarge:"Review \u304C\u9577\u3059\u304E\u3066\u9001\u308C\u307E\u305B\u3093\u3002\u30B3\u30D4\u30FC\u3057\u3066\u6E21\u3057\u3066\u304F\u3060\u3055\u3044",handoffConsent:"\u30B3\u30E1\u30F3\u30C8\u306E\u8A31\u53EF\u304C\u5FC5\u8981\u3067\u3059\u3002\u8A31\u53EF\u3057\u3066\u304B\u3089\u3082\u3046\u4E00\u5EA6\u9001\u3063\u3066\u304F\u3060\u3055\u3044",handoffForbidden:"\u3053\u306E\u30DA\u30FC\u30B8\u304B\u3089\u306F\u9001\u308C\u307E\u305B\u3093\u3002\u30B3\u30D4\u30FC\u3057\u3066\u6E21\u3057\u3066\u304F\u3060\u3055\u3044",handoffClaudeUnavailable:"Claude \u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u5C4A\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30B3\u30D4\u30FC\u3057\u3066\u6E21\u3057\u3066\u304F\u3060\u3055\u3044",handoffRateLimited:"\u9001\u4FE1\u304C\u7D9A\u3044\u3066\u3044\u307E\u3059\u3002\u5C11\u3057\u5F85\u3063\u3066\u304B\u3089\u9001\u3063\u3066\u304F\u3060\u3055\u3044",handoffStorage:"Review \u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30B3\u30D4\u30FC\u3057\u3066\u6E21\u3057\u3066\u304F\u3060\u3055\u3044",handoffError:"\u9001\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30B3\u30D4\u30FC\u3057\u3066\u6E21\u3057\u3066\u304F\u3060\u3055\u3044",handoffLabel:"Review \u3092 Agent \u306B\u6E21\u3059",handoffSend:"Claude \u306B\u9001\u308B",handoffSending:"\u9001\u4FE1\u4E2D\u2026",handoffSent:"Claude \u306B\u9001\u308A\u307E\u3057\u305F \u2713",handoffCopy:"\u5909\u66F4\u30FB\u30B3\u30E1\u30F3\u30C8\u3092\u30B3\u30D4\u30FC",handoffCopyTitle:"Review \u3092\u30B3\u30D4\u30FC\u3057\u3066 Agent \u306B\u8CBC\u308A\u4ED8\u3051\u308B",handoffCopied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u2713",handoffCopyFailed:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",changes:"\u66F4\u65B0\u306E\u304A\u77E5\u3089\u305B",changesUnread:t=>`\u66F4\u65B0\u306E\u304A\u77E5\u3089\u305B\uFF08\u65B0\u7740 ${t} \u4EF6\uFF09`,changesTitle:"\u7248\u3054\u3068\u306E\u5909\u66F4",changesCurrent:"\u3053\u306E\u7248",changesReadAll:"\u3059\u3079\u3066\u65E2\u8AAD\u306B\u3059\u308B",changesNew:"\u65B0\u7740",changesShow:"\u898B\u308B",changesDismiss:"\u9589\u3058\u308B",changesWaiting:t=>`\u307B\u304B ${t} \u4EF6`,changesSeeAll:"\u3059\u3079\u3066\u898B\u308B",changesError:"\u5909\u66F4\u306E\u4E00\u89A7\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F"}}),oc=4096,ac="reviews",Qi="Review from the page (dev-process-kit). Apply it to the base data and republish this artifact. Then answer with ArtifactComments `reply` in this thread: the reader sees only this thread, and the page never shows anything written to the database.",lc=t=>new TextEncoder().encode(t).length,cc=t=>t.replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g,""),dc=t=>{const e=`${Qi}

${cc(t)}`;return lc(e)<=oc?e:null},pc=t=>`${Qi}

The brief is too long for a comment, so it is stored in this artifact's database: read the document \`${t}\` (\`brief\` is the review, \`draft\` the raw draft JSON).`,hc={consent_required:"consent",forbidden:"forbidden",not_granted:"forbidden",capability_disabled:"forbidden",capability_removed:"forbidden",claude_unavailable:"claude_unavailable",rate_limited:"rate_limited"},uc=t=>{const e=typeof t=="object"&&t!==null&&"code"in t?t.code:void 0;return(typeof e=="string"?hc[e]:void 0)??"error"},fc={too_large:"handoffTooLarge",consent:"handoffConsent",forbidden:"handoffForbidden",claude_unavailable:"handoffClaudeUnavailable",rate_limited:"handoffRateLimited",storage:"handoffStorage",error:"handoffError"},Vn=(t,e)=>W(e)[fc[t]],Xi=t=>t.group?`${t.group} \xB7 ${t.label}`:t.label,er=(t,e)=>{const{definition:n,state:s,navigation:i,derivation:r}=t,o=Zi(t.locale),a=n.currentTarget?.(s,i)??null,l=e.attachment,c=l.kind==="explicit"?n.commentTargets(s,i).find(h=>h.value===l.ref):null,p=l.kind==="explicit"?{ref:l.ref,label:c?Xi(c):l.ref}:l.kind==="current"&&a?{ref:a.value,label:Xi(a)}:{ref:`page:${n.name}`,label:o.wholePage},d=new Map(r.stale.map(h=>[h.action.id,h.reason]));return{body:e.body,target:p,attachment:l.kind==="explicit"?{kind:"explicit"}:a?{kind:"checkbox",checked:l.kind==="current",group:a.group??""}:{kind:"none"},canSubmit:e.body.trim().length>0,items:r.actions.map(h=>{const u=n.describe(h,s,r.base),f=h.type==="comment";return{id:h.id,title:f?o.comment:u.title,targetLabel:u.targetLabel,author:h.author??null,tone:f?"comment":u.tone,text:{kind:f?"comment":"summary",body:f?lt(h):u.summary??""},code:f?null:n.serialize(h),stale:d.get(h.id)??null,edit:!f||t.editable!==!0?{kind:"none"}:e.editing?.id===h.id?{kind:"editing",body:e.editing.body,canSave:e.editing.body.trim().length>0}:{kind:"available"}}}),issues:t.issues.map(h=>`${h.path?`${h.path}: `:""}${h.message}`),send:t.sendable!==!0?"hidden":r.actions.length===0||e.send.kind==="pending"?"disabled":"ready",flash:e.send.kind==="sent"?o.sent:e.send.kind==="failed"?Vn(e.send.reason,t.locale):e.copy.kind==="copied"?o.copied:e.copy.kind==="failed"?o.copyFailed:""}},gc=[Ot,xn,de`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      min-width: 0;
      width: 100%;
      background: var(--dpk-paper-raised);
    }

    header {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 14px 16px 12px;
      border-bottom: 1px solid var(--dpk-rule);
      background: var(--dpk-glass);
      backdrop-filter: blur(12px);
      box-shadow: 0 1px 0 var(--dpk-highlight) inset;
    }

    header h2 {
      font-size: 13.5px;
      font-weight: 660;
      letter-spacing: -0.015em;
    }

    .composer {
      display: grid;
      gap: 10px;
      padding: 14px 16px 14px;
      border-bottom: 1px solid var(--dpk-rule);
      background: var(--dpk-paper-sunken);
      box-shadow: inset 0 1px 3px var(--dpk-shade-1);
    }

    .composer textarea {
      min-height: 62px;
      background: var(--dpk-paper-raised);
      border-radius: var(--dpk-radius);
      box-shadow:
        var(--dpk-bevel),
        inset 0 1px 2px var(--dpk-shade-1);
    }

    /* Wraps on a narrow rail rather than pushing the add button out of it. */
    .composer .row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .composer .attach {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 12px;
      color: var(--dpk-ink-soft);
      cursor: pointer;
      transition: color 140ms var(--dpk-ease);
    }

    .composer .attach:hover {
      color: var(--dpk-ink);
    }

    .composer .attach input {
      width: 14px;
      height: 14px;
      margin: 0;
      accent-color: var(--dpk-accent);
      cursor: pointer;
    }

    .composer .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: 999px;
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-shadow-xs);
      font-size: 11.5px;
      cursor: pointer;
      transition:
        border-color 140ms var(--dpk-ease),
        box-shadow 140ms var(--dpk-ease),
        transform 140ms var(--dpk-ease);
    }

    .composer .chip svg {
      flex: none;
      width: 12px;
      height: 12px;
    }

    .composer .chip:hover {
      border-color: color-mix(in srgb, var(--dpk-accent) 45%, var(--dpk-rule-strong));
      box-shadow: var(--dpk-shadow-sm);
      transform: translateY(-1px);
    }

    .target-line {
      min-width: 0;
      margin-right: auto;
      overflow-wrap: anywhere;
      padding: 3px 9px;
      border-radius: 999px;
      background: var(--dpk-paper-inset);
      font-family: var(--dpk-mono);
      font-size: 10px;
      letter-spacing: 0.03em;
      color: var(--dpk-ink-faint);
    }

    .list {
      list-style: none;
      margin: 0;
      /* The page's hand-off dock may float over the bottom of the list. */
      padding: 10px 12px calc(10px + var(--dpk-dock-clearance, 0px));
      overflow: auto;
      flex: 1;
      min-height: 0;
      display: grid;
      /* One unbroken comment must not widen the column every item shares. */
      grid-template-columns: minmax(0, 1fr);
      gap: 8px;
      align-content: start;
    }

    .item {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 5px;
      padding: 10px 12px 11px 16px;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
      transition:
        box-shadow 160ms var(--dpk-ease),
        border-color 160ms var(--dpk-ease),
        transform 160ms var(--dpk-ease);
      animation: dpk-item-in 200ms var(--dpk-ease) backwards;
    }

    @keyframes dpk-item-in {
      from {
        opacity: 0;
        transform: translateY(3px);
      }
    }

    .item:hover {
      border-color: var(--dpk-rule-hover);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
      transform: translateY(-1px);
    }

    .item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      bottom: 10px;
      width: 3px;
      border-radius: 0 2px 2px 0;
      background: var(--tone, var(--dpk-ink-faint));
    }

    .item[data-tone='comment'] {
      --tone: var(--dpk-accent);
      background: linear-gradient(90deg, var(--dpk-accent-soft), transparent 55%), var(--dpk-paper-raised);
    }

    .item[data-tone='create'] {
      --tone: var(--dpk-green);
    }

    .item[data-tone='update'] {
      --tone: var(--dpk-blue);
    }

    .item[data-tone='delete'] {
      --tone: var(--dpk-accent);
    }

    .item[data-tone='move'] {
      --tone: var(--dpk-violet);
    }

    .item[data-stale='true'] {
      opacity: 0.62;
      border-style: dashed;
      box-shadow: none;
      transform: none;
    }

    .item-head {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .item-icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: var(--dpk-radius-xs);
      background: color-mix(in srgb, var(--tone, var(--dpk-ink-faint)) 16%, transparent);
      color: var(--tone, var(--dpk-ink-faint));
    }

    .item-icon svg {
      display: block;
      width: 11px;
      height: 11px;
    }

    .item-title {
      font-size: 12.5px;
      font-weight: 600;
      letter-spacing: -0.005em;
    }

    .stale-badge {
      padding: 1px 7px;
      border: 1px solid color-mix(in srgb, var(--dpk-amber) 40%, transparent);
      border-radius: 999px;
      background: var(--dpk-amber-soft);
      font-family: var(--dpk-mono);
      font-size: 9px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--dpk-amber);
    }

    .item-head .dpk-icon-btn {
      margin-left: auto;
    }

    /* Edit and delete sit together at the end of the row. */
    .item-head .item-edit + .dpk-icon-btn {
      margin-left: -4px;
    }

    .item-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }
    .item-author {
      font-size: 11px;
      color: var(--dpk-ink-soft);
    }
    .item-target {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      padding: 1px 7px;
      border-radius: var(--dpk-radius-xs);
      background: var(--dpk-paper-sunken);
      font-family: var(--dpk-mono);
      font-size: 10px;
      color: var(--dpk-ink-faint);
      overflow-wrap: anywhere;
    }

    .item-summary {
      font-size: 12px;
      color: var(--dpk-ink-soft);
    }

    .item-body {
      margin: 2px 0 0;
      padding-left: 9px;
      border-left: 2px solid var(--dpk-accent);
      font-size: 12.5px;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .item-editor {
      display: grid;
      gap: 8px;
      margin-top: 2px;
    }

    .item-editor textarea {
      min-height: 62px;
      background: var(--dpk-paper-raised);
      border-radius: var(--dpk-radius);
    }

    .item-editor-actions {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
    }

    .item-code {
      margin-top: 2px;
      padding: 5px 7px;
      border-radius: var(--dpk-radius-xs);
      background: var(--dpk-paper-sunken);
      font-family: var(--dpk-mono);
      font-size: 10px;
      color: var(--dpk-ink-faint);
      overflow-wrap: anywhere;
    }

    .empty {
      padding: 4px;
    }

    .empty-box {
      display: grid;
      justify-items: center;
      gap: 6px;
      padding: 26px 16px;
      border: 1px dashed var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-lg);
      background: var(--dpk-paper-sunken);
      text-align: center;
    }

    .empty-box svg {
      width: 20px;
      height: 20px;
      color: var(--dpk-ink-faint);
      opacity: 0.7;
    }

    .empty-box p {
      margin: 0;
      font-size: 12px;
      line-height: 1.6;
      color: var(--dpk-ink-soft);
    }

    .empty-box .empty-hint {
      max-width: 30ch;
      color: var(--dpk-ink-faint);
    }

    .issues {
      margin: 10px 12px 0;
      padding: 9px 11px 9px 13px;
      border: 1px solid color-mix(in srgb, var(--dpk-danger) 35%, transparent);
      border-radius: var(--dpk-radius-sm);
      background: linear-gradient(90deg, var(--dpk-danger) 0 3px, transparent 3px), var(--dpk-danger-soft);
      font-size: 11.5px;
    }

    .issues strong {
      color: var(--dpk-danger);
    }

    .issues ul {
      margin: 4px 0 0;
      padding-left: 16px;
      color: var(--dpk-ink-soft);
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-top: 1px solid var(--dpk-rule);
      background: var(--dpk-glass);
      backdrop-filter: blur(12px);
    }

    .footer-actions {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      margin-left: auto;
    }

    .flash {
      font-family: var(--dpk-mono);
      font-size: 10px;
      letter-spacing: 0.04em;
      color: var(--dpk-green);
    }
  `],tr=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},ct=et(class extends Tt{constructor(t){if(super(t),t.type!==ue.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let s;n===void 0?n=e:e!==void 0&&(s=e);const i=[],r=[];let o=0;for(const a of t)i[o]=s?s(a,o):o,r[o]=n(a,o),o++;return{values:r,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,s]){const i=ha(t),{values:r,keys:o}=this.dt(e,n,s);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,p,d=0,h=i.length-1,u=0,f=r.length-1;for(;d<=h&&u<=f;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[u])l[u]=Ae(i[d],r[u]),d++,u++;else if(a[h]===o[f])l[f]=Ae(i[h],r[f]),h--,f--;else if(a[d]===o[f])l[f]=Ae(i[d],r[f]),tt(t,l[f+1],i[d]),d++,f--;else if(a[h]===o[u])l[u]=Ae(i[h],r[u]),tt(t,i[d],i[h]),h--,u++;else if(c===void 0&&(c=tr(o,u,f),p=tr(a,d,h)),c.has(a[d]))if(c.has(a[h])){const k=p.get(o[u]),m=k!==void 0?i[k]:null;if(m===null){const x=tt(t,i[d]);Ae(x,r[u]),l[u]=x}else l[u]=Ae(m,r[u]),tt(t,i[d],m),i[k]=null;u++}else gn(i[h]),h--;else gn(i[d]),d++;for(;u<=f;){const k=tt(t,l[f+1]);Ae(k,r[u]),l[u++]=k}for(;d<=h;){const k=i[d++];k!==null&&gn(k)}return this.ut=o,fn(t,l),H}});class Kn extends Et{}Kn.directiveName="unsafeSVG",Kn.resultType=2;const mc=et(Kn),nr=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]],sr=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],ir=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]],rr=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]],kc=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]],bc=[["path",{d:"M20 6 9 17l-5-5"}]],or=[["path",{d:"m6 9 6 6 6-6"}]],vc=[["path",{d:"m15 18-6-6 6-6"}]],xc=[["path",{d:"m9 18 6-6-6-6"}]],yc=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]],wc=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]],$c=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]],Sc=[["path",{d:"M15 3h6v6"}],["path",{d:"m21 3-7 7"}],["path",{d:"m3 21 7-7"}],["path",{d:"M9 21H3v-6"}]],Ac=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]],Cc=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]],Tc=[["path",{d:"M5 12h14"}]],Ec=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]],Rc=[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]],_c=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]],Lc=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]],Oc=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]],Pc=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],zc=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],Mc=t=>t.replaceAll("&","&amp;").replaceAll('"',"&quot;"),Ic=t=>t.map(([e,n])=>`<${e}${Object.entries(n).map(([s,i])=>` ${s}="${Mc(String(i))}"`).join("")}></${e}>`).join(""),_=t=>{const e=Ic(t);return()=>v`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      ${mc(e)}
    </svg>`},Ht=_(zc),ar=_(Pc),Gn=_(_c),Zn=_(Ac),lr=_($c),Nc=_(yc),Dc=_(bc),cr=_(Lc),jc=_(Tc),qc=_(wc),dr=_(Rc),Bc=_(rr),Uc=_(nr);_(sr),_(ir);const pr=_(vc),Yn=_(xc),Hc=_(or),Fc=_(Sc),Wc=_(Cc),Vc=_(Oc),Kc=_(Ec),hr=_(kc),Gc=t=>{switch(t){case"comment":return Zn();case"create":return cr();case"update":return Gn();case"delete":return ar();case"move":return dr();default:return lr()}},Zc=(t,e,n,s=!1)=>v`
  ${s?g:v`<header><h2>${t.heading}</h2></header>`}
  ${e.issues.length>0?v`<div class="issues" role="alert">
          <strong>${t.rejected}</strong>
          <ul>
            ${e.issues.map(i=>v`<li>${i}</li>`)}
          </ul>
        </div>`:g}
  <div class="composer">
    <textarea
      class="dpk-textarea"
      aria-label=${t.commentLabel}
      placeholder=${t.commentPlaceholder}
      .value=${e.body}
      @input=${i=>{i.currentTarget instanceof HTMLTextAreaElement&&n({kind:"input",body:i.currentTarget.value})}}
      @keydown=${i=>{!i.isComposing&&i.key==="Enter"&&(i.metaKey||i.ctrlKey)&&(i.preventDefault(),n({kind:"submit"}))}}
    ></textarea>
    ${e.attachment.kind==="explicit"?v`<div class="row">
            <button class="chip" type="button" aria-label=${t.detach} @click=${()=>n({kind:"clear-target"})}>
              ${e.target.label} ${Ht()}
            </button>
          </div>`:e.attachment.kind==="checkbox"?v`<div class="row">
              <label class="attach">
                <input
                  type="checkbox"
                  .checked=${e.attachment.checked}
                  @change=${i=>{i.currentTarget instanceof HTMLInputElement&&n({kind:"attach",current:i.currentTarget.checked})}}
                />
                <span>${t.attachTo(e.attachment.group)}</span>
              </label>
            </div>`:g}
    <div class="row">
      <span class="target-line">→ ${e.target.label}</span>
      <button
        class="dpk-btn dpk-btn--accent"
        type="button"
        ?disabled=${!e.canSubmit}
        @click=${()=>n({kind:"submit"})}
      >
        ${t.addNote}
      </button>
    </div>
  </div>
  <ul class="list">
    ${e.items.length===0?v`<li class="empty">
            <div class="empty-box">
              ${Zn()}
              <p>${t.empty}</p>
              <p class="empty-hint">${t.emptyHint}</p>
            </div>
          </li>`:ct(e.items,i=>i.id,i=>Yc(t,i,n))}
  </ul>
  <footer>
    ${s||e.send==="hidden"?g:v`<button
            class="dpk-btn dpk-btn--accent"
            type="button"
            ?disabled=${e.send==="disabled"}
            @click=${()=>n({kind:"send"})}
          >
            ${t.sendToClaude}
          </button>`}
    <div class="footer-actions">
      ${s?g:v`<button
              class=${e.send==="hidden"?"dpk-btn dpk-btn--accent":"dpk-btn"}
              type="button"
              title=${t.copyTitle}
              ?disabled=${e.items.length===0}
              @click=${()=>n({kind:"copy"})}
            >
              ${t.copy}
            </button>`}
      <button
        class="dpk-btn dpk-btn--ghost"
        type="button"
        ?disabled=${e.items.length===0}
        @click=${()=>n({kind:"clear"})}
      >
        ${t.clear}
      </button>
    </div>
    ${e.flash?v`<span class="flash" role="status">${e.flash}</span>`:g}
  </footer>
`,Yc=(t,e,n)=>v`
  <li class="item" data-tone=${e.tone} data-stale=${String(e.stale!==null)} data-id=${e.id}>
    <div class="item-head">
      <span class="item-icon">${Gc(e.tone)}</span>
      <span class="item-title">${e.title}</span>
      ${e.stale?v`<span class="stale-badge">${e.stale}</span>`:g}
      ${e.edit.kind==="available"?v`<button
              class="dpk-icon-btn item-edit"
              type="button"
              aria-label=${t.editComment}
              title=${t.editComment}
              @click=${()=>n({kind:"edit-start",id:e.id,body:e.text.body})}
            >
              ${Gn()}
            </button>`:g}
      <button
        class="dpk-icon-btn"
        type="button"
        aria-label=${t.deleteAction}
        @click=${()=>n({kind:"delete",id:e.id})}
      >
        ${Ht()}
      </button>
    </div>
    <div class="item-meta">
      <div class="item-target">${e.targetLabel}</div>
      ${e.author===null?g:v`<span class="item-author">${e.author}</span>`}
    </div>
    ${e.edit.kind==="editing"?Jc(t,e.edit,n):e.text.kind==="comment"?v`<p class="item-body">${e.text.body}</p>`:e.text.body?v`<div class="item-summary">${e.text.body}</div>`:g}
    ${e.code===null?g:v`<code class="item-code">${e.code}</code>`}
  </li>
`,Jc=(t,e,n)=>v`
  <div class="item-editor">
    <textarea
      class="dpk-textarea"
      aria-label=${t.editLabel}
      title=${t.editHint}
      .value=${e.body}
      @input=${s=>{s.currentTarget instanceof HTMLTextAreaElement&&n({kind:"edit-input",body:s.currentTarget.value})}}
      @keydown=${s=>{s.isComposing||(s.key==="Enter"&&(s.metaKey||s.ctrlKey)?(s.preventDefault(),n({kind:"edit-save"})):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),n({kind:"edit-cancel"})))}}
    ></textarea>
    <div class="row item-editor-actions">
      <button class="dpk-btn dpk-btn--ghost" type="button" @click=${()=>n({kind:"edit-cancel"})}>
        ${t.cancelEdit}
      </button>
      <button
        class="dpk-btn dpk-btn--accent"
        type="button"
        ?disabled=${!e.canSave}
        @click=${()=>n({kind:"edit-save"})}
      >
        ${t.saveEdit}
      </button>
    </div>
  </div>
`;class ur extends he{static{this.styles=gc}static{this.properties={definition:{attribute:!1},state:{attribute:!1},navigation:{attribute:!1},derivation:{attribute:!1},issues:{attribute:!1},pendingTarget:{attribute:!1},onDelete:{attribute:!1},onClear:{attribute:!1},onComment:{attribute:!1},onEditComment:{attribute:!1},exportBrief:{attribute:!1},sendToClaude:{attribute:!1},embedded:{type:Boolean}}}#e=nc();#n=null;#i=new vn(this);constructor(){super(),this.embedded=!1,this.definition=null,this.state=void 0,this.navigation={},this.derivation=null,this.issues=[],this.pendingTarget=null}willUpdate(e){e.has("pendingTarget")&&this.pendingTarget&&(this.#e=Ji(this.#e,{kind:"target-requested",ref:this.pendingTarget}))}updated(e){e.has("pendingTarget")&&this.pendingTarget&&this.isConnected&&this.renderRoot.querySelector("textarea")?.focus();const n=this.#n;n&&(this.#n=null,[...this.renderRoot.querySelectorAll(".item")].find(i=>i.dataset.id===n.id)?.querySelector(n.kind==="editor"?".item-editor textarea":".item-edit")?.focus())}#r(){return!this.definition||!this.derivation?null:{definition:this.definition,state:this.state,navigation:this.navigation,derivation:this.derivation,issues:this.issues,sendable:this.sendToClaude!==void 0,editable:this.onEditComment!==void 0,locale:this.#i.locale}}render(){const e=this.#r();return e?Zc(Zi(this.#i.locale),er(e,this.#e),this.#s,this.embedded):g}#t(e){this.#e=Ji(this.#e,e),this.requestUpdate()}#s=e=>{switch(e.kind){case"delete":this.onDelete?.(e.id);return;case"clear":this.onClear?.();return;case"copy":this.#l();return;case"send":this.#o();return;case"edit-start":this.#n={kind:"editor",id:e.id},this.#t(e);return;case"edit-cancel":{const n=this.#e.editing;n&&(this.#n={kind:"edit-button",id:n.id}),this.#t(e);return}case"edit-save":{const n=ic(this.#e);if(!n||!this.onEditComment||!this.onEditComment(n.id,n.body).ok)return;this.#n={kind:"edit-button",id:n.id},this.#t({kind:"edited"});return}case"submit":{const n=this.#r();if(!n||!this.onComment)return;const s=sc(this.#e,er(n,this.#e).target.ref);if(!s||!this.onComment(s.target,s.body).ok)return;this.#t({kind:"submitted"});return}default:this.#t(e)}};async#o(){const e=this.sendToClaude;if(!e||this.#e.send.kind==="pending")return;this.#t({kind:"send-started"});const n=this.#e.sendRequest,s=await e().catch(()=>({ok:!1,reason:"error"}));this.isConnected&&this.#t({kind:"send-finished",request:n,outcome:s})}async#l(){const e=this.#r();if(!e)return;this.#t({kind:"copy-started"});const n=this.#e.copyRequest;try{const s=this.exportBrief?.()??Fn({...e.derivation,navigation:e.navigation,issues:e.issues},e.definition,Q),i=await Wn(s);this.isConnected&&this.#t({kind:"copy-finished",request:n,ok:i})}catch{this.isConnected&&this.#t({kind:"copy-finished",request:n,ok:!1})}}}const Qc=()=>{customElements.get("dpk-component-comment-panel")||customElements.define("dpk-component-comment-panel",ur)},We=Math.min,ie=Math.max,Ft=Math.round,Wt=Math.floor,re=t=>({x:t,y:t}),Xc={left:"right",right:"left",bottom:"top",top:"bottom"};function ed(t,e,n){return ie(t,We(e,n))}function dt(t,e){return typeof t=="function"?t(e):t}function Oe(t){return t.split("-")[0]}function pt(t){return t.split("-")[1]}function fr(t){return t==="x"?"y":"x"}function gr(t){return t==="y"?"height":"width"}function oe(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function mr(t){return fr(oe(t))}function td(t,e,n){n===void 0&&(n=!1);const s=pt(t),i=mr(t),r=gr(i);let o=i==="x"?s===(n?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=Vt(o)),[o,Vt(o)]}function nd(t){const e=Vt(t);return[Jn(t),e,Jn(e)]}function Jn(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const kr=["left","right"],br=["right","left"],sd=["top","bottom"],id=["bottom","top"];function rd(t,e,n){switch(t){case"top":case"bottom":return n?e?br:kr:e?kr:br;case"left":case"right":return e?sd:id;default:return[]}}function od(t,e,n,s){const i=pt(t);let r=rd(Oe(t),n==="start",s);return i&&(r=r.map(o=>o+"-"+i),e&&(r=r.concat(r.map(Jn)))),r}function Vt(t){const e=Oe(t);return Xc[e]+t.slice(e.length)}function ad(t){var e,n,s,i;return{top:(e=t.top)!=null?e:0,right:(n=t.right)!=null?n:0,bottom:(s=t.bottom)!=null?s:0,left:(i=t.left)!=null?i:0}}function ld(t){return typeof t!="number"?ad(t):{top:t,right:t,bottom:t,left:t}}function Kt(t){const{x:e,y:n,width:s,height:i}=t;return{width:s,height:i,top:n,left:e,right:e+s,bottom:n+i,x:e,y:n}}function vr(t,e,n){let{reference:s,floating:i}=t;const r=oe(e),o=mr(e),a=gr(o),l=Oe(e),c=r==="y",p=s.x+s.width/2-i.width/2,d=s.y+s.height/2-i.height/2,h=s[a]/2-i[a]/2;let u;switch(l){case"top":u={x:p,y:s.y-i.height};break;case"bottom":u={x:p,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:d};break;case"left":u={x:s.x-i.width,y:d};break;default:u={x:s.x,y:s.y}}const f=pt(e);return f&&(u[o]+=h*(f==="end"?1:-1)*(n&&c?-1:1)),u}async function cd(t,e){var n;e===void 0&&(e={});const{x:s,y:i,platform:r,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:u=0}=dt(e,t),f=ld(u),m=a[h?d==="floating"?"reference":"floating":d],x=Kt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(m)))==null||n?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:p,strategy:l})),S=d==="floating"?{x:s,y:i,width:o.floating.width,height:o.floating.height}:o.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),E=await(r.isElement==null?void 0:r.isElement(A))&&await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1},N=Kt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:S,offsetParent:A,strategy:l}):S);return{top:(x.top-N.top+f.top)/E.y,bottom:(N.bottom-x.bottom+f.bottom)/E.y,left:(x.left-N.left+f.left)/E.x,right:(N.right-x.right+f.right)/E.x}}const dd=50,pd=async(t,e,n)=>{const{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:o}=n,a=o.detectOverflow?o:{...o,detectOverflow:cd},l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:d}=vr(c,s,l),h=s,u=0;const f={};for(let k=0;k<r.length;k++){const m=r[k];if(!m)continue;const{name:x,fn:S}=m,{x:A,y:E,data:N,reset:O}=await S({x:p,y:d,initialPlacement:s,placement:h,strategy:i,middlewareData:f,rects:c,platform:a,elements:{reference:t,floating:e}});p=A??p,d=E??d,f[x]={...f[x],...N},O&&u<dd&&(u++,typeof O=="object"&&(O.placement&&(h=O.placement),O.rects&&(c=O.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:p,y:d}=vr(c,h,l)),k=-1)}return{x:p,y:d,placement:h,strategy:i,middlewareData:f}},hd=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,s;const{placement:i,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:k=!0,...m}=dt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const x=Oe(i),S=oe(a),A=Oe(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),N=h||(A||!k?[Vt(a)]:nd(a)),O=f!=="none";!h&&O&&N.push(...od(a,k,f,E));const U=[a,...N],I=await l.detectOverflow(e,m),te=[];let Y=((s=r.flip)==null?void 0:s.overflows)||[];if(p&&te.push(I[x]),d){const xe=td(i,o,E);te.push(I[xe[0]],I[xe[1]])}if(Y=[...Y,{placement:i,overflows:te}],!te.every(xe=>xe<=0)){var Cs,Ts;const xe=(((Cs=r.flip)==null?void 0:Cs.index)||0)+1,rn=U[xe];if(rn&&(!(d==="alignment"?S!==oe(rn):!1)||Y.every(V=>oe(V.placement)===S?V.overflows[0]>0:!0)))return{data:{index:xe,overflows:Y},reset:{placement:rn}};let Ze=(Ts=Y.filter(ye=>ye.overflows[0]<=0).sort((ye,V)=>ye.overflows[1]-V.overflows[1])[0])==null?void 0:Ts.placement;if(!Ze)switch(u){case"bestFit":{var Es;const ye=(Es=Y.filter(V=>{if(O){const ce=oe(V.placement);return ce===S||ce==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(ce=>ce>0).reduce((ce,qo)=>ce+qo,0)]).sort((V,ce)=>V[1]-ce[1])[0])==null?void 0:Es[0];ye&&(Ze=ye);break}case"initialPlacement":Ze=a;break}if(i!==Ze)return{reset:{placement:Ze}}}return{}}}},ud=new Set(["left","top"]);async function fd(t,e){const{placement:n,platform:s,elements:i}=t,r=await(s.isRTL==null?void 0:s.isRTL(i.floating)),o=Oe(n),a=pt(n),l=oe(n)==="y",c=ud.has(o)?-1:1,p=r&&l?-1:1,d=dt(e,t);let{mainAxis:h,crossAxis:u,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof f=="number"&&(u=a==="end"?f*-1:f),l?{x:u*p,y:h*c}:{x:h*c,y:u*p}}const gd=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,s;const{x:i,y:r,placement:o,middlewareData:a}=e,l=await fd(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:o}}}}},md=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:s,placement:i,platform:r}=e,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:S=>{let{x:A,y:E}=S;return{x:A,y:E}}},...c}=dt(t,e),p={x:n,y:s},d=await r.detectOverflow(e,c),h=oe(i),u=fr(h);let f=p[u],k=p[h];const m=(S,A)=>ed(A+d[S==="y"?"top":"left"],A,A-d[S==="y"?"bottom":"right"]);o&&(f=m(u,f)),a&&(k=m(h,k));const x=l.fn({...e,[u]:f,[h]:k});return{...x,data:{x:x.x-n,y:x.y-s,enabled:{[u]:o,[h]:a}}}}}},kd=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:s,platform:i,elements:r}=e,{apply:o=()=>{},...a}=dt(t,e),l=await i.detectOverflow(e,a),c=Oe(n),p=pt(n),d=oe(n)==="y",{width:h,height:u}=s.floating;let f,k;c==="top"||c==="bottom"?(f=c,k=p===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(k=c,f=p==="end"?"top":"bottom");const m=u-l.top-l.bottom,x=h-l.left-l.right,S=We(u-l[f],m),A=We(h-l[k],x),E=e.middlewareData.shift,N=!E;let O=S,U=A;E!=null&&E.enabled.x&&(U=x),E!=null&&E.enabled.y&&(O=m),N&&!p&&(d?U=h-2*ie(l.left,l.right):O=u-2*ie(l.top,l.bottom)),await o({...e,availableWidth:U,availableHeight:O});const I=await i.getDimensions(r.floating);return h!==I.width||u!==I.height?{reset:{rects:!0}}:{}}}};function Gt(){return typeof window<"u"}function Ve(t){return xr(t)?(t.nodeName||"").toLowerCase():"#document"}function q(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ae(t){var e;return(e=(xr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function xr(t){return Gt()?t instanceof Node||t instanceof q(t).Node:!1}function X(t){return Gt()?t instanceof Element||t instanceof q(t).Element:!1}function be(t){return Gt()?t instanceof HTMLElement||t instanceof q(t).HTMLElement:!1}function yr(t){return!Gt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof q(t).ShadowRoot}function Zt(t){const{overflow:e,overflowX:n,overflowY:s,display:i}=ee(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+n)&&i!=="inline"&&i!=="contents"}function bd(t){return/^(table|td|th)$/.test(Ve(t))}function Yt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const vd=/transform|translate|scale|rotate|perspective|filter/,xd=/paint|layout|strict|content/,Pe=t=>!!t&&t!=="none";let Qn;function Xn(t){const e=X(t)?ee(t):t;return Pe(e.transform)||Pe(e.translate)||Pe(e.scale)||Pe(e.rotate)||Pe(e.perspective)||!es()&&(Pe(e.backdropFilter)||Pe(e.filter))||vd.test(e.willChange||"")||xd.test(e.contain||"")}function yd(t){let e=ze(t);for(;be(e)&&!ht(e);){if(Xn(e))return e;if(Yt(e))return null;e=ze(e)}return null}function es(){return Qn==null&&(Qn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Qn}function ht(t){return/^(html|body|#document)$/.test(Ve(t))}function ee(t){return q(t).getComputedStyle(t)}function Jt(t){return X(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ze(t){if(Ve(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yr(t)&&t.host||ae(t);return yr(e)?e.host:e}function wr(t){const e=ze(t);return ht(e)?(t.ownerDocument||t).body:be(e)&&Zt(e)?e:wr(e)}function ut(t,e,n){var s;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=wr(t),r=i===((s=t.ownerDocument)==null?void 0:s.body),o=q(i);if(r){const a=ts(o);return e.concat(o,o.visualViewport||[],Zt(i)?i:[],a&&n?ut(a):[])}else return e.concat(i,ut(i,[],n))}function ts(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function $r(t){const e=ee(t);let n=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const i=be(t),r=i?t.offsetWidth:n,o=i?t.offsetHeight:s,a=Ft(n)!==r||Ft(s)!==o;return a&&(n=r,s=o),{width:n,height:s,$:a}}function ns(t){return X(t)?t:t.contextElement}function Ke(t){const e=ns(t);if(!be(e))return re(1);const n=e.getBoundingClientRect(),{width:s,height:i,$:r}=$r(e);let o=(r?Ft(n.width):n.width)/s,a=(r?Ft(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const wd=re(0);function Sr(t){const e=q(t);return!es()||!e.visualViewport?wd:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $d(t,e,n){return e===void 0&&(e=!1),!!n&&e&&n===q(t)}function Me(t,e,n,s){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=ns(t);let o=re(1);e&&(s?X(s)&&(o=Ke(s)):o=Ke(t));const a=$d(r,n,s)?Sr(r):re(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,p=i.width/o.x,d=i.height/o.y;if(r&&s){const h=q(r),u=X(s)?q(s):s;let f=h,k=ts(f);for(;k&&u!==f;){const m=Ke(k),x=k.getBoundingClientRect(),S=ee(k),A=x.left+(k.clientLeft+parseFloat(S.paddingLeft))*m.x,E=x.top+(k.clientTop+parseFloat(S.paddingTop))*m.y;l*=m.x,c*=m.y,p*=m.x,d*=m.y,l+=A,c+=E,f=q(k),k=ts(f)}}return Kt({width:p,height:d,x:l,y:c})}function Qt(t,e){const n=Jt(t).scrollLeft;return e?e.left+n:Me(ae(t)).left+n}function Ar(t,e){const n=t.getBoundingClientRect(),s=n.left+e.scrollLeft-Qt(t,n),i=n.top+e.scrollTop;return{x:s,y:i}}function Sd(t){let{elements:e,rect:n,offsetParent:s,strategy:i}=t;const r=i==="fixed",o=ae(s),a=e?Yt(e.floating):!1;if(s===o||a&&r)return n;let l={scrollLeft:0,scrollTop:0},c=re(1);const p=re(0),d=be(s);if((d||!r)&&((Ve(s)!=="body"||Zt(o))&&(l=Jt(s)),d)){const u=Me(s);c=Ke(s),p.x=u.x+s.clientLeft,p.y=u.y+s.clientTop}const h=o&&!d&&!r?Ar(o,l):re(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+p.x+h.x,y:n.y*c.y-l.scrollTop*c.y+p.y+h.y}}function Ad(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Cd(t){const e=Jt(t),n=t.ownerDocument.body,s=ie(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=ie(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-e.scrollLeft+Qt(t);const o=-e.scrollTop;return ee(n).direction==="rtl"&&(r+=ie(t.clientWidth,n.clientWidth)-s),{width:s,height:i,x:r,y:o}}const Td=25;function Ed(t,e,n){n===void 0&&(n="viewport");const s=n==="layoutViewport",i=q(t),r=ae(t),o=i.visualViewport;let a=r.clientWidth,l=r.clientHeight,c=0,p=0;if(o){const h=!es()||e==="fixed";s?h||(c=-o.offsetLeft,p=-o.offsetTop):(a=o.width,l=o.height,h&&(c=o.offsetLeft,p=o.offsetTop))}if(Qt(r)<=0){const h=r.ownerDocument,u=h.body,f=getComputedStyle(u),k=h.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,m=Math.abs(r.clientWidth-u.clientWidth-k),x=getComputedStyle(r).scrollbarGutter==="stable both-edges"?m/2:m;x<=Td&&(a-=x)}return{width:a,height:l,x:c,y:p}}function Rd(t,e){const n=Me(t,!0,e==="fixed"),s=n.top+t.clientTop,i=n.left+t.clientLeft,r=Ke(t),o=t.clientWidth*r.x,a=t.clientHeight*r.y,l=i*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function Cr(t,e,n){let s;if(e==="viewport"||e==="layoutViewport")s=Ed(t,n,e);else if(e==="document")s=Cd(ae(t));else if(X(e))s=Rd(e,n);else{const i=Sr(t);s={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Kt(s)}function _d(t,e){const n=e.get(t);if(n)return n;let s=ut(t,[],!1).filter(a=>X(a)&&Ve(a)!=="body"),i=null;const r=ee(t).position==="fixed";let o=r?ze(t):t;for(;X(o)&&!ht(o);){const a=ee(o),l=Xn(o),c=i?i.position:r?"fixed":"";!l&&(c==="fixed"||c==="absolute"&&a.position==="static")?s=s.filter(d=>d!==o):i=a,o=ze(o)}return e.set(t,s),s}function Ld(t){let{element:e,boundary:n,rootBoundary:s,strategy:i}=t;const o=[...n==="clippingAncestors"?Yt(e)?[]:_d(e,this._c):[].concat(n),s],a=Cr(e,o[0],i);let l=a.top,c=a.right,p=a.bottom,d=a.left;for(let h=1;h<o.length;h++){const u=Cr(e,o[h],i);l=ie(u.top,l),c=We(u.right,c),p=We(u.bottom,p),d=ie(u.left,d)}return{width:c-d,height:p-l,x:d,y:l}}function Od(t){const{width:e,height:n}=$r(t);return{width:e,height:n}}function Pd(t,e,n){const s=be(e),i=ae(e),r=n==="fixed",o=Me(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=re(0);if((s||!r)&&((Ve(e)!=="body"||Zt(i))&&(a=Jt(e)),s)){const h=Me(e,!0,r,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}!s&&i&&(l.x=Qt(i));const c=i&&!s&&!r?Ar(i,a):re(0),p=o.left+a.scrollLeft-l.x-c.x,d=o.top+a.scrollTop-l.y-c.y;return{x:p,y:d,width:o.width,height:o.height}}function ss(t){return ee(t).position==="static"}function Tr(t,e){if(!be(t)||ee(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ae(t)===n&&(n=n.ownerDocument.body),n}function Er(t,e){const n=q(t);if(Yt(t))return n;if(!be(t)){let i=ze(t);for(;i&&!ht(i);){if(X(i)&&!ss(i))return i;i=ze(i)}return n}let s=Tr(t,e);for(;s&&bd(s)&&ss(s);)s=Tr(s,e);return s&&ht(s)&&ss(s)&&!Xn(s)?n:s||yd(t)||n}const zd=async function(t){const e=this.getOffsetParent||Er,n=this.getDimensions,s=await n(t.floating);return{reference:Pd(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Md(t){return ee(t).direction==="rtl"}const Id={convertOffsetParentRelativeRectToViewportRelativeRect:Sd,getDocumentElement:ae,getClippingRect:Ld,getOffsetParent:Er,getElementRects:zd,getClientRects:Ad,getDimensions:Od,getScale:Ke,isElement:X,isRTL:Md};function Rr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Nd(t,e,n){let s=null,i;const r=ae(t);function o(){var p;clearTimeout(i),(p=s)==null||p.disconnect(),s=null}function a(p,d){p===void 0&&(p=!1),d===void 0&&(d=1),o();const h=t.getBoundingClientRect(),{left:u,top:f,width:k,height:m}=h;if(p||e(),!k||!m)return;const x=Wt(f),S=Wt(r.clientWidth-(u+k)),A=Wt(r.clientHeight-(f+m)),E=Wt(u),O={rootMargin:-x+"px "+-S+"px "+-A+"px "+-E+"px",threshold:ie(0,We(1,d))||1};let U=!0;function I(te){const Y=te[0].intersectionRatio;if(!Rr(h,t.getBoundingClientRect()))return a();if(Y!==d){if(!U)return a();Y?a(!1,Y):i=setTimeout(()=>{a(!1,1e-7)},1e3)}U=!1}try{s=new IntersectionObserver(I,{...O,root:r.ownerDocument})}catch{s=new IntersectionObserver(I,O)}s.observe(t)}const l=q(t),c=()=>a(n);return l.addEventListener("resize",c),a(!0),()=>{l.removeEventListener("resize",c),o()}}function Dd(t,e,n,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=ns(t),p=i||r?[...c?ut(c):[],...e?ut(e):[]]:[];p.forEach(x=>{i&&x.addEventListener("scroll",n),r&&x.addEventListener("resize",n)});const d=c&&a?Nd(c,n,r):null;let h=-1,u=null;o&&(u=new ResizeObserver(x=>{let[S]=x;S&&S.target===c&&u&&e&&(u.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var A;(A=u)==null||A.observe(e)})),n()}),c&&!l&&u.observe(c),e&&u.observe(e));let f,k=l?Me(t):null;l&&m();function m(){const x=Me(t);k&&!Rr(k,x)&&n(),k=x,f=requestAnimationFrame(m)}return n(),()=>{var x;p.forEach(S=>{i&&S.removeEventListener("scroll",n),r&&S.removeEventListener("resize",n)}),d?.(),(x=u)==null||x.disconnect(),u=null,l&&cancelAnimationFrame(f)}}const jd=gd,qd=md,Bd=hd,Ud=kd,Hd=(t,e,n)=>{const s=new Map,i=n??{},r={...Id,...i.platform,_c:s};return pd(t,e,{...i,platform:r})},Fd=(t,e)=>({top:e,bottom:e,right:t}),Wd=(t,e,n,s={})=>{if(typeof t.showPopover!="function")return()=>{};try{t.showPopover()}catch{return()=>{}}let i=!0,r=0;const o=e instanceof Element?e:{getBoundingClientRect:()=>({x:e.right,y:e.top,left:e.right,right:e.right,top:e.top,bottom:e.bottom,width:0,height:e.bottom-e.top})};t.style.width=`${n.width}px`,t.style.maxHeight=`${n.height}px`;const l=Dd(o,t,()=>{const c=++r;Hd(o,t,{strategy:"fixed",placement:s.placement??"bottom-end",middleware:[jd(8),Bd({padding:8,fallbackAxisSideDirection:"end"}),qd({padding:8}),Ud({padding:8,apply:({availableWidth:p,availableHeight:d})=>{!i||c!==r||(t.style.width=`${Math.max(0,Math.min(n.width,p))}px`,t.style.maxHeight=`${Math.max(0,Math.min(n.height,d))}px`)}})]}).then(({x:p,y:d})=>{!i||c!==r||!t.isConnected||(t.style.left=`${p}px`,t.style.top=`${d}px`)}).catch(()=>{})},{animationFrame:s.trackTransform??!1,elementResize:typeof ResizeObserver<"u",layoutShift:typeof IntersectionObserver<"u"});return()=>{i=!1,l()}},Vd=t=>{if(!(!t||typeof t.hidePopover!="function"))try{t.hidePopover()}catch{}};class _r{#e;#n=new Map;constructor(e){this.#e=e,e.addController(this)}hostConnected(){this.#e.requestUpdate()}hostUpdated(){for(const[e,n]of this.#n)e.isConnected||(n(),this.#n.delete(e))}hostDisconnected(){for(const e of this.#n.values())e();this.#n.clear()}open(e,n,s,i){this.#n.get(e)?.(),this.#n.set(e,Wd(e,n,s,i))}}const Lr=(t,e,n)=>{typeof window>"u"||Object.assign(window,{devProcessKit:{version:t,templates:e,versionParam:n}})},ft="dpk-version",Or="version",Kd=/^\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,Xt=t=>Kd.test(t),Gd="https://cdn.jsdelivr.net/npm/dev-process-kit@",Pr="https://data.jsdelivr.com/v1/packages/npm/dev-process-kit",is=t=>{const e=new URLSearchParams(t),n=e.get(ft)??e.get(Or);return n!==null&&Xt(n)?n:null},Zd=(t,e)=>{const n=is(t);return n===null||n===e?null:n},Yd=(t,e)=>{if(!Xt(t))throw new Error(`not an exact version: ${t}`);if(!/^[a-z0-9-]+(?:\/[a-z0-9-]+)*\.js$/.test(e))throw new Error(`not an entry path: ${e}`);return`${Gd}${t}/dist/${e}`},Jd=(t,e)=>{const n=new URL(t);return n.searchParams.delete(Or),e===null?n.searchParams.delete(ft):n.searchParams.set(ft,e),n.href},Qd=L({tags:se(He(b(),ke()),{}),versions:F(L({version:b()}))}),Xd=t=>{const e=zn(Qd,t),n=e.tags.latest;return{latest:typeof n=="string"&&Xt(n)?n:null,versions:e.versions.map(s=>s.version).filter(Xt)}},zr=t=>{const e=t.published?.versions??[],n=e.includes(t.current)?e:[t.current,...e],s=t.published?.latest??null;return{value:t.current,options:[...t.requested?[{value:"",label:t.text.pinned}]:[],...n.map(i=>({value:i,label:i===s&&i!==t.current?t.text.latest(i):i}))]}};let en;const Mr=()=>(en??=fetch(Pr).then(async t=>{if(!t.ok)throw new Error(`${Pr} answered ${t.status}`);return Xd(await t.json())}),en.catch(()=>{en=void 0}),en),Ir=t=>{location.assign(Jd(location.href,t))},ep=t=>import(t),tp=({entry:t,templates:e,register:n,importModule:s=ep})=>{const i=()=>{n(),Lr(Q,e,ft)},r=typeof location>"u"?null:Zd(location.search,Q);if(r===null){i();return}s(Yd(r,t)).then(()=>{np()||ip(r)},o=>{console.error(`dev-process-kit@${r} could not be loaded; running ${Q}`,o),i()})},np=()=>{const t=Reflect.get(window,"devProcessKit");return typeof t=="object"&&t!==null&&"versionParam"in t},rs="dpk-version-fallback",sp=`
  .${rs} {
    flex: none;
    height: 24px;
    margin-left: auto;
    padding: 0 22px 0 10px;
    border: 1px solid var(--dpk-rule, #8884);
    border-radius: 999px;
    background: var(--dpk-paper-sunken, transparent)
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'><path d='M3 4.5 6 7.5 9 4.5' fill='none' stroke='%23878e9e' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>")
      no-repeat right 8px center;
    appearance: none;
    field-sizing: content;
    color: var(--dpk-ink-soft, inherit);
    font-family: var(--dpk-mono, ui-monospace, monospace);
    font-size: 10px;
    letter-spacing: 0.02em;
    cursor: pointer;
  }
`,ip=t=>{const e=[...document.body.querySelectorAll("*")].filter(n=>n.localName.startsWith("dpk-template-")&&!n.querySelector(`:scope > .${rs}`));if(e.length!==0){document.head.append(Object.assign(document.createElement("style"),{textContent:sp}));for(const n of e)n.append(rp(n,t))}},rp=(t,e)=>{const n=W(_t(Rt(t))),s=document.createElement("select");s.className=rs,s.slot="header",s.setAttribute("aria-label",n.versionLabel),s.title=n.versionLabel;const i=o=>{const a=zr({current:e,requested:is(location.search)!==null,published:o,text:{pinned:n.versionPinned,latest:n.versionLatest}});s.replaceChildren(...a.options.map(l=>Object.assign(document.createElement("option"),{value:l.value,textContent:l.label}))),s.value=a.value},r=()=>{Mr().then(i,o=>console.warn(o))};return s.addEventListener("pointerenter",r,{once:!0}),s.addEventListener("focus",r,{once:!0}),s.addEventListener("change",()=>Ir(s.value===""?null:s.value)),i(null),s},op=L({value:b()}),ap=t=>e=>{if(!(e instanceof CustomEvent))return;const n=C(op,e.detail);n.success&&t(n.output.value)},os=t=>e=>{const n=je(e.target,HTMLSelectElement);n!==null&&t(n.value)},lp=t=>e=>{const n=je(e.target,HTMLInputElement);n!==null&&t(n.checked)},Nr="data-dpk-changes",cp=/^[^:\s]+:\S+$/,dp=Z({id:se(y(b(),$(1))),title:y(b(),$(1)),body:se(b()),target:se(y(b(),ge(cp,'target must be written "type:id"'))),navigate:se(y(b(),Ri("=",'navigate must be written "key=value"')))}),pp=F(dp),hp=y(b(),$(1)),Dr=Z({revision:hp,changes:pp}),up=Z({revisions:y(F(Dr),$(1,"list at least one version"))}),fp=(t,e)=>JSON.stringify([t,e]),gt=t=>[...t.earlier,t.latest],gp=t=>{const e=t.changes.map((s,i)=>{const r=s.id??String(i);return{key:fp(t.revision,r),id:r,revision:t.revision,title:s.title,body:s.body??null,target:s.target??null,navigate:s.navigate??null}});return new Set(e.map(s=>s.id)).size!==e.length?`change ids must be unique within version "${t.revision}"`:{revision:t.revision,entries:e}},mp=t=>{const e=typeof t=="object"&&t!==null&&"revisions"in t,n=C(e?up:Dr,t);if(!n.success)return{ok:!1,error:Ml(n.issues)};const s=n.output,i="revisions"in s?s.revisions:[s],r=[];for(const a of i){if(r.some(c=>c.revision===a.revision))return{ok:!1,error:`version "${a.revision}" is listed twice`};const l=gp(a);if(typeof l=="string")return{ok:!1,error:l};r.push(l)}const o=r.pop();return o?{ok:!0,log:{earlier:r,latest:o}}:{ok:!1,error:"list at least one version"}},kp=Z({v:me(1),revision:b(),seen:F(b())}),bp=Z({v:me(2),since:b(),seen:He(b(),F(b()))}),jr=t=>{const e=C(bp,t);if(e.success)return e.output;const n=C(kp,t);return n.success?{v:2,since:n.output.revision,seen:{[n.output.revision]:n.output.seen}}:null},as={open:!1,fresh:new Set},qr=t=>e=>t.told.has(e.revision)&&!t.seen.has(e.key),ls=(t,e)=>gt(t).flatMap(n=>n.entries.filter(qr(e))),Br=t=>t.target!==null||t.navigate!==null,vp=(t,e)=>{const n=gt(t),s=e===null?-1:n.findIndex(o=>o.revision===e.since),i=e===null?[t.latest]:n.slice(Math.max(0,s)),r=new Set(i.flatMap(o=>{const a=new Set(e?.seen[o.revision]??[]);return o.entries.filter(l=>a.has(l.id)).map(l=>l.key)}));return{told:new Set(i.map(o=>o.revision)),seen:r,toasts:t.latest.entries.filter(o=>!r.has(o.key)).map(o=>o.key),list:as}},cs=(t,e)=>new Set([...t.seen,...e]),xp=(t,e,n)=>{switch(n.kind){case"open-list":{const s=ls(t,e),i=new Set(s.map(o=>o.key)),r=s.filter(o=>!Br(o)).map(o=>o.key);return{...e,seen:cs(e,r),toasts:[],list:{open:!0,fresh:i}}}case"close-list":return{...e,list:as};case"close-toast":return{...e,toasts:e.toasts.filter(s=>s!==n.key)};case"jump":return{...e,seen:cs(e,[n.key]),toasts:e.toasts.filter(s=>s!==n.key),list:as};case"read-all":return{...e,seen:cs(e,ls(t,e).map(s=>s.key)),toasts:[],list:{open:e.list.open,fresh:new Set}}}},yp=(t,e)=>ls(t,e).length,wp=(t,e)=>{const n=gt(t),s=n.findIndex(o=>e.told.has(o.revision)&&o.entries.some(qr(e))),i=s===-1?n.length-1:s,r=n.slice(i).flatMap(o=>{const a=o.entries.filter(l=>e.seen.has(l.key)).map(l=>l.id);return a.length>0?[[o.revision,a]]:[]});return{v:2,since:n[i]?.revision??t.latest.revision,seen:Object.fromEntries(r)}},$p=(t,e)=>t.target===null&&t.navigate===null?null:{navigate:t.navigate!==null?Ut(t.navigate):t.target!==null?e(at(t.target)):null,target:t.target},Ur=3,Sp=t=>e=>({key:e.key,id:e.id,revision:e.revision,title:e.title,body:e.body,jumpable:Br(e),fresh:t.list.fresh.has(e.key)}),Ap=(t,e)=>{const n=gt(t).map(r=>({revision:r.revision,latest:r===t.latest,cards:r.entries.map(Sp(e))})).reverse(),s=new Map(n.flatMap(r=>r.cards.map(o=>[o.key,o]))),i=e.toasts.flatMap(r=>{const o=s.get(r);return o?[o]:[]});return{unread:yp(t,e),open:e.list.open,groups:n,toasts:i.slice(0,Ur),waiting:Math.max(0,i.length-Ur)}},mt=t=>t==="light"||t==="dark"?t:null,Hr=t=>t.authored??t.environment,Fr=t=>t.preference??Hr(t),Cp=t=>{const e=Fr(t)==="dark"?"light":"dark";return e===Hr(t)?null:e},Wr=F(Z({value:y(b(),ge(/^element:.+/)),label:y(b(),$(1)),group:P(b())})),Tp=L({targets:Wr,providers:F(L({id:y(b(),$(1)),results:F(Ki)}))}),Ep=Z({target:y(b(),ge(/^element:.+/)),body:y(b(),On(),$(1))}),Vr=t=>t.group?`${t.group} \xB7 ${t.label}`:t.label,Kr=(t,e,n)=>{const s=new Map(e.map(i=>[i.value,i]));return{...t,hasTarget:(i,r)=>t.hasTarget(i,r)||s.has(D(r)),commentTargets:(i,r)=>{const o=t.commentTargets(i,r),a=new Set(o.map(l=>l.value));return[...o,...e.filter(l=>!a.has(l.value))]},describe:(i,r,o)=>{if(J(i)){const c=n.get(i.id),p=s.get(D(i.target));return{title:c?.title??i.type,...c?.summary===void 0?{}:{summary:c.summary},tone:c?.tone??"update",targetLabel:p?Vr(p):i.target.id}}const a=t.describe(i,r,o),l=i.type==="comment"&&!t.hasTarget(r,i.target)?s.get(D(i.target)):void 0;return l===void 0?a:{...a,targetLabel:Vr(l)}},serialize:i=>J(i)?`${i.type} ${D(i.target)} ${JSON.stringify(i.payload)}`:t.serialize(i)}},Gr=typeof globalThis=="object"&&globalThis||typeof window=="object"&&window||typeof self=="object"&&self||typeof global=="object"&&global||(function(){return this})();function Zr(t){return typeof Gr.Buffer<"u"&&Gr.Buffer.isBuffer(t)}function Yr(t){if(!t||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype||Object.getPrototypeOf(e)===null?Object.prototype.toString.call(t)==="[object Object]":!1}function Jr(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function Qr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Rp="[object RegExp]",_p="[object String]",Lp="[object Number]",Op="[object Boolean]",Pp="[object Symbol]",zp="[object Date]",Mp="[object Map]",Ip="[object Set]",Np="[object Array]",Dp="[object Function]",jp="[object ArrayBuffer]",ds="[object Object]",qp="[object Error]",Bp="[object DataView]",Up="[object Uint8Array]",Hp="[object Uint8ClampedArray]",Fp="[object Uint16Array]",Wp="[object Uint32Array]",Vp="[object BigUint64Array]",Kp="[object Int8Array]",Gp="[object Int16Array]",Zp="[object Int32Array]",Yp="[object BigInt64Array]",Jp="[object Float32Array]",Qp="[object Float64Array]";function Xp(t,e){return t===e||Number.isNaN(t)&&Number.isNaN(e)}function eh(t,e,n){return kt(t,e,void 0,void 0,void 0,void 0,n)}function kt(t,e,n,s,i,r,o){const a=o(t,e,n,s,i,r);if(a!==void 0)return a;if(typeof t==typeof e)switch(typeof t){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return t===e;case"number":return t===e||Object.is(t,e);case"function":return t===e;case"object":return bt(t,e,r,o)}return bt(t,e,r,o)}function bt(t,e,n,s){if(Object.is(t,e))return!0;let i=Qr(t),r=Qr(e);if(i==="[object Arguments]"&&(i=ds),r==="[object Arguments]"&&(r=ds),i!==r)return!1;switch(i){case _p:return t.toString()===e.toString();case Lp:return Xp(t.valueOf(),e.valueOf());case Op:case zp:case Pp:return Object.is(t.valueOf(),e.valueOf());case Rp:return t.source===e.source&&t.flags===e.flags;case Dp:return t===e}n=n??new Map;const o=n.get(t),a=n.get(e);if(o!=null&&a!=null)return o===e;n.set(t,e),n.set(e,t);try{switch(i){case Mp:if(t.size!==e.size)return!1;for(const[l,c]of t.entries())if(!e.has(l)||!kt(c,e.get(l),l,t,e,n,s))return!1;return!0;case Ip:{if(t.size!==e.size)return!1;const l=Array.from(t.values()),c=Array.from(e.values());for(let p=0;p<l.length;p++){const d=l[p],h=c.findIndex(u=>kt(d,u,void 0,t,e,n,s));if(h===-1)return!1;c.splice(h,1)}return!0}case Np:case Up:case Hp:case Fp:case Wp:case Vp:case Kp:case Gp:case Zp:case Yp:case Jp:case Qp:if(Zr(t)!==Zr(e)||t.length!==e.length)return!1;for(let l=0;l<t.length;l++)if(!kt(t[l],e[l],l,t,e,n,s))return!1;return!0;case jp:return t.byteLength!==e.byteLength?!1:bt(new Uint8Array(t),new Uint8Array(e),n,s);case Bp:return t.byteLength!==e.byteLength||t.byteOffset!==e.byteOffset?!1:bt(new Uint8Array(t),new Uint8Array(e),n,s);case qp:return t.name===e.name&&t.message===e.message;case ds:{if(!(bt(t.constructor,e.constructor,n,s)||Yr(t)&&Yr(e)))return!1;const l=[...Object.keys(t),...Jr(t)],c=[...Object.keys(e),...Jr(e)];if(l.length!==c.length)return!1;for(let p=0;p<l.length;p++){const d=l[p],h=t[d];if(!Object.hasOwn(e,d))return!1;const u=e[d];if(!kt(h,u,d,t,e,n,s))return!1}return!0}default:return!1}}finally{n.delete(t),n.delete(e)}}function th(){}function vt(t,e){return eh(t,e,th)}const Xr="page",eo=t=>D(t),to=(t,e,n,s=new Map)=>{let i=e;const r=[],o=[],a=[],l=[],c=new Map;for(const d of n){if(d.type===j)continue;if(J(d)){const f=s.get(d.id);f===void 0||f.stale!==void 0?o.push({action:d,reason:f?.stale??"target-missing"}):r.push(d);continue}const h=Bt(t.actions,d.type);if(!h){o.push({action:d,reason:"unsupported-action-type"});continue}const u=t.apply(i,d);if(u===null){o.push({action:d,reason:t.hasTarget(i,d.target)?"constraint-violated":"target-missing"});continue}if(h.mode!=="append"&&ps(t,i,u)){a.push(d);continue}i=u,r.push(d)}for(const d of n){if(d.type!==j)continue;if(d.target.type!==Xr&&!t.hasTarget(i,d.target)){o.push({action:d,reason:"target-missing"});continue}l.push(d);const h=eo(d.target);c.set(h,[...c.get(h)??[],d])}const p=new Map(n.map((d,h)=>[d.id,h]));return o.sort((d,h)=>(p.get(d.action.id)??0)-(p.get(h.action.id)??0)),{base:e,state:i,actions:n,applied:r,stale:o,obsolete:a,comments:l,commentsByTarget:c}},ps=(t,e,n)=>e===n?!0:t.canonicalState===void 0?vt(e,n):vt(t.canonicalState(e),t.canonicalState(n)),no=t=>{const e=new Set(t.obsolete.map(n=>n.id));return t.actions.filter(n=>!e.has(n.id))},nh=(t,e,n,s)=>{let i=e;const r=s??so(i).map(o=>o.id);for(const o of[...r].reverse())i=sh(t,i,n,o,s!==void 0)??i;return i},so=t=>t.applied.filter(e=>!J(e)),sh=(t,e,n,s,i)=>{const r=so(e),o=r.findIndex(h=>h.id===s),a=r[o];if(a===void 0)return null;const l=r.slice(0,o),c=[...i?ih(t,e.base,r,o):[],...rh(t,l,a)],p=new Set,d=c.filter(h=>{const u=h.join(" ");return p.has(u)?!1:(p.add(u),!0)}).sort((h,u)=>u.length-h.length);for(const h of d){const u=oh(t,e,n,h);if(u!==null)return u}return null},ih=(t,e,n,s)=>{const i=[];let r=e;for(const o of n.slice(0,s+1))i.push(r),r=t.apply(r,o)??r;return i.flatMap((o,a)=>ps(t,o,r)?[n.slice(a,s+1).map(l=>l.id)]:[])},rh=(t,e,n)=>{const s=io(n),i=e.filter(l=>io(l).some(c=>s.includes(c))),r=ro(t,n),o=i.filter(l=>ro(t,l)===r),a=l=>l.map((c,p)=>[...l.slice(p).map(d=>d.id),n.id]);return[...a(i),...a(o),...i.map(l=>[l.id,n.id]),...i.map(l=>[l.id])]},io=t=>{const e=t.target.type===Xr?[]:t.target.id.split("."),n=typeof t.payload=="object"&&t.payload!==null?Object.values(t.payload).filter(s=>typeof s=="string"&&s!==""):[];return[...e,...n]},ro=(t,e)=>Bt(t.actions,e.type)?.mode,oh=(t,e,n,s)=>{const i=new Set(e.stale.map(o=>o.action.id)),r=new Set(s);for(;;){const o=n(e.actions.filter(l=>!r.has(l.id))),a=o.stale.filter(l=>!i.has(l.action.id)).map(l=>l.action);if(a.length===0)return ps(t,o.state,e.state)?o:null;if(a.some(l=>l.type===j||J(l)))return null;for(const l of a)r.add(l.id)}},ah=L({v:me(1),template:y(b(),$(1)),actions:F(ke())});class hs{constructor(e){this.storage=e}load(e,n){try{const s=this.storage.getItem(e);if(s===null)return[];const i=C(ah,JSON.parse(s));return!i.success||i.output.template!==n?[]:i.output.actions.flatMap(r=>{const o=C(_e,r);return o.success?[o.output]:[]})}catch{return[]}}save(e,n,s){const i={v:1,template:n,actions:s};try{this.storage.setItem(e,JSON.stringify(i))}catch{}}clear(e){try{this.storage.removeItem(e)}catch{}}}class us{constructor(){this.store=new Map}load(e,n){return new hs({getItem:s=>this.store.get(s)??null,setItem:(s,i)=>{this.store.set(s,i)},removeItem:s=>{this.store.delete(s)}}).load(e,n)}save(e,n,s){this.store.set(e,JSON.stringify({v:1,template:n,actions:s}))}clear(e){this.store.delete(e)}}const fs=()=>{try{if(typeof localStorage<"u")return new hs(localStorage)}catch{}return new us},xt=t=>`dev-process-kit:draft:${typeof location>"u"?"local":`${location.pathname}${location.search}`}:${t}`,oo="dpk-storage-request",lh=t=>{if(typeof t!="object"||t===null)return!1;const e=t;return typeof e.load=="function"&&typeof e.save=="function"&&typeof e.clear=="function"&&(e.subscribe===void 0||typeof e.subscribe=="function")},ao=(t,e,n)=>{let s;const i={template:e,storageKey:n,provide(r,o){if(s!==void 0||!lh(r))return;const a=typeof o?.author=="string"&&o.author.length>0?o.author:void 0;s=a===void 0?{storage:r}:{storage:r,author:a}}};return t.dispatchEvent(new CustomEvent(oo,{detail:i,bubbles:!0,composed:!0})),s},ch=F(ke());class lo{#e;#n;#i={targets:[],providers:[]};#r=new Map;#t;#s;#o;#l;#a;#p;#h;#f=new Set;#k=[];#b=0;constructor(e){this.#e=e.definition,this.#n=Kr(e.definition,[],this.#r),this.#t=e.base,this.#a=e.storageKey??xt(e.definition.name),this.#l=e.storage===void 0?fs():e.storage,this.#p=e.author;const n=e.initialActions??this.#l?.load(this.#a,this.definition.name)??[];this.#s=gs(this.definition,n),this.#o=this.#u(this.#s),this.#v()&&this.#S(),this.#h=this.#l?.subscribe?.(this.#a,this.definition.name,s=>this.#$(s))}dispose(){this.#h?.()}#$(e){const n=gs(this.definition,e);if(!vt(n,this.#s)){this.#k=[],this.#s=n,this.#m(),this.#o=this.#u(this.#s);for(const s of this.#f)s()}}get definition(){return this.#n}setComponentSnapshot(e){const n=zn(Tp,e);if(!vt(n,this.#i)){this.#i=n,this.#m(),this.#o=this.#u(this.#s);for(const s of this.#f)s()}}setTemplate(e){this.#e=e,this.#m(),this.#o=this.#u(this.#s);for(const n of this.#f)n()}#m(){this.#r=Gi(this.#s,this.#i.providers),this.#n=Kr(this.#e,this.#i.targets,this.#r)}#u(e){return to(this.definition,this.#t,e,Gi(e,this.#i.providers))}get base(){return this.#t}get actions(){return this.#s}get derivation(){return this.#o}get lastIssues(){return this.#k}get prunedCount(){return this.#b}descriptorFor(e,n){return co(this.definition,e,n)}dispatch(e){const n=this.#d(e,this.#o.state);if(!n.ok)return this.#c([n.issue]);const s=this.descriptorFor(n.action.type,n.action.target);return s?(this.#g(Nn(this.#s,n.action,s),[n.action.id]),{ok:!0,id:n.action.id}):this.#c([{path:"type",message:"unknown action type"}])}dispatchBatch(e){const n=C(ch,e);if(!n.success)return this.#c([Le(n.issues)]);const s=n.output;if(s.length===0)return{ok:!0,ids:[]};let i=this.#s,r=this.#o.state;const o=[];for(const a of s){const l=this.#d(a,r);if(!l.ok)return this.#c([l.issue]);const c=l.action,p=this.descriptorFor(c.type,c.target);if(!p)return this.#c([{path:"type",message:"unknown action type"}]);if((c.type==="comment"||J(c)?c.target.type==="page"||this.definition.hasTarget(r,c.target)?r:null:this.definition.apply(r,c))===null)return this.#c([{path:"target",message:"batch action is not applicable"}]);i=Nn(i,c,p),r=this.#u(i).state,o.push(c.id)}return this.#g(i,o),{ok:!0,ids:o}}#d(e,n){const s=C(Hi,e);if(!s.success)return{ok:!1,issue:Le(s.issues)};const i=this.descriptorFor(s.output.type,typeof s.output.target=="string"?Mn(s.output.target,"page"):s.output.target);if(!i)return{ok:!1,issue:{path:"type",message:`unknown action type "${s.output.type}"`}};const r=Vl(s.output,i,this.#p);if(!r.ok)return r;const o=this.definition.canonicalTarget?.(n,r.action.target)??r.action.target;return{ok:!0,action:{...r.action,target:o}}}#c(e){return this.#k=e,{ok:!1,issues:e}}editComment(e,n){const s=this.#s.find(a=>a.id===e);if(s?.type!==j)return this.#c([{path:"id",message:`no comment "${e}" in the draft`}]);if(lt(s)===n)return{ok:!0,id:e};const i=C(jn.schema,{...s,payload:{body:n}});if(!i.success)return this.#c([Le(i.issues)]);const r=C(_e,i.output);if(!r.success)return this.#c([Le(r.issues)]);const o=r.output;return this.#g(this.#s.map(a=>a===s?o:a),[]),{ok:!0,id:e}}removeAction(e){const n=this.#s.filter(s=>s.id!==e);n.length!==this.#s.length&&this.#g(n)}clearActions(){this.#s.length>0&&this.#g([])}replaceActions(e){this.#g(gs(this.definition,e))}setBase(e){this.#t=e,this.#g(this.#s)}subscribe(e){return this.#f.add(e),()=>{this.#f.delete(e)}}exportDraft(e){return{template:this.definition.name,frameworkVersion:e,exportedAt:new Date().toISOString(),actions:this.#s}}#g(e,n){this.#k=[],this.#s=e,this.#m(),this.#o=this.#u(this.#s),this.#v(n),this.#S();for(const s of this.#f)s()}#v(e){const n=this.#y(),s=nh(this.definition,this.#o,i=>this.#u(i),e);return s===this.#o?n:(this.#b+=this.#s.length-s.actions.length,this.#s=[...s.actions],this.#m(),this.#o=this.#u(this.#s),this.#y(),!0)}#y(){return this.#o.obsolete.length===0?!1:(this.#b+=this.#o.obsolete.length,this.#s=no(this.#o),this.#m(),this.#o=this.#u(this.#s),!0)}#S(){this.#l?.save(this.#a,this.definition.name,this.#s)}}const co=(t,e,n)=>e==="comment"?jn:n!==void 0&&J({type:e,target:n})?Jl:Bt(t.actions,e),gs=(t,e)=>e.flatMap(n=>{const s=C(_e,n);if(!s.success)return[];const i=s.output,r=co(t,i.type,i.target);if(!r)return[];const o=C(r.schema,i);if(!o.success)return[];const a=C(_e,o.output);return a.success?[a.output]:[]}),dh=()=>({status:{kind:"idle"},request:0}),ph=(t,e)=>{switch(e.kind){case"copy-started":return{status:{kind:"copying"},request:t.request+1};case"send-started":return{status:{kind:"sending"},request:t.request+1};case"copy-finished":return e.request!==t.request||t.status.kind!=="copying"?t:{...t,status:{kind:e.ok?"copied":"copy-failed"}};case"send-finished":return e.request!==t.request||t.status.kind!=="sending"?t:{...t,status:e.outcome.ok?{kind:"sent"}:{kind:"send-failed",reason:e.outcome.reason}};case"settled":return e.request===t.request?{...t,status:{kind:"idle"}}:t}},hh=(t,e)=>{if(t.actions===0||t.railOpen)return null;const n=W(t.locale),s=e.status;return{send:t.sendable?{label:s.kind==="sending"?n.handoffSending:s.kind==="sent"?n.handoffSent:n.handoffSend,disabled:s.kind==="sending"}:null,copy:s.kind==="copied"?{label:n.handoffCopied,status:"copied"}:s.kind==="copy-failed"?{label:n.handoffCopyFailed,status:"failed"}:{label:n.handoffCopy,status:"idle"},note:s.kind==="send-failed"?Vn(s.reason,t.locale):null}},po=t=>{const e=t.derivation();return{base:e.base,state:e.state,navigation:t.navigation(),actions:t.controller().actions,comments:e.comments,stale:e.stale,issues:t.issues()}},uh=t=>{const e=t.derivation();return{state:e.state,base:e.base,navigation:t.navigation(),actions:t.controller().actions,comments:e.comments,stale:e.stale,commentCount:n=>{const s=typeof n=="string"?n:D(n);return e.commentsByTarget.get(s)?.length??0},dispatch:n=>t.dispatch(n),dispatchBatch:n=>t.dispatchBatch(n),navigate:(n,s)=>t.navigate(n,s),hashFor:n=>t.hashFor(n),requestComment:n=>t.requestComment(n)}},fh=(t,e)=>{const n=()=>po(t);return{version:Q,template:t.definition.name,host:e,ready:t.ready,get base(){return t.controller().base},get state(){return t.derivation().state},get navigation(){return t.navigation()},get actions(){return t.controller().actions},get comments(){return t.derivation().comments},get stale(){return t.derivation().stale},get issues(){return t.issues()},dispatch:s=>t.dispatch(s),dispatchBatch:s=>t.dispatchBatch(s),comment:(s,i)=>t.dispatch({type:j,target:s,payload:{body:i}}),editComment:(s,i)=>t.editComment(s,i),removeAction:s=>t.removeAction(s),clearActions:()=>t.clearActions(),importDraft:s=>t.controller().replaceActions(s),navigate:(s,i)=>t.navigate(s,i),hashFor:s=>t.hashFor(s),snapshot:n,exportDraft:()=>t.controller().exportDraft(Q),exportBrief:()=>Fn(n(),t.controller().definition,Q),subscribe:s=>t.subscribe(s)}},ms=(t,e)=>({read(n){try{const s=t.getItem(n);return s===null?null:e(JSON.parse(s))}catch{return null}},write(n,s){try{return t.setItem(n,JSON.stringify(s)),!0}catch{return!1}},remove(n){try{t.removeItem(n)}catch{}}}),le=t=>{const e=new Map;return ms({getItem:n=>e.get(n)??null,setItem:(n,s)=>{e.set(n,s)},removeItem:n=>{e.delete(n)}},t)},Ge=t=>{try{if(typeof localStorage<"u")return ms(localStorage,t)}catch{}return le(t)},gh=t=>{try{if(typeof sessionStorage<"u")return ms(sessionStorage,t)}catch{}return le(t)},mh=8e3,kh=t=>t.localName==="script"&&t.getAttribute("type")==="application/json"&&t.hasAttribute(Nr);class bh{#e;#n;#i=null;#r=null;#t=null;#s=null;#o="";#l=null;#a=new Map;#p=new Set;constructor(e,n){this.#e=e,this.#n=n,e.addController(this)}get view(){return this.#i&&this.#t?Ap(this.#i,this.#t):null}get error(){return this.#r}hostConnected(){!this.#f()&&!this.#k()&&this.#m(),document.addEventListener("pointerdown",this.#g,!0),document.addEventListener("keydown",this.#v)}hostUpdate(){!this.#f()&&this.#k()&&this.#u()}hostDisconnected(){this.#u(),document.removeEventListener("pointerdown",this.#g,!0),document.removeEventListener("keydown",this.#v);for(const e of this.#a.values())e.handle!==null&&clearTimeout(e.handle);this.#a.clear()}send(e){!this.#i||!this.#t||(this.#t=xp(this.#i,this.#t,e),this.#b(),this.#d(),this.#e.requestUpdate())}toggleList(){this.send({kind:this.#t?.list.open?"close-list":"open-list"})}show(e){const n=this.#i?gt(this.#i).flatMap(s=>s.entries).find(s=>s.key===e):void 0;n&&(this.send({kind:"jump",key:e}),this.#n.show(n))}pause(e){const n=this.#p.size>0;if(this.#p.add(e),n)return;const s=Date.now();for(const i of this.#a.values())i.handle!==null&&clearTimeout(i.handle),i.handle=null,i.remaining=Math.max(0,i.deadline-s)}resume(e){if(!(!this.#p.delete(e)||this.#p.size>0))for(const[n,s]of this.#a)this.#c(n,s)}#h(){return`${this.#n.storageKey()}:seen-changes`}#f(){return this.#i!==null||this.#r!==null}#k(){const e=[...this.#e.children].find(kh);if(!e)return!1;let n;try{n=JSON.parse(e.textContent??"")}catch(i){return this.#$(i instanceof Error?i.message:String(i))}const s=mp(n);return s.ok?(this.#i=s.log,this.#s=this.#n.persist()?Ge(jr):le(jr),this.#t=vp(s.log,this.#s.read(this.#h())),this.#b(),this.#d(),this.#e.requestUpdate(),!0):this.#$(s.error)}#b(){if(!this.#i||!this.#t)return;const e=wp(this.#i,this.#t),n=JSON.stringify(e);n!==this.#o&&(this.#o=n,this.#s?.write(this.#h(),e))}#$(e){return console.error("[dev-process-kit] invalid change log:",e),this.#r=e,this.#e.requestUpdate(),!0}#m(){this.#l=new MutationObserver(()=>{(this.#f()||this.#k())&&this.#u()}),this.#l.observe(this.#e,{childList:!0})}#u(){this.#l?.disconnect(),this.#l=null}#d(){const e=new Set(this.view?.toasts.map(n=>n.key)??[]);for(const[n,s]of this.#a)e.has(n)||(s.handle!==null&&clearTimeout(s.handle),this.#a.delete(n));for(const n of e){if(this.#a.has(n))continue;const s={handle:null,deadline:0,remaining:mh};this.#a.set(n,s),this.#p.size===0&&this.#c(n,s)}}#c(e,n){n.deadline=Date.now()+n.remaining,n.handle=setTimeout(()=>{n.handle=null,this.send({kind:"close-toast",key:e})},n.remaining)}#g=e=>{!this.#t?.list.open||this.#n.inside(e.composedPath())||this.send({kind:"close-list"})};#v=e=>{e.key!=="Escape"||!this.#t?.list.open||this.send({kind:"close-list"})}}const tn="dpk-changes",vh=(t,e,n)=>{const s=t.unread>0?e.changesUnread(t.unread):e.changes;return v`<button
    class="dpk-bell"
    type="button"
    aria-controls=${tn}
    aria-expanded=${t.open?"true":"false"}
    aria-label=${s}
    title=${s}
    @click=${n.toggleList}
  >
    ${hr()} ${t.unread>0?v`<span class="dpk-bell-badge" aria-hidden="true">${t.unread}</span>`:g}
  </button>`},ho=(t,e,n)=>t.jumpable?v`<button class="dpk-btn dpk-btn--accent dpk-notice-show" type="button" @click=${()=>n.show(t.key)}>
        ${e.changesShow}
      </button>`:g,uo=(t,e,n,s)=>s==="list"||t.unread>0?v`<button
        class=${s==="list"?"dpk-btn dpk-changes-read-all":"dpk-toast-more dpk-changes-read-all"}
        type="button"
        aria-disabled=${t.unread>0?"false":"true"}
        @click=${n.readAll}
      >
        ${e.changesReadAll}
      </button>`:g,xh=(t,e,n)=>v`<section class="dpk-changes-group" data-revision=${t.revision}>
    <h3 class="dpk-changes-revision">
      <span>${t.revision}</span>
      ${t.latest?v`<span class="dpk-changes-current">${e.changesCurrent}</span>`:g}
    </h3>
    <ol class="dpk-changes-list">
      ${ct(t.cards,s=>s.key,s=>v`<li
          class="dpk-change"
          data-key=${s.id}
          data-revision=${s.revision}
          ?data-fresh=${s.fresh}
        >
          <p class="dpk-change-title">
            ${s.fresh?v`<span class="dpk-change-new">${e.changesNew}</span>`:g} ${s.title}
          </p>
          ${s.body===null?g:v`<p class="dpk-change-body">${s.body}</p>`} ${ho(s,e,n)}
        </li>`)}
    </ol>
  </section>`,yh=(t,e,n)=>t.open?v`<div id=${tn} class="dpk-changes" popover="manual" role="dialog" aria-label=${e.changesTitle}>
    <div class="dpk-changes-head">
      <h2 class="dpk-changes-title">${e.changesTitle}</h2>
      ${uo(t,e,n,"list")}
    </div>
    ${ct(t.groups,s=>s.revision,s=>xh(s,e,n))}
  </div>`:g,wh=(t,e,n)=>v`<section
    class="dpk-toasts"
    aria-live="polite"
    aria-label=${e.changes}
    @pointerenter=${()=>n.pause("pointer")}
    @pointerleave=${()=>n.resume("pointer")}
    @focusin=${()=>n.pause("focus")}
    @focusout=${()=>n.resume("focus")}
  >
    ${ct(t.toasts,s=>s.key,s=>v`<div class="dpk-toast" data-key=${s.id}>
        <span class="dpk-toast-icon" aria-hidden="true">${hr()}</span>
        <div class="dpk-toast-text">
          <p class="dpk-change-title">${s.title}</p>
          ${s.body===null?g:v`<p class="dpk-change-body">${s.body}</p>`}
        </div>
        ${ho(s,e,n)}
        <button
          class="dpk-toast-close"
          type="button"
          aria-label=${e.changesDismiss}
          title=${e.changesDismiss}
          @click=${()=>n.dismiss(s.key)}
        >
          ${Ht()}
        </button>
      </div>`)}
    ${t.toasts.length+t.waiting>1?v`<div class="dpk-toast-actions">
            ${t.waiting>0?v`<button class="dpk-toast-more" type="button" @click=${n.openList}>
                    ${e.changesWaiting(t.waiting)} · ${e.changesSeeAll}
                  </button>`:g}
            ${uo(t,e,n,"toasts")}
          </div>`:g}
  </section>`,ks=(t,e)=>typeof t=="object"&&t!==null&&e.every(n=>typeof Reflect.get(t,n)=="function"),$h=t=>ks(t,["use"]),Sh=t=>ks(t,["anchorFor","canSendToClaude","sendToClaude"]),Ah=t=>ks(t,["collection"]),fo=async(t,e)=>{try{return await t.use(e)}catch{return null}},Ch=(t,e)=>({async canSend(){try{return await t.canSendToClaude()==="available"}catch{return!1}},async send({brief:n,draft:s,anchor:i}){let r=dc(n);if(r===null){if(e===null)return{ok:!1,reason:"too_large"};try{const o=e.collection(ac).doc();await o.set({brief:n,draft:s,createdAt:new Date().toISOString()}),r=pc(o.path)}catch{return{ok:!1,reason:"storage"}}}try{return await t.sendToClaude({anchor:await t.anchorFor(i),text:r}),{ok:!0}}catch(o){return{ok:!1,reason:uc(o)}}}}),Th=async t=>{if(!$h(t))return null;const[e,n]=await Promise.all([fo(t,"comments"),fo(t,"db")]);return Sh(e)?Ch(e,Ah(n)?n:null):null},Eh=()=>Reflect.get(globalThis,"claude");class Rh{#e;#n;#i=null;#r=!1;constructor(e,n=Eh){this.#e=e,this.#n=n,e.addController(this)}get available(){return this.#r}hostConnected(){this.#i??=Th(this.#n()),this.#t(),window.addEventListener("focus",this.#t)}hostDisconnected(){window.removeEventListener("focus",this.#t)}async send(e){const n=await this.#i;if(!n)return{ok:!1,reason:"forbidden"};const s=await n.send(e);return this.#t(),s}#t=async()=>{const e=await this.#i,n=e?await e.canSend():!1;n!==this.#r&&(this.#r=n,this.#e.requestUpdate())}}const bs="dev-process-kit:color-scheme",_h="(prefers-color-scheme: dark)",go=()=>typeof matchMedia=="function"?matchMedia(_h):null,mo=()=>mt(document.documentElement.dataset.theme)??(go()?.matches===!0?"dark":"light");class Lh{#e;#n;#i=null;#r=null;#t="light";#s=null;#o=null;constructor(e,n){this.#e=e,this.#n=n,e.addController(this)}hostConnected(){this.#i===null&&(this.#i=this.#n()?Ge(mt):le(mt),this.#r=this.#i.read(bs)),this.#t=mo(),this.#s=go(),this.#s?.addEventListener("change",this.#a),this.#o=new MutationObserver(this.#a),this.#o.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}hostDisconnected(){this.#s?.removeEventListener("change",this.#a),this.#s=null,this.#o?.disconnect(),this.#o=null}resolve(e){return Fr(this.#l(e))}toggle(e){this.#r=Cp(this.#l(e)),this.#r===null?this.#i?.remove(bs):this.#i?.write(bs,this.#r),this.#e.requestUpdate()}#l(e){return{preference:this.#r,authored:e,environment:this.#t}}#a=()=>{const e=mo();e!==this.#t&&(this.#t=e,this.#e.requestUpdate())}}const Oh=(t,e)=>{const n=[],s=i=>{(i===t||i instanceof ShadowRoot)&&e?.(i);for(const r of i.children)r.hasAttribute("data-template")||(("commentTargets"in r||"elementActions"in r)&&n.push(r),s(r),r.shadowRoot&&s(r.shadowRoot))};return s(t),n},ko=(t,e)=>{const n=new Map;for(const s of t)n.set(e(s),(n.get(e(s))??0)+1);return t.filter(s=>n.get(e(s))===1)},bo=t=>ko(t.filter(e=>"elementActions"in e&&e.id.length>0),e=>e.id),vo=(t,e)=>{for(const n of bo(t)){const s=Xl(e,n.id),i=Reflect.get(n,"elementActions");Array.isArray(i)&&i.length===s.length&&s.every((o,a)=>{const l=i[a];return typeof l=="object"&&l!==null&&"id"in l&&l.id===o.id})||Reflect.set(n,"elementActions",s)}},Ph=t=>{const e=Reflect.get(t,"elementActionResults");return Array.isArray(e)?e.flatMap(n=>{const s=C(Ki,n);return s.success?[s.output]:[]}):[]},zh=t=>{const e=[];for(const n of t){if(!("commentTargets"in n))continue;const s=C(Wr,n.commentTargets);s.success&&e.push(...s.output)}return{targets:ko(e,n=>n.value),providers:bo(t).map(n=>({id:n.id,results:Ph(n)}))}},Mh=2400;class Ih{#e=dh();#n=null;#i;constructor(e){this.#i=e,e.addController(this)}get state(){return this.#e}hostDisconnected(){this.#s()}async copy(e){this.#r({kind:"copy-started"});const n=this.#e.request,s=await Wn(e()).catch(()=>!1);this.#r({kind:"copy-finished",request:n,ok:s}),this.#t(n)}async send(e){if(this.#e.status.kind==="sending")return;this.#r({kind:"send-started"});const n=this.#e.request,s=await e().catch(()=>({ok:!1,reason:"error"}));this.#r({kind:"send-finished",request:n,outcome:s}),s.ok&&this.#t(n)}#r(e){(e.kind==="copy-started"||e.kind==="send-started")&&this.#s(),this.#e=ph(this.#e,e),this.#i.requestUpdate()}#t(e){e===this.#e.request&&(this.#s(),this.#n=setTimeout(()=>{this.#n=null,this.#r({kind:"settled",request:e})},Mh))}#s(){this.#n!==null&&clearTimeout(this.#n),this.#n=null}}const vs="dev-process-kit:locale";class Nh{#e;#n;#i;#r=null;#t=null;#s;#o;constructor(e,n,s){this.#e=e,this.#n=n,this.#i=s,e.addController(this)}get authored(){if(this.#s===void 0)return _t(Rt(this.#e));const e=this.#e.parentNode;return _t(this.#s??(e===null?null:Rt(e)))}get locale(){return this.#o??this.#l()}#l(){return ua({preference:this.#t,authored:this.authored})}hostConnected(){this.#r===null&&(this.#r=this.#n()?Ge(ei):le(ei),this.#t=this.#r.read(vs)),this.#s??=this.#e.getAttribute("lang"),this.#a()}pick(e){this.#t=fa(e,this.authored),this.#t===null?this.#r?.remove(vs):this.#r?.write(vs,this.#t),this.#a(),this.#e.requestUpdate()}#a(){const e=this.#t??this.#s??null;e===null?this.#e.removeAttribute("lang"):this.#e.getAttribute("lang")!==e&&this.#e.setAttribute("lang",e);const n=this.#l();if(n===this.#o)return;const s=this.#o===void 0;this.#o=n,this.#i(),(!s||this.#t!==null)&&document.dispatchEvent(new Event(bn))}}const Dh="(max-width: 760px)",jh=()=>typeof matchMedia=="function"?matchMedia(Dh):null;class qh{#e;#n=null;#i=!1;constructor(e){this.#e=e,e.addController(this)}hostConnected(){this.#n=jh(),this.#i=this.#n?.matches===!0,this.#n?.addEventListener("change",this.#r)}hostDisconnected(){this.#n?.removeEventListener("change",this.#r),this.#n=null}get narrow(){return this.#i}#r=e=>{this.#i=e.matches,this.#e.requestUpdate()}}const xo=()=>Ut(typeof location>"u"?"":location.hash),Bh=(t,e)=>{if(typeof history>"u")return;const n=`${location.pathname}${location.search}${Fe(t)}`;`${location.pathname}${location.search}${location.hash}`!==n&&(e?history.replaceState(null,"",n):history.pushState(null,"",n))};class Uh{#e;#n=null;#i=0;constructor(e){this.#e=e}get orphans(){return this.#i}route(){const e=this.#e.renderRoot,n=je(e.querySelector('slot[name="preview"]'),HTMLSlotElement);if(n===null)return;this.#n!==n&&(this.#n=n,n.addEventListener("slotchange",this.#r));const s=new Set(Array.from(e.querySelectorAll("slot")).map(r=>r.getAttribute("name")??"")),i=n.assignedElements();for(const r of i){const o=r.getAttribute("data-preview-id");if(!o)continue;const a=`preview:${o}`;r.getAttribute("slot")!==a&&s.has(a)&&r.setAttribute("slot",a)}i.length!==this.#i&&(this.#i=i.length,queueMicrotask(()=>this.#e.requestUpdate()))}#r=()=>{queueMicrotask(()=>this.route())}}const yo=(t,e)=>{const n=[],s=i=>{for(const r of i.querySelectorAll("*"))r.matches(e)&&n.push(r),r.shadowRoot&&s(r.shadowRoot)};return s(t),t instanceof Element&&t.shadowRoot&&s(t.shadowRoot),n},Hh=(t,e)=>{const n=[];let s=t;for(;s;){const i=s instanceof Element&&s.assignedSlot?s.assignedSlot:s.parentNode;if(s=i instanceof ShadowRoot?i.host:i,!(s instanceof Element)||s===e)break;n.push(s)}return n},wo=(t,e,n)=>n.top<e.top?t+n.top-e.top:n.bottom<=e.bottom?t:t+Math.min(n.bottom-e.bottom,n.top-e.top),$o=(t,e,n)=>{const s=Math.min(n,e/4);return{top:t+s,bottom:t+e-s}},So=(t,e,n=0)=>{const s=t.getBoundingClientRect();t.scrollTop=wo(t.scrollTop,$o(s.top+t.clientTop,t.clientHeight,n),e.getBoundingClientRect())},Ao=(t,e,n=0)=>{const s=t.getBoundingClientRect(),i=e.getBoundingClientRect();t.scrollLeft=wo(t.scrollLeft,$o(s.left+t.clientLeft,t.clientWidth,n),{top:i.left,bottom:i.right})},Co="data-dpk-target",Fh=2800,To=48,Wh=t=>t.getClientRects().length>0,Eo=(t,e)=>{const n=yo(t,`[${Co}]`).filter(r=>(r.getAttribute(Co)??"").split(/\s+/).includes(e)),s=yo(t,"[data-dpk-comment]").filter(r=>r.getAttribute("data-dpk-comment")===e),i=[...n,...s];return i.find(Wh)??i[0]??null},Ro=(t,e)=>{const n=getComputedStyle(t),s=e==="y"?n.overflowY:n.overflowX;return s!=="auto"&&s!=="scroll"?!1:e==="y"?t.scrollHeight>t.clientHeight:t.scrollWidth>t.clientWidth},Vh=(t,e)=>{for(const n of Hh(e,t))Ro(n,"y")&&So(n,e,To),Ro(n,"x")&&Ao(n,e,To)},_o="color-mix(in srgb, var(--dpk-accent) 45%, transparent)",Ie={outline:"2px solid var(--dpk-accent)",outlineOffset:"3px"},Lo={outline:"2px solid transparent",outlineOffset:"3px"},Kh=t=>t?[{...Ie},{...Ie,offset:.85},{...Lo}]:[{...Ie,boxShadow:`0 0 0 0 ${_o}`},{...Ie,boxShadow:"0 0 0 14px transparent",offset:.3},{...Ie,boxShadow:`0 0 0 0 ${_o}`,offset:.31},{...Ie,boxShadow:"0 0 0 14px transparent",offset:.6},{...Ie,offset:.85},{...Lo}],yt={filter:"drop-shadow(0 0 3px var(--dpk-accent)) drop-shadow(0 0 3px var(--dpk-accent))"},nn={filter:"drop-shadow(0 0 3px transparent) drop-shadow(0 0 3px transparent)"},Gh=t=>t?[{...yt},{...yt,offset:.85},{...nn}]:[{...yt},{...nn,offset:.3},{...yt,offset:.31},{...nn,offset:.6},{...yt,offset:.61},{...nn}],Zh=t=>{if(typeof t.animate!="function")return;const e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,n=t instanceof SVGElement&&!(t instanceof SVGSVGElement);t.animate(n?Gh(e):Kh(e),{duration:Fh,easing:"ease-out"})},ve={min:180,max:560,step:16,largeStep:64},Yh={side:"left",defaultWidth:260},sn=t=>Math.round(Math.min(ve.max,Math.max(ve.min,t))),Oo=t=>typeof t=="number"&&Number.isFinite(t)?sn(t):null,xs=(t,e)=>t==="left"?e:-e,Jh=(t,e)=>sn(t.startWidth+xs(t.side,e-t.startX)),Qh=(t,e,{key:n,shiftKey:s})=>{const i=s?ve.largeStep:ve.step;switch(n){case"ArrowLeft":return sn(t+xs(e,-i));case"ArrowRight":return sn(t+xs(e,i));case"Home":return ve.min;case"End":return ve.max;default:return null}},Po=t=>typeof t=="boolean"?t:null,Xh=t=>t==="left"?"right":"left",eu=(t,e)=>e?{action:"expand",points:Xh(t)}:{action:"collapse",points:t},tu=t=>`dev-process-kit:sidebar-collapsed:${t}`;class nu{#e;#n;#i=null;#r="";#t=!1;#s=!1;constructor(e,n){this.#e=e,this.#n=n,e.addController(this)}hostConnected(){this.#i===null&&(this.#i=this.#n.persist()?Ge(Po):le(Po),this.#r=tu(this.#n.template()),this.#t=this.#i.read(this.#r)??!1)}get collapsed(){return this.#t}get drawerOpen(){return this.#s}toggleDrawer(){this.#s=!this.#s,this.#e.requestUpdate()}closeDrawer(){this.#s&&(this.#s=!1,this.#e.requestUpdate())}toggle(){this.#t=!this.#t,this.#t?this.#i?.write(this.#r,!0):this.#i?.remove(this.#r),this.#e.requestUpdate()}}const su=t=>`dev-process-kit:sidebar-width:${t}`,ys={kind:"idle"};class iu{constructor(e,n){this.#i=null,this.#r="",this.#t=null,this.#s=ys,this.handlers={pointerdown:s=>{s.button===0&&(s.preventDefault(),s.currentTarget instanceof Element&&s.currentTarget.setPointerCapture(s.pointerId),this.#s={kind:"dragging",pointerId:s.pointerId,side:this.#n.layout().side,startX:s.clientX,startWidth:this.width},this.#e.requestUpdate())},pointermove:s=>{const i=this.#s;i.kind!=="dragging"||i.pointerId!==s.pointerId||this.#l(Jh(i,s.clientX))},pointerup:s=>this.#o(s),pointercancel:s=>this.#o(s),keydown:s=>{const i=Qh(this.width,this.#n.layout().side,s);i!==null&&(s.preventDefault(),this.#l(i),this.#a())},dblclick:()=>{this.#l(this.#n.layout().defaultWidth),this.#a()}},this.#e=e,this.#n=n,e.addController(this)}#e;#n;#i;#r;#t;#s;hostConnected(){this.#i===null&&(this.#i=this.#n.persist()?Ge(Oo):le(Oo),this.#r=su(this.#n.template()),this.#t=this.#i.read(this.#r))}hostDisconnected(){this.#s=ys}get width(){return this.#t??this.#n.layout().defaultWidth}get dragging(){return this.#s.kind==="dragging"}#o(e){const n=this.#s;n.kind!=="dragging"||n.pointerId!==e.pointerId||(this.#s=ys,this.#a(),this.#e.requestUpdate())}#l(e){const n=e===this.#n.layout().defaultWidth?null:e;n!==this.#t&&(this.#t=n,this.#e.requestUpdate())}#a(){this.#t===null?this.#i?.remove(this.#r):this.#i?.write(this.#r,this.#t)}}const ru=[Ot,xn,de`
    :host {
      display: block;
      min-height: 100%;
      background: var(--dpk-paper);
      color-scheme: light;
    }

    /* The element stamps its resolved scheme; nested components inherit it. */
    :host([data-theme='dark']) {
      color-scheme: dark;
    }

    .dpk-shell {
      display: grid;
      /* One column no wider than the host: a truncated title must not widen
         the page past a phone screen. */
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: auto minmax(0, 1fr) auto;
      min-height: 100%;
      max-height: 100%;
      /*
       * The fallback when the page gives the host no height: the viewport, less
       * the safe-area insets a Claude Artifact pads its root by. Without it the
       * shell grows with its content, leaving the page's own ground below a
       * short page and scrolling the header and the memo away on a long one.
       * A host with a height still wins: the min/max-height above pin the shell
       * to it.
       */
      height: calc(100dvh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
    }

    /* ------------------------------------------------------------- header */

    .dpk-header {
      position: relative;
      z-index: 20;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px 14px;
      min-height: 60px;
      /* Right padding keeps the header content clear of the fixed review button. */
      padding: 10px 72px 10px 16px;
      border-bottom: 1px solid var(--dpk-rule);
      background: var(--dpk-glass);
      backdrop-filter: saturate(1.6) blur(14px);
      box-shadow: 0 1px 0 var(--dpk-highlight) inset;
    }

    /* A hairline of the accent along the bottom edge, fading out to the right. */
    .dpk-header::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 1px;
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--dpk-accent) 70%, transparent),
        color-mix(in srgb, var(--dpk-accent) 0%, transparent) 38%
      );
      pointer-events: none;
    }

    /* Kit mark: a stack of pages, the single HTML page the agent wrote. */
    .dpk-brand {
      position: relative;
      flex: none;
      width: 32px;
      height: 32px;
      border-radius: 9px;
      background:
        radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.35), transparent 60%),
        linear-gradient(145deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(0, 0, 0, 0.12),
        0 4px 12px -4px color-mix(in srgb, var(--dpk-accent) 70%, transparent);
    }

    .dpk-brand::before,
    .dpk-brand::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 15px;
      border-radius: 3px;
    }

    .dpk-brand::before {
      left: 12px;
      top: 7px;
      background: rgba(255, 255, 255, 0.4);
    }

    .dpk-brand::after {
      left: 8px;
      top: 10px;
      background:
        linear-gradient(var(--dpk-accent), var(--dpk-accent)) 3px 4px / 6px 1.5px no-repeat,
        linear-gradient(var(--dpk-accent), var(--dpk-accent)) 3px 7.5px / 4px 1.5px no-repeat,
        #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
    }

    /* The title takes what the header has left: the template's header content
       keeps its own width, and only a title too long for the rest ellipsizes.
       Header content with no room beside the title wraps to a row of its own
       rather than being squeezed. */
    .dpk-title {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: min(160px, 100%);
    }

    .dpk-title h1 {
      font-size: 16px;
      font-weight: 680;
      letter-spacing: -0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .dpk-template-mark {
      align-self: flex-start;
      font-family: var(--dpk-mono);
      font-size: 9.5px;
      font-weight: 600;
      letter-spacing: 0.14em;
      line-height: 1;
      text-transform: uppercase;
      color: var(--dpk-accent);
    }

    .dpk-header-slot {
      flex: 0 1 auto;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .dpk-header-meta {
      display: flex;
      align-items: center;
      gap: 0;
      margin-left: auto;
      padding: 3px;
      border-radius: 999px;
      border: 1px solid var(--dpk-rule);
      background: var(--dpk-paper-sunken);
      font-family: var(--dpk-mono);
      font-size: 10px;
      letter-spacing: 0.02em;
      color: var(--dpk-ink-faint);
      white-space: nowrap;
    }

    .dpk-header-meta span {
      padding: 3px 9px;
    }

    .dpk-header-meta span + span {
      border-left: 1px solid var(--dpk-rule);
    }

    .dpk-version-select {
      margin: -3px 0;
      padding: 3px 14px 3px 0;
      border: 0;
      border-radius: 4px;
      background: transparent
        url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 12 12'><path d='M3 4.5 6 7.5 9 4.5' fill='none' stroke='%23878e9e' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>")
        no-repeat right 2px center;
      appearance: none;
      /* As wide as the version shown, not the longest prerelease in the list. */
      field-sizing: content;
      color: inherit;
      font: inherit;
      letter-spacing: inherit;
      cursor: pointer;
    }

    .dpk-version-select:hover {
      color: var(--dpk-ink-soft);
    }

    .dpk-version-select:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-header-meta .dpk-meta-count {
      margin-left: 2px;
      border-left: 0;
      border-radius: 999px;
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink-soft);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
    }

    .dpk-header-meta .dpk-meta-count[data-active='true'] {
      background: var(--dpk-accent-soft);
      color: var(--dpk-accent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--dpk-accent) 25%, transparent);
    }

    .dpk-header-tools {
      display: flex;
      flex: none;
      align-items: center;
      gap: 2px;
      padding: 3px;
      border: 1px solid var(--dpk-rule);
      border-radius: 999px;
      background: var(--dpk-paper-sunken);
    }

    .dpk-lang-select {
      flex: none;
      height: 26px;
      padding: 0 24px 0 10px;
      border: 0;
      border-radius: 999px;
      background: transparent
        url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'><path d='M3 4.5 6 7.5 9 4.5' fill='none' stroke='%23878e9e' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>")
        no-repeat right 8px center;
      appearance: none;
      color: var(--dpk-ink-soft);
      font: inherit;
      font-size: 12px;
      font-weight: 520;
      cursor: pointer;
      transition:
        color 160ms var(--dpk-ease),
        background-color 160ms var(--dpk-ease);
    }

    .dpk-lang-select:hover {
      color: var(--dpk-ink);
      background-color: var(--dpk-paper-raised);
    }

    .dpk-lang-select:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-theme-toggle {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--dpk-ink-soft);
      cursor: pointer;
      transition:
        color 160ms var(--dpk-ease),
        background 160ms var(--dpk-ease),
        transform 300ms var(--dpk-ease-spring);
    }

    .dpk-theme-toggle svg {
      width: 14px;
      height: 14px;
    }

    .dpk-theme-toggle:hover {
      color: var(--dpk-ink);
      background: var(--dpk-paper-raised);
      transform: rotate(-18deg);
    }

    .dpk-theme-toggle:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    /* ------------------------------------------------------------ changes */

    .dpk-bell {
      position: relative;
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--dpk-ink-soft);
      cursor: pointer;
      transition:
        color 160ms var(--dpk-ease),
        background 160ms var(--dpk-ease);
    }

    .dpk-bell svg {
      width: 14px;
      height: 14px;
    }

    .dpk-bell:hover,
    .dpk-bell[aria-expanded='true'] {
      color: var(--dpk-ink);
      background: var(--dpk-paper-raised);
    }

    .dpk-bell:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-bell-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      min-width: 16px;
      height: 16px;
      padding: 0 3px;
      border: 2px solid var(--dpk-paper);
      border-radius: 999px;
      background: linear-gradient(145deg, var(--dpk-accent-bright), var(--dpk-accent));
      color: var(--dpk-accent-ink);
      font-family: var(--dpk-mono);
      font-size: 9px;
      font-weight: 650;
      font-variant-numeric: tabular-nums;
      line-height: 12px;
      text-align: center;
      animation: dpk-pop 260ms var(--dpk-ease-spring);
    }

    .dpk-changes {
      box-sizing: border-box;
      overflow: auto;
      position: fixed;
      inset: auto;
      margin: 0;
      padding: 12px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-lg);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
      color: var(--dpk-ink);
      font-size: 12.5px;
      animation: dpk-notice-in 180ms var(--dpk-ease);
    }

    .dpk-changes-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 8px;
      margin: 0 2px 10px;
    }

    .dpk-changes-head {
      align-items: center;
    }

    .dpk-changes-title {
      margin: 0;
      font-size: inherit;
      font-weight: 650;
    }

    .dpk-changes-read-all.dpk-btn {
      flex: none;
      font-size: 11.5px;
    }

    .dpk-changes-read-all[aria-disabled='true'] {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }

    .dpk-changes-group + .dpk-changes-group {
      margin-top: 14px;
    }

    .dpk-changes-revision {
      display: flex;
      align-items: center;
      gap: 6px;
      margin: 0 2px 6px;
      color: var(--dpk-ink-faint);
      font-family: var(--dpk-mono);
      font-size: 11px;
      font-weight: 500;
    }

    .dpk-changes-revision span:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dpk-changes-current {
      flex: none;
      padding: 1px 6px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: 999px;
      color: var(--dpk-ink-soft);
      font-family: var(--dpk-body);
      font-size: 10px;
    }

    .dpk-changes-list {
      display: grid;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .dpk-change {
      display: grid;
      gap: 4px;
      padding: 9px 10px;
      border: 1px solid var(--dpk-rule);
      border-radius: var(--dpk-radius);
      background: var(--dpk-paper);
    }

    .dpk-change[data-fresh] {
      border-color: color-mix(in srgb, var(--dpk-accent) 35%, transparent);
      background: var(--dpk-accent-soft);
    }

    .dpk-change .dpk-notice-show {
      justify-self: end;
    }

    .dpk-change-title {
      margin: 0;
      font-weight: 600;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .dpk-change-new {
      margin-right: 4px;
      padding: 1px 6px;
      border-radius: 999px;
      background: var(--dpk-accent);
      color: var(--dpk-accent-ink);
      font-size: 10px;
      font-weight: 650;
      vertical-align: 1px;
    }

    .dpk-change-body {
      margin: 0;
      color: var(--dpk-ink-soft);
      line-height: 1.5;
      white-space: pre-line;
      overflow-wrap: anywhere;
    }

    /* Below the review button, at the top right where the bell is. */
    .dpk-toasts {
      position: fixed;
      top: 64px;
      right: 16px;
      z-index: 70;
      display: grid;
      justify-items: end;
      gap: 8px;
      width: min(360px, calc(100vw - 32px));
      pointer-events: none;
    }

    .dpk-toast {
      box-sizing: border-box;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto auto;
      align-items: start;
      gap: 10px;
      width: 100%;
      padding: 10px 8px 10px 12px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-lg);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
      color: var(--dpk-ink);
      font-size: 12.5px;
      pointer-events: auto;
      animation: dpk-notice-in 260ms var(--dpk-ease);
    }

    .dpk-toast-icon {
      display: inline-flex;
      padding-top: 2px;
      color: var(--dpk-accent);
    }

    .dpk-toast-icon svg {
      width: 14px;
      height: 14px;
    }

    .dpk-toast-text {
      display: grid;
      gap: 2px;
    }

    .dpk-toast .dpk-change-body {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .dpk-toast-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--dpk-ink-faint);
      cursor: pointer;
    }

    .dpk-toast-close svg {
      width: 12px;
      height: 12px;
    }

    .dpk-toast-close:hover {
      color: var(--dpk-ink);
      background: var(--dpk-paper-sunken);
    }

    .dpk-toast-close:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-toast-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      gap: 6px;
    }

    .dpk-toast-more {
      padding: 4px 10px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: 999px;
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink-soft);
      font: inherit;
      font-size: 11.5px;
      cursor: pointer;
      pointer-events: auto;
    }

    .dpk-toast-more:hover {
      color: var(--dpk-ink);
    }

    .dpk-toast-more:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    @keyframes dpk-notice-in {
      from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
      }
    }

    /* --------------------------------------------------------------- body */

    /* Positioned: the sidebar drawer and a narrow screen's review open over it. */
    .dpk-body {
      position: relative;
      display: flex;
      min-height: 0;
    }

    .dpk-sidebar {
      /* The element sets the template's or the reader's width; on a narrow
         screen a wide one still leaves the main column some room. */
      width: var(--dpk-sidebar-width);
      max-width: calc(100% - 120px);
      flex: 0 0 auto;
      border-right: 1px solid var(--dpk-rule);
      background: var(--dpk-paper-sunken);
      overflow: auto;
      padding: 18px 14px;
      scrollbar-width: thin;
    }

    .dpk-sidebar[hidden] {
      display: none;
    }

    /*
     * A right-hand sidebar: a rail beside the main column rather than a list
     * before it. \`:where\` keeps these as weak as the rules above, so a
     * template can still restyle the rail (stacking it on a phone, say).
     */
    :where(.dpk-body[data-sidebar-side='right']) .dpk-main {
      order: 1;
    }

    :where(.dpk-body[data-sidebar-side='right']) .dpk-sidebar,
    :where(.dpk-body[data-sidebar-side='right']) .dpk-sidebar-resizer,
    :where(.dpk-body[data-sidebar-side='right']) .dpk-sidebar-toggle,
    :where(.dpk-body[data-sidebar-side='right']) .dpk-sidebar-strip {
      order: 2;
    }

    :where(.dpk-body[data-sidebar-side='right']) .dpk-sidebar,
    :where(.dpk-body[data-sidebar-side='right']) .dpk-sidebar-strip {
      border-right: 0;
      border-left: 1px solid var(--dpk-rule);
    }

    /*
     * The fold button. Expanded, it sits on the sidebar's border near the top
     * and, like the resizer, takes no room of its own; folded, it is the only
     * thing left in a narrow strip where the sidebar was.
     */
    .dpk-sidebar-toggle {
      position: relative;
      z-index: 7;
      display: inline-flex;
      flex: none;
      align-self: flex-start;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      margin: 14px -11px 0;
      padding: 0;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: 999px;
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink-soft);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-xs);
      cursor: pointer;
      transition:
        color 160ms var(--dpk-ease),
        border-color 160ms var(--dpk-ease),
        background 160ms var(--dpk-ease);
    }

    .dpk-sidebar-toggle svg {
      width: 13px;
      height: 13px;
    }

    .dpk-sidebar-toggle:hover {
      color: var(--dpk-accent);
      border-color: color-mix(in srgb, var(--dpk-accent) 45%, transparent);
    }

    .dpk-sidebar-toggle:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-sidebar-strip {
      display: flex;
      flex: none;
      justify-content: center;
      width: 36px;
      padding-top: 14px;
      border-right: 1px solid var(--dpk-rule);
      background: var(--dpk-paper-sunken);
    }

    .dpk-sidebar-strip .dpk-sidebar-toggle {
      margin: 0;
    }

    /*
     * The sidebar's resizable edge: a hit area straddling its border that takes
     * no room of its own, with an accent line while hovered, focused or dragged.
     */
    .dpk-sidebar-resizer {
      position: relative;
      z-index: 6;
      flex: none;
      width: 9px;
      /* Centred on the sidebar's border, whichever side that is. */
      margin: 0 -5px 0 -4px;
      cursor: col-resize;
      touch-action: none;
    }

    .dpk-sidebar-resizer::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 3px;
      width: 2px;
      border-radius: 1px;
      background: var(--dpk-accent);
      opacity: 0;
      transition: opacity 160ms var(--dpk-ease);
    }

    .dpk-sidebar-resizer:hover::after,
    .dpk-sidebar-resizer:focus-visible::after,
    .dpk-shell[data-resizing] .dpk-sidebar-resizer::after {
      opacity: 1;
    }

    .dpk-sidebar-resizer:focus-visible {
      outline: none;
    }

    /*
     * A phone-width screen has no room for a column beside the main one: the
     * sidebar is a drawer that the strip's button slides over the main column,
     * leaving a sliver of it to tap the drawer shut.
     */
    .dpk-body[data-sidebar-drawer] > .dpk-sidebar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 36px;
      z-index: 25;
      width: min(var(--dpk-sidebar-width), calc(100% - 36px - 48px));
      max-width: none;
      box-shadow: var(--dpk-shadow-lg);
    }

    .dpk-body[data-sidebar-drawer][data-sidebar-side='right'] > .dpk-sidebar {
      left: auto;
      right: 36px;
    }

    .dpk-sidebar-scrim {
      position: absolute;
      inset: 0;
      z-index: 24;
      background: color-mix(in srgb, var(--dpk-ink) 16%, transparent);
    }

    /* While dragging, the cursor stays put and nothing underneath (text, preview frames) reacts. */
    .dpk-shell[data-resizing] {
      cursor: col-resize;
      user-select: none;
    }

    .dpk-shell[data-resizing] .dpk-main {
      pointer-events: none;
    }

    .dpk-main {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow: auto;
      /* A faint wash of the accent from the top left corner gives the ground some depth. */
      background:
        radial-gradient(
          ellipse 900px 360px at 0% 0%,
          color-mix(in srgb, var(--dpk-accent) 5%, transparent),
          transparent 70%
        ),
        radial-gradient(
          ellipse 700px 320px at 100% 0%,
          color-mix(in srgb, var(--dpk-blue) 4%, transparent),
          transparent 70%
        ),
        var(--dpk-paper);
      background-attachment: local;
    }

    .dpk-main-body {
      flex: 1 0 auto;
      display: grid;
      /* The column is as wide as the page, not as its widest unbreakable line. */
      grid-template-columns: minmax(0, 1fr);
      align-content: start;
      gap: 16px;
      min-width: 0;
      padding: 24px;
      animation: dpk-rise 420ms var(--dpk-ease) backwards;
    }

    /*
     * Scrolled to the end, the last of the content clears the hand-off dock
     * floating over the bottom right. \`--dpk-dock-clearance\` is how far up
     * that is; it reaches into components too, and a template's own floating
     * controls rise by it. \`:where\` lets a full-bleed template keep no padding.
     */
    .dpk-shell:has(> .dpk-dock) {
      --dpk-dock-clearance: 64px;
    }

    :where(.dpk-shell:has(> .dpk-dock)) .dpk-main-body {
      padding-bottom: calc(24px + var(--dpk-dock-clearance));
    }

    :where(.dpk-shell:has(> .dpk-dock)) .dpk-sidebar {
      padding-bottom: calc(18px + var(--dpk-dock-clearance));
    }

    @keyframes dpk-rise {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
    }

    /*
     * Author memo. It sits at the end of the main column and sticks to the
     * bottom of the scrollport as a bar the full width of the column, edge to
     * edge: always in reach and never stealing height from the preview. Opened,
     * it grows upward over the content and shows the memo whole; only a memo
     * taller than the window scrolls, so its top stays reachable.
     */
    .dpk-memo {
      position: sticky;
      bottom: 0;
      z-index: 5;
      margin-top: auto;
    }

    .dpk-memo[hidden] {
      display: none;
    }

    .dpk-memo-fold {
      /* A faint amber wash over the whole note marks it as the author's aside. */
      border-top: 1px solid color-mix(in srgb, var(--dpk-amber) 28%, var(--dpk-rule-strong));
      background: color-mix(in srgb, color-mix(in srgb, var(--dpk-amber) 7%, var(--dpk-paper-raised)) 94%, transparent);
      backdrop-filter: blur(12px);
      box-shadow: 0 -8px 24px -18px color-mix(in srgb, var(--dpk-ink) 40%, transparent);
    }

    .dpk-memo-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      /* Clear of the hand-off dock at the bottom right while it is shown. */
      padding: 8px calc(16px + var(--dpk-dock-space, 0px)) 8px 16px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--dpk-ink-soft);
      cursor: pointer;
      list-style: none;
      user-select: none;
    }

    .dpk-memo-bar::-webkit-details-marker {
      display: none;
    }

    .dpk-memo-bar:hover {
      color: var(--dpk-ink);
    }

    .dpk-memo-bar:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-memo-bar svg {
      width: 14px;
      height: 14px;
      transition: transform 160ms var(--dpk-ease);
    }

    .dpk-memo-fold[open] .dpk-memo-bar svg {
      transform: rotate(90deg);
    }

    .dpk-memo-body {
      max-height: calc(100dvh - 120px);
      overflow: auto;
      overscroll-behavior: contain;
      padding: 0 calc(16px + var(--dpk-dock-space, 0px)) 16px 16px;
      font-size: 12.5px;
      line-height: 1.7;
      color: var(--dpk-ink-soft);
    }

    .dpk-memo ::slotted(*) {
      display: block;
      max-width: 100%;
    }

    .dpk-orphans {
      margin-top: 16px;
      border: 1px dashed var(--dpk-rule-strong);
      border-radius: var(--dpk-radius);
      padding: 12px;
    }

    .dpk-banner {
      display: grid;
      gap: 4px;
      margin-bottom: 14px;
      border: 1px solid color-mix(in srgb, var(--dpk-danger) 35%, transparent);
      border-radius: var(--dpk-radius);
      background: linear-gradient(90deg, var(--dpk-danger) 0 3px, transparent 3px), var(--dpk-danger-soft);
      padding: 12px 14px 12px 17px;
      max-width: 900px;
    }

    .dpk-banner strong {
      font-size: 13px;
      color: var(--dpk-danger);
    }

    .dpk-banner code {
      font-family: var(--dpk-mono);
      font-size: 11px;
      color: var(--dpk-ink-soft);
      overflow-wrap: anywhere;
    }

    .dpk-notes {
      flex: 0 0 auto;
      width: 360px;
      border-left: 1px solid var(--dpk-rule);
      background: var(--dpk-paper-raised);
      box-shadow: -12px 0 32px -24px var(--dpk-shade-3);
      overflow: hidden;
      display: flex;
      animation: dpk-slide-in 260ms var(--dpk-ease) backwards;
    }

    @keyframes dpk-slide-in {
      from {
        opacity: 0;
        transform: translateX(16px);
      }
    }

    .dpk-notes[hidden] {
      display: none;
    }

    /*
     * Where a column of its own would leave the main column too little room,
     * the review opens over the main column's edge instead; on a phone it
     * takes the screen, below the review button that closes it.
     */
    @media (max-width: 1100px) {
      .dpk-body:has(> .dpk-sidebar:not([hidden])) > .dpk-notes {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 30;
        max-width: 100%;
        box-shadow: var(--dpk-shadow-lg);
      }
    }

    @media (max-width: 860px) {
      .dpk-notes {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 30;
        max-width: 100%;
        box-shadow: var(--dpk-shadow-lg);
      }
    }

    @media (max-width: 760px) {
      .dpk-notes,
      .dpk-body:has(> .dpk-sidebar:not([hidden])) > .dpk-notes {
        position: fixed;
        inset: 0;
        z-index: 50;
        width: auto;
        padding-top: 60px;
        border-left: 0;
      }
    }

    /* ------------------------------------------------------------- footer */

    .dpk-footer {
      border-top: 1px solid var(--dpk-rule);
      padding: 10px 20px;
      display: flex;
      gap: 12px;
      align-items: center;
      background: var(--dpk-glass);
      backdrop-filter: blur(12px);
      font-size: 12px;
      color: var(--dpk-ink-faint);
    }

    /* --------------------------------------------------- floating review */

    /* Review toggle: pinned to the top right corner, always in the same place. */
    .dpk-fab {
      position: fixed;
      top: 12px;
      right: 16px;
      z-index: 60;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: 11px;
      background: var(--dpk-paper-raised);
      color: var(--dpk-ink-soft);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
      cursor: pointer;
      transition:
        color 180ms var(--dpk-ease),
        background 180ms var(--dpk-ease),
        border-color 180ms var(--dpk-ease),
        box-shadow 180ms var(--dpk-ease),
        transform 220ms var(--dpk-ease-spring);
    }

    .dpk-fab:hover {
      color: var(--dpk-ink);
      border-color: var(--dpk-rule-hover);
      transform: translateY(-1px);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow);
    }

    .dpk-fab:active {
      transform: translateY(0) scale(0.95);
      box-shadow: var(--dpk-shadow-xs);
    }

    .dpk-fab:focus-visible {
      outline: none;
      box-shadow: var(--dpk-focus);
    }

    .dpk-fab[aria-expanded='true'] {
      color: var(--dpk-accent-ink);
      border-color: color-mix(in srgb, var(--dpk-accent-strong) 70%, transparent);
      background: linear-gradient(145deg, var(--dpk-accent-bright), var(--dpk-accent-strong));
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        0 6px 16px -6px color-mix(in srgb, var(--dpk-accent) 70%, transparent);
    }

    .dpk-fab[aria-expanded='true']:hover {
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        0 10px 22px -8px color-mix(in srgb, var(--dpk-accent) 80%, transparent);
    }

    .dpk-fab-icon {
      position: relative;
      display: block;
      width: 16px;
      height: 12px;
      border: 1.6px solid currentColor;
      border-radius: 4px;
    }

    .dpk-fab-icon::after {
      content: '';
      position: absolute;
      left: 2px;
      bottom: -4px;
      border-left: 3.5px solid transparent;
      border-right: 3.5px solid transparent;
      border-top: 4px solid currentColor;
    }

    .dpk-fab-badge {
      position: absolute;
      top: -6px;
      right: -6px;
      min-width: 18px;
      height: 18px;
      padding: 0 4px;
      border: 2px solid var(--dpk-paper);
      border-radius: 999px;
      background: linear-gradient(145deg, var(--dpk-accent-bright), var(--dpk-accent));
      color: var(--dpk-accent-ink);
      font-family: var(--dpk-mono);
      font-size: 9.5px;
      font-weight: 650;
      font-variant-numeric: tabular-nums;
      line-height: 14px;
      text-align: center;
      box-shadow: 0 3px 8px -2px color-mix(in srgb, var(--dpk-accent) 60%, transparent);
      animation: dpk-pop 260ms var(--dpk-ease-spring);
    }

    @keyframes dpk-pop {
      from {
        transform: scale(0.4);
        opacity: 0;
      }
    }

    /* ------------------------------------------------------ hand-off dock */

    .dpk-dock {
      position: fixed;
      right: 16px;
      bottom: 16px;
      z-index: 60;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      max-width: calc(100vw - 32px);
      animation: dpk-dock-in 260ms var(--dpk-ease) backwards;
    }

    @keyframes dpk-dock-in {
      from {
        transform: translateY(8px);
        opacity: 0;
      }
    }

    .dpk-dock-actions {
      display: flex;
      gap: 6px;
      padding: 6px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius-lg);
      background: var(--dpk-glass);
      backdrop-filter: blur(12px);
      box-shadow: var(--dpk-bevel), var(--dpk-shadow-lg);
    }

    .dpk-dock-note {
      max-width: 320px;
      margin: 0;
      padding: 8px 12px;
      border: 1px solid var(--dpk-rule-strong);
      border-radius: var(--dpk-radius);
      background: var(--dpk-paper-raised);
      box-shadow: var(--dpk-shadow);
      color: var(--dpk-ink-soft);
      font-size: 12px;
      line-height: 1.6;
    }

    /* The template's name repeats the mark above the title; the title needs the room more. */
    @media (max-width: 1100px) {
      .dpk-header-meta > .dpk-meta-name {
        display: none;
      }
    }

    @media (max-width: 720px) {
      /* The version select stays: it is the reader's only way to switch
         versions; so do the counts, the review's progress at a glance. */
      .dpk-header-meta > :not(.dpk-version, .dpk-meta-count) {
        display: none;
      }

      /* On a phone the row may be narrower than both: the counts stay whole and
         the version select gives up its width instead. */
      .dpk-header-meta {
        min-width: 0;
        max-width: 100%;
      }

      .dpk-header-meta > .dpk-version {
        display: flex;
        min-width: 0;
      }

      .dpk-header-meta .dpk-version-select {
        width: 100%;
        min-width: 0;
        text-overflow: ellipsis;
      }

      .dpk-header-meta > .dpk-meta-count {
        flex: none;
      }

      /* The title takes the first row whole; the version select and tools wrap below it. */
      .dpk-title {
        flex: 1 0 100%;
      }

      .dpk-brand {
        display: none;
      }

      /* The page's own content goes last, so a long one cannot push the version
         select and tools below it. */
      .dpk-header-slot {
        order: 1;
      }
    }
  `],ou=30,au=He(b(),L({base:b(),value:b()})),zo=t=>{const e=C(au,t);return e.success?e.output:null},lu=t=>t.key===void 0?JSON.stringify(["field",t.hosts,t.name,t.base]):JSON.stringify(["key",t.key,t.name]),cu=(t,e,n)=>{const{[e]:s,...i}=t;if(n.value===n.base)return i;const r=Object.entries({...i,[e]:n});return Object.fromEntries(r.slice(Math.max(0,r.length-ou)))},du=(t,e)=>{if(!(e in t))return t;const{[e]:n,...s}=t;return s},pu=(t,e,n)=>{const s=t[e];return s===void 0||s.base!==n||s.value===n?null:s.value},hu=new Set(["text","search","url","email","tel"]),Mo=t=>t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&hu.has(t.type)?t:null,uu=(t,e)=>{const n=[];let s=e.getRootNode();for(;s instanceof ShadowRoot;){if(s.host===t)return n;n.unshift(s.host.localName),s=s.host.getRootNode()}return null},fu=t=>{let e=t;for(;e!==null;){const n=e.getAttribute("data-dpk-text-key");if(n!==null&&n!=="")return n;const s=e.getRootNode();e=e.parentElement??(s instanceof ShadowRoot?s.host:null)}},gu=t=>t.getAttribute("aria-label")??(t.placeholder||t.name||t.localName),ws=t=>typeof t=="string"?[t]:Array.isArray(t)?t.flatMap(ws):typeof t=="object"&&t!==null?Object.values(t).flatMap(ws):[],Io=t=>t.replace(/\s+/g," ").trim();class mu{#e;#n;#i=null;#r="";#t=new WeakMap;#s=new Set;constructor(e,n){this.#e=e,this.#n=n,e.addController(this)}hostConnected(){this.#i===null&&(this.#i=this.#n.persist()?gh(zo):le(zo),this.#r=this.#n.storageKey()),this.#e.addEventListener("focusin",this.#o),this.#e.addEventListener("input",this.#l)}hostDisconnected(){this.#e.removeEventListener("focusin",this.#o),this.#e.removeEventListener("input",this.#l)}settle(e){const n=new Set(e.flatMap(ws).map(Io));for(const s of this.#s){if(!n.has(Io(s.value)))continue;this.#s.delete(s);const i=this.#t.get(s);i!==void 0&&this.#p(du(this.#a(),i.id))}}#o=e=>{const n=Mo(e.composedPath()[0]);if(n===null||this.#s.has(n))return;const s=uu(this.#e,n);if(s===null)return;const i=fu(n),r=n.value,o=lu({...i===void 0?{}:{key:i},hosts:s,name:gu(n),base:r});this.#t.set(n,{id:o,base:r});const a=pu(this.#a(),o,r);a!==null&&queueMicrotask(()=>{if(n.value===r){n.value=a;try{n.setSelectionRange(a.length,a.length)}catch{}this.#s.add(n),n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}})};#l=e=>{const n=Mo(e.composedPath()[0]),s=n===null?void 0:this.#t.get(n);if(!(n===null||s===void 0)){for(const i of this.#s)i.isConnected||this.#s.delete(i);this.#s.add(n),this.#p(cu(this.#a(),s.id,{base:s.base,value:n.value}))}};#a(){return this.#i?.read(this.#r)??{}}#p(e){Object.keys(e).length===0?this.#i?.remove(this.#r):this.#i?.write(this.#r,e)}}class ku{#e;#n;#i;#r=null;#t=!1;constructor(e,n={}){this.#e=e,this.#n=n.fetchVersions??Mr,this.#i=n.switchTo??Ir,e.addController(this)}hostConnected(){}load(){this.#t||this.#r!==null||(this.#t=!0,this.#n().then(e=>{this.#r=e,this.#t=!1,this.#e.requestUpdate()},e=>{this.#t=!1,console.warn("dev-process-kit: could not list the published versions",e)}))}pick(e){e!==Q&&this.#i(e===""?null:e)}render(e){const n=W(e),s=zr({current:Q,requested:is(location.search)!==null,published:this.#r,text:{pinned:n.versionPinned,latest:n.versionLatest}}),i=()=>this.load();return v`<span class="dpk-version"
      >dev-process-kit@<select
        class="dpk-version-select"
        aria-label=${n.versionLabel}
        title=${n.versionLabel}
        @pointerenter=${i}
        @focus=${i}
        @change=${os(r=>this.pick(r))}
      >
        ${s.options.map(r=>v`<option value=${r.value} ?selected=${r.value===s.value}>${r.label}</option>`)}
      </select></span
    >`}}const $s=`script[type="application/json"]:not([${Nr}])`,bu=30,No={width:360,height:480},vu=t=>{try{return t.matches(":popover-open")}catch{return!1}},xu=()=>new Promise(t=>requestAnimationFrame(()=>t()));class yu extends he{static{this.styles=ru}static{this.properties={storageKey:{type:String,attribute:"storage-key"},storage:{type:String},notes:{type:String},theme:{type:String},notesOpen:{state:!0}}}#e=!1;#n=new Uh(this);#i=new Lh(this,()=>this.storage!=="off"&&this.storage!=="memory");#r=new Rh(this);#t=new Ih(this);#s=new iu(this,{persist:()=>this.storage!=="off"&&this.storage!=="memory",template:()=>this.definition.name,layout:()=>this.sidebarLayout});#o=new nu(this,{persist:()=>this.storage!=="off"&&this.storage!=="memory",template:()=>this.definition.name});#l=new qh(this);#a=new mu(this,{persist:()=>this.storage!=="off"&&this.storage!=="memory",storageKey:()=>`${this.storageKey??xt(this.definition.name)}:unsent-text`});#p=null;#h=new bh(this,{persist:()=>this.storage!=="off"&&this.storage!=="memory",storageKey:()=>this.storageKey??xt(this.definition.name),inside:e=>e.some(n=>n instanceof Element&&(n.id===tn||n.classList.contains("dpk-bell"))),show:e=>{this.#G(e)}});#f={toggleList:()=>this.#h.toggleList(),openList:()=>this.#h.send({kind:"open-list"}),show:e=>this.#h.show(e),dismiss:e=>this.#h.send({kind:"close-toast",key:e}),readAll:()=>this.#h.send({kind:"read-all"}),pause:e=>this.#h.pause(e),resume:e=>this.#h.resume(e)};#k=new _r(this);#b=!1;#$=new ku(this);#m=new Nh(this,()=>this.storage!=="off"&&this.storage!=="memory",()=>this.#d?.setTemplate(this.definition));#u;#d;#c=Un;#g=null;#v=new Set;#y=null;#S;#A;#T;#E=[];#O;#F=new Promise(e=>{this.#O=e});#P;get locale(){return this.#m.locale}get definition(){const e=this.locale;return this.#u?.locale!==e&&(this.#u={locale:e,value:this.definitionFor(e)}),this.#u.value}connectedCallback(){super.connectedCallback(),this.dataset.template=this.definition.name,this.#e||(this.#e=!0,this.notesOpen=this.notes==="on"||this.notes==="open"),this.#z(),window.addEventListener("hashchange",this.#j),this.addEventListener("click",this.#H),this.addEventListener("dpk-comment-targets-change",this.#x),this.addEventListener("dpk-comment-request",this.#q),this.addEventListener("dpk-comment-submit",this.#B),this.addEventListener("dpk-element-action",this.#U),this.#T??=new MutationObserver(this.#x),this.#x()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this.#j),this.removeEventListener("click",this.#H),this.#A?.disconnect(),this.#T?.disconnect(),this.removeEventListener("dpk-comment-targets-change",this.#x),this.removeEventListener("dpk-comment-request",this.#q),this.removeEventListener("dpk-comment-submit",this.#B),this.removeEventListener("dpk-element-action",this.#U)}#z(e=0){if(this.#d){this.#M();return}if(this.childNodes.length===0&&e<2){queueMicrotask(()=>this.#z(e+1));return}this.#ne()}#M(){this.#S||(this.#S=this.#d?.subscribe(()=>this.#oe()))}willUpdate(){this.dataset.theme=this.#i.resolve(mt(this.theme))}updated(){this.#le(),this.#ae(),this.#K(),this.#b&&(this.#b=!1,this.renderRoot.querySelector(".dpk-sidebar-toggle")?.focus())}get api(){return this.#P??=this.#te(),this.#P}get controller(){if(!this.#d)throw new Error(`<${this.tagName.toLowerCase()}> is not initialized yet`);return this.#d}get derivation(){return this.controller.derivation}get navigation(){return this.#c}dispatch(e){const n=this.controller.dispatch(e);return n.ok&&this.#a.settle([e.payload,e.note]),n.ok||(this.requestUpdate(),this.dispatchEvent(new CustomEvent("dpk-error",{detail:{issues:n.issues},bubbles:!0,composed:!0})),this.#w()),n}dispatchBatch(e){const n=this.controller.dispatchBatch(e);return n.ok&&this.#a.settle(e.flatMap(s=>[s.payload,s.note])),n.ok||(this.requestUpdate(),this.dispatchEvent(new CustomEvent("dpk-error",{detail:{issues:n.issues},bubbles:!0,composed:!0})),this.#w()),n}editComment(e,n){const s=this.controller.editComment(e,n);return s.ok&&this.#a.settle([n]),s.ok||(this.requestUpdate(),this.dispatchEvent(new CustomEvent("dpk-error",{detail:{issues:s.issues},bubbles:!0,composed:!0})),this.#w()),s}removeAction(e){this.controller.removeAction(e)}clearActions(){this.controller.clearActions()}navigate(e,n={}){const s=Fe(this.#C());this.#c=Hn(this.#c,e,this.definition.navigationHierarchy),this.#R(n.replace??!1);const i=Fe(this.#C());this.requestUpdate(),s!==i&&(this.#w(),this.dispatchEvent(new CustomEvent("dpk-navigate",{detail:{navigation:this.#c},bubbles:!0,composed:!0})))}hashFor(e){const n=this.#C();return Fe(this.definition.resolveNavigation(this.derivation.state,Hn(n,e,this.definition.navigationHierarchy)))}requestComment(e){this.#g=typeof e=="string"?e:D(e),this.notesOpen=!0,this.requestUpdate()}get integratedReview(){return!1}get canSendToClaude(){return this.#r.available}sendToClaude(){return this.#r.send({brief:this.api.exportBrief(),draft:Dn(this.derivation.actions),anchor:this})}renderReviewPanel(e){return v`<dpk-component-comment-panel
      .definition=${this.controller.definition}
      .state=${e.state}
      .navigation=${e.navigation}
      .derivation=${this.derivation}
      .issues=${this.controller.lastIssues}
      .exportBrief=${()=>this.api.exportBrief()}
      .sendToClaude=${this.canSendToClaude?()=>this.sendToClaude():void 0}
      .pendingTarget=${this.#g}
      .embedded=${this.integratedReview}
      .onDelete=${n=>this.removeAction(n)}
      .onEditComment=${(n,s)=>this.editComment(n,s)}
      .onClear=${()=>this.clearActions()}
      .onComment=${(n,s)=>{const i=this.dispatch({type:j,target:n,payload:{body:s}});return i.ok&&(this.#g=null),i}}
    ></dpk-component-comment-panel>`}renderChrome(e,n){const s=e.actions.length,i=e.actions.filter(u=>u.type===j).length,r=s-i,o=W(this.locale),a=n.sidebarHidden===!0||!n.sidebar&&!this.hasSidebarContent(),l=this.sidebarLayout.side,c=this.#Q,p=!a&&this.#_&&(c?!this.#o.drawerOpen:this.#o.collapsed),d=a?g:this.#X(p,c),h=this.definition.title(e.state);return v`
      <div class="dpk-shell" ?data-resizing=${this.#s.dragging}>
        <header class="dpk-header">
          <span class="dpk-brand" aria-hidden="true"></span>
          <div class="dpk-title">
            <span class="dpk-template-mark">${this.definition.label}</span>
            <h1 title=${h}>${h}</h1>
          </div>
          <div class="dpk-header-slot">
            ${n.header??g}
            <slot name="header"></slot>
          </div>
          <div class="dpk-header-meta">
            ${this.#$.render(this.locale)}
            <span class="dpk-meta-name">${this.definition.name}</span>
            <span class="dpk-meta-count" data-active=${s>0?"true":"false"}>
              ${o.draftCount(r,i)}
            </span>
          </div>
          <div class="dpk-header-tools">
            ${this.#W()} ${this.#Y()} ${this.#J()}
          </div>
        </header>
        <div class="dpk-body" data-sidebar-side=${l} ?data-sidebar-drawer=${c}>
          ${l==="right"?d:g}
          <aside
            id="dpk-sidebar"
            class="dpk-sidebar"
            ?hidden=${a||p}
            style=${`--dpk-sidebar-width: ${this.#s.width}px`}
          >
            ${n.sidebar??g}
            <slot name="sidebar"></slot>
          </aside>
          ${l==="left"?d:g}
          ${c&&!p&&!a?v`<div class="dpk-sidebar-scrim" @click=${()=>this.#o.closeDrawer()}></div>`:g}
          <main class="dpk-main">
            <div class="dpk-main-body">
              ${this.#y?v`<div class="dpk-banner" role="alert">
                      <strong>${o.baseDataError}</strong>
                      <code>${this.#y}</code>
                    </div>`:g}
              ${this.#h.error===null?g:v`<div class="dpk-banner" role="alert">
                      <strong>${o.changesError}</strong>
                      <code>${this.#h.error}</code>
                    </div>`}
              ${n.main??g}
              <slot name="main"></slot>
              <section class="dpk-orphans" ?hidden=${this.#n.orphans===0}>
                <p class="dpk-label">previews without metadata</p>
                <slot name="preview"></slot>
              </section>
            </div>
            <div class="dpk-memo" ?hidden=${!this.hasMemoContent()}>
              <details class="dpk-memo-fold">
                <summary class="dpk-memo-bar">${Yn()} ${o.memo}</summary>
                <div class="dpk-memo-body"><slot name="memo"></slot></div>
              </details>
            </div>
          </main>
          ${this.integratedReview?g:v`<aside class="dpk-notes" ?hidden=${!this.notesOpen}>${this.renderReviewPanel(e)}</aside>`}
        </div>
        ${n.footer||this.hasFooterContent()?v`<footer class="dpk-footer">
                ${n.footer??g}
                <slot name="footer"></slot>
              </footer>`:g}
        ${this.integratedReview?g:v`<button
                class="dpk-fab"
                type="button"
                aria-expanded=${this.notesOpen?"true":"false"}
                title=${o.reviewToggle}
                @click=${()=>{this.notesOpen=!this.notesOpen}}
              >
                <span class="dpk-fab-icon" aria-hidden="true"></span>
                <span
                  class="dpk-label"
                  style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"
                >
                  ${o.review}
                </span>
                ${s>0?v`<span class="dpk-fab-badge">${s}</span>`:g}
              </button>`}
        ${this.integratedReview?g:this.#Z(s)} ${this.#V()}
      </div>
    `}#W(){const e=this.#h.view;if(!e)return g;const n=W(this.locale);return v`${vh(e,n,this.#f)}
    ${yh(e,n,this.#f)}`}#V(){const e=this.#h.view;return e?wh(e,W(this.locale),this.#f):g}#K(){const e=this.renderRoot.querySelector(`#${tn}`),n=this.renderRoot.querySelector(".dpk-bell");!e||!n||vu(e)||this.#k.open(e,n,{width:No.width,height:Math.min(No.height,window.innerHeight-96)})}async#G(e){const n={};this.#p=n;const s=this.derivation.state,i=e.target===null?null:this.definition.canonicalTarget?.(s,at(e.target))??at(e.target),r=$p({...e,target:i&&D(i)},a=>this.definition.navigationFor?this.definition.navigationFor(s,a):null);if(!r||(r.navigate&&this.navigate(r.navigate),i===null))return;this.showTarget(i);const o=D(i);for(let a=0;a<bu;a+=1){if(await this.updateComplete,await xu(),this.#p!==n)return;const l=Eo(this,o);if(!(l===null||l.getClientRects().length===0)){Vh(this,l),Zh(l);return}}}showTarget(e){}#Z(e){const n=hh({actions:e,railOpen:this.notesOpen,sendable:this.canSendToClaude,locale:this.locale},this.#t.state);if(!n)return g;const s=W(this.locale);return v`<div class="dpk-dock" role="group" aria-label=${s.handoffLabel}>
      ${n.note?v`<p class="dpk-dock-note" role="alert">${n.note}</p>`:g}
      <div class="dpk-dock-actions">
        ${n.send?v`<button
                class="dpk-btn dpk-btn--accent"
                type="button"
                ?disabled=${n.send.disabled}
                @click=${()=>{this.#t.send(()=>this.sendToClaude())}}
              >
                ${n.send.label}
              </button>`:g}
        <button
          class=${n.send?"dpk-btn":"dpk-btn dpk-btn--accent"}
          type="button"
          data-status=${n.copy.status}
          title=${s.handoffCopyTitle}
          @click=${()=>{this.#t.copy(()=>this.api.exportBrief())}}
        >
          ${n.copy.label}
        </button>
      </div>
    </div>`}#Y(){const e=this.locale,n=W(e).language;return v`<select
      class="dpk-lang-select"
      aria-label=${n}
      title=${n}
      @change=${os(s=>{const i=kn.find(r=>r===s);i!==void 0&&this.#m.pick(i)})}
    >
      ${kn.map(s=>v`<option value=${s} lang=${s} ?selected=${s===e}>
            ${rc[s]}
          </option>`)}
    </select>`}#J(){const e=this.dataset.theme==="dark",n=W(this.locale),s=e?n.useLightTheme:n.useDarkTheme;return v`<button
      class="dpk-theme-toggle"
      type="button"
      aria-label=${s}
      title=${s}
      @click=${()=>this.#i.toggle(mt(this.theme))}
    >
      ${e?Vc():Kc()}
    </button>`}get#_(){return this.sidebarLayout.collapsible!==!1}get#Q(){return this.#l.narrow&&this.#_&&this.sidebarLayout.narrow!=="stack"}#X(e,n){const s=this.#_?this.#ee(e,n):g;return e||n?v`<div class="dpk-sidebar-strip">${s}</div>`:this.sidebarLayout.side==="left"?v`${this.#I()}${s}`:v`${s}${this.#I()}`}#ee(e,n){const s=W(this.locale),i=eu(this.sidebarLayout.side,e),r=i.action==="collapse"?s.collapseSidebar:s.expandSidebar;return v`<button
      class="dpk-sidebar-toggle"
      type="button"
      aria-controls="dpk-sidebar"
      aria-expanded=${e?"false":"true"}
      aria-label=${r}
      title=${r}
      @click=${()=>{this.#b=!0,n?this.#o.toggleDrawer():this.#o.toggle()}}
    >
      ${i.points==="left"?pr():Yn()}
    </button>`}#I(){const e=W(this.locale),n=this.#s.handlers;return v`<div
      class="dpk-sidebar-resizer"
      role="separator"
      tabindex="0"
      aria-orientation="vertical"
      aria-label=${e.resizeSidebar}
      aria-valuemin=${ve.min}
      aria-valuemax=${ve.max}
      aria-valuenow=${this.#s.width}
      title=${e.resizeSidebarHint}
      @pointerdown=${n.pointerdown}
      @pointermove=${n.pointermove}
      @pointerup=${n.pointerup}
      @pointercancel=${n.pointercancel}
      @keydown=${n.keydown}
      @dblclick=${n.dblclick}
    ></div>`}render(){if(!this.#d)return g;const e=this.#D();return this.renderChrome(e,this.renderRegions(e))}get sidebarLayout(){return Yh}hasSidebarContent(){return this.querySelector('[slot="sidebar"]')!==null}hasMemoContent(){return this.querySelector('[slot="memo"]')!==null}hasFooterContent(){return this.querySelector('[slot="footer"]')!==null}context(){return this.#D()}#L(){return{definition:this.definition,controller:()=>this.controller,derivation:()=>this.derivation,ready:this.#F,navigation:()=>this.#C(),issues:()=>this.controller.lastIssues,dispatch:e=>this.dispatch(e),dispatchBatch:e=>this.dispatchBatch(e),subscribe:e=>(this.#v.add(e),()=>{this.#v.delete(e)}),editComment:(e,n)=>this.editComment(e,n),removeAction:e=>this.removeAction(e),clearActions:()=>this.clearActions(),navigate:(e,n)=>this.navigate(e,n),hashFor:e=>this.hashFor(e),requestComment:e=>this.requestComment(e)}}#te(){return fh(this.#L(),this)}#N(){return po(this.#L())}#D(){return uh(this.#L())}#C(){return this.definition.resolveNavigation(this.derivation.state,this.#c)}#ne(){const e=this.#ie();this.#c=xo();const n=this.storageKey,{storage:s,author:i}=this.#se();this.#d=new lo({definition:this.definition,base:e,storage:s,...typeof n=="string"?{storageKey:n}:{},...i===void 0?{}:{author:i}}),this.#M(),this.#x(),this.#R(!0),this.#O?.(),this.#re(),this.requestUpdate()}#se(){if(this.storage==="off")return{storage:null};if(this.storage==="memory")return{storage:new us};const e=this.definition.name;return ao(this,e,this.storageKey??xt(e))??{storage:fs()}}#ie(){const e=this.querySelector($s);if(!e?.textContent||e.textContent.trim().length===0)return console.warn(`[dev-process-kit] <${this.tagName.toLowerCase()}> has no base JSON; starting from an empty state.`),this.#y='no <script type="application/json"> child found',this.definition.emptyBase();try{return this.definition.parseBase(JSON.parse(e.textContent))}catch(n){return console.error("[dev-process-kit] invalid base data:",n),this.#y=n instanceof Error?n.message:String(n),this.definition.emptyBase()}}#re(){this.querySelector($s)||(this.#A=new MutationObserver(()=>{const e=this.querySelector($s);if(e){this.#A?.disconnect(),this.#A=void 0;try{this.controller.setBase(this.definition.parseBase(JSON.parse(e.textContent??"null")))}catch(n){console.error("[dev-process-kit] invalid base data:",n)}}}),this.#A.observe(this,{childList:!0,subtree:!0}))}#w(){const e=this.#N();for(const n of this.#v)n(e)}#oe(){if(!this.isConnected){this.requestUpdate(),this.#w();return}this.#R(!0),vo(this.#E,this.controller.actions),queueMicrotask(this.#x),this.requestUpdate(),this.#w(),this.dispatchEvent(new CustomEvent("dpk-change",{detail:this.#N(),bubbles:!0,composed:!0}))}#R(e){const n=this.#C();this.#c=n,Bh(n,e)}#j=()=>{this.#c=xo(),this.#R(!0),this.requestUpdate(),this.#w(),this.dispatchEvent(new CustomEvent("dpk-navigate",{detail:{navigation:this.#c},bubbles:!0,composed:!0}))};#x=()=>{this.#T?.disconnect(),this.#E=Oh(this,e=>{this.isConnected&&this.#T?.observe(e,{childList:!0,subtree:!0})}),this.#d&&(vo(this.#E,this.#d.actions),this.#d.setComponentSnapshot(zh(this.#E)))};#q=e=>{if(e.stopPropagation(),!(e instanceof CustomEvent)||!this.#d)return;const n=e.detail;typeof n!="object"||n===null||!("target"in n)||typeof n.target!="string"||(this.#x(),!this.controller.definition.commentTargets(this.derivation.state,this.navigation).some(i=>i.value===n.target))||this.requestComment(n.target)};#B=e=>{if(e.stopPropagation(),!(e instanceof CustomEvent)||!e.cancelable||!this.#d)return;const n=C(Ep,e.detail);if(!n.success)return;this.#x();const{target:s,body:i}=n.output;if(!this.controller.definition.commentTargets(this.derivation.state,this.navigation).some(a=>a.value===s))return;this.dispatch({type:j,target:s,payload:{body:i}}).ok&&e.preventDefault()};#U=e=>{if(e.stopPropagation(),!(e instanceof CustomEvent)||!e.cancelable||!this.#d)return;const n=C(Ql,e.detail);if(!n.success)return;this.#x();const{type:s,target:i,payload:r}=n.output;if(!this.controller.definition.commentTargets(this.derivation.state,this.navigation).some(l=>l.value===i))return;this.dispatch({type:s,target:i,payload:r}).ok&&e.preventDefault()};#H=e=>{for(const n of e.composedPath()){if(!(n instanceof Element))continue;if(n===this||n.hasAttribute("data-template"))break;const s=n.getAttribute("data-dpk-navigate");if(s!==null){e.preventDefault(),this.navigate(Ut(s.includes("=")?s:`step=${s}`));return}const i=n.getAttribute("data-dpk-comment");if(i!==null){e.preventDefault(),this.requestComment(i);return}}};#ae(){const e=this.renderRoot.querySelector(".dpk-shell"),n=this.renderRoot.querySelector(".dpk-dock-actions");e&&(n?e.style.setProperty("--dpk-dock-space",`${n.offsetWidth+8}px`):e.style.removeProperty("--dpk-dock-space"))}#le(){this.#n.route()}}export{Ot as $,Zn as A,qc as B,j as C,ur as D,Un as E,Q as F,lr as G,dr as H,Gn as I,cr as J,ar as K,no as L,us as M,Ut as N,at as O,jl as P,Hn as Q,ql as R,oo as S,yu as T,ao as U,Dn as V,hs as W,Bi as X,D as Y,qt as Z,Mn as _,jn as a,ni as a$,Lr as a0,ft as a1,Lt as a2,ma as a3,de as a4,g as a5,v as a6,ct as a7,jc as a8,Qo as a9,_i as aA,Ni as aB,Il as aC,P as aD,Ge as aE,le as aF,ap as aG,os as aH,lp as aI,vt as aJ,je as aK,Fd as aL,Eo as aM,Vn as aN,Wn as aO,So as aP,Ti as aQ,Nl as aR,zl as aS,He as aT,Ys as aU,Ai as aV,_ as aW,or as aX,sr as aY,ir as aZ,mn as a_,he as aa,_r as ab,vn as ac,Fc as ad,Wc as ae,zn as af,Z as ag,se as ah,F as ai,b as aj,jt as ak,y as al,$ as am,Di as an,qi as ao,ke as ap,me as aq,Mi as ar,Yn as as,Hc as at,Pn as au,C as av,L as aw,Ii as ax,On as ay,Li as az,Ci as b,Vd as b0,et as b1,Tt as b2,fn as b3,pr as b4,Dc as b5,Nc as b6,Oi as b7,Ao as b8,Ei as b9,nr as ba,rr as bb,lo as c,Nn as d,Bl as e,Fn as f,Fi as g,lt as h,eo as i,xn as j,Ui as k,Wl as l,In as m,fs as n,xt as o,Dl as p,Qc as q,wl as r,tp as s,to as t,_e as u,Hl as v,Fe as w,Uc as x,Bc as y,Ht as z};
