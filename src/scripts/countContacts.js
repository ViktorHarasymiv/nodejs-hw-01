import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.join('src', 'db', `${PATH_DB}`);

export const countContacts = async () => {
  const fileData = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(fileData);
  return contacts.length;
};

const total = await countContacts();
console.log(`Всього контактів: ${total}`);
