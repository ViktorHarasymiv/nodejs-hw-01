import { PATH_DB } from '../constants/contacts.js';

import { readFile } from 'fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Помилка читання чи парсингу файлу:', error.message);
    return [];
  }
};
