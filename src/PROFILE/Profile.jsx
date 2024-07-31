import React, { useState, useEffect } from 'react';
import Navbar from "../STATSPG/Navbar";
import Header from "../STATSPG/Header";
import ProfileForm from "./ProfileForm";
import LoginPage from "../OFFERSPG/Login";
import Cookies from 'js-cookie'; // Import js-cookie

const Profile = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const handleLoginSubmit = async (success) => {
    if (success) {
      const userCookie = Cookies.get('user'); // Read session cookie
      if (userCookie) {
        const data = JSON.parse(userCookie);
        setProfileData(data);
        setShowLoginPage(false);
      }
    } else {
      setShowLoginPage(true);
    }
  };

  useEffect(() => {
    const userCookie = Cookies.get('user'); // Read session cookie
    if (userCookie) {
      const data = JSON.parse(userCookie);
      setProfileData(data);
    } else {
      setShowLoginPage(true);
    }
  }, []);

  return (
    <div className="profilecontainer">
      <Navbar />
      <Header
        className="offers-header" // Add specific styles for Offers
        title="PROFILE" // Dynamic title
        text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
      />
      {showLoginPage && <LoginPage onSubmit={handleLoginSubmit} />}
      {profileData ? (
        <ProfileForm 
          Enrollment={profileData.enrollment_no} 
          Name={profileData.name} 
          Birthdate={new Date(profileData.birth_date).toLocaleDateString()} 
          Email={profileData.email} 
          Contact={`${profileData.contact_no.country_code} ${profileData.contact_no.number}`} 
          Gender={profileData.gender} 
          Cast={profileData.cast}
          Address={profileData.address} 
          SSC={profileData.result.ssc.percentage} 
          HSC={profileData.result.hsc.percentage}
          DiplomaFirstsem={profileData.result.diploma.semwise_result[0] || 'na'} 
          DiplomaSecondsem={profileData.result.diploma.semwise_result[1] || 'na'} 
          DiplomaThirdsem={profileData.result.diploma.semwise_result[2] || 'na'} 
          DiplomaFourthsem={profileData.result.diploma.semwise_result[3] || 'na'} 
          DiplomaFifthsem={profileData.result.diploma.semwise_result[4] || 'na'} 
          DiplomaSixthsem={profileData.result.diploma.semwise_result[5] || 'na'}
          BtechFirstsem={profileData.result.degree.semwise_result[0] || 'na'} 
          BtechSecondsem={profileData.result.degree.semwise_result[1] || 'na'} 
          BtechThirdsem={profileData.result.degree.semwise_result[2] || 'na'} 
          BtechFourthsem={profileData.result.degree.semwise_result[3] || 'na'} 
          BtechFifthsem={profileData.result.degree.semwise_result[4] || 'na'} 
          BtechSixthsem={profileData.result.degree.semwise_result[5] || 'na'}
          BtechSeventh={profileData.result.degree.semwise_result[6] || 'na'} 
          BtechEigth={profileData.result.degree.semwise_result[7] || 'na'}
        />
      ) : (
        !showLoginPage && <div>Loading profile data...</div>
      )}
    </div>
  );
};

export default Profile;
