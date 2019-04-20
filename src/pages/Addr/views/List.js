import React  from 'react'

import locationIcon from '@/asset/images/location.svg'

function Item({use, defaultAddress, handleDelete, handleSelect}) {
  return (
    <div className="addr" onClick={handleSelect}>
      <div className="addr__head">
        <img className="addr__icon" style={use ? {visibility: 'visible'} : {visibility: 'hidden'}} src={locationIcon} alt=""/>
      </div>
      <div className="addr__body">
        <div className="addr__info">
          高强 15014095291 {defaultAddress && <label className="addr__label">默认</label>}
        </div>
        <div>广东省深圳市福田区福华三路时代财富大厦43d</div>
      </div>
      <div className="addr__foot">
        <span className="addr__del" onClick={handleDelete}>删除</span>
      </div>
    </div>    
  )
}

function List({items, handleDelete, handleSelect}) {
  return (
    <div>
      {items.map(addr => {
        return (
          <Item
            key={addr.id}
            use={addr.use}
            defaultAddress={addr.defaultAddress}
            handleDelete={() => handleDelete(addr.id)}
            handleSelect={() => handleSelect(addr.id)}
          />
        )
      })}
    </div>
  )
}

export default List