import React from "react";
import './onboarding.css';
import '../../assets/styles/global-styles.css';
import logo from '../../assets/images/logo.svg';
import maid1 from './images/maid1.svg';
import agent from './images/agent.svg';
import employer from './images/employer.svg';
import hospital from './images/hospital.svg';
import arrow from './images/arrow.svg';
import {Link} from "react-router-dom";

function Roles () {
	return (
    <>
      <div className="ob-body">
        <div>
          <img className="mynda-logo" src={logo} alt="logo"></img>
        </div>
        <div className="mynda-title">
          <h4>Mynda</h4>
        </div>
        <div className="mynda-roles-select">
          <h2>Select Role</h2>
          <p>
            Connect with employers and artisans around you by selecting your
            role
          </p>
        </div>
        <div className="mynda-roles-container">
          <img
            className="mynda-roles-image"
            src={maid1}
            alt="placeholder"
          ></img>
          <div className="mynda-roles-text">
            <h4>Are you a Maid/Mynda?</h4>
            <p>Create an account</p>
          </div>
          <Link to = "/mynda/createaccount" className="employer-link">
            <img
              className="mynda-roles-arrow"
              src={arrow}
              alt="placeholder"
            ></img>
          </Link>
        </div>

        <div className="mynda-roles-container">
          <img
            className="mynda-roles-image"
            src={agent}
            alt="placeholder"
          ></img>
          <div className="mynda-roles-text">
            <h4>Are you an Agent?</h4>
            <p>Create an account</p>
          </div>
          <Link to = "/agent/createaccount" className="employer-link">
            <img
              className="mynda-roles-arrow"
              src={arrow}
              alt="placeholder"
            ></img>
          </Link>
        </div>

        <div className="mynda-roles-container">
          <img src={employer} alt="placeholder"></img>
          <div className="mynda-roles-text">
            <h4>Are you an Employer?</h4>
            <p>Create an account</p>
          </div>
          <Link to = "/employer/signup" className="employer-link">
            <img
              className="mynda-roles-arrow"
              src={arrow}
              alt="placeholder"
            ></img>
          </Link>
        </div>

        <div className="mynda-roles-container">
          <img
            className="mynda-roles-image"
            src={hospital}
            alt="placeholder"
          ></img>
          <div className="mynda-roles-text">
            <h4>Are you a Lab/Hospital?</h4>
            <p>Create an account</p>
          </div>
          <Link to = "/laboratory/signup" className="employer-link">
            <img
              className="mynda-roles-arrow"
              src={arrow}
              alt="placeholder"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Roles;