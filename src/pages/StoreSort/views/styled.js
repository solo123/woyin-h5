import styled, {createGlobalStyle} from 'styled-components'

export default styled.div`
  .layout{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    &__aside{
      width: 100px;
      background: #f7f7f8;
      overflow-y: auto;
    }   
    &__main{
      flex: 1;
      overflow-y: auto;
      background: #fff;
    }
  }
  .menu{
    li{
      padding: 15px;
    }
  }
  .product{
    position: relative;
    padding: 15px;
    background: #fff;
    display: flex;
    &:after{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: #eaeaea;
      transform: scaleY(.3);      
    }
    &__thumb{
      width: 100px;
      height: 100px;
    }
    &__title{
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    &__main{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
    }
    &__info{
      display: flex;
      justify-content: space-between;
    }
    &__price{
      color: #F53415;
      font-weight: bold;
    }
    &__label{
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 3px;
      color: #7e7e7e;
      background: #F2F2F2;  
      &--primary{
        color: #fff;
        background: #F63618;
      }           
    }
  }
`