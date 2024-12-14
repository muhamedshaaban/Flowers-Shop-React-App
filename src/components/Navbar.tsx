import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Flower } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <nav className="bg-pink-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Flower className="h-6 w-6 text-rose-500" />
          <span className="text-2xl font-semibold">Flower</span>
        </Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-rose-500">Home</Link>
          <Link to="/products" className="hover:text-rose-500">Products</Link>
          {user ? (
            <>
              <Link to="/cart" className="hover:text-rose-500">
                Cart ({items.length})
              </Link>
              <Link to="/logout" className="hover:text-rose-500">Logout</Link>
            </>
          ) : (
            <Link to="/login" className="hover:text-rose-500">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;