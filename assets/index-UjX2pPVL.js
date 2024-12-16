import{r as zc,g as nf,a as rf}from"./react-vendor-hZDEVzp7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Ms={exports:{}},Qn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl;function sf(){if(vl)return Qn;vl=1;var n=zc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(l,c,h){var f,_={},y=null,A=null;h!==void 0&&(y=""+h),c.key!==void 0&&(y=""+c.key),c.ref!==void 0&&(A=c.ref);for(f in c)r.call(c,f)&&!s.hasOwnProperty(f)&&(_[f]=c[f]);if(l&&l.defaultProps)for(f in c=l.defaultProps,c)_[f]===void 0&&(_[f]=c[f]);return{$$typeof:e,type:l,key:y,ref:A,props:_,_owner:i.current}}return Qn.Fragment=t,Qn.jsx=a,Qn.jsxs=a,Qn}var El;function of(){return El||(El=1,Ms.exports=sf()),Ms.exports}var R=of(),C=zc();const re=nf(C);var ii={},Tl;function af(){if(Tl)return ii;Tl=1;var n=rf();return ii.createRoot=n.createRoot,ii.hydrateRoot=n.hydrateRoot,ii}var lf=af(),Jn={},wl;function cf(){if(wl)return Jn;wl=1,Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.parse=a,Jn.serialize=h;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function a(y,A){const I=new s,k=y.length;if(k<2)return I;const P=(A==null?void 0:A.decode)||f;let x=0;do{const D=y.indexOf("=",x);if(D===-1)break;const O=y.indexOf(";",x),F=O===-1?k:O;if(D>F){x=y.lastIndexOf(";",D-1)+1;continue}const W=l(y,x,D),G=c(y,D,W),T=y.slice(W,G);if(I[T]===void 0){let m=l(y,D+1,F),g=c(y,F,m);const E=P(y.slice(m,g));I[T]=E}x=F+1}while(x<k);return I}function l(y,A,I){do{const k=y.charCodeAt(A);if(k!==32&&k!==9)return A}while(++A<I);return I}function c(y,A,I){for(;A>I;){const k=y.charCodeAt(--A);if(k!==32&&k!==9)return A+1}return I}function h(y,A,I){const k=(I==null?void 0:I.encode)||encodeURIComponent;if(!n.test(y))throw new TypeError(`argument name is invalid: ${y}`);const P=k(A);if(!e.test(P))throw new TypeError(`argument val is invalid: ${A}`);let x=y+"="+P;if(!I)return x;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);x+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);x+="; Domain="+I.domain}if(I.path){if(!r.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);x+="; Path="+I.path}if(I.expires){if(!_(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);x+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(x+="; HttpOnly"),I.secure&&(x+="; Secure"),I.partitioned&&(x+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return x}function f(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function _(y){return i.call(y)==="[object Date]"}return Jn}cf();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Il="popstate";function uf(n={}){function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return Xs("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:hr(i)}return df(e,t,null,n)}function se(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Xe(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hf(){return Math.random().toString(36).substring(2,10)}function Al(n,e){return{usr:n.state,key:n.key,idx:e}}function Xs(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Pn(e):e,state:t,key:e&&e.key||r||hf()}}function hr({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Pn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function df(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l="POP",c=null,h=f();h==null&&(h=0,a.replaceState({...a.state,idx:h},""));function f(){return(a.state||{idx:null}).idx}function _(){l="POP";let P=f(),x=P==null?null:P-h;h=P,c&&c({action:l,location:k.location,delta:x})}function y(P,x){l="PUSH";let D=Xs(k.location,P,x);h=f()+1;let O=Al(D,h),F=k.createHref(D);try{a.pushState(O,"",F)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;i.location.assign(F)}s&&c&&c({action:l,location:k.location,delta:1})}function A(P,x){l="REPLACE";let D=Xs(k.location,P,x);h=f();let O=Al(D,h),F=k.createHref(D);a.replaceState(O,"",F),s&&c&&c({action:l,location:k.location,delta:0})}function I(P){let x=i.location.origin!=="null"?i.location.origin:i.location.href,D=typeof P=="string"?P:hr(P);return D=D.replace(/ $/,"%20"),se(x,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,x)}let k={get action(){return l},get location(){return n(i,a)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Il,_),c=P,()=>{i.removeEventListener(Il,_),c=null}},createHref(P){return e(i,P)},createURL:I,encodeLocation(P){let x=I(P);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:A,go(P){return a.go(P)}};return k}function Hc(n,e,t="/"){return ff(n,e,t,!1)}function ff(n,e,t,r){let i=typeof e=="string"?Pn(e):e,s=Dt(i.pathname||"/",t);if(s==null)return null;let a=Wc(n);pf(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let h=Rf(s);l=If(a[c],h,r)}return l}function Wc(n,e=[],t=[],r=""){let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(se(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let h=ht([r,c.relativePath]),f=t.concat(c);s.children&&s.children.length>0&&(se(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Wc(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:Tf(h,s.index),routesMeta:f})};return n.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Gc(s.path))i(s,a,c)}),e}function Gc(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Gc(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>n.startsWith("/")&&c===""?"/":c)}function pf(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:wf(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var mf=/^:[\w-]+$/,gf=3,_f=2,yf=1,vf=10,Ef=-2,Rl=n=>n==="*";function Tf(n,e){let t=n.split("/"),r=t.length;return t.some(Rl)&&(r+=Ef),e&&(r+=_f),t.filter(i=>!Rl(i)).reduce((i,s)=>i+(mf.test(s)?gf:s===""?yf:vf),r)}function wf(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function If(n,e,t=!1){let{routesMeta:r}=n,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",_=Si({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},f),y=c.route;if(!_&&h&&t&&!r[r.length-1].route.index&&(_=Si({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!_)return null;Object.assign(i,_.params),a.push({params:i,pathname:ht([s,_.pathname]),pathnameBase:Cf(ht([s,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(s=ht([s,_.pathnameBase]))}return a}function Si(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Af(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:_},y)=>{if(f==="*"){let I=l[y]||"";a=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const A=l[y];return _&&!A?h[f]=void 0:h[f]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:n}}function Af(n,e=!1,t=!0){Xe(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Rf(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xe(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Dt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function bf(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?Pn(n):n;return{pathname:t?t.startsWith("/")?t:Sf(t,e):e,search:kf(r),hash:Nf(i)}}function Sf(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Fs(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pf(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Kc(n){let e=Pf(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Qc(n,e,t,r=!1){let i;typeof n=="string"?i=Pn(n):(i={...n},se(!i.pathname||!i.pathname.includes("?"),Fs("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Fs("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Fs("#","search","hash",i)));let s=n===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=t;else{let _=e.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),_-=1;i.pathname=y.join("/")}l=_>=0?e[_]:"/"}let c=bf(i,l),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(h||f)&&(c.pathname+="/"),c}var ht=n=>n.join("/").replace(/\/\/+/g,"/"),Cf=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),kf=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Nf=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function xf(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Jc=["POST","PUT","PATCH","DELETE"];new Set(Jc);var Df=["GET",...Jc];new Set(Df);var Cn=C.createContext(null);Cn.displayName="DataRouter";var Gi=C.createContext(null);Gi.displayName="DataRouterState";var Yc=C.createContext({isTransitioning:!1});Yc.displayName="ViewTransition";var Vf=C.createContext(new Map);Vf.displayName="Fetchers";var Of=C.createContext(null);Of.displayName="Await";var tt=C.createContext(null);tt.displayName="Navigation";var br=C.createContext(null);br.displayName="Location";var yt=C.createContext({outlet:null,matches:[],isDataRoute:!1});yt.displayName="Route";var bo=C.createContext(null);bo.displayName="RouteError";function Lf(n,{relative:e}={}){se(Sr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=C.useContext(tt),{hash:i,pathname:s,search:a}=Cr(n,{relative:e}),l=s;return t!=="/"&&(l=s==="/"?t:ht([t,s])),r.createHref({pathname:l,search:a,hash:i})}function Sr(){return C.useContext(br)!=null}function tn(){return se(Sr(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(br).location}var Xc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zc(n){C.useContext(tt).static||C.useLayoutEffect(n)}function Pr(){let{isDataRoute:n}=C.useContext(yt);return n?Qf():Mf()}function Mf(){se(Sr(),"useNavigate() may be used only in the context of a <Router> component.");let n=C.useContext(Cn),{basename:e,navigator:t}=C.useContext(tt),{matches:r}=C.useContext(yt),{pathname:i}=tn(),s=JSON.stringify(Kc(r)),a=C.useRef(!1);return Zc(()=>{a.current=!0}),C.useCallback((c,h={})=>{if(Xe(a.current,Xc),!a.current)return;if(typeof c=="number"){t.go(c);return}let f=Qc(c,JSON.parse(s),i,h.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ht([e,f.pathname])),(h.replace?t.replace:t.push)(f,h.state,h)},[e,t,s,i,n])}C.createContext(null);function Cr(n,{relative:e}={}){let{matches:t}=C.useContext(yt),{pathname:r}=tn(),i=JSON.stringify(Kc(t));return C.useMemo(()=>Qc(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function Ff(n,e){return eu(n,e)}function eu(n,e,t,r){var x;se(Sr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=C.useContext(tt),{matches:s}=C.useContext(yt),a=s[s.length-1],l=a?a.params:{},c=a?a.pathname:"/",h=a?a.pathnameBase:"/",f=a&&a.route;{let D=f&&f.path||"";tu(c,!f||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let _=tn(),y;if(e){let D=typeof e=="string"?Pn(e):e;se(h==="/"||((x=D.pathname)==null?void 0:x.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=_;let A=y.pathname||"/",I=A;if(h!=="/"){let D=h.replace(/^\//,"").split("/");I="/"+A.replace(/^\//,"").split("/").slice(D.length).join("/")}let k=Hc(n,{pathname:I});Xe(f||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Xe(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=qf(k&&k.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:ht([h,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?h:ht([h,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,t,r);return e&&P?C.createElement(br.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},P):P}function Uf(){let n=Kf(),e=xf(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:s},"ErrorBoundary")," or"," ",C.createElement("code",{style:s},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),t?C.createElement("pre",{style:i},t):null,a)}var jf=C.createElement(Uf,null),Bf=class extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?C.createElement(yt.Provider,{value:this.props.routeContext},C.createElement(bo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $f({routeContext:n,match:e,children:t}){let r=C.useContext(Cn);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),C.createElement(yt.Provider,{value:n},t)}function qf(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,s=t==null?void 0:t.errors;if(s!=null){let c=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);se(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(t)for(let c=0;c<i.length;c++){let h=i[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(l=c),h.route.id){let{loaderData:f,errors:_}=t,y=h.route.loader&&!f.hasOwnProperty(h.route.id)&&(!_||_[h.route.id]===void 0);if(h.route.lazy||y){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,h,f)=>{let _,y=!1,A=null,I=null;t&&(_=s&&h.route.id?s[h.route.id]:void 0,A=h.route.errorElement||jf,a&&(l<0&&f===0?(tu("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,I=null):l===f&&(y=!0,I=h.route.hydrateFallbackElement||null)));let k=e.concat(i.slice(0,f+1)),P=()=>{let x;return _?x=A:y?x=I:h.route.Component?x=C.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=c,C.createElement($f,{match:h,routeContext:{outlet:c,matches:k,isDataRoute:t!=null},children:x})};return t&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?C.createElement(Bf,{location:t.location,revalidation:t.revalidation,component:A,error:_,children:P(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):P()},null)}function So(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zf(n){let e=C.useContext(Cn);return se(e,So(n)),e}function Hf(n){let e=C.useContext(Gi);return se(e,So(n)),e}function Wf(n){let e=C.useContext(yt);return se(e,So(n)),e}function Po(n){let e=Wf(n),t=e.matches[e.matches.length-1];return se(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Gf(){return Po("useRouteId")}function Kf(){var r;let n=C.useContext(bo),e=Hf("useRouteError"),t=Po("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Qf(){let{router:n}=zf("useNavigate"),e=Po("useNavigate"),t=C.useRef(!1);return Zc(()=>{t.current=!0}),C.useCallback(async(i,s={})=>{Xe(t.current,Xc),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...s}))},[n,e])}var bl={};function tu(n,e,t){!e&&!bl[n]&&(bl[n]=!0,Xe(!1,t))}C.memo(Jf);function Jf({routes:n,future:e,state:t}){return eu(n,void 0,t,e)}function Zn(n){se(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yf({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:s=!1}){se(!Sr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:i,static:s,future:{}}),[a,i,s]);typeof t=="string"&&(t=Pn(t));let{pathname:c="/",search:h="",hash:f="",state:_=null,key:y="default"}=t,A=C.useMemo(()=>{let I=Dt(c,a);return I==null?null:{location:{pathname:I,search:h,hash:f,state:_,key:y},navigationType:r}},[a,c,h,f,_,y,r]);return Xe(A!=null,`<Router basename="${a}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:C.createElement(tt.Provider,{value:l},C.createElement(br.Provider,{children:e,value:A}))}function Xf({children:n,location:e}){return Ff(Zs(n),e)}function Zs(n,e=[]){let t=[];return C.Children.forEach(n,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){t.push.apply(t,Zs(r.props.children,s));return}se(r.type===Zn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),se(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Zs(r.props.children,s)),t.push(a)}),t}var pi="get",mi="application/x-www-form-urlencoded";function Ki(n){return n!=null&&typeof n.tagName=="string"}function Zf(n){return Ki(n)&&n.tagName.toLowerCase()==="button"}function ep(n){return Ki(n)&&n.tagName.toLowerCase()==="form"}function tp(n){return Ki(n)&&n.tagName.toLowerCase()==="input"}function np(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rp(n,e){return n.button===0&&(!e||e==="_self")&&!np(n)}var si=null;function ip(){if(si===null)try{new FormData(document.createElement("form"),0),si=!1}catch{si=!0}return si}var sp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Us(n){return n!=null&&!sp.has(n)?(Xe(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mi}"`),null):n}function op(n,e){let t,r,i,s,a;if(ep(n)){let l=n.getAttribute("action");r=l?Dt(l,e):null,t=n.getAttribute("method")||pi,i=Us(n.getAttribute("enctype"))||mi,s=new FormData(n)}else if(Zf(n)||tp(n)&&(n.type==="submit"||n.type==="image")){let l=n.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=n.getAttribute("formaction")||l.getAttribute("action");if(r=c?Dt(c,e):null,t=n.getAttribute("formmethod")||l.getAttribute("method")||pi,i=Us(n.getAttribute("formenctype"))||Us(l.getAttribute("enctype"))||mi,s=new FormData(l,n),!ip()){let{name:h,type:f,value:_}=n;if(f==="image"){let y=h?`${h}.`:"";s.append(`${y}x`,"0"),s.append(`${y}y`,"0")}else h&&s.append(h,_)}}else{if(Ki(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=pi,r=null,i=mi,a=n}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:s,body:a}}function Co(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function ap(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lp(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function cp(n,e,t){let r=await Promise.all(n.map(async i=>{let s=e.routes[i.route.id];if(s){let a=await ap(s,t);return a.links?a.links():[]}return[]}));return fp(r.flat(1).filter(lp).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Sl(n,e,t,r,i,s){let a=(c,h)=>t[h]?c.route.id!==t[h].route.id:!0,l=(c,h)=>{var f;return t[h].pathname!==c.pathname||((f=t[h].route.path)==null?void 0:f.endsWith("*"))&&t[h].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,h)=>a(c,h)||l(c,h)):s==="data"?e.filter((c,h)=>{var _;let f=r.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,h)||l(c,h))return!0;if(c.route.shouldRevalidate){let y=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(n,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function up(n,e){return hp(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hp(n){return[...new Set(n)]}function dp(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function fp(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let s=JSON.stringify(dp(i));return t.has(s)||(t.add(s),r.push({key:s,link:i})),r},[])}function pp(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function mp(){let n=C.useContext(Cn);return Co(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gp(){let n=C.useContext(Gi);return Co(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var ko=C.createContext(void 0);ko.displayName="FrameworkContext";function nu(){let n=C.useContext(ko);return Co(n,"You must render this element inside a <HydratedRouter> element"),n}function _p(n,e){let t=C.useContext(ko),[r,i]=C.useState(!1),[s,a]=C.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:h,onMouseLeave:f,onTouchStart:_}=e,y=C.useRef(null);C.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let k=x=>{x.forEach(D=>{a(D.isIntersecting)})},P=new IntersectionObserver(k,{threshold:.5});return y.current&&P.observe(y.current),()=>{P.disconnect()}}},[n]),C.useEffect(()=>{if(r){let k=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(k)}}},[r]);let A=()=>{i(!0)},I=()=>{i(!1),a(!1)};return t?n!=="intent"?[s,y,{}]:[s,y,{onFocus:Yn(l,A),onBlur:Yn(c,I),onMouseEnter:Yn(h,A),onMouseLeave:Yn(f,I),onTouchStart:Yn(_,A)}]:[!1,y,{}]}function Yn(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function yp({page:n,...e}){let{router:t}=mp(),r=C.useMemo(()=>Hc(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?C.createElement(Ep,{page:n,matches:r,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function vp(n){let{manifest:e,routeModules:t}=nu(),[r,i]=C.useState([]);return C.useEffect(()=>{let s=!1;return cp(n,e,t).then(a=>{s||i(a)}),()=>{s=!0}},[n,e,t]),r}function Ep({page:n,matches:e,...t}){let r=tn(),{manifest:i,routeModules:s}=nu(),{loaderData:a,matches:l}=gp(),c=C.useMemo(()=>Sl(n,e,l,i,r,"data"),[n,e,l,i,r]),h=C.useMemo(()=>Sl(n,e,l,i,r,"assets"),[n,e,l,i,r]),f=C.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let A=new Set,I=!1;if(e.forEach(P=>{var D;let x=i.routes[P.route.id];!x||!x.hasLoader||(!c.some(O=>O.route.id===P.route.id)&&P.route.id in a&&((D=s[P.route.id])!=null&&D.shouldRevalidate)||x.hasClientLoader?I=!0:A.add(P.route.id))}),A.size===0)return[];let k=pp(n);return I&&A.size>0&&k.searchParams.set("_routes",e.filter(P=>A.has(P.route.id)).map(P=>P.route.id).join(",")),[k.pathname+k.search]},[a,r,i,c,e,n,s]),_=C.useMemo(()=>up(h,i),[h,i]),y=vp(h);return C.createElement(C.Fragment,null,f.map(A=>C.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...t})),_.map(A=>C.createElement("link",{key:A,rel:"modulepreload",href:A,...t})),y.map(({key:A,link:I})=>C.createElement("link",{key:A,...I})))}function Tp(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var ru=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ru&&(window.__reactRouterVersion="7.0.2")}catch{}function wp({basename:n,children:e,window:t}){let r=C.useRef();r.current==null&&(r.current=uf({window:t,v5Compat:!0}));let i=r.current,[s,a]=C.useState({action:i.action,location:i.location}),l=C.useCallback(c=>{C.startTransition(()=>a(c))},[a]);return C.useLayoutEffect(()=>i.listen(l),[i,l]),C.createElement(Yf,{basename:n,children:e,location:s.location,navigationType:s.action,navigator:i})}var iu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,su=C.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:l,target:c,to:h,preventScrollReset:f,viewTransition:_,...y},A){let{basename:I}=C.useContext(tt),k=typeof h=="string"&&iu.test(h),P,x=!1;if(typeof h=="string"&&k&&(P=h,ru))try{let g=new URL(window.location.href),E=h.startsWith("//")?new URL(g.protocol+h):new URL(h),w=Dt(E.pathname,I);E.origin===g.origin&&w!=null?h=w+E.search+E.hash:x=!0}catch{Xe(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Lf(h,{relative:i}),[O,F,W]=_p(r,y),G=bp(h,{replace:a,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:_});function T(g){e&&e(g),g.defaultPrevented||G(g)}let m=C.createElement("a",{...y,...W,href:P||D,onClick:x||s?e:T,ref:Tp(A,F),target:c,"data-discover":!k&&t==="render"?"true":void 0});return O&&!k?C.createElement(C.Fragment,null,m,C.createElement(yp,{page:D})):m});su.displayName="Link";var Ip=C.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:l,children:c,...h},f){let _=Cr(a,{relative:h.relative}),y=tn(),A=C.useContext(Gi),{navigator:I,basename:k}=C.useContext(tt),P=A!=null&&Np(_)&&l===!0,x=I.encodeLocation?I.encodeLocation(_).pathname:_.pathname,D=y.pathname,O=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(D=D.toLowerCase(),O=O?O.toLowerCase():null,x=x.toLowerCase()),O&&k&&(O=Dt(O,k)||O);const F=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let W=D===x||!i&&D.startsWith(x)&&D.charAt(F)==="/",G=O!=null&&(O===x||!i&&O.startsWith(x)&&O.charAt(x.length)==="/"),T={isActive:W,isPending:G,isTransitioning:P},m=W?e:void 0,g;typeof r=="function"?g=r(T):g=[r,W?"active":null,G?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(T):s;return C.createElement(su,{...h,"aria-current":m,className:g,ref:f,style:E,to:a,viewTransition:l},typeof c=="function"?c(T):c)});Ip.displayName="NavLink";var Ap=C.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:s,method:a=pi,action:l,onSubmit:c,relative:h,preventScrollReset:f,viewTransition:_,...y},A)=>{let I=Cp(),k=kp(l,{relative:h}),P=a.toLowerCase()==="get"?"get":"post",x=typeof l=="string"&&iu.test(l),D=O=>{if(c&&c(O),O.defaultPrevented)return;O.preventDefault();let F=O.nativeEvent.submitter,W=(F==null?void 0:F.getAttribute("formmethod"))||a;I(F||O.currentTarget,{fetcherKey:e,method:W,navigate:t,replace:i,state:s,relative:h,preventScrollReset:f,viewTransition:_})};return C.createElement("form",{ref:A,method:P,action:k,onSubmit:r?c:D,...y,"data-discover":!x&&n==="render"?"true":void 0})});Ap.displayName="Form";function Rp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ou(n){let e=C.useContext(Cn);return se(e,Rp(n)),e}function bp(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:s,viewTransition:a}={}){let l=Pr(),c=tn(),h=Cr(n,{relative:s});return C.useCallback(f=>{if(rp(f,e)){f.preventDefault();let _=t!==void 0?t:hr(c)===hr(h);l(n,{replace:_,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[c,l,h,t,r,e,n,i,s,a])}var Sp=0,Pp=()=>`__${String(++Sp)}__`;function Cp(){let{router:n}=ou("useSubmit"),{basename:e}=C.useContext(tt),t=Gf();return C.useCallback(async(r,i={})=>{let{action:s,method:a,encType:l,formData:c,body:h}=op(r,e);if(i.navigate===!1){let f=i.fetcherKey||Pp();await n.fetch(f,t,i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:h,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await n.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:h,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function kp(n,{relative:e}={}){let{basename:t}=C.useContext(tt),r=C.useContext(yt);se(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Cr(n||".",{relative:e})},a=tn();if(n==null){s.search=a.search;let l=new URLSearchParams(s.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(_=>_).forEach(_=>l.append("index",_));let f=l.toString();s.search=f?`?${f}`:""}}return(!n||n===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:ht([t,s.pathname])),hr(s)}function Np(n,e={}){let t=C.useContext(Yc);se(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ou("useViewTransitionState"),i=Cr(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=Dt(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=Dt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Si(i.pathname,a)!=null||Si(i.pathname,s)!=null}new TextEncoder;const xp=()=>{const n=Pr(),e=()=>{n("/register")},t=()=>{n("/login")},r=()=>{n("/")};return R.jsx("div",{className:"container-fluid p-0",children:R.jsx("nav",{className:"navbar navbar-expand-lg navbar-light bg-light ",style:{position:"fixed",top:"0",zIndex:"100",width:"100%"},children:R.jsxs("div",{className:"container-fluid nav-section",children:[R.jsx("a",{className:"navbar-brand",href:"#",children:"Quiz.com"}),R.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:R.jsx("span",{className:"navbar-toggler-icon"})}),R.jsxs("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[R.jsxs("ul",{className:"navbar-nav option-ul",children:[R.jsx("li",{children:R.jsx("a",{className:"btn btn-light text-dark my-2 mx-2 border px-5 bg-light",style:{fontSize:"21px"},onClick:r,children:"Home"})}),R.jsxs("li",{className:"search-li",children:[R.jsx("input",{type:"text",placeholder:"search"}),R.jsx("i",{className:"bi bi-search me-1",style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"bottom",title:"Search exams"})]}),R.jsx("li",{children:R.jsx("a",{className:"btn login-button  border-primary my-2 mx-2  px-5",onClick:t,children:"Login"})}),R.jsx("li",{children:R.jsx("a",{className:"btn register-button border-primary  my-2 mx-2 px-5",onClick:e,children:"Register"})})]}),R.jsx("a",{className:"text-decoration-none text-dark px-5",style:{cursor:"pointer"},children:"About Us"})]})]})})})},Xn="/assets/bio1-1M-lN19C.jpg",Dp="/assets/bio2-CU__JQRz.jpg",Vp="/assets/CS1-DgsVR0SG.jpg",Op="/assets/cs2-D9g02rNY.jpg",Lp="/assets/math1-y-DkXsZh.jpg",gi=[{name:"biology",img:Xn},{name:"biology",img:Xn},{name:"biology",img:Xn},{name:"biology",img:Xn},{name:"biology",img:Xn},{name:"biology",img:Dp},{name:"Computer Science",img:Vp},{name:"Computer Science",img:Op},{name:"math",img:Lp}];var Pl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Mp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,_=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(y=64)),r.push(t[f],t[_],t[y],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(au(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||_==null)throw new Fp;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),_!==64){const I=h<<6&192|_;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Up=function(n){const e=au(n);return lu.encodeByteArray(e,!0)},Pi=function(n){return Up(n).replace(/\./g,"")},cu=function(n){try{return lu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=()=>jp().__FIREBASE_DEFAULTS__,$p=()=>{if(typeof process>"u"||typeof Pl>"u")return;const n=Pl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cu(n[1]);return e&&JSON.parse(e)},Qi=()=>{try{return Bp()||$p()||qp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uu=n=>{var e,t;return(t=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zp=n=>{const e=uu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hu=()=>{var n;return(n=Qi())===null||n===void 0?void 0:n.config},du=n=>{var e;return(e=Qi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pi(JSON.stringify(t)),Pi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Kp(){var n;const e=(n=Qi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xp(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zp(){return!Kp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function em(){try{return typeof indexedDB=="object"}catch{return!1}}function tm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="FirebaseError";class vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=nm,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?rm(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new vt(i,l,r)}}function rm(n,e){return n.replace(im,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const im=/\{\$([^}]+)}/g;function sm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ci(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Cl(s)&&Cl(a)){if(!Ci(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Cl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function om(n,e){const t=new am(n,e);return t.subscribe.bind(t)}class am{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");lm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=js),i.error===void 0&&(i.error=js),i.complete===void 0&&(i.complete=js);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function js(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hm(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:um(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function um(n){return n===Wt?void 0:n}function hm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const fm={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},pm=K.INFO,mm={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},gm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=mm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=pm,this._logHandler=gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const _m=(n,e)=>e.some(t=>n instanceof t);let kl,Nl;function ym(){return kl||(kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vm(){return Nl||(Nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fu=new WeakMap,eo=new WeakMap,pu=new WeakMap,Bs=new WeakMap,xo=new WeakMap;function Em(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ct(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&fu.set(t,n)}).catch(()=>{}),xo.set(e,n),e}function Tm(n){if(eo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});eo.set(n,e)}let to={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return eo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wm(n){to=n(to)}function Im(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($s(this),e,...t);return pu.set(r,e.sort?e.sort():[e]),Ct(r)}:vm().includes(n)?function(...e){return n.apply($s(this),e),Ct(fu.get(this))}:function(...e){return Ct(n.apply($s(this),e))}}function Am(n){return typeof n=="function"?Im(n):(n instanceof IDBTransaction&&Tm(n),_m(n,ym())?new Proxy(n,to):n)}function Ct(n){if(n instanceof IDBRequest)return Em(n);if(Bs.has(n))return Bs.get(n);const e=Am(n);return e!==n&&(Bs.set(n,e),xo.set(e,n)),e}const $s=n=>xo.get(n);function Rm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Ct(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ct(a.result),c.oldVersion,c.newVersion,Ct(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bm=["get","getKey","getAll","getAllKeys","count"],Sm=["put","add","delete","clear"],qs=new Map;function xl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qs.get(e))return qs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Sm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bm.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return qs.set(e,s),s}wm(n=>({...n,get:(e,t,r)=>xl(e,t)||n.get(e,t,r),has:(e,t)=>!!xl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Cm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",Dl="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new No("@firebase/app"),km="@firebase/app-compat",Nm="@firebase/analytics-compat",xm="@firebase/analytics",Dm="@firebase/app-check-compat",Vm="@firebase/app-check",Om="@firebase/auth",Lm="@firebase/auth-compat",Mm="@firebase/database",Fm="@firebase/data-connect",Um="@firebase/database-compat",jm="@firebase/functions",Bm="@firebase/functions-compat",$m="@firebase/installations",qm="@firebase/installations-compat",zm="@firebase/messaging",Hm="@firebase/messaging-compat",Wm="@firebase/performance",Gm="@firebase/performance-compat",Km="@firebase/remote-config",Qm="@firebase/remote-config-compat",Jm="@firebase/storage",Ym="@firebase/storage-compat",Xm="@firebase/firestore",Zm="@firebase/vertexai",eg="@firebase/firestore-compat",tg="firebase",ng="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]",rg={[no]:"fire-core",[km]:"fire-core-compat",[xm]:"fire-analytics",[Nm]:"fire-analytics-compat",[Vm]:"fire-app-check",[Dm]:"fire-app-check-compat",[Om]:"fire-auth",[Lm]:"fire-auth-compat",[Mm]:"fire-rtdb",[Fm]:"fire-data-connect",[Um]:"fire-rtdb-compat",[jm]:"fire-fn",[Bm]:"fire-fn-compat",[$m]:"fire-iid",[qm]:"fire-iid-compat",[zm]:"fire-fcm",[Hm]:"fire-fcm-compat",[Wm]:"fire-perf",[Gm]:"fire-perf-compat",[Km]:"fire-rc",[Qm]:"fire-rc-compat",[Jm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Xm]:"fire-fst",[eg]:"fire-fst-compat",[Zm]:"fire-vertex","fire-js":"fire-js",[tg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,ig=new Map,io=new Map;function Vl(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(io.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,n);for(const t of ki.values())Vl(t,n);for(const t of ig.values())Vl(t,n);return!0}function Do(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new kr("app","Firebase",sg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=ng;function mu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ro,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=hu()),!t)throw kt.create("no-options");const s=ki.get(i);if(s){if(Ci(t,s.options)&&Ci(r,s.config))return s;throw kt.create("duplicate-app",{appName:i})}const a=new dm(i);for(const c of io.values())a.addComponent(c);const l=new og(t,r,a);return ki.set(i,l),l}function gu(n=ro){const e=ki.get(n);if(!e&&n===ro&&hu())return mu();if(!e)throw kt.create("no-app",{appName:n});return e}function Nt(n,e,t){var r;let i=(r=rg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(l.join(" "));return}En(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebase-heartbeat-database",lg=1,dr="firebase-heartbeat-store";let zs=null;function _u(){return zs||(zs=Rm(ag,lg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),zs}async function cg(n){try{const t=(await _u()).transaction(dr),r=await t.objectStore(dr).get(yu(n));return await t.done,r}catch(e){if(e instanceof vt)pt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function Ol(n,e){try{const r=(await _u()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,yu(n)),await r.done}catch(t){if(t instanceof vt)pt.warn(t.message);else{const r=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(r.message)}}}function yu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=1024,hg=30*24*60*60*1e3;class dg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ll();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=hg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ll(),{heartbeatsToSend:r,unsentEntries:i}=fg(this._heartbeatsCache.heartbeats),s=Pi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}}function Ll(){return new Date().toISOString().substring(0,10)}function fg(n,e=ug){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ml(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ml(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return em()?tm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ml(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){En(new Yt("platform-logger",e=>new Pm(e),"PRIVATE")),En(new Yt("heartbeat",e=>new dg(e),"PRIVATE")),Nt(no,Dl,n),Nt(no,Dl,"esm2017"),Nt("fire-js","")}mg("");function Vo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function vu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gg=vu,Eu=new kr("auth","Firebase",vu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new No("@firebase/auth");function _g(n,...e){Ni.logLevel<=K.WARN&&Ni.warn(`Auth (${kn}): ${n}`,...e)}function _i(n,...e){Ni.logLevel<=K.ERROR&&Ni.error(`Auth (${kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw Lo(n,...e)}function He(n,...e){return Lo(n,...e)}function Oo(n,e,t){const r=Object.assign(Object.assign({},gg()),{[e]:t});return new kr("auth","Firebase",r).create(e,{appName:n.name})}function dt(n){return Oo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Be(n,"argument-error"),Oo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Eu.create(n,...e)}function $(n,e,...t){if(!n)throw Lo(e,...t)}function lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _i(e),new Error(e)}function mt(n,e){n||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vg(){return Fl()==="http:"||Fl()==="https:"}function Fl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vg()||Jp()||"connection"in navigator)?navigator.onLine:!0}function Tg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Gp()||Yp()}get(){return Eg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new xr(3e4,6e4);function Ut(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function jt(n,e,t,r,i={}){return wu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Nr(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},s);return Qp()||(h.referrerPolicy="no-referrer"),Tu.fetch()(Iu(n,n.config.apiHost,t,l),h)})}async function wu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wg),e);try{const i=new Rg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw oi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw oi(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Oo(n,f,h);Be(n,f)}}catch(i){if(i instanceof vt)throw i;Be(n,"network-request-failed",{message:String(i)})}}async function Dr(n,e,t,r,i={}){const s=await jt(n,e,t,r,i);return"mfaPendingCredential"in s&&Be(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Iu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Mo(n.config,i):`${n.config.apiScheme}://${i}`}function Ag(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),Ig.get())})}}function oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=He(n,e,r);return i.customData._tokenResponse=t,i}function Ul(n){return n!==void 0&&n.enterprise!==void 0}class bg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ag(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sg(n,e){return jt(n,"GET","/v2/recaptchaConfig",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(n,e){return jt(n,"POST","/v1/accounts:delete",e)}async function Au(n,e){return jt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cg(n,e=!1){const t=We(n),r=await t.getIdToken(e),i=Fo(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:sr(Hs(i.auth_time)),issuedAtTime:sr(Hs(i.iat)),expirationTime:sr(Hs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hs(n){return Number(n)*1e3}function Fo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const i=cu(t);return i?JSON.parse(i):(_i("Failed to decode base64 JWT payload"),null)}catch(i){return _i("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jl(n){const e=Fo(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vt&&kg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await fr(n,Au(t,{idToken:r}));$(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ru(s.providerUserInfo):[],l=Dg(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new oo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function xg(n){const e=We(n);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ru(n){return n.map(e=>{var{providerId:t}=e,r=Vo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(n,e){const t=await wu(n,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Iu(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Og(n,e){return jt(n,"POST","/v2/accounts:revokeToken",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=jl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Vg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new gn;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fr(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Cg(this,e)}reload(){return xg(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(dt(this.auth));const e=await this.getIdToken();return await fr(this,Pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(h=t.createdAt)!==null&&h!==void 0?h:void 0,D=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:F,isAnonymous:W,providerData:G,stsTokenManager:T}=t;$(O&&T,e,"internal-error");const m=gn.fromJSON(this.name,T);$(typeof O=="string",e,"internal-error"),It(_,e.name),It(y,e.name),$(typeof F=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),It(A,e.name),It(I,e.name),It(k,e.name),It(P,e.name),It(x,e.name),It(D,e.name);const g=new ct({uid:O,auth:e,email:y,emailVerified:F,displayName:_,isAnonymous:W,photoURL:I,phoneNumber:A,tenantId:k,stsTokenManager:m,createdAt:x,lastLoginAt:D});return G&&Array.isArray(G)&&(g.providerData=G.map(E=>Object.assign({},E))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(e,t,r=!1){const i=new gn;i.updateFromServerResponse(t);const s=new ct({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ru(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new gn;l.updateFromIdToken(r);const c=new ct({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new oo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map;function ut(n){mt(n instanceof Function,"Expected a class definition");let e=Bl.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bu.type="NONE";const $l=bu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e,t){return`firebase:${n}:${e}:${t}`}class _n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=yi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _n(ut($l),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ut($l);const a=yi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const _=ct._fromJSON(e,f);h!==s&&(l=_),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new _n(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new _n(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ku(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Su(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xu(e))return"Blackberry";if(Du(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||Cu(e))&&!e.includes("edge/"))return"Chrome";if(Nu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Su(n=Pe()){return/firefox\//i.test(n)}function Pu(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cu(n=Pe()){return/crios\//i.test(n)}function ku(n=Pe()){return/iemobile/i.test(n)}function Nu(n=Pe()){return/android/i.test(n)}function xu(n=Pe()){return/blackberry/i.test(n)}function Du(n=Pe()){return/webos/i.test(n)}function Uo(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lg(n=Pe()){var e;return Uo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mg(){return Xp()&&document.documentMode===10}function Vu(n=Pe()){return Uo(n)||Nu(n)||Du(n)||xu(n)||/windows phone/i.test(n)||ku(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e=[]){let t;switch(n){case"Browser":t=ql(Pe());break;case"Worker":t=`${ql(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(n,e={}){return jt(n,"GET","/v2/passwordPolicy",Ut(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=6;class Bg{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:jg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zl(this),this.idTokenSubscription=new zl(this),this.beforeStateQueue=new Fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Au(this,{idToken:e}),r=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(dt(this));const t=e?We(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ug(this),t=new Bg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Og(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_g(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bt(n){return We(n)}class zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=om(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qg(n){Ji=n}function Lu(n){return Ji.loadJS(n)}function zg(){return Ji.recaptchaEnterpriseScript}function Hg(){return Ji.gapiScript}function Wg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Gg{constructor(){this.enterprise=new Kg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Kg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Qg="recaptcha-enterprise",Mu="NO_RECAPTCHA";class Jg{constructor(e){this.type=Qg,this.auth=Bt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Sg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new bg(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Ul(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(Mu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gg().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Ul(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=zg();c.length!==0&&(c+=l),Lu(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Hl(n,e,t,r=!1,i=!1){const s=new Jg(n);let a;if(i)a=Mu;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ao(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Hl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Hl(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n,e){const t=Do(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ci(s,e??{}))return i;Be(i,"already-initialized")}return t.initialize({options:e})}function Xg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ut);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zg(n,e,t){const r=Bt(n);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fu(e),{host:a,port:l}=e_(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),t_()}function Fu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function e_(n){const e=Fu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Wl(a)}}}function Wl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function t_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function n_(n,e){return jt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(n,e){return Dr(n,"POST","/v1/accounts:signInWithPassword",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e){return Dr(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}async function s_(n,e){return Dr(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends jo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new pr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new pr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ao(e,t,"signInWithPassword",r_);case"emailLink":return i_(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ao(e,r,"signUpPassword",n_);case"emailLink":return s_(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(n,e){return Dr(n,"POST","/v1/accounts:signInWithIdp",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="http://localhost";class Xt extends jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Vo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Xt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yn(e,t)}buildRequest(){const e={requestUri:o_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l_(n){const e=er(tr(n)).link,t=e?er(tr(e)).deep_link_id:null,r=er(tr(n)).deep_link_id;return(r?er(tr(r)).link:null)||r||t||e||n}class Bo{constructor(e){var t,r,i,s,a,l;const c=er(tr(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,_=a_((i=c.mode)!==null&&i!==void 0?i:null);$(h&&f&&_,"argument-error"),this.apiKey=h,this.operation=_,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=l_(e);try{return new Bo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,t){return pr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Bo.parseLink(t);return $(r,"argument-error"),pr._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends $o{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Vr{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return at.credential(t,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Vr{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Vr{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){return Dr(n,"POST","/v1/accounts:signUp",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ct._fromIdTokenResponse(e,r,i),a=Gl(r);return new Zt({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Gl(r);return new Zt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Gl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends vt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Di.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Di(e,t,r,i)}}function Uu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Di._fromErrorAndOperation(n,s,e,r):s})}async function u_(n,e,t=!1){const r=await fr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(n,e,t=!1){const{auth:r}=n;if(qe(r.app))return Promise.reject(dt(r));const i="reauthenticate";try{const s=await fr(n,Uu(r,i,e,n),t);$(s.idToken,r,"internal-error");const a=Fo(s.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(n.uid===l,r,"user-mismatch"),Zt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(n,e,t=!1){if(qe(n.app))return Promise.reject(dt(n));const r="signIn",i=await Uu(n,r,e),s=await Zt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function d_(n,e){return ju(Bt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bu(n){const e=Bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f_(n,e,t){if(qe(n.app))return Promise.reject(dt(n));const r=Bt(n),a=await ao(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",c_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bu(n),c}),l=await Zt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function p_(n,e,t){return qe(n.app)?Promise.reject(dt(n)):d_(We(n),Nn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bu(n),r})}function m_(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function g_(n,e,t){return We(n).beforeAuthStateChanged(e,t)}const Vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=1e3,y_=10;class qu extends $u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Mg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,y_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qu.type="LOCAL";const v_=qu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends $u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zu.type="SESSION";const Hu=zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await E_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=qo("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){const y=_;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function w_(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function I_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function R_(){return Wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="firebaseLocalStorageDb",b_=1,Oi="firebaseLocalStorage",Ku="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xi(n,e){return n.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function S_(){const n=indexedDB.deleteDatabase(Gu);return new Or(n).toPromise()}function lo(){const n=indexedDB.open(Gu,b_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oi,{keyPath:Ku})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oi)?e(r):(r.close(),await S_(),e(await lo()))})})}async function Kl(n,e,t){const r=Xi(n,!0).put({[Ku]:e,value:t});return new Or(r).toPromise()}async function P_(n,e){const t=Xi(n,!1).get(e),r=await new Or(t).toPromise();return r===void 0?null:r.value}function Ql(n,e){const t=Xi(n,!0).delete(e);return new Or(t).toPromise()}const C_=800,k_=3;class Qu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>k_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yi._getInstance(R_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await I_(),!this.activeServiceWorker)return;this.sender=new T_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lo();return await Kl(e,Vi,"1"),await Ql(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>P_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ql(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xi(i,!1).getAll();return new Or(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qu.type="LOCAL";const N_=Qu;new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n,e){return e?ut(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x_(n){return ju(n.auth,new zo(n),n.bypassAuthState)}function D_(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),h_(t,new zo(n),n.bypassAuthState)}async function V_(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),u_(t,new zo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x_;case"linkViaPopup":case"linkViaRedirect":return V_;case"reauthViaPopup":case"reauthViaRedirect":return D_;default:Be(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new xr(2e3,1e4);async function L_(n,e,t){if(qe(n.app))return Promise.reject(He(n,"operation-not-supported-in-this-environment"));const r=Bt(n);yg(n,e,$o);const i=Ju(r,t);return new Gt(r,"signInViaPopup",e,i).executeNotNull()}class Gt extends Yu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O_.get())};e()}}Gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="pendingRedirect",vi=new Map;class F_ extends Yu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vi.get(this.auth._key());if(!e){try{const r=await U_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vi.set(this.auth._key(),e)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U_(n,e){const t=$_(e),r=B_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function j_(n,e){vi.set(n._key(),e)}function B_(n){return ut(n._redirectPersistence)}function $_(n){return yi(M_,n.config.apiKey,n.name)}async function q_(n,e,t=!1){if(qe(n.app))return Promise.reject(dt(n));const r=Bt(n),i=Ju(r,e),a=await new F_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=10*60*1e3;class H_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(He(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jl(e))}saveEventToCache(e){this.cachedEventUids.add(Jl(e)),this.lastProcessedEventTime=Date.now()}}function Jl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e={}){return jt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q_=/^https?/;async function J_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await G_(n);for(const t of e)try{if(Y_(t))return}catch{}Be(n,"unauthorized-domain")}function Y_(n){const e=so(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Q_.test(t))return!1;if(K_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new xr(3e4,6e4);function Yl(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Z_(n){return new Promise((e,t)=>{var r,i,s;function a(){Yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yl(),t(He(n,"network-request-failed"))},timeout:X_.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)a();else{const l=Wg("iframefcb");return Qe()[l]=()=>{gapi.load?a():t(He(n,"network-request-failed"))},Lu(`${Hg()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function ey(n){return Ei=Ei||Z_(n),Ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new xr(5e3,15e3),ny="__/auth/iframe",ry="emulator/auth/iframe",iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oy(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mo(e,ry):`https://${n.config.authDomain}/${ny}`,r={apiKey:e.apiKey,appName:n.name,v:kn},i=sy.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Nr(r).slice(1)}`}async function ay(n){const e=await ey(n),t=Qe().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:oy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=He(n,"network-request-failed"),l=Qe().setTimeout(()=>{s(a)},ty.get());function c(){Qe().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cy=500,uy=600,hy="_blank",dy="http://localhost";class Xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fy(n,e,t,r=cy,i=uy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ly),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Pe().toLowerCase();t&&(l=Cu(h)?hy:t),Su(h)&&(e=e||dy,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[A,I])=>`${y}${A}=${I},`,"");if(Lg(h)&&l!=="_self")return py(e||"",l),new Xl(null);const _=window.open(e||"",l,f);$(_,n,"popup-blocked");try{_.focus()}catch{}return new Xl(_)}function py(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="__/auth/handler",gy="emulator/auth/handler",_y=encodeURIComponent("fac");async function Zl(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:kn,eventId:i};if(e instanceof $o){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",sm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof Vr){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${_y}=${encodeURIComponent(c)}`:"";return`${yy(n)}?${Nr(l).slice(1)}${h}`}function yy({config:n}){return n.emulator?Mo(n,gy):`https://${n.authDomain}/${my}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="webStorageSupport";class vy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hu,this._completeRedirectFn=q_,this._overrideRedirectResult=j_}async _openPopup(e,t,r,i){var s;mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Zl(e,t,r,so(),i);return fy(e,a,qo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Zl(e,t,r,so(),i);return w_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ay(e),r=new H_(e);return t.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ws,{type:Ws},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ws];a!==void 0&&t(!!a),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=J_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vu()||Pu()||Uo()}}const Ey=vy;var ec="@firebase/auth",tc="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Iy(n){En(new Yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ou(n)},h=new $g(r,i,s,c);return Xg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),En(new Yt("auth-internal",e=>{const t=Bt(e.getProvider("auth").getImmediate());return(r=>new Ty(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(ec,tc,wy(n)),Nt(ec,tc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=5*60,Ry=du("authIdTokenMaxAge")||Ay;let nc=null;const by=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ry)return;const i=t==null?void 0:t.token;nc!==i&&(nc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sy(n=gu()){const e=Do(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yg(n,{popupRedirectResolver:Ey,persistence:[N_,v_,Hu]}),r=du("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=by(s.toString());g_(t,a,()=>a(t.currentUser)),m_(t,l=>a(l))}}const i=uu("auth");return i&&Zg(t,`http://${i}`),t}function Py(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=He("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Py().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Iy("Browser");var Cy="firebase",ky="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Cy,ky,"app");var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Zu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(E,w,b){for(var v=Array(arguments.length-2),me=2;me<arguments.length;me++)v[me-2]=arguments[me];return m.prototype[w].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,g){g||(g=0);var E=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)E[w]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(w=0;16>w;++w)E[w]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],w=T.g[2];var b=T.g[3],v=m+(b^g&(w^b))+E[0]+3614090360&4294967295;m=g+(v<<7&4294967295|v>>>25),v=b+(w^m&(g^w))+E[1]+3905402710&4294967295,b=m+(v<<12&4294967295|v>>>20),v=w+(g^b&(m^g))+E[2]+606105819&4294967295,w=b+(v<<17&4294967295|v>>>15),v=g+(m^w&(b^m))+E[3]+3250441966&4294967295,g=w+(v<<22&4294967295|v>>>10),v=m+(b^g&(w^b))+E[4]+4118548399&4294967295,m=g+(v<<7&4294967295|v>>>25),v=b+(w^m&(g^w))+E[5]+1200080426&4294967295,b=m+(v<<12&4294967295|v>>>20),v=w+(g^b&(m^g))+E[6]+2821735955&4294967295,w=b+(v<<17&4294967295|v>>>15),v=g+(m^w&(b^m))+E[7]+4249261313&4294967295,g=w+(v<<22&4294967295|v>>>10),v=m+(b^g&(w^b))+E[8]+1770035416&4294967295,m=g+(v<<7&4294967295|v>>>25),v=b+(w^m&(g^w))+E[9]+2336552879&4294967295,b=m+(v<<12&4294967295|v>>>20),v=w+(g^b&(m^g))+E[10]+4294925233&4294967295,w=b+(v<<17&4294967295|v>>>15),v=g+(m^w&(b^m))+E[11]+2304563134&4294967295,g=w+(v<<22&4294967295|v>>>10),v=m+(b^g&(w^b))+E[12]+1804603682&4294967295,m=g+(v<<7&4294967295|v>>>25),v=b+(w^m&(g^w))+E[13]+4254626195&4294967295,b=m+(v<<12&4294967295|v>>>20),v=w+(g^b&(m^g))+E[14]+2792965006&4294967295,w=b+(v<<17&4294967295|v>>>15),v=g+(m^w&(b^m))+E[15]+1236535329&4294967295,g=w+(v<<22&4294967295|v>>>10),v=m+(w^b&(g^w))+E[1]+4129170786&4294967295,m=g+(v<<5&4294967295|v>>>27),v=b+(g^w&(m^g))+E[6]+3225465664&4294967295,b=m+(v<<9&4294967295|v>>>23),v=w+(m^g&(b^m))+E[11]+643717713&4294967295,w=b+(v<<14&4294967295|v>>>18),v=g+(b^m&(w^b))+E[0]+3921069994&4294967295,g=w+(v<<20&4294967295|v>>>12),v=m+(w^b&(g^w))+E[5]+3593408605&4294967295,m=g+(v<<5&4294967295|v>>>27),v=b+(g^w&(m^g))+E[10]+38016083&4294967295,b=m+(v<<9&4294967295|v>>>23),v=w+(m^g&(b^m))+E[15]+3634488961&4294967295,w=b+(v<<14&4294967295|v>>>18),v=g+(b^m&(w^b))+E[4]+3889429448&4294967295,g=w+(v<<20&4294967295|v>>>12),v=m+(w^b&(g^w))+E[9]+568446438&4294967295,m=g+(v<<5&4294967295|v>>>27),v=b+(g^w&(m^g))+E[14]+3275163606&4294967295,b=m+(v<<9&4294967295|v>>>23),v=w+(m^g&(b^m))+E[3]+4107603335&4294967295,w=b+(v<<14&4294967295|v>>>18),v=g+(b^m&(w^b))+E[8]+1163531501&4294967295,g=w+(v<<20&4294967295|v>>>12),v=m+(w^b&(g^w))+E[13]+2850285829&4294967295,m=g+(v<<5&4294967295|v>>>27),v=b+(g^w&(m^g))+E[2]+4243563512&4294967295,b=m+(v<<9&4294967295|v>>>23),v=w+(m^g&(b^m))+E[7]+1735328473&4294967295,w=b+(v<<14&4294967295|v>>>18),v=g+(b^m&(w^b))+E[12]+2368359562&4294967295,g=w+(v<<20&4294967295|v>>>12),v=m+(g^w^b)+E[5]+4294588738&4294967295,m=g+(v<<4&4294967295|v>>>28),v=b+(m^g^w)+E[8]+2272392833&4294967295,b=m+(v<<11&4294967295|v>>>21),v=w+(b^m^g)+E[11]+1839030562&4294967295,w=b+(v<<16&4294967295|v>>>16),v=g+(w^b^m)+E[14]+4259657740&4294967295,g=w+(v<<23&4294967295|v>>>9),v=m+(g^w^b)+E[1]+2763975236&4294967295,m=g+(v<<4&4294967295|v>>>28),v=b+(m^g^w)+E[4]+1272893353&4294967295,b=m+(v<<11&4294967295|v>>>21),v=w+(b^m^g)+E[7]+4139469664&4294967295,w=b+(v<<16&4294967295|v>>>16),v=g+(w^b^m)+E[10]+3200236656&4294967295,g=w+(v<<23&4294967295|v>>>9),v=m+(g^w^b)+E[13]+681279174&4294967295,m=g+(v<<4&4294967295|v>>>28),v=b+(m^g^w)+E[0]+3936430074&4294967295,b=m+(v<<11&4294967295|v>>>21),v=w+(b^m^g)+E[3]+3572445317&4294967295,w=b+(v<<16&4294967295|v>>>16),v=g+(w^b^m)+E[6]+76029189&4294967295,g=w+(v<<23&4294967295|v>>>9),v=m+(g^w^b)+E[9]+3654602809&4294967295,m=g+(v<<4&4294967295|v>>>28),v=b+(m^g^w)+E[12]+3873151461&4294967295,b=m+(v<<11&4294967295|v>>>21),v=w+(b^m^g)+E[15]+530742520&4294967295,w=b+(v<<16&4294967295|v>>>16),v=g+(w^b^m)+E[2]+3299628645&4294967295,g=w+(v<<23&4294967295|v>>>9),v=m+(w^(g|~b))+E[0]+4096336452&4294967295,m=g+(v<<6&4294967295|v>>>26),v=b+(g^(m|~w))+E[7]+1126891415&4294967295,b=m+(v<<10&4294967295|v>>>22),v=w+(m^(b|~g))+E[14]+2878612391&4294967295,w=b+(v<<15&4294967295|v>>>17),v=g+(b^(w|~m))+E[5]+4237533241&4294967295,g=w+(v<<21&4294967295|v>>>11),v=m+(w^(g|~b))+E[12]+1700485571&4294967295,m=g+(v<<6&4294967295|v>>>26),v=b+(g^(m|~w))+E[3]+2399980690&4294967295,b=m+(v<<10&4294967295|v>>>22),v=w+(m^(b|~g))+E[10]+4293915773&4294967295,w=b+(v<<15&4294967295|v>>>17),v=g+(b^(w|~m))+E[1]+2240044497&4294967295,g=w+(v<<21&4294967295|v>>>11),v=m+(w^(g|~b))+E[8]+1873313359&4294967295,m=g+(v<<6&4294967295|v>>>26),v=b+(g^(m|~w))+E[15]+4264355552&4294967295,b=m+(v<<10&4294967295|v>>>22),v=w+(m^(b|~g))+E[6]+2734768916&4294967295,w=b+(v<<15&4294967295|v>>>17),v=g+(b^(w|~m))+E[13]+1309151649&4294967295,g=w+(v<<21&4294967295|v>>>11),v=m+(w^(g|~b))+E[4]+4149444226&4294967295,m=g+(v<<6&4294967295|v>>>26),v=b+(g^(m|~w))+E[11]+3174756917&4294967295,b=m+(v<<10&4294967295|v>>>22),v=w+(m^(b|~g))+E[2]+718787259&4294967295,w=b+(v<<15&4294967295|v>>>17),v=g+(b^(w|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,E=this.B,w=this.h,b=0;b<m;){if(w==0)for(;b<=g;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<m;)if(E[w++]=T.charCodeAt(b++),w==this.blockSize){i(this,E),w=0;break}}else for(;b<m;)if(E[w++]=T[b++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var E=0;32>E;E+=8)T[g++]=this.g[m]>>>E&255;return T};function s(T,m){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function a(T,m){this.h=m;for(var g=[],E=!0,w=T.length-1;0<=w;w--){var b=T[w]|0;E&&b==m||(g[w]=b,E=!1)}this.g=g}var l={};function c(T){return-128<=T&&128>T?s(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return _;if(0>T)return P(h(-T));for(var m=[],g=1,E=0;T>=g;E++)m[E]=T/g|0,g*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return P(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(m,8)),E=_,w=0;w<T.length;w+=8){var b=Math.min(8,T.length-w),v=parseInt(T.substring(w,w+b),m);8>b?(b=h(Math.pow(m,b)),E=E.j(b).add(h(v))):(E=E.j(g),E=E.add(h(v)))}return E}var _=c(0),y=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var E=this.i(g);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(k(this))return"-"+P(this).toString(T);for(var m=h(Math.pow(T,6)),g=this,E="";;){var w=F(g,m).g;g=x(g,w.j(m));var b=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=w,I(g))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=x(this,T),k(T)?-1:I(T)?0:1};function P(T){for(var m=T.g.length,g=[],E=0;E<m;E++)g[E]=~T.g[E];return new a(g,~T.h).add(y)}n.abs=function(){return k(this)?P(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0,w=0;w<=m;w++){var b=E+(this.i(w)&65535)+(T.i(w)&65535),v=(b>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=v>>>16,b&=65535,v&=65535,g[w]=v<<16|b}return new a(g,g[g.length-1]&-2147483648?-1:0)};function x(T,m){return T.add(P(m))}n.j=function(T){if(I(this)||I(T))return _;if(k(this))return k(T)?P(this).j(P(T)):P(P(this).j(T));if(k(T))return P(this.j(P(T)));if(0>this.l(A)&&0>T.l(A))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var b=this.i(E)>>>16,v=this.i(E)&65535,me=T.i(w)>>>16,Fe=T.i(w)&65535;g[2*E+2*w]+=v*Fe,D(g,2*E+2*w),g[2*E+2*w+1]+=b*Fe,D(g,2*E+2*w+1),g[2*E+2*w+1]+=v*me,D(g,2*E+2*w+1),g[2*E+2*w+2]+=b*me,D(g,2*E+2*w+2)}for(E=0;E<m;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=m;E<2*m;E++)g[E]=0;return new a(g,0)};function D(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function O(T,m){this.g=T,this.h=m}function F(T,m){if(I(m))throw Error("division by zero");if(I(T))return new O(_,_);if(k(T))return m=F(P(T),m),new O(P(m.g),P(m.h));if(k(m))return m=F(T,P(m)),new O(P(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var g=y,E=m;0>=E.l(T);)g=W(g),E=W(E);var w=G(g,1),b=G(E,1);for(E=G(E,2),g=G(g,2);!I(E);){var v=b.add(E);0>=v.l(T)&&(w=w.add(g),b=v),E=G(E,1),g=G(g,1)}return m=x(T,w.j(m)),new O(w,m)}for(w=_;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=h(g),v=b.j(m);k(v)||0<v.l(T);)g-=E,b=h(g),v=b.j(m);I(b)&&(b=y),w=w.add(b),T=x(T,v)}return new O(w,T)}n.A=function(T){return F(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)&T.i(E);return new a(g,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)|T.i(E);return new a(g,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)^T.i(E);return new a(g,this.h^T.h)};function W(T){for(var m=T.g.length+1,g=[],E=0;E<m;E++)g[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(g,T.h)}function G(T,m){var g=m>>5;m%=32;for(var E=T.g.length-g,w=[],b=0;b<E;b++)w[b]=0<m?T.i(b+g)>>>m|T.i(b+g+1)<<32-m:T.i(b+g);return new a(w,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Qt=a}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eh,nr,th,Ti,co,nh,rh,ih;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ai=="object"&&ai];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var N=d++;return{value:u(N,o[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function _(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function y(o,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,y.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function I(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,N){for(var M=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)M[ne-2]=arguments[ne];return u.prototype[S].apply(p,M)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function P(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,N=p.length||0;o.length=S+N;for(let M=0;M<N;M++)o[S+M]=p[M]}else o.push(p)}}class x{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(o){return/^[\s\xa0]*$/.test(o)}function O(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var W=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function G(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let N=0;N<g.length;N++)d=g[N],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function w(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Ge;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class me{constructor(){this.h=this.g=null}add(u,d){const p=Fe.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Fe=new x(()=>new an,o=>o.reset());class an{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,De=!1,Ge=new me,nt=()=>{const o=l.Promise.resolve(void 0);Ce=()=>{o.then(rt)}};var rt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var u=Fe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}De=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var Oe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Te(o,u){if(te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(W){e:{try{F(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:it[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Te.aa.h.call(this)}}I(Te,te);var it={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),fs=0;function bd(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++fs,this.da=this.fa=!1}function jr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Br(o){this.src=o,this.g={},this.h=0}Br.prototype.add=function(o,u,d,p,S){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var M=ms(o,u,p,S);return-1<M?(u=o[M],d||(u.fa=!1)):(u=new bd(u,this.src,N,!!p,S),u.fa=d,o.push(u)),u};function ps(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),N;(N=0<=S)&&Array.prototype.splice.call(p,S,1),N&&(jr(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ms(o,u,d,p){for(var S=0;S<o.length;++S){var N=o[S];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==p)return S}return-1}var gs="closure_lm_"+(1e6*Math.random()|0),_s={};function Ea(o,u,d,p,S){if(Array.isArray(u)){for(var N=0;N<u.length;N++)Ea(o,u[N],d,p,S);return null}return d=Ia(d),o&&o[Ke]?o.K(u,d,h(p)?!!p.capture:!!p,S):Sd(o,u,d,!1,p,S)}function Sd(o,u,d,p,S,N){if(!u)throw Error("Invalid event type");var M=h(S)?!!S.capture:!!S,ne=vs(o);if(ne||(o[gs]=ne=new Br(o)),d=ne.add(u,d,p,M,N),d.proxy)return d;if(p=Pd(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Oe||(S=M),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(wa(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pd(){function o(d){return u.call(o.src,o.listener,d)}const u=Cd;return o}function Ta(o,u,d,p,S){if(Array.isArray(u))for(var N=0;N<u.length;N++)Ta(o,u[N],d,p,S);else p=h(p)?!!p.capture:!!p,d=Ia(d),o&&o[Ke]?(o=o.i,u=String(u).toString(),u in o.g&&(N=o.g[u],d=ms(N,d,p,S),-1<d&&(jr(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete o.g[u],o.h--)))):o&&(o=vs(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ms(u,d,p,S)),(d=-1<o?u[o]:null)&&ys(d))}function ys(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ke])ps(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(wa(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=vs(u))?(ps(d,o),d.h==0&&(d.src=null,u[gs]=null)):jr(o)}}}function wa(o){return o in _s?_s[o]:_s[o]="on"+o}function Cd(o,u){if(o.da)o=!0;else{u=new Te(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&ys(o),o=d.call(p,u)}return o}function vs(o){return o=o[gs],o instanceof Br?o:null}var Es="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ia(o){return typeof o=="function"?o:(o[Es]||(o[Es]=function(u){return o.handleEvent(u)}),o[Es])}function we(){he.call(this),this.i=new Br(this),this.M=this,this.F=null}I(we,he),we.prototype[Ke]=!0,we.prototype.removeEventListener=function(o,u,d,p){Ta(this,o,u,d,p)};function ke(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new te(u,o);else if(u instanceof te)u.target=u.target||o;else{var S=u;u=new te(p,o),E(u,S)}if(S=!0,d)for(var N=d.length-1;0<=N;N--){var M=u.g=d[N];S=$r(M,p,!0,u)&&S}if(M=u.g=o,S=$r(M,p,!0,u)&&S,S=$r(M,p,!1,u)&&S,d)for(N=0;N<d.length;N++)M=u.g=d[N],S=$r(M,p,!1,u)&&S}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)jr(d[p]);delete o.g[u],o.h--}}this.F=null},we.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},we.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function $r(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,N=0;N<u.length;++N){var M=u[N];if(M&&!M.da&&M.capture==d){var ne=M.listener,_e=M.ha||M.src;M.fa&&ps(o.i,M),S=ne.call(_e,p)!==!1&&S}}return S&&!p.defaultPrevented}function Aa(o,u,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ra(o){o.g=Aa(()=>{o.g=null,o.i&&(o.i=!1,Ra(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class kd extends he{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ra(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(o){he.call(this),this.h=o,this.g={}}I(Ln,he);var ba=[];function Sa(o){G(o.g,function(u,d){this.g.hasOwnProperty(d)&&ys(u)},o),o.g={}}Ln.prototype.N=function(){Ln.aa.N.call(this),Sa(this)},Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ts=l.JSON.stringify,Nd=l.JSON.parse,xd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ws(){}ws.prototype.h=null;function Pa(o){return o.h||(o.h=o.i())}function Ca(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Is(){te.call(this,"d")}I(Is,te);function As(){te.call(this,"c")}I(As,te);var $t={},ka=null;function qr(){return ka=ka||new we}$t.La="serverreachability";function Na(o){te.call(this,$t.La,o)}I(Na,te);function Fn(o){const u=qr();ke(u,new Na(u))}$t.STAT_EVENT="statevent";function xa(o,u){te.call(this,$t.STAT_EVENT,o),this.stat=u}I(xa,te);function Ne(o){const u=qr();ke(u,new xa(u,o))}$t.Ma="timingevent";function Da(o,u){te.call(this,$t.Ma,o),this.size=u}I(Da,te);function Un(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function jn(){this.g=!0}jn.prototype.xa=function(){this.g=!1};function Dd(o,u,d,p,S,N){o.info(function(){if(o.g)if(N)for(var M="",ne=N.split("&"),_e=0;_e<ne.length;_e++){var X=ne[_e].split("=");if(1<X.length){var Ie=X[0];X=X[1];var Ae=Ie.split("_");M=2<=Ae.length&&Ae[1]=="type"?M+(Ie+"="+X+"&"):M+(Ie+"=redacted&")}}else M=null;else M=N;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+M})}function Vd(o,u,d,p,S,N,M){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+N+" "+M})}function ln(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ld(o,d)+(p?" "+p:"")})}function Od(o,u){o.info(function(){return"TIMEOUT: "+u})}jn.prototype.info=function(){};function Ld(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var N=S[0];if(N!="noop"&&N!="stop"&&N!="close")for(var M=1;M<S.length;M++)S[M]=""}}}}return Ts(d)}catch{return u}}var zr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Va={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rs;function Hr(){}I(Hr,ws),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},Rs=new Hr;function Et(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Ln(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oa}function Oa(){this.i=null,this.g="",this.h=!1}var La={},bs={};function Ss(o,u,d){o.L=1,o.v=Qr(st(u)),o.m=d,o.P=!0,Ma(o,null)}function Ma(o,u){o.F=Date.now(),Wr(o),o.A=st(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ya(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Oa,o.g=ml(o.j,d?u:null,!o.m),0<o.O&&(o.M=new kd(y(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(ba[0]=S.toString()),S=ba);for(var N=0;N<S.length;N++){var M=Ea(d,S[N],p||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Fn(),Dd(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const u=this.M;u&&ot(o)==3?u.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=ot(this.g);var u=this.g.Ba();const hn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||il(this.g)))){this.J||Ae!=4||u==7||(u==8||0>=hn?Fn(3):Fn(2)),Ps(this);var d=this.g.Z();this.X=d;t:if(Fa(this)){var p=il(this.g);o="";var S=p.length,N=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Bn(this);var M="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(N&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,Vd(this.i,this.u,this.A,this.l,this.R,Ae,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,_e=this.g;if((ne=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(ne)){var X=ne;break t}}X=null}if(d=X)ln(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,d);else{this.o=!1,this.s=3,Ne(12),qt(this),Bn(this);break e}}if(this.P){d=!0;let $e;for(;!this.J&&this.C<M.length;)if($e=Md(this,M),$e==bs){Ae==4&&(this.s=4,Ne(14),d=!1),ln(this.i,this.l,null,"[Incomplete Response]");break}else if($e==La){this.s=4,Ne(15),ln(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else ln(this.i,this.l,$e,null),Cs(this,$e);if(Fa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||M.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)ln(this.i,this.l,M,"[Invalid Chunked Response]"),qt(this),Bn(this);else if(0<M.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Os(Ie),Ie.M=!0,Ne(11))}}else ln(this.i,this.l,M,null),Cs(this,M);Ae==4&&qt(this),this.o&&!this.J&&(Ae==4?hl(this.j,this):(this.o=!1,Wr(this)))}else ef(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),qt(this),Bn(this)}}}catch{}finally{}};function Fa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Md(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?bs:(d=Number(u.substring(d,p)),isNaN(d)?La:(p+=1,p+d>u.length?bs:(u=u.slice(p,p+d),o.C=p+d,u)))}Et.prototype.cancel=function(){this.J=!0,qt(this)};function Wr(o){o.S=Date.now()+o.I,Ua(o,o.I)}function Ua(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Un(y(o.ba,o),u)}function Ps(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Od(this.i,this.A),this.L!=2&&(Fn(),Ne(17)),qt(this),this.s=2,Bn(this)):Ua(this,this.S-o)};function Bn(o){o.j.G==0||o.J||hl(o.j,o)}function qt(o){Ps(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Sa(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Cs(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ks(d.h,o))){if(!o.K&&ks(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ti(d),Zr(d);else break e;Vs(d),Ne(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Un(y(d.Za,d),6e3));if(1>=$a(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ht(d,11)}else if((o.K||d.g==o)&&ti(d),!D(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let X=S[u];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const Ie=X[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const Ae=X[4];Ae!=null&&(d.Aa=Ae,d.j.info("SVER="+d.Aa));const hn=X[5];hn!=null&&typeof hn=="number"&&0<hn&&(p=1.5*hn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const $e=o.g;if($e){const ri=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var N=p.h;N.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ns(N,N.h),N.h=null))}if(p.D){const Ls=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(p.ya=Ls,ie(p.I,p.D,Ls))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var M=o;if(p.qa=pl(p,p.J?p.ia:null,p.W),M.K){qa(p.h,M);var ne=M,_e=p.L;_e&&(ne.I=_e),ne.B&&(Ps(ne),Wr(ne)),p.g=M}else cl(p);0<d.i.length&&ei(d)}else X[0]!="stop"&&X[0]!="close"||Ht(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ht(d,7):Ds(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Fn(4)}catch{}}var Fd=class{constructor(o,u){this.g=o,this.map=u}};function ja(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ba(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function $a(o){return o.h?1:o.g?o.g.size:0}function ks(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ns(o,u){o.g?o.g.add(u):o.h=u}function qa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ja.prototype.cancel=function(){if(this.i=za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function za(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function Ud(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function jd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Ha(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=jd(o),p=Ud(o),S=p.length,N=0;N<S;N++)u.call(void 0,p[N],d&&d[N],o)}var Wa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bd(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var N=o[d].substring(0,p);S=o[d].substring(p+1)}else N=o[d];u(N,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function zt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof zt){this.h=o.h,Gr(this,o.j),this.o=o.o,this.g=o.g,Kr(this,o.s),this.l=o.l;var u=o.i,d=new zn;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ga(this,d),this.m=o.m}else o&&(u=String(o).match(Wa))?(this.h=!1,Gr(this,u[1]||"",!0),this.o=$n(u[2]||""),this.g=$n(u[3]||"",!0),Kr(this,u[4]),this.l=$n(u[5]||"",!0),Ga(this,u[6]||"",!0),this.m=$n(u[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}zt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(qn(u,Ka,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(qn(u,Ka,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(qn(d,d.charAt(0)=="/"?zd:qd,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",qn(d,Wd)),o.join("")};function st(o){return new zt(o)}function Gr(o,u,d){o.j=d?$n(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Kr(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ga(o,u,d){u instanceof zn?(o.i=u,Gd(o.i,o.h)):(d||(u=qn(u,Hd)),o.i=new zn(u,o.h))}function ie(o,u,d){o.i.set(u,d)}function Qr(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $n(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qn(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,$d),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $d(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ka=/[#\/\?@]/g,qd=/[#\?:]/g,zd=/[#\?]/g,Hd=/[#\?@]/g,Wd=/#/g;function zn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tt(o){o.g||(o.g=new Map,o.h=0,o.i&&Bd(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=zn.prototype,n.add=function(o,u){Tt(this),this.i=null,o=cn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Qa(o,u){Tt(o),u=cn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ja(o,u){return Tt(o),u=cn(o,u),o.g.has(u)}n.forEach=function(o,u){Tt(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},n.na=function(){Tt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let N=0;N<S.length;N++)d.push(u[p])}return d},n.V=function(o){Tt(this);let u=[];if(typeof o=="string")Ja(this,o)&&(u=u.concat(this.g.get(cn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Tt(this),this.i=null,o=cn(this,o),Ja(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ya(o,u,d){Qa(o,u),0<d.length&&(o.i=null,o.g.set(cn(o,u),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const N=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var S=N;M[p]!==""&&(S+="="+encodeURIComponent(String(M[p]))),o.push(S)}}return this.i=o.join("&")};function cn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Gd(o,u){u&&!o.j&&(Tt(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(Qa(this,p),Ya(this,S,d))},o)),o.j=u}function Kd(o,u){const d=new jn;if(l.Image){const p=new Image;p.onload=A(wt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=A(wt,d,"TestLoadImage: error",!1,u,p),p.onabort=A(wt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(wt,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Qd(o,u){const d=new jn,p=new AbortController,S=setTimeout(()=>{p.abort(),wt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(S),N.ok?wt(d,"TestPingServer: ok",!0,u):wt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),wt(d,"TestPingServer: error",!1,u)})}function wt(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function Jd(){this.g=new xd}function Yd(o,u,d){const p=d||"";try{Ha(o,function(S,N){let M=S;h(S)&&(M=Ts(S)),u.push(p+N+"="+encodeURIComponent(M))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Jr(o){this.l=o.Ub||null,this.j=o.eb||!1}I(Jr,ws),Jr.prototype.g=function(){return new Yr(this.l,this.j)},Jr.prototype.i=function(o){return function(){return o}}({});function Yr(o,u){we.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Yr,we),n=Yr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Wn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Hn(this):Wn(this),this.readyState==3&&Xa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Qa=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Wn(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Wn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Za(o){let u="";return G(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function xs(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Za(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,u,d))}function ae(o){we.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ae,we);var Xd=/^https?$/i,Zd=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rs.g(),this.v=this.o?Pa(this.o):Pa(Rs),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){el(this,N);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zd,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,M]of d)this.g.setRequestHeader(N,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rl(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){el(this,N)}};function el(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,tl(o),Xr(o)}function tl(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ke(this,"complete"),ke(this,"abort"),Xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},n.bb=function(){nl(this)};function nl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ot(o)!=4||o.Z()!=2)){if(o.u&&ot(o)==4)Aa(o.Ea,0,o);else if(ke(o,"readystatechange"),ot(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=M===0){var S=String(o.D).match(Wa)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Xd.test(S?S.toLowerCase():"")}d=p}if(d)ke(o,"complete"),ke(o,"success");else{o.m=6;try{var N=2<ot(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",tl(o)}}finally{Xr(o)}}}}function Xr(o,u){if(o.g){rl(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ke(o,"ready");try{d.onreadystatechange=p}catch{}}}function rl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ot(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Nd(u)}};function il(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ef(o){const u={};o=(o.g&&2<=ot(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(D(o[p]))continue;var d=w(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[S]||[];u[S]=N,N.push(d)}T(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function sl(o){this.Aa=0,this.i=[],this.j=new jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,o),this.cb=Gn("retryDelaySeedMs",1e4,o),this.Wa=Gn("forwardChannelMaxRetries",2,o),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ja(o&&o.concurrentRequestLimit),this.Da=new Jd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sl.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){Ne(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=pl(this,null,this.W),ei(this)};function Ds(o){if(ol(o),o.G==3){var u=o.U++,d=st(o.I);if(ie(d,"SID",o.K),ie(d,"RID",u),ie(d,"TYPE","terminate"),Kn(o,d),u=new Et(o,o.j,u),u.L=2,u.v=Qr(st(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ml(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Wr(u)}fl(o)}function Zr(o){o.g&&(Os(o),o.g.cancel(),o.g=null)}function ol(o){Zr(o),o.u&&(l.clearTimeout(o.u),o.u=null),ti(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ei(o){if(!Ba(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ce||nt(),De||(Ce(),De=!0),Ge.add(u,o),o.B=0}}function tf(o,u){return $a(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Un(y(o.Ga,o,u),dl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Et(this,this.j,o);let N=this.o;if(this.S&&(N?(N=m(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(S.H=N,N=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ll(this,S,u),d=st(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),Kn(this,d),N&&(this.O?u="headers="+encodeURIComponent(String(Za(N)))+"&"+u:this.m&&xs(d,this.m,N)),Ns(this.h,S),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",u),ie(d,"SID","null"),S.T=!0,Ss(S,d,null)):Ss(S,d,u),this.G=2}}else this.G==3&&(o?al(this,o):this.i.length==0||Ba(this.h)||al(this))};function al(o,u){var d;u?d=u.l:d=o.U++;const p=st(o.I);ie(p,"SID",o.K),ie(p,"RID",d),ie(p,"AID",o.T),Kn(o,p),o.m&&o.o&&xs(p,o.m,o.o),d=new Et(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ll(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ns(o.h,d),Ss(d,p,u)}function Kn(o,u){o.H&&G(o.H,function(d,p){ie(u,p,d)}),o.l&&Ha({},function(d,p){ie(u,p,d)})}function ll(o,u,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let N=-1;for(;;){const M=["count="+d];N==-1?0<d?(N=S[0].g,M.push("ofs="+N)):N=0:M.push("ofs="+N);let ne=!0;for(let _e=0;_e<d;_e++){let X=S[_e].g;const Ie=S[_e].map;if(X-=N,0>X)N=Math.max(0,S[_e].g-100),ne=!1;else try{Yd(Ie,M,"req"+X+"_")}catch{p&&p(Ie)}}if(ne){p=M.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function cl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ce||nt(),De||(Ce(),De=!0),Ge.add(u,o),o.v=0}}function Vs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Un(y(o.Fa,o),dl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Un(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Zr(this),ul(this))};function Os(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ul(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=st(o.qa);ie(u,"RID","rpc"),ie(u,"SID",o.K),ie(u,"AID",o.T),ie(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(u,"TO",o.ja),ie(u,"TYPE","xmlhttp"),Kn(o,u),o.m&&o.o&&xs(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Qr(st(u)),d.m=null,d.P=!0,Ma(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Zr(this),Vs(this),Ne(19))};function ti(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function hl(o,u){var d=null;if(o.g==u){ti(o),Os(o),o.g=null;var p=2}else if(ks(o.h,u))d=u.D,qa(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=qr(),ke(p,new Da(p,d)),ei(o)}else cl(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&tf(o,u)||p==2&&Vs(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:Ht(o,5);break;case 4:Ht(o,10);break;case 3:Ht(o,6);break;default:Ht(o,2)}}}function dl(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Ht(o,u){if(o.j.info("Error code "+u),u==2){var d=y(o.fb,o),p=o.Xa;const S=!p;p=new zt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Gr(p,"https"),Qr(p),S?Kd(p.toString(),d):Qd(p.toString(),d)}else Ne(2);o.G=0,o.l&&o.l.sa(u),fl(o),ol(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function fl(o){if(o.G=0,o.ka=[],o.l){const u=za(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function pl(o,u,d){var p=d instanceof zt?st(d):new zt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Kr(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var N=new zt(null);p&&Gr(N,p),u&&(N.g=u),S&&Kr(N,S),d&&(N.l=d),p=N}return d=o.D,u=o.ya,d&&u&&ie(p,d,u),ie(p,"VER",o.la),Kn(o,p),p}function ml(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ae(new Jr({eb:d})):new ae(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gl(){}n=gl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ni(){}ni.prototype.g=function(o,u){return new Le(o,u)};function Le(o,u){we.call(this),this.g=new sl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!D(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new un(this)}I(Le,we),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Ds(this.g)},Le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ts(o),o=d);u.i.push(new Fd(u.Ya++,o)),u.G==3&&ei(u)},Le.prototype.N=function(){this.g.l=null,delete this.j,Ds(this.g),delete this.g,Le.aa.N.call(this)};function _l(o){Is.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}I(_l,Is);function yl(){As.call(this),this.status=1}I(yl,As);function un(o){this.g=o}I(un,gl),un.prototype.ua=function(){ke(this.g,"a")},un.prototype.ta=function(o){ke(this.g,new _l(o))},un.prototype.sa=function(o){ke(this.g,new yl)},un.prototype.ra=function(){ke(this.g,"b")},ni.prototype.createWebChannel=ni.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,ih=function(){return new ni},rh=function(){return qr()},nh=$t,co={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,Ti=zr,Va.COMPLETE="complete",th=Va,Ca.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",we.prototype.listen=we.prototype.K,nr=Ca,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,eh=ae}).apply(typeof ai<"u"?ai:typeof self<"u"?self:typeof window<"u"?window:{});const ic="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new No("@firebase/firestore");function dn(){return en.logLevel}function U(n,...e){if(en.logLevel<=K.DEBUG){const t=e.map(Ho);en.debug(`Firestore (${xn}): ${n}`,...t)}}function gt(n,...e){if(en.logLevel<=K.ERROR){const t=e.map(Ho);en.error(`Firestore (${xn}): ${n}`,...t)}}function Tn(n,...e){if(en.logLevel<=K.WARN){const t=e.map(Ho);en.warn(`Firestore (${xn}): ${n}`,...t)}}function Ho(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const e=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+n;throw gt(e),new Error(e)}function ee(n,e){n||q()}function H(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ny{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class xy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dy{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new sh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new be(e)}}class Vy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Oy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Vy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new Ly(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Fy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function wn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new fe(0,0))}static max(){return new z(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends mr{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Uy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends mr{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return Uy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(le.fromString(e))}static fromName(e){return new B(le.fromString(e).popFirst(5))}static empty(){return new B(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new le(e.slice()))}}function jy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Vt(i,B.empty(),e)}function By(n){return new Vt(n.readTime,n.key,-1)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt(z.min(),B.empty(),-1)}static max(){return new Vt(z.max(),B.empty(),-1)}}function $y(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==qy)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Hy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zi.oe=-1;function es(n){return n==null}function Li(n){return n===0&&1/n==-1/0}function Wy(n){return typeof n=="number"&&Number.isInteger(n)&&!Li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sc(e)),e=Ky(n.get(t),e);return sc(e)}function Ky(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function sc(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ah(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new li(this.root,e,this.comparator,!1)}getReverseIterator(){return new li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new li(this.root,e,this.comparator,!0)}}class li{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ye.RED,this.left=i??ye.EMPTY,this.right=s??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ye(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ac(this.data.getIterator())}getIteratorFrom(e){return new ac(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class ac{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new ze([])}unionWith(e){let t=new pe(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lh("Invalid base64 string: "+s):s}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Qy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Qy.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ts(n){const e=n.mapValue.fields.__previous_value__;return Wo(e)?ts(e):e}function gr(n){const e=Ot(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,r,i,s,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class _r{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wo(n)?4:Xy(n)?9007199254740991:Yy(n)?10:11:q()}function Ze(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ot(i.timestampValue),l=Ot(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Lt(i.bytesValue).isEqual(Lt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ce(i.doubleValue),l=ce(s.doubleValue);return a===l?Li(a)===Li(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return wn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(oc(a)!==oc(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ze(a[c],l[c])))return!1;return!0}(n,e);default:return q()}}function yr(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function In(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ce(s.integerValue||s.doubleValue),c=ce(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return lc(n.timestampValue,e.timestampValue);case 4:return lc(gr(n),gr(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Lt(s),c=Lt(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=J(l[h],c[h]);if(f!==0)return f}return J(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=J(ce(s.latitude),ce(a.latitude));return l!==0?l:J(ce(s.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return cc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,c,h,f;const _=s.fields||{},y=a.fields||{},A=(l=_.value)===null||l===void 0?void 0:l.arrayValue,I=(c=y.value)===null||c===void 0?void 0:c.arrayValue,k=J(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:cc(A,I)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===ci.mapValue&&a===ci.mapValue)return 0;if(s===ci.mapValue)return 1;if(a===ci.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let _=0;_<c.length&&_<f.length;++_){const y=J(c[_],f[_]);if(y!==0)return y;const A=In(l[c[_]],h[f[_]]);if(A!==0)return A}return J(c.length,f.length)}(n.mapValue,e.mapValue);default:throw q()}}function lc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Ot(n),r=Ot(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function cc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=In(t[i],r[i]);if(s)return s}return J(t.length,r.length)}function An(n){return uo(n)}function uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ot(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Lt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=uo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${uo(t.fields[a])}`;return i+"}"}(n.mapValue):q()}function wi(n){switch(Mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ts(n);return e?16+wi(e):16;case 5:return 2*n.stringValue.length;case 6:return Lt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+wi(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return nn(r.fields,(s,a)=>{i+=s.length+wi(a)}),i}(n.mapValue);default:throw q()}}function ho(n){return!!n&&"integerValue"in n}function Go(n){return!!n&&"arrayValue"in n}function uc(n){return!!n&&"nullValue"in n}function hc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ii(n){return!!n&&"mapValue"in n}function Yy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return nn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ii(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(t)}setAll(e){let t=ve.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=or(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ii(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ii(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){nn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ue(or(this.value))}}function ch(n){const e=[];return nn(n.fields,(t,r)=>{const i=new ve([t]);if(Ii(r)){const s=ch(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Se(e,0,z.min(),z.min(),z.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,i){return new Se(e,1,t,z.min(),r,i,0)}static newNoDocument(e,t){return new Se(e,2,t,z.min(),z.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,z.min(),z.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.position=e,this.inclusive=t}}function dc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=In(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{}class de extends uh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tv(e,t,r):t==="array-contains"?new iv(e,r):t==="in"?new sv(e,r):t==="not-in"?new ov(e,r):t==="array-contains-any"?new av(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nv(e,r):new rv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(In(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends uh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new et(e,t)}matches(e){return hh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hh(n){return n.op==="and"}function dh(n){return ev(n)&&hh(n)}function ev(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function fo(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+An(n.value);if(dh(n))return n.filters.map(e=>fo(e)).join(",");{const e=n.filters.map(t=>fo(t)).join(",");return`${n.op}(${e})`}}function fh(n,e){return n instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.field.isEqual(i.field)&&Ze(r.value,i.value)}(n,e):n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&fh(a,i.filters[l]),!0):!1}(n,e):void q()}function ph(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${An(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(ph).join(" ,")+"}"}(n):"Filter"}class tv extends de{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class nv extends de{constructor(e,t){super(e,"in",t),this.keys=mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rv extends de{constructor(e,t){super(e,"not-in",t),this.keys=mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class iv extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Go(t)&&yr(t.arrayValue,this.value)}}class sv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yr(this.value.arrayValue,t)}}class ov extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yr(this.value.arrayValue,t)}}class av extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Go(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function pc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new lv(n,e,t,r,i,s,a)}function Ko(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>An(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>An(r)).join(",")),e.ue=t}return e.ue}function Qo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fc(n.startAt,e.startAt)&&fc(n.endAt,e.endAt)}function po(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cv(n,e,t,r,i,s,a,l){return new ns(n,e,t,r,i,s,a,l)}function Jo(n){return new ns(n)}function mc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uv(n){return n.collectionGroup!==null}function ar(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new pe(ve.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Fi(s,r))}),t.has(ve.keyField().canonicalString())||e.ce.push(new Fi(ve.keyField(),r))}return e.ce}function Je(n){const e=H(n);return e.le||(e.le=hv(e,ar(n))),e.le}function hv(n,e){if(n.limitType==="F")return pc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fi(i.field,s)});const t=n.endAt?new Mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mi(n.startAt.position,n.startAt.inclusive):null;return pc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function mo(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rs(n,e){return Qo(Je(n),Je(e))&&n.limitType===e.limitType}function gh(n){return`${Ko(Je(n))}|lt:${n.limitType}`}function fn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ph(i)).join(", ")}]`),es(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>An(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>An(i)).join(",")),`Target(${r})`}(Je(n))}; limitType=${n.limitType})`}function is(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ar(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=dc(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ar(r),i)||r.endAt&&!function(a,l,c){const h=dc(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ar(r),i))}(n,e)}function dv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _h(n){return(e,t)=>{let r=!1;for(const i of ar(n)){const s=fv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fv(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?In(c,h):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new oe(B.comparator);function _t(){return pv}const yh=new oe(B.comparator);function rr(...n){let e=yh;for(const t of n)e=e.insert(t.key,t);return e}function vh(n){let e=yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Kt(){return lr()}function Eh(){return lr()}function lr(){return new rn(n=>n.toString(),(n,e)=>n.isEqual(e))}const mv=new oe(B.comparator),gv=new pe(B.comparator);function Q(...n){let e=gv;for(const t of n)e=e.add(t);return e}const _v=new pe(J);function yv(){return _v}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function Th(n){return{integerValue:""+n}}function vv(n,e){return Wy(e)?Th(e):Yo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this._=void 0}}function Ev(n,e,t){return n instanceof Ui?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wo(s)&&(s=ts(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof vr?Ih(n,e):n instanceof Er?Ah(n,e):function(i,s){const a=wh(i,s),l=gc(a)+gc(i.Pe);return ho(a)&&ho(i.Pe)?Th(l):Yo(i.serializer,l)}(n,e)}function Tv(n,e,t){return n instanceof vr?Ih(n,e):n instanceof Er?Ah(n,e):t}function wh(n,e){return n instanceof ji?function(r){return ho(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ui extends ss{}class vr extends ss{constructor(e){super(),this.elements=e}}function Ih(n,e){const t=Rh(e);for(const r of n.elements)t.some(i=>Ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class Er extends ss{constructor(e){super(),this.elements=e}}function Ah(n,e){let t=Rh(e);for(const r of n.elements)t=t.filter(i=>!Ze(i,r));return{arrayValue:{values:t}}}class ji extends ss{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function gc(n){return ce(n.integerValue||n.doubleValue)}function Rh(n){return Go(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof vr&&i instanceof vr||r instanceof Er&&i instanceof Er?wn(r.elements,i.elements,Ze):r instanceof ji&&i instanceof ji?Ze(r.Pe,i.Pe):r instanceof Ui&&i instanceof Ui}(n.transform,e.transform)}class Iv{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ai(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class os{}function bh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ph(n.key,ft.none()):new Lr(n.key,n.data,ft.none());{const t=n.data,r=Ue.empty();let i=new pe(ve.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new sn(n.key,r,new ze(i.toArray()),ft.none())}}function Av(n,e,t){n instanceof Lr?function(i,s,a){const l=i.value.clone(),c=yc(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof sn?function(i,s,a){if(!Ai(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=yc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Sh(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function cr(n,e,t,r){return n instanceof Lr?function(s,a,l,c){if(!Ai(s.precondition,a))return l;const h=s.value.clone(),f=vc(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof sn?function(s,a,l,c){if(!Ai(s.precondition,a))return l;const h=vc(s.fieldTransforms,c,a),f=a.data;return f.setAll(Sh(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(s,a,l){return Ai(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Rv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=wh(r.transform,i||null);s!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,s))}return t||null}function _c(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wn(r,i,(s,a)=>wv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Lr extends os{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sn extends os{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function yc(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Tv(a,l,t[i]))}return r}function vc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Ev(s,a,e))}return r}class Ph extends os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bv extends os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Av(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Eh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=bh(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(t,r)=>_c(t,r))&&wn(this.baseMutations,e.baseMutations,(t,r)=>_c(t,r))}}class Xo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return mv}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Xo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Y;function kv(n){switch(n){default:return q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Ch(n){if(n===void 0)return gt("GRPC error has no .code"),L.UNKNOWN;switch(n){case ue.OK:return L.OK;case ue.CANCELLED:return L.CANCELLED;case ue.UNKNOWN:return L.UNKNOWN;case ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ue.INTERNAL:return L.INTERNAL;case ue.UNAVAILABLE:return L.UNAVAILABLE;case ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ue.NOT_FOUND:return L.NOT_FOUND;case ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ue.ABORTED:return L.ABORTED;case ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ue.DATA_LOSS:return L.DATA_LOSS;default:return q()}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Qt([4294967295,4294967295],0);function Ec(n){const e=Nv().encode(n),t=new Zu;return t.update(e),new Uint8Array(t.digest())}function Tc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qt([t,r],0),new Qt([i,s],0)]}class Zo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ir(`Invalid padding: ${t}`);if(r<0)throw new ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ir(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Qt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Qt.fromNumber(r)));return i.compare(xv)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ec(e),[r,i]=Tc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Zo(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const t=Ec(e),[r,i]=Tc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Mr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new as(z.min(),i,new oe(J),_t(),Q())}}class Mr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mr(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class kh{constructor(e,t){this.targetId=e,this.me=t}}class Nh{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class wc{constructor(){this.fe=0,this.ge=Ic(),this.pe=Ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Mr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ic()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dv{constructor(e){this.Le=e,this.Be=new Map,this.ke=_t(),this.qe=ui(),this.Qe=ui(),this.Ke=new oe(J)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(po(s))if(r===0){const a=new B(s.path);this.We(t,a,Se.newNoDocument(a,z.min()))}else ee(r===1);else{const a=this.Ze(t);if(a!==r){const l=this.Xe(e),c=l?this.et(l,e,a):1;if(c!==0){this.He(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Lt(r).toUint8Array()}catch(c){if(c instanceof lh)return Tn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Zo(a,i,s)}catch(c){return Tn(c instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Ye(a);if(l){if(s.current&&po(l.target)){const c=new B(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,Se.newNoDocument(c,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=Q();this.Qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new as(e,t,this.Ke,this.ke,r);return this.ke=_t(),this.qe=ui(),this.Qe=ui(),this.Ke=new oe(J),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new wc,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pe(J),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(J),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new wc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ui(){return new oe(B.comparator)}function Ic(){return new oe(B.comparator)}const Vv={asc:"ASCENDING",desc:"DESCENDING"},Ov={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lv={and:"AND",or:"OR"};class Mv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function go(n,e){return n.useProto3Json||es(e)?e:{value:e}}function Bi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Fv(n,e){return Bi(n,e.toTimestamp())}function Ye(n){return ee(!!n),z.fromTimestamp(function(t){const r=Ot(t);return new fe(r.seconds,r.nanos)}(n))}function ea(n,e){return _o(n,e).canonicalString()}function _o(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dh(n){const e=le.fromString(n);return ee(Fh(e)),e}function yo(n,e){return ea(n.databaseId,e.path)}function Gs(n,e){const t=Dh(e);if(t.get(1)!==n.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Oh(t))}function Vh(n,e){return ea(n.databaseId,e)}function Uv(n){const e=Dh(n);return e.length===4?le.emptyPath():Oh(e)}function vo(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Oh(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ac(n,e,t){return{name:yo(n,e),fields:t.value.mapValue.fields}}function jv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ee(f===void 0||typeof f=="string"),Ee.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ee.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?L.UNKNOWN:Ch(h.code);return new j(f,h.message||"")}(a);t=new Nh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gs(n,r.document.name),s=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):z.min(),l=new Ue({mapValue:{fields:r.document.fields}}),c=Se.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ri(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gs(n,r.document),s=r.readTime?Ye(r.readTime):z.min(),a=Se.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ri([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gs(n,r.document),s=r.removedTargetIds||[];t=new Ri([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Cv(i,s),l=r.targetId;t=new kh(l,a)}}return t}function Bv(n,e){let t;if(e instanceof Lr)t={update:Ac(n,e.key,e.value)};else if(e instanceof Ph)t={delete:yo(n,e.key)};else if(e instanceof sn)t={update:Ac(n,e.key,e.data),updateMask:Jv(e.fieldMask)};else{if(!(e instanceof bv))return q();t={verify:yo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ji)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Fv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,e.precondition)),t}function $v(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Ye(i.updateTime):Ye(s);return a.isEqual(z.min())&&(a=Ye(s)),new Iv(a,i.transformResults||[])}(t,e))):[]}function qv(n,e){return{documents:[Vh(n,e.path)]}}function zv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Vh(n,i);const s=function(h){if(h.length!==0)return Mh(et.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:pn(y.field),direction:Gv(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=go(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:t,parent:i}}function Hv(n){let e=Uv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(_){const y=Lh(_);return y instanceof et&&dh(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(y=>function(I){return new Fi(mn(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(_){let y;return y=typeof _=="object"?_.value:_,es(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(_){const y=!!_.before,A=_.values||[];return new Mi(A,y)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const y=!_.before,A=_.values||[];return new Mi(A,y)}(t.endAt)),cv(e,i,a,s,l,"F",c,h)}function Wv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=mn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mn(t.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mn(t.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return de.create(mn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(r=>Lh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function Gv(n){return Vv[n]}function Kv(n){return Ov[n]}function Qv(n){return Lv[n]}function pn(n){return{fieldPath:n.canonicalString()}}function mn(n){return ve.fromServerFormat(n.fieldPath)}function Mh(n){return n instanceof de?function(t){if(t.op==="=="){if(hc(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NAN"}};if(uc(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hc(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NOT_NAN"}};if(uc(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(t.field),op:Kv(t.op),value:t.value}}}(n):n instanceof et?function(t){const r=t.getFilters().map(i=>Mh(i));return r.length===1?r[0]:{compositeFilter:{op:Qv(t.op),filters:r}}}(n):q()}function Jv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,r,i,s=z.min(),a=z.min(),l=Ee.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.ht=e}}function Xv(n){const e=Hv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.ln=new eE}addToCollectionParentIndex(e,t){return this.ln.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Vt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class eE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(le.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(41943040,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Rn(0)}static Qn(){return new Rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc([n,e],[t,r]){const i=J(n,t);return i===0?J(e,r):i}class tE{constructor(e){this.Gn=e,this.buffer=new pe(bc),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vn(t)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Dn(t)}await this.Yn(3e5)})}}class rE{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Zi.oe);const r=new tE(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Rc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rc):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,l=Date.now(),this.removeTargets(e,r,t))).next(_=>(s=_,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(h=Date.now(),dn()<=K.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${_} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_})))}}function iE(n,e){return new rE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.changes=new rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&cr(r.mutation,i,ze.empty(),fe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=Kt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=rr();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Kt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=_t();const a=lr(),l=function(){return lr()}();return t.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof sn)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),cr(f.mutation,h,f.mutation.getFieldMask(),fe.now())):a.set(h.key,ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return l.set(h,new oE(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const r=lr();let i=new oe((a,l)=>a-l),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||ze.empty();f=l.applyToLocalView(h,f),r.set(c,f);const _=(i.get(l.batchId)||Q()).add(c);i=i.insert(l.batchId,_)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,_=Eh();f.forEach(y=>{if(!s.has(y)){const A=bh(t.get(y),r.get(y));A!==null&&_.set(y,A),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(Kt());let l=-1,c=s;return a.next(h=>V.forEach(h,(f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Q())).next(f=>({batchId:l,changes:vh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=rr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=rr();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,c=>{const h=function(_,y){return new ns(y,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((_,y)=>{a=a.insert(_,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Se.newInvalidDocument(f)))});let l=rr();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&cr(f.mutation,h,ze.empty(),fe.now()),is(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return V.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ye(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Xv(i.bundledQuery),readTime:Ye(i.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.overlays=new oe(B.comparator),this.Er=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Kt();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=Kt(),s=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new oe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Kt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Kt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Pv(t,r));let s=this.Er.get(t);s===void 0&&(s=Q(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.dr=new pe(ge.Ar),this.Rr=new pe(ge.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ge(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new B(new le([])),r=new ge(t,e),i=new ge(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new B(new le([])),r=new ge(t,e),i=new ge(t,e+1);let s=Q();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ge(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return B.comparator(e.key,t.key)||J(e.br,t.br)}static Vr(e,t){return J(e.br,t.br)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pe(ge.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sv(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.vr=this.vr.add(new ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const l=this.Cr(a.br);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(J);return t.forEach(i=>{const s=new ge(i,0),a=new ge(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],l=>{r=r.add(l.br)})}),V.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const a=new ge(new B(s),0);let l=new pe(J);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.br)),!0)},a),V.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return V.forEach(t.mutations,i=>{const s=new ge(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new ge(t,0),i=this.vr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.Nr=e,this.docs=function(){return new oe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let r=_t();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Se.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=_t();const a=t.path,l=new B(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||$y(By(f),r)<=0||(i.has(f.key)||is(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){q()}Lr(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new fE(this)}getSize(e){return V.resolve(this.size)}}class fE extends sE{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.persistence=e,this.Br=new rn(t=>Ko(t),Qo),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.kr=0,this.qr=new ta,this.targetCount=0,this.Qr=Rn.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),V.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Rn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Un(t),V.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Zi(0),this.Ur=!1,this.Ur=!0,this.Wr=new uE,this.referenceDelegate=e(this),this.Gr=new pE(this),this.indexManager=new Zv,this.remoteDocumentCache=function(i){return new dE(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Yv(t),this.jr=new lE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new hE(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new mE(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return V.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class mE extends zy{constructor(e){super(),this.currentSequenceNumber=e}}class na{constructor(e){this.persistence=e,this.Zr=new ta,this.Xr=null}static ei(e){return new na(e)}get ti(){if(this.Xr)return this.Xr;throw q()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),V.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,r=>{const i=B.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return V.or([()=>V.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class $i{constructor(e,t){this.persistence=e,this.ri=new rn(r=>Gy(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=iE(this,t)}static ei(e,t){return new $i(e,t)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return V.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(l=>{l||(r++,s.removeEntry(a,z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),V.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wi(e.data.value)),t}ir(e,t,r){return V.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=Q(),i=Q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ra(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Zp()?8:Hy(Pe())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new gE;return this.ts(e,t,a).next(l=>{if(s.result=l,this.Hi)return this.ns(e,t,a,l.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(dn()<=K.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(dn()<=K.DEBUG&&U("QueryEngine","Query:",fn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(dn()<=K.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):V.resolve())}Xi(e,t){if(mc(t))return V.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=mo(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Q(...s);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(t,l);return this.ss(t,h,a,c.readTime)?this.Xi(e,mo(t,null,"F")):this.os(e,h,t,c)}))})))}es(e,t,r,i){return mc(t)||i.isEqual(z.min())?V.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(t,s);return this.ss(t,a,r,i)?V.resolve(null):(dn()<=K.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fn(t)),this.os(e,a,t,jy(i,-1)).next(l=>l))})}rs(e,t){let r=new pe(_h(e));return t.forEach((i,s)=>{is(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return dn()<=K.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",fn(t)),this.Zi.getDocumentsMatchingQuery(e,t,Vt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new oe(J),this.cs=new rn(s=>Ko(s),Qo),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aE(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function vE(n,e,t,r){return new yE(n,e,t,r)}async function jh(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=Q();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:l}))})})}function EE(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const _=h.batch,y=_.keys();let A=V.resolve();return y.forEach(I=>{A=A.next(()=>f.getEntry(c,I)).next(k=>{const P=h.docVersions.get(I);ee(P!==null),k.version.compareTo(P)<0&&(_.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,_))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Q();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Bh(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function TE(n,e){const t=H(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const l=[];e.targetChanges.forEach((f,_)=>{const y=i.get(_);if(!y)return;l.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,_).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,_)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?A=A.withResumeToken(Ee.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(_,A),function(k,P,x){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(y,A,f)&&l.push(t.Gr.updateTargetData(s,A))});let c=_t(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(wE(s,a,e.documentUpdates).next(f=>{c=f.Is,h=f.Es})),!r.isEqual(z.min())){const f=t.Gr.getLastRemoteSnapshotVersion(s).next(_=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.us=i,s))}function wE(n,e,t){let r=Q(),i=Q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=_t();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:a,Es:i}})}function IE(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AE(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new St(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Eo(n,e,t){const r=H(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Vn(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Sc(n,e,t){const r=H(n);let i=z.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const _=H(c),y=_.cs.get(f);return y!==void 0?V.resolve(_.us.get(y)):_.Gr.getTargetData(h,f)}(r,a,Je(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:z.min(),t?s:Q())).next(l=>(RE(r,dv(e),l),{documents:l,ds:s})))}function RE(n,e,t){let r=n.ls.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}class Pc{constructor(){this.activeTargetIds=yv()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bE{constructor(){this._o=new Pc,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi=null;function Ks(){return hi===null?hi=function(){return 268435456+Math.round(2147483648*Math.random())}():hi++,"0x"+hi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class kE extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){const l=Ks(),c=this.No(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,s,a),this.Bo(t,c,h,i).then(f=>(U("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Tn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}ko(t,r,i,s,a,l){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){const i=PE[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const s=Ks();return new Promise((a,l)=>{const c=new eh;c.setWithCredentials(!0),c.listenOnce(th.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ti.NO_ERROR:const f=c.getResponseJson();U(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Ti.TIMEOUT:U(Re,`RPC '${e}' ${s} timed out`),l(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ti.HTTP_ERROR:const _=c.getStatus();if(U(Re,`RPC '${e}' ${s} failed with status:`,_,"response text:",c.getResponseText()),_>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const I=function(P){const x=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN}(A.status);l(new j(I,A.message))}else l(new j(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new j(L.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{U(Re,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);U(Re,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}qo(e,t,r){const i=Ks(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ih(),l=rh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");U(Re,`Creating RPC '${e}' stream ${i}: ${f}`,c);const _=a.createWebChannel(f,c);let y=!1,A=!1;const I=new CE({Eo:P=>{A?U(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(y||(U(Re,`Opening RPC '${e}' stream ${i} transport.`),_.open(),y=!0),U(Re,`RPC '${e}' stream ${i} sending:`,P),_.send(P))},Ao:()=>_.close()}),k=(P,x,D)=>{P.listen(x,O=>{try{D(O)}catch(F){setTimeout(()=>{throw F},0)}})};return k(_,nr.EventType.OPEN,()=>{A||(U(Re,`RPC '${e}' stream ${i} transport opened.`),I.So())}),k(_,nr.EventType.CLOSE,()=>{A||(A=!0,U(Re,`RPC '${e}' stream ${i} transport closed`),I.Do())}),k(_,nr.EventType.ERROR,P=>{A||(A=!0,Tn(Re,`RPC '${e}' stream ${i} transport errored:`,P),I.Do(new j(L.UNAVAILABLE,"The operation could not be completed")))}),k(_,nr.EventType.MESSAGE,P=>{var x;if(!A){const D=P.data[0];ee(!!D);const O=D,F=(O==null?void 0:O.error)||((x=O[0])===null||x===void 0?void 0:x.error);if(F){U(Re,`RPC '${e}' stream ${i} received error:`,F);const W=F.status;let G=function(g){const E=ue[g];if(E!==void 0)return Ch(E)}(W),T=F.message;G===void 0&&(G=L.INTERNAL,T="Unknown error status: "+W+" with message "+F.message),A=!0,I.Do(new j(G,T)),_.close()}else U(Re,`RPC '${e}' stream ${i} received:`,D),I.vo(D)}}),k(l,nh.STAT_EVENT,P=>{P.stat===co.PROXY?U(Re,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===co.NOPROXY&&U(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function Qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){return new Mv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,r,i,s,a,l,c){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new $h(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new j(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NE extends qh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=jv(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Ye(a.readTime):z.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=vo(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=po(c)?{documents:qv(s,c)}:{query:zv(s,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=xh(s,a.resumeToken);const h=go(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=Bi(s,a.snapshotVersion.toTimestamp());const h=go(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Wv(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=vo(this.serializer),t.removeTarget=e,this.c_(t)}}class xE extends qh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=$v(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=vo(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bv(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,_o(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(L.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,_o(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(L.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class VE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(gt(t),this.C_=!1):U("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{on(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=H(c);h.k_.add(4),await Fr(h),h.K_.set("Unknown"),h.k_.delete(4),await cs(h)}(this))})}),this.K_=new VE(r,i)}}async function cs(n){if(on(n))for(const e of n.q_)await e(!0)}async function Fr(n){for(const e of n.q_)await e(!1)}function zh(n,e){const t=H(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),aa(t)?oa(t):On(t).s_()&&sa(t,e))}function ia(n,e){const t=H(n),r=On(t);t.B_.delete(e),r.s_()&&Hh(t,e),t.B_.size===0&&(r.s_()?r.a_():on(t)&&t.K_.set("Unknown"))}function sa(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}On(n).V_(e)}function Hh(n,e){n.U_.xe(e),On(n).m_(e)}function oa(n){n.U_=new Dv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),On(n).start(),n.K_.F_()}function aa(n){return on(n)&&!On(n).i_()&&n.B_.size>0}function on(n){return H(n).k_.size===0}function Wh(n){n.U_=void 0}async function LE(n){n.K_.set("Online")}async function ME(n){n.B_.forEach((e,t)=>{sa(n,e)})}async function FE(n,e){Wh(n),aa(n)?(n.K_.O_(e),oa(n)):n.K_.set("Unknown")}async function UE(n,e,t){if(n.K_.set("Online"),e instanceof Nh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.B_.delete(l),i.U_.removeTarget(l))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qi(n,r)}else if(e instanceof Ri?n.U_.$e(e):e instanceof kh?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(z.min()))try{const r=await Bh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.U_.it(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.B_.get(h);f&&s.B_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=s.B_.get(c);if(!f)return;s.B_.set(c,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),Hh(s,c);const _=new St(f.target,c,h,f.sequenceNumber);sa(s,_)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await qi(n,r)}}async function qi(n,e,t){if(!Vn(e))throw e;n.k_.add(1),await Fr(n),n.K_.set("Offline"),t||(t=()=>Bh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await cs(n)})}function Gh(n,e){return e().catch(t=>qi(n,t,e))}async function us(n){const e=H(n),t=Ft(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;jE(e);)try{const i=await IE(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,BE(e,i)}catch(i){await qi(e,i)}Kh(e)&&Qh(e)}function jE(n){return on(n)&&n.L_.length<10}function BE(n,e){n.L_.push(e);const t=Ft(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Kh(n){return on(n)&&!Ft(n).i_()&&n.L_.length>0}function Qh(n){Ft(n).start()}async function $E(n){Ft(n).w_()}async function qE(n){const e=Ft(n);for(const t of n.L_)e.g_(t.mutations)}async function zE(n,e,t){const r=n.L_.shift(),i=Xo.from(r,e,t);await Gh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await us(n)}async function HE(n,e){e&&Ft(n).f_&&await async function(r,i){if(function(a){return kv(a)&&a!==L.ABORTED}(i.code)){const s=r.L_.shift();Ft(r).__(),await Gh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await us(r)}}(n,e),Kh(n)&&Qh(n)}async function kc(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=on(t);t.k_.add(3),await Fr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await cs(t)}async function WE(n,e){const t=H(n);e?(t.k_.delete(2),await cs(t)):e||(t.k_.add(2),await Fr(t),t.K_.set("Unknown"))}function On(n){return n.W_||(n.W_=function(t,r,i){const s=H(t);return s.b_(),new NE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:LE.bind(null,n),mo:ME.bind(null,n),po:FE.bind(null,n),R_:UE.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),aa(n)?oa(n):n.K_.set("Unknown")):(await n.W_.stop(),Wh(n))})),n.W_}function Ft(n){return n.G_||(n.G_=function(t,r,i){const s=H(t);return s.b_(),new xE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:$E.bind(null,n),po:HE.bind(null,n),p_:qE.bind(null,n),y_:zE.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await us(n)):(await n.G_.stop(),n.L_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new la(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ca(n,e){if(gt("AsyncQueue",`${e}: ${n}`),Vn(n))return new j(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{static emptySet(e){return new vn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=rr(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new vn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.z_=new oe(B.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):q():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class bn{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new bn(e,t,vn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class KE{constructor(){this.queries=xc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=H(t),s=i.queries;i.queries=xc(),s.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new j(L.ABORTED,"Firestore shutting down"))}}function xc(){return new rn(n=>gh(n),rs)}async function QE(n,e){const t=H(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new GE,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ca(a,`Initialization of query '${fn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&ua(t)}async function JE(n,e){const t=H(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YE(n,e){const t=H(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.J_)l.ta(i)&&(r=!0);a.H_=i}}r&&ua(t)}function XE(n,e,t){const r=H(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function ua(n){n.X_.forEach(e=>{e.next()})}var To,Dc;(Dc=To||(To={})).na="default",Dc.Cache="cache";class ZE{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==To.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.key=e}}class Yh{constructor(e){this.key=e}}class eT{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Q(),this.mutatedKeys=Q(),this.Va=_h(e),this.ma=new vn(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new Nc,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,_)=>{const y=i.get(f),A=is(this.query,_)?_:null,I=!!y&&this.mutatedKeys.has(y.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;y&&A?y.data.isEqual(A.data)?I!==k&&(r.track({type:3,doc:A}),P=!0):this.ya(y,A)||(r.track({type:2,doc:A}),P=!0,(c&&this.Va(A,c)>0||h&&this.Va(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),P=!0):y&&!A&&(r.track({type:1,doc:y}),P=!0,(c||h)&&(l=!0)),P&&(A?(a=a.add(A),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:l,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,_)=>function(A,I){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return k(A)-k(I)}(f.type,_.type)||this.Va(f.doc,_.doc)),this.wa(r),i=i!=null&&i;const l=t&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,h=c!==this.Aa;return this.Aa=c,a.length!==0||h?{snapshot:new bn(this.query,e.ma,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Nc,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Q(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Yh(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Jh(r))}),t}va(e){this.da=e.ds,this.Ra=Q();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return bn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class tT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nT{constructor(e){this.key=e,this.Fa=!1}}class rT{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new rn(l=>gh(l),rs),this.Oa=new Map,this.Na=new Set,this.La=new oe(B.comparator),this.Ba=new Map,this.ka=new ta,this.qa={},this.Qa=new Map,this.Ka=Rn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function iT(n,e,t=!0){const r=rd(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Xh(r,e,t,!0),i}async function sT(n,e){const t=rd(n);await Xh(t,e,!0,!1)}async function Xh(n,e,t,r){const i=await AE(n.localStore,Je(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await oT(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&zh(n.remoteStore,i),l}async function oT(n,e,t,r,i){n.Ua=(_,y,A)=>async function(k,P,x,D){let O=P.view.ga(x);O.ss&&(O=await Sc(k.localStore,P.query,!1).then(({documents:T})=>P.view.ga(T,O)));const F=D&&D.targetChanges.get(P.targetId),W=D&&D.targetMismatches.get(P.targetId)!=null,G=P.view.applyChanges(O,k.isPrimaryClient,F,W);return Oc(k,P.targetId,G.ba),G.snapshot}(n,_,y,A);const s=await Sc(n.localStore,e,!0),a=new eT(e,s.ds),l=a.ga(s.documents),c=Mr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);Oc(n,t,h.ba);const f=new tT(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),h.snapshot}async function aT(n,e,t){const r=H(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!rs(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Eo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ia(r.remoteStore,i.targetId),wo(r,i.targetId)}).catch(Dn)):(wo(r,i.targetId),await Eo(r.localStore,i.targetId,!0))}async function lT(n,e){const t=H(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ia(t.remoteStore,r.targetId))}async function cT(n,e,t){const r=gT(n);try{const i=await function(a,l){const c=H(a),h=fe.now(),f=l.reduce((A,I)=>A.add(I.key),Q());let _,y;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let I=_t(),k=Q();return c.hs.getEntries(A,f).next(P=>{I=P,I.forEach((x,D)=>{D.isValidDocument()||(k=k.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,I)).next(P=>{_=P;const x=[];for(const D of l){const O=Rv(D,_.get(D.key).overlayedDocument);O!=null&&x.push(new sn(D.key,O,ch(O.value.mapValue),ft.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,x,l)}).next(P=>{y=P;const x=P.applyToLocalDocumentSet(_,k);return c.documentOverlayCache.saveOverlays(A,P.batchId,x)})}).then(()=>({batchId:y.batchId,changes:vh(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.qa[a.currentUser.toKey()];h||(h=new oe(J)),h=h.insert(l,c),a.qa[a.currentUser.toKey()]=h}(r,i.batchId,t),await Ur(r,i.changes),await us(r.remoteStore)}catch(i){const s=ca(i,"Failed to persist write");t.reject(s)}}async function Zh(n,e){const t=H(n);try{const r=await TE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?ee(a.Fa):i.removedDocuments.size>0&&(ee(a.Fa),a.Fa=!1))}),await Ur(t,r,e)}catch(r){await Dn(r)}}function Vc(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,a)=>{const l=a.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=H(a);c.onlineState=l;let h=!1;c.queries.forEach((f,_)=>{for(const y of _.J_)y.ea(l)&&(h=!0)}),h&&ua(c)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uT(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),s=i&&i.key;if(s){let a=new oe(B.comparator);a=a.insert(s,Se.newNoDocument(s,z.min()));const l=Q().add(s),c=new as(z.min(),new Map,new oe(J),a,l);await Zh(r,c),r.La=r.La.remove(s),r.Ba.delete(e),ha(r)}else await Eo(r.localStore,e,!1).then(()=>wo(r,e,t)).catch(Dn)}async function hT(n,e){const t=H(n),r=e.batch.batchId;try{const i=await EE(t.localStore,e);td(t,r,null),ed(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ur(t,i)}catch(i){await Dn(i)}}async function dT(n,e,t){const r=H(n);try{const i=await function(a,l){const c=H(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(_=>(ee(_!==null),f=_.keys(),c.mutationQueue.removeMutationBatch(h,_))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);td(r,e,t),ed(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ur(r,i)}catch(i){await Dn(i)}}function ed(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function td(n,e,t){const r=H(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||nd(n,r)})}function nd(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(ia(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),ha(n))}function Oc(n,e,t){for(const r of t)r instanceof Jh?(n.ka.addReference(r.key,e),fT(n,r)):r instanceof Yh?(U("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||nd(n,r.key)):q()}function fT(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(U("SyncEngine","New document in limbo: "+t),n.Na.add(r),ha(n))}function ha(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new B(le.fromString(e)),r=n.Ka.next();n.Ba.set(r,new nT(t)),n.La=n.La.insert(t,r),zh(n.remoteStore,new St(Je(Jo(t.path)),r,"TargetPurposeLimboResolution",Zi.oe))}}async function Ur(n,e,t){const r=H(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,_?"current":"not-current")}if(h){i.push(h);const _=ra.zi(c.targetId,h);s.push(_)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(c,h){const f=H(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>V.forEach(h,y=>V.forEach(y.Wi,A=>f.persistence.referenceDelegate.addReference(_,y.targetId,A)).next(()=>V.forEach(y.Gi,A=>f.persistence.referenceDelegate.removeReference(_,y.targetId,A)))))}catch(_){if(!Vn(_))throw _;U("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const y=_.targetId;if(!_.fromCache){const A=f.us.get(y),I=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(I);f.us=f.us.insert(y,k)}}}(r.localStore,s))}async function pT(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await jh(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(l=>{l.forEach(c=>{c.reject(new j(L.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ur(t,r.Ts)}}function mT(n,e){const t=H(n),r=t.Ba.get(e);if(r&&r.Fa)return Q().add(r.key);{let i=Q();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const l=t.xa.get(a);i=i.unionWith(l.view.fa)}return i}}function rd(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uT.bind(null,e),e.Ma.R_=YE.bind(null,e.eventManager),e.Ma.Wa=XE.bind(null,e.eventManager),e}function gT(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dT.bind(null,e),e}class zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ls(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return vE(this.persistence,new _E,e.initialUser,this.serializer)}ja(e){return new Uh(na.ei,this.serializer)}za(e){return new bE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zi.provider={build:()=>new zi};class _T extends zi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ee(this.persistence.referenceDelegate instanceof $i);const r=this.persistence.referenceDelegate.garbageCollector;return new nE(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new Uh(r=>$i.ei(r,t),this.serializer)}}class Io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pT.bind(null,this.syncEngine),await WE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KE}()}createDatastore(e){const t=ls(e.databaseInfo.databaseId),r=function(s){return new kE(s)}(e.databaseInfo);return function(s,a,l,c){return new DE(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new OE(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Vc(this.syncEngine,t,0),function(){return Cc.p()?new Cc:new SE}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,f){const _=new rT(i,s,a,l,c,h);return f&&(_.$a=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=H(i);U("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Fr(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Io.provider={build:()=>new Io};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=oh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ca(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Js(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Lc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ET(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>kc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>kc(e.remoteStore,i)),n._onlineComponents=e}async function ET(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Js(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Tn("Error using user provided cache. Falling back to memory cache: "+t),await Js(n,new zi)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Js(n,new _T(void 0));return n._offlineComponents}async function id(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Lc(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Lc(n,new Io))),n._onlineComponents}function TT(n){return id(n).then(e=>e.syncEngine)}async function wT(n){const e=await id(n),t=e.eventManager;return t.onListen=iT.bind(null,e.syncEngine),t.onUnlisten=aT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lT.bind(null,e.syncEngine),t}function IT(n,e,t={}){const r=new xt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const f=new yT({next:y=>{f.eu(),a.enqueueAndForget(()=>JE(s,_));const A=y.docs.has(l);!A&&y.fromCache?h.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&c&&c.source==="server"?h.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),_=new ZE(Jo(l.path),f,{includeMetadataChanges:!0,ua:!0});return QE(s,_)}(await wT(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(n,e,t){if(!t)throw new j(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function RT(n,e,t,r){if(e===!0&&r===!0)throw new j(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fc(n){if(!B.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function da(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function Tr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=da(n);throw new j(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ny;switch(r.type){case"firstParty":return new Oy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Mc.get(t);r&&(U("ComponentProvider","Removing Datastore"),Mc.delete(t),r.terminate())}(this),Promise.resolve()}}function bT(n,e,t,r={}){var i;const s=(n=Tr(n,fa))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=be.MOCK_USER;else{l=Wp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new be(h)}n._authCredentials=new xy(new sh(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pa(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class wr extends pa{constructor(e,t,r){super(e,t,Jo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new B(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function od(n,e,...t){if(n=We(n),arguments.length===1&&(e=oh.newId()),AT("doc","path",e),n instanceof fa){const r=le.fromString(e,...t);return Fc(r),new je(n,null,new B(r))}{if(!(n instanceof je||n instanceof wr))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Fc(r),new je(n.firestore,n instanceof wr?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new $h(this,"async_queue_retry"),this.fu=()=>{const r=Qs();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Qs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Qs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new xt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Vn(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw gt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=la.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&q()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class ma extends fa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new jc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jc(e),this._firestoreClient=void 0,await e}}}function ST(n,e){const t=typeof n=="object"?n:gu(),r=typeof n=="string"?n:"(default)",i=Do(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zp("firestore");s&&bT(i,...s)}return i}function ad(n){if(n._terminated)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PT(n),n._firestoreClient}function PT(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,h,f){return new Jy(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new vT(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Ee.fromBase64String(e))}catch(t){throw new j(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=/^__.*__$/;class kT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lr(e,this.data,t,this.fieldTransforms)}}function cd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class va{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new va(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Hi(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(cd(this.Mu)&&CT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class NT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ls(e)}$u(e,t,r,i=!1){return new va({Mu:e,methodName:t,Ku:r,path:ve.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xT(n){const e=n._freezeSettings(),t=ls(n._databaseId);return new NT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function DT(n,e,t,r,i,s={}){const a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);fd("Data must be an object, but it was:",a,r);const l=hd(r,a);let c,h;if(s.merge)c=new ze(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const _ of s.mergeFields){const y=VT(e,_,t);if(!a.contains(y))throw new j(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);LT(f,y)||f.push(y)}c=new ze(f),h=a.fieldTransforms.filter(_=>c.covers(_.field))}else c=null,h=a.fieldTransforms;return new kT(new Ue(l),c,h)}function ud(n,e){if(dd(n=We(n)))return fd("Unsupported field value:",e,n),hd(n,e);if(n instanceof ld)return function(r,i){if(!cd(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=ud(l,i.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:Bi(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bi(i.serializer,s)}}if(r instanceof _a)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sn)return{bytesValue:xh(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ea(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ya)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Yo(l.serializer,c)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${da(r)}`)}(n,e)}function hd(n,e){const t={};return ah(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(n,(r,i)=>{const s=ud(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function dd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof _a||n instanceof Sn||n instanceof je||n instanceof ld||n instanceof ya)}function fd(n,e,t){if(!dd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=da(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function VT(n,e,t){if((e=We(e))instanceof ga)return e._internalPath;if(typeof e=="string")return pd(n,e);throw Hi("Field path arguments must be of type string or ",n,!1,void 0,t)}const OT=new RegExp("[~\\*/\\[\\]]");function pd(n,e,t){if(e.search(OT)>=0)throw Hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ga(...e.split("."))._internalPath}catch{throw Hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new j(L.INVALID_ARGUMENT,l+n+c)}function LT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MT extends md{data(){return super.data()}}function gd(n,e){return typeof e=="string"?pd(n,e):e instanceof ga?e._internalPath:e._delegate._internalPath}class FT{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return nn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ce(a.doubleValue));return new ya(s)}convertGeoPoint(e){return new _a(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ts(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);ee(Fh(r));const i=new _r(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||gt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _d extends md{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new BT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class BT extends _d{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){n=Tr(n,je);const e=Tr(n.firestore,ma);return IT(ad(e),n._key).then(t=>WT(e,n,t))}class qT extends FT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function zT(n,e,t){n=Tr(n,je);const r=Tr(n.firestore,ma),i=UT(n.converter,e);return HT(r,[DT(xT(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ft.none())])}function HT(n,e){return function(r,i){const s=new xt;return r.asyncQueue.enqueueAndForget(async()=>cT(await TT(r),i,s)),s.promise}(ad(n),e)}function WT(n,e,t){const r=t.docs.get(e._key),i=new qT(n);return new _d(n,i,e._key,r,new jT(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){xn=i})(kn),En(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new ma(new Dy(r.getProvider("auth-internal")),new My(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Nt(ic,"4.7.5",e),Nt(ic,"4.7.5","esm2017")})();const GT={apiKey:"AIzaSyDSOsnc5uFzsRuVPg3reZzpZwkpIpoOv-Q",authDomain:"quizapp-9d1e6.firebaseapp.com",projectId:"quizapp-9d1e6",storageBucket:"quizapp-9d1e6.firebasestorage.app",messagingSenderId:"249222343554",appId:"1:249222343554:web:a5e3545b2caf12fd16bd9b"},yd=mu(GT),vd=ST(yd),Ir=Sy(yd),KT=new at;function Ed(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Ed(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Pt(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Ed(n))&&(r&&(r+=" "),r+=e);return r}const Ar=n=>typeof n=="number"&&!isNaN(n),Jt=n=>typeof n=="string",Me=n=>typeof n=="function",bi=n=>Jt(n)||Me(n)?n:null,Ao=n=>C.isValidElement(n)||Jt(n)||Me(n)||Ar(n);function QT(n,e,t){t===void 0&&(t=300);const{scrollHeight:r,style:i}=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${t}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,t)})})}function hs(n){let{enter:e,exit:t,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=n;return function(a){let{children:l,position:c,preventExitTransition:h,done:f,nodeRef:_,isIn:y,playToast:A}=a;const I=r?`${e}--${c}`:e,k=r?`${t}--${c}`:t,P=C.useRef(0);return C.useLayoutEffect(()=>{const x=_.current,D=I.split(" "),O=F=>{F.target===_.current&&(A(),x.removeEventListener("animationend",O),x.removeEventListener("animationcancel",O),P.current===0&&F.type!=="animationcancel"&&x.classList.remove(...D))};x.classList.add(...D),x.addEventListener("animationend",O),x.addEventListener("animationcancel",O)},[]),C.useEffect(()=>{const x=_.current,D=()=>{x.removeEventListener("animationend",D),i?QT(x,f,s):f()};y||(h?D():(P.current=1,x.className+=` ${k}`,x.addEventListener("animationend",D)))},[y]),re.createElement(re.Fragment,null,l)}}function Bc(n,e){return n!=null?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}:{}}const xe=new Map;let Rr=[];const Ro=new Set,JT=n=>Ro.forEach(e=>e(n)),Td=()=>xe.size>0;function wd(n,e){var t;if(e)return!((t=xe.get(e))==null||!t.isToastActive(n));let r=!1;return xe.forEach(i=>{i.isToastActive(n)&&(r=!0)}),r}function Id(n,e){Ao(n)&&(Td()||Rr.push({content:n,options:e}),xe.forEach(t=>{t.buildToast(n,e)}))}function $c(n,e){xe.forEach(t=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===t.id&&t.toggle(n,e==null?void 0:e.id):t.toggle(n,e==null?void 0:e.id)})}function YT(n){const{subscribe:e,getSnapshot:t,setProps:r}=C.useRef(function(s){const a=s.containerId||1;return{subscribe(l){const c=function(f,_,y){let A=1,I=0,k=[],P=[],x=[],D=_;const O=new Map,F=new Set,W=()=>{x=Array.from(O.values()),F.forEach(m=>m())},G=m=>{P=m==null?[]:P.filter(g=>g!==m),W()},T=m=>{const{toastId:g,onOpen:E,updateId:w,children:b}=m.props,v=w==null;m.staleId&&O.delete(m.staleId),O.set(g,m),P=[...P,m.props.toastId].filter(me=>me!==m.staleId),W(),y(Bc(m,v?"added":"updated")),v&&Me(E)&&E(C.isValidElement(b)&&b.props)};return{id:f,props:D,observe:m=>(F.add(m),()=>F.delete(m)),toggle:(m,g)=>{O.forEach(E=>{g!=null&&g!==E.props.toastId||Me(E.toggle)&&E.toggle(m)})},removeToast:G,toasts:O,clearQueue:()=>{I-=k.length,k=[]},buildToast:(m,g)=>{if((he=>{let{containerId:te,toastId:Oe,updateId:Te}=he;const it=te?te!==f:f!==1,Ke=O.has(Oe)&&Te==null;return it||Ke})(g))return;const{toastId:E,updateId:w,data:b,staleId:v,delay:me}=g,Fe=()=>{G(E)},an=w==null;an&&I++;const Ce={...D,style:D.toastStyle,key:A++,...Object.fromEntries(Object.entries(g).filter(he=>{let[te,Oe]=he;return Oe!=null})),toastId:E,updateId:w,data:b,closeToast:Fe,isIn:!1,className:bi(g.className||D.toastClassName),bodyClassName:bi(g.bodyClassName||D.bodyClassName),progressClassName:bi(g.progressClassName||D.progressClassName),autoClose:!g.isLoading&&(De=g.autoClose,Ge=D.autoClose,De===!1||Ar(De)&&De>0?De:Ge),deleteToast(){const he=O.get(E),{onClose:te,children:Oe}=he.props;Me(te)&&te(C.isValidElement(Oe)&&Oe.props),y(Bc(he,"removed")),O.delete(E),I--,I<0&&(I=0),k.length>0?T(k.shift()):W()}};var De,Ge;Ce.closeButton=D.closeButton,g.closeButton===!1||Ao(g.closeButton)?Ce.closeButton=g.closeButton:g.closeButton===!0&&(Ce.closeButton=!Ao(D.closeButton)||D.closeButton);let nt=m;C.isValidElement(m)&&!Jt(m.type)?nt=C.cloneElement(m,{closeToast:Fe,toastProps:Ce,data:b}):Me(m)&&(nt=m({closeToast:Fe,toastProps:Ce,data:b}));const rt={content:nt,props:Ce,staleId:v};D.limit&&D.limit>0&&I>D.limit&&an?k.push(rt):Ar(me)?setTimeout(()=>{T(rt)},me):T(rt)},setProps(m){D=m},setToggle:(m,g)=>{O.get(m).toggle=g},isToastActive:m=>P.some(g=>g===m),getSnapshot:()=>x}}(a,s,JT);xe.set(a,c);const h=c.observe(l);return Rr.forEach(f=>Id(f.content,f.options)),Rr=[],()=>{h(),xe.delete(a)}},setProps(l){var c;(c=xe.get(a))==null||c.setProps(l)},getSnapshot(){var l;return(l=xe.get(a))==null?void 0:l.getSnapshot()}}}(n)).current;r(n);const i=C.useSyncExternalStore(e,t,t);return{getToastToRender:function(s){if(!i)return[];const a=new Map;return n.newestOnTop&&i.reverse(),i.forEach(l=>{const{position:c}=l.props;a.has(c)||a.set(c,[]),a.get(c).push(l)}),Array.from(a,l=>s(l[0],l[1]))},isToastActive:wd,count:i==null?void 0:i.length}}function XT(n){const[e,t]=C.useState(!1),[r,i]=C.useState(!1),s=C.useRef(null),a=C.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:h,onClick:f,closeOnClick:_}=n;var y,A;function I(){t(!0)}function k(){t(!1)}function P(O){const F=s.current;a.canDrag&&F&&(a.didMove=!0,e&&k(),a.delta=n.draggableDirection==="x"?O.clientX-a.start:O.clientY-a.start,a.start!==O.clientX&&(a.canCloseOnClick=!1),F.style.transform=`translate3d(${n.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`},0)`,F.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function x(){document.removeEventListener("pointermove",P),document.removeEventListener("pointerup",x);const O=s.current;if(a.canDrag&&a.didMove&&O){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),n.closeToast(),void n.collapseAll();O.style.transition="transform 0.2s, opacity 0.2s",O.style.removeProperty("transform"),O.style.removeProperty("opacity")}}(A=xe.get((y={id:n.toastId,containerId:n.containerId,fn:t}).containerId||1))==null||A.setToggle(y.id,y.fn),C.useEffect(()=>{if(n.pauseOnFocusLoss)return document.hasFocus()||k(),window.addEventListener("focus",I),window.addEventListener("blur",k),()=>{window.removeEventListener("focus",I),window.removeEventListener("blur",k)}},[n.pauseOnFocusLoss]);const D={onPointerDown:function(O){if(n.draggable===!0||n.draggable===O.pointerType){a.didMove=!1,document.addEventListener("pointermove",P),document.addEventListener("pointerup",x);const F=s.current;a.canCloseOnClick=!0,a.canDrag=!0,F.style.transition="none",n.draggableDirection==="x"?(a.start=O.clientX,a.removalDistance=F.offsetWidth*(n.draggablePercent/100)):(a.start=O.clientY,a.removalDistance=F.offsetHeight*(n.draggablePercent===80?1.5*n.draggablePercent:n.draggablePercent)/100)}},onPointerUp:function(O){const{top:F,bottom:W,left:G,right:T}=s.current.getBoundingClientRect();O.nativeEvent.type!=="touchend"&&n.pauseOnHover&&O.clientX>=G&&O.clientX<=T&&O.clientY>=F&&O.clientY<=W?k():I()}};return l&&c&&(D.onMouseEnter=k,n.stacked||(D.onMouseLeave=I)),_&&(D.onClick=O=>{f&&f(O),a.canCloseOnClick&&h()}),{playToast:I,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:D}}function ZT(n){let{delay:e,isRunning:t,closeToast:r,type:i="default",hide:s,className:a,style:l,controlledProgress:c,progress:h,rtl:f,isIn:_,theme:y}=n;const A=s||c&&h===0,I={...l,animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};c&&(I.transform=`scaleX(${h})`);const k=Pt("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),P=Me(a)?a({rtl:f,type:i,defaultClassName:k}):Pt(k,a),x={[c&&h>=1?"onTransitionEnd":"onAnimationEnd"]:c&&h<1?null:()=>{_&&r()}};return re.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":A},re.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${i}`}),re.createElement("div",{role:"progressbar","aria-hidden":A?"true":"false","aria-label":"notification timer",className:P,style:I,...x}))}let ew=1;const Ad=()=>""+ew++;function tw(n){return n&&(Jt(n.toastId)||Ar(n.toastId))?n.toastId:Ad()}function ur(n,e){return Id(n,e),e.toastId}function Wi(n,e){return{...e,type:e&&e.type||n,toastId:tw(e)}}function di(n){return(e,t)=>ur(e,Wi(n,t))}function Z(n,e){return ur(n,Wi("default",e))}Z.loading=(n,e)=>ur(n,Wi("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Z.promise=function(n,e,t){let r,{pending:i,error:s,success:a}=e;i&&(r=Jt(i)?Z.loading(i,t):Z.loading(i.render,{...t,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(f,_,y)=>{if(_==null)return void Z.dismiss(r);const A={type:f,...l,...t,data:y},I=Jt(_)?{render:_}:_;return r?Z.update(r,{...A,...I}):Z(I.render,{...A,...I}),y},h=Me(n)?n():n;return h.then(f=>c("success",a,f)).catch(f=>c("error",s,f)),h},Z.success=di("success"),Z.info=di("info"),Z.error=di("error"),Z.warning=di("warning"),Z.warn=Z.warning,Z.dark=(n,e)=>ur(n,Wi("default",{theme:"dark",...e})),Z.dismiss=function(n){(function(e){var t;if(Td()){if(e==null||Jt(t=e)||Ar(t))xe.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=xe.get(e.containerId);r?r.removeToast(e.id):xe.forEach(i=>{i.removeToast(e.id)})}}else Rr=Rr.filter(r=>e!=null&&r.options.toastId!==e)})(n)},Z.clearWaitingQueue=function(n){n===void 0&&(n={}),xe.forEach(e=>{!e.props.limit||n.containerId&&e.id!==n.containerId||e.clearQueue()})},Z.isActive=wd,Z.update=function(n,e){e===void 0&&(e={});const t=((r,i)=>{var s;let{containerId:a}=i;return(s=xe.get(a||1))==null?void 0:s.toasts.get(r)})(n,e);if(t){const{props:r,content:i}=t,s={delay:100,...r,...e,toastId:e.toastId||n,updateId:Ad()};s.toastId!==n&&(s.staleId=n);const a=s.render||i;delete s.render,ur(a,s)}},Z.done=n=>{Z.update(n,{progress:1})},Z.onChange=function(n){return Ro.add(n),()=>{Ro.delete(n)}},Z.play=n=>$c(!0,n),Z.pause=n=>$c(!1,n);const nw=typeof window<"u"?C.useLayoutEffect:C.useEffect,fi=n=>{let{theme:e,type:t,isLoading:r,...i}=n;return re.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...i})},Ys={info:function(n){return re.createElement(fi,{...n},re.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return re.createElement(fi,{...n},re.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return re.createElement(fi,{...n},re.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return re.createElement(fi,{...n},re.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return re.createElement("div",{className:"Toastify__spinner"})}},rw=n=>{const{isRunning:e,preventExitTransition:t,toastRef:r,eventHandlers:i,playToast:s}=XT(n),{closeButton:a,children:l,autoClose:c,onClick:h,type:f,hideProgressBar:_,closeToast:y,transition:A,position:I,className:k,style:P,bodyClassName:x,bodyStyle:D,progressClassName:O,progressStyle:F,updateId:W,role:G,progress:T,rtl:m,toastId:g,deleteToast:E,isIn:w,isLoading:b,closeOnClick:v,theme:me}=n,Fe=Pt("Toastify__toast",`Toastify__toast-theme--${me}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":m},{"Toastify__toast--close-on-click":v}),an=Me(k)?k({rtl:m,position:I,type:f,defaultClassName:Fe}):Pt(Fe,k),Ce=function(rt){let{theme:he,type:te,isLoading:Oe,icon:Te}=rt,it=null;const Ke={theme:he,type:te};return Te===!1||(Me(Te)?it=Te({...Ke,isLoading:Oe}):C.isValidElement(Te)?it=C.cloneElement(Te,Ke):Oe?it=Ys.spinner():(fs=>fs in Ys)(te)&&(it=Ys[te](Ke))),it}(n),De=!!T||!c,Ge={closeToast:y,type:f,theme:me};let nt=null;return a===!1||(nt=Me(a)?a(Ge):C.isValidElement(a)?C.cloneElement(a,Ge):function(rt){let{closeToast:he,theme:te,ariaLabel:Oe="close"}=rt;return re.createElement("button",{className:`Toastify__close-button Toastify__close-button--${te}`,type:"button",onClick:Te=>{Te.stopPropagation(),he(Te)},"aria-label":Oe},re.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},re.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Ge)),re.createElement(A,{isIn:w,done:E,position:I,preventExitTransition:t,nodeRef:r,playToast:s},re.createElement("div",{id:g,onClick:h,"data-in":w,className:an,...i,style:P,ref:r},re.createElement("div",{...w&&{role:G},className:Me(x)?x({type:f}):Pt("Toastify__toast-body",x),style:D},Ce!=null&&re.createElement("div",{className:Pt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!b})},Ce),re.createElement("div",null,l)),nt,re.createElement(ZT,{...W&&!De?{key:`pb-${W}`}:{},rtl:m,theme:me,delay:c,isRunning:e,isIn:w,closeToast:y,hide:_,type:f,style:F,className:O,controlledProgress:De,progress:T||0})))},ds=function(n,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}},iw=hs(ds("bounce",!0));hs(ds("slide",!0));hs(ds("zoom"));hs(ds("flip"));const sw={position:"top-right",transition:iw,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Rd(n){let e={...sw,...n};const t=n.stacked,[r,i]=C.useState(!0),s=C.useRef(null),{getToastToRender:a,isToastActive:l,count:c}=YT(e),{className:h,style:f,rtl:_,containerId:y}=e;function A(k){const P=Pt("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":_});return Me(h)?h({position:k,rtl:_,defaultClassName:P}):Pt(P,bi(h))}function I(){t&&(i(!0),Z.play())}return nw(()=>{if(t){var k;const P=s.current.querySelectorAll('[data-in="true"]'),x=12,D=(k=e.position)==null?void 0:k.includes("top");let O=0,F=0;Array.from(P).reverse().forEach((W,G)=>{const T=W;T.classList.add("Toastify__toast--stacked"),G>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=D?"top":"bot");const m=O*(r?.2:1)+(r?0:x*G);T.style.setProperty("--y",`${D?m:-1*m}px`),T.style.setProperty("--g",`${x}`),T.style.setProperty("--s",""+(1-(r?F:0))),O+=T.offsetHeight,F+=.025})}},[r,c,t]),re.createElement("div",{ref:s,className:"Toastify",id:y,onMouseEnter:()=>{t&&(i(!1),Z.pause())},onMouseLeave:I},a((k,P)=>{const x=P.length?{...f}:{...f,pointerEvents:"none"};return re.createElement("div",{className:A(k),style:x,key:`container-${k}`},P.map(D=>{let{content:O,props:F}=D;return re.createElement(rw,{...F,stacked:t,collapseAll:I,isIn:l(F.toastId,F.containerId),style:F.style,key:`toast-${F.key}`},O)}))}))}const ow=()=>{const n=Pr(),[e,t]=C.useState(""),[r,i]=C.useState(""),[s,a]=C.useState(!1),l=async h=>{h.preventDefault(),a(!0);try{await p_(Ir,e,r),n("/dashboard"),Z.success("User logged in successfully",{position:"top-center"})}catch(f){console.log(f.message),Z.error(f.message,{position:"bottom-center"})}finally{a(!1)}},c=async()=>{a(!0);try{await L_(Ir,KT),n("/dashboard"),Z.success("User logged in with Google successfully",{position:"top-center"})}catch(h){console.log(h.message),Z.error(h.message,{position:"bottom-center"})}finally{a(!1)}};return R.jsxs("div",{className:"container-lg",children:[R.jsx(Rd,{}),s&&R.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{},children:R.jsx("div",{className:"spinner-overlay",children:R.jsx("div",{className:"spinner"})})}),R.jsx("div",{className:"col col-lg-6 container-lg d-flex justify-content-center align-items-center",style:{marginTop:"70px"},children:R.jsx("div",{style:{width:"75%"},children:R.jsxs("div",{className:"card p-2",children:[R.jsx("h1",{className:"text-center",children:"Login"}),R.jsx("hr",{}),R.jsxs("div",{className:"card-body",children:[R.jsxs("form",{onSubmit:l,children:[R.jsx("label",{className:"card-title",children:"email:"}),R.jsx("input",{type:"text",className:"form-control w-100",onChange:h=>t(h.target.value),placeholder:"email",required:!0}),R.jsx("label",{className:"card-title",children:"Password:"}),R.jsx("input",{type:"password",className:"form-control w-100",onChange:h=>i(h.target.value),placeholder:"Password",required:!0}),R.jsx("button",{type:"submit",className:"btn btn-primary my-2 px-5 w-100",children:"login"})]}),R.jsx("p",{className:"text-center",children:"or"}),R.jsx("hr",{}),R.jsxs("button",{className:"btn btn-light w-100 py-2",onClick:c,children:[R.jsx("i",{className:"bi bi-google p-2"}),R.jsx("span",{className:"text-dark font-weight-bold",children:"Sign in with Google"})]})]})]})})})]})},aw="/assets/hero-Ihot1kHz.jpg",lw=[{name:"Math For Natural",url:"https://youtu.be/ouUaxWVJNSI"},{name:"Math For Natural",url:"https://youtu.be/ouUaxWVJNSI"},{name:"physics",url:"https://youtu.be/b1t41Q3xRM8"},{name:"Psyhcology",url:"https://youtu.be/vo4pMVb0R6M"},{name:"Geography",url:"https://youtu.be/93LLwiMjDko"},{name:"Physical Fitness",url:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV"},{name:"Emerging Technology",url:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV"},{name:"English Skill I",url:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV"},{name:"Inclusivness",url:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV"},{name:"Englsih skill II",url:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV"},{name:"Global Trends",url:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV"}],qc="/assets/examCarousel-CZXZj5fC.jpg",cw=()=>R.jsxs("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[R.jsxs("div",{className:"carousel-indicators",children:[R.jsx("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),gi.map((n,e)=>R.jsx("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":e+1,"aria-label":`Slide ${e+2}`},e+1))]}),R.jsxs("div",{className:"carousel-inner",children:[R.jsxs("div",{className:"carousel-item active",children:[R.jsx("img",{src:qc,className:"d-block w-100 img-fluid",alt:"..."}),R.jsxs("div",{className:"carousel-caption d-none d-md-block",children:[R.jsx("h5",{className:"text-light text-center",children:gi[0].name}),R.jsx("p",{className:"text-light text-center",children:"Some representative"})]})]}),gi.slice(1).map((n,e)=>R.jsxs("div",{className:"carousel-item",children:[R.jsx("img",{src:qc,className:"d-block w-100 img-fluid",alt:`Slide ${e+2}`}),R.jsxs("div",{className:"carousel-caption d-none d-md-block",children:[R.jsx("h5",{className:"text-light text-center",children:n.name}),R.jsxs("p",{className:"text-light text-center",children:["Some representative placeholder content for slide ",e+2,"."]})]})]},e+1))]}),R.jsxs("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[R.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),R.jsx("span",{className:"visually-hidden",children:"Previous"})]}),R.jsxs("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[R.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),R.jsx("span",{className:"visually-hidden",children:"Next"})]})]}),uw=()=>{C.useState();const n=e=>{const t=new URL(e);let r=t.searchParams.get("v");if(!r){const i=t.pathname.split("/");r=i[i.length-1]}return`https://www.youtube.com/embed/${r}`};return R.jsxs("div",{children:[R.jsx(xp,{}),R.jsxs("div",{className:"home-page-container container-lg",children:[R.jsxs("div",{className:"upper-div container-lg",children:[R.jsxs("div",{className:"",children:[R.jsx("h1",{className:"text-center",children:"Come Along Us, We Begin Our Learning Journey"}),R.jsx("p",{className:"text-center",children:"Welcome to your go-to hub for academic excellence! Our platform is packed with expertly curated courses, exam materials, and cheat sheets designed by top students. Quickly access valuable resources, engaging YouTube videos, and helpful website links—all in one place. Plus, our advanced AI, powered by Gemini 3.15, is here to provide personalized support. Dive in and start mastering your subjects today!"}),R.jsx("hr",{})]}),R.jsx("div",{className:"image-container",children:R.jsx("img",{className:"hero-img",src:aw,alt:"Hero"})})]}),R.jsx("h3",{className:"text-center",children:"Exams are Available"}),R.jsx("hr",{}),R.jsx(cw,{}),R.jsx("div",{className:"middle-div mt-5",children:lw.map((e,t)=>{const r=n(e.url);return R.jsx("div",{className:"card mt-3",children:R.jsxs("div",{className:"card-body",children:[R.jsx("h5",{className:"card-title text-center",children:e.name}),R.jsx("iframe",{width:"100%",height:"230",src:r,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),R.jsx("p",{className:"card-text mt-2",children:"Here is a video to motivate your study and help you align with your field."})]})},t)})}),R.jsx("hr",{})]})]})},hw=()=>{const[n,e]=C.useState(""),[t,r]=C.useState(""),[i,s]=C.useState(""),[a,l]=C.useState(""),[c,h]=C.useState(""),[f,_]=C.useState(!1),y=Pr(),A=async I=>{if(I.preventDefault(),a!==c){Z.error("Passwords do not match!",{position:"top-center"});return}_(!0);try{const P=(await f_(Ir,i,a)).user;P&&(await zT(od(vd,"users",P.uid),{FirstName:n,LastName:t,email:i,password:a,scores:{math:0,ComputerScience:0,Pschology:0,Biology:0}}),y("/dashboard"),Z.success(`hey ${n} you registered successfully`,{position:"top-center"}))}catch(k){alert(k.message),Z.success(k.message,{position:"bottom-center"})}finally{_(!1)}};return R.jsxs("div",{className:"container-lg",children:[R.jsx(Rd,{}),f&&R.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{},children:R.jsx("div",{className:"spinner-overlay",children:R.jsx("div",{className:"spinner"})})}),R.jsx("div",{className:"col col-lg-6 container-lg d-flex justify-content-center align-items-center",style:{paddingTop:"20px"},children:R.jsx("div",{style:{width:"75%"},children:R.jsxs("div",{className:"card p-2",children:[R.jsx("h1",{className:"text-center",children:"Register"}),R.jsx("hr",{}),R.jsx("div",{className:"card-body",children:R.jsxs("form",{onSubmit:A,children:[R.jsx("label",{className:"card-title",children:"First Name:"}),R.jsx("input",{type:"text",className:"form-control w-100",onChange:I=>e(I.target.value),placeholder:"First Name",required:!0}),R.jsx("label",{className:"card-title",children:"Last Name:"}),R.jsx("input",{type:"text",className:"form-control w-100",onChange:I=>r(I.target.value),placeholder:"Last Name",required:!0}),R.jsx("label",{className:"card-title",children:"Email:"}),R.jsx("input",{type:"email",className:"form-control w-100",onChange:I=>s(I.target.value),placeholder:"Enter your email",required:!0}),R.jsx("label",{className:"card-title my-2",children:"Password:"}),R.jsx("input",{type:"password",className:"form-control w-100",onChange:I=>l(I.target.value),placeholder:"Enter your password",required:!0}),R.jsx("label",{className:"card-title my-2",children:"Confirm Password:"}),R.jsx("input",{type:"password",className:"form-control mb-3 w-100",onChange:I=>h(I.target.value),placeholder:"Confirm your password",required:!0}),R.jsx("button",{type:"submit",className:"btn btn-primary my-2 px-5 w-100",children:"Sign up"})]})})]})})})]})},dw=()=>{const[n,e]=C.useState(null),[t,r]=C.useState(!0),i=Pr();C.useEffect(()=>{(async()=>{const l=Ir.currentUser;if(l){const c=od(vd,"users",l.uid),h=await $T(c);h.exists()?e(h.data()):console.log("No such document!")}else console.log("User not authenticated!"),i("/login");r(!1)})()},[i]);const s=()=>{window.confirm("Are you sure you want to log out?")&&Ir.signOut().then(()=>{i("/login")}).catch(l=>{console.error("Error signing out: ",l)})};return t?R.jsx("p",{className:" 100vh",children:"Loading..."}):R.jsx("div",{className:"container",children:n?R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"profile",children:[R.jsxs("div",{className:"profile-sec",children:[R.jsx("i",{className:"bi bi-person"}),R.jsx("p",{children:n.FirstName}),R.jsx("button",{className:"btn profile-btn",children:"View Profile"}),R.jsx("button",{className:"btn logout-btn my-3",onClick:s,children:"Log out"})]}),R.jsx("hr",{}),R.jsxs("div",{className:"menu-option",children:[R.jsxs("div",{children:[R.jsx("i",{className:"bi bi-house"}),"Home"]}),R.jsxs("div",{children:[R.jsx("i",{className:"bi bi-stars"}),"Your Score"]}),R.jsxs("div",{children:[R.jsx("i",{className:"bi bi-book"}),"Courses"]}),R.jsxs("div",{children:[R.jsx("i",{className:"bi bi-person-fill"}),"Teachers"]}),R.jsxs("div",{children:[R.jsx("i",{className:"bi bi-chat"}),"Comments"]})]})]}),R.jsxs("div",{className:"detail-section",children:[R.jsxs("div",{className:"header-nav",children:[R.jsx("div",{className:"logo-name",onClick:()=>{i("/")},children:R.jsxs("span",{className:"logoname",children:["Qu",R.jsx("span",{className:"logoname-end",children:"iz.com"})]})}),R.jsxs("div",{className:"search-sec",children:[R.jsx("input",{type:"text",placeholder:"Search exam"}),R.jsx("i",{className:"bi bi-search","data-toggle":"tooltip","data-placement":"bottom",title:"Search exams"})]}),R.jsxs("div",{children:[R.jsx("i",{className:"bi bi-list icon","data-toggle":"tooltip","data-placement":"bottom",title:"Menu"}),R.jsx("i",{className:"bi bi-person-fill icon","data-toggle":"tooltip","data-placement":"bottom",title:"Profile"}),R.jsx("i",{className:"bi bi-gear icon","data-toggle":"tooltip","data-placement":"bottom",title:"Setting"})]}),R.jsx("hr",{})]}),R.jsxs("div",{className:"body-section",children:[R.jsx("h3",{className:"text-center",children:"Quick Options"}),R.jsx("hr",{}),R.jsx("div",{className:"quick-option",children:gi.map((a,l)=>R.jsxs("div",{className:"card",style:{width:"18rem"},children:[R.jsx("img",{src:a.img,className:"card-img-top",style:{width:"100%",height:"230px"}}),R.jsxs("div",{className:"card-body",children:[R.jsx("h5",{className:"card-title",children:a.name}),R.jsx("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),R.jsx("a",{href:"#",className:"btn card-btn px-5",children:"Go"})]})]},l))}),R.jsx("div",{className:"card mt-3",style:{width:"20rem"},children:R.jsxs("div",{className:"card-body",children:[R.jsx("h5",{className:"card-title",children:"YouTube Video"}),R.jsx("iframe",{width:"100%",height:"230",src:"https://www.youtube.com/watch?v=VERiuOff3Vw&list=PPSV",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),R.jsx("p",{className:"card-text mt-2",children:"here is a video to motivate your study and make your self ready to study hard and align with your feild"})]})}),R.jsx("h3",{className:"course text-center h2 mt-3",children:"Courses"}),R.jsx("hr",{})]})]})]}):R.jsx("p",{children:"No user data found."})})},fw=()=>R.jsx(wp,{children:R.jsxs(Xf,{children:[R.jsx(Zn,{path:"/",element:R.jsx(uw,{})}),R.jsx(Zn,{path:"/login",element:R.jsx(ow,{})}),R.jsx(Zn,{path:"/register",element:R.jsx(hw,{})}),R.jsx(Zn,{path:"/dashboard",element:R.jsx(dw,{})})]})});lf.createRoot(document.getElementById("root")).render(R.jsx(C.StrictMode,{children:R.jsx(fw,{})}));
