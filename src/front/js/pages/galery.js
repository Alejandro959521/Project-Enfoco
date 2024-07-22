import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarGalery } from "../component/navbarGalery.jsx";
import image from "../../img/imagegalery.jpeg";

import "../../styles/galery.css";


export const Galery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" ">

			<NavbarGalery />

			<div className=" px-24 py-14  " style={{ backgroundColor: `#0D0909` }}>

				<div className="rounded-image h-screen galeryimag" style={{ backgroundImage: `url(${image})` }}>

					<p className="flex justify-center text-6xl pt-4" >Explora nuestro catálogo</p>
					
					<br/>
					<p className="flex justify-center text-4xl">Encuentra el mejor cuadro que se adecue a tu vida</p>
				</div>
   
			</div>

			<div>

				
			</div>

		</div>
	);
};
