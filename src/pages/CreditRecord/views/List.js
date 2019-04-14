import React from 'react'
import util from '@/util'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

const STATUS_SCHEMA = {
  '10': '新建',
  '11': '受理成功',
  '12': '处理成功', 
  '13': '失败', 
  '14': '待审核', 
  '15': '审核通过', 
  '16': '审核拒绝', 
  '17': '已确认'
}

const Item = ({status, poundage, amount, createTime}) => {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__title">信用卡还款</div>
        <div className="card__status">{status}</div>
      </div>
      <div className="card__body">
        <div>扣除{Number(amount) + Number(poundage)}积分 手续费{poundage}积分 实际到账{amount / 100}元</div>
      </div>
      <div className="card__foot">
        <div className="card__date">{createTime}</div>
        <div>{amount} 积分</div>
      </div>
    </div>
  )
}

const List = ({items}) => {
  if(!items.length) {
    return (
      <EmptyArrayPlaceholder />
    )
  }
  return (
    <div>
      {
        items.map(item => {
          return (
            <Item 
              key={item.orderId}
              amount={item.amount}
              poundage={item.poundage}
              createTime={util.formatTimestamp(item.createTime)}
              status={STATUS_SCHEMA[item.status]}
            />
          )
        })
      }
    </div>
  )
}

export default List