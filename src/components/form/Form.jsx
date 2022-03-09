import React, {useState, useEffect} from "react";
import "./form.css";
import toLogo from "../../images/techover-logo.png";
import { fs } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Form() {

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [motivation, setMotivation] = useState("");
 
  const [loader, setLoader] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
  }
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



  return (
    <div className="formPage">
      <img className="toLogo" src={toLogo} alt="Techover" />
      <div className="form">
        <form className="form" onSubmit={handleSubmit}>
            
            <input onChange={(e) => setFullName(e.target.value)} type="text" name="name" placeholder="Full Name"></input>

            <input onChange={(e) => setAge(e.target.value)} type="text" name="age" placeholder="Age"></input>
          
            <input onChange={(e) => setMail(e.target.value)} type="text" name="mail" placeholder="Mail"></input>

            <input onChange={(e) => setMotivation(e.target.value)} type="text" name="motivation" placeholder="Motivation"></input>

            <button type="submit" value="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}
