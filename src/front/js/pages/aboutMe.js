import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";
import imageDetalle from "../../img/detalles.jpeg";

import "../../styles/home.css";


export const AboutMe = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className=" ">

			<NavbarService />

			<div className="pb-8" style={{ backgroundColor: `#000000` }}>
				<p className="text-6xl text-center text-white pt-8">Sobre Mí</p>

			</div>
			<div className=" " style={{ backgroundColor: `#000000` }}>

				<div className="flex py-8 ">

					<div className="flex justify-center flex-1 text-center pl-8">
						<p className=" text-white text-3xl ">¡Hola! Soy Angela Ojeda, una apasionada fotógrafa con más de 20 años de experiencia en capturar momentos únicos y emocionantes. Mi enfoque se centra en la autenticidad y la belleza natural, ya sea a través de la fotografía de retrato, eventos, naturaleza o cualquier otro proyecto que requiera una mirada creativa.</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>
					</div>
					<div  className="flex justify-center items-center flex-1 text-center p-16">

					<p className=" text-white text-3xl ">Desde el inicio de mi carrera, he tenido la oportunidad de trabajar con una amplia variedad de clientes, desde familias que buscan congelar en el tiempo momentos importantes hasta empresas que necesitan imágenes impactantes para sus campañas. Mi objetivo es siempre el mismo: contar una historia a través de mis fotos, asegurándome de que cada imagen refleje la esencia y emoción del momento.
					<br />
					<br />
					Me esfuerzo por crear un ambiente cómodo y relajado durante cada sesión, permitiendo que mis sujetos se sientan libres para ser ellos mismos frente a la cámara. Creo firmemente que las mejores fotos son aquellas que capturan la verdadera personalidad y emoción, y me esfuerzo por lograr esto en cada toma.
					<br />
					<br />
					Cuando no estoy detrás de la cámara, me encontrarás explorando nuevos lugares, buscando inspiración en la naturaleza o perfeccionando mis habilidades en edición y postproducción para asegurarme de que cada foto que entrego sea perfecta.
					<br />
					<br />
					Gracias por considerar mi trabajo. Espero poder colaborar contigo y ayudarte a capturar recuerdos que durarán toda la vida.</p>

					</div>

			</div>

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>
		</div>
	);
};
