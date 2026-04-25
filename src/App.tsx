import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
// import './App.css' // Assurez-vous que votre CSS avec @theme est bien importé

function App() {
  return (
    /* Conteneur principal avec votre couleur de fond --bg (#080808) */
    <div className="relative min-h-screen bg-bg-base text-txt selection:bg-yellow selection:text-bg-base">
      
      

      {/* Barre de navigation : fixe ou avec une hauteur définie via --nav-h */}
      <header id="header" className="relative z-50 h-nav border-b border-border-main bg-bg-base/80 backdrop-blur-md">
        <NavBar />
      </header>
      
      {/* Contenu principal */}
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="projet">
          
        </section>
        
        <section id="contact">
          
        </section>
        
        {/* Vous pourrez ajouter vos autres sections ici plus tard */}
      </main>

    </div>
  )
}

export default App