import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";

import "../../styles/home.css";


export const AboutMe = () => {
	
	const { store, actions } = useContext(Context);

	return (
		<div className=" ">

			<NavbarService />
			<div className=" h-screen" style={{ backgroundColor: `#000000` }}>
				<p className="text-6xl text-center text-white pt-8">Sobre Mí</p>

			</div>

			<footer className="mx-auto text-white my-auto py-10"style={{ backgroundColor: `#0D0909` }}>
				
				<FooterGalery />  				

		</footer>
		</div>
	);
};
