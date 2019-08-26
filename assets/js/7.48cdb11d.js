(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{10:function(t,e,n){"use strict";function s(t,e,n,s,a,r,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return s})},245:function(t,e,n){t.exports=n.p+"assets/img/防抖之前.d68a0e30.gif"},246:function(t,e,n){t.exports=n.p+"assets/img/防抖效果.28936d3a.gif"},247:function(t,e,n){t.exports=n.p+"assets/img/节流效果.2eb7bccb.gif"},255:function(t,e,n){"use strict";n.r(e);var s=n(10),a=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"函数的防抖和节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数的防抖和节流","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数的防抖和节流")]),t._v(" "),s("blockquote",[s("p",[t._v("当我们频繁的触发某些事件，或者我们需要频繁地发送请求去请求数据，我们希望的是对一些频繁触发的事件进行控制，那么就可以选择使用函数的防抖和节流进行控制。")])]),t._v(" "),s("h3",{attrs:{id:"防抖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖","aria-hidden":"true"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("防抖的原理")]),t._v(" "),s("blockquote",[s("p",[t._v("触发事件后在n秒内函数只能执行一次，如果在n秒内再次触发事件，那么会重新计算函数的执行事件")])])]),t._v(" "),s("li",[s("p",[t._v("举例一个简单的场景")]),t._v(" "),s("blockquote",[s("p",[t._v("用户点击一个按钮执行一些相应的操作，不可避免用户可能存在多次快速点击，我只希望在一定时间内执行一次，那么我们使用防抖函数来实现控制用户的点击次数操作")])])]),t._v(" "),s("li",[s("p",[t._v("先看看效果对比图")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("防抖前\n"),s("img",{attrs:{src:n(245)}})])]),t._v(" "),s("li",[s("p",[t._v("防抖后\n"),s("img",{attrs:{src:n(246)}})])])])]),t._v(" "),s("li",[s("p",[t._v("直接上代码")]),t._v(" "),s("blockquote",[s("p",[t._v("html部分")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<input type="button" value="抢购" id="ipt">\n')])])]),s("blockquote",[s("p",[t._v("封装防抖函数")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function debounce(fn,delay=200) { \n        // 定时器标识 \n        let timer = null;  \n        return function () {   \n        if (timer) clearTimeout(timer);    \n            timer = setTimeout(() => {     \n            fn.apply(this,arguments);      \n            // 函数执行完就置为null,防止内存泄漏      \n            timer = null   \n        },delay); \n    }\n}\n")])])]),s("blockquote",[s("p",[t._v("点击事件绑定")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const ipt = document.getElementById('ipt');\nipt.onclick = function () {  \n    // 为了好分别，加上时间戳\n    console.log(\"我被点了\"+Date.now())\n}\n")])])])]),t._v(" "),s("li",[s("p",[t._v("适用的场景")]),t._v(" "),s("ul",[s("li",[t._v("scroll、mousemove、resize等频繁触发的事件")])])])]),t._v(" "),s("h3",{attrs:{id:"节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节流","aria-hidden":"true"}},[t._v("#")]),t._v(" 节流")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("节流的原理")]),t._v(" "),s("blockquote",[s("p",[t._v("指连续触发事件但是在n秒中只执行一次函数（j即使不停止操作，也会按固定时间间隔执行）")])])]),t._v(" "),s("li",[s("p",[t._v("直接上代码")]),t._v(" "),s("blockquote",[s("p",[t._v("封装节流函数")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function throttle(fn,delay=200) {  \n    let timer = null;  \n    return function () {    \n        if (timer) return;    \n        timer = setTimeout(() => {      \n            fn.apply(this,arguments);     \n            clearTimeout(timer);      \n            timer = null    \n            },delay) \n        }\n    }\n")])])]),s("blockquote",[s("p",[t._v("查看效果")])]),t._v(" "),s("img",{attrs:{src:n(247)}})]),t._v(" "),s("li",[s("p",[t._v("适用的场景")]),t._v(" "),s("ul",[s("li",[t._v("比如搜索框搜索内容的时候，减少向后台请求次数，达到性能的优化")])])])])])},[],!1,null,null,null);e.default=a.exports}}]);