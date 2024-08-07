import React, { useState, useEffect } from 'react';
import './cards.css';
import ApplyCard from "./Applycard";
import AppliedCard from './appliedcard';

const Offerscontainer = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cardsmaincontainer">
      <div className="apllicationcontainerframe">
        <div className="headingofapllicationframe">OPPORTUNITIES</div>
        <hr className="lineunderheading" />
        <div className="appllicationframe">
          <div className="cards-container">
            {data.slice().reverse().map((job) => (
              <ApplyCard
                key={job._id}
                company={job.company ? job.company.name : 'Unknown'}
                title={job.role}
                type={job.type}
                location={job.location.join(', ')}
                salary={job.salary ? `${job.salary.min} - ${job.salary.max}` : 'Not specified'}
                date={new Date(job.last_date).toLocaleDateString()}
                logo={job.company && job.company.logo ? job.company.logo.link : 'default_logo.png'} // Assuming 'default_logo.png' is a placeholder image
              />
            ))}
          </div>
        </div>
      </div>
      <div className="secondapllicationcontainerframe">
        <div className="secondapplicationcontainer">
          <div className="headingofapllicationframe">APPLIED</div>
          <hr className="lineunderheading" />
          <div className="appllicationframe">
            <div className="cards-container">
              {data.slice().reverse().map((job, index) => (
                <ApplyCard
                  key={index}
                  company={job.company ? job.company.name : 'Unknown'}
                  title={job.role}
                  type={job.type}
                  location={job.location.join(', ')}
                  salary={job.salary ? `${job.salary.min} - ${job.salary.max}` : 'Not specified'}
                  date={new Date(job.last_date).toLocaleDateString()}
                  logo={job.company && job.company.logo ? job.company.logo.link : 'default_logo.png'}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="thirdapplicationcontainer">
          <div className="headingofapllicationframe">RESULT</div>
          <hr className="lineunderheading" />
          <div className="appllicationframe">
            <div className="cards-container">
              {data.slice().reverse().map((job, index) => (
                <ApplyCard
                  key={index}
                  company={job.company ? job.company.name : 'Unknown'}
                  title={job.role}
                  type={job.type}
                  location={job.location.join(', ')}
                  salary={job.salary ? `${job.salary.min} - ${job.salary.max}` : 'Not specified'}
                  date={new Date(job.last_date).toLocaleDateString()}
                  logo={job.company && job.company.logo ? job.company.logo.link : 'default_logo.png'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerscontainer;
