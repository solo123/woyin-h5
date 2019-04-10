import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom"
import Loadable from 'react-loadable'

import './App.css'
import util from './util'
import ScrollToTop from './common/ScrollToTop'
import Auth from './common/Auth'

// import Cate from './components/Cate'
// import DoubleColorBall from './components/DoubleColorBall'
// import Product from './components/Product'
// import Buy from './components/Buy'
// import RechargeFlow from './components/RechargeFlow'
// import RechargeOil from './components/RechargeOil'
// import RechargeQB from './components/RechargeQB'
// import RechargeVideo from './components/RechargeVideo'
// import RechargeECard from './components/RechargeECard'
// import RechargeECardDetail from './components/RechargeECardDetail'
// import CreditCard from './components/CreditCard'
// import Violation from './components/Violation'
// import ViolationList from './components/ViolationList'
// import ViolationDetail from './components/ViolationDetail'

// import AsyncRechargeVoucherDetail from './pages/RechargeVoucherDetail/views/Detail'

import history from './history'

const LoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div style={{textAlign: 'center', paddingTop: 30}}>loading...</div>
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null
  }
}

const AsyncLogin = Loadable({
  loader: () => import('./pages/Login'),
  loading: LoadingComponent
})
const AsyncMe = Loadable({
  loader: () => import('./pages/Me'),
  loading: LoadingComponent
})
const AsyncBankcardList = Loadable({
  loader: () => import('./pages/BankcardList'),
  loading: LoadingComponent
})
const AsyncAddBankcard = Loadable({
  loader: () => import('./pages/AddBankcard'),
  loading: LoadingComponent
})
const AsyncRechargePhone = Loadable({
  loader: () => import('./pages/RechargePhone'),
  loading: LoadingComponent
})
const AsyncRechargeTraffic = Loadable({
  loader: () => import('./pages/RechargeTraffic').then(({ view }) => view),
  loading: LoadingComponent
})
const AsyncRechargeOil = Loadable({
  loader: () => import('./pages/RechargeOil').then(({ view }) => view),
  loading: LoadingComponent
})
const AsyncRechargeQB = Loadable({
  loader: () => import('./pages/RechargeQB').then(({ view }) => view),
  loading: LoadingComponent
})
const AsyncRechargeVideo = Loadable({
  loader: () => import('./pages/RechargeVideo').then(({ view }) => view),
  loading: LoadingComponent
})
const AsyncRechargeVoucher = Loadable({
  loader: () => import('./pages/RechargeVoucher').then(({ view }) => view),
  loading: LoadingComponent
})
const AsyncRechargeVoucherDetail = Loadable({
  loader: () => import('./pages/RechargeVoucherDetail').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncVoucherRecord = Loadable({
  loader: () => import('./pages/VoucherRecord').then(({ view }) => view),
  loading: LoadingComponent
})
const AsyncOrder = Loadable({
  loader: () => import('./pages/Order'),
  loading: LoadingComponent
})
const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingComponent
})
const AsyncRedeem = Loadable({
  loader: () => import('./pages/Redeem'),
  loading: LoadingComponent
})
const AsyncRedeemRecord = Loadable({
  loader: () => import('./pages/RedeemRecord'),
  loading: LoadingComponent
})
const AsyncCreditCard = Loadable({
  loader: () => import('./pages/CreditCard').then(({view}) => view),
  loading: LoadingComponent
})
const AsyncCreditRecord = Loadable({
  loader: () => import('./pages/CreditRecord'),
  loading: LoadingComponent
})
const AsyncTransfer = Loadable({
  loader: () => import('./pages/Transfer'),
  loading: LoadingComponent
})
const AsyncTransferRecord = Loadable({
  loader: () => import('./pages/TransferRecord').then(({view}) => view),
  loading: LoadingComponent
})

const AsyncHome = Loadable({ 
  loader: () => import('./pages/home').then(({ view }) => view), 
  loading: LoadingComponent
});
const AsyncChangePswd = Loadable({ 
  loader: () => import('./pages/ChangePswd').then(({ view }) => view), 
  loading: LoadingComponent
})

class App extends Component {
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
            <Auth path="/recharge-voucher" exact component={AsyncRechargeVoucher} />
            <Auth path="/recharge-voucher/:id" component={AsyncRechargeVoucherDetail} />
            <Auth path="/voucher-record" exact component={AsyncVoucherRecord} />


            <Auth path="/transfer" component={AsyncTransfer} />
            <Auth path="/transfer-record" component={AsyncTransferRecord} />
            
            <Auth path="/change-pswd" component={AsyncChangePswd} />

            {/* <Auth path="/recharge-flow" component={RechargeFlow} /> */}
            {/* <Auth path="/recharge-oil" component={RechargeOil} /> */}
            {/* <Auth path="/recharge-qb" component={RechargeQB} /> */}
            {/* <Auth path="/recharge-video" component={RechargeVideo} /> */}
            {/* <Auth exact path="/recharge-ecard" component={RechargeECard} /> */}
            {/* <Auth path="/recharge-ecard/:id" component={RechargeECardDetail} /> */}
            {/* <Auth path="/credit-card" component={CreditCard} /> */}
            {/* <Auth exact path="/violation" component={Violation} /> */}
            {/* <Auth path="/violation/:id" component={ViolationList} /> */}
            {/* <Auth path="/violation-detail/:id" component={ViolationDetail} /> */}
            {/* <Auth path="/add-vehicle" component={AddVehicle} /> */}
            {/* <Auth path="/double-color-ball" component={DoubleColorBall} /> */}
            
            {/* <Route path="/cate" component={Cate} /> */}
            {/* <Route path="/product" component={Product} /> */}
            {/* <Route path="/buy/:id" component={Buy} /> */}
            <Route render={ ()=> <AsyncNotFound /> } />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;