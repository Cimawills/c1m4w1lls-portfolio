import { Client, Account, Databases } from "appwrite";
import { API_VARS } from "../constants";

const client = new Client()
    .setEndpoint(API_VARS.APPWRITE_ENDPOINT)
    .setProject(API_VARS.APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };