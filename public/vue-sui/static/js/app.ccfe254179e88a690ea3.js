webpackJsonp([16,15],{0:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}var i=n(221),r=a(i),u=n(220),s=a(u),l=n(219),c=a(l),p=n(113),f=a(p),d=n(111),h=a(d),v=n(110),b=a(v),m=n(112),x=o(m),y=n(204),_=a(y);r.default.use(s.default);var g=new s.default({hashbang:!0,history:!0,saveScrollPosition:!0,suppressTransitionError:!0});(0,f.default)(g),r.default.use(c.default),r.default.http.options.root="/vue-sui-demo/static/data",r.default.http.options.emulateJSON=!0,r.default.directive("pullToRefresh",h.default),r.default.directive("infiniteScroll",b.default),r.default.filter("date",x.dateFilter),g.start(_.default,"#app"),window.router=g},39:function(e,t){e.exports=Zepto},103:function(e,t,n){var o,a,i={};n(177),a=n(197),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},106:function(e,t,n){var o,a,i={};o=n(115),a=n(182),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},108:function(e,t){e.exports=jWeixin},110:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(39),i=o(a);t.default={bind:function(){var e=this,t=(0,i.default)(this.el);t.on("scroll",function(){var n=parseFloat(t.height()),o=parseFloat(t.scrollTop()),a=n+o;console.log(t.height()+"-"+t.scrollTop()+"-"+a+"-"+t[0].scrollHeight),t[0].scrollHeight-a<=3&&(console.log(t.height()+"-"+t.scrollTop()+"-"+t[0].scrollHeight),e.vm[e.expression]())})}}},111:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(39),i=o(a);t.default={params:["distance"],bind:function(){var e=this;console.log("pull-to-refresh-content");var t=(0,i.default)(this.el);t.addClass("content pull-to-refresh-content").attr("data-ptr-distance",this.params.distance),(0,i.default)(t).on("refresh",function(){e.vm[e.expression]()})},unbind:function(){i.default.destroyPullToRefresh((0,i.default)(this.el))}}},112:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e>=10?e:"0"+e};t.dateFilter=function(e,t){var o=new Date(1e3*e),a=o.getFullYear(),i=o.getMonth()+1,r=o.getDate(),u=o.getHours(),s=o.getMinutes(),l=o.getSeconds(),c=void 0;switch(t){case 0:c=n(i)+"-"+n(r);break;case 1:c=n(u)+"-"+n(s);break;case 2:c=a+"-"+n(i)+"-"+n(r);break;case 3:c=a+"-"+n(i)+"-"+n(r)+"  "+n(u)+":"+n(s);break;case 4:c=a+"-"+n(i)+"-"+n(r)+"  "+n(u)+":"+n(s)+":"+n(l)}return c}},113:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.map({"*":{component:function(e){n.e(0,function(t){var n=[t(107)];e.apply(null,n)}.bind(this))}},"/":{component:function(e){n.e(0,function(t){var n=[t(107)];e.apply(null,n)}.bind(this))}},"/home":{component:function(e){n.e(1,function(t){var n=[t(205)];e.apply(null,n)}.bind(this))}},"/list":{component:function(e){n.e(9,function(t){var n=[t(207)];e.apply(null,n)}.bind(this))}},"/rank":{component:function(e){n.e(3,function(t){var n=[t(211)];e.apply(null,n)}.bind(this))}},"/invite":{component:function(e){n.e(6,function(t){var n=[t(206)];e.apply(null,n)}.bind(this))}},"/tasks":{component:function(e){n.e(5,function(t){var n=[t(212)];e.apply(null,n)}.bind(this))}},"/user":{component:function(e){n.e(8,function(t){var n=[t(213)];e.apply(null,n)}.bind(this))}},"/user/tasks":{component:function(e){n.e(4,function(t){var n=[t(217)];e.apply(null,n)}.bind(this))}},"/user/withdraw":{component:function(e){n.e(2,function(t){var n=[t(218)];e.apply(null,n)}.bind(this))}},"/user/profile":{component:function(e){n.e(10,function(t){var n=[t(214)];e.apply(null,n)}.bind(this))}},"/user/profit":{component:function(e){n.e(14,function(t){var n=[t(215)];e.apply(null,n)}.bind(this))}},"/user/profit/record":{component:function(e){n.e(11,function(t){var n=[t(216)];e.apply(null,n)}.bind(this))}},"/more":{component:function(e){n.e(13,function(t){var n=[t(208)];e.apply(null,n)}.bind(this))}},"/more/feedback":{component:function(e){n.e(12,function(t){var n=[t(210)];e.apply(null,n)}.bind(this))}},"/more/about":{component:function(e){n.e(7,function(t){var n=[t(209)];e.apply(null,n)}.bind(this))}}}),e.beforeEach(function(t){var n=t.to,o=t.from,a=t.next,i=n.path,r=o.path;if(console.log("to: "+i+" from: "+r),i.replace(/[^\/]/g,"").length>1)e.app.isIndex=!1;else{var u="/"===i||"/invite"===i||"/rank"===i;e.app.isIndex=u?0:1}a()}),e.afterEach(function(e){var t=e.to;console.log("成功浏览到: "+t.path),i.default.refreshScroller()})};var a=n(39),i=o(a)},115:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{path:"",icon:"",label:""},computed:{iconClass:function(){return"icon-"+this.icon}}}},118:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(103),i=o(a),r=n(106),u=o(r),s=n(39),l=o(s),c=n(108),p=o(c);t.default={ready:function(){p.default.config({debug:!1,appId:l.default.sign.appId,timestamp:l.default.sign.timestamp,nonceStr:l.default.sign.nonceStr,signature:l.default.sign.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]})},data:function(){return{isIndex:!0}},components:{Bar:i.default,BarItem:u.default}}},166:function(e,t){},177:function(e,t){},182:function(e,t){e.exports=" <a class=tab-item v-link=\"{path: path, activeClass: 'active', replace: true}\"> <span class=icon :class=iconClass></span> <span class=tab-label v-text=label></span> </a> "},185:function(e,t){e.exports=' <div class="page page-current"> <bar v-if=isIndex> <bar-item path=/home label=首页 icon=home></bar-item> <bar-item path=/tasks label=任务 icon=tasks></bar-item> <bar-item path=/list label=列表 icon=mytask></bar-item> <bar-item path=/user label=我自己 icon=me></bar-item> <bar-item path=/more label=更多 icon=more></bar-item> </bar> <router-view transition=fade transition-mode=out-in keep-alive></router-view> </div> '},197:function(e,t){e.exports=' <nav class="bar bar-tab" _v-3b7191ec=""> <slot _v-3b7191ec=""></slot> </nav> '},204:function(e,t,n){var o,a,i={};n(166),o=n(118),a=n(185),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})}});