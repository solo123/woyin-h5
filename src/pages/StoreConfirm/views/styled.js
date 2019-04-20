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