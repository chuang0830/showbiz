import { RelatedItem, RelatedImg, RelatedTitle } from './ContentSection.style'
const ContentRelated = ({ item }) => {
  return (
    <>
      <RelatedItem href={item.url} target="_blank">
        <RelatedImg src={item.img} alt={item.title} />
        <RelatedTitle>{item.title}</RelatedTitle>
      </RelatedItem>
    </>
  )
}
export default ContentRelated
