import "./header.css";
import React from "react";
import { Search, NotificationAdd, BlurOn } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div>
        <BlurOn className="blur-on" />
      </div>

      <div className="actions">
        <div className="search">
          <div className="search-container">
            <Search className="search-icon" />

            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <NotificationAdd />
        </div>
        <div>
          <Avatar className="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
