import React, { useState } from 'react';
import './WhatsAppChat.css'; // Make sure this CSS file exists for styling

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '9597707876'; // Replace with the recipient's phone number

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = () => {
        const message = document.getElementById('chat-input').value.trim();
        if (message) {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank'); // Open WhatsApp Web with the message
            setIsOpen(false); // Close the chat popup
        } else {
            console.log("Please enter a message."); 
        }
    };

    return (
        <div>
            <div className="whatsapp-icon" onClick={toggleChat}>
                <img src={`${process.env.PUBLIC_URL}/whatssapp1.png`} alt="WhatsApp" />
            </div>
            {isOpen && (
                <div className="chat-popup">
                    <h4>Send a Message</h4>
                    <textarea
                        placeholder="Type your message here..."
                        id="chat-input"
                    ></textarea>
                    <div className="chat-buttons">
                        <button onClick={sendMessage}>Send</button>
                        <button onClick={toggleChat}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppChat;
