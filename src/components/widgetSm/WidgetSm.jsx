import React from 'react'
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Latest Applications</span>
      <ul className="widgetSmList">
        
        <li className="widgetSmListItem">

          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rasmus Sanne</span>
            <span className="widgetSmUserTitle">VD at MMR</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">

          <div className="widgetSmUser">
            <span className="widgetSmUsername">Fullstack Mac</span>
            <span className="widgetSmUserTitle">Techover Expert</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">

          <div className="widgetSmUser">
            <span className="widgetSmUsername">Matt Bergström</span>
            <span className="widgetSmUserTitle">Techover Expert</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">

          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kevin Müller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        
        <li className="widgetSmListItem">

          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nabil Hayek</span>
            <span className="widgetSmUserTitle">Software Engineer^2</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

