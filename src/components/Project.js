import React from 'react';
import './ProjectStyle.css'
import { NavLink } from 'react-router-dom'
import project1 from '../assets/ThriftyTravel.jpg'
import project2 from '../assets/ShoppingList.png'
import project3 from '../assets/weatherwidget.png'
import project4 from '../assets/password.png'
import project5 from '../assets/scheduler.png'
import project6 from '../assets/quiztimer.png'



const Project = () => {
    return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="img1" />
                <h2 className="project-title">Thrifty Travel</h2>
                <div className="btn-git">
                    <NavLink to ="url.com" className="btn">View</NavLink>
                    <NavLink to ="url.com" className="btn">GitHub</NavLink>
                </div>
            </div>
        </div>

    </div>
}

export default Project;