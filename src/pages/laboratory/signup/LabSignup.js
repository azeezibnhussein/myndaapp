import React from "react";
import "./lab-signup.css";
import "../../../assets/styles/global-styles.css";
import { Link } from "react-router-dom";

const LabSignup = () => {
  return (
    <>
      <div className="o-container">
        <div className="h-form-header">
          <h3>Create Account</h3>
          <p className="body-color-blue">Step 1 of 2</p>
        </div>
      </div>

      <div className="container">
        <div className="h-header-message">
          <p>
            This info is pertaining to you as a primary contact of your
            laboratory
          </p>
        </div>

        <div className="h-signup-body">
          <LabSignupForm />
        </div>
      </div>
    </>
  );
};

function LabSignupForm() {
  return (
    <>
      <div className="h-signup-body">
        <form>
          <div className="form-items">
            <FormItem
              name="name"
              type="text"
              placeholder="First and last name"
              label="Name"
            ></FormItem>
            <FormItem
              name="email"
              type="email"
              placeholder="Eg @gmail.com"
              label="Email"
            ></FormItem>
            <FormItem
              name="phoneNumber"
              type="text"
              placeholder="Eg +234"
              label="Phone Number"
            ></FormItem>
            <FormItem
              name="password"
              type="password"
              placeholder="Enter password"
              label="Password"
            ></FormItem>
            <FormItem
              name="retypePassword"
              type="password"
              placeholder="Retype Password"
              label="Retype Password"
            ></FormItem>
          </div>
        </form>
        <div className="btn-container">
          <Link to = "/employer/verify">
            <button className="signup-btn">Next</button>
          </Link>
        </div>
        <div className="existing-user-alt">
          <p>
            Already have an account? <Link to = "/laboratory/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

function FormItem(props) {
  const { Icon } = props;
  return (
    <form>
      <div className="form-item">
        <label className="forms-items" htmlFor={props.name}>
          {props.label}
        </label>
        <div className="input-container">
          <span>{Icon && <Icon />}</span>
          <input
            type={props.type}
            className="form-control input"
            id={props.name}
            placeholder={props.placeholder}
            onChange={(e) => props.changeFunction(e)}
          />
        </div>
      </div>
    </form>
  );
}

export default LabSignup;
