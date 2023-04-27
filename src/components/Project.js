import React from 'react';

function Project(props) {
    return (
        <div className="project">
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <p>{props.github}</p>
            <p>{props.deployed}</p>
        </div>
    )
}

export default Project;