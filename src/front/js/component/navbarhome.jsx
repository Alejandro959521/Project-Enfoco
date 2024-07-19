import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";



export const Navbarhome = () => {
	return (
		<nav className="navbar navbar-light bg-transparent p-0 m-0 d-flex justify-content-between">
			<div className="container-fluid  p-0 m-0">
			
				<Link to="/">
				
				<img className="imagelogo" src={logo} />
				</Link>
				<div className="me-5">
					<Link to="/" className=" mx-3 link fs-1">
						<span className=""> Galería </span> 
					</Link>
					<Link to="/" className=" mx-3 link fs-1" >
						<span className=" "> Album </span>
					</Link>
					<Link to="/" className=" mx-3 link fs-1">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/" className=" mx-3 link fs-1">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/" className=" mx-3 link fs-1 ">
						<span className=" "> Sobre Mí </span>
					</Link> 
					<Link to="/" className=" mx-3 link fs-1" > 
					<i class="fa-solid fa-cart-plus "></i>
					</Link>   
				       
				</div>
			</div>
		</nav>
	);
};
