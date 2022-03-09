import React from "react";
import "./form.css";
import toLogo from "../../images/techover-logo.png";

export default function Form() {
  return (
    <div className="formPage">
      <img className="toLogo" src={toLogo} alt="Techover" />
      <div className="form">
        <form>
          <lable>
            Full Name
            <input type="text" name="name"></input>
            Full Name
            <input type="text" name="name"></input>
          </lable>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}
