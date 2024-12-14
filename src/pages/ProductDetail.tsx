import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { addToCart } from '../store/slices/cartSlice';

const MOCK_PRODUCTS = {
  '4': {
    id: '4',
    name: 'Red flower',
    price: 7,
    description: '10 red flowers.',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80'
  }
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS[id as keyof typeof MOCK_PRODUCTS];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">Description: {product.description}</p>
      <p className="text-lg font-semibold mb-6">Price: {product.price} RO.</p>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductDetail;