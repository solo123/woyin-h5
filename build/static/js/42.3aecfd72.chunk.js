(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{371:function(t,n,e){"use strict";var r=e(115),a=e(0),c=e.n(a),i=e(116),o=e(542),d=e(373),u=e.n(d);function s(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return t},t}function l(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return t},t}function f(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var g=i.a.div(f()),p=i.a.div(l()),m=i.a.img(s());n.a=function(){return c.a.createElement(g,null,c.a.createElement(o.a,{to:"/"},c.a.createElement(p,null,c.a.createElement(m,{src:u.a,alt:"\u56de\u5230\u9996\u9875"}))))}},372:function(t,n,e){"use strict";var r=e(46),a=e(381),c=e.n(a),i=e(379),o=e.n(i),d=e(374),u=e.n(d),s=e(118),l=e.n(s),f=e(81),g=e(32),p=e(117),m=u.a.create();m.defaults.timeout=p.a.timeout,m.interceptors.request.use(function(t){var n=Object(g.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),m.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.get(t,Object(r.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.delete(t,Object(r.a)({},e,{params:n}))},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.put(t,n,e)},w=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.post(t,n,e)};e.d(n,"A",function(){return O}),e.d(n,"l",function(){return j}),e.d(n,"m",function(){return E}),e.d(n,"M",function(){return k}),e.d(n,"x",function(){return T}),e.d(n,"C",function(){return I}),e.d(n,"w",function(){return L}),e.d(n,"z",function(){return C}),e.d(n,"B",function(){return x}),e.d(n,"D",function(){return B}),e.d(n,"O",function(){return A}),e.d(n,"a",function(){return N}),e.d(n,"k",function(){return R}),e.d(n,"E",function(){return V}),e.d(n,"v",function(){return M}),e.d(n,"n",function(){return D}),e.d(n,"y",function(){return _}),e.d(n,"H",function(){return G}),e.d(n,"I",function(){return J}),e.d(n,"J",function(){return S}),e.d(n,"G",function(){return Y}),e.d(n,"K",function(){return U}),e.d(n,"L",function(){return F}),e.d(n,"c",function(){return H}),e.d(n,"h",function(){return Q}),e.d(n,"d",function(){return W}),e.d(n,"i",function(){return q}),e.d(n,"N",function(){return z}),e.d(n,"f",function(){return K}),e.d(n,"o",function(){return X}),e.d(n,"s",function(){return Z}),e.d(n,"r",function(){return $}),e.d(n,"j",function(){return tt}),e.d(n,"b",function(){return nt}),e.d(n,"p",function(){return et}),e.d(n,"g",function(){return rt}),e.d(n,"F",function(){return at}),e.d(n,"q",function(){return ct}),e.d(n,"t",function(){return it}),e.d(n,"u",function(){return ot});var P="";P="/client/";var b=String((new Date).getTime()),O=(n.e={login:function(t){return 1===t.loginType&&(t=Object(r.a)({},t,{password:o()(t.password)})),w("".concat(P,"user/login"),c.a.stringify(t))},getOrderList:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P,"api/order/getOrderList"),t,n)},hotProducts:function(){return h("hotProducts")},getProductCateList:function(t){return h("getProductCateList",{type:t})},getProductByCate:function(t,n){return h("getProductByCate",{type:t,cate:n})},getProductById:function(t){return h("getProductById",{id:t})},getHotsell:function(){return h("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P,"api/product/subList"),{productClassifyId:t},n)},getRechargeFlowProductsByType:function(t){return h("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return h("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return h("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return h("getVideoProviders")},getVideoProducts:function(){return h("getVideoProducts")},confirmTransPswd:function(t){return w("".concat(P,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return w("".concat(P,"api/charge/moreCredit"),c.a.stringify(t))},rechargeQB:function(t){return w("".concat(P,"api/charge/moreCredit"),c.a.stringify(t))},rechargeTraffic:function(t){return w("".concat(P,"api/traffic/charge"),c.a.stringify(t))},rechargeOil:function(t){return w("".concat(P,"api/oilCard/charge"),c.a.stringify(t))},rechargeVideo:function(t){return w("".concat(P,"api/video/charge"),c.a.stringify(t))},rechargeVoucher:function(t){return w("".concat(P,"api/voucher/charge"),c.a.stringify(t))},getBankcardList:function(){return h("".concat(P,"api/bank/getBankCardList"))},addBankcard:function(t){return w("".concat(P,"api/bank/addBankCard"),c.a.stringify(t))},getRedeemFee:function(t){return h("".concat(P,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return h("sendMsgCode",{phone:t})},redeemIntegral:function(t){return w("".concat(P,"api/trad/withdrawal"),c.a.stringify(t))},getRedeemRecordByStatus:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P,"api/trad/getWithList"),t,n)},getCode:function(t){return w("".concat(P,"user/getCode"),c.a.stringify(t))},getCreditCardList:function(){return h("getCreditCardList")},creditCardRepayment:function(t){return w("creditCardRepayment",t)},transfer:function(t){return w("transfer",t)},getECardList:function(){return h("getECardList")},getECardDetailByType:function(){return h("getECardDetailByType")},addVehicle:function(t){return w("addVehicle",t)},getVehicleList:function(){return h("getVehicleList")},getViolationList:function(){return h("getViolationList")},getUserInfo:function(){return h("".concat(P,"api/user/getUserInfo"))}},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P,"api/user/getUserInfo"),t,n)}),j=function(t){return w("".concat(P,"user/getCode"),c.a.stringify(t))},E=function(t){var n={userPhoneNo:t,codeType:3};return w("".concat(P,"user/getCode"),c.a.stringify(n))},k=function(t){return t=Object(r.a)({},t,{tradPwd:o()(t.tradPwd)}),w("".concat(P,"api/trad/withdrawal"),c.a.stringify(t))},T=function(t){return h("".concat(P,"api/trad/poundageList"),{amount:t})},I=function(t){return h("".concat(P,"api/trad/poundageList"),{amount:t})},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P,"product/list"),{productClassifyId:t},n)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P,"api/product/subList"),{productClassifyId:t},n)},x=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.voucher.PAGE_LIMIT});return h("".concat(P,"api/voucher/list"),e,n)},B=function(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),w("".concat(P,"api/transferred/commit"),c.a.stringify(t))},A=function(t,n){var e=Object(r.a)({},t,{limit:p.a.redeem.PAGE_LIMIT});return h("".concat(P,"api/transferred/list"),e,n)},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return w("".concat(P,"api/bank/addBankCard"),c.a.stringify(t))},R=function(){return h("".concat(P,"api/bank/getBankCardList"))},V=function(t){return t=Object(r.a)({},t,{tradPwd:o()(t.tradPwd)}),w("".concat(P,"api/trad/withdrawal"),c.a.stringify(t))},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.order.PAGE_LIMIT});return h("".concat(P,"api/order/getOrderList"),e,n)};function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return h("".concat(P,"api/trad/getWithList"),e,n)}var _=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return h("".concat(P,"api/trad/getWithList"),e,n)};function G(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:b}),w("".concat(P,"api/charge/moreCredit"),c.a.stringify(t))}function J(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:b}),w("".concat(P,"api/charge/moreCredit"),c.a.stringify(t))}function S(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&phone=").concat(t.phone,"&range=").concat(t.range,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:b}),w("".concat(P,"api/traffic/charge"),c.a.stringify(t))}function Y(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:b}),w("".concat(P,"api/oilCard/charge"),c.a.stringify(t))}var U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:b}),w("".concat(P,"api/video/charge"),c.a.stringify(t),n)},F=function(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:b}),w("".concat(P,"api/voucher/charge"),c.a.stringify(t))};function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),y("".concat(P,"api/modifyPwd"),c.a.stringify(t),n)}var Q=function(t){return t=Object(r.a)({},t,{password:o()(t.password)}),w("".concat(P,"user/changePwd"),c.a.stringify(t))};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),y("".concat(P,"api/modifyPwd"),c.a.stringify(t),n)}var q=function(t){return t=Object(r.a)({},t,{password:o()(t.password)}),y("".concat(P,"api/resetTranPwd"),c.a.stringify(t))},z=function(t){return t=Object(r.a)({},t,{oldLoginPwd:o()(t.oldLoginPwd),newLoginPwdOne:o()(t.newLoginPwdOne),oldTranPwd:o()(t.oldTranPwd),newTranPwdOne:o()(t.newTranPwdOne)}),y("".concat(P,"api/resetAllPwd"),c.a.stringify(t))};function K(t,n){return v("".concat(P,"api/bankCard/").concat(t),null,n)}function X(t,n){return h("".concat(P,"api/integralList"),null,n)}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{typeId:1}),h("".concat(P="/jdapi/","goodsClassLists"),t,n)}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{limit:p.a.store.PAGE_LIMIT}),h("".concat(P="/jdapi/","goodsLists"),t,n)}function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(P="/jdapi/","mail/address"),t,n)}function nt(t){return t=Object(r.a)({},t,{addType:1}),w("".concat(P="/jdapi/","mail/address"),c.a.stringify(t))}function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(r.a)({},t,{addType:1}),h("".concat(P="/jdapi/","mail/userAddressList"),t,n)}function rt(t,n){return v("".concat(P="/jdapi/","mail/address/").concat(t),null,n)}function at(t){var n=o()(t.tranPwd);return t=Object(r.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(b,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:b}),w("".concat(P="/jdapi/","mail/placeOrder"),c.a.stringify(t))}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return h("".concat(P="/jdapi/","mail/JDFreight"),t,n)}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return P="/jdapi/",t=Object(r.a)({},t,{limit:p.a.store.PAGE_LIMIT}),h("".concat(P,"mail/JDOrders"),t,n)}function ot(t,n){return h("".concat(P="/jdapi/","mail/JDTrack/").concat(t),null,n)}},373:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},378:function(t,n,e){"use strict";var r=e(115),a=e(0),c=e.n(a),i=e(116),o=e(380),d=e.n(o);function u(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var s=i.a.div(u());n.a=function(){return c.a.createElement(s,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},380:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},383:function(t,n,e){"use strict";var r=e(115),a=e(0),c=e.n(a);function i(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return i=function(){return t},t}var o=e(116).a.div(i());n.a=function(t){for(var n=t.count,e=void 0===n?1:n,r=[],a=0;a<e;a++)r.push(c.a.createElement("div",{key:a,className:"item"},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line w80"}),c.a.createElement("div",{className:"line w50"}),c.a.createElement("div",{className:"line w30"})));return c.a.createElement(o,null,r)}},559:function(t,n,e){"use strict";e.r(n);var r=e(376),a=e.n(r),c=e(377),i=e(59),o=e(60),d=e(63),u=e(61),s=e(62),l=e(0),f=e.n(l),g=e(375),p=e(372),m=e(371),h=e(383),v=e(378);function y(t){t.id;var n=t.name,e=t.phone,r=t.goodsName,a=t.externalOrder,c=t.totalScore,i=t.addr;return f.a.createElement("div",{className:"item"},f.a.createElement("dl",null,f.a.createElement("dt",null,"\u6536\u4ef6\u4eba"),f.a.createElement("dd",null,n)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u6536\u4ef6\u4eba\u7535\u8bdd"),f.a.createElement("dd",null,e)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u6536\u8d27\u5730\u5740"),f.a.createElement("dd",null,i)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u5546\u54c1\u540d\u79f0"),f.a.createElement("dd",null,r)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u5408\u8ba1\u79ef\u5206"),f.a.createElement("dd",null,c)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u5916\u90e8\u5355\u53f7"),f.a.createElement("dd",null,a)))}var w=function(t){var n=t.items;return n.length?f.a.createElement("div",{className:"list"},n.map(function(t){return f.a.createElement(y,{key:t.id,id:t.id,name:t.name,phone:t.phone,externalOrder:t.externalOrder,goodsName:t.goodsName,totalScore:t.totalScore,addr:t.address})})):f.a.createElement(v.a,null)},P=e(115);function b(){var t=Object(P.a)(["\n  .list{\n    padding: 15px;\n    .item{\n      padding: 15px;\n      margin-bottom: 15px;\n      background: #fff;\n    }\n    dl{\n      display: flex;\n      margin-bottom: 5px;\n      dt{\n        flex-shrink: 0;\n        color: #888;\n        width: 100px;\n      }\n    }    \n  }\n"]);return b=function(){return t},t}var O=e(116).a.div(b()),j=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(d.a)(this,Object(u.a)(n).call(this,t))).state={items:[],loading:!0},e}return Object(s.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getJDOrders({limit:20,page:0,orderType:1})}},{key:"getJDOrders",value:function(){var t=Object(c.a)(a.a.mark(function t(n){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p.t)(n);case 3:e=t.sent,200===(r=e.data).status&&this.setState({items:r.data});case 6:return t.prev=6,this.setState({loading:!1}),t.finish(6);case 9:case"end":return t.stop()}},t,this,[[0,,6,9]])}));return function(n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return f.a.createElement(O,null,f.a.createElement(g.Helmet,{title:"\u5f85\u53d1\u8d27"}),this.state.loading?f.a.createElement("div",{className:"u_m_xxx"},f.a.createElement(h.a,{count:3})):f.a.createElement(w,{items:this.state.items}),f.a.createElement(m.a,null))}}]),n}(l.Component);e.d(n,"view",function(){return j})}}]);
//# sourceMappingURL=42.3aecfd72.chunk.js.map