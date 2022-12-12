import React from "react";
import access from "./images/access.svg";
import ellipse from "./images/ellipse.png";
import './onboarding.css';


function Onboarding2 () {
	return (
    <>
      <div className="ob-body">
        <div className="skip">
          <p>Skip</p>
        </div>
        <div>
          <img src={access} alt="placeholder"></img>
        </div>

        <div className="ob-text">
          <h4 className="ob-text-header">
            Reliable platform connecting employers and artisans
          </h4>
          <p className="ob-text-body">
            Get access to all different kinds of professional artisans with just
            a simple few clicks on your phone.
          </p>
        </div>

        <div className="ellipse-container">
          <img className="ellipse" src={ellipse} alt="ellipse dot"></img>
          <img className="ellipse" src={ellipse} alt="ellipse dot"></img>
          <img className="ellipse" src={ellipse} alt="ellipse dot"></img>
        </div>
        <div>
          <button className="ob-button">
            <a href="/onboarding_3">Next</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Onboarding2;