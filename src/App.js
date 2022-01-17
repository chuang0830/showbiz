import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../src/styles/reset.style'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Index from './pages/Index/Index'
import ReviewArticle from './pages/Review/ReviewArticle/ReviewArticle'
import Review from './pages/Review/Review'

function App() {
  const theme = {
    PrimaryPurple: '#933571',
    SecondaryBrown: '#450024',
  }
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/review/article/:id" exact component={ReviewArticle} />
            <Route path="/review" exact component={Review} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
