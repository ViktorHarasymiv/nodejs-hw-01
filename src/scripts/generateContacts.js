import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const existingData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(existingData);

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, PATH_DB, 2),
      'utf8',
    );

    console.log(`Успішно додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Сталася помилка під час генерації контактів:', error);
  }
};

generateContacts(5);
