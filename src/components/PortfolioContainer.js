import React from 'react';
import { useState, useEffect } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function PortfolioContainer() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" component={Header} />
          <Route path="/aboutme" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          {/* <Route path="/resume" component={Resume} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function Home() {
  return (
    <section>
      <h6>Hi! I'm Toni, welcome to my portfolio! I reside in Savage, MN where I currently work for Target in recruiting and events. I am also in the process of receiving my certificate in coding from the University of Minnesota. I am looking forward to connecting with you!</h6>
    </section>
  )
}

// function Contact() {
//   return (
//     <section>
//       <h6>Update to Form</h6>
//     </section>
//   )
// }

export default PortfolioContainer;
