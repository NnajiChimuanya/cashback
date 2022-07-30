import React from "react";
import "./admin.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { sidebarData } from "../../components/sidebar/sidebarData";
import DashboardPage from "../dashboard/DashboardPage";

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
                return <Route path={item.path} element={<item.pg />} />;
              });
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
