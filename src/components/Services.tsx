import type { ServicesProps } from "../utils/types/data.types";
import ServicesCard from "./Card";
import SectionTitleContainer from "./Others";

export default function Services({...props} : ServicesProps) {
    return (
        <div className="flex flex-col gap-5  px-8 py-12">
            <SectionTitleContainer 
                title="Services"
                subtitle="Comment je peux vous aider"
                coloredSubtitle="aider"
            />

            <div className="grid 3xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 w-full flex-wrap">
                {props.services?.map((service,index) => (
                    <ServicesCard {...service} />
                ))}
            </div>
        </div>
    )
} 