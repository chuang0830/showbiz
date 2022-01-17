import { useEffect, useState } from 'react'
import {
  TitleWrap,
  TitleDeco,
  Title,
} from '../Index/ContentSection/ContentSection.style'
import { ReviewItemWrap } from './Review.style'
import Ad970 from '../../components/Ad/Ad970'
import { Content } from './ReviewArticle/ReviewArticle.style'
import Sidebar from './ReviewArticle/Sidebar'
import ReviewItem from './ReviewItem'
import ReviewSpinner from './ReviewSpinner'
import Pagination from '../../components/Pagination/Pagination'

const Review = (props) => {
  const [content, setContent] = useState([])
  const [indexPage, setIndexPage] = useState(0)
  const [getData, setgetData] = useState([])
  const [totalPage, setTotalPage] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //一頁12個
  const limit = 12

  useEffect(() => {
    const getDataServer = async () => {
      fetch('http://localhost:3000/content')
        .then((res) => res.json())
        .then((data) => {
          //頁碼
          //3
          const pages = Math.ceil(data.length / limit)
          let pageArray = []
          for (let i = 1; i <= pages; i++) {
            pageArray.push(i)
          }
          setgetData(data)
          setTotalPage(pageArray)
        })
    }
    getDataServer()
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  useEffect(() => {
    if (getData && getData.length > 0) {
      const contentArray = []
      for (let j = 0; j < getData.length; j += limit) {
        contentArray.push(getData.slice(j, j + limit))
      }
      setContent(contentArray[indexPage])
    }
  }, [getData, indexPage])

  return (
    <>
      <Ad970 />
      <Content>
        <div>
          <TitleWrap>
            <TitleDeco />
            <Title>精彩內容</Title>
          </TitleWrap>
          <ReviewItemWrap>
            {content.map((item, index) => {
              return isLoading ? (
                <ReviewSpinner item={item} key={index} />
              ) : (
                <ReviewItem item={item} key={index} />
              )
            })}
          </ReviewItemWrap>
          <Pagination
            indexPage={indexPage}
            setIndexPage={setIndexPage}
            totalPage={totalPage}
          />
        </div>
        <Sidebar />
      </Content>
    </>
  )
}
export default Review
