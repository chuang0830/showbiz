import { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { CarouselStyle, SilderItem, SilderImg } from './Carousel.style'

function Carousel() {
  const [carousel, setCarousel] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/carousel')
      .then((res) => res.json())
      .then((data) => {
        setCarousel(data.items)
      })
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <CarouselStyle>
      <Slider {...settings}>
        {carousel.length
          ? carousel.map((v, i) => {
              return (
                <SilderItem href={v.url} key={i} target="_blank">
                  <SilderImg src={v.img} />
                </SilderItem>
              )
            })
          : ''}
      </Slider>
    </CarouselStyle>
  )
}
export default Carousel
