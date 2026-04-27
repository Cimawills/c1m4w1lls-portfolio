import { conntactAccounts } from "../utils/constants";
import { SectionTitle } from "./Others";


export function Contact() {
    return (
        <div className="flex flex-col gap-5 px-8 py-12 justify-center items-center text-center">
            <div className="flex flex-col gap-3">
                <SectionTitle label="Contact" />
                
            </div>

            <span className="text-3xl font-extrabold font-head text-center">
                Let's <span className="text-yellow">connect</span>
            </span>

            <span className="text-sm text-txt-dimmer  text-wrap  font-head text-center">
               Un projet ? Une collab ? Une opportunité ? La porte est ouverte.
            </span>
            
            <span className="text-3xl font-extrabold font-head text-yellow">
               williamsmamadou@gmail.com
            </span>

            <div className="flex gap-3 font-mono tracking-wider text-txt-dim uppercase text-sm rounded-xl">
                
                {
                    conntactAccounts.map((item) => (
                        <a href={item.link} target="_blank" className="flex p-1 px-3 border border-border-main hover:border-yellow">
                            {item.label}
                        </a>
                    ))
                }

            </div>

        </div>
    )
}