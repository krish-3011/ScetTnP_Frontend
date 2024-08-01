import React, { useState } from 'react';
import './notification.css';

const NotificationContainer = () => {
    // Define the state
    const [textareas, setTextareas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

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
    const handleDoneClick = (index) => {
        const newTextareas = [...textareas];
        newTextareas[index].done = true;
        setTextareas(newTextareas);
        setCurrentIndex(null);
    };

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
            </div>
        </div>
    );
};

export default NotificationContainer;
