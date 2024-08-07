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

			<div className="" style={{ backgroundColor: `#000000` }}>
				<p className="text-6xl text-center text-white pt-8">Servícios</p>

			</div>
			<div className=" " style={{ backgroundColor: `#000000` }}>

				<div className="flex py-8">

					<div className="flex justify-center flex-1 text-center pl-8">
						<p className=" text-white text-3xl ">En ENFOCO, nos enorgullece ofrecer una amplia gama de servicios especializados para satisfacer todas tus necesidades de decoración y arte. Nos dedicamos a proporcionar productos y servicios de la más alta calidad, asegurando que cada cliente tenga una experiencia única y personalizada. A continuación, te presentamos una descripción detallada de los servicios que ofrecemos:</p>

					</div>

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>


				</div>

				<div className="flex py-8 ">

					<div className="flex-1 flex justify-center ">
						<img className="max-w-xs rounded-lg " src={imageDetalle} />
					</div>

					<div className="flex justify-center flex-1 text-center pr-8">
						<p className=" text-white text-3xl ">En ENFOCO, nos enorgullece ofrecer una amplia gama de servicios especializados para satisfacer todas tus necesidades de decoración y arte. Nos dedicamos a proporcionar productos y servicios de la más alta calidad, asegurando que cada cliente tenga una experiencia única y personalizada. A continuación, te presentamos una descripción detallada de los servicios que ofrecemos:</p>

					</div>


				</div>

			

			</div>




			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>
		</div>
	);
};
