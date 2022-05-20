import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Home from "../src/pages/home/Home";
import { useAuth } from "./context/AuthContext";
import ApplicationList from "./pages/applicationList/ApplicationList";
import Applicants from "./pages/applicants/Applicants";
import Form from "../src/components/form/Form";
import "./app.css";
import React, { useEffect, useState } from "react";
import { fs } from "./Firebase";
import {
  getDocs,
  collection,
  doc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import MockData from "./MockData";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}
function App() {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    // MockData();
    const unsub = onSnapshot(collection(fs, "Applications"), (docs) => {
      setApplications(
        docs.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date:
            new Date(doc.data().date.seconds * 1000).toDateString() +
            " " +
            new Date(doc.data().date.seconds * 1000).toLocaleTimeString(),
        }))
      );
    });

    return unsub;
  }, []);
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Home applications={applications} />
              </PrivateRoute>
            }
          />

          <Route
            path="/applications"
            element={
              <PrivateRoute>
                <ApplicationList applications={applications} />
              </PrivateRoute>
            }
          />

          <Route
            path="/applicants/:id"
            element={
              <PrivateRoute>
                <Applicants />
              </PrivateRoute>
            }
          />

          <Route path="/submitForm" element={<Form />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// useEffect(() => {
//   console.log(applications);
//   let nonting = applications.length;
//   console.log("Antal appliocationer: ", nonting);
// }, [applications]);
