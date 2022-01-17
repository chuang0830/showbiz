import { useState } from 'react'
import { HamListSubStyle, HamArrowStyle } from './Header.style'
import './Header.scss'
function HamList({ item }) {
  const [openSub, setOpenSub] = useState(false)
  const showOpen = () => setOpenSub(!openSub)

  const SubList = () => (
    <>
      <p className="list__title">{item.title}</p>
      <HamArrowStyle
        onClick={showOpen}
        $transform={openSub}
        src="https://cc.tvbs.com.tw/portal/images/arraw2.png"
        alt=""
      />
      <HamListSubStyle $display={openSub}>
        {item.sub.map((v, i) => {
          return (
            <a
              className="list__sub-link"
              href={v.sub_url}
              key={i}
              target="_blank"
              rel="noreferrer"
            >
              {v.sub_title}
            </a>
          )
        })}
      </HamListSubStyle>
    </>
  )

  const ListLink = () => (
    <a className="list__title" href={item.url} target="_blank" rel="noreferrer">
      {item.title}
    </a>
  )

  return (
    <>
      <li className="list">{item.sub ? <SubList /> : <ListLink />}</li>
    </>
  )
}
export default HamList
