import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";




export const NavbarGalery = () => {
	return (
		
			<div className=" flex justify-between h-32" style={{ backgroundColor: `#7B7C81` }}>
				<div className="  ml-4  mt-8">
				<Link to="/">
				
				<img className = " w-[200px] h-[200px] object-cover" src={logo} />
				</Link>

				</div>
				<div className = " text-4xl  flex items-start mt-8 space-x-16 pr-16">
					
					<Link to="/Galeria" className=" link ">
						<span className=" "> Galería </span> 
					</Link>					
					<Link to="/Servicios" className=" link ">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/Contacto" className=" link ">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/SobreMí" className=" link ">  
						<span className=" "> Sobre Mí </span>
					</Link>  
					<Link to="/" className="text-2xl link " > 
					<i className="fa-solid fa-cart-plus "></i>
					</Link>   
				       
				</div>
			</div>
		
	);
};
