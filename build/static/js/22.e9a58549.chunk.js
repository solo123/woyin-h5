(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{368:function(t,e,n){"use strict";var a=n(29),r=n(377),i=n.n(r),c=n(371),o=n.n(c),s=n(114),u=n.n(s),l=n(79),d=n(52),f=n(113),g=o.a.create();g.defaults.timeout=f.a.timeout,g.interceptors.request.use(function(t){var e=Object(d.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),g.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:u.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:l.a.dispatch({type:"UNAUTH_USER"});break;case 404:u.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:u.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:u.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:u.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:u.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:u.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:u.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:u.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else u.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(t,Object(a.a)({},n,{params:e}))},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(t,e,n)};n.d(e,"m",function(){return v}),n.d(e,"e",function(){return b}),n.d(e,"f",function(){return y}),n.d(e,"u",function(){return x}),n.d(e,"j",function(){return k}),n.d(e,"o",function(){return E}),n.d(e,"b",function(){return w}),n.d(e,"i",function(){return C}),n.d(e,"l",function(){return j}),n.d(e,"s",function(){return L}),n.d(e,"t",function(){return O}),n.d(e,"n",function(){return T}),n.d(e,"p",function(){return N}),n.d(e,"v",function(){return P}),n.d(e,"a",function(){return _}),n.d(e,"d",function(){return B}),n.d(e,"q",function(){return I}),n.d(e,"h",function(){return S}),n.d(e,"g",function(){return A}),n.d(e,"k",function(){return R}),n.d(e,"r",function(){return V});var m="";m="/client/";e.c={login:function(t){return h("".concat(m,"user/login"),i.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/order/getOrderList"),t,e)},hotProducts:function(){return p("hotProducts")},getProductCateList:function(t){return p("getProductCateList",{type:t})},getProductByCate:function(t,e){return p("getProductByCate",{type:t,cate:e})},getProductById:function(t){return p("getProductById",{id:t})},getHotsell:function(){return p("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return p("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return p("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return p("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return p("getVideoProviders")},getVideoProducts:function(){return p("getVideoProducts")},confirmTransPswd:function(t){return h("".concat(m,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return h("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))},rechargeQB:function(t){return h("".concat(m,"api/charge/moreCredit"),i.a.stringify(t))},rechargeTraffic:function(t){return h("".concat(m,"api/traffic/charge"),i.a.stringify(t))},rechargeOil:function(t){return h("".concat(m,"api/oilCard/charge"),i.a.stringify(t))},rechargeVideo:function(t){return h("".concat(m,"api/video/charge"),i.a.stringify(t))},rechargeVoucher:function(t){return h("".concat(m,"api/voucher/charge"),i.a.stringify(t))},getBankcardList:function(){return p("".concat(m,"api/bank/getBankCardList"))},addBankcard:function(t){return h("".concat(m,"api/bank/addBankCard"),i.a.stringify(t))},getRedeemFee:function(t){return p("".concat(m,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return p("sendMsgCode",{phone:t})},redeemIntegral:function(t){return h("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/trad/getWithList"),t,e)},getCode:function(t){return h("".concat(m,"user/getCode"),i.a.stringify(t))},getCreditCardList:function(){return p("getCreditCardList")},creditCardRepayment:function(t){return h("creditCardRepayment",t)},transfer:function(t){return h("transfer",t)},getECardList:function(){return p("getECardList")},getECardDetailByType:function(){return p("getECardDetailByType")},addVehicle:function(t){return h("addVehicle",t)},getVehicleList:function(){return p("getVehicleList")},getViolationList:function(){return p("getViolationList")},getUserInfo:function(){return p("".concat(m,"api/user/getUserInfo"))}};var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/user/getUserInfo"),t,e)},b=function(t){return h("".concat(m,"user/getCode"),i.a.stringify(t))},y=function(t){var e={userPhoneNo:t,codeType:3};return h("".concat(m,"user/getCode"),i.a.stringify(e))},x=function(t){return h("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},k=function(t){return p("".concat(m,"api/trad/poundageList"),{amount:t})},E=function(t){return p("".concat(m,"api/trad/poundageList"),{amount:t})},w=function(t){return h("".concat(m,"user/changePwd"),i.a.stringify(t))},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"product/list"),{productClassifyId:t},e)},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(m,"api/product/subList"),{productClassifyId:t},e)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{chargeType:1});return h("".concat(m,"api/video/charge"),i.a.stringify(n),e)},O=function(t){return h("".concat(m,"api/voucher/charge"),i.a.stringify(t))},T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.voucher.PAGE_LIMIT});return p("".concat(m,"api/voucher/list"),n,e)},N=function(t){return h("".concat(m,"api/transferred/commit"),i.a.stringify(t))},P=function(t,e){var n=Object(a.a)({},t,{limit:f.a.redeem.PAGE_LIMIT});return p("".concat(m,"api/transferred/list"),n,e)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h("".concat(m,"api/bank/addBankCard"),i.a.stringify(t))},B=function(){return p("".concat(m,"api/bank/getBankCardList"))},I=function(t){return h("".concat(m,"api/trad/withdrawal"),i.a.stringify(t))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.order.PAGE_LIMIT});return p("".concat(m,"api/order/getOrderList"),n,e)};function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.creditRecord.PAGE_LIMIT,payment:2});return p("".concat(m,"api/trad/getWithList"),n,e)}var R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},t,{limit:f.a.redeem.PAGE_LIMIT,payment:1});return p("".concat(m,"api/trad/getWithList"),n,e)};function V(t){var e=Object(a.a)({},t,{chargeType:1});return h("".concat(m,"api/charge/moreCredit"),i.a.stringify(e))}},369:function(t,e,n){"use strict";var a=n(366),r=n(1),i=n.n(r),c=n(367),o=n(540),s=n(370),u=n.n(s);function l(){var t=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n"]);return l=function(){return t},t}function d(){var t=Object(a.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return d=function(){return t},t}function f(){var t=Object(a.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var g=c.a.div(f()),p=c.a.div(d()),h=c.a.img(l());e.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(h,{src:u.a,alt:"\u56de\u5230\u9996\u9875"}))))}},370:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},373:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&t.push(c)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&t.push(o)}}return t.join(" ")}"undefined"!==typeof t&&t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},376:function(t,e,n){"use strict";var a=n(366),r=n(1),i=n.n(r),c=n(367),o=n(378),s=n.n(o);function u(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return u=function(){return t},t}var l=c.a.div(u());e.a=function(){return i.a.createElement(l,null,i.a.createElement("img",{src:s.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},378:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},380:function(t,e,n){"use strict";var a=n(366),r=n(1),i=n.n(r);function c(){var t=Object(a.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=n(367).a.div(c());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,a=[],r=0;r<n;r++)a.push(i.a.createElement("div",{key:r,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,a)}},382:function(t,e,n){"use strict";var a=n(57),r=n(58),i=function(){function t(e,n){Object(a.a)(this,t),this.container=e,this.callback=n,this.isLoading=!1,this.handleScroll=this.handleScroll.bind(this),this.scroller=this.container.children[0],this.container.addEventListener("scroll",this.handleScroll)}return Object(r.a)(t,[{key:"handleScroll",value:function(){this.isLoading||this.container.scrollTop+this.container.offsetHeight>=this.scroller.offsetHeight&&(this.isLoading=!0,this.callback())}},{key:"scrollTo",value:function(){this.container.scrollTop=0}},{key:"closeScroll",value:function(){this.isLoading=!0}},{key:"finish",value:function(){this.isLoading=!1}},{key:"destroy",value:function(){this.container.removeEventListener("scroll",this.handleScroll)}}]),t}();e.a=i},383:function(t,e,n){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return a})},425:function(t,e,n){t.exports=n.p+"static/media/arrow_down.ab77b7b0.svg"},548:function(t,e,n){"use strict";n.r(e);var a=n(374),r=n.n(a),i=n(383),c=n(375),o=n(57),s=n(58),u=n(60),l=n(59),d=n(61),f=n(116),g=n(1),p=n.n(g),h=n(373),m=n.n(h),v=n(371),b=n.n(v),y=n(114),x=n.n(y),k=n(372),E=n(368),w=n(380),C=n(425),j=n.n(C),L=n(369),O=n(366);function T(){var t=Object(O.a)(['\n  .page{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;    \n    .page-head{\n      height: 50px;\n    }\n    .page-body{\n      position: relative;\n      flex-grow: 1;\n    }\n  }\n  .wrapper{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;    \n    overflow-y: auto;\n  }\n\n  .selecter{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 50px;\n    background: #fff;\n    img{\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      transition: transform .3s;\n      &.active{\n        transform: rotate(180deg);\n      }\n    }\n  }\n\n  .fixed-selecter{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 50px;\n    z-index: 1;\n    ul{\n      display: flex;\n      flex-wrap: wrap;\n      padding-left: 15px;\n      padding-bottom: 15px;\n      background: #fff;\n      border-bottom: 1px solid #eaeaea;\n      li{\n        font-size: 12px;\n        margin-top: 10px;\n        margin-right: 10px;\n        padding: 7px 15px;\n        border: 1px solid #eaeaea;\n        &.active{\n          color: rgb(77, 123, 254);\n          border-color: rgb(77, 123, 254);\n        }\n      }\n    }\n  }\n  .card{\n    background: #fff;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);\n    &__head{\n      display: flex;\n      justify-content: space-between;\n      position: relative;\n      padding: 15px;\n      &:after{\n        content: "";\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        height: 1px;\n        transform: scaleY(.3);\n        background: #eaeaea;\n      }\n    }\n    &__body{\n      padding: 15px 15px 0 15px;\n    }\n    &__foot{\n      display: flex;\n      justify-content: space-between;\n      font-size: 12px;\n      padding: 15px;\n    }\n    &__title{\n      font-size: 16px;\n      font-weight: bold;\n    }\n    &__status{\n      font-size: 12px;\n    }\n    &__date{\n      color: #7e7e7e;\n    }\n  }\n']);return T=function(){return t},t}var N=n(367).a.div(T()),P=function(t){var e=t.status,n=t.flag,a=t.handleClick;return n?p.a.createElement("div",{className:"fixed-selecter"},p.a.createElement("ul",null,p.a.createElement("li",{onClick:function(){return a("10","\u65b0\u5efa")},className:m()({active:"10"===e})},"\u65b0\u5efa"),p.a.createElement("li",{onClick:function(){return a("11","\u53d7\u7406\u6210\u529f")},className:m()({active:"11"===e})},"\u53d7\u7406\u6210\u529f"),p.a.createElement("li",{onClick:function(){return a("12","\u5904\u7406\u6210\u529f")},className:m()({active:"12"===e})},"\u5904\u7406\u6210\u529f"),p.a.createElement("li",{onClick:function(){return a("13","\u5931\u8d25")},className:m()({active:"13"===e})},"\u5931\u8d25"),p.a.createElement("li",{onClick:function(){return a("14","\u5f85\u5ba1\u6838")},className:m()({active:"14"===e})},"\u5f85\u5ba1\u6838"),p.a.createElement("li",{onClick:function(){return a("15","\u5ba1\u6838\u901a\u8fc7")},className:m()({active:"15"===e})},"\u5ba1\u6838\u901a\u8fc7"),p.a.createElement("li",{onClick:function(){return a("16","\u5ba1\u6838\u62d2\u7edd")},className:m()({active:"16"===e})},"\u5ba1\u6838\u62d2\u7edd"),p.a.createElement("li",{onClick:function(){return a("17","\u5df2\u786e\u8ba4")},className:m()({active:"17"===e})},"\u5df2\u786e\u8ba4"))):null},_=n(117),B=n(376),I={10:"\u65b0\u5efa",11:"\u53d7\u7406\u6210\u529f",12:"\u5904\u7406\u6210\u529f",13:"\u5931\u8d25",14:"\u5f85\u5ba1\u6838",15:"\u5ba1\u6838\u901a\u8fc7",16:"\u5ba1\u6838\u62d2\u7edd",17:"\u5df2\u786e\u8ba4"},S=function(t){var e=t.status,n=t.poundage,a=t.amount,r=t.createTime;return p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card__head"},p.a.createElement("div",{className:"card__title"},"\u4fe1\u7528\u5361\u8fd8\u6b3e"),p.a.createElement("div",{className:"card__status"},e)),p.a.createElement("div",{className:"card__body"},p.a.createElement("div",null,"\u6263\u9664",Number(a)+Number(n),"\u79ef\u5206 \u624b\u7eed\u8d39",n,"\u79ef\u5206 \u5b9e\u9645\u5230\u8d26",a/100,"\u5143")),p.a.createElement("div",{className:"card__foot"},p.a.createElement("div",{className:"card__date"},r),p.a.createElement("div",null,a," \u79ef\u5206")))},A=function(t){var e=t.items;return e.length?p.a.createElement("div",null,e.map(function(t){return p.a.createElement(S,{key:t.orderId,amount:t.amount,poundage:t.poundage,createTime:_.a.formatTimestamp(t.createTime),status:I[t.status]})})):p.a.createElement(B.a,null)},R=n(382),V=function(t){var e=t.placeholderLoading,n=t.items;return e?p.a.createElement(w.a,{count:3}):p.a.createElement(A,{items:n})},M=b.a.CancelToken,z=0,D=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleToggle=n.handleToggle.bind(Object(f.a)(Object(f.a)(n))),n.handleClick=n.handleClick.bind(Object(f.a)(Object(f.a)(n))),n.loadData=n.loadData.bind(Object(f.a)(Object(f.a)(n))),n.state={status:"10",title:"\u65b0\u5efa",items:[],selectFlag:!1,placeholderLoading:!0},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.scroll=new R.a(this.wrapper,this.loadData);var t={page:z++,status:this.state.status};this.loadNextPage(t)}},{key:"componentWillUnmount",value:function(){this.scroll.destroy(),this.source&&this.source.cancel("Operation canceled by the user.")}},{key:"loadNextPage",value:function(){var t=Object(c.a)(r.a.mark(function t(e){var n,a,c=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.source=M.source(),t.prev=1,t.next=4,Object(E.g)(e,{cancelToken:this.source.token});case 4:n=t.sent,200===(a=n.data).status&&this.setState({items:[].concat(Object(i.a)(this.state.items),Object(i.a)(a.data.withdrawal))},function(){c.scroll.finish()});case 7:return t.prev=7,this.loading&&this.loading.hide(),this.setState({placeholderLoading:!1}),t.finish(7);case 11:case"end":return t.stop()}},t,this,[[1,,7,11]])}));return function(e){return t.apply(this,arguments)}}()},{key:"reset",value:function(){z=0,this.scroll.closeScroll(),this.setState({items:[]})}},{key:"loadData",value:function(){var t={page:z++,status:this.state.status};this.loading=x.a.loading("\u52a0\u8f7d\u4e2d"),this.loadNextPage(t)}},{key:"handleToggle",value:function(t){this.setState({selectFlag:!this.state.selectFlag})}},{key:"handleClick",value:function(t,e){var n=this;t!==this.state.status&&(this.handleToggle(),this.reset(),this.setState({status:t,title:e,placeholderLoading:!0},function(){var t={page:z++,status:n.state.status};n.loadNextPage(t)}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.placeholderLoading,a=e.items,r=e.selectFlag;return p.a.createElement(N,null,p.a.createElement(k.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u4fe1\u7528\u5361\u8fd8\u6b3e\u8bb0\u5f55"}),p.a.createElement("div",{className:"page"},p.a.createElement("div",{className:"page-head"},p.a.createElement("div",{className:"selecter",onClick:this.handleToggle},this.state.title,p.a.createElement("img",{src:j.a,className:m()({active:r}),alt:""}))),p.a.createElement("div",{className:"page-body"},p.a.createElement("div",{className:"wrapper",ref:function(e){return t.wrapper=e}},p.a.createElement("div",{className:"scroller"},p.a.createElement("div",{className:"u_px_xxx u_pt_xxx"},p.a.createElement(V,{placeholderLoading:n,items:a})))))),p.a.createElement(P,{status:this.state.status,flag:r,handleClick:this.handleClick}),p.a.createElement(L.a,null))}}]),e}(g.Component);n.d(e,"view",function(){return D})}}]);
//# sourceMappingURL=22.e9a58549.chunk.js.map