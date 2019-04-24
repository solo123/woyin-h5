import styled from 'styled-components'

export default styled.div`
  padding: 15px;
  background: #fff;
  .trigger-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      width: 25px;
      height: 25px;
    }
  }
  .empty{
    color: #888;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .bankcard{
    display: flex;
    .icon{
      width: 50px;
      height: 50px;
    }
    .card{
      font-family: industry;
    }
    .main{
      flex: 1;
      .name{
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
  .input-box{
    padding: 15px;
    background: #f4f4f4;
  }
  .small-text{
    color: #888;
    font-size: 12px;
  }

  .checkbox{
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  .flex-y-center{
    display: flex;
    align-items: center;
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
  .loading{
    display: flex;
    &__head{
     width: 50px;
     height: 50px;
     background: #eaeaea;
    }
    &__main{
      flex: 1;
      margin-left: 15px;
    }
    &__line{
      height: 20px;
      background: #eaeaea;
    }
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .protocol {
    margin-left: 15px;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
    li{
      list-style: decimal;
      margin-bottom: 10px;
    }
    table {
      color: #666;
      width: 100%;
      margin: 10px 0;
      th {
        font-weight: normal;
        padding: 10px;
        border: 1px dashed #888;
        white-space: nowrap;
      }
      td{
        border: 1px dashed #888;
        padding: 10px;
      }
    }
  }
`