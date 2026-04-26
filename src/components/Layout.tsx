import clsx from "clsx";

interface LineInterface {
  widht?: number;
  animation?: string;
  bg?: string;
}

export function Line({ widht = 3, ...props }: LineInterface) {
  let className = clsx(
    `w-[${widht}px]`,
    props.bg ?? "bg-yellow",
    props.animation,
  );

  return <div className={className}></div>;
}
