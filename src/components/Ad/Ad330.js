import { Ad330Style } from './Ad.style'
const Ad330 = ({ height, MarginTop }) => {
  return (
    <Ad330Style $height={height} $MarginTop={MarginTop}>
      <img src={`https://via.placeholder.com/330X${height}`} alt="" />
    </Ad330Style>
  )
}
export default Ad330
