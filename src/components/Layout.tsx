import clsx from "clsx";

interface LineInterface {
  width?: number;
  height?: number;
  animation?: string;
  bg?: string;
  twStyle? : string
}

export function Line({ width = 3,height = 30, ...props }: LineInterface) {
  let className = clsx(
    props.bg ?? "bg-yellow",
    props.animation,
    props.twStyle,
  );

  return <div className={className}  style={{width : `${width}px`, height : `${height}px` }}></div>;
}
