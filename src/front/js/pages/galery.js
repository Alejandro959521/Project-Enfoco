import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { NavbarGalery } from "../component/navbarGalery.jsx";
import image from "../../img/imagegalery.jpeg";
import { CardGalery } from "../component/cardGalery.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";
import "../../styles/galery.css";


export const Galery = () => {

	const { store, actions } = useContext(Context);

	
	useEffect(() => {
	    actions.getData()
	}, [])

	console.log("esto es data", store.data);
	const items_per_page = 6

	//const [datos, setDatos] = useState(totalData);

	const [items, setItems] = useState()

	// let getinfo = async () => {

	// 	let valor = actions.getdato()

	// 	if (valor) {

	// 		setItems([...valor].splice(0, items_per_page))
	// 		return

	// 	}

	// 	await actions.getdato()
	// 	valor = actions.getdato()
	// 	setItems([...valor].splice(0, items_per_page))

	// }  



	const nextPage = () => {

		console.log("next")
	}

	const prevPage = () => {

		console.log("prev")
	}

	return (
		<div className=" ">

			<NavbarGalery />

			<div className=" px-24 py-14 " style={{ backgroundColor: `#000000` }}>

				<div className="rounded-image h-screen galeryimag" style={{ backgroundImage: `url(${image})` }}>

					<p className="flex justify-center text-6xl pt-4" >Explora nuestro catálogo</p>

					<br />
					<p className="flex justify-center text-4xl">Encuentra el mejor cuadro que se adecue a tu vida</p>
				</div>

			</div  >


			<div className="flex items-center justify-center  mx-auto" style={{ backgroundColor: `#7B7C81` }}>
				<div className="  grid grid-cols-1 md:grid-cols-3 gap-5 " >

					{

						store.data.map((item, index) => (

							<CardGalery data={item} key={index} />

						))

					}



				</div>


			</div>
			<div className="flex justify-around text-3xl text-white py-3" style={{ backgroundColor: `#7B7C81` }}>
				<button onClick={prevPage}
				>Anterior</button>
				<p>Pag 1...{Math.ceil((store.data.length) / 6)}</p>
				<button onClick={nextPage}
				>Siguente</button>
			</div>
			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>

		</div>
	);
};
