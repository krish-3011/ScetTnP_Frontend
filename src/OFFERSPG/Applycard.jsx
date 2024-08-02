import React from "react";
import './cards.css';

const ApplyCard = ({ company, title, type, location, salary, date, logo}) => {
  return (
    <div className="applyframe">
      <div className="companylogo">
        <img src={logo.link} alt="company logo" />
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
        <button className="apply-button">Apply</button>
      </div>
    </div>
  );
};

export default ApplyCard;
