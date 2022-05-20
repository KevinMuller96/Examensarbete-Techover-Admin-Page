import React, { useEffect, useState } from "react";
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
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { fs } from "../../Firebase";

export default function Applicants() {
  const [applicants, setApplicants] = useState();
  const [motivation, setMotivation] = useState();
  const [reason, setReason] = useState();
  const [other, setOther] = useState();

  let { id } = useParams();
  useEffect(() => {
    const docRef = doc(fs, "Applications", id);
    const docSnap = getDoc(docRef);
    docSnap.then((doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const date = new Date(data.date.seconds * 1000).toDateString();
        setApplicants({ ...data, date: date });
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const save = (e) => {
    e.preventDefault();
    setMotivation("");
    setReason("");
    setOther("");

    const docRef = doc(fs, "Applications", id);
    updateDoc(docRef, {
      motivation: arrayUnion(motivation),
      reason: arrayUnion(reason),
      other: arrayUnion(other),
    });
    console.log(id);
  };

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
              <span className="appliShowUsername">
                {applicants ? applicants.name : "Loading..."}
              </span>
              <span className="appliShowUserTitle">
                {applicants ? applicants.currentJob : "Loading..."}
              </span>
            </div>
          </div>
          <div className="appliShowBottom">
            <span className="appliShowTitle">Details</span>
            <div className="appliShowInfo">
              <PermIdentity className="appliShowIcon" />
              <span className="appliShowInfoTitle">
                {applicants ? applicants.gender : "No id was found"}
              </span>
            </div>
            <div className="appliShowInfo">
              <CalendarToday className="appliShowIcon" />
              <span className="appliShowInfoTitle">
                {applicants ? applicants.date : "Loading..."}
              </span>
            </div>
            <span className="appliShowTitle">Contact Details</span>
            <div className="appliShowInfo">
              <PhoneAndroid className="appliShowIcon" />
              <span className="appliShowInfoTitle">
                {applicants ? applicants.phone : "loading..."}
              </span>
            </div>
            <div className="appliShowInfo">
              <MailOutline className="appliShowIcon" />
              <span className="appliShowInfoTitle">
                {applicants ? applicants.email : "Loading..."}
              </span>
            </div>
            <div className="appliShowInfo">
              <LocationSearching className="appliShowIcon" />
              <span className="appliShowInfoTitle">
                {applicants ? applicants.location : "Loading..."}
              </span>
            </div>
          </div>
        </div>
        <div className="appliUpdate">
          <span className="appliUpdateTitle">Candidate Info</span>
          <form className="appliUpdateForm">
            <div className="appliUpdateLeft">
              <div className="appliUpdateItem">
                <label>What motivates the candidate?</label>
                <input
                  type="text"
                  placeholder="Keywords..."
                  className="appliUpdateInput"
                  onChange={(e) => {
                    setMotivation(e.target.value);
                  }}
                  value={motivation}
                />
              </div>
              <div className="appliUpdateItem">
                <label>Why reason?</label>
                <input
                  type="text"
                  placeholder="Why Techover..."
                  className="appliUpdateInput"
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                  value={reason}
                />
              </div>
              <div className="appliUpdateItem">
                <label>Other information</label>
                <input
                  type="text"
                  placeholder="Other info..."
                  className="appliUpdateInput"
                  onChange={(e) => {
                    setOther(e.target.value);
                  }}
                  value={other}
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
              <button className="appliUpdateButton" onClick={save}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="appliLower"></div>
    </div>
  );
}
