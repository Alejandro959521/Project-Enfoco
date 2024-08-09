import React,{useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/service.css";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, } from '@fortawesome/free-solid-svg-icons';



export const NavbarService = () => {

	const { store, actions } = useContext(Context);


	return (
		   
			<div className="flex items-center p-4 h-auto md:h-20 flex-col md:flex-row justify-between" style={{ backgroundColor: `#0D0909` }}>
				<div className="  mb-4 md:mb-0 ml-4 ">
				<Link to="/"> 
				
				<img className = " w-24 h-24 md:w-32 md:h-32 " src={logo} />
				</Link>
 
				</div>
				<div className = " flex flex-col md:flex-row text-white text-xl md:text-3xl flex items-center mt-4 md:mt-0 md:space-x-16 md:space-y-0 space-x-0 space-y-4 md:pr-16 pr-0">
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
					
					<div className="relative inline-block  mt-4 md:mt-0">
					<FontAwesomeIcon icon={faCartPlus} className=" text-2xl cursor-pointer "
						onClick={() => { actions.openCart() }} />
					<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
						{store.listCar.length}
					</span>  
				</div>
				       
				</div>
			</div>
		
	);
};
