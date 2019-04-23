import React from 'react'

import config from '@/config'

import closeIcon from '@/asset/images/icon/close.png'
import showIcon from '@/asset/images/icon/show.png'
import hideIcon from '@/asset/images/icon/hide.png'

const ICON_SCHEMA = {
  text: showIcon,
  password: hideIcon
}

function LoginPswd(props) {
  const {
    oldLoginPswd, oldLoginPswdClean, oldLoginPswdType,
    newLoginPswd, newLoginPswdClean, newLoginPswdType,
    confNewLoginPswd, confNewLoginPswdClean, confNewLoginPswdType,

    handleChange, handleFocus, handleBlur, handleOldLoginPswdClean, 
    handleToggleOldLoginPswd, handleNewLoginPswdClean, handleToggleNewLoginPswd,
    handleConfNewLoginPswdClean, handleToggleConfNewLoginPswd    
  } = props

  return (
    <div className="group-list">
      <div className="group">
        <div className="group__body">
          <input
            className="input"
            type={oldLoginPswdType}
            name="oldLoginPswd"
            value={oldLoginPswd} 
            maxLength={config.pswd.PSWD_DIGIT}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="请输入旧的登录密码"
          />
        </div>
        <div className="group__foot">
          <img 
            className="group__clean-btn"
            style={{visibility: oldLoginPswdClean ? 'visible' : 'hidden'}} 
            onClick={handleOldLoginPswdClean} 
            src={closeIcon} 
            alt="清空" 
          />
          <img 
            className="group__toggle-btn"
            onClick={handleToggleOldLoginPswd} 
            src={ICON_SCHEMA[oldLoginPswdType]}
            alt="切换" 
          /> 
        </div>
      </div>
      <div className="group">
        <div className="group__body">
          <input
            className="input"
            type={newLoginPswdType} 
            name="newLoginPswd"
            value={newLoginPswd} 
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
            style={{visibility: newLoginPswdClean ? 'visible' : 'hidden'}} 
            onClick={handleNewLoginPswdClean} 
            src={closeIcon} 
            alt="清空" 
          />
          <img 
            className="group__toggle-btn"
            onClick={handleToggleNewLoginPswd} 
            src={ICON_SCHEMA[newLoginPswdType]}
            alt="切换" 
          />            
        </div>
      </div>
      <div className="group">
        <div className="group__body">
          <input
            className="input"
            type={confNewLoginPswdType} 
            name="confNewLoginPswd"
            value={confNewLoginPswd} 
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
            style={{visibility: confNewLoginPswdClean ? 'visible' : 'hidden'}} 
            onClick={handleConfNewLoginPswdClean} 
            src={closeIcon} 
            alt="清空" 
          />
          <img 
            className="group__toggle-btn"
            onClick={handleToggleConfNewLoginPswd} 
            src={ICON_SCHEMA[confNewLoginPswdType]}
            alt="切换" 
          />                
        </div>
      </div>
    </div>    
  )
}

export default LoginPswd