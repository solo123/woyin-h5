(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{179:function(n,e,t){n.exports=t.p+"static/media/404.971f67a9.svg"},2:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(1),i=t.n(a),c=t(5),u=t.n(c),p=t(8),f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n};function l(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}var s=function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)},d=function(n){function e(){var t,r;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=l(this,n.call.apply(n,[this].concat(a))),r.handleClick=function(n){if(r.props.onClick&&r.props.onClick(n),!n.defaultPrevented&&0===n.button&&!r.props.target&&!s(n)){n.preventDefault();var e=r.context.router.history,t=r.props,o=t.replace,a=t.to;o?e.replace(a):e.push(a)}},l(r,t)}return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.render=function(){var n=this.props,e=(n.replace,n.to),t=n.innerRef,r=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(n,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==e,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof e?Object(p.b)(e,null,null,a.location):e,c=a.createHref(i);return o.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:t}))},e}(o.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},e.a=d},203:function(n,e,t){"use strict";t.r(e);var r=t(68),o=t(0),a=t.n(o),i=t(69),c=t(77),u=t(72),p=t(179),f=t.n(p);function l(){var n=Object(r.a)(["\n  padding-top: 50px;\n  .content{\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  .img{\n    width: 100px;\n    margin-bottom: 20px;\n  }\n  h1{\n    color: #888;\n    font-size: 16px;\n    font-weight: bold;\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  margin: 15px;\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 50px;\n  border-radius: 3px;\n  box-shadow: 0 3px 5px rgba(76, 173, 255, .54);\n  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);\n"]);return d=function(){return n},n}function b(){var n=Object(r.a)(["\n  outline: none;\n  display: block;\n  border: 0;\n  width: 100%;\n  padding: 0;\n"]);return b=function(){return n},n}var h=i.a.button(b()),v=Object(i.a)(h)(d()),g=i.a.div(s()),m=i.a.div(l());e.default=function(){return a.a.createElement(m,null,a.a.createElement("div",{className:"content"},a.a.createElement("img",{className:"img",src:f.a,alt:""}),a.a.createElement("h1",null,"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728")),a.a.createElement(g,null,a.a.createElement(v,{onClick:function(){return Object(c.b)("/")}},"\u8fd4\u56de\u9996\u9875")),a.a.createElement(u.a,null))}},72:function(n,e,t){"use strict";var r=t(68),o=t(0),a=t.n(o),i=t(69),c=t(2),u=t(73),p=t.n(u);function f(){var n=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return s=function(){return n},n}var d=i.a.div(s()),b=i.a.div(l()),h=i.a.img(f());e.a=function(){return a.a.createElement(d,null,a.a.createElement(c.a,{to:"/"},a.a.createElement(b,null,a.a.createElement(h,{src:p.a,alt:"\u56de\u5230\u9996\u9875"}))))}},73:function(n,e,t){n.exports=t.p+"static/media/home.73f12746.svg"},77:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a});var r=t(30);function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";r.a.push(n)}function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";r.a.replace(n)}}}]);
//# sourceMappingURL=18.15ee6a2c.chunk.js.map