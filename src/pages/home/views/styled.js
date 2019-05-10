import styled from 'styled-components'

export default styled.div`
  padding-bottom: 50px;

  header{
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 20px;
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
    padding: 0 15px 15px 15px;
    background: #fff;
  }  

  .entry{
    margin: 0 10px;
    h2{
      font-size: 16px;
      font-weight: bold;
    }
    .main{
      display: flex;
    }
    .cell{
      position: relative;
      .content{
        position: absolute;
        top: 15%;
        left: 10%;
        color: #fff;
      }
    }
    .gray{
      filter: grayscale(100%);
      filter: gray;     
    }
  }

  .logos{
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    justify-content: space-around;
    .box{
      display: flex;
      align-items: center;
      border-radius: 5px;
      border: 1px solid #eaeaea;
    }
    .item{
      width: 33.33%;
      font-size: 12px;
    }
  }

  .section{
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 0;
    }
    .head{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0;
      .title{
        position: relative;
        font-size: 16px;
        padding: 0 5px;
        text-align: center;
      }
    }
    .body{
      padding-bottom: 10px;
    }
  }

  .service{
    .box{
      .item{
        text-align: center;
        margin-right: 10px;
        padding: 10px;
        background: #fff;
        width: 100px;
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
  }

  .hot{
    .box{
      display: flex;
      flex-wrap: wrap;
      padding: 0 5px;
      .item{
        width: 50%;
        .inner{
          margin: 5px;
          background: #fff;
        }
        h3{
          color: #f53b40;
          font-size: 16px;
        }
        p{
          color: #888;
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;     
          margin-bottom: 10px;     
        }
      }
      .item-three{
        width: 33.33%;
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