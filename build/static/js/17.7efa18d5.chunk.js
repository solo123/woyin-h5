(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{403:function(t,n,e){"use strict";var a=e(60),r=e(61),c=e(64),o=e(62),i=e(63),d=e(117),u=e(0),s=e.n(u),l=e(118),f=e(552),p=e(122),m=e(404),h=e.n(m);function g(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var y=l.b.div(b()),w=l.b.div(v()),k=l.b.img(g()),P=function(t){function n(){return Object(a.a)(this,n),Object(c.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){p.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(y,{id:"mover"},s.a.createElement(f.a,{to:"/"},s.a.createElement(w,null,s.a.createElement(k,{src:h.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),n}(u.Component);n.a=P},404:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},405:function(t,n,e){"use strict";var a=e(46),r=e(411),c=e.n(r),o=e(412),i=e.n(o),d=e(406),u=e.n(d),s=e(120),l=e.n(s),f=e(82),p=e(32),m=e(119),h=u.a.create();h.defaults.timeout=m.a.timeout,h.interceptors.request.use(function(t){var n=Object(p.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},e,{params:n}))},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"I",function(){return O}),e.d(n,"E",function(){return j}),e.d(n,"l",function(){return x}),e.d(n,"m",function(){return T}),e.d(n,"o",function(){return E}),e.d(n,"n",function(){return N}),e.d(n,"R",function(){return I}),e.d(n,"J",function(){return C}),e.d(n,"A",function(){return L}),e.d(n,"G",function(){return A}),e.d(n,"D",function(){return S}),e.d(n,"z",function(){return H}),e.d(n,"a",function(){return Y}),e.d(n,"C",function(){return _}),e.d(n,"F",function(){return D}),e.d(n,"H",function(){return M}),e.d(n,"T",function(){return G}),e.d(n,"b",function(){return J}),e.d(n,"k",function(){return B}),e.d(n,"y",function(){return U}),e.d(n,"p",function(){return z}),e.d(n,"B",function(){return R}),e.d(n,"M",function(){return W}),e.d(n,"N",function(){return q}),e.d(n,"O",function(){return F}),e.d(n,"L",function(){return K}),e.d(n,"P",function(){return Q}),e.d(n,"Q",function(){return V}),e.d(n,"d",function(){return X}),e.d(n,"h",function(){return Z}),e.d(n,"e",function(){return $}),e.d(n,"i",function(){return tt}),e.d(n,"S",function(){return nt}),e.d(n,"g",function(){return et}),e.d(n,"r",function(){return at}),e.d(n,"q",function(){return rt}),e.d(n,"v",function(){return ct}),e.d(n,"u",function(){return ot}),e.d(n,"j",function(){return it}),e.d(n,"c",function(){return dt}),e.d(n,"s",function(){return ut}),e.d(n,"f",function(){return st}),e.d(n,"K",function(){return lt}),e.d(n,"t",function(){return ft}),e.d(n,"w",function(){return pt}),e.d(n,"x",function(){return mt});var w="",k="";w="/client/",k="/jdapi/";var P=String((new Date).getTime()),O=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:i()(t.password)})),y("".concat(w,"user/login"),c.a.stringify(t))},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/getUserInfo"),t,n)},x=function(t){return t=Object(a.a)({},t,{codeType:1}),y("".concat(w,"user/getCode"),c.a.stringify(t))},T=function(t){var n={userPhoneNo:t,codeType:2};return y("".concat(w,"user/getCode"),c.a.stringify(n))},E=function(t){var n={userPhoneNo:t,codeType:3};return y("".concat(w,"user/getCode"),c.a.stringify(n))},N=function(t){var n={userPhoneNo:t,codeType:4};return y("".concat(w,"user/getCode"),c.a.stringify(n))},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:P}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"2",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:P}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:1}),g("".concat(w,"api/trad/poundageList"),t)},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:2}),g("".concat(w,"api/trad/poundageList"),t)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:3}),g("".concat(w,"api/trad/poundageList"),t)},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"product/list"),{productClassifyId:t},n)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(w,"product/list"),{},t)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/product/subList"),{productClassifyId:t},n)},D=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.voucher.PAGE_LIMIT});return g("".concat(w,"api/voucher/list"),e,n)},M=function(t){var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/transferred/commit"),c.a.stringify(t))},G=function(t,n){var e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT});return g("".concat(w,"api/transferred/list"),e,n)},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:P}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(t))},B=function(){return g("".concat(w,"api/bank/getBankCardList"))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.order.PAGE_LIMIT});return g("".concat(w,"api/order/getOrderList"),e,n)};function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(w,"api/trad/getWithList"),e,n)}var R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(w,"api/trad/getWithList"),e,n)};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/traffic/charge"),c.a.stringify(t))}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(t))}var Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),y("".concat(w,"api/video/charge"),c.a.stringify(t))},V=function(t){var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),y("".concat(w,"api/voucher/charge"),c.a.stringify(t))};function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:i()(t.oldPwd),newPwdOne:i()(t.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var Z=function(t){return t=Object(a.a)({},t,{password:i()(t.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(t))};function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:i()(t.oldPwd),newPwdOne:i()(t.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var tt=function(t){return t=Object(a.a)({},t,{password:i()(t.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(t))},nt=function(t){return t=Object(a.a)({},t,{oldLoginPwd:i()(t.oldLoginPwd),newLoginPwdOne:i()(t.newLoginPwdOne),oldTranPwd:i()(t.oldTranPwd),newTranPwdOne:i()(t.newTranPwdOne)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(t))};function et(t,n){return v("".concat(w,"api/bankCard/").concat(t),null,n)}function at(t,n){return g("".concat(w,"api/integralList"),null,n)}function rt(){return g("".concat(k,"sellingGoods"))}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),g("".concat(k,"goodsClassLists"),t,n)}function ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"goodsLists"),t,n)}function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(k,"mail/address"),t,n)}function dt(t){return t=Object(a.a)({},t,{addType:1}),y("".concat(k,"mail/address"),c.a.stringify(t))}function ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),g("".concat(k,"mail/userAddressList"),t,n)}function st(t,n){return v("".concat(k,"mail/address/").concat(t),null,n)}function lt(t){var n=i()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(P,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(k,"mail/placeOrder"),c.a.stringify(t))}function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return g("".concat(k,"mail/JDFreight"),t,n)}function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"mail/JDOrders"),t,n)}function mt(t,n){return g("".concat(k,"mail/JDTrack/").concat(t),null,n)}},410:function(t,n,e){"use strict";var a=e(117),r=e(0),c=e.n(r),o=e(118),i=e(413),d=e.n(i);function u(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var s=o.b.div(u());n.a=function(){return c.a.createElement(s,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},413:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},414:function(t,n,e){var a;!function(){"use strict";var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&t.push(o)}else if("object"===c)for(var i in a)e.call(a,i)&&a[i]&&t.push(i)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(t.exports=a)}()},415:function(t,n,e){"use strict";var a=e(117),r=e(0),c=e.n(r),o=e(118);function i(){var t=Object(a.a)(["\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n"]);return i=function(){return t},t}function d(){var t=Object(a.a)(["\n    margin-bottom: 30px;\n"]);return d=function(){return t},t}function u(){var t=Object(a.a)(["\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return u=function(){return t},t}var s=o.b.div(u()),l=o.b.div(d()),f=o.b.div(i());n.a=function(t){for(var n=t.count,e=void 0===n?1:n,a=[],r=0;r<e;r++)a.push(c.a.createElement(l,{key:r},c.a.createElement(f,null),c.a.createElement(f,{className:"w80"}),c.a.createElement(f,{className:"w50"}),c.a.createElement(f,{className:"w30"})));return c.a.createElement(s,null,a)}},416:function(t,n,e){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return a})},418:function(t,n,e){"use strict";var a=e(60),r=e(61),c=function(){function t(n,e){Object(a.a)(this,t),this.container=n,this.callback=e,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();n.a=c},568:function(t,n,e){"use strict";e.r(n);var a=e(408),r=e.n(a),c=e(416),o=e(409),i=e(60),d=e(61),u=e(64),s=e(62),l=e(63),f=e(123),p=e(0),m=e.n(p),h=e(407),g=e(120),v=e.n(g),b=e(414),y=e.n(b),w=e(405),k=e(403),P=e(415),O=e(410),j=e(418),x=e(552),T=e(122);function E(t){var n=t.id,e=t.createTime,a=t.goodsName,r=(t.status,t.totalScore),c=t.data,o={pathname:"/order-goods/".concat(n),state:{detail:c}};return m.a.createElement(x.a,{to:o,className:"item"},m.a.createElement("div",{className:"head"},m.a.createElement("span",{className:"title"},"\u4eac\u4e1c\u5546\u57ce")),m.a.createElement("div",{className:"body"},a),m.a.createElement("div",{className:"foot"},m.a.createElement("span",null,T.a.formatTimestamp(e)),m.a.createElement("span",null,r," \u79ef\u5206")))}var N=function(t){var n=t.items;return n.length?m.a.createElement("div",{className:"list"},n.map(function(t){return m.a.createElement(E,{key:t.id,id:t.id,createTime:t.createTime,goodsName:t.goodsName,totalScore:t.totalScore,status:t.status,data:t})})):m.a.createElement(O.a,null)},I=e(117);function C(){var t=Object(I.a)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n\n  ul{\n    display: flex;\n    flex-shrink: 0;\n    line-height: 60px;\n    background: #fff;\n    li{\n      flex: 1;\n      text-align: center;\n      transition: all .3s ease;\n      color: #888;\n      &.active{\n        color: #444;\n        font-size: 16px;\n        font-weight: bold;\n      }\n    }\n  }\n\n  .container{\n    flex-shrink: 1;\n    flex-grow: 1;\n    overflow-y: auto;\n  }    \n\n  .list{\n    .item{\n      display: block;\n      margin: 15px;\n      background: #fff;\n      .head{\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        padding: 15px;        \n        &:after{\n          content: " ";\n          position: absolute;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          height: 1px;\n          border-bottom: 1px solid #e5e5e5;\n          transform: scaleY(0.5);\n        }\n        .title{\n          font-size: 16px;\n          font-weight: bold;\n        }\n      }\n      .body{\n        display: flex;\n        justify-content: space-between;\n        padding: 15px;    \n      }\n      .foot{\n        display: flex;\n        justify-content: space-between;\n        padding: 0 15px 15px 15px;            \n      }\n    }\n  }\n']);return C=function(){return t},t}var L=e(118).b.div(C()),A=function(t){var n=t.placeholderLoading,e=t.items;return n?m.a.createElement("div",{className:"u_mx_xxx u_pt_xxx"},m.a.createElement(P.a,{count:3})):e.length?m.a.createElement(N,{items:e}):m.a.createElement(O.a,null)},S=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this,t))).loadData=e.loadData.bind(Object(f.a)(Object(f.a)(e))),e.handleClick=e.handleClick.bind(Object(f.a)(Object(f.a)(e))),e.currentPage=0,e.state={orderType:e.props.location.state.type||0,placeholderLoading:!0,items:[]},e}return Object(l.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t={page:this.currentPage++,orderType:this.state.orderType};this.loadNextPage(t),this.scroll=new j.a(this.scrollContainer,this.loadData)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy()}},{key:"loadNextPage",value:function(){var t=Object(o.a)(r.a.mark(function t(n){var e,a,o=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.w)(n);case 3:e=t.sent,200===(a=e.data).status&&this.setState({items:[].concat(Object(c.a)(this.state.items),Object(c.a)(a.data))},function(){a.data.length&&o.scroll.finish()});case 6:return t.prev=6,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),t.finish(6);case 10:case"end":return t.stop()}},t,this,[[0,,6,10]])}));return function(n){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t={page:this.currentPage++,orderType:0};this.loading=v.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"reset",value:function(){this.currentPage=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"handleClick",value:function(t){var n=this;this.state.orderType!==t&&(this.reset(),this.setState({orderType:t,placeholderLoading:!0},function(){var t={page:n.currentPage++,orderType:n.state.orderType};n.loadNextPage(t)}))}},{key:"render",value:function(){var t=this,n=this.state.orderType;return m.a.createElement(L,null,m.a.createElement(h.Helmet,{title:"\u5546\u54c1\u8ba2\u5355"}),m.a.createElement("ul",null,m.a.createElement("li",{className:y()({active:0===n}),onClick:function(){return t.handleClick(0)}},"\u5168\u90e8"),m.a.createElement("li",{className:y()({active:1===n}),onClick:function(){return t.handleClick(1)}},"\u5f85\u53d1\u8d27"),m.a.createElement("li",{className:y()({active:2===n}),onClick:function(){return t.handleClick(2)}},"\u5f85\u6536\u8d27")),m.a.createElement("div",{className:"container",ref:function(n){return t.scrollContainer=n}},m.a.createElement("main",null,m.a.createElement(A,{placeholderLoading:this.state.placeholderLoading,items:this.state.items}))),m.a.createElement(k.a,null))}}]),n}(p.Component);e.d(n,"view",function(){return S})}}]);
//# sourceMappingURL=17.7efa18d5.chunk.js.map