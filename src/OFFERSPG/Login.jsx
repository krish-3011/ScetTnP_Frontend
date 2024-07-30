import React, { useState } from 'react';
import './app1.css'; // Import the CSS file

const LoginComponent = ({ onSubmit }) => {
  const [enrollment, setEnrollment] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let response = await fetch("https://scettnp-backend.onrender.com/auth", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ enrollmentNo: enrollment, birthDate: date })
      });

      if (response.ok) {
        const jsonData = await response.json();
        setLoading(false);
        onSubmit(true); // Notify parent component of successful login
      } else {
        const result = await response.json();
        setError(result.message);
        setLoading(false);
        onSubmit(false); // Notify parent component of failed login
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      setLoading(false);
      onSubmit(false); // Notify parent component of failed login
    }
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
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginComponent;
