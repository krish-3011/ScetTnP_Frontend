import React from "react";
import './noticard.css';

const NotiCard = ({ notification }) => {
  return (
    <div>
      <div className="notirect">
        {notification.message}
        <div>
          {notification.attachments && notification.attachments.map((attachment, index) => (
            <img key={index} src={attachment.path} alt="attached doc" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotiCard;
