import React from 'react'

import config from '@/config'

import closeIcon from '@/asset/images/icon/close.png'
import showIcon from '@/asset/images/icon/show.png'
import hideIcon from '@/asset/images/icon/hide.png'

const ICON_SCHEMA = {
  text: showIcon,
  password: hideIcon
}

function TradePswd(props) {
  const {
    oldTradePswd, oldTradePswdClean, oldTradePswdType,
    newTradePswd, newTradePswdClean, newTradePswdType,
    confNewTradePswd, confNewTradePswdClean, confNewTradePswdType,

    handleChange, handleFocus, handleBlur, handleOldTradePswdClean, 
    handleToggleOldTradePswd, handleNewTradePswdClean, handleToggleNewTradePswd,
    handleConfNewTradePswdClean, handleToggleConfNewTradePswd    
  } = props

  return (
    <div className="group-list">
      <div className="group">
        <div className="group__body">
          <input
            className="input"
            type={oldTradePswdType}
            name="oldTradePswd"
            value={oldTradePswd} 
            maxLength={config.pswd.PSWD_DIGIT}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="请输入旧的交易密码"
          />
        </div>
        <div className="group__foot">
          <img 
            className="group__clean-btn"
            style={{visibility: oldTradePswdClean ? 'visible' : 'hidden'}} 
            onClick={handleOldTradePswdClean} 
            src={closeIcon} 
            alt="清空" 
          />
          <img 
            className="group__toggle-btn"
            onClick={handleToggleOldTradePswd} 
            src={ICON_SCHEMA[oldTradePswdType]}
            alt="切换" 
          /> 
        </div>
      </div>
      <div className="group">
        <div className="group__body">
          <input
            className="input"
            type={newTradePswdType} 
            name="newTradePswd"
            value={newTradePswd} 
            maxLength={config.pswd.PSWD_DIGIT}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={`请输入${config.pswd.PSWD_DIGIT}位数新密码`}
          />
        </div>
        <div className="group__foot">
          <img 
            className="group__clean-btn"
            style={{visibility: newTradePswdClean ? 'visible' : 'hidden'}} 
            onClick={handleNewTradePswdClean} 
            src={closeIcon} 
            alt="清空" 
          />
          <img 
            className="group__toggle-btn"
            onClick={handleToggleNewTradePswd} 
            src={ICON_SCHEMA[newTradePswdType]}
            alt="切换" 
          />            
        </div>
      </div>
      <div className="group">
        <div className="group__body">
          <input
            className="input"
            type={confNewTradePswdType} 
            name="confNewTradePswd"
            value={confNewTradePswd} 
            maxLength={config.pswd.PSWD_DIGIT}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="确认新密码"
          />
        </div>
        <div className="group__foot">
          <img 
            className="group__clean-btn"
            style={{visibility: confNewTradePswdClean ? 'visible' : 'hidden'}} 
            onClick={handleConfNewTradePswdClean} 
            src={closeIcon} 
            alt="清空" 
          />
          <img 
            className="group__toggle-btn"
            onClick={handleToggleConfNewTradePswd} 
            src={ICON_SCHEMA[confNewTradePswdType]}
            alt="切换" 
          />                
        </div>
      </div>
    </div>    
  )
}

export default TradePswd