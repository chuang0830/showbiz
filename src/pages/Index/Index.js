import Ad970 from '../../components/Ad/Ad970'
import HeroSection from './HeroSection/HeroSection'
import ContentSection from './ContentSection/ContentSection'
import { Container } from './Index.style'
function Index() {
  return (
    <>
      <Ad970 />
      <Container>
        <HeroSection />
        <ContentSection />
      </Container>
    </>
  )
}
export default Index
