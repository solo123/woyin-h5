import styled from 'styled-components'

export default styled.div`
  h1{
    font-size: 16px;
    font-weight: bold;
  }
  h2{
    font-weight: bold;
    margin-bottom: 10px;
  }
  .list{
    padding: 0 15px;
    background: #fff;
  }
  .item{
    position: relative;
    padding: 15px 0;
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
  dl{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
`