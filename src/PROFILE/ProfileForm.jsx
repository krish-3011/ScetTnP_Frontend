import React, { useState } from 'react';
import './profile.css';

const ProfileForm = ({Enrollment,Name,Birthdate,Email,Contact,Gender,Cast,Address,SSC,HSC,DiplomaFirstsem,DiplomaSecondsem,DiplomaThirdsem,DiplomaFourthsem,DiplomaFifthsem,DiplomaSixthsem,BtechFirstsem,BtechSecondsem,BtechThirdsem,BtechFourthsem,BtechFifthsem,BtechSixthsem,BtechSeventh,BtechEigth}) => (
    <div className='mainprofilecontainer'>
    <div className="pmainprofilecontainer">
      <h1 className='profileheading'>GENERAL DETAILS</h1>
      <hr className='profileheadinline'/> 
      <form className="profile-form-container">
        <div className='profiletextbox'>
          <label className='profileinputtext'>Enrollment no:</label>
          <input value={Enrollment} name="Enrollmenr"  className="profiletext"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>Name:</label>
          <input value={Name} name="Name"  className="profiletext"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>Birthdate:</label>
          <input value={Birthdate} name="Birthdate"  className="profiletext"/>
        </div>

        <div className='profiletextbox'>
          <label className='profileinputtext'>Email</label>
          <input value={Email} name="Email"  className="profiletext"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>Contact_no:</label>
          <input value={Contact} name="Contact_no"  className="profiletext"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>Gender:</label>
          <input value={Gender} name="Gender"  className="profiletext"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>Cast</label>
          <input value={Cast} name="Cast"  className="profiletext"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>Address</label>
          <input  value={Address} name="Address"  className="profiletext"/>
        </div>
      </form>
    </div>
    <div className="pmainprofile1container">
      <h1 className='profileheading'>ACADEMICS DETAILS</h1>
      <hr className='profileheadinline'/> 
      <form className="profile1-form-container">
        <div className='profiletextbox'>
            <label className='profileinputtext'>SSC:</label>
            <input value={SSC} name="SSC:"  className="profiletext"/>
         </div>
         <div className='profiletextbox'>
          <label className='profileinputtext'>HSC:</label>
          <input value={HSC} name="Name"  className="profiletext"/>
        </div>
        <h2>Diploma</h2>
        <div className='DiplomaContainer'>
        <div className='profiletextbox'>
          <label className='profileinputtext'>1-sem:</label>
          <input value={DiplomaFirstsem} name="DiplomaFirstsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>2-sem:</label>
          <input value={DiplomaSecondsem} name="DiplomaSecondsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>3-sem:</label>
          <input value={DiplomaThirdsem} name="DiplomaThirdsem"  className="profiletextdiploma"/>
        </div>
        </div>
        <div className='DiplomaContainer'>
        <div className='profiletextbox'>
          <label className='profileinputtext'>4-sem:</label>
          <input value={DiplomaFourthsem} name="DiplomaFourthsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>5-sem:</label>
          <input value={DiplomaFifthsem} name="DiplomaFifthsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>6-sem:</label>
          <input value={DiplomaSixthsem} name="SDiplomaSixthsem"  className="profiletextdiploma"/>
        </div>      
        </div>
        <h2>B.Tech</h2>
        <div className='DiplomaContainer'>
        <div className='profiletextbox'>
          <label className='profileinputtext'>1-sem:</label>
          <input value={BtechFirstsem} name="BtechFirstse"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>2-sem:</label>
          <input value={BtechSecondsem} name="BtechSecondsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>3-sem:</label>
          <input value={BtechThirdsem} name="BtechThirdsem"  className="profiletextdiploma"/>
        </div>      
        <div className='profiletextbox'>
          <label className='profileinputtext'>4-sem:</label>
          <input value={BtechFourthsem} name="BtechFourthsem"  className="profiletextdiploma"/>
        </div>     
        </div>
        <div className='DiplomaContainer'>
        <div className='profiletextbox'>
          <label className='profileinputtext'>5-sem:</label>
          <input value={BtechFifthsem} name="BtechFifthsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>6-sem:</label>
          <input value={BtechSixthsem} name="BtechSixthsem"  className="profiletextdiploma"/>
        </div>
        <div className='profiletextbox'>
          <label className='profileinputtext'>7-sem:</label>
          <input value={BtechSeventh} name="BtechSeventh"  className="profiletextdiploma"/>
        </div>      
        <div className='profiletextbox'>
          <label className='profileinputtext'>8-sem:</label>
          <input value={BtechEigth} name="BtechEigth"  className="profiletextdiploma"/>
        </div>     
        </div>


      </form>
    </div>
    </div>
    
  );
  

export default ProfileForm;