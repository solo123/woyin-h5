import React from 'react'
import classnames from 'classnames'

export default function({status, flag, handleClick}) {
  if(flag) {
    return (
      <div className="fixed-selecter">
        <ul>
          <li onClick={() => handleClick('10', '新建')} className={classnames({'active': status === '10'})}>
            新建
          </li>
          <li onClick={() => handleClick('11', '受理成功')} className={classnames({'active': status === '11'})}>
            受理成功
          </li>
          <li onClick={() => handleClick('12', '处理成功')} className={classnames({'active': status === '12'})}>
            处理成功
          </li>
          <li onClick={() => handleClick('13', '失败')} className={classnames({'active': status === '13'})}>
            失败
          </li>      
          <li onClick={() => handleClick('14', '待审核')} className={classnames({'active': status === '14'})}>
            待审核
          </li>
          <li onClick={() => handleClick('15', '审核通过')} className={classnames({'active': status === '15'})}>
            审核通过
          </li>
          <li onClick={() => handleClick('16', '审核拒绝')} className={classnames({'active': status === '16'})}>
            审核拒绝
          </li>
          <li onClick={() => handleClick('17', '已确认')} className={classnames({'active': status === '17'})}>
            已确认
          </li>
        </ul>
      </div>
    )
  }
  return null
}