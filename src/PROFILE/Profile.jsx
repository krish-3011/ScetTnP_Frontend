import Navbar from "../STATSPG/Navbar";
import Header from "../STATSPG/Header";
import ProfileForm from "./ProfileForm";


const Profile = () => (
  <div className="profilecontainer">
    <Navbar />
    <Header
      className="offers-header" // Add specific styles for Offers
      title="PROFILE" // Dynamic title
      text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
    />
    <ProfileForm Enrollment={"ET22BTCO999"} Name={"Naruto"} Birthdate={"8/2/2023"} Email={"Naruto.co22d2@scet.ac.in"} Contact={"9990022993"} Gender={"Male"} Cast={"Leaf"}
     Address={"641 Oxford Street, East Asia, Rhode Island - 68126, Rwanda 260 The Croft, Ontario, Arkansas - 79444, Montenegro"} SSC={"80%"} HSC={"70%"}
     DiplomaFirstsem={"na"} DiplomaSecondsem={"na"} DiplomaThirdsem={"na"} DiplomaFourthsem={"na"} DiplomaFifthsem={"na"} DiplomaSixthsem={"na"}
     BtechFirstsem={"8.00"} BtechSecondsem={"9.1"} BtechThirdsem={"8.5"} BtechFourthsem={"8.7"} BtechFifthsem={"8.9"} BtechSixthsem={"9.1"}
     BtechSeventh={"9.1"} BtechEigth={"10"}/>
  </div>
  //SSC,HSC,DiplomaFirstsem,DiplomaSecondsem,DiplomaThirdsem,DiplomaFourthsem,DiplomaFifthsem,DiplomaSixthsem,BtechFirstsem,BtechSecondsem,BtechThirdsem,BtechFourthsem,BtechFifthsem,BtechSixthsem,BtechSeventh,BtechEigth
);
//Name,Birthdate,Email,Contact,Gender,Cast,Address
export default Profile;
