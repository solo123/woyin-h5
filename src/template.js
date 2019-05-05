import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDOrders} from '@/api'
import Backhome from '@/components/Backhome'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

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


// styled
import styled from 'styled-components'

export default styled.div`


`

// List

import React from 'react'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

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


// 操作结果

import {replace} from '@/services/redirect'

replace('/result', {type: 'success', title: data.msg})