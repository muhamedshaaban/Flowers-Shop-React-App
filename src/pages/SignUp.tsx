import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flower } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col items-center mb-8">
        <Flower className="h-16 w-16 text-rose-500 mb-4" />
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit" fullWidth className="mt-4">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;