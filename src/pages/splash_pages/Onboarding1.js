import React from "react";
import maid from "./images/maid.svg";
import ellipse from "./images/ellipse.png";
import './onboarding.css';
import '../../assets/styles/global-styles.css';
import {Link} from "react-router-dom";


function Onboarding1 () {
	return (
		<>
		<div className= "ob-body">
			<div className= "skip">
				<a href= "/roles">Skip</a>
			</div>
			<div>
				<img className= "maid" src={maid} alt="placeholder"></img>
			</div>

			<div className= "ob-text">
				<h4>Enjoy verified maid services</h4>
				<p>You don’t need to stress too much, with Mynda you can access to verified maids from the comfort of your home.</p>
			</div>

			<div className= "ellipse-container">
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
				<img className= "ellipse" src= {ellipse} alt= "ellipse dot"></img>
			</div>
			<div>
				<Link to = "/onboarding_2"><button className= "ob-button">Next</button></Link>
			</div>
		</div>
		</>
	)
}

export default Onboarding1;