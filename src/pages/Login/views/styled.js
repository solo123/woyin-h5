import styled from 'styled-components'

export default styled.div`
  header{
    padding: 20px 15px;
    h1{
      font-size: 22px;
      font-weight: normal;
    }
  }
  main{
    margin: 0 15px;
  }
  .group-list{
    border-radius: 3px;
    background: #fff;
    margin-bottom: 15px;
  }
  .group{
    position: relative;
    padding: 15px 0;
    display: flex;
    align-items: center;
    &:after{
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #eaeaea;
      transform: scaleY(0.5);
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
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    &__body{
      flex: 1;
    }    
    .link {
      color: #ff0000;
      font-size: 12px;
      border: 0;
      background: transparent;
    }
  }
  .link {
    color: #ff0000;
    font-size: 12px;
    border: 0;
    margin-left: 5px;
    background: transparent;
  }
  .label{
    display: flex;
    align-items: center;
    color: #ff0000;
    font-size: 12px;
    img{
      width: 16px;
      height: 16px;
      margin-right: 3px;
    }
  }
`
