(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{371:function(t,n,e){"use strict";var a=e(115),r=e(0),i=e.n(r),c=e(116),o=e(542),d=e(373),u=e.n(d);function s(){var t=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return t},t}function l(){var t=Object(a.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return t},t}function f(){var t=Object(a.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var p=c.a.div(f()),g=c.a.div(l()),h=c.a.img(s());n.a=function(){return i.a.createElement(p,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(g,null,i.a.createElement(h,{src:u.a,alt:"\u56de\u5230\u9996\u9875"}))))}},372:function(t,n,e){"use strict";var a=e(46),r=e(381),i=e.n(r),c=e(379),o=e.n(c),d=e(374),u=e.n(d),s=e(118),l=e.n(s),f=e(81),p=e(32),g=e(117),h=u.a.create();h.defaults.timeout=g.a.timeout,h.interceptors.request.use(function(t){var n=Object(p.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},e,{params:n}))},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"A",function(){return k}),e.d(n,"l",function(){return j}),e.d(n,"m",function(){return O}),e.d(n,"M",function(){return x}),e.d(n,"x",function(){return C}),e.d(n,"C",function(){return E}),e.d(n,"w",function(){return I}),e.d(n,"z",function(){return L}),e.d(n,"B",function(){return T}),e.d(n,"D",function(){return N}),e.d(n,"O",function(){return A}),e.d(n,"a",function(){return B}),e.d(n,"k",function(){return S}),e.d(n,"E",function(){return R}),e.d(n,"v",function(){return D}),e.d(n,"n",function(){return V}),e.d(n,"y",function(){return M}),e.d(n,"H",function(){return F}),e.d(n,"I",function(){return G}),e.d(n,"J",function(){return _}),e.d(n,"G",function(){return H}),e.d(n,"K",function(){return U}),e.d(n,"L",function(){return Y}),e.d(n,"c",function(){return J}),e.d(n,"h",function(){return W}),e.d(n,"d",function(){return z}),e.d(n,"i",function(){return Q}),e.d(n,"N",function(){return q}),e.d(n,"f",function(){return K}),e.d(n,"o",function(){return X}),e.d(n,"s",function(){return Z}),e.d(n,"r",function(){return $}),e.d(n,"j",function(){return tt}),e.d(n,"b",function(){return nt}),e.d(n,"p",function(){return et}),e.d(n,"g",function(){return at}),e.d(n,"F",function(){return rt}),e.d(n,"q",function(){return it}),e.d(n,"t",function(){return ct}),e.d(n,"u",function(){return ot});var w="";w="/client/";var P=String((new Date).getTime()),k=(n.e={login:function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:o()(t.password)})),b("".concat(w,"user/login"),i.a.stringify(t))},getOrderList:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w,"api/order/getOrderList"),t,n)},hotProducts:function(){return m("hotProducts")},getProductCateList:function(t){return m("getProductCateList",{type:t})},getProductByCate:function(t,n){return m("getProductByCate",{type:t,cate:n})},getProductById:function(t){return m("getProductById",{id:t})},getHotsell:function(){return m("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w,"api/product/subList"),{productClassifyId:t},n)},getRechargeFlowProductsByType:function(t){return m("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return m("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return m("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return m("getVideoProviders")},getVideoProducts:function(){return m("getVideoProducts")},confirmTransPswd:function(t){return b("".concat(w,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return b("".concat(w,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return b("".concat(w,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return b("".concat(w,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return b("".concat(w,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return m("".concat(w,"api/bank/getBankCardList"))},addBankcard:function(t){return b("".concat(w,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return m("".concat(w,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return m("sendMsgCode",{phone:t})},redeemIntegral:function(t){return b("".concat(w,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w,"api/trad/getWithList"),t,n)},getCode:function(t){return b("".concat(w,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return m("getCreditCardList")},creditCardRepayment:function(t){return b("creditCardRepayment",t)},transfer:function(t){return b("transfer",t)},getECardList:function(){return m("getECardList")},getECardDetailByType:function(){return m("getECardDetailByType")},addVehicle:function(t){return b("addVehicle",t)},getVehicleList:function(){return m("getVehicleList")},getViolationList:function(){return m("getViolationList")},getUserInfo:function(){return m("".concat(w,"api/user/getUserInfo"))}},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w,"api/user/getUserInfo"),t,n)}),j=function(t){return b("".concat(w,"user/getCode"),i.a.stringify(t))},O=function(t){var n={userPhoneNo:t,codeType:3};return b("".concat(w,"user/getCode"),i.a.stringify(n))},x=function(t){return t=Object(a.a)({},t,{tradPwd:o()(t.tradPwd)}),b("".concat(w,"api/trad/withdrawal"),i.a.stringify(t))},C=function(t){return m("".concat(w,"api/trad/poundageList"),{amount:t})},E=function(t){return m("".concat(w,"api/trad/poundageList"),{amount:t})},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w,"product/list"),{productClassifyId:t},n)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w,"api/product/subList"),{productClassifyId:t},n)},T=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:g.a.voucher.PAGE_LIMIT});return m("".concat(w,"api/voucher/list"),e,n)},N=function(t){return t=Object(a.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"api/transferred/commit"),i.a.stringify(t))},A=function(t,n){var e=Object(a.a)({},t,{limit:g.a.redeem.PAGE_LIMIT});return m("".concat(w,"api/transferred/list"),e,n)},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return b("".concat(w,"api/bank/addBankCard"),i.a.stringify(t))},S=function(){return m("".concat(w,"api/bank/getBankCardList"))},R=function(t){return t=Object(a.a)({},t,{tradPwd:o()(t.tradPwd)}),b("".concat(w,"api/trad/withdrawal"),i.a.stringify(t))},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:g.a.order.PAGE_LIMIT});return m("".concat(w,"api/order/getOrderList"),e,n)};function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:g.a.creditRecord.PAGE_LIMIT,payment:2});return m("".concat(w,"api/trad/getWithList"),e,n)}var M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:g.a.redeem.PAGE_LIMIT,payment:1});return m("".concat(w,"api/trad/getWithList"),e,n)};function F(t){var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))}function G(t){var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))}function _(t){var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&phone=").concat(t.phone,"&range=").concat(t.range,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),b("".concat(w,"api/traffic/charge"),i.a.stringify(t))}function H(t){var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),b("".concat(w,"api/oilCard/charge"),i.a.stringify(t))}var U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:P}),b("".concat(w,"api/video/charge"),i.a.stringify(t),n)},Y=function(t){var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),b("".concat(w,"api/voucher/charge"),i.a.stringify(t))};function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),y("".concat(w,"api/modifyPwd"),i.a.stringify(t),n)}var W=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),b("".concat(w,"user/changePwd"),i.a.stringify(t))};function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),y("".concat(w,"api/modifyPwd"),i.a.stringify(t),n)}var Q=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),y("".concat(w,"api/resetTranPwd"),i.a.stringify(t))},q=function(t){return t=Object(a.a)({},t,{oldLoginPwd:o()(t.oldLoginPwd),newLoginPwdOne:o()(t.newLoginPwdOne),oldTranPwd:o()(t.oldTranPwd),newTranPwdOne:o()(t.newTranPwdOne)}),y("".concat(w,"api/resetAllPwd"),i.a.stringify(t))};function K(t,n){return v("".concat(w,"api/bankCard/").concat(t),null,n)}function X(t,n){return m("".concat(w,"api/integralList"),null,n)}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),m("".concat(w="/jdapi/","goodsClassLists"),t,n)}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:g.a.store.PAGE_LIMIT}),m("".concat(w="/jdapi/","goodsLists"),t,n)}function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(w="/jdapi/","mail/address"),t,n)}function nt(t){return t=Object(a.a)({},t,{addType:1}),b("".concat(w="/jdapi/","mail/address"),i.a.stringify(t))}function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),m("".concat(w="/jdapi/","mail/userAddressList"),t,n)}function at(t,n){return v("".concat(w="/jdapi/","mail/address/").concat(t),null,n)}function rt(t){var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:P}),b("".concat(w="/jdapi/","mail/placeOrder"),i.a.stringify(t))}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return m("".concat(w="/jdapi/","mail/JDFreight"),t,n)}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return w="/jdapi/",t=Object(a.a)({},t,{limit:g.a.store.PAGE_LIMIT}),m("".concat(w,"mail/JDOrders"),t,n)}function ot(t,n){return m("".concat(w="/jdapi/","mail/JDTrack/").concat(t),null,n)}},373:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},378:function(t,n,e){"use strict";var a=e(115),r=e(0),i=e.n(r),c=e(116),o=e(380),d=e.n(o);function u(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var s=c.a.div(u());n.a=function(){return i.a.createElement(s,null,i.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},380:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},382:function(t,n,e){var a;!function(){"use strict";var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&t.push(c)}else if("object"===i)for(var o in a)e.call(a,o)&&a[o]&&t.push(o)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(t.exports=a)}()},385:function(t,n,e){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return a})},387:function(t,n,e){"use strict";var a=e(59),r=e(60),i=function(){function t(n,e){Object(a.a)(this,t),this.container=n,this.callback=e,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();n.a=i},535:function(t,n,e){t.exports=e.p+"static/media/slogan.d7ae3101.png"},536:function(t,n,e){t.exports=e.p+"static/media/more.2f0ddc66.svg"},564:function(t,n,e){"use strict";e.r(n);var a=e(376),r=e.n(a),i=e(385),c=e(377),o=e(59),d=e(60),u=e(63),s=e(61),l=e(62),f=e(120),p=e(0),g=e.n(p),h=e(375),m=e(542),v=e(118),y=e.n(v),b=e(382),w=e.n(b),P=e(372),k=e(371),j=e(387),O=e(115);function x(){var t=Object(O.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  .top{\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    img{\n      width: 30px;\n      height: 30px;\n    }\n  }\n  header{\n    height: 150px;\n  }\n  .logo{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n    background: #da251c;\n    .slogan{\n      width: 150px;\n    }\n  }\n  nav{\n    overflow-x: auto;\n    background: #fff;\n    ul{\n      line-height: 50px;\n      display: flex;\n      li{\n        padding: 0 20px;\n        flex-shrink: 0;\n        &.active{\n          color: red;\n        }\n      }\n    }\n  }\n  .layout{\n    display: flex;\n    flex-wrap: wrap;\n    overflow: hidden;\n    padding: 5px;    \n    &-item{\n      width: 50%;\n    }\n  }\n  .product{\n    display: block;\n    padding: 10px;\n    margin: 5px;\n    background: #fff;\n    &-title{\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      font-weight: bold;\n      margin-bottom: 10px;      \n    }\n    &-price{\n      color: #F53415;\n      font-weight: bold;\n      margin-bottom: 5px;\n    }\n    &-info{\n      display: flex;\n      justify-content: space-between;\n    }\n    span{\n      font-size: 12px;\n      padding: 2px 8px;\n      border-radius: 3px;\n      color: #888;\n      background: #F2F2F2;      \n    }\n    &-btn{\n      background: #F63618;\n    }\n  }\n  .container{\n    flex-shrink: 1;\n    flex-grow: 1;\n    overflow-y: auto;\n  }  \n"]);return x=function(){return t},t}var C=e(116).a.div(x()),E=e(378);function I(t){var n=t.id,e=t.title,a=t.src,r=t.price,i=t.data,c={pathname:"/store-detail/".concat(n),state:{detail:i}};return g.a.createElement("div",{className:"layout-item"},g.a.createElement(m.a,{className:"product",to:c},g.a.createElement("div",{className:"product-thumb"},g.a.createElement("img",{src:a,alt:""})),g.a.createElement("div",{className:"product-title"},e),g.a.createElement("div",{className:"product-price"},"\uffe5",r),g.a.createElement("div",{className:"product-info"},g.a.createElement("span",{className:"product-status"},"\u6709\u8d27"),g.a.createElement("span",{className:"product-btn"},"\u5151\u6362"))))}var L=function(t){var n=t.items;return n.length?g.a.createElement("div",{className:"layout"},n.map(function(t){return g.a.createElement(I,{key:t.skuId,id:t.skuId,title:t.name,src:"https://img13.360buyimg.com/n1/".concat(t.imagePath),price:t.jdPrice,data:t})})):g.a.createElement(E.a,null)},T=e(535),N=e.n(T),A=e(536),B=e.n(A),S=0,R=function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this,t))).loadData=e.loadData.bind(Object(f.a)(Object(f.a)(e))),e.handleClick=e.handleClick.bind(Object(f.a)(Object(f.a)(e))),e.state={id:1,items:[]},e}return Object(l.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t={goodsClassId:this.state.id,page:S++};this.loadNextPage(t),this.scroll=new j.a(this.scrollContainer,this.loadData)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy()}},{key:"loadNextPage",value:function(){var t=Object(c.a)(r.a.mark(function t(n){var e,a,c,o=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=y.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(P.r)(n);case 4:a=t.sent,200===(c=a.data).status&&this.setState({items:[].concat(Object(i.a)(this.state.items),Object(i.a)(c.data.data))},function(){c.data.data.length&&o.scroll.finish()});case 7:return t.prev=7,e.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,this,[[1,,7,10]])}));return function(n){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t={goodsClassId:this.state.id,page:S++};this.loading=y.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"reset",value:function(){S=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"handleClick",value:function(t){var n=this;this.state.id!==t&&(this.reset(),this.setState({id:t},function(){var t={goodsClassId:n.state.id,page:S++};n.loadNextPage(t)}))}},{key:"render",value:function(){var t=this,n=this.state.id;return g.a.createElement(C,null,g.a.createElement(h.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u4eac\u4e1c\u8d2d\u7269"}),g.a.createElement("div",{className:"top"},g.a.createElement(m.a,{to:"/store-sort"},g.a.createElement("img",{src:B.a,alt:""}))),g.a.createElement("header",null,g.a.createElement("div",{className:"logo"},g.a.createElement("img",{className:"slogan",src:N.a,alt:""})),g.a.createElement("nav",null,g.a.createElement("ul",null,g.a.createElement("li",{className:w()({active:1===n}),onClick:function(){return t.handleClick(1)}},"\u624b\u673a\u914d\u4ef6"),g.a.createElement("li",{className:w()({active:2===n}),onClick:function(){return t.handleClick(2)}},"\u6570\u7801\u4ea7\u54c1"),g.a.createElement("li",{className:w()({active:3===n}),onClick:function(){return t.handleClick(3)}},"\u5bb6\u5c45\u65e5\u7528"),g.a.createElement("li",{className:w()({active:4===n}),onClick:function(){return t.handleClick(4)}},"\u98df\u54c1\u996e\u6599"),g.a.createElement("li",{className:w()({active:5===n}),onClick:function(){return t.handleClick(5)}},"\u4e2a\u4eba\u62a4\u7406"),g.a.createElement("li",{className:w()({active:10===n}),onClick:function(){return t.handleClick(10)}},"\u4e2d\u5916\u540d\u9152")))),g.a.createElement("div",{className:"container",ref:function(n){return t.scrollContainer=n}},g.a.createElement("main",null,g.a.createElement(L,{items:this.state.items}))),g.a.createElement(k.a,null))}}]),n}(p.Component);e.d(n,"view",function(){return R})}}]);
//# sourceMappingURL=37.17d11da3.chunk.js.map