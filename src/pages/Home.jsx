import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MyJourney from '../components/MyJourney'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/portfolio.css'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      return
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    setTheme(prefersLight ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1100)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div className="portfolio-app">
      {isLoading && (
        <div className="page-loader" role="status" aria-live="polite" aria-label="Loading portfolio">
          <div className="loader-ring" aria-hidden="true" />
          <p>Loading portfolio...</p>
        </div>
      )}
      <Navbar theme={theme} onToggleTheme={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <MyJourney />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home