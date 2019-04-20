import styled from 'styled-components'

export default styled.div`
  padding-bottom: 40px;
  .group{
    position: relative;
    padding: 15px;
    background: #fff;
    display: flex;
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
    &__head{
      color: #888;
      width: 80px;
    }
    &__body{
      flex: 1;
    }
  }
  textarea{
    width: 100%;
    border: 0;
    outline: none;
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