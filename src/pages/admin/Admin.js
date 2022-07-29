import React from "react";
import "./admin.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { sidebarData } from "../../components/sidebar/sidebarData";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="body">
        <Header />
        <div className="other">
          <Routes>
            {sidebarData.map((item, id) => {
              return item.dropdown?.map((item, id) => {
                return (
                  <Route path={item.path} element={<h2>{item.name}</h2>} />
                );
              });
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
