export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
  total: number;
}