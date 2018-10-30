/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,n){"use strict";var r=n(31);n.n(r).a},123:function(t,e,n){"use strict";var r=n(32);n.n(r).a},124:function(t,e,n){},125:function(t,e,n){"use strict";var r=n(33);n.n(r).a},126:function(t,e,n){"use strict";n.r(e);n(50),n(81),n(82);var r=n(19),a=n.n(r),o=(n(43),n(44),n(87),n(3)),i=n.n(o),s=(n(88),n(89),n(64),n(46),n(66),n(65),n(93),n(105),n(0)),u={},c=n(20),p=n.n(c),h=n(73),l=n.n(h),f=n(49),d=function(){return n.e(2).then(n.bind(null,129)).then(function(t){return t.default||t})};s.a.use(f.a),window.history.scrollRestoration="manual";var v=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var m=n(74),x=n.n(m).a,g={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,a=e.props;r.nuxtChild=!0;for(var o=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,p={};y.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var h={};_.forEach(function(t){"function"==typeof c[t]&&(h[t]=c[t].bind(o))});var l=h.beforeEnter;h.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),l)return l.call(o,t)};var f=[t("router-view",r)];return void 0!==a.keepAlive&&(f=[t("keep-alive",{props:a.keepAliveProps},f)]),t("transition",{props:p,on:h},f)}},y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],_=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],b={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},C={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},w=(n(110),n(18)),k=Object(w.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);k.options.__file="nuxt-error.vue";var $=k.exports,E=(n(111),n(112),n(113),n(115),n(117),n(118),n(121),n(122),function(){return{}});function R(t,e){var n=t.options.data||E;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),p()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function S(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function T(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function A(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,a){return t.components[a]?r.push(e(t.components[a],t.instances[a],t,a,n)):delete t.components[a],r},[])}))}function O(t){return Promise.all(A(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[a]=S(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,a){return t.apply(this,arguments)}}()))}function N(t){return j.apply(this,arguments)}function j(){return(j=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:return t.abrupt("return",p()({},e,{meta:T(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function q(t,e){return P.apply(this,arguments)}function P(){return(P=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=a()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},n=t,o=a()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=B(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,N(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,N(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function D(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function K(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===a()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",o=n||{},i=r||{},s=i.pretty?I:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,h=o[c.name];if(null==h){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(p=s(h[l]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===l?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(h),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');a+=c.prefix+p}}else a+=c}return a}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=M.exec(t));){var u=n[0],c=n[1],p=n.index;if(i+=t.slice(o,p),o=p+u.length,c)i+=c[1];else{var h=t[o],l=n[2],f=n[3],d=n[4],v=n[5],m=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=l&&null!=h&&h!==l,y="+"===m||"*"===m,_="?"===m||"*"===m,b=n[2]||s,C=d||v;r.push({name:f||a++,prefix:l||"",delimiter:b,optional:_,repeat:y,partial:g,asterisk:!!x,pattern:C?z(C):x?".*":"[^"+U(b)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))}function H(t,e){var n={},r=p()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var a,o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/");return 2===(o=s.split("#")).length&&(s=o[0],a=o[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=a?"#"+a:""}var J={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||K(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:g,NuxtError:$}},Q={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#F3CB02",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},F=(n(123),Object(w.a)(Q,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));F.options.__file="nuxt-loading.vue";var V=F.exports,X=(n(124),{name:"DefaultLayout",data:function(){return{showNavbar:!1}},methods:{toggleNavbar:function(){this.showNavbar=!this.showNavbar}}}),W=(n(125),Object(w.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/2019/"}},[t._v("HKOSCon 2019")]),t._v(" "),n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:t.toggleNavbar}},[n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.showNavbar}},[t._m(0),t._v(" "),t._m(1)])]),t._v(" "),n("nuxt"),t._v(" "),t._m(2)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://hkoscon.org/2018/timetable/"}},[t._v("Timetable")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://hkoscon.org/2018/sponsors/"}},[t._v("Sponsors")]),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("span",{staticClass:"navbar-link"},[t._v("Organizer")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://hkoscon.org/2018/about-committee.html"}},[t._v("Organizing Committee")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://hkoscon.org/2018/about-coc.html"}},[t._v("Code of Conduct")])])]),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("span",{staticClass:"navbar-link"},[t._v("Archive")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://hkoscon.org/2018/"}},[t._v("HKOSCon 2018")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://hkoscon.org/2017/"}},[t._v("HKOSCon 2017")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://2016.opensource.hk/"}},[t._v("HKOSCon 2016")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://2015.opensource.hk/"}},[t._v("HKOSCon 2015")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://2014.opensource.hk/"}},[t._v("HKOSCon 2014")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://2013.opensource.hk/"}},[t._v("HKOSCon 2013")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("p",{staticClass:"control"},[e("a",{staticClass:"button is-primary",attrs:{href:"https://www.eventbrite.com/e/hong-kong-open-source-conference-2018-tickets-44667134602?_ga=2.116414022.1599379448.1540831395-739958573.1540831395"}},[this._v("Register")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("a",{attrs:{href:"https://facebook.com/hkoscon/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("a",{attrs:{href:"https://facebook.com/hkoscon/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("a",{attrs:{href:"mailto:conference@opensource.hk"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-envelope"})])])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://creativecommons.org/licenses/by-sa/3.0/hk/",target:"_blank"}},[n("img",{attrs:{src:"https://licensebuttons.net/l/by-sa/3.0/hk/88x31.png"}})])]),t._v(" "),n("p",[t._v("This work is licensed under a\n        "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by-sa/3.0/hk/",target:"_blank"}},[t._v("Creative Commons Attribution-ShareAlike 3.0 Hong Kong License")]),t._v(".")]),t._v(" "),n("p",[t._v("Logos and trademarks belong to their respective owners.")])])])}],!1,null,"0b9063f2",null));W.options.__file="default.vue";var G={_default:W.exports},Y={head:{title:"HKOSCon 2019",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"HKOSCon 2019"}],link:[{rel:"icon",type:"image/x-icon",href:"https://hkoscon.org/favicon.ico"},{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Roboto|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),a=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),o=t("transition",{props:{name:"layout",mode:"out-in"}},[a]);return t("div",{domProps:{id:"__nuxt"}},[n,o])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&G["_"+t]||(t="default"),this.layoutName=t,this.layout=G["_"+t],this.layout},loadLayout:function(t){return t&&G["_"+t]||(t="default"),Promise.resolve(G["_"+t])}},components:{NuxtLoading:V}};s.a.component(x.name,x),s.a.component(g.name,g),s.a.component(b.name,b),s.a.component(J.name,J),s.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Z={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function tt(){return(tt=i()(regeneratorRuntime.mark(function t(e){var n,r,a,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new f.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:v,routes:[{path:"/2019",component:d,name:"2019"}],fallback:!1});case 2:return n=t.sent,r=p()({router:n,nuxt:{defaultTransition:Z,transitions:[Z],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Z,{name:t}):Object.assign({},Z,t):Z}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Y),a=e?e.next:function(t){return r.router.push(t)},e?o=n.resolve(e.url).route:(i=D(n.options.base),o=n.resolve(i).route),t.next=8,q(r,{route:o,next:a,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:return t.abrupt("return",{app:r,router:n});case 13:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var et,nt,rt=[],at=window.__NUXT__||{};function ot(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);Object.keys(a).filter(function(t){return a[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function it(t,e,n){return st.apply(this,arguments)}function st(){return(st=i()(regeneratorRuntime.mark(function t(e,n,r){var a,o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!et.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?H(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,O(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function ut(t,e){return at.serverRendered&&e&&R(t,e),t._Ctor=t,t}function ct(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!o)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():L(e[0],n).then(function(){return t(e.slice(1),n)})}(a,e)}function pt(t,e,n){return ht.apply(this,arguments)}function ht(){return(ht=i()(regeneratorRuntime.mark(function t(e,n,r){var a,o,i,u,c,p,h,l,f,d,v,m,x,g,y,_,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return rt=e===n?[]:T(n,a=[]).map(function(t,e){return K(n.matched[a[e]].path)(n.params)}),o=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),o||(o=!0,r(t))},t.next=7,q(et,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=et.nuxt.dateErr,this._hadError=!!et.nuxt.err,(c=T(e,u=[])).length){t.next=25;break}return t.next=14,ct.call(this,c,et.context);case 14:if(!o){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof $.layout?$.layout(et.context):$.layout);case 18:return p=t.sent,t.next=21,ct.call(this,c,et.context,p);case 21:if(!o){t.next=23;break}return t.abrupt("return");case 23:return et.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(ot(c,e,n)),t.prev=27,t.next=30,ct.call(this,c,et.context);case 30:if(!o){t.next=32;break}return t.abrupt("return");case 32:if(!et.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(h=c[0].options.layout)&&(h=h(et.context)),t.next=38,this.loadLayout(h);case 38:return h=t.sent,t.next=41,ct.call(this,c,et.context,h);case 41:if(!o){t.next=43;break}return t.abrupt("return");case 43:if(!et.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:l=!0,t.prev=46,f=!0,d=!1,v=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(f=(x=m.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(et.context);case 58:if(l=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:f=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,v=t.t0;case 70:t.prev=70,t.prev=71,f||null==m.return||m.return();case 73:if(t.prev=73,!d){t.next=76;break}throw v;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(l){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=K(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==rt[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=o&&i?30:45;if(o){var c=L(t.options.asyncData,et.context).then(function(e){R(t,e),b.$loading.increase&&b.$loading.increase(s)});a.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var p=t.options.fetch(et.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),a.push(p)}return Promise.all(a)}));case 89:o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return rt=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,C=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(C),"function"==typeof(_=$.layout)&&(_=_(et.context)),t.next=108,this.loadLayout(_);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function lt(t,e){A(t,function(t,e,n,r){return"object"!==a()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function ft(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?$.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(et.context)),this.setLayout(e)}function dt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),a=T(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&a[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),ft.call(n,t)})}function vt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),nt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function mt(){return(mt=i()(regeneratorRuntime.mark(function t(e){var n,r,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return et=e.app,nt=e.router,t.next=4,Promise.all((void 0,c=D((u=nt).options.base,u.options.mode),A(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,a,o){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=ut(S(e),at.data?at.data[o]:null),r.components[a]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,a,o){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(et),a=at.layout||"default",t.next=9,r.loadLayout(a);case 9:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){vt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(ot(n,nt.currentRoute)),rt=nt.currentRoute.matched.map(function(t){return K(t.path)(nt.currentRoute.params)})),r.$loading={},at.error&&r.error(at.error),nt.beforeEach(it.bind(r)),nt.beforeEach(pt.bind(r)),nt.afterEach(lt),nt.afterEach(dt.bind(r)),!at.serverRendered){t.next=22;break}return o(),t.abrupt("return");case 22:pt.call(r,nt.currentRoute,nt.currentRoute,function(t){if(!t)return lt(nt.currentRoute,nt.currentRoute),ft.call(r,nt.currentRoute),void o();nt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return tt.apply(this,arguments)}().then(function(t){return mt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},74:function(t,e,n){"use strict";var r={name:"no-ssr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,a=e.props,o=r(),i=o.default,s=o.placeholder;return n._isMounted?i:(n.$once("hook:mounted",function(){n.$forceUpdate()}),t(a.placeholderTag,{class:["no-ssr-placeholder"]},a.placeholder||s))}};t.exports=r},75:function(t,e,n){t.exports=n(126)}},[[75,3,1]]]);
//# sourceMappingURL=a6b4ce9ca561d80d194e.js.map