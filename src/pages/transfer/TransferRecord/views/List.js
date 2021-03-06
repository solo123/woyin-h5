import React from 'react'
import dayjs from 'dayjs'

import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

const ItemToOther= ({toAccount, poundage, amount, num, createTime}) => {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__title">转赠积分</div>
      </div>
      <div className="card__body">
        <div>您向 <strong>{toAccount}</strong> 转赠 <strong>{amount}</strong> 积分 手续费 <strong>{poundage}</strong> 积分 对方实际收到 <strong>{num}</strong> 积分</div>
      </div>
      <div className="card__foot">
        <div className="gray">{createTime}</div>
      </div>
    </div>
  )
}

const ItemFromMe = ({from, num, remark, operationId, createTime}) => {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__title">获得积分</div>
        <div className="card__status">{remark}</div>
      </div>
      <div className="card__body">
        <div>用户 <strong>{from}</strong> 向您转赠 <strong>{num}</strong> 积分</div>
      </div>
      <div className="card__foot">
        <div className="gray">{createTime}</div>
        <div className="gray">{operationId && 'OP端操作'}</div>
      </div>
    </div>
  )
}

const List = ({items, type}) => {
  if(!items.length) {
    return (
      <EmptyArrayPlaceholder />
    )
  }
  if(type === '1') {
    return (
      <div>
        {
          items.map(item => {
            return (
              <ItemToOther 
                key={item.id}
                amount={item.total}
                toAccount={item.toAccount}
                num={item.num}
                poundage={item.poundage}
                remark={item.remark}
                createTime={dayjs.unix(item.createTime).format('YYYY-MM-DD HH:mm:ss')}
              />
            )
          })
        }
      </div>
    )
  }else if(type === '2') {
    return (
      <div>
        {
          items.map(item => {
            return (
              <ItemFromMe 
                key={item.id}
                amount={item.total}
                from={item.form}
                num={item.num}
                poundage={item.poundage}
                remark={item.remark}
                operationId={item.operationId}
                createTime={dayjs.unix(item.createTime).format('YYYY-MM-DD HH:mm:ss')}
              />
            )
          })
        }
      </div>
    )    
  }else {
    return null
  }
}


export default List
