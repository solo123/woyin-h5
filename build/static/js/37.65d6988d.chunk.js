(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{409:function(t,e,n){"use strict";var a=n(61),r=n(62),c=n(64),i=n(63),o=n(65),d=n(119),s=n(0),l=n.n(s),u=n(120),h=n(553),f=n(122),p=n(410),m=n.n(p);function v(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return v=function(){return t},t}function g(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return g=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var y=u.b.div(b()),w=u.b.div(g()),k=u.b.img(v()),x=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){f.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return l.a.createElement(y,{id:"mover"},l.a.createElement(h.a,{to:"/"},l.a.createElement(w,null,l.a.createElement(k,{src:m.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),e}(s.Component);e.a=x},410:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},411:function(t,e,n){"use strict";var a=n(46),r=n(418),c=n.n(r),i=n(419),o=n.n(i),d=n(412),s=n.n(d),l=n(123),u=n.n(l),h=n(84),f=n(32),p=n(121),m=s.a.create();m.defaults.timeout=p.a.timeout,m.interceptors.request.use(function(t){var e=Object(f.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),m.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:u.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:h.a.dispatch({type:"UNAUTH_USER"});break;case 404:u.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:u.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:u.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:u.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:u.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:u.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:u.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:u.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else u.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.get(t,Object(a.a)({},n,{params:e}))},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.delete(t,Object(a.a)({},n,{params:e}))},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.put(t,e,n)},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m.post(t,e,n)};n.d(e,"J",function(){return j}),n.d(e,"F",function(){return O}),n.d(e,"U",function(){return A}),n.d(e,"l",function(){return _}),n.d(e,"m",function(){return C}),n.d(e,"o",function(){return N}),n.d(e,"n",function(){return P}),n.d(e,"S",function(){return T}),n.d(e,"K",function(){return I}),n.d(e,"B",function(){return S}),n.d(e,"H",function(){return D}),n.d(e,"E",function(){return L}),n.d(e,"A",function(){return M}),n.d(e,"a",function(){return U}),n.d(e,"D",function(){return Y}),n.d(e,"G",function(){return z}),n.d(e,"I",function(){return H}),n.d(e,"V",function(){return B}),n.d(e,"b",function(){return G}),n.d(e,"k",function(){return J}),n.d(e,"y",function(){return F}),n.d(e,"p",function(){return R}),n.d(e,"C",function(){return q}),n.d(e,"N",function(){return W}),n.d(e,"z",function(){return K}),n.d(e,"O",function(){return Q}),n.d(e,"P",function(){return V}),n.d(e,"M",function(){return X}),n.d(e,"Q",function(){return Z}),n.d(e,"R",function(){return $}),n.d(e,"d",function(){return tt}),n.d(e,"h",function(){return et}),n.d(e,"e",function(){return nt}),n.d(e,"i",function(){return at}),n.d(e,"T",function(){return rt}),n.d(e,"g",function(){return ct}),n.d(e,"r",function(){return it}),n.d(e,"q",function(){return ot}),n.d(e,"v",function(){return dt}),n.d(e,"u",function(){return st}),n.d(e,"j",function(){return lt}),n.d(e,"c",function(){return ut}),n.d(e,"s",function(){return ht}),n.d(e,"f",function(){return ft}),n.d(e,"L",function(){return pt}),n.d(e,"t",function(){return mt}),n.d(e,"w",function(){return vt}),n.d(e,"x",function(){return gt});var w="",k="";w="/client",k="/jdapi";var x=String((new Date).getTime());function E(){x=String((new Date).getTime())}var j=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:o()(t.password)})),y("".concat(w,"api/user/login"),c.a.stringify(t))},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/user/getUserInfo"),t,e)},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/user/switchAccount"),t,e)},_=function(t){return t=Object(a.a)({},t,{codeType:1}),y("".concat(w,"api/user/getCode"),c.a.stringify(t))},C=function(t){var e={userPhoneNo:t,codeType:2};return y("".concat(w,"api/user/getCode"),c.a.stringify(e))},N=function(t){var e={userPhoneNo:t,codeType:3};return y("".concat(w,"api/user/getCode"),c.a.stringify(e))},P=function(t){var e={userPhoneNo:t,codeType:4};return y("".concat(w,"api/user/getCode"),c.a.stringify(e))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:e,payment:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(e,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:x}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:e,payment:"2",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(e,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:x}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:1}),v("".concat(w,"api/trad/poundageList"),t)},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:2}),v("".concat(w,"api/trad/poundageList"),t)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:3}),v("".concat(w,"api/trad/poundageList"),t)},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"product/list"),{productClassifyId:t},e)},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v("".concat(w,"product/list"),{},t)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/product/subList"),{productClassifyId:t},e)},z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:p.a.voucher.PAGE_LIMIT});return v("".concat(w,"api/voucher/list"),n,e)},H=function(t){E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/transferred/commit"),c.a.stringify(t))},B=function(t,e){var n=Object(a.a)({},t,{limit:p.a.redeem.PAGE_LIMIT});return v("".concat(w,"api/transferred/list"),n,e)},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return E(),t=Object(a.a)({},t,{sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:x}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(t))},J=function(){return v("".concat(w,"api/bank/getBankCardList"))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:p.a.order.PAGE_LIMIT});return v("".concat(w,"api/order/getOrderList"),n,e)};function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return v("".concat(w,"api/trad/getWithList"),n,e)}var q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return v("".concat(w,"api/trad/getWithList"),n,e)};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function K(t,e){return v("".concat(k,"mail/phoneType/").concat(t),null,e)}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/traffic/charge"),c.a.stringify(t))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(t))}var Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(e,"&productId=").concat(t.productId)),timestamp:x}),y("".concat(w,"api/video/charge"),c.a.stringify(t))},$=function(t){E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&amount=").concat(t.amount,"&tranPwd=").concat(e,"&productId=").concat(t.productId)),timestamp:x}),y("".concat(w,"api/voucher/charge"),c.a.stringify(t))};function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),e)}var et=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(t))};function nt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),e)}var at=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(t))},rt=function(t){return t=Object(a.a)({},t,{newLoginPwd:o()(t.newLoginPwd)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(t))};function ct(t,e){return g("".concat(w,"api/bankCard/").concat(t))}function it(t,e){return v("".concat(w,"api/integralList"),null,e)}function ot(){return v("".concat(k,"api/sellingGoods"))}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),v("".concat(k,"api/goodsClassLists"),t,e)}function st(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:p.a.store.PAGE_LIMIT}),v("".concat(k,"api/goodsLists"),t,e)}function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(k,"mail/address"),t,e)}function ut(t){return t=Object(a.a)({},t,{addType:1}),y("".concat(k,"mail/address"),c.a.stringify(t))}function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),v("".concat(k,"mail/userAddressList"),t,e)}function ft(t,e){return g("".concat(k,"mail/address/").concat(t),null,e)}function pt(t){E();var e=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:e,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(x,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(e)),timestamp:x}),y("".concat(k,"mail/placeOrder"),c.a.stringify(t))}function mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return v("".concat(k,"mail/JDFreight"),t,e)}function vt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:p.a.store.PAGE_LIMIT}),v("".concat(k,"mail/JDOrders"),t,e)}function gt(t,e){return v("".concat(k,"mail/JDTrack/").concat(t),null,e)}},414:function(t,e,n){"use strict";var a=n(119),r=n(0),c=n.n(r),i=n(120),o=n(415),d=n.n(o);function s(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var l=i.b.div(s());e.a=function(){return c.a.createElement(l,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},415:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},422:function(t,e,n){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return a})},428:function(t,e,n){t.exports=n.p+"static/media/arrow_right.8075ec42.svg"},430:function(t,e,n){"use strict";var a=n(119),r=n(0),c=n.n(r);function i(){var t=Object(a.a)(["\n  .layer{\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 100;\n    &__bg{\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      top: 0;\n      right: 0;\n      z-index: 1040;\n      background: #fff;      \n    }\n    &__content{\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      z-index: 1050;\n      overflow: auto;\n    }\n  }  \n"]);return i=function(){return t},t}var o=n(120).b.div(i());e.a=function(t){var e=t.show,n=t.children,a=t.handleClose;return e?c.a.createElement(o,null,c.a.createElement("div",{className:"layer"},c.a.createElement("div",{className:"layer__bg",onClick:a}),c.a.createElement("div",{className:"layer__content"},n))):null}},449:function(t,e,n){t.exports=n.p+"static/media/location.00a8ce2c.svg"},554:function(t,e,n){"use strict";n.r(e);var a=n(422),r=n(46),c=n(416),i=n.n(c),o=n(417),d=n(61),s=n(62),l=n(64),u=n(63),h=n(66),f=n(65),p=n(0),m=n.n(p),v=n(413),g=n(123),b=n.n(g),y=n(428),w=n.n(y),k=n(449),x=n.n(k),E=n(122),j=n(430),O=n(411),A=n(409),_=n(125),C=n(119),N=n(120);function P(){var t=Object(C.a)(['\n  padding-bottom: 40px;\n\n  .addr{\n    position: relative;\n    display: flex;\n    padding: 15px;\n    background: #fff;\n    &:after{\n      content: " ";\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      height: 1px;\n      border-bottom: 1px solid #e5e5e5;\n      transform: scaleY(0.5);\n    }    \n    &__head{\n      padding-top: 5px;\n      margin-right: 15px;\n    }\n    &__label{\n      font-size: 12px;\n      color: #fff;\n      padding: 2px 5px;\n      border-radius: 3px;\n      font-weight: normal;\n      background-color: #cd201f;\n    }\n    &__del{\n      font-size: 12px;\n      padding: 2px 5px;\n      border-radius: 3px;\n      font-weight: normal;\n      color: #6e7687;\n      background-color: #e9ecef;  \n    }\n    &__icon{\n      width: 25px;\n      height: 25px;\n    }\n    &__body{\n      flex: 1;\n      margin-right: 15px;\n    }\n    &__info{\n      font-size: 16px;\n      font-weight: bold;\n    }\n  }\n  .fixed-bottom{\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  .btn-list{\n    display: flex;\n    &>div{\n      flex: 1;\n      line-height: 40px;\n      text-align: center;\n      background: #fff;\n      &:first-child{\n        color: #fff;\n        background: #ccc;\n      }\n      &:last-child{\n        color: #fff;\n        background: #1c92ff;\n      }\n    }\n  }\n']);return P=function(){return t},t}var T=N.b.div(P()),I=n(414);function S(t){var e=t.use,n=t.name,a=t.phone,r=t.province,c=t.city,i=t.county,o=t.town,d=t.addr,s=t.defaultAddress,l=t.handleDelete,u=t.handleSelect;return m.a.createElement("div",{className:"addr",onClick:u},m.a.createElement("div",{className:"addr__head"},m.a.createElement("img",{className:"addr__icon",style:e?{visibility:"visible"}:{visibility:"hidden"},src:x.a,alt:""})),m.a.createElement("div",{className:"addr__body"},m.a.createElement("div",{className:"addr__info"},n," ",a," ",s&&m.a.createElement("label",{className:"addr__label"},"\u9ed8\u8ba4")),m.a.createElement("div",null,r,c,i,o," ",d)),m.a.createElement("div",{className:"addr__foot"},m.a.createElement("span",{className:"addr__del",onClick:l},"\u5220\u9664")))}function D(t){var e=t.items,n=t.handleDelete,a=t.handleSelect;return e.length?m.a.createElement("div",null,e.map(function(t){return m.a.createElement(S,Object.assign({key:t.id},t,{defaultAddress:t.defaultAddress,handleDelete:function(e){return n(e,t.id)},handleSelect:function(){return a(t.id)}}))})):m.a.createElement(I.a,null)}var L=function(t){var e=t.addrs,n=t.handleClose,a=t.handleOk,r=t.handleDelete,c=t.handleSelect;return m.a.createElement(T,null,m.a.createElement(D,{items:e,handleDelete:r,handleSelect:c}),m.a.createElement("div",{className:"fixed-bottom"},m.a.createElement("div",{className:"btn-list"},m.a.createElement("div",{onClick:n},"\u53d6\u6d88"),m.a.createElement("div",{onClick:a},"\u65b0\u589e\u5730\u5740"))))},M=n(126);function U(){var t=Object(C.a)(['\n  padding-bottom: 40px;\n  .group{\n    position: relative;\n    padding: 15px;\n    background: #fff;\n    display: flex;\n    &:after{\n      content: " ";\n      position: absolute;\n      left: 15px;\n      bottom: 0;\n      right: 0;\n      height: 1px;\n      border-bottom: 1px solid #e5e5e5;\n      transform: scaleY(0.5);\n    }\n    &:last-child:after{\n      content: none;\n    }\n    &__head{\n      color: #888;\n      width: 80px;\n    }\n    &__body{\n      flex: 1;\n    }\n  }\n  textarea{\n    width: 100%;\n    border: 0;\n    outline: none;\n  }\n  .fixed-bottom{\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  .btn-list{\n    display: flex;\n    &>div{\n      flex: 1;\n      line-height: 40px;\n      text-align: center;\n      background: #fff;\n      &:first-child{\n        color: #fff;\n        background: #ccc;\n      }\n      &:last-child{\n        color: #fff;\n        background: #1c92ff;\n      }\n    }\n  }\n']);return U=function(){return t},t}var Y=N.b.div(U());function z(t){var e=t.value,n=t.text;return m.a.createElement("option",{key:e,value:e},n)}var H=function(t){var e=t.data,n=t.handleChange,a=[m.a.createElement(z,{value:0,key:0,text:"\u8bf7\u9009\u62e9"})];return e.map(function(t){return a.push(m.a.createElement(z,{value:t.value,key:t.value,text:t.text}))}),m.a.createElement("select",{onChange:n},a)};function B(t){var e=[];return Object.keys(t).map(function(n){return e.push({text:n,value:t[n]})}),e}function G(t){return t.options[t.selectedIndex].text}var J=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleProvince=n.handleProvince.bind(Object(h.a)(n)),n.handleCity=n.handleCity.bind(Object(h.a)(n)),n.handleCounty=n.handleCounty.bind(Object(h.a)(n)),n.handleTown=n.handleTown.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleCancel=n.handleCancel.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.state={name:"",phone:"",addr:"",province:"",provinceText:"",provinceData:[],city:"",cityText:"",cityData:[],county:"",countyText:"",countyData:[],town:"",townText:"",townData:[],isDefault:0},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.loadAddr(1,null,function(e){t.setState({provinceData:e})})}},{key:"loadAddr",value:function(){var t=Object(o.a)(i.a.mark(function t(){var e,n,a,r,c,o,d,s=arguments;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:"",a=s.length>2&&void 0!==s[2]?s[2]:function(){},r={type:e,addressId:n},c=b.a.loading("\u52a0\u8f7d\u4e2d"),t.prev=5,t.next=8,Object(O.j)(r);case 8:o=t.sent,200===(d=o.data).status&&d.data&&(d.data=B(d.data),a(d.data));case 11:return t.prev=11,c.hide(),t.finish(11);case 14:case"end":return t.stop()}},t,null,[[5,,11,14]])}));return function(){return t.apply(this,arguments)}}()},{key:"addAddr",value:function(){var t=Object(o.a)(i.a.mark(function t(e){var n,a,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(O.c)(e);case 4:a=t.sent,200===(c=a.data).status&&this.props.addAddr(Object(r.a)({},e,{id:c.data}));case 7:return t.prev=7,n.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,this,[[1,,7,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t){var e=t.target,n=e.name,a="checkbox"===e.type?e.checked:e.value;this.setState(Object(M.a)({},n,a))}},{key:"handleProvince",value:function(t){var e=this,n=t.target,a=G(n),r=n.value;this.setState({province:r,provinceText:a,city:"",cityText:"",cityData:[],county:"",countyText:"",countyData:[],town:"",townText:"",townData:[]},function(){e.loadAddr(2,r,function(t){e.setState({cityData:t})})})}},{key:"handleCity",value:function(t){var e=this,n=t.target,a=G(n),r=n.value;this.setState({city:r,cityText:a,county:"",countyText:"",countyData:[],town:"",townText:"",townData:[]},function(){e.loadAddr(3,r,function(t){e.setState({countyData:t})})})}},{key:"handleCounty",value:function(t){var e=this,n=t.target,a=G(n),r=n.value;this.setState({county:r,countyText:a,town:"",townText:"",townData:[]},function(){e.loadAddr(4,r,function(t){e.setState({townData:t})})})}},{key:"handleTown",value:function(t){var e=t.target,n=G(e),a=e.value;this.setState({town:a,townText:n})}},{key:"handleCancel",value:function(){this.props.history.goBack()}},{key:"verify",value:function(){if(!this.state.name)return b.a.alert("\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba\u59d3\u540d"),!1;if(!this.state.phone)return b.a.alert("\u8bf7\u8f93\u5165\u624b\u673a\u53f7"),!1;if(11===this.state.phone.length)if(this.state.province)if(this.state.city)if(this.state.county){if(!this.state.townData.length||this.state.town)return!!this.state.addr||(b.a.alert("\u8bf7\u8f93\u5165\u8be6\u7ec6\u5730\u5740"),!1);b.a.alert("\u8bf7\u9009\u62e9\u4e61\u9547")}else b.a.alert("\u8bf7\u9009\u62e9\u5730\u533a");else b.a.alert("\u8bf7\u9009\u62e9\u5e02\u7ea7");else b.a.alert("\u8bf7\u9009\u62e9\u7701\u4efd");else b.a.alert("\u8bf7\u8f93\u5165\u5408\u6cd5\u7684\u624b\u673a\u53f7")}},{key:"handleSubmit",value:function(){if(this.verify()){var t={name:this.state.name,phone:this.state.phone,provinceNo:this.state.province,province:this.state.provinceText,cityNo:this.state.city,city:this.state.cityText,countyNo:this.state.county,county:this.state.countyText,townNo:this.state.town,town:this.state.townText,address:this.state.addr,defaultAddress:this.state.isDefault?1:0};this.addAddr(t)}}},{key:"render",value:function(){return m.a.createElement(Y,null,m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u6536\u4ef6\u4eba"),m.a.createElement("div",{className:"group__body"},m.a.createElement("input",{type:"text",name:"name",className:"input",value:this.state.name,onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba\u59d3\u540d"}))),m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u624b\u673a\u53f7"),m.a.createElement("div",{className:"group__body"},m.a.createElement("input",{type:"text",name:"phone",className:"input",value:this.state.phone,onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}))),m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u7701\u4efd"),m.a.createElement("div",{className:"group__body"},m.a.createElement(H,{data:this.state.provinceData,handleChange:this.handleProvince}))),m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u5e02\u7ea7"),m.a.createElement("div",{className:"group__body"},m.a.createElement(H,{data:this.state.cityData,handleChange:this.handleCity}))),m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u5730\u533a"),m.a.createElement("div",{className:"group__body"},m.a.createElement(H,{data:this.state.countyData,handleChange:this.handleCounty}))),!!this.state.townData.length&&m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u4e61\u9547"),m.a.createElement("div",{className:"group__body"},m.a.createElement(H,{data:this.state.townData,handleChange:this.handleTown}))),m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u8be6\u7ec6\u5730\u5740"),m.a.createElement("div",{className:"group__body"},m.a.createElement("textarea",{name:"addr",value:this.state.addr,onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u8be6\u7ec6\u5730\u5740"}))),m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"group__head"},"\u8bbe\u4e3a\u9ed8\u8ba4"),m.a.createElement("div",{className:"group__body"},m.a.createElement("input",{type:"checkbox",name:"isDefault",checked:this.state.isDefault,onChange:this.handleChange}))),m.a.createElement("div",{className:"fixed-bottom"},m.a.createElement("div",{className:"btn-list"},m.a.createElement("div",{onClick:this.props.handleCancel},"\u53d6\u6d88"),m.a.createElement("div",{onClick:this.handleSubmit},"\u786e\u5b9a"))),m.a.createElement(A.a,null))}}]),e}(p.Component);function F(){var t=Object(C.a)(["\n  padding-bottom: 40px;\n  header{\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px;\n    .add-bar{\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .icon{\n      width: 20px;\n      height: 20px;\n    }\n    .addr{\n      display: flex;\n      justify-content: space-between;\n      h2{\n        font-size: 16px;\n      }\n      &__head{\n        padding-top: 5px;\n        margin-right: 15px;        \n      }\n      &__icon{\n        width: 25px;\n        height: 25px;\n      }\n      &__body{\n        flex: 1;\n        margin-right: 15px;\n      }\n      &__foot{\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  main{\n    padding: 15px;\n    background: #fff;\n    .info{\n      padding: 15px;\n      background: #eaeaea;\n      margin-bottom: 15px;\n      h2{\n        margin-bottom: 15px;\n      }\n      li{\n        display: flex;\n        justify-content: space-between;\n      }\n    }\n    .total{\n      display: flex;\n      justify-content: space-between;      \n    }\n  }\n  .fixed-bottom{\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    .submit-btn{\n      color: #fff;\n      font-size: 14px;\n      line-height: 40px;\n      text-align: center;\n      background: #1c92ff;      \n    }\n  }\n"]);return F=function(){return t},t}var R=N.b.div(F());function q(t){var e=t.handleClick;return m.a.createElement("div",{className:"add-bar"},m.a.createElement("span",null,"\u65b0\u589e\u6536\u8d27\u5730\u5740"),m.a.createElement("img",{className:"icon",onClick:e,src:w.a,alt:""}))}function W(t){var e=t.name,n=t.phone,a=t.province,r=t.city,c=t.county,i=t.town,o=t.addr,d=t.handleClick;return m.a.createElement("div",{className:"addr"},m.a.createElement("div",{className:"addr__head"},m.a.createElement("img",{className:"addr__icon",src:x.a,alt:""})),m.a.createElement("div",{className:"addr__body"},m.a.createElement("h2",null,e," ",n),m.a.createElement("div",null,a,r,c,i," ",o)),m.a.createElement("div",{className:"addr__foot"},m.a.createElement("img",{className:"icon",onClick:d,src:w.a,alt:""})))}var K=function(t){function e(t){var n;Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleToggle=n.handleToggle.bind(Object(h.a)(n)),n.handleSelect=n.handleSelect.bind(Object(h.a)(n)),n.handleAddAddr=n.handleAddAddr.bind(Object(h.a)(n)),n.handleDelete=n.handleDelete.bind(Object(h.a)(n)),n.handleToggleAddAddr=n.handleToggleAddAddr.bind(Object(h.a)(n));var a=n.props.location.state,r=a.jdPrice,c=a.count;return n.integral=100*Number(r),n.count=Number(c),n.totalIntegral=Math.round(n.integral*n.count),n.state={addrs:[],addrId:"",name:"",phone:"",province:"",city:"",county:"",town:"",addr:"",freight:0,showAddrList:!1,showAddAddr:!1,availableIntegral:0},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.loadAddrs(),this.loadUserInfo()}},{key:"loadUserInfo",value:function(){var t=Object(o.a)(i.a.mark(function t(){var e,n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.F)();case 3:e=t.sent,200===(n=e.data).status&&n.data.length&&(a=E.a.getAccountById(n.data),this.setState({availableIntegral:Number(a.balance)}));case 6:return t.prev=6,t.finish(6);case 8:case"end":return t.stop()}},t,this,[[0,,6,8]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadAddrs",value:function(){var t=Object(o.a)(i.a.mark(function t(){var e,n,a=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.s)();case 3:e=t.sent,200===(n=e.data).status&&this.setState({addrs:n.data},function(){a.setDefaultAddr()});case 6:return t.prev=6,t.finish(6);case 8:case"end":return t.stop()}},t,this,[[0,,6,8]])}));return function(){return t.apply(this,arguments)}}()},{key:"deleteAddr",value:function(){var t=Object(o.a)(i.a.mark(function t(e){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(O.f)(e);case 4:a=t.sent,200===a.data.status&&this.removeAddrById(e);case 7:return t.prev=7,n.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,this,[[1,,7,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"loadFreight",value:function(){var t=Object(o.a)(i.a.mark(function t(e){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.t)(e);case 3:n=t.sent,200===(a=n.data).status&&this.setState({freight:100*a.data.freight});case 6:return t.prev=6,t.finish(6);case 8:case"end":return t.stop()}},t,this,[[0,,6,8]])}));return function(e){return t.apply(this,arguments)}}()},{key:"removeAddrById",value:function(t){var e=this.state.addrs.filter(function(e){return e.id!==t});this.setState({addrs:e})}},{key:"setUseAddr",value:function(){var t=this;this.state.addrs.forEach(function(e){e.use&&t.setCurrAddr(e)})}},{key:"setCurrAddr",value:function(t){var e=this;this.setState({addrId:t.id,name:t.name,phone:t.phone,province:t.province,city:t.city,county:t.county,town:t.town,addr:t.address},function(){var n={skuId:e.props.location.state.skuId,count:e.props.location.state.count,addressId:t.id};e.loadFreight(n)})}},{key:"setAddrUsed",value:function(t,e){var n=this.state.addrs.map(function(e){return e.id===t?Object(r.a)({},e,{use:!0}):Object(r.a)({},e,{use:!1})});this.setState({addrs:n},e)}},{key:"setDefaultAddr",value:function(){var t=this,e=this.state.addrs.map(function(e){return e.defaultAddress?(t.setCurrAddr(e),Object(r.a)({},e,{use:!0})):e});this.setState({addrs:e})}},{key:"handleClick",value:function(){this.state.addrs.length?this.setState({showAddrList:!0}):this.handleToggleAddAddr()}},{key:"handleDelete",value:function(t,e){var n=this;t.stopPropagation(),b.a.confirm("\u786e\u8ba4\u5220\u9664\u5417\uff1f",function(){n.deleteAddr(e)})}},{key:"handleSelect",value:function(t){var e=this;this.setAddrUsed(t,function(){e.setState({showAddrList:!1}),e.setUseAddr()})}},{key:"handleToggle",value:function(){this.setState({showAddrList:!1})}},{key:"handleToggleAddAddr",value:function(){this.setState({showAddAddr:!this.state.showAddAddr})}},{key:"handleAddAddr",value:function(t){var e=this;if(1===t.defaultAddress){var n=this.state.addrs.map(function(t){return Object(r.a)({},t,{defaultAddress:0})});this.setState({addrs:[].concat(Object(a.a)(n),[t])},function(){e.setAddrUsed(t.id),e.setCurrAddr(t),e.handleToggleAddAddr()})}else this.setState({addrs:[].concat(Object(a.a)(this.state.addrs),[t])},function(){e.setAddrUsed(t.id),e.setCurrAddr(t),e.handleToggleAddAddr()})}},{key:"doSubmit",value:function(){var t=Object(o.a)(i.a.mark(function t(e){var n,a,r,c=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(O.L)(e);case 4:a=t.sent,200===(r=a.data).status?setTimeout(function(){Object(_.b)("/result",{type:"success",title:r.msg})},300):1017===r.status?E.a.confirmRetry("\u5bc6\u7801\u9519\u8bef",function(){c.retryTransPswd()}):b.a.alert(r.msg);case 7:return t.prev=7,n.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,null,[[1,,7,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"verify",value:function(){if(this.state.addrId){if(!(this.totalIntegral>this.state.availableIntegral))return!0;b.a.alert("\u79ef\u5206\u4e0d\u8db3")}else b.a.alert("\u6536\u8d27\u5730\u5740\u672a\u8bbe\u7f6e")}},{key:"retryTransPswd",value:function(){this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.verify()&&E.a.paymentConfirm({title:"\u5151\u6362",amount:this.totalIntegral+this.state.freight,useable:this.state.availableIntegral,callback:function(e,n){if(!n.value)return!1;var a=t.props.location.state,r={skuId:a.skuId,count:a.count,addressId:t.state.addrId,tranPwd:n.value};t.doSubmit(r)}})}},{key:"render",value:function(){var t=this.props.location.state.name,e=this.state.freight,n=this.totalIntegral+e;return m.a.createElement(R,null,m.a.createElement(v.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u8d2d\u4e70\u786e\u8ba4"}),m.a.createElement("header",null,this.state.addrId?m.a.createElement(W,Object.assign({},this.state,{handleClick:this.handleClick})):m.a.createElement(q,{handleClick:this.handleClick})),m.a.createElement("main",null,m.a.createElement("section",{className:"info"},m.a.createElement("h2",null,t),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("span",null,"\u5355\u4ef7"),m.a.createElement("span",null,this.integral," \u79ef\u5206")),m.a.createElement("li",null,m.a.createElement("span",null,"\u6570\u91cf"),m.a.createElement("span",null,"x ",this.count)),m.a.createElement("li",null,m.a.createElement("span",null,"\u8fd0\u8d39"),m.a.createElement("span",null,e," \u79ef\u5206")))),m.a.createElement("div",{className:"total"},m.a.createElement("span",null,"\u8ba2\u5355\u603b\u989d"),m.a.createElement("span",null,n," \u79ef\u5206"))),m.a.createElement("div",{className:"fixed-bottom"},m.a.createElement("div",{className:"submit-btn",onClick:this.handleSubmit},"\u63d0\u4ea4\u8ba2\u5355")),m.a.createElement(j.a,{show:this.state.showAddrList},m.a.createElement(L,{addrs:this.state.addrs,handleClose:this.handleToggle,handleDelete:this.handleDelete,handleSelect:this.handleSelect,handleOk:this.handleToggleAddAddr})),m.a.createElement(j.a,{show:this.state.showAddAddr},m.a.createElement(J,{handleCancel:this.handleToggleAddAddr,addAddr:this.handleAddAddr})),m.a.createElement(A.a,null))}}]),e}(p.Component);n.d(e,"view",function(){return K})}}]);
//# sourceMappingURL=37.65d6988d.chunk.js.map