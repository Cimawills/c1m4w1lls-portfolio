import clsx from "clsx"

interface LineInterface{
    widht? : number,
    animation? : string
}

export function Line({widht=3,...props}:LineInterface) {

    let className = clsx(
        "bg-yellow",
        `w-[${widht}px] `,
        props.animation
    )
    
    console.log(className)
    return (
        <div className={className}></div>
    )
}