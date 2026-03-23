import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MyJourney from '../components/MyJourney'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../styles/portfolio.css'

function Home() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MyJourney />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Home