import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"

import Menu from '@/components/Menu'
import Product from './Product'
import Page from './styled'

import banner1 from '@/asset/images/choice/banner1.png'
import banner2 from '@/asset/images/choice/banner2.png'
import banner3 from '@/asset/images/choice/banner3.png'
import banner4 from '@/asset/images/choice/banner4.png'

export default class extends Component {
  render() {
    return (
      <Page>
        <Helmet title="精选"/>

        <Link to="/store-jd"><img src={banner1} alt=""/></Link>
        <Link to="/store-jd"><img src={banner2} alt=""/></Link>
        <Link to="/store-jd"><img src={banner3} alt=""/></Link>
        <Link to="/store-jd"><img src={banner4} alt=""/></Link>

        <Product/>

        <div className="fixed-bottom">
          <Menu/>
        </div>
      </Page>
    )
  }
}