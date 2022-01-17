import { ReviewItemStyle, ReviewItemImg, ReviewItemTitle } from './Review.style'
const ReviewItem = ({ item }) => {
  return (
    <>
      <ReviewItemStyle to={`review/article/${item.id}`}>
        <ReviewItemImg src={item.img} alt={item.title} />
        <ReviewItemTitle>{item.title}</ReviewItemTitle>
      </ReviewItemStyle>
    </>
  )
}
export default ReviewItem
