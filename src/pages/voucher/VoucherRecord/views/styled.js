import styled from 'styled-components'

export default styled.div`
  .page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;    
    .page-head{
      height: 50px;
    }
    .page-body{
      position: relative;
      flex-grow: 1;
    }
  }
  .wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;    
    overflow-y: auto;
  }
  .selecter{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
    background: #fff;
    img{
      width: 15px;
      height: 15px;
      margin-left: 5px;
      transition: transform .3s;
      &.active{
        transform: rotate(180deg);
      }
    }
  }
  .card{
    border-radius: 3px;
    padding: 15px;
    background: #fff;
    margin-bottom: 15px;
    .head{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .title{
        font-size: 16px;
        font-weight: bold;
      }
      .subtitle{
        color: #888;
      }
    }
    dl{
      display: flex;
      dt{
        color: #888;
      }
    }
    .date{
      color: #888;
      font-size: 12px;
      text-align: right;
      padding-top: 5px;
    }
  }
`