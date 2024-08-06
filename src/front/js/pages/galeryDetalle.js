import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { NavbarGalery } from "../component/navbarGalery.jsx";
import imageDetalle from "../../img/detalles.jpeg";
import { FooterGalery } from "../component/footerGalery.jsx";
import "../../styles/galery.css";
import { useParams } from "react-router-dom";



export const GaleryDetalle = () => {

	const params = useParams()
	const { store, actions } = useContext(Context);
	const [data, setData] = useState([])


	let getproduct = async () => {

		let valor = await actions.getDetalles(params.Id)
		setData(valor)
		//console.log("entre al effect")

	}

	const addToCart = (data) => {

		actions.openCart()
		actions.addCart(data)
		actions.sumCar()
		console.log("esto es listcar",store.listCar);

	} 
  
	useEffect(() => {   
		getproduct()

	}, [])

	// console.log("esto es parasm id",params.Id )
	// console.log("esto data galery",data )
	return (
		<div className=" ">

			<NavbarGalery />   

			<div className=" text-white p-8" style={{ backgroundColor: `#000000` }}>
				<div className="  max-w-xl mx-auto  overflow-hidden">
					<img className="" src={data.image} />
					<div className="p-4 text-center">
						<p className=" text-5xl font-bold py-2">{data.title}</p>
						<p className=" text-3xl py-2">${data.price}</p>
						<button className=" text-3xl p-2 rounded-lg" style={{ backgroundColor: `#0D0909` }}
							onClick={() => {  addToCart(data) }}
						>
							Añadir al Carrito

						</button>
					</div>
				</div>
				<div className="mt-8 text-center ">
					<p className="text-4xl">Otros cliente compraron</p>
					<div className="flex justify-center space-x-4 mt-4">
						<div className="max-w-xs">
							<img className="w-full rounded-lg" src={imageDetalle} />
						</div>
						<div className="max-w-xs">
							<img className="w-full rounded-lg" src={imageDetalle} />
						</div>
						<div className="max-w-xs">
							<img className="w-full rounded-lg" src={imageDetalle} />
						</div>



					</div>

				</div>

			</div>

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>


				<FooterGalery />


			</footer>

		</div>
	);
};
