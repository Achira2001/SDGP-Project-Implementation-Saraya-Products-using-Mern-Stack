import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Signin from './screens/Signin'; // Import the Signin component
import Signup from './screens/Signup'; // Import the Signup component

import { CartProvider } from 'react-use-cart';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Route, Routes

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home component on root */}
            <Route path="/cart" element={<Cart />} /> {/* Cart component */}
            <Route path="/signin" element={<Signin />} /> {/* Signin component */}
            <Route path="/signup" element={<Signup />} /> {/* Signup component */}
          </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
