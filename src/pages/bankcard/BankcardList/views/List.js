import React from 'react'

import util from '@/util'

// 绑定状态 0 待处理　１绑定成功　２绑定失败　３冻结
const STATUS_SCHEMA = [
  '待处理',
  '绑定成功',
  '绑定失败',
  '冻结'
]

const Item = ({status, bankcardNo, bankcardName, bankcardIcon, handleClick}) => (
  <div className="card">
    <div className="card__aside">
      <img className="card__logo" src={bankcardIcon} alt="" />
    </div>
    <div className="card__main">
      <div className="card__group">
        <h2 className="card__title">{bankcardName}</h2>
        <span onClick={handleClick}>删除</span>
      </div>
      <label className="card__label">{status}</label>
      <div className="card__no">{bankcardNo}</div>
    </div>
  </div>
)

const List = ({items, handleClick}) => (
  <div>
    {items.map(item => (
      <Item 
        key={item.bankCard}
        status={STATUS_SCHEMA[item.status]}
        bankcardNo={item.bankCard}
        bankcardName={item.bankName}
        bankcardIcon={util.getBankCardLogo(item.bankCode)}
        handleClick={() => handleClick(item.id)}
      />
    ))}
  </div>
)

export default List