(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(t,e,n){t.exports=n.p+"static/media/zg.1344157f.svg"},101:function(t,e,n){t.exports=n.p+"static/media/zs.132007da.svg"},102:function(t,e,n){t.exports=n.p+"static/media/zx.498ec56f.svg"},103:function(t,e,n){t.exports=n.p+"static/media/default.1caa3942.svg"},2:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(1),c=n.n(i),o=n(5),u=n.n(o),s=n(8),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var l=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},p=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=r=f(this,t.call.apply(t,[this].concat(i))),r.handleClick=function(t){if(r.props.onClick&&r.props.onClick(t),!t.defaultPrevented&&0===t.button&&!r.props.target&&!l(t)){t.preventDefault();var e=r.context.router.history,n=r.props,a=n.replace,i=n.to;a?e.replace(i):e.push(i)}},f(r,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==e,'You must specify the "to" property');var i=this.context.router.history,c="string"===typeof e?Object(s.b)(e,null,null,i.location):e,o=i.createHref(c);return a.a.createElement("a",d({},r,{onClick:this.handleClick,href:o,ref:n}))},e}(a.a.Component);p.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},e.a=p},200:function(t,e,n){"use strict";n.r(e);var r=n(74),a=n.n(r),i=n(75),c=n(11),o=n(12),u=n(14),s=n(13),d=n(15),f=n(68),l=n(0),p=n.n(l),g=n(69),m=n(2),h=n(70),v=(n(10),n(81)),b=n(78),y=n(72),x=(n(87),n(88),n(89)),k=n.n(x),w=(n(90),n(91)),E=n.n(w),C=(n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(99),n(100),n(101)),O=n.n(C),_=(n(102),n(103)),j=n.n(_);function P(){var t=Object(f.a)(["\n  margin-bottom: 80px;\n  .main{\n    padding: 15px 15px 0 15px;\n  }\n  .card{\n    display: flex;\n    padding: 15px;\n    background: #fff;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);\n    &__main{\n      flex: 1;\n      margin-left: 15px;\n    }\n    &__logo{\n      width: 50px;\n      height: 50px;\n    }\n    &__title{\n      font-size: 16px;\n      font-weight: bold;\n    }\n    &__group{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 5px;\n    }\n    &__label{\n      color: #ccc;\n      font-size: 12px;\n      padding: 3px 5px;\n      border-radius: 3px;\n      background: #f2f2f2;\n    }\n    &__no{\n      color: #666;\n      font-size: 20px;\n      font-weight: bold;\n      margin-top: 5px;\n      word-break: break-all;\n      font-family: industry;\n    }\n  }\n  .fixed-bottom{\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n  }\n"]);return P=function(){return t},t}function B(){var t=Object(f.a)(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 50px;\n  border-radius: 3px;\n  box-shadow: 0 3px 5px rgba(76, 173, 255, .54);\n  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);\n"]);return B=function(){return t},t}function L(){var t=Object(f.a)(["\n  outline: none;\n  display: block;\n  border: 0;\n  width: 100%;\n  padding: 0;\n"]);return L=function(){return t},t}var R=g.a.button(L()),N=Object(g.a)(R)(B()),T=g.a.div(P()),I={"001":E.a,"002":O.a,"003":k.a},V=["\u5f85\u5904\u7406","\u7ed1\u5b9a\u6210\u529f","\u7ed1\u5b9a\u5931\u8d25","\u51bb\u7ed3"],z=function(t){t.id;var e=t.status,n=t.bankcardNo,r=t.bankcardName,a=t.bankcardIcon;return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card__aside"},p.a.createElement("img",{className:"card__logo",src:a,alt:""})),p.a.createElement("div",{className:"card__main"},p.a.createElement("div",{className:"card__group"},p.a.createElement("h2",{className:"card__title"},r)),p.a.createElement("label",{className:"card__label"},e),p.a.createElement("div",{className:"card__no"},n)))},q=function(t){var e=t.items;return p.a.createElement("div",null,e.map(function(t){return p.a.createElement(z,{key:t.bankCard,id:t.bankCard,status:V[t.status],bankcardNo:t.bankCard,bankcardName:t.bankName,bankcardIcon:I[t.bankcardClass]||j.a})}))},U=function(t){var e=t.loading,n=t.items;return e?p.a.createElement(v.a,{count:3}):n.length?p.a.createElement(q,{items:n}):p.a.createElement(b.a,null)},H=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={items:[],loading:!0},n.loadBankcardList=Object(i.a)(a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.b.getBankcardList();case 2:e=t.sent,200===(r=e.data).status&&n.setState({items:r.data}),n.setState({loading:!1});case 6:case"end":return t.stop()}},t)})),n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.loadBankcardList()}},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.items;return p.a.createElement(T,null,p.a.createElement("div",{className:"main"},p.a.createElement(U,{loading:e,items:n})),p.a.createElement("div",{className:"fixed-bottom"},p.a.createElement("div",{className:"u_m_xxx"},p.a.createElement(m.a,{to:"/bankcard-add"},p.a.createElement(N,null,"\u6dfb\u52a0\u94f6\u884c\u5361")))),p.a.createElement(y.a,null))}}]),e}(l.Component);e.default=H},70:function(t,e,n){"use strict";var r=n(80),a=n.n(r),i=n(7),c=n(71),o=n.n(c),u=n(26),s=n.n(u),d=n(20),f=n(10),l=n(27),p=o.a.create();p.defaults.timeout=l.a.timeout,p.interceptors.request.use(function(t){var e=Object(f.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),p.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:d.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.get(t,Object(i.a)({},n,{params:e}))},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.post(t,e,n)};n.d(e,"i",function(){return v}),n.d(e,"d",function(){return b}),n.d(e,"p",function(){return y}),n.d(e,"g",function(){return x}),n.d(e,"a",function(){return k}),n.d(e,"f",function(){return w}),n.d(e,"h",function(){return E}),n.d(e,"n",function(){return C}),n.d(e,"o",function(){return O}),n.d(e,"j",function(){return _}),n.d(e,"k",function(){return j}),n.d(e,"l",function(){return P}),n.d(e,"c",function(){return B}),n.d(e,"m",function(){return L}),n.d(e,"e",function(){return R});var h="";h="/client/";e.b={login:function(t){return m("".concat(h,"user/login"),a.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/order/getOrderList"),t,e)},hotProducts:function(){return g("hotProducts")},getProductCateList:function(t){return g("getProductCateList",{type:t})},getProductByCate:function(t,e){return g("getProductByCate",{type:t,cate:e})},getProductById:function(t){return g("getProductById",{id:t})},getHotsell:function(){return g("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return g("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return g("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return g("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return g("getVideoProviders")},getVideoProducts:function(){return g("getVideoProducts")},confirmTransPswd:function(t){return m("".concat(h,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return m("".concat(h,"api/charge/moreCredit"),a.a.stringify(t))},rechargeTraffic:function(t){return m("".concat(h,"api/traffic/charge"),a.a.stringify(t))},rechargeOil:function(t){return m("".concat(h,"api/oilCard/charge"),a.a.stringify(t))},rechargeVideo:function(t){return m("".concat(h,"api/video/charge"),a.a.stringify(t))},rechargeVoucher:function(t){return m("".concat(h,"api/voucher/charge"),a.a.stringify(t))},rechargeQB:function(t,e){return g("rechargeQB",{id:t,phone:e})},getBankcardList:function(){return g("".concat(h,"api/bank/getBankCardList"))},addBankcard:function(t){return m("".concat(h,"api/bank/addBankCard"),a.a.stringify(t))},getRedeemFee:function(t){return g("".concat(h,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return g("sendMsgCode",{phone:t})},redeemIntegral:function(t){return m("".concat(h,"api/trad/withdrawal"),a.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/trad/getWithList"),t,e)},getCode:function(t){return m("".concat(h,"user/getCode"),a.a.stringify(t))},getCreditCardList:function(){return g("getCreditCardList")},creditCardRepayment:function(t){return m("creditCardRepayment",t)},transfer:function(t){return m("transfer",t)},getECardList:function(){return g("getECardList")},getECardDetailByType:function(){return g("getECardDetailByType")},addVehicle:function(t){return m("addVehicle",t)},getVehicleList:function(){return g("getVehicleList")},getViolationList:function(){return g("getViolationList")},getUserInfo:function(){return g("".concat(h,"api/user/getUserInfo"))}};var v=function(){return g("".concat(h,"api/user/getUserInfo"))},b=function(t){return m("".concat(h,"user/getCode"),a.a.stringify(t))},y=function(t){return m("".concat(h,"api/trad/withdrawal"),a.a.stringify(t))},x=function(t){return g("".concat(h,"api/trad/poundageList"),{amount:t})},k=function(t){return m("".concat(h,"user/changePwd"),a.a.stringify(t))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"product/list"),{productClassifyId:t},e)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/product/subList"),{productClassifyId:t},e)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(h,"api/video/charge"),a.a.stringify(t),e)},O=function(t){return m("".concat(h,"api/voucher/charge"),a.a.stringify(t))},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/voucher/list"),t,e)},j=function(t){return m("".concat(h,"api/transferred/commit"),a.a.stringify(t))},P=function(t,e){return g("".concat(h,"api/transferred/list"),t,e)},B=function(){return g("".concat(h,"api/bank/getBankCardList"))},L=function(t){return m("".concat(h,"api/trad/withdrawal"),a.a.stringify(t))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(h,"api/order/getOrderList"),t,e)}},72:function(t,e,n){"use strict";var r=n(68),a=n(0),i=n.n(a),c=n(69),o=n(2),u=n(73),s=n.n(u);function d(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return d=function(){return t},t}function f(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return f=function(){return t},t}function l(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return l=function(){return t},t}var p=c.a.div(l()),g=c.a.div(f()),m=c.a.img(d());e.a=function(){return i.a.createElement(p,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(g,null,i.a.createElement(m,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},73:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},78:function(t,e,n){"use strict";var r=n(68),a=n(0),i=n.n(a),c=n(69),o=n(79),u=n.n(o);function s(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var d=c.a.div(s());e.a=function(){return i.a.createElement(d,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},79:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},81:function(t,e,n){"use strict";var r=n(68),a=n(0),i=n.n(a);function c(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=n(69).a.div(c());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,r=[],a=0;a<n;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,r)}},87:function(t,e,n){t.exports=n.p+"static/media/fz.c5fa25d0.svg"},88:function(t,e,n){t.exports=n.p+"static/media/gd.ec8aa3f0.svg"},89:function(t,e,n){t.exports=n.p+"static/media/gs.1a3c4b01.svg"},90:function(t,e,n){t.exports=n.p+"static/media/hx.3be0e6ed.svg"},91:function(t,e,n){t.exports=n.p+"static/media/js.e2841921.svg"},92:function(t,e,n){t.exports=n.p+"static/media/jt.2f070f4e.svg"},93:function(t,e,n){t.exports=n.p+"static/media/ms.6ba37844.svg"},94:function(t,e,n){t.exports=n.p+"static/media/ny.03c59a46.svg"},95:function(t,e,n){t.exports=n.p+"static/media/pa.f286000e.svg"},96:function(t,e,n){t.exports=n.p+"static/media/sh.9c8b70e2.svg"},97:function(t,e,n){t.exports=n.p+"static/media/shfz.287d5328.svg"},98:function(t,e,n){t.exports=n.p+"static/media/xy.ab1bcf3e.svg"},99:function(t,e,n){t.exports=n.p+"static/media/yz.38c7462e.svg"}}]);
//# sourceMappingURL=8.85d0316f.chunk.js.map