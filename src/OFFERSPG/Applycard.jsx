import React, { useState } from 'react';
import './cards.css';
import ApplyPage from "./Applypage";

const ApplyCard = ({ company, title, type, location, salary, date, logo }) => {
  const [showApplypage, setShowApplypage] = useState(false);

  const handleButtonClick = () => {
    setShowApplypage(true);
  };

  const handleClose = () => {
    setShowApplypage(false);
  };

  return (
    <div className="applyframe">
      <div className="companylogo">
        <img src={logo} alt="company logo" />
      </div>
      <div className="apply-detail">
        <h2>{company}</h2>
        <div className="apply-info">
          <p><span className="icon">👤</span>{title}</p>
          <p><span className="icon">💰</span>{salary}</p>
        </div>
        <div className="apply-info">
          <p><span className="icon">👜</span>{type}</p>
          <p><span className="icon">📍</span>{location}</p>
          <p><span className="icon">📅</span>{date}</p>
        </div>
        <button onClick={handleButtonClick} className="apply-button">Apply</button>
      </div>

      {showApplypage && (
        <div className="overlay">
          <div className="applypage-wrapper">
            <button className="close-button" onClick={handleClose}>✖</button>
            <ApplyPage company={company} title={title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyCard;
