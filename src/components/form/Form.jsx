import "./form.css";
import React, { useState, useEffect } from "react";
import "./form.css";
import toLogo from "../../images/techover-logo.png";
import { fs } from "../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
// import Mockdata from "../../MockData";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [workingStatus, setWorkingStatus] = useState("");
  const [location, setLocation] = useState("");
  const [motivation, setMotivation] = useState("");
  const [gender, setGender] = useState("");

  const push = async (e) => {
    e.preventDefault();
    const applicationRef = await addDoc(collection(fs, "Applications"), {
      name: fullName,
      age: age,
      email: mail,
      phone: phone,
      workingStatus: workingStatus,
      location: location,
      motivation: motivation,
      gender: gender,
      date: new Date(),
    });
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Application</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="john"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input
            type="text"
            placeholder="ex. 25"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+46- 73 456 78 25"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Current working status</label>
          <input
            type="text"
            placeholder="Ex. Student at... or Company name"
            value={workingStatus}
            onChange={(e) => setWorkingStatus(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input
            type="text"
            placeholder="Ex. New York | USA"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Motivation</label>
          <input
            type="text"
            placeholder="Why techover?"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={() => {
                setGender("Male");
              }}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={() => {
                setGender("Female");
              }}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={() => {
                setGender("Other");
              }}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        {/* <Mockdata></Mockdata> */}
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button onClick={push} className="newUserButton">
          Submit
        </button>
        {/* Här ska det skapas ett onClick event eller liknande som postar
        allt till databasen i rätt format */}
      </form>
    </div>
  );
}

// import React, {useState, useEffect} from "react";
// import "./form.css";
// import toLogo from "../../images/techover-logo.png";
// import { fs } from "../../Firebase";
// import { doc, setDoc } from "firebase/firestore";

// export default function Form() {

//   const [fullName, setFullName] = useState("");
//   const [age, setAge] = useState("");
//   const [mail, setMail] = useState("");
//   const [motivation, setMotivation] = useState("");

//   const [loader, setLoader] =useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);
//   }
// await setDoc(doc(fs, "Applications")), {
//    fullName: fullName,
//    age: age,
//    mail: mail,
//    motivation: motivation
// }
// fs.collection("Applications")
// .add({
//   fullName: fullName,
//   age: age,
//   mail: mail,
//   motivation: motivation
// })
// .then(() => {
//   setLoader(false);
//   alert("Your message has been submitted");
// })
// .catch((error) => {
//   alert.apply(error.message);
//   setLoader(false);
// });

// setFullName("")
// setAge("")
// setMail("")
// setMotivation("")

//   return (
//     <div className="formPage">
//       <img className="toLogo" src={toLogo} alt="Techover" />
//       <div className="form">
//         <form className="form" onSubmit={handleSubmit}>

//             <input onChange={(e) => setFullName(e.target.value)} type="text" name="name" placeholder="Full Name"></input>

//             <input onChange={(e) => setAge(e.target.value)} type="text" name="age" placeholder="Age"></input>

//             <input onChange={(e) => setMail(e.target.value)} type="text" name="mail" placeholder="Mail"></input>

//             <input onChange={(e) => setMotivation(e.target.value)} type="text" name="motivation" placeholder="Motivation"></input>

//             <button type="submit" value="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
//               Submit
//             </button>
//         </form>
//       </div>
//     </div>
//   );
// }
