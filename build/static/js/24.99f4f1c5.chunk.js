(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{368:function(e,t,n){"use strict";var a=n(29),r=n(377),i=n.n(r),c=n(371),o=n.n(c),u=n(114),s=n.n(u),l=n(79),d=n(52),f=n(113),g=o.a.create();g.defaults.timeout=f.a.timeout,g.interceptors.request.use(function(e){var t=Object(d.a)("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)}),g.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(parseInt(e.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:l.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(e)});var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(e,Object(a.a)({},n,{params:t}))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(e,t,n)};n.d(t,"m",function(){return v}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return b}),n.d(t,"u",function(){return E}),n.d(t,"j",function(){return x}),n.d(t,"o",function(){return k}),n.d(t,"b",function(){return w}),n.d(t,"i",function(){return L}),n.d(t,"l",function(){return C}),n.d(t,"s",function(){return j}),n.d(t,"t",function(){return O}),n.d(t,"n",function(){return P}),n.d(t,"p",function(){return _}),n.d(t,"v",function(){return T}),n.d(t,"a",function(){return N}),n.d(t,"d",function(){return B}),n.d(t,"q",function(){return I}),n.d(t,"h",function(){return A}),n.d(t,"g",function(){return S}),n.d(t,"k",function(){return R}),n.d(t,"r",function(){return D});var m="";m="/client/";t.c={login:function(e){return h("".concat(m,"user/login"),i.a.stringify(e))},getOrderList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/order/getOrderList"),e,t)},hotProducts:function(){return p("hotProducts")},getProductCateList:function(e){return p("getProductCateList",{type:e})},getProductByCate:function(e,t){return p("getProductByCate",{type:e,cate:t})},getProductById:function(e){return p("getProductById",{id:e})},getHotsell:function(){return p("hotsell")},getRechargePhoneProductsByType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/product/subList"),{productClassifyId:e},t)},getRechargeFlowProductsByType:function(e){return p("getRechargeFlowProductsByType",{type:e})},getRechargeOilProductsByType:function(e){return p("getRechargeOilProductsByType",{type:e})},getRechargeQBProductsByType:function(e){return p("getRechargeQBProductsByType",{type:e})},getVideoProviders:function(){return p("getVideoProviders")},getVideoProducts:function(){return p("getVideoProducts")},confirmTransPswd:function(e){return h("".concat(m,"api/trad/checkCode"),{pswd:e})},rechargePhone:function(e){return h("".concat(m,"api/charge/moreCredit"),i.a.stringify(e))},rechargeQB:function(e){return h("".concat(m,"api/charge/moreCredit"),i.a.stringify(e))},rechargeTraffic:function(e){return h("".concat(m,"api/traffic/charge"),i.a.stringify(e))},rechargeOil:function(e){return h("".concat(m,"api/oilCard/charge"),i.a.stringify(e))},rechargeVideo:function(e){return h("".concat(m,"api/video/charge"),i.a.stringify(e))},rechargeVoucher:function(e){return h("".concat(m,"api/voucher/charge"),i.a.stringify(e))},getBankcardList:function(){return p("".concat(m,"api/bank/getBankCardList"))},addBankcard:function(e){return h("".concat(m,"api/bank/addBankCard"),i.a.stringify(e))},getRedeemFee:function(e){return p("".concat(m,"api/trad/poundageList"),{amount:e})},sendMsgCode:function(e){return p("sendMsgCode",{phone:e})},redeemIntegral:function(e){return h("".concat(m,"api/trad/withdrawal"),i.a.stringify(e))},getRedeemRecordByStatus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/trad/getWithList"),e,t)},getCode:function(e){return h("".concat(m,"user/getCode"),i.a.stringify(e))},getCreditCardList:function(){return p("getCreditCardList")},creditCardRepayment:function(e){return h("creditCardRepayment",e)},transfer:function(e){return h("transfer",e)},getECardList:function(){return p("getECardList")},getECardDetailByType:function(){return p("getECardDetailByType")},addVehicle:function(e){return h("addVehicle",e)},getVehicleList:function(){return p("getVehicleList")},getViolationList:function(){return p("getViolationList")},getUserInfo:function(){return p("".concat(m,"api/user/getUserInfo"))}};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/user/getUserInfo"),e,t)},y=function(e){return h("".concat(m,"user/getCode"),i.a.stringify(e))},b=function(e){var t={userPhoneNo:e,codeType:3};return h("".concat(m,"user/getCode"),i.a.stringify(t))},E=function(e){return h("".concat(m,"api/trad/withdrawal"),i.a.stringify(e))},x=function(e){return p("".concat(m,"api/trad/poundageList"),{amount:e})},k=function(e){return p("".concat(m,"api/trad/poundageList"),{amount:e})},w=function(e){return h("".concat(m,"user/changePwd"),i.a.stringify(e))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"product/list"),{productClassifyId:e},t)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/product/subList"),{productClassifyId:e},t)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{chargeType:1});return h("".concat(m,"api/video/charge"),i.a.stringify(n),t)},O=function(e){return h("".concat(m,"api/voucher/charge"),i.a.stringify(e))},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:f.a.voucher.PAGE_LIMIT});return p("".concat(m,"api/voucher/list"),n,t)},_=function(e){return h("".concat(m,"api/transferred/commit"),i.a.stringify(e))},T=function(e,t){var n=Object(a.a)({},e,{limit:f.a.redeem.PAGE_LIMIT});return p("".concat(m,"api/transferred/list"),n,t)},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h("".concat(m,"api/bank/addBankCard"),i.a.stringify(e))},B=function(){return p("".concat(m,"api/bank/getBankCardList"))},I=function(e){return h("".concat(m,"api/trad/withdrawal"),i.a.stringify(e))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:f.a.order.PAGE_LIMIT});return p("".concat(m,"api/order/getOrderList"),n,t)};function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:f.a.creditRecord.PAGE_LIMIT,payment:2});return p("".concat(m,"api/trad/getWithList"),n,t)}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:f.a.redeem.PAGE_LIMIT,payment:1});return p("".concat(m,"api/trad/getWithList"),n,t)};function D(e){var t=Object(a.a)({},e,{chargeType:1});return h("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))}},369:function(e,t,n){"use strict";var a=n(366),r=n(1),i=n.n(r),c=n(367),o=n(540),u=n(370),s=n.n(u);function l(){var e=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n"]);return l=function(){return e},e}function d(){var e=Object(a.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return d=function(){return e},e}function f(){var e=Object(a.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return e},e}var g=c.a.div(f()),p=c.a.div(d()),h=c.a.img(l());t.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(h,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},370:function(e,t,n){e.exports=n.p+"static/media/home.73f12746.svg"},373:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},376:function(e,t,n){"use strict";var a=n(366),r=n(1),i=n.n(r),c=n(367),o=n(378),u=n.n(o);function s(){var e=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return e},e}var l=c.a.div(s());t.a=function(){return i.a.createElement(l,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},378:function(e,t,n){e.exports=n.p+"static/media/empty.8103a6b5.svg"},380:function(e,t,n){"use strict";var a=n(366),r=n(1),i=n.n(r);function c(){var e=Object(a.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return e},e}var o=n(367).a.div(c());t.a=function(e){for(var t=e.count,n=void 0===t?1:t,a=[],r=0;r<n;r++)a.push(i.a.createElement("div",{key:r,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,a)}},382:function(e,t,n){"use strict";var a=n(57),r=n(58),i=function(){function e(t,n){Object(a.a)(this,e),this.container=t,this.callback=n,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(e,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),e}();t.a=i},383:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return a})},558:function(e,t,n){"use strict";n.r(t);var a=n(374),r=n.n(a),i=n(383),c=n(375),o=n(57),u=n(58),s=n(60),l=n(59),d=n(61),f=n(116),g=n(1),p=n.n(g),h=n(371),m=n.n(h),v=n(373),y=n.n(v),b=n(372),E=n(114),x=n.n(E),k=n(368),w=n(380),L=n(369),C=n(366);function j(){var e=Object(C.a)(['\n  .page{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;    \n    .page-head{\n      height: 50px;\n    }\n    .page-body{\n      position: relative;\n      flex-grow: 1;\n    }\n  }\n  .wrapper{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;    \n    overflow-y: auto;\n  }\n\n  ul{\n    display: flex;\n    flex-shrink: 0;\n    line-height: 50px;\n    background: #fff;\n    li{\n      flex: 1;\n      text-align: center;\n      transition: all .3s ease;\n      color: #888;\n      &.active{\n        color: #444;\n        font-size: 16px;\n        font-weight: bold;\n      }\n    }\n  }\n\n  .card{\n    background: #fff;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);\n    strong{\n      font-weight: normal;\n      color: #F53415;\n    }\n    &__head{\n      display: flex;\n      justify-content: space-between;\n      position: relative;\n      padding: 15px;\n      &:after{\n        content: "";\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        height: 1px;\n        transform: scaleY(.3);\n        background: #eaeaea;\n      }\n    }\n    &__body{\n      padding: 15px 15px 0 15px;\n    }\n    &__foot{\n      display: flex;\n      justify-content: space-between;\n      font-size: 12px;\n      padding: 15px;\n    }\n    &__title{\n      font-size: 14px;\n      font-weight: bold;\n    }\n    &__status{\n      font-size: 12px;\n    }\n    &__date{\n      color: #7e7e7e;\n    }\n  }\n']);return j=function(){return e},e}var O=n(367).a.div(j()),P=n(154),_=n.n(P),T=n(376),N=function(e){var t=e.toAccount,n=e.poundage,a=e.amount,r=e.num,i=e.createTime;return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card__head"},p.a.createElement("div",{className:"card__title"},"\u8f6c\u8d60\u79ef\u5206")),p.a.createElement("div",{className:"card__body"},p.a.createElement("div",null,"\u60a8\u5411 ",p.a.createElement("strong",null,t)," \u8f6c\u8d60 ",p.a.createElement("strong",null,a)," \u79ef\u5206 \u624b\u7eed\u8d39 ",p.a.createElement("strong",null,n)," \u79ef\u5206 \u5bf9\u65b9\u5b9e\u9645\u6536\u5230 ",p.a.createElement("strong",null,r)," \u79ef\u5206")),p.a.createElement("div",{className:"card__foot"},p.a.createElement("div",{className:"gray"},i)))},B=function(e){var t=e.from,n=e.num,a=e.createTime;return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card__head"},p.a.createElement("div",{className:"card__title"},"\u83b7\u5f97\u79ef\u5206")),p.a.createElement("div",{className:"card__body"},p.a.createElement("div",null,"\u7528\u6237 ",p.a.createElement("strong",null,t)," \u5411\u60a8\u8f6c\u8d60 ",p.a.createElement("strong",null,n)," \u79ef\u5206")),p.a.createElement("div",{className:"card__foot"},p.a.createElement("div",{className:"gray"},a)))},I=function(e){var t=e.items,n=e.type;return t.length?"1"===n?p.a.createElement("div",null,t.map(function(e){return p.a.createElement(N,{key:e.id,amount:e.total,toAccount:e.toAccount,num:e.num,poundage:e.poundage,createTime:_.a.unix(e.createTime).format("YYYY-MM-DD HH:mm:ss")})})):"2"===n?p.a.createElement("div",null,t.map(function(e){return p.a.createElement(B,{key:e.id,amount:e.total,from:e.form,num:e.num,poundage:e.poundage,createTime:_.a.unix(e.createTime).format("YYYY-MM-DD HH:mm:ss")})})):null:p.a.createElement(T.a,null)},A=n(382),S=function(e){var t=e.placeholderLoading,n=e.type,a=e.items;return t?p.a.createElement(w.a,{count:3}):p.a.createElement(I,{items:a,type:n})},R=m.a.CancelToken,D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(f.a)(Object(f.a)(n))),n.loadData=n.loadData.bind(Object(f.a)(Object(f.a)(n))),n.currentPage=0,n.state={type:"1",items:[],placeholderLoading:!0},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.scroll=new A.a(this.wrapper,this.loadData),this.loadData()}},{key:"componentWillUnmount",value:function(){this.scroll.destroy(),this.source&&this.source.cancel("Operation canceled by the user.")}},{key:"loadNextPage",value:function(){var e=Object(c.a)(r.a.mark(function e(t){var n,a,c=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.source=R.source(),e.prev=1,e.next=4,Object(k.v)(t,{cancelToken:this.source.token});case 4:n=e.sent,200===(a=n.data).status&&this.setState({items:[].concat(Object(i.a)(this.state.items),Object(i.a)(a.data))},function(){c.scroll.finish()});case 7:return e.prev=7,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),e.finish(7);case 11:case"end":return e.stop()}},e,this,[[1,,7,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"reset",value:function(){this.currentPage=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"loadData",value:function(){var e={page:this.currentPage++,accessType:this.state.type};this.loading=x.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(e)}},{key:"handleClick",value:function(e){var t=this;e!==this.state.type&&(this.reset(),this.setState({type:e,placeholderLoading:!0},function(){var n={page:t.currentPage++,accessType:e};t.loadNextPage(n)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.placeholderLoading,a=t.items,r=t.type;return p.a.createElement(O,null,p.a.createElement(b.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u79ef\u5206\u8f6c\u8d60\u8bb0\u5f55"}),p.a.createElement("div",{className:"page"},p.a.createElement("div",{className:"page-head"},p.a.createElement("ul",null,p.a.createElement("li",{className:y()({active:"1"===r}),onClick:function(){return e.handleClick("1")}},"\u8f6c\u8d60"),p.a.createElement("li",{className:y()({active:"2"===r}),onClick:function(){return e.handleClick("2")}},"\u83b7\u5f97"))),p.a.createElement("div",{className:"page-body"},p.a.createElement("div",{className:"wrapper",ref:function(t){return e.wrapper=t}},p.a.createElement("div",{className:"scroller"},p.a.createElement("div",{className:"u_px_xxx u_pt_xxx"},p.a.createElement(S,{placeholderLoading:n,items:a,type:r})))))),p.a.createElement(L.a,null))}}]),t}(g.Component);n.d(t,"view",function(){return D})}}]);
//# sourceMappingURL=24.99f4f1c5.chunk.js.map