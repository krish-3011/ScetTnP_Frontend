import React, { useState,useEffect } from 'react';
import Navbar from "../STATSPG/Navbar";
import Header from "../STATSPG/Header";
import Offerscontainer from "./Offercontainer";
import "./cards.css";
import LoginPage from "./Login";
import Cookies from 'js-cookie'; // Import js-cookie

const Offers = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);
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
    <>
      {showLoginPage && <LoginPage onSubmit={handleLoginSubmit} />}
      <div className="offer1container">
        <Navbar />
        <Header
          className="offers-header"
          title="OFFERS"
          text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
        />
        <Offerscontainer />
      </div>
    </>
  );
};

export default Offers;
