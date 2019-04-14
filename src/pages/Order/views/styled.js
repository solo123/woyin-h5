import styled from 'styled-components'

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  ul{
    display: flex;
    flex-shrink: 0;
    line-height: 60px;
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
  .container{
    flex-shrink: 1;
    flex-grow: 1;
    overflow-y: auto;
  }
  .list{
    margin: 15px 15px 0 15px;
    strong{
      color: #F53415;
    }
    .item{
      background: #fff;
      margin-bottom: 15px;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.06);
      &__head{
        position: relative;
        display: flex;
        justify-content: space-between;
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
      }
      &__status{
        font-size: 12px;
      }
    }
  }
`