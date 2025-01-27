import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/service.css";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import logo from "../../img/logonegro.png";



export const NavbarService = () => {

	const { store, actions } = useContext(Context);
	const [isCatalogOpen, setIsCatalogOpen] = useState(false);

	const handleCatalogClick = () => {
		setIsCatalogOpen(!isCatalogOpen);
	};

	const handleCategoryClick = (category) => {
		actions.navOpt(category);
		setIsCatalogOpen(false);
		actions.navOpt("Catalogo");
	};

	return (

		<div className="flex items-center p-4 h-auto lg:h-20 flex-col lg:flex-row justify-between" style={{ backgroundColor: `#352D2D` }}>
			<div className="    ml-4 ">
				<Link to="/" onClick={() => actions.navOpt("Inicio")} className={`link hover:font-bold ${store.navbarSelect === "Inicio" ? "font-bold" : ""}`}>

					<img className="pt-4 w-24 h-24 md:w-36 md:h-36 " src={logo} />
				</Link>

			</div>
			<div className=" flex flex-col lg:flex-row text-white text-xl lg:text-3xl flex items-center mt-4 lg:mt-0 lg:space-x-16 lg:space-y-0 space-x-0 space-y-4 lg:pr-16 pr-0">
				<Link to="/" onClick={() => actions.navOpt("Inicio")} className={`link hover:font-bold  transition-transform transform hover:scale-105 ${store.navbarSelect === "Inicio" ? "font-bold" : ""}`} >
					<span > Inicio </span>
				</Link>
				<Link to="/Galeria" onClick={() => actions.navOpt("Galeria")} className={`link hover:font-bold  transition-transform transform hover:scale-105 ${store.navbarSelect === "Galeria" ? "font-bold" : ""}`} >
					<span  > Galería </span>
				</Link>

				<div
					className="relative"
					onClick={handleCatalogClick}
				>
					<span

						className={`link hover:font-bold transition-transform transform hover:scale-105 cursor-pointer ${store.navbarSelect === "Catalogo" ? "font-bold" : ""}`}>
						Catálogo
						<FontAwesomeIcon
							icon={isCatalogOpen ? faChevronUp : faChevronDown}
							className="ml-2 text-sm"
						/>
					</span>
					{isCatalogOpen && (
						<div className="z-50 absolute left-0 mt-2 w-48 bg-black text-white border rounded shadow-lg">
							<ul>
								<li
									className="block px-4 py-2  hover:underline underline-offset-8 cursor-pointer"
									onClick={() => handleCategoryClick("Catalogo")}

								>
									<Link to="/Fauna">Fauna</Link>
								</li>
								<li
									className="block px-4 py-2  hover:underline underline-offset-8 cursor-pointer"
									onClick={() => handleCategoryClick("Catalogo")}
								>
									<Link to="/VidaUrbana">Vida Urbana</Link>
								</li>
								<li
									className="block px-4 py-2  hover:underline underline-offset-8 cursor-pointer"
									onClick={() => handleCategoryClick("Catalogo")}
								>
									<Link to="/Paisajes">Paisajes</Link>
								</li>
							</ul>
						</div>
					)}

				</div>



				<Link to="/Servicios" onClick={() => actions.navOpt("Servicios")} className={`link hover:font-bold  transition-transform transform hover:scale-105 ${store.navbarSelect === "Servicios" ? "font-bold" : ""}`} >
					<span > Servicios </span>
				</Link>
				<Link to="/Contacto" onClick={() => actions.navOpt("Contacto")} className={`link hover:font-bold  transition-transform transform hover:scale-105 ${store.navbarSelect === "Contacto" ? "font-bold" : ""}`}>
					<span > Contacto </span>
				</Link>
				<Link to="/SobreMi" onClick={() => actions.navOpt("Sobre Mi")} className={`link hover:font-bold  transition-transform transform hover:scale-105 ${store.navbarSelect === "Sobre Mi" ? "font-bold" : ""}`} >
					<span > Sobre Mí </span>
				</Link>

				<div className="relative inline-block  mt-4 md:mt-0">
					<FontAwesomeIcon icon={faCartPlus} className={`text-2xl cursor-pointer font-bold  transition-transform transform hover:scale-105 ${store.selectIcon === (true) ? 'text-gray-400  transform scale-110' : ''}`}
						onClick={() => { actions.openCart(), actions.setSelectIcon(true) }} />
					<span className="underline underline-offset-4 absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
						{store.listCar.length}
					</span>
				</div>

			</div>
		</div>

	);
};
