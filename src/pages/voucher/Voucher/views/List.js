import React from 'react'
import {Link} from 'react-router-dom'

import appleIcon from '@/asset/images/ecard/apple.png'
import bgyIcon from '@/asset/images/ecard/bgy.png'
import bskIcon from '@/asset/images/ecard/bsk.png'
import dqIcon from '@/asset/images/ecard/dq.png'
import hgdsIcon from '@/asset/images/ecard/hgds.png'
import jdIcon from '@/asset/images/ecard/jd.png'
import kdjIcon from '@/asset/images/ecard/kdj.png'
import qcsIcon from '@/asset/images/ecard/qcs.png'
import snIcon from '@/asset/images/ecard/sn.png'
import tmIcon from '@/asset/images/ecard/tm.png'
import wnIcon from '@/asset/images/ecard/wn.png'
import xbkIcon from '@/asset/images/ecard/xbk.png'
import xcIcon from '@/asset/images/ecard/xc.png'
import ymxIcon from '@/asset/images/ecard/ymx.png'

const iconSchema = {
  '19': jdIcon,
  '20': tmIcon,
  '2': snIcon,
  '3': ymxIcon,
  '5': xcIcon,
  '6': xcIcon,
  '7': hgdsIcon,
  '8': kdjIcon,
  '9': bskIcon,
  '10': xbkIcon,
  '11': dqIcon,
  '12': bgyIcon,
  '13': appleIcon,
  '14': wnIcon,
  '15': qcsIcon
}

function Item({id, name}) {
  return (
    <div className="item-box">   
      <Link className="item" to={`/recharge-voucher/${id}`}>
        <img className="icon" src={iconSchema[id]} alt="" />
        <p className="name">{name}</p>
      </Link>
    </div>
  )
}

function List({items}) {
  return (
    <div className="list">
    {items.map(item => {
      return (
        <Item
          key={item.productClassifyId}
          id={item.productClassifyId}
          name={item.productClassifyName}
        />
      )
    })}
    </div>
  )
}

export default List