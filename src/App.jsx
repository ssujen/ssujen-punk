import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UnderConstruction from './components/UnderConstruction'

function App() {
  const [currentView, setCurrentView] = useState('home')

  if (currentView === 'blog') {
    return <UnderConstruction onHomeClick={() => setCurrentView('home')} />
  }

  return (
    <>
      <Navbar onBlogClick={() => setCurrentView('blog')} />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
