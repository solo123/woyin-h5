import styled from 'styled-components'

export default styled.div`
  margin-bottom: 70px;
  main{
    padding: 15px 15px 0 15px;
  }
  .card{
    display: flex;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    &__main{
      flex: 1;
      margin-left: 15px;
    }
    &__logo{
      width: 50px;
      height: 50px;
    }
    &__title{
      font-size: 16px;
      font-weight: bold;
    }
    &__group{
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &__label{
      color: #ccc;
      font-size: 12px;
      padding: 3px 5px;
      border-radius: 3px;
      background: #f2f2f2;
    }
    &__no{
      color: #666;
      font-size: 20px;
      font-weight: bold;
      margin-top: 5px;
      word-break: break-all;
      font-family: industry;
    }
  }
`