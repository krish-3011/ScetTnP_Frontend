
import './style.css';
import './header.css';
import './button.css';
import './graph.css';



const Header = ({ title, text, className }) => (
  <div className={`header ${className}`}>
    
    <div className="head-line">
    <div className={`${className}-frame-head`}>
      <div className="placement-statistics">
        {title || "Default Title"}
      </div>
    </div>
      <div className="rectangle-48">
      <img className="system-icons" src="./source1/bell.png" alt="Bell Icon" />
      <div className="line-9"><hr /></div>
      <img className="system-icons2" src="./source1/up-arrow-svgrepo-com.svg" alt="System Icons" />
      </div>
  
      </div>  
      <div className="head-text inter-font">
      {text || "Default description text if no prop is provided"}
    </div>
  </div>
);

export default Header;