import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import '../STATSPG/header.css';
import ImportExcel from './importcoanainer';


const Imports = () =>
(
    <div className="container">
         <div className="navbarmain1">
          <Navbar />
          </div>
          <div className="headerandmain">
          <Header
            className="firstpage-header" // Add specific styles for Offers
            title="IMPORT" // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
         <ImportExcel/>

        
        </div>
    </div>
    
);

export default Imports;