import React from "react";
import './applypage.css';



const ApplyPage = ({ company, title, type, location, salary, date, logo}) => {
  return (
    <div className="appliedpageframe">
        <div className="apply-detail">
      <div className="companylogo">
        <img src={logo} alt="company logo" />
        <h2>{company}</h2>
      </div>
      
        
        <hr />
        <div className="applypage-info">
          <p><span className="icon">👤</span>{title}</p>
          <p><span className="icon">💰</span>{salary}</p>
          <p><span className="icon">👜</span>{type}</p>
          <p><span className="icon">📍</span>{location}</p>
          <p><span className="icon">📅</span>{date}</p>
        </div>
       
      </div>
    </div>
  );
};

export default ApplyPage;
