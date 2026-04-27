import type { SocialInfoProps } from "../utils/types";
import { SectionTitle } from "./Others";


export function Contact({socialInfos} : SocialInfoProps) {
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
            
            <span className=" font-extrabold font-head text-yellow text-md md:text-3xl">
               <a href="mailto:williamsmamadou@gmail.com">williamsmamadou@gmail.com</a>
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3 font-mono tracking-wider text-txt-dim uppercase text-sm rounded-xl">
                
                {
                    socialInfos?.map((item) => (
                        <a href={item.link} target="_blank" className="flex flex-wrap  py-2 px-3 items-center gap-2 border border-border-main hover:border-yellow">
                            <img src={`/images/${item.image}`} className="w-4 aspect-square" />
                            <span className="text-sm md:text-md">{item.label}</span>
                        </a>
                    ))
                }

            </div>

        </div>
    )
}