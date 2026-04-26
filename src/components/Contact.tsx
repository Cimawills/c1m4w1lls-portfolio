

export function Contact() {
    return (
        <div className="flex flex-col gap-5 px-8 py-12 justify-center items-center text-center">
            <div className="flex flex-col gap-3">
                <span className="text-yellow uppercase text-xs font-mono tracking-widest">
                // Contact
                </span>
                
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
                
                <a href="https://github.com/Cimawills" className="flex p-1 px-3 border border-border-main hover:border-yellow">
                    Github
                </a>
                
                <a href="https://github.com/Cimawills" className="flex p-1 px-3 border border-border-main hover:border-yellow">
                    Linkedin
                </a>

            </div>

        </div>
    )
}