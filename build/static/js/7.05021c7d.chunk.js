(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{368:function(t,n,e){"use strict";var a=e(29),r=e(377),i=e.n(r),c=e(371),o=e.n(c),u=e(114),d=e.n(u),s=e(79),f=e(52),l=e(113),g=o.a.create();g.defaults.timeout=l.a.timeout,g.interceptors.request.use(function(t){var n=Object(f.a)("token");return n&&(t.headers.Authorization="Bearer ".concat(n)),t},function(t){return Promise.reject(t)}),g.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:d.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:s.a.dispatch({type:"UNAUTH_USER"});break;case 404:d.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:d.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:d.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:d.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:d.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:d.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:d.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:d.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else d.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(t,Object(a.a)({},e,{params:n}))},m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(t,n,e)};e.d(n,"m",function(){return h}),e.d(n,"e",function(){return b}),e.d(n,"f",function(){return y}),e.d(n,"u",function(){return x}),e.d(n,"j",function(){return k}),e.d(n,"o",function(){return C}),e.d(n,"b",function(){return E}),e.d(n,"i",function(){return w}),e.d(n,"l",function(){return B}),e.d(n,"s",function(){return P}),e.d(n,"t",function(){return O}),e.d(n,"n",function(){return _}),e.d(n,"p",function(){return j}),e.d(n,"v",function(){return L}),e.d(n,"a",function(){return I}),e.d(n,"d",function(){return T}),e.d(n,"q",function(){return N}),e.d(n,"h",function(){return R}),e.d(n,"g",function(){return M}),e.d(n,"k",function(){return V}),e.d(n,"r",function(){return z});var v="";v="/client/";n.c={login:function(t){return m("".concat(v,"user/login"),i.a.stringify(t))},getOrderList:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(v,"api/order/getOrderList"),t,n)},hotProducts:function(){return p("hotProducts")},getProductCateList:function(t){return p("getProductCateList",{type:t})},getProductByCate:function(t,n){return p("getProductByCate",{type:t,cate:n})},getProductById:function(t){return p("getProductById",{id:t})},getHotsell:function(){return p("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(v,"api/product/subList"),{productClassifyId:t},n)},getRechargeFlowProductsByType:function(t){return p("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return p("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return p("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return p("getVideoProviders")},getVideoProducts:function(){return p("getVideoProducts")},confirmTransPswd:function(t){return m("".concat(v,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return m("".concat(v,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return m("".concat(v,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return m("".concat(v,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return m("".concat(v,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return m("".concat(v,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return m("".concat(v,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return p("".concat(v,"api/bank/getBankCardList"))},addBankcard:function(t){return m("".concat(v,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return p("".concat(v,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return p("sendMsgCode",{phone:t})},redeemIntegral:function(t){return m("".concat(v,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(v,"api/trad/getWithList"),t,n)},getCode:function(t){return m("".concat(v,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return p("getCreditCardList")},creditCardRepayment:function(t){return m("creditCardRepayment",t)},transfer:function(t){return m("transfer",t)},getECardList:function(){return p("getECardList")},getECardDetailByType:function(){return p("getECardDetailByType")},addVehicle:function(t){return m("addVehicle",t)},getVehicleList:function(){return p("getVehicleList")},getViolationList:function(){return p("getViolationList")},getUserInfo:function(){return p("".concat(v,"api/user/getUserInfo"))}};var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(v,"api/user/getUserInfo"),t,n)},b=function(t){return m("".concat(v,"user/getCode"),i.a.stringify(t))},y=function(t){var n={userPhoneNo:t,codeType:3};return m("".concat(v,"user/getCode"),i.a.stringify(n))},x=function(t){return m("".concat(v,"api/trad/withdrawal"),i.a.stringify(t))},k=function(t){return p("".concat(v,"api/trad/poundageList"),{amount:t})},C=function(t){return p("".concat(v,"api/trad/poundageList"),{amount:t})},E=function(t){return m("".concat(v,"user/changePwd"),i.a.stringify(t))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(v,"product/list"),{productClassifyId:t},n)},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(v,"api/product/subList"),{productClassifyId:t},n)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{chargeType:1});return m("".concat(v,"api/video/charge"),i.a.stringify(e),n)},O=function(t){return m("".concat(v,"api/voucher/charge"),i.a.stringify(t))},_=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:l.a.voucher.PAGE_LIMIT});return p("".concat(v,"api/voucher/list"),e,n)},j=function(t){return m("".concat(v,"api/transferred/commit"),i.a.stringify(t))},L=function(t,n){var e=Object(a.a)({},t,{limit:l.a.redeem.PAGE_LIMIT});return p("".concat(v,"api/transferred/list"),e,n)},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m("".concat(v,"api/bank/addBankCard"),i.a.stringify(t))},T=function(){return p("".concat(v,"api/bank/getBankCardList"))},N=function(t){return m("".concat(v,"api/trad/withdrawal"),i.a.stringify(t))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:l.a.order.PAGE_LIMIT});return p("".concat(v,"api/order/getOrderList"),e,n)};function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:l.a.creditRecord.PAGE_LIMIT,payment:2});return p("".concat(v,"api/trad/getWithList"),e,n)}var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a.a)({},t,{limit:l.a.redeem.PAGE_LIMIT,payment:1});return p("".concat(v,"api/trad/getWithList"),e,n)};function z(t){var n=Object(a.a)({},t,{chargeType:1});return m("".concat(v,"api/charge/moreCredit"),i.a.stringify(n))}},369:function(t,n,e){"use strict";var a=e(366),r=e(1),i=e.n(r),c=e(367),o=e(540),u=e(370),d=e.n(u);function s(){var t=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return t},t}function f(){var t=Object(a.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return f=function(){return t},t}function l(){var t=Object(a.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return l=function(){return t},t}var g=c.a.div(l()),p=c.a.div(f()),m=c.a.img(s());n.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(m,{src:d.a,alt:"\u56de\u5230\u9996\u9875"}))))}},370:function(t,n,e){t.exports=e.p+"static/media/home.73f12746.svg"},376:function(t,n,e){"use strict";var a=e(366),r=e(1),i=e.n(r),c=e(367),o=e(378),u=e.n(o);function d(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return d=function(){return t},t}var s=c.a.div(d());n.a=function(){return i.a.createElement(s,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},378:function(t,n,e){t.exports=e.p+"static/media/empty.8103a6b5.svg"},380:function(t,n,e){"use strict";var a=e(366),r=e(1),i=e.n(r);function c(){var t=Object(a.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=e(367).a.div(c());n.a=function(t){for(var n=t.count,e=void 0===n?1:n,a=[],r=0;r<e;r++)a.push(i.a.createElement("div",{key:r,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,a)}},389:function(t,n,e){t.exports=e.p+"static/media/fz.c5fa25d0.svg"},390:function(t,n,e){t.exports=e.p+"static/media/gd.ec8aa3f0.svg"},391:function(t,n,e){t.exports=e.p+"static/media/gs.1a3c4b01.svg"},392:function(t,n,e){t.exports=e.p+"static/media/hx.3be0e6ed.svg"},393:function(t,n,e){t.exports=e.p+"static/media/js.e2841921.svg"},394:function(t,n,e){t.exports=e.p+"static/media/jt.2f070f4e.svg"},395:function(t,n,e){t.exports=e.p+"static/media/ms.6ba37844.svg"},396:function(t,n,e){t.exports=e.p+"static/media/ny.03c59a46.svg"},397:function(t,n,e){t.exports=e.p+"static/media/pa.f286000e.svg"},398:function(t,n,e){t.exports=e.p+"static/media/sh.9c8b70e2.svg"},399:function(t,n,e){t.exports=e.p+"static/media/shfz.287d5328.svg"},400:function(t,n,e){t.exports=e.p+"static/media/xy.ab1bcf3e.svg"},401:function(t,n,e){t.exports=e.p+"static/media/yz.38c7462e.svg"},402:function(t,n,e){t.exports=e.p+"static/media/zg.1344157f.svg"},403:function(t,n,e){t.exports=e.p+"static/media/zs.132007da.svg"},404:function(t,n,e){t.exports=e.p+"static/media/zx.498ec56f.svg"},405:function(t,n,e){t.exports=e.p+"static/media/default.1caa3942.svg"},542:function(t,n,e){"use strict";e.r(n);var a=e(374),r=e.n(a),i=e(375),c=e(57),o=e(58),u=e(60),d=e(59),s=e(61),f=e(366),l=e(1),g=e.n(l),p=e(367),m=e(540),v=e(372),h=e(368),b=e(380),y=e(376),x=e(369),k=e(389),C=e.n(k),E=e(390),w=e.n(E),B=e(391),P=e.n(B),O=e(392),_=e.n(O),j=e(393),L=e.n(j),I=e(394),T=e.n(I),N=e(395),R=e.n(N),M=e(396),V=e.n(M),z=e(397),A=e.n(z),S=e(398),G=e.n(S),U=e(399),D=e.n(U),H=e(400),F=e.n(H),Q=e(401),W=e.n(Q),q=e(402),J=e.n(q),X=e(403),Z=e.n(X),K=e(404),Y=e.n(K),$=e(405),tt=e.n($);function nt(){var t=Object(f.a)(["\n  margin-bottom: 80px;\n  .main{\n    padding: 15px 15px 0 15px;\n  }\n  .card{\n    display: flex;\n    padding: 15px;\n    background: #fff;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);\n    &__main{\n      flex: 1;\n      margin-left: 15px;\n    }\n    &__logo{\n      width: 50px;\n      height: 50px;\n    }\n    &__title{\n      font-size: 16px;\n      font-weight: bold;\n    }\n    &__group{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 5px;\n    }\n    &__label{\n      color: #ccc;\n      font-size: 12px;\n      padding: 3px 5px;\n      border-radius: 3px;\n      background: #f2f2f2;\n    }\n    &__no{\n      color: #666;\n      font-size: 20px;\n      font-weight: bold;\n      margin-top: 5px;\n      word-break: break-all;\n      font-family: industry;\n    }\n  }\n  .fixed-bottom{\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n  }\n"]);return nt=function(){return t},t}function et(){var t=Object(f.a)(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 50px;\n  border-radius: 3px;\n  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);\n"]);return et=function(){return t},t}function at(){var t=Object(f.a)(["\n  outline: none;\n  display: block;\n  border: 0;\n  width: 100%;\n  padding: 0;\n"]);return at=function(){return t},t}var rt=p.a.button(at()),it=Object(p.a)(rt)(et()),ct=p.a.div(nt()),ot={GDB:C.a,CEB:w.a,ICBC:P.a,HXB:_.a,CCB:L.a,COMM:T.a,CMBC:R.a,ABC:V.a,SZPAB:A.a,BOS:G.a,SPDB:D.a,CIB:F.a,PSBC:W.a,BOC:J.a,CMB:Z.a,CITIC:Y.a},ut=["\u5f85\u5904\u7406","\u7ed1\u5b9a\u6210\u529f","\u7ed1\u5b9a\u5931\u8d25","\u51bb\u7ed3"],dt=function(t){t.id;var n=t.status,e=t.bankcardNo,a=t.bankcardName,r=t.bankcardIcon;return g.a.createElement("div",{className:"card"},g.a.createElement("div",{className:"card__aside"},g.a.createElement("img",{className:"card__logo",src:r,alt:""})),g.a.createElement("div",{className:"card__main"},g.a.createElement("div",{className:"card__group"},g.a.createElement("h2",{className:"card__title"},a)),g.a.createElement("label",{className:"card__label"},n),g.a.createElement("div",{className:"card__no"},e)))},st=function(t){var n=t.items;return g.a.createElement("div",null,n.map(function(t){return g.a.createElement(dt,{key:t.bankCard,id:t.bankCard,status:ut[t.status],bankcardNo:t.bankCard,bankcardName:t.bankName,bankcardIcon:ot[t.bankCode]||tt.a})}))},ft=function(t){var n=t.loading,e=t.items;return n?g.a.createElement(b.a,{count:3}):e.length?g.a.createElement(st,{items:e}):g.a.createElement(y.a,null)},lt=function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(u.a)(this,(t=Object(d.a)(n)).call.apply(t,[this].concat(r)))).state={items:[],loading:!0},e}return Object(s.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadBankcardList()}},{key:"loadBankcardList",value:function(){var t=Object(i.a)(r.a.mark(function t(){var n,e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.d)();case 3:n=t.sent,200===(e=n.data).status&&this.setState({items:e.data});case 6:return t.prev=6,this.setState({loading:!1}),t.finish(6);case 9:case"end":return t.stop()}},t,this,[[0,,6,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.loading,e=t.items;return g.a.createElement(ct,null,g.a.createElement(v.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u94f6\u884c\u5361/\u4fe1\u7528\u5361\u5217\u8868"}),g.a.createElement("div",{className:"main"},g.a.createElement(ft,{loading:n,items:e})),g.a.createElement("div",{className:"fixed-bottom"},g.a.createElement("div",{className:"u_m_xxx"},g.a.createElement(m.a,{to:"/bankcard-add"},g.a.createElement(it,null,"\u6dfb\u52a0\u94f6\u884c\u5361")))),g.a.createElement(x.a,null))}}]),n}(l.Component);n.default=lt}}]);
//# sourceMappingURL=7.05021c7d.chunk.js.map