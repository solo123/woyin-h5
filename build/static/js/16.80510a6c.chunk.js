(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{211:function(e,t,n){"use strict";n.r(t);var r=n(72),a=n.n(r),i=n(73),o=n(9),c=n(10),u=n(12),s=n(11),d=n(13),l=n(0),f=n.n(l),p=(n(69),n(74),n(26)),g=n(68),h=(n(79),n(66));function v(){var e=Object(h.a)(["\n  .list{\n    margin: 15px;\n  }\n  .item{\n    border-radius: 3px;\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px;\n  }\n  .title{\n    font-size: 16px;\n    font-weight: bold;\n  }\n  .subtitle{\n    color: #888;\n  }\n  .box{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n  }\n  dl{\n    display: flex;\n    dt{\n      color: #888;\n    }\n  }\n  .date{\n    color: #888;\n    font-size: 12px;\n    text-align: right;\n    padding-top: 5px;\n  }\n"]);return v=function(){return e},e}var m=n(67).a.div(v()),y=n(70);function b(e){var t=e.amount,n=e.voucherId,r=e.voucherPwd,a=e.expireTime;return f.a.createElement("div",{className:"item"},f.a.createElement("div",{className:"box"},f.a.createElement("div",{className:"title"},"\u4eac\u4e1cE\u53611"),f.a.createElement("div",{className:"subtitle"},"100\u79ef\u5206")),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u5361\u53f7\uff1a"),f.a.createElement("dd",null,n)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u5bc6\u7801\uff1a"),f.a.createElement("dd",null,r)),f.a.createElement("dl",null,f.a.createElement("dt",null,"\u9762\u503c\uff1a"),f.a.createElement("dd",null,t,"\u5143")),f.a.createElement("div",{className:"date"},"\u6709\u6548\u671f\u81f3\uff1a",a))}var w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={items:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e={limit:p.a.voucher.PAGE_LIMIT,page:0};this.loadCardList(e)}},{key:"componentWillUnmount",value:function(){}},{key:"loadCardList",value:function(){var e=Object(i.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.j)(t);case 3:n=e.sent,200===(r=n.data).status&&(r.data=[{buyOrderId:12,amount:50,voucherId:21212121,voucherPwd:1212121212,expireTime:2121212121,productName:"dfasfasfd"}],this.setState({items:r.data}));case 6:return e.prev=6,e.finish(6);case 8:case"end":return e.stop()}},e,this,[[0,,6,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.items;return f.a.createElement(m,null,f.a.createElement("div",{className:"list"},e.map(function(e){return f.a.createElement(b,{key:e.buyOrderId,amount:e.amount,voucherId:e.voucherId,voucherPwd:e.voucherPwd,expireTime:e.expireTime,productName:e.productName})})),f.a.createElement(y.a,null))}}]),t}(l.Component);n.d(t,"view",function(){return w})},68:function(e,t,n){"use strict";var r=n(78),a=n.n(r),i=n(6),o=n(69),c=n.n(o),u=n(25),s=n.n(u),d=n(19),l=n(8),f=n(26),p=c.a.create();p.defaults.timeout=f.a.timeout,p.interceptors.request.use(function(e){var t=Object(l.a)("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)}),p.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(parseInt(e.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:d.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(e)});var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.get(e,Object(i.a)({},n,{params:t}))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.post(e,t,n)};n.d(t,"i",function(){return m}),n.d(t,"d",function(){return y}),n.d(t,"p",function(){return b}),n.d(t,"g",function(){return w}),n.d(t,"a",function(){return x}),n.d(t,"f",function(){return k}),n.d(t,"h",function(){return C}),n.d(t,"n",function(){return E}),n.d(t,"o",function(){return P}),n.d(t,"j",function(){return O}),n.d(t,"k",function(){return j}),n.d(t,"l",function(){return L}),n.d(t,"c",function(){return T}),n.d(t,"m",function(){return B}),n.d(t,"e",function(){return R});var v="";v="client/";t.b={login:function(e){return h("".concat(v,"user/login"),a.a.stringify(e))},getOrderList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"api/order/getOrderList"),e,t)},hotProducts:function(){return g("hotProducts")},getProductCateList:function(e){return g("getProductCateList",{type:e})},getProductByCate:function(e,t){return g("getProductByCate",{type:e,cate:t})},getProductById:function(e){return g("getProductById",{id:e})},getHotsell:function(){return g("hotsell")},getRechargePhoneProductsByType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"api/product/subList"),{productClassifyId:e},t)},getRechargeFlowProductsByType:function(e){return g("getRechargeFlowProductsByType",{type:e})},getRechargeOilProductsByType:function(e){return g("getRechargeOilProductsByType",{type:e})},getRechargeQBProductsByType:function(e){return g("getRechargeQBProductsByType",{type:e})},getVideoProviders:function(){return g("getVideoProviders")},getVideoProducts:function(){return g("getVideoProducts")},confirmTransPswd:function(e){return h("".concat(v,"api/trad/checkCode"),{pswd:e})},rechargePhone:function(e){return h("".concat(v,"api/charge/moreCredit"),a.a.stringify(e))},rechargeTraffic:function(e){return h("".concat(v,"api/traffic/charge"),a.a.stringify(e))},rechargeOil:function(e){return h("".concat(v,"api/oilCard/charge"),a.a.stringify(e))},rechargeVideo:function(e){return h("".concat(v,"api/video/charge"),a.a.stringify(e))},rechargeVoucher:function(e){return h("".concat(v,"api/voucher/charge"),a.a.stringify(e))},rechargeQB:function(e,t){return g("rechargeQB",{id:e,phone:t})},getBankcardList:function(){return g("".concat(v,"api/bank/getBankCardList"))},addBankcard:function(e){return h("".concat(v,"api/bank/addBankCard"),a.a.stringify(e))},getRedeemFee:function(e){return g("".concat(v,"api/trad/poundageList"),{amount:e})},sendMsgCode:function(e){return g("sendMsgCode",{phone:e})},redeemIntegral:function(e){return h("".concat(v,"api/trad/withdrawal"),a.a.stringify(e))},getRedeemRecordByStatus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"api/trad/getWithList"),e,t)},getCode:function(e){return h("".concat(v,"user/getCode"),a.a.stringify(e))},getCreditCardList:function(){return g("getCreditCardList")},creditCardRepayment:function(e){return h("creditCardRepayment",e)},transfer:function(e){return h("transfer",e)},getECardList:function(){return g("getECardList")},getECardDetailByType:function(){return g("getECardDetailByType")},addVehicle:function(e){return h("addVehicle",e)},getVehicleList:function(){return g("getVehicleList")},getViolationList:function(){return g("getViolationList")},getUserInfo:function(){return g("".concat(v,"api/user/getUserInfo"))}};var m=function(){return g("".concat(v,"api/user/getUserInfo"))},y=function(e){return h("".concat(v,"user/getCode"),a.a.stringify(e))},b=function(e){return h("".concat(v,"api/trad/withdrawal"),a.a.stringify(e))},w=function(e){return g("".concat(v,"api/trad/poundageList"),{amount:e})},x=function(e){return h("".concat(v,"user/changePwd"),a.a.stringify(e))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"product/list"),{productClassifyId:e},t)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"api/product/subList"),{productClassifyId:e},t)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(v,"api/video/charge"),a.a.stringify(e),t)},P=function(e){return h("".concat(v,"api/voucher/charge"),a.a.stringify(e))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"api/voucher/list"),e,t)},j=function(e){return h("".concat(v,"api/transferred/commit"),a.a.stringify(e))},L=function(e,t){return g("".concat(v,"api/transferred/list"),e,t)},T=function(){return g("".concat(v,"api/bank/getBankCardList"))},B=function(e){return h("".concat(v,"api/trad/withdrawal"),a.a.stringify(e))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(v,"api/order/getOrderList"),e,t)}},70:function(e,t,n){"use strict";var r=n(66),a=n(0),i=n.n(a),o=n(67),c=n(80),u=n(71),s=n.n(u);function d(){var e=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return e},e}var p=o.a.div(f()),g=o.a.div(l()),h=o.a.img(d());t.a=function(){return i.a.createElement(p,null,i.a.createElement(c.a,{to:"/"},i.a.createElement(g,null,i.a.createElement(h,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},71:function(e,t,n){e.exports=n.p+"static/media/home.73f12746.svg"},74:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},79:function(e,t,n){"use strict";var r=n(66),a=n(0),i=n.n(a);function o(){var e=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return o=function(){return e},e}var c=n(67).a.div(o());t.a=function(e){for(var t=e.count,n=void 0===t?1:t,r=[],a=0;a<n;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(c,null,r)}},80:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(4),u=n.n(c),s=n(14),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},p=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=r=l(this,e.call.apply(e,[this].concat(i))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,i=n.to;a?t.replace(i):t.push(i)}},l(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,o="string"===typeof t?Object(s.a)(t,null,null,i.location):t,c=i.createHref(o);return a.a.createElement("a",d({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);p.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=p}}]);
//# sourceMappingURL=16.80510a6c.chunk.js.map