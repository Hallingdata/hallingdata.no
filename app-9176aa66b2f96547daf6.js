webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n){"use strict";function t(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var r=[]},"./.cache/async-requires.js":function(e,n,t){"use strict";var o;n.components={"component---src-pages-404-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-tsx!./src/pages/404.tsx"),"component---src-pages-index-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-tsx!./src/pages/index.tsx")},n.json=(o={"layout-index.json":t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":t("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["404-html.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),o),n.layouts={"component---src-layouts-index-tsx":t("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-tsx!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=t("./node_modules/react/index.js"),c=o(i),l=t("./node_modules/prop-types/index.js"),d=o(l),p=t("./.cache/loader.js"),f=o(p),m=t("./.cache/emitter.js"),h=o(m),g=function(e){var n=e.children;return c.default.createElement("div",null,n())},j=function(e){function n(t){r(this,n);var o=a(this,e.call(this));return o.state={location:t.location,pageResources:f.default.getResourcesForPathname(t.location.pathname)},o}return s(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=f.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):f.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./node_modules/mitt/dist/mitt.js"),a=o(r),s=(0,a.default)();e.exports=s},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=t.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),r[a])return r[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(a,{path:e.path})||(0,o.matchPath)(a,{path:e.matchPath}))return s=e,r[a]=e,!0}else if((0,o.matchPath)(a,{path:e.path,exact:!0}))return s=e,r[a]=e,!0;return!1}),s}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-tsx!./.cache/layouts/index.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(22676092666560,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/sogasg/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/sogasg/halling/hallingdata.no/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/sogasg/halling/hallingdata.no/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/sogasg/halling/hallingdata.no/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/sogasg/halling/hallingdata.no/node_modules/babel-preset-stage-0/lib/index.js","/Users/sogasg/halling/hallingdata.no/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./node_modules/react/index.js"),a=(o(r),t("./.cache/find-page.js")),s=o(a),u=t("./.cache/emitter.js"),i=o(u),c=void 0,l={},d={},p={},f={},m={},h=[],g=[],j={},y=[],x={},b=function(e){return e&&e.default||e},v=void 0,_=!0;v=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){y=y.filter(function(n){return n!==e}),v.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var R=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},w=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){t(null,f[e])});else{var o="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];o(function(n,o){f[e]=o,t(n,o)})}},O=function(e,t){m[e]?n.nextTick(function(){t(null,m[e])}):P(e,function(n,o){if(n)t(n);else{var r=b(o());m[e]=r,t(n,r)}})},E=1,k={empty:function(){g=[],j={},x={},y=[],h=[]},addPagesArray:function(e){h=e;var n="";n="/hallingdata.no",c=(0,s.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/E;E+=1,j[e]?j[e]+=1:j[e]=1,k.has(e)||g.unshift(e),g.sort(w);var t=c(e);return t.jsonName&&(x[t.jsonName]?x[t.jsonName]+=1+n:x[t.jsonName]=1+n,y.indexOf(t.jsonName)!==-1||f[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(x[t.componentChunkName]?x[t.componentChunkName]+=1+n:x[t.componentChunkName]=1+n,y.indexOf(t.componentChunkName)!==-1||f[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(R),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:x}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),_=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,s=void 0,u=function(){if(r&&a&&(!o.layoutComponentChunkName||s)){p[e]={component:r,json:a,layout:s};var n={component:r,json:a,layout:s};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return O(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,u()}),O(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,u()}),void(o.layoutComponentChunkName&&O(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),s=n,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=k}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},s=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){s({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t("./.cache/api-runner-browser.js"),s=t("./node_modules/react/index.js"),u=o(s),i=t("./node_modules/react-dom/index.js"),c=o(i),l=t("./node_modules/react-router-dom/index.js"),d=t("./node_modules/gatsby-react-router-scroll/index.js"),p=t("./node_modules/history/createBrowserHistory.js"),f=o(p),m=t("./node_modules/domready/ready.js"),h=o(m),g=t("./.cache/emitter.js"),j=o(g),y=t("./.cache/pages.json"),x=o(y),b=t("./.cache/redirects.json"),v=o(b),_=t("./.cache/component-renderer.js"),R=o(_),w=t("./.cache/async-requires.js"),P=o(w),O=t("./.cache/loader.js"),E=o(O);t("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,E.default.addPagesArray(x.default),E.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=E.default,window.matchPath=l.matchPath;var k=(0,f.default)(),N=v.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),C=function(e){var n=N[e];if(null!=n){var t=E.default.getResourcesForPathname(e);return null!=t&&console.error('The route "'+e+'" matches both a page and a redirect; this is probably not intentional.'),k.replace(n.toPath),!0}return!1};C(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){C(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var o=function(e){function n(o){o.page.path===E.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:k.location,action:k.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:k})[0],p=function(e){var n=e.children;return u.default.createElement(l.Router,{history:k},n)};E.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,s.createElement)(i?i:p,null,(0,s.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,s.createElement)((0,l.withRouter)(R.default),{layout:!0,children:function(n){return(0,s.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return E.default.getPage(o.location.pathname)?(0,s.createElement)(R.default,r({page:!0},o)):(0,s.createElement)(R.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,h.default)(function(){return c.default.render(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,n){e.exports=[]},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./.cache/emitter.js"),a=o(r),s="/";s="/hallingdata.no/","serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,s){var u=!1,i=!0,c=function(e){s&&(s(t,e),s=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(n,l,d){if("string"!=typeof l){if(c){var p=i(l);p&&p!==c&&e(n,p,d)}var f=a(l);s&&(f=f.concat(s(l)));for(var m=0;m<f.length;++m){var h=f[m];if(!(t[h]||o[h]||d&&d[h])){var g=u(l,h);try{r(n,h,g)}catch(e){}}}return n}return n}},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/object-assign/index.js":function(e,n){"use strict";function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var o=Object.getOwnPropertyNames(n).map(function(e){return n[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,n){for(var o,u,i=t(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var l in o)a.call(o,l)&&(i[l]=o[l]);if(r){u=r(o);for(var d=0;d<u.length;d++)s.call(o,u[d])&&(i[u[d]]=o[u[d]])}}return i}},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function s(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&u())}function u(){if(!h){var e=r(s);h=!0;for(var n=m.length;n;){for(f=m,m=[];++g<n;)f&&f[g].run();g=-1,n=m.length}f=null,h=!1,a(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var l,d,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var f,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new i(e,n)),1!==m.length||h||r(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-tsx!./src/pages/404.tsx":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa25129398ba8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/sogasg/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js"]}!./node_modules/ts-loader/index.js?{"compilerOptions":{"target":"esnext","experimentalDecorators":true,"jsx":"react","module":"commonjs"},"transpileOnly":true}!./src/pages/404.tsx')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-tsx!./src/pages/index.tsx":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xc956abe28b23,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/sogasg/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js"]}!./node_modules/ts-loader/index.js?{"compilerOptions":{"target":"esnext","experimentalDecorators":true,"jsx":"react","module":"commonjs"},"transpileOnly":true}!./src/pages/index.tsx')})})}}});
//# sourceMappingURL=app-9176aa66b2f96547daf6.js.map