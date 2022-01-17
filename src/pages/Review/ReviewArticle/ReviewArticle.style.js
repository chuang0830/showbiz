import styled from 'styled-components'
export const Content = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 1200px) {
    padding: 15px;
    justify-content: center;
  }
`
export const ArticleStyle = styled.div`
  width: 850px;
  h1 {
    color: #3e3a39;
    font-size: 26px;
    font-weight: bolder;
    font-weight: bold;
  }
  h2 {
    color: #ff0000;
    font-weight: bold;
    font-size: 20px;
    margin: 5px 0;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
`
export const ArticleTime = styled.div`
  color: #9d9d9d;
  font-size: 16px;
  padding-left: 22px;
  background-image: url('https://showbiz.tvbs.com.tw/5095daa40f6bcc357a685a4ba1c675ce.svg');
  background-repeat: no-repeat;
  margin: 20px 0;
`
export const SidebarStyle = styled.div`
  width: 330px;
  @media (max-width: 1200px) {
    display: none;
  }
`
