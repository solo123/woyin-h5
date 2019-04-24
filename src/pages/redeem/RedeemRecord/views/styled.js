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
  .fixed-top-selecter{
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;
    z-index: 1;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-left: 15px;
      padding-bottom: 15px;
      background: #fff;
      border-bottom: 1px solid #eaeaea;
      li{
        font-size: 12px;
        margin-top: 10px;
        margin-right: 10px;
        padding: 7px 15px;
        border: 1px solid #eaeaea;
        &.active{
          color: rgb(77, 123, 254);
          border-color: rgb(77, 123, 254);
        }
      }
    }
  }
  .card{
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);
    &__head{
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: 15px;
      &:after{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        transform: scaleY(.3);
        background: #eaeaea;
      }
    }
    &__body{
      padding: 15px 15px 0 15px;
    }
    &__foot{
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      padding: 15px;
    }
    &__title{
      font-size: 16px;
      font-weight: bold;
    }
    &__status{
      font-size: 12px;
    }
    &__date{
      color: #7e7e7e;
    }
  }
`