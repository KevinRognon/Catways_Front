(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{5158:function(e,t,r){Promise.resolve().then(r.bind(r,2677))},2677:function(e,t,r){"use strict";r.r(t);var n=r(7437),o=r(7975),a=r(2265),i=r(8472),s=r(6463);r(208);var c=r(6259);t.default=(0,o.Z)(function(){let{id:e}=(0,s.useParams)(),[t,r]=(0,a.useState)(""),[o,u]=(0,a.useState)(""),[l,f]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),[p,g]=(0,a.useState)("");async function m(t){t.preventDefault();let n=await i.Z.patch("".concat("https://catways-api.onrender.com","/users/").concat(e,"/update"),{name:l,email:d,password:p}),o=await n.data;501===n.status?r(o.message):u(o.message),f(""),h(""),g("")}return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full mt-10",children:[t&&(0,n.jsx)("p",{className:"text-red-500 font-bold",children:t})||o&&(0,n.jsx)("p",{className:"text-green-500",children:o}),(0,n.jsxs)("form",{onSubmit:m,className:"flex flex-col justify-center gap-2 text-black",children:[(0,n.jsx)("input",{value:l,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"text",name:"name",id:"name",placeholder:"Name",onChange:e=>{f(e.target.value)}}),(0,n.jsx)("input",{value:d,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"text",name:"email",id:"email",placeholder:"Email",onChange:e=>{h(e.target.value)}}),(0,n.jsx)("input",{value:p,className:"border-cyan-700 border-2 p-2 outline-lime-800",type:"password",name:"password",id:"password",placeholder:"Password",onChange:e=>{g(e.target.value)}}),(0,n.jsx)("input",{className:"p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50",type:"submit",value:"Modifier"}),(0,n.jsx)(c.Z,{})]})]})})})},6259:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7437),o=r(6463);function a(){let e=(0,o.useRouter)();return(0,n.jsx)("button",{onClick:()=>{e.back()},className:"bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600",children:"Retour"})}r(2265)},7975:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7437),o=r(2265),a=r(6463),i=r(2649),s=r(8472);function c(e){return t=>{let r=(0,a.useRouter)(),c=(0,a.usePathname)();return(0,o.useEffect)(()=>{let e=i.Z.get("token"),t=i.Z.get("user");e&&t?(s.Z.defaults.headers.common.Authorization="".concat(e),"/"===c&&r.replace("/dashboard")):r.replace("/")},[r]),(0,n.jsx)(e,{...t})}}},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},6583:function(e,t){"use strict";function r(e){if("string"==typeof e)return"file://"+e;if(e&&"object"==typeof e&&Array.isArray(e.sources))return Object.assign({},e,{sources:e.sources.map(r)});throw Error("expected string|object")}function n(e){if("string"==typeof e)return e.replace(/^file:\/{2}/,"");if(e&&"object"==typeof e&&Array.isArray(e.sources))return Object.assign({},e,{sources:e.sources.map(n)});throw Error("expected string|object")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{prepend:function(){return r},remove:function(){return n}})},208:function(e,t,r){"use strict";var n;(n=r(1642))&&n.__esModule,r(6583)},1642:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,a=-1,i=0,s=0;s<=e.length;++s){if(s<e.length)r=e.charCodeAt(s);else if(47===r)break;else r=47;if(47===r){if(a===s-1||1===i);else if(a!==s-1&&2===i){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",o=0):o=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),a=s,i=0;continue}}else if(2===n.length||1===n.length){n="",o=0,a=s,i=0;continue}}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(a+1,s):n=e.slice(a+1,s),o=s-a-1;a=s,i=0}else 46===r&&-1!==i?++i:i=-1}return n}var n={resolve:function(){for(var e,n,o="",a=!1,i=arguments.length-1;i>=-1&&!a;i--)i>=0?n=arguments[i]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(o=n+"/"+o,a=47===n.charCodeAt(0));return(o=r(o,!a),a)?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return(0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var a=e.length,i=a-o,s=1;s<r.length&&47===r.charCodeAt(s);++s);for(var c=r.length-s,u=i<c?i:c,l=-1,f=0;f<=u;++f){if(f===u){if(c>u){if(47===r.charCodeAt(s+f))return r.slice(s+f+1);if(0===f)return r.slice(s+f)}else i>u&&(47===e.charCodeAt(o+f)?l=f:0===f&&(l=0));break}var d=e.charCodeAt(o+f);if(d!==r.charCodeAt(s+f))break;47===d&&(l=f)}var h="";for(f=o+l+1;f<=a;++f)(f===a||47===e.charCodeAt(f))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(s+l):(s+=l,47===r.charCodeAt(s)&&++s,r.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,a=!0,i=e.length-1;i>=1;--i)if(47===(r=e.charCodeAt(i))){if(!a){o=i;break}}else a=!1;return -1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,o=0,a=-1,i=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!i){o=n+1;break}}else -1===c&&(i=!1,c=n+1),s>=0&&(u===r.charCodeAt(s)?-1==--s&&(a=n):(s=-1,a=c))}return o===a?a=c:-1===a&&(a=e.length),e.slice(o,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){o=n+1;break}}else -1===a&&(i=!1,a=n+1);return -1===a?"":e.slice(o,a)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(47===c){if(!a){n=s+1;break}continue}-1===o&&(a=!1,o=s+1),46===c?-1===r?r=s:1!==i&&(i=1):-1!==r&&(i=-1)}return -1===r||-1===o||0===i||1===i&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var o=e.charCodeAt(0),a=47===o;a?(n.root="/",r=1):r=0;for(var i=-1,s=0,c=-1,u=!0,l=e.length-1,f=0;l>=r;--l){if(47===(o=e.charCodeAt(l))){if(!u){s=l+1;break}continue}-1===c&&(u=!1,c=l+1),46===o?-1===i?i=l:1!==f&&(f=1):-1!==i&&(f=-1)}return -1===i||-1===c||0===f||1===f&&i===c-1&&i===s+1?-1!==c&&(0===s&&a?n.base=n.name=e.slice(1,c):n.base=n.name=e.slice(s,c)):(0===s&&a?(n.name=e.slice(1,i),n.base=e.slice(1,c)):(n.name=e.slice(s,i),n.base=e.slice(s,c)),n.ext=e.slice(i,c)),s>0?n.dir=e.slice(0,s-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(114);e.exports=o}()},2649:function(e,t,r){"use strict";/*! js-cookie v3.0.5 | MIT */function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}r.d(t,{Z:function(){return o}});var o=function e(t,r){function o(e,o,a){if("undefined"!=typeof document){"number"==typeof(a=n({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var s in a)a[s]&&(i+="; "+s,!0!==a[s]&&(i+="="+a[s].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+i}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var a=r[o].split("="),i=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(n[s]=t.read(i,s),e===s)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[472,971,23,744],function(){return e(e.s=5158)}),_N_E=e.O()}]);