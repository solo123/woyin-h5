(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{371:function(n,t,e){"use strict";var a=e(59),r=e(60),c=e(63),i=e(61),o=e(62),d=e(115),u=e(0),s=e.n(u),l=e(116),f=e(542),m=e(120),p=e(373),g=e.n(p);function v(){var n=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return v=function(){return n},n}function h(){var n=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return h=function(){return n},n}function b(){var n=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return n},n}var w=l.a.div(b()),y=l.a.div(h()),P=l.a.img(v()),j=function(n){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,n),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(w,{id:"mover"},s.a.createElement(f.a,{to:"/"},s.a.createElement(y,null,s.a.createElement(P,{src:g.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),t}(u.Component);t.a=j},372:function(n,t,e){"use strict";var a=e(46),r=e(381),c=e.n(r),i=e(379),o=e.n(i),d=e(374),u=e.n(d),s=e(118),l=e.n(s),f=e(81),m=e(32),p=e(117),g=u.a.create();g.defaults.timeout=p.a.timeout,g.interceptors.request.use(function(n){var t=Object(m.a)("token");return t&&(n.headers.Authorization="Bearer ".concat(t)),n},function(n){return Promise.reject(n)}),g.interceptors.response.use(function(n){return n},function(n){if(n.response)switch(parseInt(n.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(n)});var v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(n,Object(a.a)({},e,{params:t}))},h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.delete(n,Object(a.a)({},e,{params:t}))},b=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.put(n,t,e)},w=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(n,t,e)};e.d(t,"F",function(){return j}),e.d(t,"B",function(){return k}),e.d(t,"k",function(){return O}),e.d(t,"l",function(){return x}),e.d(t,"n",function(){return E}),e.d(t,"m",function(){return I}),e.d(t,"O",function(){return T}),e.d(t,"G",function(){return N}),e.d(t,"y",function(){return L}),e.d(t,"D",function(){return C}),e.d(t,"x",function(){return A}),e.d(t,"A",function(){return M}),e.d(t,"C",function(){return Y}),e.d(t,"E",function(){return _}),e.d(t,"Q",function(){return G}),e.d(t,"a",function(){return H}),e.d(t,"j",function(){return z}),e.d(t,"w",function(){return D}),e.d(t,"o",function(){return J}),e.d(t,"z",function(){return B}),e.d(t,"J",function(){return S}),e.d(t,"K",function(){return U}),e.d(t,"L",function(){return q}),e.d(t,"I",function(){return F}),e.d(t,"M",function(){return R}),e.d(t,"N",function(){return W}),e.d(t,"c",function(){return K}),e.d(t,"g",function(){return Q}),e.d(t,"d",function(){return V}),e.d(t,"h",function(){return X}),e.d(t,"P",function(){return Z}),e.d(t,"e",function(){return $}),e.d(t,"p",function(){return nn}),e.d(t,"t",function(){return tn}),e.d(t,"s",function(){return en}),e.d(t,"i",function(){return an}),e.d(t,"b",function(){return rn}),e.d(t,"q",function(){return cn}),e.d(t,"f",function(){return on}),e.d(t,"H",function(){return dn}),e.d(t,"r",function(){return un}),e.d(t,"u",function(){return sn}),e.d(t,"v",function(){return ln});var y="";y="/client/";var P=String((new Date).getTime()),j=function(n){return 1===n.loginType&&(n=Object(a.a)({},n,{password:o()(n.password)})),w("".concat(y,"user/login"),c.a.stringify(n))},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(y,"api/user/getUserInfo"),n,t)},O=function(n){return w("".concat(y,"user/getCode"),c.a.stringify(n))},x=function(n){var t={userPhoneNo:n,codeType:2};return w("".concat(y,"user/getCode"),c.a.stringify(t))},E=function(n){var t={userPhoneNo:n,codeType:3};return w("".concat(y,"user/getCode"),c.a.stringify(t))},I=function(n){var t={userPhoneNo:n,codeType:4};return w("".concat(y,"user/getCode"),c.a.stringify(t))},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tradPwd);return n=Object(a.a)({},n,{tradPwd:t,payment:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(n.amount,"&bankCode=").concat(n.bankCode,"&bankName=").concat(n.bankName,"&cardHoldName=").concat(n.cardHoldName,"&cardPhoneNo=").concat(n.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(n.code,"&bankCard=").concat(n.bankCard,"&payment=").concat("1")),timestamp:P}),w("".concat(y,"api/trad/withdrawal"),c.a.stringify(n))},N=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tradPwd);return n=Object(a.a)({},n,{tradPwd:t,payment:"2",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(n.amount,"&bankCode=").concat(n.bankCode,"&bankName=").concat(n.bankName,"&cardHoldName=").concat(n.cardHoldName,"&cardPhoneNo=").concat(n.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(n.code,"&bankCard=").concat(n.bankCard,"&payment=").concat("2")),timestamp:P}),w("".concat(y,"api/trad/withdrawal"),c.a.stringify(n))},L=function(n){return v("".concat(y,"api/trad/poundageList"),{amount:n})},C=function(n){return v("".concat(y,"api/trad/poundageList"),{amount:n})},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(y,"product/list"),{productClassifyId:n},t)},M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(y,"api/product/subList"),{productClassifyId:n},t)},Y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.voucher.PAGE_LIMIT});return v("".concat(y,"api/voucher/list"),e,t)},_=function(n){var t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&to=").concat(n.to,"&num=").concat(n.num,"&tranPwd=").concat(t)),timestamp:P}),w("".concat(y,"api/transferred/commit"),c.a.stringify(n))},G=function(n,t){var e=Object(a.a)({},n,{limit:p.a.redeem.PAGE_LIMIT});return v("".concat(y,"api/transferred/list"),e,t)},H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return w("".concat(y,"api/bank/addBankCard"),c.a.stringify(n))},z=function(){return v("".concat(y,"api/bank/getBankCardList"))},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.order.PAGE_LIMIT});return v("".concat(y,"api/order/getOrderList"),e,t)};function J(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return v("".concat(y,"api/trad/getWithList"),e,t)}var B=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return v("".concat(y,"api/trad/getWithList"),e,t)};function S(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat("1","&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:P}),w("".concat(y,"api/charge/moreCredit"),c.a.stringify(n))}function U(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat(n.chargeType,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:P}),w("".concat(y,"api/charge/moreCredit"),c.a.stringify(n))}function q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&phone=").concat(n.phone,"&range=").concat(n.range,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:P}),w("".concat(y,"api/traffic/charge"),c.a.stringify(n))}function F(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardNumber=").concat(n.cardNumber,"&cardType=").concat(n.cardType,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:P}),w("".concat(y,"api/oilCard/charge"),c.a.stringify(n))}var R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(t,"&productId=").concat(n.productId)),timestamp:P}),w("".concat(y,"api/video/charge"),c.a.stringify(n))},W=function(n){var t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(n.amount,"&tranPwd=").concat(t,"&productId=").concat(n.productId)),timestamp:P}),w("".concat(y,"api/voucher/charge"),c.a.stringify(n))};function K(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{oldPwd:o()(n.oldPwd),newPwdOne:o()(n.newPwdOne),modifyType:1}),b("".concat(y,"api/modifyPwd"),c.a.stringify(n),t)}var Q=function(n){return n=Object(a.a)({},n,{password:o()(n.password)}),w("".concat(y,"user/changePwd"),c.a.stringify(n))};function V(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{oldPwd:o()(n.oldPwd),newPwdOne:o()(n.newPwdOne),modifyType:2}),b("".concat(y,"api/modifyPwd"),c.a.stringify(n),t)}var X=function(n){return n=Object(a.a)({},n,{password:o()(n.password)}),b("".concat(y,"api/resetTranPwd"),c.a.stringify(n))},Z=function(n){return n=Object(a.a)({},n,{oldLoginPwd:o()(n.oldLoginPwd),newLoginPwdOne:o()(n.newLoginPwdOne),oldTranPwd:o()(n.oldTranPwd),newTranPwdOne:o()(n.newTranPwdOne)}),b("".concat(y,"api/resetAllPwd"),c.a.stringify(n))};function $(n,t){return h("".concat(y,"api/bankCard/").concat(n),null,t)}function nn(n,t){return v("".concat(y,"api/integralList"),null,t)}function tn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{typeId:1}),v("".concat("/jdapi/","goodsClassLists"),n,t)}function en(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{limit:p.a.store.PAGE_LIMIT}),v("".concat("/jdapi/","goodsLists"),n,t)}function an(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat("/jdapi/","mail/address"),n,t)}function rn(n){return n=Object(a.a)({},n,{addType:1}),w("".concat("/jdapi/","mail/address"),c.a.stringify(n))}function cn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object(a.a)({},n,{addType:1}),v("".concat("/jdapi/","mail/userAddressList"),n,t)}function on(n,t){return h("".concat("/jdapi/","mail/address/").concat(n),null,t)}function dn(n){var t=o()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&skuId=").concat(n.skuId,"&count=").concat(n.count,"&addressId=").concat(n.addressId,"&tranPwd=").concat(t)),timestamp:P}),w("".concat("/jdapi/","mail/placeOrder"),c.a.stringify(n))}function un(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return v("".concat("/jdapi/","mail/JDFreight"),n,t)}function sn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,e="";return e="/jdapi/",n=Object(a.a)({},n,{limit:p.a.store.PAGE_LIMIT}),v("".concat(e,"mail/JDOrders"),n,t)}function ln(n,t){return v("".concat("/jdapi/","mail/JDTrack/").concat(n),null,t)}},373:function(n,t,e){n.exports=e.p+"static/media/home.73f12746.svg"},378:function(n,t,e){"use strict";var a=e(115),r=e(0),c=e.n(r),i=e(116),o=e(380),d=e.n(o);function u(){var n=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return n},n}var s=i.a.div(u());t.a=function(){return c.a.createElement(s,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},380:function(n,t,e){n.exports=e.p+"static/media/empty.8103a6b5.svg"},383:function(n,t,e){"use strict";var a=e(115),r=e(0),c=e.n(r);function i(){var n=Object(a.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return i=function(){return n},n}var o=e(116).a.div(i());t.a=function(n){for(var t=n.count,e=void 0===t?1:t,a=[],r=0;r<e;r++)a.push(c.a.createElement("div",{key:r,className:"item"},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line w80"}),c.a.createElement("div",{className:"line w50"}),c.a.createElement("div",{className:"line w30"})));return c.a.createElement(o,null,a)}},538:function(n,t,e){n.exports=e.p+"static/media/banner.b32aa538.png"},539:function(n,t,e){n.exports=e.p+"static/media/integral.2d0d36ee.png"},540:function(n,t,e){n.exports=e.p+"static/media/transfer.1b0a9ca2.png"},558:function(n,t,e){"use strict";e.r(t);var a=e(376),r=e.n(a),c=e(377),i=e(59),o=e(60),d=e(63),u=e(61),s=e(62),l=e(0),f=e.n(l),m=e(375),p=e(542),g=e(372),v=e(371),h=e(383),b=e(120),w=e(378);function y(n){var t=n.points,e=(n.remark,n.createTime);return f.a.createElement("div",{className:"item"},f.a.createElement("div",null,f.a.createElement("h3",null,"\u6dfb\u52a0\u79ef\u5206"),f.a.createElement("div",{className:"date"},b.a.formatTimestamp(e))),f.a.createElement("div",{className:"integral"},"+",t))}var P=function(n){var t=n.items;return t.length?f.a.createElement("div",{className:"list"},t.map(function(n){return f.a.createElement(y,{key:n.id,points:n.points,remark:n.remark,createTime:n.createTime})})):f.a.createElement(w.a,null)},j=e(115);function k(){var n=Object(j.a)(['\n  header{\n    position: relative;\n    margin: 0 5px;\n    background: #fff;\n    .content{\n      position: absolute;\n      top: 15%;\n      left: 8%;\n      color: #e1e1e1;\n      .integral{\n        margin-bottom: 8%;\n      }\n      strong{\n        color: #fff;\n        font-size: 30px;\n      }\n      a{\n        color: #e1e1e1;\n        font-size: 12px;\n        padding: 2px 10px;\n        border-radius: 8px;\n        border: 1px solid #e1e1e1;\n      }\n    }\n  }\n  nav{\n    display: flex;\n    margin-bottom: 10px;\n    background: #fff;\n    a{\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 10px 0;\n      img{\n        width: 50px;\n        margin-right: 5px;\n      }\n    }\n  }  \n  main{\n    h2{\n      font-size: 16px;\n      padding: 15px;\n      background: #fff;\n    }\n    .list{\n      .item{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 15px;\n        background: #fff;\n        position: relative;\n        &:after{\n          content: " ";\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          height: 1px;\n          border-bottom: 1px solid #e5e5e5;\n          transform: scaleY(0.5);\n        }   \n        h3{\n          font-size: 14px;\n          font-weight: bold;\n        }\n        .date{\n          color: #888;\n        } \n        .integral{\n          color: #58a1ff;\n          font-size: 16px;\n          font-weight: bold;\n        }    \n      }\n    }\n  }\n']);return k=function(){return n},n}var O=e(116).a.div(k()),x=e(538),E=e.n(x),I=e(539),T=e.n(I),N=e(540),L=e.n(N),C=function(n){function t(n){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this,n))).state={loading:!0,items:[]},e}return Object(s.a)(t,n),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadIntegralList()}},{key:"loadIntegralList",value:function(){var n=Object(c.a)(r.a.mark(function n(){var t,e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(g.p)();case 3:t=n.sent,200===(e=t.data).status&&this.setState({items:e.data});case 6:return n.prev=6,this.setState({loading:!1}),n.finish(6);case 9:case"end":return n.stop()}},n,this,[[0,,6,9]])}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return f.a.createElement(O,null,f.a.createElement(m.Helmet,{title:"\u6211\u7684\u79ef\u5206"}),f.a.createElement("header",null,f.a.createElement("img",{src:E.a,alt:""}),f.a.createElement("div",{className:"content"},f.a.createElement("div",{className:"integral"},"\u53ef\u7528\u79ef\u5206\uff1a",f.a.createElement("strong",null,"2500")),f.a.createElement(p.a,{to:"/"},"\u6dfb\u52a0\u79ef\u5206\u5238"))),f.a.createElement("nav",null,f.a.createElement(p.a,{to:"/redeem"},f.a.createElement("img",{src:T.a,alt:""}),"\u79ef\u5206\u4ee3\u5356"),f.a.createElement(p.a,{to:"/transfer"},f.a.createElement("img",{src:L.a,alt:""}),"\u79ef\u5206\u8f6c\u8d60")),f.a.createElement("main",null,f.a.createElement("h2",null,"\u79ef\u5206\u5238\u8bb0\u5f55"),this.state.loading?f.a.createElement("div",{className:"u_m_xxx"},f.a.createElement(h.a,{count:2})):f.a.createElement(P,{items:this.state.items})),f.a.createElement(v.a,null))}}]),t}(l.Component);e.d(t,"view",function(){return C})}}]);
//# sourceMappingURL=46.03db7e5c.chunk.js.map