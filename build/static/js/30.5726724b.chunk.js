(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{429:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},531:function(e,n,t){e.exports=t.p+"static/media/slogan.d7ae3101.png"},532:function(e,n,t){e.exports=t.p+"static/media/more.2f0ddc66.svg"},556:function(e,n,t){"use strict";t.r(n);var a=t(19),r=t.n(a),i=t(33),c=t(45),l=t(46),o=t(49),s=t(47),u=t(48),d=t(5),p=t(0),m=t.n(p),f=t(135),h=t(536),v=t(11),g=t.n(v),b=t(429),k=t.n(b),x=t(34),E=t(80),w=t(21);function y(){var e=Object(w.a)(["\n  .top{\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    img{\n      width: 30px;\n      height: 30px;\n    }\n  }\n  header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n    background: #da251c;\n    .slogan{\n      width: 150px;\n    }\n  }\n  nav{\n    overflow-x: auto;\n    background: #fff;\n    ul{\n      line-height: 50px;\n      display: flex;\n      li{\n        padding: 0 20px;\n        flex-shrink: 0;\n        &.active{\n          color: red;\n        }\n      }\n    }\n  }\n  .layout{\n    display: flex;\n    flex-wrap: wrap;\n    overflow: hidden;\n    padding: 5px;    \n    &-item{\n      width: 50%;\n    }\n  }\n  .product{\n    display: block;\n    padding: 10px;\n    margin: 5px;\n    background: #fff;\n    &-title{\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      font-weight: bold;\n      margin-bottom: 10px;      \n    }\n    &-price{\n      color: #F53415;\n      font-weight: bold;\n      margin-bottom: 5px;\n    }\n    &-info{\n      display: flex;\n      justify-content: space-between;\n    }\n    span{\n      font-size: 12px;\n      padding: 2px 8px;\n      border-radius: 3px;\n      color: #888;\n      background: #F2F2F2;      \n    }\n    &-btn{\n      background: #F63618;\n    }\n  }\n"]);return y=function(){return e},e}var C=t(22).a.div(y()),N=t(136);function j(e){var n=e.id,t=e.title,a=e.src,r=e.price,i=e.data,c={pathname:"/store-detail/".concat(n),state:{detail:i}};return m.a.createElement("div",{className:"layout-item"},m.a.createElement(h.a,{className:"product",to:c},m.a.createElement("div",{className:"product-thumb"},m.a.createElement("img",{src:a,alt:""})),m.a.createElement("div",{className:"product-title"},t),m.a.createElement("div",{className:"product-price"},"\uffe5",r),m.a.createElement("div",{className:"product-info"},m.a.createElement("span",{className:"product-status"},"\u6709\u8d27"),m.a.createElement("span",{className:"product-btn"},"\u5151\u6362"))))}var O=function(e){var n=e.items;return n.length?m.a.createElement("div",{className:"layout"},n.map(function(e){return m.a.createElement(j,{key:e.skuId,data:e,id:e.skuId,title:e.name,src:"http://img13.360buyimg.com/n1/".concat(e.imagePath),price:e.jdPrice})})):m.a.createElement(N.a,null)},I=t(531),P=t.n(I),F=t(532),A=t.n(F),J=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(d.a)(Object(d.a)(t))),t.state={currentId:1,items:[]},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadProducts(1)}},{key:"loadProducts",value:function(){var e=Object(i.a)(r.a.mark(function e(n){var t,a,i,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.a.loading("\u5904\u7406\u4e2d"),a={goodsClassId:n,page:0},e.prev=2,e.next=5,Object(x.q)(a);case 5:i=e.sent,200===(c=i.data).status&&this.setState({items:c.data.data});case 8:return e.prev=8,t.hide(),e.finish(8);case 11:case"end":return e.stop()}},e,this,[[2,,8,11]])}));return function(n){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){var n=this;this.setState({currentId:e},function(){n.loadProducts(e)})}},{key:"render",value:function(){var e=this,n=this.state.currentId;return m.a.createElement(C,null,m.a.createElement(f.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u4eac\u4e1c\u8d2d\u7269"}),m.a.createElement("div",{className:"top"},m.a.createElement(h.a,{to:"/store-sort"},m.a.createElement("img",{src:A.a,alt:""}))),m.a.createElement("header",null,m.a.createElement("img",{className:"slogan",src:P.a,alt:""})),m.a.createElement("nav",null,m.a.createElement("ul",null,m.a.createElement("li",{className:k()({active:1===n}),onClick:function(){return e.handleClick(1)}},"\u624b\u673a\u914d\u4ef6"),m.a.createElement("li",{className:k()({active:2===n}),onClick:function(){return e.handleClick(2)}},"\u6570\u7801\u4ea7\u54c1"),m.a.createElement("li",{className:k()({active:3===n}),onClick:function(){return e.handleClick(3)}},"\u5bb6\u5c45\u65e5\u7528"),m.a.createElement("li",{className:k()({active:4===n}),onClick:function(){return e.handleClick(4)}},"\u98df\u54c1\u996e\u6599"),m.a.createElement("li",{className:k()({active:5===n}),onClick:function(){return e.handleClick(5)}},"\u4e2a\u4eba\u62a4\u7406"),m.a.createElement("li",{className:k()({active:10===n}),onClick:function(){return e.handleClick(10)}},"\u4e2d\u5916\u540d\u9152"))),m.a.createElement("main",null,m.a.createElement(O,{items:this.state.items})),m.a.createElement(E.a,null))}}]),n}(p.Component);t.d(n,"view",function(){return J})}}]);
//# sourceMappingURL=30.5726724b.chunk.js.map