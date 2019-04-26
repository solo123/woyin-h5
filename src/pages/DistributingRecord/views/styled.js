import styled from 'styled-components'

export default styled.div`
  main{
    h2{
      font-size: 16px;
      padding: 15px;
      background: #fff;
    }
    .list{
      .item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: #fff;
        position: relative;
        &:after{
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          height: 1px;
          border-bottom: 1px solid #e5e5e5;
          transform: scaleY(0.5);
        }   
        h3{
          font-size: 14px;
          font-weight: bold;
        }
        .date{
          color: #888;
        } 
        .integral{
          color: #58a1ff;
          font-size: 16px;
          font-weight: bold;
        }    
      }
    }
  }

`