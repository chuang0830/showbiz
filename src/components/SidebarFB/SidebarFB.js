import { SidebarFBStyle } from './SidebarFB.style'
import React from 'react'
//import { FacebookProvider, Page } from 'react-facebook'

const SidebarFB = () => {
  return (
    <>
      <SidebarFBStyle height="427">
        {/* 要申請開發人員 */}
        {/* <FacebookProvider appId="123456789">
          <Page href="https://www.facebook.com/tvbsfb/" tabs="timeline" />
        </FacebookProvider> */}
      </SidebarFBStyle>
    </>
  )
}
export default SidebarFB
