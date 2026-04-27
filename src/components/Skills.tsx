import type { SkillsProps } from "../utils/types";
import { SkillCard } from "./Card";
import { SectionTitle } from "./Others";



export default function Skills({skills} : SkillsProps) {
  
  return (
    <div className="flex flex-col gap-5 bg-bg-alt px-8 py-12">
      <div className="flex flex-col gap-3">
        <SectionTitle label="Competences" />
        <span className="text-3xl font-extrabold font-head">
          Mes <span className="text-yellow">armes</span>
        </span>
      </div>

      <div className="grid 3xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 w-full flex-wrap">
        {skills.map((skillItem) => (
          <SkillCard {...skillItem} />
        ))}
      </div>
    </div>
  );
}
