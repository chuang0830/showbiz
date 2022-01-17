import {
  SecNavStyle,
  SecNavInner,
  SecNavLink,
  SocialBtnLink,
  Triangle,
  TriangleImg,
  DropDownStyle,
  DropDownList,
  DropDownLink,
  SocialBtn,
} from './SecNavbar.style'
import { useState } from 'react'
const SecNavbar = () => {
  const [openDrop, setOpenDrop] = useState(false)
  const showOpen = () => setOpenDrop(!openDrop)
  return (
    <>
      <SecNavStyle $transform={openDrop ? true : false}>
        <SecNavInner>
          <div>
            <SecNavLink to="./">當掌聲響起</SecNavLink>
            <SecNavLink to="./review">精彩內容</SecNavLink>
            <SecNavLink
              to={{
                pathname:
                  'https://www.youtube.com/watch?v=Nz7-CmT2KAM&list=PLRPdZdTG7HaDwp5qT3ZZ7LkvfeZ_Eqi2U',
              }}
              target="_blank"
            >
              完整影音
            </SecNavLink>
          </div>
          <SocialBtn display="none">
            <SocialBtnLink
              href="https://www.facebook.com/tvbsfb/"
              target="_blank"
            >
              加入
            </SocialBtnLink>
            <SocialBtnLink
              href="https://www.youtube.com/user/TVBSLiveChannel "
              target="_blank"
            >
              訂閱
            </SocialBtnLink>
          </SocialBtn>
          <Triangle onClick={showOpen} $transform={openDrop}>
            <TriangleImg
              src="https://showbiz.tvbs.com.tw/assets/images/icon_label01.svg"
              alt="triangle_trigger"
            />
          </Triangle>
        </SecNavInner>
        <DropDownStyle $display={openDrop ? true : false}>
          <DropDownList>
            <DropDownLink to="./review/page/1">精彩內容</DropDownLink>
          </DropDownList>
          <DropDownList>
            <DropDownLink
              to={{
                pathname:
                  'https://www.youtube.com/watch?v=Nz7-CmT2KAM&list=PLRPdZdTG7HaDwp5qT3ZZ7LkvfeZ_Eqi2U',
              }}
              target="_blank"
            >
              完整影音
            </DropDownLink>
          </DropDownList>

          <SocialBtn display="block" padding="9px 20px">
            <SocialBtnLink
              href="https://www.facebook.com/tvbsfb/"
              target="_blank"
            >
              加入
            </SocialBtnLink>
            <SocialBtnLink
              href="https://www.youtube.com/user/TVBSLiveChannel "
              target="_blank"
            >
              訂閱
            </SocialBtnLink>
          </SocialBtn>
        </DropDownStyle>
      </SecNavStyle>
    </>
  )
}
export default SecNavbar
