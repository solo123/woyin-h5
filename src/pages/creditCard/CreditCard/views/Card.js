import React from 'react'
import {Link} from "react-router-dom"

import util from '@/util'

import plus from '@/asset/images/creditCard/plus.png'
import arrow from '@/asset/images/icon/arrow_right.svg'

function Card({hasCard, handleOpenPicker, data}) {
  if(hasCard) {
    return (
      <div className="u_p_xxx u_mb_xx u_bg_white">
        <div className="card">
          <div className="aside">
            <img className="icon" src={util.getBankCardLogo(data.bankCode)} alt=""/>
          </div>
          <div className="main">
            <p className="title">{data.bankName} (尾号<span>{util.getBankcardLastNum(data.bankCard)}</span>)</p>
            <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
          </div>
          <div className="foot">
            <img className="arrow" onClick={handleOpenPicker} src={arrow} alt=""/>
          </div>
        </div>          
      </div>      
    )
  }

  return (
    <div className="empty">
      <Link to={{
        pathname: "bankcard-add",
        state: {from: '/credit-card'}
      }}>
        <div className="wrap">
          <img className="icon" src={plus} alt=""/>
          <p>请添加信用卡</p>
        </div>
      </Link>
      <p className="text">暂无可用</p>
    </div>
  )
}

export default Card