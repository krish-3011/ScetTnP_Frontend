import Navbar from '../STATSPG/Navbar';
import Header from '../STATSPG/Header';
import NotificationContainer from './NotificationContainer';



const Notification = () =>
(
    <div className="notificationcontainer">
          <Navbar />
          <Header
            className="firstpage-header" // Add specific styles for Offers
            title="NOTIFICATION " // Dynamic title
            text="Browse through our latest job offers and start your journey towards a fulfilling career. From tech giants to management roles, explore opportunities that await you."
         />
         <NotificationContainer/>
        
    </div>
    
);

export default Notification;