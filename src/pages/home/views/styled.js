import styled from 'styled-components'

export default styled.div`
  padding-bottom: 50px;

  header{
    display: flex;
    align-items: center;
    color: #fff;
    padding: 20px;
    background: linear-gradient(to right, #ff5c4e, #f22d3a);
    font-size: 16px;
    .content{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    small{
      font-size: 12px;
    }
    img{
      width: 25px;
      height: 25px;
    } 
  
    .link{
      display: flex;
      align-items: center;
      color: #fff;
    }       
  }
  
  .banner-box{
    padding: 0 10px 10px 10px;
    background: #fff;
  }  

  .entry{
    margin: 0 10px;
    h2{
      font-size: 16px;
      font-weight: bold;
    }
    .aside{
      position: relative;
      .content{
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        color: #fff;
        text-align: center;
      }
    }
    .main{
      display: flex;
    }
    .cell{
      position: relative;
      flex: 1;
      & + .cell{
        margin-left: 10px;
      }
      .content{
        position: absolute;
        top: 15%;
        left: 10%;
        color: #fff;
      }
    }
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

  .box{
    .item{
      text-align: center;
      margin-right: 10px;
      padding: 10px;
      background: #fff;
      width: 100px;
      .img{
      }
      .title{
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .link{
        color: #fff;
        padding: 0 20px;
        font-size: 12px;
        border-radius: 10px;
        background: #ef1a20;
        display: inline-block;
      }
    }      
  }

  .box__head{
    display: flex;
    justify-content: center;
    &.dz{
      color: #0084a1;
      background: #bff4ff;
    }
    &.hf{
      color: #e0605d;
      background: #fedcdb;
    }
    &.ls{
      color: #f3a831;
      background: #feefac;
    }
    .content{
      padding: 5px 0;
      display: flex;
      .text{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 30px;
        font-size: 12px;
        h2{
          font-size: 16px;
        }
        p{
          margin-bottom: 15px;
        }
        span{
          text-align: center;
          border: 1px solid;
          border-radius: 10px;
          line-height: 1.3;
        }
      }
      .img{
        width: 110px;
        height: 80px;
      }
    }
  }  

  .swiper{
    padding: 10px;
    .swiper-box{
      overflow-x: auto;
      display: flex;
    }
  }

`