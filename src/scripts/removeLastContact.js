import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    if (!data.length) return;
    data.pop();

    await writeContacts(data);
    console.log(`Видалено останній контакт. Залишилось: ${data.length}`);
  } catch (error) {
    console.error('Сталася помилка під час усунення контакту:', error);
  }
};

removeLastContact();
