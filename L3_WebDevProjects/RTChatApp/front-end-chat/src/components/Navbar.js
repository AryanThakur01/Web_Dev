import React from "react";
import "../static/components/Navbar.css";
import logo from "../static/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const userLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
  };
  if (localStorage.accessToken) {
    return (
      <nav id="navigation">
        <div className="nav-left">
          <img id="logo" src={logo} alt="!!!" />
          <Link to="/chatHub" className="nav-link">
            Home
          </Link>
        </div>
        <ul id="navigation-links">
          <li>
            <Link to="/" className="nav-link" onClick={userLogOut}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <>
      <nav id="navigation">
        <div className="nav-left">
          <img id="logo" src={logo} alt="!!!" />
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <ul id="navigation-links">
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signUp" className="nav-link">
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
      <div>&nbsp;</div>{" "}
      {/* this is to prevent the movement of the navbar that usually occurs */}
    </>
  );
}
