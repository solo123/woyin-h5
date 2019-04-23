import React from 'react'

import fzIcon from '@/asset/images/bank/fz.svg'
import gdIcon from '@/asset/images/bank/gd.svg'
import gsIcon from '@/asset/images/bank/gs.svg'
import hxIcon from '@/asset/images/bank/hx.svg'
import jsIcon from '@/asset/images/bank/js.svg'
import jtIcon from '@/asset/images/bank/jt.svg'
import msIcon from '@/asset/images/bank/ms.svg'
import nyIcon from '@/asset/images/bank/ny.svg'
import paIcon from '@/asset/images/bank/pa.svg'
import shIcon from '@/asset/images/bank/sh.svg'
import shfzIcon from '@/asset/images/bank/shfz.svg'
import xyIcon from '@/asset/images/bank/xy.svg'
import yzIcon from '@/asset/images/bank/yz.svg'
import zgIcon from '@/asset/images/bank/zg.svg'
import zsIcon from '@/asset/images/bank/zs.svg'
import zxIcon from '@/asset/images/bank/zx.svg'
import defaultIcon from '@/asset/images/bank/default.svg'

const BANKCARD_SCHEMA = {
  'GDB' : fzIcon,
  'CEB' : gdIcon,
  'ICBC' : gsIcon,
  'HXB' : hxIcon,
  'CCB' : jsIcon,
  'COMM' : jtIcon,
  'CMBC' : msIcon,
  'ABC' : nyIcon,
  'SZPAB' : paIcon,
  'BOS' : shIcon,
  'SPDB' : shfzIcon,
  'CIB' : xyIcon,
  'PSBC' : yzIcon,
  'BOC' : zgIcon,
  'CMB' : zsIcon,
  'CITIC' : zxIcon
}

// 绑定状态 0 待处理　１绑定成功　２绑定失败　３冻结
const STATUS_SCHEMA = [
  '待处理',
  '绑定成功',
  '绑定失败',
  '冻结'
]

const Item = ({id, status, bankcardNo, bankcardName, bankcardIcon, handleDel}) => {
  return (
    <div className="card">
      <div className="card__aside">
        <img className="card__logo" src={bankcardIcon} alt="" />
      </div>
      <div className="card__main">
        <div className="card__group">
          <h2 className="card__title">{bankcardName}</h2>
          <span onClick={handleDel}>删除</span>
        </div>
        <label className="card__label">{status}</label>
        <div className="card__no">{bankcardNo}</div>
      </div>
    </div>
  )
}

const List = ({items, handleDel}) => (
  <div>
    {items.map(item => (
      <Item 
        key={item.bankCard}
        id={item.bankCard}
        status={STATUS_SCHEMA[item.status]}
        bankcardNo={item.bankCard}
        bankcardName={item.bankName}
        bankcardIcon={BANKCARD_SCHEMA[item.bankCode] || defaultIcon}
        handleDel={() => handleDel(item.id)}
      />
    ))}
  </div>
)

export default List