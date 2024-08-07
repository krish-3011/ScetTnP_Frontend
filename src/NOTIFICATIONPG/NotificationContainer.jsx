import React, { useEffect, useState } from 'react';
import './notification.css';
import NotiCard from './notifiacationcard'; // Import the NotiCard component correctly

const NotificationContainer = () => {
    const [textareas, setTextareas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    
    const currentYear = new Date().getFullYear();
    const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];
    const [checkbox, setCheckitem] = useState({
        [currentYear]: false,
        [currentYear - 1]: false,
        [currentYear - 2]: false,
        [currentYear - 3]: false,
    });
        const handleCheckboxChange = (e) => {
            setCheckitem({ 
                 ...checkbox,
                [e.target.name]: e.target.checked
            });
        };



   


    const handleButtonClick = () => {
        setTextareas([...textareas, { value: '', done: false, attachments: [] }]);
        setCurrentIndex(textareas.length);
    };

    const handleTextareaChange = (index, event) => {
        const newTextareas = [...textareas];
        newTextareas[index].value = event.target.value;
        setTextareas(newTextareas);
    };

    const handleFileChange = (index, event) => {
        const newTextareas = [...textareas];
        newTextareas[index].attachments = Array.from(event.target.files);
        setTextareas(newTextareas);
    };

    const fetchData = async () => {
        try {
            let response = await fetch("https://scettnp-backend.onrender.com/notification");
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            let jsonData = await response.json();
            setNotifications(jsonData.notification);
            setLoading(false);
        } catch (error) {
            console.log(`${error}`);
            setError(error.message);
            setLoading(false);
        }
        
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDoneClick = async (index) => {
        const newTextareas = [...textareas];
        newTextareas[index].done = true;
        setTextareas([...newTextareas]); // Correctly update state
        setCurrentIndex(null);

        const { value: message, attachments } = newTextareas[index];

        const notificationData = new FormData();
        notificationData.append('message', message);
        attachments.forEach((attachment) => {
            notificationData.append('attachments', attachment); // Append each file separately
        });

        try {
            let response = await fetch("https://scettnp-backend.onrender.com/notification", {
                method: 'POST',
                body: notificationData // Send the FormData object
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
            } else {
                const result = await response.json();
                setMessage("Notification sent successfully");
                fetchData(); // Fetch data again after successfully sending notification
            }
        } catch (err) {
            setError("Failed to send the message. Please try again.");
        }
        setTextareas({value: '', done: false, attachments: [] });
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
                                <div>
                                {years.map((year) => (
                                        <label key={year}>
                                            <input
                                                type="checkbox"
                                                name={year.toString()}
                                                checked={checkbox[year]}
                                                onChange={handleCheckboxChange}
                                                disabled={textarea.done}
                                            /> {year}
                                        </label>
                                    ))}
                                </div>
                                <textarea
                                    className='addnotificationarea'
                                    value={textarea.value}
                                    onChange={(e) => handleTextareaChange(index, e)}
                                    disabled={textarea.done}
                                ></textarea>
                                <div>
                                    <label className='addattachment'>Add attachments</label>
                                    <input
                                        type="file"
                                        name="attachments"
                                        multiple
                                        onChange={(e) => handleFileChange(index, e)}
                                        disabled={textarea.done}
                                    />
                                    {!textarea.done && (
                                        <div className='donebutton-container'>
                                            <button onClick={() => handleDoneClick(index)} className='donebutton'>Done</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='notificationcontainer'>
                {[...notifications].reverse().map((notification) => (
                    <NotiCard
                        key={notification._id}
                        notification={notification}
                    />
                ))}
            </div>
            {error && <div className='error'>{error}</div>}
            {message && <div className='success'>{message}</div>}
        </div>
    );
};

export default NotificationContainer;
