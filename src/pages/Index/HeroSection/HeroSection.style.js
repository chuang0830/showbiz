import styled from 'styled-components'
export const HeroSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`
export const SideBarWrapStyle = styled.div`
  width: 330px;
  @media (max-width: 1200px) {
    display: none;
  }
`
export const SiderBarChannel = styled.div`
  width: 100%;
  background-color: #933571;
  background-image: url('https://showbiz.tvbs.com.tw/e0eb0d5438499a4455fd8cfeca916b2d.png');
  background-repeat: no-repeat;
  margin-bottom: 10px;
`
export const SiderBarChannelText = styled.p`
  margin: 0;
  color: #fff;
  font-weight: bold;
  line-height: 40px;
  padding-left: 30px;
`
