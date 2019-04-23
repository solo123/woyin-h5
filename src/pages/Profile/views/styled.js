import styled from 'styled-components'

export default styled.div`
  padding-top: 15px;
  main{
    background: #fff;
    dl{
      display: flex;
      justify-content: space-between;
      padding: 15px;
      position: relative;
      &:after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        transform: scaleY(0.5);
      }
      &:last-child:after{
        content: none;
      }    
    }
  }
`