import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, currentUser, logout } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div>
      Login
      <lable>Email</lable>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <lable>Password</lable>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        onClick={async () => {
          const errorCheck = await login(email, password);

          if (!errorCheck?.user?.email) {
            setError(errorCheck);
            console.log(errorCheck);
          } else {
            navigate("/", { replace: true });
          }
        }}
      >
        Login
      </button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
