import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Total applications</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">300</span>
          </div>
          <span className="featuredSub">Total applications this batch</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Applications this month</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">57</span>
            <span className="featuredMoneyRate">
              -1.4% <ArrowDownward className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        
        <div className="featuredItem">
          <span className="featuredTitle">Progress until full batch</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">58%</span>
            <span className="featuredMoneyRate">
              42% <ArrowUpward className="featuredIcon"/>
            </span>
          </div>
          <span className="featuredSub">left until full(Här kan jag göra en progress bar</span>
        </div>
      </div>
    );
  }
