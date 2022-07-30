import "./sidebarMenu.css";
import React, { useState } from "react";
import {
  KeyboardArrowDown,
  Dashboard,
  ShoppingCart,
  FlightTakeoff,
  Newspaper,
  Anchor,
  CurrencyExchange,
  PeopleAlt,
  Book,
  Settings,
  Power,
  AdminPanelSettings,
  ControlCamera,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { display, style } from "@mui/system";
import { Link } from "react-router-dom";

const SidebarMenu = ({ name, Icon, dropdown, show }) => {
  const [showDropDown, setShowDropDown] = useState(true);
  const handleShowDropDown = () => setShowDropDown(!showDropDown);

  return (
    <div className="menu-item">
      <div className="menu-item-main">
        <div className="menu-item-main-name">
          <Icon className="icon" />
          <div>
            <p className="title" style={{ display: show ? "block" : "none" }}>
              {name}
            </p>
          </div>
        </div>
        {dropdown && <KeyboardArrowDown onClick={handleShowDropDown} />}
      </div>
      <div
        className="drop-down"
        style={{
          display: showDropDown ? "none" : "block",
          marginLeft: !show ? "10px" : "50px",
        }}
      >
        {dropdown?.map((item, id) => {
          return (
            <div className="drop-down-link">
              <Link to={item.path} key={id}>
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;
