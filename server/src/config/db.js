import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

// Initialize database with default data
const initializeDb = async () => {
  await db.read();
  db.data ||= {
    users: [],
    products: [
      {
        id: '1',
        name: 'Tulip flower',
        price: 8,
        description: 'Beautiful tulip bouquet',
        image: 'https://images.unsplash.com/photo-1587162146766-e06b1189b907?auto=format&fit=crop&q=80'
      },
      {
        id: '2',
        name: 'Orange flower',
        price: 4,
        description: 'Vibrant orange gerbera',
        image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80'
      },
      {
        id: '3',
        name: 'White flower',
        price: 5,
        description: 'Pure white daisies',
        image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80'
      },
      {
        id: '4',
        name: 'Red flower',
        price: 7,
        description: '10 red flowers',
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80'
      }
    ],
    orders: []
  };
  await db.write();
};

initializeDb();

export default db;