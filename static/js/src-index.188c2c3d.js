(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/index.css":function(e,t,n){},"./src/index.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("react"),r=n("./node_modules/@mdx-js/react/dist/index.es.js"),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),c=n.n(s),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=n("./node_modules/classnames/index.js"),p=n.n(u),b=o.createContext({});"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MapContext",filename:"src\\context.ts"}});var m=o.createContext({});"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayerContext",filename:"src\\context.ts"}});var f=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),j=n("./node_modules/esri-loader/dist/umd/esri-loader.js");function x(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(c.a.mark(function e(t,n,i){var o,r,a,s,l,u,p,b,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.current&&n){e.next=2;break}return e.abrupt("return");case 2:return window.gisUrl=n,e.next=5,Object(j.loadScript)({url:"".concat(n,"/arcgis/3.9/init.js"),dojoConfig:{packages:[{name:"extras",location:"".concat(n,"/arcgis/3.9/js/extras/")}]}});case 5:return e.next=7,Object(j.loadCss)("".concat(n,"/arcgis/3.9/js/esri/css/esri.css"));case 7:return e.next=9,Object(j.loadModules)(["esri/map"]);case 9:return o=e.sent,r=Object(d.a)(o,1),a=r[0],s=new a(t.current,Object(f.a)({autoResize:!0,force3DTransforms:!0,isClickRecenter:!1,isDoubleClickZoom:!1,logo:!1,maxZoom:18,minZoom:11,optimizePanAnimation:!1,slider:!1},i)),e.next=15,Object(j.loadModules)(["esri/layers/WebTiledLayer"]);case 15:return l=e.sent,u=Object(d.a)(l,1),p=u[0],b="".concat(n,"/wuhan/{level}/{col}/{row}.png"),m=new p(b,{id:"tianditu"}),s.addLayer(m,0),e.abrupt("return",s);case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initMap",filename:"src\\utils.ts"}});n("./src/index.css");"undefined"!==typeof MapViewProps&&MapViewProps&&MapViewProps===Object(MapViewProps)&&Object.isExtensible(MapViewProps)&&Object.defineProperty(MapViewProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MapViewProps",filename:"src\\index.tsx"}});var _=function(e){var t=o.useRef(null);o.useEffect(function(){"function"===typeof s&&s()},[t]);var n=o.useState(),i=Object(d.a)(n,2),r=i[0],a=i[1],s=o.useCallback(Object(l.a)(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("function"===typeof e.initMap){n.next=2;break}return n.abrupt("return");case 2:return n.t0=a,n.next=5,e.initMap(t,e.url,e.options);case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}},n)})),[t,e.initMap]);return o.useEffect(function(){r&&"function"===typeof e.onLoad&&e.onLoad(r)},[r]),o.useEffect(function(){if(r){var t=[e.longitude,e.latitude];r.centerAndZoom(t,e.level)}},[r,e.level,e.longitude,e.latitude]),o.useEffect(function(){r&&(e.isDoubleClickZoom?r.enableDoubleClickZoom():r.disableDoubleClickZoom())},[r,e.isDoubleClickZoom]),o.createElement(b.Provider,{value:{map:r}},o.createElement("div",{className:p()("rc-map",e.mode),ref:t}),e.children)};_.defaultProps={mode:"light",initMap:x,level:12,longitude:114.337342,latitude:30.536661,isDoubleClickZoom:!0};var y=_;_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MapView",filename:"src\\index.tsx"}}),n.d(t,"default",function(){return w});var h={},v="wrapper";function w(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(v,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u5730\u56fe"},"\u5730\u56fe"),Object(r.b)("h2",{id:"\u9ed8\u8ba4\u7684\u5730\u56fe"},"\u9ed8\u8ba4\u7684\u5730\u56fe"),Object(r.b)(a.c,{__position:0,__code:'<div style={{ minHeight: 240 }}>\n  <MapView url="http://111.111.111.232" />\n</div>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,MapView:y},mdxType:"Playground"},Object(r.b)("div",{style:{minHeight:240}},Object(r.b)(y,{url:"http://111.111.111.232",mdxType:"MapView"}))),Object(r.b)("h2",{id:"\u9ed1\u8272\u7684\u5730\u56fe"},"\u9ed1\u8272\u7684\u5730\u56fe"),Object(r.b)(a.c,{__position:1,__code:'<div style={{ minHeight: 240 }}>\n  <MapView url="http://111.111.111.232" mode="dark" />\n</div>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,MapView:y},mdxType:"Playground"},Object(r.b)("div",{style:{minHeight:240}},Object(r.b)(y,{url:"http://111.111.111.232",mode:"dark",mdxType:"MapView"}))),Object(r.b)("h2",{id:"\u7981\u6b62\u53cc\u51fb\u7f29\u653e\u529f\u80fd"},"\u7981\u6b62\u53cc\u51fb\u7f29\u653e\u529f\u80fd"),Object(r.b)(a.c,{__position:2,__code:'<div style={{ minHeight: 240 }}>\n  <MapView url="http://111.111.111.232" isDoubleClickZoom={!1} />\n</div>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,MapView:y},mdxType:"Playground"},Object(r.b)("div",{style:{minHeight:240}},Object(r.b)(y,{url:"http://111.111.111.232",isDoubleClickZoom:!1,mdxType:"MapView"}))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)(a.d,{of:y,mdxType:"Props"}))}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\index.mdx"}}),w.isMDXComponent=!0}}]);