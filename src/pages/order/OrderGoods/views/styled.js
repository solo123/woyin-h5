import styled from 'styled-components'

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  ul{
    display: flex;
    flex-shrink: 0;
    line-height: 60px;
    background: #fff;
    li{
      flex: 1;
      text-align: center;
      transition: all .3s ease;
      color: #888;
      &.active{
        color: #444;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .container{
    flex-shrink: 1;
    flex-grow: 1;
    overflow-y: auto;
  }    

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
`