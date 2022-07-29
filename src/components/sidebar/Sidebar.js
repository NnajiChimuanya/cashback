import "./sidebar.css";
import React, { useState } from "react";
import { sidebarData } from "./sidebarData";
import SidebarMenu from "./SidebarMenu";
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
  Icecream,
} from "@mui/icons-material";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="sidebar" style={{ width: show ? 250 : 100 }}>
      <div className="logo">
        <img
          className="image"
          src="https://mycashbackbooking.com/wp-content/uploads/2017/03/cashback.png"
          alt="logo"
          onClick={handleToggle}
        />
      </div>

      {sidebarData.map((item, id) => {
        const { name, Icon, dropdown } = item;
        return (
          <SidebarMenu name={name} Icon={Icon} dropdown={dropdown} key={id} />
        );
      })}
    </div>
  );
};

export default Sidebar;
