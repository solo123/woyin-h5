import weui from 'weui.js'
import dayjs from 'dayjs'

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
                  <div class="modal__label">交易密码</div>
                  <div><input class="modal__input" type="password" autocomplete="off" placeholder="请输入交易密码"></div>
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
  formatTimestamp,
  formatTimestamp2,
  throttle,
  debounce
};