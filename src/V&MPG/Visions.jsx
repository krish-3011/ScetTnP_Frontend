import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import VisionContainer from './VisionContainer'

const Vision = () =>
(
    <div className="container">
      <div className="navbarmain1">
          <Navbar />
          </div>
          <div className="headerandmain">
          <Header
            className="firstpage-header" // Add specific styles for Offers
            title="VISION & MISSION" // Dynamic title
            text="Discover our commitment to bridging the gap between students and top employers. Our vision is to empower students with exceptional career opportunities, while our mission focuses on providing comprehensive support and resources for professional growth and success."
         />
         <VisionContainer/>
         </div>
    </div>
    
);

export default Vision;