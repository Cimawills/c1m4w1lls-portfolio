import type { ProjetsCardType, SkillCardInterface, ThrophieCardInterface } from "../utils/types";
import SkewForm from "./SkewForm";

export function SkillCard({...props} : SkillCardInterface) {
    return (
        <div className="
            flex flex-col  gap-3 bg-bg-alt border border-border-main p-4
            transition-transform duration-300 ease-in-out
            hover:-translate-y-0.75 hover:border-border-bright
            before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
            before:h-0.5 before:bg-yellow
            before:scale-x-0 before:origin-left
            before:transition-transform before:duration-300
            hover:before:scale-x-100
            "
        >
            {
                props.image 
                ? <img src={`/images/${props.image}`} className="aspect-square w-6"/> 
                : <span className="text-xl">{props.icon}</span>
            }
            <span className="text-md font-bold text-yellow font-head">{props.label}</span>
            <p className="font-mono text-xs text-txt-dim">
                {props.describe}
            </p>

            <div className="flex gap-2 flex-wrap">
                {
                    props.tags.map((tag) => (
                        <div className="bg-yellow-glow py-[0.3px] px-3 rounded-sm border border-border-main">
                            <span className="text-yellow font-mono text-[10px] text-center">{tag}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export function ProjectCard({...props} : Omit<ProjetsCardType,"image">) {
    return (
        <a className="
            flex flex-col  gap-3 bg-bg-alt border border-border-main p-4
            hover:border-y-2 hover:border-y-border-bright
            hover:border-x-2 hover:border-x-yellow
            "
            href={props.link} 
            target="_blank"
        >
            <div className="flex font-mono justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-yellow font-mono tracking-wider">{props.projectType}</span>
                    <span className="font-head font-bold text-2xl tracking-wider">{props.label}</span>
                </div>
                
                <span className="text-yellow-dim font-head text-5xl font-black tracking-wider">{props.indexNumber}</span>
            </div>

            <p className="text-txt-dim font-mono text-xs">
                {props.describe}
            </p>

            <div className="flex gap-2 flex-wrap">
                {
                    props.tags.map((tag) => (
                        <div className="bg-bg-alt py-[0.3px] px-3 rounded-sm border border-border-main">
                            <span className="text-txt-dim font-mono text-[10px] text-center">{tag}</span>
                        </div>
                    ))
                }
            </div>

        </a>
    )
}




export function ThrophieCard({...props} : ThrophieCardInterface) {

    let thophyIcon :  string
    if (props.thophyIcon) {
        thophyIcon = props.thophyIcon
    }
    else{
        switch (props.ranking) {
            case 1:
                thophyIcon = "🥇"
                break;
            case 2:
                thophyIcon = "🥈"
                break;
            case 3:
                thophyIcon = "🥉"
                break;
        
            default:
                thophyIcon = ""
                break;
        }
    }

    return (
        <div className="
            flex flex-col  gap-4  bg-yellow-glow border border-border-bright p-4
            rounded-md 
            "
        >
            <div className="flex font-mono justify-between items-center">
                <span className="text-yellow font-head text-5xl font-black tracking-wider">#{props.ranking}</span>
                <span className="text-3xl">{thophyIcon}</span>
            </div>

            <h1 className="font-bold font-head">{props.title}</h1>

            <p className="text-txt-dim font-mono text-xs">
                {props.describe}
            </p>

            <div className="flex gap-2 flex-wrap">
                {
                    props.tags.map((tag) => (
                        <SkewForm 
                            label={tag}
                            labelColor="text-yellow"
                            twStyle="border border-y-yellow border-x-0"
                        />
                    ))
                }
            </div>

        </div>
    )
}