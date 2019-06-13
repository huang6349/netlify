!function(e){function n(n){for(var t,o,i=n[0],c=n[1],d=n[2],a=n[3]||[],s=0,u=[];s<i.length;s++)o=i[s],H[o]&&u.push(H[o][0]),H[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(T&&T(n),A.push.apply(A,a);u.length;)u.shift()();return I.push.apply(I,d||[]),r()}function r(){for(var e,n=0;n<I.length;n++){for(var r=I[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==H[i]&&(t=!1)}t&&(I.splice(n--,1),e=S(S.s=r[0]))}return 0===I.length&&(A.forEach(function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",S.nc&&n.setAttribute("nonce",S.nc),n.rel="prefetch",n.as="script",n.href=M(e),document.head.appendChild(n)}}),A.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!x[e])return;for(var r in x[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(m[r]=n[r]);0===--b&&0===g&&D()}(e,n),t&&t(e,n)};var o,i=!0,c="c1a285ac94adcc180568",d=1e4,a={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var v,m,y,b=0,g=0,w={},x={},O={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=d,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;x={},w={},O=e.c,y=e.h,h("prepare");var n=new Promise(function(e,n){v={resolve:e,reject:n}});for(var r in m={},H)E(r);return"prepare"===f&&0===g&&0===b&&D(),n});var n}function E(e){O[e]?(x[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=v;if(v=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&n.push(j(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,d;function u(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,d=o.chain;if((i=k[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var a=0;a<i.parents.length;a++){var s=i.parents[a],u=k[s];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([s]),moduleId:c,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),l(r[s],[c])):(delete r[s],n.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var x;d=j(w);var _=!1,E=!1,D=!1,P="";switch((x=m[w]?u(d):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+x.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(_=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(x),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),D=!0;break;default:throw new Error("Unexception type "+x.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(d in b[d]=m[d],l(v,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],x.outdatedDependencies[d]));D&&(l(v,[x.moduleId]),b[d]=g)}var I,A=[];for(t=0;t<v.length;t++)d=v[t],k[d]&&k[d].hot._selfAccepted&&b[d]!==g&&A.push({module:d,errorHandler:k[d].hot._selfAccepted});h("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete H[e]}(e)});for(var M,U,q=v.slice();q.length>0;)if(d=q.pop(),i=k[d]){var z={},T=i.hot._disposeHandlers;for(o=0;o<T.length;o++)(r=T[o])(z);for(a[d]=z,i.hot.active=!1,delete k[d],delete p[d],o=0;o<i.children.length;o++){var R=k[i.children[o]];R&&((I=R.parents.indexOf(d))>=0&&R.parents.splice(I,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d]))for(U=p[d],o=0;o<U.length;o++)M=U[o],(I=i.children.indexOf(M))>=0&&i.children.splice(I,1);for(d in h("apply"),c=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var C=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d])){U=p[d];var L=[];for(t=0;t<U.length;t++)if(M=U[t],r=i.hot._acceptedDependencies[M]){if(-1!==L.indexOf(r))continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(U)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:U[t],error:N}),n.ignoreErrored||C||(C=N)}}}for(t=0;t<A.length;t++){var J=A[t];d=J.module,s=[d];try{S(d)}catch(N){if("function"===typeof J.errorHandler)try{J.errorHandler(N)}catch(X){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:X,originalError:N}),n.ignoreErrored||C||(C=X),C||(C=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:N}),n.ignoreErrored||C||(C=N)}}return C?(h("fail"),Promise.reject(C)):(h("idle"),new Promise(function(e){e(v)}))}var k={},H={1:0},I=[],A=[];function M(e){return S.p+"static/js/"+({2:"doc-index"}[e]||e)+"."+{2:"cb07c52f"}[e]+".js"}function S(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return S;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(s=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),S(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),g++,S.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===b&&D())}},r.t=function(e,n){return 1&n&&(e=r(e)),S.t(e,-2&n)},r}(n)),r.l=!0,r.exports}S.e=function(e){var n=[],r=H[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=H[e]=[n,t]});n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.src=M(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var c=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(d);var r=H[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.type=t,c.request=o,r[1](c)}H[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},S.m=e,S.c=k,S.d=function(e,n,r){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)S.d(r,t,function(n){return e[n]}.bind(null,t));return r},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="/",S.oe=function(e){throw console.error(e),e},S.h=function(){return c};var U=window.webpackJsonp=window.webpackJsonp||[],q=U.push.bind(U);U.push=n,U=U.slice();for(var z=0;z<U.length;z++)n(U[z]);var T=q,R=(I.push([0,0]),r());n([[],{},0,[0,2]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Utils",description:"This is a common utility class",menu:[],version:"0.0.1",repository:!1,native:!1,codeSandbox:!1,themeConfig:{},separator:"-",typescript:!0,theme:"F:/materials-libs/packages/utils/node_modules/docz-theme-umi/es/index.js",files:"**/*.mdx",plugins:[{},{},{},{},{}]},props:[{key:"src\\uuid.ts",value:[]}],entries:[{key:"doc/index.mdx",value:{name:"\u5e38\u7528\u5de5\u5177\u7c7b",route:"/",order:-1,sidebar:!0,id:"d4cfa8716434b7777282497b774bfd3e",filepath:"doc/index.mdx",link:"",slug:"doc-index",menu:"",headings:[{slug:"delay",depth:1,value:"DELAY"},{slug:"\u5ef6\u8fdf\u6267\u884c",depth:2,value:"\u5ef6\u8fdf\u6267\u884c"},{slug:"uuid",depth:1,value:"UUID"},{slug:"\u968f\u673a\u751f\u6210",depth:2,value:"\u968f\u673a\u751f\u6210"}]}}]}},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("react"),o=r.n(t),i=r("react-dom"),c=r.n(i),d=r("./node_modules/docz/dist/index.esm.js"),a=r("./node_modules/docz-theme-umi/es/index.js"),s={"doc/index.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./doc/index.mdx"))}},u=r("./.docz/app/db.json"),l=function(){return o.a.createElement(a.a,{linkComponent:d.b,db:u},o.a.createElement(d.e,{imports:s}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;p.forEach(function(e){return e&&e()}),c.a.render(o.a.createElement(e,null),v,h)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,n){e.exports=window.React},"react-dom":function(e,n){e.exports=window.ReactDOM}});