const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(207, 162, 95, .58);
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
const LayoutBtnBox = styled.div`
  margin: 15px;
`

const Input = styled.input`
  border: 0;
  padding: 0;
  width: 100%;
  outline: none;
  color: inherit;
  font-size: inherit;
  -webkit-appearance: none;
  background: transparent;
`
const PrimaryInput = styled(Input)`
  color: #444;
  font-size: 16px;
  font-weight: bold;
  font-family: industry;
`
const MinPrimaryInput = styled(Input)`
  font-family: industry;
  font-size: 14px;
`

const LayoutFixedBottom = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`


const LayoutFixedBottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`
const LayoutPageContianer = styled.div`
  padding-bottom: 50px;
`

const LayoutGroup = styled.div`
  position: relative;
  display: flex;
  padding: 15px;
  align-items: center;
  &:after{
    content: " ";
    position: absolute;
    left: 15px;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 2;
  }
  &:last-child:after{
    content: none;
  }
`
const LayoutBody = styled.div`
  flex: 1;
`
const LayoutFoot = styled.div`
  display: flex;
  margin-left: 10px;
`