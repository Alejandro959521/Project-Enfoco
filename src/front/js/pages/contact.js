import React, { useContext,useRef } from "react";
import { Context } from "../store/appContext";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";
import "../../styles/contact.css";
import Contact1 from "../../img/Contact1.jpeg";
import emailjs from '@emailjs/browser'

export const Contact = () => {
	const { store, actions } = useContext(Context);

	const refForm = useRef();
	  
	const handleSubmit = (event) => {
		event.preventDefault();

		const serviceId = 'service_1wuh0qd';
		const templateId = 'template_qaay7ai'; 
		const apikey ='G-NYx_lQl60RHZ-Xo';
   
		emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
		.then(result => alert('Correo enviado con éxito!'))
		.catch(error => alert('Error al enviar el correo...'))
	}

	

	return (
		<div className=" w-full">
			<NavbarService />
			<div className="flex justify-center" style={{ backgroundColor: `#000000` }}>
				<p className="text-4xl md:text-6xl font-bold text-center text-white pt-8">Contactame</p>

			</div>

			<div className=" flex flex-wrap text-white justify-around pt-4 border-b-2" style={{ backgroundColor: `#000000` }}>
				<div className=" p-6 text-center max-w-xs">
					<i className="fas fa-map-marker-alt text-4xl mb-4"></i>
					<h3 className="text-2xl font-bold mb-2 ">DIRECCIÓN </h3>
					<p className="text-lg">SoHo 94 Broadway St</p>
					<p className="text-lg">Nueva York, NY 1001</p>
				</div>
				<div className=" p-6 text-center max-w-xs">
					<i className="fas fa-phone-alt text-4xl mb-4"></i>
					<h3 className="text-2xl font-bold mb-2">NÚMERO DE TELÉFONO</h3>
					<p className="text-lg">234-9876-5400</p>
					
				</div>
				<div className="d p-6 text-center  max-w-xs">
					<i className="fas fa-envelope text-4xl mb-4"></i>
					<h3 className="text-2xl font-bold mb-2">CORREO ELECTRÓNICO</h3>
					<p className="text-lg">Angela@foto.com</p>
				</div> 
			</div> 


			<div className="flex flex-wrap justify-around gap-8 py-8" style={{ backgroundColor: `#000000` }}>
				
				<form onSubmit={handleSubmit} ref={refForm} className="flex-1 space-y-6 m-2 pl-8">
					<div>
						<label className="block  text-white mb-2  text-3xl" name='email' for="email">Email</label>
						<input name='email' className=" text-xl md:text-2xl w-full p-2 custom-input rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-stone-500" required  type="email" placeholder="Ej:Enfococuadros@gmail.com" />
					</div>
					<div>
						<label className="block text-white mb-2 text-3xl" for="name">Nombre</label>
						<input className=" text-xl md:text-2xl w-full p-2 custom-input rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-stone-500" required name='username' type="text" placeholder="Nombre Completo" />
					</div>
					<div>
						<label className="block text-white mb-2 text-3xl"  for="message">Deja tu Mensaje</label>
						<textarea name='message' className=" text-xl md:text-2xl custom-input w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-stone-500" required id="message" rows="4" placeholder="Comentario"></textarea>
					</div>
					<button className=" w-full p-3 text-2xl rounded text-white font-bold hover:bg-stone-600 transition duration-300 bg-slate-800" type="submit">ENVIAR</button>
				</form>

				<div className="flex-1 space-y-4 m-2 text-white ">
					<h2 className=" text-2xl md:text-4xl font-semibold mb-4 ">Déjanos tu mensaje</h2>
					<p className="text-xl md:text-2xl leading-relaxed"> En ENFOCO CUADROS nos encanta estar en contacto con nuestros clientes </p>
					<div className="max-w-xl">
							<img className="w-full rounded-lg" src={Contact1} />
						</div>


				</div>
			</div>

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>

		</div>
	);
};
