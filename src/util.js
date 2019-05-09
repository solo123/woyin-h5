import weui from 'weui.js'
import dayjs from 'dayjs'

import {push} from '@/services/redirect'

import fzIcon from '@/asset/images/bank/fz.svg'
import gdIcon from '@/asset/images/bank/gd.svg'
import gsIcon from '@/asset/images/bank/gs.svg'
import hxIcon from '@/asset/images/bank/hx.svg'
import jsIcon from '@/asset/images/bank/js.svg'
import jtIcon from '@/asset/images/bank/jt.svg'
import msIcon from '@/asset/images/bank/ms.svg'
import nyIcon from '@/asset/images/bank/ny.svg'
import paIcon from '@/asset/images/bank/pa.svg'
import shIcon from '@/asset/images/bank/sh.svg'
import shfzIcon from '@/asset/images/bank/shfz.svg'
import xyIcon from '@/asset/images/bank/xy.svg'
import yzIcon from '@/asset/images/bank/yz.svg'
import zgIcon from '@/asset/images/bank/zg.svg'
import zsIcon from '@/asset/images/bank/zs.svg'
import zxIcon from '@/asset/images/bank/zx.svg'
import defaultIcon from '@/asset/images/bank/default.svg'

import appleIcon from '@/asset/images/ecard/apple.png'
import bgyIcon from '@/asset/images/ecard/bgy.png'
import bskIcon from '@/asset/images/ecard/bsk.png'
import dqIcon from '@/asset/images/ecard/dq.png'
import hgdsIcon from '@/asset/images/ecard/hgds.png'
import jdIcon from '@/asset/images/ecard/jd.png'
import kdjIcon from '@/asset/images/ecard/kdj.png'
import qcsIcon from '@/asset/images/ecard/qcs.png'
import snIcon from '@/asset/images/ecard/sn.png'
import tmIcon from '@/asset/images/ecard/tm.png'
import wnIcon from '@/asset/images/ecard/wn.png'
import xbkIcon from '@/asset/images/ecard/xbk.png'
import xcIcon from '@/asset/images/ecard/xc.png'
import ymxIcon from '@/asset/images/ecard/ymx.png'

const BANKCARD_SCHEMA = {
  'GDB' : fzIcon,
  'CEB' : gdIcon,
  'ICBC' : gsIcon,
  'HXB' : hxIcon,
  'CCB' : jsIcon,
  'COMM' : jtIcon,
  'CMBC' : msIcon,
  'ABC' : nyIcon,
  'SZPAB' : paIcon,
  'BOS' : shIcon,
  'SPDB' : shfzIcon,
  'CIB' : xyIcon,
  'PSBC' : yzIcon,
  'BOC' : zgIcon,
  'CMB' : zsIcon,
  'CITIC' : zxIcon
}

const LOGO_SCHEAM = {
  '19': jdIcon,
  '20': tmIcon,
  '2': snIcon,
  '3': ymxIcon,
  '5': xcIcon,
  '6': xcIcon,
  '7': hgdsIcon,
  '8': kdjIcon,
  '9': bskIcon,
  '10': xbkIcon,
  '11': dqIcon,
  '12': bgyIcon,
  '13': appleIcon,
  '14': wnIcon,
  '15': qcsIcon
}

// 根据银行code获取银行logo
function getBankCardLogo(code) {
  return BANKCARD_SCHEMA[code] || defaultIcon
}

function getVoucherLogo(id) {
 return LOGO_SCHEAM[id]
}

const refreshTokenIsValid = (refreshToken) => {
  return true;
}

const accessTokenIsValid = (accessToken) => {
  return true;
}

const creteNumSeriesString = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(String(i))
  }
  return result
}

const randomRangeNum = (min, max) => {
  var range = max - min;
  var rand = Math.random();
  return min + Math.round(range * rand);
}

const closest = function (el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  const old = el
  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }
    el = el.parentElement;
  }
  return el !== old;
}

const parseUrl = function (url, name) {
  var result = [];
  var query = url.split("?")[1];
  var queryArr = query.split("&");
  queryArr.forEach(function (item) {
    var obj = {};
    var key = item.split("=")[0];
    var value = item.split("=")[1];
    obj[key] = value;
    if (key === name)
      result = obj;
  });
  return result;
}

function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length === 0) return false;
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className === '' ? cls : elem.className + ' ' + cls;
  }
}

function removeClass(elem, cls) {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

const paymentConfirm = function (options) {
  options = {
    title: '确认',
    subtitle: '',
    useable: 0,
    amount: 0,
    callback: function () {},
    ...options
  }

  var tpl =
    `
    <div>
      <div class="modal">
        <div class="modal__dialog">
          <div class="modal__content">
            <div class="modal__head">
              <div class="modal__close">×</div>
              <div class="modal__title">${options.title}</div>
            </div>
            <div class="modal__body">
              <div class="modal__info">
                <div class="modal__subtitle">${options.subtitle}</div>
                <div class="modal__amount">${options.amount}</div>
              </div>
              <div class="modal__items">
                <div class="modal__item">
                  <div class="modal__label">可用积分</div>
                  <div class="modal__useable">${options.useable}</div>
                </div>
                <div class="modal__item">
                  <div class="modal__label"><input class="modal__input modal__input--left" type="password" autocomplete="off" placeholder="请输入交易密码"></div>
                  <a id="findTradePswd" class="modal__link">忘记交易密码？</a>
                </div>
              </div>
            </div>
            <div class="modal__foot">
              <button class="modal__button modal__submit">确认兑换</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__backdrop"></div>
    </div>`

  const modal = document.createElement('div');
  modal.innerHTML = tpl
  document.body.appendChild(modal)
  var $backdrop = document.querySelector('.modal__backdrop')
  var $dialog = document.querySelector('.modal__dialog')
  var $closeBtn = document.querySelector('.modal__close')
  var $submitBtn = document.querySelector('.modal__submit')
  var $input = document.querySelector('.modal__input')

  var findTradePswd = document.getElementById('findTradePswd')

  // 找回交易密码
  findTradePswd.addEventListener('click', function() {
    hide()
    push('/find-trade-pswd')
  })

  var hide = function (callback) {
    addClass($backdrop, 'weui-animate-fade-out')
    addClass($dialog, 'weui-animate-fade-slideUp')
    $dialog.addEventListener('animationend', function () {
      modal.remove()
    })
    $dialog.addEventListener('webkitAnimationEnd', function () {
      modal.remove()
    })
  }


  $input.addEventListener('input', function (e) {
    if (e.target.value) {
      addClass($submitBtn, 'modal__button--enable')
    } else {
      removeClass($submitBtn, 'modal__button--enable')
    }
  })

  $closeBtn.addEventListener('click', function (e) {
    hide()
  })

  $submitBtn.addEventListener('click', function (e) {
    if (options.callback) {
      if (options.callback.call(this, e, $input) !== false) {
        hide()
      }
    } else {
      hide()
    }
  })
  addClass($backdrop, 'weui-animate-fade-in')
  addClass($dialog, 'weui-animate-fade-slideDown')
}

const getLastNum = function (bankcardNo) {
  return bankcardNo.substring(bankcardNo.length - 4, bankcardNo.length)
}

const parseBankcardList = function (arr) {
  return arr.map(item => {
    return {
      id: item.id,
      bankCard: item.bankCard,
      bankName: item.bankName,
      bankCode: item.bankCode,
      cardHoldName: item.cardHoldName,
      userPhoneNo: item.userPhoneNo,
      label: item.bankName + '-' + getLastNum(item.bankCard)
    }
  })
}

const parseCreditcardList = function (arr) {
  return arr.map(item => {
    return {
      creditCardNo: item.creditCardNo,
      creditCardName: item.creditCardName,
      label: item.creditCardName + '-' + getLastNum(item.creditCardNo)
    }
  })
}

const confirmRetry = function (content, cb) {
  weui.confirm(content, {
    buttons: [{
      label: '取消',
      type: 'default'
    }, {
      label: '重试',
      type: 'primary',
      onClick: function () {
        cb && cb()
      }
    }]
  })
}

const fixIos12WeixinInputBug = function () {
  let currentScrollTop = 0

  const scrollTop = function (y) {
    y = y ? y : 0;
    window.scrollTo(0, y)
  }

  document.querySelector('body').addEventListener('focus', e => {
    if (e.type === 'focus' && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) {
      currentScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    }
  }, true)

  document.querySelector('body').addEventListener('blur', e => {
    if (e.type === 'blur' && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) {
      scrollTop(currentScrollTop)
    }
  }, true)
}

// 根据类型和状态过滤银行卡
const filterBankCardByStatusAndType = function (cardList, type, status) {
  return cardList.filter(item => {
    return ((item.bankCardType === type) && (item.status === status))
  })
}

const filterDepositCardList = function(cardList, status = 1) {
  return filterBankCardByStatusAndType(cardList, 1, status)
}

const filterCreditCardList = function(cardList, status = 1) {
  return filterBankCardByStatusAndType(cardList, 2, status)
}

const formatTimestamp = function (timestamp) {
  if (timestamp) {
    return dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
  }
  return null
}

const formatTimestamp2 = function (timestamp) {
  if (timestamp) {
    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
  }
  return null
}
// 延迟执行
// 在一个指定时间之内 再次调用会被忽略
function throttle(func, delay) {
  let flag
  let arg
  return function () {
    arg = arguments
    if (!flag) {
      flag = setTimeout(() => {
        func.apply(this, arg)
        flag = null
      }, delay)
    }
  }
}

// const superTest = throttle(test, 100)
// superTest()

// 每次调用请求都会延迟执行 
// 但是如果上次的调用请求还没被执行 最新的调用请求会覆盖掉之前的调用请求
function debounce(func, delay) {
  let flag
  return function () {
    const args = arguments
    clearTimeout(flag)
    flag = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// const superTest = debounce(test, 100)
// superTest()



// 按下移动元素
var Mover = function (elem) {
  if(!elem) {
    return
  }

  var start = {
    x: 0,
    y: 0
  }
  var curr = {
    x: 0,
    y: 100
  }
  var delta = {
    x: 0,
    y: 0
  }

  var translate = function (x, y) {
    if (x < 5) {
      x = 0
    }
    elem.style.bottom = y + 'px'
    elem.style.right = x + 'px'
    curr = {
      y: y,
      x: x
    }
  }

  elem.addEventListener('touchstart', function (e) {
    var touch = e.targetTouches[0]
    start = {
      x: touch.pageX,
      y: touch.pageY
    }
  })

  elem.addEventListener('touchmove', function (e) {
    e.preventDefault()
    var touch = e.targetTouches[0]

    delta = {
      x: touch.pageX - start.x,
      y: touch.pageY - start.y
    }
    start.y = touch.pageY
    start.x = touch.pageX
    var newY = curr.y - delta.y
    var newX = curr.x - delta.x
    translate(newX, newY)
    return false
  })
}

function getAccountById(arr) {
  const merchantId = localStorage.getItem('currentMerchantId')
  if(merchantId) {
    const data = arr.filter(item => {
      return item.merchantId === merchantId
    })
    return data[0]
  }
  return arr[0]
}

export default {
  Mover,
  addClass,
  removeClass,
  fixIos12WeixinInputBug,
  accessTokenIsValid,
  refreshTokenIsValid,
  creteNumSeriesString,
  randomRangeNum,
  closest,
  parseUrl,
  paymentConfirm,
  parseBankcardList,
  parseCreditcardList,
  getBankcardLastNum: getLastNum,
  confirmRetry: confirmRetry,
  filterBankCardByStatusAndType,
  filterDepositCardList,
  filterCreditCardList,
  formatTimestamp,
  formatTimestamp2,
  throttle,
  debounce,
  getBankCardLogo,
  getVoucherLogo,
  getAccountById
};