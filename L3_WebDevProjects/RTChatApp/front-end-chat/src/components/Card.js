import React from "react";
import "../static/components/Card.css";

export default function Card(props) {
  return (
    <div className="glass-card">
      <div className="credits">MemberShip</div>
      <div>
        <div className="name">{props.name}</div>
        <div className="email">{props.email.split('@')[0]}</div>
      </div>
    </div>
  );
}
