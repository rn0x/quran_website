(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3910)}])},6691:function(e,t){"use strict";var r,n,c,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return o},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return u},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return h}});let l="refresh",o="navigate",i="restore",u="server-patch",s="prefetch",f="fast-refresh",d="server-action";function h(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(c=r||(r={})).AUTO="auto",c.FULL="full",c.TEMPORARY="temporary",(a=n||(n={})).fresh="fresh",a.reusable="reusable",a.expired="expired",a.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),c=r(5893),a=n._(r(7294)),l=r(1401),o=r(2045),i=r(7420),u=r(7201),s=r(1443),f=r(9953),d=r(5320),h=r(2905),p=r(4318),v=r(953),g=r(6691),m=new Set;function _(e,t,r,n,c,a){if(a||(0,o.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let c=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(c))return;m.add(c)}(async()=>a?e.prefetch(t,c):e.prefetch(t,r,n))().catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let y=a.default.forwardRef(function(e,t){let r,n;let{href:i,as:m,children:y,prefetch:j=null,passHref:x,replace:O,shallow:P,scroll:N,locale:M,onClick:k,onMouseEnter:C,onTouchStart:w,legacyBehavior:z=!1,...L}=e;r=y,z&&("string"==typeof r||"number"==typeof r)&&(r=(0,c.jsx)("a",{children:r}));let E=a.default.useContext(f.RouterContext),H=a.default.useContext(d.AppRouterContext),S=null!=E?E:H,F=!E,T=!1!==j,A=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:R,as:B}=a.default.useMemo(()=>{if(!E){let e=b(i);return{href:e,as:m?b(m):e}}let[e,t]=(0,l.resolveHref)(E,i,!0);return{href:e,as:m?(0,l.resolveHref)(E,m):t||e}},[E,i,m]),I=a.default.useRef(R),V=a.default.useRef(B);z&&(n=a.default.Children.only(r));let D=z?n&&"object"==typeof n&&n.ref:t,[q,K,U]=(0,h.useIntersection)({rootMargin:"200px"}),W=a.default.useCallback(e=>{(V.current!==B||I.current!==R)&&(U(),V.current=B,I.current=R),q(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[B,D,R,U,q]);a.default.useEffect(()=>{S&&K&&T&&_(S,R,B,{locale:M},{kind:A},F)},[B,R,K,M,T,null==E?void 0:E.locale,S,F,A]);let Y={ref:W,onClick(e){z||"function"!=typeof k||k(e),z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,c,l,i,u,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[c?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[c?"replace":"push"](n||r,{scroll:e})};s?a.default.startTransition(d):d()}(e,S,R,B,O,P,N,M,F)},onMouseEnter(e){z||"function"!=typeof C||C(e),z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(T||!F)&&_(S,R,B,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:A},F)},onTouchStart:function(e){z||"function"!=typeof w||w(e),z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(T||!F)&&_(S,R,B,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:A},F)}};if((0,u.isAbsoluteUrl)(B))Y.href=B;else if(!z||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,p.getDomainLocale)(B,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);Y.href=t||(0,v.addBasePath)((0,s.addLocale)(B,e,null==E?void 0:E.defaultLocale))}return z?a.default.cloneElement(n,Y):(0,c.jsx)("a",{...L,...Y,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(7294),c=r(3815),a="function"==typeof IntersectionObserver,l=new Map,o=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,u=i||!a,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(u||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:c,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let c=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=c.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:c},o.push(r),l.set(r,t),t}(r);return a.set(e,t),c.observe(e),function(){if(a.delete(e),c.unobserve(e),0===a.size){c.disconnect(),l.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,c.requestIdleCallback)(()=>f(!0));return()=>(0,c.cancelIdleCallback)(e)}},[u,r,t,s,d.current]),[h,s,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3910:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893);r(7449),r(1784);var c=r(7294),a=r(1664),l=r.n(a),o=r(9831),i=r(2631),u=r.n(i);function s(){let[e,t]=(0,c.useState)(!1),r=()=>{t(!1)};return(0,c.useEffect)(()=>{let r=r=>{!e||r.target.closest(".".concat(u().mobileNav))||r.target.closest(".".concat(u().menuButton))||t(!1)};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[e]),(0,n.jsxs)("header",{className:u().header,children:[(0,n.jsx)(l(),{href:"/",passHref:!0,title:"موقع القرآن الكريم - تحميل واستماع mp3 - pdf","aria-label":"موقع القرآن الكريم - تحميل واستماع mp3 - pdf",children:(0,n.jsx)("div",{className:u().logoContainer,children:(0,n.jsx)("svg",{className:u().quranSvg,width:"50",height:"50",viewBox:"0 0 299.74979 293.73068",version:"1.1",children:(0,n.jsx)("g",{id:"layer1",transform:"translate(-26.135428,119.50411)",children:(0,n.jsx)("path",{d:"m 86.973077,75.092257 c 7.26465,-4.778219 14.357673,-8.055012 31.711043,-14.649693 10.90991,-5.651187 26.55156,-3.80125 34.64061,-14.092248 0.80275,-1.237488 -3.55653,-9.854417 -7.94637,-15.707466 -4.19385,-5.591729 -11.74302,-13.187651 -19.8579,-19.980867 -8.09372,-6.7755052 -7.53915,-6.4670682 -9.49594,-5.2814432 -5.78904,3.507592 -12.47407,9.0843662 -25.840263,21.5564222 -15.23374,14.214674 -18.819,17.262193 -25.88592,22.003336 -3.39216,2.275771 -10.21651,5.917027 -13.22972,7.058955 -1.47,0.557092 -1.9065,1.023879 -3.01987,3.229463 -5.57203,11.038129 -8.31657,23.267275 -6.9874,31.134587 0.94497,5.593283 4.81214,11.559917 8.23672,12.708377 0.78878,0.26453 2.82352,0.42958 4.52165,0.36679 13.82451,-4.612074 21.597473,-20.720217 33.15336,-28.346213 z M 121.62262,45.406919 c -2.14726,-1.924184 -4.21889,-3.677158 -4.60361,-3.895496 -0.82204,-0.466521 -1.47842,0.142035 -4.34528,4.028687 -2.16179,2.930774 -2.78351,3.10747 -5.23654,1.488272 -2.38161,-1.572066 -7.595393,-6.795843 -7.595393,-7.609961 0,-0.740318 3.780483,-7.55335 4.736143,-8.535283 0.705,-0.724389 2.10014,0.137708 7.18604,4.440493 1.9141,1.619371 3.74818,2.892698 4.07574,2.829616 0.32756,-0.06308 1.69736,-1.732496 3.044,-3.709808 1.98346,-2.912351 2.6441,-3.59511 3.47869,-3.59511 0.76065,0 2.25045,1.20388 5.69318,4.600554 2.56461,2.530307 4.66292,4.855849 4.66292,5.167878 0,0.956716 -3.31469,6.208636 -4.60233,7.292116 -0.66779,0.561905 -1.52359,1.016002 -1.9018,1.009102 -0.37821,-0.0069 -2.4445,-1.586873 -4.59176,-3.51106 z m 134.94899,47.804424 c 2.003,-1.049248 4.36057,-2.738096 5.90493,-4.230008 2.47937,-2.395163 2.57074,-2.556415 2.57074,-4.536946 0,-5.277325 -2.97673,-9.695595 -7.04688,-11.796264 -3.08632,-1.592899 -9.46633,-1.526489 -10.3866,0.826324 -1.26421,3.71026 -0.61932,9.362137 1.77254,15.534617 1.45715,3.760361 2.70064,5.948853 3.3801,5.948853 0.25904,0 1.97136,-0.785959 3.80517,-1.746576 z M 137.67815,127.57092 c 18.62001,-5.95874 34.94928,-13.14736 46.54999,-23.60021 3.27376,-3.06637 3.60975,-3.51863 3.39858,-4.574503 -0.48087,-2.404346 -4.00356,-10.732704 -9.09105,-21.49308 -8.26498,-17.480991 -8.15933,-17.201333 -7.60686,-20.136985 0.81938,-4.353946 2.23058,-7.60274 3.30244,-7.60274 0.60503,0 14.78863,15.944954 14.78863,16.62512 0,0.925228 -2.15228,0.811779 -4.17486,-0.220061 -1.09597,-0.559126 -1.81594,-0.715631 -2.07952,-0.452046 -0.67457,0.674564 0.68277,4.451478 4.03167,11.218487 5.38333,10.87789 6.73947,16.792156 5.35138,23.337788 -1.22902,5.7955 -3.76416,10.12063 -9.26284,15.80301 -15.93193,13.42312 -26.46095,20.84111 -46.544,28.502 0,0 1.41369,8.56629 3.74344,13.29288 3.56086,7.22426 10.83172,6.29777 17.43757,3.18612 15.78073,-8.93526 17.83037,-18.2272 30.29651,-31.54084 8.88261,-9.39592 16.49946,-16.03002 35.09717,-23.73922 11.46059,-4.75068 22.40531,-6.483903 22.40274,-7.391083 -0.001,-0.40999 -0.44886,-2.872155 -0.99489,-5.47147 -2.07945,-9.899027 -2.37646,-17.93156 -0.87374,-23.630138 1.62859,-6.175914 5.4268,-11.334842 9.17109,-12.456657 2.18045,-0.653276 5.97545,-0.619011 7.62165,0.06881 0.73368,0.306551 2.1701,1.487347 3.19204,2.623989 5.18355,5.76535 7.85701,15.720127 6.3609,23.685135 -1.37803,7.336361 -4.30508,12.88976 -9.82824,18.646764 l -3.25226,3.38996 1.13355,1.63571 c 3.93815,5.69239 19.42719,5.51503 34.99499,-1.51104 0.14139,-0.56332 -0.52346,-8.819904 -1.47743,-18.347966 -1.7586,-17.564413 -2.10206,-20.458188 -7.59229,-63.967586 -7.24489,-57.414911 -8.58398,-68.018411 -10.52106,-83.310291 -1.12298,-8.86518 -2.04179,-17.65298 -2.04179,-17.65298 l 3.46035,-7.82112 c 2.48978,8.338688 11.83013,28.6474 11.83013,28.6474 0,0 -1.56932,-0.83219 -2.50688,-1.84931 -0.93755,-1.01712 -2.14219,-1.84932 -2.14219,-1.84932 0,0 -0.35435,0.9895 -0.18702,2.97946 0.13781,1.63869 0.52502,6.30822 0.86048,10.37671 1.64399,19.93854 1.98659,22.939006 13.98354,122.465752 1.93467,16.050005 1.91701,15.784792 1.45003,21.780822 -0.82421,10.582669 -3.04737,16.785549 -7.67738,21.420789 -4.44815,4.45316 -11.63351,7.1907 -19.07106,7.26584 -4.8337,0.0488 -7.97566,-0.77051 -11.03556,-2.87783 -2.61715,-1.80241 -6.11853,-6.05928 -8.48499,-10.31582 -0.90411,-1.62621 -1.87865,-2.9572 -2.16566,-2.95774 -0.73777,-10e-4 -13.60087,2.89896 -19.96015,5.70833 -9.91652,4.38087 -22.66234,13.08912 -26.48777,15.6479 -5.35285,3.58047 -12.11593,10.25345 -21.10584,20.82465 -12.04428,14.16283 -18.11539,19.92383 -22.69113,21.53207 -2.71395,0.95388 -6.47751,1.01469 -9.66974,0.15626 -3.26371,-0.87767 -6.05196,-2.52644 -9.07195,-5.36455 -4.50408,-4.2328 -6.96936,-9.40563 -8.40648,-17.63908 -0.34738,-1.9902 -0.47493,-4.48478 -0.47493,-4.48478 0,0 -3.46977,0.63696 -6.74717,1.08821 -8.63395,1.18889 -19.3614,1.19627 -24.86302,0.0171 -10.451873,-2.24012 -17.936983,-8.53129 -21.955793,-18.45365 -2.15044,-5.3094 -3.2262,-11.21347 -3.59905,-19.75265 -0.17679,-4.04879 -0.40398,-5.85617 -0.73613,-5.85617 -0.50578,0 -1.43198,0.68228 -6.49322,4.78313 -4.18553,3.39131 -5.86824,3.9956 -10.50841,3.77375 -5.09998,-0.24381 -8.15882,-1.75191 -12.47423,-6.15018 -10.20088,-10.396725 -10.23956,-23.440369 -0.14035,-47.322024 0.36265,-0.857552 0.56352,-1.714249 0.44639,-1.903775 -0.11713,-0.189526 -1.60822,-1.007191 -3.31352,-1.817035 C 33.635897,50.914113 28.378217,44.990243 26.810147,38.24559 24.184521,23.791938 29.638253,13.175473 35.983817,0.36448675 35.269379,13.103125 26.245537,29.638453 33.560521,40.353588 c 2.47836,3.677626 10.009873,3.917379 15.072963,2.749825 2.98207,-0.687666 11.22232,-5.689073 18.14769,-11.014702 17.816531,-14.534787 22.550643,-18.422038 38.546586,-33.2123522 1.54323,-1.423627 2.71954,-2.813375 2.61403,-3.088335 -0.16227,-0.422853 -51.255041,-39.5792018 -52.951321,-40.5826118 l -2.219752,-1.822835 0.0604,-5.75343 c 0.0631,-6.0123 0.73853,-9.66592 2.6789,-14.49117 l 0.86956,-2.1624 6.83386,-3.85482 c 33.66848,-18.99162 75.916603,-34.781177 123.266143,-46.068747 3.67367,-0.87576 8.62699,-0.69608 10.7595,0.39029 3.65058,1.85972 5.0961,4.20959 5.07832,8.25541 -0.0386,8.77878 -7.1281,20.621097 -22.13395,36.972537 -3.56294,3.88242 -8.18462,9.13423 -11.22716,12.75788 l -1.36497,1.62568 0.21729,-1.64383 c 0.11951,-0.90411 1.05671,-3.30822 2.08266,-5.34247 2.91321,-5.77626 4.47529,-7.71564 19.64946,-24.3956 4.95682,-5.44869 6.87643,-8.34928 6.87643,-10.390457 0,-2.2014 -0.85728,-4.07141 -2.50026,-5.45389 l -1.37915,-1.16047 -6.99865,0.2066 c -19.9203,1.67899 -29.00555,7.520454 -46.37886,12.673265 -5.67298,1.66769 -36.99097,12.791012 -50.003363,18.366822 -11.63678,4.98636 -31.23287,15.09969 -31.23287,16.11895 0,0.48934 -0.30154,0.27625 41.30136,29.1866 5.650703,3.92673 13.396743,9.336331 17.213443,12.021339 3.81671,2.685013 7.18855,4.97742 7.49298,5.094243 0.30443,0.116823 1.89743,-0.342547 3.53999,-1.020822 7.5544,-3.119503 14.42159,-4.599362 21.35263,-4.601433 2.41646,-8.22e-4 4.49162,-0.159966 4.61146,-0.353881 0.28938,-0.468222 -1.20866,-6.561916 -4.207,-17.113186 -6.09665,-21.45428 -6.90159,-31.24423 -3.26915,-39.76027 0.83365,-1.95446 1.53064,-2.40109 2.24461,-1.43836 0.96847,1.30589 9.70538,19.6376 9.471,19.87197 -0.14584,0.14584 -1.01631,-0.0354 -1.93437,-0.40272 -2.97493,-1.19033 -3.04115,-1.12415 -2.72467,2.72253 0.39545,4.80634 2.10112,12.92658 3.77661,17.97945 3.69297,11.13711 8.70868,17.997416 17.92031,24.510782 3.01802,2.13399 3.18109,2.332183 3.65268,4.4394698 0.6825,3.049709 0.31944,10.327574 -0.55902,11.206027 -0.59346,0.593462 -0.83377,0.497195 -2.73736,-1.096582 -7.45064,-6.238028 -17.42077,-9.43477 -26.95406,-8.642339 -4.16535,0.346233 -9.64349,1.822077 -9.64349,2.598009 0,0.283142 2.16945,2.263323 4.82101,4.40040395 13.85811,11.16924325 30.42911,25.21222225 41.54231,35.20473325 7.15389,6.432477 13.46911,10.804159 15.60739,10.804159 0.88682,0 0.93983,-0.12699 0.72898,-1.746575 -0.12507,-0.960617 -0.42531,-3.965754 -0.66721,-6.678083 -0.70022,-7.851065 -2.30724,-21.85126 -4.31627,-37.60274025 -1.02342,-8.02397195 -2.31936,-18.19520475 -2.87986,-22.60273875 -1.38393,-10.882606 -2.88192,-24.090946 -3.50836,-30.934696 l -0.51817,-5.66073 c 0.55924,-0.928026 3.23193,-5.73334 3.23193,-5.73334 l 12.6233,28.01987 c 0,0 -1.48514,-0.61691 -2.90525,-1.76598 -1.42011,-1.14907 -2.69818,-1.97305 -2.84015,-1.83108 -0.37459,0.37459 2.13134,21.860733 5.64312,48.3846608 1.39955,10.5706402 3.63418,29.0313662 4.14556,34.2473222 0.56093,5.721415 0.84748,6.169665 4.19958,6.569392 4.1619,0.496295 11.29102,-2.13369 15.84533,-5.845463 0.97935,-0.798172 1.96264,-1.850663 2.18508,-2.338874 0.50598,-1.110505 -1.11237,-15.655685 -4.82717,-43.3850552 -1.46859,-10.9623278 -2.83984,-21.2260268 -3.04721,-22.8082228 -0.20739,-1.58219 -1.20742,-9.07191 -2.2223,-16.64383 -1.01489,-7.57192 -2.12509,-15.89384 -2.46712,-18.49315 -2.36015,-17.93611 -3.34077,-24.81522 -4.79608,-33.6446 -2.04168,-12.386917 -2.10053,-13.653697 -2.10053,-13.653697 0,0 2.80323,-9.00307 3.16381,-9.00307 1.17519,0 14.09269,27.788822 14.09269,27.788822 l -6.92738,-3.542255 c 0,0 0.0651,11.77698 7.64045,67.30859 5.04052,36.94985 7.59121,56.858072 7.58648,59.21267 -0.0141,7.001005 -2.4933,13.956563 -6.40224,17.961793 -3.58239,3.670635 -9.38174,7.065497 -15.37145,8.998233 -1.24315,0.401137 -3.64551,0.230198 -3.86859,0.4368 -0.24893,0.230539 1.31536,18.184484 1.28947,26.30917 -0.0369,11.575374 -1.41986,49.197787 -2.18624,53.509837 -0.92003,5.17652 -3.55834,14.14792 -4.12916,14.14792 -0.18389,0 -0.44774,-4.02226 -0.58634,-8.93836 -0.24465,-8.67753 0.3419,-64.528644 -1.00093,-76.967745 -0.89042,-8.248322 -0.64822,-7.625403 -3.38347,-8.70205 C 194.73559,57.208553 188.40672,52.635908 177.95836,42.74148 159.56739,25.325531 154.05365,20.518269 145.29419,14.262571 143.50875,12.987476 141.8906,11.94422 141.6983,11.94422 c -0.80546,0 -0.21127,1.049433 2.05579,3.630867 4.31915,4.918068 7.0308,8.825104 9.31677,13.423927 2.86279,5.759236 3.89423,9.755335 3.89423,15.087354 0,10.435035 -2.97037,14.762507 -14.38357,20.955144 -4.64752,2.521684 -9.19825,4.337686 -19.2246,7.67173 -17.55629,5.837963 -24.199633,8.632332 -31.072883,13.070105 -5.73235,3.701141 -11.9192,9.493332 -13.61702,12.74839 -1.22012,2.339213 -0.45864,11.542813 1.44792,17.500233 3.18551,9.95373 11.843648,14.35889 22.912523,17.14397 10.30549,1.85497 18.27905,-0.16911 29.85547,-3.58392 2.10767,-6.12864 9.17187,-18.06052 11.5429,-23.6508 -1.08935,6.80156 -5.49261,16.33595 -6.74768,21.6297 z m -2.67074,-31.083271 c -2.2257,-2.23606 -3.56167,-3.90447 -3.56167,-4.44795 0,-1.10585 2.93512,-5.525151 4.60002,-6.926073 0.80911,-0.680819 1.5081,-0.963974 1.93012,-0.781874 5.19103,3.257039 7.00576,6.031747 9.90821,8.961847 0,1.20805 -2.26169,4.056883 -5.38808,8.293821 -2.05563,0.0718 -3.31814,-0.90989 -7.4886,-5.099771 z M 38.250837,-3.6125072 l -0.60921,-1.794378 c -1.04906,-3.089938 -1.501071,-7.6651308 -1.06765,-10.8066398 1.069611,-7.752721 3.081312,-11.002081 10.995895,-21.677711 1.811878,-1.61732 6.852136,-7.51121 6.002309,-5.019862 -0.0716,0.106663 -2.96598,4.690389 -3.037061,4.797618 -3.154548,4.758816 -5.783342,10.045005 -6.530643,13.150637 -0.64634,2.686108 -0.57875,6.371649 0.16263,8.868159 1.2575,4.234455 2.83941,4.467283 6.22099,0.915616 1.29122,-1.356164 2.68283,-2.465753 3.09246,-2.465753 0.90103,0 0.9072,0.12586 0.13391,2.729823 -2.849164,6.2401411 -11.296106,18.2836928 -15.36363,11.3024908 z M 119.32986,167.10454 c -2.68564,-1.14825 -3.68204,-6.10563 -2.44966,-12.1877 0.74504,-3.67688 1.22557,-4.89043 1.93647,-4.89043 0.31715,0 0.36961,1.13887 0.1751,3.80137 -0.30091,4.11904 0.0769,6.00054 1.52654,7.60274 1.08078,1.19451 1.96416,1.16923 3.14721,-0.0901 1.7199,-1.83075 2.249,-0.0882 0.86964,2.86405 -1.45749,3.11944 -2.86197,3.90192 -5.2053,2.90004 z m 117.58793,-14.06138 c -2.34993,-5.82179 -4.98982,-8.46236 -9.56471,-9.56719 -1.30046,-0.31406 -1.93802,-0.77073 -2.62276,-1.87867 -1.20867,-1.95566 -1.46154,-4.5126 -0.64061,-6.47738 0.61411,-1.46976 0.73293,-1.54592 1.99532,-1.27889 3.11344,0.65858 6.55686,3.98273 9.6656,9.33083 1.5834,2.72399 2.92652,4.49889 2.9987,3.96271 0.0113,-0.0842 0.26949,-2.7009 0.57369,-5.81494 0.60798,-6.22378 1.861,-9.7984 3.73377,-10.65169 2.0541,-0.93591 4.91735,0.53443 6.30665,3.23861 0.65726,1.2793 0.57739,1.92597 -0.38974,3.15547 -0.94578,1.20237 -1.51314,1.07909 -3.80391,-0.82649 -1.39553,-1.16089 -2.38086,-1.22512 -3.29518,-0.21481 -0.54814,0.60569 -0.68171,1.66243 -0.68827,5.44521 -0.0125,7.21116 -1.32138,14.3512 -2.63079,14.3512 -0.28493,0 -1.02193,-1.24829 -1.63776,-2.77397 z M 176.93839,22.80228 c 0,0 3.54493,-3.52554 6.24997,-5.489774 -2.21026,-0.416086 -5.45071,-4.935765 -5.13138,-6.320881 0.3808,-1.5172107 3.30406,-4.5162777 5.38316,-5.5227527 2.49474,-1.207685 3.48143,-0.674199 3.48143,1.882344 0,1.226896 -0.72942,2.132377 -0.72942,2.132377 0,0 0.24109,-0.904162 -0.29452,-1.388885 -1.7951,-0.613851 -5.40704,1.458999 -4.75597,3.2690687 0.48841,1.284617 2.38158,2.329944 4.21972,2.329944 0.74653,0 2.63154,-0.364393 4.18891,-0.809757 1.55737,-0.445369 3.43167,-1.34814 3.43167,-1.34814 0.18497,0.740289 0.34616,2.31522 0.32163,2.756219 -4.31095,4.038162 -14.56084,9.36183 -14.56084,9.36183 z m 136.44013,61.614065 c -0.13478,-0.643915 -0.8041,-9.084017 -1.48736,-18.755782 -1.4601,-20.667887 -2.06711,-27.010709 -3.72489,-38.921823 -0.67635,-4.859589 -1.78198,-12.811643 -2.45695,-17.6712322 -0.67498,-4.85959 -1.58252,-11.332193 -2.01677,-14.383563 -0.43426,-3.051369 -1.45743,-10.3561628 -2.27373,-16.2328758 -2.65109,-19.085702 -3.42863,-21.862612 -3.42863,-21.862612 l 2.60503,-11.90539 c 5.33676,8.907951 14.89062,28.945723 14.89062,28.945723 l -7.69884,-4.477433 c 0,0 2.28751,21.0578048 4.54037,35.9192298 4.50698,29.7311672 5.80148,42.8697212 5.80095,58.8767712 -3.5e-4,10.785242 -0.20269,12.208577 -2.54197,17.881401 -1.52086,3.688123 -1.88752,4.11785 -2.20783,2.587586 z M 265.45824,40.878743 c -2.14726,-1.91949 -4.21415,-3.666288 -4.59308,-3.881774 -0.56509,-0.321353 -1.21328,0.272889 -3.60517,3.305125 -1.60392,2.033305 -3.0683,3.69692 -3.25417,3.69692 -1.5531,0 -10.3284,-7.712128 -10.3284,-9.077059 0,-0.93556 4.71251,-8.579252 5.29396,-8.586801 0.88672,-0.01151 3.13128,1.509448 6.7677,4.585936 1.83738,1.554468 3.61126,2.774194 3.94196,2.710508 0.59197,-0.114 1.81963,-1.605156 4.43311,-5.384589 0.79724,-1.152904 1.64084,-1.919227 2.11279,-1.919227 1.02858,0 3.72388,2.279494 7.63452,6.456743 l 3.15918,3.374552 -1.74073,2.930076 c -2.08309,3.506367 -3.81021,5.328242 -5.02452,5.300194 -0.52124,-0.01204 -2.51842,-1.473592 -4.79715,-3.510604 z m -7.14041,-17.068085 c -0.14127,-0.706335 -0.25685,-2.613464 -0.25685,-4.238063 -5.09431,-27.9722213 -6.90598,-60.45689 -15.22017,-110.207468 -0.67,-3.64111 -1.21819,-8.27863 -1.21819,-8.27863 l 3.91228,-9.135497 12.64441,29.582257 -5.79508,-3.57679 c 4.45415,34.187533 6.71818,52.010885 8.92763,69.009683 1.35011,9.3035258 1.59795,19.5549448 0.64798,26.801725 -0.61925,4.723915 -2.39344,11.32703 -3.04346,11.32703 -0.18794,0 -0.45729,-0.577911 -0.59855,-1.284247 z m 62.51414,-2.974356 c -2.19482,-2.03409 -2.56651,-3.328471 -2.55348,-8.892082 0.0113,-4.8176922 0.49985,-8.2493762 1.90148,-13.3561652 0.66165,-2.410697 1.07794,-0.824794 0.68342,2.60361 -0.83838,7.285718 -0.86404,8.9088542 -0.17816,11.2682182 0.37289,1.282677 1.12151,2.847205 1.66362,3.476729 l 0.98565,1.144594 1.00935,-0.946952 c 0.88379,-0.829155 1.04143,-0.863318 1.26734,-0.274607 0.54055,1.408644 0.24959,3.792658 -0.59374,4.864767 -1.0816,1.375028 -2.77372,1.420262 -4.18548,0.111888 z m -85.29895,-68.493625 c -2.70205,-1.64738 -3.9396,-6.96538 -3.00957,-12.9327 0.534,-3.42631 1.60761,-7.19179 2.05051,-7.19179 0.17422,0 0.1539,1.43322 -0.0451,3.18494 -0.62787,5.5255 0.0605,9.42042 2.07007,11.71233 0.95128,1.08494 2.04692,0.87193 2.77701,-0.53991 0.77364,-1.49606 1.57689,-1.39351 1.76658,0.22554 0.22242,1.89838 -0.30587,3.80452 -1.42206,5.13103 -1.22407,1.45473 -2.30148,1.56037 -4.1874,0.41056 z M 74.358458,5.5359798 c -2.51629,-1.33567 -3.47144,-4.79024996 -2.85294,-10.31852 0.6281,-5.6140398 3.09987,-13.8359298 4.15954,-13.8359298 0.53289,0 0.11476,4.13806 -0.75876,7.5091 -0.98932,3.8178898 -0.9127,7.1759798 0.21697,9.5095598 1.10205,2.27652004 1.6365,2.57663004 3.33541,1.87292004 1.72744,-0.71553 2.21004,-0.14773 1.64812,1.93906996 -0.77343,2.87231 -3.56166,4.48452 -5.74834,3.3238 z M 122.426,-45.176179 c -1.39959,-1.7793 -2.23455,-5.0146 -2.21695,-8.5903 0.018,-3.66063 1.04455,-8.74681 2.00492,-9.93372 0.56089,-0.69321 0.58919,-0.44841 0.29128,2.51987 -0.60007,5.97905 -1.84309,7.832073 0.52329,10.34753 0.73433,0.780593 2.3294,1.67931 3.19514,0.35802 0.95735,-1.4611 1.90061,-1.3628 1.90061,0.19807 0,1.69297 -0.88505,3.66036 -2.25877,5.02104 -1.42172,1.40822 -2.37697,1.4303 -3.43952,0.0795 z"})})})})}),(0,n.jsxs)("nav",{className:"".concat(u().desktopNav),children:[(0,n.jsx)(l(),{href:"/",className:u().navLink,title:"الرئيسية","aria-label":"الرئيسية",children:"الرئيسية"}),(0,n.jsx)(l(),{href:"/quran_sound",className:u().navLink,title:"القرآن الكريم MP3","aria-label":"القرآن الكريم MP3",children:"القرآن الكريم MP3"}),(0,n.jsx)(l(),{href:"/quran_pdf",className:u().navLink,title:"القرآن الكريم PDF","aria-label":"القرآن الكريم PDF",children:"القرآن الكريم PDF"})]}),(0,n.jsxs)("nav",{className:"".concat(u().mobileNav," ").concat(e?u().navOpen:""),children:[(0,n.jsx)(l(),{href:"/",className:u().navLink,onClick:r,title:"الرئيسية","aria-label":"الرئيسية",children:"الرئيسية"}),(0,n.jsx)(l(),{href:"/quran_sound",className:u().navLink,onClick:r,title:"القرآن الكريم MP3","aria-label":"القرآن الكريم MP3",children:"القرآن الكريم MP3"}),(0,n.jsx)(l(),{href:"/quran_pdf",className:u().navLink,onClick:r,title:"القرآن الكريم PDF","aria-label":"القرآن الكريم PDF",children:"القرآن الكريم PDF"})]}),(0,n.jsx)("button",{className:u().menuButton,onClick:r=>{r.stopPropagation(),t(!e)},children:e?(0,n.jsx)(o.aHS,{}):(0,n.jsx)(o.Fm7,{})})]})}var f=r(642),d=r.n(f);function h(){return(0,n.jsxs)("footer",{className:d().footer,role:"contentinfo",children:[(0,n.jsx)("div",{className:d().socialLinks,children:(0,n.jsx)(l(),{href:"https://t.me/KanzislamNet",target:"_blank",rel:"noopener noreferrer","aria-label":"قناة تيليجرام كنز الإسلام",children:(0,n.jsx)(o.Ww5,{className:d().icon})})}),(0,n.jsx)("p",{title:"لا تنسنا من دعوة صالحة بظهر الغيب","aria-label":"لا تنسنا من دعوة صالحة بظهر الغيب",children:"لا تنسنا من دعوة صالحة بظهر الغيب"}),(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsxs)("div",{className:d().links,children:[(0,n.jsx)(l(),{href:"/quran-pdf",title:"القرآن الكريم PDF","aria-label":"تحميل القرآن الكريم بصيغة PDF",className:d().link,children:"القرآن الكريم PDF"}),(0,n.jsx)(l(),{href:"/quran-mp3",title:"القرآن الكريم MP3","aria-label":"تحميل القرآن الكريم بصيغة MP3",className:d().link,children:"القرآن الكريم MP3"}),(0,n.jsx)(l(),{href:"/about","aria-label":"معلومات عن الموقع",className:d().link,children:"عن الموقع"}),(0,n.jsx)(l(),{href:"https://t.me/KanzislamNet",target:"__blank","aria-label":"اتصل بنا",className:d().link,children:"اتصل بنا"})]}),(0,n.jsxs)("div",{className:d().copyright,children:[(0,n.jsx)("p",{dir:"ltr",children:"\xa9 2024 موقع القرآن الكريم. جميع الحقوق محفوظة"}),(0,n.jsxs)("small",{children:["تم تطوير الموقع بواسطة ",(0,n.jsx)(l(),{href:"https://i8x.net",target:"__blank",className:d().poweredBy,"aria-label":"موقع i8x",children:"i8x"})]})]})]})]})}var p=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)(t,{...r}),(0,n.jsx)(h,{})]})}},1784:function(){},7449:function(){},642:function(e){e.exports={footer:"Footer_footer__JrJN9",container:"Footer_container__YfQ4y",links:"Footer_links__g0H7R",link:"Footer_link__ZIL7i",socialLinks:"Footer_socialLinks__AJQgv",icon:"Footer_icon__Tbatf",copyright:"Footer_copyright__W8ZKy",poweredBy:"Footer_poweredBy__yrYDm"}},2631:function(e){e.exports={header:"Header_header__b6rsY",logoContainer:"Header_logoContainer__hiUEy",logo:"Header_logo__h1sXA",quranSvg:"Header_quranSvg__FbE1n",desktopNav:"Header_desktopNav__1gHQ0",navLink:"Header_navLink__7_4BM",mobileNav:"Header_mobileNav__ZnIjw",navOpen:"Header_navOpen__xGxed",menuButton:"Header_menuButton__zCiFK"}},1664:function(e,t,r){e.exports=r(9577)},9831:function(e,t,r){"use strict";r.d(t,{Fm7:function(){return h},esY:function(){return p},s0p:function(){return v},xng:function(){return g},DAO:function(){return m},Wh:function(){return _},gmG:function(){return b},PPi:function(){return y},qSR:function(){return j},Nqc:function(){return x},Ww5:function(){return d},aHS:function(){return O}});var n=r(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(c),l=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,c;n=t,c=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[n]=c}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return t=>n.createElement(f,o({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:c,size:a,title:i}=e,s=function(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}(e,l),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,s,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(c)}function d(e){return s({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"},child:[]}]})(e)}function h(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function p(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(e)}function v(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"},child:[]}]})(e)}function g(e){return s({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function m(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function _(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(e)}function b(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function y(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function j(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(e)}function x(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}function O(e){return s({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);