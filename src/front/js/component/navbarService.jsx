import React,{useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/service.css";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



export const NavbarService = () => {

	const { store, actions } = useContext(Context);


	return (
		   
			<div className="flex justify-between h-20" style={{ backgroundColor: `#0D0909` }}>
				<div className="  ml-4 ">
				<Link to="/"> 
				
				<img className = " w-32 h-32 " src={logo} />
				</Link>

				</div>
				<div className = " text-white  text-3xl  flex items-start mt-8 space-x-16 pr-16">
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
					
					<div className="relative inline-block">
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
