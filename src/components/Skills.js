import React from 'react';
import './Skills.css'; // Import your CSS file for styling

const Skills = () => {
    const skills = [
        { name: 'HTML', level: 'Expert' },
        { name: 'CSS', level: 'Expert' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Beginner' },
        { name: 'Quasar', level: 'Intermediate' },
        { name: 'Vue', level: 'Intermediate ' },
        { name: 'Git', level: 'Intermediate' },
        { name: 'Responsive Design', level: 'Expert' },
        { name: 'UI/UX Principles', level: 'Intermediate' }
    ];

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}</strong>: {skill.level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
