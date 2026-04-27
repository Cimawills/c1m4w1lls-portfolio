import { API_VARS } from "../constants";
import type { AboutInfoProps, ProjetsCardProps, SkillsProps,  SocialInfoProps, TrophiesProps } from "../types";
import { tables } from "./appwrite.";

export async function getSkills() : Promise<SkillsProps> {
    try {
        const response = await tables.listRows({
            databaseId :API_VARS.APPWRITE_DATABASE_ID,
            tableId : "p",
        });
        return response.rows as unknown as SkillsProps;
    } catch (error) {
        console.table(error);
        throw error;
    }
}

export async function getProjects() : Promise<ProjetsCardProps> {
    try {
        const response = await tables.listRows({
            databaseId :API_VARS.APPWRITE_DATABASE_ID,
            tableId : "projects",
        });
        return response.rows as unknown as ProjetsCardProps;
    } catch (error) {
        console.table(error);
        throw error;
    }
}

export async function getTrophies() : Promise<TrophiesProps> {
    try {
        const response = await tables.listRows({
            databaseId :API_VARS.APPWRITE_DATABASE_ID,
            tableId : "trophies",
        });
        return response.rows as unknown as TrophiesProps;
    } catch (error) {
        console.table(error);
        throw error;
    }
}

export async function getAboutInfos() : Promise<AboutInfoProps> {
    try {
        const response = await tables.listRows({
            databaseId :API_VARS.APPWRITE_DATABASE_ID,
            tableId : "aboutinfo",
        });
        console.log(response.rows[0])
        return response.rows[0] as unknown as AboutInfoProps;
        
    } catch (error) {
        console.table(error);
        throw error;
    }
}

export async function getSocialInfos() : Promise<SocialInfoProps[]> {
    try {
        const response = await tables.listRows({
            databaseId :API_VARS.APPWRITE_DATABASE_ID,
            tableId : "socialinfos",
        });
        console.log(response.rows[0])
        return response.rows as unknown as SocialInfoProps[];
        
    } catch (error) {
        console.table(error);
        throw error;
    }
}