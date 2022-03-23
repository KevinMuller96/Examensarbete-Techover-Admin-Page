import React, { useEffect } from "react";
import "./applicants.css";
import logo from "../../images/techover-wolf-logo.png";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fs } from "../../Firebase";

export default function Applicants() {
  let { id } = useParams();
  useEffect(() => {
    const docRef = doc(fs, "Applications", id);
    const docSnap = getDoc(docRef);
    docSnap.then((doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <div className="applicants">
      <div className="appliTitleContainer">
        <h1 className="appliTitle">Overview</h1>
        <Link to="/">
          <button className="appliAddButton">Commit</button>
        </Link>
      </div>
      <div className="appliContainer">
        <div className="appliShow">
          <div className="appliShowTop">
            {/* <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="appliShowImg"
            /> */}
            <div className="appliShowTopTitle">
              <span className="appliShowUsername">Kevin Müller</span>
              <span className="appliShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="appliShowBottom">
            <span className="appliShowTitle">Account Details</span>
            <div className="appliShowInfo">
              <PermIdentity className="appliShowIcon" />
              <span className="appliShowInfoTitle">ID?</span>
            </div>
            <div className="appliShowInfo">
              <CalendarToday className="appliShowIcon" />
              <span className="appliShowInfoTitle">
                Hämta datum som dem ansökte
              </span>
            </div>
            <span className="appliShowTitle">Contact Details</span>
            <div className="appliShowInfo">
              <PhoneAndroid className="appliShowIcon" />
              <span className="appliShowInfoTitle">+46 70 721 63 34</span>
            </div>
            <div className="appliShowInfo">
              <MailOutline className="appliShowIcon" />
              <span className="appliShowInfoTitle">kaywann96@gmail.com</span>
            </div>
            <div className="appliShowInfo">
              <LocationSearching className="appliShowIcon" />
              <span className="appliShowInfoTitle">Stockholm | Sweden</span>
            </div>
          </div>
        </div>
        <div className="appliUpdate">
          <span className="appliUpdateTitle">Info</span>
          <form className="appliUpdateForm">
            <div className="appliUpdateLeft">
              <div className="appliUpdateItem">
                <label>What motivates the candidate?</label>
                <input
                  type="text"
                  placeholder="Keywords..."
                  className="appliUpdateInput"
                />
              </div>
              <div className="appliUpdateItem">
                <label>Why reason?</label>
                <input
                  type="text"
                  placeholder="Why Techover..."
                  className="appliUpdateInput"
                />
              </div>
              <div className="appliUpdateItem">
                <label>Other information</label>
                <input
                  type="text"
                  placeholder="Other info..."
                  className="appliUpdateInput"
                />
              </div>
            </div>
            <div className="appliUpdateRight">
              <div className="appliUpdateUpload">
                <img className="appliUpdateImg" src={logo} alt="" />
                <label htmlFor="file">
                  <Publish className="appliUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="appliUpdateButton">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
