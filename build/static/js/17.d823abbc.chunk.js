(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{193:function(e,n,t){e.exports=t.p+"static/media/404.971f67a9.svg"},215:function(e,n,t){"use strict";t.r(n);var r=t(59),o=t(0),a=t.n(o),i=t(60),c=t(65),u=t(70),l=t(63),f=t(193),p=t.n(f);function s(){var e=Object(r.a)(["\n  padding-top: 50px;\n  .content{\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  .img{\n    width: 100px;\n    margin-bottom: 20px;\n  }\n  h1{\n    color: #888;\n    font-size: 16px;\n    font-weight: bold;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  margin: 15px;\n"]);return d=function(){return e},e}function h(){var e=Object(r.a)(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 50px;\n  border-radius: 3px;\n  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);\n"]);return h=function(){return e},e}function b(){var e=Object(r.a)(["\n  outline: none;\n  display: block;\n  border: 0;\n  width: 100%;\n  padding: 0;\n"]);return b=function(){return e},e}var v=i.a.button(b()),g=Object(i.a)(v)(h()),m=i.a.div(d()),y=i.a.div(s());n.default=function(){return a.a.createElement(y,null,a.a.createElement(c.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u9875\u9762\u4e0d\u5b58\u5728"}),a.a.createElement("div",{className:"content"},a.a.createElement("img",{className:"img",src:p.a,alt:""}),a.a.createElement("h1",null,"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728")),a.a.createElement(m,null,a.a.createElement(g,{onClick:function(){return Object(u.b)("/")}},"\u8fd4\u56de\u9996\u9875")),a.a.createElement(l.a,null))}},63:function(e,n,t){"use strict";var r=t(59),o=t(0),a=t.n(o),i=t(60),c=t(73),u=t(64),l=t.n(u);function f(){var e=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  background: rgba(0, 0, 0, .5);\n  padding: 5px 3px 6px 5px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n"]);return p=function(){return e},e}function s(){var e=Object(r.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 100px;\n"]);return s=function(){return e},e}var d=i.a.div(s()),h=i.a.div(p()),b=i.a.img(f());n.a=function(){return a.a.createElement(d,null,a.a.createElement(c.a,{to:"/"},a.a.createElement(h,null,a.a.createElement(b,{src:l.a,alt:"\u56de\u5230\u9996\u9875"}))))}},64:function(e,n,t){e.exports=t.p+"static/media/home.73f12746.svg"},70:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a});var r=t(30);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";r.a.push(e)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";r.a.replace(e)}},73:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1),i=t.n(a),c=t(4),u=t.n(c),l=t(14),f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function p(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}var s=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function n(){var t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=p(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!s(e)){e.preventDefault();var n=r.context.router.history,t=r.props,o=t.replace,a=t.to;o?n.replace(a):n.push(a)}},p(r,t)}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.render=function(){var e=this.props,n=(e.replace,e.to),t=e.innerRef,r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==n,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof n?Object(l.a)(n,null,null,a.location):n,c=a.createHref(i);return o.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:t}))},n}(o.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},n.a=d}}]);
//# sourceMappingURL=17.d823abbc.chunk.js.map