(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(e,n,a){"use strict";var t=a(21),r=a(0),c=a.n(r);function i(){var e=Object(t.a)(["\n  .item{\n    margin-bottom: 30px;\n  }\n  .line{\n    height: 25px;\n    background: #eee;\n    margin-bottom: 10px;\n  }\n  .w80{\n    width: 80%;\n  }\n  .w50{\n    width: 50%;\n  }\n  .w30{\n    width: 30%;\n  }\n"]);return i=function(){return e},e}var l=a(22).a.div(i());n.a=function(e){for(var n=e.count,a=void 0===n?1:n,t=[],r=0;r<a;r++)t.push(c.a.createElement("div",{key:r,className:"item"},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line w80"}),c.a.createElement("div",{className:"line w50"}),c.a.createElement("div",{className:"line w30"})));return c.a.createElement(l,null,t)}},508:function(e,n,a){e.exports=a.p+"static/media/banner.befe5984.png"},548:function(e,n,a){"use strict";a.r(n);var t=a(19),r=a.n(t),c=a(33),i=a(45),l=a(46),o=a(49),s=a(47),u=a(48),m=a(0),d=a.n(m),p=a(135),f=a(137),h=a.n(f),b=a(34),g=a(80),x=a(430),v=a(136),E=a(536),w=a(468),k=a.n(w),N=a(469),y=a.n(N),O=a(470),j=a.n(O),S=a(471),I=a.n(S),C=a(472),U=a.n(C),T=a(473),z=a.n(T),J=a(474),P=a.n(J),_=a(475),D=a.n(_),H=a(476),M=a.n(H),W=a(477),q=a.n(W),A=a(478),B=a.n(A),F=a(479),G=a.n(F),K=a(480),L=a.n(K),Q=a(481),R=a.n(Q),V={19:z.a,20:q.a,2:M.a,3:R.a,5:L.a,6:L.a,7:U.a,8:P.a,9:j.a,10:G.a,11:I.a,12:y.a,13:k.a,14:B.a,15:D.a};function X(e){var n=e.id,a=e.name;return d.a.createElement("div",{className:"item-box"},d.a.createElement(E.a,{className:"item",to:"/recharge-voucher/".concat(n)},d.a.createElement("img",{className:"icon",src:V[n],alt:""}),d.a.createElement("p",{className:"name"},a)))}var Y=function(e){var n=e.items;return d.a.createElement("div",{className:"list"},n.map(function(e){return d.a.createElement(X,{key:e.productClassifyId,id:e.productClassifyId,name:e.productClassifyName})}))},Z=a(21);function $(){var e=Object(Z.a)(["\n  header{\n    margin-bottom: 10px;\n  }\n  section{\n    padding: 15px 30px;\n    margin-bottom: 10px;\n    background: #fff;\n  }\n  h2{\n    color: #fff;\n    line-height: 40px;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    border-radius: 20px;\n    margin: 5px 5px 10px 5px;\n    &.purple{\n      background: #755cf8;\n    }\n    &.blue{\n      background: #32a6e2;\n    }\n    &.blue-deep{\n      background: #4090fa;\n    }\n    &.orange{\n      background: linear-gradient(to right, #f6744d, #f68850);\n    }\n  }\n  .list{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 7px;\n  }\n  .item-box{\n    width: 50%;\n  }\n  .item{\n    display: block;\n    margin: 5px;\n    padding: 10px;\n    background: #fff;\n    border-radius: 5px;\n    box-shadow: 0 2px 50px 0 rgba(12, 16, 20, .2);\n    .name{\n      font-size: 12px;\n      text-align: center;\n      word-break: break-all;\n    }\n    .icon{\n      display: block;\n      margin: 0 auto 5px;\n      width: 25px;\n      height: 25px;\n    }\n  }\n"]);return $=function(){return e},e}var ee=a(22).a.div($()),ne=a(508),ae=a.n(ne),te=h.a.CancelToken,re=function(e){function n(e){var a;return Object(i.a)(this,n),(a=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={items:[],loading:!1},a}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.history.location.state.id;this.loadProducts(e)}},{key:"componentWillUnmount",value:function(){this.loadUserInfoSource&&this.loadUserInfoSource.cancel("Operation canceled by the user.")}},{key:"loadProducts",value:function(){var e=Object(c.a)(r.a.mark(function e(n){var a,t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),this.loadUserInfoSource=te.source(),e.prev=2,e.next=5,Object(b.v)(n,{cancelToken:this.loadUserInfoSource.token});case 5:a=e.sent,200===(t=a.data).status&&this.setState({items:t.data});case 8:return e.prev=8,this.setState({loading:!1}),e.finish(8);case 11:case"end":return e.stop()}},e,this,[[2,,8,11]])}));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.loading,a=e.items;return n?d.a.createElement("div",{className:"u_m_xxx"},d.a.createElement(x.a,{count:3})):a.length?d.a.createElement(ee,null,d.a.createElement(p.Helmet,{defaultTitle:"\u6c83\u94f6\u4f01\u670d",title:"\u7535\u5b50\u5361\u5238"}),d.a.createElement("header",null,d.a.createElement("img",{src:ae.a,alt:""})),d.a.createElement("section",null,d.a.createElement("h2",{className:"purple"},"\u7535\u5546\u5e73\u53f0\u7535\u5b50\u5238"),d.a.createElement(Y,{items:a})),d.a.createElement("section",null,d.a.createElement("h2",{className:"blue"},"\u4ea4\u901a\u65c5\u884c"),d.a.createElement(Y,{items:a})),d.a.createElement("section",null,d.a.createElement("h2",{className:"blue-deep"},"\u996e\u98df\u7f8e\u5473"),d.a.createElement(Y,{items:a})),d.a.createElement("section",null,d.a.createElement("h2",{className:"orange"},"\u8d2d\u7269\u6d88\u8d39"),d.a.createElement(Y,{items:a})),d.a.createElement(g.a,null)):d.a.createElement(v.a,null)}}]),n}(m.Component);a.d(n,"view",function(){return re})}}]);
//# sourceMappingURL=11.1725a334.chunk.js.map