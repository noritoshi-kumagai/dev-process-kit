import{ao as Ut,ag as P,aC as xe,ah as f,aj as x,aq as te,ak as T,al as z,am as B,b9 as oe,an as ne,az as Fe,af as Zt,ai as Pe,aD as U,p as g,aw as $,v as Be,aB as Xt,P as He,e as Gt,a2 as Vt,Y as C,l as We,aW as _,ba as Yt,bb as jt,a5 as b,a7 as Jt,a6 as h,a9 as ye,a8 as Qt,J as eo,A as to,K as oo,aG as no,at as io,a4 as ro,T as Ke,a3 as so,ab as ao,h as co}from"./shared-hrghWtVh.js";import{r as lo,p as ho,c as po}from"./shared-BXI23Fg6.js";import{c as ke}from"./shared-ml5h7U5L.js";const uo=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]],bo=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]],fo=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]],mo=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]],wo=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]];function qe(t){if(t.length===0)return NaN;const e=t.slice().sort((n,i)=>n-i),o=Math.floor(e.length/2);return e.length%2===0?(e[o-1]+e[o])/2:e[o]}const ie=["yellow","orange","pink","purple","blue","green","gray"],Ue=["rect","ellipse"],xo=["sticky","text","shape","frame"],re=["small","medium","large","xlarge"],se="medium",Ze=["arrow","line"],Z=["straight","elbow","curve"],X=24,I={sticky:{w:160,h:160},text:{w:240,h:48},shape:{w:180,h:110},frame:{w:640,h:420}},H={sticky:"yellow",shape:"blue",frame:"gray"},Xe=z(ne(),oe()),R=z(ne(),oe(),Fe(X)),ge=T(ie),ve=f(T(re),se),ae={id:xe,x:Xe,y:Xe},yo=P({...ae,kind:te("sticky"),w:f(R,I.sticky.w),h:f(R,I.sticky.h),text:f(x(),""),color:f(ge,H.sticky),fontSize:ve}),ko=P({...ae,kind:te("text"),w:f(R,I.text.w),h:f(R,I.text.h),text:f(x(),""),fontSize:ve}),go=P({...ae,kind:te("shape"),shape:f(T(Ue),"rect"),w:f(R,I.shape.w),h:f(R,I.shape.h),text:f(x(),""),color:f(ge,H.shape),fontSize:ve}),vo=P({...ae,kind:te("frame"),w:R,h:R,title:z(x(),B(1)),color:f(ge,H.frame)}),Ge=Ut("kind",[yo,ko,go,vo]),$o=P({id:xe,from:z(x(),B(1)),to:z(x(),B(1)),label:U(x()),style:f(T(Ze),"arrow"),route:f(T(Z),"straight")}),Ve=P({title:U(x()),items:f(Pe(Ge),[]),connectors:f(Pe($o),[])}),Ye=t=>{const e=Zt(Ve,t),o=new Set;for(const{id:i}of[...e.items,...e.connectors]){if(o.has(i))throw new Error(`duplicate id "${i}" (items and connectors share one id space)`);o.add(i)}const n=new Set(e.items.map(i=>i.id));for(const i of e.connectors){if(!n.has(i.from))throw new Error(`unknown item "${i.from}" in connector "${i.id}"`);if(!n.has(i.to))throw new Error(`unknown item "${i.to}" in connector "${i.id}"`);if(i.from===i.to)throw new Error(`connector "${i.id}" connects an item to itself`)}return e},je=()=>({items:[],connectors:[]}),p=(t,e)=>{if(e!==void 0)return t.items.find(o=>o.id===e)},y=(t,e)=>{if(e!==void 0)return t.connectors.find(o=>o.id===e)},Je=t=>[...t.items.map(e=>e.id),...t.connectors.map(e=>e.id)],L=t=>t.kind==="frame"?t.title:t.text,$e=t=>t.kind!=="text",G=t=>t.kind!=="frame",de=t=>t.w*t.h,Eo=(t,e,o)=>e>=t.x&&e<=t.x+t.w&&o>=t.y&&o<=t.y+t.h,A=(t,e)=>{const o=e.x+e.w/2,n=e.y+e.h/2;let i;for(const r of t.items)r.kind!=="frame"||r.id===e.id||e.kind==="frame"&&de(r)<=de(e)||Eo(r,o,n)&&(i===void 0||de(r)<de(i))&&(i=r);return i},Ee=(t,e)=>{const o=[],n=i=>{let r=A(t,i);for(;r!==void 0;){if(r.id===e.id)return!0;r=A(t,r)}return!1};for(const i of t.items)i.id!==e.id&&n(i)&&o.push(i);return o},Qe=z(ne(),oe()),et=z(ne(),oe(),Fe(X)),Te={type:"page",id:"whiteboard"},ce={ADD_ITEM:g("ADD_ITEM","page",Ge,{dedupeKey:Be}),SET_ITEM_TEXT:g("SET_ITEM_TEXT","item",$({text:x()})),MOVE_ITEM:g("MOVE_ITEM","item",$({x:Qe,y:Qe})),RESIZE_ITEM:g("RESIZE_ITEM","item",$({w:et,h:et})),SET_ITEM_COLOR:g("SET_ITEM_COLOR","item",$({color:T(ie)})),SET_ITEM_FONT_SIZE:g("SET_ITEM_FONT_SIZE","item",$({fontSize:T(re)})),REORDER_ITEM:g("REORDER_ITEM","item",$({after:Xt(z(x(),B(1)))})),DELETE_ITEM:g("DELETE_ITEM","item",$({})),CONNECT_ITEMS:g("CONNECT_ITEMS","page",$({id:xe,from:z(x(),B(1)),to:z(x(),B(1)),label:U(x()),style:U(T(Ze)),route:U(T(Z))}),{dedupeKey:Be}),SET_CONNECTOR_LABEL:g("SET_CONNECTOR_LABEL","connector",$({label:x()})),SET_CONNECTOR_ROUTE:g("SET_CONNECTOR_ROUTE","connector",$({route:T(Z)})),DELETE_CONNECTOR:g("DELETE_CONNECTOR","connector",$({}))},F=t=>({type:"item",id:t}),k={addItem:t=>({type:"ADD_ITEM",target:Te,payload:t}),setText:(t,e)=>({type:"SET_ITEM_TEXT",target:F(t),payload:{text:e}}),move:(t,e,o)=>({type:"MOVE_ITEM",target:F(t),payload:{x:e,y:o}}),resize:(t,e,o)=>({type:"RESIZE_ITEM",target:F(t),payload:{w:e,h:o}}),setColor:(t,e)=>({type:"SET_ITEM_COLOR",target:F(t),payload:{color:e}}),setFontSize:(t,e)=>({type:"SET_ITEM_FONT_SIZE",target:F(t),payload:{fontSize:e}}),reorder:(t,e)=>({type:"REORDER_ITEM",target:F(t),payload:{after:e}}),deleteItem:t=>({type:"DELETE_ITEM",target:F(t),payload:{}}),connect:(t,e,o,n)=>({type:"CONNECT_ITEMS",target:Te,payload:{id:t,from:e,to:o,...n===void 0?{}:{label:n}}}),setConnectorLabel:(t,e)=>({type:"SET_CONNECTOR_LABEL",target:{type:"connector",id:t},payload:{label:e}}),setConnectorRoute:(t,e)=>({type:"SET_CONNECTOR_ROUTE",target:{type:"connector",id:t},payload:{route:e}}),deleteConnector:t=>({type:"DELETE_CONNECTOR",target:{type:"connector",id:t},payload:{}})},tt=(t,e)=>{const o=He(ce,e);if(o===null)return null;const n=o.target.id;switch(o.type){case"ADD_ITEM":{const i=o.payload,r=t.items.find(s=>s.id===i.id);return r!==void 0?r.kind===i.kind?t:null:t.connectors.some(s=>s.id===i.id)?null:{...t,items:[...t.items,i]}}case"SET_ITEM_TEXT":return V(t,n,i=>i.kind==="frame"?o.payload.text.trim()===""?null:{...i,title:o.payload.text}:{...i,text:o.payload.text});case"MOVE_ITEM":return V(t,n,i=>({...i,x:o.payload.x,y:o.payload.y}));case"RESIZE_ITEM":return V(t,n,i=>({...i,w:o.payload.w,h:o.payload.h}));case"SET_ITEM_COLOR":return V(t,n,i=>i.kind==="text"?null:{...i,color:o.payload.color});case"SET_ITEM_FONT_SIZE":return V(t,n,i=>i.kind==="frame"?null:{...i,fontSize:o.payload.fontSize});case"REORDER_ITEM":return To(t,n,o.payload.after);case"DELETE_ITEM":return t.items.some(i=>i.id===n)?{...t,items:t.items.filter(i=>i.id!==n),connectors:t.connectors.filter(i=>i.from!==n&&i.to!==n)}:null;case"CONNECT_ITEMS":{const i=o.payload;if(t.connectors.some(s=>s.id===i.id))return t;if(t.items.some(s=>s.id===i.id)||i.from===i.to||!t.items.some(s=>s.id===i.from)||!t.items.some(s=>s.id===i.to))return null;const r={id:i.id,from:i.from,to:i.to,style:i.style??"arrow",route:i.route??"straight",...i.label===void 0||i.label===""?{}:{label:i.label}};return{...t,connectors:[...t.connectors,r]}}case"SET_CONNECTOR_LABEL":return ot(t,n,i=>{const{label:r,...s}=i;return o.payload.label===""?s:{...s,label:o.payload.label}});case"SET_CONNECTOR_ROUTE":return ot(t,n,i=>({...i,route:o.payload.route}));case"DELETE_CONNECTOR":return t.connectors.some(i=>i.id===n)?{...t,connectors:t.connectors.filter(i=>i.id!==n)}:null;default:return Gt(o)}},V=(t,e,o)=>{const n=t.items.find(r=>r.id===e);if(n===void 0)return null;const i=o(n);return i===null?null:{...t,items:t.items.map(r=>r.id===e?i:r)}},To=(t,e,o)=>{const n=t.items.find(s=>s.id===e);if(n===void 0||o===e)return null;const i=t.items.filter(s=>s.id!==e),r=o===null?0:i.findIndex(s=>s.id===o)+1;return r===0&&o!==null?null:{...t,items:[...i.slice(0,r),n,...i.slice(r)]}},ot=(t,e,o)=>{const n=t.connectors.find(r=>r.id===e);if(n===void 0)return null;const i=o(n);return{...t,connectors:t.connectors.map(r=>r.id===e?i:r)}},W=t=>{if(t.length===0)return null;const e=Math.min(...t.map(r=>r.x)),o=Math.min(...t.map(r=>r.y)),n=Math.max(...t.map(r=>r.x+r.w)),i=Math.max(...t.map(r=>r.y+r.h));return{x:e,y:o,w:n-e,h:i-o}},ze=t=>[...t.items.filter(e=>e.kind==="frame"),...t.items.filter(e=>e.kind!=="frame")],zo=t=>t.kind==="shape"&&t.shape==="ellipse",Y=(t,e)=>{const o=t.x+t.w/2,n=t.y+t.h/2,i=e.x-o,r=e.y-n;if(i===0&&r===0)return{x:o,y:n};const s=t.w/2,d=t.h/2,a=zo(t)?1/Math.sqrt((i/s)**2+(r/d)**2):Math.min(i===0?1/0:s/Math.abs(i),r===0?1/0:d/Math.abs(r));return{x:o+i*a,y:n+r*a}},K=t=>({x:t.x+t.w/2,y:t.y+t.h/2}),nt=(t,e)=>{const o=Y(t,K(e)),n=Y(e,K(t));return{start:o,end:n,mid:{x:(o.x+n.x)/2,y:(o.y+n.y)/2}}},S=t=>`${t.x} ${t.y}`,le=(t,e,o)=>{if(o==="straight"){const{start:M,end:Q,mid:ee}=nt(t,e);return{d:`M ${S(M)} L ${S(Q)}`,mid:ee}}const n=K(t),i=K(e),r=Math.abs(i.x-n.x)>=Math.abs(i.y-n.y),s=r?i.x>=n.x:i.y>=n.y,d=(M,Q)=>{const ee=K(M);return r?{x:Q?M.x+M.w:M.x,y:ee.y}:{x:ee.x,y:Q?M.y+M.h:M.y}},a=d(t,s),c=d(e,!s),l={x:(a.x+c.x)/2,y:(a.y+c.y)/2},m=r?{x:l.x,y:a.y}:{x:a.x,y:l.y},u=r?{x:l.x,y:c.y}:{x:c.x,y:l.y};return{d:o==="elbow"?`M ${S(a)} L ${S(m)} L ${S(u)} L ${S(c)}`:`M ${S(a)} C ${S(m)} ${S(u)} ${S(c)}`,mid:l}},Se=(t,e)=>e.x>=t.x&&e.x<=t.x+t.w&&e.y>=t.y&&e.y<=t.y+t.h,So=(t,e)=>e>.5?{w:t.w,h:Math.ceil(t.h+e)}:void 0,Mo=(t,e)=>t.items.filter(o=>o.kind==="frame"&&Se(o,e)).sort((o,n)=>o.w*o.h-n.w*n.h),Me=(t,e,o)=>{const n=ze(t);for(let r=n.length-1;r>=0;r-=1){const s=n[r];if(!(s===void 0||s.id===o||s.kind==="frame")&&Se(s,e))return s}let i;for(const r of n)r.kind!=="frame"||r.id===o||!Se(r,e)||(i===void 0||r.w*r.h<i.w*i.h)&&(i=r);return i},_o=(t,e)=>({x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),w:Math.abs(t.x-e.x),h:Math.abs(t.y-e.y)}),Lo=(t,e)=>e.x>=t.x&&e.y>=t.y&&e.x+e.w<=t.x+t.w&&e.y+e.h<=t.y+t.h,Oo=(t,e)=>t.items.filter(o=>o.kind==="frame"?Lo(e,o):he(e,o,0)),he=(t,e,o)=>t.x<e.x+e.w+o&&e.x<t.x+t.w+o&&t.y<e.y+e.h+o&&e.y<t.y+t.h+o,Co=(t,e,o=!1,n=16,i=6)=>{const r=o?t.items:t.items.filter(c=>c.kind!=="frame"),s=c=>!r.some(l=>he(c,l,n));if(s(e))return{x:e.x,y:e.y};const d=e.w+n,a=e.h+n;for(let c=1;c<=i;c+=1){const l=[];for(let u=-c;u<=c;u+=1)for(let w=-c;w<=c;w+=1)Math.max(Math.abs(w),Math.abs(u))===c&&l.push({x:e.x+w*d,y:e.y+u*a});l.sort((u,w)=>Math.hypot(u.x-e.x,u.y-e.y)-Math.hypot(w.x-e.x,w.y-e.y));const m=l.find(u=>s({...e,...u}));if(m!==void 0)return m}return{x:e.x,y:e.y}},Io={sticky:"Sticky note",text:"Text",shape:"Shape",frame:"Frame"},O={sticky:"\u4ED8\u7B8B",text:"\u30C6\u30AD\u30B9\u30C8",shape:"\u56F3\u5F62",frame:"\u30D5\u30EC\u30FC\u30E0"},N={sticky:"sticky note",text:"text box",shape:"shape",frame:"frame"},Ro={rect:"Rectangle",ellipse:"Ellipse"},No={rect:"\u56DB\u89D2\u5F62",ellipse:"\u6955\u5186"},Do={yellow:"Yellow",orange:"Orange",pink:"Pink",purple:"Purple",blue:"Blue",green:"Green",gray:"Gray"},Ao={yellow:"\u9EC4",orange:"\u30AA\u30EC\u30F3\u30B8",pink:"\u30D4\u30F3\u30AF",purple:"\u7D2B",blue:"\u9752",green:"\u7DD1",gray:"\u30B0\u30EC\u30FC"},Fo={small:"Small",medium:"Medium",large:"Large",xlarge:"Extra large"},Po={small:"\u5C0F",medium:"\u4E2D",large:"\u5927",xlarge:"\u7279\u5927"},Bo={straight:"Straight",elbow:"Elbow",curve:"Curved"},Ho={straight:"\u76F4\u7DDA",elbow:"\u30AB\u30AE\u7DDA",curve:"\u66F2\u7DDA"},it={small:"S",medium:"M",large:"L",xlarge:"XL"},pe=Vt({en:{kindLabel:t=>Io[t],shapeLabel:t=>Ro[t],colorLabel:t=>Do[t],fontSizeLabel:t=>Fo[t],fontSizeShort:t=>it[t],routeLabel:t=>Bo[t],connector:"Connector",board:"Board",wholeBoard:"Whole board",canvasLabel:"Whiteboard canvas",emptyHint:"Double-click anywhere to add a sticky note, or pick something from the toolbar.",toolsLabel:"Add to the board",addSticky:"Sticky note",addText:"Text",addRect:"Rectangle",addEllipse:"Ellipse",addFrame:"Frame",newFrameTitle:"New frame",textPlaceholder:"Type something",selectionLabel:"Selected item",selectionCount:t=>`${t} items selected`,editText:"Edit text",renameFrame:"Rename frame",comment:"Comment",delete:"Delete",colorLabelPrefix:"Color",fontSizeLabelPrefix:"Text size",arrangeLabel:"Stacking order",bringToFront:"Bring to front",bringForward:"Bring forward",sendBackward:"Send backward",sendToBack:"Send to back",routeLabelPrefix:"Line",labelField:"Connector label",labelPlaceholder:"Add a label",resizeHandle:"Resize",connectHandle:"Drag to connect",commentCount:t=>`${t} comment${t===1?"":"s"}`,zoomIn:"Zoom in",zoomOut:"Zoom out",zoomFit:"Fit the board",zoomReset:"Reset to 100%",framesHeading:"Frames",framesHint:"Pick a frame to bring it into view.",memberCount:t=>`${t} item${t===1?"":"s"}`,addedTitle:t=>`Added a ${N[t]}`,textEditedTitle:t=>t==="frame"?"Renamed the frame":`Edited the ${N[t]}`,movedTitle:t=>`Moved the ${N[t]}`,resizedTitle:t=>`Resized the ${N[t]}`,recoloredTitle:t=>`Changed the color of the ${N[t]}`,resizedTextTitle:t=>`Changed the text size of the ${N[t]}`,restackedTitle:t=>`Changed the stacking order of the ${N[t]}`,deletedTitle:t=>`Deleted the ${N[t]}`,connectedTitle:"Connected two items",relabeledTitle:"Relabeled the connector",reroutedTitle:"Changed the connector line",disconnectedTitle:"Removed the connector",arrowTo:t=>`\u2192 \u201C${t}\u201D`,arrowFrom:(t,e)=>`\u201C${t}\u201D \u2192 \u201C${e}\u201D`,plain:(t,e)=>`${t} \u2192 ${e}`,added:t=>`+ \u201C${t}\u201D`,deleted:t=>`\u2212 \u201C${t}\u201D`,inFrame:t=>`in frame \u201C${t}\u201D`,intoFrame:t=>`into frame \u201C${t}\u201D`,outOfFrame:t=>`out of frame \u201C${t}\u201D`,betweenFrames:(t,e)=>`frame \u201C${t}\u201D \u2192 frame \u201C${e}\u201D`,position:(t,e)=>`(${t}, ${e})`,size:(t,e)=>`${t}\xD7${e}`,connection:(t,e)=>`\u201C${t}\u201D \u2192 \u201C${e}\u201D`,labeled:t=>`labeled \u201C${t}\u201D`,inFrontOf:t=>`in front of \u201C${t}\u201D`,toBack:"to the very back",empty:"(empty)",noLabel:"(no label)"},ja:{kindLabel:t=>O[t],shapeLabel:t=>No[t],colorLabel:t=>Ao[t],fontSizeLabel:t=>Po[t],fontSizeShort:t=>it[t],routeLabel:t=>Ho[t],connector:"\u30B3\u30CD\u30AF\u30BF",board:"\u30DC\u30FC\u30C9",wholeBoard:"\u30DC\u30FC\u30C9\u5168\u4F53",canvasLabel:"\u30DB\u30EF\u30A4\u30C8\u30DC\u30FC\u30C9",emptyHint:"\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u4ED8\u7B8B\u3092\u7F6E\u304F\u304B\u3001\u30C4\u30FC\u30EB\u30D0\u30FC\u304B\u3089\u8FFD\u52A0\u3057\u307E\u3059\u3002",toolsLabel:"\u30DC\u30FC\u30C9\u306B\u8FFD\u52A0",addSticky:"\u4ED8\u7B8B",addText:"\u30C6\u30AD\u30B9\u30C8",addRect:"\u56DB\u89D2\u5F62",addEllipse:"\u6955\u5186",addFrame:"\u30D5\u30EC\u30FC\u30E0",newFrameTitle:"\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0",textPlaceholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",selectionLabel:"\u9078\u629E\u4E2D\u306E\u8981\u7D20",selectionCount:t=>`${t} \u4EF6\u3092\u9078\u629E\u4E2D`,editText:"\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6",renameFrame:"\u30D5\u30EC\u30FC\u30E0\u540D\u3092\u5909\u66F4",comment:"\u30B3\u30E1\u30F3\u30C8",delete:"\u524A\u9664",colorLabelPrefix:"\u8272",fontSizeLabelPrefix:"\u6587\u5B57\u30B5\u30A4\u30BA",arrangeLabel:"\u91CD\u306A\u308A\u9806",bringToFront:"\u6700\u524D\u9762\u3078",bringForward:"\u524D\u9762\u3078",sendBackward:"\u80CC\u9762\u3078",sendToBack:"\u6700\u80CC\u9762\u3078",routeLabelPrefix:"\u7DDA\u306E\u5F62",labelField:"\u30B3\u30CD\u30AF\u30BF\u306E\u30E9\u30D9\u30EB",labelPlaceholder:"\u30E9\u30D9\u30EB\u3092\u8FFD\u52A0",resizeHandle:"\u30B5\u30A4\u30BA\u3092\u5909\u66F4",connectHandle:"\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u3064\u306A\u3050",commentCount:t=>`\u30B3\u30E1\u30F3\u30C8 ${t} \u4EF6`,zoomIn:"\u62E1\u5927",zoomOut:"\u7E2E\u5C0F",zoomFit:"\u30DC\u30FC\u30C9\u5168\u4F53\u3092\u8868\u793A",zoomReset:"100% \u306B\u623B\u3059",framesHeading:"\u30D5\u30EC\u30FC\u30E0",framesHint:"\u30D5\u30EC\u30FC\u30E0\u3092\u9078\u3076\u3068\u305D\u3053\u3078\u79FB\u52D5\u3057\u307E\u3059\u3002",memberCount:t=>`${t} \u4EF6`,addedTitle:t=>`${O[t]}\u3092\u8FFD\u52A0`,textEditedTitle:t=>t==="frame"?"\u30D5\u30EC\u30FC\u30E0\u540D\u3092\u5909\u66F4":`${O[t]}\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4`,movedTitle:t=>`${O[t]}\u3092\u79FB\u52D5`,resizedTitle:t=>`${O[t]}\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4`,recoloredTitle:t=>`${O[t]}\u306E\u8272\u3092\u5909\u66F4`,resizedTextTitle:t=>`${O[t]}\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u5909\u66F4`,restackedTitle:t=>`${O[t]}\u306E\u91CD\u306A\u308A\u9806\u3092\u5909\u66F4`,deletedTitle:t=>`${O[t]}\u3092\u524A\u9664`,connectedTitle:"\u8981\u7D20\u3092\u3064\u306A\u3044\u3060",relabeledTitle:"\u30B3\u30CD\u30AF\u30BF\u306E\u30E9\u30D9\u30EB\u3092\u5909\u66F4",reroutedTitle:"\u30B3\u30CD\u30AF\u30BF\u306E\u7DDA\u306E\u5F62\u3092\u5909\u66F4",disconnectedTitle:"\u30B3\u30CD\u30AF\u30BF\u3092\u524A\u9664",arrowTo:t=>`\u2192 \u300C${t}\u300D`,arrowFrom:(t,e)=>`\u300C${t}\u300D\u2192\u300C${e}\u300D`,plain:(t,e)=>`${t} \u2192 ${e}`,added:t=>`+ \u300C${t}\u300D`,deleted:t=>`\u2212 \u300C${t}\u300D`,inFrame:t=>`\u30D5\u30EC\u30FC\u30E0\u300C${t}\u300D\u5185`,intoFrame:t=>`\u30D5\u30EC\u30FC\u30E0\u300C${t}\u300D\u3078`,outOfFrame:t=>`\u30D5\u30EC\u30FC\u30E0\u300C${t}\u300D\u306E\u5916\u3078`,betweenFrames:(t,e)=>`\u30D5\u30EC\u30FC\u30E0\u300C${t}\u300D\u2192\u300C${e}\u300D`,position:(t,e)=>`(${t}, ${e})`,size:(t,e)=>`${t}\xD7${e}`,connection:(t,e)=>`\u300C${t}\u300D\u2192\u300C${e}\u300D`,labeled:t=>`\u30E9\u30D9\u30EB\u300C${t}\u300D`,inFrontOf:t=>`\u300C${t}\u300D\u306E\u524D\u9762\u3078`,toBack:"\u6700\u80CC\u9762\u3078",empty:"\uFF08\u7A7A\uFF09",noLabel:"\uFF08\u30E9\u30D9\u30EB\u306A\u3057\uFF09"}}),ue=t=>t===void 0?[]:[...new Set(t.split(",").filter(e=>e!==""))],rt=t=>t.length===0?void 0:t.join(","),st=(t,e)=>t.includes(e)?t.filter(o=>o!==e):[...t,e],at=40,D=(t,e)=>{const o=e.replace(/\s+/g," ").trim();return o===""?t.empty:o.length>at?`${o.slice(0,at-1)}\u2026`:o},Wo=(t,e)=>`${e.kind==="shape"?t.shapeLabel(e.shape):t.kindLabel(e.kind)} \xB7 ${D(t,L(e))}`,E=(t,e,o,n)=>{const i=p(e,n)??p(o,n);return i===void 0?n:D(t,L(i))},Ko=(t,e,o,n=e)=>`${t.connector} \xB7 ${t.connection(E(t,e,n,o.from),E(t,e,n,o.to))}`,qo=(t,e,o,n,i)=>{const r=o===void 0?void 0:A(i,o),s=A(e,n),d=t.position(Math.round(n.x),Math.round(n.y));if(r?.id!==s?.id){if(r!==void 0&&s!==void 0)return`${t.betweenFrames(r.title,s.title)} ${d}`;if(s!==void 0)return`${t.intoFrame(s.title)} ${d}`;if(r!==void 0)return`${t.outOfFrame(r.title)} ${d}`}return o===void 0?`\u2192 ${d}`:t.plain(t.position(Math.round(o.x),Math.round(o.y)),d)},Uo=(t,e,o,n)=>{const i=e.target.id,r=p(n,i),s=p(o,i)??r,d=s?.kind??"sticky";switch(e.type){case"ADD_ITEM":{const a=p(o,e.payload.id)??e.payload,c=A(o,a),l=t.added(D(t,L(a)));return{title:t.addedTitle(a.kind),tone:"create",body:c===void 0?l:`${l} ${t.inFrame(c.title)}`}}case"SET_ITEM_TEXT":{const a=D(t,e.payload.text);return{title:t.textEditedTitle(d),tone:"update",body:r===void 0?t.arrowTo(a):t.arrowFrom(D(t,L(r)),a)}}case"MOVE_ITEM":{if(s===void 0)return{title:t.movedTitle(d),tone:"move"};const a={...s,x:e.payload.x,y:e.payload.y};return{title:t.movedTitle(d),tone:"move",body:qo(t,o,r,a,n)}}case"RESIZE_ITEM":{const a=t.size(Math.round(e.payload.w),Math.round(e.payload.h));return{title:t.resizedTitle(d),tone:"update",body:r===void 0?`\u2192 ${a}`:t.plain(t.size(Math.round(r.w),Math.round(r.h)),a)}}case"SET_ITEM_COLOR":{const a=t.colorLabel(e.payload.color);return{title:t.recoloredTitle(d),tone:"update",body:r!==void 0&&$e(r)?t.plain(t.colorLabel(r.color),a):`\u2192 ${a}`}}case"SET_ITEM_FONT_SIZE":{const a=t.fontSizeLabel(e.payload.fontSize);return{title:t.resizedTextTitle(d),tone:"update",body:r!==void 0&&G(r)?t.plain(t.fontSizeLabel(r.fontSize),a):`\u2192 ${a}`}}case"REORDER_ITEM":{const a=e.payload.after;return{title:t.restackedTitle(d),tone:"move",body:a===null?t.toBack:t.inFrontOf(E(t,o,n,a))}}case"DELETE_ITEM":return{title:t.deletedTitle(d),tone:"delete",body:t.deleted(s===void 0?i:D(t,L(s)))};case"CONNECT_ITEMS":{const a=e.payload,c=t.connection(E(t,o,n,a.from),E(t,o,n,a.to));return{title:t.connectedTitle,tone:"create",body:a.label===void 0||a.label===""?c:`${c} \xB7 ${t.labeled(a.label)}`}}case"SET_CONNECTOR_LABEL":{const a=y(n,i)?.label,c=e.payload.label===""?t.noLabel:e.payload.label;return{title:t.relabeledTitle,tone:"update",body:a===void 0?t.arrowTo(c):t.arrowFrom(a,c)}}case"SET_CONNECTOR_ROUTE":{const a=y(n,i)?.route,c=t.routeLabel(e.payload.route);return{title:t.reroutedTitle,tone:"update",body:a===void 0?`\u2192 ${c}`:t.plain(t.routeLabel(a),c)}}case"DELETE_CONNECTOR":{const a=y(n,i)??y(o,i);return{title:t.disconnectedTitle,tone:"delete",...a===void 0?{}:{body:t.connection(E(t,o,n,a.from),E(t,o,n,a.to))}}}}},dt=(t,e,o,n=o)=>{let i;try{const r=He(ce,e);i=r===null?{title:e.type,tone:"meta"}:Uo(t,r,o,n)}catch{i={title:e.type,tone:"meta"}}return{title:i.title,targetLabel:lt(t,o,e.target,n),tone:i.tone,...i.body===void 0?{}:{summary:i.body}}},ct=t=>`${t.type} ${C(t.target)} ${JSON.stringify(t.payload)}`,lt=(t,e,o,n=e)=>{switch(o.type){case"item":{const i=p(e,o.id)??p(n,o.id);return i===void 0?`${o.type} \xB7 ${o.id} (missing)`:Wo(t,i)}case"connector":{const i=y(e,o.id)??y(n,o.id);return i===void 0?`${t.connector} \xB7 ${o.id} (missing)`:Ko(t,e,i,n)}case"page":return`${t.board} \xB7 ${_e(e)}`;default:return`${o.type} \xB7 ${o.id}`}},ht=(t,e)=>{const o=[{value:"page:whiteboard",label:t.wholeBoard,group:t.board}],n=e.items.filter(r=>r.kind==="frame"),i=e.items.filter(r=>r.kind!=="frame");for(const r of[...n,...i]){const s=A(e,r),d=D(t,L(r));o.push({value:C({type:"item",id:r.id}),label:s===void 0?d:`${s.title} \u203A ${d}`,group:t.kindLabel(r.kind)})}for(const r of e.connectors)o.push({value:C({type:"connector",id:r.id}),label:t.connection(E(t,e,e,r.from),E(t,e,e,r.to)),group:t.connector});return o},pt=(t,e,o)=>{const n=ue(o.item),i=n.length===1?n[0]:void 0,r=p(e,i)??p(e,o.frame);if(r!==void 0)return{value:C({type:"item",id:r.id}),label:D(t,L(r)),group:t.kindLabel(r.kind)};const s=y(e,i);return s===void 0?null:{value:C({type:"connector",id:s.id}),label:t.connection(E(t,e,e,s.from),E(t,e,e,s.to)),group:t.connector}},_e=t=>t.title??"Whiteboard",ut=(t,e)=>{const o={...e};p(t,e.frame)?.kind!=="frame"&&delete o.frame;const n=ue(e.item),i=n.filter(d=>p(t,d)!==void 0),r=n.length===1?y(t,n[0]):void 0,s=rt(r===void 0?i:[r.id]);return s===void 0?delete o.item:o.item=s,o},bt=(t,e)=>{switch(e.type){case"item":return p(t,e.id)!==void 0;case"connector":return y(t,e.id)!==void 0;case"page":return!0;default:return!1}},ft=t=>{const e=pe(t);return{name:"whiteboard",label:"Whiteboard",parseBase:Ye,emptyBase:je,actions:ce,apply:tt,canonicalState:o=>({...o,items:ze(o)}),hasTarget:bt,describe:(o,n,i)=>dt(e,o,n,i),serialize:ct,resolveNavigation:ut,navigationHierarchy:["frame","item"],commentTargets:o=>ht(e,o),currentTarget:(o,n)=>pt(e,o,n),title:_e}},mt=["front","forward","backward","back"],wt=t=>t.items.filter(e=>e.kind!=="frame"),xt=(t,e,o,n)=>{const i=t.indexOf(e),r=(n?t.slice(i+1):t.slice(0,i).reverse()).filter(c=>!o.has(c.id)),s=r.find(c=>he(e,c,0))??r[0];if(s===void 0)return t;const d=t.filter(c=>c!==e),a=d.indexOf(s)+(n?1:0);return[...d.slice(0,a),e,...d.slice(a)]},yt=(t,e,o)=>{const n=t.filter(r=>e.has(r.id)),i=t.filter(r=>!e.has(r.id));switch(o){case"front":return[...i,...n];case"back":return[...n,...i];case"forward":return[...n].reverse().reduce((r,s)=>xt(r,s,e,!0),[...t]);case"backward":return n.reduce((r,s)=>xt(r,s,e,!1),[...t])}},Zo=(t,e,o)=>{let n=t.map(r=>r.id);const i=[];return e.forEach((r,s)=>{if(!o.has(r.id))return;const d=e[s-1]?.id??null,a=n.indexOf(r.id);(n[a-1]??null)!==d&&(n=n.filter(c=>c!==r.id),n.splice(d===null?0:n.indexOf(d)+1,0,r.id),i.push(k.reorder(r.id,d)))}),i},Xo=(t,e,o)=>{const n=wt(t),i=new Set(e.filter(r=>n.some(s=>s.id===r)));return i.size===0?[]:Zo(n,yt(n,i,o),i)},Go=(t,e)=>{const o=wt(t),n=new Set(e.filter(s=>o.some(d=>d.id===s))),i=o.flatMap(s=>n.has(s.id)?o.filter(d=>!n.has(d.id)&&he(s,d,0)).map(d=>[s,d]):[]),r=(s,[d,a])=>s.indexOf(d)>s.indexOf(a);return new Set(mt.filter(s=>{const d=yt(o,n,s);return i.some(a=>r(o,a)!==r(d,a))}))},kt=(t,e,o)=>{if(!t.contains(e)||e.nodeType!==Node.TEXT_NODE)return;let n=0;const i=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(let r=i.nextNode();r!==null;r=i.nextNode()){if(r===e)return n+o;n+=r.textContent?.length??0}},Vo=(t,e,o)=>{const n=t.getRootNode(),i=t.ownerDocument;if(typeof i.caretPositionFromPoint=="function"){const r=n instanceof ShadowRoot?[n]:[],s=i.caretPositionFromPoint(e,o,{shadowRoots:r});if(s!==null)return kt(t,s.offsetNode,s.offset)}if(typeof i.caretRangeFromPoint=="function"){const r=i.caretRangeFromPoint(e,o);if(r!==null)return kt(t,r.startContainer,r.startOffset)}},Yo=["sticky","text","rect","ellipse","frame"],jo=t=>t==="rect"||t==="ellipse"?I.shape:I[t],Jo=(t,e,o,n)=>{const{w:i,h:r}=jo(o),s={x:Math.round(n.x-i/2),y:Math.round(n.y-r/2)},d=Co(t,{...s,w:i,h:r},o==="frame"),l={id:We(`new-${o==="rect"||o==="ellipse"?"shape":o}`,Je(t)),x:d.x,y:d.y,w:i,h:r};switch(o){case"sticky":return{...l,kind:"sticky",text:"",color:H.sticky,fontSize:se};case"text":return{...l,kind:"text",text:"",fontSize:se};case"rect":case"ellipse":return{...l,kind:"shape",shape:o,text:"",color:H.shape,fontSize:se};case"frame":return{...l,kind:"frame",title:e.newFrameTitle,color:H.frame}}},Qo=(t,e,o)=>We(`${e}-to-${o}`,Je(t)),en=(t,e)=>{const o=(t.kind==="frame"?e.replace(/\r?\n/g," "):e).trim();if(!(t.kind==="frame"&&o===""))return o===L(t)?void 0:o},be=4,Le=(t,e,o,n,i=[e])=>{if(p(t,e)===void 0)return;const r=new Map;for(const s of i.includes(e)?i:[e,...i]){const d=p(t,s);if(d!==void 0)for(const a of d.kind==="frame"?[d,...Ee(t,d)]:[d])r.set(a.id,a)}return{kind:"move",pointerId:o,itemId:e,origins:[...r.values()].map(({id:s,x:d,y:a})=>({id:s,x:d,y:a})),start:n,current:n,moved:!1}},tn=(t,e,o,n)=>{const i=p(t,e);if(i!==void 0)return{kind:"resize",pointerId:o,itemId:e,origin:{w:i.w,h:i.h},start:n,current:n,moved:!1,keepRatio:!1}},on=(t,e)=>({kind:"pan",pointerId:t,start:e,last:e,moved:!1}),nn=(t,e)=>({gesture:{...t,last:e,moved:t.moved||Math.hypot(e.x-t.start.x,e.y-t.start.y)>be},dx:e.x-t.last.x,dy:e.y-t.last.y}),gt=(t,e,o)=>({kind:"marquee",pointerId:t,base:o,start:e,current:e,moved:!1}),rn=(t,e,o,n,i)=>{const r=Mo(t,n).find(d=>e.includes(d.id));return(r===void 0?void 0:Le(t,r.id,o,n,e))??gt(o,n,i)},vt=t=>t?.kind==="marquee"&&t.moved?_o(t.start,t.current):void 0,$t=(t,e)=>{const o=vt(e);if(e.kind!=="marquee"||o===void 0)return[];const n=Oo(t,o).map(i=>i.id);return[...new Set([...e.base,...n])]},sn=(t,e,o)=>({kind:"connect",pointerId:e,fromId:t,start:o,current:o,moved:!1}),Oe=(t,e,o,n,i,r=!1)=>{if(e.pointerId!==o)return e;switch(e.kind){case"pan":return e;case"marquee":case"move":{const s=e.moved||Math.hypot(n.x-e.start.x,n.y-e.start.y)*i>be;return{...e,current:n,moved:s}}case"resize":{const s=e.moved||Math.hypot(n.x-e.start.x,n.y-e.start.y)*i>be;return{...e,current:n,moved:s,keepRatio:r}}case"connect":{const s=e.moved||Math.hypot(n.x-e.start.x,n.y-e.start.y)*i>be,d=Me(t,n,e.fromId),{targetId:a,...c}=e;return d===void 0?{...c,current:n,moved:s}:{...c,current:n,moved:s,targetId:d.id}}}},q=t=>Math.round(t),Et=(t,e)=>{if(e===void 0||!e.moved)return t;if(e.kind==="move"){const o=e.current.x-e.start.x,n=e.current.y-e.start.y,i=new Map(e.origins.map(r=>[r.id,r]));return{...t,items:t.items.map(r=>{const s=i.get(r.id);return s===void 0?r:{...r,x:q(s.x+o),y:q(s.y+n)}})}}if(e.kind==="resize"){const o=Tt(e);return{...t,items:t.items.map(n=>n.id===e.itemId?{...n,...o}:n)}}return t},Tt=t=>{const{origin:e}=t,o=e.w+t.current.x-t.start.x,n=e.h+t.current.y-t.start.y;if(!t.keepRatio)return{w:Math.max(X,q(o)),h:Math.max(X,q(n))};const i=Math.max(o/e.w,n/e.h,X/Math.min(e.w,e.h));return{w:q(e.w*i),h:q(e.h*i)}},an=(t,e,o,n)=>{const[i]=e;if(i===void 0)return[];const r=Le(t,i,0,{x:0,y:0},e);if(r?.kind!=="move")return[];const s=zt(t,{...r,current:{x:o,y:n},moved:!0});return s.kind==="dispatch"?s.inputs:[]},zt=(t,e)=>{switch(e.kind){case"pan":return e.moved?{kind:"none"}:{kind:"click"};case"marquee":{if(e.moved)return{kind:"select",ids:$t(t,e)};const o=Me(t,e.start);return o===void 0?{kind:"click"}:{kind:"click",itemId:o.id}}case"move":{if(!e.moved)return{kind:"click",itemId:e.itemId};const o=Et(t,e),n=e.origins.flatMap(i=>{const r=p(o,i.id);return r===void 0||r.x===i.x&&r.y===i.y?[]:[k.move(i.id,r.x,r.y)]});return n.length===0?{kind:"none"}:{kind:"dispatch",inputs:n}}case"resize":{if(!e.moved)return{kind:"click",itemId:e.itemId};const o=Tt(e);return o.w===e.origin.w&&o.h===e.origin.h?{kind:"none"}:{kind:"dispatch",inputs:[k.resize(e.itemId,o.w,o.h)]}}case"connect":return e.moved?e.targetId===void 0?{kind:"none"}:{kind:"connect",from:e.fromId,to:e.targetId}:{kind:"click",itemId:e.fromId}}},j=.1,St=2.5,dn={x:0,y:0,zoom:1},cn=96,Ce=(t,e)=>({x:(e.x-t.x)/t.zoom,y:(e.y-t.y)/t.zoom}),Ie=(t,e)=>({x:e.x*t.zoom+t.x,y:e.y*t.zoom+t.y}),fe=(t,e,o)=>({...t,x:t.x+e,y:t.y+o}),Re=(t,e,o)=>{const n=ke(t.zoom*o,j,St),i=Ce(t,e);return{zoom:n,x:e.x-i.x*n,y:e.y-i.y*n}},Mt=(t,e,o=48,n=1)=>{const i=Math.max(1,e.width-o*2),r=Math.max(1,e.height-o*2),s=ke(Math.min(i/Math.max(1,t.w),r/Math.max(1,t.h)),j,n);return{zoom:s,x:e.width/2-(t.x+t.w/2)*s,y:e.height/2-(t.y+t.h/2)*s}},ln=(t,e,o=48)=>{const n=W(t);if(n===null)return null;const i=Math.max(1,e.width-o*2)/j,r=Math.max(1,e.height-o*2)/j;if(n.w<=i&&n.h<=r)return n;const s=qe(t.map(c=>c.x+c.w/2)),d=qe(t.map(c=>c.y+c.h/2)),a=t.filter(c=>c.x<s+i/2&&c.x+c.w>s-i/2&&c.y<d+r/2&&c.y+c.h>d-r/2);return W(a)??n},_t=(t,e,o)=>{if(e===null||o.width<=0||o.height<=0)return t;const n=(i,r,s,d)=>{const a=Math.min(cn,d/2),c=a-(r+s)*t.zoom,l=d-a-r*t.zoom;return ke(i,Math.min(c,l),Math.max(c,l))};return{zoom:t.zoom,x:n(t.x,e.x,e.w,o.width),y:n(t.y,e.y,e.h,o.height)}},Lt=(t,e,o,n=24)=>{const i=e.x*t.zoom+t.x,r=e.y*t.zoom+t.y,s=i+e.w*t.zoom,d=r+e.h*t.zoom;return i>=n&&r>=n&&s<=o.width-n&&d<=o.height-n?t:{zoom:t.zoom,x:o.width/2-(e.x+e.w/2)*t.zoom,y:o.height/2-(e.y+e.h/2)*t.zoom}},Ot=(t,e,o,n,i=0)=>{const r=t+e-(o-n),s=r>0?-r:0;return t+s<i+n?i+n-t:s},hn=(t,e)=>t.x===e.x&&t.y===e.y&&t.zoom===e.zoom,v={kind:"idle"},J=(t,e)=>t.kind==="editing"&&t.itemId===e,pn={front:_(uo),forward:_(jt),backward:_(Yt),back:_(mo)},Ct=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]],un={straight:_([...Ct,["path",{d:"M6.5 17.5 17.5 6.5"}]]),elbow:_([...Ct,["path",{d:"M7 19h5V5h5"}]]),curve:_(wo)},bn=t=>pn[t](),fn=t=>un[t](),mn=_(bo),wn=_(fo),xn={yellow:{paper:"#fff0a3",ink:"#4a3a06",stroke:"#d9a900"},orange:{paper:"#ffd1a0",ink:"#4a2503",stroke:"#ec7f1d"},pink:{paper:"#ffc9dd",ink:"#4b1029",stroke:"#de4479"},purple:{paper:"#ddcbf8",ink:"#32195c",stroke:"#8a5bd6"},blue:{paper:"#c0ddf7",ink:"#0e2c4b",stroke:"#3a80d4"},green:{paper:"#cdeba5",ink:"#22380a",stroke:"#55a42c"},gray:{paper:"#e3e6eb",ink:"#2a2f38",stroke:"#868d99"}},Ne=t=>{const{paper:e,ink:o,stroke:n}=xn[t];return`--wb-paper:${e};--wb-ink:${o};--wb-stroke:${n}`},It={sticky:"addSticky",text:"addText",rect:"addRect",ellipse:"addEllipse",frame:"addFrame"},Rt={small:.8,medium:1,large:1.4,xlarge:2},yn=t=>{const e=24*t.zoom;return`background-size:${e}px ${e}px;background-position:${t.x}px ${t.y}px`},kn=t=>{const{m:e,state:o,viewport:n,gesture:i,handlers:r}=t,s=["wb-canvas"];i?.moved===!0&&s.push("wb-canvas--gesturing"),i?.kind==="pan"&&i.moved&&s.push("wb-canvas--panning"),i?.kind==="connect"&&s.push("wb-canvas--connecting"),(t.panReady||i?.kind==="pan")&&s.push("wb-canvas--pan-ready");const d=ze(o);return h`<div
    class=${s.join(" ")}
    data-testid="wb-canvas"
    tabindex="0"
    role="application"
    aria-label=${e.canvasLabel}
    style=${yn(n)}
    @pointerdown=${r.canvasPointerDown}
    @pointermove=${r.canvasPointerMove}
    @pointerup=${r.canvasPointerUp}
    @pointercancel=${r.canvasPointerCancel}
    @wheel=${r.canvasWheel}
    @dblclick=${r.canvasDblClick}
    @keydown=${r.canvasKeyDown}
    @keyup=${r.canvasKeyUp}
    @blur=${r.canvasBlur}
  >
    <div
      class="wb-world"
      style=${`transform:translate(${n.x}px, ${n.y}px) scale(${n.zoom});--wb-zoom:${n.zoom}`}
    >
      ${Jt(d,a=>a.id,a=>$n(t,a))}
      ${zn(t)} ${Sn(t)}
    </div>
    ${o.items.length===0?h`<p class="wb-hint wb-hint--empty">${e.emptyHint}</p>`:b}
    ${gn(t)} ${i?.moved===!0?b:t.overlay} ${Mn(e,r)}
    ${_n(e,n,r)}
  </div>`},gn=({marquee:t,viewport:e})=>{if(t===void 0)return b;const o=Ie(e,t),n=`width:${t.w*e.zoom}px;height:${t.h*e.zoom}px`;return h`<div
    class="wb-marquee"
    aria-hidden="true"
    style=${`left:${o.x}px;top:${o.y}px;${n}`}
  ></div>`},vn=(t,e)=>{const o=["wb-item",`wb-item--${e.kind}`];e.kind==="shape"&&o.push(`wb-item--${e.shape}`),t.selectedIds.has(e.id)&&o.push("is-selected"),J(t.mode,e.id)&&o.push("is-editing");const n=t.gesture;return n?.kind==="move"&&n.moved&&n.origins.some(i=>i.id===e.id)&&o.push("is-lifted"),n?.kind==="connect"&&n.targetId===e.id&&o.push("is-target"),o.join(" ")},$n=(t,e)=>{const{m:o,context:n,handlers:i}=t,r=`left:${e.x}px;top:${e.y}px;width:${e.w}px;height:${e.h}px`,s=e.kind==="text"?"":`;${Ne(e.color)}`,d=G(e)?`;--wb-font-scale:${Rt[e.fontSize]}`:"",a=n.commentCount({type:"item",id:e.id}),c=t.selectedIds.size===1&&t.selectedIds.has(e.id)&&t.gesture?.moved!==!0,l=m=>i.itemPointerDown(e.id,m);return h`<div
    class=${vn(t,e)}
    style=${`${r}${s}${d}`}
    data-item-id=${e.id}
    data-dpk-target=${`item:${e.id}`}
    data-kind=${e.kind}
    @pointerdown=${e.kind==="frame"?b:l}
  >
    ${e.kind==="frame"?h`<div class="wb-frame-title" @pointerdown=${l}>${Nt(t,e)}</div>`:h`<div class="wb-item-body">${Nt(t,e)}</div>`}
    ${a>0?h`<span class="wb-flag" title=${o.commentCount(a)}>${a}</span>`:b}
    ${c?h`<span
              class="wb-handle wb-handle--resize"
              role="presentation"
              title=${o.resizeHandle}
              @pointerdown=${m=>i.resizePointerDown(e.id,m)}
            ></span>
            <span
              class="wb-handle wb-handle--connect"
              role="presentation"
              title=${o.connectHandle}
              @pointerdown=${m=>i.connectPointerDown(e.id,m)}
            ></span>`:b}
  </div>`},En=t=>t.stopPropagation(),Nt=(t,e)=>{const{m:o,handlers:n}=t,i=L(e);if(!J(t.mode,e.id))return h`<span class="wb-text">${i}</span>`;const r=a=>{const c=a.currentTarget;(c instanceof HTMLInputElement||c instanceof HTMLTextAreaElement)&&n.editBlur(e.id,c.value)},s=a=>n.editKeyDown(e.id,a),d=a=>{const c=a.currentTarget;c instanceof HTMLInputElement&&c.previousElementSibling?.setAttribute("data-copy",c.value||o.textPlaceholder)};return e.kind==="frame"?h`<span class="wb-title-edit"
        ><span class="wb-text" aria-hidden="true" data-copy=${i||o.textPlaceholder}></span
        ><input
          class="wb-editor"
          type="text"
          .value=${i}
          placeholder=${o.textPlaceholder}
          aria-label=${o.renameFrame}
          @input=${d}
          @blur=${r}
          @keydown=${s}
      /></span>`:h`<textarea
        class="wb-editor"
        .value=${i}
        placeholder=${o.textPlaceholder}
        aria-label=${o.editText}
        spellcheck="false"
        @blur=${r}
        @keydown=${s}
        @wheel=${En}
      ></textarea>`},Tn=()=>ye`<marker id="wb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
    <path d="M0,0 L10,5 L0,10 z"></path>
  </marker>`,Dt=(t,e)=>{const o=p(t,e.from),n=p(t,e.to);return o===void 0||n===void 0?void 0:[o,n]},At=(t,e)=>e.label!==void 0||t.context.commentCount({type:"connector",id:e.id})>0,Ft=(t,e,o)=>At(t,e)===o?`connector:${e.id}`:b,zn=t=>{const{state:e,handlers:o,gesture:n}=t,i=e.connectors.map(s=>{const d=Dt(e,s);if(d===void 0)return b;const{d:a}=le(...d,s.route),c=t.selectedIds.has(s.id)?" is-selected":"";return ye`<g data-connector-id=${s.id} data-dpk-target=${Ft(t,s,!1)}>
      <path class="wb-link-hit" d=${a} @pointerdown=${l=>o.connectorPointerDown(s.id,l)}></path>
      <path class=${`wb-link${c}`} d=${a} marker-end=${s.style==="arrow"?"url(#wb-arrow)":b}></path>
    </g>`});let r=b;if(n?.kind==="connect"&&n.moved){const s=p(e,n.fromId),d=n.targetId===void 0?void 0:p(e,n.targetId);if(s!==void 0){const a=d===void 0?n.current:Y(d,K(s)),c=Y(s,a);r=ye`<path class="wb-link wb-link--draft" d=${`M ${c.x} ${c.y} L ${a.x} ${a.y}`} marker-end="url(#wb-arrow)"></path>`}}return h`<svg class="wb-links" width="1" height="1" aria-hidden="true">
    <defs>${Tn()}</defs>
    ${i} ${r}
  </svg>`},Sn=t=>{const{state:e,context:o,handlers:n}=t;return e.connectors.flatMap(i=>{const r=Dt(e,i);if(r===void 0||!At(t,i))return[];const s=o.commentCount({type:"connector",id:i.id}),{mid:d}=le(...r,i.route),a=t.selectedIds.has(i.id)?" is-selected":"";return[h`<div
        class=${`wb-link-label${a}`}
        data-connector-label=${i.id}
        data-dpk-target=${Ft(t,i,!0)}
        style=${`left:${d.x}px;top:${d.y}px`}
        @pointerdown=${c=>n.connectorPointerDown(i.id,c)}
      >
        ${i.label??b}
        ${s>0?h`<span class="wb-flag wb-flag--inline">${s}</span>`:b}
      </div>`]})},me=t=>t.stopPropagation(),Mn=(t,e)=>h`<div class="wb-tools" role="toolbar" aria-label=${t.toolsLabel} @pointerdown=${me} @dblclick=${me}>
    ${Yo.map(o=>h`<button
          type="button"
          class="wb-tool"
          data-add=${o}
          title=${t[It[o]]}
          aria-label=${t[It[o]]}
          @click=${()=>e.addItem(o)}
        >
          <span class=${`wb-tool-icon wb-tool-icon--${o}`} aria-hidden="true"></span>
        </button>`)}
  </div>`,_n=(t,e,o)=>h`<div class="wb-zoom" @pointerdown=${me} @dblclick=${me}>
    <button type="button" aria-label=${t.zoomOut} @click=${()=>o.zoomStep(-1)}>${Qt()}</button>
    <button type="button" class="wb-zoom-pct" title=${t.zoomReset} @click=${()=>o.zoomReset()}>
      ${Math.round(e.zoom*100)}%
    </button>
    <button type="button" aria-label=${t.zoomIn} @click=${()=>o.zoomStep(1)}>${eo()}</button>
    <button type="button" aria-label=${t.zoomFit} title=${t.zoomFit} @click=${()=>o.zoomFit()}>
      ${wn()}
    </button>
  </div>`,Ln=t=>{const{m:e,state:o,focused:n}=t,i=o.items.filter(r=>r.kind==="frame");return h`<nav class="wb-frames" aria-label=${e.framesHeading}>
    <p class="dpk-label">${e.framesHeading}</p>
    <p class="wb-frames-hint">${e.framesHint}</p>
    <ul>
      <li>
        <button
          type="button"
          class="wb-frame-link"
          aria-current=${String(n===void 0)}
          @click=${t.showBoard}
        >
          <span class="wb-frame-dot wb-frame-dot--board" aria-hidden="true"></span>
          <span class="wb-frame-name">${e.wholeBoard}</span>
          <span class="wb-frame-count">${e.memberCount(o.items.length)}</span>
        </button>
      </li>
      ${i.map(r=>h`<li>
            <button
              type="button"
              class="wb-frame-link"
              data-frame=${r.id}
              aria-current=${String(n===r.id)}
              @click=${()=>t.focusFrame(r.id)}
            >
              <span class="wb-frame-dot" style=${Ne(r.color)} aria-hidden="true"></span>
              <span class="wb-frame-name">${r.title}</span>
              <span class="wb-frame-count">${e.memberCount(Ee(o,r).length)}</span>
            </button>
          </li>`)}
    </ul>
  </nav>`},De={item:14,frame:40,connector:18},On=t=>{const{selection:e,viewport:o,state:n}=t;if(e.kind==="items"){const d=W(e.items);if(d===null)return;const a=e.items.some(l=>l.kind==="frame"&&l.y===d.y),c=Ie(o,{x:d.x+d.w/2,y:d.y});return{x:c.x,y:c.y-(a?De.frame:De.item)}}const i=p(n,e.connector.from),r=p(n,e.connector.to);if(i===void 0||r===void 0)return;const s=Ie(o,le(i,r,e.connector.route).mid);return{x:s.x,y:s.y-De.connector}},Ae=t=>t.stopPropagation(),we=h`<span class="wb-toolbar-sep" aria-hidden="true"></span>`,Pt=t=>t.length>0&&t.every(e=>e===t[0])?t[0]:void 0,Cn=t=>{const e=On(t);if(e===void 0)return b;const{m:o,selection:n,handlers:i}=t,r=n.kind==="connector"?n.connector:n.items.length===1?n.items[0]:void 0,s=r===void 0?void 0:n.kind==="connector"?`connector:${r.id}`:`item:${r.id}`,d=n.kind==="items"&&n.items.length>1?o.selectionCount(n.items.length):o.selectionLabel;return h`<div
    class="wb-toolbar"
    role="toolbar"
    aria-label=${d}
    style=${`left:${e.x}px;top:${e.y}px`}
    @pointerdown=${Ae}
    @dblclick=${Ae}
    @keydown=${Ae}
  >
    ${n.kind==="items"?Rn(t,n.items):Dn(t,n.connector)}
    ${s===void 0?b:h`<button
            type="button"
            class="dpk-icon-btn wb-toolbar-btn"
            data-role="comment"
            aria-label=${o.comment}
            title=${o.comment}
            data-active=${String(t.commenting)}
            @click=${()=>i.toggleComment(s)}
          >
            ${to()}
            ${t.comments>0?h`<span class="wb-toolbar-count">${t.comments}</span>`:b}
          </button>`}
    <button
      type="button"
      class="dpk-icon-btn wb-toolbar-btn"
      data-role="delete"
      aria-label=${o.delete}
      title=${o.delete}
      @click=${()=>i.deleteSelection()}
    >
      ${oo()}
    </button>
  </div>`},In={front:"\u2318/Ctrl ]",forward:"]",backward:"[",back:"\u2318/Ctrl ["},Rn=(t,e)=>{const{m:o,handlers:n}=t,i=e.filter($e).map(a=>a.color),r=e.flatMap(a=>G(a)?[a.fontSize]:[]),s=Pt(i),d=Pt(r);return h`
    ${i.length>0?h`<div class="wb-swatches" role="radiogroup" aria-label=${o.colorLabelPrefix}>
              ${ie.map(a=>h`<button
                    type="button"
                    class="wb-swatch"
                    role="radio"
                    data-color=${a}
                    style=${Ne(a)}
                    aria-checked=${String(s===a)}
                    aria-label=${`${o.colorLabelPrefix}: ${o.colorLabel(a)}`}
                    title=${o.colorLabel(a)}
                    @click=${()=>n.setColor(a)}
                  ></button>`)}
            </div>
            ${we}`:b}
    ${r.length>0?h`<div class="wb-choice" role="radiogroup" aria-label=${o.fontSizeLabelPrefix}>
              ${re.map(a=>h`<button
                    type="button"
                    class="wb-choice-btn"
                    role="radio"
                    data-font-size=${a}
                    aria-checked=${String(d===a)}
                    aria-label=${`${o.fontSizeLabelPrefix}: ${o.fontSizeLabel(a)}`}
                    title=${`${o.fontSizeLabelPrefix}: ${o.fontSizeLabel(a)}`}
                    @click=${()=>n.setFontSize(a)}
                  >
                    ${o.fontSizeShort(a)}
                  </button>`)}
            </div>
            ${we}`:b}
    ${t.arrange.size>0?h`${Nn(t)} ${we}`:b}
  `},Nn=t=>{const{m:e,handlers:o}=t,n={front:e.bringToFront,forward:e.bringForward,backward:e.sendBackward,back:e.sendToBack};return h`<div class="wb-menu-anchor" @keydown=${r=>{r.key==="Escape"&&o.toggleArrangeMenu()}}>
    <button
      type="button"
      class="wb-menu-btn"
      data-role="arrange"
      aria-haspopup="menu"
      aria-expanded=${String(t.arrangeMenuOpen)}
      aria-label=${e.arrangeLabel}
      title=${e.arrangeLabel}
      @click=${()=>o.toggleArrangeMenu()}
    >
      ${mn()} ${io()}
    </button>
    ${t.arrangeMenuOpen?h`<div class="wb-menu" role="menu" aria-label=${e.arrangeLabel}>
            ${mt.map(r=>h`<button
                  type="button"
                  class="wb-menu-item"
                  role="menuitem"
                  data-arrange=${r}
                  ?disabled=${!t.arrange.has(r)}
                  @click=${()=>o.arrange(r)}
                >
                  ${bn(r)}
                  <span class="wb-menu-label">${n[r]}</span>
                  <kbd class="wb-menu-key">${In[r]}</kbd>
                </button>`)}
          </div>`:b}
  </div>`},Dn=(t,e)=>{const{m:o,handlers:n}=t;return h`<div class="wb-choice" role="radiogroup" aria-label=${o.routeLabelPrefix}>
      ${Z.map(i=>h`<button
            type="button"
            class="wb-choice-btn wb-choice-btn--icon"
            role="radio"
            data-route=${i}
            aria-checked=${String(e.route===i)}
            aria-label=${`${o.routeLabelPrefix}: ${o.routeLabel(i)}`}
            title=${o.routeLabel(i)}
            @click=${()=>n.setRoute(e.id,i)}
          >
            ${fn(i)}
          </button>`)}
    </div>
    ${we}
    <dpk-component-inline-edit
      class="wb-toolbar-label"
      .value=${e.label??""}
      .placeholder=${o.labelPlaceholder}
      .label=${o.labelField}
      @dpk-commit=${no(i=>n.setLabel(e.id,i))}
    ></dpk-component-inline-edit>`},An=ro`
  /* The board owns the whole main area; the canvas clips, never the shell. */
  .dpk-main {
    overflow: hidden;
  }

  .dpk-main-body {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0;
  }

  /* ---------------------------------------------------------------- canvas */

  .wb-canvas {
    position: relative;
    /* The board's own floating controls stack inside it, under the page's overlays (the review rail). */
    isolation: isolate;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    touch-action: none;
    background: var(--dpk-dots), var(--dpk-paper-sunken);
    cursor: default;
    outline: none;
  }

  .wb-canvas:focus-visible {
    box-shadow: inset var(--dpk-focus);
  }

  /* Space held (or a pan under way): the whole board, items included, is a handle. */
  .wb-canvas--pan-ready,
  .wb-canvas--pan-ready .wb-item,
  .wb-canvas--pan-ready .wb-frame-title {
    cursor: grab;
  }

  .wb-canvas--panning,
  .wb-canvas--panning .wb-item {
    cursor: grabbing;
  }

  .wb-canvas--gesturing,
  .wb-canvas--gesturing * {
    user-select: none;
  }

  .wb-canvas--connecting .wb-item {
    cursor: crosshair;
  }

  /* Items are things to pick up, not text to select: a press on the board
     never starts a text selection. Only the in-place editor takes one. */
  .wb-world {
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    transform-origin: 0 0;
    will-change: transform;
  }

  /* ----------------------------------------------------------------- items */

  .wb-item {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    cursor: grab;
  }

  .wb-item-body {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    display: flex;
    overflow: hidden;
  }

  .wb-text {
    flex: 1 1 auto;
    min-width: 0;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  /* The in-place editor is a bare field over the item's whole body, typeset
     exactly like the text it replaces, so starting an edit moves nothing. */
  .wb-editor {
    flex: 1 1 auto;
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    align-self: stretch;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-align: inherit;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    resize: none;
    overflow: auto;
    scrollbar-width: none;
    -webkit-user-select: text;
    user-select: text;
  }

  .wb-editor::placeholder {
    color: currentColor;
    opacity: 0.45;
  }

  /* A shape centers its text, so the field grows with the text and stays centered. */
  .wb-item--shape .wb-editor {
    align-self: center;
    max-height: 100%;
    field-sizing: content;
  }

  .wb-title-edit {
    position: relative;
    display: block;
  }

  .wb-title-edit > .wb-text {
    display: block;
    visibility: hidden;
    white-space: pre;
  }

  .wb-title-edit > .wb-text::before {
    content: attr(data-copy);
  }

  /* A hair wider than the copy, so the caret at the end never scrolls the text. */
  .wb-title-edit > .wb-editor {
    position: absolute;
    inset: 0 -2px 0 0;
    width: auto;
    white-space: nowrap;
    overflow: hidden;
  }

  .wb-item.is-editing {
    cursor: text;
  }

  .wb-item.is-lifted {
    cursor: grabbing;
    opacity: 0.88;
  }

  .wb-item.is-selected::before,
  .wb-item.is-target::before {
    content: '';
    position: absolute;
    inset: calc(-4px / var(--wb-zoom, 1));
    border: calc(2px / var(--wb-zoom, 1)) solid var(--dpk-blue);
    border-radius: 6px;
    pointer-events: none;
  }

  .wb-item.is-target::before {
    border-style: dashed;
    background: color-mix(in srgb, var(--dpk-blue) 8%, transparent);
  }

  /* Sticky: colored paper with a soft lift. It keeps its color in both themes. */
  .wb-item--sticky {
    padding: 16px 14px;
    border-radius: 3px;
    background: linear-gradient(170deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 45%), var(--wb-paper);
    color: var(--wb-ink);
    font-size: calc(15px * var(--wb-font-scale, 1));
    font-weight: 560;
    line-height: 1.35;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.35),
      0 1px 2px rgba(30, 24, 10, 0.14),
      0 8px 14px -8px rgba(30, 24, 10, 0.32);
  }

  .wb-item--sticky .wb-item-body {
    align-items: flex-start;
  }

  /* Text: no box at all, just type on the board. */
  .wb-item--text {
    padding: 4px 6px;
    color: var(--dpk-ink);
    font-size: calc(20px * var(--wb-font-scale, 1));
    font-weight: 650;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  /* Shape: the color's stroke around a tint of it, text centered. */
  .wb-item--shape {
    padding: 10px 14px;
    border: 2px solid var(--wb-stroke);
    border-radius: 8px;
    background: color-mix(in srgb, var(--wb-stroke) 16%, var(--dpk-paper-raised));
    color: var(--dpk-ink);
    font-size: calc(14px * var(--wb-font-scale, 1));
    font-weight: 600;
    line-height: 1.35;
    text-align: center;
  }

  .wb-item--ellipse {
    border-radius: 50%;
    padding: 14px 22px;
  }

  .wb-item--shape .wb-item-body {
    align-items: center;
    justify-content: center;
  }

  /* Frame: a titled area drawn behind everything; its title is a handle.
     A click on its empty inside selects it; a drag there draws a selection
     area, or moves the frame once it is selected. */
  .wb-item--frame {
    border: 1.5px solid color-mix(in srgb, var(--wb-stroke) 55%, transparent);
    border-radius: 10px;
    background: color-mix(in srgb, var(--wb-stroke) 7%, transparent);
    cursor: default;
  }

  /* Selected, the whole frame is a handle. */
  .wb-item--frame.is-selected {
    cursor: grab;
  }

  .wb-frame-title {
    position: absolute;
    left: -1px;
    bottom: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 3px 10px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--wb-stroke) 20%, var(--dpk-paper-raised));
    color: var(--dpk-ink);
    font-size: 13px;
    font-weight: 700;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: grab;
  }

  .wb-item--frame.is-editing .wb-frame-title {
    overflow: visible;
    cursor: text;
  }

  /* Comments already left: a corner flag, readable at a glance. */
  .wb-flag {
    position: absolute;
    top: -8px;
    right: -8px;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    box-sizing: border-box;
    border-radius: 999px;
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 10px;
    font-weight: 650;
    line-height: 18px;
    text-align: center;
    pointer-events: none;
  }

  .wb-flag--inline {
    position: static;
    margin-left: 6px;
  }

  /* Selection handles keep their screen size at any zoom. */
  .wb-handle {
    position: absolute;
    z-index: 2;
    box-sizing: border-box;
    width: calc(12px / var(--wb-zoom, 1));
    height: calc(12px / var(--wb-zoom, 1));
    border: calc(2px / var(--wb-zoom, 1)) solid var(--dpk-blue);
    background: var(--dpk-paper-raised);
  }

  .wb-handle--resize {
    right: calc(-7px / var(--wb-zoom, 1));
    bottom: calc(-7px / var(--wb-zoom, 1));
    border-radius: 3px;
    cursor: nwse-resize;
  }

  .wb-handle--connect {
    top: 50%;
    right: calc(-22px / var(--wb-zoom, 1));
    width: calc(14px / var(--wb-zoom, 1));
    height: calc(14px / var(--wb-zoom, 1));
    border-radius: 50%;
    transform: translateY(-50%);
    background: var(--dpk-blue);
    cursor: crosshair;
  }

  /* A selection area being dragged out, in screen space over the board. */
  .wb-marquee {
    position: absolute;
    z-index: 35;
    box-sizing: border-box;
    border: 1px solid var(--dpk-blue);
    border-radius: 2px;
    background: color-mix(in srgb, var(--dpk-blue) 10%, transparent);
    pointer-events: none;
  }

  /* ------------------------------------------------------------ connectors */

  .wb-links {
    position: absolute;
    left: 0;
    top: 0;
    overflow: visible;
    pointer-events: none;
  }

  .wb-links marker path {
    fill: var(--dpk-ink-soft);
  }

  .wb-link {
    fill: none;
    stroke: var(--dpk-ink-soft);
    stroke-width: 2;
    stroke-linecap: round;
  }

  .wb-link.is-selected {
    stroke: var(--dpk-blue);
    stroke-width: 3;
  }

  .wb-link--draft {
    stroke: var(--dpk-blue);
    stroke-dasharray: 6 5;
  }

  .wb-link-hit {
    fill: none;
    stroke: transparent;
    stroke-width: 14;
    pointer-events: stroke;
    cursor: pointer;
  }

  .wb-link-label {
    position: absolute;
    transform: translate(-50%, -50%);
    max-width: 180px;
    padding: 2px 8px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-paper-raised);
    color: var(--dpk-ink-soft);
    font-size: 12px;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .wb-link-label.is-selected {
    border-color: var(--dpk-blue);
    color: var(--dpk-blue);
  }

  /* ----------------------------------------------------------------- chrome */

  .wb-hint {
    position: absolute;
    left: 50%;
    top: 16px;
    z-index: 30;
    transform: translateX(-50%);
    margin: 0;
    padding: 6px 14px;
    border: 1px solid var(--dpk-rule);
    border-radius: 999px;
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    color: var(--dpk-ink-soft);
    font-size: 12.5px;
    pointer-events: none;
  }

  .wb-hint--empty {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .wb-tools,
  .wb-zoom,
  .wb-toolbar {
    position: absolute;
    z-index: 40;
    display: flex;
    align-items: center;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-glass);
    backdrop-filter: blur(12px);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow-sm);
  }

  .wb-tools {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    gap: 2px;
    padding: 4px;
  }

  .wb-tool {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: none;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    cursor: pointer;
  }

  .wb-tool:hover,
  .wb-tool:focus-visible {
    background: var(--dpk-blue-soft);
  }

  .wb-tool-icon {
    display: block;
    box-sizing: border-box;
  }

  .wb-tool-icon--sticky {
    width: 18px;
    height: 18px;
    border-radius: 2px;
    background: #ffe27a;
    box-shadow: 0 1px 2px rgba(30, 24, 10, 0.3);
  }

  .wb-tool-icon--text::before {
    content: 'T';
    color: var(--dpk-ink);
    font-family: var(--dpk-display);
    font-size: 18px;
    font-weight: 700;
  }

  .wb-tool-icon--rect,
  .wb-tool-icon--ellipse {
    width: 20px;
    height: 14px;
    border: 2px solid var(--dpk-ink-soft);
    border-radius: 3px;
  }

  .wb-tool-icon--ellipse {
    border-radius: 50%;
  }

  .wb-tool-icon--frame {
    width: 20px;
    height: 16px;
    border: 1.5px dashed var(--dpk-ink-soft);
    border-radius: 3px;
  }

  .wb-zoom {
    right: 12px;
    /* Above the page's hand-off dock while it floats over this corner. */
    bottom: calc(12px + var(--dpk-dock-clearance, 0px));
    overflow: hidden;
  }

  .wb-zoom button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: 6px 10px;
    font-size: 12px;
    line-height: 1;
    color: var(--dpk-ink-soft);
    cursor: pointer;
  }

  .wb-zoom button svg {
    width: 13px;
    height: 13px;
  }

  .wb-zoom button:hover {
    background: var(--dpk-blue-soft);
    color: var(--dpk-blue);
  }

  .wb-zoom-pct {
    min-width: 48px;
    font-family: var(--dpk-mono);
  }

  /* The floating toolbar over the selection. */
  /* One row, unless the canvas is narrower than that: then it wraps rather
     than leave its last controls off screen. */
  .wb-toolbar {
    transform: translate(-50%, -100%);
    translate: var(--wb-nudge-x, 0) var(--wb-nudge-y, 0);
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
    width: max-content;
    max-width: calc(100% - 16px - var(--wb-toolbar-floor, 0px));
    padding: 4px;
    white-space: nowrap;
  }

  .wb-toolbar-btn {
    position: relative;
  }

  .wb-toolbar-count {
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 14px;
    height: 14px;
    border-radius: 999px;
    background: var(--dpk-accent);
    color: var(--dpk-accent-ink);
    font-family: var(--dpk-mono);
    font-size: 9px;
    line-height: 14px;
    text-align: center;
  }

  .wb-toolbar-sep {
    width: 1px;
    height: 18px;
    margin: 0 4px;
    background: var(--dpk-rule);
  }

  .wb-toolbar-label {
    min-width: 120px;
    padding: 0 6px;
    font-size: 12.5px;
  }

  /* A segmented choice (text size, line shape): a sunken track, the current
     option raised out of it. */
  .wb-choice {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px;
    border-radius: var(--dpk-radius-sm);
    background: var(--dpk-paper-inset);
  }

  .wb-choice-btn {
    display: grid;
    place-items: center;
    min-width: 28px;
    height: 24px;
    padding: 0 6px;
    border: none;
    border-radius: var(--dpk-radius-xs);
    background: transparent;
    color: var(--dpk-ink-soft);
    font-family: inherit;
    font-size: 11.5px;
    font-weight: 650;
    letter-spacing: 0.02em;
    line-height: 1;
    cursor: pointer;
    transition:
      background 140ms var(--dpk-ease),
      color 140ms var(--dpk-ease),
      box-shadow 140ms var(--dpk-ease);
  }

  .wb-choice-btn--icon {
    padding: 0;
  }

  .wb-choice-btn svg {
    display: block;
    width: 16px;
    height: 16px;
  }

  .wb-choice-btn:hover {
    color: var(--dpk-ink);
  }

  .wb-choice-btn:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  .wb-choice-btn[aria-checked='true'] {
    background: var(--dpk-paper-raised);
    color: var(--dpk-blue-strong);
    box-shadow:
      0 0 0 0.5px var(--dpk-rule),
      0 1px 2px rgba(15, 23, 42, 0.12);
  }

  /* Stacking order: a button that drops a menu of named moves. */
  .wb-menu-anchor {
    position: relative;
    display: flex;
  }

  .wb-menu-btn {
    display: inline-flex;
    align-items: center;
    gap: 1px;
    height: 26px;
    padding: 0 4px 0 6px;
    border: none;
    border-radius: var(--dpk-radius-xs);
    background: transparent;
    color: var(--dpk-ink-soft);
    cursor: pointer;
  }

  .wb-menu-btn svg {
    display: block;
    width: 15px;
    height: 15px;
  }

  .wb-menu-btn svg:last-child {
    width: 11px;
    height: 11px;
    opacity: 0.7;
  }

  .wb-menu-btn:hover,
  .wb-menu-btn[aria-expanded='true'] {
    background: var(--dpk-paper-inset);
    color: var(--dpk-ink);
  }

  .wb-menu-btn:focus-visible {
    outline: none;
    box-shadow: var(--dpk-focus);
  }

  /* Opens toward the toolbar's middle: its button sits near the right end. */
  .wb-menu {
    position: absolute;
    right: 0;
    top: calc(100% + 8px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    padding: 4px;
    border: 1px solid var(--dpk-rule);
    border-radius: var(--dpk-radius);
    background: var(--dpk-paper-raised);
    box-shadow: var(--dpk-bevel), var(--dpk-shadow);
  }

  .wb-menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 8px;
    border: none;
    border-radius: var(--dpk-radius-xs);
    background: transparent;
    color: var(--dpk-ink);
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;
  }

  .wb-menu-item svg {
    flex: none;
    width: 15px;
    height: 15px;
    color: var(--dpk-ink-soft);
  }

  .wb-menu-item:hover:not([disabled]),
  .wb-menu-item:focus-visible {
    outline: none;
    background: var(--dpk-blue-soft);
  }

  .wb-menu-item[disabled] {
    color: var(--dpk-ink-faint);
    cursor: default;
  }

  .wb-menu-item[disabled] svg {
    opacity: 0.5;
  }

  .wb-menu-label {
    flex: 1 1 auto;
  }

  .wb-menu-key {
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
  }

  .wb-swatches {
    display: flex;
    gap: 3px;
    padding: 0 2px;
  }

  .wb-swatch {
    width: 18px;
    height: 18px;
    padding: 0;
    border: 2px solid color-mix(in srgb, var(--wb-stroke) 70%, transparent);
    border-radius: 50%;
    background: var(--wb-paper);
    cursor: pointer;
  }

  .wb-swatch[aria-checked='true'] {
    outline: 2px solid var(--dpk-blue);
    outline-offset: 1px;
  }

  /* --------------------------------------------------------------- sidebar */

  .wb-frames {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 14px 12px;
  }

  .wb-frames p {
    margin: 0;
  }

  .wb-frames-hint {
    color: var(--dpk-ink-faint);
    font-size: 11.5px;
  }

  .wb-frames ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 6px 0 0;
    padding: 0;
    list-style: none;
  }

  .wb-frame-link {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 8px;
    border: none;
    border-radius: var(--dpk-radius-sm);
    background: transparent;
    color: var(--dpk-ink);
    font: inherit;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
  }

  .wb-frame-link:hover {
    background: var(--dpk-blue-soft);
  }

  .wb-frame-link[aria-current='true'] {
    background: color-mix(in srgb, var(--dpk-blue-soft) 80%, transparent);
    color: var(--dpk-blue-strong);
    font-weight: 650;
  }

  .wb-frame-dot {
    flex: none;
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: var(--wb-stroke);
  }

  .wb-frame-dot--board {
    border: 1.5px dashed var(--dpk-ink-faint);
    background: transparent;
  }

  .wb-frame-name {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .wb-frame-count {
    flex: none;
    color: var(--dpk-ink-faint);
    font-family: var(--dpk-mono);
    font-size: 10.5px;
  }
`,Fn={width:300,height:260},Bt=t=>t.stopPropagation(),Pn=10,Ht=8,Wt=72,Bn=t=>t!==void 0;class Kt extends Ke{static{this.styles=[Ke.styles,An,so]}static{this.properties={mode:{state:!0},viewport:{state:!0},gesture:{state:!0},panReady:{state:!0},arrangeMenu:{state:!0}}}#b="";#f=!1;#r;#E=!1;#l;#h;#m;#w;#s={on:"other"};#x=!1;#p=!1;#M;#P=new ao(this);constructor(){super(),this.mode=v,this.viewport=dn,this.gesture=void 0,this.panReady=!1,this.arrangeMenu=!1}definitionFor(e){return ft(e)}renderRegions(e){const o=pe(this.locale),n=e.state.items.some(d=>d.kind==="frame"),i=Et(e.state,this.gesture),r=vt(this.gesture),s=r!==void 0&&this.gesture!==void 0?$t(e.state,this.gesture):ue(e.navigation.item);return{...n?{sidebar:Ln({m:o,state:e.state,focused:e.navigation.frame,focusFrame:d=>this.#A(d),showBoard:()=>this.#S()})}:{sidebarHidden:!0},main:kn({m:o,context:e,state:i,viewport:this.viewport,gesture:this.gesture,mode:this.mode,selectedIds:new Set(s),marquee:r,panReady:this.panReady,overlay:this.#H(e,i,o),handlers:{canvasPointerDown:d=>this.#G(d),canvasPointerMove:d=>this.#j(d),canvasPointerUp:d=>this.#J(d),canvasPointerCancel:()=>this.gesture=void 0,canvasWheel:d=>this.#Q(d),canvasDblClick:d=>this.#ee(d),canvasKeyDown:d=>this.#te(d),canvasKeyUp:d=>{d.key===" "&&(this.panReady=!1),d.key==="Shift"&&this.#I(!1)},canvasBlur:()=>this.panReady=!1,itemPointerDown:(d,a)=>this.#V(d,a),resizePointerDown:(d,a)=>this.#C(a,tn(e.state,d,a.pointerId,this.#n(a))),connectPointerDown:(d,a)=>this.#C(a,sn(d,a.pointerId,this.#n(a))),connectorPointerDown:(d,a)=>this.#Y(d,a),editBlur:(d,a)=>this.#L(d,a),editKeyDown:(d,a)=>this.#Z(d,a),addItem:d=>this.#D(d,this.#X()),zoomStep:d=>this.#v(d===1?1.2:1/1.2),zoomFit:()=>this.#S(),zoomReset:()=>this.#v(1/this.viewport.zoom)}})}}updated(){super.updated();const e=this.#d();e!==null&&(this.#re(e),this.#F(),this.#B(),this.#q(),this.#K())}#B(){const e=this.#d(),o=this.renderRoot.querySelector(".wb-toolbar");if(e===null||o===null)return;const n=w=>Number.parseFloat(o.style.getPropertyValue(`--wb-nudge-${w}`))||0,i=e.getBoundingClientRect(),r=o.getBoundingClientRect(),s=this.renderRoot.querySelector(".wb-tools")?.getBoundingClientRect(),d=r.top-n("y"),c=s!==void 0&&d<s.bottom&&d+r.height>s.top?s.right-i.left:0;o.style.setProperty("--wb-toolbar-floor",`${c}px`);const l=o.getBoundingClientRect(),m=Ot(l.left-n("x")-i.left,l.width,i.width,Ht,c),u=Ot(l.top-n("y")-i.top,l.height,i.height,Ht);o.style.setProperty("--wb-nudge-x",`${m}px`),o.style.setProperty("--wb-nudge-y",`${u}px`)}#t(){return ue(this.context().navigation.item)}#e(e){const o=this.context(),n=rt(e);o.navigation.item!==n&&(this.arrangeMenu=!1,o.navigate({item:n??null}))}#y(e){return this.#t().map(o=>p(e,o)).filter(Bn)}#H(e,o,n){if(this.mode.kind==="editing")return b;const i=this.#t(),r=this.#y(o),s=i.length===1?y(o,i[0]):void 0,d=s!==void 0?{kind:"connector",connector:s}:r.length>0?{kind:"items",items:r}:void 0;if(d===void 0)return b;const[a]=r,c=s!==void 0?C({type:"connector",id:s.id}):r.length===1&&a!==void 0?C({type:"item",id:a.id}):void 0,l=c!==void 0&&this.mode.kind==="commenting"&&this.mode.target===c,m=Cn({m:n,state:o,viewport:this.viewport,selection:d,arrange:Go(o,i),arrangeMenuOpen:this.arrangeMenu,commenting:l,comments:c===void 0?0:e.commentCount(c),handlers:{setColor:u=>this.#oe(u),setFontSize:u=>this.#ne(u),arrange:u=>{this.arrangeMenu=!1,this.#R(u)},toggleArrangeMenu:()=>this.arrangeMenu=!this.arrangeMenu,toggleComment:u=>{this.#b="",this.mode=l?v:{kind:"commenting",target:u}},deleteSelection:()=>this.#N(),setLabel:(u,w)=>e.dispatch(k.setConnectorLabel(u,w)),setRoute:(u,w)=>{y(e.state,u)?.route!==w&&e.dispatch(k.setConnectorRoute(u,w))}}});return h`${m}
      <div class="wb-composer" @pointerdown=${Bt} @dblclick=${Bt}>
        ${l&&c!==void 0?this.#W(e,c):b}
      </div>`}#W(e,o){const n=e.comments.filter(r=>C(r.target)===o).map(co),i=this.definition.commentTargets(e.state,e.navigation).find(r=>r.value===o)?.label;return lo(po(this.locale),ho(this.#b,n,{key:o,...i===void 0?{}:{label:i}}),r=>{if(r.kind==="input"){this.#b=r.body,this.requestUpdate();return}r.kind==="comment"&&!e.dispatch({type:"comment",target:o,payload:{body:r.body}}).ok||(this.#b="",this.mode=v)})}#K(){if(this.mode.kind!=="commenting")return;const e=this.renderRoot.querySelector(".wb-composer .comment-pop"),o=this.renderRoot.querySelector('.wb-toolbar [data-role="comment"]');!e||!o||e.matches(":popover-open")||(this.#P.open(e,o,Fn),e.querySelector("textarea")?.focus())}#_(e){return this.renderRoot.querySelector(`.wb-item[data-item-id="${CSS.escape(e)}"] .wb-editor`)}#T(e,o){if(J(this.mode,e))return;this.#a();const n=this.context();if(p(n.state,e)===void 0)return;const i=o===void 0?null:this.renderRoot.querySelector(`.wb-item[data-item-id="${CSS.escape(e)}"] .wb-text`);this.#w=i===null||o===void 0?void 0:Vo(i,o.clientX,o.clientY);const r=this.#t();(r.length!==1||r[0]!==e)&&this.#e([e]),this.mode={kind:"editing",itemId:e}}#q(){if(this.mode.kind!=="editing"){this.#m=void 0;return}const{itemId:e}=this.mode;if(this.#m===e)return;const o=this.#_(e);if(o===null)return;this.#m=e,o.focus({preventScroll:!0});const n=Math.min(this.#w??o.value.length,o.value.length);o.setSelectionRange(n,n),this.#w=void 0}#L(e,o){if(!J(this.mode,e))return;this.mode=v,this.#m=void 0;const n=this.context(),i=p(n.state,e),r=i===void 0?void 0:en(i,o);i===void 0||r===void 0||this.#u([k.setText(e,r),...this.#O(i)])}#O(e,o){if(!G(e))return[];const n=So(e,this.#U(e.id,o));return n===void 0?[]:[k.resize(e.id,n.w,n.h)]}#U(e,o){const n=this.renderRoot.querySelector(`.wb-item[data-item-id="${CSS.escape(e)}"]`),i=n?.querySelector(".wb-item-body");if(n==null||i===null||i===void 0)return 0;const r=n.getAttribute("style")??"";o!==void 0&&n.style.setProperty("--wb-font-scale",String(Rt[o]));const s=i.querySelector(".wb-editor"),a=(s===null?i.querySelector(".wb-text")?.offsetHeight??0:s.scrollHeight)-i.clientHeight;return n.setAttribute("style",r),a}#a(){if(this.mode.kind!=="editing")return;const{itemId:e}=this.mode,o=this.#_(e);if(o===null){this.mode=v;return}this.#L(e,o.value)}#Z(e,o){if(o.isComposing)return;if(o.key==="Escape"){o.preventDefault(),this.mode=v,this.#c();return}const n=p(this.context().state,e)?.kind==="frame";o.key==="Enter"&&(n||o.metaKey||o.ctrlKey)&&(o.preventDefault(),this.#c())}#d(){return this.renderRoot.querySelector(".wb-canvas")}#o(){const e=this.#d();return{width:e?.clientWidth??0,height:e?.clientHeight??0}}#k(e){const o=this.#d()?.getBoundingClientRect();return o===void 0?{x:e.clientX,y:e.clientY}:{x:e.clientX-o.left,y:e.clientY-o.top}}#n(e){return Ce(this.viewport,this.#k(e))}#X(){const{width:e,height:o}=this.#o();return Ce(this.viewport,{x:e/2,y:o/2})}#g(e,o){if(o===void 0)return;const n=this.#d();if(n!==null&&typeof n.setPointerCapture=="function")try{n.setPointerCapture(e.pointerId)}catch{}this.gesture=o}#c(){this.#d()?.focus({preventScroll:!0})}#G(e){if(this.gesture!==void 0)return;const o=e.button===1||e.button===0&&(this.panReady||e.pointerType==="touch");if(!o&&e.button!==0)return;if(this.#a(),this.mode.kind==="commenting"&&(this.mode=v),this.arrangeMenu=!1,this.#c(),o){e.preventDefault(),this.#s={on:"other"},this.#g(e,on(e.pointerId,this.#k(e)));return}this.#s={on:"ground"};const n=this.context(),i=this.#t().filter(s=>p(n.state,s)!==void 0),r=e.shiftKey?gt(e.pointerId,this.#n(e),i):rn(n.state,i,e.pointerId,this.#n(e),[]);this.#x=!1,this.#p=r.kind==="move"&&i.length>1,this.#g(e,r)}#V(e,o){if(o.button!==0||this.panReady||this.gesture!==void 0)return;if(o.stopPropagation(),this.#s={on:"item",itemId:e},J(this.mode,e)){o.target instanceof Element&&o.target.closest(".wb-editor")!==null||o.preventDefault();return}this.#a(),o.preventDefault(),this.#c(),this.arrangeMenu=!1,this.mode.kind!=="idle"&&(this.mode=v);const n=this.context(),i=this.#t();if(o.shiftKey){this.#x=!1,this.#p=!1,this.#e(st(i,e));return}this.#x=i.length===1&&i[0]===e,this.#p=i.length>1&&i.includes(e),this.#M={clientX:o.clientX,clientY:o.clientY},i.includes(e)||this.#e([e]);const r=this.#p?i:[e];this.#g(o,Le(n.state,e,o.pointerId,this.#n(o),r))}#C(e,o){e.button===0&&(e.stopPropagation(),e.preventDefault(),this.#s={on:"other"},this.#a(),this.#c(),this.#g(e,o))}#Y(e,o){o.button!==0||this.panReady||(o.stopPropagation(),o.preventDefault(),this.#s={on:"other"},this.#a(),this.#c(),this.mode=v,this.#e([e]))}#j(e){const o=this.gesture;if(!(o===void 0||o.pointerId!==e.pointerId)){if(o.kind==="pan"){const n=nn(o,this.#k(e));this.gesture=n.gesture,this.#i(fe(this.viewport,n.dx,n.dy));return}this.gesture=Oe(this.context().state,o,e.pointerId,this.#n(e),this.viewport.zoom,e.shiftKey)}}#I(e){const o=this.gesture;o?.kind!=="resize"||o.keepRatio===e||(this.gesture=Oe(this.context().state,o,o.pointerId,o.current,this.viewport.zoom,e))}#J(e){const o=this.gesture;if(o===void 0||o.pointerId!==e.pointerId)return;const n=this.context(),i=o.kind==="pan"?o:Oe(n.state,o,e.pointerId,this.#n(e),this.viewport.zoom,e.shiftKey);this.gesture=void 0;const r=zt(n.state,i);switch(r.kind){case"none":return;case"dispatch":n.dispatchBatch(r.inputs);return;case"connect":this.#ie(n,r.from,r.to);return;case"select":this.#e(r.ids);return;case"click":if(i.kind==="pan"||i.kind==="marquee"){this.mode=v;const s=i.kind==="marquee"?i.base:[];r.itemId!==void 0?this.#e(s.length>0?st(s,r.itemId):[r.itemId]):s.length===0&&this.#e([]);return}if(i.kind!=="move"||r.itemId===void 0)return;this.#x?this.#T(r.itemId,this.#M):this.#p&&this.#e([r.itemId]);return}}#Q(e){e.preventDefault(),e.ctrlKey||e.metaKey?this.#i(Re(this.viewport,this.#k(e),Math.exp(-e.deltaY*.01))):this.#i(fe(this.viewport,-e.deltaX,-e.deltaY))}#ee(e){const o=this.#s;o.on==="item"?this.#T(o.itemId,e):o.on==="ground"&&this.#D("sticky",this.#n(e))}#te(e){if(e.key==="Shift"&&this.#I(!0),e.target!==e.currentTarget)return;const o=this.context(),n=this.#t(),i=this.#y(o.state),[r]=i,s=e.metaKey||e.ctrlKey,a={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];if(e.key===" ")this.panReady=!0;else if(e.key==="Escape")this.mode.kind!=="idle"?this.mode=v:n.length>0&&this.#e([]);else if((e.key==="Delete"||e.key==="Backspace")&&n.length>0)this.#N();else if(e.key==="Enter"&&i.length===1&&r!==void 0)this.#T(r.id);else if(s&&e.key.toLowerCase()==="a")this.#e(o.state.items.map(c=>c.id));else if((e.key==="]"||e.key==="[")&&n.length>0){const c=e.key==="]";this.#R(s?c?"front":"back":c?"forward":"backward")}else if(a!==void 0){const c=e.shiftKey?1:Pn;i.length>0?o.dispatchBatch(an(o.state,i.map(l=>l.id),a[0]*c,a[1]*c)):this.#i(fe(this.viewport,-a[0]*40,-a[1]*40))}else if(e.key==="+"||e.key==="=")this.#v(1.2);else if(e.key==="-")this.#v(1/1.2);else if(e.key==="0")this.#S();else return;e.preventDefault()}#u(e){e.length>0&&this.context().dispatchBatch(e)}#oe(e){const o=this.#y(this.context().state);this.#u(o.filter($e).flatMap(n=>n.color===e?[]:[k.setColor(n.id,e)]))}#ne(e){const o=this.#y(this.context().state);this.#u(o.filter(G).flatMap(n=>n.fontSize===e?[]:[k.setFontSize(n.id,e),...this.#O(n,e)]))}#R(e){this.#u(Xo(this.context().state,this.#t(),e))}#N(){const{state:e}=this.context(),o=this.#t();this.#u([...o.filter(n=>y(e,n)!==void 0).map(n=>k.deleteConnector(n)),...o.filter(n=>p(e,n)!==void 0).map(n=>k.deleteItem(n))]),this.mode=v}#D(e,o){this.#a();const n=this.context(),i=Jo(n.state,pe(this.locale),e,o);if(!n.dispatch(k.addItem(i)).ok)return;const r=this.#o();r.width>0&&r.height>0&&this.#i(Lt(this.viewport,i,r)),this.#e([i.id]),this.#w=void 0,this.mode={kind:"editing",itemId:i.id}}#ie(e,o,n){if(o===n)return;const i=e.state.connectors.find(s=>s.from===o&&s.to===n);if(i!==void 0){this.#e([i.id]);return}const r=Qo(e.state,o,n);e.dispatch(k.connect(r,o,n)).ok&&this.#e([r])}#i(e){this.#E=!1;const o=_t(e,W(this.context().state.items),this.#o());hn(o,this.viewport)||(this.viewport=o)}#v(e){const{width:o,height:n}=this.#o();this.#i(Re(this.viewport,{x:o/2,y:n/2},e))}#$(e){const o=this.#o();return e===null||o.width<=0||o.height<=0?!1:(this.#i(Mt(e,o,Wt)),this.#E=!0,!0)}#z(){return ln(this.context().state.items,this.#o(),Wt)}#re(e){this.#h===e||typeof ResizeObserver>"u"||(this.#l??=new ResizeObserver(()=>this.#se()),this.#h&&this.#l.unobserve(this.#h),this.#l.observe(e),this.#h=e)}#se(){if(!this.#f){this.#F();return}if(!this.#E)return;const e=this.#r;this.#$(e===void 0?this.#z():p(this.context().state,e)??null)}disconnectedCallback(){super.disconnectedCallback(),this.#l?.disconnect(),this.#l=void 0,this.#h=void 0}showTarget(e){const{state:o}=this.context(),n=e.type==="item"?p(o,e.id):void 0;if(n?.kind==="frame"){this.#A(n.id);return}const i=e.type==="connector"?y(o,e.id):void 0,r=i===void 0?[]:[p(o,i.from),p(o,i.to)],s=n??W(r.filter(a=>a!==void 0)),d=this.#o();s&&d.width>0&&d.height>0&&this.#i(Lt(this.viewport,s,d))}#A(e){const o=this.context();o.navigate({frame:e}),this.#r=e,this.#$(p(o.state,e)??null)}#S(){const e=this.context();e.navigation.frame!==void 0&&e.navigate({frame:null}),this.#r=void 0,this.#$(this.#z())}#F(){const e=this.context(),o=e.navigation.frame;if(this.#f&&o===this.#r)return;if(o===void 0&&this.#f){this.#r=void 0;return}const n=o===void 0?this.#z():p(e.state,o)??null,i=this.#o();i.width<=0||i.height<=0||(n===null?this.viewport={x:i.width/2,y:i.height/2,zoom:1}:this.#$(n),this.#f=!0,this.#r=o)}}const qt=()=>{customElements.get("dpk-template-whiteboard")||customElements.define("dpk-template-whiteboard",Kt)},Hn=Object.freeze(Object.defineProperty({__proto__:null,BOARD_TARGET:Te,DpkTemplateWhiteboard:Kt,WB_COLORS:ie,WB_CONNECTOR_ROUTES:Z,WB_FONT_SIZES:re,WB_ITEM_KINDS:xo,WB_SHAPES:Ue,ZOOM_MAX:St,ZOOM_MIN:j,applyWhiteboardAction:tt,boardBounds:W,connectorGeometry:nt,connectorPath:le,constrainViewport:_t,defineWhiteboardElement:qt,describeWhiteboardAction:dt,emptyWhiteboardBase:je,findConnector:y,findItem:p,fitRect:Mt,frameMembers:Ee,frameOf:A,itemAt:Me,outlinePoint:Y,panBy:fe,parseWhiteboardBase:Ye,resolveWhiteboardNavigation:ut,serializeWhiteboardAction:ct,whiteboardAction:k,whiteboardActions:ce,whiteboardBaseSchema:Ve,whiteboardCommentTargets:ht,whiteboardCurrentTarget:pt,whiteboardDefinitionFor:ft,whiteboardHasTarget:bt,whiteboardMessages:pe,whiteboardTargetLabel:lt,whiteboardTitle:_e,zoomAt:Re},Symbol.toStringTag,{value:"Module"}));export{qt as d,Hn as i};
