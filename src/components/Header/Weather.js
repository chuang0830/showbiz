import { useState, useEffect } from 'react'
import { WeatherDetailStyle, SettingSelectMainStyle } from './Header.style.js'
import { sub } from '../location'
import './Header.scss'
const Weather = () => {
  const [location, setLocation] = useState('taipei')
  const [weatherOpen, setWeatherOpen] = useState(false)
  const [locatOpen, setLocatOpen] = useState(false)
  const [getData, setGetData] = useState({})
  const [weather, setWeather] = useState({})

  const openDisplay = () => setWeatherOpen(!weatherOpen)
  const locatDisplay = () => setLocatOpen(!locatOpen)
  useEffect(() => {
    fetch(`http://localhost:3000/weather/${location}`)
      .then((res) => res.json())
      .then((data) => {
        setGetData(data)
      })
  }, [])
  useEffect(() => {
    if (getData.id) {
      setWeather(getData)
    }
  }, [getData])
  return (
    <>
      <div className="c-weather" onClick={openDisplay}>
        <img className="c-weather__img" alt="weather" src={weather.img} />
        <div className="c-weather__location">
          <span className="c-weather__temp">{weather.tempture} &#8451;</span>
          <span className="c-weather__spot">{weather.location}</span>
        </div>
      </div>
      <WeatherDetailStyle $display={weatherOpen}>
        <div className="detail__title title">
          <button className="detail__close" onClick={openDisplay}></button>
          <p className="title__name">高雄市</p>
          <div className="title__setting setting-select">
            <p className="setting-select__title" onClick={locatDisplay}>
              設定所在地
            </p>
            {/* <SettingSelectMainStyle $display={locatOpen}>
              <li className="setting-select__main">
                北部
                <ul className="setting-select__sub-wrap">
                  <li className="setting-select__sub">基隆市</li>
                  <li className="setting-select__sub">台北市</li>
                  <li className="setting-select__sub">新北市</li>
                  <li className="setting-select__sub">桃園市</li>
                  <li className="setting-select__sub">新竹縣</li>
                  <li className="setting-select__sub">新竹市</li>
                  <li className="setting-select__sub">苗栗縣</li>
                </ul>
              </li>
              <li className="setting-select__main">
                中部
                <ul className="setting-select__sub-wrap">
                  <li className="setting-select__sub">台中市</li>
                  <li className="setting-select__sub">彰化縣</li>
                  <li className="setting-select__sub">南投縣</li>
                  <li className="setting-select__sub">雲林縣</li>
                  <li className="setting-select__sub">嘉義縣</li>
                  <li className="setting-select__sub">嘉義市</li>
                </ul>
              </li>
              <li className="setting-select__main">
                南部
                <ul className="setting-select__sub-wrap">
                  <li className="setting-select__sub">台南市</li>
                  <li className="setting-select__sub">高雄市</li>
                  <li className="setting-select__sub">屏東縣</li>
                </ul>
              </li>
              <li className="setting-select__main">
                東部
                <ul className="setting-select__sub-wrap">
                  <li className="setting-select__sub">宜蘭縣</li>
                  <li className="setting-select__sub">花蓮縣</li>
                  <li className="setting-select__sub">台東縣</li>
                </ul>
              </li>
              <li className="setting-select__main">
                外島
                <ul className="setting-select__sub-wrap">
                  <li className="setting-select__sub">連江縣</li>
                  <li className="setting-select__sub">金門縣</li>
                  <li className="setting-select__sub">澎湖縣</li>
                </ul>
              </li>
            </SettingSelectMainStyle> */}
          </div>
        </div>
        <div className="detail__air air">
          <p className="air__title">
            PM<span className="air__number">2.5</span>
          </p>
          <small className="air__time">2021 / 12 / 23 13:00</small>
        </div>
        <div className="detail__date date">
          <div className="date__each">
            <div className="date__title">
              <p className="date__text">
                12/24 <br /> 星期五
              </p>
            </div>
            <div className="date__weather">
              <img
                className="date__img"
                src="https://cc.tvbs.com.tw/img/upload/2017/11/28/20171128150442-33341011.png"
                alt=""
              />
              <p className="date__temp">20-27 &#8451;</p>
            </div>
          </div>
          <div className="date__each">
            <div className="date__title">
              <p className="date__text">
                12/24 <br /> 星期五
              </p>
            </div>
            <div className="date__weather">
              <img
                className="date__img"
                src="https://cc.tvbs.com.tw/img/upload/2017/11/28/20171128150442-33341011.png"
                alt=""
              />
              <p className="date__temp">20-27 &#8451;</p>
            </div>
          </div>
          <div className="date__each">
            <div className="date__title">
              <p className="date__text">
                12/24 <br /> 星期五
              </p>
            </div>
            <div className="date__weather">
              <img
                className="date__img"
                src="https://cc.tvbs.com.tw/img/upload/2017/11/28/20171128150442-33341011.png"
                alt=""
              />
              <p className="date__temp">20-27 &#8451;</p>
            </div>
          </div>
          <div className="date__each">
            <div className="date__title">
              <p className="date__text">
                12/24 <br /> 星期五
              </p>
            </div>
            <div className="date__weather">
              <img
                className="date__img"
                src="https://cc.tvbs.com.tw/img/upload/2017/11/28/20171128150442-33341011.png"
                alt=""
              />
              <p className="date__temp">20-27 &#8451;</p>
            </div>
          </div>
          <div className="date__each">
            <div className="date__title">
              <p className="date__text">
                12/24 <br /> 星期五
              </p>
            </div>
            <div className="date__weather">
              <img
                className="date__img"
                src="https://cc.tvbs.com.tw/img/upload/2017/11/28/20171128150442-33341011.png"
                alt=""
              />
              <p className="date__temp">20-27 &#8451;</p>
            </div>
          </div>
        </div>
        <div className="detail__yt">
          <iframe
            className="detail__iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I9p3Aenp7_Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="detail__flash">
          這天高山有望降雪！耶誕節冷氣團到　各地何時「冷」出爐
        </div>
      </WeatherDetailStyle>
    </>
  )
}
export default Weather
