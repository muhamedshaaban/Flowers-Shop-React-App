import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Flower } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { setCredentials } from '../store/slices/authSlice';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    const mockUser = { id: '1', username, email: '' };
    dispatch(setCredentials({ user: mockUser, token: 'mock-token' }));
    navigate('/products');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col items-center mb-8">
        <Flower className="h-16 w-16 text-rose-500 mb-4" />
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Input
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" fullWidth className="mt-4">
          Login
        </Button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-rose-500 hover:text-rose-600">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;