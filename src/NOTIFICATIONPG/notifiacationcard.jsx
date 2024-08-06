import React from "react";
import './noticard.css';

const NotiCard = ({ notification }) => {
  return (
    <div>
      <div className="notirect">{notification.message}
      <div >
        {notification.attachments && notification.attachments.map((attachment) => (
          <img key={attachment.path} src={attachment.path} alt="attached doc" />
        ))}
        </div>
      </div>
    </div>
  );
};

export default NotiCard;
