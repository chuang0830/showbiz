import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ReviewItemWrap = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`

export const ReviewItemStyle = styled(Link)`
  display: block;
  width: 412px;
  height: 300px;
  flex-grow: 0;
  flex-shrink: 0;
`

export const ReviewItemImg = styled.img`
  display: block;
  width: 100%;
`

export const ReviewItemTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`

export const ItemSpinner = styled.div`
  width: 412px;
  height: 230px;
  margin-bottom: 70px;
  flex-grow: 0;
  flex-shrink: 0;
  background: linear-gradient(
    130deg,
    rgba(225, 225, 225, 0.9),
    #fff,
    rgba(225, 225, 225, 0.9)
  );
  background-size: 200% 200%;
  animation: Animation 1s ease-in-out infinite;
  @keyframes Animation {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }
`
