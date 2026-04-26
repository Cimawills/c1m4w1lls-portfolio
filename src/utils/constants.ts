import type { navbarItemsTypes, ProjetsCardType, SkillCardInterface } from "./types";
import PythonLogo from "../assets/python-logo.png"
import FrontendImg from "../assets/frontend-img.png"

export const navbarItems : navbarItemsTypes[]  = [
    {
        label : "À propos",
        link : "#hero"
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
        link : "#"
    },
]


export const mainSkills = ["Administrateur Système & Reseaux","Développeur Full-Stack","Cybersecurité","Hacking","IA & Automatisation","Cloud Computing"]

export const skills : SkillCardInterface[] = [
    {
        image : PythonLogo,
        title : "Python",
        describe : "Langage de prédilection. Scripts d'automatisation, outils CLI, applications desktop robustes.",
        tags : ["Automatisation","Data analyse"]
    },
    {
        image : PythonLogo,
        title : "Frontend",
        describe : "Interfaces modernes et réactives. De la landing page à l'app mobile cross-platform.",
        tags : ["React","React Native","Flutter","TypeScript","Tailwind CSS"]
    },
    {
        image : PythonLogo,
        title : "Backend",
        describe : "APIs solides et scalables. Architecture RESTful, gestion BDD, authentification sécurisée.",
        tags : ["Django","DRF","Appwrite","JWT","MySQL"]
    },
    {
        image : PythonLogo,
        title : "Cloud & IAM",
        describe : "Déploiement, gestion d'identité et mobilité d'entreprise sur l'écosystème Microsoft.",
        tags : ["Azur","Entra ID","Intune","Power Platform"]
    },
    {
        image : PythonLogo,
        title : "Cybersécurité",
        describe : "Pentesting, sécurité réseau, analyse de vulnérabilités. Hacking éthique",
        tags : ["Azur","Entra ID","Intune","Power Platform"]
    },
    {
        image : PythonLogo,
        title : "Réseaux & Systèmes",
        describe : "Administration systèmes Linux/Windows, configuration réseau, monitoring et maintenance.",
        tags : ["Linux","Windows Server","Cisco","Aruba"]
    },
]

export const projects : Omit<ProjetsCardType,"image">[] = [
    {
        indexNumber : "01",
        projectType : "Application Bureau",
        title : "Mettre Zo",
        describe : "Application bureau de rangement d'une aboresence développé avec Python & Flet",
        tags : ["Python","Flet","SQLite"]

    },
]

export const API_VARS = {
    APPWRITE_PROJECT_ID : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    APPWRITE_PROJECT_NAME : import.meta.env.VITE_APPWRITE_PROJECT_NAME,
    APPWRITE_ENDPOINT : import.meta.env.VITE_APPWRITE_ENDPOINT,
} 