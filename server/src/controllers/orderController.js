import db from '../config/db.js';

export const createOrder = async (req, res) => {
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
};

export const getUserOrders = async (req, res) => {
  await db.read();
  const userOrders = db.data.orders.filter(order => order.userId === req.user.id);
  res.json(userOrders);
};