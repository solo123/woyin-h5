(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{210:function(t,e,n){"use strict";n.r(e);var r=n(65),a=n.n(r);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=n(66),c=n(9),u=n(10),s=n(12),l=n(11),d=n(13),f=n(28),p=n(59),g=n(0),h=n.n(g),m=n(60),v=n(70),y=n.n(v),b=n(26),x=n.n(b),k=n(25),E=n(61),C=n(29),w=n(73),O=n(68),P=n(63);function j(){var t=Object(p.a)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  ul{\n    display: flex;\n    flex-shrink: 0;\n    line-height: 60px;\n    background: #fff;\n    li{\n      flex: 1;\n      text-align: center;\n      transition: all .3s ease;\n      color: #888;\n      &.active{\n        color: #444;\n        font-size: 16px;\n        font-weight: bold;\n      }\n    }\n  }\n  .container{\n    flex-shrink: 1;\n    flex-grow: 1;\n    overflow-y: auto;\n  }\n  .list{\n    margin: 15px 15px 0 15px;\n    strong{\n      color: #F53415;\n    }\n    .item{\n      background: #fff;\n      margin-bottom: 15px;\n      box-shadow: 0 1px 3px 0 rgba(0,0,0,.06);\n      &__head{\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        padding: 15px;\n        &:after{\n          content: "";\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 1px;\n          transform: scaleY(.3);\n          background: #eaeaea;\n        }\n      }\n      &__body{\n        padding: 15px 15px 0 15px;\n      }\n      &__foot{\n        display: flex;\n        justify-content: space-between;\n        font-size: 12px;        \n        padding: 15px;\n      }\n      &__title{\n      }\n      &__status{\n        font-size: 12px;\n      }\n    }\n  }\n']);return j=function(){return t},t}var L=m.a.div(j()),_=0,T={11:"\u5904\u7406\u4e2d",12:"\u6210\u529f",13:"\u5931\u8d25"},R=function(t){var e=t.date,n=t.name,r=t.productValue,a=t.status;return h.a.createElement("div",{className:"item"},h.a.createElement("div",{className:"item__head"},h.a.createElement("h2",{className:"item__title"},n),h.a.createElement("div",{className:"item__status"},a)),h.a.createElement("div",{className:"item__body"},n),h.a.createElement("div",{className:"item__foot"},h.a.createElement("div",null,e),h.a.createElement("div",null,"\u5408\u8ba1\u79ef\u5206 ",h.a.createElement("strong",null,r))))},B=function(t){return t.items.map(function(t){return h.a.createElement(R,{key:t.byOrderDetail,name:t.productName,byOrderDetail:t.byOrderDetail,status:T[t.status],date:C.a.formatTimestamp(t.createTime),productValue:t.productValue})})},N=function(t){var e=t.loading,n=t.items;return e?h.a.createElement("div",{className:"u_mx_xxx u_pt_xxx"},h.a.createElement(w.a,{count:3})):n.length?h.a.createElement("div",{className:"list"},h.a.createElement(B,{items:n})):h.a.createElement(O.a,null)},I=!1,V=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(f.a)(Object(f.a)(n))),n.scrollListener=n.scrollListener.bind(Object(f.a)(Object(f.a)(n))),n.state={status:"11",loading:!0,items:[]},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.loadData(_),this.scrollContainer.addEventListener("scroll",this.scrollListener)}},{key:"componentWillUnmount",value:function(){this.scrollContainer.removeEventListener("scroll",this.scrollListener)}},{key:"loadNextPage",value:function(){var t=Object(o.a)(a.a.mark(function t(e){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(E.h)(e);case 3:n=t.sent,200===(r=n.data).status&&this.setState({items:[].concat(i(this.state.items),i(r.data.data))},function(){I=!1});case 6:return t.prev=6,this.loading&&this.loading.hide(),this.setState({loading:!1}),t.finish(6);case 10:case"end":return t.stop()}},t,this,[[0,,6,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"scrollListener",value:function(){I||this.scrollContainer.scrollTop+this.scrollContainer.offsetHeight>=this.itemsElem.offsetHeight&&(I=!0,this.loading=x.a.loading("\u52a0\u8f7d\u4e2d"),this.loadData(++_))}},{key:"loadData",value:function(t){var e={status:this.state.status,limit:k.a.order.PAGE_LIMIT,page:t};this.loadNextPage(e)}},{key:"reset",value:function(){_=0,this.setState({items:[]})}},{key:"handleClick",value:function(t){var e=this;this.state.status!==t&&(this.reset(),this.setState({status:t,loading:!0},function(){e.loadData(_)}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.loading,r=e.status,a=e.items;return h.a.createElement(L,null,h.a.createElement("nav",null,h.a.createElement("ul",null,h.a.createElement("li",{className:y()({active:"11"===r}),onClick:function(){return t.handleClick("11")}},"\u5904\u7406\u4e2d"),h.a.createElement("li",{className:y()({active:"12"===r}),onClick:function(){return t.handleClick("12")}},"\u6210\u529f"),h.a.createElement("li",{className:y()({active:"13"===r}),onClick:function(){return t.handleClick("13")}},"\u5931\u8d25"))),h.a.createElement("div",{className:"container",ref:function(e){return t.scrollContainer=e}},h.a.createElement("main",{ref:function(e){return t.itemsElem=e}},h.a.createElement(N,{loading:n,items:a}))),h.a.createElement(P.a,null))}}]),e}(g.Component);e.default=V},61:function(t,e,n){"use strict";var r=n(71),a=n.n(r),i=n(6),o=n(62),c=n.n(o),u=n(26),s=n.n(u),l=n(19),d=n(8),f=n(25),p=c.a.create();p.defaults.timeout=f.a.timeout,p.interceptors.request.use(function(t){var e=Object(d.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),p.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:l.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.get(t,Object(i.a)({},n,{params:e}))},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.post(t,e,n)};n.d(e,"m",function(){return v}),n.d(e,"e",function(){return y}),n.d(e,"f",function(){return b}),n.d(e,"u",function(){return x}),n.d(e,"j",function(){return k}),n.d(e,"o",function(){return E}),n.d(e,"b",function(){return C}),n.d(e,"i",function(){return w}),n.d(e,"l",function(){return O}),n.d(e,"s",function(){return P}),n.d(e,"t",function(){return j}),n.d(e,"n",function(){return L}),n.d(e,"p",function(){return _}),n.d(e,"q",function(){return T}),n.d(e,"a",function(){return R}),n.d(e,"d",function(){return B}),n.d(e,"r",function(){return N}),n.d(e,"h",function(){return I}),n.d(e,"g",function(){return V}),n.d(e,"k",function(){return A});var m="";m="/client/";e.c={login:function(t){return h("".concat(m,"user/login"),a.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/order/getOrderList"),t,e)},hotProducts:function(){return g("hotProducts")},getProductCateList:function(t){return g("getProductCateList",{type:t})},getProductByCate:function(t,e){return g("getProductByCate",{type:t,cate:e})},getProductById:function(t){return g("getProductById",{id:t})},getHotsell:function(){return g("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return g("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return g("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return g("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return g("getVideoProviders")},getVideoProducts:function(){return g("getVideoProducts")},confirmTransPswd:function(t){return h("".concat(m,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return h("".concat(m,"api/charge/moreCredit"),a.a.stringify(t))},rechargeQB:function(t){return h("".concat(m,"api/charge/moreCredit"),a.a.stringify(t))},rechargeTraffic:function(t){return h("".concat(m,"api/traffic/charge"),a.a.stringify(t))},rechargeOil:function(t){return h("".concat(m,"api/oilCard/charge"),a.a.stringify(t))},rechargeVideo:function(t){return h("".concat(m,"api/video/charge"),a.a.stringify(t))},rechargeVoucher:function(t){return h("".concat(m,"api/voucher/charge"),a.a.stringify(t))},getBankcardList:function(){return g("".concat(m,"api/bank/getBankCardList"))},addBankcard:function(t){return h("".concat(m,"api/bank/addBankCard"),a.a.stringify(t))},getRedeemFee:function(t){return g("".concat(m,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return g("sendMsgCode",{phone:t})},redeemIntegral:function(t){return h("".concat(m,"api/trad/withdrawal"),a.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/trad/getWithList"),t,e)},getCode:function(t){return h("".concat(m,"user/getCode"),a.a.stringify(t))},getCreditCardList:function(){return g("getCreditCardList")},creditCardRepayment:function(t){return h("creditCardRepayment",t)},transfer:function(t){return h("transfer",t)},getECardList:function(){return g("getECardList")},getECardDetailByType:function(){return g("getECardDetailByType")},addVehicle:function(t){return h("addVehicle",t)},getVehicleList:function(){return g("getVehicleList")},getViolationList:function(){return g("getViolationList")},getUserInfo:function(){return g("".concat(m,"api/user/getUserInfo"))}};var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/user/getUserInfo"),t,e)},y=function(t){return h("".concat(m,"user/getCode"),a.a.stringify(t))},b=function(t){var e={userPhoneNo:t,codeType:3};return h("".concat(m,"user/getCode"),a.a.stringify(e))},x=function(t){return h("".concat(m,"api/trad/withdrawal"),a.a.stringify(t))},k=function(t){return g("".concat(m,"api/trad/poundageList"),{amount:t})},E=function(t){return g("".concat(m,"api/trad/poundageList"),{amount:t})},C=function(t){return h("".concat(m,"user/changePwd"),a.a.stringify(t))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"product/list"),{productClassifyId:t},e)},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/product/subList"),{productClassifyId:t},e)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("".concat(m,"api/video/charge"),a.a.stringify(t),e)},j=function(t){return h("".concat(m,"api/voucher/charge"),a.a.stringify(t))},L=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/voucher/list"),t,e)},_=function(t){return h("".concat(m,"api/transferred/commit"),a.a.stringify(t))},T=function(t,e){return g("".concat(m,"api/transferred/list"),t,e)},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h("".concat(m,"api/bank/addBankCard"),a.a.stringify(t))},B=function(){return g("".concat(m,"api/bank/getBankCardList"))},N=function(t){return h("".concat(m,"api/trad/withdrawal"),a.a.stringify(t))},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g("".concat(m,"api/order/getOrderList"),t,e)},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={status:t.status,limit:f.a.creditRecord.PAGE_LIMIT,page:t.page,payment:2};return g("".concat(m,"api/trad/getWithList"),n,e)},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={status:t.status,limit:f.a.redeem.PAGE_LIMIT,page:t.page,payment:1};return g("".concat(m,"api/trad/getWithList"),n,e)}},63:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a),o=n(60),c=n(72),u=n(64),s=n.n(u);function l(){var t=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return l=function(){return t},t}function d(){var t=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return d=function(){return t},t}function f(){var t=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var p=o.a.div(f()),g=o.a.div(d()),h=o.a.img(l());e.a=function(){return i.a.createElement(p,null,i.a.createElement(c.a,{to:"/"},i.a.createElement(g,null,i.a.createElement(h,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},64:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},68:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a),o=n(60),c=n(69),u=n.n(c);function s(){var t=Object(r.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var l=o.a.div(s());e.a=function(){return i.a.createElement(l,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},69:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},70:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&t.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},72:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(4),u=n.n(c),s=n(14),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var f=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},p=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=r=d(this,t.call.apply(t,[this].concat(i))),r.handleClick=function(t){if(r.props.onClick&&r.props.onClick(t),!t.defaultPrevented&&0===t.button&&!r.props.target&&!f(t)){t.preventDefault();var e=r.context.router.history,n=r.props,a=n.replace,i=n.to;a?e.replace(i):e.push(i)}},d(r,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==e,'You must specify the "to" property');var i=this.context.router.history,o="string"===typeof e?Object(s.a)(e,null,null,i.location):e,c=i.createHref(o);return a.a.createElement("a",l({},r,{onClick:this.handleClick,href:c,ref:n}))},e}(a.a.Component);p.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},e.a=p},73:function(t,e,n){"use strict";var r=n(59),a=n(0),i=n.n(a);function o(){var t=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return o=function(){return t},t}var c=n(60).a.div(o());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,r=[],a=0;a<n;a++)r.push(i.a.createElement("div",{key:a,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(c,null,r)}}}]);
//# sourceMappingURL=16.93ec9878.chunk.js.map