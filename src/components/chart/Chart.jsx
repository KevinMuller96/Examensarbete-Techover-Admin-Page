import "./chart.css";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import React from "react";

export default function Chart({ title, data, dataKey1, dataKey2, grid }) {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Legend />
          <Tooltip />

          <Line type="monotone" dataKey={dataKey1} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey2} stroke="#27C32E" />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="6 6" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
