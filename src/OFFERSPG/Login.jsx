import React, { useState } from 'react';
import './app1.css' ;  // Import the CSS file

const LoginComponent = ({ onSubmit }) => {
  const [enrollment, setEnrollment] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ enrollment, date });
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