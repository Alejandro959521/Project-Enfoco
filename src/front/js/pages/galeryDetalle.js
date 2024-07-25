import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarGalery } from "../component/navbarGalery.jsx";
import imageDetalle from "../../img/detalles.jpeg";
import { FooterGalery } from "../component/footerGalery.jsx";
import "../../styles/galery.css";



export const GaleryDetalle = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className=" ">

			<NavbarGalery />

			<div className=" text-white p-8" style={{ backgroundColor: `#000000` }}>
				<div className="  max-w-xl mx-auto  overflow-hidden">
					<img className="" src={imageDetalle} />
					<div className="p-4 text-center">
						<p className=" text-5xl font-bold py-2">Paisaje Solemne</p>
						<p className=" text-3xl py-2">$1200 - $1400</p>
						<button className=" text-3xl p-2 rounded-lg" style={{ backgroundColor: `#0D0909` }}>
							Añadir al Carrito
						</button>
					</div>
				</div>
				<div className="mt-8 text-center ">
					<p className="text-4xl">Otros cliente compraron</p>
					<div className="flex justify-center space-x-4 mt-4">
						<div class="max-w-xs">
							<img class="w-full rounded-lg"  src={imageDetalle}/>
						</div>
						<div class="max-w-xs">
							<img class="w-full rounded-lg" s src={imageDetalle}/>
						</div>
						<div class="max-w-xs">
							<img class="w-full rounded-lg"  src={imageDetalle}/>
						</div>



					</div>

				</div>

			</div>

			<footer className="mx-auto text-white my-auto py-10"style={{ backgroundColor: `#0D0909` }}>
				
 
				<FooterGalery />  
			

		</footer>

		</div>
	);
};
