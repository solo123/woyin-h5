import styled from 'styled-components'

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
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
    height: 150px;
  }
  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
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
  .container{
    flex-shrink: 1;
    flex-grow: 1;
    overflow-y: auto;
  }  
`