import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { setCredentials, logout, setError } from '../store/slices/authSlice';
import { authService } from '../services/api';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token, error } = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    try {
      const data = await authService.login(email, password);
      dispatch(setCredentials(data));
      localStorage.setItem('token', data.token);
      navigate('/products');
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Login failed'));
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await authService.register(email, password);
      navigate('/login');
    } catch (err: any) {
      dispatch(setError(err.response?.data?.message || 'Registration failed'));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/splash');
  };

  return {
    user,
    token,
    error,
    login,
    register,
    logout: handleLogout,
  };
};