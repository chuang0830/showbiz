import styled from 'styled-components'
export const Ad970Style = styled.a`
  display: block;
  width: 970px;
  height: 250px;
  margin: 20px auto;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
export const Ad382Style = styled.a`
  display: inline-block;
  width: 382px;
  height: 270px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`
export const Ad330Style = styled.a`
  display: inline-block;
  width: 330px;
  height: ${(props) => props.$height}px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: ${(props) => props.$MarginTop}px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`
