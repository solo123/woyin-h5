(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{368:function(t,e,n){"use strict";var r=n(29),a=n(377),i=n.n(a),c=n(371),o=n.n(c),u=n(114),s=n.n(u),l=n(79),d=n(52),f=n(113),g=o.a.create();g.defaults.timeout=f.a.timeout,g.interceptors.request.use(function(t){var e=Object(d.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),g.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:l.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(t,Object(r.a)({},n,{params:e}))},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(t,e,n)};n.d(e,"m",function(){return v}),n.d(e,"e",function(){return y}),n.d(e,"f",function(){return b}),n.d(e,"u",function(){return x}),n.d(e,"j",function(){return E}),n.d(e,"o",function(){return w}),n.d(e,"b",function(){return k}),n.d(e,"i",function(){return P}),n.d(e,"l",function(){return L}),n.d(e,"s",function(){return O}),n.d(e,"t",function(){return j}),n.d(e,"n",function(){return C}),n.d(e,"p",function(){return T}),n.d(e,"v",function(){return I}),n.d(e,"a",function(){return B}),n.d(e,"d",function(){return N}),n.d(e,"q",function(){return R}),n.d(e,"h",function(){return S}),n.d(e,"g",function(){return A}),n.d(e,"k",function(){return V}),n.d(e,"r",function(){return _});var m="";m="/client/";e.c={login:function(t){return p("".concat(m,"user/login"),i.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/order/getOrderList"),t,e)},hotProducts:function(){return h("hotProducts")},getProductCateList:function(t){return h("getProductCateList",{type:t})},getProductByCate:function(t,e){return h("getProductByCate",{type:t,cate:e})},getProductById:function(t){return h("getProductById",{id:t})},getHotsell:function(){return h("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return h("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return h("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return h("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return h("getVideoProviders")},getVideoProducts:function(){return h("getVideoProducts")},confirmTransPswd:function(t){return p("".concat(m,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return p("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return p("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return p("".concat(m,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return p("".concat(m,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return p("".concat(m,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return p("".concat(m,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return h("".concat(m,"api/bank/getBankCardList"))},addBankcard:function(t){return p("".concat(m,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return h("".concat(m,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return h("sendMsgCode",{phone:t})},redeemIntegral:function(t){return p("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/trad/getWithList"),t,e)},getCode:function(t){return p("".concat(m,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return h("getCreditCardList")},creditCardRepayment:function(t){return p("creditCardRepayment",t)},transfer:function(t){return p("transfer",t)},getECardList:function(){return h("getECardList")},getECardDetailByType:function(){return h("getECardDetailByType")},addVehicle:function(t){return p("addVehicle",t)},getVehicleList:function(){return h("getVehicleList")},getViolationList:function(){return h("getViolationList")},getUserInfo:function(){return h("".concat(m,"api/user/getUserInfo"))}};var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/user/getUserInfo"),t,e)},y=function(t){return p("".concat(m,"user/getCode"),i.a.stringify(t))},b=function(t){var e={userPhoneNo:t,codeType:3};return p("".concat(m,"user/getCode"),i.a.stringify(e))},x=function(t){return p("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},E=function(t){return h("".concat(m,"api/trad/poundageList"),{amount:t})},w=function(t){return h("".concat(m,"api/trad/poundageList"),{amount:t})},k=function(t){return p("".concat(m,"user/changePwd"),i.a.stringify(t))},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"product/list"),{productClassifyId:t},e)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/product/subList"),{productClassifyId:t},e)},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{chargeType:1});return p("".concat(m,"api/video/charge"),i.a.stringify(n),e)},j=function(t){return p("".concat(m,"api/voucher/charge"),i.a.stringify(t))},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.voucher.PAGE_LIMIT});return h("".concat(m,"api/voucher/list"),n,e)},T=function(t){return p("".concat(m,"api/transferred/commit"),i.a.stringify(t))},I=function(t,e){var n=Object(r.a)({},t,{limit:f.a.redeem.PAGE_LIMIT});return h("".concat(m,"api/transferred/list"),n,e)},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p("".concat(m,"api/bank/addBankCard"),i.a.stringify(t))},N=function(){return h("".concat(m,"api/bank/getBankCardList"))},R=function(t){return p("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.order.PAGE_LIMIT});return h("".concat(m,"api/order/getOrderList"),n,e)};function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.creditRecord.PAGE_LIMIT,payment:2});return h("".concat(m,"api/trad/getWithList"),n,e)}var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.redeem.PAGE_LIMIT,payment:1});return h("".concat(m,"api/trad/getWithList"),n,e)};function _(t){var e=Object(r.a)({},t,{chargeType:1});return p("".concat(m,"api/charge/moreCredit"),i.a.stringify(e))}},369:function(t,e,n){"use strict";var r=n(366),a=n(1),i=n.n(a),c=n(367),o=n(540),u=n(370),s=n.n(u);function l(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return l=function(){return t},t}function d(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return d=function(){return t},t}function f(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var g=c.a.div(f()),h=c.a.div(d()),p=c.a.img(l());e.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(h,null,i.a.createElement(p,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},370:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},376:function(t,e,n){"use strict";var r=n(366),a=n(1),i=n.n(a),c=n(367),o=n(378),u=n.n(o);function s(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var l=c.a.div(s());e.a=function(){return i.a.createElement(l,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},378:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},380:function(t,e,n){"use strict";var r=n(366),a=n(1),i=n.n(a);function c(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=n(367).a.div(c());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,r=[],a=0;a<n;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,r)}},382:function(t,e,n){"use strict";var r=n(57),a=n(58),i=function(){function t(e,n){Object(r.a)(this,t),this.container=e,this.callback=n,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(a.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();e.a=i},383:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},557:function(t,e,n){"use strict";n.r(e);var r=n(374),a=n.n(r),i=n(383),c=n(375),o=n(57),u=n(58),s=n(60),l=n(59),d=n(61),f=n(116),g=n(1),h=n.n(g),p=n(371),m=n.n(p),v=n(372),y=n(114),b=n.n(y),x=n(368),E=n(380),w=n(366);function k(){var t=Object(w.a)(["\n  .page{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;    \n    .page-head{\n      height: 50px;\n    }\n    .page-body{\n      position: relative;\n      flex-grow: 1;\n    }\n  }\n  .wrapper{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;    \n    overflow-y: auto;\n  }\n  .selecter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 50px;\n    background: #fff;\n    img{\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      transition: transform .3s;\n      &.active{\n        transform: rotate(180deg);\n      }\n    }\n  }\n  .card{\n    border-radius: 3px;\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px;\n    .head{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 10px;\n      .title{\n        font-size: 16px;\n        font-weight: bold;\n      }\n      .subtitle{\n        color: #888;\n      }\n    }\n    dl{\n      display: flex;\n      dt{\n        color: #888;\n      }\n    }\n    .date{\n      color: #888;\n      font-size: 12px;\n      text-align: right;\n      padding-top: 5px;\n    }\n  }\n"]);return k=function(){return t},t}var P=n(367).a.div(k()),L=n(369),O=n(382),j=n(117),C=n(376);function T(t){var e=t.amount,n=t.voucherId,r=t.voucherPwd,a=t.expireTime;return h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"head"},h.a.createElement("div",{className:"title"},"\u4eac\u4e1cE\u53611"),h.a.createElement("div",{className:"subtitle"},"100\u79ef\u5206")),h.a.createElement("dl",null,h.a.createElement("dt",null,"\u5361\u53f7\uff1a"),h.a.createElement("dd",null,n)),h.a.createElement("dl",null,h.a.createElement("dt",null,"\u5bc6\u7801\uff1a"),h.a.createElement("dd",null,r)),h.a.createElement("dl",null,h.a.createElement("dt",null,"\u9762\u503c\uff1a"),h.a.createElement("dd",null,e,"\u5143")),h.a.createElement("div",{className:"date"},"\u6709\u6548\u671f\u81f3\uff1a",a))}var I=function(t){var e=t.items;return e.length?h.a.createElement("div",null,e.map(function(t){return h.a.createElement(T,{key:t.buyOrderId,amount:t.amount,voucherId:t.voucherId,voucherPwd:t.voucherPwd,expireTime:j.a.formatTimestamp(t.expireTime),productName:t.productName})})):h.a.createElement(C.a,null)},B=function(t){var e=t.placeholderLoading,n=t.items;return e?h.a.createElement(E.a,{count:3}):h.a.createElement(I,{items:n})},N=m.a.CancelToken,R=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).loadData=n.loadData.bind(Object(f.a)(Object(f.a)(n))),n.currentPage=0,n.state={items:[],placeholderLoading:!0},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.scroll=new O.a(this.wrapper,this.loadData);var t={page:this.currentPage++};this.loadNextPage(t)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy(),this.source&&this.source.cancel("Operation canceled by the user.")}},{key:"loadNextPage",value:function(){var t=Object(c.a)(a.a.mark(function t(e){var n,r,c=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.source=N.source(),t.prev=1,t.next=4,Object(x.n)(e);case 4:n=t.sent,200===(r=n.data).status&&this.setState({items:[].concat(Object(i.a)(this.state.items),Object(i.a)(r.data))},function(){c.scroll.finish()});case 7:return t.prev=7,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),t.finish(7);case 11:case"end":return t.stop()}},t,this,[[1,,7,11]])}));return function(e){return t.apply(this,arguments)}}()},{key:"reset",value:function(){this.currentPage=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"loadData",value:function(){var t={page:this.currentPage++};this.loading=b.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"render",value:function(){var t=this,e=this.state,n=e.items,r=e.placeholderLoading;return h.a.createElement(P,null,h.a.createElement(v.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u7535\u5b50\u5361\u5238"}),h.a.createElement("div",{className:"page"},h.a.createElement("div",{className:"page-body"},h.a.createElement("div",{className:"wrapper",ref:function(e){return t.wrapper=e}},h.a.createElement("div",{className:"scroller"},h.a.createElement("div",{className:"u_px_xxx u_pt_xxx"},h.a.createElement(B,{items:n,placeholderLoading:r})))))),h.a.createElement(L.a,null))}}]),e}(g.Component);n.d(e,"view",function(){return R})}}]);
//# sourceMappingURL=16.37077cce.chunk.js.map