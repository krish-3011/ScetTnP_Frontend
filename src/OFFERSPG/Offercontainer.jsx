import React, { useState, useEffect } from 'react';
import './cards.css';
import ApplyCard from "./Applycard";


const Offerscontainer = () =>
    {

        //fetch data
    const [data, setData] = useState([]); // State to hold the fetched data
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle errors
        useEffect(() => {
            const fetchData = async () => {
              try {
                let response = await fetch("https://scettnp-backend.onrender.com/offers");
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                let jsonData = await response.json();
                jsonData = jsonData.offers;
                // Calculate placement percentage and add as a new attribute
                setData(jsonData); // Set the data state with the fetched data
                setLoading(false); // Set loading to false once data is fetched
              } catch (error) {
                console.log(`${error}`);
                setError(error.message); // Set the error state if an error occurs
                setLoading(false); // Set loading to false in case of an error
              }
            };
        
            fetchData();
          }, []); 

        return (<div className="apllicationcontainerframe">
            <div className="headingofapllicationframe">OPPURTUNITIES</div>
            <hr className="lineunderheading"/>
        <div className="appllicationframe">
        
        <div className="cards-container">
            {data.map((job) => (
        <ApplyCard 
          key={job._id} 
          company={job.company.name} 
          title={job.role} 
          type={job.type} 
          location={job.location} 
          salary={`${job.salary.min} - ${job.salary.max}`} 
          date={job.last_date}
        />
      ))}
    </div>
        </div>
        </div>
        
       
    )};    
        




    
export default Offerscontainer;