import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';
import Chart from './components/Chart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className='container'>
        {/* Навигация */}
        <Navbar />
        
        {/* Основные маршруты */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/chart" element={<Chart />} /> {/* Новый маршрут для графика */}
        </Routes>
        
        {/* Футер */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
