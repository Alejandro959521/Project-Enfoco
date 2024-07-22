import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";




export const Navbarhome = () => {
	return (
		
			<div className=" flex-1 flex  justify-between ">
				<div className="  ml-4 ">
				<Link to="/">
				
				<img className = " w-[200px] h-[200px] object-cover " src={logo} />
				</Link>

				</div>
				<div className = " text-4xl  flex items-start mt-8 space-x-16 pr-16">
					
					<Link to="/Galeria" className="  link ">
						<span className=" "> Galería </span> 
					</Link>					
					<Link to="/Servicios" className=" link ">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/Contacto" className="   link ">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/SobreMí" className=" link ">  
						<span className=" "> Sobre Mí </span>
					</Link>  
					<Link to="/" className="text-2xl   link " > 
					<i className="fa-solid fa-cart-plus "></i>
					</Link>   
				       
				</div>
			</div>
		
	);
};
