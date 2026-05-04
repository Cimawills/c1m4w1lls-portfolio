import type { TrophiesProps } from "../utils/types";
import { ThrophieCard } from "./Card";
import SectionTitleContainer, { SectionTitle } from "./Others";

export function Trophies({trophies} : TrophiesProps) {
  return (
    <div className="flex flex-col gap-5 bg-bg-alt px-8 py-12">
      
      <SectionTitleContainer 
          title="Palmares"
          subtitle="Sur le"
          coloredSubtitle="terrain"
        />

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
