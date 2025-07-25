import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';

const DB_PATH = path.resolve('src', 'db', `${PATH_DB}`);

export const generateContacts = async (number) => {
  try {
    const existingData = await fs.readFile(DB_PATH, 'utf8');
    const contacts = JSON.parse(existingData);

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(
      DB_PATH,
      JSON.stringify(updatedContacts, DB_PATH, 2),
      'utf8',
    );

    console.log(`Успішно додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Сталася помилка під час генерації контактів:', error);
  }
};

console.log(generateContacts(5));
