import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profil from './components/Profil'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className="stars-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <div className="app-content">
        <Navbar />
        <Hero />
        <Profil />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
