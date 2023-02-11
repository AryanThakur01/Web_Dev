import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../static/screens/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="designBubbles"></div>
      <div className="designBubbles"></div>
      <div className="designBubbles"></div>
      <div className="designBubbles"></div>
      <div>&nbsp;</div>{" "}
      {/* this is to prevent the movement of the navbar that usually occurs */}
      {localStorage.accessToken ? (
        <section id="landing-page">
          <button
            className="btn"
            onClick={() => {
              navigate("/chatHub");
            }}
          >
            Get Me To The Chat Hall
          </button>
        </section>
      ) : (
        <section id="landing-page">
          <input
            type="text"
            className="text-container"
            style={{ margin: "20px", width: "clamp(250px, 500px, 50vw)" }}
          />
          <button className="btn">Chat as Guest</button>
        </section>
      )}
      <footer>This is footer</footer>
    </div>
  );
}
