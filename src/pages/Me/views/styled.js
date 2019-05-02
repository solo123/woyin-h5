import styled from 'styled-components'

import headerBg from '@/asset/images/me/bg.jpg'

export default styled.div`
  padding-bottom: 50px;

  header{
    color: #fff;
    padding: 0 15px 15px 15px;
    background: url(${headerBg}) top center no-repeat;
    background-size: cover;
    .top{
      text-align: right;
      padding: 0 20px;
      .email{
        margin: 8px 0;
        width: 20px;
        height: 20px;
      }
    }
    .card{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      color: #333;
      background: #fff;
      border-radius: 5px;
      .profile{
        width: 60px;
        height: 60px;
      }
      .icon{
        width: 20px;
        height: 20px;
      }
    }
  }

  .service{
    display: flex;
    padding: 15px 0;
    background: #fff;
    &__title{
      font-size: 16px;
      font-weight: bold;
    }
    &__cell {
      flex: 1;
      a{
        text-align: center;
        display: block;
      }
    }
    &__icon{
      width: 25px;
      display: block;
      margin: 0 auto 5px auto;
    }
  }

  section{
    background: #fff;
    .item{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;    
      padding: 15px;
      &:after{
        content: " ";
        position: absolute;
        left: 15px;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        transform: scaleY(0.5);
      }
      &:last-child:after{
        content: none;
      }
      &__icon{
        width: 25px;
        margin-right: 5px;
      }
      &__label{
        flex-grow: 1;
        color: #444;
      } 
      &__arrow{
        width: 15px;
        height: 15px;
      }           
    }
  }

  .ruler{
    li{
      color: #666;
      font-size: 14px;
      padding-bottom: 15px;      
      &:last-child{
        padding-bottom: 0;
      }
    }    
  }
`