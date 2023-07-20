import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase Triggered");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lowercase Triggered");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("Clear Triggered");
    let newText = "";
    setText(newText);
  };

  const handleSpeakClick = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleOnChange = (event) => {
    console.log("wwew");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpeakClick}
        >
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {text.length} characters
        </p>
        <p>
          {Math.ceil(
            0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
          )}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
