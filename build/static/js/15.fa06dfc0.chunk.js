(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{409:function(t,n,e){"use strict";var a=e(61),r=e(62),c=e(64),o=e(63),i=e(65),d=e(119),u=e(0),l=e.n(u),s=e(120),f=e(553),p=e(123),m=e(410),h=e.n(m);function g(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var y=s.b.div(b()),w=s.b.div(v()),P=s.b.img(g()),k=function(t){function n(){return Object(a.a)(this,n),Object(c.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){p.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return l.a.createElement(y,{id:"mover"},l.a.createElement(f.a,{to:"/"},l.a.createElement(w,null,l.a.createElement(P,{src:h.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),n}(u.Component);n.a=k},410:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},411:function(t,n,e){"use strict";var a=e(46),r=e(418),c=e.n(r),o=e(419),i=e.n(o),d=e(412),u=e.n(d),l=e(122),s=e.n(l),f=e(84),p=e(32),m=e(121),h=u.a.create();h.defaults.timeout=m.a.timeout,h.interceptors.request.use(function(t){var n=Object(p.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},e,{params:n}))},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"J",function(){return j}),e.d(n,"F",function(){return x}),e.d(n,"U",function(){return E}),e.d(n,"l",function(){return N}),e.d(n,"m",function(){return I}),e.d(n,"o",function(){return T}),e.d(n,"n",function(){return L}),e.d(n,"S",function(){return C}),e.d(n,"K",function(){return A}),e.d(n,"B",function(){return S}),e.d(n,"H",function(){return D}),e.d(n,"E",function(){return H}),e.d(n,"A",function(){return _}),e.d(n,"a",function(){return M}),e.d(n,"D",function(){return Y}),e.d(n,"G",function(){return G}),e.d(n,"I",function(){return J}),e.d(n,"V",function(){return U}),e.d(n,"b",function(){return z}),e.d(n,"k",function(){return B}),e.d(n,"y",function(){return R}),e.d(n,"p",function(){return W}),e.d(n,"C",function(){return q}),e.d(n,"N",function(){return F}),e.d(n,"z",function(){return K}),e.d(n,"O",function(){return Q}),e.d(n,"P",function(){return V}),e.d(n,"M",function(){return X}),e.d(n,"Q",function(){return Z}),e.d(n,"R",function(){return $}),e.d(n,"d",function(){return tt}),e.d(n,"h",function(){return nt}),e.d(n,"e",function(){return et}),e.d(n,"i",function(){return at}),e.d(n,"T",function(){return rt}),e.d(n,"g",function(){return ct}),e.d(n,"r",function(){return ot}),e.d(n,"q",function(){return it}),e.d(n,"v",function(){return dt}),e.d(n,"u",function(){return ut}),e.d(n,"j",function(){return lt}),e.d(n,"c",function(){return st}),e.d(n,"s",function(){return ft}),e.d(n,"f",function(){return pt}),e.d(n,"L",function(){return mt}),e.d(n,"t",function(){return ht}),e.d(n,"w",function(){return gt}),e.d(n,"x",function(){return vt});var w="",P="";w="/client/",P="/jdapi/";var k=String((new Date).getTime());function O(){k=String((new Date).getTime())}var j=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:i()(t.password)})),y("".concat(w,"user/login"),c.a.stringify(t))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/getUserInfo"),t,n)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/switchAccount"),t,n)},N=function(t){return t=Object(a.a)({},t,{codeType:1}),y("".concat(w,"user/getCode"),c.a.stringify(t))},I=function(t){var n={userPhoneNo:t,codeType:2};return y("".concat(w,"user/getCode"),c.a.stringify(n))},T=function(t){var n={userPhoneNo:t,codeType:3};return y("".concat(w,"user/getCode"),c.a.stringify(n))},L=function(t){var n={userPhoneNo:t,codeType:4};return y("".concat(w,"user/getCode"),c.a.stringify(n))},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:k}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"2",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:k}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:1}),g("".concat(w,"api/trad/poundageList"),t)},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:2}),g("".concat(w,"api/trad/poundageList"),t)},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:3}),g("".concat(w,"api/trad/poundageList"),t)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"product/list"),{productClassifyId:t},n)},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(w,"product/list"),{},t)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/product/subList"),{productClassifyId:t},n)},G=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.voucher.PAGE_LIMIT});return g("".concat(w,"api/voucher/list"),e,n)},J=function(t){O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(n)),timestamp:k}),y("".concat(w,"api/transferred/commit"),c.a.stringify(t))},U=function(t,n){var e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT});return g("".concat(w,"api/transferred/list"),e,n)},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O(),t=Object(a.a)({},t,{sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:k}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(t))},B=function(){return g("".concat(w,"api/bank/getBankCardList"))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.order.PAGE_LIMIT});return g("".concat(w,"api/order/getOrderList"),e,n)};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(w,"api/trad/getWithList"),e,n)}var q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(w,"api/trad/getWithList"),e,n)};function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:k}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function K(t,n){return g("".concat(P,"mail/phoneType/").concat(t),null,n)}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:k}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:k}),y("".concat(w,"api/traffic/charge"),c.a.stringify(t))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:k}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(t))}var Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:k}),y("".concat(w,"api/video/charge"),c.a.stringify(t))},$=function(t){O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:k}),y("".concat(w,"api/voucher/charge"),c.a.stringify(t))};function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:i()(t.oldPwd),newPwdOne:i()(t.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var nt=function(t){return t=Object(a.a)({},t,{password:i()(t.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(t))};function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:i()(t.oldPwd),newPwdOne:i()(t.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var at=function(t){return t=Object(a.a)({},t,{password:i()(t.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(t))},rt=function(t){return t=Object(a.a)({},t,{newLoginPwd:i()(t.newLoginPwd)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(t))};function ct(t,n){return v("".concat(w,"api/bankCard/").concat(t),null,n)}function ot(t,n){return g("".concat(w,"api/integralList"),null,n)}function it(){return g("".concat(P,"sellingGoods"))}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),g("".concat(P,"goodsClassLists"),t,n)}function ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(P,"goodsLists"),t,n)}function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(P,"mail/address"),t,n)}function st(t){return t=Object(a.a)({},t,{addType:1}),y("".concat(P,"mail/address"),c.a.stringify(t))}function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),g("".concat(P,"mail/userAddressList"),t,n)}function pt(t,n){return v("".concat(P,"mail/address/").concat(t),null,n)}function mt(t){O();var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(k,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:k}),y("".concat(P,"mail/placeOrder"),c.a.stringify(t))}function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return g("".concat(P,"mail/JDFreight"),t,n)}function gt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(P,"mail/JDOrders"),t,n)}function vt(t,n){return g("".concat(P,"mail/JDTrack/").concat(t),null,n)}},414:function(t,n,e){"use strict";var a=e(119),r=e(0),c=e.n(r),o=e(120),i=e(415),d=e.n(i);function u(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var l=o.b.div(u());n.a=function(){return c.a.createElement(l,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},415:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},421:function(t,n,e){"use strict";var a=e(119),r=e(0),c=e.n(r),o=e(120);function i(){var t=Object(a.a)(["\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n"]);return i=function(){return t},t}function d(){var t=Object(a.a)(["\n    margin-bottom: 30px;\n"]);return d=function(){return t},t}function u(){var t=Object(a.a)(["\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return u=function(){return t},t}var l=o.b.div(u()),s=o.b.div(d()),f=o.b.div(i());n.a=function(t){for(var n=t.count,e=void 0===n?1:n,a=[],r=0;r<e;r++)a.push(c.a.createElement(s,{key:r},c.a.createElement(f,null),c.a.createElement(f,{className:"w80"}),c.a.createElement(f,{className:"w50"}),c.a.createElement(f,{className:"w30"})));return c.a.createElement(l,null,a)}},422:function(t,n,e){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return a})},424:function(t,n,e){"use strict";var a=e(61),r=e(62),c=function(){function t(n,e){Object(a.a)(this,t),this.container=n,this.callback=e,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();n.a=c},570:function(t,n,e){"use strict";e.r(n);var a=e(416),r=e.n(a),c=e(422),o=e(417),i=e(61),d=e(62),u=e(64),l=e(63),s=e(66),f=e(65),p=e(0),m=e.n(p),h=e(412),g=e.n(h),v=e(413),b=e(122),y=e.n(b),w=e(411),P=e(421),k=e(119);function O(){var t=Object(k.a)(["\n  .page{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;    \n    .page-head{\n      height: 50px;\n    }\n    .page-body{\n      position: relative;\n      flex-grow: 1;\n    }\n  }\n  .wrapper{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;    \n    overflow-y: auto;\n  }\n  .selecter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 50px;\n    background: #fff;\n    img{\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      transition: transform .3s;\n      &.active{\n        transform: rotate(180deg);\n      }\n    }\n  }\n  .card{\n    border-radius: 3px;\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px;\n    .head{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 10px;\n      .title{\n        font-size: 16px;\n        font-weight: bold;\n      }\n      .subtitle{\n        color: #888;\n      }\n    }\n    dl{\n      display: flex;\n      dt{\n        flex-shrink: 0;\n        color: #888;\n      }\n      dd{\n        word-break: break-all;\n      }\n      a{\n        color: #1c92ff;\n      }\n    }\n    .date{\n      color: #888;\n      font-size: 12px;\n      text-align: right;\n      padding-top: 5px;\n    }\n  }\n"]);return O=function(){return t},t}var j=e(120).b.div(O()),x=e(409),E=e(424),N=e(414);function I(t){var n=t.amount,e=t.productName,a=t.voucherId,r=t.voucherPwd,c=t.expireTime,o=r;return o&&o.indexOf("http")>-1&&(o=m.a.createElement("a",{href:o},o)),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"head"},m.a.createElement("div",{className:"title"},e),m.a.createElement("div",{className:"subtitle"})),m.a.createElement("dl",null,m.a.createElement("dt",null,"\u5361\u53f7\uff1a"),m.a.createElement("dd",null,a)),m.a.createElement("dl",null,m.a.createElement("dt",null,"\u5bc6\u7801\uff1a"),m.a.createElement("dd",null,o)),m.a.createElement("dl",null,m.a.createElement("dt",null,"\u9762\u503c\uff1a"),m.a.createElement("dd",null,n||"--"," \u5143")),m.a.createElement("div",{className:"date"},"\u6709\u6548\u671f\u81f3\uff1a",c||"--"))}var T=function(t){var n=t.items;return n.length?m.a.createElement("div",null,n.map(function(t){return m.a.createElement(I,{key:t.buyOrderId,amount:t.amount,voucherId:t.voucherId,voucherPwd:t.voucherPwd,expireTime:t.expireTime,productName:t.productName})})):m.a.createElement(N.a,null)},L=function(t){var n=t.placeholderLoading,e=t.items;return n?m.a.createElement(P.a,{count:3}):m.a.createElement(T,{items:e})},C=g.a.CancelToken,A=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(u.a)(this,Object(l.a)(n).call(this,t))).loadData=e.loadData.bind(Object(s.a)(e)),e.currentPage=0,e.state={items:[],placeholderLoading:!0},e}return Object(f.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.scroll=new E.a(this.wrapper,this.loadData);var t={page:this.currentPage++};this.loadNextPage(t)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy(),this.source&&this.source.cancel("Operation canceled by the user.")}},{key:"loadNextPage",value:function(){var t=Object(o.a)(r.a.mark(function t(n){var e,a,o=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.source=C.source(),t.prev=1,t.next=4,Object(w.G)(n);case 4:e=t.sent,200===(a=e.data).status&&this.setState({items:[].concat(Object(c.a)(this.state.items),Object(c.a)(a.data))},function(){o.scroll.finish()});case 7:return t.prev=7,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),t.finish(7);case 11:case"end":return t.stop()}},t,this,[[1,,7,11]])}));return function(n){return t.apply(this,arguments)}}()},{key:"reset",value:function(){this.currentPage=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"loadData",value:function(){var t={page:this.currentPage++};this.loading=y.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"render",value:function(){var t=this,n=this.state,e=n.items,a=n.placeholderLoading;return m.a.createElement(j,null,m.a.createElement(v.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u7535\u5b50\u5361\u5238"}),m.a.createElement("div",{className:"page"},m.a.createElement("div",{className:"page-body"},m.a.createElement("div",{className:"wrapper",ref:function(n){return t.wrapper=n}},m.a.createElement("div",{className:"scroller"},m.a.createElement("div",{className:"u_px_xxx u_pt_xxx"},m.a.createElement(L,{items:e,placeholderLoading:a})))))),m.a.createElement(x.a,null))}}]),n}(p.Component);e.d(n,"view",function(){return A})}}]);
//# sourceMappingURL=15.fa06dfc0.chunk.js.map