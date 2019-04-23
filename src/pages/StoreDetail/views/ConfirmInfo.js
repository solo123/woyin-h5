import React from 'react'
import Operator from '@/common/Operator'

function ConfirmInfo({count, totalIntegral, balance, handleClick, handleChange, handleSubmit}) {
  return (
    <div className="confirm-info">
      <div className="main">
        <span className="badge">可用积分：{balance}</span>
        <ul>
          <li>
            <div>使用积分：</div>
            <div>{totalIntegral}</div>
          </li>
          <li>
            <div>数量</div>
            <div>
              <Operator 
                count={count}
                onClick={handleClick}
                onChange={handleChange}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="confirm-btn" onClick={handleSubmit}>确认</div>
    </div>
  )
}

export default ConfirmInfo