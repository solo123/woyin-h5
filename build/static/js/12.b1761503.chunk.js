(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{127:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),i=n(4),c=n(22),u=n(128),l=n.n(u);function s(){var e=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return s=function(){return e},e}function p(){var e=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return p=function(){return e},e}function d(){var e=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return d=function(){return e},e}var f=i.a.div(d()),m=i.a.div(p()),v=i.a.img(s());t.a=function(){return o.a.createElement(f,null,o.a.createElement(c.a,{to:"/"},o.a.createElement(m,null,o.a.createElement(v,{src:l.a,alt:"\u56de\u5230\u9996\u9875"}))))}},128:function(e,t,n){e.exports=n.p+"static/media/home.73f12746.svg"},131:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);function i(){var e=Object(r.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return i=function(){return e},e}var c=n(4).a.div(i());t.a=function(e){for(var t=e.count,n=void 0===t?1:t,r=[],a=0;a<n;a++)r.push(o.a.createElement("div",{key:a,className:"item"},o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line w80"}),o.a.createElement("div",{className:"line w50"}),o.a.createElement("div",{className:"line w30"})));return o.a.createElement(c,null,r)}},212:function(e,t,n){"use strict";n.r(t);var r=n(14),a=n.n(r),o=n(27),i=n(17),c=n(18),u=n(21),l=n(19),s=n(20),p=n(0),d=n.n(p),f=(n(30),n(45),n(13)),m=n(28),v=(n(131),n(3));function h(){var e=Object(v.a)(["\n  .list{\n    margin: 15px;\n  }\n  .item{\n    border-radius: 3px;\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px;\n  }\n  .title{\n    font-size: 16px;\n    font-weight: bold;\n  }\n  .subtitle{\n    color: #888;\n  }\n  .box{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n  }\n  dl{\n    display: flex;\n    dt{\n      color: #888;\n    }\n  }\n  .date{\n    color: #888;\n    font-size: 12px;\n    text-align: right;\n    padding-top: 5px;\n  }\n"]);return h=function(){return e},e}var b=n(4).a.div(h()),y=n(127);function x(e){var t=e.amount,n=e.voucherId,r=e.voucherPwd,a=e.expireTime;return d.a.createElement("div",{className:"item"},d.a.createElement("div",{className:"box"},d.a.createElement("div",{className:"title"},"\u4eac\u4e1cE\u53611"),d.a.createElement("div",{className:"subtitle"},"100\u79ef\u5206")),d.a.createElement("dl",null,d.a.createElement("dt",null,"\u5361\u53f7\uff1a"),d.a.createElement("dd",null,n)),d.a.createElement("dl",null,d.a.createElement("dt",null,"\u5bc6\u7801\uff1a"),d.a.createElement("dd",null,r)),d.a.createElement("dl",null,d.a.createElement("dt",null,"\u9762\u503c\uff1a"),d.a.createElement("dd",null,t,"\u5143")),d.a.createElement("div",{className:"date"},"\u6709\u6548\u671f\u81f3\uff1a",a))}var w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={items:[]},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e={limit:f.a.voucher.PAGE_LIMIT,page:0};this.loadCardList(e)}},{key:"componentWillUnmount",value:function(){}},{key:"loadCardList",value:function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.j)(t);case 3:n=e.sent,200===(r=n.data).status&&(r.data=[{buyOrderId:12,amount:50,voucherId:21212121,voucherPwd:1212121212,expireTime:2121212121,productName:"dfasfasfd"}],this.setState({items:r.data}));case 6:return e.prev=6,e.finish(6);case 8:case"end":return e.stop()}},e,this,[[0,,6,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.items;return d.a.createElement(b,null,d.a.createElement("div",{className:"list"},e.map(function(e){return d.a.createElement(x,{key:e.buyOrderId,amount:e.amount,voucherId:e.voucherId,voucherPwd:e.voucherPwd,expireTime:e.expireTime,productName:e.productName})})),d.a.createElement(y.a,null))}}]),t}(p.Component);n.d(t,"view",function(){return w})},22:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(6),u=n.n(c),l=n(29),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!d(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(l.a)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",s({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);f.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=f}}]);
//# sourceMappingURL=12.b1761503.chunk.js.map