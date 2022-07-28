import "./sidebarMenu.css";
import React from "react";

const SidebarMenu = ({ data }) => {
  return (
    <div>
      {data.map((item, id) => {
        return (
          <div className="menu-item" key={id}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
