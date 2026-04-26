import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import Skills from './components/Skills'
import { Projects } from './components/Projects'
import { Trophies } from './components/Trophies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
// import './App.css' // Assurez-vous que votre CSS avec @theme est bien importé

function App() {
  return (
    /* Conteneur principal avec votre couleur de fond --bg (#080808) */
    <div className="relative min-h-screen bg-bg-base text-txt selection:bg-yellow selection:text-bg-base overflow-y-hidden">
      
      {/* Barre de navigation : fixe ou avec une hauteur définie via --nav-h */}
      <header id="header" className="fixed w-full z-50 h-nav border-b border-border-main bg-bg-base/80 backdrop-blur-md">
        <NavBar />
      </header>
      
      {/* Contenu principal */}
      <main className="relative z-30 ">
        <section id="hero" className='py-8'>
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projets">
          <Projects />
        </section>
        
        <section id="trophies">
          <Trophies />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        {/* Vous pourrez ajouter vos autres sections ici plus tard */}
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default App