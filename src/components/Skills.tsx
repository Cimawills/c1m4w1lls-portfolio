import { skills } from "../utils/constants";
import { SkillCard } from "./Card";

export default function Skills() {
  return (
    <div className="flex flex-col gap-5 bg-bg-alt px-8 py-12">
      <div className="flex flex-col gap-3">
        <span className="text-yellow uppercase text-xs font-mono tracking-widest">
          // Competences
        </span>
        <span className="text-3xl font-extrabold font-head">
          Mes <span className="text-yellow">armes</span>
        </span>
      </div>

      <div className="grid 3xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 w-full flex-wrap">
        {skills.map((skillItem) => (
          <SkillCard
            image={skillItem.image}
            title={skillItem.title}
            describe={skillItem.describe}
            tags={skillItem.tags}
          />
        ))}
      </div>
    </div>
  );
}
