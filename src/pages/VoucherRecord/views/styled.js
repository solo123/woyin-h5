import styled from 'styled-components'

export default styled.div`
  .list{
    margin: 15px;
  }
  .item{
    border-radius: 3px;
    padding: 15px;
    background: #fff;
    margin-bottom: 15px;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .subtitle{
    color: #888;
  }
  .box{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  dl{
    display: flex;
    dt{
      color: #888;
    }
  }
  .date{
    color: #888;
    font-size: 12px;
    text-align: right;
    padding-top: 5px;
  }
`