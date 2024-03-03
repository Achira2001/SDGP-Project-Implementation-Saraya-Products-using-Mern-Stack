import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './screens/Home.js';
import Admin from './screens/Signup/Admin.js';
import Lorry from './screens/Signup/Lorry.js';
import Rider from './screens/Signup/Rider.js';
import Stores from './screens/Signup/Stores.js';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/lorry" element={<Lorry />} />
          <Route path="/rider" element={<Rider />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;
