import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Cart from './screens/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            {/* Add more routes as needed */}
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
