import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [copyText, setCopyText] = useState("Copy All");
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertMaker("Successfully converted to Uppercase", "success");
  };
  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertMaker("Successfully converted to Lowercase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.alertMaker("Text Removed", "warning");
  };
  const handleCopy = () => {
    let y = document.getElementById("floatingTextarea");
    y.select();
    y.setSelectionRange(0, 99999);
    try {
      var retVal = document.execCommand("copy");
      props.alertMaker("Text copied to Clipboard", "success");
    } catch (err) {
      props.alertMaker("Somthing went wrong", "danger");
    }
  };
  const handleFirstCase = () => {
    let newText = text
      .split(".")
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(". ");
    console.log(newText);
    setText(newText);
    props.alertMaker("First Letter Captilized", "success");
  };
  const hanldeChange = (event) => {
    setText(event.target.value);
    setCopyText("Copy All");
  };
  return (
    <>
      <div className="container" style={{ color: props.mode.color }}>
        <h2 className="my-3">{props.heading}</h2>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Enter Your Text Here"
            id="floatingTextarea"
            rows="8"
            value={text}
            onChange={hanldeChange}
            style={{
              color: props.mode.color,
              backgroundColor: props.mode.backgroundColor,
            }}
          ></textarea>
          <label htmlFor="floatingTextarea">YOUR TEXT</label>
        </div>
        <div className="container btn_con my-3">
          <button
            type="button"
            className="btn btn-success "
            onClick={handleCopy}
          >
            {copyText}
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={handleUpperCase}
          >
            UPPERCASE
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={handleLoCase}
          >
            lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={handleFirstCase}
          >
            First Letter UPPERCASE
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode.color }}>
        <h5>Your Text Summary</h5>
        <p>
          <b>{text === "" ? 0 : text.trim().split(" ").length}-words</b> and{" "}
          {text.trim().length}-Characters
        </p>
        <p>
          {(0.0032 * text.split(" ").length).toFixed(1)}-Minute Read
          (Average-300 wpm)
        </p>
        <h4>Preview</h4>
        <p>
          {text.length === 0
            ? "Enter Something in the above textbox to preview it here"
            : text.trim()}
        </p>
      </div>
    </>
  );
}
