import React from "react";
import "./widgetLg.css";
import { fs } from "../../Firebase";

export default function WidgetLg({ applications }) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">During recruitment </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Elev 1</span>
          </td>
          <td className="widgetLgDate">Datum</td>
          <td className="widgetLgStatus">
            <Button type="Committed" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Elev 2</span>
          </td>
          <td className="widgetLgDate">Datum</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Elev 3</span>
          </td>
          <td className="widgetLgDate">Datum</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Elev 4</span>
          </td>
          <td className="widgetLgDate">Datum</td>
          <td className="widgetLgStatus">
            <Button type="Committed" />
          </td>
        </tr>
      </table>
    </div>
  );
}
