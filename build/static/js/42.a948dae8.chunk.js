(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{371:function(n,t,e){"use strict";var r=e(46),a=e(380),i=e.n(a),c=e(379),o=e.n(c),u=e(374),d=e.n(u),s=e(118),l=e.n(s),f=e(81),g=e(32),p=e(117),m=d.a.create();m.defaults.timeout=p.a.timeout,m.interceptors.request.use(function(n){var t=Object(g.a)("token");return t&&(n.headers.Authorization="Bearer ".concat(t)),n},function(n){return Promise.reject(n)}),m.interceptors.response.use(function(n){return n},function(n){if(n.response)switch(parseInt(n.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(n)});var h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.get(n,Object(r.a)({},e,{params:t}))},v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.delete(n,Object(r.a)({},e,{params:t}))},w=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.put(n,t,e)},y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.post(n,t,e)};e.d(t,"A",function(){return P}),e.d(t,"l",function(){return O}),e.d(t,"m",function(){return E}),e.d(t,"M",function(){return x}),e.d(t,"x",function(){return j}),e.d(t,"C",function(){return k}),e.d(t,"w",function(){return L}),e.d(t,"z",function(){return C}),e.d(t,"K",function(){return T}),e.d(t,"L",function(){return I}),e.d(t,"B",function(){return B}),e.d(t,"D",function(){return N}),e.d(t,"O",function(){return R}),e.d(t,"a",function(){return V}),e.d(t,"k",function(){return A}),e.d(t,"E",function(){return M}),e.d(t,"v",function(){return _}),e.d(t,"n",function(){return z}),e.d(t,"y",function(){return D}),e.d(t,"H",function(){return G}),e.d(t,"I",function(){return J}),e.d(t,"J",function(){return U}),e.d(t,"G",function(){return F}),e.d(t,"j",function(){return H}),e.d(t,"b",function(){return S}),e.d(t,"p",function(){return Q}),e.d(t,"g",function(){return W}),e.d(t,"s",function(){return q}),e.d(t,"r",function(){return K}),e.d(t,"F",function(){return Y}),e.d(t,"q",function(){return X}),e.d(t,"c",function(){return Z}),e.d(t,"h",function(){return $}),e.d(t,"d",function(){return nn}),e.d(t,"i",function(){return tn}),e.d(t,"N",function(){return en}),e.d(t,"t",function(){return rn}),e.d(t,"u",function(){return an}),e.d(t,"f",function(){return cn}),e.d(t,"o",function(){return on});var b="";b="/client/";t.e={login:function(n){return 1===n.loginType&&(n=Object(r.a)({},n,{password:o()(n.password)})),y("".concat(b,"user/login"),i.a.stringify(n))},getOrderList:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"api/order/getOrderList"),n,t)},hotProducts:function(){return h("hotProducts")},getProductCateList:function(n){return h("getProductCateList",{type:n})},getProductByCate:function(n,t){return h("getProductByCate",{type:n,cate:t})},getProductById:function(n){return h("getProductById",{id:n})},getHotsell:function(){return h("hotsell")},getRechargePhoneProductsByType:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"api/product/subList"),{productClassifyId:n},t)},getRechargeFlowProductsByType:function(n){return h("getRechargeFlowProductsByType",{type:n})},getRechargeOilProductsByType:function(n){return h("getRechargeOilProductsByType",{type:n})},getRechargeQBProductsByType:function(n){return h("getRechargeQBProductsByType",{type:n})},getVideoProviders:function(){return h("getVideoProviders")},getVideoProducts:function(){return h("getVideoProducts")},confirmTransPswd:function(n){return y("".concat(b,"api/trad/checkCode"),{pswd:n})},rechargePhone:function(n){return y("".concat(b,"api/charge/moreCredit"),i.a.stringify(n))},rechargeQB:function(n){return y("".concat(b,"api/charge/moreCredit"),i.a.stringify(n))},rechargeTraffic:function(n){return y("".concat(b,"api/traffic/charge"),i.a.stringify(n))},rechargeOil:function(n){return y("".concat(b,"api/oilCard/charge"),i.a.stringify(n))},rechargeVideo:function(n){return y("".concat(b,"api/video/charge"),i.a.stringify(n))},rechargeVoucher:function(n){return y("".concat(b,"api/voucher/charge"),i.a.stringify(n))},getBankcardList:function(){return h("".concat(b,"api/bank/getBankCardList"))},addBankcard:function(n){return y("".concat(b,"api/bank/addBankCard"),i.a.stringify(n))},getRedeemFee:function(n){return h("".concat(b,"api/trad/poundageList"),{amount:n})},sendMsgCode:function(n){return h("sendMsgCode",{phone:n})},redeemIntegral:function(n){return y("".concat(b,"api/trad/withdrawal"),i.a.stringify(n))},getRedeemRecordByStatus:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"api/trad/getWithList"),n,t)},getCode:function(n){return y("".concat(b,"user/getCode"),i.a.stringify(n))},getCreditCardList:function(){return h("getCreditCardList")},creditCardRepayment:function(n){return y("creditCardRepayment",n)},transfer:function(n){return y("transfer",n)},getECardList:function(){return h("getECardList")},getECardDetailByType:function(){return h("getECardDetailByType")},addVehicle:function(n){return y("addVehicle",n)},getVehicleList:function(){return h("getVehicleList")},getViolationList:function(){return h("getViolationList")},getUserInfo:function(){return h("".concat(b,"api/user/getUserInfo"))}};var P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"api/user/getUserInfo"),n,t)},O=function(n){return y("".concat(b,"user/getCode"),i.a.stringify(n))},E=function(n){var t={userPhoneNo:n,codeType:3};return y("".concat(b,"user/getCode"),i.a.stringify(t))},x=function(n){return n=Object(r.a)({},n,{tradPwd:o()(n.tradPwd)}),y("".concat(b,"api/trad/withdrawal"),i.a.stringify(n))},j=function(n){return h("".concat(b,"api/trad/poundageList"),{amount:n})},k=function(n){return h("".concat(b,"api/trad/poundageList"),{amount:n})},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"product/list"),{productClassifyId:n},t)},C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"api/product/subList"),{productClassifyId:n},t)},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},n,{tranPwd:o()(n.tranPwd),chargeType:1});return y("".concat(b,"api/video/charge"),i.a.stringify(e),t)},I=function(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd)}),y("".concat(b,"api/voucher/charge"),i.a.stringify(n))},B=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},n,{limit:p.a.voucher.PAGE_LIMIT});return h("".concat(b,"api/voucher/list"),e,t)},N=function(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd)}),y("".concat(b,"api/transferred/commit"),i.a.stringify(n))},R=function(n,t){var e=Object(r.a)({},n,{limit:p.a.redeem.PAGE_LIMIT});return h("".concat(b,"api/transferred/list"),e,t)},V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y("".concat(b,"api/bank/addBankCard"),i.a.stringify(n))},A=function(){return h("".concat(b,"api/bank/getBankCardList"))},M=function(n){return n=Object(r.a)({},n,{tradPwd:o()(n.tradPwd)}),y("".concat(b,"api/trad/withdrawal"),i.a.stringify(n))},_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},n,{limit:p.a.order.PAGE_LIMIT});return h("".concat(b,"api/order/getOrderList"),e,t)};function z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},n,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return h("".concat(b,"api/trad/getWithList"),e,t)}var D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},n,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return h("".concat(b,"api/trad/getWithList"),e,t)};function G(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd),chargeType:1}),y("".concat(b,"api/charge/moreCredit"),i.a.stringify(n))}function J(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd)}),y("".concat(b,"api/charge/moreCredit"),i.a.stringify(n))}function U(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd)}),y("".concat(b,"api/traffic/charge"),i.a.stringify(n))}function F(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd)}),y("".concat(b,"api/oilCard/charge"),i.a.stringify(n))}function H(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(b,"mail/address"),n,t)}function S(n){return n=Object(r.a)({},n,{addType:1}),y("".concat(b,"mail/address"),i.a.stringify(n))}function Q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object(r.a)({},n,{addType:1}),h("".concat(b,"mail/userAddressList"),n,t)}function W(n,t){return v("".concat(b,"mail/address/").concat(n),null,t)}function q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(r.a)({},n,{typeId:1}),h("".concat(b,"mail/goodsClassLists"),n,t)}function K(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(r.a)({},n,{limit:p.a.store.PAGE_LIMIT}),h("".concat(b,"mail/goodsLists"),n,t)}function Y(n){return n=Object(r.a)({},n,{tranPwd:o()(n.tranPwd)}),y("".concat(b,"mail/placeOrder"),i.a.stringify(n))}function X(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return h("".concat(b,"mail/JDFreight"),n,t)}function Z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(r.a)({},n,{oldPwd:o()(n.oldPwd),newPwdOne:o()(n.newPwdOne),modifyType:1}),w("".concat(b,"api/modifyPwd"),i.a.stringify(n),t)}var $=function(n){return n=Object(r.a)({},n,{password:o()(n.password)}),y("".concat(b,"user/changePwd"),i.a.stringify(n))};function nn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(r.a)({},n,{oldPwd:o()(n.oldPwd),newPwdOne:o()(n.newPwdOne),modifyType:2}),w("".concat(b,"api/modifyPwd"),i.a.stringify(n),t)}var tn=function(n){return n=Object(r.a)({},n,{password:o()(n.password)}),w("".concat(b,"api/resetTranPwd"),i.a.stringify(n))},en=function(n){return n=Object(r.a)({},n,{oldLoginPwd:o()(n.oldLoginPwd),newLoginPwdOne:o()(n.newLoginPwdOne),oldTranPwd:o()(n.oldTranPwd),newTranPwdOne:o()(n.newTranPwdOne)}),w("".concat(b,"api/resetAllPwd"),i.a.stringify(n))};function rn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return h("".concat(b,"mail/JDOrders"),n,t)}function an(n,t){return h("".concat(b,"mail/JDTrack/").concat(n),null,t)}function cn(n,t){return v("".concat(b,"api/bankCard/").concat(n),null,t)}function on(n,t){return h("".concat(b,"api/integralList"),null,t)}},372:function(n,t,e){"use strict";var r=e(115),a=e(0),i=e.n(a),c=e(116),o=e(543),u=e(373),d=e.n(u);function s(){var n=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return n},n}function l(){var n=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return n},n}function f(){var n=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return n},n}var g=c.a.div(f()),p=c.a.div(l()),m=c.a.img(s());t.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(m,{src:d.a,alt:"\u56de\u5230\u9996\u9875"}))))}},373:function(n,t,e){n.exports=e.p+"static/media/home.73f12746.svg"},378:function(n,t,e){"use strict";var r=e(115),a=e(0),i=e.n(a),c=e(116),o=e(381),u=e.n(o);function d(){var n=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return d=function(){return n},n}var s=c.a.div(d());t.a=function(){return i.a.createElement(s,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},381:function(n,t,e){n.exports=e.p+"static/media/empty.8103a6b5.svg"},384:function(n,t,e){"use strict";var r=e(115),a=e(0),i=e.n(a);function c(){var n=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return n},n}var o=e(116).a.div(c());t.a=function(n){for(var t=n.count,e=void 0===t?1:t,r=[],a=0;a<e;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,r)}},539:function(n,t,e){n.exports=e.p+"static/media/banner.b32aa538.png"},540:function(n,t,e){n.exports=e.p+"static/media/integral.2d0d36ee.png"},541:function(n,t,e){n.exports=e.p+"static/media/transfer.1b0a9ca2.png"},560:function(n,t,e){"use strict";e.r(t);var r=e(376),a=e.n(r),i=e(377),c=e(59),o=e(60),u=e(62),d=e(61),s=e(63),l=e(0),f=e.n(l),g=e(375),p=e(543),m=e(371),h=e(372),v=e(384),w=e(121),y=e(378);function b(n){var t=n.points,e=(n.remark,n.createTime);return f.a.createElement("div",{className:"item"},f.a.createElement("div",null,f.a.createElement("h3",null,"\u6dfb\u52a0\u79ef\u5206"),f.a.createElement("div",{className:"date"},w.a.formatTimestamp(e))),f.a.createElement("div",{className:"integral"},"+",t))}var P=function(n){var t=n.items;return t.length?f.a.createElement("div",{className:"list"},t.map(function(n){return f.a.createElement(b,{key:n.id,points:n.points,remark:n.remark,createTime:n.createTime})})):f.a.createElement(y.a,null)},O=e(115);function E(){var n=Object(O.a)(['\n  header{\n    position: relative;\n    margin: 0 5px;\n    background: #fff;\n    .content{\n      position: absolute;\n      top: 15%;\n      left: 8%;\n      color: #e1e1e1;\n      .integral{\n        margin-bottom: 8%;\n      }\n      strong{\n        color: #fff;\n        font-size: 30px;\n      }\n      a{\n        color: #e1e1e1;\n        font-size: 12px;\n        padding: 2px 10px;\n        border-radius: 8px;\n        border: 1px solid #e1e1e1;\n      }\n    }\n  }\n  nav{\n    display: flex;\n    margin-bottom: 10px;\n    background: #fff;\n    a{\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 10px 0;\n      img{\n        width: 50px;\n        margin-right: 5px;\n      }\n    }\n  }  \n  main{\n    h2{\n      font-size: 16px;\n      padding: 15px;\n      background: #fff;\n    }\n    .list{\n      .item{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 15px;\n        background: #fff;\n        position: relative;\n        &:after{\n          content: " ";\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          height: 1px;\n          border-bottom: 1px solid #e5e5e5;\n          transform: scaleY(0.5);\n        }   \n        h3{\n          font-size: 14px;\n          font-weight: bold;\n        }\n        .date{\n          color: #888;\n        } \n        .integral{\n          color: #58a1ff;\n          font-size: 16px;\n          font-weight: bold;\n        }    \n      }\n    }\n  }\n']);return E=function(){return n},n}var x=e(116).a.div(E()),j=e(539),k=e.n(j),L=e(540),C=e.n(L),T=e(541),I=e.n(T),B=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this,n))).state={loading:!0,items:[]},e}return Object(s.a)(t,n),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadIntegralList()}},{key:"loadIntegralList",value:function(){var n=Object(i.a)(a.a.mark(function n(){var t,e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(m.o)();case 3:t=n.sent,200===(e=t.data).status&&this.setState({items:e.data});case 6:return n.prev=6,this.setState({loading:!1}),n.finish(6);case 9:case"end":return n.stop()}},n,this,[[0,,6,9]])}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return f.a.createElement(x,null,f.a.createElement(g.Helmet,{title:"\u6211\u7684\u79ef\u5206"}),f.a.createElement("header",null,f.a.createElement("img",{src:k.a,alt:""}),f.a.createElement("div",{className:"content"},f.a.createElement("div",{className:"integral"},"\u53ef\u7528\u79ef\u5206\uff1a",f.a.createElement("strong",null,"2500")),f.a.createElement(p.a,{to:"/"},"\u6dfb\u52a0\u79ef\u5206\u5238"))),f.a.createElement("nav",null,f.a.createElement(p.a,{to:"/redeem"},f.a.createElement("img",{src:C.a,alt:""}),"\u79ef\u5206\u4ee3\u5356"),f.a.createElement(p.a,{to:"/transfer"},f.a.createElement("img",{src:I.a,alt:""}),"\u79ef\u5206\u8f6c\u8d60")),f.a.createElement("main",null,f.a.createElement("h2",null,"\u79ef\u5206\u5238\u8bb0\u5f55"),this.state.loading?f.a.createElement("div",{className:"u_m_xxx"},f.a.createElement(v.a,{count:2})):f.a.createElement(P,{items:this.state.items})),f.a.createElement(h.a,null))}}]),t}(l.Component);e.d(t,"view",function(){return B})}}]);
//# sourceMappingURL=42.a948dae8.chunk.js.map