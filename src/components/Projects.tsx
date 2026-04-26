import { projects } from "../utils/constants";
import { ProjectCard } from "./Card";

export function Projects() {
  return (
    <div className="flex flex-col gap-5  px-8 py-12">
      <div className="flex flex-col gap-3">
        <span className="text-yellow uppercase text-xs font-mono tracking-widest">
          // Projets
        </span>
        <span className="text-3xl font-extrabold font-head">
          Ce que j'ai <span className="text-yellow">construit</span>
        </span>
      </div>

      <div className="grid 3xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 w-full flex-wrap">
        {projects.map((item) => (
          <ProjectCard
            indexNumber={item.indexNumber}
            projectType={item.projectType}
            title={item.title}
            describe={item.describe}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}
