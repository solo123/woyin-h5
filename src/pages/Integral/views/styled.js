import styled from 'styled-components'

export default styled.div`
  header{
    position: relative;
    margin: 0 5px;
    background: #fff;
    .content{
      position: absolute;
      top: 15%;
      left: 8%;
      color: #e1e1e1;
      .integral{
        margin-bottom: 8%;
      }
      strong{
        color: #fff;
        font-size: 30px;
      }
      a{
        color: #e1e1e1;
        font-size: 12px;
        padding: 2px 10px;
        border-radius: 8px;
        border: 1px solid #e1e1e1;
      }
    }
  }
  nav{
    display: flex;
    margin-bottom: 10px;
    background: #fff;
    a{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      img{
        width: 50px;
        margin-right: 5px;
      }
    }
  }  
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