(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{403:function(n,t,e){"use strict";var a=e(60),r=e(61),c=e(64),o=e(62),i=e(63),d=e(117),u=e(0),s=e.n(u),l=e(118),f=e(552),p=e(122),m=e(405),g=e.n(m);function v(){var n=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return v=function(){return n},n}function h(){var n=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return h=function(){return n},n}function b(){var n=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return n},n}var y=l.b.div(b()),w=l.b.div(h()),P=l.b.img(v()),k=function(n){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,n),Object(r.a)(t,[{key:"componentDidMount",value:function(){p.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(y,{id:"mover"},s.a.createElement(f.a,{to:"/"},s.a.createElement(w,null,s.a.createElement(P,{src:g.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),t}(u.Component);t.a=k},404:function(n,t,e){"use strict";var a=e(46),r=e(411),c=e.n(r),o=e(412),i=e.n(o),d=e(406),u=e.n(d),s=e(120),l=e.n(s),f=e(82),p=e(32),m=e(119),g=u.a.create();g.defaults.timeout=m.a.timeout,g.interceptors.request.use(function(n){var t=Object(p.a)("token");return t&&(n.headers.Authorization="Bearer ".concat(t)),n},function(n){return Promise.reject(n)}),g.interceptors.response.use(function(n){return n},function(n){if(n.response)switch(parseInt(n.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(n)});var v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(n,Object(a.a)({},e,{params:t}))},h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.delete(n,Object(a.a)({},e,{params:t}))},b=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.put(n,t,e)},y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(n,t,e)};e.d(t,"H",function(){return O}),e.d(t,"D",function(){return j}),e.d(t,"l",function(){return I}),e.d(t,"m",function(){return x}),e.d(t,"o",function(){return T}),e.d(t,"n",function(){return E}),e.d(t,"Q",function(){return N}),e.d(t,"I",function(){return C}),e.d(t,"A",function(){return L}),e.d(t,"F",function(){return A}),e.d(t,"z",function(){return M}),e.d(t,"a",function(){return U}),e.d(t,"C",function(){return Y}),e.d(t,"E",function(){return H}),e.d(t,"G",function(){return G}),e.d(t,"S",function(){return D}),e.d(t,"b",function(){return S}),e.d(t,"k",function(){return _}),e.d(t,"y",function(){return J}),e.d(t,"p",function(){return z}),e.d(t,"B",function(){return B}),e.d(t,"L",function(){return R}),e.d(t,"M",function(){return W}),e.d(t,"N",function(){return q}),e.d(t,"K",function(){return F}),e.d(t,"O",function(){return K}),e.d(t,"P",function(){return Q}),e.d(t,"d",function(){return V}),e.d(t,"h",function(){return X}),e.d(t,"e",function(){return Z}),e.d(t,"i",function(){return $}),e.d(t,"R",function(){return nn}),e.d(t,"g",function(){return tn}),e.d(t,"r",function(){return en}),e.d(t,"q",function(){return an}),e.d(t,"v",function(){return rn}),e.d(t,"u",function(){return cn}),e.d(t,"j",function(){return on}),e.d(t,"c",function(){return dn}),e.d(t,"s",function(){return un}),e.d(t,"f",function(){return sn}),e.d(t,"J",function(){return ln}),e.d(t,"t",function(){return fn}),e.d(t,"w",function(){return pn}),e.d(t,"x",function(){return mn});var w="",P="";w="/client/",P="/jdapi/";var k=String((new Date).getTime()),O=function(n){return 1===n.loginType&&(n=Object(a.a)({},n,{password:i()(n.password)})),y("".concat(w,"user/login"),c.a.stringify(n))},j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/user/getUserInfo"),n,t)},I=function(n){return n=Object(a.a)({},n,{codeType:1}),y("".concat(w,"user/getCode"),c.a.stringify(n))},x=function(n){var t={userPhoneNo:n,codeType:2};return y("".concat(w,"user/getCode"),c.a.stringify(t))},T=function(n){var t={userPhoneNo:n,codeType:3};return y("".concat(w,"user/getCode"),c.a.stringify(t))},E=function(n){var t={userPhoneNo:n,codeType:4};return y("".concat(w,"user/getCode"),c.a.stringify(t))},N=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tradPwd);return n=Object(a.a)({},n,{tradPwd:t,payment:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&amount=").concat(n.amount,"&bankCode=").concat(n.bankCode,"&bankName=").concat(n.bankName,"&cardHoldName=").concat(n.cardHoldName,"&cardPhoneNo=").concat(n.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(n.code,"&bankCard=").concat(n.bankCard,"&payment=").concat("1")),timestamp:k}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(n))},C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tradPwd);return n=Object(a.a)({},n,{tradPwd:t,payment:"2",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&amount=").concat(n.amount,"&bankCode=").concat(n.bankCode,"&bankName=").concat(n.bankName,"&cardHoldName=").concat(n.cardHoldName,"&cardPhoneNo=").concat(n.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(n.code,"&bankCard=").concat(n.bankCard,"&payment=").concat("2")),timestamp:k}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(n))},L=function(n){return v("".concat(w,"api/trad/poundageList"),{amount:n})},A=function(n){return v("".concat(w,"api/trad/poundageList"),{amount:n})},M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"product/list"),{productClassifyId:n},t)},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v("".concat(w,"product/list"),{},n)},Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/product/subList"),{productClassifyId:n},t)},H=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:m.a.voucher.PAGE_LIMIT});return v("".concat(w,"api/voucher/list"),e,t)},G=function(n){var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&to=").concat(n.to,"&num=").concat(n.num,"&tranPwd=").concat(t)),timestamp:k}),y("".concat(w,"api/transferred/commit"),c.a.stringify(n))},D=function(n,t){var e=Object(a.a)({},n,{limit:m.a.redeem.PAGE_LIMIT});return v("".concat(w,"api/transferred/list"),e,t)},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n=Object(a.a)({},n,{sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&cardPhoneNo=").concat(n.cardPhoneNo,"&bankCard=").concat(n.bankCard,"&cardHoldName=").concat(n.cardHoldName,"&idNo=").concat(n.idNo)),timestamp:k}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(n))},_=function(){return v("".concat(w,"api/bank/getBankCardList"))},J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:m.a.order.PAGE_LIMIT});return v("".concat(w,"api/order/getOrderList"),e,t)};function z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:m.a.creditRecord.PAGE_LIMIT,payment:2});return v("".concat(w,"api/trad/getWithList"),e,t)}var B=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:m.a.redeem.PAGE_LIMIT,payment:1});return v("".concat(w,"api/trad/getWithList"),e,t)};function R(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat("1","&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:k}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(n))}function W(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat(n.chargeType,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:k}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(n))}function q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tranPwd);return n=Object(a.a)({},n,{range:"0",tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&phone=").concat(n.phone,"&range=").concat("0","&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:k}),y("".concat(w,"api/traffic/charge"),c.a.stringify(n))}function F(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&cardNumber=").concat(n.cardNumber,"&cardType=").concat(n.cardType,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:k}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(n))}var K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(t,"&productId=").concat(n.productId)),timestamp:k}),y("".concat(w,"api/video/charge"),c.a.stringify(n))},Q=function(n){var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&amount=").concat(n.amount,"&tranPwd=").concat(t,"&productId=").concat(n.productId)),timestamp:k}),y("".concat(w,"api/voucher/charge"),c.a.stringify(n))};function V(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{oldPwd:i()(n.oldPwd),newPwdOne:i()(n.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(n),t)}var X=function(n){return n=Object(a.a)({},n,{password:i()(n.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(n))};function Z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{oldPwd:i()(n.oldPwd),newPwdOne:i()(n.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(n),t)}var $=function(n){return n=Object(a.a)({},n,{password:i()(n.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(n))},nn=function(n){return n=Object(a.a)({},n,{oldLoginPwd:i()(n.oldLoginPwd),newLoginPwdOne:i()(n.newLoginPwdOne),oldTranPwd:i()(n.oldTranPwd),newTranPwdOne:i()(n.newTranPwdOne)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(n))};function tn(n,t){return h("".concat(w,"api/bankCard/").concat(n),null,t)}function en(n,t){return v("".concat(w,"api/integralList"),null,t)}function an(){return v("".concat(P,"sellingGoods"))}function rn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{typeId:1}),v("".concat(P,"goodsClassLists"),n,t)}function cn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{limit:m.a.store.PAGE_LIMIT}),v("".concat(P,"goodsLists"),n,t)}function on(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(P,"mail/address"),n,t)}function dn(n){return n=Object(a.a)({},n,{addType:1}),y("".concat(P,"mail/address"),c.a.stringify(n))}function un(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object(a.a)({},n,{addType:1}),v("".concat(P,"mail/userAddressList"),n,t)}function sn(n,t){return h("".concat(P,"mail/address/").concat(n),null,t)}function ln(n){var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&skuId=").concat(n.skuId,"&count=").concat(n.count,"&addressId=").concat(n.addressId,"&tranPwd=").concat(t)),timestamp:k}),y("".concat(P,"mail/placeOrder"),c.a.stringify(n))}function fn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return v("".concat(P,"mail/JDFreight"),n,t)}function pn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{limit:m.a.store.PAGE_LIMIT}),v("".concat(P,"mail/JDOrders"),n,t)}function mn(n,t){return v("".concat(P,"mail/JDTrack/").concat(n),null,t)}},405:function(n,t,e){n.exports=e.p+"static/media/home.73f12746.svg"},536:function(n,t,e){n.exports=e.p+"static/media/banner.b32aa538.png"},537:function(n,t,e){n.exports=e.p+"static/media/integral.2d0d36ee.png"},538:function(n,t,e){n.exports=e.p+"static/media/transfer.1b0a9ca2.png"},592:function(n,t,e){"use strict";e.r(t);var a=e(408),r=e.n(a),c=e(46),o=e(409),i=e(60),d=e(61),u=e(64),s=e(62),l=e(63),f=e(0),p=e.n(f),m=e(407),g=e(552),v=e(406),h=e.n(v),b=e(404),y=e(403),w=e(117);function P(){var n=Object(w.a)(["\n  header{\n    position: relative;\n    padding: 5px 10px;\n    background: #fff;\n    .content{\n      position: absolute;\n      top: 12%;\n      left: 8%;\n      color: #e1e1e1;\n      .integral{\n        margin-bottom: 3%;\n        .info{\n          margin-bottom: 10px;\n        }\n      }\n      strong{\n        color: #fff;\n        font-size: 30px;\n      }\n      a{\n        color: #e1e1e1;\n        font-size: 12px;\n        padding: 2px 10px;\n        border-radius: 8px;\n        border: 1px solid #e1e1e1;\n      }\n    }\n  }\n  nav{\n    display: flex;\n    margin-bottom: 10px;\n    background: #fff;\n    a{\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 10px 0;\n      img{\n        width: 50px;\n        margin-right: 5px;\n      }\n    }\n  }  \n  .link{\n    text-align: right;\n    margin-right: 15px;\n    a{\n      font-size: 12px;\n      color: #1c92ff;\n    }\n  }\n"]);return P=function(){return n},n}var k=e(118).b.div(P()),O=e(536),j=e.n(O),I=e(537),x=e.n(I),T=e(538),E=e.n(T),N=h.a.CancelToken,C=function(n){function t(n){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).state={balance:0},e}return Object(l.a)(t,n),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadUserInfo()}},{key:"componentWillUnmount",value:function(){this.loadUserInfoSource&&this.loadUserInfoSource.cancel("Operation canceled by the user.")}},{key:"loadUserInfo",value:function(){var n=Object(o.a)(r.a.mark(function n(){var t,e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loadUserInfoSource=N.source(),n.prev=1,n.next=4,Object(b.D)(null,{cancelToken:this.loadUserInfoSource.token});case 4:if(t=n.sent,200!==(e=t.data).status){n.next=10;break}if(e.data.length){n.next=9;break}return n.abrupt("return");case 9:this.setState(Object(c.a)({},e.data[0]));case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}},n,this,[[1,,10,12]])}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return p.a.createElement(k,null,p.a.createElement(m.Helmet,{title:"\u6211\u7684\u79ef\u5206"}),p.a.createElement("header",null,p.a.createElement("img",{src:j.a,alt:""}),p.a.createElement("div",{className:"content"},p.a.createElement("div",{className:"integral"},p.a.createElement("div",{className:"info"},"\u53ef\u7528\u79ef\u5206\uff1a",p.a.createElement("strong",null,this.state.balance)),p.a.createElement("div",null,p.a.createElement(g.a,{to:"/distributing-record"},"\u79ef\u5206\u6d3e\u53d1\u8bb0\u5f55"))))),p.a.createElement("nav",null,p.a.createElement(g.a,{to:"/redeem"},p.a.createElement("img",{src:x.a,alt:""}),"\u79ef\u5206\u4ee3\u5356"),p.a.createElement(g.a,{to:"/transfer"},p.a.createElement("img",{src:E.a,alt:""}),"\u79ef\u5206\u8f6c\u8d60")),p.a.createElement("div",{className:"link"},p.a.createElement(g.a,{to:"/record-entry"},"\u79ef\u5206\u8bb0\u5f55")),p.a.createElement(y.a,null))}}]),t}(f.Component);e.d(t,"view",function(){return C})}}]);
//# sourceMappingURL=42.4b9de6bf.chunk.js.map