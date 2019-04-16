import styled from 'styled-components'

export default styled.div`
  header{
    margin-bottom: 10px;
  }
  section{
    padding: 15px 30px;
    margin-bottom: 10px;
    background: #fff;
  }
  h2{
    color: #fff;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    margin: 5px 5px 10px 5px;
    &.purple{
      background: #755cf8;
    }
    &.blue{
      background: #32a6e2;
    }
    &.blue-deep{
      background: #4090fa;
    }
    &.orange{
      background: linear-gradient(to right, #f6744d, #f68850);
    }
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    margin: 0 7px;
  }
  .item-box{
    width: 50%;
  }
  .item{
    display: block;
    margin: 5px;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 50px 0 rgba(12, 16, 20, .2);
    .name{
      font-size: 12px;
      text-align: center;
      word-break: break-all;
    }
    .icon{
      display: block;
      margin: 0 auto 5px;
      width: 25px;
      height: 25px;
    }
  }
`