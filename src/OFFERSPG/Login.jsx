import React, { useState,useEffect } from 'react';
import './app1.css' ;  // Import the CSS file




const LoginComponent = ({ onSubmit }) => {
  const [enrollment, setEnrollment] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('null')
  const [loading, setLoading] = useState(true)




  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ enrollment, date }); 
  
  
    const authData = async () => {
       try {
         let response = await fetch("https://scettnp-backend.onrender.com/auth" , 
                                     {
                                     method : 'POST',
                                     headers : {
                                       'Content-Type' : 'application/json'
                                     },
                                     body :JSON.stringify({enrollmentNo : enrollment ,birthdate : date })
                                     })
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         const jsonData = await response.json();
         setData(jsonData); // Set the data state with the fetched data
         setLoading(false); // Set loading to false once data is fetched
       } catch (error) {
         setError(error.message); // Set the error state if an error occurs
         setLoading(false); // Set loading to false in case of an error
       }
    };
   authData();
  };




  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="enrollment" className="login-label">Enrollment</label>
            <input
              type="text"
              id="enrollment"
              className="login-input"
              value={enrollment}
               pattern=".{8,}"
               title="Enrollment must contain 8  characters"
              onChange={(e) => setEnrollment(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date" className="login-label">Date</label>
            <input
              type="date"
              id="date"
              className="login-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="login-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;