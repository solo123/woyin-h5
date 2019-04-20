import styled from 'styled-components'

export default styled.div`
  padding-bottom: 40px;

  header{
    margin-bottom: 15px;
    .info{
      padding: 15px;
      background: #fff;
      .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .price{
          color: #F53415;
          font-size: 20px;
        }
        .badge{
          font-size: 14px;
          color: #7e7e7e;
          padding: 0 5px;
          border-radius: 3px;
          background: #f2f2f2;          
        }  
      }
    }
  }
  main{
    background: #fff;
    margin-bottom: 15px;
    table{
      width: 100%;
      text-align: left;
      border-spacing: 0;      
      border-collapse: collapse;
      thead{
        th{
          position: relative;
          font-weight: bold;
          padding: 15px 0 15px 15px;     
          &:before{
            content: " ";
            display: block;
            position: absolute;
            width: 100%;
            left: 0px;
            height: 1px;
            background: #E5E5E5;
            bottom: 0px;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
          }     
        }
      }
      tbody{
        th{
          position: relative;
          color: #888;
          width: 28%;
          font-weight: normal;
          padding: 15px 0 15px 15px;
          &:before{
            content: " ";
            display: block;
            position: absolute;
            width: 100%;
            left: 0px;
            height: 1px;
            background: #E5E5E5;
            bottom: 0px;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
          }
        }
        td{
          position: relative;
          padding: 15px 0;
          &:before{
            content: " ";
            display: block;
            position: absolute;
            width: 100%;
            left: 0px;
            height: 1px;
            background: #E5E5E5;
            bottom: 0px;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
          }
        }
      }
    }
  }
  .confirm-info{
    .main{
      padding: 15px;
      background: #fff;
      label{
        color: #7e7e7e;
        padding: 2px 10px;
        border-radius: 10px;
        background: #f2f2f2;
      }
      ul{
        li{
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          &:after{
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            border-bottom: 1px solid #e5e5e5;
            transform: scaleY(0.5);
          }
          &:last-child:after{
            content: none;
          }
        }
      }
    }
    .confirm-btn{
      color: #fff;
      font-weight: bold;
      line-height: 40px;
      text-align: center;
      background: #1c92ff;  
    }
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .submit-btn{
      color: #fff;
      font-weight: bold;
      line-height: 40px;
      text-align: center;
      background: #1c92ff;      
    }
  }

`