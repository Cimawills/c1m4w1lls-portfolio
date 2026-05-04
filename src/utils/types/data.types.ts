export interface ServicesInterface  {
    image : string
    title : string
    describe : string
    technologies : string[]
    skills : string[]
}

export type ServicesProps = {
    services : ServicesInterface[]
}