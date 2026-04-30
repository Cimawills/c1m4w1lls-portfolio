import { MenuIcon } from "lucide-react";
import { navbarItems } from "../utils/constants";
import { useState } from "react";
import clsx from "clsx";

export function NavBar() {

  const [showMenu,setShowMenu] = useState<boolean>(false)
  return (
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row fixed  w-full justify-between items-center  bg-bg-soft py-3 px-6 md:px-12 border border-b-yellow-dim">

      <div className="flex w-full md:w-auto justify-between">
        <div>
          <span className="text-yellow text-xl font-extrabold tracking-widest font-head">
            C1M4W1LLS
          </span>
        </div>

        <button className="md:hidden" onClick={()=>setShowMenu(!showMenu)}>
          <MenuIcon className="text-yellow-dim" />
        </button>
      </div>

      <div className={clsx("md:flex gap-3 text-txt-dim transition duration-100 ease-out",showMenu?"flex flex-col items-end  w-full md:flex-row md:justify-end":"hidden")} >
        {navbarItems.map((navItem) => (
          <a className="uppercase text-sm font-mono" onClick={()=>setShowMenu(!showMenu)} href={navItem.link}>
            {navItem.label}
          </a>
        ))}
      </div>

    </div>
  );
}
