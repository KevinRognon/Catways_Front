(()=>{var e={};e.id=702,e.ids=[702],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},679:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),t(9521),t(3321),t(3426),t(5866);var s=t(3191),a=t(8716),n=t(7922),i=t.n(n),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9521)),"/Users/kevin/Catways_Front/app/dashboard/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3321)),"/Users/kevin/Catways_Front/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3426)),"/Users/kevin/Catways_Front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/kevin/Catways_Front/app/dashboard/page.tsx"],u="/dashboard/page",x={require:t,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6381:(e,r,t)=>{Promise.resolve().then(t.bind(t,8767))},5378:(e,r,t)=>{Promise.resolve().then(t.bind(t,7581))},282:(e,r,t)=>{Promise.resolve().then(t.bind(t,4869))},8963:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},8767:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(326),a=t(6562),n=t(434),i=t(5047),o=t(4869);function l({children:e}){let r=(0,i.useRouter)(),{user:t,setUser:l}=(0,o.a)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between gap-2 bg-cyan-700 text-cyan-100 h-12 pl-5 pr-5",children:[t?s.jsx(n.default,{href:"/dashboard",children:(0,s.jsxs)("div",{children:[s.jsx("p",{children:t.name}),s.jsx("p",{children:t.email})]})}):(0,s.jsxs)("div",{children:[s.jsx("p",{children:"Loading"}),s.jsx("p",{children:"Loading"})]}),s.jsx("p",{className:"hover:cursor-pointer",onClick:()=>{a.Z.remove("token"),a.Z.remove("user"),l(null),r.replace("/")},children:"D\xe9connexion"})]}),e]})}},7581:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(326),a=t(6762),n=t(434);let i=(0,a.Z)(()=>(0,s.jsxs)("div",{className:"",children:[s.jsx("h1",{className:"p-10 text-3xl text-cyan-700",children:"Tableau de bord"}),(0,s.jsxs)("section",{className:"grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-3",children:[s.jsx(n.default,{href:"/dashboard/users",children:s.jsx("article",{className:"article_dashboard",children:s.jsx("h2",{className:"text-5xl",children:"Liste utilisateurs"})})}),s.jsx(n.default,{href:"/dashboard/catways",children:s.jsx("article",{className:"article_dashboard",children:s.jsx("h2",{className:"text-5xl",children:"Catways"})})}),s.jsx(n.default,{href:"/dashboard/settings",children:s.jsx("article",{className:"article_dashboard",children:s.jsx("h2",{className:"text-5xl",children:"Param\xe8tres"})})})]})]}))},6762:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(326),a=t(5047),n=t(7577),i=t(6562);function o(e){return r=>{let t=(0,a.useRouter)();return(0,n.useEffect)(()=>{i.Z.get("token")||t.replace("/")},[t]),s.jsx(e,{...r})}}},4869:(e,r,t)=>{"use strict";t.d(r,{UserProvider:()=>o,a:()=>l});var s=t(326),a=t(7577),n=t(6562);let i=(0,a.createContext)(),o=({children:e})=>{let[r,t]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=n.Z.get("user");e&&t(JSON.parse(e))},[]),s.jsx(i.Provider,{value:{user:r,setUser:t},children:e})},l=()=>(0,a.useContext)(i)},3321:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=t(8570);let a=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx#default`)},9521:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=t(8570);let a=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/page.tsx#default`)},3426:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(9510);t(3130);var a=t(8570);let n=(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js`),{__esModule:i,$$typeof:o}=n;n.default;let l=(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#UserProvider`);function d({children:e}){return s.jsx("html",{lang:"fr",children:s.jsx("body",{children:s.jsx("main",{className:"bg-cyan-950 min-h-dvh text-cyan-100",children:s.jsx(l,{children:e})})})})}(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#useUser`)},3130:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[805,496],()=>t(679));module.exports=s})();