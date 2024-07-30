import React, { useState, useEffect } from 'react';
import './profile.css';

const ProfileForm = ({ Enrollment, Name, Birthdate, Email, Contact, Gender, Cast, Address, SSC, HSC, DiplomaFirstsem, DiplomaSecondsem, DiplomaThirdsem, DiplomaFourthsem, DiplomaFifthsem, DiplomaSixthsem, BtechFirstsem, BtechSecondsem, BtechThirdsem, BtechFourthsem, BtechFifthsem, BtechSixthsem, BtechSeventh, BtechEigth }) => {
  useEffect(() => {
    console.log('ProfileForm Props:', {
      Enrollment, Name, Birthdate, Email, Contact, Gender, Cast, Address, SSC, HSC, DiplomaFirstsem, DiplomaSecondsem, DiplomaThirdsem, DiplomaFourthsem, DiplomaFifthsem, DiplomaSixthsem, BtechFirstsem, BtechSecondsem, BtechThirdsem, BtechFourthsem, BtechFifthsem, BtechSixthsem, BtechSeventh, BtechEigth
    });
  }, [Enrollment, Name, Birthdate, Email, Contact, Gender, Cast, Address, SSC, HSC, DiplomaFirstsem, DiplomaSecondsem, DiplomaThirdsem, DiplomaFourthsem, DiplomaFifthsem, DiplomaSixthsem, BtechFirstsem, BtechSecondsem, BtechThirdsem, BtechFourthsem, BtechFifthsem, BtechSixthsem, BtechSeventh, BtechEigth]);

  return (
    <div className='mainprofilecontainer'>
      <div className="pmainprofilecontainer">
        <h1 className='profileheading'>GENERAL DETAILS</h1>
        <hr className='profileheadinline' />
        <form className="profile-form-container">
          <div className='profiletextbox'>
            <label className='profileinputtext'>Enrollment no:</label>
            <input value={Enrollment} name="Enrollment" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Name:</label>
            <input value={Name} name="Name" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Birthdate:</label>
            <input value={Birthdate} name="Birthdate" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Email</label>
            <input value={Email} name="Email" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Contact_no:</label>
            <input value={Contact} name="Contact_no" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Gender:</label>
            <input value={Gender} name="Gender" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Cast</label>
            <input value={Cast} name="Cast" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>Address</label>
            <input value={Address} name="Address" className="profiletext" readOnly />
          </div>
        </form>
      </div>
      <div className="pmainprofile1container">
        <h1 className='profileheading'>ACADEMICS DETAILS</h1>
        <hr className='profileheadinline' />
        <form className="profile1-form-container">
          <div className='profiletextbox'>
            <label className='profileinputtext'>SSC:</label>
            <input value={SSC} name="SSC:" className="profiletext" readOnly />
          </div>
          <div className='profiletextbox'>
            <label className='profileinputtext'>HSC:</label>
            <input value={HSC} name="HSC" className="profiletext" readOnly />
          </div>
          <h2>Diploma</h2>
          <div className='DiplomaContainer'>
            <div className='profiletextbox'>
              <label className='profileinputtext'>1-sem:</label>
              <input value={DiplomaFirstsem} name="DiplomaFirstsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>2-sem:</label>
              <input value={DiplomaSecondsem} name="DiplomaSecondsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>3-sem:</label>
              <input value={DiplomaThirdsem} name="DiplomaThirdsem" className="profiletextdiploma" readOnly />
            </div>
          </div>
          <div className='DiplomaContainer'>
            <div className='profiletextbox'>
              <label className='profileinputtext'>4-sem:</label>
              <input value={DiplomaFourthsem} name="DiplomaFourthsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>5-sem:</label>
              <input value={DiplomaFifthsem} name="DiplomaFifthsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>6-sem:</label>
              <input value={DiplomaSixthsem} name="DiplomaSixthsem" className="profiletextdiploma" readOnly />
            </div>
          </div>
          <h2>B.Tech</h2>
          <div className='DiplomaContainer'>
            <div className='profiletextbox'>
              <label className='profileinputtext'>1-sem:</label>
              <input value={BtechFirstsem} name="BtechFirstsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>2-sem:</label>
              <input value={BtechSecondsem} name="BtechSecondsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>3-sem:</label>
              <input value={BtechThirdsem} name="BtechThirdsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>4-sem:</label>
              <input value={BtechFourthsem} name="BtechFourthsem" className="profiletextdiploma" readOnly />
            </div>
          </div>
          <div className='DiplomaContainer'>
            <div className='profiletextbox'>
              <label className='profileinputtext'>5-sem:</label>
              <input value={BtechFifthsem} name="BtechFifthsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>6-sem:</label>
              <input value={BtechSixthsem} name="BtechSixthsem" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>7-sem:</label>
              <input value={BtechSeventh} name="BtechSeventh" className="profiletextdiploma" readOnly />
            </div>
            <div className='profiletextbox'>
              <label className='profileinputtext'>8-sem:</label>
              <input value={BtechEigth} name="BtechEigth" className="profiletextdiploma" readOnly />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
