import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";


import "../../styles/home.css";


export const WildLife = () => {

	

	return (
		<div className=" w-full">

			<NavbarService />

			<div className="pb-8" style={{ backgroundColor: `#000000` }}>
				<p className="text-6xl text-center text-white pt-8 font-bold">Vida Salveje</p>

			</div>
		

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>
		</div>
	);
};