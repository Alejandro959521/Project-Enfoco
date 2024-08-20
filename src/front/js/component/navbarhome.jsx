import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo2 from "../../img/logo3.png";



export const Navbarhome = () => {

	const { store, actions } = useContext(Context);
	


	return (
		
			<div className="flex items-center p-4 h-auto md:h-20 flex-col md:flex-row justify-between">
				<div className=" mb-4 md:mb-0 ml-4 ">
				
				<Link onClick={() => actions.navOpt("Inicio")} className={`link hover:font-bold ${store.navbarSelect === "Inicio" ? "font-bold" : ""}`} to="/">
				
				<img className = "pt-4 w-24 h-24 md:w-36 md:h-36" src={logo2} />
				</Link>
 
				</div>
				<div className = " flex flex-col md:flex-row text-dark text-xl md:text-3xl flex items-center mt-4 md:mt-0 md:space-x-16 md:space-y-0 space-x-0 space-y-4 md:pr-16 pr-0">
					<Link to="/"  onClick={() => actions.navOpt("Inicio")} className={`link hover:font-bold ${store.navbarSelect === "Inicio" ? "font-bold" : ""}`}>
						<span > Inicio </span> 
					</Link>
					<Link to="/Galeria" onClick={() => actions.navOpt("Galeria")} className={`link hover:font-bold ${store.navbarSelect === "Galeria" ? "font-bold" : ""}`}>
						<span  > Galería </span> 
					</Link>					
					<Link to="/Servicios"  onClick={() => actions.navOpt("Servicios")} className={`link hover:font-bold ${store.navbarSelect === "Servicios" ? "font-bold" : ""}`}>
						<span > Servicios </span>
					</Link>
					<Link to="/Contacto" onClick={() => actions.navOpt("Contacto")} className={`link hover:font-bold ${store.navbarSelect === "Contacto" ? "font-bold" : ""}`} >
						<span > Contacto </span>
					</Link>
					<Link to="/SobreMi" onClick={() => actions.navOpt("Sobre Mi")} className={`link hover:font-bold ${store.navbarSelect === "Sobre Mi" ? "font-bold" : ""}`} >  
						<span > Sobre Mí </span>
					</Link> 
					<div className="relative inline-block mt-4 md:mt-0">
					<FontAwesomeIcon icon={faCartPlus} className={ `text-2xl cursor-pointer ${store.selectIcon === (true) ? 'text-blue-950  transform scale-110':'' }`}
						onClick={() => { actions.openCart() , actions.setSelectIcon(true) }} />
					<span className=" underline underline-offset-4 absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
						{store.listCar.length}
					</span>
				</div>
					
			   
				       
				</div>
			</div>
		
	);
};
