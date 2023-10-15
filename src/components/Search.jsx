import React from "react";
import nong from "../img/nong.png";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search a user" />
      </div>
      <div className="userChat">
        <img src={nong} alt="Profile" />
        <div className="userChatInfo">
          <span>Gavin</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
