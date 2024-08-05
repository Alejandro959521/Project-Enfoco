import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



export const Navbarhome = () => {

	const { store, actions } = useContext(Context);


	return (
		
			<div className=" flex-1 flex justify-between ">
				<div className="  ml-4  ">
				
				<Link className= " " to="/">
				
				<img className = "w-32 h-32" src={logo} />
				</Link>
 
				</div>
				<div className = " text-3xl  flex items-start mt-8 space-x-16 pr-16">
					<Link to="/" className=" link " >
						<span className=" "> Inicio </span> 
					</Link>
					<Link to="/Galeria" className="  link " >
						<span className=" "> Galería </span> 
					</Link>					
					<Link to="/Servicios" className=" link ">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/Contacto" className="   link ">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/SobreMi" className=" link ">  
						<span className=" "> Sobre Mí </span>
					</Link>  
					<FontAwesomeIcon icon={faTimes} className=" text-2xl cursor-pointer " 
					onClick={() => {actions.openCart()}} />
					
			   
				       
				</div>
			</div>
		
	);
};
