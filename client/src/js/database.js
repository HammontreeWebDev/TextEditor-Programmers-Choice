import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Accept content from page and store in IndexedDB
export const putDb = async (content) => {
  console.log('Now adding data to the database!');
  const database = await openDB('jate', 1);
  const trans = database.transaction('jate', 'readwrite');
  const dbData = trans.objectStore('jate');

  dbData.put({ id: 1, value: content });
}

// Grab all content for text editor from database
export const getDb = async () => {
  console.log('Now getting data from the database!');
  const database = await openDB('jate', 1);
  const trans = database.transaction('jate', 'readonly');
  const dbDataTrans = trans.objectStore('jate');
  const dbData = dbDataTrans.get(1);
  const response = dbData;
  return response.value;
};

initdb();
