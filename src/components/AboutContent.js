import './AboutStyle.css'
import React from 'react'
import Headshot from '../assets/headshot.jpg'

const AboutContent = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="mask">
            <img className="into-img" src={Headshot} alt="introimg"/>
        </div>
            <h2>Hi! I'm Toni and welcome to my portfolio!</h2>
            <h3> I reside in Savage, MN where I currently work for Target in recruiting and events. I am also in the process of receiving my certificate in coding from the University of Minnesota. I am looking forward to connecting with you!</h3>
        </div>
    )
}

export default AboutContent