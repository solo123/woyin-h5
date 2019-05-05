import styled from 'styled-components'

export default styled.div`
  header{
    background: #fff;
    margin-bottom: 10px;
    h1{
      font-size: 16px;
      font-weight: bold;
    }
  }
  
  main{
    .list{
      background: #fff;
      .item{
        position: relative;
        padding: 15px;
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
    }
  }

`