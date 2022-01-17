import { useEffect, useState } from 'react'
import './Footer.scss'
import FooterItem from './FooterItem'

const Footer = () => {
  const [getData, setGetData] = useState([])
  const [footer, setFooter] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/footer')
      .then((res) => res.json())
      .then((data) => {
        setGetData(data.items)
      })
  }, [])
  useEffect(() => {
    if (getData && getData.length > 0) {
      setFooter(getData)
    }
  }, [getData])

  //mobile component
  const FooterMoile = () => (
    <div className="footer__mobile mobile">
      <ul className="mobile__content m-content">
        <li className="m-content__item">
          <a className="m-content__link" href="mailto:t-bow@tvbs.com.tw">
            T爆信箱
          </a>
        </li>
        <li className="m-content__item">
          <a className="m-content__link" href="mailto:service@tvbs.com.tw">
            意見反映
          </a>
        </li>
        <li className="m-content__item">觀眾服務專線:02-2656-159</li>
      </ul>
      <p className="mobile__bottom">
        聯利媒體股份有限公司 © TVBS Media Inc. All Rights Reserved.
      </p>
    </div>
  )

  return (
    <footer className="footer">
      <div className="footer__content content">
        <a className="content__logo" href="https://www.tvbs.com.tw/"></a>
        {footer &&
          footer.map((item, index) => {
            return <FooterItem item={item} key={index} />
          })}
        <div className="content__server server">
          <p className="server__text">
            您的意見是我們前進的動力.歡迎來信或來電反映
          </p>
          <li>
            意見反映：
            <a className="server__email" href="mailto:service@tvbs.com.tw">
              service@tvbs.com.tw
            </a>
          </li>
          <li>觀眾服務專線： 02-2656-1599</li>
        </div>
      </div>
      <div className="footer__bottom">
        台北市內湖區瑞光路451號 | 聯利媒體股份有限公司 © TVBS Media Inc. All
        Rights Reserved.
      </div>
      {/* mobile component */}
      <FooterMoile />
    </footer>
  )
}
export default Footer
