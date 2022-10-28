import React from "react";

export default function Alert(props) {
  return (
    // <div className="container alert_holder">
    props.alert && (
      <div
        className={`alert alert-${props.alert.type}`}
        id="alert_box"
        role="alert"
      >
        {props.alert.message}
      </div>
    )
    // </div>
  );
}
