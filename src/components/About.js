import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="about-content">
                <ul>
                    <li><strong>Name:</strong> MUTHU PERUMAL</li>
                    <li><strong>Profession:</strong> Frontend Developer</li>
                    <li><strong>Specialization:</strong> React, Vue, HTML, CSS, JavaScript</li>
                    <li><strong>Hobbies:</strong> Exploring new technologies, contributing to open-source, and blogging.</li>
                    <li><strong>Skills:</strong> Responsive Design, Git, UI/UX Principles</li>
                    <li><strong>Email:</strong> <a href="mailto:muthuperumal465@gmail.com">muthuperumal465@gmail.com</a></li>
                    <li><strong>Phone:</strong> 9597707876</li>
                    <li><strong>Age:</strong> 24</li>
                    <li><strong>Education:</strong> Bachelor Of Business Administration</li>
                    <li><strong>College:</strong> St. Xavier's College Palayamkottai</li>
                    <li><strong>Passed Out:</strong> 2022</li>
                    <li><strong>Courses:</strong> Frontend Developer</li>
                    <li><strong>Experience:</strong> Ezofis (04-2024 To Present)</li>
                </ul>
                <img src={`${process.env.PUBLIC_URL}/img2.jpg`} alt="Avatar" className="avatar-image" />
            </div>
        </div>
    );
};

export default About;
