webpackJsonp([0],{"1xTW":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"auto-complete",class:{hidden:t.activeIdx>=0}},[s("input",{staticClass:"text-input",attrs:{placeholder:"Search security"},on:{input:t.handleChange}})]),t._v(" "),t.loaded?t._e():s("svg",{attrs:{viewBox:"0 0 32 32",width:"300",height:"300",fill:"white"}},[s("circle",{attrs:{transform:"translate(8 0)",cx:"0",cy:"16",r:"0"}},[s("animate",{attrs:{attributeName:"r",values:"0; 4; 0; 0",dur:"1.2s",repeatCount:"indefinite",begin:"0",keytimes:"0;0.2;0.7;1",keySplines:"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",calcMode:"spline"}})]),t._v(" "),s("circle",{attrs:{transform:"translate(16 0)",cx:"0",cy:"16",r:"0"}},[s("animate",{attrs:{attributeName:"r",values:"0; 4; 0; 0",dur:"1.2s",repeatCount:"indefinite",begin:"0.3",keytimes:"0;0.2;0.7;1",keySplines:"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",calcMode:"spline"}})]),t._v(" "),s("circle",{attrs:{transform:"translate(24 0)",cx:"0",cy:"16",r:"0"}},[s("animate",{attrs:{attributeName:"r",values:"0; 4; 0; 0",dur:"1.2s",repeatCount:"indefinite",begin:"0.6",keytimes:"0;0.2;0.7;1",keySplines:"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",calcMode:"spline"}})])]),t._v(" "),t.searching?t._e():s("div",{staticClass:"list-card",class:{open:t.activeIdx>=0}},t._l(t.cards,function(e,a){return s("card",{key:a,attrs:{open:t.activeIdx===a,toggleActive:t.toggleActive,idx:a,hidden:t.activeIdx!==a&&t.activeIdx>=0,card:e.security,userSecurity:e.user_security}})})),t._v(" "),s("div",{staticClass:"list-search",style:{searching:t.searching}},t._l(t.searchResults,function(e,a){return s("result",{key:a,attrs:{idx:a,security:e,closeSearch:t.closeSearch}})}))])},i=[],r={render:a,staticRenderFns:i};e.a=r},"5K8K":function(t,e){},"7zPv":function(t,e,s){"use strict";var a=s("mvHQ"),i=s.n(a);e.a={props:{security:Object,closeSearch:Function},methods:{subscribe:function(){var t=this;fetch("/api/user/"+this.$route.params.userId+"/security/",{method:"POST",headers:{"Content-Type":"application/json"},body:i()({securities:[{security_id:this.security.id,amount:700,purchase_date:"2017-07-07",purchase_price:7.95}]})}).then(function(t){return t.json()}).then(function(){t.closeSearch()})}}}},Fs8J:function(t,e,s){"use strict";var a=s("rhdv"),i=s("N/0d"),r=0;e.a={name:"home",components:{Card:a.a,Result:i.a},data:function(){return{activeIdx:-1,cards:[],searchResults:[],searching:!1,resultsLoaded:!0,loaded:!1}},methods:{toggleActive:function(t){this.activeIdx=t},handleChange:function(t){var e=this;""!==t.target.value?(clearTimeout(r),this.searching=!0,r=setTimeout(function(){e.resultsLoaded=!1,fetch("/api/security/?q="+t.target.value).then(function(t){return t.json()}).then(function(t){e.resultsLoaded=!0,e.searchResults=t.securities})},200)):(this.searching=!1,this.resultsLoaded=!0,this.searchResults=[],fetch("/api/user/"+this.$route.params.userId).then(function(t){return t.json()}).then(function(t){e.loaded=!0,e.cards=t.securities}))},closeSearch:function(){this.searching=!1,this.searchResults=[],this.resultsLoaded=!0}},beforeCreate:function(){var t=this;fetch("/api/user/"+this.$route.params.userId+"/security").then(function(t){return t.json()}).then(function(e){t.loaded=!0,t.cards=e.data})}}},Iqdl:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result",on:{click:t.subscribe}},[s("h1",{staticClass:"security-name"},[t._v(t._s(t.security.ticker))]),t._v(" "),s("h3",{staticClass:"family-name"},[t._v(t._s(t.security.fundfamilyname))])])},i=[],r={render:a,staticRenderFns:i};e.a=r},M93x:function(t,e,s){"use strict";function a(t){s("Vkzl")}var i=s("xJD8"),r=s("MTSB"),n=s("VU/8"),c=a,o=n(i.a,r.a,!1,c,null,null);e.a=o.exports},MTSB:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"N/0d":function(t,e,s){"use strict";function a(t){s("5K8K")}var i=s("7zPv"),r=s("Iqdl"),n=s("VU/8"),c=a,o=n(i.a,r.a,!1,c,"data-v-058855b5",null);e.a=o.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("M93x"),r=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},NM0n:function(t,e){},NU23:function(t,e,s){"use strict";var a=s("mvHQ"),i=s.n(a),r=s("EzTC"),n=s.n(r),c=s("XILU"),o=s.n(c);e.a={components:{Datepicker:o.a},data:function(){return{arrows:[0,1,2],dragOff:-200,startPos:0,dragging:!1,total:15,scrolling:!1,scrollBuffer:0,lastScrollPos:{x:0,y:0},gradientDeg:0,date:new Date,price:2}},props:{toggleActive:Function,open:Boolean,idx:Number,hidden:Boolean,card:Object,userSecurity:Object},computed:{cardStyle:function(){return{transform:"translate(0, "+(this.dragOff/3+50)+"px) scale("+(2e3+this.dragOff)/2e3+")","border-radius":Math.min(Math.abs(this.dragOff/10),50)+"px"}},rimStyle:function(){var t=Math.PI,e={x:(1+Math.cos(this.gradientDeg/180*t))/2,y:(1+Math.sin(this.gradientDeg/180*t))/2};return{background:"radial-gradient(at "+100*e.x+"% "+100*e.y+"%, #F29D2C, #FFC127)"}}},methods:{startDrag:function(t){this.dragging=!0;var e=t.changedTouches?t.changedTouches[0]:t;this.startPos=e.pageY,window.addEventListener("mousemove",this.startMove),window.addEventListener("mouseup",this.stopDrag)},startMove:function(t){if(this.dragging){var e=t.changedTouches?t.changedTouches[0]:t,s=e.pageY-this.startPos;this.dragOff=s<-200?s:-200}},stopDrag:function(){window.removeEventListener("mousemove",this.startMove),window.removeEventListener("mouseup",this.stopDrag),this.dragging=!1,this.open&&Math.abs(this.dragOff)>500&&this.toggleActive(-1),n.a.animate(this,{dragOff:-200},{type:n.a.easeOut,duration:500,friction:50})},openThis:function(){this.toggleActive(this.idx)},startScroll:function(t){this.scrolling=!0;var e=t.changedTouches?t.changedTouches[0]:t;this.lastScrollPos={x:e.pageX,y:e.pageY}},doScroll:function(t){if(this.scrolling){var e=t.changedTouches?t.changedTouches[0]:t,s=this.$refs.rimOut.getBoundingClientRect(),a={x:(s.left+s.right)/2,y:(s.top+s.bottom)/2},i=e.pageX-this.lastScrollPos.x,r=e.pageY-this.lastScrollPos.y,n={x:-(this.lastScrollPos.y-a.y),y:this.lastScrollPos.x-a.x},c=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2)),o={x:n.x/c,y:n.y/c};if(this.scrollBuffer+=.05*(o.x*i+o.y*r),this.scrollBuffer>1||this.scrollBuffer<0){var u=Math.floor(this.scrollBuffer);this.total=Math.max(this.total+u,0),this.scrollBuffer-=u}this.lastScrollPos={x:e.pageX,y:e.pageY}}},stopScroll:function(){this.scrolling=!1,this.submitUpdate()},stopPropagate:function(t){t.stopPropagation()},dateSelected:function(t){this.date=new Date(t),this.submitUpdate()},changePrice:function(t){this.price=t.target.value,this.submitUpdate()},submitUpdate:function(){fetch("/api/user/"+this.$route.params.userId+"/security/",{method:"POST",headers:{"Content-Type":"application/json"},body:i()({securities:[{security_id:this.card.security_id,amount:this.total,purchase_date:this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDate(),purchase_price:this.price}]})})}},mounted:function(){var t=this;this.total=this.userSecurity.amount,this.date=new Date(this.userSecurity.date),this.price=this.userSecurity.price,this.$nextTick(function(){setInterval(function(){t.gradientDeg+=1},50)})}}},RkTL:function(t,e){},Vkzl:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),i=s("/ocq"),r=s("lO7g");a.a.use(i.a),e.a=new i.a({routes:[{path:"/:userId",name:"Home",component:r.a}]})},lO7g:function(t,e,s){"use strict";function a(t){s("RkTL")}var i=s("Fs8J"),r=s("1xTW"),n=s("VU/8"),c=a,o=n(i.a,r.a,!1,c,null,null);e.a=o.exports},rhdv:function(t,e,s){"use strict";function a(t){s("NM0n")}var i=s("NU23"),r=s("u1Ge"),n=s("VU/8"),c=a,o=n(i.a,r.a,!1,c,null,null);e.a=o.exports},u1Ge:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card",class:{inactive:!t.open,hidden:t.hidden},style:t.cardStyle,on:{mousedown:t.openThis}},[s("h1",{staticClass:"security-name",class:{inactive:!t.open}},[t._v(t._s(t.card.ticker))]),t._v(" "),s("h3",{staticClass:"family-name"},[t._v(t._s(t.card.fundfamilyname))]),t._v(" "),t.open?s("div",{staticClass:"buy-data"},[s("div",{staticClass:"buy-date"},[s("div",{staticClass:"label"},[t._v("\n        Buy Date\n      ")]),t._v(" "),s("div",{staticClass:"value"},[s("datepicker",{attrs:{value:t.date,"input-class":"input","calendar-class":"calendar"},on:{selected:t.dateSelected}})],1)]),t._v(" "),s("div",{staticClass:"buy-price"},[s("div",{staticClass:"label"},[t._v("\n        Buy Price\n      ")]),t._v(" "),s("div",{staticClass:"value"},[t._v("\n        $ "),s("input",{staticClass:"input-text",domProps:{value:t.price},on:{input:t.changePrice}})])])]):t._e(),t._v(" "),t.open?s("div",{ref:"rimOut",staticClass:"rim-out",style:t.rimStyle,on:{mousedown:t.startScroll,mousemove:t.doScroll,mouseup:t.stopScroll,touchstart:t.startScroll,touchmove:t.doScroll,touchend:t.stopScroll}},[s("div",{staticClass:"rim-in",on:{mousedown:t.stopPropagate}},[s("div",{staticClass:"data"},[s("div",{staticClass:"label"},[t._v("Total")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.total))])])])]):t._e(),t._v(" "),t.open?s("div",{staticClass:"swipe-container",on:{mousedown:t.startDrag,mousemove:t.startMove,mouseup:t.stopDrag,touchstart:t.startDrag,touchmove:t.startMove,touchend:t.stopDrag}},[s("svg",{staticClass:"swipe-up"},t._l(t.arrows,function(e){return s("g",{key:e,staticClass:"line-group"},[s("line",{staticClass:"swipe-line",attrs:{x1:"-40",y1:30+40*e,x2:"0",y2:40*e}}),t._v(" "),s("line",{staticClass:"swipe-line",attrs:{x1:"40",y1:30+40*e,x2:"0",y2:40*e}})])})),t._v(" "),s("div",{staticClass:"swipe-text"},[t._v("see all your securities")])]):t._e()])},i=[],r={render:a,staticRenderFns:i};e.a=r},xJD8:function(t,e,s){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.bfa1fb724ab24b1feae9.js.map