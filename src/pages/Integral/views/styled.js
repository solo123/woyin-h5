import styled from 'styled-components'

export default styled.div`
  header{
    position: relative;
    padding: 5px 10px;
    background: #fff;
    .content{
      position: absolute;
      top: 12%;
      left: 8%;
      color: #e1e1e1;
      .integral{
        margin-bottom: 3%;
        .info{
          margin-bottom: 10px;
        }
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
  .link{
    text-align: right;
    margin-right: 15px;
    a{
      font-size: 12px;
      color: #1c92ff;
    }
  }
`