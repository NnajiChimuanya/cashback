import "./sidebar.css";
import React, { useState } from "react";
import { sidebarData } from "./sidebarData";
import SidebarMenu from "./SidebarMenu";

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
        return <SidebarMenu data={item} key={id} />;
      })}
    </div>
  );
};

export default Sidebar;
