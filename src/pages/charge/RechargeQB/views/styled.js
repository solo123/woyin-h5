import styled from 'styled-components'

import banner from '@/asset/images/qb/banner.jpg'
import checked from '@/asset/images/qb/checked.png'

export default styled.div`

  header{
    padding: 110px 15px 0 15px;
    background: url(${banner}) center top no-repeat;
    background-size: 100%;
    margin-bottom: 15px;
    .nav{
      display: flex;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      li{
        flex: 1;
        position: relative;
        text-align: center;
        padding: 15px 0;
        font-size: 15px;
        &.active{
          color: #ff7b00;
          &:after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: 3px;
            transform: translate(-50%);
            height: 2px;
            width: 60px;
            background: #ff7b00;
          }
        }
        .icon{
          display: block;
          width: 35px;
          margin: 0 auto 5px;
        }
      }
    }
  }
  .main{
    margin: 0 15px;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    .input-box{
      padding: 12px;
      border: 1px solid #ff7b00;
    }
    .items{
      display: flex;
      flex-wrap: wrap;
      margin: 0 10px;
      .item{
        width: 33.33%;
        padding: 5px;
        &__inner{
          position: relative;
          text-align: center;
          padding: 10px;
          border-radius: 2px;
          border: 1px solid #eaeaea;
          &.active{
            border-color: #ff7b00;
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
  }
`
