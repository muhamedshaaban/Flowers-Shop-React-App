import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <CheckCircle className="h-24 w-24 text-green-500 mb-8" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-600">
        Redirecting to home page...
      </p>
    </div>
  );
};

export default OrderSuccess;