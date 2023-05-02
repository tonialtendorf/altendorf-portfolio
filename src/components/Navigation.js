import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationStyle.css'



const Navigation = () => {
    return (
        <div className="header header-bg">
            <Link to="/">
                <h1>Toni Altendorf</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}


export default Navigation;