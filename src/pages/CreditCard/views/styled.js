import styled from 'styled-components'

export default styled.div`
  .info{
    color: #888;
    font-size: 12px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
  }
  .card{
    display: flex;
    align-items: center;
    .icon{
      width: 40px;
      height: 40px;
      display: block;
    }
    .main{
      flex: 1;
      margin-left: 10px;
      p{
        margin: 0;
      }
      .title{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .text{
        line-height: 1.5;
        font-size: 12px;
        color: #888;
      }
    }    
  }
  .empty{
    text-align: center;
    position: relative;
    margin-top: -30px;
    .wrap{
      font-size: 16px;
      background: #fff;
      margin: 15px 15px 0 15px;
      padding: 15px 15px 20px 15px;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
    }
    .icon{
      width: 20px;
      height: 20px;
    }
    .text{
      padding: 5px 0;
      color: #888;
    }
  }
  .input-box{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #eaeaea;
    .tip{
      font-size: 12px;
      color: #ee6076;
      flex-shrink: 0;
    }
  }
  .group{
    display: flex;
    align-items: center;
    &__body{
      flex: 1;
    }
    &__foot{
      margin-left: 10px;
    }
  }  
`
