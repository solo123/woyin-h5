import React from 'react'

import util from '@/util'

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__head"></div>
      <div className="loading__main">
        <div className="loading__line" style={{width: '50%', marginBottom: 10}}></div>
        <div className="loading__line"></div>
      </div>
    </div>
  )
}

const BankCard = ({loading, hasCard, data}) => {
  if(loading) {
    return <Loading/>
  }  

  if(hasCard) {
    return (
      <div className="bankcard">
        <div className="aside">
          <img className="icon" src={util.getBankCardLogo(data.bankCode)} alt=""/>
        </div>
        <div className="main" style={{marginLeft: 15}}>
          <p className="name">{data.bankName}(尾号<span className="card">{util.getBankcardLastNum(data.bankCard)}</span>)</p>
          <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
        </div>
      </div>
    )
  }

  return <div className="empty">暂无可用银行卡</div>
}

export default BankCard