import React from 'react'
import classnames from 'classnames'

import ykIcon from '@/asset/images/video/icon_yk.png'
import iqyIcon from '@/asset/images/video/icon_iqy.png'
import kgIcon from '@/asset/images/video/icon_kg.png'
import kwIcon from '@/asset/images/video/icon_kw.png'
import mgtvIcon from '@/asset/images/video/icon_mgtv.png'
import qqyyIcon from '@/asset/images/video/icon_qqyy.png'
import shIcon from '@/asset/images/video/icon_sh.png'
import txspIcon from '@/asset/images/video/icon_txsp.png'

const ICON_SCHEMA = {
  '16': txspIcon,
  '17': iqyIcon,
  '3': txspIcon,
  '4': txspIcon,
  '5': mgtvIcon,
  '6': shIcon,
  '7': qqyyIcon,
  '8': kgIcon,
  '9': kwIcon,
  '22': ykIcon
}

function Item({id, selectId, name, icon, selectProvider}) {
  const itemClass = classnames('item', {'active': id === selectId})
  return (
    <div className={itemClass} onClick={() => selectProvider(id)}>
      <img className="icon" src={icon} alt="" />
      <p>{name}</p>
    </div>
  )
}

function List({selectId, items, selectProvider}) {
  return (
    <div className="provider-list">
    {items.map(item => {
      return (
        <Item 
          key={item.productClassifyId} 
          id={item.productClassifyId}
          selectId={selectId}
          name={item.productClassifyName}
          icon={ICON_SCHEMA[item.productClassifyId] || ykIcon} 
          selectProvider={selectProvider}
        />
      )
    })}
    </div>
  )
}

export default List