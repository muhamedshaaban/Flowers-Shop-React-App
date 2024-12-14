import db from '../config/db.js';

export const getAllProducts = async (req, res) => {
  await db.read();
  res.json(db.data.products);
};

export const getProductById = async (req, res) => {
  await db.read();
  const product = db.data.products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};