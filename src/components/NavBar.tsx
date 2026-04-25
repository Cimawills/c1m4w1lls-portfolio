import { navbarItems } from "../utils/constants";
import { Play } from "lucide-react"

export function NavBar() {
    return (

        <div className="flex flex-row fixed w-full justify-between items-center h-15 bg-bg-soft py-3 px-12 border border-b-yellow-dim">
            <div>
                <span className="text-yellow text-xl font-extrabold tracking-widest font-head">C1M4W1LLS</span>
            </div>
            <div className="flex flex-row gap-3 text-txt-dim">
            {
                navbarItems.map((navItem) => (
                    <a className="uppercase text-sm font-mono" href={navItem.link}>{navItem.label}</a>
                ))
            }
            </div>
        </div>

            
    )
}