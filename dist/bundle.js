!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){(function(e){var n="[object Map]",r="[object Set]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^\[object .+?Constructor\]$/,c=/^0o[0-7]+$/i,s=/^(?:0|[1-9]\d*)$/,l="[\\ud800-\\udfff]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",p="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+f+"|"+d+")"+"?",v="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+[p,h,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),g="(?:"+[p+f+"?",f,h,b,l].join("|")+")",y=RegExp(d+"(?="+d+")|"+g+v,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),S=parseInt,w="object"==typeof e&&e&&e.Object===Object&&e,x="object"==typeof self&&self&&self.Object===Object&&self,A=w||x||Function("return this")();function $(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}function E(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function k(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function O(t){return function(t){return j.test(t)}(t)?function(t){return t.match(y)||[]}(t):function(t){return t.split("")}(t)}var M,C,T,_=Function.prototype,H=Object.prototype,P=A["__core-js_shared__"],L=(M=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"",N=_.toString,I=H.hasOwnProperty,R=H.toString,B=RegExp("^"+N.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=A.Symbol,D=F?F.iterator:void 0,U=H.propertyIsEnumerable,V=Math.floor,W=(C=Object.keys,T=Object,function(t){return C(T(t))}),z=Math.random,J=ut(A,"DataView"),q=ut(A,"Map"),G=ut(A,"Promise"),K=ut(A,"Set"),Q=ut(A,"WeakMap"),X=st(J),Y=st(q),Z=st(G),tt=st(K),et=st(Q);function nt(t,e){var n=lt(t)||function(t){return function(t){return ht(t)&&ft(t)}(t)&&I.call(t,"callee")&&(!U.call(t,"callee")||"[object Arguments]"==R.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!I.call(t,i)||o&&("length"==i||ct(i,r))||n.push(i);return n}function rt(t){return!(!pt(t)||function(t){return!!L&&L in t}(t))&&(dt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?B:a).test(st(t))}function ot(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||H,e!==r)return W(t);var e,n,r,o=[];for(var i in Object(t))I.call(t,i)&&"constructor"!=i&&o.push(i);return o}function it(t,e){return t+V(z()*(e-t+1))}function ut(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(n)?n:void 0}var at=function(t){return R.call(t)};function ct(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function st(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(J&&"[object DataView]"!=at(new J(new ArrayBuffer(1)))||q&&at(new q)!=n||G&&"[object Promise]"!=at(G.resolve())||K&&at(new K)!=r||Q&&"[object WeakMap]"!=at(new Q))&&(at=function(t){var e=R.call(t),o="[object Object]"==e?t.constructor:void 0,i=o?st(o):void 0;if(i)switch(i){case X:return"[object DataView]";case Y:return n;case Z:return"[object Promise]";case tt:return r;case et:return"[object WeakMap]"}return e});var lt=Array.isArray;function ft(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!dt(t)}function dt(t){var e=pt(t)?R.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ht(t){return!!t&&"object"==typeof t}function bt(t){return t?$(t,function(t){return ft(t)?nt(t):ot(t)}(t)):[]}t.exports=function(t,e,a){var s,l,f,d=-1,p=function(t){if(!t)return[];if(ft(t))return function(t){return"string"==typeof t||!lt(t)&&ht(t)&&"[object String]"==R.call(t)}(t)?O(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(D&&t[D])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[D]());var e=at(t);return(e==n?E:e==r?k:bt)(t)}(t),h=p.length,b=h-1;for((a?function(t,e,n){if(!pt(n))return!1;var r=typeof e;return!!("number"==r?ft(n)&&ct(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}(t,e,a):void 0===e)?e=1:(s=function(t){var e=function(t){return t?(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||ht(t)&&"[object Symbol]"==R.call(t)}(t))return NaN;if(pt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=pt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||c.test(t)?S(t.slice(2),n?2:8):i.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}(e),l=0,f=h,s==s&&(void 0!==f&&(s=s<=f?s:f),void 0!==l&&(s=s>=l?s:l)),e=s);++d<e;){var m=it(d,b),v=p[m];p[m]=p[d],p[d]=v}return p.length=e,p}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},u=(r(o,i),o.locals?o.locals:{});t.exports=u},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),u=[];function a(t){for(var e=-1,n=0;n<u.length;n++)if(u[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=a(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(u[f].references++,u[f].updater(d)):u.push({identifier:l,updater:m(d,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var u=i(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,b=0;function m(t,e){var n,r,o;if(e.singleton){var i=b++;n=h||(h=s(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);u[o].references--}for(var i=c(t,e),s=0;s<n.length;s++){var l=a(n[s]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}n=i}}}},function(t,e,n){(e=n(5)(!1)).push([t.i,"html body table {\n  max-width: 400px;\n  margin: 20px auto;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n\nhtml body table th,\nhtml body table td {\n  border-collapse: collapse;\n}\n\nhtml body table button {\n  height: 45px;\n  width: 45px;\n}\n\nhtml body table .pressed {\n  color: #ffffff;\n  background-color: #636363;\n}\n\nhtml body table .ship {\n  background-color: red;\n}\n\nhtml body table .bounded {\n  background-color: seagreen;\n}\n\nhtml body .board {\n  width: 500px;\n  border: 4px grey solid;\n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(u=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var u,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);const r=()=>{let t=0;return{sum:()=>t+=1,val:()=>t}},o=(t,e,n,r)=>(t-1>0&&null==n[t-1][e].ship&&r.push(n[t-1][e]),t+1<10&&null==n[t+1][e].ship&&r.push(n[t+1][e]),e-1>0&&null==n[t][e-1].ship&&r.push(n[t][e-1]),e+1<10&&null==n[t][e+1].ship&&r.push(n[t][e+1]),t-1>0&&e+1<10&&null==n[t-1][e+1].ship&&r.push(n[t-1][e+1]),t-1>0&&e-1>0&&null==n[t-1][e-1].ship&&r.push(n[t-1][e-1]),t+1<10&&e+1<10&&null==n[t+1][e+1].ship&&r.push(n[t+1][e+1]),t+1<10&&e-1>0&&null==n[t+1][e-1].ship&&r.push(n[t+1][e-1]),r);var i=({ships:t})=>({hits:r(),missedHits:r(),sunkShips:r(),ships:t,grid:Array.from(Array(10),t=>Array.from(Array(10),t=>(({ship:t=null,hit:e=!1,bounded:n=!1}={})=>({ship:t,hit:e,bounded:n}))())),putShip(t,e,n,r=!0){let i=t.length,u=i,a=i,c=e,s=e,l=n,f=n,d=[],p=!0;if(r){for(;a>0;)(f>9||this.grid[e][f].bounded||null!=this.grid[e][f].ship)&&(p=!1),f+=1,a-=1;if(p){for(;u>0;)this.grid[c][l].ship=t,u-=1,l+=1;for(;i>0;)d=o(e,n,this.grid,d),d.map(t=>t.bounded=!0),n+=1,i-=1}else console.log(`Space not available at ${e},${n}`)}else{for(;a>0;)(s>9||this.grid[s][n].bounded||null!=this.grid[s][n].ship)&&(p=!1),s+=1,a-=1;if(p){for(;u>0;)this.grid[c][l].ship=t,u-=1,c+=1;for(;i>0;)d=o(e,n,this.grid,d),d.map(t=>t.bounded=!0),e+=1,i-=1}else console.log(`Space not available at ${e},${n}`)}return this},receiveAttack(t,e){const n=this.grid[t][e];!1===n.hit&&(n.hit=!0),null!=n.ship?(n.ship.hit(),this.hits.sum(),n.ship.isSunk()&&this.sunkShips.sum(),console.log(`${t},${e} Hit Total hits: ${this.hits.val()}`),this.lastHit=!0):(this.missedHits.sum(),console.log(`${t},${e} Miss Hit. Total missed: ${this.missedHits.val()}`),this.lastHit=!1)},AllShipsDown(){return this.ships.length===this.sunkShips},lastHit:!1});var u=({length:t,name:e})=>({length:t,name:e,hit(){return this.length-=1,this},isSunk(){return 0===this.length}});function a(t){const e=document.createElement("table"),n=[0,1,2,3,4,5,6,7,8,9];return n.forEach((function(r){const o=document.createElement("tr");n.forEach((function(e){const n=document.createElement("td"),i=document.createElement("button");i.innerHTML=`${r}${e}`,i.setAttribute("id",`a${r}${e}`),i.onclick=function(){t.receiveAttack(r,e),null!=t.grid[r][e].ship?i.setAttribute("class","ship"):(i.innerHTML="*",i.setAttribute("class","pressed")),i.onclick=null},n.appendChild(i),o.appendChild(n)})),e.appendChild(o)})),e}var c=function(t,e){document.getElementById("board-1").appendChild(function(t){const e=document.createElement("table"),n=[0,1,2,3,4,5,6,7,8,9];return n.forEach((function(r){const o=document.createElement("tr");n.forEach((function(e){const n=document.createElement("td"),i=document.createElement("button");i.innerHTML=`${r}${e}`,null!=t.grid[r][e].ship&&i.setAttribute("class","ship"),1==t.grid[r][e].bounded&&i.setAttribute("class","bounded"),i.setAttribute("id",`a${r}${e}`),i.onclick=function(){t.receiveAttack(r,e),i.innerHTML="*",i.setAttribute("class","pressed"),i.onclick=null},n.appendChild(i),o.appendChild(n)})),e.appendChild(o)})),e}(t)),document.getElementById("board-2").appendChild(a(e)),document.getElementById("board-3").appendChild(a(t))};var s=({name:t="Player",ships:e,id:n=0}={})=>({name:t,id:n,attackLog:[],board:i({ships:e}),attack(t,e,n){this.attackLog.push([e,n]),t.board.receiveAttack(e,n)}});n(0);var l=(t,e)=>{t.board.putShip(t.board.ships[4],0,0,!1),t.board.putShip(t.board.ships[4],2,6,!1),t.board.putShip(t.board.ships[1],2,4,!1),t.board.putShip(t.board.ships[1],5,6,!1),t.board.putShip(t.board.ships[0],0,2,!0),t.board.putShip(t.board.ships[2],7,2,!0),t.board.putShip(t.board.ships[3],5,8,!1),e.board.putShip(e.board.ships[4],0,0,!1),e.board.putShip(e.board.ships[4],2,6,!1),e.board.putShip(e.board.ships[1],2,4,!1),e.board.putShip(e.board.ships[1],5,6,!1),e.board.putShip(e.board.ships[0],0,2,!0),e.board.putShip(e.board.ships[2],7,2,!0),e.board.putShip(e.board.ships[3],5,8,!1)};n(2);const f=[u({name:"carrier",length:5}),u({name:"battleship",length:4}),u({name:"submarine",length:3}),u({name:"destroyer",length:3}),u({name:"patrolBoat",length:2})],d=s({name:"Player",ships:f}),p=s({name:"Evil machine",ships:f});l(d,p),c(d.board,p.board)}]);