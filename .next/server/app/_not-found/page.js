(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6377:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>l}),r(7352),r(5866),r(3426);var n=r(3191),o=r(8716),s=r(7922),i=r.n(s),a=r(5231),u={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>a[e]);r.d(t,u);let l=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3426)),"/Users/kevin/Catways_Front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=[],c="/_not-found/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},282:(e,t,r)=>{Promise.resolve().then(r.bind(r,4869))},8963:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},4869:(e,t,r)=>{"use strict";r.d(t,{UserProvider:()=>a,a:()=>u});var n=r(326),o=r(7577),s=r(6562);let i=(0,o.createContext)(),a=({children:e})=>{let[t,r]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=s.Z.get("user");e&&r(JSON.parse(e))},[]),n.jsx(i.Provider,{value:{user:t,setUser:r},children:e})},u=()=>(0,o.useContext)(i)},3426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(9510);r(3130);var o=r(8570);let s=(0,o.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js`),{__esModule:i,$$typeof:a}=s;s.default;let u=(0,o.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#UserProvider`);function l({children:e}){return n.jsx("html",{lang:"fr",children:n.jsx("body",{children:n.jsx("main",{className:"bg-cyan-950 min-h-dvh text-cyan-100",children:n.jsx(u,{children:e})})})})}(0,o.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#useUser`)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return s}});let n=r(6399),o="next/dist/client/components/parallel-route-default.js";function s(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3130:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[805],()=>r(6377));module.exports=n})();