import styled from 'styled-components'

export default styled.div`
  margin: 15px;
  .form{
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
    .close-btn{
      width: 25px;
      height: 25px;
    }
  }
  .group{
    position: relative;
    padding: 15px;
    display: flex;
    align-items: center;
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
      margin-left: 10px;
    }
  }
`