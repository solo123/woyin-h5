import React from 'react'

function AddrOption({value, text}) {
  return <option key={value} value={value}>{text}</option>
}

function AddrSelect({data, handleChange}) {
  let options = [<AddrOption value={0} key={0} text="请选择" />]
  data.map(item => {
    return options.push(<AddrOption value={item.value} key={item.value} text={item.text} />)
  })
  return (
    <select onChange={handleChange}>
      {options}
    </select>    
  )
}

export default AddrSelect