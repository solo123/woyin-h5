import React from 'react'

import Page from './styled'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'
import locationIcon from '@/asset/images/location.svg'

function Item({use, name, phone, province, city, county, town, addr, defaultAddress, handleDelete, handleSelect}) {
  return (
    <div className="addr" onClick={handleSelect}>
      <div className="addr__head">
        <img className="addr__icon" style={use ? {visibility: 'visible'} : {visibility: 'hidden'}} src={locationIcon} alt=""/>
      </div>
      <div className="addr__body">
        <div className="addr__info">
          {name} {phone} {defaultAddress && <label className="addr__label">默认</label>}
        </div>
        <div>{province}{city}{county}{town} {addr}</div>
      </div>
      <div className="addr__foot">
        <span className="addr__del" onClick={handleDelete}>删除</span>
      </div>
    </div>    
  )
}

function List({items, handleDelete, handleSelect}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }

  return (
    <div>
      {items.map(addr => {
        return (
          <Item
            key={addr.id}
            {...addr}
            defaultAddress={addr.defaultAddress}
            handleDelete={(e) => handleDelete(e, addr.id)}
            handleSelect={() => handleSelect(addr.id)}
          />
        )
      })}
    </div>
  )
}

function AddrList({addrs, handleClose, handleOk, handleDelete, handleSelect}) {
  return (
    <Page>
      <List items={addrs} handleDelete={handleDelete} handleSelect={handleSelect} />
      
      <div className="fixed-bottom">
        <div className="btn-list">
          <div onClick={handleClose}>取消</div>
          <div onClick={handleOk}>新增地址</div>
        </div>
      </div>
    </Page>
  )
}

export default AddrList