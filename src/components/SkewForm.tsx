import clsx from "clsx"
import { twMerge } from 'tailwind-merge'
interface SkekFormInterface{
    label : string
    bg? : string
    link? : string|null
    labelColor? : string,
    labelTwStyle? : string,
    twStyle? : string
    hover? : string
}

export default function SkewForm({...props}:SkekFormInterface){

    let mainClassName  = twMerge(clsx(
        "py-1 px-3 font-mono border-y border-t-border-bright border-b-border-main -skew-x-12",
        props.bg ?? "bg-yellow-glow",
        props.hover,
        props.twStyle,
    ))

    let textClass  = twMerge(clsx(
        "uppercase text-xs block skew-x-12", 
        props.labelColor ?? "text-yellow-dim",
        props.labelTwStyle
    ))

    return (
        <>
            {
                props.link
                ?
                    <a href={props.link} className={mainClassName}>
                        <span className={textClass}>{props.label}</span>
                    </a>
                :
                    <div className={mainClassName}>
                        <span className={textClass}>{props.label}</span>
                    </div>
                
            }
        </>
    )
}