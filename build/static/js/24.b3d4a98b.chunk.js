(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{209:function(t,e,n){"use strict";n.r(e);var a=n(72),r=n.n(a),i=n(73),c=n(9),o=n(10),u=n(12),s=n(11),d=n(13),l=n(0),f=n.n(l),g=(n(74),n(69)),p=n.n(g),m=n(27),h=n(68),v=n(79),y=n(66);function b(){var t=Object(y.a)(['\n  .items{\n    padding: 15px 15px 0 15px;\n  }\n  .fixed-top{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    .selecter{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 16px;\n      font-weight: bold;\n      line-height: 50px;\n      background: #fff;\n      img{\n        width: 15px;\n        height: 15px;\n        margin-left: 5px;\n        transition: transform .3s;\n        &.active{\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n  .fixed-top-selecter-content{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 50px;\n    z-index: 1;\n    ul{\n      display: flex;\n      flex-wrap: wrap;\n      padding-left: 15px;\n      padding-bottom: 15px;\n      background: #fff;\n      border-bottom: 1px solid #eaeaea;\n      li{\n        font-size: 12px;\n        margin-top: 10px;\n        margin-right: 10px;\n        padding: 7px 15px;\n        border: 1px solid #eaeaea;\n        &.active{\n          color: rgb(77, 123, 254);\n          border-color: rgb(77, 123, 254);\n        }\n      }\n    }\n  }\n  .card{\n    background: #fff;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);\n    &__head{\n      display: flex;\n      justify-content: space-between;\n      position: relative;\n      padding: 15px;\n      &:after{\n        content: "";\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        height: 1px;\n        transform: scaleY(.3);\n        background: #eaeaea;\n      }\n    }\n    &__body{\n      padding: 15px 15px 0 15px;\n    }\n    &__foot{\n      display: flex;\n      justify-content: space-between;\n      font-size: 12px;\n      padding: 15px;\n    }\n    &__title{\n      font-size: 16px;\n      font-weight: bold;\n    }\n    &__status{\n      font-size: 12px;\n    }\n    .gray{\n      color: #7e7e7e;\n    }\n  }\n']);return b=function(){return t},t}var x=n(67).a.div(b()),w=n(70),k=n(103),E=n.n(k),C=(n(116),n(76)),P={10:"\u65b0\u5efa",11:"\u53d7\u7406\u6210\u529f",12:"\u5904\u7406\u6210\u529f",13:"\u5931\u8d25",14:"\u5f85\u5ba1\u6838",15:"\u5ba1\u6838\u901a\u8fc7",16:"\u5ba1\u6838\u62d2\u7edd",17:"\u5df2\u786e\u8ba4"},B=function(t){var e=t.status,n=t.poundage,a=t.amount,r=t.num,i=t.createTime;return f.a.createElement("div",{className:"card"},f.a.createElement("div",{className:"card__head"},f.a.createElement("div",{className:"card__title"},"\u79ef\u5206\u8f6c\u8d60"),f.a.createElement("div",{className:"card__status"},e)),f.a.createElement("div",{className:"card__body"},f.a.createElement("div",null,"\u8d4e\u56de",a,"\u79ef\u5206 \u624b\u7eed\u8d39",n,"\u79ef\u5206 \u5b9e\u9645\u5230\u8d26",r/100,"\u5143")),f.a.createElement("div",{className:"card__foot"},f.a.createElement("div",{className:"gray"},i),f.a.createElement("div",null,a," \u79ef\u5206")))},T=function(t){var e=t.items;return e.length?f.a.createElement("div",null,e.map(function(t){return f.a.createElement(B,{key:t.id,amount:t.total,num:t.num,poundage:t.poundage,createTime:E()(t.createTime).format("YYYY-MM-DD HH:mm:ss"),status:P[t.status]})})):f.a.createElement(C.a,null)},_=function(t){var e=t.loading,n=t.items;return e?f.a.createElement(v.a,null):f.a.createElement(T,{items:n})},j=null,L=p.a.CancelToken,O=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={status:"10",title:"\u65b0\u5efa",seletViewFlag:!1,items:[],loading:!0},n.handleToggle=function(t){n.setState({seletViewFlag:!n.state.seletViewFlag})},n.handleClick=function(t,e){t!==n.state.status&&(j.cancel(),n.setState({status:t,title:e},function(){n.handleToggle();var e={status:t,limit:m.a.redeem.PAGE_LIMIT,page:0};n.loadData(e)}))},n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentWillUnmount",value:function(){this.source&&this.source.cancel("Operation canceled by the user.")}},{key:"loadData",value:function(){var t=Object(i.a)(r.a.mark(function t(){var e,n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),this.source=L.source(),e={limit:m.a.redeem.PAGE_LIMIT,page:0},t.prev=3,t.next=6,Object(h.h)(e,{cancelToken:this.source.token});case 6:n=t.sent,200===(a=n.data).status&&this.setState({items:a.data});case 9:return t.prev=9,this.setState({loading:!1}),t.finish(9);case 12:case"end":return t.stop()}},t,this,[[3,,9,12]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.items;return f.a.createElement(x,null,f.a.createElement("div",{className:"items"},f.a.createElement(_,{loading:e,items:n})),f.a.createElement(w.a,null))}}]),e}(l.Component);n.d(e,"view",function(){return O})},68:function(t,e,n){"use strict";var a=n(78),r=n.n(a),i=n(6),c=n(69),o=n.n(c),u=n(25),s=n.n(u),d=n(19),l=n(8),f=n(27),g=o.a.create();g.defaults.timeout=f.a.timeout,g.interceptors.request.use(function(t){var e=Object(l.a)("token");return e&&(t.headers.Authorization="Bearer ".concat(e)),t},function(t){return Promise.reject(t)}),g.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(parseInt(t.response.status,10)){case 400:s.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:d.a.dispatch({type:"UNAUTH_USER"});break;case 404:s.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:s.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:s.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:s.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:s.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:s.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:s.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else s.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(t)});var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.get(t,Object(i.a)({},n,{params:e}))},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.post(t,e,n)};n.d(e,"a",function(){return v}),n.d(e,"d",function(){return y}),n.d(e,"e",function(){return b}),n.d(e,"j",function(){return x}),n.d(e,"k",function(){return w}),n.d(e,"f",function(){return k}),n.d(e,"g",function(){return E}),n.d(e,"h",function(){return C}),n.d(e,"c",function(){return P}),n.d(e,"i",function(){return B});var h="";h="client/";e.b={login:function(t){return m("".concat(h,"user/login"),r.a.stringify(t))},getOrderList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(h,"api/order/getOrderList"),t,e)},hotProducts:function(){return p("hotProducts")},getProductCateList:function(t){return p("getProductCateList",{type:t})},getProductByCate:function(t,e){return p("getProductByCate",{type:t,cate:e})},getProductById:function(t){return p("getProductById",{id:t})},getHotsell:function(){return p("hotsell")},getRechargePhoneProductsByType:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(h,"api/product/subList"),{productClassifyId:t},e)},getRechargeFlowProductsByType:function(t){return p("getRechargeFlowProductsByType",{type:t})},getRechargeOilProductsByType:function(t){return p("getRechargeOilProductsByType",{type:t})},getRechargeQBProductsByType:function(t){return p("getRechargeQBProductsByType",{type:t})},getVideoProviders:function(){return p("getVideoProviders")},getVideoProducts:function(){return p("getVideoProducts")},confirmTransPswd:function(t){return m("".concat(h,"api/trad/checkCode"),{pswd:t})},rechargePhone:function(t){return m("".concat(h,"api/charge/moreCredit"),r.a.stringify(t))},rechargeTraffic:function(t){return m("".concat(h,"api/traffic/charge"),r.a.stringify(t))},rechargeOil:function(t){return m("".concat(h,"api/oilCard/charge"),r.a.stringify(t))},rechargeVideo:function(t){return m("".concat(h,"api/video/charge"),r.a.stringify(t))},rechargeVoucher:function(t){return m("".concat(h,"api/voucher/charge"),r.a.stringify(t))},rechargeQB:function(t,e){return p("rechargeQB",{id:t,phone:e})},getBankcardList:function(){return p("".concat(h,"api/bank/getBankCardList"))},addBankcard:function(t){return m("".concat(h,"api/bank/addBankCard"),r.a.stringify(t))},getRedeemFee:function(t){return p("".concat(h,"api/trad/poundageList"),{amount:t})},sendMsgCode:function(t){return p("sendMsgCode",{phone:t})},redeemIntegral:function(t){return m("".concat(h,"api/trad/withdrawal"),r.a.stringify(t))},getRedeemRecordByStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(h,"api/trad/getWithList"),t,e)},getCode:function(t){return m("".concat(h,"user/getCode"),r.a.stringify(t))},getCreditCardList:function(){return p("getCreditCardList")},creditCardRepayment:function(t){return m("creditCardRepayment",t)},transfer:function(t){return m("transfer",t)},getECardList:function(){return p("getECardList")},getECardDetailByType:function(){return p("getECardDetailByType")},addVehicle:function(t){return m("addVehicle",t)},getVehicleList:function(){return p("getVehicleList")},getViolationList:function(){return p("getViolationList")},getUserInfo:function(){return p("".concat(h,"api/user/getUserInfo"))}};var v=function(t){return m("".concat(h,"user/changePwd"),r.a.stringify(t))},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(h,"api/product/list"),{productClassifyId:t},e)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(h,"api/product/subList"),{productClassifyId:t},e)},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m("".concat(h,"api/video/charge"),r.a.stringify(t),e)},w=function(t){return m("".concat(h,"api/voucher/charge"),r.a.stringify(t))},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p("".concat(h,"api/voucher/list"),t,e)},E=function(t){return m("".concat(h,"api/transferred/commit"),r.a.stringify(t))},C=function(t,e){return p("".concat(h,"api/transferred/list"),t,e)},P=function(){return p("".concat(h,"api/bank/getBankCardList"))},B=function(t){return m("".concat(h,"api/trad/withdrawal"),r.a.stringify(t))}},70:function(t,e,n){"use strict";var a=n(66),r=n(0),i=n.n(r),c=n(67),o=n(80),u=n(71),s=n.n(u);function d(){var t=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n"]);return d=function(){return t},t}function l(){var t=Object(a.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return t},t}function f(){var t=Object(a.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return f=function(){return t},t}var g=c.a.div(f()),p=c.a.div(l()),m=c.a.img(d());e.a=function(){return i.a.createElement(g,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p,null,i.a.createElement(m,{src:s.a,alt:"\u56de\u5230\u9996\u9875"}))))}},71:function(t,e,n){t.exports=n.p+"static/media/home.73f12746.svg"},76:function(t,e,n){"use strict";var a=n(66),r=n(0),i=n.n(r),c=n(67),o=n(77),u=n.n(o);function s(){var t=Object(a.a)(["\n  padding: 40px 0;\n  color: #aaa;\n  text-align: center;\n  img{\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return t},t}var d=c.a.div(s());e.a=function(){return i.a.createElement(d,null,i.a.createElement("img",{src:u.a,alt:"\u6682\u65e0\u6570\u636e"}),i.a.createElement("div",null,"\u6682\u65e0\u6570\u636e"))}},77:function(t,e,n){t.exports=n.p+"static/media/empty.8103a6b5.svg"},79:function(t,e,n){"use strict";var a=n(66),r=n(0),i=n.n(r);function c(){var t=Object(a.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return c=function(){return t},t}var o=n(67).a.div(c());e.a=function(t){for(var e=t.count,n=void 0===e?1:e,a=[],r=0;r<n;r++)a.push(i.a.createElement("div",{key:r,className:"item"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"line w80"}),i.a.createElement("div",{className:"line w50"}),i.a.createElement("div",{className:"line w30"})));return i.a.createElement(o,null,a)}}}]);
//# sourceMappingURL=24.b3d4a98b.chunk.js.map