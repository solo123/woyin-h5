import styled from 'styled-components'

export default styled.div`
  header{
    padding: 60px 15px;
    h1{
      color: #fff;
      font-size: 26px;
    }
  }

  ul{
    padding: 0 15px;
    li{
      position: relative;
      margin-bottom: 20px;
      .link{
        display: block;
      }
      .arrow{
        position: absolute;
        right: 15px;
        top: 15px;
        width: 20px;
      }
      .content{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        padding-left: 35%;
        padding-top: 8%;
        h2{
          font-size: 16px;
          margin-bottom: 5px;
        }
        p{
          color: #888;
          font-size: 12px;
        }
      }

    }
  }
`