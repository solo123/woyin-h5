(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{409:function(t,n,e){"use strict";var a=e(61),r=e(62),c=e(64),i=e(63),o=e(65),d=e(119),u=e(0),s=e.n(u),l=e(120),f=e(553),p=e(122),m=e(410),h=e.n(m);function g(){var t=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return t},t}var y=l.b.div(b()),w=l.b.div(v()),k=l.b.img(g()),P=function(t){function n(){return Object(a.a)(this,n),Object(c.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(o.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){p.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(y,{id:"mover"},s.a.createElement(f.a,{to:"/"},s.a.createElement(w,null,s.a.createElement(k,{src:h.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),n}(u.Component);n.a=P},410:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},411:function(t,n,e){"use strict";var a=e(46),r=e(418),c=e.n(r),i=e(419),o=e.n(i),d=e(412),u=e.n(d),s=e(123),l=e.n(s),f=e(84),p=e(32),m=e(121),h=u.a.create();h.defaults.timeout=m.a.timeout,h.interceptors.request.use(function(t){var n=Object(p.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(a.a)({},e,{params:n}))},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(a.a)({},e,{params:n}))},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"J",function(){return O}),e.d(n,"F",function(){return x}),e.d(n,"U",function(){return _}),e.d(n,"l",function(){return E}),e.d(n,"m",function(){return N}),e.d(n,"o",function(){return I}),e.d(n,"n",function(){return T}),e.d(n,"S",function(){return C}),e.d(n,"K",function(){return L}),e.d(n,"B",function(){return A}),e.d(n,"H",function(){return S}),e.d(n,"E",function(){return D}),e.d(n,"A",function(){return H}),e.d(n,"a",function(){return Y}),e.d(n,"D",function(){return G}),e.d(n,"G",function(){return M}),e.d(n,"I",function(){return F}),e.d(n,"V",function(){return J}),e.d(n,"b",function(){return U}),e.d(n,"k",function(){return B}),e.d(n,"y",function(){return z}),e.d(n,"p",function(){return R}),e.d(n,"C",function(){return W}),e.d(n,"N",function(){return q}),e.d(n,"z",function(){return K}),e.d(n,"O",function(){return Q}),e.d(n,"P",function(){return V}),e.d(n,"M",function(){return X}),e.d(n,"Q",function(){return Z}),e.d(n,"R",function(){return $}),e.d(n,"d",function(){return tt}),e.d(n,"h",function(){return nt}),e.d(n,"e",function(){return et}),e.d(n,"i",function(){return at}),e.d(n,"T",function(){return rt}),e.d(n,"g",function(){return ct}),e.d(n,"r",function(){return it}),e.d(n,"q",function(){return ot}),e.d(n,"v",function(){return dt}),e.d(n,"u",function(){return ut}),e.d(n,"j",function(){return st}),e.d(n,"c",function(){return lt}),e.d(n,"s",function(){return ft}),e.d(n,"f",function(){return pt}),e.d(n,"L",function(){return mt}),e.d(n,"t",function(){return ht}),e.d(n,"w",function(){return gt}),e.d(n,"x",function(){return vt});var w="",k="";w="/client",k="/jdapi";var P=String((new Date).getTime());function j(){P=String((new Date).getTime())}var O=function(t){return 1===t.loginType&&(t=Object(a.a)({},t,{password:o()(t.password)})),y("".concat(w,"api/user/login"),c.a.stringify(t))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/getUserInfo"),t,n)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/user/switchAccount"),t,n)},E=function(t){return t=Object(a.a)({},t,{codeType:1}),y("".concat(w,"api/user/getCode"),c.a.stringify(t))},N=function(t){var n={userPhoneNo:t,codeType:2};return y("".concat(w,"api/user/getCode"),c.a.stringify(n))},I=function(t){var n={userPhoneNo:t,codeType:3};return y("".concat(w,"api/user/getCode"),c.a.stringify(n))},T=function(t){var n={userPhoneNo:t,codeType:4};return y("".concat(w,"api/user/getCode"),c.a.stringify(n))},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("1")),timestamp:P}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tradPwd);return t=Object(a.a)({},t,{tradPwd:n,payment:"2",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&bankCode=").concat(t.bankCode,"&bankName=").concat(t.bankName,"&cardHoldName=").concat(t.cardHoldName,"&cardPhoneNo=").concat(t.cardPhoneNo,"&tradPwd=").concat(n,"&code=").concat(t.code,"&bankCard=").concat(t.bankCard,"&payment=").concat("2")),timestamp:P}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(t))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:1}),g("".concat(w,"api/trad/poundageList"),t)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:2}),g("".concat(w,"api/trad/poundageList"),t)},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object(a.a)({},t,{payment:3}),g("".concat(w,"api/trad/poundageList"),t)},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"product/list"),{productClassifyId:t},n)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(w,"product/list"),{},t)},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(w,"api/product/subList"),{productClassifyId:t},n)},M=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.voucher.PAGE_LIMIT});return g("".concat(w,"api/voucher/list"),e,n)},F=function(t){j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&to=").concat(t.to,"&num=").concat(t.num,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/transferred/commit"),c.a.stringify(t))},J=function(t,n){var e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT});return g("".concat(w,"api/transferred/list"),e,n)},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j(),t=Object(a.a)({},t,{sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardPhoneNo=").concat(t.cardPhoneNo,"&bankCard=").concat(t.bankCard,"&cardHoldName=").concat(t.cardHoldName,"&idNo=").concat(t.idNo)),timestamp:P}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(t))},B=function(){return g("".concat(w,"api/bank/getBankCardList"))},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.order.PAGE_LIMIT});return g("".concat(w,"api/order/getOrderList"),e,n)};function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(w,"api/trad/getWithList"),e,n)}var W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:m.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(w,"api/trad/getWithList"),e,n)};function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function K(t,n){return g("".concat(k,"mail/phoneType/").concat(t),null,n)}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat(t.chargeType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(t))}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{range:"0",tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&phone=").concat(t.phone,"&range=").concat("0","&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/traffic/charge"),c.a.stringify(t))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&cardNumber=").concat(t.cardNumber,"&cardType=").concat(t.cardType,"&productId=").concat(t.productId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(t))}var Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,chargeType:"1",sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&chargeAddr=").concat(t.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),y("".concat(w,"api/video/charge"),c.a.stringify(t))},$=function(t){j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&amount=").concat(t.amount,"&tranPwd=").concat(n,"&productId=").concat(t.productId)),timestamp:P}),y("".concat(w,"api/voucher/charge"),c.a.stringify(t))};function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var nt=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(t))};function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(t),n)}var at=function(t){return t=Object(a.a)({},t,{password:o()(t.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(t))},rt=function(t){return t=Object(a.a)({},t,{newLoginPwd:o()(t.newLoginPwd)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(t))};function ct(t,n){return v("".concat(w,"api/bankCard/").concat(t))}function it(t,n){return g("".concat(w,"api/integralList"),null,n)}function ot(){return g("".concat(k,"api/sellingGoods"))}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{typeId:1}),g("".concat(k,"api/goodsClassLists"),t,n)}function ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"api/goodsLists"),t,n)}function st(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(k,"mail/address"),t,n)}function lt(t){return t=Object(a.a)({},t,{addType:1}),y("".concat(k,"mail/address"),c.a.stringify(t))}function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(a.a)({},t,{addType:1}),g("".concat(k,"mail/userAddressList"),t,n)}function pt(t,n){return v("".concat(k,"mail/address/").concat(t),null,n)}function mt(t){j();var n=o()(t.tranPwd);return t=Object(a.a)({},t,{tranPwd:n,sign:o()("key=&afdY%d2^uy3&timestamp=".concat(P,"&skuId=").concat(t.skuId,"&count=").concat(t.count,"&addressId=").concat(t.addressId,"&tranPwd=").concat(n)),timestamp:P}),y("".concat(k,"mail/placeOrder"),c.a.stringify(t))}function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return g("".concat(k,"mail/JDFreight"),t,n)}function gt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(a.a)({},t,{limit:m.a.store.PAGE_LIMIT}),g("".concat(k,"mail/JDOrders"),t,n)}function vt(t,n){return g("".concat(k,"mail/JDTrack/").concat(t),null,n)}},414:function(t,n,e){"use strict";var a=e(119),r=e(0),c=e.n(r),i=e(120),o=e(415),d=e.n(o);function u(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var s=i.b.div(u());n.a=function(){return c.a.createElement(s,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},415:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},420:function(t,n,e){var a;!function(){"use strict";var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&t.push(i)}else if("object"===c)for(var o in a)e.call(a,o)&&a[o]&&t.push(o)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(t.exports=a)}()},422:function(t,n,e){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return a})},424:function(t,n,e){"use strict";var a=e(61),r=e(62),c=function(){function t(n,e){Object(a.a)(this,t),this.container=n,this.callback=e,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();n.a=c},565:function(t,n,e){"use strict";e.r(n);var a=e(422),r=e(416),c=e.n(r),i=e(417),o=e(61),d=e(62),u=e(64),s=e(63),l=e(66),f=e(65),p=e(0),m=e.n(p),h=e(413),g=e(123),v=e.n(g),b=e(420),y=e.n(b),w=e(411),k=e(409),P=e(424),j=e(119);function O(){var t=Object(j.a)(["\n  .layout{\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    &__aside{\n      width: 100px;\n      background: #f7f7f8;\n      overflow-y: auto;\n    }   \n    &__main{\n      flex: 1;\n      overflow-y: auto;\n      background: #fff;\n    }\n  }\n  .menu{\n    li{\n      padding: 15px;\n      &.active{\n        color: red;\n      }\n    }\n  }\n  .product{\n    position: relative;\n    padding: 15px;\n    background: #fff;\n    display: flex;\n    &:after{\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      height: 1px;\n      background: #eaeaea;\n      transform: scaleY(.3);      \n    }\n    &__thumb{\n      width: 100px;\n      height: 100px;\n    }\n    &__title{\n      font-weight: bold;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n    }\n    &__main{\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-left: 10px;\n    }\n    &__info{\n      display: flex;\n      justify-content: space-between;\n    }\n    &__price{\n      color: #F53415;\n      font-weight: bold;\n    }\n    &__label{\n      font-size: 12px;\n      padding: 2px 8px;\n      border-radius: 3px;\n      color: #7e7e7e;\n      background: #F2F2F2;  \n      &--primary{\n        color: #fff;\n        background: #F63618;\n      }           \n    }\n  }\n"]);return O=function(){return t},t}var x=e(120).b.div(O()),_=e(553),E=e(414),N="https://img13.360buyimg.com/n2/";function I(t){var n=t.id,e=t.name,a=t.src,r=t.price,c=t.data,i={pathname:"/store-detail/".concat(n),state:{detail:c}};return m.a.createElement(_.a,{to:i,className:"product"},m.a.createElement("div",{className:"product__aside"},m.a.createElement("div",{className:"product__thumb"},m.a.createElement("img",{src:a,alt:""}))),m.a.createElement("div",{className:"product__main"},m.a.createElement("div",{className:"product__title"},e),m.a.createElement("div",{className:"product__price"},"\uffe5",r),m.a.createElement("div",{className:"product__info"},m.a.createElement("span",{className:"product__label"},"\u6709\u8d27"),m.a.createElement("span",{className:"product__label product__label--primary"},"\u5151\u6362"))))}var T=function(t){var n=t.items;return n.length?m.a.createElement("div",{className:"product-list"},n.map(function(t){return m.a.createElement(I,{key:t.skuId,id:t.skuId,name:t.name,src:"".concat(N).concat(t.imagePath),price:t.price,data:t})})):m.a.createElement(E.a,null)},C=function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this,t))).loadData=e.loadData.bind(Object(l.a)(e)),e.handleClick=e.handleClick.bind(Object(l.a)(e)),e.currentPage=0,e.state={id:0,menus:[],items:[],completed:!1},e}return Object(f.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.loadGoodsSort(function(){t.setState({id:0},function(){var n={goodsClassId:0,page:t.currentPage++};t.loadNextPage(n)})}),this.scroll=new P.a(this.scrollContainer,this.loadData)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy()}},{key:"loadGoodsSort",value:function(){var t=Object(i.a)(c.a.mark(function t(n){var e,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.v)();case 3:e=t.sent,200===(a=e.data).status&&(this.setState({menus:a.data}),a.data[0]&&a.data[0].id&&n&&n(a.data[0].id));case 6:return t.prev=6,t.finish(6);case 8:case"end":return t.stop()}},t,this,[[0,,6,8]])}));return function(n){return t.apply(this,arguments)}}()},{key:"loadNextPage",value:function(){var t=Object(i.a)(c.a.mark(function t(n){var e,r,i,o=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.a.loading("\u52a0\u8f7d\u4e2d"),t.prev=1,t.next=4,Object(w.u)(n);case 4:r=t.sent,200===(i=r.data).status&&this.setState({items:[].concat(Object(a.a)(this.state.items),Object(a.a)(i.data.data))},function(){i.data.data.length?o.scroll.finish():o.setState({completed:!0})});case 7:return t.prev=7,e.hide(),t.finish(7);case 10:case"end":return t.stop()}},t,this,[[1,,7,10]])}));return function(n){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t={goodsClassId:this.state.id,page:this.currentPage++};this.loading=v.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"reset",value:function(){this.currentPage=0,this.scroll.closeScroll(),this.setState({items:[],completed:!1})}},{key:"handleClick",value:function(t){var n=this;this.state.id!==t&&(this.reset(),this.setState({id:t},function(){var t={goodsClassId:n.state.id,page:n.currentPage++};n.loadNextPage(t)}))}},{key:"render",value:function(){var t=this,n=this.state.id;return m.a.createElement(x,null,m.a.createElement(h.Helmet,{title:"\u5546\u54c1\u5206\u7c7b"}),m.a.createElement("div",{className:"layout"},m.a.createElement("div",{className:"layout__aside"},m.a.createElement("ul",{className:"menu"},this.state.menus.map(function(e,a){return m.a.createElement("li",{key:e.id,className:y()({active:n===a}),onClick:function(){return t.handleClick(a)}},e.category)}))),m.a.createElement("div",{className:"layout__main",ref:function(n){return t.scrollContainer=n}},m.a.createElement("main",null,m.a.createElement(T,{items:this.state.items}),this.state.completed&&!!this.state.items.length&&m.a.createElement("div",{style:{textAlign:"center",padding:10,color:"#aaa"}},"\u6ca1\u6709\u66f4\u591a\u4e86")))),m.a.createElement(k.a,null))}}]),n}(p.Component);e.d(n,"view",function(){return C})}}]);
//# sourceMappingURL=38.29d620c8.chunk.js.map