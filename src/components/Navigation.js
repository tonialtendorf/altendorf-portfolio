import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationStyle.css'
import ResumeLink from './Resume'



const Navigation = () => {
    return (
        <div className="header header-bg">
            <NavLink to="/">
                <h1>Toni Altendorf</h1>
            </NavLink>
            <ul className="nav-menu">
                <li>
                    <NavLink to="/" className="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className="active-link">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="active-link">Contact</NavLink>
                </li>
                <li>
                    <ResumeLink className="active-link"/>
                </li>
            </ul>
        </div>
    )
}


export default Navigation;