import React from 'react';
import './Projects.css';


const projects = [
    // {
    //     title: 'Weather App',
    //     description: 'Fetches weather data from an API.',
    //     technologies: 'React, CSS',
    //     demo: '#',
    //     source: '#',
    //     image: 'path/to/image1.jpg',
    // },
    // {
    //     title: 'Task Manager',
    //     description: 'Manage tasks efficiently.',
    //     technologies: 'React, Redux',
    //     demo: '#',
    //     source: '#',
    //     image: 'path/to/image2.jpg',
    // },
    {
        title: 'Mookuthi Amman Builders',
        description: 'A platform for construction services.',
        technologies: 'React,css',
        demo: '#', // Add the live demo link
        source: '#', // Add the source code link
        image: '/mookuthi.png', // Add the image path
    },
    {
        title: 'Dashboard',
        description: 'User dashboard for managing tasks and projects.',
        technologies: 'Vue, css',
        demo: '#', // Add the live demo link
        source: '#', // Add the source code link
        image: '/pin.png', // Add the image path
    },
    {
        title: 'Pin',
        description: 'An application for pinning notes.',
        technologies: 'Vue, CSS',
        demo: '#', // Add the live demo link
        source: '#', // Add the source code link
        image: '/dash.png', // Add the image path
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <img src={project.image} alt={project.title} />
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technologies}</p>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
