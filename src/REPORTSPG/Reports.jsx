import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';




const Reports = () =>
(
    <div className="reportcontainer">
          <Navbar />
          <Header
            className="firstpage-header" // Add specific styles for Offers
            title="REPORT " // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
        
    </div>
    
);

export default Reports;