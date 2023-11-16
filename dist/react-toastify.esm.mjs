'use client';
import e,{isValidElement as t,useRef as n,useLayoutEffect as o,useEffect as s,cloneElement as a,useReducer as r,useState as i,Fragment as l,forwardRef as c}from"react";import u from"clsx";const d=e=>"number"==typeof e&&!isNaN(e),p=e=>"string"==typeof e,m=e=>"function"==typeof e,f=e=>p(e)||m(e)?e:null,g=e=>t(e)||p(e)||m(e)||d(e);function h(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function y(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:u,position:d,preventExitTransition:p,done:m,nodeRef:f,isIn:g}=t;const y=i?`${a}--${d}`:a,v=i?`${r}--${d}`:r,T=n(0);return o(()=>{const e=f.current,t=y.split(" "),n=o=>{o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===T.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),s(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),l?h(e,m,c):m()};g||(p?t():(T.current=1,e.className+=` ${v}`,e.addEventListener("animationend",t)))},[g]),e.createElement(e.Fragment,null,u)}}function v(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const T={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},E=t=>{let{theme:n,type:o,...s}=t;return e.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...s})},C={info:function(t){return e.createElement(E,{...t},e.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return e.createElement(E,{...t},e.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(){return e.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("circle",{cx:"14",cy:"14",r:"14",fill:"#FFF1E7"}),e.createElement("path",{d:"M18.4795 10.6406L12.3195 16.8006L9.51953 14.0006",stroke:"#03CFA3","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))},error:function(){return e.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("circle",{cx:"14",cy:"14",r:"14",fill:"white"}),e.createElement("path",{d:"M17 11L11 17",stroke:"#F31C1C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M11 11L17 17",stroke:"#F31C1C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))},spinner:function(){return e.createElement("div",{className:"Toastify__spinner"})}};function I(e){const[,o]=r(e=>e+1,0),[l,c]=i([]),u=n(null),h=n(new Map).current,y=e=>-1!==l.indexOf(e),E=n({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:y,getToast:e=>h.get(e)}).current;function I(e){let{containerId:t}=e;const{limit:n}=E.props;!n||t&&E.containerId!==t||(E.count-=E.queue.length,E.queue=[])}function b(e){c(t=>null==e?[]:t.filter(t=>t!==e))}function _(){const{toastContent:e,toastProps:t,staleId:n}=E.queue.shift();w(e,t,n)}function L(e,n){let{delay:s,staleId:r,...i}=n;if(!g(e)||function(e){return!u.current||E.props.enableMultiContainer&&e.containerId!==E.props.containerId||h.has(e.toastId)&&null==e.updateId}(i))return;const{toastId:l,updateId:c,data:y}=i,{props:I}=E,L=()=>b(l),O=null==c;O&&E.count++;const N={...I,style:I.toastStyle,key:E.toastKey++,...Object.fromEntries(Object.entries(i).filter(e=>{let[t,n]=e;return null!=n})),toastId:l,updateId:c,data:y,closeToast:L,isIn:!1,className:f(i.className||I.toastClassName),bodyClassName:f(i.bodyClassName||I.bodyClassName),progressClassName:f(i.progressClassName||I.progressClassName),autoClose:!i.isLoading&&(k=i.autoClose,x=I.autoClose,!1===k||d(k)&&k>0?k:x),deleteToast(){const e=v(h.get(l),"removed");h.delete(l),T.emit(4,e);const t=E.queue.length;if(E.count=null==l?E.count-E.displayedToast:E.count-1,E.count<0&&(E.count=0),t>0){const e=null==l?E.props.limit:1;if(1===t||1===e)E.displayedToast++,_();else{const n=e>t?t:e;E.displayedToast=n;for(let e=0;e<n;e++)_()}}else o()}};var k,x;N.iconOut=function(e){let{theme:n,type:o,isLoading:s,icon:r}=e,i=null;const l={theme:n,type:o};return!1===r||(m(r)?i=r(l):t(r)?i=a(r,l):p(r)||d(r)?i=r:s?i=C.spinner():(e=>e in C)(o)&&(i=C[o](l))),i}(N),m(i.onOpen)&&(N.onOpen=i.onOpen),m(i.onClose)&&(N.onClose=i.onClose),N.closeButton=I.closeButton,!1===i.closeButton||g(i.closeButton)?N.closeButton=i.closeButton:!0===i.closeButton&&(N.closeButton=!g(I.closeButton)||I.closeButton);let R=e;t(e)&&!p(e.type)?R=a(e,{closeToast:L,toastProps:N,data:y}):m(e)&&(R=e({closeToast:L,toastProps:N,data:y})),I.limit&&I.limit>0&&E.count>I.limit&&O?E.queue.push({toastContent:R,toastProps:N,staleId:r}):d(s)?setTimeout(()=>{w(R,N,r)},s):w(R,N,r)}function w(e,t,n){const{toastId:o}=t;n&&h.delete(n);const s={content:e,props:t};h.set(o,s),c(e=>[...e,o].filter(e=>e!==n)),T.emit(4,v(s,null==s.props.updateId?"added":"updated"))}return s(()=>(E.containerId=e.containerId,T.cancelEmit(3).on(0,L).on(1,e=>u.current&&b(e)).on(5,I).emit(2,E),()=>{h.clear(),T.emit(3,E)}),[]),s(()=>{E.props=e,E.isToastActive=y,E.displayedToast=l.length}),{getToastToRender:function(t){const n=new Map,o=Array.from(h.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:y}}function b(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){const[o,a]=i(!1),[r,l]=i(!1),c=n(null),u=n({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=n(e),{autoClose:p,pauseOnHover:f,closeToast:g,onClick:h,closeOnClick:y}=e;function v(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",I),document.addEventListener("mouseup",L),document.addEventListener("touchmove",I),document.addEventListener("touchend",L);const n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=b(t.nativeEvent),u.y=_(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(u.boundingRect){const{top:n,bottom:o,left:s,right:a}=u.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&u.x>=s&&u.x<=a&&u.y>=n&&u.y<=o?C():E()}}function E(){a(!0)}function C(){a(!1)}function I(t){const n=c.current;u.canDrag&&n&&(u.didMove=!0,o&&C(),u.x=b(t),u.y=_(t),u.delta="x"===e.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform=`translate${e.draggableDirection}(${u.delta}px)`,n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function L(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",L);const t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}s(()=>{d.current=e}),s(()=>(c.current&&c.current.addEventListener("d",E,{once:!0}),m(e.onOpen)&&e.onOpen(t(e.children)&&e.children.props),()=>{const e=d.current;m(e.onClose)&&e.onClose(t(e.children)&&e.children.props)}),[]),s(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[e.pauseOnFocusLoss]);const w={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return p&&f&&(w.onMouseEnter=C,w.onMouseLeave=E),y&&(w.onClick=e=>{h&&h(e),u.canCloseOnClick&&g()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:r,toastRef:c,eventHandlers:w}}function w(t){let{closeToast:n,theme:o,ariaLabel:s="close"}=t;return console.log(n,o,s),e.createElement(l,null)}function O(t){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:l,controlledProgress:c,progress:d,rtl:p,isIn:f,theme:g}=t;const h=r||c&&0===d,y={...l,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused",opacity:h?0:1};c&&(y.transform=`scaleX(${d})`);const v=u("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":p}),T=m(i)?i({rtl:p,type:a,defaultClassName:v}):u(v,i);return e.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:T,style:y,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{f&&s()}})}const N=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i}=L(n),{closeButton:l,children:c,autoClose:d,onClick:p,type:f,hideProgressBar:g,closeToast:h,transition:y,position:v,className:T,style:E,bodyClassName:C,bodyStyle:I,progressClassName:b,progressStyle:_,updateId:N,role:k,progress:x,rtl:R,toastId:M,deleteToast:B,isIn:$,isLoading:P,iconOut:D,closeOnClick:F,theme:A}=n,z=u("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":F}),H=m(T)?T({rtl:R,position:v,type:f,defaultClassName:z}):u(z,T),S=!!x||!d,q={closeToast:h,type:f,theme:A};let Q=null;return!1===l||(Q=m(l)?l(q):t(l)?a(l,q):w(q)),e.createElement(y,{isIn:$,done:B,position:v,preventExitTransition:s,nodeRef:r},e.createElement("div",{id:M,onClick:p,className:H,...i,style:E,ref:r},e.createElement("div",{...$&&{role:k},className:m(C)?C({type:f}):u("Toastify__toast-body",C),style:I},null!=D&&e.createElement("div",{className:u("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},D),e.createElement("div",null,e.createElement("h5",{className:"toastify-text"},c))),Q,e.createElement(O,{...N&&!S?{key:`pb-${N}`}:{},rtl:R,theme:A,delay:d,isRunning:o,isIn:$,closeToast:h,hide:g,type:f,style:_,className:b,controlledProgress:S,progress:x||0})))},k=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},x=y(k("bounce",!0)),R=y(k("slide",!0)),M=y(k("zoom")),B=y(k("flip")),$=c((t,n)=>{const{getToastToRender:o,containerRef:a,isToastActive:r}=I(t),{className:i,style:l,rtl:c,containerId:d}=t;function p(e){const t=u("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":c});return m(i)?i({position:e,rtl:c,defaultClassName:t}):u(t,f(i))}return s(()=>{n&&(n.current=a.current)},[]),e.createElement("div",{ref:a,className:"Toastify",id:d},o((t,n)=>{const o=n.length?{...l}:{...l,pointerEvents:"none"};return e.createElement("div",{className:p(t),style:o,key:`container-${t}`},n.map((t,o)=>{let{content:s,props:a}=t;return e.createElement(N,{...a,isIn:r(a.toastId),style:{...a.style,"--nth":o+1,"--len":n.length},key:`toast-${a.key}`},s)}))}))});$.displayName="ToastContainer",$.defaultProps={position:"top-right",transition:x,autoClose:5e3,closeButton:w,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let P,D=new Map,F=[],A=1;function z(){return""+A++}function H(e){return e&&(p(e.toastId)||d(e.toastId))?e.toastId:z()}function S(e,t){return D.size>0?T.emit(0,e,t):F.push({content:e,options:t}),t.toastId}function q(e,t){return{...t,type:t&&t.type||e,toastId:H(t)}}function Q(e){return(t,n)=>S(t,q(e,n))}function j(e,t){return S(e,q("default",t))}j.loading=(e,t)=>S(e,q("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),j.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=p(s)?j.loading(s,n):j.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void j.dismiss(o);const a={type:e,...i,...n,data:s},r=p(t)?{render:t}:t;return o?j.update(o,{...a,...r}):j(r.render,{...a,...r}),s},c=m(e)?e():e;return c.then(e=>l("success",r,e)).catch(e=>l("error",a,e)),c},j.success=Q("success"),j.info=Q("info"),j.error=Q("error"),j.warning=Q("warning"),j.warn=j.warning,j.dark=(e,t)=>S(e,q("default",{theme:"dark",...t})),j.dismiss=e=>{D.size>0?T.emit(1,e):F=F.filter(t=>null!=e&&t.options.toastId!==e)},j.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},j.isActive=e=>{let t=!1;return D.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},j.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const n=function(e,t){let{containerId:n}=t;const o=D.get(n||P);return o&&o.getToast(e)}(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:z()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,S(r,a)}},0)},j.done=e=>{j.update(e,{progress:1})},j.onChange=e=>(T.on(4,e),()=>{T.off(4,e)}),j.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},j.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,e=>{P=e.containerId||e,D.set(P,e),F.forEach(e=>{T.emit(0,e.content,e.options)}),F=[]}).on(3,e=>{D.delete(e.containerId||e),0===D.size&&T.off(0).off(1).off(5)});export{x as Bounce,B as Flip,C as Icons,R as Slide,$ as ToastContainer,M as Zoom,h as collapseToast,y as cssTransition,j as toast,L as useToast,I as useToastContainer};
//# sourceMappingURL=react-toastify.esm.mjs.map
