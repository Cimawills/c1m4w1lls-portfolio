import { Client, Account, Databases,TablesDB } from "appwrite";
import { API_VARS } from "../constants";

console.log(API_VARS.APPWRITE_ENDPOINT)

const client = new Client()
    .setEndpoint(API_VARS.APPWRITE_ENDPOINT)
    .setProject(API_VARS.APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const tables  = new TablesDB(client)

export { client, account, tables };