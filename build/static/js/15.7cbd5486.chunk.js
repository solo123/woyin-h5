(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{224:function(t,e,n){"use strict";n.r(e);var r=n(68),a=n.n(r),i=n(77),o=n(69),c=n(9),u=n(10),s=n(12),l=n(11),d=n(13),f=n(28),p=n(0),h=n.n(p),g=n(62),m=n.n(g),v=n(65),y=n(26),b=n.n(y),x=n(61),E=n(74),w=n(59);function k(){var t=Object(w.a)(["\n  .page{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;    \n    .page-head{\n      height: 50px;\n    }\n    .page-body{\n      position: relative;\n      flex-grow: 1;\n    }\n  }\n  .wrapper{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;    \n    overflow-y: auto;\n  }\n  .selecter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 50px;\n    background: #fff;\n    img{\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      transition: transform .3s;\n      &.active{\n        transform: rotate(180deg);\n      }\n    }\n  }\n  .card{\n    border-radius: 3px;\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px;\n    .head{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 10px;\n      .title{\n        font-size: 16px;\n        font-weight: bold;\n      }\n      .subtitle{\n        color: #888;\n      }\n    }\n    dl{\n      display: flex;\n      dt{\n        color: #888;\n      }\n    }\n    .date{\n      color: #888;\n      font-size: 12px;\n      text-align: right;\n      padding-top: 5px;\n    }\n  }\n"]);return k=function(){return t},t}var O=n(60).a.div(k()),P=n(63),j=n(76),L=n(29),C=n(66);function T(t){var e=t.amount,n=t.voucherId,r=t.voucherPwd,a=t.expireTime;return h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"head"},h.a.createElement("div",{className:"title"},"\u4eac\u4e1cE\u53611"),h.a.createElement("div",{className:"subtitle"},"100\u79ef\u5206")),h.a.createElement("dl",null,h.a.createElement("dt",null,"\u5361\u53f7\uff1a"),h.a.createElement("dd",null,n)),h.a.createElement("dl",null,h.a.createElement("dt",null,"\u5bc6\u7801\uff1a"),h.a.createElement("dd",null,r)),h.a.createElement("dl",null,h.a.createElement("dt",null,"\u9762\u503c\uff1a"),h.a.createElement("dd",null,e,"\u5143")),h.a.createElement("div",{className:"date"},"\u6709\u6548\u671f\u81f3\uff1a",a))}var I=function(t){var e=t.items;return e.length?h.a.createElement("div",null,e.map(function(t){return h.a.createElement(T,{key:t.buyOrderId,amount:t.amount,voucherId:t.voucherId,voucherPwd:t.voucherPwd,expireTime:L.a.formatTimestamp(t.expireTime),productName:t.productName})})):h.a.createElement(C.a,null)},R=function(t){var e=t.placeholderLoading,n=t.items;return e?h.a.createElement(E.a,{count:3}):h.a.createElement(I,{items:n})},B=m.a.CancelToken,N=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).loadData=n.loadData.bind(Object(f.a)(Object(f.a)(n))),n.currentPage=0,n.state={items:[],placeholderLoading:!0},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.scroll=new j.a(this.wrapper,this.loadData);var t={page:this.currentPage++};this.loadNextPage(t)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy(),this.source&&this.source.cancel("Operation canceled by the user.")}},{key:"loadNextPage",value:function(){var t=Object(o.a)(a.a.mark(function t(e){var n,r,o=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.source=B.source(),t.prev=1,t.next=4,Object(x.n)(e);case 4:n=t.sent,200===(r=n.data).status&&this.setState({items:[].concat(Object(i.a)(this.state.items),Object(i.a)(r.data))},function(){o.scroll.finish()});case 7:return t.prev=7,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),t.finish(7);case 11:case"end":return t.stop()}},t,this,[[1,,7,11]])}));return function(e){return t.apply(this,arguments)}}()},{key:"reset",value:function(){this.currentPage=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"loadData",value:function(){var t={page:this.currentPage++};this.loading=b.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"render",value:function(){var t=this,e=this.state,n=e.items,r=e.placeholderLoading;return h.a.createElement(O,null,h.a.createElement(v.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u7535\u5b50\u5361\u5238"}),h.a.createElement("div",{className:"page"},h.a.createElement("div",{className:"page-body"},h.a.createElement("div",{className:"wrapper",ref:function(e){return t.wrapper=e}},h.a.createElement("div",{className:"scroller"},h.a.createElement("div",{className:"u_px_xxx u_pt_xxx"},h.a.createElement(R,{items:n,placeholderLoading:r})))))),h.a.createElement(P.a,null))}}]),e}(p.Component);n.d(e,"view",function(){return N})},61:function(t,e,n){"use strict";var r=n(6),a=n(72),i=n.n(a),o=n(62),c=n.n(o),u=n(26),s=n.n(u),l=n(19),d=n(8),f=n(25),p=c.a.create();p.defaults.timeout=f.a.timeout,p.interceptors.request.use(function(t){var e=Object(d.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),p.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:l.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.get(t,Object(r.a)({},n,{params:e}))},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.post(t,e,n)};n.d(e,"m",function(){return v}),n.d(e,"e",function(){return y}),n.d(e,"f",function(){return b}),n.d(e,"t",function(){return x}),n.d(e,"j",function(){return E}),n.d(e,"o",function(){return w}),n.d(e,"b",function(){return k}),n.d(e,"i",function(){return O}),n.d(e,"l",function(){return P}),n.d(e,"r",function(){return j}),n.d(e,"s",function(){return L}),n.d(e,"n",function(){return C}),n.d(e,"p",function(){return T}),n.d(e,"u",function(){return I}),n.d(e,"a",function(){return R}),n.d(e,"d",function(){return B}),n.d(e,"q",function(){return N}),n.d(e,"h",function(){return S}),n.d(e,"g",function(){return _}),n.d(e,"k",function(){return A});var m="";m="/client/";e.c={login:function(t){return g("".concat(m,"user/login"),i.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/order/getOrderList"),t,e)},hotProducts:function(){return h("hotProducts")},getProductCateList:function(t){return h("getProductCateList",{type:t})},getProductByCate:function(t,e){return h("getProductByCate",{type:t,cate:e})},getProductById:function(t){return h("getProductById",{id:t})},getHotsell:function(){return h("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return h("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return h("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return h("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return h("getVideoProviders")},getVideoProducts:function(){return h("getVideoProducts")},confirmTransPswd:function(t){return g("".concat(m,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return g("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return g("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return g("".concat(m,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return g("".concat(m,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return g("".concat(m,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return g("".concat(m,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return h("".concat(m,"api/bank/getBankCardList"))},addBankcard:function(t){return g("".concat(m,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return h("".concat(m,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return h("sendMsgCode",{phone:t})},redeemIntegral:function(t){return g("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/trad/getWithList"),t,e)},getCode:function(t){return g("".concat(m,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return h("getCreditCardList")},creditCardRepayment:function(t){return g("creditCardRepayment",t)},transfer:function(t){return g("transfer",t)},getECardList:function(){return h("getECardList")},getECardDetailByType:function(){return h("getECardDetailByType")},addVehicle:function(t){return g("addVehicle",t)},getVehicleList:function(){return h("getVehicleList")},getViolationList:function(){return h("getViolationList")},getUserInfo:function(){return h("".concat(m,"api/user/getUserInfo"))}};var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/user/getUserInfo"),t,e)},y=function(t){return g("".concat(m,"user/getCode"),i.a.stringify(t))},b=function(t){var e={userPhoneNo:t,codeType:3};return g("".concat(m,"user/getCode"),i.a.stringify(e))},x=function(t){return g("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},E=function(t){return h("".concat(m,"api/trad/poundageList"),{amount:t})},w=function(t){return h("".concat(m,"api/trad/poundageList"),{amount:t})},k=function(t){return g("".concat(m,"user/changePwd"),i.a.stringify(t))},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"product/list"),{productClassifyId:t},e)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/product/subList"),{productClassifyId:t},e)},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/video/charge"),i.a.stringify(t),e)},L=function(t){return g("".concat(m,"api/voucher/charge"),i.a.stringify(t))},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.voucher.PAGE_LIMIT});return h("".concat(m,"api/voucher/list"),n,e)},T=function(t){return g("".concat(m,"api/transferred/commit"),i.a.stringify(t))},I=function(t,e){var n=Object(r.a)({},t,{limit:f.a.redeem.PAGE_LIMIT});return h("".concat(m,"api/transferred/list"),n,e)},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g("".concat(m,"api/bank/addBankCard"),i.a.stringify(t))},B=function(){return h("".concat(m,"api/bank/getBankCardList"))},N=function(t){return g("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.order.PAGE_LIMIT});return h("".concat(m,"api/order/getOrderList"),n,e)};function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.creditRecord.PAGE_LIMIT,payment:2});return h("".concat(m,"api/trad/getWithList"),n,e)}var A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)({},t,{limit:f.a.redeem.PAGE_LIMIT,payment:1});return h("".concat(m,"api/trad/getWithList"),n,e)}},63:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a),o=n(60),c=n(73),u=n(64),s=n.n(u);function l(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return l=function(){return t},t}function d(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return d=function(){return t},t}function f(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var p=o.a.div(f()),h=o.a.div(d()),g=o.a.img(l());e.a=function(){return i.a.createElement(p,null,i.a.createElement(c.a,{to:"/"},i.a.createElement(h,null,i.a.createElement(g,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},64:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},66:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a),o=n(60),c=n(67),u=n.n(c);function s(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var l=o.a.div(s());e.a=function(){return i.a.createElement(l,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},67:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},73:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(4),u=n.n(c),s=n(14),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var f=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},p=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=r=d(this,t.call.apply(t,[this].concat(i))),r.handleClick=function(t){if(r.props.onClick&&r.props.onClick(t),!t.defaultPrevented&&0===t.button&&!r.props.target&&!f(t)){t.preventDefault();var e=r.context.router.history,n=r.props,a=n.replace,i=n.to;a?e.replace(i):e.push(i)}},d(r,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==e,'You must specify the "to" property');var i=this.context.router.history,o="string"===typeof e?Object(s.a)(e,null,null,i.location):e,c=i.createHref(o);return a.a.createElement("a",l({},r,{onClick:this.handleClick,href:c,ref:n}))},e}(a.a.Component);p.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},e.a=p},74:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a);function o(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return o=function(){return t},t}var c=n(60).a.div(o());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,r=[],a=0;a<n;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(c,null,r)}},76:function(t,e,n){"use strict";var r=n(9),a=n(10),i=function(){function t(e,n){Object(r.a)(this,t),this.container=e,this.callback=n,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(a.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();e.a=i},77:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})}}]);
//# sourceMappingURL=15.7cbd5486.chunk.js.map