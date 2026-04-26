import { ThrophieCard } from "./Card";

export function Trophies() {
  return (
    <div className="flex flex-col gap-5 bg-bg-alt px-8 py-12">
      <div className="flex flex-col gap-3">
        <span className="text-yellow uppercase text-xs font-mono tracking-widest">
          // Palmares
        </span>
        <span className="text-3xl font-extrabold font-head">
          Sur le <span className="text-yellow">terrain</span>
        </span>
      </div>

      <div className="grid 3xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 gap-3 w-full flex-wrap">
        <ThrophieCard
          ranking={3}
          title="Cyber Africa Forum — Hackathon Cybersécurité"
          describe="3ème place au premier Hackathon organisé lors du Cyber Africa Forum — le rendez-vous incontournable de la cybersécurité en Afrique. En duo avec mon coéquipier, on a relevé le défi face aux meilleurs profils du continent."
          tags={["Cyber Africa Forum", "TOP 3", "ABIDJAN"]}
        />
      </div>
    </div>
  );
}
