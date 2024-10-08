import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import Reportfilter from './FilterComp';
import './report.css'



const Reports = () =>
(
  <div className="container">  
  <div className="navbarmain1">
  <Navbar />
  </div>
  <div className="headerandmain">
          <Header
            className="firstpage-header" // Add specific styles for Offers
            title="REPORT " // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
         <div className="reportscontainer">
         <Reportfilter/>
         </div>
        
    </div>
    </div>
    
);

export default Reports;