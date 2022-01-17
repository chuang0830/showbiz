import { PageBtnWrap, PageBtn } from './Pagination.style'
const Pagination = ({ indexPage, setIndexPage, totalPage }) => {
  return (
    <>
      <PageBtnWrap>
        <PageBtn
          onClick={() => {
            if (indexPage > 0) {
              setIndexPage(indexPage - 1)
            }
          }}
        >
          上一頁
        </PageBtn>
        {totalPage.map((v, i) => {
          return (
            <PageBtn
              onClick={() => {
                setIndexPage(v - 1)
              }}
              key={i}
              $color={indexPage + 1 === v ? true : ''}
              $background={indexPage + 1 === v ? true : ''}
            >
              {v}
            </PageBtn>
          )
        })}
        <PageBtn
          onClick={() => {
            if (indexPage < totalPage.length - 1) {
              setIndexPage(indexPage + 1)
            }
          }}
        >
          下一頁
        </PageBtn>
      </PageBtnWrap>
    </>
  )
}
export default Pagination
