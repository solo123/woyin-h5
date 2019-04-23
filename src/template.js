import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDOrders} from '@/api'
import Backhome from '@/common/Backhome'
import SkeletonPlaceholder from '@/common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

import Page from './styled'

export default class extends Component {

  render() {
    return (
      <Page>
        <Helmet title="待发货" />


        <Backhome />
      </Page>
    )
  }
}


// List

import React from 'react'
import SkeletonPlaceholder from '@/common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

function Item() {
  return (
    <div>
      
    </div>
  )
}

function List({items}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }

  return (
    <div>

    </div>
  )
}

export default List