import './HomePageStyle.css'

import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Hi! My name is Toni</p>
        <h1>Bootcamp Student</h1>
        <div>
          <Link to="/about" className="btn">
            About Me
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;