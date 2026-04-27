import { NavBar } from './components/NavBar'
import { About } from './components/About'
import Skills from './components/Skills'
import { Projects } from './components/Projects'
import { Trophies } from './components/Trophies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
import type { AboutInfoProps, ProjetsCardProps, SkillsProps, SocialInfoProps, TrophiesProps } from './utils/types'
import { getAboutInfos, getProjects, getSkills, getSocialInfos, getTrophies } from './utils/services/appwrite.service'
// import './App.css' // Assurez-vous que votre CSS avec @theme est bien importé

function App() {
  
  const [skills, setSkills] = useState<SkillsProps | []>([]);
  const [projects, setProjects] = useState<ProjetsCardProps | []>([]);
  const [trophies, setTrophies] = useState<TrophiesProps | []>([]);
  const [aboutInfos, setAboutInfos] = useState<AboutInfoProps>();
  const [socialInfos, setSocialInfos] = useState<SocialInfoProps[]>();
  //const [projects,setProjects] = useState<SkillsProps>();

  useEffect(() => {
    const fetchData = async ()=>{
      const skillsData = await getSkills();
      const projectData = await getProjects();
      const trophiesData = await getTrophies();
      const aboutInfosData = await getAboutInfos();
      const socialInfosData = await getSocialInfos();


      setSkills(skillsData)
      setProjects(projectData)
      setTrophies(trophiesData)
      setAboutInfos(aboutInfosData)
      setSocialInfos(socialInfosData)

    }
    fetchData()
  },[])

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
          <About aboutInfos={aboutInfos}  />
        </section>
        
        <section id="skills">
          <Skills skills={skills} />
        </section>
        
        <section id="projets">
          <Projects projects={projects} />
        </section>
        
        <section id="trophies">
          <Trophies trophies={trophies} />
        </section>
        
        <section id="contact">
          <Contact 
            socialInfos={socialInfos}
          />
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