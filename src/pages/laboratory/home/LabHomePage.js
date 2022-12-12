import React from "react";
import "./lab-home.css";
import "../../../assets/styles/global-styles.css";
import MainHeader from "../../../components/main_header/MainHeader";
import Navbar from "../../../components/navbar/Navbar";
import SearchBar from "../../../components/search_bar/SearchBar";
import dp from "./images/dp.svg";
import patienticon from "./images/patienticon.svg";
import healthworker from "./images/healthworker.svg";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";


const LabHomePage = () => {
  let picture = dp;
  let icon = patienticon;

  return (
    <>
      <div className="o-container">
        <MainHeader picture={picture} />
        <Navbar icon={icon} />

        <div className="container">
          <SearchBar />
          <section className="lab-services">
            <div>
              <h3>Set up your Lab Services today</h3>
              <button>Get started</button>
            </div>
            <div className="lab-s-img-container">
              <img src={healthworker} alt="placeholder"></img>
            </div>
          </section>

          <div className="new-patient-orders">
            <div className="new-patient-orders-head">
              <h4>New Patient Orders</h4>
              <Link to ="#" className="body-color-blue">
                See all
              </Link>
            </div>
            <div className="new-patient-orders-body">
              <div className="orders-col">
                <div className="orders-col-1">
                  <span className="bs-person-container">
                    <BsPerson className="bs-person" />
                  </span>
                  <p>Code- 121212</p>
                </div>
                <div className="orders-col-2">
                  <p>10/10/21</p>
                </div>
              </div>

              <div className="orders-col">
                <div className="orders-col-1">
                  <span className="bs-person-container">
                    <BsPerson className="bs-person" />
                  </span>
                  <p>Code- 121212</p>
                </div>
                <div className="orders-col-2">
                  <p>10/10/21</p>
                </div>
              </div>

              <div className="orders-col">
                <div className="orders-col-1">
                  <span className="bs-person-container">
                    <BsPerson className="bs-person" />
                  </span>
                  <p>Code- 121212</p>
                </div>
                <div className="orders-col-2">
                  <p>10/10/21</p>
                </div>
              </div>

              <div className="orders-col">
                <div className="orders-col-1">
                  <span className="bs-person-container">
                    <BsPerson className="bs-person" />
                  </span>
                  <p>Code- 121212</p>
                </div>
                <div className="orders-col-2">
                  <p>10/10/21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabHomePage;
