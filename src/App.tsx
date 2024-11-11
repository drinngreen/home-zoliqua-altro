import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WebBuilder from './pages/WebBuilder';
import AppBuilder from './pages/AppBuilder';
import Agency from './pages/Agency';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-black to-teal-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-builder" element={<WebBuilder />} />
          <Route path="/app-builder" element={<AppBuilder />} />
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;