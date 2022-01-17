import { ArticleStyle, ArticleTime, TimeIcon } from './ReviewArticle.style'
import { useState, useEffect } from 'react'

const Article = ({ content }) => {
  const toHTML = (str) => ({ __html: str })
  return (
    <>
      <ArticleStyle>
        <h1>{content.title}</h1>
        <ArticleTime>{content.time}</ArticleTime>
        <div dangerouslySetInnerHTML={{ __html: content.text }} />
      </ArticleStyle>
    </>
  )
}
export default Article
