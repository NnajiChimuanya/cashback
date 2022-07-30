import React from "react";
import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h4> DASHBOARD</h4>
      </div>
      <div className="overview">
        <div className="overview-data">
          <div className="title"> Total Earning</div>
          <div className="amount">Rp870</div>
        </div>
        <div className="overview-data">
          <div className="title"> Total Bonus</div>
          <div className="amount">Rp870</div>
        </div>
        <div className="overview-data">
          <div className="title"> Total Cashback</div>
          <div className="amount">Rp870</div>
        </div>
        <div className="overview-data">
          <div className="title"> Net profit</div>
          <div className="amount">Rp870</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
