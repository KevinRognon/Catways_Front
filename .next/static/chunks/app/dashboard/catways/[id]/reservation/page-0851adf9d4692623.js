(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{3034:function(e,t,n){Promise.resolve().then(n.bind(n,9885))},9885:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(2265),u=n(8472),c=n(7975),o=n(6463),s=n(6259);t.default=(0,c.Z)(function(){let[e,t]=(0,a.useState)(""),[n,c]=(0,a.useState)(""),[i,l]=(0,a.useState)(null),[d,m]=(0,a.useState)(""),[f,p]=(0,a.useState)(""),[h,b]=(0,a.useState)(""),[v,x]=(0,a.useState)(""),[g,y]=(0,a.useState)(""),{id:N}=(0,o.useParams)();(0,a.useEffect)(()=>{C()},[]),(0,a.useEffect)(()=>{i&&m(i.catwayNumber)},[i]);let C=async()=>{l((await u.Z.get("".concat("https://catways-api.onrender.com","/catways/").concat(N))).data.catway)},j=async e=>{e.preventDefault();let n=await u.Z.post("".concat("https://catways-api.onrender.com","/reservations/create"),{catwayNumber:d,clientName:f,boatName:h,checkIn:v,checkOut:g});201===n.status?(c(n.data.message),t(""),p(""),b(""),x(""),y("")):400===n.status&&t(n.data.message),setTimeout(()=>{c(""),t("")},2e3)};return i?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full mt-10",children:[e&&(0,r.jsx)("p",{className:"text-red-500 font-bold",children:e}),n&&(0,r.jsx)("p",{className:"text-green-500",children:n}),(0,r.jsx)("h2",{children:"Cr\xe9er une nouvelle r\xe9servation"}),(0,r.jsxs)("form",{onSubmit:j,className:"flex flex-col justify-center gap-2 text-black",children:[(0,r.jsx)("input",{value:f,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"text",name:"clientName",id:"clientName",placeholder:"Nom du client",onChange:e=>p(e.target.value)}),(0,r.jsx)("input",{value:h,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"text",name:"boatName",id:"boatName",placeholder:"Nom du bateau",onChange:e=>b(e.target.value)}),(0,r.jsx)("input",{value:v,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"datetime-local",name:"checkIn",id:"checkIn",onChange:e=>x(e.target.value)}),(0,r.jsx)("input",{value:g,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"datetime-local",name:"checkOut",id:"checkOut",onChange:e=>y(e.target.value)}),(0,r.jsx)("input",{className:"p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50",type:"submit",value:"Cr\xe9er"}),(0,r.jsx)(s.Z,{})]})]}):(0,r.jsx)("div",{children:"Chargement..."})})},6259:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7437),a=n(6463);function u(){let e=(0,a.useRouter)();return(0,r.jsx)("button",{onClick:()=>{e.back()},className:"bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Retour"})}n(2265)},7975:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437),a=n(2265),u=n(6463),c=n(2649),o=n(8472);function s(e){return t=>{let n=(0,u.useRouter)(),s=(0,u.usePathname)();return(0,a.useEffect)(()=>{let e=c.Z.get("token");e?(o.Z.defaults.headers.common.Authorization="".concat(e),"/"===s&&n.replace("/dashboard")):n.replace("/")},[n]),(0,r.jsx)(e,{...t})}}},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},2649:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return a}});var a=function e(t,n){function a(e,a,u){if("undefined"!=typeof document){"number"==typeof(u=r({},n,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var o in u)u[o]&&(c+="; "+o,!0!==u[o]&&(c+="="+u[o].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+c}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var u=n[a].split("="),c=u.slice(1).join("=");try{var o=decodeURIComponent(u[0]);if(r[o]=t.read(c,o),e===o)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){a(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[472,971,23,744],function(){return e(e.s=3034)}),_N_E=e.O()}]);