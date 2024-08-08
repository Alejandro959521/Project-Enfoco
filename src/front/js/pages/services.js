import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";
import imageDetalle from "../../img/detalles.jpeg";


import "../../styles/home.css";


export const Services = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" ">

			<NavbarService />

			<div className=" pb-8" style={{ backgroundColor: `#000000` }}>
				<p className="text-6xl text-center text-white pt-8">Servícios</p>

			</div>
			<div className=" " style={{ backgroundColor: `#000000` }}>

				<div className="flex py-8 border-b-2">

					<div className="flex justify-center flex-1 text-center pl-8">
						<p className=" text-white text-3xl ">En ENFOCO, nos enorgullece ofrecer una amplia gama de servicios especializados para satisfacer todas tus necesidades de decoración, arte y fotografía. Nos dedicamos a proporcionar productos y servicios de la más alta calidad, asegurando que cada cliente tenga una experiencia única y personalizada. A continuación, te presentamos una descripción detallada de los servicios que ofrecemos:</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>


				</div>
				<div className="flex py-8 border-b-2">


					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>

					<div className="flex justify-center flex-1 flex-col text-center pr-8">
						<p className="text-white text-4xl mb-4 font-bold">Servicios de Fotografía Profesional</p>
						<p className=" text-white text-3xl ">En ENFOCO, ofrecemos servicios de fotografía profesional que capturan la esencia de cada momento, con un enfoque en la calidad y la creatividad. Nuestro equipo de fotógrafos experimentados está comprometido en ofrecerte imágenes que no solo documentan eventos, sino que también cuentan historias y evocan emociones.</p>

					</div>

				</div>
				<div className="flex py-8 ">

					<div className="flex justify-center flex-1 flex-col text-center pl-8">
						<p className="text-white text-4xl mb-4 font-bold">Fotografía de Retratos</p>
						<p className=" text-white text-3xl "><span className="font-bold">Sesiones de Retrato Individual:</span> Capturamos tu mejor versión, enfocándonos en destacar tu personalidad y estilo. Ya sea para uso personal o profesional, nuestros retratos se ajustan a tus necesidades.
							<br />
							<br />
							<span className="font-bold">Retratos Familiares:</span> Inmortaliza los momentos más importantes junto a tus seres queridos con retratos familiares que reflejan la unión y el amor en cada sonrisa.</p>
						<br />
						<br />


					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />

					</div>


				</div>

				<div className="flex py-8 ">

					<div className="flex justify-center flex-1 flex-col text-center pl-8">

						<p className="text-white text-4xl mb-4 font-bold">Fotografía de Eventos</p>
						<p className=" text-white text-3xl "><span className="font-bold">Cobertura de Eventos Sociales: </span> Desde bodas, cumpleaños, hasta reuniones corporativas, nos especializamos en capturar cada detalle de tus eventos más importantes. Nuestro enfoque discreto pero atento garantiza que no se pierda ningún momento significativo.
							<br />
							<br />
							<span className="font-bold">Fotografía de Celebraciones:</span> Celebra tus logros con fotos que transmitirán la alegría y la emoción del día, permitiéndote revivir esos instantes especiales una y otra vez.</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />

					</div>


				</div>

				<div className="flex py-8 ">

					<div className="flex justify-center flex-1 flex-col text-center pl-8">

						<p className="text-white text-4xl mb-4 font-bold">Fotografía Comercial</p>
						<p className=" text-white text-3xl "><span className="font-bold">Fotografía de Productos:  </span> Presenta tus productos con imágenes de alta calidad que resaltan sus mejores características. Ya sea para catálogos, sitios web, o campañas publicitarias, ofrecemos un enfoque detallado y estético que capturará la atención de tus clientes.
							<br />
							<br />
							<span className="font-bold">Fotografía para Redes Sociales:</span> Mejoramos tu presencia en línea con fotos que no solo se ven profesionales, sino que también cuentan una historia y conectan con tu audiencia en plataformas digitales.</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />

					</div>


				</div>



				<div className="flex py-8 ">

					<div className="flex justify-center flex-1 flex-col text-center pl-8">

						<p className="text-white text-4xl mb-4 font-bold">Sesiones Personalizadas</p>
						<p className=" text-white text-3xl "><span className="font-bold">Fotografía Creativa:</span>  Ofrecemos sesiones de fotos personalizadas que permiten la creatividad y la experimentación. Trabajamos en estrecha colaboración contigo para desarrollar un concepto único que refleje tu visión y estilo.
							<br />
							<br />
							<span className="font-bold">Book Fotográfico:</span>Si estás buscando iniciar o actualizar tu portafolio como modelo, actor, o artista, creamos un book fotográfico que destaca tus mejores cualidades y te ayuda a destacar en la industria.</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />

					</div>


				</div>

				<div className="flex py-8 border-b-2">

					<div className="flex justify-center flex-1 flex-col text-center pl-8">

						<p className="text-white text-4xl mb-4 font-bold">Postproducción y Edición</p>
						<p className=" text-white text-3xl ">Cada imagen que entregamos pasa por un meticuloso proceso de edición, donde corregimos detalles, mejoramos colores y aseguramos que cada foto esté perfectamente equilibrada. Nuestro objetivo es entregar imágenes listas para impresionar, ya sea en formato digital o impreso.
						</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />

					</div>


				</div>

				<div className="flex py-8 border-b-2">


					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>

					<div className="flex justify-center flex-1 flex-col text-center pr-8">
						<p className="text-white text-4xl mb-4 font-bold">Venta de Cuadros y Fotografías</p>
						<p className=" text-white text-3xl ">Nuestra galería cuenta con una extensa colección de cuadros y fotografías, cuidadosamente seleccionados por su calidad y belleza. Ofrecemos una variedad de estilos que van desde lo clásico hasta lo contemporáneo, pasando por arte abstracto, paisajes, retratos y fotografía artística. Nuestro objetivo es ayudarte a encontrar la pieza perfecta que complemente tu espacio y refleje tu estilo personal.</p>

					</div>

				</div>

				<div className="flex py-8 ">

					<div className="flex justify-center flex-1 flex-col text-center pl-8">
						<p className="text-white text-4xl mb-4 font-bold">Enmarcado Personalizado</p>
						<p className=" text-white text-3xl ">Entendemos que el marco es una parte esencial para realzar la belleza de cualquier obra de arte. Por eso, ofrecemos un servicio de enmarcado personalizado que te permite elegir entre una amplia gama de molduras y materiales. Ya sea que desees un marco simple y moderno o uno más elaborado y clásico, nuestro equipo de expertos trabajará contigo para diseñar el marco ideal que se ajuste a tus necesidades y preferencias.</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>


				</div>


		

			</div>

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>
		</div>
	);
};
