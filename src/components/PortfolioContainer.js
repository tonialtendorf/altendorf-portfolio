import React from 'react';
// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function PortfolioContainer() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/portfolio" component={Portfolio} />
          {/* <Route path="/resume" component={Resume} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}


export default PortfolioContainer;
