import React, { useState, useEffect } from 'react';
import './app1.css'; // Import the CSS file

const LoginComponent = ({ onSubmit }) => {
  const [enrollment, setEnrollment] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState(null); // Initialize as null
  const [error, setError] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false); // Initialize as false

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ enrollment, date });

    setLoading(true); // Set loading to true when starting the fetch
    setError(null); // Clear any previous errors

    const authData = async () => {
      try {
        let response = await fetch("https://scettnp-backend.onrender.com/auth", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include', // Include credentials
          body: JSON.stringify({ enrollmentNo: enrollment, birthDate: date }) // Match field names
        });
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
              title="Enrollment must contain 8 characters"
              onChange={(e) => setEnrollment(e.target.value)}
              required
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
              required
            />
          </div>
          <button
            type="submit"
            className="login-button"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Loading...' : 'Submit'} {/* Show loading text */}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        {data && <div className="success-message">Login Successful</div>} {/* Display success message */}
      </div>
    </div>
  );
};

export default LoginComponent;
