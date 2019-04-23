import styled from 'styled-components'

export default styled.div`
  padding-bottom: 40px;

  .addr{
    position: relative;
    display: flex;
    padding: 15px;
    background: #fff;
    &:after{
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #e5e5e5;
      transform: scaleY(0.5);
    }    
    &__head{
      padding-top: 5px;
      margin-right: 15px;
    }
    &__label{
      font-size: 12px;
      color: #fff;
      padding: 2px 5px;
      border-radius: 3px;
      font-weight: normal;
      background-color: #cd201f;
    }
    &__del{
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 3px;
      font-weight: normal;
      color: #6e7687;
      background-color: #e9ecef;  
    }
    &__icon{
      width: 25px;
      height: 25px;
    }
    &__body{
      flex: 1;
      margin-right: 15px;
    }
    &__info{
      font-size: 16px;
      font-weight: bold;
    }
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .btn-list{
    display: flex;
    &>div{
      flex: 1;
      line-height: 40px;
      text-align: center;
      background: #fff;
      &:first-child{
        color: #fff;
        background: #ccc;
      }
      &:last-child{
        color: #fff;
        background: #1c92ff;
      }
    }
  }
`