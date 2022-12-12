import React from "react";
import verification from "./images/verification.svg";
import ellipse from "./images/ellipse.png";
import './onboarding.css';


function Onboarding3 () {
	return (
    <>
      <div className="ob-body">
        <div className="verification">
          <img src={verification} alt="placeholder"></img>
        </div>

        <div className="ob-text">
          <h4 className="ob-text-header">
            Reliable platform connecting employers and artisans
          </h4>
          <p className="ob-text-body">
            We ensure proper verification process for all artisans which
            includes KYC, police verification and so on.
          </p>
        </div>

        <div className="ellipse-container">
          <img className="ellipse" src={ellipse} alt="ellipse dot"></img>
          <img className="ellipse" src={ellipse} alt="ellipse dot"></img>
          <img className="ellipse" src={ellipse} alt="ellipse dot"></img>
        </div>
        <div>
          <button className="ob-button">
            <a href="/roles">Get Started</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Onboarding3;