import React from "react";
import "./home.css";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home({ applications }) {
  return (
    <div className="home">
      <FeaturedInfo applications={applications} />
      <Chart
        data={userData}
        title="Application Data"
        grid
        dataKey1="Applications"
        dataKey2="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSm applications={applications} />
        <WidgetLg applications={applications} />
      </div>
    </div>
  );
}
