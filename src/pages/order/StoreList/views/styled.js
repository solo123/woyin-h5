import styled from 'styled-components'

export default styled.div`
  .list{
    .item{
      display: block;
      margin: 15px;
      background: #fff;
      .head{
        position: relative;
        display: flex;
        justify-content: space-between;
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
        .title{
          font-size: 16px;
          font-weight: bold;
        }
      }
      .body{
        display: flex;
        justify-content: space-between;
        padding: 15px;    
      }
      .foot{
        display: flex;
        justify-content: space-between;
        padding: 0 15px 15px 15px;            
      }
    }
  }

  .container{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
  }  
`