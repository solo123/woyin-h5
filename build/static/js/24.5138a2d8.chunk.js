(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{403:function(t,e,n){"use strict";var a=n(60),r=n(61),c=n(64),i=n(62),o=n(63),d=n(117),u=n(0),s=n.n(u),l=n(118),p=n(552),m=n(122),f=n(405),h=n.n(f);function g(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var w=l.b.div(b()),y=l.b.div(v()),k=l.b.img(g()),C=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){m.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(w,{id:"mover"},s.a.createElement(p.a,{to:"/"},s.a.createElement(y,null,s.a.createElement(k,{src:h.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),e}(u.Component);e.a=C},404:function(t,e,n){"use strict";var a=n(46),r=n(411),c=n.n(r),i=n(412),o=n.n(i),d=n(406),u=n.n(d),s=n(120),l=n.n(s),p=n(82),m=n(32),f=n(119),h=u.a.create();h.defaults.timeout=f.a.timeout,h.interceptors.request.use(function(t){var e=Object(m.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:p.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},n,{params:e}))},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},n,{params:e}))},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,e,n)},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,e,n)};n.d(e,"H",function(){return x}),n.d(e,"D",function(){return O}),n.d(e,"l",function(){return P}),n.d(e,"m",function(){return E}),n.d(e,"o",function(){return j}),n.d(e,"n",function(){return I}),n.d(e,"Q",function(){return N}),n.d(e,"I",function(){return T}),n.d(e,"A",function(){return A}),n.d(e,"F",function(){return B}),n.d(e,"z",function(){return L}),n.d(e,"a",function(){return S}),n.d(e,"C",function(){return _}),n.d(e,"E",function(){return M}),n.d(e,"G",function(){return Y}),n.d(e,"S",function(){return G}),n.d(e,"b",function(){return F}),n.d(e,"k",function(){return R}),n.d(e,"y",function(){return U}),n.d(e,"p",function(){return D}),n.d(e,"B",function(){return J}),n.d(e,"L",function(){return H}),n.d(e,"M",function(){return V}),n.d(e,"N",function(){return z}),n.d(e,"K",function(){return q}),n.d(e,"O",function(){return K}),n.d(e,"P",function(){return Q}),n.d(e,"d",function(){return W}),n.d(e,"h",function(){return Z}),n.d(e,"e",function(){return X}),n.d(e,"i",function(){return $}),n.d(e,"R",function(){return tt}),n.d(e,"g",function(){return et}),n.d(e,"r",function(){return nt}),n.d(e,"q",function(){return at}),n.d(e,"v",function(){return rt}),n.d(e,"u",function(){return ct}),n.d(e,"j",function(){return it}),n.d(e,"c",function(){return ot}),n.d(e,"s",function(){return dt}),n.d(e,"f",function(){return ut}),n.d(e,"J",function(){return st}),n.d(e,"t",function(){return lt}),n.d(e,"w",function(){return pt}),n.d(e,"x",function(){return mt});var y="",k="";y="/client/",k="/jdapi/";var C=String((new Date).getTime()),x=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:o()(t.password)})),w("".concat(y,"user/login"),c.a.stringify(t))},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(y,"api/user/getUserInfo"),t,e)},P=function(t){return t=Object(a.a)({},t,{codeType:1}),w("".concat(y,"user/getCode"),c.a.stringify(t))},E=function(t){var e={userPhoneNo:t,codeType:2};return w("".concat(y,"user/getCode"),c.a.stringify(e))},j=function(t){var e={userPhoneNo:t,codeType:3};return w("".concat(y,"user/getCode"),c.a.stringify(e))},I=function(t){var e={userPhoneNo:t,codeType:4};return w("".concat(y,"user/getCode"),c.a.stringify(e))},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:e,payment:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(e,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:C}),w("".concat(y,"api/trad/withdrawal"),c.a.stringify(t))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:e,payment:"2",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(e,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:C}),w("".concat(y,"api/trad/withdrawal"),c.a.stringify(t))},A=function(t){return g("".concat(y,"api/trad/poundageList"),{amount:t})},B=function(t){return g("".concat(y,"api/trad/poundageList"),{amount:t})},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(y,"product/list"),{productClassifyId:t},e)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(y,"product/list"),{},t)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(y,"api/product/subList"),{productClassifyId:t},e)},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.voucher.PAGE_LIMIT});return g("".concat(y,"api/voucher/list"),n,e)},Y=function(t){var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(e)),timestamp:C}),w("".concat(y,"api/transferred/commit"),c.a.stringify(t))},G=function(t,e){var n=Object(a.a)({},t,{limit:f.a.redeem.PAGE_LIMIT});return g("".concat(y,"api/transferred/list"),n,e)},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:C}),w("".concat(y,"api/bank/addBankCard"),c.a.stringify(t))},R=function(){return g("".concat(y,"api/bank/getBankCardList"))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.order.PAGE_LIMIT});return g("".concat(y,"api/order/getOrderList"),n,e)};function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(y,"api/trad/getWithList"),n,e)}var J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(y,"api/trad/getWithList"),n,e)};function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:C}),w("".concat(y,"api/charge/moreCredit"),c.a.stringify(t))}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:C}),w("".concat(y,"api/charge/moreCredit"),c.a.stringify(t))}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:C}),w("".concat(y,"api/traffic/charge"),c.a.stringify(t))}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:C}),w("".concat(y,"api/oilCard/charge"),c.a.stringify(t))}var K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(e,"&productId=").concat(t.productId)),timestamp:C}),w("".concat(y,"api/video/charge"),c.a.stringify(t))},Q=function(t){var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&amount=").concat(t.amount,"&tranPwd=").concat(e,"&productId=").concat(t.productId)),timestamp:C}),w("".concat(y,"api/voucher/charge"),c.a.stringify(t))};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),b("".concat(y,"api/modifyPwd"),c.a.stringify(t),e)}var Z=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),w("".concat(y,"user/changePwd"),c.a.stringify(t))};function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),b("".concat(y,"api/modifyPwd"),c.a.stringify(t),e)}var $=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),b("".concat(y,"api/resetTranPwd"),c.a.stringify(t))},tt=function(t){return t=Object(a.a)({},t,{oldLoginPwd:o()(t.oldLoginPwd),newLoginPwdOne:o()(t.newLoginPwdOne),oldTranPwd:o()(t.oldTranPwd),newTranPwdOne:o()(t.newTranPwdOne)}),b("".concat(y,"api/resetAllPwd"),c.a.stringify(t))};function et(t,e){return v("".concat(y,"api/bankCard/").concat(t),null,e)}function nt(t,e){return g("".concat(y,"api/integralList"),null,e)}function at(){return g("".concat(k,"sellingGoods"))}function rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),g("".concat(k,"goodsClassLists"),t,e)}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:f.a.store.PAGE_LIMIT}),g("".concat(k,"goodsLists"),t,e)}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(k,"mail/address"),t,e)}function ot(t){return t=Object(a.a)({},t,{addType:1}),w("".concat(k,"mail/address"),c.a.stringify(t))}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),g("".concat(k,"mail/userAddressList"),t,e)}function ut(t,e){return v("".concat(k,"mail/address/").concat(t),null,e)}function st(t){var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(C,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(e)),timestamp:C}),w("".concat(k,"mail/placeOrder"),c.a.stringify(t))}function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return g("".concat(k,"mail/JDFreight"),t,e)}function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:f.a.store.PAGE_LIMIT}),g("".concat(k,"mail/JDOrders"),t,e)}function mt(t,e){return g("".concat(k,"mail/JDTrack/").concat(t),null,e)}},405:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},422:function(t,e,n){t.exports=n.p+"static/media/arrow_right.8075ec42.svg"},515:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAACP0lEQVR4Xu3dMU4DUQxF0UlDl91k/1kYBRRB1NjSl27QobZHD7+cJinmdv3Tv+fz+fXXf+1+v388Ho/Pv86/09ztncJOsir4dS0FX9dF8IROZJZggn8/igRHVE5iEEwwwRMxtVmCCSa4pnKSh2CCCZ6Iqc0STDDBNZWTPAQTTPBETG2WYIIJrqmc5CGYYIInYmqzBBNMcE3lJA/BBBM8EVObJZhggmsqJ3kIJpjgiZjaLMEEE1xTOclDMMEET8TUZgkmmOCaykkeggkmeCKmNkswwQTXVE7yEEwwwRMxtVmCCSa4pnKSh2CCCZ6Iqc0STDDBNZWTPAQTTPBETG2WYIIJrqmc5CGYYIInYmqzBBNMcE3lJA/BP4Inh5gc2GzjAjcFN4o4lULBpy4bea6CI0WciqHgU5eNPFfBkSJOxVDwqctGnqvgSBGnYij41GUjz1VwpIhTMRR86rKR53q9rNfLRj6KwxiTr2C9fXR43MK4gv0e7PfggsRtBoIJJnirp7BHMMEEFyRuMxBMMMFbPYU9ggkmuCBxm4Fgggne6insEUwwwQWJ2wwEE0zwVk9hj2CCCS5I3GYgmGCCt3oKewQTTHBB4jYDwQQTvNVT2COYYIILErcZCCaY4K2ewh7BBBNckLjNQDDBBG/1FPYIJpjggsRtBoIJJnirp7BHMMEEFyRuMxBMMMFbPYU9ggkmuCBxm4Fgggne6insEUwwwQWJ2wwEE0zwVk9hj2CCCS5I3GYgmGCCt3oKewS/WvgGgXFFK0u07TYAAAAASUVORK5CYII="},516:function(t,e,n){t.exports=n.p+"static/media/banner.21d6f7a2.jpg"},572:function(t,e,n){"use strict";n.r(e);var a=n(125),r=n(408),c=n.n(r),i=n(409),o=n(60),d=n(61),u=n(64),s=n(62),l=n(63),p=n(123),m=n(0),f=n.n(m),h=n(65),g=n(120),v=n.n(g),b=n(406),w=n.n(b),y=n(407),k=n(119),C=n(122),x=n(404),O=n(403),P=n(552),E=n(515),j=n.n(E),I=n(422),N=n.n(I);var T=function(t){var e=t.hasCard,n=t.handleOpenPicker,a=t.data;return e?f.a.createElement("div",{className:"u_p_xxx u_mb_xx u_bg_white"},f.a.createElement("div",{className:"card"},f.a.createElement("div",{className:"aside"},f.a.createElement("img",{className:"icon",src:C.a.getBankCardLogo(a.bankCode),alt:""})),f.a.createElement("div",{className:"main"},f.a.createElement("p",{className:"title"},a.bankName," (\u5c3e\u53f7",f.a.createElement("span",null,C.a.getBankcardLastNum(a.bankCard)),")"),f.a.createElement("p",{className:"text"},"\u9884\u8ba1\u4e0b\u4e00\u5de5\u4f5c\u65e5\u5230\u8d26\uff0c\u5b9e\u9645\u4ee5\u94f6\u884c\u5230\u8d26\u65e5\u4e3a\u51c6")),f.a.createElement("div",{className:"foot"},f.a.createElement("img",{className:"arrow",onClick:n,src:N.a,alt:""})))):f.a.createElement("div",{className:"empty"},f.a.createElement(P.a,{to:{pathname:"bankcard-add",state:{from:"/credit-card"}}},f.a.createElement("div",{className:"wrap"},f.a.createElement("img",{className:"icon",src:j.a,alt:""}),f.a.createElement("p",null,"\u8bf7\u6dfb\u52a0\u4fe1\u7528\u5361"))),f.a.createElement("p",{className:"text"},"\u6682\u65e0\u53ef\u7528"))},A=n(117);function B(){var t=Object(A.a)(["\n  .info{\n    color: #888;\n    font-size: 12px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #eaeaea;\n  }\n  .card{\n    display: flex;\n    align-items: center;\n    .icon{\n      width: 40px;\n      height: 40px;\n      display: block;\n    }\n    .main{\n      flex: 1;\n      margin-left: 10px;\n      p{\n        margin: 0;\n      }\n      .title{\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 5px;\n      }\n      .text{\n        line-height: 1.5;\n        font-size: 12px;\n        color: #888;\n      }\n    }  \n    .arrow{\n      width: 20px;\n      height: 40px;\n    }  \n  }\n  .empty{\n    text-align: center;\n    position: relative;\n    margin-top: -30px;\n    .wrap{\n      font-size: 16px;\n      background: #fff;\n      margin: 15px 15px 0 15px;\n      padding: 15px 15px 20px 15px;\n      border-radius: 5px;\n      box-shadow: 0 1px 3px rgba(26,26,26,.1);\n    }\n    .icon{\n      width: 20px;\n      height: 20px;\n    }\n    .text{\n      padding: 5px 0;\n      color: #888;\n    }\n  }\n  .input-box{\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 0;\n    border-bottom: 1px solid #eaeaea;\n    .tip{\n      font-size: 12px;\n      color: #ee6076;\n      flex-shrink: 0;\n    }\n  }\n  .group{\n    display: flex;\n    align-items: center;\n    &__body{\n      flex: 1;\n    }\n    &__foot{\n      margin-left: 10px;\n    }\n  }  \n"]);return B=function(){return t},t}var L=n(118).b.div(B()),S=n(516),_=n.n(S);function M(t,e){var n=t.filter(function(t){return t.id===e});return n&&n.length&&n[0]}function Y(t){var e=t.flag,n=t.interval,a=t.handleClick;return e?f.a.createElement("button",{className:"btn btn-primary btn-mini",onClick:a},"\u83b7\u53d6\u77ed\u4fe1\u7801"):f.a.createElement("button",{className:"btn btn-mini disable"},n,"\u79d2\u540e\u91cd\u53d1")}var G=w.a.CancelToken,F=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).handleGetCode=n.handleGetCode.bind(Object(p.a)(Object(p.a)(n))),n.handleOpenPicker=n.handleOpenPicker.bind(Object(p.a)(Object(p.a)(n))),n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleBlur=n.handleBlur.bind(Object(p.a)(Object(p.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n.state={code:"",getCodeFlag:!0,interval:k.a.creditCard.INTERVAL,id:"",hasCard:!1,cardList:[],redeemFee:0,actualReceived:0,deductIntegral:0,integral:0,availableIntegral:0},n}return Object(l.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.loadUserInfo(),this.loadBankCardList()}},{key:"componentWillUnmount",value:function(){this.loadUserInfoSource&&this.loadUserInfoSource.cancel("Operation canceled by the user."),this.loadCardListSource&&this.loadCardListSource.cancel("Operation canceled by the user.")}},{key:"loadUserInfo",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadUserInfoSource=G.source(),t.prev=1,t.next=4,Object(x.D)(null,{cancelToken:this.loadUserInfoSource.token});case 4:e=t.sent,200===(n=e.data).status&&this.setState({availableIntegral:Number(n.data[0].balance)});case 7:return t.prev=7,t.finish(7);case 9:case"end":return t.stop()}},t,this,[[1,,7,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadBankCardList",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n,a,r=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadCardListSource=G.source(),t.prev=1,t.next=4,Object(x.k)(null,{cancelToken:this.loadCardListSource.token});case 4:e=t.sent,200===(n=e.data).status&&(a=C.a.filterCreditCardList(n.data),this.setState({cardList:a},function(){var t=a[0];t&&r.setState({id:t.id},function(){r.setState({hasCard:!0})})}));case 7:return t.prev=7,t.finish(7);case 9:case"end":return t.stop()}},t,this,[[1,,7,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadCode",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n,a,r=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.a.loading("\u53d1\u9001\u4e2d"),t.prev=1,t.next=4,Object(x.o)(this.props.phone);case 4:n=t.sent,200===(a=n.data).status&&this.setState({getCodeFlag:!1},function(){r.countDown()}),v.a.alert(a.msg);case 8:return t.prev=8,e.hide(),t.finish(8);case 11:case"end":return t.stop()}},t,this,[[1,,8,11]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadWithdrawFee",value:function(){var t=Object(i.a)(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.F)(this.state.integral||0);case 2:e=t.sent,200===(n=e.data).status&&this.updateFee(n.data);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"doSubmit",value:function(){var t=Object(i.a)(c.a.mark(function t(e){var n,a,r,i=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=v.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(x.I)(e);case 4:a=t.sent,200===(r=a.data).status?v.a.alert(r.msg):1017===r.status?C.a.confirmRetry("\u5bc6\u7801\u9519\u8bef",function(){i.retryTransPswd()}):v.a.alert(r.msg);case 7:return t.prev=7,n.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,null,[[1,,7,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"retryTransPswd",value:function(){this.handleSubmit()}},{key:"countDown",value:function(){var t=this;this.state.interval>0?setTimeout(function(){t.setState({interval:t.state.interval-1},function(){t.countDown()})},1e3):this.resetGetCode()}},{key:"resetGetCode",value:function(){this.setState({interval:k.a.creditCard.INTERVAL,getCodeFlag:!0})}},{key:"updateFee",value:function(t){var e=t.poundage,n=t.money,a=t.totalAmount;this.setState({redeemFee:e,actualReceived:n,deductIntegral:a})}},{key:"handleOpenPicker",value:function(){var t=this;if(!this.state.cardList.length)return v.a.alert("\u6682\u65e0\u53ef\u7528\u4fe1\u7528\u5361"),!1;v.a.picker(C.a.parseBankcardList(this.state.cardList),{defaultValue:[0],onConfirm:function(e){e&&e[0]&&t.setState({id:e[0].id})}})}},{key:"handleGetCode",value:function(){this.loadCode()}},{key:"handleBlur",value:function(t){this.loadWithdrawFee()}},{key:"handleChange",value:function(t){var e=t.target.name,n="integral"===e?Number(t.target.value):t.target.value;this.setState(Object(a.a)({},e,n))}},{key:"verify",value:function(){if(this.state.hasCard)if(this.state.integral)if(this.state.integral>this.state.availableIntegral)v.a.alert("\u79ef\u5206\u4e0d\u8db3");else{if(this.state.code)return!0;v.a.alert("\u8bf7\u8f93\u5165\u77ed\u4fe1\u7801")}else v.a.alert("\u8bf7\u8f93\u5165\u79ef\u5206");else v.a.alert("\u6682\u65e0\u53ef\u7528\u7684\u4fe1\u7528\u5361")}},{key:"handleSubmit",value:function(){var t=this;this.verify()&&C.a.paymentConfirm({title:"\u4fe1\u7528\u5361\u8fd8\u6b3e",amount:this.state.integral,useable:this.state.availableIntegral,callback:function(e,n){if(!n.value.trim())return!1;var a=M(t.state.cardList,t.state.id),r={bankCard:a.bankCard,bankCode:a.bankCode,bankName:a.bankName,cardHoldName:a.cardHoldName,cardPhoneNo:a.userPhoneNo,code:t.state.code,tradPwd:n.value,amount:t.state.integral};t.doSubmit(r)}})}},{key:"render",value:function(){var t=this.state,e=t.id,n=t.hasCard,a=t.cardList,r=t.getCodeFlag,c=this.state.integral||"";return f.a.createElement(L,null,f.a.createElement(y.Helmet,{title:"\u4fe1\u7528\u5361\u8fd8\u6b3e"}),f.a.createElement("header",null,f.a.createElement("img",{src:_.a,alt:""})),f.a.createElement(T,{hasCard:n,handleOpenPicker:this.handleOpenPicker,data:M(a,e)}),f.a.createElement("div",{className:"u_bg_white"},f.a.createElement("div",{className:"u_p_xxx"},f.a.createElement("h2",null,"\u8fd8\u6b3e"),f.a.createElement("div",{className:"input-box"},f.a.createElement("input",{text:"number",name:"integral",value:c,className:"input input-primary",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"\u6700\u591a\u53ef\u4f7f\u7528 ".concat(this.state.availableIntegral," \u79ef\u5206")}),f.a.createElement("div",{className:"tip"},"\u53ef\u7528\u79ef\u5206\uff1a",this.state.availableIntegral))),f.a.createElement("div",{className:"u_px_xxx u_pb_xxx"},f.a.createElement("div",{className:"info"},f.a.createElement("p",null,"\u6263\u9664 ",this.state.deductIntegral," \u79ef\u5206\uff0c\u8fd8\u6b3e ",this.state.deductIntegral/100," \u5143"),f.a.createElement("p",null,"\u624b\u7eed\u8d39 ",this.state.redeemFee," \u79ef\u5206\uff0c100 \u79ef\u5206\u7b49\u4e8e 1 \u5143"))),f.a.createElement("div",{className:"u_px_xxx u_pb_xxx"},f.a.createElement("div",{className:"group"},f.a.createElement("div",{className:"group__body"},f.a.createElement("input",{text:"number",name:"code",value:this.state.code,className:"input input-primary",onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u77ed\u4fe1\u7801"})),f.a.createElement("div",{className:"group__foot"},f.a.createElement(Y,{flag:r,interval:this.state.interval,handleClick:this.handleGetCode}))))),f.a.createElement("div",{className:"u_p_xxx"},f.a.createElement("button",{className:"btn btn-primary",onClick:this.handleSubmit},"\u7acb\u5373\u8fd8\u6b3e")),f.a.createElement(O.a,null))}}]),e}(m.Component),R=Object(h.b)(function(t){return{phone:t.auth.phone}},function(t,e){return{}})(F);n.d(e,"view",function(){return R})}}]);
//# sourceMappingURL=24.5138a2d8.chunk.js.map