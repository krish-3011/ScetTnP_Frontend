import React, { useState } from 'react';
import Navbar from "../STATSPG/Navbar";
import Header from "../STATSPG/Header";
import Offerscontainer from "./Offercontainer";
import "./cards.css";
import LoginPage from "./Login";

const Offers = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);

  const handleLoginSubmit = () => {
    // Hide the LoginPage when submit button is clicked
    setShowLoginPage(false);
  };

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
