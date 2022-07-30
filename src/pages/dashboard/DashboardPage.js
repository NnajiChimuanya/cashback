import React from "react";
import "./dashboardPage.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "./lineChartData.js";

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
      <div className="data-row-1">
        <div className="line-chart">
          <h4 className="line-chart-title"> Clicks/Transactions</h4>
          <LineChart
            width={500}
            height={250}
            data={lineChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="line-chart">
          <LineChart
            width={500}
            height={250}
            data={lineChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;