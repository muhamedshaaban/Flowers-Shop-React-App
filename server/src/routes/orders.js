import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import auth from '../middleware/auth.js';

const router = express.Router();
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

// Create order
router.post('/', auth, async (req, res) => {
  await db.read();
  const { items, total } = req.body;
  
  const newOrder = {
    id: Date.now().toString(),
    userId: req.user.id,
    items,
    total,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  db.data.orders.push(newOrder);
  await db.write();

  res.status(201).json(newOrder);
});

// Get user orders
router.get('/my-orders', auth, async (req, res) => {
  await db.read();
  const userOrders = db.data.orders.filter(order => order.userId === req.user.id);
  res.json(userOrders);
});

export default router;