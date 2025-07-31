import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  const fileData = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(fileData);
  return contacts.length;
};

const total = await countContacts();
console.log(`Всього контактів: ${total}`);
