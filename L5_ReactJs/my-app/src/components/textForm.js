import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "new text"; // Wrong way to change the state
  //   setText("newtext"); // correct way to change the state

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    // console.log("uppercase was clicked");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "gray",
            color: props.mode === "light" ? "black" : "white",
            border: "1px solid black",
            outline: "none",
          }}
        ></textarea>
      </div>
      <button className="btn btn-success mx-2 my-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-success mx-2 my-2" onClick={handleLowClick}>
        Convert to UpperCase
      </button>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.trim().split(" ").length}
          words {text.length}
          characters
        </p>
        <p>{0.008 * text.trim().split(" ").length} minutes needed to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something in text box to Preview"}
        </p>
      </div>
    </div>
  );
}
