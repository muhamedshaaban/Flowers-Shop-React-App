import React from 'react';
import ProductCard from '../components/ProductCard';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Tulip flower',
    price: 8,
    description: 'Beautiful tulip bouquet',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80'

  },
  {
    id: '2',
    name: 'Orange flower',
    price: 4,
    description: 'Vibrant orange gerbera',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'White flower',
    price: 5,
    description: 'Pure white daisies',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Red flower',
    price: 7,
    description: 'Romantic red roses',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80'
  }
];

const Products: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;