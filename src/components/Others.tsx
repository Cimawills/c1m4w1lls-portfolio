
import { Line } from "./Layout";

export function SectionTitle({width=50,...props} : {label :string,width? : number}) {
    return  (
        <span className="flex flex-col gap-2 text-yellow uppercase text-xs font-mono tracking-widest">
            // {props.label}
            <Line width={width} height={3} />
        </span>
    )
}