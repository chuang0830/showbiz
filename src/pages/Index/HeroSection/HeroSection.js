import {
  HeroSectionStyle,
  SideBarWrapStyle,
  SiderBarChannel,
  SiderBarChannelText,
} from './HeroSection.style'
import Carousel from './Carousel'
import SidebarFB from '../../../components/SidebarFB/SidebarFB'
const HeroSection = () => {
  return (
    <>
      <HeroSectionStyle>
        <Carousel />
        <SideBarWrapStyle>
          <SiderBarChannel>
            <SiderBarChannelText>CH55 09/18(六) 21:00首播</SiderBarChannelText>
          </SiderBarChannel>
          <SidebarFB />
        </SideBarWrapStyle>
      </HeroSectionStyle>
    </>
  )
}
export default HeroSection
