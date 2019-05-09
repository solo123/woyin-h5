import styled from 'styled-components'

import checked from '@/asset/images/video/checked.png'

export default styled.div`
  header{
    position: relative;
    padding: 15px;
    margin-bottom: 15px;
    background: linear-gradient(to right,#e6c283,#99703d);
  }
  .provider-list{
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    .item{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex-direction: column;
      padding: 20px 0;
      width: 25%;   
      font-size: 12px;   
      &.active{
        color: #935e1d;
      }
      .icon{
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }      
    }
  }
  section{
    background: #fff;
  }
  ul{
    li.active{
      color: #935e1d;
    }
  }
  .input-box{
    padding: 12px;
    border: 1px solid #eaeaea;
  }
  .product-list{
    display: flex;
    flex-wrap: wrap;
    .item{
      width: 33.33%;
      padding: 0 5px 10px 5px;
      &__inner{
        position: relative;
        padding: 10px;
        height: 100%;
        font-size: 12px;
        border-radius: 2px;
        border: 1px solid #eaeaea;
        &.active{
          border-color: #a67a45;
          background-color: #faf2dd;
          &:after{
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            background: url(${checked}) center top no-repeat;
            background-size: 100%;
            width: 20px;
            height: 20px;
          }
        }
      }
      &__money{
        font-size: 16px;
        font-weight: bold;
      }
      &__integral{
        color: #7a7a7a;
        font-size: 12px;
      }
    }
  }
`