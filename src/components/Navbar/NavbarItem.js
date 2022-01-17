import {
  NavBarInnerli,
  NavBarInnerLink,
  NavBarSub,
  NavBarSubLink,
} from './Navbar.style'

const NavbarItem = ({ item }) => {
  return (
    <NavBarInnerli>
      {item.sub ? (
        <>
          <NavBarInnerLink href="#">{item.title}</NavBarInnerLink>
          <NavBarSub>
            {item.sub.map((v, i) => {
              return (
                <NavBarSubLink href={v.sub_url} key={i}>
                  {v.sub_title}
                </NavBarSubLink>
              )
            })}
          </NavBarSub>
        </>
      ) : (
        <NavBarInnerLink href={item.url} target="_blank">
          {item.title}
        </NavBarInnerLink>
      )}
    </NavBarInnerli>
  )
}
export default NavbarItem
