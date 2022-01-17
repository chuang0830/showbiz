import styled from 'styled-components'

// 漢堡選單
export const HamStyle = styled.div`
  display: ${(props) => (props.$display ? 'block' : 'none')};
  position: ${(props) => (props.$position ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 100;
  background-color: ${(props) => props.theme.SecondaryBrown};
`

export const HamArrowStyle = styled.img`
  display: inline-block;
  width: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px 15px;
  transform: ${(props) => (props.$transform ? 'rotate(180deg)' : '')};
`

export const HamListSubStyle = styled.div`
  display: ${(props) => (props.$display ? 'block' : 'none')};
  background-color: #690539;
  color: #fff;
  overflow: hidden;
  border: none;
`
export const WeatherDetailStyle = styled.div`
  display: ${(props) => (props.$display ? 'block' : 'none')};
  box-sizing: border-box;
  width: 460px;
  padding: 15px 20px 50px;
  border: 2px #ccc solid;
  position: absolute;
  box-shadow: 1px 1px 12px -2px #000;
  top: 76px;
  left: 0;
  background-color: #fff;
  // confirm z-index from navbar
  z-index: 100;
`
export const SettingSelectMainStyle = styled.ul`
  display: ${(props) => (props.$display ? 'block' : 'none')};
  position: absolute;
  left: 0;
`
