(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{364:function(t,n,e){"use strict";var r=e(45),a=e(372),i=e.n(a),c=e(373),o=e.n(c),u=e(367),d=e.n(u),s=e(113),f=e.n(s),l=e(79),g=e(32),p=e(112),h=d.a.create();h.defaults.timeout=p.a.timeout,h.interceptors.request.use(function(t){var n=Object(g.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:f.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:l.a.dispatch({type:"UNAUTH_USER"});break;case 404:f.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:f.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:f.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:f.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:f.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:f.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:f.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:f.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else f.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.get(t,Object(r.a)({},e,{params:n}))},m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.delete(t,Object(r.a)({},e,{params:n}))},y=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.put(t,n,e)},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h.post(t,n,e)};e.d(n,"z",function(){return P}),e.d(n,"l",function(){return O}),e.d(n,"m",function(){return j}),e.d(n,"L",function(){return k}),e.d(n,"w",function(){return _}),e.d(n,"B",function(){return x}),e.d(n,"v",function(){return E}),e.d(n,"y",function(){return L}),e.d(n,"J",function(){return C}),e.d(n,"K",function(){return T}),e.d(n,"A",function(){return I}),e.d(n,"C",function(){return B}),e.d(n,"N",function(){return N}),e.d(n,"a",function(){return R}),e.d(n,"k",function(){return A}),e.d(n,"D",function(){return G}),e.d(n,"u",function(){return V}),e.d(n,"n",function(){return F}),e.d(n,"x",function(){return M}),e.d(n,"G",function(){return D}),e.d(n,"H",function(){return S}),e.d(n,"I",function(){return J}),e.d(n,"F",function(){return U}),e.d(n,"j",function(){return H}),e.d(n,"b",function(){return q}),e.d(n,"o",function(){return z}),e.d(n,"g",function(){return Q}),e.d(n,"r",function(){return W}),e.d(n,"q",function(){return K}),e.d(n,"E",function(){return Y}),e.d(n,"p",function(){return X}),e.d(n,"c",function(){return Z}),e.d(n,"h",function(){return $}),e.d(n,"d",function(){return tt}),e.d(n,"i",function(){return nt}),e.d(n,"M",function(){return et}),e.d(n,"s",function(){return rt}),e.d(n,"t",function(){return at}),e.d(n,"f",function(){return it});var w="";w="/client/";n.e={login:function(t){return 1===t.loginType&&(t=Object(r.a)({},t,{password:o()(t.password)})),b("".concat(w,"user/login"),i.a.stringify(t))},getOrderList:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/order/getOrderList"),t,n)},hotProducts:function(){return v("hotProducts")},getProductCateList:function(t){return v("getProductCateList",{type:t})},getProductByCate:function(t,n){return v("getProductByCate",{type:t,cate:n})},getProductById:function(t){return v("getProductById",{id:t})},getHotsell:function(){return v("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/product/subList"),{productClassifyId:t},n)},getRechargeFlowProductsByType:function(t){return v("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return v("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return v("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return v("getVideoProviders")},getVideoProducts:function(){return v("getVideoProducts")},confirmTransPswd:function(t){return b("".concat(w,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return b("".concat(w,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return b("".concat(w,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return b("".concat(w,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return b("".concat(w,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return v("".concat(w,"api/bank/getBankCardList"))},addBankcard:function(t){return b("".concat(w,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return v("".concat(w,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return v("sendMsgCode",{phone:t})},redeemIntegral:function(t){return b("".concat(w,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/trad/getWithList"),t,n)},getCode:function(t){return b("".concat(w,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return v("getCreditCardList")},creditCardRepayment:function(t){return b("creditCardRepayment",t)},transfer:function(t){return b("transfer",t)},getECardList:function(){return v("getECardList")},getECardDetailByType:function(){return v("getECardDetailByType")},addVehicle:function(t){return b("addVehicle",t)},getVehicleList:function(){return v("getVehicleList")},getViolationList:function(){return v("getViolationList")},getUserInfo:function(){return v("".concat(w,"api/user/getUserInfo"))}};var P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/user/getUserInfo"),t,n)},O=function(t){return b("".concat(w,"user/getCode"),i.a.stringify(t))},j=function(t){var n={userPhoneNo:t,codeType:3};return b("".concat(w,"user/getCode"),i.a.stringify(n))},k=function(t){return t=Object(r.a)({},t,{tradPwd:o()(t.tradPwd)}),b("".concat(w,"api/trad/withdrawal"),i.a.stringify(t))},_=function(t){return v("".concat(w,"api/trad/poundageList"),{amount:t})},x=function(t){return v("".concat(w,"api/trad/poundageList"),{amount:t})},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"product/list"),{productClassifyId:t},n)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/product/subList"),{productClassifyId:t},n)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{tranPwd:o()(t.tranPwd),chargeType:1});return b("".concat(w,"api/video/charge"),i.a.stringify(e),n)},T=function(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"api/voucher/charge"),i.a.stringify(t))},I=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.voucher.PAGE_LIMIT});return v("".concat(w,"api/voucher/list"),e,n)},B=function(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"api/transferred/commit"),i.a.stringify(t))},N=function(t,n){var e=Object(r.a)({},t,{limit:p.a.redeem.PAGE_LIMIT});return v("".concat(w,"api/transferred/list"),e,n)},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return b("".concat(w,"api/bank/addBankCard"),i.a.stringify(t))},A=function(){return v("".concat(w,"api/bank/getBankCardList"))},G=function(t){return t=Object(r.a)({},t,{tradPwd:o()(t.tradPwd)}),b("".concat(w,"api/trad/withdrawal"),i.a.stringify(t))},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.order.PAGE_LIMIT});return v("".concat(w,"api/order/getOrderList"),e,n)};function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return v("".concat(w,"api/trad/getWithList"),e,n)}var M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(r.a)({},t,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return v("".concat(w,"api/trad/getWithList"),e,n)};function D(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd),chargeType:1}),b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))}function S(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"api/charge/moreCredit"),i.a.stringify(t))}function J(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"api/traffic/charge"),i.a.stringify(t))}function U(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"api/oilCard/charge"),i.a.stringify(t))}function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"mail/address"),t,n)}function q(t){return t=Object(r.a)({},t,{addType:1}),b("".concat(w,"mail/address"),i.a.stringify(t))}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=Object(r.a)({},t,{addType:1}),v("".concat(w,"mail/userAddressList"),t,n)}function Q(t,n){return m("".concat(w,"mail/address/").concat(t),null,n)}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{typeId:1}),v("".concat(w,"mail/goodsClassLists"),t,n)}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{limit:p.a.store.PAGE_LIMIT}),v("".concat(w,"mail/goodsLists"),t,n)}function Y(t){return t=Object(r.a)({},t,{tranPwd:o()(t.tranPwd)}),b("".concat(w,"mail/placeOrder"),i.a.stringify(t))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return v("".concat(w,"mail/JDFreight"),t,n)}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:1}),y("".concat(w,"api/modifyPwd"),i.a.stringify(t),n)}var $=function(t){return t=Object(r.a)({},t,{password:o()(t.password)}),b("".concat(w,"user/changePwd"),i.a.stringify(t))};function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return t=Object(r.a)({},t,{oldPwd:o()(t.oldPwd),newPwdOne:o()(t.newPwdOne),modifyType:2}),y("".concat(w,"api/modifyPwd"),i.a.stringify(t),n)}var nt=function(t){return t=Object(r.a)({},t,{password:o()(t.password)}),y("".concat(w,"api/resetTranPwd"),i.a.stringify(t))},et=function(t){return t=Object(r.a)({},t,{oldLoginPwd:o()(t.oldLoginPwd),newLoginPwdOne:o()(t.newLoginPwdOne),oldTranPwd:o()(t.oldTranPwd),newTranPwdOne:o()(t.newTranPwdOne)}),y("".concat(w,"api/resetAllPwd"),i.a.stringify(t))};function rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return v("".concat(w,"mail/JDOrders"),t,n)}function at(t,n){return v("".concat(w,"mail/JDTrack/").concat(t),null,n)}function it(t,n){return m("".concat(w,"api/bankCard/").concat(t),null,n)}},365:function(t,n,e){"use strict";var r=e(362),a=e(1),i=e.n(a),c=e(363),o=e(534),u=e(366),d=e.n(u);function s(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return t},t}function f(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return f=function(){return t},t}function l(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return l=function(){return t},t}var g=c.a.div(l()),p=c.a.div(f()),h=c.a.img(s());n.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(h,{src:d.a,alt:"\u56de\u5230\u9996\u9875"}))))}},366:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},371:function(t,n,e){"use strict";var r=e(362),a=e(1),i=e.n(a),c=e(363),o=e(374),u=e.n(o);function d(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return d=function(){return t},t}var s=c.a.div(d());n.a=function(){return i.a.createElement(s,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},374:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},375:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&t.push(c)}else if("object"===i)for(var o in r)e.call(r,o)&&r[o]&&t.push(o)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(t.exports=r)}()},554:function(t,n,e){"use strict";e.r(n);var r=e(369),a=e.n(r),i=e(370),c=e(58),o=e(59),u=e(62),d=e(60),s=e(61),f=e(1),l=e.n(f),g=e(368),p=e(113),h=e.n(p),v=e(375),m=e.n(v),y=e(364),b=e(365),w=e(362);function P(){var t=Object(w.a)(["\n  .layout{\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    &__aside{\n      width: 100px;\n      background: #f7f7f8;\n      overflow-y: auto;\n    }   \n    &__main{\n      flex: 1;\n      overflow-y: auto;\n      background: #fff;\n    }\n  }\n  .menu{\n    li{\n      padding: 15px;\n      &.active{\n        color: red;\n      }\n    }\n  }\n  .product{\n    position: relative;\n    padding: 15px;\n    background: #fff;\n    display: flex;\n    &:after{\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      height: 1px;\n      background: #eaeaea;\n      transform: scaleY(.3);      \n    }\n    &__thumb{\n      width: 100px;\n      height: 100px;\n    }\n    &__title{\n      font-weight: bold;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n    }\n    &__main{\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-left: 10px;\n    }\n    &__info{\n      display: flex;\n      justify-content: space-between;\n    }\n    &__price{\n      color: #F53415;\n      font-weight: bold;\n    }\n    &__label{\n      font-size: 12px;\n      padding: 2px 8px;\n      border-radius: 3px;\n      color: #7e7e7e;\n      background: #F2F2F2;  \n      &--primary{\n        color: #fff;\n        background: #F63618;\n      }           \n    }\n  }\n"]);return P=function(){return t},t}var O=e(363).a.div(P()),j=e(534),k=e(371);function _(t){var n=t.name,e=t.src,r=t.price;return l.a.createElement(j.a,{to:"",className:"product"},l.a.createElement("div",{className:"product__aside"},l.a.createElement("div",{className:"product__thumb"},l.a.createElement("img",{src:e,alt:""}))),l.a.createElement("div",{className:"product__main"},l.a.createElement("div",{className:"product__title"},n),l.a.createElement("div",{className:"product__price"},"\uffe5",r),l.a.createElement("div",{className:"product__info"},l.a.createElement("span",{className:"product__label"},"\u6709\u8d27"),l.a.createElement("span",{className:"product__label product__label--primary"},"\u5151\u6362"))))}var x=function(t){var n=t.items;return n.length?l.a.createElement("div",{className:"product-list"},n.map(function(t){return l.a.createElement(_,{key:t.skuId,id:t.skuId,name:t.name,src:"https://img13.360buyimg.com/n1/".concat(t.imagePath),price:t.price})})):l.a.createElement(k.a,null)},E=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(u.a)(this,Object(d.a)(n).call(this,t))).state={currentId:"",menus:[],items:[]},e}return Object(s.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.getGoodsSort(function(n){t.getGoodsList(n)})}},{key:"getGoodsSort",value:function(){var t=Object(i.a)(a.a.mark(function t(n){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.r)();case 3:e=t.sent,200===(r=e.data).status&&(this.setState({menus:r.data}),n&&n(r.data[0].id));case 6:return t.prev=6,t.finish(6);case 8:case"end":return t.stop()}},t,this,[[0,,6,8]])}));return function(n){return t.apply(this,arguments)}}()},{key:"getGoodsList",value:function(){var t=Object(i.a)(a.a.mark(function t(n){var e,r,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({currentId:n}),e=h.a.loading("\u52a0\u8f7d\u4e2d"),r={goodsClassId:n,page:0},t.prev=3,t.next=6,Object(y.q)(r);case 6:i=t.sent,200===(c=i.data).status&&this.setState({items:c.data.data});case 9:return t.prev=9,e.hide(),t.finish(9);case 12:case"end":return t.stop()}},t,this,[[3,,9,12]])}));return function(n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,n=this.state.currentId;return l.a.createElement(O,null,l.a.createElement(g.Helmet,{title:"\u5546\u54c1\u5206\u7c7b"}),l.a.createElement("div",{className:"layout"},l.a.createElement("div",{className:"layout__aside"},l.a.createElement("ul",{className:"menu"},this.state.menus.map(function(e){return l.a.createElement("li",{key:e.id,className:m()({active:n===e.id}),onClick:function(){return t.getGoodsList(e.id)}},e.category)}))),l.a.createElement("div",{className:"layout__main"},l.a.createElement(x,{items:this.state.items}))),l.a.createElement(b.a,null))}}]),n}(f.Component);e.d(n,"view",function(){return E})}}]);
//# sourceMappingURL=36.27725da2.chunk.js.map