import Header from './components/Header'
import Section from './components/Sections/Section'
import Home from './components/Sections/Home'
import About from './components/Sections/About'
import Portfolio from './components/Sections/Portfolio'
import './css/App.css'

function App() {
  return (
    <div>
    <Header/>
    <Section id="home" className="home">
      <Home/>
    </Section>
    <Section id="about" className="about">
      <About/>
    </Section>
    <Section id="portfolio" className="portfolio">
      <Portfolio/>
    </Section>
    </div>

  )
}

export default App
