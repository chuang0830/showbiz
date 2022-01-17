import styled from 'styled-components'
export const NavBarStyle = styled.div`
  background-color: ${(props) => props.theme.SecondaryBrown};
`
export const NavBarInner = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`
export const NavBarInnerUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
`
export const NavBarInnerli = styled.li`
  margin: 0 3px;
  flex-shrink: 0;
  flex-grow: 0;
`

// li>a
export const NavBarInnerLink = styled.a`
  color: #fff;
  font-size: 18px;
  padding: 7px 15px;
  line-height: 45px;
  border-radius: 5px;
  &:hover {
    background-color: red;
  }
`
//div
export const NavBarSub = styled.div`
  display: none;
  position: absolute;
  background: #450024;
  top: 45px;
  z-index: 2;
  /* ${NavBarInnerLink}:hover & {
    display: block;
  } */
`

//子選單連結
export const NavBarSubLink = styled.a`
  display: block;
  border-radius: 0;
  margin: 5px 0;
  padding: 10px;
  line-height: 22px;
  color: #fff;
  :hover {
    background-color: #8b3e5f;
  }
`
