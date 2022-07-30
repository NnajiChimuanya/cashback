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
  BarChart,
  Bar,
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
          <h4 className="line-chart-title"> Commission/Cashback</h4>
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
      <div className="data-row-2">
        <div className="bar-chart">
          <h4 className="bar-chart-title"> Total Clicks</h4>
          <BarChart width={500} height={250} data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="line-chart">
          <h4 className="line-chart-title"> Total Users</h4>
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
          </LineChart>
        </div>
      </div>
      <div className="data-row-3">
        <h4> Quick Links</h4>
        <div className="quick-links">
          <div className="quick-links-data">
            <div className="title"> Total Bonus</div>
            <div className="amount">Rp870</div>
          </div>
          <div className="quick-links-data">
            <div className="title"> Total Cashback</div>
            <div className="amount">Rp870</div>
          </div>
          <div className="quick-links-data">
            <div className="title"> Net profit</div>
            <div className="amount">Rp870</div>
          </div>
          <div className="quick-links-data">
            <div className="title"> Net profit</div>
            <div className="amount">Rp870</div>
          </div>
          <div className="quick-links-data">
            <div className="title"> Net profit</div>
            <div className="amount">Rp870</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
