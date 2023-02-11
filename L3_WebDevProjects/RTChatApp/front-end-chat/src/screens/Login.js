import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrl } from "../components/ContextReducer";
import Navbar from "../components/Navbar";
import "../static/screens/LogSign.css";

export default function Login() {
  const navigate = useNavigate();
  const [validity, setValidity] = useState("");
  const backend = useContext(useUrl);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      let response = await axios({
        method: "post",
        url: `${backend}/identity/login`,
        data: { ...credentials },
      });
      localStorage.setItem("accessToken", response.data.token);
      localStorage.setItem("userName", response.data.user.name);
      localStorage.setItem("userEmail", response.data.user.email);
      navigate("/chatHub", { replace: true });
    } catch (error) {
      setValidity(error.response.data.msg);
      setTimeout(() => {
        setValidity("");
      }, 3000);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="floatingGlass" style={{ "--var": "1" }}></div>
        <div className="floatingGlass" style={{ "--var": "2" }}></div>
        <div className="floatingGlass" style={{ "--var": "3" }}></div>
        <div className="floatingGlass" style={{ "--var": "4" }}></div>
        <div className="form" style={{ flexDirection: "column" }}>
          <div>LOGIN</div>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              id="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Enter
            your password"
              id="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button type="submit" onClick={loginUser}>
              LOGIN
            </button>
          </form>
          <div className="error" style={{ color: "darkred" }}>
            {validity}
          </div>
        </div>
      </div>
    </div>
  );
}
