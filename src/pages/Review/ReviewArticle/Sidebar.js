import { SidebarStyle } from './ReviewArticle.style'
import Ad330 from '../../../components/Ad/Ad330'
import SidebarFB from '../../../components/SidebarFB/SidebarFB'

const Sidebar = () => {
  return (
    <>
      <SidebarStyle>
        <Ad330 height={630} />
        <SidebarFB />
        <Ad330 height={360} MarginTop={20} />
      </SidebarStyle>
    </>
  )
}
export default Sidebar
