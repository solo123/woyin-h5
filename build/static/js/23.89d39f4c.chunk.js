(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{403:function(t,e,n){"use strict";var a=n(60),r=n(61),c=n(64),i=n(62),o=n(63),d=n(117),u=n(0),s=n.n(u),l=n(118),p=n(552),f=n(122),m=n(404),h=n.n(m);function g(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var y=l.b.div(b()),w=l.b.div(v()),k=l.b.img(g()),x=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){f.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(y,{id:"mover"},s.a.createElement(p.a,{to:"/"},s.a.createElement(w,null,s.a.createElement(k,{src:h.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),e}(u.Component);e.a=x},404:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},405:function(t,e,n){"use strict";var a=n(46),r=n(411),c=n.n(r),i=n(412),o=n.n(i),d=n(406),u=n.n(d),s=n(120),l=n.n(s),p=n(82),f=n(32),m=n(119),h=u.a.create();h.defaults.timeout=m.a.timeout,h.interceptors.request.use(function(t){var e=Object(f.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:p.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},n,{params:e}))},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},n,{params:e}))},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,e,n)},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,e,n)};n.d(e,"I",function(){return O}),n.d(e,"E",function(){return P}),n.d(e,"l",function(){return C}),n.d(e,"m",function(){return j}),n.d(e,"o",function(){return N}),n.d(e,"n",function(){return A}),n.d(e,"R",function(){return E}),n.d(e,"J",function(){return I}),n.d(e,"A",function(){return T}),n.d(e,"G",function(){return L}),n.d(e,"D",function(){return _}),n.d(e,"z",function(){return S}),n.d(e,"a",function(){return B}),n.d(e,"C",function(){return G}),n.d(e,"F",function(){return M}),n.d(e,"H",function(){return D}),n.d(e,"T",function(){return U}),n.d(e,"b",function(){return H}),n.d(e,"k",function(){return R}),n.d(e,"y",function(){return Y}),n.d(e,"p",function(){return F}),n.d(e,"B",function(){return z}),n.d(e,"M",function(){return V}),n.d(e,"N",function(){return J}),n.d(e,"O",function(){return W}),n.d(e,"L",function(){return K}),n.d(e,"P",function(){return Q}),n.d(e,"Q",function(){return X}),n.d(e,"d",function(){return q}),n.d(e,"h",function(){return Z}),n.d(e,"e",function(){return $}),n.d(e,"i",function(){return tt}),n.d(e,"S",function(){return et}),n.d(e,"g",function(){return nt}),n.d(e,"r",function(){return at}),n.d(e,"q",function(){return rt}),n.d(e,"v",function(){return ct}),n.d(e,"u",function(){return it}),n.d(e,"j",function(){return ot}),n.d(e,"c",function(){return dt}),n.d(e,"s",function(){return ut}),n.d(e,"f",function(){return st}),n.d(e,"K",function(){return lt}),n.d(e,"t",function(){return pt}),n.d(e,"w",function(){return ft}),n.d(e,"x",function(){return mt});var w="",k="";w="/client/",k="/jdapi/";var x=String((new Date).getTime()),O=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:o()(t.password)})),y("".concat(w,"user/login"),c.a.stringify(t))},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/getUserInfo"),t,e)},C=function(t){return t=Object(a.a)({},t,{codeType:1}),y("".concat(w,"user/getCode"),c.a.stringify(t))},j=function(t){var e={userPhoneNo:t,codeType:2};return y("".concat(w,"user/getCode"),c.a.stringify(e))},N=function(t){var e={userPhoneNo:t,codeType:3};return y("".concat(w,"user/getCode"),c.a.stringify(e))},A=function(t){var e={userPhoneNo:t,codeType:4};return y("".concat(w,"user/getCode"),c.a.stringify(e))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:e,payment:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(e,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:x}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:e,payment:"2",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(e,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:x}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:1}),g("".concat(w,"api/trad/poundageList"),t)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:2}),g("".concat(w,"api/trad/poundageList"),t)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:3}),g("".concat(w,"api/trad/poundageList"),t)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"product/list"),{productClassifyId:t},e)},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(w,"product/list"),{},t)},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/product/subList"),{productClassifyId:t},e)},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:m.a.voucher.PAGE_LIMIT});return g("".concat(w,"api/voucher/list"),n,e)},D=function(t){var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/transferred/commit"),c.a.stringify(t))},U=function(t,e){var n=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT});return g("".concat(w,"api/transferred/list"),n,e)},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:x}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(t))},R=function(){return g("".concat(w,"api/bank/getBankCardList"))},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:m.a.order.PAGE_LIMIT});return g("".concat(w,"api/order/getOrderList"),n,e)};function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:m.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(w,"api/trad/getWithList"),n,e)}var z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(w,"api/trad/getWithList"),n,e)};function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/traffic/charge"),c.a.stringify(t))}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(t))}var Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(e,"&productId=").concat(t.productId)),timestamp:x}),y("".concat(w,"api/video/charge"),c.a.stringify(t))},X=function(t){var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&amount=").concat(t.amount,"&tranPwd=").concat(e,"&productId=").concat(t.productId)),timestamp:x}),y("".concat(w,"api/voucher/charge"),c.a.stringify(t))};function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),e)}var Z=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(t))};function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),e)}var tt=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(t))},et=function(t){return t=Object(a.a)({},t,{oldLoginPwd:o()(t.oldLoginPwd),newLoginPwdOne:o()(t.newLoginPwdOne),oldTranPwd:o()(t.oldTranPwd),newTranPwdOne:o()(t.newTranPwdOne)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(t))};function nt(t,e){return v("".concat(w,"api/bankCard/").concat(t),null,e)}function at(t,e){return g("".concat(w,"api/integralList"),null,e)}function rt(){return g("".concat(k,"sellingGoods"))}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),g("".concat(k,"goodsClassLists"),t,e)}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"goodsLists"),t,e)}function ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(k,"mail/address"),t,e)}function dt(t){return t=Object(a.a)({},t,{addType:1}),y("".concat(k,"mail/address"),c.a.stringify(t))}function ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),g("".concat(k,"mail/userAddressList"),t,e)}function st(t,e){return v("".concat(k,"mail/address/").concat(t),null,e)}function lt(t){var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(k,"mail/placeOrder"),c.a.stringify(t))}function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return g("".concat(k,"mail/JDFreight"),t,e)}function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"mail/JDOrders"),t,e)}function mt(t,e){return g("".concat(k,"mail/JDTrack/").concat(t),null,e)}},422:function(t,e,n){t.exports=n.p+"static/media/arrow_right.8075ec42.svg"},515:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AgMAAABECt5BAAAACVBMVEUAAADMzMy/v78DtsYsAAAAAnRSTlMABQb5ObcAAAA0SURBVEjH7dGhDQAwDAPB4E7fOTxlcUhBpUoB99AHXa2V7DZgjDHGvznX8AtP/htjjDGuA9aKrYrXtkKnAAAAAElFTkSuQmCC"},516:function(t,e,n){t.exports=n.p+"static/media/banner.3d0547c4.jpg"},572:function(t,e,n){"use strict";n.r(e);var a=n(125),r=n(408),c=n.n(r),i=n(409),o=n(60),d=n(61),u=n(64),s=n(62),l=n(63),p=n(123),f=n(0),m=n.n(f),h=n(65),g=n(120),v=n.n(g),b=n(406),y=n.n(b),w=n(407),k=n(119),x=n(122),O=n(405),P=n(403),C=n(552),j=n(515),N=n.n(j),A=n(422),E=n.n(A);var I=function(t){var e=t.hasCard,n=t.handleOpenPicker,a=t.data;return e?m.a.createElement("div",{className:"u_p_xxx u_mb_xx u_bg_white"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"aside"},m.a.createElement("img",{className:"icon",src:x.a.getBankCardLogo(a.bankCode),alt:""})),m.a.createElement("div",{className:"main"},m.a.createElement("p",{className:"title"},a.bankName," (\u5c3e\u53f7",m.a.createElement("span",null,x.a.getBankcardLastNum(a.bankCard)),")"),m.a.createElement("p",{className:"text"},"\u9884\u8ba1\u4e0b\u4e00\u5de5\u4f5c\u65e5\u5230\u8d26\uff0c\u5b9e\u9645\u4ee5\u94f6\u884c\u5230\u8d26\u65e5\u4e3a\u51c6")),m.a.createElement("div",{className:"foot"},m.a.createElement("img",{className:"arrow",onClick:n,src:E.a,alt:""})))):m.a.createElement("div",{className:"empty"},m.a.createElement(C.a,{to:{pathname:"bankcard-add",state:{from:"/credit-card"}}},m.a.createElement("div",{className:"wrap"},m.a.createElement("img",{className:"icon",src:N.a,alt:""}),m.a.createElement("p",null,"\u8bf7\u6dfb\u52a0\u4fe1\u7528\u5361"))),m.a.createElement("p",{className:"text"},"\u6682\u65e0\u53ef\u7528"))},T=n(117);function L(){var t=Object(T.a)(["\n  .info{\n    color: #888;\n    font-size: 12px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #eaeaea;\n  }\n  .card{\n    display: flex;\n    align-items: center;\n    .icon{\n      width: 40px;\n      height: 40px;\n      display: block;\n    }\n    .main{\n      flex: 1;\n      margin-left: 10px;\n      p{\n        margin: 0;\n      }\n      .title{\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 5px;\n      }\n      .text{\n        line-height: 1.5;\n        font-size: 12px;\n        color: #888;\n      }\n    }  \n    .arrow{\n      width: 20px;\n      height: 40px;\n    }  \n  }\n  .empty{\n    text-align: center;\n    position: relative;\n    margin-top: -30px;\n    .wrap{\n      font-size: 16px;\n      background: #fff;\n      margin: 15px 15px 0 15px;\n      padding: 15px 15px 20px 15px;\n      border-radius: 5px;\n      box-shadow: 0 1px 3px rgba(26,26,26,.1);\n    }\n    .icon{\n      width: 20px;\n      height: 20px;\n    }\n    .text{\n      padding: 5px 0;\n      color: #888;\n    }\n  }\n  .input-box{\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 0;\n    border-bottom: 1px solid #eaeaea;\n    .tip{\n      font-size: 12px;\n      color: #ee6076;\n      flex-shrink: 0;\n    }\n  }\n  .group{\n    display: flex;\n    align-items: center;\n    &__body{\n      flex: 1;\n    }\n    &__foot{\n      margin-left: 10px;\n    }\n  }  \n"]);return L=function(){return t},t}var _=n(118).b.div(L()),S=n(516),B=n.n(S);function G(t,e){var n=t.filter(function(t){return t.id===e});return n&&n.length&&n[0]}function M(t){var e=t.flag,n=t.interval,a=t.handleClick;return e?m.a.createElement("button",{className:"btn btn-primary btn-mini",onClick:a},"\u83b7\u53d6\u77ed\u4fe1\u7801"):m.a.createElement("button",{className:"btn btn-mini disable"},n,"\u79d2\u540e\u91cd\u53d1")}var D=y.a.CancelToken,U=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).handleGetCode=n.handleGetCode.bind(Object(p.a)(Object(p.a)(n))),n.handleOpenPicker=n.handleOpenPicker.bind(Object(p.a)(Object(p.a)(n))),n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleBlur=n.handleBlur.bind(Object(p.a)(Object(p.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n.state={code:"",getCodeFlag:!0,interval:k.a.creditCard.INTERVAL,id:"",hasCard:!1,cardList:[],poundage:0,actualReceived:0,money:0,integral:0,availableIntegral:0},n}return Object(l.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.loadUserInfo(),this.loadBankCardList()}},{key:"componentWillUnmount",value:function(){this.loadUserInfoSource&&this.loadUserInfoSource.cancel("Operation canceled by the user."),this.loadCardListSource&&this.loadCardListSource.cancel("Operation canceled by the user.")}},{key:"loadUserInfo",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadUserInfoSource=D.source(),t.prev=1,t.next=4,Object(O.E)(null,{cancelToken:this.loadUserInfoSource.token});case 4:e=t.sent,200===(n=e.data).status&&this.setState({availableIntegral:Number(n.data[0].balance)});case 7:return t.prev=7,t.finish(7);case 9:case"end":return t.stop()}},t,this,[[1,,7,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadBankCardList",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n,a,r=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadCardListSource=D.source(),t.prev=1,t.next=4,Object(O.k)(null,{cancelToken:this.loadCardListSource.token});case 4:e=t.sent,200===(n=e.data).status&&(a=x.a.filterCreditCardList(n.data),this.setState({cardList:a},function(){var t=a[0];t&&r.setState({id:t.id},function(){r.setState({hasCard:!0})})}));case 7:return t.prev=7,t.finish(7);case 9:case"end":return t.stop()}},t,this,[[1,,7,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadCode",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n,a,r=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.a.loading("\u53d1\u9001\u4e2d"),t.prev=1,t.next=4,Object(O.o)(this.props.phone);case 4:n=t.sent,200===(a=n.data).status&&this.setState({getCodeFlag:!1},function(){r.countDown()}),v.a.alert(a.msg);case 8:return t.prev=8,e.hide(),t.finish(8);case 11:case"end":return t.stop()}},t,this,[[1,,8,11]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadWithdrawFee",value:function(){var t=Object(i.a)(c.a.mark(function t(e){var n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.G)(e);case 2:n=t.sent,200===(a=n.data).status&&this.updateFee(a.data);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"doSubmit",value:function(){var t=Object(i.a)(c.a.mark(function t(e){var n,a,r,i=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=v.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(O.J)(e);case 4:a=t.sent,200===(r=a.data).status?v.a.alert(r.msg):1017===r.status?x.a.confirmRetry("\u5bc6\u7801\u9519\u8bef",function(){i.retryTransPswd()}):v.a.alert(r.msg);case 7:return t.prev=7,n.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,null,[[1,,7,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"retryTransPswd",value:function(){this.handleSubmit()}},{key:"countDown",value:function(){var t=this;this.state.interval>0?setTimeout(function(){t.setState({interval:t.state.interval-1},function(){t.countDown()})},1e3):this.resetGetCode()}},{key:"resetGetCode",value:function(){this.setState({interval:k.a.creditCard.INTERVAL,getCodeFlag:!0})}},{key:"updateFee",value:function(t){var e=t.poundage,n=t.totalAmount,a=t.money;this.setState({poundage:e,totalAmount:n,money:a})}},{key:"handleOpenPicker",value:function(){var t=this;if(!this.state.cardList.length)return v.a.alert("\u6682\u65e0\u53ef\u7528\u4fe1\u7528\u5361"),!1;v.a.picker(x.a.parseBankcardList(this.state.cardList),{defaultValue:[0],onConfirm:function(e){e&&e[0]&&t.setState({id:e[0].id})}})}},{key:"handleGetCode",value:function(){this.loadCode()}},{key:"handleBlur",value:function(t){if(this.state.integral>=k.a.creditCard.MIN_INTEGRAL){var e={amount:this.state.integral};this.loadWithdrawFee(e)}else this.setState({poundage:0,totalAmount:0,money:0})}},{key:"handleChange",value:function(t){var e=t.target.name,n="integral"===e?Number(t.target.value):t.target.value;this.setState(Object(a.a)({},e,n))}},{key:"verify",value:function(){if(this.state.hasCard)if(this.state.integral)if(this.state.integral<k.a.redeem.MIN_INTEGRAL)v.a.alert("\u4f7f\u7528\u79ef\u5206\u4e0d\u80fd\u5c11\u4e8e".concat(k.a.redeem.MIN_INTEGRAL));else if(this.state.integral>this.state.availableIntegral)v.a.alert("\u79ef\u5206\u4e0d\u8db3");else{if(this.state.code)return!0;v.a.alert("\u8bf7\u8f93\u5165\u77ed\u4fe1\u7801")}else v.a.alert("\u8bf7\u8f93\u5165\u79ef\u5206");else v.a.alert("\u6682\u65e0\u53ef\u7528\u7684\u4fe1\u7528\u5361")}},{key:"handleSubmit",value:function(){var t=this;this.verify()&&x.a.paymentConfirm({title:"\u4fe1\u7528\u5361\u8fd8\u6b3e",amount:this.state.integral,useable:this.state.availableIntegral,callback:function(e,n){if(!n.value.trim())return!1;var a=G(t.state.cardList,t.state.id),r={bankCard:a.bankCard,bankCode:a.bankCode,bankName:a.bankName,cardHoldName:a.cardHoldName,cardPhoneNo:a.userPhoneNo,code:t.state.code,tradPwd:n.value,amount:t.state.integral};t.doSubmit(r)}})}},{key:"render",value:function(){var t=this.state,e=t.id,n=t.hasCard,a=t.cardList,r=t.getCodeFlag,c=this.state.integral||"";return m.a.createElement(_,null,m.a.createElement(w.Helmet,{title:"\u4fe1\u7528\u5361\u8fd8\u6b3e"}),m.a.createElement("header",null,m.a.createElement("img",{src:B.a,alt:""})),m.a.createElement(I,{hasCard:n,handleOpenPicker:this.handleOpenPicker,data:G(a,e)}),m.a.createElement("div",{className:"u_bg_white"},m.a.createElement("div",{className:"u_p_xxx"},m.a.createElement("h2",null,"\u8fd8\u6b3e"),m.a.createElement("div",{className:"input-box"},m.a.createElement("input",{text:"number",name:"integral",value:c,className:"input input-primary",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"\u6700\u591a\u53ef\u4f7f\u7528 ".concat(this.state.availableIntegral," \u79ef\u5206")}),m.a.createElement("div",{className:"tip"},"\u53ef\u7528\u79ef\u5206\uff1a",this.state.availableIntegral))),m.a.createElement("div",{className:"u_px_xxx u_pb_xxx"},m.a.createElement("div",{className:"info"},m.a.createElement("p",null,"\u6263\u9664 ",this.state.totalAmount," \u79ef\u5206\uff0c\u8fd8\u6b3e ",this.state.money," \u5143"),m.a.createElement("p",null,"\u624b\u7eed\u8d39 ",this.state.poundage," \u79ef\u5206\uff0c100 \u79ef\u5206\u7b49\u4e8e 1 \u5143"))),m.a.createElement("div",{className:"u_px_xxx u_pb_xxx"},m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__body"},m.a.createElement("input",{text:"number",name:"code",value:this.state.code,className:"input input-primary",onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u77ed\u4fe1\u7801"})),m.a.createElement("div",{className:"group__foot"},m.a.createElement(M,{flag:r,interval:this.state.interval,handleClick:this.handleGetCode}))))),m.a.createElement("div",{className:"u_p_xxx"},m.a.createElement("button",{className:"btn btn-primary",onClick:this.handleSubmit},"\u7acb\u5373\u8fd8\u6b3e")),m.a.createElement(P.a,null))}}]),e}(f.Component),H=Object(h.b)(function(t){return{phone:t.auth.phone}},function(t,e){return{}})(U);n.d(e,"view",function(){return H})}}]);
//# sourceMappingURL=23.89d39f4c.chunk.js.map