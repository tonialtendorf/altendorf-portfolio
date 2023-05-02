import React from 'react';
import Navigation from "../components/Navigation"
import Footer from '../components/Footer'
import Project from '../components/Project'

const Portfolio = () => {
    return <div>
        <Navigation />
        <Project />
        <Footer />
    </div>
}



const projects = [
  {
    title: "Project 1",
    github: "insert link",
    deployed: "insert link",
    image: "insert link",
  },
  {
    title: "Project 2",
    github: "insert link",
    deployed: "insert link",
    image: "insert link",
  },
  {
    title: "Project 3",
    github: "insert link",
    deployed: "insert link",
    image: "insert link",
  },
  {
    title: "Project 4",
    github: "insert link",
    deployed: "insert link",
    image: "insert link",
  },
  {
    title: "Project 5",
    github: "insert link",
    deployed: "insert link",
    image: "insert link",
  },
  {
    title: "Project 6",
    github: "insert link",
    deployed: "insert link",
    image: "insert link",
  },
];

// function Portfolio() {
//     return (
//         <section className="portfolio">
//             <h2>Portfolio</h2>
//             {projects.map((project, index) => (
//                 <Project
//                     key={index}
//                     title={project.title}
//                     image={project.image}
//                     />
//             ))}
//         </section>
//     )
// }

export default Portfolio;