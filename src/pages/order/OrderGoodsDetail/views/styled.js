import styled from 'styled-components'

export default styled.div`
  header{
    margin-bottom: 10px;
    background: #fff;
    padding: 30px 15px;
    font-size: 16px;
    font-weight: bold;
  }

  .track{
    margin-bottom: 10px;
    background: #fff;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 20px;
      height: 20px;
    }
  }

  dl{
    position: relative;
    display: flex;
    padding: 15px;
    background: #fff;
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
    dt{
      color: #888;
      flex-shrink: 0;
    }
  }
  footer{
    text-align: center;
    padding: 10px 0;
    color: red;
    font-size: 12px;
  }
`