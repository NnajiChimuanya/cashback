import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="image"
          src="https://mycashbackbooking.com/wp-content/uploads/2017/03/cashback.png"
          alt="logo"
        />
      </div>

      <div className="search"></div>

      <div className="actions"></div>
    </div>
  );
};

export default Header;
