(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{212:function(t,e,n){"use strict";n.r(e);var r=n(68),a=n.n(r),i=n(69),c=n(9),o=n(10),u=n(12),s=n(11),d=n(13),f=n(59),l=n(0),p=n.n(l),g=n(60),m=n(73),h=n(65),v=n(61),b=n(74),y=n(66),x=n(63),k=n(82),C=n.n(k),w=n(83),E=n.n(w),O=n(84),P=n.n(O),B=n(85),j=n.n(B),_=n(86),L=n.n(_),T=n(87),I=n.n(T),R=n(88),N=n.n(R),M=n(89),V=n.n(M),z=n(90),A=n.n(z),S=n(91),q=n.n(S),H=n(92),D=n.n(H),G=n(93),U=n.n(G),K=n(94),F=n.n(K),Q=n(95),W=n.n(Q),J=n(96),Y=n.n(J),X=n(97),Z=n.n(X),$=n(98),tt=n.n($);function et(){var t=Object(f.a)(["\n  margin-bottom: 80px;\n  .main{\n    padding: 15px 15px 0 15px;\n  }\n  .card{\n    display: flex;\n    padding: 15px;\n    background: #fff;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);\n    &__main{\n      flex: 1;\n      margin-left: 15px;\n    }\n    &__logo{\n      width: 50px;\n      height: 50px;\n    }\n    &__title{\n      font-size: 16px;\n      font-weight: bold;\n    }\n    &__group{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 5px;\n    }\n    &__label{\n      color: #ccc;\n      font-size: 12px;\n      padding: 3px 5px;\n      border-radius: 3px;\n      background: #f2f2f2;\n    }\n    &__no{\n      color: #666;\n      font-size: 20px;\n      font-weight: bold;\n      margin-top: 5px;\n      word-break: break-all;\n      font-family: industry;\n    }\n  }\n  .fixed-bottom{\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n  }\n"]);return et=function(){return t},t}function nt(){var t=Object(f.a)(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 50px;\n  border-radius: 3px;\n  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);\n"]);return nt=function(){return t},t}function rt(){var t=Object(f.a)(["\n  outline: none;\n  display: block;\n  border: 0;\n  width: 100%;\n  padding: 0;\n"]);return rt=function(){return t},t}var at=g.a.button(rt()),it=Object(g.a)(at)(nt()),ct=g.a.div(et()),ot={GDB:C.a,CEB:E.a,ICBC:P.a,HXB:j.a,CCB:L.a,COMM:I.a,CMBC:N.a,ABC:V.a,SZPAB:A.a,BOS:q.a,SPDB:D.a,CIB:U.a,PSBC:F.a,BOC:W.a,CMB:Y.a,CITIC:Z.a},ut=["\u5f85\u5904\u7406","\u7ed1\u5b9a\u6210\u529f","\u7ed1\u5b9a\u5931\u8d25","\u51bb\u7ed3"],st=function(t){t.id;var e=t.status,n=t.bankcardNo,r=t.bankcardName,a=t.bankcardIcon;return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card__aside"},p.a.createElement("img",{className:"card__logo",src:a,alt:""})),p.a.createElement("div",{className:"card__main"},p.a.createElement("div",{className:"card__group"},p.a.createElement("h2",{className:"card__title"},r)),p.a.createElement("label",{className:"card__label"},e),p.a.createElement("div",{className:"card__no"},n)))},dt=function(t){var e=t.items;return p.a.createElement("div",null,e.map(function(t){return p.a.createElement(st,{key:t.bankCard,id:t.bankCard,status:ut[t.status],bankcardNo:t.bankCard,bankcardName:t.bankName,bankcardIcon:ot[t.bankCode]||tt.a})}))},ft=function(t){var e=t.loading,n=t.items;return e?p.a.createElement(b.a,{count:3}):n.length?p.a.createElement(dt,{items:n}):p.a.createElement(y.a,null)},lt=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={items:[],loading:!0},n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.loadBankcardList()}},{key:"loadBankcardList",value:function(){var t=Object(i.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(v.d)();case 3:e=t.sent,200===(n=e.data).status&&this.setState({items:n.data});case 6:return t.prev=6,this.setState({loading:!1}),t.finish(6);case 9:case"end":return t.stop()}},t,this,[[0,,6,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.items;return p.a.createElement(ct,null,p.a.createElement(h.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u94f6\u884c\u5361/\u4fe1\u7528\u5361\u5217\u8868"}),p.a.createElement("div",{className:"main"},p.a.createElement(ft,{loading:e,items:n})),p.a.createElement("div",{className:"fixed-bottom"},p.a.createElement("div",{className:"u_m_xxx"},p.a.createElement(m.a,{to:"/bankcard-add"},p.a.createElement(it,null,"\u6dfb\u52a0\u94f6\u884c\u5361")))),p.a.createElement(x.a,null))}}]),e}(l.Component);e.default=lt},61:function(t,e,n){"use strict";var r=n(6),a=n(72),i=n.n(a),c=n(62),o=n.n(c),u=n(26),s=n.n(u),d=n(19),f=n(8),l=n(25),p=o.a.create();p.defaults.timeout=l.a.timeout,p.interceptors.request.use(function(t){var e=Object(f.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),p.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:d.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.get(t,Object(r.a)({},n,{params:e}))},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.post(t,e,n)};n.d(e,"m",function(){return v}),n.d(e,"e",function(){return b}),n.d(e,"f",function(){return y}),n.d(e,"t",function(){return x}),n.d(e,"j",function(){return k}),n.d(e,"o",function(){return C}),n.d(e,"b",function(){return w}),n.d(e,"i",function(){return E}),n.d(e,"l",function(){return O}),n.d(e,"r",function(){return P}),n.d(e,"s",function(){return B}),n.d(e,"n",function(){return j}),n.d(e,"p",function(){return _}),n.d(e,"u",function(){return L}),n.d(e,"a",function(){return T}),n.d(e,"d",function(){return I}),n.d(e,"q",function(){return R}),n.d(e,"h",function(){return N}),n.d(e,"g",function(){return M}),n.d(e,"k",function(){return V});var h="";h="/client/";e.c={login:function(t){return m("".concat(h,"user/login"),i.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/order/getOrderList"),t,e)},hotProducts:function(){return g("hotProducts")},getProductCateList:function(t){return g("getProductCateList",{type:t})},getProductByCate:function(t,e){return g("getProductByCate",{type:t,cate:e})},getProductById:function(t){return g("getProductById",{id:t})},getHotsell:function(){return g("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return g("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return g("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return g("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return g("getVideoProviders")},getVideoProducts:function(){return g("getVideoProducts")},confirmTransPswd:function(t){return m("".concat(h,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return m("".concat(h,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return m("".concat(h,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return m("".concat(h,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return m("".concat(h,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return m("".concat(h,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return m("".concat(h,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return g("".concat(h,"api/bank/getBankCardList"))},addBankcard:function(t){return m("".concat(h,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return g("".concat(h,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return g("sendMsgCode",{phone:t})},redeemIntegral:function(t){return m("".concat(h,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/trad/getWithList"),t,e)},getCode:function(t){return m("".concat(h,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return g("getCreditCardList")},creditCardRepayment:function(t){return m("creditCardRepayment",t)},transfer:function(t){return m("transfer",t)},getECardList:function(){return g("getECardList")},getECardDetailByType:function(){return g("getECardDetailByType")},addVehicle:function(t){return m("addVehicle",t)},getVehicleList:function(){return g("getVehicleList")},getViolationList:function(){return g("getViolationList")},getUserInfo:function(){return g("".concat(h,"api/user/getUserInfo"))}};var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/user/getUserInfo"),t,e)},b=function(t){return m("".concat(h,"user/getCode"),i.a.stringify(t))},y=function(t){var e={userPhoneNo:t,codeType:3};return m("".concat(h,"user/getCode"),i.a.stringify(e))},x=function(t){return m("".concat(h,"api/trad/withdrawal"),i.a.stringify(t))},k=function(t){return g("".concat(h,"api/trad/poundageList"),{amount:t})},C=function(t){return g("".concat(h,"api/trad/poundageList"),{amount:t})},w=function(t){return m("".concat(h,"user/changePwd"),i.a.stringify(t))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"product/list"),{productClassifyId:t},e)},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/product/subList"),{productClassifyId:t},e)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(h,"api/video/charge"),i.a.stringify(t),e)},B=function(t){return m("".concat(h,"api/voucher/charge"),i.a.stringify(t))},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:l.a.voucher.PAGE_LIMIT});return g("".concat(h,"api/voucher/list"),n,e)},_=function(t){return m("".concat(h,"api/transferred/commit"),i.a.stringify(t))},L=function(t,e){var n=Object(r.a)({},t,{limit:l.a.redeem.PAGE_LIMIT});return g("".concat(h,"api/transferred/list"),n,e)},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m("".concat(h,"api/bank/addBankCard"),i.a.stringify(t))},I=function(){return g("".concat(h,"api/bank/getBankCardList"))},R=function(t){return m("".concat(h,"api/trad/withdrawal"),i.a.stringify(t))},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:l.a.order.PAGE_LIMIT});return g("".concat(h,"api/order/getOrderList"),n,e)};function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:l.a.creditRecord.PAGE_LIMIT,payment:2});return g("".concat(h,"api/trad/getWithList"),n,e)}var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:l.a.redeem.PAGE_LIMIT,payment:1});return g("".concat(h,"api/trad/getWithList"),n,e)}},63:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a),c=n(60),o=n(73),u=n(64),s=n.n(u);function d(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return d=function(){return t},t}function f(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return f=function(){return t},t}function l(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return l=function(){return t},t}var p=c.a.div(l()),g=c.a.div(f()),m=c.a.img(d());e.a=function(){return i.a.createElement(p,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(g,null,i.a.createElement(m,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},64:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},66:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a),c=n(60),o=n(67),u=n.n(o);function s(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var d=c.a.div(s());e.a=function(){return i.a.createElement(d,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},67:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},73:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(1),c=n.n(i),o=n(4),u=n.n(o),s=n(14),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var l=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},p=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=r=f(this,t.call.apply(t,[this].concat(i))),r.handleClick=function(t){if(r.props.onClick&&r.props.onClick(t),!t.defaultPrevented&&0===t.button&&!r.props.target&&!l(t)){t.preventDefault();var e=r.context.router.history,n=r.props,a=n.replace,i=n.to;a?e.replace(i):e.push(i)}},f(r,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==e,'You must specify the "to" property');var i=this.context.router.history,c="string"===typeof e?Object(s.a)(e,null,null,i.location):e,o=i.createHref(c);return a.a.createElement("a",d({},r,{onClick:this.handleClick,href:o,ref:n}))},e}(a.a.Component);p.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},e.a=p},74:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a);function c(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=n(60).a.div(c());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,r=[],a=0;a<n;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,r)}},82:function(t,e,n){t.exports=n.p+"static/media/fz.c5fa25d0.svg"},83:function(t,e,n){t.exports=n.p+"static/media/gd.ec8aa3f0.svg"},84:function(t,e,n){t.exports=n.p+"static/media/gs.1a3c4b01.svg"},85:function(t,e,n){t.exports=n.p+"static/media/hx.3be0e6ed.svg"},86:function(t,e,n){t.exports=n.p+"static/media/js.e2841921.svg"},87:function(t,e,n){t.exports=n.p+"static/media/jt.2f070f4e.svg"},88:function(t,e,n){t.exports=n.p+"static/media/ms.6ba37844.svg"},89:function(t,e,n){t.exports=n.p+"static/media/ny.03c59a46.svg"},90:function(t,e,n){t.exports=n.p+"static/media/pa.f286000e.svg"},91:function(t,e,n){t.exports=n.p+"static/media/sh.9c8b70e2.svg"},92:function(t,e,n){t.exports=n.p+"static/media/shfz.287d5328.svg"},93:function(t,e,n){t.exports=n.p+"static/media/xy.ab1bcf3e.svg"},94:function(t,e,n){t.exports=n.p+"static/media/yz.38c7462e.svg"},95:function(t,e,n){t.exports=n.p+"static/media/zg.1344157f.svg"},96:function(t,e,n){t.exports=n.p+"static/media/zs.132007da.svg"},97:function(t,e,n){t.exports=n.p+"static/media/zx.498ec56f.svg"},98:function(t,e,n){t.exports=n.p+"static/media/default.1caa3942.svg"}}]);
//# sourceMappingURL=6.18a427ab.chunk.js.map