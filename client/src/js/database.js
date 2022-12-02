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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  if (db.objectStoreNames.contains('jate')) {
    db.put('jate', 'content', content);
  }
  else {
    console.error(`putDb not implemented: ${new Error}`);
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  if (db.objectStoreNames.contains('jate')) {
    const value = await db.get('jate', 'content');
    return value;
  }
  else {
    console.error('getDb not implemented');
  }
};

initdb();
