import { useState, useEffect } from 'react'
import './Header.scss'
import Weather from './Weather'
import Ham from './Ham'

function Header() {
  //打開漢堡
  const [open, setOpen] = useState(false)
  const showOpen = () => setOpen(!open)
  // useEffect(() => {
  //   open
  //     ? (document.body.style.overflow = '')
  //     : (document.body.style.overflow = '')
  // }, [open])

  return (
    <>
      <header className="header">
        <div className="header__logo logo">
          <a className="logo__img" href="https://www.tvbs.com.tw/"></a>
          <Weather />
        </div>
        <div className="header__search search">
          <div className="search__pc">
            <div className="c-search">
              <input
                className="c-search__input"
                type="search"
                name=""
                id=""
                placeholder="關鍵字"
              />
              <button className="c-search__btn" type="submit" />
            </div>
            <a className="o-en" href="https://www.tvbs.com.tw/ours/en/">
              EN
            </a>
          </div>
          <div className="search__m" onClick={showOpen} />
        </div>
      </header>
      <Ham open={open} setOpen={setOpen} />
    </>
  )
}
export default Header
