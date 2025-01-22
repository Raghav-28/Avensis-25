// appwriteService.js

import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API Endpoint
    .setProject('avensis'); //  Appwrite Project ID

export const account = new Account(client);
