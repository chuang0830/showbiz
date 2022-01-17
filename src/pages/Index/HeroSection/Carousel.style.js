//import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const CarouselStyle = styled.div`
  width: 850px;
  height: 478px;
  .slick-dots {
    bottom: -40px;
  }
  .slick-prev {
    width: 55px;
    height: 55px;
    font-size: 55px;
    left: 0;
    z-index: 2;
  }
  .slick-next {
    width: 55px;
    height: 55px;
    font-size: 55px;
    right: 0;
    z-index: 2;
  }
  .slick-prev::before,
  .slick-next::before {
    font-size: 55px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 700px) {
    height: 350px;
    .slick-prev::before,
    .slick-next::before {
      font-size: 30px;
    }
  }
  @media (max-width: 500px) {
    height: 280px;
  }
  @media (max-width: 400px) {
    height: 210px;
  }
`
export const SilderItem = styled.a`
  display: block;
  width: 100%;
  height: 478px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url('https://showbiz.tvbs.com.tw/assets/css/owlcarousel/owl-video-play.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    pointer-events: none;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 350px;
    ::before {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 500px) {
    height: 280px;
  }
  @media (max-width: 400px) {
    height: 210px;
  }
`
export const SilderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
