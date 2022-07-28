import "./header.css";
import React from "react";
import { Search, NotificationAdd } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <div className="search-container">
          <Search />

          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="actions">
        <Avatar />
        <NotificationAdd />
      </div>
    </div>
  );
};

export default Header;
