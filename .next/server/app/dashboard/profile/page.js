(()=>{var e={};e.id=544,e.ids=[544],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6273:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),t(5587),t(3321),t(3426),t(5866);var s=t(3191),n=t(8716),a=t(7922),o=t.n(a),i=t(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["dashboard",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5587)),"/Users/kevin/Catways_Front/app/dashboard/profile/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3321)),"/Users/kevin/Catways_Front/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3426)),"/Users/kevin/Catways_Front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/kevin/Catways_Front/app/dashboard/profile/page.tsx"],u="/dashboard/profile/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/dashboard/profile/page",pathname:"/dashboard/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6381:(e,r,t)=>{Promise.resolve().then(t.bind(t,8767))},530:(e,r,t)=>{Promise.resolve().then(t.bind(t,2687))},282:(e,r,t)=>{Promise.resolve().then(t.bind(t,4869))},8963:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},8767:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(326),n=t(6562),a=t(434),o=t(5047),i=t(4869);function l({children:e}){let r=(0,o.useRouter)(),{user:t,setUser:l}=(0,i.a)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between gap-2 bg-cyan-700 text-cyan-100 h-12 pl-5 pr-5",children:[t?s.jsx(a.default,{href:"/dashboard",children:(0,s.jsxs)("div",{children:[s.jsx("p",{children:t.name}),s.jsx("p",{children:t.email})]})}):(0,s.jsxs)("div",{children:[s.jsx("p",{children:"Loading"}),s.jsx("p",{children:"Loading"})]}),s.jsx("p",{className:"hover:cursor-pointer",onClick:()=>{n.Z.remove("token"),n.Z.remove("user"),l(null),r.replace("/")},children:"D\xe9connexion"})]}),e]})}},2687:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(326);let n=(0,t(6762).Z)(()=>s.jsx("h1",{children:"Profile"}))},6762:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(326),n=t(5047),a=t(7577),o=t(6562);function i(e){return r=>{let t=(0,n.useRouter)();return(0,a.useEffect)(()=>{o.Z.get("token")||t.replace("/")},[t]),s.jsx(e,{...r})}}},4869:(e,r,t)=>{"use strict";t.d(r,{UserProvider:()=>i,a:()=>l});var s=t(326),n=t(7577),a=t(6562);let o=(0,n.createContext)(),i=({children:e})=>{let[r,t]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=a.Z.get("user");e&&t(JSON.parse(e))},[]),s.jsx(o.Provider,{value:{user:r,setUser:t},children:e})},l=()=>(0,n.useContext)(o)},3321:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});var s=t(8570);let n=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx`),{__esModule:a,$$typeof:o}=n;n.default;let i=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx#default`)},5587:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});var s=t(8570);let n=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/profile/page.tsx`),{__esModule:a,$$typeof:o}=n;n.default;let i=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/profile/page.tsx#default`)},3426:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(9510);t(3130);var n=t(8570);let a=(0,n.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js`),{__esModule:o,$$typeof:i}=a;a.default;let l=(0,n.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#UserProvider`);function d({children:e}){return s.jsx("html",{lang:"fr",children:s.jsx("body",{children:s.jsx("main",{className:"bg-cyan-950 min-h-dvh text-cyan-100",children:s.jsx(l,{children:e})})})})}(0,n.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#useUser`)},3130:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[805,496],()=>t(6273));module.exports=s})();