import { useState, useEffect } from 'react'
import { HamStyle } from './Header.style'
import './Header.scss'
import HamList from './HamList'
function Ham({ open, setOpen }) {
  const [getData, setGetData] = useState([])
  const [menu, setMenu] = useState([])
  const showOpen = () => setOpen(!open)
  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then((res) => res.json())
      .then((data) => {
        setGetData(data.items)
      })
  }, [])
  useEffect(() => {
    if (getData && getData.length > 0) {
      setMenu(getData)
    }
  }, [getData])

  return (
    <>
      <HamStyle $display={open} $position={open}>
        <div className="ham__top">
          <div className="top">
            <img
              className="top__logo"
              src="https://cc.tvbs.com.tw/portal/images/logo-2.png"
              alt="Tvbs_logo"
            />
            <img
              className="top__close"
              onClick={showOpen}
              src="https://cc.tvbs.com.tw/portal/images/xx.png"
              alt="close_btn"
            />
          </div>
          <div className="c-search c-search--ham">
            <input
              className="c-search__input"
              type="search"
              name=""
              id=""
              placeholder="關鍵字"
            />
            <button className="c-search__btn" type="submit" />
          </div>
        </div>
        <ul className="ham__list">
          {menu.map((item, index) => {
            return <HamList item={item} key={index} />
          })}
        </ul>
      </HamStyle>
    </>
  )
}
export default Ham
