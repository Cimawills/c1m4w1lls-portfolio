
import { Line } from "./Layout";
import type { SectionTitleInterface } from "../utils/types";

export function SectionTitle({width=50,...props} : {label :string,width? : number}) {
    return  (
        <span className="flex flex-col gap-2 text-yellow uppercase text-xs font-mono tracking-widest">
            // {props.label}
            <Line width={width} height={3} />
        </span>
    )
}



export default function SectionTitleContainer({...props} : SectionTitleInterface) {
    return (
        <div className="flex flex-col gap-3">
            <SectionTitle label={props.title} />
        <span className="text-3xl font-extrabold font-head">
            {props.subtitle} <span className="text-yellow">{props.coloredSubtitle}</span>
        </span>
        </div>
    )
}