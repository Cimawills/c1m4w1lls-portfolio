import clsx from "clsx";

interface LineInterface {
  width?: number;
  height?: number;
  heightFull? : boolean,
  animation?: string;
  bg?: string;
  twStyle?: string;
}

//style={{width : `${width}px`, height : `${height}px` }}

export function Line({ width = 3, height = 30, ...props }: LineInterface) {

  let className = clsx(props.bg ?? "bg-yellow", props.animation, props.twStyle);

  return <div className={className} style={{width : width,height : props.heightFull ? "max-content" : height}}></div>;
}
