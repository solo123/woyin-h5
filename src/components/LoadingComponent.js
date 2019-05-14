import React from 'react'
import styled from 'styled-components'

import loading from '@/asset/images/spinner_load.svg'

const Page = styled.div`
  text-align: center;
  padding-top: 30px;
  font-size: 16px;
  main{
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
      width: 40px;
      height: 40px;
    }    
  }
`

function LoadingComponent({ isLoading, error }) {
  if (isLoading) {
    return <Page>
        <main>
          <img className="icon" src={loading} alt=""/>加载中...
        </main>
    </Page>
  }else if (error) {
    return <Page>抱歉，服务器繁忙，请稍后再试</Page>
  }
  return null
}

export default LoadingComponent