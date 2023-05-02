import About from './routes/About';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';
import Home from './routes/Home'
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
