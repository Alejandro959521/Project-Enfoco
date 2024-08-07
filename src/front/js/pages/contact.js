import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";
import "../../styles/contact.css";
import imageDetalle from "../../img/detalles.jpeg";


export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" ">
			<NavbarService />
			<div className="flex justify-center" style={{ backgroundColor: `#000000` }}>
				<p className="text-6xl text-center text-white pt-8">Contactame</p>

			</div>

			<div className=" flex flex-wrap text-white justify-around pt-4 border-b-2" style={{ backgroundColor: `#000000` }}>
				<div className=" p-6 text-center m-2">
					<i className="fas fa-map-marker-alt text-4xl mb-4"></i>
					<h3 className="text-xl font-bold mb-2 ">DIRECCIÓN </h3>
					<p className="text-lg">SoHo 94 Broadway St</p>
					<p className="text-lg">Nueva York, NY 1001</p>
				</div>
				<div className=" p-6 text-center m-2">
					<i className="fas fa-phone-alt text-4xl mb-4"></i>
					<h3 className="text-xl font-bold mb-2">NÚMERO DE TELÉFONO</h3>
					<p className="text-lg">234-9876-5400</p>
					<p className="text-lg">888-0123-4567 (llamada gratuita)</p>
				</div>
				<div className="d p-6 text-center  m-2">
					<i className="fas fa-envelope text-4xl mb-4"></i>
					<h3 className="text-xl font-bold mb-2">CORREO ELECTRÓNICO</h3>
					<p className="text-lg">Angela@foto.com</p>
				</div>
			</div>


			<div className="flex flex-wrap justify-around gap-x-12 pt-4" style={{ backgroundColor: `#000000` }}>
				
				<form action="#" method="POST" class="flex-1 space-y-6 m-2 pl-8">
					<div>
						<label className="  block text-white mb-2  text-3xl" for="email">Email</label>
						<input className=" text-2xl w-full p-2 custom-input rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-stone-500" required id="email" type="email" placeholder="Enter a valid email address" />
					</div>
					<div>
						<label className="block text-white mb-2 text-3xl" for="name">Name</label>
						<input className=" text-2xl w-full p-2 custom-input rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-stone-500" required id="name" type="text" placeholder="Enter your Name" />
					</div>
					<div>
						<label className="block text-white mb-2 text-3xl" for="message">Message</label>
						<textarea className=" text-2xl custom-input w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-stone-500" required id="message" rows="4" placeholder="Enter your message"></textarea>
					</div>
					<button className=" w-full p-3 text-2xl rounded text-white font-bold hover:bg-stone-600 transition duration-300" type="submit">ENVIAR</button>
				</form>

				<div className="flex-1 space-y-4 m-2 text-white ">
					<h2 className="text-4xl font-semibold mb-4 ">Déjanos tu mensaje</h2>
					<p className="text-2xl"> En ENFOCO CUADROS nos encanta estar en contacto con nuestros clientes </p>
					<div className="max-w-xs">
							<img className="w-full rounded-lg" src={imageDetalle} />
						</div>


				</div>
			</div>

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>

		</div>
	);
};
