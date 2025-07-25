import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

import fakeContact from './createFakeContact.js';

export const writeContacts = (async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts);
  try {
    await fs.writeFile(`${PATH_DB}`, data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})(fakeContact);
