import type { ProjetsCardProps } from "../utils/types";
import { ProjectCard } from "./Card";
import { SectionTitle } from "./Others";

export function Projects({projects} : ProjetsCardProps) {
  return (
    <div className="flex flex-col gap-5  px-8 py-12">
      <div className="flex flex-col gap-3">
        <SectionTitle label="Projets" />
        <span className="text-3xl font-extrabold font-head">
          Ce que j'ai <span className="text-yellow">construit</span>
        </span>
      </div>

      <div className="grid 3xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 w-full flex-wrap">
        {projects.map((item) => (
          <ProjectCard {...item} />
        ))}
      </div>
    </div>
  );
}
