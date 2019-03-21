import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom"

import './App.css'

import Loading from './common/Loading'
import Auth from './common/Auth'
import Transfer from './components/Transfer'

import Cate from './components/Cate'
import DoubleColorBall from './components/DoubleColorBall'
import Product from './components/Product'
import Buy from './components/Buy'

import RechargeFlow from './components/RechargeFlow'
import RechargeOil from './components/RechargeOil'
import RechargeQB from './components/RechargeQB'
import RechargeVideo from './components/RechargeVideo'
import RechargeECard from './components/RechargeECard'
import RechargeECardDetail from './components/RechargeECardDetail'
import CreditCard from './components/CreditCard'
import Violation from './components/Violation'
import ViolationList from './components/ViolationList'
import ViolationDetail from './components/ViolationDetail'
import AddVehicle from './components/AddVehicle.js'

import Home from './pages/Home'
import Me from './pages/Me'
import Login from './pages/Login'
import Redeem from './pages/Redeem'
import RedeemRecord from './pages/RedeemRecord'

import Order from './pages/Order'


import BankcardList from './pages/BankcardList'
import AddBankcard from './pages/AddBankcard'
import RechargePhone from './pages/RechargePhone'

import Test from './components/Test'
import history from './history'

const NotFound = () => <h1>Not Found</h1>;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />

            <Auth path="/me" component={Me} />
            <Auth path="/bankcard-list" component={BankcardList} />
            <Auth path="/bankcard-add" component={AddBankcard} />

            <Auth path="/redeem" component={Redeem} />
            <Auth path="/redeem-record" component={RedeemRecord} />

            <Auth path="/order" component={Order} />

            <Auth path="/recharge-phone" component={RechargePhone} />
            <Auth path="/recharge-flow" component={RechargeFlow} />
            <Auth path="/recharge-oil" component={RechargeOil} />
            <Auth path="/recharge-qb" component={RechargeQB} />
            <Auth path="/recharge-video" component={RechargeVideo} />
            <Auth exact path="/recharge-ecard" component={RechargeECard} />
            <Auth path="/recharge-ecard/:id" component={RechargeECardDetail} />
            <Auth path="/credit-card" component={CreditCard} />
            <Auth exact path="/violation" component={Violation} />
            <Auth path="/violation/:id" component={ViolationList} />
            <Auth path="/violation-detail/:id" component={ViolationDetail} />
            <Auth path="/add-vehicle" component={AddVehicle} />
            <Auth path="/double-color-ball" component={DoubleColorBall} />
            
            <Auth path="/transfer" component={Transfer} />
            <Route path="/cate" component={Cate} />
            <Route path="/product" component={Product} />
            <Route path="/buy/:id" component={Buy} />
            <Route path="/test" component={Test} />
            <Route render={ ()=> <NotFound /> } />
          </Switch>
          <Loading />
        </div>
      </Router>
    );
  }
}

export default App;