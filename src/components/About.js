import React, { useState } from "react";

export default function About(props) {
  return (
    <>
      <h1 style={props.mode} className="mt-5">
        About Us
      </h1>
      <div className="page-content">
        <div className="block-title" style={props.mode}>
          Welcome to TextUtils
        </div>
        <div className="block block-strong p-5" style={props.mode}>
          <p>
            Framework7 - is a free and open source HTML mobile framework to
            develop hybrid mobile apps or web apps with iOS or Android
            (Material) native look and feel. It is also an indispensable
            prototyping apps tool to show working app prototype as soon as
            possible in case you need to. Framework7 is created by Vladimir
            Kharlampidi (iDangero.us).
          </p>
          <p>
            The main approach of the Framework7 is to give you an opportunity to
            create iOS and Android (Material) apps with HTML, CSS and JavaScript
            easily and clear. Framework7 is full of freedom. It doesn't limit
            your imagination or offer ways of any solutions somehow. Framework7
            gives you freedom!
          </p>
          <p>
            Framework7 is not compatible with all platforms. It is focused only
            on iOS and Android (Material) to bring the best experience and
            simplicity.
          </p>
          <p>
            Framework7 is definitely for you if you decide to build iOS and
            Android hybrid app (Cordova or PhoneGap) or web app that looks like
            and feels as great native iOS or Android (Material) apps.
          </p>
        </div>
      </div>
    </>
  );
}
