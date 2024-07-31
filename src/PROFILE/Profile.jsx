import React, { useState, useEffect } from 'react';
import Navbar from "../STATSPG/Navbar";
import Header from "../STATSPG/Header";
import ProfileForm from "./ProfileForm";
import LoginComponent from "../OFFERSPG/Login"; // Ensure correct path to LoginComponent
import Cookies from 'js-cookie'; // Import js-cookie

const Profile = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const handleLoginSubmit = (success) => {
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
      setShowLoginPage(false); // Hide login page if user data is found
    } else {
      setShowLoginPage(true); // Show login page if no user data is found
    }
  }, []);

  return (
    <div className="profilecontainer">
      <Navbar />
      <Header
        className="offers-header"
        title="PROFILE"
        text="Manage your profile and update your details."
      />
      {showLoginPage ? (
        <LoginComponent onSubmit={handleLoginSubmit} />
      ) : (
        profileData ? (
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
          <div>Loading profile data...</div>
        )
      )}
    </div>
  );
};

export default Profile;
