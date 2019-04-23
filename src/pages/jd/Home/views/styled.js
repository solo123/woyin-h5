import styled from 'styled-components'

export default styled.div`
  .top{
    position: absolute;
    left: 10px;
    top: 10px;
    img{
      width: 30px;
      height: 30px;
    }
  }
  header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: #da251c;
    .slogan{
      width: 150px;
    }
  }
  nav{
    overflow-x: auto;
    background: #fff;
    ul{
      line-height: 50px;
      display: flex;
      li{
        padding: 0 20px;
        flex-shrink: 0;
        &.active{
          color: red;
        }
      }
    }
  }
  .layout{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 5px;    
    &-item{
      width: 50%;
    }
  }
  .product{
    display: block;
    padding: 10px;
    margin: 5px;
    background: #fff;
    &-title{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: bold;
      margin-bottom: 10px;      
    }
    &-price{
      color: #F53415;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &-info{
      display: flex;
      justify-content: space-between;
    }
    span{
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 3px;
      color: #888;
      background: #F2F2F2;      
    }
    &-btn{
      background: #F63618;
    }
  }
`