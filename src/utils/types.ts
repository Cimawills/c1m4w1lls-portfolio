export type navbarItemsTypes =  {
    label : string
    link : string
}

export interface SkillCardInterfaceCommun{
    
    label : string
    describe : string
    tags : string[]
}

interface SkillCardInterfaceWithImage extends SkillCardInterfaceCommun{
    image : string,
    icon? : never
}

interface SkillCardInterfaceWithIconText extends SkillCardInterfaceCommun{
    image? : never,
    icon : string
}

export type SkillCardInterface = SkillCardInterfaceWithIconText | SkillCardInterfaceWithImage

export interface SkillsProps {
  skills : SkillCardInterface[]
} 


 
export type  ProjetsCardType =  {
    projectType : string
    indexNumber : string
    link : string
} & SkillCardInterfaceCommun;

export type ProjetsCardProps = { projects : ProjetsCardType[] }

export interface  ThrophieCardInterface{
    ranking : number,
    title : string
    describe : string
    tags : string[],
    thophyIcon? : string,
}; 

export type TrophiesProps = { trophies : ThrophieCardInterface[] }

export interface AboutInfoInterface{
    aboutItems : string[]
    mainSkills : string[]
}

export type AboutInfoProps = {
    aboutInfos : AboutInfoInterface
}
