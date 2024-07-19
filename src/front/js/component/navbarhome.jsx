import React from "react";
import { Link } from "react-router-dom";

export const Navbarhome = () => {
	return (
		<nav className="navbar navbar-light bg-transparent">
			<div className="container">
				<Link to="/">
					
				</Link>
				<div className="">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action </button> 
					</Link>
				</div>
			</div>
		</nav>
	);
};
