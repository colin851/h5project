(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1fe2d68"],{"0ba6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-wrap"},[i("div",{staticClass:"login-content"},[i("div",{staticClass:"login-title"},[t._v(t._s(t.pageType[this.paramsType]["title"]))]),i("van-field",{attrs:{"label-align":"right","label-width":"80",type:"tel",label:"手机号"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),i("van-field",{attrs:{"label-align":"right","label-width":"80",center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[i("van-button",{attrs:{size:"small",type:"primary",disabled:t.isDisabled},on:{click:t.sendCode}},[t.isDisabled?t._e():i("span",[t._v(t._s(t.buttonTxt))]),i("van-count-down",{directives:[{name:"show",rawName:"v-show",value:t.isDisabled,expression:"isDisabled"}],ref:"countDown",attrs:{time:t.time,format:"ss","auto-start":!1},on:{finish:t.finish},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{color:"white"}},[t._v(t._s(e.seconds))]),i("span",{staticStyle:{color:"white"}},[t._v("s重新获取")])]}}])})],1)]},proxy:!0}]),model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}}),i("div",{staticStyle:{padding:"20vw 5vw 5vw 5vw"}},[i("van-button",{attrs:{type:"info",block:""},on:{click:t.goIndex}},[t._v("登录")])],1)],1),"manager"==this.paramsType?i("div",{staticClass:"tips-block"},[i("p",[t._v("提示：物管手机需要提前在公租房管理系统中设置")])]):t._e(),"user"==this.paramsType?i("div",{staticClass:"tips-block"},[i("p",[t._v("提示：")]),i("p",[t._v("1、首次登录或未完善个人信息的，登录进入【我的】，提示完善资料")]),i("p",[t._v("2、已完成资料的直接进入【首页】")])]):t._e()])},a=[],s=i("ade3"),o=(i("68ef"),i("40db"),i("d282")),c=i("a142"),r=i("4598"),u=i("68ed"),l=1e3,m=60*l,d=60*m,f=24*d;function h(t){var e=Math.floor(t/f),i=Math.floor(t%f/d),n=Math.floor(t%d/m),a=Math.floor(t%m/l),s=Math.floor(t%l);return{days:e,hours:i,minutes:n,seconds:a,milliseconds:s}}function p(t,e){var i=e.days,n=e.hours,a=e.minutes,s=e.seconds,o=e.milliseconds;if(-1===t.indexOf("DD")?n+=24*i:t=t.replace("DD",Object(u["b"])(i)),-1===t.indexOf("HH")?a+=60*n:t=t.replace("HH",Object(u["b"])(n)),-1===t.indexOf("mm")?s+=60*a:t=t.replace("mm",Object(u["b"])(a)),-1===t.indexOf("ss")?o+=1e3*s:t=t.replace("ss",Object(u["b"])(s)),-1!==t.indexOf("S")){var c=Object(u["b"])(o,3);t=-1!==t.indexOf("SSS")?t.replace("SSS",c):-1!==t.indexOf("SS")?t.replace("SS",c.slice(0,2)):t.replace("S",c.charAt(0))}return t}function b(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}var v,g=Object(o["a"])("count-down"),w=g[0],y=g[1],T=w({props:{millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return h(this.remain)},formattedTime:function(){return p(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:"reset"}},activated:function(){this.keepAlivePaused&&(this.counting=!0,this.keepAlivePaused=!1,this.tick())},deactivated:function(){this.counting&&(this.pause(),this.keepAlivePaused=!0)},beforeDestroy:function(){this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(r["a"])(this.rafId)},reset:function(){this.pause(),this.remain=+this.time,this.autoStart&&this.start()},tick:function(){c["b"]&&(this.millisecond?this.microTick():this.macroTick())},microTick:function(){var t=this;this.rafId=Object(r["c"])((function(){t.counting&&(t.setRemain(t.getRemain()),t.remain>0&&t.microTick())}))},macroTick:function(){var t=this;this.rafId=Object(r["c"])((function(){if(t.counting){var e=t.getRemain();b(e,t.remain)&&0!==e||t.setRemain(e),t.remain>0&&t.macroTick()}}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,this.$emit("change",this.timeData),0===t&&(this.pause(),this.$emit("finish"))}},render:function(){var t=arguments[0];return t("div",{class:y()},[this.slots("default",this.timeData)||this.formattedTime])}}),k=(i("66b9"),i("b650")),D=(i("be7f"),i("565f")),S={components:(v={},Object(s["a"])(v,D["a"].name,D["a"]),Object(s["a"])(v,k["a"].name,k["a"]),Object(s["a"])(v,T.name,T),v),data:function(){return{paramsType:"manager",pageType:{manager:{title:"物业管理",documentTitle:"物管登录"},user:{title:"用户登录",documentTitle:"用户登录"}},tips:"",tel:"",sms:"",isDisabled:!1,buttonTxt:"发送验证码",time:6e4}},created:function(){this.paramsType=this.$route.params.type,document.title=this.pageType[this.paramsType].documentTitle},methods:{sendCode:function(){this.isDisabled=!0,this.$refs.countDown.start()},finish:function(){this.isDisabled=!1},goIndex:function(){"user"==this.paramsType?this.$router.push("/home/house"):this.$router.push("/repair/0")}}},O=S,_=(i("e48b"),i("2877")),x=Object(_["a"])(O,n,a,!1,null,"397e9910",null);e["default"]=x.exports},"40db":function(t,e,i){},4598:function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return u})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return m}));var n=i("a142"),a=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-a)),n=setTimeout(t,i);return a=e+i,n}var o=n["g"]?t:window,c=o.requestAnimationFrame||s,r=o.cancelAnimationFrame||o.clearTimeout;function u(t){return c.call(o,t)}function l(t){u((function(){u(t)}))}function m(t){r.call(o,t)}}).call(this,i("c8ba"))},"8c20":function(t,e,i){},be7f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146")},e48b:function(t,e,i){"use strict";i("8c20")}}]);
//# sourceMappingURL=chunk-e1fe2d68.93ac7af9.js.map