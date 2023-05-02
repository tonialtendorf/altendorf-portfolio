import './HeroImgStyle.css';
import React from 'react'
import IntoImg from '../assets/headshot.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
    return <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="introimg"/>
        </div>
        <div className="content">
            <p>Hi! My name is Toni</p>
            <h1>Bootcamp Student</h1>
            <div>
                <Link to="/about" className="btn">About Me</Link>
                <Link to="/contact" className="btn btn-light">Contact Me</Link>
            </div>
        </div>
        
    </div>
}

export default HeroImg;