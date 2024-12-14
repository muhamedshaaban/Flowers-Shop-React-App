import React from 'react';
import { Flower } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Flower className="h-24 w-24 text-rose-500 mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Fresh & beautiful flowers
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Browse our collection of handpicked bouquets for every occasion
      </p>
    </div>
  );
};

export default Home;