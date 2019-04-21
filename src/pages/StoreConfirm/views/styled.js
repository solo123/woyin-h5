import styled from 'styled-components'

export default styled.div`
  padding-bottom: 40px;
  header{
    padding: 15px;
    background: #fff;
    margin-bottom: 15px;
    .add-bar{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .icon{
      width: 20px;
      height: 20px;
    }
    .addr{
      display: flex;
      justify-content: space-between;
      h2{
        font-size: 16px;
      }
      &__head{
        padding-top: 5px;
        margin-right: 15px;        
      }
      &__icon{
        width: 25px;
        height: 25px;
      }
      &__body{
        flex: 1;
        margin-right: 15px;
      }
      &__foot{
        display: flex;
        align-items: center;
      }
    }
  }
  main{
    padding: 15px;
    background: #fff;
    .info{
      padding: 15px;
      background: #eaeaea;
      margin-bottom: 15px;
      h2{
        margin-bottom: 15px;
      }
      li{
        display: flex;
        justify-content: space-between;
      }
    }
    .total{
      display: flex;
      justify-content: space-between;      
    }
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .submit-btn{
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      background: #1c92ff;      
    }
  }
`