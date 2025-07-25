import { PATH_DB } from '../constants/contacts.js';
import path from 'path';

import fs from 'node:fs/promises';

import { getAllContacts } from './getAllContacts.js';

const contactsPath = path.join('src', 'db', `${PATH_DB}`);
export const removeLastContact = async () => {
  const data = await getAllContacts();
  const removeLast = data.slice(0, -1);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(removeLast), 'utf8');
    return removeLast;
  } catch (error) {
    console.error('Сталася помилка під час генерації контактів:', error);
  }
};

console.log(removeLastContact());
