import styled from 'styled-components'

export default styled.div`
  .group-list{
    margin: 15px;
    background: #fff;
  }
  .group{
    position: relative;
    padding: 15px;
    display: flex;
    align-items: center;
    &.hide{
      display: none;
    }
    &:after{
      content: " ";
      position: absolute;
      left: 15px;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #eaeaea;
      transform: scaleY(0.5);
    }
    &:last-child:after{
      content: none;
    }
    &__body{
      flex: 1;
    }
    &__foot{
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    &__toggle-btn,
    &__clean-btn{
      width: 25px;
      height: 25px;
    }
  }
`