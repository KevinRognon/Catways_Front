(()=>{var e={};e.id=296,e.ids=[296],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6537:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>l}),r(2443),r(3321),r(3426),r(5866);var s=r(3191),a=r(8716),n=r(7922),i=r.n(n),o=r(5231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["dashboard",{children:["catways",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2443)),"/Users/kevin/Catways_Front/app/dashboard/catways/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3321)),"/Users/kevin/Catways_Front/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3426)),"/Users/kevin/Catways_Front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/kevin/Catways_Front/app/dashboard/catways/[id]/page.tsx"],u="/dashboard/catways/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/catways/[id]/page",pathname:"/dashboard/catways/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9037:(e,t,r)=>{Promise.resolve().then(r.bind(r,6991))},6381:(e,t,r)=>{Promise.resolve().then(r.bind(r,8767))},282:(e,t,r)=>{Promise.resolve().then(r.bind(r,4869))},8963:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},6991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(326),a=r(7577),n=r(4099),i=r(5047);let o=(0,r(6762).Z)(function(){let[e,t]=(0,a.useState)([]),[r,o]=(0,a.useState)(""),{id:d}=(0,i.useParams)(),l=(0,i.useRouter)();async function c(){let e=await n.Z.delete(`https://catways-api.onrender.com/catways/${d}`);200===e.status?l.replace("/dashboard/catways"):501===e.status&&o("Une erreur est survenue.")}return s.jsx(s.Fragment,{children:s.jsx("div",{className:"p-10",children:(0,s.jsxs)("article",{className:"w-2/5 bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950",children:[s.jsx("h2",{className:"text-2xl font-semibold text-cyan-700 mb-4",children:"Catway Detail"}),(0,s.jsxs)("p",{className:"mb-2",children:[s.jsx("strong",{children:"Num\xe9ro catway: "})," ",e.catwayNumber]}),(0,s.jsxs)("p",{className:"mb-2",children:[s.jsx("strong",{children:"Etat catway: "})," ",e.catwayState]}),(0,s.jsxs)("p",{className:"mb-2",children:[s.jsx("strong",{children:"Longueur du catway: "})," ",e.catwayType]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx("button",{className:"bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600",children:"R\xe9server"}),s.jsx("button",{onClick:()=>{l.replace(`/dashboard/catways/${d}/update`)},className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Modifier"}),s.jsx("button",{onClick:c,className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700",children:"Supprimer"})]}),r&&s.jsx("p",{className:"text-red-600 text-2xl",children:r})]})})})})},8767:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(326),a=r(6562),n=r(434),i=r(5047),o=r(4869);function d({children:e}){let t=(0,i.useRouter)(),{user:r,setUser:d}=(0,o.a)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between gap-2 bg-cyan-700 text-cyan-100 h-12 pl-5 pr-5",children:[r?s.jsx(n.default,{href:"/dashboard",children:(0,s.jsxs)("div",{children:[s.jsx("p",{children:r.name}),s.jsx("p",{children:r.email})]})}):(0,s.jsxs)("div",{children:[s.jsx("p",{children:"Loading"}),s.jsx("p",{children:"Loading"})]}),s.jsx("p",{className:"hover:cursor-pointer",onClick:()=>{a.Z.remove("token"),a.Z.remove("user"),d(null),t.replace("/")},children:"D\xe9connexion"})]}),e]})}},6762:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(326),a=r(7577),n=r(5047),i=r(6562),o=r(4099);function d(e){return t=>{let r=(0,n.useRouter)(),d=(0,n.usePathname)();return(0,a.useEffect)(()=>{let e=i.Z.get("token");e?(o.Z.defaults.headers.common.Authorization=`${e}`,"/"===d&&r.replace("/dashboard")):r.replace("/")},[r]),s.jsx(e,{...t})}}},4869:(e,t,r)=>{"use strict";r.d(t,{UserProvider:()=>o,a:()=>d});var s=r(326),a=r(7577),n=r(6562);let i=(0,a.createContext)(),o=({children:e})=>{let[t,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=n.Z.get("user");e&&r(JSON.parse(e))},[]),s.jsx(i.Provider,{value:{user:t,setUser:r},children:e})},d=()=>(0,a.useContext)(i)},2443:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/catways/[id]/page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/catways/[id]/page.tsx#default`)},3321:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/kevin/Catways_Front/app/dashboard/layout.tsx#default`)},3426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(9510);r(3130);var a=r(8570);let n=(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js`),{__esModule:i,$$typeof:o}=n;n.default;let d=(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#UserProvider`);function l({children:e}){return s.jsx("html",{lang:"fr",children:s.jsx("body",{children:s.jsx("main",{className:"bg-cyan-950 min-h-dvh text-cyan-100",children:s.jsx(d,{children:e})})})})}(0,a.createProxy)(String.raw`/Users/kevin/Catways_Front/context/userContext.js#useUser`)},3130:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[805,555,434],()=>r(6537));module.exports=s})();