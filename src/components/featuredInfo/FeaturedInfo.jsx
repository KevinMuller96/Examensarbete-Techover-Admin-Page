import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo({ applications }) {
  const [thisMonth, setThisMonth] = useState();
  useEffect(() => {
    setThisMonth(
      applications.filter((app) => {
        const date = new Date(app.date);
        return (
          date.getMonth() === new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear()
        );
      }).length
    );
  }, [applications]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total applications</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{applications.length}</span>
        </div>
        <span className="featuredSub">Total applications this batch</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Applications this month</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{thisMonth}</span>
          <span className="featuredMoneyRate">
            -1.4% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Använd filter och dadtum objekt för att filtrera för denna månad... */}
      <div className="featuredItem">
        <span className="featuredTitle">Progress until full batch</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">58%</span>
          <span className="featuredMoneyRate">
            42% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">
          left until full(Här kan jag göra en progress bar
        </span>
      </div>
    </div>
  );
}
