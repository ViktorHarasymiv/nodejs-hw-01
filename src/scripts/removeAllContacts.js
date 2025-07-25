import { PATH_DB } from '../constants/contacts.js';
import path from 'path';

import fs from 'node:fs/promises';

const contactsPath = path.join('src', 'db', `${PATH_DB}`);

export const removeAllContacts = async () => {
  const EmptyData = JSON.stringify([]);
  try {
    await fs.writeFile(contactsPath, EmptyData, 'utf8');
    console.log('База даних контактів успішно усунена.');
  } catch (error) {
    console.error('Сталася помилка під час генерації контактів:', error);
  }
};

removeAllContacts();
