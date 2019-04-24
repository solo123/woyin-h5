import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom"
import Loadable from 'react-loadable'

import './App.css'
import util from './util'
import ScrollToTop from './common/ScrollToTop'
import LoadingComponent from './common/LoadingComponent'
import Auth from './common/Auth'
import history from './history'

const AsyncLogin = Loadable({
  loader: () => import('./pages/Login').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncMe = Loadable({
  loader: () => import('./pages/Me').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncBankcardList = Loadable({
  loader: () => import('./pages/bankcard/BankcardList').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncAddBankcard = Loadable({
  loader: () => import('./pages/bankcard/AddBankcard').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRechargePhone = Loadable({
  loader: () => import('./pages/RechargePhone').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRechargeTraffic = Loadable({
  loader: () => import('./pages/RechargeTraffic').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRechargeOil = Loadable({
  loader: () => import('./pages/RechargeOil').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRechargeQB = Loadable({
  loader: () => import('./pages/RechargeQB').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRechargeVideo = Loadable({
  loader: () => import('./pages/RechargeVideo').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncVoucher = Loadable({
  loader: () => import('./pages/Voucher').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRechargeVoucher = Loadable({
  loader: () => import('./pages/RechargeVoucher').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncVoucherRecord = Loadable({
  loader: () => import('./pages/VoucherRecord').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncOrder = Loadable({
  loader: () => import('./pages/Order').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRedeem = Loadable({
  loader: () => import('./pages/Redeem').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncRedeemRecord = Loadable({
  loader: () => import('./pages/RedeemRecord').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncCreditCard = Loadable({
  loader: () => import('./pages/CreditCard').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncCreditRecord = Loadable({
  loader: () => import('./pages/CreditRecord').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncTransfer = Loadable({
  loader: () => import('./pages/Transfer').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncTransferRecord = Loadable({
  loader: () => import('./pages/TransferRecord').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncHome = Loadable({ 
  loader: () => import('./pages/Home').then(({view}) => view), 
  loading: LoadingComponent
});
const AsyncFindLoginPswd = Loadable({ 
  loader: () => import('./pages/pswd/FindLoginPswd').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncChangeLoginPswd = Loadable({ 
  loader: () => import('./pages/pswd/ChangeLoginPswd').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncChangeTradePswd = Loadable({ 
  loader: () => import('./pages/pswd/ChangeTradePswd').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncFindTradePswd = Loadable({ 
  loader: () => import('./pages/pswd/FindTradePswd').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncResetAllPswd = Loadable({ 
  loader: () => import('./pages/pswd/ResetAllPswd').then(({view}) => view), 
  loading: LoadingComponent
})

const AsyncSetting = Loadable({ 
  loader: () => import('./pages/Setting').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncDeveloping = Loadable({ 
  loader: () => import('./pages/Developing').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncJDHome = Loadable({ 
  loader: () => import('./pages/jd/Home').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncStoreDetail = Loadable({ 
  loader: () => import('./pages/StoreDetail').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncStoreConfirm = Loadable({ 
  loader: () => import('./pages/StoreConfirm').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncStoreSort = Loadable({ 
  loader: () => import('./pages/StoreSort').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncResult = Loadable({ 
  loader: () => import('./pages/Result').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncWaitSendGoods = Loadable({ 
  loader: () => import('./pages/WaitSendGoods').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncWaitReceivGoods = Loadable({ 
  loader: () => import('./pages/WaitReceivGoods').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncGoodsTrack = Loadable({ 
  loader: () => import('./pages/GoodsTrack').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncProfile = Loadable({ 
  loader: () => import('./pages/Profile').then(({view}) => view), 
  loading: LoadingComponent
})
const AsyncIntegral = Loadable({ 
  loader: () => import('./pages/Integral').then(({view}) => view), 
  loading: LoadingComponent
})


export default class extends Component {
  
  componentDidMount() {
    util.fixIos12WeixinInputBug()
  }

  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/login" component={AsyncLogin} />
            <Auth path="/me" component={AsyncMe} />
            <Auth path="/bankcard-list" component={AsyncBankcardList} />
            <Auth path="/bankcard-add" component={AsyncAddBankcard} />
            <Auth path="/redeem" component={AsyncRedeem} />
            <Auth path="/redeem-record" component={AsyncRedeemRecord} />
            <Auth path="/credit-card" component={AsyncCreditCard} />
            <Auth path="/credit-record" component={AsyncCreditRecord} />
            <Auth path="/order" component={AsyncOrder} />
            <Auth path="/recharge-phone" component={AsyncRechargePhone} />
            <Auth path="/recharge-traffic" component={AsyncRechargeTraffic} />
            <Auth path="/recharge-oil" component={AsyncRechargeOil} />
            <Auth path="/recharge-QB" component={AsyncRechargeQB} />
            <Auth path="/recharge-video" component={AsyncRechargeVideo} />
            <Auth path="/voucher" component={AsyncVoucher} />
            <Auth path="/recharge-voucher/:id" component={AsyncRechargeVoucher} />
            <Auth path="/voucher-record" exact component={AsyncVoucherRecord} />
            <Auth path="/transfer" component={AsyncTransfer} />
            <Auth path="/transfer-record" component={AsyncTransferRecord} />
            <Auth path="/store-jd" component={AsyncJDHome} />
            <Auth path="/store-detail" component={AsyncStoreDetail} />
            <Auth path="/store-confirm" component={AsyncStoreConfirm} />
            <Auth path="/store-sort" component={AsyncStoreSort} />
            <Auth path="/setting" component={AsyncSetting} />
            <Auth path="/reset-all-pswd" component={AsyncResetAllPswd} />
            <Auth path="/result" component={AsyncResult} />
            <Auth path="/change-login-pswd" component={AsyncChangeLoginPswd} />
            <Route path="/find-login-pswd" component={AsyncFindLoginPswd} />
            <Auth path="/find-trade-pswd" component={AsyncFindTradePswd} />
            <Auth path="/change-trade-pswd" component={AsyncChangeTradePswd} />
            <Auth path="/wait-send-goods" component={AsyncWaitSendGoods} />
            <Auth path="/wait-receiv-goods" exact component={AsyncWaitReceivGoods} />
            <Auth path="/wait-receiv-goods/:id" component={AsyncGoodsTrack} />
            <Auth path="/profile" component={AsyncProfile} />
            <Auth path="/integral" component={AsyncIntegral} />

            <Route path="/developing" component={AsyncDeveloping} />
            <Route render={()=> <AsyncNotFound />}/>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}