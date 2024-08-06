import React, { useEffect, useState } from 'react';
import './notification.css';
import noticard from './notifiacationcard';

const NotificationContainer = () => {
    // Define the state
    const [textareas, setTextareas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    // Define the click handler to add a new textarea
    const handleButtonClick = () => {
        setTextareas([...textareas, { value: '', done: false }]);
        setCurrentIndex(textareas.length);
    };

    // Define the change handler to update textarea content
    const handleTextareaChange = (index, event) => {
        const newTextareas = [...textareas];
        newTextareas[index].value = event.target.value;
        setTextareas(newTextareas);
    };

    // Define the done handler to mark a textarea as done
    const handleDoneClick = async (index) => {
        const newTextareas = [...textareas];
        newTextareas[index].done = true;
        setTextareas(newTextareas);
        setCurrentIndex(null);

        const message = newTextareas[index].value;

        try {
            let response = await fetch("https://scettnp-backend.onrender.com/notification", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message }) // Send the message in a JSON object
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
            } else {
                const result = await response.json();
                setMessage(null);
                
            }
        } catch (err) {
            setError("Failed to send the message. Please try again.");
        }
    };

    useEffect(() =>{
        
    })

    return (
        <div className="pmainnotificationcontainer">
            <div className="subnotificationcontainer">
                <div className='createbuttoncontainer'>
                    <button onClick={handleButtonClick} className='createbutton' disabled={currentIndex !== null}>Create</button>
                </div>
                {textareas.length > 0 && (
                    <div className='notificationcontainer'>
                        {textareas.map((textarea, index) => (
                            <div key={index}>
                                <textarea
                                    className='addnotificationarea'
                                    value={textarea.value}
                                    onChange={(e) => handleTextareaChange(index, e)}
                                    disabled={textarea.done}
                                ></textarea>
                                {!textarea.done && (
                                    <div className='donebutton-container'>
                                        <button onClick={() => handleDoneClick(index)} className='donebutton'>Done</button>
                                    </div>
                                )}
                            </div>
                            
                        ))}
                    </div>
                )}
                {error && <div className='error'>{error}</div>}
                {message && <div className='success'>{message}</div>}
            </div>
        </div>
    );
};

export default NotificationContainer;
