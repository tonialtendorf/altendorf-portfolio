import React from 'react';
import './ProjectStyle.css'
import { NavLink } from 'react-router-dom'
import project1 from '../assets/ThriftyTravel.jpg'
import project2 from '../assets/ShoppingList.png'
import project3 from '../assets/weatherwidget.png'
import project4 from '../assets/password.png'
import project5 from '../assets/scheduler.png'
import project6 from '../assets/plannerthrifty.PNG'



const Project = () => {
    return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="img1" />
                <h2 className="project-title">Thrifty Travel</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Thrifty-Travel/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Thrifty-Travel" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="project-card">
                <img src={project2} alt="img1" />
                <h2 className="project-title">Shopping List</h2>
                <div className="btn-git">
                    <NavLink to ="https://shopping-list.herokuapp.com/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tferraro517/Shopping_List_Project" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="project-card">
                <img src={project3} alt="img3" />
                <h2 className="project-title">Weather Dashboard</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Challenge-6-WeatherApp/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Challenge-6-WeatherApp" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="project-card">
                <img src={project4} alt="img4" />
                <h2 className="project-title">Password Generator</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Module-3-Password-Generator/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Module-3-Password-Generator" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="project-card">
                <img src={project5} alt="img1" />
                <h2 className="project-title">Workday scheduler</h2>
                <div className="btn-git">
                    <NavLink to ="https://tonialtendorf.github.io/Module-5-Challenge-Calendar/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/Module-5-Challenge-Calendar" className="btn">GitHub</NavLink>
                </div>
            </div>
            <div className="project-card">
                <img src={project6} alt="img1" />
                <h2 className="project-title">Planner | Thrifty Travel</h2>
                <div className="btn-git">
                    <NavLink to ="https://planner-thrifty-travel.herokuapp.com/" className="btn">View</NavLink>
                    <NavLink to ="https://github.com/tonialtendorf/planner-thrifty-travel" className="btn">GitHub</NavLink>
                </div>
            </div>
        </div>

    </div>
}

export default Project;