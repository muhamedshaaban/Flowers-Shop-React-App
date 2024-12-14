import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-gray-600">Price: {product.price} RO.</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;