import { Link } from 'react-router-dom'
import styled from 'styled-components'

//ContentSection
export const TitleWrap = styled.div`
  width: 100%;
  height: 43px;
  position: relative;
`
export const Title = styled.h2`
  color: #933571;
  font-weight: bold;
  font-size: 25px;
  line-height: 43px;
  position: absolute;
  left: 20px;
  background-color: #fff;
  padding: 0 5px;
`
export const More = styled(Link)`
  margin: 6px 0;
  padding: 5px 15px;
  border: 1px solid #933571;
  border-radius: 30px;
  position: absolute;
  right: 0;
  color: #933571;
  font-weight: bold;
  background-color: #fff;
`
export const TitleDeco = styled.div`
  position: absolute;
  height: 3px;
  width: ${(props) => (props.width ? 'calc(100% - 90px)' : '100%')};
  background-color: #933571;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
`
//ContentItem
export const ContentItemWrapStyle = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 627px;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 665px) {
    width: 100%;
  }
`
export const ContentItemStyle = styled(Link)`
  display: block;
  width: 382px;
  margin-right: 27px;
  margin-bottom: 20px;
  :nth-of-type(3) {
    margin-right: 0;
  }
  @media (max-width: 1200px) {
    width: 100%;
    margin-right: 0px;
  }
  @media (max-width: 850px) {
    margin-right: 0;
    display: flex;
  }
`
export const ContentItemImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  @media (max-width: 850px) {
    width: 250px;
    margin-right: 10px;
  }
  @media (max-width: 550px) {
    width: 180px;
  }
  @media (max-width: 375px) {
    width: 120px;
  }
`
export const ContentItemTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 850px) {
    width: 100%;
  }
`
export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const ChannelWrap = styled.div`
  width: ${(props) => props.width};
  @media (max-width: 1200px) {
    width: 100%;
  }
`
export const ChannelItem = styled.div`
  display: flex;
  padding: 20px 0;
  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
`
export const ChannelImg = styled.img`
  display: block;
  width: 382px;
  margin-right: 20px;
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const ChannelTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`
export const ChannelText = styled.p`
  margin: 0;
`
export const RelatedWrap = styled.div`
  padding: 20px 0;
`
export const RelatedItem = styled.a`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #a0a0a0;
  :last-of-type {
    border-bottom: none;
  }
  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
    border: none;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const RelatedImg = styled.img`
  display: block;
  width: 185px;
  margin-right: 10px;
  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 20px;
  }
`
export const RelatedTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`
