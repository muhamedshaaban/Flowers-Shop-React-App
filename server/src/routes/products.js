import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import auth from '../middleware/auth.js';

const router = express.Router();
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

// Get all products
router.get('/', auth, async (req, res) => {
  await db.read();
  res.json(db.data.products);
});

// Get single product
router.get('/:id', auth, async (req, res) => {
  await db.read();
  const product = db.data.products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

export default router;