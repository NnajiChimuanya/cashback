import "./sidebarMenu.css";
import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { display, style } from "@mui/system";
import { Link } from "react-router-dom";

const SidebarMenu = ({ data }) => {
  const [showDropDown, setShowDropDown] = useState(true);
  const handleShowDropDown = () => setShowDropDown(!showDropDown);
  return (
    <div className="menu-item">
      <div className="menu-item-main">
        {data.name}
        {data.dropdown && <KeyboardArrowDown onClick={handleShowDropDown} />}
      </div>
      <div
        className="drop-down"
        style={{ display: showDropDown ? "none" : "block" }}
      >
        {data.dropdown?.map((item, id) => {
          return (
            <li>
              <Link to={item.path} key={id}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;
