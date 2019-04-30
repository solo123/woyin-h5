import styled from 'styled-components'

export default styled.div`
  padding-bottom: 50px;
  header{
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;    
    .box{
      display: flex;
      align-items: center;
      padding: 15px;
      background: #f6f6f6;
      margin-bottom: 15px;        
    }
    .logo{
      width: 50px;
      height: 50px;      
    }
    h1{
      flex: 1;
      margin-left: 15px;
      font-size: 16px;
    }
  }
  section{
    background: #fff;
    margin-bottom: 10px;
    h2{
      font-size: 14px;
      padding: 15px;
      border-bottom: 1px solid #f6f6f6;
    }
    .tips{
      padding-right: 15px;
      padding-bottom: 15px;
      font-size: 12px;
      color: #b5b5b5;
      text-align: right;      
    }
    dl{
      dt{
        font-size: 14px;
        margin-bottom: 10px;
      }
      dd{
        color: #888;
        margin-bottom: 10px;
        ol{
          margin-left: 1em;
          li {
            margin-bottom: 5px;
            list-style: decimal;
          }
        }
      }
    }  
    .item{
      padding: 5px;
      &__inner{
        padding: 10px;
        text-align: center;
        border: 1px solid #eaeaea;
        &.active{
          color: #fff;
          background: #e1c38c;
          border-color: #c89850;
        }          
      }
    }
  }

  .info{
    .main{
      line-height: 50px;
      padding: 0 15px;      
    }
    .aside{
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      padding: 0 30px;
      line-height: 50px;
      background: #e1c38c;      
    }
    .num{
      color: #F53415;
      font-family: industry;
    }  
  }
`