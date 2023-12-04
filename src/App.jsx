import Header from './components/Header'
import Section from './components/Section'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <div>
    <Header/>
    <Section id="home" className="home">
      <Home/>
    </Section>
    </div>

  )
}

export default App
