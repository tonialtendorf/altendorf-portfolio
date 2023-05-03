import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Home from './components/Home'
import React from 'react';
import { Route, Routes } from "react-router-dom"
import './index.css';


function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
  );
}


export default App;
