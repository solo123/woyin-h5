(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{371:function(t,n,e){"use strict";var r=e(115),a=e(0),i=e.n(a),c=e(116),o=e(542),d=e(373),u=e.n(d);function s(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return t},t}function l(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return t},t}function f(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var g=c.a.div(f()),p=c.a.div(l()),h=c.a.img(s());n.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(h,{src:u.a,alt:"\u56de\u5230\u9996\u9875"}))))}},372:function(t,n,e){"use strict";var r=e(46),a=e(381),i=e.n(a),c=e(379),o=e.n(c),d=e(374),u=e.n(d),s=e(118),l=e.n(s),f=e(81),g=e(32),p=e(117),h=u.a.create();h.defaults.timeout=p.a.timeout,h.interceptors.request.use(function(t){var n=Object(g.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(r.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(r.a)({},e,{params:n}))},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},w=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"A",function(){return j}),e.d(n,"l",function(){return O}),e.d(n,"m",function(){return k}),e.d(n,"M",function(){return L}),e.d(n,"x",function(){return T}),e.d(n,"C",function(){return E}),e.d(n,"w",function(){return x}),e.d(n,"z",function(){return I}),e.d(n,"B",function(){return C}),e.d(n,"D",function(){return B}),e.d(n,"O",function(){return N}),e.d(n,"a",function(){return A}),e.d(n,"k",function(){return S}),e.d(n,"E",function(){return R}),e.d(n,"v",function(){return _}),e.d(n,"n",function(){return D}),e.d(n,"y",function(){return V}),e.d(n,"H",function(){return M}),e.d(n,"I",function(){return G}),e.d(n,"J",function(){return Y}),e.d(n,"G",function(){return H}),e.d(n,"K",function(){return U}),e.d(n,"L",function(){return J}),e.d(n,"c",function(){return F}),e.d(n,"h",function(){return W}),e.d(n,"d",function(){return z}),e.d(n,"i",function(){return Q}),e.d(n,"N",function(){return q}),e.d(n,"f",function(){return K}),e.d(n,"o",function(){return X}),e.d(n,"s",function(){return Z}),e.d(n,"r",function(){return $}),e.d(n,"j",function(){return tt}),e.d(n,"b",function(){return nt}),e.d(n,"p",function(){return et}),e.d(n,"g",function(){return rt}),e.d(n,"F",function(){return at}),e.d(n,"q",function(){return it}),e.d(n,"t",function(){return ct}),e.d(n,"u",function(){return ot});var b="";b="/client/";var P=String((new Date).getTime()),j=(n.e={login:function(t){return 1===t.loginType&&(t=Object(r.a)({},t,{password:o()(t.password)})),w("".concat(b,"user/login"),i.a.stringify(t))},getOrderList:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b,"api/order/getOrderList"),t,n)},hotProducts:function(){return m("hotProducts")},getProductCateList:function(t){return m("getProductCateList",{type:t})},getProductByCate:function(t,n){return m("getProductByCate",{type:t,cate:n})},getProductById:function(t){return m("getProductById",{id:t})},getHotsell:function(){return m("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b,"api/product/subList"),{productClassifyId:t},n)},getRechargeFlowProductsByType:function(t){return m("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return m("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return m("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return m("getVideoProviders")},getVideoProducts:function(){return m("getVideoProducts")},confirmTransPswd:function(t){return w("".concat(b,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return w("".concat(b,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return w("".concat(b,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return w("".concat(b,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return w("".concat(b,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return w("".concat(b,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return w("".concat(b,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return m("".concat(b,"api/bank/getBankCardList"))},addBankcard:function(t){return w("".concat(b,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return m("".concat(b,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return m("sendMsgCode",{phone:t})},redeemIntegral:function(t){return w("".concat(b,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b,"api/trad/getWithList"),t,n)},getCode:function(t){return w("".concat(b,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return m("getCreditCardList")},creditCardRepayment:function(t){return w("creditCardRepayment",t)},transfer:function(t){return w("transfer",t)},getECardList:function(){return m("getECardList")},getECardDetailByType:function(){return m("getECardDetailByType")},addVehicle:function(t){return w("addVehicle",t)},getVehicleList:function(){return m("getVehicleList")},getViolationList:function(){return m("getViolationList")},getUserInfo:function(){return m("".concat(b,"api/user/getUserInfo"))}},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b,"api/user/getUserInfo"),t,n)}),O=function(t){return w("".concat(b,"user/getCode"),i.a.stringify(t))},k=function(t){var n={userPhoneNo:t,codeType:3};return w("".concat(b,"user/getCode"),i.a.stringify(n))},L=function(t){return t=Object(r.a)({},t,{tradPwd:o()(t.tradPwd)}),w("".concat(b,"api/trad/withdrawal"),i.a.stringify(t))},T=function(t){return m("".concat(b,"api/trad/poundageList"),{amount:t})},E=function(t){return m("".concat(b,"api/trad/poundageList"),{amount:t})},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b,"product/list"),{productClassifyId:t},n)},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b,"api/product/subList"),{productClassifyId:t},n)},C=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.voucher.PAGE_LIMIT});return m("".concat(b,"api/voucher/list"),e,n)},B=function(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),w("".concat(b,"api/transferred/commit"),i.a.stringify(t))},N=function(t,n){var e=Object(r.a)({},t,{limit:p.a.redeem.PAGE_LIMIT});return m("".concat(b,"api/transferred/list"),e,n)},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return w("".concat(b,"api/bank/addBankCard"),i.a.stringify(t))},S=function(){return m("".concat(b,"api/bank/getBankCardList"))},R=function(t){return t=Object(r.a)({},t,{tradPwd:o()(t.tradPwd)}),w("".concat(b,"api/trad/withdrawal"),i.a.stringify(t))},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.order.PAGE_LIMIT});return m("".concat(b,"api/order/getOrderList"),e,n)};function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return m("".concat(b,"api/trad/getWithList"),e,n)}var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return m("".concat(b,"api/trad/getWithList"),e,n)};function M(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),w("".concat(b,"api/charge/moreCredit"),i.a.stringify(t))}function G(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),w("".concat(b,"api/charge/moreCredit"),i.a.stringify(t))}function Y(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&phone=").concat(t.phone,"&range=").concat(t.range,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),w("".concat(b,"api/traffic/charge"),i.a.stringify(t))}function H(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),w("".concat(b,"api/oilCard/charge"),i.a.stringify(t))}var U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:P}),w("".concat(b,"api/video/charge"),i.a.stringify(t),n)},J=function(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),w("".concat(b,"api/voucher/charge"),i.a.stringify(t))};function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),y("".concat(b,"api/modifyPwd"),i.a.stringify(t),n)}var W=function(t){return t=Object(r.a)({},t,{password:o()(t.password)}),w("".concat(b,"user/changePwd"),i.a.stringify(t))};function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),y("".concat(b,"api/modifyPwd"),i.a.stringify(t),n)}var Q=function(t){return t=Object(r.a)({},t,{password:o()(t.password)}),y("".concat(b,"api/resetTranPwd"),i.a.stringify(t))},q=function(t){return t=Object(r.a)({},t,{oldLoginPwd:o()(t.oldLoginPwd),newLoginPwdOne:o()(t.newLoginPwdOne),oldTranPwd:o()(t.oldTranPwd),newTranPwdOne:o()(t.newTranPwdOne)}),y("".concat(b,"api/resetAllPwd"),i.a.stringify(t))};function K(t,n){return v("".concat(b,"api/bankCard/").concat(t),null,n)}function X(t,n){return m("".concat(b,"api/integralList"),null,n)}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{typeId:1}),m("".concat(b="/jdapi/","goodsClassLists"),t,n)}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{limit:p.a.store.PAGE_LIMIT}),m("".concat(b="/jdapi/","goodsLists"),t,n)}function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(b="/jdapi/","mail/address"),t,n)}function nt(t){return t=Object(r.a)({},t,{addType:1}),w("".concat(b="/jdapi/","mail/address"),i.a.stringify(t))}function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(r.a)({},t,{addType:1}),m("".concat(b="/jdapi/","mail/userAddressList"),t,n)}function rt(t,n){return v("".concat(b="/jdapi/","mail/address/").concat(t),null,n)}function at(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:P}),w("".concat(b="/jdapi/","mail/placeOrder"),i.a.stringify(t))}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return m("".concat(b="/jdapi/","mail/JDFreight"),t,n)}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return b="/jdapi/",t=Object(r.a)({},t,{limit:p.a.store.PAGE_LIMIT}),m("".concat(b,"mail/JDOrders"),t,n)}function ot(t,n){return m("".concat(b="/jdapi/","mail/JDTrack/").concat(t),null,n)}},373:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},378:function(t,n,e){"use strict";var r=e(115),a=e(0),i=e.n(a),c=e(116),o=e(380),d=e.n(o);function u(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var s=c.a.div(u());n.a=function(){return i.a.createElement(s,null,i.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},380:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},383:function(t,n,e){"use strict";var r=e(115),a=e(0),i=e.n(a);function c(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=e(116).a.div(c());n.a=function(t){for(var n=t.count,e=void 0===n?1:n,r=[],a=0;a<e;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,r)}},385:function(t,n,e){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return r})},387:function(t,n,e){"use strict";var r=e(59),a=e(60),i=function(){function t(n,e){Object(r.a)(this,t),this.container=n,this.callback=e,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(a.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();n.a=i},557:function(t,n,e){"use strict";e.r(n);var r=e(376),a=e.n(r),i=e(385),c=e(377),o=e(59),d=e(60),u=e(63),s=e(61),l=e(62),f=e(120),g=e(0),p=e.n(g),h=e(375),m=e(118),v=e.n(m),y=e(372),w=e(371),b=e(383),P=e(378),j=e(387),O=e(542),k=e(121);function L(t){var n=t.id,e=t.createTime,r=t.goodsName,a=(t.status,t.totalScore),i=t.data,c={pathname:"/order-store/".concat(n),state:{detail:i}};return p.a.createElement(O.a,{to:c,className:"item"},p.a.createElement("div",{className:"head"},p.a.createElement("span",{className:"title"},"\u4eac\u4e1c\u5546\u57ce")),p.a.createElement("div",{className:"body"},r),p.a.createElement("div",{className:"foot"},p.a.createElement("span",null,k.a.formatTimestamp(e)),p.a.createElement("span",null,a," \u79ef\u5206")))}var T=function(t){var n=t.items;return n.length?p.a.createElement("div",{className:"list"},n.map(function(t){return p.a.createElement(L,{key:t.id,id:t.id,createTime:t.createTime,goodsName:t.goodsName,totalScore:t.totalScore,status:t.status,data:t})})):p.a.createElement(P.a,null)},E=e(115);function x(){var t=Object(E.a)(['\n  .list{\n    .item{\n      display: block;\n      margin: 15px;\n      background: #fff;\n      .head{\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        padding: 15px;        \n        &:after{\n          content: " ";\n          position: absolute;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          height: 1px;\n          border-bottom: 1px solid #e5e5e5;\n          transform: scaleY(0.5);\n        }\n        .title{\n          font-size: 16px;\n          font-weight: bold;\n        }\n      }\n      .body{\n        display: flex;\n        justify-content: space-between;\n        padding: 15px;    \n      }\n      .foot{\n        display: flex;\n        justify-content: space-between;\n        padding: 0 15px 15px 15px;            \n      }\n    }\n  }\n\n  .container{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow-y: auto;\n  }  \n']);return x=function(){return t},t}var I=e(116).a.div(x()),C=function(t){var n=t.placeholderLoading,e=t.items;return n?p.a.createElement("div",{className:"u_mx_xxx u_pt_xxx"},p.a.createElement(b.a,{count:3})):e.length?p.a.createElement(T,{items:e}):p.a.createElement(P.a,null)},B=function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this,t))).loadData=e.loadData.bind(Object(f.a)(Object(f.a)(e))),e.currentPage=0,e.state={placeholderLoading:!0,items:[]},e}return Object(l.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t={page:this.currentPage++,orderType:0};this.loadNextPage(t),this.scroll=new j.a(this.scrollContainer,this.loadData)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy()}},{key:"loadNextPage",value:function(){var t=Object(c.a)(a.a.mark(function t(n){var e,r,c=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.t)(n);case 3:e=t.sent,200===(r=e.data).status&&this.setState({items:[].concat(Object(i.a)(this.state.items),Object(i.a)(r.data))},function(){r.data.length&&c.scroll.finish()});case 6:return t.prev=6,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),t.finish(6);case 10:case"end":return t.stop()}},t,this,[[0,,6,10]])}));return function(n){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t={page:this.currentPage++,orderType:0};this.loading=v.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"render",value:function(){var t=this,n=this.state.placeholderLoading;return p.a.createElement(I,null,p.a.createElement(h.Helmet,{title:"\u5546\u54c1\u8ba2\u5355"}),this.state.loading?p.a.createElement("div",{className:"u_m_xxx"},p.a.createElement(b.a,{count:3})):p.a.createElement("div",{className:"container",ref:function(n){return t.scrollContainer=n}},p.a.createElement("main",null,p.a.createElement(C,{placeholderLoading:n,items:this.state.items}))),p.a.createElement(w.a,null))}}]),n}(g.Component);e.d(n,"view",function(){return B})}}]);
//# sourceMappingURL=20.79484a9f.chunk.js.map