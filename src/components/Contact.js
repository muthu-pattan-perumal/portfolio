import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Make sure to create a CSS file for styling

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addData();
    };

    const addData = () => {
        axios
            .post("http://127.0.0.1:5001/data", { name, email, message })
            .then(() => {
                alert('Message sent!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error("Error adding data:", error);
                alert('There was an error sending your message.');
            });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
