import React from 'react';
import styled from 'styled-components'
import {Helmet} from "react-helmet"

import Backhome from '@/common/Backhome'


const Page = styled.div`

`

export default function() {
  return (
    <Page>
      <Helmet defaultTitle="沃银企服" title="京东购物"  />

      <h1>京东购物</h1>
      
      <Backhome />
    </Page>
  )
}