(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{1351:function(e,t,n){Promise.resolve().then(n.bind(n,3924))},3924:function(e,t,n){"use strict";n.r(t);var r=n(7437),c=n(6463),a=n(7975),o=n(8472),s=n(2265),i=n(6042),u=n(2960),l=n(7010);t.default=(0,a.Z)(function(){let[e,t]=(0,s.useState)({_id:"",clientName:"",boatName:"",checkIn:"",checkOut:"",createdAt:""}),[n,a]=(0,s.useState)(!1),{id:d}=(0,c.useParams)(),f=(0,c.useRouter)(),m=async()=>{try{let e=await o.Z.get("".concat("https://catways-api.onrender.com","/reservations/").concat(d));t(t=>e.data.reservation)}catch(e){console.error("Error fetching reservation data:",e)}};(0,s.useEffect)(()=>{m()},[d]);let h=()=>{f.back()},x=async()=>{await o.Z.delete("".concat("https://catways-api.onrender.com","/reservations/").concat(d)),h()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"container mx-auto mt-10",children:(0,r.jsx)("div",{className:"max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden",children:(0,r.jsxs)("div",{className:"p-6 relative",children:[(0,r.jsxs)("h2",{className:"text-xl font-semibold text-gray-800 mb-4 mt-3",children:["R\xe9servation cr\xe9e le: ",new Date(e.createdAt).toLocaleString()]}),(0,r.jsxs)("p",{className:"text-gray-600 mb-2",children:[(0,r.jsx)("strong",{children:"Client :"})," ",e.clientName]}),(0,r.jsxs)("p",{className:"text-gray-600 mb-2",children:[(0,r.jsx)("strong",{children:"Bateau :"})," ",e.boatName]}),(0,r.jsxs)("p",{className:"text-gray-600 mb-2",children:[(0,r.jsx)("strong",{children:"Heure d'arriv\xe9e :"})," ",new Date(e.checkIn).toLocaleString()]}),(0,r.jsxs)("p",{className:"text-gray-600 mb-2",children:[(0,r.jsx)("strong",{children:"Heure de d\xe9part :"})," ",new Date(e.checkOut).toLocaleString()]}),(0,r.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,r.jsx)(l.Z,{onClick:()=>{a(!0)},text:"Valider d\xe9part"}),(0,r.jsx)(i.Z,{onClick:h,text:"Retour"})]})]})})}),n&&(0,r.jsx)(u.Z,{title:"Valider le d\xe9part ?",option1:"Annuler",option2:"Confirmer",onAbort:()=>{a(!1)},onConfirm:()=>{x()}})]})})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7437);function c(e){let{onClick:t,text:n}=e;return(0,r.jsx)("button",{onClick:t,className:"bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600",children:n})}n(2265)},7010:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7437);function c(e){let{onClick:t,text:n}=e;return(0,r.jsx)("button",{onClick:t,className:"bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500",children:n})}n(2265)},2960:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437);n(2265);var c=n(6042),a=n(7010);function o(e){let{onAbort:t,onConfirm:n,title:o,option1:s,option2:i}=e;return(0,r.jsx)("div",{onClick:t,className:"absolute top-0 left-0 z-10 w-dvw h-dvh bg-black bg-opacity-70 flex justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col items-center z-20 text-black bg-neutral-300 w-fit h-fit p-5 rounded-md",children:[(0,r.jsx)("p",{className:"text-lg font-bold",children:o}),(0,r.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,r.jsx)(c.Z,{onClick:t,text:s}),(0,r.jsx)(a.Z,{onClick:n,text:i})]})]})})}},7975:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7437),c=n(2265),a=n(6463),o=n(2649),s=n(8472);function i(e){return t=>{let n=(0,a.useRouter)(),i=(0,a.usePathname)();return(0,c.useEffect)(()=>{let e=o.Z.get("token");e?(s.Z.defaults.headers.common.Authorization="".concat(e),"/"===i&&n.replace("/dashboard")):n.replace("/")},[n]),(0,r.jsx)(e,{...t})}}},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},2649:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return c}});var c=function e(t,n){function c(e,c,a){if("undefined"!=typeof document){"number"==typeof(a=r({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in a)a[s]&&(o+="; "+s,!0!==a[s]&&(o+="="+a[s].split(";")[0]));return document.cookie=e+"="+t.write(c,e)+o}}return Object.create({set:c,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},c=0;c<n.length;c++){var a=n[c].split("="),o=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(r[s]=t.read(o,s),e===s)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){c(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[472,971,23,744],function(){return e(e.s=1351)}),_N_E=e.O()}]);