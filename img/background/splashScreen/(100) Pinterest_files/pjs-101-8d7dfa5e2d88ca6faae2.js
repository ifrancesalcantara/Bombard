(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[101],{"/kx4":function(e,t,n){"use strict";var r=n("GyhR"),i=n.n(r),o=n("Qo1m"),a=(n("hvnN"),["orange","green","purple","watermelon","pine","navy","eggplant","olive","maroon"]);function c(e){return a[e.charCodeAt(0)%a.length]}var l=n("+U6O"),s=n("mwLX");function u(e){var t=e.user,n=e.search,r=e.storyType;if(r===s.b.USER){var a=t.full_name,u=t.image_large_url;return i.a.createElement("div",{className:"attributionUserBorder",style:{height:s.a,width:s.a}},i.a.createElement(l.a,{name:a,src:u}))}return r===s.b.SEARCH?i.a.createElement("div",{className:"attributionSearchBorder"},i.a.createElement(l.c,{shape:"pill",color:c(n)},i.a.createElement(l.c,{deprecatedPadding:{x:2},display:"flex",alignItems:"center"},i.a.createElement(l.c,{deprecatedMargin:{right:1}},i.a.createElement(l.n,{accessibilityLabel:o.a._("search"),icon:"search",label:"search",color:"white"})),i.a.createElement(l.c,{maxWidth:150,deprecatedPadding:{y:2}},i.a.createElement(l.K,{truncate:!0,color:"white",smSize:"xs",mdSize:"sm",lgSize:"md"},n))))):null}t.a=function(e){var t=e.height,n=e.pins,r=e.pinWidth,o=e.search,a=e.storyType,c=e.user;return i.a.createElement(l.c,{position:"relative"},i.a.createElement(l.u,{height:t,shape:"rounded",wash:!0},i.a.createElement(l.c,null,n.map((function(e,n){return function(e,t,n,r){return i.a.createElement("div",{key:t,className:"miniPinGridItem",style:{backgroundImage:"url(".concat(e.url,")"),height:n,width:r}})}(e,n,t,r)})))),i.a.createElement("span",{className:"attributionWrapper"},i.a.createElement(u,{search:o,storyType:a,user:c})))}},"1Yd3":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("GyhR"),i=n.n(r),o=n("Qo1m"),a=(n("hvnN"),n("Irlq")),c=n("+U6O");function l(e){var t=e.backgroundColor,n=e.followersCount,r=e.followersCountDisplay,l=e.image,s=e.name,u=e.width,p=o.a.ngettext("{{ count }} {{ label }}","{{ count }} {{ label }}",n||0,"indicate a number of followers"),f=o.a.ngettext("follower","followers",n||0,"used in {{count}} {{followers}}");return i.a.createElement(c.c,null,i.a.createElement(c.u,{shape:"rounded"},l?i.a.createElement(c.c,{position:"relative"},i.a.createElement(c.s,{width:u,height:u,contentAspectRatio:l.width/l.height},i.a.createElement(c.p,{alt:s,color:t,naturalHeight:1,naturalWidth:1,src:l.url})),i.a.createElement(c.c,{height:u,width:u,dangerouslySetInlineStyle:{__style:{backgroundImage:"linear-gradient(to bottom,\n                  rgba(181, 181, 181, .1) 0%,\n                  rgba(0, 0, 0, .2) 33%,\n                  rgba(0, 0, 0, .5) 66%,\n                  rgba(0, 0, 0, .7) 100%)"}},position:"absolute",top:!0})):i.a.createElement(c.c,{height:u,width:u,dangerouslySetInlineStyle:{__style:{backgroundColor:t}}}),i.a.createElement(c.c,{bottom:!0,left:!0,right:!0,position:"absolute",padding:3},i.a.createElement(c.K,{bold:!0,color:"white",overflow:"normal",size:"lg",smSize:"sm",mdSize:"md",lgSize:"lg"},s),n?i.a.createElement(c.c,null,Object(a.b)(p,{count:i.a.createElement(c.K,{bold:!0,color:"white",inline:!0,key:"followersCount",size:"sm"},r),label:i.a.createElement(c.K,{color:"white",inline:!0,key:"followersLabel",size:"sm"},f)})):null)))}},"2hPZ":function(e,t,n){"use strict";var r="undefined"!=typeof window&&window.performance?function(){return window.performance.now()}:function(){return Date.now()};t.a=function(e){var t=e.window,n=e.duration,i=e.run,o=r(),a=0,c=null,l=function e(){var l=r()-o,s=l-a;if(n===1/0)i(0,l,s);else{var u=l/n;if(u>=1)return void i(1,l,s);i(u,l,s)}a=l,c=t.requestAnimationFrame(e)};return{start:function(){c=t.requestAnimationFrame(l)},cancel:function(){c&&(t.cancelAnimationFrame(c),c=null)}}}},"66xa":function(e,t,n){"use strict";var r=n("GyhR"),i=n.n(r),o=n("+U6O"),a=n("PNko"),c=n.n(a),l=n("mwLX");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=136;function f(e){var t=e.hasBrioCorners,n=e.idx,r=e.imageFit,a=e.imageSize,u=e.inUnifiedComments,f=e.isFullWidth,h=e.item,y=e.itemHeight,b=e.itemWidth,g=e.numItemsShow,v=e.previewItemCount,w=e.variant,E=h.description,_=h.images,O=h.type;if(O&&O!==l.b.PIN)return null;var S=_&&_[a],T=f?v-g:Math.min(v-g,99);return i.a.createElement("span",{className:c()("previewRowItem",s({previewRowFullWidthItem:f,fourPixelMask:!f},"default"===w?{hasLegoBrioCorners:!0}:{hasBrioCorners:t},u?{unifiedCommentBorder:!0}:{})),key:n},i.a.createElement(o.s,{width:b||y||m,height:y||d,contentAspectRatio:1},S&&i.a.createElement(o.p,Object.assign({alt:E||""},r?{fit:"cover"}:{},{naturalHeight:p,naturalWidth:p,src:(S||{}).url}),n===g-1&&T>0&&!u&&i.a.createElement(o.c,{flex:"grow",display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, 0.2)",height:"100%"}}},i.a.createElement(o.K,{bold:!0,size:f?"xl":"sm",color:"white"},"+"+T)))))}n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return b}));var d=60,m=40,h=4,y=5;function b(e){var t=e.hasBrioCorners,n=void 0!==t&&t,r=e.imageFit,a=e.imageSize,c=void 0===a?"136x136":a,l=e.inUnifiedComments,s=void 0!==l&&l,u=e.isFullWidth,p=e.itemHeight,d=e.itemWidth,m=e.previewItemCount,b=e.previewItems,g=void 0===b?[]:b,v=e.showEmptyCards,w=e.variant,E=s?y:h,_=v?E:Math.min(g.length,E),O=Array.from(new Array(_)),S=new Set;return i.a.createElement(o.c,s?{display:"flex",justifyContent:"center"}:{},O.map((function(e,t){var o=g[t]||{},a=o.image_signature;return a&&S.has(a)?null:(S.add(a),i.a.createElement(f,{hasBrioCorners:n,idx:t,imageFit:r,imageSize:c,inUnifiedComments:s,isFullWidth:u,item:o,itemHeight:p,itemWidth:d,key:t,numItemsShow:E,previewItemCount:m,variant:w}))})).filter((function(e){return e})))}},"8k0i":function(e,t,n){"use strict";var r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return u}));var o=n("QJ2d").a.settings,a=o.CANONICAL_MAIN_URL,c=o.CANONICAL_ADS_URL,l=o.CANONICAL_ANALYTICS_URL,s=(i(r={},0,a),i(r,3,c),i(r,4,l),r);function u(e){var t=e.currentSiteType,n=e.destinationSiteType,r=e.inputPath,i=Object.keys(s).includes(String(t))&&Object.keys(s).includes(String(n)),o="/"===r[0]?r:"/".concat(r);return i&&n!==t?"".concat(s[n]).concat(o):o}},HW6o:function(e,t,n){"use strict";var r=n("GyhR"),i=n.n(r),o=n("Mr4W"),a=n.n(o),c=n("4+0X");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=new Map,h=null,y=function(e){e.forEach((function(e){var t=m.get(e.target);t&&t(e)}))},b=function(e,t,n){var r=t?[0,.5,1]:[0,1],i={root:document.querySelector("#mainContainer"),rootMargin:"-64px 0px 0px 0px",threshold:r};h=h||new window.IntersectionObserver(y,i),m.set(e,n),h.observe(e)},g=function(e){return m.has(e)};t.a=function(e){var t=function(t){function n(){var e,t,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,s=new Array(o),p=0;p<o;p++)s[p]=arguments[p];return r=this,i=(e=u(n)).call.apply(e,[this].concat(s)),t=!i||"object"!==l(i)&&"function"!=typeof i?f(r):i,d(f(f(t)),"seen",!1),d(f(f(t)),"flushTimeout",null),d(f(f(t)),"attachDenzelNavigateListener",(function(){t.denzelNavigateListener=c.a.instance.subscribe("site","navigateStarted",(function(e,n,r,i){var o=new RegExp("/pin/[\\w|-]+/$");!i&&r&&"string"==typeof r.url&&o.test(r.url)&&t.leave()}))})),d(f(f(t)),"detachDenzelNavigateListener",(function(){t.denzelNavigateListener&&(t.denzelNavigateListener.unsubscribe(),delete t.denzelNavigateListener)})),d(f(f(t)),"enter",(function(e){var n=e.intersectionRatio>0||e.isIntersecting;t.seen=n,t.seen&&(t.props.onVisibilityChanged(!0),t.attachDenzelNavigateListener())})),d(f(f(t)),"leave",(function(){var e=t._node;e&&g(e)&&t.seen&&(t.props.onVisibilityChanged(!1),t.seen=!1,t.detachDenzelNavigateListener())})),d(f(f(t)),"observe",(function(){try{t._node=a.a.findDOMNode(f(f(t)))}catch(r){return}if(t._node){var e=t.props.inAdsDesktopVideoExperiment,n=t._node;b(n,e,(function(r){if(m.has(n)){var i=e?r.intersectionRatio>=.5:r.intersectionRatio>0||r.isIntersecting,o=t.props.trackFullVisible?r.intersectionRatio>=1:i,a=t.props.trackFullVisible?0===r.intersectionRatio:!o;!t.seen&&o?t.enter(r):t.seen&&a&&t.leave()}}))}})),t}var r,o,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,t),r=n,(o=[{key:"componentDidMount",value:function(){this.observe()}},{key:"componentWillUnmount",value:function(){var e=this._node;e&&(this.leave(),function(e){h.unobserve(e),m.delete(e)}(e))}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}])&&s(r.prototype,o),y&&s(r,y),n}(r.Component);return d(t,"displayName","WithVisibilityChanged(".concat(e.displayName||e.name,")")),t}},NO1S:function(e,t,n){"use strict";var r=n("GyhR"),i=n("ReuR");function o(e){var t=e.customCover,n=e.height,i=e.imgUrl,o=e.imgPos,a=e.width,c={height:n,width:a},l=n/a,s="center center";if(t&&o){var u=1;u=o.height/o.width>l?a/o.width:n/o.height;var p=o.x*u,f=o.y*u;s="-".concat(p,"px -").concat(f,"px")}var d={backgroundImage:"url(".concat(i,")"),backgroundPosition:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF"};return r.createElement("div",{style:c},r.createElement("div",{className:"relative",style:d},r.createElement("div",{className:"imageWash absolute"})))}var a=n("+U6O");n.d(t,"a",(function(){return s}));var c=2,l=function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n),t&=t;return Math.abs(t)};function s(e){var t=e.boardThumbs,n=void 0===t?[]:t,s=(e.coverPin,e.cover),u=e.height,p=void 0===u?200:u,f=e.numCols,d=void 0===f?3:f,m=e.width,h=void 0===m?300:m,y=s?Math.floor(d/2):d,b=n.slice(0,2*y).map((function(e){return e.url||""})).sort().join(""),g=l(b)%y;return r.createElement(a.u,{shape:"rounded",width:h,height:p},r.createElement(a.g,{columns:d,cover:!!s,gutter:c,height:p,layoutKey:g,renderImage:function(e){var t=e.index,a=e.width,c=e.height;return 0===t&&s?r.createElement(o,{customCover:s.isCustom,height:c,imgUrl:s.url,imgPos:s.position||{width:0,height:0,x:0,y:0},width:a}):r.createElement(i.a,{height:c,image:n[s?t-1:t],width:a})},width:h}))}},ReuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("GyhR"),i=n("+U6O");function o(e){var t=e.image,n=e.width,o=e.height;return t?r.createElement(i.u,{wash:!0,width:n,height:o},r.createElement(i.p,{alt:"",color:"#EFEFEF",fit:"cover",naturalHeight:t.height||1,naturalWidth:t.width||1,src:t.url||""})):r.createElement(i.c,{color:"lightGray",width:n,height:o})}},dmIu:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("GyhR"),i=n.n(r),o=n("PNko"),a=n.n(o),c=n("Qo1m"),l=n("OLQZ"),s=n.n(l),u=n("+U6O"),p=n("v7Si");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={UP:"up",DOWN:"down"},v=100,w=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=this,i=(e=m(t)).call.apply(e,[this].concat(a)),n=!i||"object"!==f(i)&&"function"!=typeof i?y(r):i,b(y(y(n)),"handleScroll",s()((function(){if(!n.props.listResource.isFetching){var e=n.props.scrollThreshold;Object(p.c)(n._container)-Object(p.d)(n._container)-Object(p.a)(n._container)<e&&n.fetchMore()}}),v)),b(y(y(n)),"addEventListeners",(function(e){var t=n.props.useWindow;t&&(e=window),n.removeEventListeners(),e&&(t||e.addEventListener("wheel",n.preventScroll),e.addEventListener("scroll",n.handleScroll)),n._container=e})),b(y(y(n)),"preventScroll",(function(e){var t=e.deltaY<0?g.UP:g.DOWN,r=n._container.scrollHeight-n._container.scrollTop-n._container.clientHeight==0,i=0===n._container.scrollTop;(t===g.DOWN&&r||t===g.UP&&i)&&e.preventDefault()})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.onDataFetched,n=e.listResource.data;n&&t(n.length)}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"removeEventListeners",value:function(){var e=this.props.useWindow;this._container&&(e||this._container.removeEventListener("wheel",this.preventScroll),this._container.removeEventListener("scroll",this.handleScroll))}},{key:"fetchMore",value:function(){this.props.listResource.isFetching||(this.props.listResource.isAtEnd?this._container.removeEventListener("scroll",this.handleScroll):this.props.listResource.fetchMore())}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.renderEmptyState,r=e.renderItem,o=this.props.listResource.data;return!this.props.listResource.isFetching&&o&&0===o.length?n():i.a.createElement("div",{className:a()(t,"listContainer"),ref:this.addEventListeners},o?i.a.createElement("ul",{className:"scrollableList"},o.map((function(e,t){return r(e,t)}))):null,this.props.listResource.isAtEnd?null:i.a.createElement("div",{className:"loadingItem"},i.a.createElement(u.G,{accessibilityLabel:c.a._("Loading items"),show:this.props.listResource.isFetching})))}}])&&d(n.prototype,r),o&&d(n,o),t}(r.Component);b(w,"defaultProps",{onDataFetched:function(){},scrollThreshold:400,useWindow:!1})},jzYu:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("GyhR"),i=n.n(r),o=n("iJ35"),a=(n("hvnN"),n("Irlq")),c=n("+U6O");function l(e){var t=e.applyMarkup,n=void 0===t||t,r=e.applyLink,l=void 0!==r&&r,s=e.text,u=e.textMapping,p=void 0===u?{}:u,f={};return p&&Object.keys(p).forEach((function(e){var t=p[e];f[e]=t.t.toString(),n&&(t.b&&(f[e]=i.a.createElement("strong",{key:e},f[e])),t.r&&(f[e]=i.a.createElement(c.K,{inline:!0,color:"red",key:e},f[e])),t.l&&l&&(f[e]=i.a.createElement(o.b,{key:e,to:t.l},f[e])))})),i.a.createElement("span",null,Object(a.a)(s,f))}},lAPp:function(e,t,n){"use strict";n.r(t);var r=n("GyhR"),i=n.n(r),o=(n("pJxN"),n("Fpqi")),a=n("Qo1m"),c=n("66xa"),l=n("8k0i"),s=(n("hvnN"),n("+U6O")),u=n("mwLX");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"getImageProps",value:function(e){switch(e.type){case u.b.PIN:return{alt:e.description,src:(e.images["136x136"]||{}).url};case u.b.BOARD:return{alt:e.name,src:(e.image_thumbnail_urls||{})["100x"]};case u.b.USER:return{alt:e.full_name,src:e.image_large_url};default:return{}}}},{key:"render",value:function(){var e=this.props,t=e.headerIconImageUrl,n=e.headerIconObjects;if(t)return i.a.createElement(s.c,{height:u.a,width:u.a},i.a.createElement(s.u,{width:u.a,height:u.a,shape:"circle"},i.a.createElement(s.p,{alt:a.a._("Pinterest recommendation","label for notification with recommended content"),color:"#fff",naturalHeight:u.a,naturalWidth:u.a,src:t})));if(n&&n.length>0){var r=n[0];return i.a.createElement("div",null,r.type===u.b.USER?i.a.createElement(s.c,{height:u.a,width:u.a},i.a.createElement(s.a,{src:r.image_large_url,name:r.full_name})):i.a.createElement("div",{className:"fourPixelMask",style:{height:u.a,width:u.a}},i.a.createElement(s.p,Object.assign({color:"#fff",naturalHeight:u.a,naturalWidth:u.a},this.getImageProps(r)))))}return null}}])&&f(n.prototype,r),o&&f(n,o),t}(r.Component),b=n("NO1S"),g=146,v=4,w="170x",E=296;function _(e){var t=e.board,n=(t.name,t.image_cover_url),r=t.images,o=n?{url:n}:void 0,a=r?r[w]:[];return i.a.createElement(b.a,{boardThumbs:a,cover:o,height:g,numCols:v,width:E})}var O=n("1Yd3"),S=146,T=296;function P(e){var t=e.interests;return i.a.createElement(s.c,{width:T,display:"flex",justifyContent:"between"},t.map((function(e,t){var n=e.backgroundColor,r=e.id,o=e.images["236x"],a=e.name;return i.a.createElement(O.a,{key:r,backgroundColor:n,image:o,name:a,width:S})})))}var I=n("/kx4"),C=n("iJ35"),j=n("jzYu"),k=n("QJ2d"),x=n("UmN8"),N=n("NmcB"),D=n("q579"),R=n("buCM"),A=function(e,t){var r=t&&t[0]&&t[0].actor_id,i=D.a.getQueryStringParamsFromUrl(e);return r&&i.notification_ids?function(e,t){var r={notifications:JSON.stringify(t)};return n.e("sterlingAPI").then(n.bind(null,"oiGH")).then((function(t){return(new(0,t.default)).put("/ads/v3/notifications_v2/".concat(e,"/"),r)}))}(r,JSON.parse(i.notification_ids).map((function(e){return{id:e,status:R.f.READ}}))):Promise.resolve()};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=0,F=1,G=10,K=11,Y=12,V=13,Q=14,q=15,J=function(e){function t(){var e,n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=this,i=(e=U(t)).call.apply(e,[this].concat(a)),n=!i||"object"!==L(i)&&"function"!=typeof i?H(r):i,z(H(H(n)),"handleClick",(function(){var e=n.props,t=e.handleClick,r=e.id,i=e.type,o=e.overrideClickUrl,a=e.contentItems;Object(N.a)(101,{objectId:r,view:107,viewParameter:3081,news_type:i}),n.isAdsUrl(o)&&A(o,a),t()})),z(H(H(n)),"isAdsUrl",(function(e){var t=k.a.settings.CANONICAL_ADS_URL;return e&&0===e.indexOf(t)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,e),n=t,(r=[{key:"canBeSupportedByDisplayModes",value:function(e,t){return t.some((function(t){return e&1<<t}))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.headerIconImageUrl,o=n.headerIconObjects,c=n.headerText,u=n.id,p=n.lastUpdatedAt,f=n.overrideClickUrl,d=n.siteType,m=n.textMapping,h=n.unread,b=k.a.settings.CANONICAL_MAIN_URL,g=f||"/news_hub/"+u,v=this.isAdsUrl(g)?(e=g,D.a.removeQueryParams(e,["notification_ids"])):Object(l.a)({currentSiteType:d,destinationSiteType:0,inputPath:g}),w=this.displayComponent,E=new Date,_=new Date(p);return E.getTime()-_.getTime()>864e5&&_.setHours(0,0,0,0),i.a.createElement(x.a,{activate:!1,name:"web_pro_mode_header"},(function(e){var n=e.group.startsWith("enabled_full_width");return i.a.createElement(C.b,{className:"newsHubItem",to:n&&!t.isAdsUrl(g)?b.concat(v):v,onClick:t.handleClick},i.a.createElement(s.c,{display:"flex"},i.a.createElement(y,{headerIconImageUrl:r,headerIconObjects:o,id:u}),i.a.createElement(s.c,null,i.a.createElement(s.c,{marginLeft:3},i.a.createElement(s.c,{display:"flex",alignItems:"center"},i.a.createElement(s.c,{marginRight:6},i.a.createElement(s.c,{width:260},i.a.createElement("span",{style:{display:"inline",marginRight:8}},i.a.createElement(s.K,{inline:!0,size:"md"},i.a.createElement(j.a,{text:c,textMapping:m}))),i.a.createElement(s.c,{display:"inlineBlock"},i.a.createElement(s.K,{inline:!0,size:"xs",color:"gray"},a.a.getHumanizedTimesince(_.getTime(),{isAbbreviated:!0}))))),h&&i.a.createElement(s.u,{height:8,shape:"circle",width:8},i.a.createElement("div",{style:{backgroundColor:"#e60023",width:8,height:8}})))),!!w&&i.a.createElement(s.c,{marginTop:3,marginLeft:2},w))))}))}},{key:"displayComponent",get:function(){var e=this.props,t=e.contentItemCount,n=e.contentItems,r=e.contentText,o=e.displayMode,a=n.filter((function(e){return e.content_object})).map((function(e){return e.content_object}));if(this.canBeSupportedByDisplayModes(o,[K])){var l=a.map((function(e){return e.images["136x136"]})).slice(0,4);return i.a.createElement(I.a,{height:146,pins:l,pinWidth:73,storyType:u.b.PIN})}if(this.canBeSupportedByDisplayModes(o,[Y]))return i.a.createElement(_,{board:a[0]});if(this.canBeSupportedByDisplayModes(o,[V])){var p=a[0];return i.a.createElement(I.a,{height:146,pins:p.recent_pin_images["200x"].slice(0,4),pinWidth:73,storyType:u.b.USER,user:p})}if(this.canBeSupportedByDisplayModes(o,[G])){var f=a.map((function(e){return{images:e.images,image_signature:e.image_signature,type:e.type}}));return i.a.createElement(c.c,{previewItemCount:t,previewItems:f,variant:"legacy"})}if(this.canBeSupportedByDisplayModes(o,[q]))return i.a.createElement(P,{interests:a.slice(0,2)});if(this.canBeSupportedByDisplayModes(o,[Q])){var d=a[0].images.map((function(e){return{url:e}})).slice(0,4);return i.a.createElement(I.a,{height:146,pins:d,pinWidth:73,search:a[0].term,storyType:u.b.SEARCH})}return this.canBeSupportedByDisplayModes(o,[W])?null:this.canBeSupportedByDisplayModes(o,[F])?i.a.createElement(s.c,{width:260},i.a.createElement(s.K,{size:"md"},r)):void 0}}])&&M(n.prototype,r),o&&M(n,o),t}(r.Component);z(J,"defaultProps",{handleClick:function(){}});var X=n("o9D8"),Z=Object(X.a)(J),$=n("FBiG"),ee=n("ePT2");function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ae=function(e){function t(){var e,n,r,i,o,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return r=this,i=(e=re(t)).call.apply(e,[this].concat(s)),n=!i||"object"!==te(i)&&"function"!=typeof i?oe(r):i,o=oe(oe(n)),c=function(){ee.a.create("NewsHubResource").callDelete({showError:!1}).then((function(e){return n.props.handleClick()}))},(a="handleButtonClick")in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return i.a.createElement("div",{className:"newsHubMarkReadButton"},i.a.createElement(s.c,{display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement($.a,{accessibilityLabel:a.a._("Mark all as read","mark all the unread notifications as read"),shape:"pill",onClick:this.handleButtonClick},i.a.createElement(s.K,{size:"sm"},a.a._("Mark all as read","mark all the unread notifications as read")))))}}])&&ne(n.prototype,r),o&&ne(n,o),t}(r.Component),ce=n("dmIu"),le=n("8rWZ"),se=n("9Y9K"),ue=n("2YES"),pe=n("Y2BC");function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=me(t).call(this,e),n=!o||"object"!==fe(o)&&"function"!=typeof o?ye(r):o,be(ye(ye(n)),"onDataFetched",(function(e){n.hasEarlier=!1})),be(ye(ye(n)),"handleItemClick",(function(){n.props.handleItemClick()})),be(ye(ye(n)),"handleMarkAllButtonClicked",(function(){n.props.newsHubResource.refreshData()})),be(ye(ye(n)),"renderItem",(function(e,t){var r={impressionAuxFields:{newsType:e.news_type},impressionType:"News",loggingId:e.id,slotIndex:t,viewParameter:3081,viewType:107};return i.a.createElement("li",{className:"newsHubItemWrapper",key:t},n.renderDate(e.last_updated_at,t),i.a.createElement(Z,Object.assign({contentItemCount:e.content_item_count,contentItems:e.content_items,contentText:e.content_text,displayMode:e.encoded_display_mode,handleClick:n.handleItemClick,headerIconImageUrl:e.header_icon_image_url,headerIconObjects:e.header_icon_objects,headerText:e.header_text,id:e.id,lastUpdatedAt:e.last_updated_at,overrideClickUrl:e.override_click_url,subHeaderText:e.sub_header_text,siteType:n.props.siteType,textMapping:e.text_mapping,type:e.news_type,unread:e.unread},r)))})),be(ye(ye(n)),"renderEmptyState",(function(){return i.a.createElement(s.c,{height:400},i.a.createElement(s.c,{display:"flex",justifyContent:"center",color:"darkGray",shape:"pill",paddingY:5,margin:5},i.a.createElement(s.h,{xs:10},i.a.createElement(s.K,{bold:!0,color:"white",size:"lg"},a.a._("New! Discover ideas from your friends, followers and people who love your Pins!")))))})),n.hasEarlier=!1,n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.logPanelImpression()}},{key:"logPanelImpression",value:function(){var e=o.a.getInstance(),t=e.getViewFromContext();Object(N.a)(13,{view:107,viewParameter:3081}),e.addViewToContext(t)}},{key:"renderDate",value:function(e,t){var n,r=new Date(e);if(r.setHours(0,0,0,0),0===t)this.firstDay=r,n=a.a._("New","subtitle for new notifications in notification dropdown");else{if(r.getTime()===this.firstDay.getTime()||this.hasEarlier)return null;n=a.a._("Earlier","subtitle for old notifications in notification dropdown"),this.hasEarlier=!0}return i.a.createElement("div",{className:"newsHubItemDate"},i.a.createElement(s.K,{bold:!0,size:"md",color:"gray"},n))}},{key:"renderTitle",value:function(){return i.a.createElement("div",{className:"newsHubTitle"},i.a.createElement(s.K,{bold:!0,inline:!0,size:"xl"},a.a._("Notifications","Title for news hub dropdown on the right upper corner in home page")),this.renderMarkReadButton())}},{key:"renderMarkReadButton",value:function(){var e=this;return i.a.createElement(x.a,{name:"news_hub_unread"},(function(t){return t.anyEnabled?i.a.createElement(ae,{handleClick:e.handleMarkAllButtonClicked}):null}))}},{key:"render",value:function(){return i.a.createElement(le.a,{view:107,viewParameter:3081},i.a.createElement("div",null,this.renderTitle(),i.a.createElement(ce.a,{className:"newsHubPanel",onDataFetched:this.onDataFetched,renderEmptyState:this.renderEmptyState,renderItem:this.renderItem,listResource:this.props.newsHubResource})))}}])&&de(n.prototype,r),c&&de(n,c),t}(r.Component);be(ge,"defaultProps",{handleItemClick:function(){}});var ve=Object(se.compose)(ue.e,Object(pe.b)({name:"NewsHubResource",key:"newsHubResource",options:function(e){return{page_size:10}}},{allowStale:!1}))(ge);n.d(t,"NewsDropdown",(function(){return we}));var we=function(e){var t=e.handleItemClick,n=e.requestContext,r=e.siteType;return i.a.createElement("div",{className:"NewsConversationsDropdown"},i.a.createElement("div",{className:"content"},i.a.createElement(ve,{handleItemClick:t,locale:n.locale,siteType:r})))};t.default=Object(ue.e)(we)},mwLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var r=40,i={BOARD:"board",BOARD_ACTIVITY:"boardactivity",BOARD_ACTIVITY_COMMENT:"boardactivitycomment",DID_IT:"userdiditdata",INTEREST:"interest",PIN:"pin",SEARCH:"news_hub_search",STORY:"story",USER:"user"},o=3},o9D8:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("GyhR"),i=(n("hvnN"),n("q579")),o=n("kIql"),a=n("HW6o"),c=n("NmcB");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=i.a.getQueryStringParams()&&i.a.getQueryStringParams().debug_impression_log,y={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573}},b=1e6;function g(e){var t=Object(a.a)(e),n=function(e){function n(){var e,t,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return r=this,i=(e=p(n)).call.apply(e,[this].concat(a)),t=!i||"object"!==l(i)&&"function"!=typeof i?d(r):i,m(d(d(t)),"state",{impressionStarted:!1,impressionLogged:!1}),m(d(d(t)),"currentNs",(function(){return Date.now()*b})),m(d(d(t)),"startTime",0),m(d(d(t)),"debugPinImpressions",h&&"Pin"===t.props.impressionType&&t.props.viewer.isEmployee),m(d(d(t)),"handleVisibilityChanged",(function(e){var n=t.props,r=n.componentType,i=n.contextLogData,o=n.impressionAuxFields,a=n.impressionType,l=n.loggingId,u=n.slotIndex,p=n.viewParameter,f=n.viewType,d=n.viewData;if(e)t.startTime=t.currentNs(),t.debugPinImpressions&&(console.log(u+" started timer"),t.setState({impressionStarted:!0}));else{var h,b=y[a],g=b.idType,v=t.currentNs(),w=s((m(h={endTime:v},g,l),m(h,"slotIndex",u),m(h,"time",t.startTime),m(h,"renderDuration",v-t.startTime),h),o);Object(c.a)(b.eventType,s({component:r,eventData:m({},b.impressionType,[w]),view:f,viewParameter:p,viewData:d},i)),t.debugPinImpressions&&(console.log(u+" logged for "+(v-t.startTime)/1e9+"s"),t.setState({impressionStarted:!1,impressionLogged:!0}))}})),t}var i,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e),i=n,(o=[{key:"render",value:function(){return r.createElement(t,Object.assign({onVisibilityChanged:this.handleVisibilityChanged,debugImpressionStarted:this.debugPinImpressions?this.state.impressionStarted:void 0,debugImpressionLogged:this.debugPinImpressions?this.state.impressionLogged:void 0},this.props))}}])&&u(i.prototype,o),a&&u(i,a),n}(r.Component);return Object(o.a)(n)}},pJxN:function(e,t,n){},v7Si:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return m}));var r=n("2hPZ");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={easingFunction:"ease-in-out",extendToEdgeDistanceX:0,extendToEdgeDistanceY:0,scrollSpeedPxPerMs:1.2,minScrollDuration:200},c={linear:function(e){return e},"ease-in":function(e){return e*e},"ease-out":function(e){return e*(2-e)},"ease-in-out":function(e){return e<.5?2*e*e:(4-2*e)*e-1}},l=function(e){var t=e.scrollPosition,n=e.containerSize,r=e.contentSize,i=e.intendedDistance,o=e.extendToEdgeDistance,a=void 0===o?0:o,c=r-n,l=c-t,s=-t,u=i;return u=Math.min(u,l),u=Math.max(u,s),i>0&&c-(t+u)<=a?u=c-t:i<0&&t+u<=a&&(u=-t),u},s=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i({},a,o),u=e.scrollLeft,p=e.scrollTop,f=e.scrollWidth,d=e.scrollHeight,m=e.clientWidth,h=e.clientHeight,y=l({scrollPosition:u,containerSize:m,contentSize:f,intendedDistance:t,extendToEdgeDistance:s.extendToEdgeDistanceX}),b=l({scrollPosition:p,containerSize:h,contentSize:d,intendedDistance:n,extendToEdgeDistance:s.extendToEdgeDistanceY}),g=Math.abs(Math.floor(y/s.scrollSpeedPxPerMs)),v=Math.abs(Math.floor(b/s.scrollSpeedPxPerMs)),w=Math.max(g,v);s.minScrollDuration&&(w=Math.max(w,s.minScrollDuration));var E=c[s.easingFunction]||c["ease-in-out"],_=Object(r.a)({window:window,duration:w,run:function(t){e.scrollLeft=u+y*E(t),e.scrollTop=p+b*E(t),1===t&&s.onAnimationComplete&&setTimeout(s.onAnimationComplete(),0)}});return _};function u(e){return e===window?window.innerHeight:e.clientHeight}function p(){return void 0!==window.scrollY?window.scrollY:document.documentElement&&void 0!==document.documentElement.scrollTop?document.documentElement.scrollTop:0}function f(e){return e===window&&document.documentElement?document.documentElement.scrollHeight:e.scrollHeight}function d(e){return e===window?p():e.scrollTop}function m(){window&&window.scroll(0,0)}}}]);
//# sourceMappingURL=pjs-101-8d7dfa5e2d88ca6faae2.js.map