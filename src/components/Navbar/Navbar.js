import { NavBarStyle, NavBarInner, NavBarInnerUl } from './Navbar.style'
import { useEffect, useState } from 'react'
import SecNavbar from './SecNavbar'
import NavbarItem from './NavbarItem'
function Navbar() {
  const [nav, setNav] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/nav')
      .then((res) => res.json())
      .then((data) => {
        setNav(data.items)
      })
  }, [])

  return (
    <>
      <NavBarStyle>
        <NavBarInner>
          <NavBarInnerUl>
            {nav.map((item, index) => {
              return <NavbarItem item={item} key={index} />
            })}
          </NavBarInnerUl>
        </NavBarInner>
      </NavBarStyle>
      <SecNavbar />
    </>
  )
}
export default Navbar
