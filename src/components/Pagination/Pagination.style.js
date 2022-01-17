import styled from 'styled-components'

export const PageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
export const PageBtn = styled.button`
  cursor: pointer;
  padding: 7px 13px;
  border: 1px solid #ddd;
  color: ${(props) => (props.$color ? '#fff' : '#3e3a39')};
  background-color: ${(props) =>
    props.$background ? props.theme.PrimaryPurple : '#fff'};
  :first-of-type {
    border-left: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
  }
  :last-of-type {
    border-right: 1px solid #ddd;
    border-radius: 0 10px 10px 0;
  }
  :hover {
    color: #fff;
    background-color: ${(props) => props.theme.PrimaryPurple};
  }
`