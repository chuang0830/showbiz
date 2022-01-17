import Ad970 from '../../../components/Ad/Ad970'
import Sidebar from './Sidebar'
import Article from './Article'
import { Content } from './ReviewArticle.style'
import React, { useState, useEffect } from 'react'

const ReviewArticle = (props) => {
  const [content, setContent] = useState({})
  async function getContent(path) {
    const url = 'http://localhost:3000/article/' + path
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setContent(data)
  }

  useEffect(() => {
    const pathNow = props.location.pathname.split('/')[3]
    getContent(pathNow)
  }, [props.location.pathname])
  return (
    <>
      <Ad970 />
      <Content>
        <Article content={content} />
        <Sidebar />
      </Content>
    </>
  )
}
export default ReviewArticle
