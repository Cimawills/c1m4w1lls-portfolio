import type { navbarItemsTypes, ProjetsCardType, SkillsProps } from "./types";
import PythonLogo from "../assets/python-logo.png"

export const navbarItems : navbarItemsTypes[]  = [
    {
        label : "À propos",
        link : "#about"
    },
    {
        label : "Skills",
        link : "#skills"
    },
    {
        label : "Projets",
        link : "#projets"
    },
    {
        label : "Palmares",
        link : "#trophies"
    },
    {
        label : "Contact",
        link : "#contact"
    },
    {
        label : "Blog",
        link : "/blog"
    },
]


export const mainSkills = ["Administrateur Système & Reseaux","Développeur Full-Stack","Cybersecurité","Hacking","IA & Automatisation","Cloud Computing"]

export const skills : SkillsProps = {
    skills: [
        {
            image : PythonLogo,
            label : "Python",
            describe : "Langage de prédilection. Scripts d'automatisation, outils CLI, applications desktop robustes.",
            tags : ["Automatisation","Data analyse"]
        },
        {
            icon : "⚛️",
            label : "Frontend",
            describe : "Interfaces modernes et réactives. De la landing page à l'app mobile cross-platform.",
            tags : ["React","React Native","Flutter","TypeScript","Tailwind CSS"]
        },
        {
            icon : "🔧",
            label : "Backend",
            describe : "APIs solides et scalables. Architecture RESTful, gestion BDD, authentification sécurisée.",
            tags : ["Django","DRF","Appwrite","JWT","MySQL",'Firebase']
        },
        {
            icon : "☁️",
            label : "Cloud & IAM",
            describe : "Déploiement, gestion d'identité et mobilité d'entreprise sur l'écosystème Microsoft.",
            tags : ["Azur","Entra ID","Intune","Power Platform"]
        },
        {
            icon : "🛡️",
            label : "Cybersécurité",
            describe : "Pentesting, sécurité réseau, analyse de vulnérabilités. Hacking éthique",
            tags : ["Securité Offensive & Defensive","CTF","Pentesting","OSINT"]
        },
        {
            icon : "🌐",
            label : "Réseaux & Systèmes",
            describe : "Administration systèmes Linux/Windows, configuration réseau, monitoring et maintenance.",
            tags : ["Linux","Windows Server","Cisco","Aruba"]
        },
    ]
}

export const projects : Omit<ProjetsCardType,"image">[] = [
    {
        indexNumber : "01",
        projectType : "Application Bureau",
        label : "Mettre Zo",
        describe : "Application bureau de rangement d'une aboresence développé avec Python & Flet",
        tags : ["Python","Flet","SQLite"],
        link : "https://github.com/Cimawills/mettre-zo"

    },
    {
        indexNumber : "02",
        projectType : "Application Web",
        label : "C1m4-Voice",
        describe : "Interface d'adminiistration d'un IPBX basé sur Asterisk",
        tags : ["React","Django","DRF","AppWrite"],
        link : "https://github.com/Cimawills/Cima-Voice_Project"

    },
    {
        indexNumber : "03",
        projectType : "Application Mobile",
        label : "Tu as la ref",
        describe : "Application d' upload, visualisation, téléchargement de videos courtes commiques appélé \"ref\"",
        tags : ["React Native","DRF",],
        link : "https://github.com/Cimawills/tu-as-la-ref"

    },
]

export const conntactAccounts = [
    {
        label : "Github",
        link : "https://github.com/Cimawills"
    },
    {
        label : "Facebook",
        link : "https://www.facebook.com/profile.php?id=61580315169168"
    },
    {
        label : "Instagram",
        link : "https://www.instagram.com/cimalesstech/"
    },
]

export const API_VARS = {
    APPWRITE_PROJECT_ID : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    APPWRITE_PROJECT_NAME : import.meta.env.VITE_APPWRITE_PROJECT_NAME,
    APPWRITE_ENDPOINT : import.meta.env.VITE_APPWRITE_ENDPOINT,
    APPWRITE_DATABASE_ID : import.meta.env.VITE_APPWRITE_DATABASE_ID,
} 