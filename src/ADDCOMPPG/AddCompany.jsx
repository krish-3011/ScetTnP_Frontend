import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import AddCompanyContainer from './AddCompanyContainer';



const AddCompany = () =>
(
    <div className="addcompanycontainer">
          <Navbar />
          <Header
            className="firstpage-header" // Add specific styles for Offers
            title="ADD COMPANY" // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
         <AddCompanyContainer/>
        
    </div>
    
);

export default AddCompany;