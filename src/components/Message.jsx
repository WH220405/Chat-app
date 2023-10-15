import React from "react";
import nong from "../img/nong.png";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={nong} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={nong} alt="" />
      </div>
    </div>
  );
};

export default Message;
