import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Database setup
const adapter = new JSONFile('db.json');
const db = new Low(adapter);
await db.read();
db.data ||= { users: [], products: [], orders: [] };
await db.write();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});