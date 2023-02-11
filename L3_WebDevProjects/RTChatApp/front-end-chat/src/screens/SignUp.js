import axios from "axios";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import "../static/screens/LogSign.css";
import { useUrl } from "../components/ContextReducer";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const backend = useContext(useUrl);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validity, setValidity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios({
        method: "post",
        url: `${backend}/identity/register`,
        data: { ...credentials },
      });
      localStorage.setItem("accessToken", response.data.token);
      localStorage.setItem("userEmail", response.data.user.email);
      localStorage.setItem("userName", response.data.user.name);
      navigate("/chatHub", { replace: true });
    } catch (error) {
      setValidity(`None of the above fields Cannot be empty`);
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
          <div>REGISTER</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="userName"
              value={credentials.name}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              id="email"
              value={credentials.email}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              id="password"
              value={credentials.password}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <button id="register" type="submit">
              REGISTER
            </button>
          </form>
          <div className="error" style={{ color: "DarkRed" }}>
            {validity}
          </div>
        </div>
      </div>
    </div>
  );
}
