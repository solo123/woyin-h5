(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{411:function(e,t,n){"use strict";var a=n(46),r=n(418),o=n.n(r),i=n(419),c=n.n(i),d=n(412),s=n.n(d),u=n(122),l=n.n(u),m=n(84),h=n(32),g=n(121),p=s.a.create();p.defaults.timeout=g.a.timeout,p.interceptors.request.use(function(e){var t=Object(h.a)("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)}),p.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(parseInt(e.response.status,10)){case 400:l.a.alert("\u8bf7\u6c42\u9519\u8bef");break;case 401:case 403:m.a.dispatch({type:"UNAUTH_USER"});break;case 404:l.a.alert("\u8bf7\u6c42\u5730\u5740\u51fa\u9519");break;case 408:l.a.alert("\u8bf7\u6c42\u8d85\u65f6");break;case 500:l.a.alert("\u670d\u52a1\u5668\u9047\u5230\u95ee\u9898");break;case 502:l.a.alert("\u7f51\u7edc\u9519\u8bef");break;case 504:l.a.alert("\u7f51\u5173\u8d85\u65f6");break;case 503:l.a.alert("\u670d\u52a1\u4e0d\u53ef\u7528");break;case 505:l.a.alert("HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301");break;default:l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}else l.a.alert("\u670d\u52a1\u5668\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");return Promise.reject(e)});var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.get(e,Object(a.a)({},n,{params:t}))},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.delete(e,Object(a.a)({},n,{params:t}))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.put(e,t,n)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.post(e,t,n)};n.d(t,"J",function(){return k}),n.d(t,"F",function(){return Z}),n.d(t,"U",function(){return E}),n.d(t,"l",function(){return j}),n.d(t,"m",function(){return T}),n.d(t,"o",function(){return P}),n.d(t,"n",function(){return N}),n.d(t,"S",function(){return I}),n.d(t,"K",function(){return B}),n.d(t,"B",function(){return S}),n.d(t,"H",function(){return M}),n.d(t,"E",function(){return L}),n.d(t,"A",function(){return U}),n.d(t,"a",function(){return F}),n.d(t,"D",function(){return V}),n.d(t,"G",function(){return x}),n.d(t,"I",function(){return G}),n.d(t,"V",function(){return D}),n.d(t,"b",function(){return R}),n.d(t,"k",function(){return Q}),n.d(t,"y",function(){return H}),n.d(t,"p",function(){return Y}),n.d(t,"C",function(){return J}),n.d(t,"N",function(){return z}),n.d(t,"z",function(){return K}),n.d(t,"O",function(){return _}),n.d(t,"P",function(){return X}),n.d(t,"M",function(){return q}),n.d(t,"Q",function(){return W}),n.d(t,"R",function(){return $}),n.d(t,"d",function(){return ee}),n.d(t,"h",function(){return te}),n.d(t,"e",function(){return ne}),n.d(t,"i",function(){return ae}),n.d(t,"T",function(){return re}),n.d(t,"g",function(){return oe}),n.d(t,"r",function(){return ie}),n.d(t,"q",function(){return ce}),n.d(t,"v",function(){return de}),n.d(t,"u",function(){return se}),n.d(t,"j",function(){return ue}),n.d(t,"c",function(){return le}),n.d(t,"s",function(){return me}),n.d(t,"f",function(){return he}),n.d(t,"L",function(){return ge}),n.d(t,"t",function(){return pe}),n.d(t,"w",function(){return fe}),n.d(t,"x",function(){return Ae});var y="",w="";y="/client/",w="/jdapi/";var C=String((new Date).getTime());function O(){C=String((new Date).getTime())}var k=function(e){return 1===e.loginType&&(e=Object(a.a)({},e,{password:c()(e.password)})),b("".concat(y,"user/login"),o.a.stringify(e))},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f("".concat(y,"api/user/getUserInfo"),e,t)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f("".concat(y,"api/user/switchAccount"),e,t)},j=function(e){return e=Object(a.a)({},e,{codeType:1}),b("".concat(y,"user/getCode"),o.a.stringify(e))},T=function(e){var t={userPhoneNo:e,codeType:2};return b("".concat(y,"user/getCode"),o.a.stringify(t))},P=function(e){var t={userPhoneNo:e,codeType:3};return b("".concat(y,"user/getCode"),o.a.stringify(t))},N=function(e){var t={userPhoneNo:e,codeType:4};return b("".concat(y,"user/getCode"),o.a.stringify(t))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tradPwd);return e=Object(a.a)({},e,{tradPwd:t,payment:"1",sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&amount=").concat(e.amount,"&bankCode=").concat(e.bankCode,"&bankName=").concat(e.bankName,"&cardHoldName=").concat(e.cardHoldName,"&cardPhoneNo=").concat(e.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(e.code,"&bankCard=").concat(e.bankCard,"&payment=").concat("1")),timestamp:C}),b("".concat(y,"api/trad/withdrawal"),o.a.stringify(e))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tradPwd);return e=Object(a.a)({},e,{tradPwd:t,payment:"2",sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&amount=").concat(e.amount,"&bankCode=").concat(e.bankCode,"&bankName=").concat(e.bankName,"&cardHoldName=").concat(e.cardHoldName,"&cardPhoneNo=").concat(e.cardPhoneNo,"&tradPwd=").concat(t,"&code=").concat(e.code,"&bankCard=").concat(e.bankCard,"&payment=").concat("2")),timestamp:C}),b("".concat(y,"api/trad/withdrawal"),o.a.stringify(e))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=Object(a.a)({},e,{payment:1}),f("".concat(y,"api/trad/poundageList"),e)},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=Object(a.a)({},e,{payment:2}),f("".concat(y,"api/trad/poundageList"),e)},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=Object(a.a)({},e,{payment:3}),f("".concat(y,"api/trad/poundageList"),e)},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f("".concat(y,"product/list"),{productClassifyId:e},t)},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f("".concat(y,"product/list"),{},e)},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f("".concat(y,"api/product/subList"),{productClassifyId:e},t)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:g.a.voucher.PAGE_LIMIT});return f("".concat(y,"api/voucher/list"),n,t)},G=function(e){O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&to=").concat(e.to,"&num=").concat(e.num,"&tranPwd=").concat(t)),timestamp:C}),b("".concat(y,"api/transferred/commit"),o.a.stringify(e))},D=function(e,t){var n=Object(a.a)({},e,{limit:g.a.redeem.PAGE_LIMIT});return f("".concat(y,"api/transferred/list"),n,t)},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O(),e=Object(a.a)({},e,{sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&cardPhoneNo=").concat(e.cardPhoneNo,"&bankCard=").concat(e.bankCard,"&cardHoldName=").concat(e.cardHoldName,"&idNo=").concat(e.idNo)),timestamp:C}),b("".concat(y,"api/bank/addBankCard"),o.a.stringify(e))},Q=function(){return f("".concat(y,"api/bank/getBankCardList"))},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:g.a.order.PAGE_LIMIT});return f("".concat(y,"api/order/getOrderList"),n,t)};function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:g.a.creditRecord.PAGE_LIMIT,payment:2});return f("".concat(y,"api/trad/getWithList"),n,t)}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)({},e,{limit:g.a.redeem.PAGE_LIMIT,payment:1});return f("".concat(y,"api/trad/getWithList"),n,t)};function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,chargeType:"1",sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&chargeAddr=").concat(e.chargeAddr,"&chargeType=").concat("1","&productId=").concat(e.productId,"&tranPwd=").concat(t)),timestamp:C}),b("".concat(y,"api/charge/moreCredit"),o.a.stringify(e))}function K(e,t){return f("".concat(w,"mail/phoneType/").concat(e),null,t)}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&chargeAddr=").concat(e.chargeAddr,"&chargeType=").concat(e.chargeType,"&productId=").concat(e.productId,"&tranPwd=").concat(t)),timestamp:C}),b("".concat(y,"api/charge/moreCredit"),o.a.stringify(e))}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{range:"0",tranPwd:t,sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&phone=").concat(e.phone,"&range=").concat("0","&productId=").concat(e.productId,"&tranPwd=").concat(t)),timestamp:C}),b("".concat(y,"api/traffic/charge"),o.a.stringify(e))}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&cardNumber=").concat(e.cardNumber,"&cardType=").concat(e.cardType,"&productId=").concat(e.productId,"&tranPwd=").concat(t)),timestamp:C}),b("".concat(y,"api/oilCard/charge"),o.a.stringify(e))}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,chargeType:"1",sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&chargeAddr=").concat(e.chargeAddr,"&chargeType=").concat("1","&tranPwd=").concat(t,"&productId=").concat(e.productId)),timestamp:C}),b("".concat(y,"api/video/charge"),o.a.stringify(e))},$=function(e){O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&amount=").concat(e.amount,"&tranPwd=").concat(t,"&productId=").concat(e.productId)),timestamp:C}),b("".concat(y,"api/voucher/charge"),o.a.stringify(e))};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e=Object(a.a)({},e,{oldPwd:c()(e.oldPwd),newPwdOne:c()(e.newPwdOne),modifyType:1}),v("".concat(y,"api/modifyPwd"),o.a.stringify(e),t)}var te=function(e){return e=Object(a.a)({},e,{password:c()(e.password)}),b("".concat(y,"user/changePwd"),o.a.stringify(e))};function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e=Object(a.a)({},e,{oldPwd:c()(e.oldPwd),newPwdOne:c()(e.newPwdOne),modifyType:2}),v("".concat(y,"api/modifyPwd"),o.a.stringify(e),t)}var ae=function(e){return e=Object(a.a)({},e,{password:c()(e.password)}),v("".concat(y,"api/resetTranPwd"),o.a.stringify(e))},re=function(e){return e=Object(a.a)({},e,{newLoginPwd:c()(e.newLoginPwd)}),v("".concat(y,"api/resetAllPwd"),o.a.stringify(e))};function oe(e,t){return A("".concat(y,"api/bankCard/").concat(e),null,t)}function ie(e,t){return f("".concat(y,"api/integralList"),null,t)}function ce(){return f("".concat(w,"sellingGoods"))}function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e=Object(a.a)({},e,{typeId:1}),f("".concat(w,"goodsClassLists"),e,t)}function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e=Object(a.a)({},e,{limit:g.a.store.PAGE_LIMIT}),f("".concat(w,"goodsLists"),e,t)}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f("".concat(w,"mail/address"),e,t)}function le(e){return e=Object(a.a)({},e,{addType:1}),b("".concat(w,"mail/address"),o.a.stringify(e))}function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=Object(a.a)({},e,{addType:1}),f("".concat(w,"mail/userAddressList"),e,t)}function he(e,t){return A("".concat(w,"mail/address/").concat(e),null,t)}function ge(e){O();var t=c()(e.tranPwd);return e=Object(a.a)({},e,{tranPwd:t,sign:c()("key=&afdY%d2^uy3&timestamp=".concat(C,"&skuId=").concat(e.skuId,"&count=").concat(e.count,"&addressId=").concat(e.addressId,"&tranPwd=").concat(t)),timestamp:C}),b("".concat(w,"mail/placeOrder"),o.a.stringify(e))}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return f("".concat(w,"mail/JDFreight"),e,t)}function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e=Object(a.a)({},e,{limit:g.a.store.PAGE_LIMIT}),f("".concat(w,"mail/JDOrders"),e,t)}function Ae(e,t){return f("".concat(w,"mail/JDTrack/").concat(e),null,t)}},423:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAQlBMVEUAAAC8vLy8vLy8vLy7u7u9vb3AwMDJycm7u7u7u7u8vLy8vLy7u7u7u7u8vLy+vr69vb3///++vr67u7u9vb27u7vRpoGsAAAAFXRSTlMAm+n49F4QCdvLt6+PfGZOGwM3xzaL/4D+AAABIklEQVRYw+2XS66DMAxFH05I+UPpu/vfajuzkOzErRW1g5wRIDjk4zjOX6PR+AFu+zINFAIN07LfPrWkfo4AE+c+fdKYlS3sWt9t1n0jiNB2f8dzjFAZD7vnJGSg0+rpA7KE3uhBEZPpDCgSDL07CAboKM77CBNjKQo2GNkK8UwwQvkYXwGGpdKDNedJEcwjdbjQpQeYmIwhRK8Xu4vn9SMyBtN8/ZBNfMvMmaGOEEyKB1Ef7h3QTHzJ7KpogWTSPFhU0QTRpHgwqaIBskn2YFBFBNkke0CqKEAyaR6EuiJ/1/yD7Z/+ugHpXyL+RetPI/UTmz/V+pO/fzvyb5A1tmx/EeEva/7rFVr+0s9fjPrL40oFu/8I4T/U+I9ZjUbj+zwBJ8GDMy0wJdwAAAAASUVORK5CYII="},425:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAgVBMVEUAAABmZmZ7e3tra2tmZmZycnJnZ2dmZmZnZ2dnZ2dpaWlmZmZmZmZnZ2dnZ2dmZmZnZ2dnZ2dnZ2dsbGx2dnZmZmZnZ2dnZ2dnZ2doaGhnZ2dnZ2dnZ2dmZmZmZmZoaGhmZmZmZmZnZ2dmZmZoaGhmZmZoaGhoaGhnZ2dmZmZmZmYugQJJAAAAKnRSTlMA8AUV+Qvfyp8lGvXag3Hmxa5YEAh+a19LNP3Vppp3LbuPiog9lEhCHtAr8KrQAAAB0UlEQVRYw+3V2ZKCMBAF0I6syr6IK+oojs79/w8csUQyhEDkbapy3uhCTG46CWmapv0T83VaHA5Fup7TZLPq7Hh485xzNZsylCuDgF0/HdjmBInThtQt9hiwX5CilJ+U7QZFEZQ+P8FULWOXC/h8fGcWcJ93FVI3YtkkjBJvsTEazw6NbUgdKxON3UhQBpfFqilaGb2st2j4xmA+3Ly+Xr9NGMCSip4O3OyGcuJy9p/vLZp+arqH+6eSpEK00udSRc2j9XrlhlZIEkeTa59nOG3yVfOSgzfzKAnIQSehZfvsZI8XOjXE4xPD96OQM7Si8mpn9S7E2OQMBs79UflGx6r+OjgsI9EZvFm71q0LPTBwAhJF4Hh15YIOt67a4EQkKqeMyCXRfPt5RuhtgH3/qrVMYdUS6nP3xD7649qteXfqtYTY2XzJ6HQ2ltQvt2V7rcaO3b1m59K7w5TufjhzYatthra/7DxKhfMIBQ1IoHpCYk9Dsh+ondlwLMVDe/gWwU7lGmmZknsNPwaNymJAuGldH7yTpXTVfmHYNpiRmnWEAfaNlFkXExLeMqdPLC4MPVhg0KesVeJ1BpOkFk1i3ULX8SPTjPzYDaucNE3TtAl+ARZttM53CzasAAAAAElFTkSuQmCC"},426:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAB4eHhmZmZmZmZmZmZmZmZnZ2dnZ2dqampqampnZ2dqampoaGhmZmZnZ2dnZ2dnZ2doaGhtbW1mZmZnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dxcXFmZmZnZ2dnZ2dnZ2dnZ2dnZ2dmZmZmZmZmZmZnZ2dnZ2doaGhoaGhnZ2dnZ2doaGhnZ2dmZmYAjoqPAAAALHRSTlMAB/v367eVIh0Y8hM52LCbfS8Q3syidU1HQAzjwIZvZV3h0ItqVTMp5aeEyDN8FGsAAAJoSURBVFjD7ZVJlqpAEEUDpO9ERFHsey3f/tf3SckkgQIKzq9BDbgjRM41Il6Q0sjIyMgfJbKpghLZtmXZbqQM86yBs0sc9/h6okALll5/0QFAHBEj0VXUmYdW3858AO80u3qhEVW/9zPZzLTNTOkbLSz6VWXNmUnJiovB8F+XMDQCDZJJ2Ms0Y6PRM5N7hrMzieMZE6nS3R4VnQFhMqzKN1NpOv0Y4F30EDQsznEi21v94HEgeMmltIv+SqZ1l+ehldPJR7Y4AWp8pQ83uVtOR3f2qZozHz1DpxyjtOp2q0hHgbMBMGVzyU2GeG2cUnbt74dkajKTUdz1xey/ILm2BO9A4tHHdMnu7/M+XfI+MytvptkomkLyzD6b7NX/yi6WvFt8gpqX626c9ASSbTGysNTOQtwVTJrmvasEJn97mV1d8OFcLxy7BtHp2wM8+X2RulOfNuYNohACkbYjwhF1aHyTuitKNUgCyjiDc+AH3ZsyFt0z4jEL/EoT6pFICXhIcaXwJpQNJCbLXy1Mt+xrHR57Si0VZFEjCSRLEmFJ067+0IGaKc/xpLBf30pTQjlBeZBtKH6tpDSon2QPtc/bT3e53c6DGDe/epJtpdmjDhJV7ho/4GeHcL/yNty0L3k7OaLgXM7E3PAzcclntqIfuEqTtq6b7sKkdXvqfxUIHtV91Wb5uxSb1IPZHJI4XJupO0suT0CYdoZCvXB1tKI9aAiJjzae5iCTstTQwsmkYaqbrn7ry9iyBbNoINZhKltU48tKoZSZ/IiG495Xt+v1mDx4UOmbH77/TRQDK/oV7IhGRkZG/jD/AKO/sc0GpEgmAAAAAElFTkSuQmCC"},434:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAADMYEbsYl7zYmMBflQ5AAAAA3RSTlMAgv0wz7C2AAAAoUlEQVQ4y73OQQrCQAyF4cAsXOZIOZoebW7gVbpwGXmmjJNMAoKI7du0fJCfocPWsE8DpMK1Aj4CV5D+ho3mT/42aAauIPUEyNEGUEAkRA1mIuAxEg7tORIOjNueCLDzmZigMzFPMBIeBe7QBQg2y6iDGPQV2IBWsIgmIEtkEPQMDMrQtABtFeh88P0O4rANYIc+IO0/4G/4GrjCpQIFHLYXNddeBTMNqq8AAAAASUVORK5CYII="},475:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAADzYWLzYmMR6hdMAAAAAnRSTlMATX7+8BUAAABQSURBVDjLY6AZYFoFA1ABLbhAA0QgCy6wACKwCg5WEC2wAGY6nQTAxKjAYBWAA/IFtBDJEiLAhUi4EAEkQC0BuBuIFuBCF2BDF2BACNAMAADENtZ5lRmmOgAAAABJRU5ErkJggg=="},586:function(e,t,n){"use strict";n.r(t);var a=n(126),r=n(416),o=n.n(r),i=n(417),c=n(61),d=n(62),s=n(64),u=n(63),l=n(66),m=n(65),h=n(119),g=n(0),p=n.n(g),f=n(553),A=n(587),v=n(598),b=n(120),y=n(67),w=n(122),C=n.n(w),O=n(413),k=n(121),Z=n(411),E=n(32);function j(){var e=Object(h.a)(['\n  header{\n    padding: 20px 15px;\n    h1{\n      font-size: 22px;\n      font-weight: normal;\n    }\n  }\n  main{\n    margin: 0 15px;\n  }\n  .group-list{\n    border-radius: 3px;\n    background: #fff;\n    margin-bottom: 15px;\n  }\n  .group{\n    position: relative;\n    padding: 15px 0;\n    display: flex;\n    align-items: center;\n    &:after{\n      content: " ";\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      height: 1px;\n      background: #eaeaea;\n      transform: scaleY(0.5);\n    }\n    &__body{\n      flex: 1;\n    }\n    &__foot{\n      display: flex;\n      align-items: center;\n      margin-left: 10px;\n    }\n    &__toggle-btn,\n    &__clean-btn{\n      width: 25px;\n      height: 25px;\n    }\n  }\n  .flex{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    &__body{\n      flex: 1;\n    }    \n    .link {\n      color: #ff0000;\n      font-size: 12px;\n      border: 0;\n      background: transparent;\n    }\n  }\n  .link {\n    color: #ff0000;\n    font-size: 12px;\n    border: 0;\n    margin-left: 5px;\n    background: transparent;\n  }\n  .label{\n    display: flex;\n    align-items: center;\n    color: #ff0000;\n    font-size: 12px;\n    img{\n      width: 16px;\n      height: 16px;\n      margin-right: 3px;\n    }\n  }\n']);return j=function(){return e},e}var T=b.b.div(j()),P=n(423),N=n.n(P),I=n(425),B=n.n(I),S=n(426),M=n.n(S),L=n(434),U=n.n(L),F=n(475),V=n.n(F);function x(){var e=Object(h.a)(["\n  body {\n    background: #fff;\n  }\n"]);return x=function(){return e},e}var G={text:B.a,password:M.a,checked:U.a,unchecked:V.a},D="password",R="message",Q={password:1,message:2};function H(e){var t=e.flag,n=e.interval,a=e.handleClick;return t?p.a.createElement("button",{className:"btn btn-primary btn-mini",onClick:a},"\u83b7\u53d6\u9a8c\u8bc1\u7801"):p.a.createElement("button",{className:"btn btn-primary btn-mini-disable"},n,"\u79d2\u540e\u91cd\u53d1")}function Y(e){var t=e.passwordType,n=e.password,a=e.passwordCleanView,r=e.handleChange,o=e.handleFocus,i=e.handleBlur,c=e.passwordClean,d=e.handleTogglePswdVisibleOrHidden;return p.a.createElement("div",{className:"group"},p.a.createElement("div",{className:"group__body"},p.a.createElement("input",{className:"input input-primary",type:t,name:"password",value:n,maxLength:k.a.pswd.PSWD_DIGIT,onChange:r,onFocus:o,onBlur:i,placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),p.a.createElement("div",{className:"group__foot"},p.a.createElement("img",{className:"group__clean-btn",style:{visibility:a?"visible":"hidden"},onClick:c,src:N.a,alt:""}),p.a.createElement("img",{className:"group__toggle-btn",onClick:d,src:G[t],alt:"\u5207\u6362"}),p.a.createElement(f.a,{className:"link",to:"/find-login-pswd"},"\u5fd8\u8bb0\u5bc6\u7801")))}function J(e){var t=e.messageCode,n=e.interval,a=e.loadCodeFlag,r=e.messageCodeCleanView,o=e.messageClean,i=e.handleChange,c=e.handleFocus,d=e.handleBlur,s=e.handleLoadCode;return p.a.createElement("div",{className:"group"},p.a.createElement("div",{className:"group__body"},p.a.createElement("input",{className:"input input-primary",type:"text",name:"messageCode",value:t,onChange:i,onFocus:c,onBlur:d,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})),p.a.createElement("div",{className:"group__foot"},p.a.createElement("img",{className:"group__clean-btn",style:{visibility:r?"visible":"hidden"},onClick:o,src:N.a,alt:""}),p.a.createElement(H,{flag:a,interval:n,handleClick:s},"\u83b7\u53d6\u9a8c\u8bc1\u7801")))}var z=Object(b.a)(x()),K=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.handleFocus=n.handleFocus.bind(Object(l.a)(n)),n.handleBlur=n.handleBlur.bind(Object(l.a)(n)),n.handleTogglePswdVisibleOrHidden=n.handleTogglePswdVisibleOrHidden.bind(Object(l.a)(n)),n.handleRememberUsername=n.handleRememberUsername.bind(Object(l.a)(n)),n.usernameClean=n.handleClean.bind(Object(l.a)(n),"username"),n.passwordClean=n.handleClean.bind(Object(l.a)(n),"password"),n.messageClean=n.handleClean.bind(Object(l.a)(n),"messageCode"),n.handlePasswordLogin=n.handleToggleLoginType.bind(Object(l.a)(n),D),n.handleMessageLogin=n.handleToggleLoginType.bind(Object(l.a)(n),R),n.handleLoadCode=n.handleLoadCode.bind(Object(l.a)(n)),n.state={username:"",usernameCleanView:!1,password:"",passwordCleanView:!1,messageCode:"",messageCodeCleanView:!1,passwordType:"password",rememberStatus:"unchecked",interval:k.a.login.INTERVAL,loadCodeFlag:!0,loginType:D},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.readUsernameFromStore()}},{key:"doSubmit",value:function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=C.a.loading("\u5904\u7406\u4e2d"),e.prev=1,e.next=4,Object(Z.J)(t);case 4:a=e.sent,200===(r=a.data).status?(localStorage.removeItem("currentMerchantId"),this.props.login({token:r.data.sessionId,reset:r.data.isModify})):C.a.alert(r.msg);case 7:return e.prev=7,n.hide(),e.finish(7);case 10:case"end":return e.stop()}},e,this,[[1,,7,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"loadCode",value:function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=C.a.loading("\u53d1\u9001\u4e2d"),e.prev=1,e.next=4,Object(Z.l)(t);case 4:a=e.sent,200===(r=a.data).status&&this.setState({loadCodeFlag:!1},this.countDown),C.a.alert(r.msg);case 8:return e.prev=8,n.hide(),e.finish(8);case 11:case"end":return e.stop()}},e,this,[[1,,8,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"readUsernameFromStore",value:function(){var e=this,t=Object(E.a)("username");t?this.setState({username:t,rememberStatus:"checked"},function(){e.toggleSaveOrRemoveUsername()}):this.setState({rememberStatus:"unchecked"},function(){e.toggleSaveOrRemoveUsername()})}},{key:"handleToggleLoginType",value:function(e,t){var n=this;t.preventDefault(),e!==this.state.loginType&&this.setState({loginType:e},function(){n.toggleSaveOrRemoveUsername()})}},{key:"handleTogglePswdVisibleOrHidden",value:function(){var e="password"===this.state.passwordType?"text":"password";this.setState({passwordType:e})}},{key:"handleFocus",value:function(e){this.setState(Object(a.a)({},"".concat(e.target.name,"CleanView"),!0))}},{key:"handleBlur",value:function(e){var t=this,n="".concat(e.target.name,"CleanView");setTimeout(function(){t.setState(Object(a.a)({},n,!1),function(){t.toggleSaveOrRemoveUsername()})},100)}},{key:"handleClean",value:function(e){this.setState(Object(a.a)({},e,""))}},{key:"handleChange",value:function(e){var t=this;this.setState(Object(a.a)({},e.target.name,e.target.value),function(){t.toggleSaveOrRemoveUsername()})}},{key:"handleLoadCode",value:function(){if(this.state.username){var e={userPhoneNo:this.state.username};this.loadCode(e)}else C.a.alert("\u8bf7\u8f93\u5165\u624b\u673a\u53f7")}},{key:"handleRememberUsername",value:function(){var e=this,t="checked"===this.state.rememberStatus?"unchecked":"checked";this.setState({rememberStatus:t},function(){e.toggleSaveOrRemoveUsername()})}},{key:"toggleSaveOrRemoveUsername",value:function(){"checked"===this.state.rememberStatus?Object(E.c)("username",this.state.username):Object(E.b)("username")}},{key:"resetMessageState",value:function(){this.setState({interval:k.a.login.INTERVAL,loadCodeFlag:!0})}},{key:"countDown",value:function(){var e=this;this.state.interval>0?setTimeout(function(){e.setState({interval:e.state.interval-1},function(){e.countDown()})},1e3):this.resetMessageState()}},{key:"verify",value:function(){if(this.state.username){if(this.state.loginType===D){if(!this.state.password)return void C.a.alert("\u8bf7\u8f93\u5165\u5bc6\u7801")}else if(this.state.loginType===R&&!this.state.messageCode)return void C.a.alert("\u8bf7\u8f93\u5165\u77ed\u4fe1\u7801");return!0}C.a.alert("\u8bf7\u8f93\u5165\u624b\u673a\u53f7")}},{key:"handleSubmit",value:function(){if(this.verify()){var e={};1===Q[this.state.loginType]?e={userPhoneNo:this.state.username,password:this.state.password,loginType:Q[this.state.loginType]}:2===Q[this.state.loginType]&&(e={userPhoneNo:this.state.username,code:this.state.messageCode,loginType:Q[this.state.loginType]}),this.doSubmit(e)}}},{key:"render",value:function(){var e=this.props.isAuthenticated,t=(this.props.location.state||{from:{pathname:"/"}}).from,n=this.state.usernameCleanView;return e?p.a.createElement(A.a,{to:t}):p.a.createElement(T,null,p.a.createElement(z,null),p.a.createElement(O.Helmet,null,p.a.createElement("title",{className:"title"},"\u767b\u5f55")),p.a.createElement("header",null,p.a.createElement("h1",null,"\u767b\u5f55")),p.a.createElement("main",null,p.a.createElement("div",{className:"group-list"},p.a.createElement("div",{className:"group"},p.a.createElement("div",{className:"group__body"},p.a.createElement("input",{className:"input input-primary",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"})),p.a.createElement("div",{className:"group__foot"},p.a.createElement("img",{className:"group__clean-btn",style:{visibility:n?"visible":"hidden"},onClick:this.usernameClean,src:N.a,alt:""}))),this.state.loginType===D?p.a.createElement(Y,Object.assign({},this.state,{handleChange:this.handleChange,handleFocus:this.handleFocus,handleBlur:this.handleBlur,passwordClean:this.passwordClean,handleTogglePswdVisibleOrHidden:this.handleTogglePswdVisibleOrHidden})):p.a.createElement(J,Object.assign({},this.state,{handleChange:this.handleChange,handleFocus:this.handleFocus,handleBlur:this.handleBlur,messageClean:this.messageClean,handleLoadCode:this.handleLoadCode}))),p.a.createElement("div",{className:"flex"},p.a.createElement("div",{className:"flex__body"},p.a.createElement("label",{className:"label",onClick:this.handleRememberUsername},p.a.createElement("img",{src:G[this.state.rememberStatus],alt:""}),"\u8bb0\u4f4f\u8d26\u53f7")),p.a.createElement("div",{className:"flex__foot"},"password"===this.state.loginType?p.a.createElement("button",{className:"link",onClick:this.handleMessageLogin},"\u77ed\u4fe1\u767b\u5f55"):p.a.createElement("button",{className:"link",onClick:this.handlePasswordLogin},"\u5bc6\u7801\u767b\u5f55"))),p.a.createElement("button",{className:"btn btn-primary",onClick:this.handleSubmit},"\u767b\u5f55")))}}]),t}(g.Component),_=Object(v.a)(Object(y.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},function(e,t){return{login:function(t){e({type:"AUTH_USER",payload:{token:t.token,reset:t.reset}})}}})(K));n.d(t,"view",function(){return _})}}]);
//# sourceMappingURL=4.89538f5b.chunk.js.map