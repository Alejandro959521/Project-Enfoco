import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const NavbarGalery = () => {

	const { store, actions } = useContext(Context);

	return (
		
			<div className="flex justify-between h-20" style={{ backgroundColor: `#7B7C81` }}>
				<div className="  ml-4 ">
				<Link to="/"> 
				
				<img className = " w-32 h-32 " src={logo} />
				</Link>

				</div>
				<div className = " text-3xl  flex items-start mt-8 space-x-16 pr-16">
					<Link to="/" className=" link ">
						<span className=" "> Inicio </span> 
					</Link>	
					<Link to="/Galeria" className=" link ">
						<span className=" "> Galería </span> 
					</Link>	
									
					<Link to="/Servicios" className=" link ">
						<span className=" "> Servicios </span>
					</Link>
					<Link to="/Contacto" className=" link ">
						<span className=" "> Contacto </span>
					</Link>
					<Link to="/SobreMi" className=" link ">  
						<span className=" "> Sobre Mí </span>
					</Link>  
				
					<i className="fa-solid fa-cart-plus text-2xl"
					onClick={() => {actions.openCart()}}
					></i>
				  
				       
				</div>
			</div>
		
	);
};
