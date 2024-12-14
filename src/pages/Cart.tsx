import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
import Button from '../components/Button';

const Cart: React.FC = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // TODO: Implement actual order placement
    dispatch(clearCart());
    navigate('/order-success');
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Button onClick={() => navigate('/products')}>Browse Products</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">Price: {item.price} RO.</p>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <p className="text-lg font-semibold">Total: {total} RO.</p>
        <Button onClick={handlePlaceOrder} fullWidth className="mt-4">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;