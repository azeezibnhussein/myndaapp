import React from "react";
import "./lab-login.css";
import clap from "../../employer/login/images/clap.svg";
import {Link} from "react-router-dom";

const LabLogin = () => {
	return (
		<>
		<LabLoginForm/>
		</>
	)
}
function LabLoginForm() {
  return (
    <>
      <div className="login-body">
        <div className="login-form-header">
          <h3>Welcome Back</h3>
          <img src={clap} alt="placeholder"></img>
        </div>
        <form>
          <div className="form-items">
            <FormItem
              name="email"
              type="email"
              placeholder="Eg @gmail.com"
              label="Email"
            ></FormItem>
            <FormItem
              name="password"
              type="password"
              placeholder="Enter password"
              label="Password"
            ></FormItem>
          </div>
        </form>
        <div className="forgot-password">
          <p>Forgot Password?</p>
        </div>
        <div className="btn-container">
          <Link to = "/laboratory/home">
            <button className="login-btn">Login</button>
          </Link>
        </div>
        <div className="existing-user-alt">
          <p>Don't have an account?</p> <Link to = "/laboratory/signup">Sign up</Link>
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
}export default LabLogin;