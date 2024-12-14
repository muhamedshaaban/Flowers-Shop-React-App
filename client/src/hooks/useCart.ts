import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { addToCart, removeFromCart, clearCart } from '../store/slices/cartSlice';
import { orderService } from '../services/api';
import { Product } from '../types';

export const useCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handlePlaceOrder = async () => {
    try {
      await orderService.create({ items, total });
      dispatch(clearCart());
      navigate('/order-success');
    } catch (error) {
      console.error('Failed to place order:', error);
    }
  };

  return {
    items,
    total,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    placeOrder: handlePlaceOrder,
  };
};