import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";



export const Navbarhome = () => {
	return (
		
			<div className=" flex-1 flex  justify-between ">
				<div className="  ml-4  ">
				<Link to="/">
				
				<img className = "imagelogo w-[200px] h-[200px] object-cover" src={logo} />
				</Link>

				</div>
				<div className = " text-4xl  flex items-center px-16 ">
					<Link to="/" className=" mx-6  mb-16 link ">
						<span className=" "> Galería </span> 
					</Link>
					<Link to="/" className=" mx-6  mb-16  link " >
						<span className=" "> Album </span>
					</Link>
					<Link to="/" className="mx-6   mb-16 link ">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/" className=" mx-6 mb-16  link ">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/" className=" mx-6 mb-16 link ">
						<span className=" "> Sobre Mí </span>
					</Link>  
					<Link to="/" className="text-2xl  mx-6  mb-16 link " > 
					<i className="fa-solid fa-cart-plus "></i>
					</Link>   
				       
				</div>
			</div>
		
	);
};
