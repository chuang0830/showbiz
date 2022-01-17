// import { BrowserRouter as Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  TitleWrap,
  Title,
  More,
  TitleDeco,
  ContentItemWrapStyle,
  FlexWrap,
  ChannelWrap,
  ChannelItem,
  ChannelImg,
  ChannelTitle,
  ChannelText,
} from './ContentSection.style'
import ContentItem from './ContentItem'
import ContentRelated from './ContentRelated'
import Ad382 from '../../../components/Ad/Ad382'

const ContentSection = () => {
  const [contentItem, setContentItem] = useState([])
  const [contentRelated, setContentRelated] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/content?_page=1&_limit=5')
      .then((res) => res.json())
      .then((data) => {
        setContentItem(data)
      })
    fetch('http://localhost:3000/related')
      .then((res) => res.json())
      .then((data) => {
        setContentRelated(data.items)
      })
  }, [])
  return (
    <>
      <div>
        <TitleWrap>
          <TitleDeco width="calc" />
          <Title>精彩內容</Title>
          <More to="./review">MORE</More>
        </TitleWrap>
        <ContentItemWrapStyle>
          {contentItem.length
            ? contentItem.map((item, index) => {
                return <ContentItem item={item} key={index} />
              })
            : ''}
          <Ad382 />
        </ContentItemWrapStyle>
      </div>
      <FlexWrap>
        <ChannelWrap width="850px">
          <TitleWrap>
            <TitleDeco />
            <Title>節目資訊</Title>
          </TitleWrap>
          <ChannelItem>
            <ChannelImg
              src="https://cc.tvbs.com.tw/img/program/_data/i/upload/2017/02/06/20170206155112-220e94e8-me.jpg"
              alt=""
            />
            <div>
              <ChannelTitle>當掌聲響起/TVBS 55新聞台</ChannelTitle>
              <ChannelText>
                娛樂大小事看這裡，演藝動態一把抓，專訪好萊塢大明星、剖析中西影壇動向。
              </ChannelText>
            </div>
          </ChannelItem>
        </ChannelWrap>
        <ChannelWrap width="330px">
          <TitleWrap>
            <TitleDeco />
            <Title>相關新聞</Title>
          </TitleWrap>
          <div>
            {contentRelated.length
              ? contentRelated.map((item, index) => {
                  return <ContentRelated item={item} key={index} />
                })
              : ''}
          </div>
        </ChannelWrap>
      </FlexWrap>
    </>
  )
}
export default ContentSection
