(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{405:function(t,n,e){"use strict";var a=e(60),r=e(61),c=e(63),o=e(62),i=e(64),d=e(117),u=e(0),s=e.n(u),l=e(118),f=e(555),p=e(120),m=e(406),h=e.n(m);function g(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var y=l.b.div(b()),w=l.b.div(v()),k=l.b.img(g()),P=function(t){function n(){return Object(a.a)(this,n),Object(c.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){p.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(y,{id:"mover"},s.a.createElement(f.a,{to:"/"},s.a.createElement(w,null,s.a.createElement(k,{src:h.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),n}(u.Component);n.a=P},406:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},407:function(t,n,e){"use strict";var a=e(46),r=e(414),c=e.n(r),o=e(415),i=e.n(o),d=e(408),u=e.n(d),s=e(121),l=e.n(s),f=e(82),p=e(32),m=e(119),h=u.a.create();h.defaults.timeout=m.a.timeout,h.interceptors.request.use(function(t){var n=Object(p.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},e,{params:n}))},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"J",function(){return j}),e.d(n,"F",function(){return O}),e.d(n,"U",function(){return x}),e.d(n,"l",function(){return E}),e.d(n,"m",function(){return N}),e.d(n,"o",function(){return C}),e.d(n,"n",function(){return I}),e.d(n,"S",function(){return T}),e.d(n,"K",function(){return L}),e.d(n,"B",function(){return A}),e.d(n,"H",function(){return S}),e.d(n,"E",function(){return H}),e.d(n,"A",function(){return D}),e.d(n,"a",function(){return M}),e.d(n,"D",function(){return Y}),e.d(n,"G",function(){return G}),e.d(n,"I",function(){return _}),e.d(n,"V",function(){return F}),e.d(n,"b",function(){return B}),e.d(n,"k",function(){return J}),e.d(n,"y",function(){return U}),e.d(n,"p",function(){return z}),e.d(n,"C",function(){return R}),e.d(n,"N",function(){return W}),e.d(n,"z",function(){return q}),e.d(n,"O",function(){return K}),e.d(n,"P",function(){return Q}),e.d(n,"M",function(){return V}),e.d(n,"Q",function(){return X}),e.d(n,"R",function(){return Z}),e.d(n,"d",function(){return $}),e.d(n,"h",function(){return tt}),e.d(n,"e",function(){return nt}),e.d(n,"i",function(){return et}),e.d(n,"T",function(){return at}),e.d(n,"g",function(){return rt}),e.d(n,"r",function(){return ct}),e.d(n,"q",function(){return ot}),e.d(n,"v",function(){return it}),e.d(n,"u",function(){return dt}),e.d(n,"j",function(){return ut}),e.d(n,"c",function(){return st}),e.d(n,"s",function(){return lt}),e.d(n,"f",function(){return ft}),e.d(n,"L",function(){return pt}),e.d(n,"t",function(){return mt}),e.d(n,"w",function(){return ht}),e.d(n,"x",function(){return gt});var w="",k="";w="/client/",k="/jdapi/";var P=String((new Date).getTime()),j=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:i()(t.password)})),y("".concat(w,"user/login"),c.a.stringify(t))},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/getUserInfo"),t,n)},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/switchAccount"),t,n)},E=function(t){return t=Object(a.a)({},t,{codeType:1}),y("".concat(w,"user/getCode"),c.a.stringify(t))},N=function(t){var n={userPhoneNo:t,codeType:2};return y("".concat(w,"user/getCode"),c.a.stringify(n))},C=function(t){var n={userPhoneNo:t,codeType:3};return y("".concat(w,"user/getCode"),c.a.stringify(n))},I=function(t){var n={userPhoneNo:t,codeType:4};return y("".concat(w,"user/getCode"),c.a.stringify(n))},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:P}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"2",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:P}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:1}),g("".concat(w,"api/trad/poundageList"),t)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:2}),g("".concat(w,"api/trad/poundageList"),t)},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:3}),g("".concat(w,"api/trad/poundageList"),t)},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"product/list"),{productClassifyId:t},n)},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(w,"product/list"),{},t)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/product/subList"),{productClassifyId:t},n)},G=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.voucher.PAGE_LIMIT});return g("".concat(w,"api/voucher/list"),e,n)},_=function(t){var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/transferred/commit"),c.a.stringify(t))},F=function(t,n){var e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT});return g("".concat(w,"api/transferred/list"),e,n)},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:P}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(t))},J=function(){return g("".concat(w,"api/bank/getBankCardList"))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.order.PAGE_LIMIT});return g("".concat(w,"api/order/getOrderList"),e,n)};function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(w,"api/trad/getWithList"),e,n)}var R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(w,"api/trad/getWithList"),e,n)};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function q(t,n){return g("".concat(k,"mail/phoneType/").concat(t),null,n)}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/traffic/charge"),c.a.stringify(t))}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(t))}var X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),y("".concat(w,"api/video/charge"),c.a.stringify(t))},Z=function(t){var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),y("".concat(w,"api/voucher/charge"),c.a.stringify(t))};function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:i()(t.oldPwd),newPwdOne:i()(t.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var tt=function(t){return t=Object(a.a)({},t,{password:i()(t.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(t))};function nt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:i()(t.oldPwd),newPwdOne:i()(t.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var et=function(t){return t=Object(a.a)({},t,{password:i()(t.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(t))},at=function(t){return t=Object(a.a)({},t,{newLoginPwd:i()(t.newLoginPwd)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(t))};function rt(t,n){return v("".concat(w,"api/bankCard/").concat(t),null,n)}function ct(t,n){return g("".concat(w,"api/integralList"),null,n)}function ot(){return g("".concat(k,"sellingGoods"))}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),g("".concat(k,"goodsClassLists"),t,n)}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"goodsLists"),t,n)}function ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(k,"mail/address"),t,n)}function st(t){return t=Object(a.a)({},t,{addType:1}),y("".concat(k,"mail/address"),c.a.stringify(t))}function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),g("".concat(k,"mail/userAddressList"),t,n)}function ft(t,n){return v("".concat(k,"mail/address/").concat(t),null,n)}function pt(t){var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(k,"mail/placeOrder"),c.a.stringify(t))}function mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return g("".concat(k,"mail/JDFreight"),t,n)}function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"mail/JDOrders"),t,n)}function gt(t,n){return g("".concat(k,"mail/JDTrack/").concat(t),null,n)}},410:function(t,n,e){"use strict";var a=e(117),r=e(0),c=e.n(r),o=e(118),i=e(411),d=e.n(i);function u(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var s=o.b.div(u());n.a=function(){return c.a.createElement(s,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},411:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},416:function(t,n,e){var a;!function(){"use strict";var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&t.push(o)}else if("object"===c)for(var i in a)e.call(a,i)&&a[i]&&t.push(i)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(t.exports=a)}()},418:function(t,n,e){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return a})},420:function(t,n,e){"use strict";var a=e(60),r=e(61),c=function(){function t(n,e){Object(a.a)(this,t),this.container=n,this.callback=e,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();n.a=c},534:function(t,n,e){t.exports=e.p+"static/media/slogan.ed4294e9.png"},535:function(t,n,e){t.exports=e.p+"static/media/more.2f0ddc66.svg"},569:function(t,n,e){"use strict";e.r(n);var a=e(412),r=e.n(a),c=e(418),o=e(413),i=e(60),d=e(61),u=e(63),s=e(62),l=e(64),f=e(123),p=e(0),m=e.n(p),h=e(409),g=e(555),v=e(121),b=e.n(v),y=e(416),w=e.n(y),k=e(407),P=e(405),j=e(420),O=e(117);function x(){var t=Object(O.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  .top{\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    img{\n      width: 30px;\n      height: 30px;\n    }\n  }\n  header{\n    height: 150px;\n  }\n  .logo{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n    background: #da251c;\n    .slogan{\n      width: 150px;\n    }\n  }\n  nav{\n    overflow-x: auto;\n    background: #fff;\n    ul{\n      line-height: 50px;\n      display: flex;\n      li{\n        padding: 0 20px;\n        flex-shrink: 0;\n        &.active{\n          color: red;\n        }\n      }\n    }\n  }\n  .layout{\n    display: flex;\n    flex-wrap: wrap;\n    overflow: hidden;\n    padding: 5px;    \n    &-item{\n      width: 50%;\n    }\n  }\n  .product{\n    display: block;\n    padding: 10px;\n    margin: 5px;\n    background: #fff;\n    &-title{\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      font-weight: bold;\n      margin-bottom: 10px;      \n    }\n    &-price{\n      color: #F53415;\n      font-weight: bold;\n      margin-bottom: 5px;\n    }\n    &-info{\n      display: flex;\n      justify-content: space-between;\n    }\n    span{\n      font-size: 12px;\n      padding: 2px 8px;\n      border-radius: 3px;\n      color: #888;\n      background: #F2F2F2;      \n    }\n    &-btn{\n      background: #F63618;\n    }\n  }\n  .container{\n    flex-shrink: 1;\n    flex-grow: 1;\n    overflow-y: auto;\n  }  \n"]);return x=function(){return t},t}var E=e(118).b.div(x()),N=e(410),C="https://img13.360buyimg.com/n1/";function I(t){var n=t.id,e=t.title,a=t.src,r=t.price,c=t.data,o={pathname:"/store-detail/".concat(n),state:{detail:c}};return m.a.createElement("div",{className:"layout-item"},m.a.createElement(g.a,{className:"product",to:o},m.a.createElement("div",{className:"product-thumb"},m.a.createElement("img",{src:a,alt:""})),m.a.createElement("div",{className:"product-title"},e),m.a.createElement("div",{className:"product-price"},"\uffe5",r),m.a.createElement("div",{className:"product-info"},m.a.createElement("span",{className:"product-status"},"\u6709\u8d27"),m.a.createElement("span",{className:"product-btn"},"\u5151\u6362"))))}var T=function(t){var n=t.items;return n.length?m.a.createElement("div",{className:"layout"},n.map(function(t){return m.a.createElement(I,{key:t.skuId,id:t.skuId,title:t.name,src:"".concat(C).concat(t.imagePath),price:t.jdPrice,data:t})})):m.a.createElement(N.a,null)},L=e(534),A=e.n(L),S=e(535),H=e.n(S),D=0,M=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this,t))).loadData=e.loadData.bind(Object(f.a)(Object(f.a)(e))),e.handleClick=e.handleClick.bind(Object(f.a)(Object(f.a)(e))),e.state={id:1,items:[],completed:!1},e}return Object(l.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t={goodsClassId:this.state.id,page:D++};this.loadNextPage(t),this.scroll=new j.a(this.scrollContainer,this.loadData)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy()}},{key:"loadNextPage",value:function(){var t=Object(o.a)(r.a.mark(function t(n){var e,a,o,i=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.a.loading("\u5904\u7406\u4e2d"),t.prev=1,t.next=4,Object(k.u)(n);case 4:a=t.sent,200===(o=a.data).status&&this.setState({items:[].concat(Object(c.a)(this.state.items),Object(c.a)(o.data.data))},function(){o.data.data.length?i.scroll.finish():i.setState({completed:!0})});case 7:return t.prev=7,e.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,this,[[1,,7,10]])}));return function(n){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t={goodsClassId:this.state.id,page:D++};this.loading=b.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"reset",value:function(){D=0,this.scroll.closeScroll(),this.setState({items:[],completed:!1})}},{key:"handleClick",value:function(t){var n=this;this.state.id!==t&&(this.reset(),this.setState({id:t},function(){var t={goodsClassId:n.state.id,page:D++};n.loadNextPage(t)}))}},{key:"render",value:function(){var t=this,n=this.state.id;return m.a.createElement(E,null,m.a.createElement(h.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u4eac\u4e1c\u8d2d\u7269"}),m.a.createElement("div",{className:"top"},m.a.createElement(g.a,{to:"/store-sort"},m.a.createElement("img",{src:H.a,alt:""}))),m.a.createElement("header",null,m.a.createElement("div",{className:"logo"},m.a.createElement("img",{className:"slogan",src:A.a,alt:""})),m.a.createElement("nav",null,m.a.createElement("ul",null,m.a.createElement("li",{className:w()({active:1===n}),onClick:function(){return t.handleClick(1)}},"\u624b\u673a\u914d\u4ef6"),m.a.createElement("li",{className:w()({active:2===n}),onClick:function(){return t.handleClick(2)}},"\u6570\u7801\u4ea7\u54c1"),m.a.createElement("li",{className:w()({active:3===n}),onClick:function(){return t.handleClick(3)}},"\u5bb6\u5c45\u65e5\u7528"),m.a.createElement("li",{className:w()({active:4===n}),onClick:function(){return t.handleClick(4)}},"\u98df\u54c1\u996e\u6599"),m.a.createElement("li",{className:w()({active:5===n}),onClick:function(){return t.handleClick(5)}},"\u4e2a\u4eba\u62a4\u7406"),m.a.createElement("li",{className:w()({active:10===n}),onClick:function(){return t.handleClick(10)}},"\u4e2d\u5916\u540d\u9152")))),m.a.createElement("div",{className:"container",ref:function(n){return t.scrollContainer=n}},m.a.createElement("main",null,m.a.createElement(T,{items:this.state.items}),this.state.completed&&!!this.state.items.length&&m.a.createElement("div",{style:{textAlign:"center",paddingBottom:10,color:"#aaa"}},"\u6ca1\u6709\u66f4\u591a\u4e86"))),m.a.createElement(P.a,null))}}]),n}(p.Component);e.d(n,"view",function(){return M})}}]);
//# sourceMappingURL=35.53ed28a7.chunk.js.map