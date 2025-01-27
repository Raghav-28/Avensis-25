import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite Cloud endpoint
  .setProject('67971d140035e520da63'); // Replace with your actual project ID

export const account = new Account(client);
