(()=>{var e={};e.id=785,e.ids=[785],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},6438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(5285),r(3971),r(3321),r(4481),r(3426),r(5866);var s=r(3191),a=r(8716),n=r(7922),o=r.n(n),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["dashboard",{children:["catways",{children:["[id]",{children:["reservation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5285)),"/home/kevin/Documents/Developpement/Catways_front/app/dashboard/catways/[id]/reservation/page.tsx"]}]},{}]},{}]},{loading:[()=>Promise.resolve().then(r.bind(r,3971)),"/home/kevin/Documents/Developpement/Catways_front/app/dashboard/catways/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3321)),"/home/kevin/Documents/Developpement/Catways_front/app/dashboard/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,4481)),"/home/kevin/Documents/Developpement/Catways_front/app/dashboard/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3426)),"/home/kevin/Documents/Developpement/Catways_front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["/home/kevin/Documents/Developpement/Catways_front/app/dashboard/catways/[id]/reservation/page.tsx"],d="/dashboard/catways/[id]/reservation/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/catways/[id]/reservation/page",pathname:"/dashboard/catways/[id]/reservation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},131:(e,t,r)=>{Promise.resolve().then(r.bind(r,3769))},369:(e,t,r)=>{Promise.resolve().then(r.bind(r,8767))},739:(e,t,r)=>{Promise.resolve().then(r.bind(r,4869))},8666:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5303:()=>{},3769:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(326),a=r(7577),n=r(4099),o=r(6762),i=r(5047),l=r(4167);let c=(0,o.Z)(function(){let[e,t]=(0,a.useState)(""),[r,o]=(0,a.useState)(""),[c,u]=(0,a.useState)(null),[d,p]=(0,a.useState)(""),[x,m]=(0,a.useState)(""),[h,v]=(0,a.useState)(""),[b,f]=(0,a.useState)(""),[y,g]=(0,a.useState)(""),{id:j}=(0,i.useParams)(),w=async e=>{e.preventDefault();let r=await n.Z.post("https://catways-api.onrender.com/reservations/create",{catwayNumber:d,clientName:x,boatName:h,checkIn:b,checkOut:y});201===r.status?(o(r.data.message),t(""),m(""),v(""),f(""),g("")):400===r.status&&t(r.data.message),setTimeout(()=>{o(""),t("")},2e3)};return c?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full mt-10",children:[e&&s.jsx("p",{className:"text-red-500 font-bold",children:e}),r&&s.jsx("p",{className:"text-green-500",children:r}),s.jsx("h2",{children:"Cr\xe9er une nouvelle r\xe9servation"}),(0,s.jsxs)("form",{onSubmit:w,className:"flex flex-col justify-center gap-2 text-black",children:[s.jsx("input",{value:x,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"text",name:"clientName",id:"clientName",placeholder:"Nom du client",onChange:e=>m(e.target.value)}),s.jsx("input",{value:h,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"text",name:"boatName",id:"boatName",placeholder:"Nom du bateau",onChange:e=>v(e.target.value)}),s.jsx("input",{value:b,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"datetime-local",name:"checkIn",id:"checkIn",onChange:e=>f(e.target.value)}),s.jsx("input",{value:y,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"datetime-local",name:"checkOut",id:"checkOut",onChange:e=>g(e.target.value)}),s.jsx("input",{className:"p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50",type:"submit",value:"Cr\xe9er"}),s.jsx(l.Z,{})]})]}):s.jsx("div",{children:"Chargement..."})})},8767:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(326),a=r(6562),n=r(5047),o=r(4869),i=r(7577),l=r(8370),c=r(8604),u=r(4501);function d({children:e}){let t=(0,n.useRouter)();(0,n.usePathname)();let{user:r,setUser:d}=(0,o.a)(),[p,x]=(0,i.useState)(!1),[m,h]=(0,i.useState)(""),v=async()=>{await t.replace("/"),a.Z.remove("token"),a.Z.remove("user"),d(null)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between gap-2 text-cyan-50 font-semibold h-12 p-8 border-b-4",children:[r?s.jsx(l.Z,{onClick:()=>{t.push("/dashboard/account")},text:r.name}):s.jsx("div",{}),s.jsx("div",{className:"text-xl",children:s.jsx("p",{children:m.toUpperCase()})}),(0,s.jsxs)("div",{className:"flex gap-2",children:[s.jsx(l.Z,{onClick:()=>{t.push("/dashboard/")},text:"Dashboard"}),s.jsx(l.Z,{onClick:()=>{t.push("/dashboard/api")},text:"Api"}),s.jsx(c.Z,{onClick:()=>{x(!0)},text:"D\xe9connexion"})]})]}),p&&s.jsx(u.Z,{text:"",title:"\xcates-vous s\xfbr ?",option1:"Annuler",option2:"D\xe9connexion",onAbort:()=>{x(!1)},onConfirm:v}),s.jsx("main",{className:"pt-8 pb-8",children:e})]})}},4167:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(326),a=r(5047);function n(){let e=(0,a.useRouter)();return s.jsx("button",{onClick:()=>{e.back()},className:"bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600",children:"Retour"})}r(7577)},8370:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(326);function a({onClick:e,text:t}){return s.jsx("button",{onClick:e,className:"bg-blue-700 text-white px-4 rounded-full py-2 hover:bg-blue-600",children:t})}r(7577)},8604:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(326);function a({onClick:e,text:t}){return s.jsx("button",{onClick:e,className:"bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-500",children:t})}r(7577)},4501:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(326);r(7577);var a=r(8370),n=r(8604);function o({onAbort:e,onConfirm:t,title:r,text:o,option1:i,option2:l}){return s.jsx("div",{onClick:e,className:"absolute top-0 left-0 z-10 w-dvw h-dvh bg-black bg-opacity-70 flex justify-center items-center",children:(0,s.jsxs)("div",{className:"flex flex-col items-center z-20 text-black bg-neutral-300 w-fit h-fit p-5 rounded-md",children:[s.jsx("p",{className:"text-lg font-bold",children:r}),""!=o&&s.jsx("p",{className:"text-red-700 font-bold",children:o}),(0,s.jsxs)("div",{className:"flex gap-2 mt-4",children:[s.jsx(a.Z,{onClick:e,text:i}),s.jsx(n.Z,{onClick:t,text:l})]})]})})}},6762:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(326),a=r(7577),n=r(5047),o=r(6562),i=r(4099);function l(e){return t=>{let r=(0,n.useRouter)(),l=(0,n.usePathname)();return(0,a.useEffect)(()=>{let e=o.Z.get("token"),t=o.Z.get("user");e&&t?(i.Z.defaults.headers.common.Authorization=`${e}`,"/"===l&&r.replace("/dashboard")):r.replace("/")},[r]),s.jsx(e,{...t})}}},4869:(e,t,r)=>{"use strict";r.d(t,{UserProvider:()=>i,a:()=>l});var s=r(326),a=r(7577),n=r(6562);let o=(0,a.createContext)(),i=({children:e})=>{let[t,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=n.Z.get("user");e&&r(JSON.parse(e))},[]),s.jsx(o.Provider,{value:{user:t,setUser:r},children:e})},l=()=>(0,a.useContext)(o)},5285:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=r(8570);let a=(0,s.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/app/dashboard/catways/[id]/reservation/page.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/app/dashboard/catways/[id]/reservation/page.tsx#default`)},3971:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(9510),a=r(3246);function n(){return s.jsx(a.Z,{})}},3321:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=r(8570);let a=(0,s.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/app/dashboard/layout.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/app/dashboard/layout.tsx#default`)},4481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(9510),a=r(3246);function n(){return s.jsx(a.Z,{})}},3426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(9510);r(3130);var a=r(8570);let n=(0,a.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/context/userContext.js`),{__esModule:o,$$typeof:i}=n;n.default;let l=(0,a.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/context/userContext.js#UserProvider`);function c({children:e}){return s.jsx("html",{lang:"fr",children:s.jsx("body",{className:"bg-cyan-950 text-cyan-100",children:s.jsx(l,{children:e})})})}(0,a.createProxy)(String.raw`/home/kevin/Documents/Developpement/Catways_front/context/userContext.js#useUser`)},3246:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(9510);function a(){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"overlay_loader",children:s.jsx("h1",{className:"text-7xl",children:"Loading..."})})})}},3130:()=>{}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[805,555],()=>r(6438));module.exports=s})();