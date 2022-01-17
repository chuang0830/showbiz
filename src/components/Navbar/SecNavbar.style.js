import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const SecNavStyle = styled.div`
  background-color: ${(props) => props.theme.PrimaryPurple};
  position: relative;
`
export const SecNavInner = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`
export const SecNavLink = styled(Link)`
  display: inline-block;
  padding: 14px 10px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  :first-child {
    font-size: 26px;
    padding: 8px 10px;
    margin-right: 10px;
  }
  :not(:first-child):hover {
    background-color: #ad3f86;
  }
  @media (max-width: 1024px) {
    :not(:first-child) {
      display: none;
    }
  }
`
export const SocialBtn = styled.div`
  padding: ${(props) => props.padding};
  @media (max-width: 1024px) {
    display: ${(props) => props.display};
  }
`
export const SocialBtnLink = styled.a`
  display: inline-block;
  background-color: #fff;
  border-radius: 30px;
  background-repeat: no-repeat;
  padding: 3px 10px 3px 25px;
  font-weight: bold;
  color: #b81b26;
  border: 2px solid #b81b26;
  background-image: url('https://showbiz.tvbs.com.tw/77401d39e9e40948ebd1447d5999a8b3.png');
  :hover {
    color: #fff;
    background-color: #b81b26;
    background-image: url('https://showbiz.tvbs.com.tw/07527581c988723e55cb836f9fd4bf08.png');
  }
  :first-child {
    color: #3e5b94;
    border: 2px solid #3e5b94;
    background-image: url('https://showbiz.tvbs.com.tw/9c026c62489f5a890ca0b7e8ed287be1.png');
    margin-right: 15px;
    :hover {
      color: #fff;
      background-color: #3e5b94;
      background-image: url('https://showbiz.tvbs.com.tw/fb63a43c634d8d67d4a4d82661c07bea.png');
    }
  }
`
export const Triangle = styled.div`
  width: 25px;
  display: none;
  cursor: pointer;
  transform: ${(props) =>
    props.$transform ? 'rotate(90deg)' : 'rotate(0deg)'};
  @media (max-width: 1024px) {
    display: block;
  }
`
export const TriangleImg = styled.img`
  width: 100%;
`
export const DropDownStyle = styled.div`
  background-color: ${(props) => props.theme.PrimaryPurple};
  width: 100%;
  display: ${(props) => (props.$display ? 'block' : 'none')};
  position: absolute;
  z-index: 3;
`
export const DropDownList = styled.li`
  border-bottom: 1px dashed #ad3f86;
  padding: 10px 30px;
`
export const DropDownLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`
