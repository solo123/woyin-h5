import styled from 'styled-components'

export default styled.div`
  nav{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .box{
      padding: 10px;
      width: 50%;
      a{
        display: block;
        font-size: 16px;
        font-weight: bold;
        line-height: 60px;
        text-align: center;
        border: 1px solid #eaeaea;
        border-radius: 3px;
        background: #fff;
      }
    }
  }
`