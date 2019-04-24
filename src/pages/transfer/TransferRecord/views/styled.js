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

  ul{
    display: flex;
    flex-shrink: 0;
    line-height: 50px;
    background: #fff;
    li{
      flex: 1;
      text-align: center;
      transition: all .3s ease;
      color: #888;
      &.active{
        color: #444;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .card{
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);
    strong{
      font-weight: normal;
      color: #F53415;
    }
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
      font-size: 14px;
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