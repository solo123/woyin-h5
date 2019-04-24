import styled from 'styled-components'

export default styled.div`
  padding-bottom: 50px;
  header{
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 20px;
    height: 88px;
    background: linear-gradient(to right, #ff5c4e, #f22d3a);
    font-weight: bold;
    font-size: 16px;
    font-family: industry;
    .link{
      display: flex;
      align-items: center;

      color: #fff;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .banner-box{
    padding: 0 10px 10px 10px;
    background: #fff;
  }
  .section{
    margin-bottom: 10px;
    .head{
      padding: 10px 0;
      .title{
        font-size: 16px;
        text-align: center;
      }
    }
    .body{
      padding-bottom: 10px;
    }
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`