import type { ProjetsCardProps } from "../utils/types";
import { ProjectCard } from "./Card";
import SectionTitleContainer, { SectionTitle } from "./Others";

export function Projects({projects} : ProjetsCardProps) {
  return (
    <div className="flex flex-col gap-5  px-8 py-12">
      
      <SectionTitleContainer 
        title="Projets"
        subtitle="Ce que j'ai"
        coloredSubtitle="construit"
      />

      <div className="grid 3xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 w-full flex-wrap">
        {projects.map((item) => (
          <ProjectCard {...item} />
        ))}
      </div>
    </div>
  );
}
