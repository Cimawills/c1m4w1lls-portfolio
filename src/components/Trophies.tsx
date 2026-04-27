import type { TrophiesProps } from "../utils/types";
import { ThrophieCard } from "./Card";
import { SectionTitle } from "./Others";

export function Trophies({trophies} : TrophiesProps) {
  return (
    <div className="flex flex-col gap-5 bg-bg-alt px-8 py-12">
      <div className="flex flex-col gap-3">
        <SectionTitle label="Palmares" />
        <span className="text-3xl font-extrabold font-head">
          Sur le <span className="text-yellow">terrain</span>
        </span>
      </div>

      <div className="grid 3xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 gap-3 w-full flex-wrap">
        {
          trophies.map((trophy) =>(
            <ThrophieCard {...trophy} />
          ))
        }
      </div>
    </div>
  );
}
