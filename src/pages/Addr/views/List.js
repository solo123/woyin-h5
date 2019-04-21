import React  from 'react'

import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'
import locationIcon from '@/asset/images/location.svg'

function Item({use, name, phone, province, city, country, town, addr, defaultAddress, handleDelete, handleSelect}) {
  return (
    <div className="addr" onClick={handleSelect}>
      <div className="addr__head">
        <img className="addr__icon" style={use ? {visibility: 'visible'} : {visibility: 'hidden'}} src={locationIcon} alt=""/>
      </div>
      <div className="addr__body">
        <div className="addr__info">
          {name} {phone} {defaultAddress && <label className="addr__label">默认</label>}
        </div>
        <div>{province}{city}{country}{town} {addr}</div>
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

export default List