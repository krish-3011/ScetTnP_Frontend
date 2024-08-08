import React, { useState, useEffect } from 'react';
import './cards.css';
import ApplyCard from "./Applycard";
import AppliedCard from './appliedcard';
import Cookies from 'js-cookie'; // Import js-cookie


const Offerscontainer = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const [message, setMessage] = useState(null);
  const [appliedData,setAppliedData]=useState([]);

  const fetchApplied = async () =>{

    try 
    {
      let userCookie = Cookies.get('user');
      userCookie = JSON.parse(userCookie);
      if (!userCookie.applied) {
        console.error('Applied data is not available');
        return;
      }
     
    const applied_offer=[]
      for (let offer of userCookie.applied){
        const response = await fetch(`https://scettnp-backend.onrender.com/offers/${offer}`,{
          method: 'GET',
        });
        
        if (!response.ok){
          throw new Error('Network response was not ok')
        }
        else{
          const applieddata = await response.json();
          if (!applied_offer.some(offer => offer._id === applieddata._id)) {
            applied_offer.push(applieddata);
          }
          setMessage("succesful");

        
    }

    
    }
    console.log(applied_offer)
    setAppliedData(applied_offer);
  }
    catch (error) {
      console.log(`${error}`);
      setError(error.message); // Set the error state if an error occurs
      setLoading(false); // Set loading to false in case of an error
    }
  };

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
        fetchApplied();

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
              {appliedData.slice().reverse().map((job, index) => (
                <AppliedCard
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
