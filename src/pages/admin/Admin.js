import React from "react";
import "./admin.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="body">
        <Header />
        <div className="other"></div>
      </div>
    </div>
  );
};

export default Admin;
