import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import PrivateRoute from './components/PrivateRoute';
import Splash from './pages/Splash';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-pink-50">
          <Routes>
            <Route path="/splash" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <main className="container mx-auto px-4 py-8">
                      <Home />
                    </main>
                  </>
                }
              />
              <Route
                path="/products"
                element={
                  <>
                    <Navbar />
                    <main className="container mx-auto px-4 py-8">
                      <Products />
                    </main>
                  </>
                }
              />
              <Route
                path="/products/:id"
                element={
                  <>
                    <Navbar />
                    <main className="container mx-auto px-4 py-8">
                      <ProductDetail />
                    </main>
                  </>
                }
              />
              <Route
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <main className="container mx-auto px-4 py-8">
                      <Cart />
                    </main>
                  </>
                }
              />
              <Route
                path="/order-success"
                element={
                  <>
                    <Navbar />
                    <main className="container mx-auto px-4 py-8">
                      <OrderSuccess />
                    </main>
                  </>
                }
              />
            </Route>

            {/* Redirect to splash for unknown routes */}
            <Route path="*" element={<Navigate to="/splash" replace />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}