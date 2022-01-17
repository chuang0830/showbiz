import {
  ContentItemStyle,
  ContentItemImg,
  ContentItemTitle,
} from './ContentSection.style'

const ContentItem = ({ item }) => {
  return (
    <>
      <ContentItemStyle to={`review/article/${item.id}`}>
        <ContentItemImg src={item.img} alt={item.title} />
        <ContentItemTitle>{item.title}</ContentItemTitle>
      </ContentItemStyle>
    </>
  )
}
export default ContentItem
