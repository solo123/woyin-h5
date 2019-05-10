import styled from 'styled-components'

export default styled.div`
  padding-bottom: 50px;

  .section{
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 0;
    }
    &:last-child .body{
      padding-bottom: 5px;
    }
    &__head{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0;
    }
    &__title{
      position: relative;
      font-size: 16px;
      padding: 0 5px;
      text-align: center;
    }    
    &__body{
      padding-bottom: 10px;
    }
  }

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
    .link{
      display: flex;
      align-items: center;
      color: #fff;
    } 
    small{
      font-size: 12px;
    }
    img{
      width: 25px;
      height: 25px;
    } 
  }

  .service{
    .box{
      .item{
        text-align: center;
        margin-right: 10px;
        padding: 10px;
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

  .payment{
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
`