(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1656,e=>{e.q("/_next/static/media/bpdacc-logo.2q4j55sg8ae3y.jpg")},29790,e=>{e.q("/_next/static/media/dashboard-icon.00xhr2xlcu5s9.svg")},80069,e=>{e.q("/_next/static/media/inventory-icon.1356va0w9l31g.svg")},48934,e=>{e.q("/_next/static/media/reports-icon.1y686_r8-6anx.svg")},96393,e=>{e.q("/_next/static/media/ris-icon.0hrefos2r2ruq.svg")},2024,e=>{e.q("/_next/static/media/rislist-icon.2mxqb7613y0ag.svg")},66921,e=>{e.q("/_next/static/media/settings-icon.3zcs1dr5azw2m.svg")},64069,e=>{e.q("/_next/static/media/users-icon.2ewz3aa7jzcpo.svg")},17149,e=>{e.q("/_next/static/media/dashboard-totalitems-icon.1l0op0mjojpzs.svg")},66899,e=>{e.q("/_next/static/media/dashboard-lowstock-icon.3wsxe8lxk8jpb.svg")},12972,e=>{e.q("/_next/static/media/dashboard-pending-icon.3201xcwa0c747.svg")},4058,e=>{e.q("/_next/static/media/dashboard-issued-icon.31z8lcwy5bckx.svg")},29945,e=>{e.q("/_next/static/media/dashboard-activityissued-icon.1attawxaajmeq.svg")},25047,e=>{e.q("/_next/static/media/dashboard-activityexpired-icon.0k2vgoovq3rg-.svg")},16245,e=>{e.q("/_next/static/media/dashboard-activitynearexpiry-icon.0vn52e8gi8qnk.svg")},81104,e=>{e.q("/_next/static/media/dashboard-activityallocated-icon.39ebge-ud4fn_.svg")},82945,e=>{e.q("/_next/static/media/dashboard-activityadded-icon.1xovmmjui6m1y.svg")},2795,e=>{e.q("/_next/static/media/search-icon.3v325ub1db43a.svg")},21692,e=>{e.q("/_next/static/media/expand-icon.0amjqv7ppfiyj.svg")},25366,e=>{e.q("/_next/static/media/collapse-icon.1jsfauozigjdx.svg")},34360,e=>{e.q("/_next/static/media/edit-icon.1lvjn37qth_g0.svg")},20845,e=>{e.q("/_next/static/media/stockcard-icon.1l20reem5xd5f.svg")},53294,e=>{e.q("/_next/static/media/delete-icon.1_63gowwas_w7.svg")},65327,e=>{e.q("/_next/static/media/additem-icon.0pxbsft_zywpg.svg")},66880,e=>{e.q("/_next/static/media/restock-icon.1e6bfw72jyqk0.svg")},34997,e=>{e.q("/_next/static/media/close-icon.2whft--wzemke.svg")},30825,e=>{e.q("/_next/static/media/print-icon.30bm8txrewh0f.svg")},84860,e=>{e.q("/_next/static/media/adduser-icon.25qscn199fiao.svg")},29371,e=>{e.q("/_next/static/media/deleteuser-icon.1_63gowwas_w7.svg")},22482,e=>{e.q("/_next/static/media/changepassword-icon.02o6_vhtgshbt.svg")},32355,e=>{e.q("/_next/static/media/editusers-icon.2ly_mf4uyv9nb.svg")},86022,e=>{"use strict";var t,a,i,s,l,n,r,o,c,d,p,h=e.i(43476);e.i(47167);var x=e.i(71645),m=e.i(74080),u=x;function f(){return(f=Object.assign.bind()).apply(null,arguments)}(t=o||(o={})).Pop="POP",t.Push="PUSH",t.Replace="REPLACE";let g="popstate";function b(e,t){if(!1===e||null==e)throw Error(t)}function j(e,t){if(!e){"u">typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function v(e,t){return{usr:e.state,key:e.key,idx:t}}function y(e,t,a,i){return void 0===a&&(a=null),f({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?w(t):t,{state:a,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function N(e){let{pathname:t="/",search:a="",hash:i=""}=e;return a&&"?"!==a&&(t+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function w(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}(a=c||(c={})).data="data",a.deferred="deferred",a.redirect="redirect",a.error="error";let k=/^:[\w-]+$/,S=e=>"*"===e;function C(e,t){var a,i,s;let l,n;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=(a=e.path,i=e.caseSensitive,s=e.end,void 0===i&&(i=!1),void 0===s&&(s=!0),j("*"===a||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were "'+a.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+a.replace(/\*$/,"/*")+'".'),l=[],n="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,a)=>(l.push({paramName:t,isOptional:null!=a}),a?"/?([^\\/]+)?":"/([^\\/]+)")),a.endsWith("*")?(l.push({paramName:"*"}),n+="*"===a||"/*"===a?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?n+="\\/*$":""!==a&&"/"!==a&&(n+="(?:(?=\\/|$))"),[new RegExp(n,i?void 0:"i"),l]),c=t.match(r);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),h=c.slice(1);return{params:o.reduce((e,t,a)=>{let{paramName:i,isOptional:s}=t;if("*"===i){let e=h[a]||"";p=d.slice(0,d.length-e.length).replace(/(.)\/+$/,"$1")}let l=h[a];return s&&!l?e[i]=void 0:e[i]=(l||"").replace(/%2F/g,"/"),e},{}),pathname:d,pathnameBase:p,pattern:e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,i=e.charAt(a);return i&&"/"!==i?null:e.slice(a)||"/"}let z=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function R(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)}),a.length>1?a.join("/"):"/"}function B(e,t,a,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field [")+JSON.stringify(i)+"].  Please separate it out to the `to."+a+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function I(e,t){let a=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?a.map((e,t)=>t===a.length-1?e.pathname:e.pathnameBase):a.map(e=>e.pathnameBase)}function D(e,t,a,i){let s,l;void 0===i&&(i=!1),"string"==typeof e?s=w(e):(b(!(s=f({},e)).pathname||!s.pathname.includes("?"),B("?","pathname","search",s)),b(!s.pathname||!s.pathname.includes("#"),B("#","pathname","hash",s)),b(!s.search||!s.search.includes("#"),B("#","search","hash",s)));let n=""===e||""===s.pathname,r=n?"/":s.pathname;if(null==r)l=a;else{let e=t.length-1;if(!i&&r.startsWith("..")){let t=r.split("/");for(;".."===t[0];)t.shift(),e-=1;s.pathname=t.join("/")}l=e>=0?t[e]:"/"}let o=function(e,t){let a;void 0===t&&(t="/");let{pathname:i,search:s="",hash:l=""}="string"==typeof e?w(e):e;if(i){let e;(e=i,z.test(e))?a=i:(i.includes("//")&&j(!1,"Pathnames cannot have embedded double slashes - normalizing "+i+" -> "+(i=P(i))),a=i.startsWith("/")?R(i.substring(1),"/"):R(i,t))}else a=t;return{pathname:a,search:M(s),hash:O(l)}}(s,l),c=r&&"/"!==r&&r.endsWith("/"),d=(n||"."===r)&&a.endsWith("/");return!o.pathname.endsWith("/")&&(c||d)&&(o.pathname+="/"),o}let P=e=>e.replace(/\/\/+/g,"/"),E=e=>P(e.join("/")),q=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function U(){return(U=Object.assign.bind()).apply(null,arguments)}Symbol("deferred");let W=u.createContext(null),L=u.createContext(null),T=u.createContext(null),H=u.createContext(null),$=u.createContext({outlet:null,matches:[],isDataRoute:!1}),Q=u.createContext(null);function F(){return null!=u.useContext(H)}function _(){return F()||b(!1),u.useContext(H).location}function J(e){u.useContext(T).static||u.useLayoutEffect(e)}function K(e,t){let{relative:a}=void 0===t?{}:t,{future:i}=u.useContext(T),{matches:s}=u.useContext($),{pathname:l}=_(),n=JSON.stringify(I(s,i.v7_relativeSplatPath));return u.useMemo(()=>D(e,JSON.parse(n),l,"path"===a),[e,n,l,a])}let V=u.createElement(function(){var e;let t,a,i,s,l=(a=u.useContext(Q),i=(X.UseRouteError,(t=u.useContext(L))||b(!1),t),s=ee(X.UseRouteError),void 0!==a?a:null==(e=i.errors)?void 0:e[s]),n=null!=l&&"number"==typeof l.status&&"string"==typeof l.statusText&&"boolean"==typeof l.internal&&"data"in l?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),r=l instanceof Error?l.stack:null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},n),r?u.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},r):null,null)},null);class Y extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?u.createElement($.Provider,{value:this.props.routeContext},u.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(e){let{routeContext:t,match:a,children:i}=e,s=u.useContext(W);return s&&s.static&&s.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=a.route.id),u.createElement($.Provider,{value:t},i)}var G=((i=G||{}).UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i),X=((s=X||{}).UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s);function ee(e){let t,a=((t=u.useContext($))||b(!1),t),i=a.matches[a.matches.length-1];return i.route.id||b(!1),i.route.id}let et={};function ea(e){b(!1)}function ei(e){let{basename:t="/",children:a=null,location:i,navigationType:s=o.Pop,navigator:l,static:n=!1,future:r}=e;F()&&b(!1);let c=t.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:l,static:n,future:U({v7_relativeSplatPath:!1},r)}),[c,r,l,n]);"string"==typeof i&&(i=w(i));let{pathname:p="/",search:h="",hash:x="",state:m=null,key:f="default"}=i,g=u.useMemo(()=>{let e=A(p,c);return null==e?null:{location:{pathname:e,search:h,hash:x,state:m,key:f},navigationType:s}},[c,p,h,x,m,f,s]);return null==g?null:u.createElement(T.Provider,{value:d},u.createElement(H.Provider,{children:a,value:g}))}function es(e){let{children:t,location:a}=e;return function(e,t){var a,i;let s;F()||b(!1);let{navigator:l}=u.useContext(T),{matches:n}=u.useContext($),r=n[n.length-1],c=r?r.params:{};r&&r.pathname;let d=r?r.pathnameBase:"/";r&&r.route;let p=_();if(t){let e="string"==typeof t?w(t):t;"/"===d||(null==(a=e.pathname)?void 0:a.startsWith(d))||b(!1),s=e}else s=p;let h=s.pathname||"/",x=h;if("/"!==d){let e=d.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=(void 0===i&&(i="/"),function(e,t,a,i){let s=A(("string"==typeof t?w(t):t).pathname||"/",a);if(null==s)return null;let l=function e(t,a,i,s){void 0===a&&(a=[]),void 0===i&&(i=[]),void 0===s&&(s="");let l=(t,l,n)=>{var r,o;let c,d,p={relativePath:void 0===n?t.path||"":n,caseSensitive:!0===t.caseSensitive,childrenIndex:l,route:t};p.relativePath.startsWith("/")&&(b(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path "'+s+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),p.relativePath=p.relativePath.slice(s.length));let h=E([s,p.relativePath]),x=i.concat(p);t.children&&t.children.length>0&&(b(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+h+'".'),e(t.children,a,x,h)),(null!=t.path||t.index)&&a.push({path:h,score:(r=h,o=t.index,d=(c=r.split("/")).length,c.some(S)&&(d+=-2),o&&(d+=2),c.filter(e=>!S(e)).reduce((e,t)=>e+(k.test(t)?3:""===t?1:10),d)),routesMeta:x})};return t.forEach((e,t)=>{var a;if(""!==e.path&&null!=(a=e.path)&&a.includes("?"))for(let a of function e(t){let a=t.split("/");if(0===a.length)return[];let[i,...s]=a,l=i.endsWith("?"),n=i.replace(/\?$/,"");if(0===s.length)return l?[n,""]:[n];let r=e(s.join("/")),o=[];return o.push(...r.map(e=>""===e?n:[n,e].join("/"))),l&&o.push(...r),o.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))l(e,t,a);else l(e,t)}),a}(e);l.sort((e,t)=>{var a,i;return e.score!==t.score?t.score-e.score:(a=e.routesMeta.map(e=>e.childrenIndex),i=t.routesMeta.map(e=>e.childrenIndex),a.length===i.length&&a.slice(0,-1).every((e,t)=>e===i[t])?a[a.length-1]-i[i.length-1]:0)});let n=null,r=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return j(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(s);for(let e=0;null==n&&e<l.length;++e)n=function(e,t,a){void 0===a&&(a=!1);let{routesMeta:i}=e,s={},l="/",n=[];for(let e=0;e<i.length;++e){let r=i[e],o=e===i.length-1,c="/"===l?t:t.slice(l.length)||"/",d=C({path:r.relativePath,caseSensitive:r.caseSensitive,end:o},c),p=r.route;if(!d&&o&&a&&!i[i.length-1].route.index&&(d=C({path:r.relativePath,caseSensitive:r.caseSensitive,end:!1},c)),!d)return null;Object.assign(s,d.params),n.push({params:s,pathname:E([l,d.pathname]),pathnameBase:q(E([l,d.pathnameBase])),route:p}),"/"!==d.pathnameBase&&(l=E([l,d.pathnameBase]))}return n}(l[e],r,i);return n}(e,{pathname:x},i,!1)),f=function(e,t,a,i){var s,l;if(void 0===t&&(t=[]),void 0===a&&(a=null),void 0===i&&(i=null),null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(null==(l=i)||!l.v7_partialHydration||0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let n=e,r=null==(s=a)?void 0:s.errors;if(null!=r){let e=n.findIndex(e=>e.route.id&&(null==r?void 0:r[e.route.id])!==void 0);e>=0||b(!1),n=n.slice(0,Math.min(n.length,e+1))}let o=!1,c=-1;if(a&&i&&i.v7_partialHydration)for(let e=0;e<n.length;e++){let t=n[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:i}=a,s=t.route.loader&&void 0===e[t.route.id]&&(!i||void 0===i[t.route.id]);if(t.route.lazy||s){o=!0,n=c>=0?n.slice(0,c+1):[n[0]];break}}}return n.reduceRight((e,i,s)=>{var l;let d,p=!1,h=null,x=null;a&&(d=r&&i.route.id?r[i.route.id]:void 0,h=i.route.errorElement||V,o&&(c<0&&0===s?(l="route-fallback",et[l]||(et[l]=!0),p=!0,x=null):c===s&&(p=!0,x=i.route.hydrateFallbackElement||null)));let m=t.concat(n.slice(0,s+1)),f=()=>{let t;return t=d?h:p?x:i.route.Component?u.createElement(i.route.Component,null):i.route.element?i.route.element:e,u.createElement(Z,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=a},children:t})};return a&&(i.route.ErrorBoundary||i.route.errorElement||0===s)?u.createElement(Y,{location:a.location,revalidation:a.revalidation,component:h,error:d,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:E([d,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:E([d,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),n,void 0,void 0);return t&&f?u.createElement(H.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:o.Pop}},f):f}(function e(t,a){void 0===a&&(a=[]);let i=[];return u.Children.forEach(t,(t,s)=>{if(!u.isValidElement(t))return;let l=[...a,s];if(t.type===u.Fragment)return void i.push.apply(i,e(t.props.children,l));t.type!==ea&&b(!1),t.props.index&&t.props.children&&b(!1);let n={id:t.props.id||l.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(n.children=e(t.props.children,l)),i.push(n)}),i}(t),a)}u.startTransition;var el=((l=el||{})[l.pending=0]="pending",l[l.success=1]="success",l[l.error=2]="error",l);function en(){return(en=Object.assign.bind()).apply(null,arguments)}new Promise(()=>{}),u.Component;let er=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}let eo=x.startTransition;function ec(e){let{basename:t,children:a,future:i,window:s}=e,l=x.useRef();null==l.current&&(l.current=function(e,t,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,l=i.history,n=o.Pop,r=null,c=d();function d(){return(l.state||{idx:null}).idx}function p(){n=o.Pop;let e=d(),t=null==e?null:e-c;c=e,r&&r({action:n,location:x.location,delta:t})}function h(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,a="string"==typeof e?e:N(e);return b(t,"No window.location.(origin|href) available to create URL for href: "+(a=a.replace(/ $/,"%20"))),new URL(a,t)}null==c&&(c=0,l.replaceState(f({},l.state,{idx:c}),""));let x={get action(){return n},get location(){return e(i,l)},listen(e){if(r)throw Error("A history only accepts one active listener");return i.addEventListener(g,p),r=e,()=>{i.removeEventListener(g,p),r=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){n=o.Push;let a=y(x.location,e,t);let p=v(a,c=d()+1),h=x.createHref(a);try{l.pushState(p,"",h)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(h)}s&&r&&r({action:n,location:x.location,delta:1})},replace:function(e,t){n=o.Replace;let a=y(x.location,e,t);let i=v(a,c=d()),p=x.createHref(a);l.replaceState(i,"",p),s&&r&&r({action:n,location:x.location,delta:0})},go:e=>l.go(e)};return x}(function(e,t){let{pathname:a,search:i,hash:s}=e.location;return y("",{pathname:a,search:i,hash:s},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:N(t)},{window:s,v5Compat:!0}));let n=l.current,[r,c]=x.useState({action:n.action,location:n.location}),{v7_startTransition:d}=i||{},p=x.useCallback(e=>{d&&eo?eo(()=>c(e)):c(e)},[c,d]);return x.useLayoutEffect(()=>n.listen(p),[n,p]),x.useEffect(()=>(function(e){null==e||e.v7_startTransition,null==e||e.v7_relativeSplatPath})(i),[i]),x.createElement(ei,{basename:t,children:a,location:r.location,navigationType:r.action,navigator:n,future:i})}m.flushSync,x.useId;let ed="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eh=x.forwardRef(function(e,t){let a,{onClick:i,relative:s,reloadDocument:l,replace:n,state:r,target:o,to:c,preventScrollReset:d,viewTransition:p}=e,h=function(e,t){if(null==e)return{};var a={};for(var i in e)if(({}).hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;a[i]=e[i]}return a}(e,er),{basename:m}=x.useContext(T),f=!1;if("string"==typeof c&&ep.test(c)&&(a=c,ed))try{let e=new URL(window.location.href),t=new URL(c.startsWith("//")?e.protocol+c:c),a=A(t.pathname,m);t.origin===e.origin&&null!=a?c=a+t.search+t.hash:f=!0}catch(e){}let g=function(e,t){let{relative:a}=void 0===t?{}:t;F()||b(!1);let{basename:i,navigator:s}=u.useContext(T),{hash:l,pathname:n,search:r}=K(e,{relative:a}),o=n;return"/"!==i&&(o="/"===n?i:E([i,n])),s.createHref({pathname:o,search:r,hash:l})}(c,{relative:s}),j=function(e,t){let{target:a,replace:i,state:s,preventScrollReset:l,relative:n,viewTransition:r}=void 0===t?{}:t,o=function(){let{isDataRoute:e}=u.useContext($);return e?function(){let e,{router:t}=(G.UseNavigateStable,(e=u.useContext(W))||b(!1),e),a=ee(X.UseNavigateStable),i=u.useRef(!1);return J(()=>{i.current=!0}),u.useCallback(function(e,s){void 0===s&&(s={}),i.current&&("number"==typeof e?t.navigate(e):t.navigate(e,U({fromRouteId:a},s)))},[t,a])}():function(){F()||b(!1);let e=u.useContext(W),{basename:t,future:a,navigator:i}=u.useContext(T),{matches:s}=u.useContext($),{pathname:l}=_(),n=JSON.stringify(I(s,a.v7_relativeSplatPath)),r=u.useRef(!1);return J(()=>{r.current=!0}),u.useCallback(function(a,s){if(void 0===s&&(s={}),!r.current)return;if("number"==typeof a)return void i.go(a);let o=D(a,JSON.parse(n),l,"path"===s.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:E([t,o.pathname])),(s.replace?i.replace:i.push)(o,s.state,s)},[t,i,n,l,e])}()}(),c=_(),d=K(e,{relative:n});return x.useCallback(t=>{0!==t.button||a&&"_self"!==a||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),o(e,{replace:void 0!==i?i:N(c)===N(d),state:s,preventScrollReset:l,relative:n,viewTransition:r}))},[c,o,d,i,s,a,e,l,n,r])}(c,{replace:n,state:r,target:o,preventScrollReset:d,relative:s,viewTransition:p});return x.createElement("a",en({},h,{href:a||g,onClick:f||l?i:function(e){i&&i(e),e.defaultPrevented||j(e)},ref:t,target:o}))});(n=d||(d={})).UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState",(r=p||(p={})).UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration";let ex=(0,x.createContext)(),em=({children:e})=>{let[t,a]=(0,x.useState)(()=>localStorage.getItem("bpdacc-user-role")||"Admin"),[i,s]=(0,x.useState)(()=>localStorage.getItem("bpdacc-user-office")||"All"),[l,n]=(0,x.useState)(()=>{let e=localStorage.getItem("bpdacc-current-user");return e?JSON.parse(e):{id:1,name:"John Doe",email:"john@clinic.com",role:"Admin",office:"All"}});return(0,x.useEffect)(()=>{localStorage.setItem("bpdacc-user-role",t)},[t]),(0,x.useEffect)(()=>{localStorage.setItem("bpdacc-user-office",i)},[i]),(0,x.useEffect)(()=>{localStorage.setItem("bpdacc-current-user",JSON.stringify(l))},[l]),(0,h.jsx)(ex.Provider,{value:{userRole:t,setUserRole:a,userOffice:i,setUserOffice:s,currentUser:l,setCurrentUser:n,isAdmin:"Admin"===t},children:e})},eu=()=>{let e=(0,x.useContext)(ex);if(!e)throw Error("useUserRole must be used within a UserRoleProvider");return e},ef=({src:e,alt:t="",size:a=24,className:i="",style:s={}})=>{let l="object"==typeof e&&null!==e&&"src"in e?e.src:e;return(0,h.jsx)("img",{src:l,alt:t,draggable:!1,style:{width:a,height:a,display:"inline-block",verticalAlign:"middle",...s},className:i})},eg={src:e.i(1656).default,width:2048,height:2048,blurWidth:8,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1Nft51p3dHFrgKuCOfqPxoEm7u6P/2Q=="},eb={src:e.i(29790).default,width:24,height:24,blurWidth:0,blurHeight:0},ej={src:e.i(80069).default,width:24,height:24,blurWidth:0,blurHeight:0},ev={src:e.i(48934).default,width:28,height:28,blurWidth:0,blurHeight:0},ey={src:e.i(96393).default,width:28,height:28,blurWidth:0,blurHeight:0},eN={src:e.i(2024).default,width:28,height:28,blurWidth:0,blurHeight:0},ew={src:e.i(66921).default,width:28,height:28,blurWidth:0,blurHeight:0},ek={src:e.i(64069).default,width:28,height:28,blurWidth:0,blurHeight:0},eS=()=>{let e=_(),[t,a]=(0,x.useState)(!1),{userRole:i,setUserRole:s,isAdmin:l}=eu(),n=[{path:"/",icon:eb,label:"Dashboard",visible:!0},{path:"/inventory",icon:ej,label:"Inventory",visible:!0},{path:"/requisition",icon:ey,label:"Requisition (RIS)",visible:!l},{path:"/requisition-requests",icon:eN,label:"Requisition Requests",visible:l},{path:"/reports",icon:ev,label:"Reports",visible:!0},{path:"/users",icon:ek,label:"Users",visible:l},{path:"/settings",icon:ew,label:"Settings",visible:!0}].filter(e=>e.visible);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"mobile-menu-toggle no-print",onClick:()=>{a(!t)},children:(0,h.jsx)("span",{className:"menu-icon",children:t?"✕":"☰"})}),t&&(0,h.jsx)("div",{className:"sidebar-overlay no-print",onClick:()=>a(!1)}),(0,h.jsxs)("div",{className:`sidebar no-print ${t?"open":""}`,children:[(0,h.jsx)("div",{className:"sidebar-header",children:(0,h.jsxs)("h1",{className:"logo",children:[(0,h.jsx)(ef,{src:eg,alt:"BPDACC Logo",size:40,className:"logo-icon"}),(0,h.jsx)("span",{className:"logo-text",children:"BPDACC Inv"})]})}),(0,h.jsx)("nav",{className:"sidebar-nav",children:n.map(t=>(0,h.jsxs)(eh,{to:t.path,className:`nav-item ${e.pathname===t.path?"active":""}`,onClick:()=>a(!1),children:[(0,h.jsx)(ef,{src:t.icon,alt:t.label,size:20,className:"nav-icon"}),(0,h.jsx)("span",{className:"nav-label",children:t.label})]},t.path))}),(0,h.jsxs)("div",{className:"sidebar-footer",children:[(0,h.jsxs)("div",{className:"user-info",children:[(0,h.jsx)("div",{className:"user-avatar",children:"JD"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"user-name",children:"John Doe"}),(0,h.jsx)("div",{className:"user-role",children:i})]})]}),(0,h.jsxs)("div",{style:{marginTop:"12px"},children:[(0,h.jsx)("label",{style:{fontSize:"12px",color:"#6b7280",display:"block",marginBottom:"4px"},children:"Switch Role (Testing):"}),(0,h.jsxs)("select",{value:i,onChange:e=>s(e.target.value),style:{width:"100%",padding:"6px 8px",border:"1px solid #e5e7eb",borderRadius:"6px",fontSize:"12px",cursor:"pointer"},children:[(0,h.jsx)("option",{value:"Admin",children:"Admin"}),(0,h.jsx)("option",{value:"Nurse",children:"Nurse"}),(0,h.jsx)("option",{value:"Pharmacist",children:"Pharmacist"}),(0,h.jsx)("option",{value:"Lab Tech",children:"Lab Tech"})]})]})]}),(0,h.jsx)("style",{children:`
          .sidebar {
            width: 220px;
            background: white;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
            z-index: 999;
            transition: transform 0.3s ease;
          }

          .sidebar-header {
            padding: 20px 16px;
            border-bottom: 1px solid #e5e7eb;
          }

          .logo {
            font-size: 18px;
            font-weight: 700;
            color: #000000ff;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .logo-icon {
            font-size: 20px;
          }

          .logo-text {
            display: inline;
          }

          .sidebar-nav {
            flex: 1;
            padding: 16px 0;
            overflow-y: auto;
          }

          .nav-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            text-decoration: none;
            color: #6b7280;
            font-weight: 500;
            transition: all 0.2s;
          }

          .nav-item:hover {
            background: #f3f4f6;
            color: #1e40af;
          }

          .nav-item.active {
            background: #eff6ff;
            color: #1e40af;
            border-left: 3px solid #1e40af;
          }

          .nav-icon {
            font-size: 20px;
          }

          .sidebar-footer {
            padding: 20px;
            border-top: 1px solid #e5e7eb;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #1e40af);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
          }

          .user-name {
            font-size: 14px;
            font-weight: 600;
            color: #1f2937;
          }

          .user-role {
            font-size: 12px;
            color: #9ca3af;
          }

          /* Mobile Menu Toggle */
          .mobile-menu-toggle {
            display: none;
            position: fixed;
            top: 16px;
            left: 16px;
            z-index: 1000;
            background: #1e40af;
            color: white;
            border: none;
            border-radius: 8px;
            width: 44px;
            height: 44px;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
          }

          .sidebar-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .sidebar {
              transform: translateX(-100%);
            }

            .sidebar.open {
              transform: translateX(0);
            }

            .mobile-menu-toggle {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .sidebar-overlay {
              display: block;
            }
          }

          /* Tablet Responsive */
          @media (max-width: 1024px) {
            .logo-text {
              display: none;
            }

            .sidebar {
              width: 70px;
            }

            .nav-label {
              display: none;
            }

            .user-name,
            .user-role {
              display: none;
            }

            .sidebar-header {
              padding: 24px 10px;
            }

            .logo {
              justify-content: center;
            }
          }

          /* Override for mobile - full sidebar */
          @media (max-width: 768px) {
            .sidebar {
              width: 260px;
            }

            .logo-text {
              display: inline;
            }

            .nav-label {
              display: inline;
            }

            .user-name,
            .user-role {
              display: block;
            }

            .sidebar-header {
              padding: 24px 20px;
            }

            .logo {
              justify-content: flex-start;
            }
          }
        `})]})]})};async function eC(e,...t){let a=await fetch("/api/rpc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({method:e,args:t}),cache:"no-store"}),i=await a.json();if(!a.ok)throw Error(i.error||"API Error");return i.data}let eA={src:e.i(17149).default,width:36,height:36,blurWidth:0,blurHeight:0},ez={src:e.i(66899).default,width:24,height:24,blurWidth:0,blurHeight:0},eR={src:e.i(12972).default,width:24,height:24,blurWidth:0,blurHeight:0},eB={src:e.i(4058).default,width:36,height:36,blurWidth:0,blurHeight:0},eI={src:e.i(29945).default,width:24,height:24,blurWidth:0,blurHeight:0},eD={src:e.i(25047).default,width:36,height:36,blurWidth:0,blurHeight:0},eP={src:e.i(16245).default,width:24,height:24,blurWidth:0,blurHeight:0},eE={src:e.i(81104).default,width:24,height:24,blurWidth:0,blurHeight:0},eq={src:e.i(82945).default,width:36,height:36,blurWidth:0,blurHeight:0},eM={src:e.i(2795).default,width:24,height:24,blurWidth:0,blurHeight:0},eO=()=>{let e,t,a,{userRole:i,userOffice:s}=eu(),[l,n]=(0,x.useState)([]),[r,o]=(0,x.useState)([]),[c,d]=(0,x.useState)([]),[p,m]=(0,x.useState)(!0),[u,f]=(0,x.useState)(""),[g,b]=(0,x.useState)("newest"),j=async()=>{m(!0);try{let e,t,a=await eC("getItems"),l=await (e=i,t=s,eC("getActivities",e,t)),r=await eC("getRequisitions");n(a),o(l),d(r)}catch(e){console.error("Failed to load dashboard data",e)}finally{m(!1)}};(0,x.useEffect)(()=>{j()},[i,s]);let v=[...r].filter(e=>{if(!u)return!0;let t=u.toLowerCase();return e.item?.toLowerCase().includes(t)||e.office?.toLowerCase().includes(t)||e.action?.toLowerCase().includes(t)}).sort((e,t)=>{let a=new Date(e.created_at||e.time),i=new Date(t.created_at||t.time);return"newest"===g?i-a:a-i}),y=l.reduce((e,t)=>e+t.batches.reduce((e,t)=>e+t.stock,0),0),N=l.filter(e=>e.batches.reduce((e,t)=>e+t.stock,0)<e.minStock).length,w=c.filter(e=>"Pending"===e.status).length,k=[{label:"Total Stock",value:y.toLocaleString(),icon:eA,bgColor:"#e8f0fe"},{label:"Low Stock",value:N.toString(),icon:ez,bgColor:"#fff799ff"},{label:"Pending Requisitions",value:w.toString(),icon:eR,bgColor:"#f9e49eff"},{label:"Issued Today",value:"0",icon:eB,bgColor:"#e6f9e6"}],S=v.map(e=>({id:e.id,item:e.item,office:e.office,action:e.action,time:e.time,type:e.type,icon:"expired"===e.type?eD:"warning"===e.type?eP:"allocated"===e.type?eE:"added"===e.type||"restocked"===e.type?eq:eI,bgColor:"expired"===e.type?"#ffe6e6":"warning"===e.type?"#fff3cd":"allocated"===e.type?"#eac7ffff":"added"===e.type?"#e6f9e6":"restocked"===e.type?"#dbeafe":"#e6fff3ff"})),C=(e={Hemodialysis:0,"Clinical Laboratory":0,Radiology:0,"Admin Office":0,Unallocated:0},l.forEach(t=>{t.batches.forEach(t=>{e.hasOwnProperty(t.office)&&(e[t.office]+=t.stock)})}),e),A=Object.values(C).reduce((e,t)=>e+t,0)-C.Unallocated;C.Unallocated;let z=Object.values(C).reduce((e,t)=>e+t,0),R=[{name:"Hemodialysis",value:C.Hemodialysis,color:"#3b82f6"},{name:"Clinical Laboratory",value:C["Clinical Laboratory"],color:"#10b981"},{name:"Radiology",value:C.Radiology,color:"#f59e0b"},{name:"Admin Office",value:C["Admin Office"],color:"#8b5cf6"},{name:"Unallocated",value:C.Unallocated,color:"#9ca3af"}],B=(t=[],a=0,R.forEach((e,i)=>{let s=e.value/z;t.push({...e,startPercent:a,endPercent:a+s}),a+=s}),t),I=(e,t,a,i)=>{let s=(i-90)*Math.PI/180;return{x:e+a*Math.cos(s),y:t+a*Math.sin(s)}};return(0,h.jsxs)("div",{className:"dashboard",children:[(0,h.jsx)("div",{className:"page-header",children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"Dashboard"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Welcome back! Here's what's happening."})]})}),(0,h.jsx)("div",{className:"stats-grid",children:k.map((e,t)=>(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:e.bgColor},children:(0,h.jsx)(ef,{src:e.icon,alt:e.label,size:32})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:e.value}),(0,h.jsx)("div",{className:"stat-label",children:e.label})]})]},t))}),(0,h.jsxs)("div",{className:"dashboard-grid",children:[(0,h.jsxs)("div",{className:"column-wrapper",children:[(0,h.jsxs)("div",{className:"filters-bar",children:[(0,h.jsxs)("div",{className:"search-box",children:[(0,h.jsx)("span",{className:"search-icon",children:(0,h.jsx)(ef,{src:eM,alt:"Search",size:20})}),(0,h.jsx)("input",{type:"text",placeholder:"Search activities...",value:u,onChange:e=>f(e.target.value)})]}),(0,h.jsxs)("select",{className:"select-input",value:g,onChange:e=>b(e.target.value),children:[(0,h.jsx)("option",{value:"newest",children:"Newest First"}),(0,h.jsx)("option",{value:"oldest",children:"Oldest First"})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsxs)("div",{className:"card-header",children:[(0,h.jsx)("h2",{className:"card-title",children:"Recent Activity"}),(0,h.jsx)("a",{href:"#",className:"card-link",children:"View All"})]}),(0,h.jsx)("div",{className:"activity-list",children:S.map(e=>(0,h.jsxs)("div",{className:`activity-item ${e.type?e.type:""}`,style:{background:e.bgColor},children:[(0,h.jsx)("div",{className:"activity-icon",children:(0,h.jsx)(ef,{src:e.icon,alt:e.action,size:28})}),(0,h.jsxs)("div",{className:"activity-details",children:[(0,h.jsx)("div",{className:"activity-item-name",children:e.item}),(0,h.jsxs)("div",{className:"activity-meta",children:[(0,h.jsx)("span",{className:"facility-tag",children:e.office}),(0,h.jsx)("span",{className:"activity-time",children:e.time})]})]}),(0,h.jsx)("span",{className:`activity-status ${e.action.toLowerCase().replace(/ /g,"-")}`,children:e.action})]},e.id))})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Inventory Overview"})}),(0,h.jsxs)("div",{className:"donut-chart-container",children:[(0,h.jsxs)("div",{className:"donut-chart-wrapper",children:[(0,h.jsx)("svg",{width:"240",height:"240",viewBox:"0 0 240 240",children:(0,h.jsx)("g",{transform:"translate(120, 120)",children:B.map((e,t)=>{let a,i,s;if(0===e.value)return null;let l=360*e.startPercent,n=360*e.endPercent,r=(a=I(0,0,100,n),i=I(0,0,100,l),s=n-l<=180?"0":"1",["M",a.x,a.y,"A 100 100 0",s,"0",i.x,i.y].join(" "));return(0,h.jsx)("path",{d:r,stroke:e.color,strokeWidth:"40",fill:"none"},t)})})}),(0,h.jsxs)("div",{className:"donut-center",children:[(0,h.jsx)("div",{className:"donut-center-value",children:A}),(0,h.jsx)("div",{className:"donut-center-label",children:"Allocated"})]})]}),(0,h.jsx)("div",{className:"donut-legend",children:R.map((e,t)=>(0,h.jsxs)("div",{className:"legend-item",children:[(0,h.jsx)("span",{className:"legend-color",style:{background:e.color}}),(0,h.jsx)("span",{className:"legend-name",children:e.name}),(0,h.jsx)("span",{className:"legend-value",children:e.value})]},t))})]})]})]}),(0,h.jsx)("style",{children:`
        .dashboard {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .column-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .card-link {
          font-size: 14px;
          color: #3b82f6;
          text-decoration: none;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
        }

        .activity-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activity-details {
          flex: 1;
          min-width: 0;
        }

        .activity-item-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .activity-meta {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .facility-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          white-space: nowrap;
        }

        .activity-time {
          font-size: 12px;
          color: #9ca3af;
        }

        .activity-status {
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .activity-status.issued {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.requisitioned {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.restocked {
          background: #dbeafe;
          color: #1e40af;
        }

        .activity-status.allocated {
          background: #ede9fe;
          color: #6d28d9;
        }

        .activity-status.added {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.about-to-expire {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.expired {
          background: #fee2e2;
          color: #991b1b;
        }



        /* Donut Chart Styles */
        .donut-chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .donut-chart-wrapper {
          position: relative;
          width: 240px;
          height: 240px;
        }

        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .donut-center-value {
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
        }

        .donut-center-label {
          font-size: 14px;
          color: #6b7280;
        }

        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .legend-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          font-size: 14px;
          color: #4b5563;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .legend-name {
          flex: 1;
        }

        .legend-value {
          font-weight: 600;
          color: #1f2937;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .header-actions {
            width: 100%;
          }

          .select-input {
            flex: 1;
          }

          .page-title {
            font-size: 24px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
          }

          .stat-value {
            font-size: 24px;
          }

          .activity-item {
            flex-wrap: wrap;
          }

          .activity-status {
            width: 100%;
            text-align: center;
          }

          .donut-legend {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .legend-item {
            width: 48%;
          }
        }
      `})]})},eU={src:e.i(21692).default,width:24,height:24,blurWidth:0,blurHeight:0},eW={src:e.i(25366).default,width:24,height:24,blurWidth:0,blurHeight:0},eL={src:e.i(34360).default,width:24,height:24,blurWidth:0,blurHeight:0},eT={src:e.i(20845).default,width:24,height:24,blurWidth:0,blurHeight:0},eH={src:e.i(53294).default,width:24,height:24,blurWidth:0,blurHeight:0},e$={src:e.i(65327).default,width:24,height:24,blurWidth:0,blurHeight:0},eQ={src:e.i(66880).default,width:32,height:32,blurWidth:0,blurHeight:0},eF={src:e.i(34997).default,width:24,height:24,blurWidth:0,blurHeight:0},e_={src:e.i(30825).default,width:20,height:20,blurWidth:0,blurHeight:0},eJ=()=>{let{userRole:e,userOffice:t}=eu(),[a,i]=(0,x.useState)("all"),[s,l]=(0,x.useState)(""),[n,r]=(0,x.useState)(null),[o,c]=(0,x.useState)(null),[d,p]=(0,x.useState)(!1),[m,u]=(0,x.useState)({visible:!1,isEdit:!1,index:null,isRestock:!1}),[f,g]=(0,x.useState)(null),[b,j]=(0,x.useState)({date:"",restockQty:"",ptrNo:"",remarks:"",costPerUnit:"",selectedBatch:null}),[v,y]=(0,x.useState)({date:"",reference:"",selectedBatch:null,receiptQty:0,issuanceQty:0,office:"Hemodialysis",balance:0}),[N,w]=(0,x.useState)(new Set),[k,S]=(0,x.useState)({name:"",sku:"",location:"",unit:"Pieces",minStock:"",initialBatch:{batchId:"",sku:"",quantity:"",assignedFor:"Hemodialysis",brand:"",supplier:"",ptr:"",costPerUnit:"",remarks:""}}),[C,A]=(0,x.useState)(null),[z,R]=(0,x.useState)(null),[B,I]=(0,x.useState)(null),[D,P]=(0,x.useState)([]),[E,q]=(0,x.useState)(!0),M=(e,t)=>{R({type:e,message:t}),setTimeout(()=>R(null),3e3)},O=(e,t,a,i)=>{I({title:e,message:t,onConfirm:a,onCancel:i})},U=async()=>{q(!0);try{let e=await eC("getItems");P(e)}catch(e){console.error("Failed to load items:",e),P([])}finally{q(!1)}};(0,x.useEffect)(()=>{U()},[]);let W=e=>{if(!e)return!1;let t=new Date,a=new Date(e),i=new Date(a);return i.setMonth(i.getMonth()-2),t>=i&&t<=a},L=e=>{if(!e)return!1;let t=new Date;return new Date(e)<t},T=()=>{let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="";for(let a=0;a<10;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},H=()=>{let e,t=new Set(D.map(e=>e.sku)),a=0;do e=T(),a++;while(t.has(e)&&a<1e3)if(a>=1e3){let a=0;do{let t=a;e="";for(let a=0;a<10;a++)e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[t%36]+e,t=Math.floor(t/36);a++}while(t.has(e))}return e},$=e=>e.batches.reduce((e,t)=>e+t.stock,0),Q=D.filter(e=>{let t=e.name.toLowerCase().includes(s.toLowerCase())||e.sku.toLowerCase().includes(s.toLowerCase()),i="all"===a||e.batches.some(e=>e.office===a);return t&&i}),F=async()=>{let e=parseInt(k.minStock),t=parseInt(k.initialBatch.quantity);if(!k.name.trim())return void alert("Item Name is required!");if(isNaN(e)||e<=0)return void alert("Minimum Stock Level must be a number greater than 0!");if(isNaN(t)||t<0)return void alert("Initial Batch Quantity must be a number 0 or greater!");let a=k.sku||H(),i={sku:a,name:k.name,location:k.location,unit:k.unit,minStock:e,batches:[{batchId:k.initialBatch.batchId||`${a}-001`,brand:k.initialBatch.brand,supplier:k.initialBatch.supplier,stockNumber:`SN-${Date.now().toString().slice(-4)}`,expiryDate:null,office:k.initialBatch.assignedFor,stock:t,transactionCount:0,ptr:k.initialBatch.ptr,costPerUnit:k.initialBatch.costPerUnit,remarks:k.initialBatch.remarks}],transactions:[{date:new Date().toISOString().split("T")[0],reference:k.initialBatch.batchId||`${a}-001`,selectedBatch:k.initialBatch.batchId||`${a}-001`,receiptQty:t,issuanceQty:0,office:k.initialBatch.assignedFor,balance:t,ptr:k.initialBatch.ptr,costPerUnit:k.initialBatch.costPerUnit,remarks:k.initialBatch.remarks||`${k.initialBatch.assignedFor} - Opening Stock`}]};try{let e,t;await (e=i,eC("addItem",e)),await (t={item:i.name,office:i.batches[0].office,action:"Added",type:"added"},eC("addActivity",t)),await U(),p(!1),M("success","Item added successfully!")}catch(e){console.error("Failed to add item:",e),M("error","Failed to add item: "+e.message)}},_=async()=>{if(!C)return;let e=parseInt(C.minStock);isNaN(e)||e<=0?alert("Minimum Stock Level must be a number greater than 0!"):C.name.trim()?O("Confirm Save","Are you sure you want to save changes to this item?",async()=>{try{let t;await (t={...C,minStock:e},eC("updateItem",t)),await U(),c(null),A(null),M("success","Item updated successfully!")}catch(e){console.error("Failed to update item:",e),M("error","Failed to update item: "+e.message)}finally{I(null)}},()=>{I(null)}):alert("Item Name is required!")},J=async()=>{if(n)if(m.isEdit&&null!==m.index)O("Confirm Save","Are you sure you want to save changes to this transaction?",async()=>{try{let e,t,a,i;await (e=n.id,t=m.index,a=v,eC("updateTransaction",e,t,a)),await (i=n.id,eC("recalculateBalances",i)),M("success","Transaction updated successfully!"),await U();let s=(await eC("getItems")).find(e=>e.id===n.id);r(s),u({visible:!1,isEdit:!1,index:null})}catch(e){console.error("Failed to save transaction:",e),M("error","Failed to save transaction: "+e.message)}finally{I(null)}},()=>I(null));else try{let e,t,a=D.find(e=>e.id===n.id)?.transactions||[],i=a.length>0?a[a.length-1]:null,s=i?i.balance+v.receiptQty-v.issuanceQty:v.receiptQty-v.issuanceQty,l=v.reference;if(v.selectedBatch){let e=n.batches.find(e=>e.batchId===v.selectedBatch);e&&!l&&(l=`${v.selectedBatch}-${String((e.transactionCount||0)+1).padStart(3,"0")}`)}await (e=n.id,t={...v,reference:l,balance:s},eC("addTransaction",e,t)),M("success","Transaction added successfully!"),await U();let o=(await eC("getItems")).find(e=>e.id===n.id);r(o),u({visible:!1,isEdit:!1,index:null})}catch(e){console.error("Failed to save transaction:",e),M("error","Failed to save transaction: "+e.message)}},K=async()=>{if(!f)return;let e=Number(b.restockQty);!b.restockQty.trim()||isNaN(e)||e<=0?alert("Restock quantity must be a number greater than 0!"):O("Confirm Restock",`Are you sure you want to restock this item with ${e} units?`,async()=>{try{let t,a,i,s=b.selectedBatch?f.batches.find(e=>e.batchId===b.selectedBatch)?.office:"Hemodialysis";await (t=f.id,a={...b,quantity:e,office:s},eC("restockItem",t,a)),await (i={item:f.name,office:s,action:"Restocked",type:"restocked"},eC("addActivity",i)),await U();let l=(await eC("getItems")).find(e=>e.id===f.id);r(l),g(null),M("success","Item restocked successfully!")}catch(e){console.error("Failed to restock:",e),M("error","Failed to restock: "+e.message)}finally{I(null)}},()=>{I(null)})};return(0,h.jsxs)("div",{className:"inventory",children:[z&&(0,h.jsx)("div",{style:{position:"fixed",top:"20px",right:"20px",padding:"16px 24px",borderRadius:"8px",color:"#fff",fontWeight:"600",zIndex:9999,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",backgroundColor:"success"===z.type?"#4ade80":"#f87171"},children:z.message}),B&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>{},style:{zIndex:1e4},children:(0,h.jsxs)("div",{className:"modal",style:{maxWidth:"400px"},onClick:e=>e.stopPropagation(),children:[(0,h.jsx)("div",{className:"modal-header",children:(0,h.jsx)("h2",{className:"modal-title",children:B.title})}),(0,h.jsx)("div",{className:"modal-body",style:{padding:"24px"},children:(0,h.jsx)("p",{style:{margin:0,color:"#374151",fontSize:"16px"},children:B.message})}),(0,h.jsxs)("div",{className:"modal-footer",style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{B.onCancel&&B.onCancel()},children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:()=>{B.onConfirm&&B.onConfirm()},children:"Confirm"})]})]})}),(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"Inventory Management"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Manage and track your medical supplies by batches"})]}),(0,h.jsxs)("button",{className:"btn-primary",onClick:()=>{let e=H();S({name:"",sku:e,location:"",unit:"Pieces",minStock:"",initialBatch:{batchId:`${e}-001`,sku:e,quantity:"",assignedFor:"Hemodialysis",brand:"",supplier:"",ptr:"",costPerUnit:"",remarks:""}}),p(!0)},children:[(0,h.jsx)(ef,{src:e$,alt:"Add Item",size:20}),"Add Item"]})]}),(0,h.jsxs)("div",{className:"filters-bar",children:[(0,h.jsxs)("div",{className:"search-box",children:[(0,h.jsx)("span",{className:"search-icon",children:(0,h.jsx)(ef,{src:eM,alt:"Search",size:20})}),(0,h.jsx)("input",{type:"text",placeholder:"Search items by name or SKU...",value:s,onChange:e=>l(e.target.value)})]}),(0,h.jsxs)("select",{className:"select-input",value:a,onChange:e=>i(e.target.value),children:[(0,h.jsx)("option",{value:"all",children:"All Offices"}),(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"})]})]}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"inventory-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{style:{width:"40px"}}),(0,h.jsx)("th",{children:"SKU"}),(0,h.jsx)("th",{children:"Item Name"}),(0,h.jsx)("th",{children:"Total Stock"}),(0,h.jsx)("th",{children:"Location"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:Q.map(e=>{let t,a,i,s,l=$(e),n=(t=$(e),a=e.batches.some(e=>L(e.expiryDate)),i=e.batches.some(e=>W(e.expiryDate)),s=t<e.minStock,a?{label:"Expired",type:"expired"}:i?{label:"Near Expiry",type:"near-expiry"}:s?{label:"Low Stock",type:"low"}:{label:"In Stock",type:"ok"}),o=l<e.minStock,d=N.has(e.id);return(0,h.jsxs)(x.default.Fragment,{children:[(0,h.jsxs)("tr",{className:"item-row",onClick:()=>{var t;let a;return t=e.id,void((a=new Set(N)).has(t)?a.delete(t):a.add(t),w(a))},children:[(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:"expand-icon",children:(0,h.jsx)(ef,{src:d?eW:eU,alt:d?"Collapse":"Expand",size:20})})}),(0,h.jsx)("td",{className:"sku",children:e.sku}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{className:"item-name",children:e.name})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:`stock-cell ${o?"low":""}`,children:[l," ",e.unit]})}),(0,h.jsx)("td",{children:e.location}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`status-badge ${n.type}`,children:n.label})}),(0,h.jsxs)("td",{onClick:e=>e.stopPropagation(),children:[" ",(0,h.jsxs)("div",{className:"actions",children:[(0,h.jsx)("button",{className:"btn-icon",title:"Restock Item",onClick:()=>{g(e),j({date:new Date().toISOString().split("T")[0],restockQty:"",ptrNo:"",remarks:"",costPerUnit:e.batches.length>0&&e.batches[0].costPerUnit||"",selectedBatch:e.batches.length>0?e.batches[0].batchId:null})},children:(0,h.jsx)(ef,{src:eQ,alt:"Restock",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"View Stock Card",onClick:()=>r(e),children:(0,h.jsx)(ef,{src:eT,alt:"Stock Card",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"Edit Item",onClick:()=>{A(JSON.parse(JSON.stringify(e))),c(e)},children:(0,h.jsx)(ef,{src:eL,alt:"Edit",size:20})})]})]})]}),d&&(0,h.jsx)("tr",{className:"batches-row",children:(0,h.jsx)("td",{colSpan:7,children:(0,h.jsx)("div",{className:"batches-container",children:(0,h.jsxs)("table",{className:"batches-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Batch ID"}),(0,h.jsx)("th",{children:"Brand"}),(0,h.jsx)("th",{children:"Supplier"}),(0,h.jsx)("th",{children:"Stock #"}),(0,h.jsx)("th",{children:"Office"}),(0,h.jsx)("th",{children:"Stock"}),(0,h.jsx)("th",{children:"Expiry Date"}),(0,h.jsx)("th",{children:"Status"})]})}),(0,h.jsx)("tbody",{children:e.batches.map((t,a)=>{var i;let s=L(t.expiryDate),l=W(t.expiryDate),n={label:"OK",type:"ok"};return s?n={label:"Expired",type:"expired"}:l&&(n={label:"Near Expiry",type:"near-expiry"}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"batch-id",children:t.batchId}),(0,h.jsx)("td",{children:t.brand||"-"}),(0,h.jsx)("td",{children:t.supplier||"-"}),(0,h.jsx)("td",{children:t.stockNumber||"-"}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:"office-tag",children:t.office})}),(0,h.jsxs)("td",{children:[t.stock," ",e.unit]}),(0,h.jsx)("td",{className:`expiry-cell ${l?"near":s?"expired":""}`,children:(i=t.expiryDate)?new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"N/A"}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`status-badge ${n.type}`,children:n.label})})]},a)})})]})})})})]},e.id)})})]})})}),n&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>r(null),children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header no-print",children:[" ",(0,h.jsxs)("h2",{className:"modal-title",children:["Stock Card: ",n.name]}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>r(null),children:(0,h.jsx)(ef,{src:eF,alt:"Close",size:24})})]}),(0,h.jsxs)("div",{className:"modal-body",children:[(0,h.jsx)("div",{className:"stock-card-header",style:{border:"1px solid #e5e7eb",borderRadius:"8px",padding:"20px",marginBottom:"24px",backgroundColor:"#f9fafb"},children:(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",alignItems:"start"},children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{style:{display:"flex",marginBottom:"12px"},children:[(0,h.jsx)("span",{style:{width:"140px",fontWeight:"600",color:"#4b5563"},children:"Location:"}),(0,h.jsx)("span",{style:{color:"#1f2937"},children:n.location||"-"})]}),(0,h.jsxs)("div",{style:{display:"flex",marginBottom:"12px"},children:[(0,h.jsx)("span",{style:{width:"140px",fontWeight:"600",color:"#4b5563"},children:"Item Description:"}),(0,h.jsx)("span",{style:{color:"#1f2937",fontWeight:"500"},children:n.name})]}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("span",{style:{width:"140px",fontWeight:"600",color:"#4b5563"},children:"Unit of Measure:"}),(0,h.jsx)("span",{style:{color:"#1f2937"},children:n.unit})]})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,h.jsx)("span",{style:{fontWeight:"600",color:"#4b5563"},children:"Stock No.:"}),(0,h.jsx)("span",{style:{marginLeft:"8px",color:"#1f2937",fontWeight:"500"},children:n.sku})]})})]})}),(0,h.jsx)("div",{className:"stock-card-table-container",children:(0,h.jsxs)("table",{className:"stock-card-table",style:{borderCollapse:"collapse",width:"100%"},children:[(0,h.jsxs)("thead",{style:{backgroundColor:"#f3f4f6",color:"#000",fontSize:"18px",fontWeight:"700"},children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Date"}),(0,h.jsx)("th",{colSpan:3,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Quantity"}),(0,h.jsxs)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:["Cost",(0,h.jsx)("br",{}),"(Price/Unit)"]}),(0,h.jsxs)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:["IR/DR/SI/RIS/PTR/BL No.",(0,h.jsx)("br",{}),"No."]}),(0,h.jsx)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Recipient/Remarks"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Received"}),(0,h.jsx)("th",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Issued"}),(0,h.jsx)("th",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Balance"})]})]}),(0,h.jsx)("tbody",{children:n.transactions&&n.transactions.map((e,t)=>(0,h.jsxs)("tr",{style:{backgroundColor:t%2==0?"#f9fafb":"#fff"},children:[(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:new Date(e.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.receiptQty>0?e.receiptQty:""}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.issuanceQty>0?e.issuanceQty:""}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center",fontWeight:"600",fontSize:"16px"},children:e.balance}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.costPerUnit||"-"}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.ptr||e.reference||"-"}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"left"},children:e.remarks||e.office||"-"})]},t))})]})})]}),(0,h.jsxs)("div",{className:"modal-footer no-print",children:[(0,h.jsxs)("button",{className:"btn-primary",onClick:()=>window.print(),children:[(0,h.jsx)(ef,{src:e_,alt:"Print",size:20}),"Print"]}),(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>r(null),children:"Close"})]})]})}),o&&C&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>{c(null),A(null)},children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{className:"modal-title",children:"Edit Item"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>{c(null),A(null)},children:(0,h.jsx)(ef,{src:eF,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Item Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:C.name,onChange:e=>A({...C,name:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:C.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Location"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:C.location,onChange:e=>A({...C,location:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Minimum Stock Level"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:C.minStock,onChange:e=>A({...C,minStock:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Batches"}),(0,h.jsx)("div",{className:"batches-edit-container",children:C.batches.map((e,t)=>(0,h.jsxs)("div",{className:"batch-edit-row",children:[(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Batch ID"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.batchId,onChange:a=>{let i=[...C.batches];i[t]={...e,batchId:a.target.value},A({...C,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Brand"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.brand,onChange:a=>{let i=[...C.batches];i[t]={...e,brand:a.target.value},A({...C,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Supplier"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.supplier,onChange:a=>{let i=[...C.batches];i[t]={...e,supplier:a.target.value},A({...C,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Stock #"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.stockNumber,onChange:a=>{let i=[...C.batches];i[t]={...e,stockNumber:a.target.value},A({...C,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Office"}),(0,h.jsxs)("select",{className:"form-input",value:e.office,onChange:a=>{let i=[...C.batches];i[t]={...e,office:a.target.value},A({...C,batches:i})},children:[(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"}),(0,h.jsx)("option",{value:"Unallocated",children:"Unallocated"})]})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Stock"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.stock,onChange:a=>{let i=[...C.batches];i[t]={...e,stock:parseInt(a.target.value)||0},A({...C,batches:i})}})]}),(0,h.jsx)("div",{className:"form-group mini",children:(0,h.jsxs)("label",{className:"toggle-label",children:[(0,h.jsx)("input",{type:"checkbox",checked:!!e.expiryDate,onChange:a=>{let i=[...C.batches];i[t]={...e,expiryDate:a.target.checked?new Date().toISOString().split("T")[0]:null},A({...C,batches:i})}}),"Has Expiry"]})}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Expiry Date"}),(0,h.jsx)("input",{type:"date",className:"form-input",value:e.expiryDate||"",disabled:!e.expiryDate,onChange:a=>{let i=[...C.batches];i[t]={...e,expiryDate:a.target.value},A({...C,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"PTR (Document Serial)"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.ptr||"",onChange:a=>{let i=[...C.batches];i[t]={...e,ptr:a.target.value},A({...C,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Cost per Unit"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.costPerUnit||"",onChange:a=>{let i=[...C.batches];i[t]={...e,costPerUnit:a.target.value},A({...C,batches:i})}})]}),(0,h.jsx)("button",{className:"btn-icon remove-btn",title:"Remove Batch",onClick:()=>(e=>{if(C.batches.length<=1)return void alert("An item must have at least one batch!");let t=[...C.batches];t.splice(e,1),A({...C,batches:t})})(t),children:(0,h.jsx)(ef,{src:eH,alt:"Remove",size:20})})]},t))})]})]})}),(0,h.jsxs)("div",{className:"modal-footer",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{let e=C.batches.length+1,t={batchId:`${C.sku}-${String(e).padStart(3,"0")}`,brand:"",supplier:"",stockNumber:`SN-${Date.now().toString().slice(-4)}`,office:"Hemodialysis",stock:0,expiryDate:null,transactionCount:0,ptr:"",costPerUnit:"",remarks:""};A({...C,batches:[...C.batches,t]})},children:"Add Batch"}),(0,h.jsxs)("div",{className:"button-group",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{c(null),A(null)},children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:_,children:"Save Changes"})]})]})]})}),m.visible&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>u({visible:!1,isEdit:!1,index:null}),children:(0,h.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{className:"modal-title",children:m.isEdit?"Edit Transaction":"Add Transaction"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>u({visible:!1,isEdit:!1,index:null}),children:(0,h.jsx)(ef,{src:eF,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Date"}),(0,h.jsx)("input",{type:"date",className:"form-input",value:v.date,onChange:e=>y({...v,date:e.target.value})})]}),n&&n.batches&&n.batches.length>0&&(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Batch"}),(0,h.jsxs)("select",{className:"form-input",value:v.selectedBatch||"",onChange:e=>{let t=e.target.value||null,a=v.reference;if(t){let e=n.batches.find(e=>e.batchId===t),i=(e?.transactionCount||0)+1;a=`${t}-${String(i).padStart(3,"0")}`}y({...v,selectedBatch:t,reference:a})},children:[(0,h.jsx)("option",{value:"",children:"Select a Batch"}),n.batches.map((e,t)=>(0,h.jsxs)("option",{value:e.batchId,children:[e.batchId," - ",e.brand||"No Brand"," (",e.stock," ",n.unit,") - Issued ",e.transactionCount||0,"x"]},t))]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Reference"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:v.reference,onChange:e=>y({...v,reference:e.target.value})})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Receipt Qty"}),(0,h.jsx)("input",{type:"number",className:"form-input",value:v.receiptQty,onChange:e=>y({...v,receiptQty:parseInt(e.target.value)||0})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Issuance Qty"}),(0,h.jsx)("input",{type:"number",className:"form-input",value:v.issuanceQty,onChange:e=>y({...v,issuanceQty:parseInt(e.target.value)||0})})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Office"}),(0,h.jsxs)("select",{className:"form-input",value:v.office,onChange:e=>y({...v,office:e.target.value}),children:[(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"}),(0,h.jsx)("option",{value:"All",children:"All"})]})]})]})}),(0,h.jsxs)("div",{className:"modal-footer",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>u({visible:!1,isEdit:!1,index:null}),children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:J,children:"Save"})]})]})}),f&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>g(null),children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsxs)("h2",{className:"modal-title",children:["Restock Item: ",f.name]}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>g(null),children:(0,h.jsx)(ef,{src:eF,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px",padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Item Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:f.name,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:f.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Current Stock"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:`${$(f)} ${f.unit}`,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Current PTR No."}),(0,h.jsx)("input",{type:"text",className:"form-input",value:b.ptrNo||f.batches[0]?.ptr||"-",disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Current Department"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:f.batches[0]?.office||"Hemodialysis",disabled:!0})]})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Date of Restock"}),(0,h.jsx)("input",{type:"date",className:"form-input",value:b.date,onChange:e=>j({...b,date:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Quantity to Add"}),(0,h.jsx)("input",{type:"number",className:"form-input",placeholder:"Enter quantity",value:b.restockQty,onChange:e=>j({...b,restockQty:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"PTR No."}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter PTR No.",value:b.ptrNo,onChange:e=>j({...b,ptrNo:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Cost per Unit"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter cost per unit",value:b.costPerUnit,onChange:e=>j({...b,costPerUnit:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",style:{gridColumn:"span 2"},children:[(0,h.jsx)("label",{className:"form-label",children:"Remarks"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter remarks",value:b.remarks,onChange:e=>j({...b,remarks:e.target.value})})]}),f.batches&&f.batches.length>0&&(0,h.jsxs)("div",{className:"form-group",style:{gridColumn:"span 2"},children:[(0,h.jsx)("label",{className:"form-label",children:"Select Batch"}),(0,h.jsx)("select",{className:"form-input",value:b.selectedBatch||"",onChange:e=>j({...b,selectedBatch:e.target.value}),children:f.batches.map((e,t)=>(0,h.jsxs)("option",{value:e.batchId,children:[e.batchId," - ",e.brand||"No Brand"," (",e.stock," ",f.unit,")"]},t))})]})]})]})}),(0,h.jsxs)("div",{className:"modal-footer",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>g(null),children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:K,children:"Save Restock"})]})]})}),d&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>p(!1),children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{className:"modal-title",children:"Add New Item"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>p(!1),children:(0,h.jsx)(ef,{src:eF,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsx)("h3",{style:{marginBottom:"16px",color:"#1f2937"},children:"Item Details"}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Item Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter item name",value:k.name,onChange:e=>S({...k,name:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU "}),(0,h.jsx)("input",{type:"text",className:"form-input",value:k.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Unit of Measurement"}),(0,h.jsxs)("select",{className:"form-input",value:k.unit,onChange:e=>S({...k,unit:e.target.value}),children:[(0,h.jsx)("option",{value:"Pieces",children:"Pieces"}),(0,h.jsx)("option",{value:"Packs",children:"Packs"}),(0,h.jsx)("option",{value:"Boxes",children:"Boxes"}),(0,h.jsx)("option",{value:"Bottles",children:"Bottles"}),(0,h.jsx)("option",{value:"Vials",children:"Vials"}),(0,h.jsx)("option",{value:"Sets",children:"Sets"})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Location"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter location",value:k.location,onChange:e=>S({...k,location:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Minimum Stock Level"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter minimum stock",value:k.minStock,onChange:e=>S({...k,minStock:e.target.value})})]})]}),(0,h.jsxs)("h3",{style:{marginBottom:"16px",color:"#1f2937"},children:["Add Initial Batch",(0,h.jsx)("span",{style:{color:"#dc2626",marginLeft:"8px"},children:"(Required)"})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginBottom:"16px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Batch ID"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:k.initialBatch.batchId,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:k.initialBatch.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Quantity"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter quantity",value:k.initialBatch.quantity,onChange:e=>S({...k,initialBatch:{...k.initialBatch,quantity:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Assigned For"}),(0,h.jsxs)("select",{className:"form-input",value:k.initialBatch.assignedFor,onChange:e=>S({...k,initialBatch:{...k.initialBatch,assignedFor:e.target.value}}),children:[(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"}),(0,h.jsx)("option",{value:"Unallocated",children:"Unallocated"})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Brand"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter brand",value:k.initialBatch.brand,onChange:e=>S({...k,initialBatch:{...k.initialBatch,brand:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Supplier"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter supplier",value:k.initialBatch.supplier,onChange:e=>S({...k,initialBatch:{...k.initialBatch,supplier:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"PTR (Document Serial)"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter PTR",value:k.initialBatch.ptr,onChange:e=>S({...k,initialBatch:{...k.initialBatch,ptr:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Cost per Unit"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter Cost",value:k.initialBatch.costPerUnit,onChange:e=>S({...k,initialBatch:{...k.initialBatch,costPerUnit:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Date (Auto-generated)"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:new Date().toISOString().split("T")[0],disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Remarks"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter remarks",value:k.initialBatch.remarks,onChange:e=>S({...k,initialBatch:{...k.initialBatch,remarks:e.target.value}})})]})]})]})}),(0,h.jsx)("div",{className:"modal-footer",children:(0,h.jsxs)("div",{className:"button-group",style:{marginLeft:"auto"},children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>p(!1),children:"Cancel"}),(0,h.jsxs)("button",{className:"btn-primary",onClick:F,children:[(0,h.jsx)(ef,{src:e$,alt:"Add",size:20}),"Add Item"]})]})})]})}),(0,h.jsx)("style",{children:`
        .inventory {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .inventory-table {
          width: 100%;
          border-collapse: collapse;
        }

        .inventory-table th,
        .inventory-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .inventory-table thead {
          background: #f9fafb;
        }

        .inventory-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .inventory-table .item-row {
          border-bottom: 1px solid #f3f4f6;
          cursor: pointer;
        }

        .inventory-table .item-row:hover {
          background: #f9fafb;
        }

        .sku {
          font-family: monospace;
          color: #6b7280;
        }

        .item-name {
          font-weight: 600;
          color: #1f2937;
        }

        .office-tag {
          display: inline-block;
          padding: 4px 10px;
          background: #f3f4f6;
          color: #4b5563;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
        }

        .stock-cell {
          font-weight: 600;
          white-space: nowrap;
        }

        .stock-cell.low {
          color: #dc2626;
        }

        .expiry-cell {
          font-weight: 500;
          white-space: nowrap;
        }

        .expiry-cell.near {
          color: #f59e0b;
          font-weight: 600;
        }

        .expiry-cell.expired {
          color: #dc2626;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .status-badge.ok {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.low {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-badge.near-expiry {
          background: #fef3c7;
          color: #92400e;
        }

        .status-badge.expired {
          background: #fecaca;
          color: #7f1d1d;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        .expand-icon {
          font-size: 10px;
          color: #6b7280;
        }

        .batches-row {
          background: #f9fafb;
        }

        .batches-container {
          padding: 12px 24px 24px;
        }

        .batches-table {
          width: 100%;
          border-collapse: collapse;
        }

        .batches-table th {
          background: transparent;
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          padding: 8px 12px;
          text-align: left;
        }

        .batches-table td {
          padding: 10px 12px;
          font-size: 13px;
        }

        .batches-table tr {
          border-bottom: 1px solid #e5e7eb;
        }

        .batch-id {
          font-family: monospace;
          color: #374151;
        }

        /* Toggle Label */
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #1f2937;
          cursor: pointer;
        }

        .toggle-label input {
          width: auto;
          cursor: pointer;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        /* Print Styles */
        @media print {
          .no-print {
            display: none !important;
          }
          .modal {
            box-shadow: none !important;
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .stock-card-table-container {
            overflow: visible !important;
          }
          .modal-body {
            overflow: visible !important;
            padding: 0 !important;
          }
        }

        .modal {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-large {
          max-width: 1100px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #6b7280;
          line-height: 1;
          padding: 0 8px;
          border-radius: 4px;
        }

        .close-btn:hover {
          background: #f3f4f6;
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #f3f4f6;
        }

        .button-group {
          display: flex;
          gap: 12px;
        }

        .detail-section {
          margin-bottom: 24px;
        }

        .detail-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .detail-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 14px;
          color: #1f2937;
          font-weight: 500;
        }

        .allocations-table {
          width: 100%;
          border-collapse: collapse;
        }

        .allocations-table th,
        .allocations-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #f3f4f6;
          text-align: left;
        }

        .allocations-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          background: #f9fafb;
        }

        .allocations-table td {
          font-size: 14px;
          color: #1f2937;
        }

        .allocations-table tfoot td {
          font-weight: 700;
          border-top: 2px solid #f3f4f6;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.mini {
          flex: 1;
          min-width: 0;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        /* Stock Card Styles */
        .stock-card-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 24px;
          border: 2px solid #1f2937;
          padding: 20px;
          border-radius: 8px;
        }

        .clinic-info {
          text-align: center;
        }

        .clinic-info h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .clinic-info p {
          margin: 0;
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .stock-card-field {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .field-label {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }

        .field-value {
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-table-container {
          overflow-x: auto;
        }

        .stock-card-table {
          width: 100%;
          border-collapse: collapse;
        }

        .stock-card-table th,
        .stock-card-table td {
          border: 1px solid #000;
          padding: 10px;
          text-align: left;
        }

        .stock-card-table th {
          background: #f3f4f6;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
        }

        .table-header-group {
          border-left: 1px solid #000;
          background: #e5e7eb;
        }

        .table-header-space {
          width: 40px;
        }

        .transaction-actions {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .actions-header {
          width: 100px;
        }

        .form-input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }

        .batches-edit-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .batch-edit-row {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .remove-btn {
          color: #dc2626;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .filters-bar {
            gap: 12px;
          }

          .search-box {
            min-width: 100%;
            order: -1;
          }

          .select-input {
            flex: 1;
          }

          .batch-edit-row {
            flex-direction: column;
            align-items: stretch;
          }

          .form-group.mini {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            gap: 12px;
          }

          .select-input {
            width: 100%;
          }

          .modal {
            margin: 16px;
            border-radius: 12px;
          }

          .detail-grid {
            grid-template-columns: 1fr;
          }

          .modal-footer {
            flex-direction: column;
          }

          .button-group {
            width: 100%;
            flex-direction: column;
          }

          .button-group button {
            width: 100%;
          }
        }
      `})]})},eK=()=>{let[e,t]=(0,x.useState)({office:"",purpose:"",requestedBy:"",approvedBy:"",issuedBy:"",receivedBy:"",date:new Date().toISOString().split("T")[0],requisitionNo:`RIS-${Date.now().toString().slice(-6)}`});return(0,h.jsxs)("div",{className:"requisition",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"Requisition & Issue Slip (RIS)"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Create and print requisition forms"})]}),(0,h.jsxs)("div",{className:"header-actions",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{window.print()},children:"🖨️ Print"}),(0,h.jsx)("button",{className:"btn-primary",children:"Submit Request"})]})]}),(0,h.jsx)("div",{className:"card",children:(0,h.jsxs)("div",{className:"ris-form",children:[(0,h.jsxs)("div",{className:"ris-header",children:[(0,h.jsxs)("div",{className:"ris-header-top",children:[(0,h.jsx)("div",{className:"clinic-logo",children:"🏥"}),(0,h.jsxs)("div",{className:"clinic-info",children:[(0,h.jsx)("h2",{children:"BPDACC Inventory Management"}),(0,h.jsx)("p",{children:"REQUISITION & ISSUE SLIP"})]}),(0,h.jsxs)("div",{className:"ris-number",children:[(0,h.jsx)("span",{className:"ris-label",children:"RIS No."}),(0,h.jsx)("span",{className:"ris-value",children:e.requisitionNo})]})]}),(0,h.jsxs)("div",{className:"ris-meta",children:[(0,h.jsxs)("div",{className:"meta-group",children:[(0,h.jsx)("span",{className:"meta-label",children:"Office:"}),(0,h.jsxs)("select",{value:e.office,onChange:a=>t({...e,office:a.target.value}),className:"form-input meta-input",children:[(0,h.jsx)("option",{value:"",children:"Select Office"}),(0,h.jsx)("option",{value:"hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"clinical-laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"admin-office",children:"Admin Office"})]})]}),(0,h.jsxs)("div",{className:"meta-group",children:[(0,h.jsx)("span",{className:"meta-label",children:"Code:"}),(0,h.jsx)("input",{type:"text",className:"form-input meta-input",placeholder:"Code"})]})]}),(0,h.jsx)("div",{className:"ris-header-line"})]}),(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"ris-table",children:[(0,h.jsxs)("thead",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{colSpan:"4",className:"section-header",children:"REQUISITION"}),(0,h.jsx)("th",{colSpan:"2",className:"section-header",children:"ISSUE"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:"col-stock-no",children:"STOCK NO."}),(0,h.jsx)("th",{className:"col-unit",children:"UNIT"}),(0,h.jsx)("th",{className:"col-description",children:"DESCRIPTION"}),(0,h.jsx)("th",{className:"col-req-qty",children:"QTY"}),(0,h.jsx)("th",{className:"col-issue-qty",children:"QTY"}),(0,h.jsx)("th",{className:"col-remarks",children:"REMARKS"})]})]}),(0,h.jsx)("tbody",{children:[...Array(15)].map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"text",className:"table-input",placeholder:""})}),(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"text",className:"table-input",placeholder:""})}),(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"text",className:"table-input",placeholder:""})}),(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"text",className:"table-input",placeholder:""})}),(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"text",className:"table-input",placeholder:""})}),(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"text",className:"table-input",placeholder:""})})]},t))})]})}),(0,h.jsxs)("div",{className:"purpose-section",children:[(0,h.jsx)("span",{className:"purpose-label",children:"Purpose:"}),(0,h.jsx)("input",{type:"text",value:e.purpose,onChange:a=>t({...e,purpose:a.target.value}),className:"form-input purpose-input",placeholder:"Enter purpose"})]}),(0,h.jsxs)("div",{className:"ris-signatures",children:[(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Requested by:"}),(0,h.jsxs)("div",{className:"signature-inputs",children:[(0,h.jsx)("input",{type:"text",placeholder:"Printed Name",className:"sig-input"}),(0,h.jsxs)("div",{className:"sig-row",children:[(0,h.jsx)("input",{type:"text",placeholder:"Designation",className:"sig-input-small"}),(0,h.jsx)("input",{type:"date",className:"sig-input-small"})]})]})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Approved by:"}),(0,h.jsxs)("div",{className:"signature-inputs",children:[(0,h.jsx)("input",{type:"text",placeholder:"Printed Name",className:"sig-input"}),(0,h.jsxs)("div",{className:"sig-row",children:[(0,h.jsx)("input",{type:"text",placeholder:"Designation",className:"sig-input-small"}),(0,h.jsx)("input",{type:"date",className:"sig-input-small"})]})]})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Issued by:"}),(0,h.jsxs)("div",{className:"signature-inputs",children:[(0,h.jsx)("input",{type:"text",placeholder:"Printed Name",className:"sig-input"}),(0,h.jsxs)("div",{className:"sig-row",children:[(0,h.jsx)("input",{type:"text",placeholder:"Designation",className:"sig-input-small"}),(0,h.jsx)("input",{type:"date",className:"sig-input-small"})]})]})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Received by:"}),(0,h.jsxs)("div",{className:"signature-inputs",children:[(0,h.jsx)("input",{type:"text",placeholder:"Printed Name",className:"sig-input"}),(0,h.jsxs)("div",{className:"sig-row",children:[(0,h.jsx)("input",{type:"text",placeholder:"Designation",className:"sig-input-small"}),(0,h.jsx)("input",{type:"date",className:"sig-input-small"})]})]})]})]}),(0,h.jsx)("div",{className:"page-number",children:"P."})]})}),(0,h.jsx)("style",{children:`
        .requisition {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .ris-form {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .ris-header {
          margin-bottom: 24px;
        }

        .ris-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 16px;
        }

        .clinic-logo {
          font-size: 48px;
        }

        .clinic-info {
          text-align: center;
          flex: 1;
        }

        .clinic-info h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 4px;
        }

        .clinic-info p {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .ris-number {
          text-align: right;
        }

        .ris-label {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .ris-value {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .ris-meta {
          display: flex;
          gap: 30px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .meta-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .meta-label {
          font-weight: 600;
          font-size: 14px;
          color: #1f2937;
        }

        .meta-input {
          min-width: 150px;
          padding: 8px 12px;
        }

        .form-input {
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .ris-header-line {
          height: 3px;
          background: #1e40af;
        }

        .table-container {
          overflow-x: auto;
        }

        .ris-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          min-width: 600px;
        }

        .ris-table th,
        .ris-table td {
          border: 1px solid #e5e7eb;
          padding: 10px 12px;
          text-align: left;
        }

        .ris-table thead th {
          background: #f9fafb;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          text-align: center;
          color: #6b7280;
          letter-spacing: 0.5px;
        }

        .section-header {
          background: #f3f4f6 !important;
          font-weight: 700 !important;
          color: #1f2937 !important;
        }

        .col-stock-no { width: 12%; }
        .col-unit { width: 8%; }
        .col-description { width: 38%; }
        .col-req-qty { width: 12%; }
        .col-issue-qty { width: 12%; }
        .col-remarks { width: 18%; }

        .table-input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 13px;
          outline: none;
          padding: 4px;
        }

        .ris-table tbody tr {
          height: 36px;
        }

        .ris-table tbody tr:hover {
          background: #f9fafb;
        }

        .purpose-section {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          flex-wrap: wrap;
        }

        .purpose-label {
          font-weight: 700;
          font-size: 14px;
          color: #1f2937;
          white-space: nowrap;
        }

        .purpose-input {
          flex: 1;
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding: 6px 0;
          font-size: 14px;
          min-width: 200px;
          outline: none;
        }

        .purpose-input:focus {
          border-bottom-color: #1e40af;
        }

        .ris-signatures {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-bottom: 1px solid #d1d5db;
          margin-bottom: 8px;
          margin-top: 28px;
        }

        .signature-label {
          font-size: 12px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .signature-inputs {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sig-input {
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding: 4px;
          font-size: 12px;
          text-align: center;
          outline: none;
        }

        .sig-input:focus {
          border-bottom-color: #1e40af;
        }

        .sig-row {
          display: flex;
          gap: 6px;
        }

        .sig-input-small {
          flex: 1;
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding: 4px;
          font-size: 11px;
          text-align: center;
          outline: none;
        }

        .sig-input-small:focus {
          border-bottom-color: #1e40af;
        }

        .page-number {
          text-align: right;
          font-weight: 600;
          margin-top: 12px;
          font-size: 14px;
          color: #6b7280;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .ris-signatures {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .ris-header-top {
            flex-direction: column;
            text-align: center;
          }

          .clinic-info h2 {
            font-size: 18px;
          }

          .ris-meta {
            flex-direction: column;
            gap: 12px;
          }

          .meta-group {
            width: 100%;
          }

          .meta-input {
            flex: 1;
            width: 100%;
          }

          .purpose-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .purpose-input {
            width: 100%;
          }

          .ris-signatures {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .page-header {
            display: none;
          }

          .card {
            box-shadow: none;
            padding: 20px;
            border-radius: 0;
          }

          .ris-table th,
          .ris-table td {
            border: 1px solid #000;
          }

          .ris-table thead th {
            background: #f9fafb;
            color: #000;
          }

          .section-header {
            background: #f3f4f6 !important;
            color: #000 !important;
          }

          .ris-header-line {
            background: #000;
          }

          .signature-line {
            border-bottom: 1px solid #000;
          }

          .table-input,
          .purpose-input,
          .sig-input,
          .sig-input-small {
            border-bottom: none;
          }
        }
      `})]})},eV=()=>{let[e,t]=(0,x.useState)([{id:1,risNo:"RIS-2026-001",requestDate:"2026-06-29",requestedBy:"Maria Santos",role:"Nurse",office:"Hemodialysis",items:[{name:"Syringes 5ml",quantity:50,unit:"pcs"},{name:"Gauze Pads (4x4)",quantity:20,unit:"packs"}],status:"Pending"},{id:2,risNo:"RIS-2026-002",requestDate:"2026-06-28",requestedBy:"Jose Reyes",role:"Lab Tech",office:"Clinical Laboratory",items:[{name:"Microscope Slides",quantity:100,unit:"pcs"},{name:"Test Tubes",quantity:50,unit:"pcs"}],status:"Approved"},{id:3,risNo:"RIS-2026-003",requestDate:"2026-06-27",requestedBy:"Anna Cruz",role:"Pharmacist",office:"Radiology",items:[{name:"X-Ray Film",quantity:30,unit:"sheets"}],status:"Rejected"}]),[a,i]=(0,x.useState)(null),s=(a,i)=>{t(e.map(e=>e.id===a?{...e,status:i}:e))};return(0,h.jsxs)("div",{className:"page",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsx)("h1",{className:"page-title",children:"Requisition Requests"}),(0,h.jsx)("p",{className:"page-description",children:"View and manage requisition requests from other users"})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"All Requests"})}),(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"RIS No."}),(0,h.jsx)("th",{children:"Date"}),(0,h.jsx)("th",{children:"Requested By"}),(0,h.jsx)("th",{children:"Office"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:e.map(e=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.risNo}),(0,h.jsx)("td",{children:new Date(e.requestDate).toLocaleDateString()}),(0,h.jsxs)("td",{children:[e.requestedBy,(0,h.jsx)("br",{}),(0,h.jsx)("span",{className:"badge badge-info",children:e.role})]}),(0,h.jsx)("td",{children:e.office}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`badge ${"Pending"===e.status?"badge-warning":"Approved"===e.status?"badge-success":"badge-danger"}`,children:e.status})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"actions",style:{display:"flex",gap:"8px"},children:[(0,h.jsx)("button",{className:"btn-secondary",style:{fontSize:"12px",padding:"4px 8px"},onClick:()=>{i(e)},children:"View"}),"Pending"===e.status&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"btn-primary",style:{fontSize:"12px",padding:"4px 8px",background:"#10b981"},onClick:()=>s(e.id,"Approved"),children:"Approve"}),(0,h.jsx)("button",{className:"btn-secondary",style:{fontSize:"12px",padding:"4px 8px",background:"#ef4444",color:"white"},onClick:()=>s(e.id,"Rejected"),children:"Reject"})]})]})})]},e.id))})]})})]}),a&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>i(null),children:(0,h.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsxs)("h2",{className:"modal-title",children:["Request Details: ",a.risNo]}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>i(null),children:"×"})]}),(0,h.jsxs)("div",{className:"modal-body",children:[(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px"},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Request Date"}),(0,h.jsx)("p",{children:new Date(a.requestDate).toLocaleDateString()})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Requested By"}),(0,h.jsxs)("p",{children:[a.requestedBy," (",a.role,")"]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Office"}),(0,h.jsx)("p",{children:a.office})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Status"}),(0,h.jsx)("span",{className:`badge ${"Pending"===a.status?"badge-warning":"Approved"===a.status?"badge-success":"badge-danger"}`,children:a.status})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Requested Items"}),(0,h.jsxs)("table",{className:"table",style:{marginTop:"8px"},children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Item"}),(0,h.jsx)("th",{children:"Quantity"}),(0,h.jsx)("th",{children:"Unit"})]})}),(0,h.jsx)("tbody",{children:a.items.map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.name}),(0,h.jsx)("td",{children:e.quantity}),(0,h.jsx)("td",{children:e.unit})]},t))})]})]})]}),(0,h.jsxs)("div",{className:"modal-footer",children:["Pending"===a.status&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"btn-primary",style:{background:"#10b981"},onClick:()=>{s(a.id,"Approved"),i(null)},children:"Approve Request"}),(0,h.jsx)("button",{className:"btn-secondary",style:{background:"#ef4444",color:"white"},onClick:()=>{s(a.id,"Rejected"),i(null)},children:"Reject Request"})]}),(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>i(null),children:"Close"})]})]})}),(0,h.jsx)("style",{children:`
        .page {
          padding: 24px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 24px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .page-description {
          color: #6b7280;
          font-size: 14px;
        }

        .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .card-header {
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .table-container {
          overflow-x: auto;
          padding: 0 20px 20px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .table th {
          font-weight: 600;
          color: #374151;
          background: #f9fafb;
        }

        .table td {
          color: #4b5563;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: #1e3a8a;
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #1f2937;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
        }

        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .badge-success {
          background: #d1fae5;
          color: #065f46;
        }

        .badge-warning {
          background: #fef3c7;
          color: #92400e;
        }

        .badge-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .badge-info {
          background: #dbeafe;
          color: #1e40af;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #374151;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px;
          border-top: 1px solid #e5e7eb;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page {
            padding: 16px;
          }

          .page-title {
            font-size: 22px;
          }
        }
      `})]})},eY=()=>{let e,t,a,i,s,l,n,r,o,c,d,p,m,[u,f]=(0,x.useState)("monthly"),[g,b]=(0,x.useState)(new Date().toISOString().slice(0,7)),[j,v]=(0,x.useState)("all"),y=[{id:1,sku:"MED-001",name:"Syringes 5ml",location:"Shelf A-12",minStock:100,unit:"pcs",batches:[{batchId:"B-001",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-001",expiryDate:null,office:"Hemodialysis",stock:250},{batchId:"B-002",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-002",expiryDate:null,office:"Clinical Laboratory",stock:320},{batchId:"B-003",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-003",expiryDate:null,office:"Hemodialysis",stock:200}]},{id:2,sku:"MED-002",name:"Gauze Pads (4x4)",location:"Shelf B-05",minStock:50,unit:"packs",batches:[{batchId:"B-004",brand:"Johnson & Johnson",supplier:"Healthcare Plus",stockNumber:"SN-004",expiryDate:"2026-07-15",office:"Radiology",stock:80},{batchId:"B-005",brand:"Johnson & Johnson",supplier:"Healthcare Plus",stockNumber:"SN-005",expiryDate:"2027-03-20",office:"Radiology",stock:40}]},{id:3,sku:"MED-003",name:"Alcohol Swabs",location:"Shelf C-02",minStock:200,unit:"boxes",batches:[{batchId:"B-006",brand:"CVS",supplier:"Pharmacy Supply Co",stockNumber:"SN-006",expiryDate:"2026-06-30",office:"Admin Office",stock:50}]},{id:4,sku:"MED-004",name:"Bandages (Assorted)",location:"Shelf B-10",minStock:30,unit:"boxes",batches:[{batchId:"B-007",brand:"Band-Aid",supplier:"Healthcare Plus",stockNumber:"SN-007",expiryDate:null,office:"Hemodialysis",stock:60}]},{id:5,sku:"MED-005",name:"Needles 21G",location:"Shelf A-15",minStock:100,unit:"pcs",batches:[{batchId:"B-008",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-008",expiryDate:"2026-08-01",office:"Clinical Laboratory",stock:45}]}],N=[{department:"Hemodialysis",submitted:12,approved:10,rejected:1,pending:1},{department:"Clinical Laboratory",submitted:8,approved:7,rejected:0,pending:1},{department:"Radiology",submitted:6,approved:5,rejected:1,pending:0},{department:"Admin Office",submitted:4,approved:3,rejected:0,pending:1}],w=[{name:"Syringes 5ml",count:45},{name:"Gauze Pads (4x4)",count:32},{name:"Alcohol Swabs",count:28},{name:"Bandages (Assorted)",count:22},{name:"Needles 21G",count:18}],k=[{name:"Available",value:82,color:"#10b981"},{name:"Low Stock",value:12,color:"#f59e0b"},{name:"Critical",value:4,color:"#ef4444"},{name:"Out of Stock",value:2,color:"#6b7280"}],S=[{month:"Jan",count:28},{month:"Feb",count:35},{month:"Mar",count:42},{month:"Apr",count:38},{month:"May",count:45},{month:"Jun",count:52}],[C,A]=g.split("-"),z=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(A)-1],R=e=>e.batches.reduce((e,t)=>e+t.stock,0),B=y.reduce((e,t)=>e+R(t),0),I=y.length,D=y.filter(e=>R(e)<e.minStock).length,P=y.filter(e=>0===R(e)).length,E=y.reduce((e,t)=>e+ +!!t.batches.some(e=>(e=>{if(!e)return!1;let t=new Date,a=Math.ceil((new Date(e)-t)/864e5);return a<=30&&a>0})(e.expiryDate)),0),q=()=>`${u.charAt(0).toUpperCase()+u.slice(1)} Inventory Report`;return(0,h.jsxs)("div",{className:"reports",children:[(0,h.jsxs)("div",{className:"screen-view no-print",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:q()}),(0,h.jsxs)("p",{className:"page-subtitle",children:["Purpose: ","weekly"===u?"Monitor day-to-day operations.":"monthly"===u?"Track monthly inventory trends.":"Analyze annual inventory performance."]})]}),(0,h.jsx)("div",{className:"header-actions",children:(0,h.jsx)("button",{className:"btn-primary",onClick:()=>{window.print()},children:"🖨️ Print Report"})})]}),(0,h.jsxs)("div",{className:"filters-bar",children:[(0,h.jsxs)("div",{className:"filter-group",children:[(0,h.jsx)("label",{children:"Time Period"}),(0,h.jsxs)("select",{value:u,onChange:e=>f(e.target.value),className:"form-input",children:[(0,h.jsx)("option",{value:"weekly",children:"Weekly"}),(0,h.jsx)("option",{value:"monthly",children:"Monthly"}),(0,h.jsx)("option",{value:"yearly",children:"Yearly"})]})]}),(0,h.jsxs)("div",{className:"filter-group",children:[(0,h.jsx)("label",{children:"monthly"===u?"Month":"yearly"===u?"Year":"Week"}),(0,h.jsx)("input",{type:"monthly"===u?"month":"yearly"===u?"number":"date",value:"yearly"===u?C:g,onChange:e=>b(e.target.value),className:"form-input"})]}),(0,h.jsxs)("div",{className:"filter-group",children:[(0,h.jsx)("label",{children:"Office"}),(0,h.jsxs)("select",{value:j,onChange:e=>v(e.target.value),className:"form-input",children:[(0,h.jsx)("option",{value:"all",children:"All Offices"}),(0,h.jsx)("option",{value:"hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"clinical-laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"admin-office",children:"Admin Office"})]})]})]}),(0,h.jsxs)("div",{className:"stats-grid",children:[(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#1e40af"},children:"📦"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:B.toLocaleString()}),(0,h.jsx)("div",{className:"stat-label",children:"Total Supplies in Inventory"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#e0e7ff",color:"#3730a3"},children:"📋"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:I}),(0,h.jsx)("div",{className:"stat-label",children:"Total Different Supply Types"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#92400e"},children:"⚠️"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:D}),(0,h.jsx)("div",{className:"stat-label",children:"Low Stock Items"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#991b1b"},children:"⛔"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:P}),(0,h.jsx)("div",{className:"stat-label",children:"Out of Stock Items"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#fce7f3",color:"#be185d"},children:"⏰"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:E}),(0,h.jsx)("div",{className:"stat-label",children:"Expiring Within 30 Days"})]})]})]}),(0,h.jsxs)("div",{className:"flex-container",style:{display:"flex",gap:"24px",marginBottom:"24px",flexWrap:"wrap"},children:[(0,h.jsxs)("div",{className:"card",style:{flex:1,minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Inventory Status"})}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"32px",alignItems:"center",flexWrap:"wrap"},children:[(0,h.jsxs)("svg",{width:"200",height:"200",viewBox:"0 0 200 200",style:{transform:"rotate(-90deg)"},children:[(e=0,k.map((t,a)=>{let i=t.value/100*2*Math.PI,s=100+90*Math.cos(e),l=100+90*Math.sin(e),n=100+90*Math.cos(e+i),r=100+90*Math.sin(e+i),o=+(i>Math.PI),c=`M 100 100 L ${s} ${l} A 90 90 0 ${o} 1 ${n} ${r} Z`;return e+=i,(0,h.jsx)("path",{d:c,fill:t.color},a)})),(0,h.jsx)("circle",{cx:"100",cy:"100",r:"50",fill:"white"})]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",minWidth:"150px"},children:k.map((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"4px",background:e.color}}),(0,h.jsx)("span",{style:{fontSize:"14px",color:"#374151"},children:e.name})]}),(0,h.jsxs)("span",{style:{fontSize:"14px",fontWeight:"600",color:"#1f2937"},children:[e.value,"%"]})]},t))})]})]}),(0,h.jsxs)("div",{className:"card",style:{flex:1,minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Monthly Supply Requests"})}),(0,h.jsx)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"flex-end",height:"180px",padding:"12px 0"},children:(t=Math.max(...S.map(e=>e.count)),S.map((e,a)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[(0,h.jsx)("div",{style:{width:"40px",background:"#1e40af",borderRadius:"4px 4px 0 0",transition:"height 0.3s ease",height:`${e.count/t*140}px`,display:"flex",justifyContent:"center",alignItems:"flex-end",paddingBottom:"8px"},children:(0,h.jsx)("span",{style:{color:"white",fontWeight:"600",fontSize:"12px"},children:e.count})}),(0,h.jsx)("span",{style:{fontSize:"13px",color:"#4b5563",fontWeight:"500"},children:e.month})]},a)))})]})]}),(0,h.jsxs)("div",{className:"flex-container",style:{display:"flex",gap:"24px",marginBottom:"24px",flexWrap:"wrap"},children:[(0,h.jsxs)("div",{className:"card",style:{flex:1,minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Supply Requests by Department"})}),(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"data-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Department"}),(0,h.jsx)("th",{className:"number-cell",children:"Request Submitted"}),(0,h.jsx)("th",{className:"number-cell",children:"Approved"}),(0,h.jsx)("th",{className:"number-cell",children:"Rejected"}),(0,h.jsx)("th",{className:"number-cell",children:"Pending"})]})}),(0,h.jsx)("tbody",{children:N.map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.department}),(0,h.jsx)("td",{className:"number-cell",children:e.submitted}),(0,h.jsx)("td",{className:"number-cell",children:e.approved}),(0,h.jsx)("td",{className:"number-cell",children:e.rejected}),(0,h.jsx)("td",{className:"number-cell",children:e.pending})]},t))})]})})]}),(0,h.jsxs)("div",{className:"card",style:{flex:"0 0 300px",minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Request Distribution"})}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[(0,h.jsxs)("svg",{width:"220",height:"220",viewBox:"0 0 220 220",style:{transform:"rotate(-90deg)"},children:[(0,h.jsx)("circle",{cx:"110",cy:"110",r:"100",fill:"none",stroke:"#dbeafe",strokeWidth:"20"}),(a=N.reduce((e,t)=>e+t.submitted,0),i=0,s=["#1e40af","#10b981","#f59e0b","#8b5cf6"],N.map((e,t)=>{let l=e.submitted/a*2*Math.PI,n=110+100*Math.cos(i),r=110+100*Math.sin(i),o=110+100*Math.cos(i+l),c=110+100*Math.sin(i+l),d=+(l>Math.PI),p=`M 110 110 L ${n} ${r} A 100 100 0 ${d} 1 ${o} ${c} Z`;return i+=l,(0,h.jsx)("path",{d:p,fill:s[t]},t)}))]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:N.map((e,t)=>{let a=N.reduce((e,t)=>e+t.submitted,0),i=(e.submitted/a*100).toFixed(0);return(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"4px",background:["#1e40af","#10b981","#f59e0b","#8b5cf6"][t]}}),(0,h.jsx)("span",{style:{fontSize:"14px",color:"#374151"},children:e.department})]}),(0,h.jsxs)("span",{style:{fontSize:"14px",fontWeight:"600",color:"#1f2937"},children:[i,"%"]})]},t)})})]})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Top 5 Most Requested Items"})}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:(l=Math.max(...w.map(e=>e.count)),n=["#1e40af","#3730a3","#4338ca","#4f46e5","#6366f1"],w.map((e,t)=>(0,h.jsxs)("div",{className:"bar-graph-item",style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,h.jsx)("div",{className:"bar-graph-label",style:{width:"180px",minWidth:"180px",fontSize:"14px",color:"#374151",fontWeight:"500"},children:e.name}),(0,h.jsx)("div",{style:{flex:1,height:"32px",background:"#f3f4f6",borderRadius:"8px",overflow:"hidden"},children:(0,h.jsx)("div",{style:{width:`${e.count/l*100}%`,height:"100%",background:n[t],borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"12px",transition:"width 0.3s ease"},children:(0,h.jsx)("span",{style:{color:"white",fontWeight:"600",fontSize:"14px"},children:e.count})})})]},t)))})]})]}),(0,h.jsx)("div",{className:"print-view",children:(0,h.jsx)("div",{className:"print-container",children:(0,h.jsxs)("div",{className:"report",children:[(0,h.jsxs)("div",{className:"report-header",children:[(0,h.jsxs)("div",{className:"report-header-top",children:[(0,h.jsx)("div",{className:"clinic-logo",children:"🏥"}),(0,h.jsxs)("div",{className:"clinic-info",children:[(0,h.jsx)("h2",{children:"BPDACC Inventory Management"}),(0,h.jsx)("p",{children:q().toUpperCase()})]})]}),(0,h.jsxs)("div",{className:"report-period",children:["For the ",u.charAt(0).toUpperCase()+u.slice(1)," of ",(0,h.jsx)("span",{className:"period-highlight",children:"weekly"===u?"Week of June 24 - June 30, 2026":"monthly"===u?`${z} ${C}`:`${C}`})]})]}),(0,h.jsx)("div",{className:"print-summary-section",children:(0,h.jsxs)("table",{className:"summary-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Statistic"}),(0,h.jsx)("th",{children:"Value"})]})}),(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Total Supplies in Inventory"}),(0,h.jsx)("td",{children:B.toLocaleString()})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Total Different Supply Types"}),(0,h.jsx)("td",{children:I})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Low Stock Items"}),(0,h.jsx)("td",{children:D})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Out of Stock Items"}),(0,h.jsx)("td",{children:P})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Expiring Within 30 Days"}),(0,h.jsx)("td",{children:E})]})]})]})}),(0,h.jsx)("h3",{style:{marginTop:"32px",marginBottom:"16px",color:"#1f2937"},children:"Inventory Status"}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"24px",alignItems:"center",marginBottom:"32px"},children:[(0,h.jsxs)("svg",{width:"160",height:"160",viewBox:"0 0 160 160",style:{transform:"rotate(-90deg)"},children:[(r=0,k.map((e,t)=>{let a=e.value/100*2*Math.PI,i=80+70*Math.cos(r),s=80+70*Math.sin(r),l=80+70*Math.cos(r+a),n=80+70*Math.sin(r+a),o=+(a>Math.PI),c=`M 80 80 L ${i} ${s} A 70 70 0 ${o} 1 ${l} ${n} Z`;return r+=a,(0,h.jsx)("path",{d:c,fill:e.color},t)})),(0,h.jsx)("circle",{cx:"80",cy:"80",r:"40",fill:"white"})]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"130px"},children:k.map((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"12px"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,h.jsx)("div",{style:{width:"12px",height:"12px",borderRadius:"2px",background:e.color}}),(0,h.jsx)("span",{children:e.name})]}),(0,h.jsxs)("span",{style:{fontWeight:"600"},children:[e.value,"%"]})]},t))})]}),(0,h.jsxs)("div",{style:{display:"flex",gap:"32px",marginBottom:"32px",alignItems:"flex-start"},children:[(0,h.jsxs)("div",{style:{flex:1},children:[(0,h.jsx)("h3",{style:{marginTop:0,marginBottom:"16px",color:"#1f2937"},children:"Supply Requests by Department"}),(0,h.jsxs)("table",{className:"report-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Department"}),(0,h.jsx)("th",{className:"number-cell",children:"Request Submitted"}),(0,h.jsx)("th",{className:"number-cell",children:"Approved"}),(0,h.jsx)("th",{className:"number-cell",children:"Rejected"}),(0,h.jsx)("th",{className:"number-cell",children:"Pending"})]})}),(0,h.jsx)("tbody",{children:N.map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.department}),(0,h.jsx)("td",{className:"number-cell",children:e.submitted}),(0,h.jsx)("td",{className:"number-cell",children:e.approved}),(0,h.jsx)("td",{className:"number-cell",children:e.rejected}),(0,h.jsx)("td",{className:"number-cell",children:e.pending})]},t))})]})]}),(0,h.jsxs)("div",{style:{flex:"0 0 200px"},children:[(0,h.jsx)("h3",{style:{marginTop:0,marginBottom:"16px",color:"#1f2937"},children:"Request Distribution"}),(0,h.jsxs)("svg",{width:"180",height:"180",viewBox:"0 0 180 180",style:{transform:"rotate(-90deg)",marginBottom:"16px"},children:[(0,h.jsx)("circle",{cx:"90",cy:"90",r:"80",fill:"none",stroke:"#dbeafe",strokeWidth:"16"}),(o=N.reduce((e,t)=>e+t.submitted,0),c=0,d=["#1e40af","#10b981","#f59e0b","#8b5cf6"],N.map((e,t)=>{let a=e.submitted/o*2*Math.PI,i=90+80*Math.cos(c),s=90+80*Math.sin(c),l=90+80*Math.cos(c+a),n=90+80*Math.sin(c+a),r=+(a>Math.PI),p=`M 90 90 L ${i} ${s} A 80 80 0 ${r} 1 ${l} ${n} Z`;return c+=a,(0,h.jsx)("path",{d:p,fill:d[t]},t)}))]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:N.map((e,t)=>{let a=N.reduce((e,t)=>e+t.submitted,0),i=(e.submitted/a*100).toFixed(0);return(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"12px"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,h.jsx)("div",{style:{width:"12px",height:"12px",borderRadius:"2px",background:["#1e40af","#10b981","#f59e0b","#8b5cf6"][t]}}),(0,h.jsx)("span",{children:e.department})]}),(0,h.jsxs)("span",{style:{fontWeight:"600"},children:[i,"%"]})]},t)})})]})]}),(0,h.jsx)("h3",{style:{marginTop:"32px",marginBottom:"16px",color:"#1f2937"},children:"Top 5 Most Requested Items"}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"32px"},children:(p=Math.max(...w.map(e=>e.count)),m=["#1e40af","#3730a3","#4338ca","#4f46e5","#6366f1"],w.map((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,h.jsx)("div",{style:{width:"160px",fontSize:"12px",color:"#374151",fontWeight:"500"},children:e.name}),(0,h.jsx)("div",{style:{flex:1,height:"24px",background:"#f3f4f6",borderRadius:"6px",overflow:"hidden"},children:(0,h.jsx)("div",{style:{width:`${e.count/p*100}%`,height:"100%",background:m[t],borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"8px"},children:(0,h.jsx)("span",{style:{color:"white",fontWeight:"600",fontSize:"12px"},children:e.count})})})]},t)))}),(0,h.jsxs)("div",{className:"report-signatures",children:[(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Prepared By"}),(0,h.jsx)("div",{className:"signature-sub",children:"Signature over Printed Name"})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Checked By"}),(0,h.jsx)("div",{className:"signature-sub",children:"Signature over Printed Name"})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Approved By"}),(0,h.jsx)("div",{className:"signature-sub",children:"Signature over Printed Name"})]})]})]})})}),(0,h.jsx)("style",{children:`
        .reports {
          padding: 0;
        }

        .screen-view {
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 16px;
          font-style: italic;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .filters-bar {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-group label {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .stats-grid {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          padding: 14px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          flex: 1;
          min-width: 0;
          max-width: 300px;
        }

        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 12px;
          color: #6b7280;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .table-container {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .data-table th,
        .data-table td {
          border: 1px solid #e5e7eb;
          padding: 12px;
          text-align: left;
        }

        .data-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #4b5563;
        }

        .number-cell {
          text-align: right;
        }

        .print-view {
          display: none;
        }

        .print-container {
          background: white;
          padding: 40px;
        }

        .report {
          max-width: 950px;
          margin: 0 auto;
        }

        .report-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .report-header-top {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .clinic-logo {
          font-size: 48px;
        }

        .clinic-info h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 4px;
        }

        .clinic-info p {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .report-period {
          font-size: 16px;
          color: #4b5563;
        }

        .period-highlight {
          font-weight: 700;
          color: #1f2937;
          font-size: 18px;
        }

        .print-summary-section {
          margin-bottom: 32px;
        }

        .summary-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .summary-table th,
        .summary-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .summary-table th {
          background: #f3f4f6;
          font-weight: 700;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 40px;
        }

        .report-table th,
        .report-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .report-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #1f2937;
        }

        .report-signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-bottom: 1px solid #000;
          margin-bottom: 8px;
          margin-top: 40px;
        }

        .signature-label {
          font-size: 13px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .signature-sub {
          font-size: 11px;
          color: #6b7280;
        }

        /* Responsive for smaller screens */
        @media (max-width: 1200px) {
          .stats-grid {
            flex-wrap: wrap;
          }

          .stat-card {
            flex: 0 0 calc(33.333% - 8px);
            max-width: calc(33.333% - 8px);
          }
        }

        @media (max-width: 900px) {
          .flex-container {
            flex-direction: column;
          }
        }

        @media (max-width: 1024px) {
          .stat-card {
            flex: 0 0 calc(50% - 6px);
            max-width: calc(50% - 6px);
          }

          .report-signatures {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            flex-direction: column;
          }

          .form-input {
            width: 100%;
          }
            
          .stat-card {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 14px 16px;
          }

          .stat-icon {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .stat-value {
            font-size: 20px;
          }

          .stat-label {
            font-size: 12px;
          }

          .bar-graph-item {
            flex-direction: column;
            gap: 8px;
          }

          .bar-graph-label {
            width: 100% !important;
            min-width: unset !important;
          }

          .report-signatures {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .no-print {
            display: none !important;
          }

          .print-view {
            display: block !important;
          }

          .print-container {
            box-shadow: none;
            padding: 20px;
          }

          body {
            background: white;
          }
        }
      `})]})},eZ={src:e.i(84860).default,width:24,height:24,blurWidth:0,blurHeight:0},eG={src:e.i(29371).default,width:24,height:24,blurWidth:0,blurHeight:0},eX={src:e.i(22482).default,width:24,height:24,blurWidth:0,blurHeight:0},e0={src:e.i(32355).default,width:24,height:24,blurWidth:0,blurHeight:0},e1=()=>(0,h.jsxs)("div",{className:"users",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"User Management"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Manage system users and permissions"})]}),(0,h.jsxs)("button",{className:"btn-primary",children:[(0,h.jsx)(ef,{src:eZ,alt:"Add User",size:20}),"Add User"]})]}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"users-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Role"}),(0,h.jsx)("th",{children:"Office"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:[{id:1,name:"John Doe",email:"john@clinic.com",role:"Admin",office:"All",status:"Active"},{id:2,name:"Jane Smith",email:"jane@clinic.com",role:"Nurse",office:"Hemodialysis",status:"Active"},{id:3,name:"Mike Johnson",email:"mike@clinic.com",role:"Pharmacist",office:"Admin Office",status:"Active"},{id:4,name:"Sarah Williams",email:"sarah@clinic.com",role:"Lab Tech",office:"Clinical Laboratory",status:"Inactive"}].map(e=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"user-info-cell",children:[(0,h.jsx)("div",{className:"user-avatar-small",children:e.name.charAt(0)}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"user-name",children:e.name}),(0,h.jsx)("div",{className:"user-email",children:e.email})]})]})}),(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:"role-tag",children:e.role})}),(0,h.jsx)("td",{children:e.office}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`status-badge ${e.status.toLowerCase()}`,children:e.status})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"actions",children:[(0,h.jsx)("button",{className:"btn-icon",title:"Edit User",children:(0,h.jsx)(ef,{src:e0,alt:"Edit",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"Change Password",children:(0,h.jsx)(ef,{src:eX,alt:"Change Password",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"Delete User",children:(0,h.jsx)(ef,{src:eG,alt:"Delete",size:20})})]})})]},e.id))})]})})}),(0,h.jsx)("style",{children:`
        .users {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }

        .users-table th,
        .users-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .users-table thead {
          background: #f9fafb;
        }

        .users-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .users-table tbody tr {
          border-bottom: 1px solid #f3f4f6;
        }

        .user-info-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          flex-shrink: 0;
        }

        .user-name {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .user-email {
          font-size: 13px;
          color: #6b7280;
        }

        .role-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.active {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.inactive {
          background: #fee2e2;
          color: #991b1b;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }
        }
      `})]}),e2=()=>(0,h.jsxs)("div",{className:"settings",children:[(0,h.jsx)("div",{className:"page-header",children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"Settings"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Configure system settings and preferences"})]})}),(0,h.jsxs)("div",{className:"settings-grid",children:[(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"General Settings"})}),(0,h.jsxs)("div",{className:"settings-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Clinic Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",defaultValue:"BPDACC"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Clinic Address"}),(0,h.jsx)("textarea",{className:"form-input",rows:3,defaultValue:"123 Medical Center Drive, City, State 12345"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Contact Email"}),(0,h.jsx)("input",{type:"email",className:"form-input",defaultValue:"admin@bpdacc.com"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Phone Number"}),(0,h.jsx)("input",{type:"tel",className:"form-input",defaultValue:"+1 (555) 123-4567"})]})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Offices"})}),(0,h.jsxs)("div",{className:"offices-list",children:[(0,h.jsxs)("div",{className:"office-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"office-name",children:"Hemodialysis"}),(0,h.jsx)("div",{className:"office-description",children:"Dialysis Unit"})]}),(0,h.jsx)("button",{className:"btn-icon",children:"✏️"})]}),(0,h.jsxs)("div",{className:"office-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"office-name",children:"Clinical Laboratory"}),(0,h.jsx)("div",{className:"office-description",children:"Lab Testing"})]}),(0,h.jsx)("button",{className:"btn-icon",children:"✏️"})]}),(0,h.jsxs)("div",{className:"office-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"office-name",children:"Radiology"}),(0,h.jsx)("div",{className:"office-description",children:"Imaging Department"})]}),(0,h.jsx)("button",{className:"btn-icon",children:"✏️"})]}),(0,h.jsxs)("div",{className:"office-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"office-name",children:"Admin Office"}),(0,h.jsx)("div",{className:"office-description",children:"Administration"})]}),(0,h.jsx)("button",{className:"btn-icon",children:"✏️"})]}),(0,h.jsx)("button",{className:"btn-secondary",children:"+ Add Office"})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Notifications"})}),(0,h.jsxs)("div",{className:"settings-form",children:[(0,h.jsxs)("div",{className:"toggle-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"toggle-label",children:"Low Stock Alerts"}),(0,h.jsx)("div",{className:"toggle-description",children:"Receive notifications when stock reaches minimum levels"})]}),(0,h.jsxs)("label",{className:"toggle-switch",children:[(0,h.jsx)("input",{type:"checkbox",checked:!0}),(0,h.jsx)("span",{className:"slider"})]})]}),(0,h.jsxs)("div",{className:"toggle-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"toggle-label",children:"Email Notifications"}),(0,h.jsx)("div",{className:"toggle-description",children:"Send alerts via email"})]}),(0,h.jsxs)("label",{className:"toggle-switch",children:[(0,h.jsx)("input",{type:"checkbox",checked:!0}),(0,h.jsx)("span",{className:"slider"})]})]}),(0,h.jsxs)("div",{className:"toggle-item",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"toggle-label",children:"Daily Summary"}),(0,h.jsx)("div",{className:"toggle-description",children:"Receive daily inventory summary"})]}),(0,h.jsxs)("label",{className:"toggle-switch",children:[(0,h.jsx)("input",{type:"checkbox"}),(0,h.jsx)("span",{className:"slider"})]})]})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Database Configuration"})}),(0,h.jsxs)("div",{className:"settings-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Database Host"}),(0,h.jsx)("input",{type:"text",className:"form-input",defaultValue:"localhost"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Database Port"}),(0,h.jsx)("input",{type:"number",className:"form-input",defaultValue:"5432"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Database Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",defaultValue:"bpdacc_inventory"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Database User"}),(0,h.jsx)("input",{type:"text",className:"form-input",defaultValue:"postgres"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Connection Status"}),(0,h.jsx)("span",{className:"status-badge ok",children:"Connected"})]})]})]})]}),(0,h.jsxs)("div",{className:"save-bar",children:[(0,h.jsx)("button",{className:"btn-secondary",children:"Reset"}),(0,h.jsx)("button",{className:"btn-primary",children:"Save Changes"})]}),(0,h.jsx)("style",{children:`
        .settings {
          padding: 0;
        }

        .page-header {
          margin-bottom: 24px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        textarea.form-input {
          resize: vertical;
        }

        .offices-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .office-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
        }

        .office-name {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .office-description {
          font-size: 13px;
          color: #6b7280;
        }

        .toggle-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
        }

        .toggle-label {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .toggle-description {
          font-size: 13px;
          color: #6b7280;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #d1d5db;
          transition: 0.3s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #1e40af;
        }

        input:checked + .slider:before {
          transform: translateX(24px);
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.ok {
          background: #dcfce7;
          color: #166534;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        .save-bar {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px 0;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .settings-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-title {
            font-size: 24px;
          }

          .toggle-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .save-bar {
            flex-direction: column;
          }

          .save-bar button {
            width: 100%;
          }
        }
      `})]});e.s(["default",0,function(){return(0,h.jsxs)(em,{children:[" ",(0,h.jsxs)(ec,{children:[" ",(0,h.jsxs)("div",{className:"app",children:[(0,h.jsx)(eS,{})," ",(0,h.jsx)("main",{className:"main-content",children:(0,h.jsxs)(es,{children:[(0,h.jsx)(ea,{path:"/",element:(0,h.jsx)(eO,{})})," ",(0,h.jsx)(ea,{path:"/inventory",element:(0,h.jsx)(eJ,{})})," ",(0,h.jsx)(ea,{path:"/requisition",element:(0,h.jsx)(eK,{})})," ",(0,h.jsx)(ea,{path:"/requisition-requests",element:(0,h.jsx)(eV,{})})," ",(0,h.jsx)(ea,{path:"/reports",element:(0,h.jsx)(eY,{})})," ",(0,h.jsx)(ea,{path:"/users",element:(0,h.jsx)(e1,{})})," ",(0,h.jsx)(ea,{path:"/settings",element:(0,h.jsx)(e2,{})})," "]})})]})]})]})}],86022)},3654,e=>{e.n(e.i(86022))}]);