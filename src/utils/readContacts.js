import { PATH_DB } from '../constants/contacts.js';
import path from 'path';

import { readFile } from 'fs/promises';

const contactsPath = path.join('src', 'db', `${PATH_DB}`);

export const readContacts = async () => {
  try {
    const fileContent = await readFile(contactsPath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Помилка читання чи парсингу файлу:', error.message);
    return [];
  }
};
