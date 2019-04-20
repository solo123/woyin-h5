import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  .layer{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    &__bg{
      position: fixed;
      bottom: 0;
      left: 0;
      top: 0;
      right: 0;
      z-index: 1040;
      background: rgba(0, 0, 0, .6);      
    }
    &__content{
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1050;
    }
  }  
`

function Layer({show, children, handleClose}) {
  if(show) {
    return (
      <Page>
        <div className="layer">
          <div className="layer__bg" onClick={handleClose}></div>
          <div className="layer__content">
            {children}
          </div>
        </div>
      </Page>
    )
  }
  return null
}

export default Layer