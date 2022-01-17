import './Footer.scss'

const FooterItem = ({ item }) => {
  return (
    <>
      <div className="footer__item item">
        {item.group &&
          item.group.map((v, i) => {
            return (
              <div className="item__list" key={i}>
                <a
                  className="item__link"
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {v.name}
                </a>
              </div>
            )
          })}
      </div>
    </>
  )
}
export default FooterItem
