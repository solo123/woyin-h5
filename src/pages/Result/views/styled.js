import styled from 'styled-components'

export default styled.div`
  header{
    text-align: center;
    padding: 30px 0;
    background: #fff;
    h1{
      font-size: 16px;
      padding-top: 15px;
    }
    img{
      width: 50px;
    }
  }
  ul{
    li{
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background: #fff;
      &:after{
        content: " ";
        position: absolute;
        left: 15px;
        bottom: 0;
        right: 15px;
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