!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){(function(t){var n="[object Map]",r="[object Set]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^\[object .+?Constructor\]$/,a=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",p="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+f+"|"+d+")"+"?",g="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+[p,h,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),y="(?:"+[p+f+"?",f,h,b,s].join("|")+")",v=RegExp(d+"(?="+d+")|"+y+g,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E=parseInt,M="object"==typeof t&&t&&t.Object===Object&&t,k="object"==typeof self&&self&&self.Object===Object&&self,S=M||k||Function("return this")();function $(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(t,(function(t){return e[t]}))}function w(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function O(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function A(e){return function(e){return j.test(e)}(e)?function(e){return e.match(v)||[]}(e):function(e){return e.split("")}(e)}var T,C,L,x=Function.prototype,H=Object.prototype,I=S["__core-js_shared__"],B=(T=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",_=x.toString,P=H.hasOwnProperty,R=H.toString,N=RegExp("^"+_.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=S.Symbol,F=D?D.iterator:void 0,W=H.propertyIsEnumerable,V=Math.floor,G=(C=Object.keys,L=Object,function(e){return C(L(e))}),U=Math.random,z=ie(S,"DataView"),J=ie(S,"Map"),q=ie(S,"Promise"),K=ie(S,"Set"),Q=ie(S,"WeakMap"),X=le(z),Y=le(J),Z=le(q),ee=le(K),te=le(Q);function ne(e,t){var n=se(e)||function(e){return function(e){return he(e)&&fe(e)}(e)&&P.call(e,"callee")&&(!W.call(e,"callee")||"[object Arguments]"==R.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,o=!!r;for(var u in e)!t&&!P.call(e,u)||o&&("length"==u||ae(u,r))||n.push(u);return n}function re(e){return!(!pe(e)||function(e){return!!B&&B in e}(e))&&(de(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?N:c).test(le(e))}function oe(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||H,t!==r)return G(e);var t,n,r,o=[];for(var u in Object(e))P.call(e,u)&&"constructor"!=u&&o.push(u);return o}function ue(e,t){return e+V(U()*(t-e+1))}function ie(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return re(n)?n:void 0}var ce=function(e){return R.call(e)};function ae(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||l.test(e))&&e>-1&&e%1==0&&e<t}function le(e){if(null!=e){try{return _.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(z&&"[object DataView]"!=ce(new z(new ArrayBuffer(1)))||J&&ce(new J)!=n||q&&"[object Promise]"!=ce(q.resolve())||K&&ce(new K)!=r||Q&&"[object WeakMap]"!=ce(new Q))&&(ce=function(e){var t=R.call(e),o="[object Object]"==t?e.constructor:void 0,u=o?le(o):void 0;if(u)switch(u){case X:return"[object DataView]";case Y:return n;case Z:return"[object Promise]";case ee:return r;case te:return"[object WeakMap]"}return t});var se=Array.isArray;function fe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!de(e)}function de(e){var t=pe(e)?R.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function pe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function he(e){return!!e&&"object"==typeof e}function be(e){return e?$(e,function(e){return fe(e)?ne(e):oe(e)}(e)):[]}e.exports=function(e,t,c){var l,s,f,d=-1,p=function(e){if(!e)return[];if(fe(e))return function(e){return"string"==typeof e||!se(e)&&he(e)&&"[object String]"==R.call(e)}(e)?A(e):function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e);if(F&&e[F])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[F]());var t=ce(e);return(t==n?w:t==r?O:be)(e)}(e),h=p.length,b=h-1;for((c?function(e,t,n){if(!pe(n))return!1;var r=typeof t;return!!("number"==r?fe(n)&&ae(t,n.length):"string"==r&&t in n)&&function(e,t){return e===t||e!=e&&t!=t}(n[t],e)}(e,t,c):void 0===t)?t=1:(l=function(e){var t=function(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||he(e)&&"[object Symbol]"==R.call(e)}(e))return NaN;if(pe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=pe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?E(e.slice(2),n?2:8):u.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}(t),s=0,f=h,l==l&&(void 0!==f&&(l=l<=f?l:f),void 0!==s&&(l=l>=s?l:s)),t=l);++d<t;){var m=ue(d,b),g=p[m];p[m]=p[d],p[d]=g}return p.length=t,p}}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n="[object Map]",r="[object Set]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^\[object .+?Constructor\]$/,a=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",p="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+f+"|"+d+")"+"?",g="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+[p,h,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),y="(?:"+[p+f+"?",f,h,b,s].join("|")+")",v=RegExp(d+"(?="+d+")|"+y+g,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E=parseInt,M="object"==typeof t&&t&&t.Object===Object&&t,k="object"==typeof self&&self&&self.Object===Object&&self,S=M||k||Function("return this")();function $(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(t,(function(t){return e[t]}))}function w(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function O(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function A(e){return function(e){return j.test(e)}(e)?function(e){return e.match(v)||[]}(e):function(e){return e.split("")}(e)}var T,C,L,x=Function.prototype,H=Object.prototype,I=S["__core-js_shared__"],B=(T=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",_=x.toString,P=H.hasOwnProperty,R=H.toString,N=RegExp("^"+_.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=S.Symbol,F=D?D.iterator:void 0,W=H.propertyIsEnumerable,V=Math.floor,G=(C=Object.keys,L=Object,function(e){return C(L(e))}),U=Math.random,z=ie(S,"DataView"),J=ie(S,"Map"),q=ie(S,"Promise"),K=ie(S,"Set"),Q=ie(S,"WeakMap"),X=le(z),Y=le(J),Z=le(q),ee=le(K),te=le(Q);function ne(e,t){var n=fe(e)||function(e){return function(e){return be(e)&&de(e)}(e)&&P.call(e,"callee")&&(!W.call(e,"callee")||"[object Arguments]"==R.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,o=!!r;for(var u in e)!t&&!P.call(e,u)||o&&("length"==u||ae(u,r))||n.push(u);return n}function re(e){return!(!he(e)||function(e){return!!B&&B in e}(e))&&(pe(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?N:c).test(le(e))}function oe(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||H,t!==r)return G(e);var t,n,r,o=[];for(var u in Object(e))P.call(e,u)&&"constructor"!=u&&o.push(u);return o}function ue(e,t){return e+V(U()*(t-e+1))}function ie(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return re(n)?n:void 0}var ce=function(e){return R.call(e)};function ae(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||l.test(e))&&e>-1&&e%1==0&&e<t}function le(e){if(null!=e){try{return _.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function se(e,t,c){var l,s,f,d=-1,p=function(e){if(!e)return[];if(de(e))return function(e){return"string"==typeof e||!fe(e)&&be(e)&&"[object String]"==R.call(e)}(e)?A(e):function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e);if(F&&e[F])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[F]());var t=ce(e);return(t==n?w:t==r?O:me)(e)}(e),h=p.length,b=h-1;for((c?function(e,t,n){if(!he(n))return!1;var r=typeof t;return!!("number"==r?de(n)&&ae(t,n.length):"string"==r&&t in n)&&function(e,t){return e===t||e!=e&&t!=t}(n[t],e)}(e,t,c):void 0===t)?t=1:(l=function(e){var t=function(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||be(e)&&"[object Symbol]"==R.call(e)}(e))return NaN;if(he(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=he(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?E(e.slice(2),n?2:8):u.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}(t),s=0,f=h,l==l&&(void 0!==f&&(l=l<=f?l:f),void 0!==s&&(l=l>=s?l:s)),t=l);++d<t;){var m=ue(d,b),g=p[m];p[m]=p[d],p[d]=g}return p.length=t,p}(z&&"[object DataView]"!=ce(new z(new ArrayBuffer(1)))||J&&ce(new J)!=n||q&&"[object Promise]"!=ce(q.resolve())||K&&ce(new K)!=r||Q&&"[object WeakMap]"!=ce(new Q))&&(ce=function(e){var t=R.call(e),o="[object Object]"==t?e.constructor:void 0,u=o?le(o):void 0;if(u)switch(u){case X:return"[object DataView]";case Y:return n;case Z:return"[object Promise]";case ee:return r;case te:return"[object WeakMap]"}return t});var fe=Array.isArray;function de(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!pe(e)}function pe(e){var t=he(e)?R.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function he(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function be(e){return!!e&&"object"==typeof e}function me(e){return e?$(e,function(e){return de(e)?ne(e):oe(e)}(e)):[]}e.exports=function(e){return se(e,4294967295)}}).call(this,n(1))},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1},i=(r(o,u),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},u=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],a=t.base?u[0]+t.base:u[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var f=c(s),d={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:m(d,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=u(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function p(e,t,n){var r=n.css,o=n.media,u=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),u&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,b=0;function m(e,t){var n,r,o;if(t.singleton){var u=b++;n=h||(h=l(t)),r=d.bind(null,n,u,!1),o=d.bind(null,n,u,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var u=a(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,"html body table {\n  max-width: 400px;\n  margin: 20px auto;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n\nhtml body table th,\nhtml body table td {\n  border-collapse: collapse;\n}\n\nhtml body table button {\n  height: 45px;\n  width: 45px;\n}\n\nhtml body table .pressed {\n  color: #ffffff;\n  background-color: #636363;\n}\n\nhtml body table .ship {\n  background-color: red;\n}\n\nhtml body table .bounded {\n  background-color: seagreen;\n}\n\nhtml body .board {\n  width: 500px;\n  border: 4px grey solid;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),u=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(u).concat([o]).join("\n")}var i,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);var r=({length:e,name:t})=>({length:e,name:t,hit(){return this.length-=1,this},isSunk(){return 0===this.length}}),o=n(2),u=n.n(o),i=n(0),c=n.n(i);const a=()=>{let e=0;return{sum:()=>e+=1,val:()=>e}},l=(e,t,n,r)=>(e-1>=0&&null==n[e-1][t].ship&&r.push(n[e-1][t]),e+1<10&&null==n[e+1][t].ship&&r.push(n[e+1][t]),t-1>=0&&null==n[e][t-1].ship&&r.push(n[e][t-1]),t+1<10&&null==n[e][t+1].ship&&r.push(n[e][t+1]),e-1>=0&&t+1<10&&null==n[e-1][t+1].ship&&r.push(n[e-1][t+1]),e-1>=0&&t-1>=0&&null==n[e-1][t-1].ship&&r.push(n[e-1][t-1]),e+1<10&&t+1<10&&null==n[e+1][t+1].ship&&r.push(n[e+1][t+1]),e+1<10&&t-1>=0&&null==n[e+1][t-1].ship&&r.push(n[e+1][t-1]),r);var s=({ships:e})=>({hits:a(),missedHits:a(),sunkShips:a(),ships:e,grid:Array.from(Array(10),e=>Array.from(Array(10),e=>(({ship:e=null,hit:t=!1,bounded:n=!1}={})=>({ship:e,hit:t,bounded:n}))())),putShip(e,t,n,r=!0){let o=e.length,u=o,i=o,c=t,a=t,s=n,f=n,d=[],p=!0;if(r){for(;i>0;)(f>9||this.grid[t][f].bounded||null!=this.grid[t][f].ship)&&(p=!1),f+=1,i-=1;if(!p)return!1;for(;u>0;)this.grid[c][s].ship=e,u-=1,s+=1;for(;o>0;)d=l(t,n,this.grid,d),d.map(e=>e.bounded=!0),n+=1,o-=1}else{for(;i>0;)(a>9||this.grid[a][n].bounded||null!=this.grid[a][n].ship)&&(p=!1),a+=1,i-=1;if(!p)return!1;for(;u>0;)this.grid[c][s].ship=e,u-=1,c+=1;for(;o>0;)d=l(t,n,this.grid,d),d.map(e=>e.bounded=!0),t+=1,o-=1}return!0},receiveAttack(e,t){const n=this.grid[e][t];!1===n.hit&&(n.hit=!0),null!=n.ship?(n.ship.hit(),this.hits.sum(),n.ship.isSunk()&&(console.log("ship sunk********************************************"),this.sunkShips.sum()),console.log(`${e},${t} Hit Total hits: ${this.hits.val()}`),this.lastHit=!0):(this.missedHits.sum(),console.log(`${e},${t} Miss Hit. Total missed: ${this.missedHits.val()}`),this.lastHit=!1)},AllShipsDown(){return console.log(`Length: ${this.ships.length} sunk : ${this.sunkShips.val()}`),this.ships.length===this.sunkShips.val()},lastHit:!1});var f=({name:e="Player",ships:t,id:n=0}={})=>({name:e,id:n,attackLog:[],board:s({ships:t}),attack(e,t,n){this.attackLog.push([t,n]),e.board.receiveAttack(t,n)}});const d=(e,t)=>{const n=c()([0,1,2,3,4,5,6,7,8,9],1),r=c()([0,1,2,3,4,5,6,7,8,9],1);!1===e.board.grid[n][r].hit?(t.attack(e,n,r),document.getElementById(`Com${n}${r}`).innerHTML="*",null==e.board.grid[n][r].ship?h(e,t):d(e,t)):d(e,t)},p=(e,t)=>{const n=document.createElement("button");n.innerHTML="Start a new game",n.onclick=()=>{document.location.reload()},e.board.AllShipsDown()&&(console.log(`GAME OVER! ${t.name} Wins`),document.getElementById("board-1").innerHTML="",document.getElementById("board-2").innerHTML="",document.getElementById("message").innerHTML=`${t.name} Wins`,document.getElementById("after-game").appendChild(n)),t.board.AllShipsDown()&&(console.log(`GAME OVER! ${e.name} Wins`),document.getElementById("board-1").innerHTML="",document.getElementById("board-2").innerHTML="",document.getElementById("message").innerHTML=`${e.name} Wins`,document.getElementById("after-game").appendChild(n))},h=(e,t)=>{p(e,t),0===t.id?(console.log("Computers Turn"),document.getElementById("board-2").style.display="none",d(t,e)):(console.log("Players Turn"),document.getElementById("board-2").style.display="block")};var b=(e,t,n,r)=>{t.attack(e,n,r),p(e,t),null==e.board.grid[n][r].ship&&h(e,t)};function m(e,t,n,r=!1){document.getElementById("setup-board").innerHTML=" ";let o=!1;const u=e.board,i=document.createElement("table"),c=[0,1,2,3,4,5,6,7,8,9];c.forEach((function(a){const l=document.createElement("tr");c.forEach((function(i){const c=document.createElement("td"),s=document.createElement("button");s.innerHTML=`${a}${i}`,s.setAttribute("id",`s${a}${i}`),r&&(s.onclick=()=>{o=e.board.putShip(t,a,i,n),m(e,t,n,!o),s.onclick=null}),null!=u.grid[a][i].ship&&(s.setAttribute("class","ship"),s.onclick=null),!0===u.grid[a][i].bounded&&(s.setAttribute("class","bounded"),s.onclick=null),c.appendChild(s),l.appendChild(c)})),i.appendChild(l)})),document.getElementById("setup-board").appendChild(i)}const g=e=>{const t=u()(e.ships),n=[0,1,2,3,4,5,6,7,8,9],r=()=>c()(n,1);return[0,1,2,3,4].forEach(n=>{!function o(){e.putShip(t[n],r()[0],r()[0],c()([!0,!1],1)[0])||o()}()}),e};function y(e,t){const n=document.getElementById("selector"),r=document.createElement("input");r.type="checkbox";let o=0;const u=document.createElement("button");u.innerHTML="Carrier L5",u.onclick=()=>{0==r.checked?m(e,e.board.ships[0],!1,!0):m(e,e.board.ships[0],!0,!0),o+=1,u.disabled=!0};const i=document.createElement("button");i.innerHTML="BattleShip L4",i.onclick=()=>{0==r.checked?m(e,e.board.ships[1],!1,!0):m(e,e.board.ships[1],!0,!0),o+=1,i.disabled=!0};const c=document.createElement("button");c.innerHTML="Submarine L3",c.onclick=()=>{0==r.checked?m(e,e.board.ships[2],!1,!0):m(e,e.board.ships[2],!0,!0),o+=1,c.disabled=!0};const a=document.createElement("button");a.innerHTML="Destroyer L3",a.onclick=()=>{0==r.checked?m(e,e.board.ships[3],!1,!0):m(e,e.board.ships[3],!0,!0),o+=1,a.disabled=!0};const l=document.createElement("button");l.innerHTML="PatrolBoat L2",l.onclick=()=>{0==r.checked?m(e,e.board.ships[4],!1,!0):m(e,e.board.ships[4],!0,!0),o+=1,l.disabled=!0};const s=document.createElement("button");s.innerHTML="Start Game",s.onclick=()=>{5===o&&(document.getElementById("setup-board").innerHTML=" ",document.getElementById("selector").innerHTML=" ",g(t.board),document.getElementById("board-1").appendChild(function(e){const t=document.createElement("table"),n=[0,1,2,3,4,5,6,7,8,9];return n.forEach((function(r){const o=document.createElement("tr");n.forEach((function(t){const n=document.createElement("td"),u=document.createElement("button");u.innerHTML=`${r}${t}`,null!=e.grid[r][t].ship&&u.setAttribute("class","ship"),!0===e.grid[r][t].bounded&&u.setAttribute("class","bounded"),u.setAttribute("id",`Com${r}${t}`),n.appendChild(u),o.appendChild(n)})),t.appendChild(o)})),t}(e.board)),document.getElementById("board-2").appendChild(function(e,t){const n=e.board,r=document.createElement("table"),o=[0,1,2,3,4,5,6,7,8,9];return o.forEach((function(u){const i=document.createElement("tr");o.forEach((function(r){const o=document.createElement("td"),c=document.createElement("button");c.innerHTML=`${u}${r}`,c.setAttribute("id",`p${u}${r}`),c.onclick=()=>{b(e,t,u,r),null!=n.grid[u][r].ship?c.setAttribute("class","ship"):(c.innerHTML="*",c.setAttribute("class","pressed")),c.onclick=null},o.appendChild(c),i.appendChild(o)})),r.appendChild(i)})),r}(t,e)))},n.appendChild(u),n.appendChild(i),n.appendChild(c),n.appendChild(a),n.appendChild(l),n.appendChild(r),n.appendChild(s)}var v=function(e,t){document.getElementById("message").innerHTML="",document.getElementById("after-game").innerHTML="",y(e,t)};n(3);function j(){const e=[r({name:"carrier",length:5}),r({name:"battleship",length:4}),r({name:"submarine",length:3}),r({name:"destroyer",length:3}),r({name:"patrolBoat",length:2})],t=[r({name:"carrier",length:5}),r({name:"battleship",length:4}),r({name:"submarine",length:3}),r({name:"destroyer",length:3}),r({name:"patrolBoat",length:2})],n=f({id:0,name:"Player",ships:e}),o=f({id:1,name:"Evil machine",ships:t});document.getElementById("board-1").innerHTML="",document.getElementById("board-2").innerHTML="",v(n,o)}j();t.default=j}]);