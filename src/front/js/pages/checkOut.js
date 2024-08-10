import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/checkout.css";
import { useNavigate } from "react-router-dom";


export const CheckOut = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	return (
		<div className=" ">
			<div className="border-b-2 flex items-center justify-between px-8 " style={{ borderBottomColor: `#000000` }}>

				<p className="text-4xl font-bold  pt-4 pb-4" >Finalizar Compra</p>
				<i className="fa-solid fa-xmark cursor-pointer ico2 "
					onClick={() => {
						navigate(`/Galeria`)
					}}
				></i>
			</div>
			<div className="flex flex-wrap justify-around gap-x-12 pt-4" >

				<form action="#" method="POST" className="flex-1 space-y-6 m-2 pl-8" style={{ backgroundColor: `#ffffff` }}>
					<div>
						<label className="  text-dark mb-2 text-3xl" for="email">Email</label>
						<input className=" text-2xl w-full p-2 c-input rounded  text-dark border border-black focus:outline-none focus:border-stone-500 placeholder-gray-700" required id="email" type="email" placeholder="Dirección de correo electrónico" />
					</div>
					<div>
						<label className=" text-dark mb-2 text-3xl" for="name">Nombre</label>
						<input className=" text-2xl w-full p-2 c-input rounded  text-dark border border-black focus:outline-none focus:border-stone-500 placeholder-gray-700" required id="name" type="text" placeholder="Nombre completo" />
					</div>
					<div>
						<label className=" text-dark mb-2 text-3xl" for="name">Teléfono</label>
						<input className=" text-2xl w-full p-2 c-input rounded  text-dark border border-black focus:outline-none focus:border-stone-500 placeholder-gray-700" required id="name" type="text" placeholder="Teléfono Valido" />
					</div>
					<div>
						<label className="text-dark mb-2 text-3xl" for="message">Dirección</label>
						<textarea className=" text-2xl c-input w-full p-2 rounded  text-dark border border-black focus:outline-none focus:border-stone-500 placeholder-gray-700" required id="message" rows="4" placeholder="Dirección completa "></textarea>
					</div>
					<button className=" w-full p-3 text-3xl rounded text-dark font-bold hover:bg-stone-600 bg-gray-500 transition duration-300" type="submit">Concretar Compra</button>
				</form>

				<div className="flex-1 space-y-4 m-2 text-dark flex flex-col  pt-4 " style={{ backgroundColor: `#000000` }}>
					<div className="flex justify-center border-b-2 pb-2">
						<p className="text-4xl  text-white "> Cuadros Seleccionados </p>
					</div>

					{

						store.listCar.map((item, index) => (

							<div key={index} className=" flex  items-center text-white justify-around px-6 py-2 ">
								<div className=" flex gap-x-16 text-white items-center gap-2">
									<figure className="w-24 h-24">
										<img className="w-full h-full rounded-lg object-contain" src={item.image} />
									</figure>
									<p className="text-3xl font-medium  text-white">{item.title}</p>
									<p className="flex text-3xl font-semibold  text-white"> {item.price}&nbsp;$</p>
								</div>

							</div>


						))
					}

					<div className="border-t-2 text-white px-4 py-2 flex justify-around text-3xl font-bold mt-auto ">
						<p className="">Total  :</p>
						<p className="">{store.sum} $</p>
					</div>

				</div>
			</div>

		</div>
	);
};
