webpackJsonp([0],{"1QPb":function(t,e){},"66Gh":function(t,e){},"9f8+":function(t,e,s){t.exports=s.p+"static/img/00.fa71e89.jpg"},DwyA:function(t,e,s){t.exports=s.p+"static/img/06.23113ca.gif"},IdFV:function(t,e,s){t.exports=s.p+"static/img/01.6beaef8.jpg"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"fadeInRight animated",attrs:{href:"javascript:;"},on:{click:function(e){t.$emit("scrollto")}}},[t._v(t._s(t.title)+" ")])])},staticRenderFns:[]};var n={name:"navbar",components:{navitem:s("VU/8")({name:"navitem",props:["title"]},i,!1,function(t){s("vNjv")},"data-v-0bf7ff30",null).exports},data:function(){return{todos:["Intro","What I Do","Who I Am","My Work"]}},methods:{scrollTo:function(t){var e=document.getElementById("toggle").getElementsByClassName("hamburger-box")[0],s=document.getElementById("header");window.innerWidth<=500&&e.classList.contains("is-active")&&($navcollapse.classList.remove("mw-cur"),e.classList.remove("is-active"));var a=window.innerHeight*t-(t-1)*s.clientHeight;TweenMax.to(window,1,{scrollTo:{y:a}})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{attrs:{id:"navbar",role:"navigation"}},[s("ul",t._l(t.todos,function(e,a){return s("navitem",{key:e.id,attrs:{title:e},on:{scrollto:function(e){t.scrollTo(a)}}})}))])},staticRenderFns:[]};var c={name:"loader"},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"loader"}},[e("svg",{staticStyle:{fill:"none",stroke:"#000"},attrs:{version:"1.1",id:"logo-icon",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 205.3 93.6","xml:space":"preserve",display:"none"}},[e("path",{staticClass:"st0",attrs:{d:"M33.1,0.7c-2.9,0.9-5.8,2.2-8.8,2.5c-1.9,0.2-4.3-1-6.1-0.1c-4,2.1-0.5,3.3,2,4.6c7.3,3.9,14.2,9.8,22.8,9.5\n  c5.7-0.2,19-2.8,12.5-10.7C51,1.1,39.5-1.3,33.1,0.7z"}}),this._v(" "),e("path",{staticClass:"st0",attrs:{d:"M47.6,37.3c-7,4.5-15.7,5.6-23.7,6.6c-2.7,0.4-11.7-1-8.8,2.7c2.7,3.4,10.6,2.3,13.7,4.8\n   c5.6,4.7-4.6,6.6-3.4,8.7c0.1,0.2,20.7-6.5,22.5-7c12.6,1,17-2.7,13.3-11.1C59.1,40.8,50.1,35.7,47.6,37.3z"}}),this._v(" "),e("path",{staticClass:"st0",attrs:{d:"M6,79.4c-2.4,1-5.7,2.8-5.9,5.7c-0.5,6.4,1.4,1,1.7,0.9c3.2-1.3,2.5-2.3,6.5-0.4c2.5,1.2,4.6,2.9,7,4\n  c8,3.6,15.8,4,24.3,2.9c2.8-0.4,14.6,1.4,15.9-2.3c-1.7,4,0.5,3.2,4.1,3.4c2.6,0.1,5.7,0.4,8.3-0.1c1.4-0.3,9.4-3,9.3-3\n  c0.2-0.1-7.6-7.4-8.7-8c-6.9-4.1-15.1-1.6-22.6-1.2C44,81.4,3.6,86.9,6.5,79.2C6.8,78.9,7.2,78.5,6,79.4z"}}),this._v(" "),e("path",{staticClass:"st0",attrs:{d:"M104.4,24.6c-2.8,2,2.2,20.1,2.6,23.6c0.4,3.4,1.3,6.9,1.2,10.4c-0.1,2.1-1.6,5.2-0.9,7.3\n  c2,5.4,5.3,0.4,8.2-2.1c8.3-7.2,11.1-17,4.1-26.3C118,35.2,107.6,22.2,104.4,24.6z"}}),this._v(" "),e("path",{staticClass:"st0",attrs:{d:"M153.1,28.8c-7.8,2-3.8,19.5-3,24.7c0.5,3.3,1,6.5,0.9,9.9c-0.1,4.1-1.9,11.2,0.3,15.1c2.9,5.1,7.2,0.3,9-3.7\n  c2.8-6.3-0.3-13.3-1.7-19.7c-1.2-6-2.3-10.8-2.2-16.9C156.5,36,157.2,27.7,153.1,28.8z"}}),this._v(" "),e("path",{staticClass:"st0",attrs:{d:"M187.2,18c-9.2,3.9,2.1,25.9,4,31.8c2,6,1.6,26.3,8.1,28.7c6.1,2.3,6.3-9.6,6-12.9c-0.8-7.3-4.5-14.2-6.7-21.2\n   C197.6,41.6,190.4,16.6,187.2,18z"}})])])},staticRenderFns:[]};var o={name:"toggle",methods:{initToggle:function(){var t=document.getElementById("toggle"),e=document.getElementById("navbar");t.getElementsByClassName("hamburger-box")[0].classList.contains("is-active")?(e.classList.remove("mw-cur"),t.getElementsByClassName("hamburger-box")[0].classList.remove("is-active")):(e.classList.add("mw-cur"),t.getElementsByClassName("hamburger-box")[0].classList.add("is-active"))}}},h={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"hamburger",attrs:{href:"javascript:;",id:"toggle"},on:{click:this.initToggle}},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hamburger-box hamburger--emphatic"},[e("span",{staticClass:"hamburger-inner"})])}]};var m={name:"intro",methods:{initFa:function(){TweenMax.to(window,1,{scrollTo:{y:window.innerHeight}})}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main style1 fullscreen",attrs:{id:"intro"}},[e("div",{staticClass:"content"},[this._m(0),this._v(" "),e("footer",[e("a",{staticClass:"fa fa-hand-o-down fa-2x",attrs:{href:"javascript:;"},on:{click:this.initFa}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{attrs:{id:"hello"}},[e("div",{staticClass:"sayhello"}),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"saywelcome"})])}]};var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main style2 right dark fullscreen",attrs:{id:"one"}},[e("div",{staticClass:"content box style2",attrs:{id:"box1"}},[e("header",[e("h2",[this._v("Who I Am")])]),this._v(" "),e("p",[this._v("A font-end developer with 2+ years of professional experience, based in Beijing")])])])}]};var f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main style2 left dark fullscreen",attrs:{id:"two"}},[s("div",{staticClass:"content box style2",attrs:{id:"box2"}},[s("header",[s("h2",[t._v("What I Do")])]),t._v(" "),s("p",[t._v("\n      Working closely with designers and back-end engineers, as a sole front-end or in "),s("strong",[t._v("Agile")]),t._v(" teams.\n    ")]),t._v(" "),s("div",{staticClass:"skills"},[s("p",[s("strong",[t._v("Skills:")])]),t._v(" "),s("ul",{staticClass:"half"},[s("li",[t._v("HTML5")]),t._v(" "),s("li",[t._v("CSS")]),t._v(" "),s("li",[t._v("JavaScript")]),t._v(" "),s("li",[t._v("Git")])]),t._v(" "),s("ul",{staticClass:"half"},[s("li",[t._v("Gulp")]),t._v(" "),s("li",[t._v("Webpack")]),t._v(" "),s("li",[t._v("Canvas")]),t._v(" "),s("li",[t._v("WebGL")])])]),t._v(" "),s("p",[t._v("\n      Taking advantage of my development knowledge I can find the best way to make a layout "),s("strong",[t._v("reliable and consistent")]),t._v(".\n    ")])])])}]};var u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main style3 primary",attrs:{id:"work"}},[s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"gallery"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("article",{staticClass:"article more"},[s("a",{staticClass:"image fit",attrs:{href:"https://github.com/Sanchez3/MyProject/"}},[s("div",{staticClass:"image-container"},[s("svg",{attrs:{id:"minfinite",width:"100%",height:"100%",viewBox:"0 0 188 94",preserveAspectRatio:"xMidYMid meet"}},[s("path",{attrs:{stroke:"#fff",id:"outline",fill:"none","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1                c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}}),t._v(" "),s("path",{attrs:{id:"outline-bg",opacity:"0.3",fill:"none",stroke:"#fff","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"             M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1               c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}})])]),t._v(" "),t._m(10)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",[this._v("My Work")]),this._v(" "),e("p",[this._v("What I do, Technical Part")]),this._v(" "),e("p",[this._v("Use Chrome DevTools, Toggle Device Mode Or Wechat")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"https://tm24.lxustudio.cn/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("jdib"),title:"音乐,国潮行动",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("声援小美好"),e("br"),this._v("我的夏之声")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"https://lxunogodie.applinzi.com/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("DwyA"),title:"AR, 布狗袋",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("AR封印已开，"),e("br"),this._v("布狗袋宝物显灵啦！")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"http://tpro.lxustudio.cn/pet/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("jGBG"),title:"北美进口天然宠物粮",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("Breaking News")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"https://qzs.qzone.qq.com/qzone/qzact/act/external/qqx_116/qqx_1116/dist/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("9f8+"),title:"QQ-X南极",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("地球最后的净土，"),e("br"),this._v("我在南极等你加入")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"http://nbfuel.lxustudio.cn/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("IdFV"),title:"New Balance Fuel",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("欧阳靖的Battle，"),e("br"),this._v("你敢接吗？")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"http://100.kappa.com.cn/video/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("nOZ5"),title:"Kappa",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("GD教你穿Kappa")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"http://omgmkt.qq.com/babysiri/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("WYPf"),title:"放开我北鼻",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("baby siri")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"http://fact.news.qq.com/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("dB5s"),title:"事实派",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("让事实发声")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"article"},[e("a",{staticClass:"image fit",attrs:{href:"http://omgmkt.qq.com/sport/"}},[e("div",{staticClass:"image-container"},[e("img",{attrs:{src:s("OKdZ"),title:"腾讯体育NBA",alt:""}})]),this._v(" "),e("h6",[e("span",[this._v("让你在现场")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",[e("span",[this._v("More")])])}]};var _={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{attrs:{id:"footer"}},[e("ul",{staticClass:"actions"},[e("li",[e("a",{staticClass:"fa fa-linkedin",attrs:{href:"https://www.linkedin.com/in/sanchuan-liu-b19012139/",alt:"LinkedIn"}})]),this._v(" "),e("li",[e("a",{staticClass:"fa fa-github",attrs:{href:"https://github.com/Sanchez3",alt:"Github"}})]),this._v(" "),e("li",[e("a",{staticClass:"fa fa-weixin",attrs:{href:"./static/WeChat.jpg",alt:"Wechat"}})]),this._v(" "),e("li",[e("a",{staticClass:"fa fa-envelope",attrs:{href:"mailto:sanchezliu003@gmail.com",alt:"mail"}})])]),this._v(" "),e("ul",{staticClass:"menu"},[e("li",[this._v("© 2018 SanchezLiu")]),this._v(" "),e("li",{attrs:{id:"busuanzi_container_site_pv"}},[e("span",{attrs:{id:"busuanzi_value_site_pv"}}),this._v(" Hits")])])])}]};var p={name:"App",components:{navbar:s("VU/8")(n,r,!1,function(t){s("66Gh")},"data-v-5d547ee4",null).exports,loader:s("VU/8")(c,l,!1,function(t){s("1QPb")},"data-v-5069e268",null).exports,toggle:s("VU/8")(o,h,!1,function(t){s("gM3D")},"data-v-7713cf5b",null).exports,intro:s("VU/8")(m,d,!1,function(t){s("rjoi"),s("s+HA")},"data-v-ca5e1cb2",null).exports,one:s("VU/8")({name:"one"},v,!1,function(t){s("p0TK"),s("f5po")},"data-v-54e58f92",null).exports,two:s("VU/8")({name:"two"},f,!1,function(t){s("Vdg9")},"data-v-4f67a396",null).exports,work:s("VU/8")({name:"work"},u,!1,function(t){s("sq5T")},"data-v-20091846",null).exports,myfooter:s("VU/8")({name:"Footer"},_,!1,function(t){s("asyp")},"data-v-2f522cd8",null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header",{attrs:{id:"header"}},[e("navbar"),this._v(" "),e("loader"),this._v(" "),e("toggle")],1),this._v(" "),e("intro"),this._v(" "),e("one"),this._v(" "),e("two"),this._v(" "),e("work"),this._v(" "),e("myfooter")],1)},staticRenderFns:[]};var C=s("VU/8")(p,g,!1,function(t){s("VS34")},null,null).exports,w=(s("oPmM"),s("TrPR"),s("Jn6l")),y=s.n(w),b=s("bHyG"),x=s.n(b),k=s("R5/K"),E=(s("aykR"),s("njrj")),T=s.n(E),B=s("A8vr"),M=s.n(B);s("wLfy");a.a.config.productionTip=!1;var $=new a.a({el:"#app",components:{App:C},template:"<App/>",methods:{initScroll:function(){var t=new M.a.Controller;new M.a.Scene({triggerElement:"#one"}).addTo(t).setClassToggle("#box1","movein"),new M.a.Scene({triggerElement:"#two"}).setClassToggle("#box2","movein").addTo(t);var e=document.getElementById("work").getElementsByClassName("article"),s=k.TweenMax.staggerTo(e,2,{left:0,ease:k.Power2.easeOut},.2);new M.a.Scene({triggerElement:"#work"}).setTween(s).addTo(t)},initLoader:function(){var t=new y.a("logo-icon",{onReady:function(t){t.el.setAttribute("display","block")},type:"oneByOne",duration:10,animTimingFunction:y.a.EASE},function(){t.stop().reset().play(1)}),e=new x.a(document.getElementById("app"),{background:!0});e.on("always",function(t){console.log("all images loaded")}),e.on("done",function(e){console.log("all images successfully loaded"),"progress"===t.getStatus()&&(t.callback=function(){t.stop(),window.scrollTo(0,0),k.TweenMax.fromTo(".st0",1,{fill:"#FFF"},{fill:"#000",onComplete:function(){k.TweenMax.to("#header",.5,{height:"3rem",onComplete:function(){document.getElementById("navbar").classList.add("cur"),document.getElementById("toggle").classList.add("cur")}}),k.TweenMax.to(document.getElementById("loader"),.5,{height:"2.4rem",margin:"auto 0.5rem"})}})})}),e.on("fail",function(t){console.log("all images loaded, at least one is broken")})},initType:function(){new T.a(".sayhello",{strings:["<h2>Aloha!</h2>"],typeSpeed:30,loop:!1,onComplete:function(){document.getElementsByClassName("typed-cursor")[0].style.display="none",new T.a(".saywelcome",{strings:["<p>Welcome to <b>My Website!<b></p>"],typeSpeed:50,loop:!1,onComplete:function(){document.getElementsByClassName("fa-hand-o-down")[0].style.display="block"}})}})}}});$.initLoader(),$.initType(),$.initScroll()},OKdZ:function(t,e,s){t.exports=s.p+"static/img/04.9cdf4b0.jpg"},TrPR:function(t,e){},VS34:function(t,e){},Vdg9:function(t,e){},WYPf:function(t,e,s){t.exports=s.p+"static/img/03.492aca8.jpg"},asyp:function(t,e){},dB5s:function(t,e,s){t.exports=s.p+"static/img/07.16248dd.jpg"},f5po:function(t,e){},gM3D:function(t,e){},jGBG:function(t,e,s){t.exports=s.p+"static/img/05.704447c.jpg"},jdib:function(t,e,s){t.exports=s.p+"static/img/08.4f584f9.jpg"},nOZ5:function(t,e,s){t.exports=s.p+"static/img/02.16ca77b.jpg"},oPmM:function(t,e){},p0TK:function(t,e){},rjoi:function(t,e){},"s+HA":function(t,e){},sq5T:function(t,e){},vNjv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4703e131a4dded5a06c1.js.map