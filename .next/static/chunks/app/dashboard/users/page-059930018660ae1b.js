(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{5601:function(e,t,n){Promise.resolve().then(n.bind(n,7883))},7883:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(7975),c=n(2265),o=n(6463),a=n(8472),s=n(7138);function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("li",{onClick:e.onClick,className:"list-none bg-cyan-700 text-cyan-100 p-5 flex flex-col justify-center hover:cursor-pointer",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Name: "})," ",e.name]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Email: "}),e.email]})]})})}t.default=(0,i.Z)(function(){let e=(0,o.useRouter)(),[t,n]=(0,c.useState)([]),[i,l]=(0,c.useState)(""),[d,f]=(0,c.useState)([]),p=async()=>{let e=await a.Z.get("".concat("https://catways-front.onrender.com/","/users/findall")),t=await e.data;n(t),f(t)},h=t=>{e.push("/dashboard/users/".concat(t))};(0,c.useEffect)(()=>{p()},[]);let m=e=>{let n=e.target.value;l(e=>n),n.length>1&&f(t.filter(e=>e.name.toLowerCase().includes(i.toLowerCase()))),""===n&&f(t)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"flex flex-col p-8 h-96",children:[(0,r.jsx)(s.default,{className:"underline mb-5",href:"/dashboard/users/create",children:"Create"}),(0,r.jsx)("input",{className:"w-1/3 p-2 text-black mb-2",type:"text",value:i,name:"search",placeholder:"Saisissez un utilisateur",onChange:e=>m(e)}),(0,r.jsx)("ul",{className:"grid grid-cols-1 gap-1",children:d.map(e=>(0,r.jsx)(u,{onClick:()=>{h(e._id)},name:e.name,email:e.email},e._id))})]})})})},7975:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437),i=n(2265),c=n(6463),o=n(2649),a=n(8472);function s(e){return t=>{let n=(0,c.useRouter)();return(0,i.useEffect)(()=>{let e=o.Z.get("token");e?a.Z.defaults.headers.common.Authorization="".concat(e):n.replace("/")},[n]),(0,r.jsx)(e,{...t})}}},2649:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return i}});var i=function e(t,n){function i(e,i,c){if("undefined"!=typeof document){"number"==typeof(c=r({},n,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var a in c)c[a]&&(o+="; "+a,!0!==c[a]&&(o+="="+c[a].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+o}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var c=n[i].split("="),o=c.slice(1).join("=");try{var a=decodeURIComponent(c[0]);if(r[a]=t.read(o,a),e===a)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[472,291,971,23,744],function(){return e(e.s=5601)}),_N_E=e.O()}]);