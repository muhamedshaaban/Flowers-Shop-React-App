import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const router = express.Router();
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

router.post('/register', async (req, res) => {
  await db.read();
  const { email, password } = req.body;

  try {
    const existingUser = db.data.users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword
    };

    db.data.users.push(newUser);
    await db.write();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  await db.read();
  const { email, password } = req.body;

  try {
    const user = db.data.users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;