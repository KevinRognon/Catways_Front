(()=>{var e={};e.id=930,e.ids=[930],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4766:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),t(5901),t(3321),t(3426),t(5866);var s=t(3191),a=t(8716),n=t(7922),i=t.n(n),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["dashboard",{children:["reservations",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5901)),"/Users/kevin/Catways_Front/app/dashboard/reservations/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3321)),"/Users/kevin/Catways_Front/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3426)),"/Users/kevin/Catways_Front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/kevin/Catways_Front/app/dashboard/reservations/page.tsx"],u="/dashboard/reservations/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/reservations/page",pathname:"/dashboard/reservations",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6381:(e,r,t)=>{Promise.resolve().then(t.bind(t,8767))},878:(e,r,t)=>{Promise.resolve().then(t.bind(t,142))},282:(e,r,t)=>{Promise.resolve().then(t.bind(t,4869))},8963:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},8767:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(326),a=t(6562),n=t(434),i=t(5047),o=t(4869);function l({children:e}){let r=(0,i.useRouter)(),{user:t,setUser:l}=(0,o.a)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between gap-2 bg-cyan-700 text-cyan-100 h-12 pl-5 pr-5",children:[t?s.jsx(n.default,{href:"/dashboard",children:(0,s.jsxs)("div",{children:[s.jsx("p",{children:t.name}),s.jsx("p",{children:t.email})]})}):(0,s.jsxs)("div",{children:[s.jsx("p",{children:"Loading"}),s.jsx("p",{children:"Loading"})]}),s.jsx("p",{className:"hover:cursor-pointer",onClick:()=>{a.Z.remove("token"),a.Z.remove("user"),l(null),r.replace("/")},children:"D\xe9connexion"})]}),e]})}},142:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(326),a=t(6762),n=t(7577);function i(e){return s.jsx(s.Fragment,{children:(0,s.jsxs)("article",{className:"bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950",children:[(0,s.jsxs)("h2",{className:"text-2xl font-semibold text-cyan-700 mb-4",children:["ID: ",e.id_resa]}),(0,s.jsxs)("p",{className:"mb-2",children:[s.jsx("strong",{children:"Num\xe9ro Catway: "})," ",e.catwayNumber]}),(0,s.jsxs)("p",{className:"mb-2",children:[s.jsx("strong",{children:"Client: "})," ",e.clientName]}),(0,s.jsxs)("p",{className:"mb-2",children:[s.jsx("strong",{children:"Bateau: "})," ",e.boatName]}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700",children:"Supprimer"})})]})})}t(4099);let o=(0,a.Z)(function(){let[e,r]=(0,n.useState)([]);return s.jsx(s.Fragment,{children:s.jsx("ul",{className:"grid grid-cols-2 gap-5 mt-5 pb-5 w-4/5 m-auto",children:e.map(e=>s.jsx(i,{id_resa:e._id,clientName:e.clientName,boatName:e.boatName,catwayNumber:e.catwayNumber},e._id))})})})},6762:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(326),a=t(7577),n=t(5047),i=t(6562),o=t(4099);function l(e){return r=>{let t=(0,n.useRouter)(),l=(0,n.usePathname)();return(0,a.useEffect)(()=>{let e=i.Z.get("token");e?(o.Z.defaults.headers.common.Authorization=`${e}`,"/"===l&&t.replace("/dashboard")):t.replace("/")},[t]),s.jsx(e,{...r})}}},4869:(e,r,t)=>{"use strict";t.d(r,{UserProvider:()=>o,a:()=>l});var s=t(326),a=t(7577),n=t(6562);let i=(0,a.createContext)(),o=({children:e})=>{let[r,t]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=n.Z.get("user");e&&t(JSON.parse(e))},[]),s.jsx(i.Provider,{value:{user:r,setUser:t},children:e})},l=()=>(0,a.useContext)(i)},3321:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=t(8570);let a=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx#default`)},5901:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=t(8570);let a=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/reservations/page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/reservations/page.tsx#default`)},3426:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(9510);t(3130);var a=t(8570);let n=(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js`),{__esModule:i,$$typeof:o}=n;n.default;let l=(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#UserProvider`);function d({children:e}){return s.jsx("html",{lang:"fr",children:s.jsx("body",{children:s.jsx("main",{className:"bg-cyan-950 min-h-dvh text-cyan-100",children:s.jsx(l,{children:e})})})})}(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#useUser`)},3130:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[805,555,434],()=>t(4766));module.exports=s})();