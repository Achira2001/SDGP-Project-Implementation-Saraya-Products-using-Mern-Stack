import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Cart from './screens/Cart';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <CartProvider>
          <Home />
          <Cart />
        </CartProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
