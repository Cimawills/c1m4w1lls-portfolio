import { Play } from "lucide-react"

export function Hero() {
    return (
        <div className="flex flex-col gap-5  px-8 py-12">

           <div className="flex flex-row gap-2 text-xs items-center ">
             <Play color="#FFD600" fill="#FFD600" size={12} />
             <span className="text-yellow font-mono">root@c1m4w1lls:~$ whoami</span>
           </div>
           
           <div className="flex flex-col">
            <span className="hero-title text-txt">CISSÉ</span>
            <span className="hero-title text-yellow">MAMADOU</span>
            <span className="hero-title text-txt">WILLIAMS</span>
           </div>

           <span className="text-yellow-dim font-mono tracking-wider text-3xl">aka C1M4W1LLs</span>

           <div className="flex">
                <div className="flex flex-col font-mono text-txt-dim text-sm">
                    <span>Administrateur Système-Réseaux & Développeur Full-Stack & passionné de Cybersécurité basé à Abidjan.</span>
                    <span>Licence en Administration des Systèmes de Sécurité & Réseaux Informatique</span>
                    <span>Linux · Windows Server · Cisco · Aruba · Python · Django · React · React Native · Flutter · Pentester dans l'âme</span>
                </div>
           </div>

           <div className="flex">
                <div className="bg-yellow-glow py-1 px-3 font-mono border-y border-t-border-bright border-b-border-main -skew-x-12">
                    <span className="uppercase text-xs text-yellow-dim ">Administrateur Système & Reseaux</span>
                </div>
           </div>

        </div>
    )
}