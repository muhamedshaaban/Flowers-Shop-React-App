import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flower } from 'lucide-react';
import Button from '../components/Button';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <Flower className="h-32 w-32 text-rose-500 mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Welcome to Flower Shop
      </h1>
      <div className="space-y-4 w-full max-w-xs">
        <Button
          onClick={() => navigate('/login')}
          fullWidth
          className="text-lg py-3"
        >
          Login
        </Button>
        <Button
          onClick={() => navigate('/signup')}
          variant="secondary"
          fullWidth
          className="text-lg py-3"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Splash;