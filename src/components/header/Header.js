import "./header.css";
import React from "react";
import { Search, NotificationAdd, Settings } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <div className="search-container">
          <Search className="search-icon" />

          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="actions">
        <div>
          <IconButton>
            <NotificationAdd />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
        <div>
          <Avatar
            src="https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
