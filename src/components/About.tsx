import { Play } from "lucide-react";
import SkewForm from "./SkewForm";
import { Line } from './Layout';
import type {  AboutInfoProps } from "../utils/types";


export function About({aboutInfos} : AboutInfoProps) {
  
  return (
    <div className="flex flex-col gap-5  px-8 py-12">
      <div className="flex flex-row gap-2 text-xs items-center ">
        <Play color="#FFD600" fill="#FFD600" size={12} />
        <span className="text-yellow font-mono">root@c1m4w1lls:~$ whoami</span>
      </div>

      <div className="flex flex-col">
        <span className="hero-title text-txt">CISSÉ</span>
        <span className="hero-title text-yellow">MAMADOU</span>
        <span className="hero-title text-txt">WILLIAMS</span>
      </div>

      <div className="flex flex-row items-center gap-3">
        <span className="text-yellow-dim font-mono tracking-wider text-3xl">aka C1M4W1LLS</span>
        <Line width={14} twStyle="animate-blink-line" />
      </div>

      <div className="flex flex-row gap-3">
        <Line width={3} height={80} />
        <div className="flex flex-col font-mono text-txt-dim text-sm">
          {
            aboutInfos?.aboutItems?.map((item) => (<span>{item}</span> ))
          }
        </div>
      </div>

      <div className="flex gap-3 mt-3 flex-wrap">
        {
          aboutInfos?.mainSkills?.map((item) => ( <SkewForm label={item} /> ))
        }
      </div>

      <div className="flex gap-5">
        <SkewForm
          label="Voir mes projets"
          bg="bg-yellow"
          labelColor="text-txt-dimmer"
          labelTwStyle="tracking-wider"
          twStyle="px-5 py-2"
          link={"#projet"}
          hover="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
        />
        <SkewForm
          label="me contacter"
          bg="transparent"
          labelColor="text-txt-yellow"
          labelTwStyle="tracking-wider"
          twStyle="px-5 py-2"
          link={"#contact"}
          hover="hover:bg-yellow-glow"
        />
      </div>
    </div>
  );
}
