import React, { Component } from 'react'
import styled from 'styled-components'

export default function() {
  return (
    <div style={{display: 'flex', margin: '0 5px'}}>
      <div style={{flex: '1', background: '#eaeaea'}}></div>
      <div style={{flex: '1', marginLeft: 10}}>
        <div style={{height: 80, background: '#eaeaea', marginBottom: 10}}></div>
        <div style={{height: 80, background: '#eaeaea'}}></div>
      </div>
    </div>
  )
}