import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const themeHandleLight = () => {
    props.themeHandle("light");
  };
  const themeHandleBlue = () => {
    props.themeHandle("blue");
  };
  const themeHandleDark = () => {
    props.themeHandle("dark");
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  bg-${props.mode["text"]} navbar-${props.mode["text"]}  bg-${props.mode["text"]}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  about
                </Link>
              </li>
            </ul>

            <button
              className="pallet_circle"
              onClick={themeHandleLight}
              id="light"
            ></button>
            <button
              className="pallet_circle"
              onClick={themeHandleBlue}
              id="blue"
            ></button>
            <button
              className="pallet_circle"
              onClick={themeHandleDark}
              id="dark"
            ></button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string };

Navbar.defaultProps = {
  title: "Imax",
};
