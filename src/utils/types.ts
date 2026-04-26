export type navbarItemsTypes =  {
    label : string
    link : string
}

export interface SkillCardInterface{
    image : string,
    title : string
    describe : string
    tags : string[]
}

export type  ProjetsCardType =  {
    projectType : string
    indexNumber : string
} & SkillCardInterface;

export interface  ThrophieCardInterface{
    ranking : number,
    title : string
    describe : string
    tags : string[],
    thophyIcon? : string,
}