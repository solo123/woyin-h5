(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{409:function(n,t,e){"use strict";var a=e(61),r=e(62),c=e(64),o=e(63),i=e(65),d=e(119),u=e(0),s=e.n(u),l=e(120),f=e(553),m=e(123),p=e(410),g=e.n(p);function v(){var n=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n"]);return v=function(){return n},n}function h(){var n=Object(d.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return h=function(){return n},n}function b(){var n=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return b=function(){return n},n}var y=l.b.div(b()),w=l.b.div(h()),P=l.b.img(v()),O=function(n){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,n),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.a.Mover(document.getElementById("mover"))}},{key:"render",value:function(){return s.a.createElement(y,{id:"mover"},s.a.createElement(f.a,{to:"/"},s.a.createElement(w,null,s.a.createElement(P,{src:g.a,alt:"\u56de\u5230\u9996\u9875"}))))}}]),t}(u.Component);t.a=O},410:function(n,t,e){n.exports=e.p+"static/media/home.73f12746.svg"},411:function(n,t,e){"use strict";var a=e(46),r=e(418),c=e.n(r),o=e(419),i=e.n(o),d=e(412),u=e.n(d),s=e(122),l=e.n(s),f=e(84),m=e(32),p=e(121),g=u.a.create();g.defaults.timeout=p.a.timeout,g.interceptors.request.use(function(n){var t=Object(m.a)("token");return t&&(n.headers.Authorization="Bearer ".concat(t)),n},function(n){return Promise.reject(n)}),g.interceptors.response.use(function(n){return n},function(n){if(n.response)switch(parseInt(n.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:f.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(n)});var v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(n,Object(a.a)({},e,{params:t}))},h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.delete(n,Object(a.a)({},e,{params:t}))},b=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.put(n,t,e)},y=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(n,t,e)};e.d(t,"J",function(){return j}),e.d(t,"F",function(){return I}),e.d(t,"U",function(){return E}),e.d(t,"l",function(){return T}),e.d(t,"m",function(){return x}),e.d(t,"o",function(){return N}),e.d(t,"n",function(){return C}),e.d(t,"S",function(){return L}),e.d(t,"K",function(){return A}),e.d(t,"B",function(){return Y}),e.d(t,"H",function(){return M}),e.d(t,"E",function(){return H}),e.d(t,"A",function(){return _}),e.d(t,"a",function(){return G}),e.d(t,"D",function(){return D}),e.d(t,"G",function(){return J}),e.d(t,"I",function(){return S}),e.d(t,"V",function(){return z}),e.d(t,"b",function(){return B}),e.d(t,"k",function(){return U}),e.d(t,"y",function(){return R}),e.d(t,"p",function(){return q}),e.d(t,"C",function(){return F}),e.d(t,"N",function(){return W}),e.d(t,"z",function(){return K}),e.d(t,"O",function(){return Q}),e.d(t,"P",function(){return V}),e.d(t,"M",function(){return X}),e.d(t,"Q",function(){return Z}),e.d(t,"R",function(){return $}),e.d(t,"d",function(){return nn}),e.d(t,"h",function(){return tn}),e.d(t,"e",function(){return en}),e.d(t,"i",function(){return an}),e.d(t,"T",function(){return rn}),e.d(t,"g",function(){return cn}),e.d(t,"r",function(){return on}),e.d(t,"q",function(){return dn}),e.d(t,"v",function(){return un}),e.d(t,"u",function(){return sn}),e.d(t,"j",function(){return ln}),e.d(t,"c",function(){return fn}),e.d(t,"s",function(){return mn}),e.d(t,"f",function(){return pn}),e.d(t,"L",function(){return gn}),e.d(t,"t",function(){return vn}),e.d(t,"w",function(){return hn}),e.d(t,"x",function(){return bn});var w="",P="";w="/client/",P="/jdapi/";var O=String((new Date).getTime());function k(){O=String((new Date).getTime())}var j=function(n){return 1===n.loginType&&(n=Object(a.a)({},n,{password:i()(n.password)})),y("".concat(w,"user/login"),c.a.stringify(n))},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/user/getUserInfo"),n,t)},E=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/user/switchAccount"),n,t)},T=function(n){return n=Object(a.a)({},n,{codeType:1}),y("".concat(w,"user/getCode"),c.a.stringify(n))},x=function(n){var t={userPhoneNo:n,codeType:2};return y("".concat(w,"user/getCode"),c.a.stringify(t))},N=function(n){var t={userPhoneNo:n,codeType:3};return y("".concat(w,"user/getCode"),c.a.stringify(t))},C=function(n){var t={userPhoneNo:n,codeType:4};return y("".concat(w,"user/getCode"),c.a.stringify(t))},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tradPwd);return n=Object(a.a)({},n,{tradPwd:t,payment:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&amount=").concat(n.amount,"&bankCode=").concat(n.bankCode,"&bankName=").concat(n.bankName,"&cardHoldName=").concat(n.cardHoldName,"&cardPhoneNo=").concat(n.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(n.code,"&bankCard=").concat(n.bankCard,"&payment=").concat("1")),timestamp:O}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(n))},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tradPwd);return n=Object(a.a)({},n,{tradPwd:t,payment:"2",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&amount=").concat(n.amount,"&bankCode=").concat(n.bankCode,"&bankName=").concat(n.bankName,"&cardHoldName=").concat(n.cardHoldName,"&cardPhoneNo=").concat(n.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(n.code,"&bankCard=").concat(n.bankCard,"&payment=").concat("2")),timestamp:O}),y("".concat(w,"api/trad/withdrawal"),c.a.stringify(n))},Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n=Object(a.a)({},n,{payment:1}),v("".concat(w,"api/trad/poundageList"),n)},M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n=Object(a.a)({},n,{payment:2}),v("".concat(w,"api/trad/poundageList"),n)},H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n=Object(a.a)({},n,{payment:3}),v("".concat(w,"api/trad/poundageList"),n)},_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"product/list"),{productClassifyId:n},t)},G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v("".concat(w,"product/list"),{},n)},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(w,"api/product/subList"),{productClassifyId:n},t)},J=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.voucher.PAGE_LIMIT});return v("".concat(w,"api/voucher/list"),e,t)},S=function(n){k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&to=").concat(n.to,"&num=").concat(n.num,"&tranPwd=").concat(t)),timestamp:O}),y("".concat(w,"api/transferred/commit"),c.a.stringify(n))},z=function(n,t){var e=Object(a.a)({},n,{limit:p.a.redeem.PAGE_LIMIT});return v("".concat(w,"api/transferred/list"),e,t)},B=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return k(),n=Object(a.a)({},n,{sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&cardPhoneNo=").concat(n.cardPhoneNo,"&bankCard=").concat(n.bankCard,"&cardHoldName=").concat(n.cardHoldName,"&idNo=").concat(n.idNo)),timestamp:O}),y("".concat(w,"api/bank/addBankCard"),c.a.stringify(n))},U=function(){return v("".concat(w,"api/bank/getBankCardList"))},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.order.PAGE_LIMIT});return v("".concat(w,"api/order/getOrderList"),e,t)};function q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.creditRecord.PAGE_LIMIT,payment:2});return v("".concat(w,"api/trad/getWithList"),e,t)}var F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},n,{limit:p.a.redeem.PAGE_LIMIT,payment:1});return v("".concat(w,"api/trad/getWithList"),e,t)};function W(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat("1","&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:O}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(n))}function K(n,t){return v("".concat(P,"mail/phoneType/").concat(n),null,t)}function Q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat(n.chargeType,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:O}),y("".concat(w,"api/charge/moreCredit"),c.a.stringify(n))}function V(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{range:"0",tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&phone=").concat(n.phone,"&range=").concat("0","&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:O}),y("".concat(w,"api/traffic/charge"),c.a.stringify(n))}function X(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&cardNumber=").concat(n.cardNumber,"&cardType=").concat(n.cardType,"&productId=").concat(n.productId,"&tranPwd=").concat(t)),timestamp:O}),y("".concat(w,"api/oilCard/charge"),c.a.stringify(n))}var Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,chargeType:"1",sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&chargeAddr=").concat(n.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(t,"&productId=").concat(n.productId)),timestamp:O}),y("".concat(w,"api/video/charge"),c.a.stringify(n))},$=function(n){k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&amount=").concat(n.amount,"&tranPwd=").concat(t,"&productId=").concat(n.productId)),timestamp:O}),y("".concat(w,"api/voucher/charge"),c.a.stringify(n))};function nn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{oldPwd:i()(n.oldPwd),newPwdOne:i()(n.newPwdOne),modifyType:1}),b("".concat(w,"api/modifyPwd"),c.a.stringify(n),t)}var tn=function(n){return n=Object(a.a)({},n,{password:i()(n.password)}),y("".concat(w,"user/changePwd"),c.a.stringify(n))};function en(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{oldPwd:i()(n.oldPwd),newPwdOne:i()(n.newPwdOne),modifyType:2}),b("".concat(w,"api/modifyPwd"),c.a.stringify(n),t)}var an=function(n){return n=Object(a.a)({},n,{password:i()(n.password)}),b("".concat(w,"api/resetTranPwd"),c.a.stringify(n))},rn=function(n){return n=Object(a.a)({},n,{newLoginPwd:i()(n.newLoginPwd)}),b("".concat(w,"api/resetAllPwd"),c.a.stringify(n))};function cn(n,t){return h("".concat(w,"api/bankCard/").concat(n),null,t)}function on(n,t){return v("".concat(w,"api/integralList"),null,t)}function dn(){return v("".concat(P,"sellingGoods"))}function un(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{typeId:1}),v("".concat(P,"goodsClassLists"),n,t)}function sn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{limit:p.a.store.PAGE_LIMIT}),v("".concat(P,"goodsLists"),n,t)}function ln(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v("".concat(P,"mail/address"),n,t)}function fn(n){return n=Object(a.a)({},n,{addType:1}),y("".concat(P,"mail/address"),c.a.stringify(n))}function mn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object(a.a)({},n,{addType:1}),v("".concat(P,"mail/userAddressList"),n,t)}function pn(n,t){return h("".concat(P,"mail/address/").concat(n),null,t)}function gn(n){k();var t=i()(n.tranPwd);return n=Object(a.a)({},n,{tranPwd:t,sign:i()("key=&afdY%d2^uy3&timestamp=".concat(O,"&skuId=").concat(n.skuId,"&count=").concat(n.count,"&addressId=").concat(n.addressId,"&tranPwd=").concat(t)),timestamp:O}),y("".concat(P,"mail/placeOrder"),c.a.stringify(n))}function vn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return v("".concat(P,"mail/JDFreight"),n,t)}function hn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return n=Object(a.a)({},n,{limit:p.a.store.PAGE_LIMIT}),v("".concat(P,"mail/JDOrders"),n,t)}function bn(n,t){return v("".concat(P,"mail/JDTrack/").concat(n),null,t)}},414:function(n,t,e){"use strict";var a=e(119),r=e(0),c=e.n(r),o=e(120),i=e(415),d=e.n(i);function u(){var n=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return n},n}var s=o.b.div(u());t.a=function(){return c.a.createElement(s,null,c.a.createElement("img",{src:d.a,alt:"\u6682\u65e0\u6570\u636e"}),c.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},415:function(n,t,e){n.exports=e.p+"static/media/empty.8103a6b5.svg"},421:function(n,t,e){"use strict";var a=e(119),r=e(0),c=e.n(r),o=e(120);function i(){var n=Object(a.a)(["\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n"]);return i=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-bottom: 30px;\n"]);return d=function(){return n},n}function u(){var n=Object(a.a)(["\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return u=function(){return n},n}var s=o.b.div(u()),l=o.b.div(d()),f=o.b.div(i());t.a=function(n){for(var t=n.count,e=void 0===t?1:t,a=[],r=0;r<e;r++)a.push(c.a.createElement(l,{key:r},c.a.createElement(f,null),c.a.createElement(f,{className:"w80"}),c.a.createElement(f,{className:"w50"}),c.a.createElement(f,{className:"w30"})));return c.a.createElement(s,null,a)}},569:function(n,t,e){"use strict";e.r(t);var a=e(416),r=e.n(a),c=e(417),o=e(61),i=e(62),d=e(64),u=e(63),s=e(65),l=e(0),f=e.n(l),m=e(413),p=e(411),g=e(409),v=e(421),h=e(123),b=e(414);function y(n){var t=n.points,e=(n.remark,n.createTime);return f.a.createElement("div",{className:"item"},f.a.createElement("div",null,f.a.createElement("h3",null,"\u6dfb\u52a0\u79ef\u5206"),f.a.createElement("div",{className:"date"},h.a.formatTimestamp(e))),f.a.createElement("div",{className:"integral"},"+",t))}var w=function(n){var t=n.items;return t.length?f.a.createElement("div",{className:"list"},t.map(function(n){return f.a.createElement(y,{key:n.id,points:n.points,remark:n.remark,createTime:n.createTime})})):f.a.createElement(b.a,null)},P=e(119);function O(){var n=Object(P.a)(['\n  main{\n    h2{\n      font-size: 16px;\n      padding: 15px;\n      background: #fff;\n    }\n    .list{\n      .item{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 15px;\n        background: #fff;\n        position: relative;\n        &:after{\n          content: " ";\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          height: 1px;\n          border-bottom: 1px solid #e5e5e5;\n          transform: scaleY(0.5);\n        }   \n        h3{\n          font-size: 14px;\n          font-weight: bold;\n        }\n        .date{\n          color: #888;\n        } \n        .integral{\n          color: #58a1ff;\n          font-size: 16px;\n          font-weight: bold;\n        }    \n      }\n    }\n  }\n\n']);return O=function(){return n},n}var k=e(120).b.div(O()),j=function(n){function t(n){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this,n))).state={loading:!0,items:[]},e}return Object(s.a)(t,n),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadIntegralList()}},{key:"loadIntegralList",value:function(){var n=Object(c.a)(r.a.mark(function n(){var t,e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(p.r)();case 3:t=n.sent,200===(e=t.data).status&&this.setState({items:e.data});case 6:return n.prev=6,this.setState({loading:!1}),n.finish(6);case 9:case"end":return n.stop()}},n,this,[[0,,6,9]])}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return f.a.createElement(k,null,f.a.createElement(m.Helmet,{title:"\u79ef\u5206\u6d3e\u53d1\u8bb0\u5f55"}),f.a.createElement("main",null,this.state.loading?f.a.createElement("div",{className:"u_m_xxx"},f.a.createElement(v.a,{count:3})):f.a.createElement(w,{items:this.state.items})),f.a.createElement(g.a,null))}}]),t}(l.Component);e.d(t,"view",function(){return j})}}]);
//# sourceMappingURL=42.314cad9b.chunk.js.map