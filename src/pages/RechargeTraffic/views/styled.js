import styled from 'styled-components'

import banner from '@/asset/images/recharge/banner.png'
import checked from '@/asset/images/recharge/checked.png'

export default styled.div`
  header{
    padding: 30px 15px 0 15px;
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
          color: #1c92ff;
          &:after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: 3px;
            transform: translate(-50%);
            height: 2px;
            width: 60px;
            background: #1c92ff;
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
    background: #fff;
    .input-box{
      padding: 15px;
      background: #eaeaea;
    }
    .items{
      display: flex;
      flex-wrap: wrap;
      margin: 0 10px;
      .item{
        width: 33.33%;
        padding: 5px;
        .item__inner{
          position: relative;
          text-align: center;
          padding: 10px;
          border-radius: 2px;
          border: 1px solid #eaeaea;
          &.active{
            color: #3b8afc;
            border-color: #3b8afc;
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
          &__money{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          &__integral{
            font-size: 12px;
          }
        }
      }

    }
  }
`