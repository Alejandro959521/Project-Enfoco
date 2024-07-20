import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";



export const Navbarhome = () => {
	return (
		<nav className="">
			<div className="">
			
				<Link to="/">
				
				<img className="imagelogo" src={logo} />
				</Link>
				<div className="">
					<Link to="/" className=" link ">
						<span className=""> Galería </span> 
					</Link>
					<Link to="/" className=" link " >
						<span className=" "> Album </span>
					</Link>
					<Link to="/" className="  link ">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/" className="  link ">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/" className="  link ">
						<span className=" "> Sobre Mí </span>
					</Link>  
					<Link to="/" className="  link " > 
					<i class="fa-solid fa-cart-plus "></i>
					</Link>   
				       
				</div>
			</div>
		</nav>
	);
};
