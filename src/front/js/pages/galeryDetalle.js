import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { NavbarGalery } from "../component/navbarGalery.jsx";
import imageDetalle from "../../img/detalles.jpeg";
import { FooterGalery } from "../component/footerGalery.jsx";
import "../../styles/galery.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const GaleryDetalle = () => {

	const navigate = useNavigate()
	const params = useParams()
	const { store, actions } = useContext(Context);
	const [data, setData] = useState([])
	const [randomItems, setRandomItems] = useState([]);

	let getproduct = async () => {

		await actions.getData2()
		let valor = await actions.getDetallePicture(params.Id)
		setData(valor)

		if (store.data && store.data.length > 0) {
			const shuffled = [...store.data].sort(() => 0.5 - Math.random());
			setRandomItems(shuffled.slice(0, 3)); 
		}


	}

	const addToCart = (data) => {

		actions.openCart()
		actions.addCart(data)
		actions.sumCar()
		console.log("esto es listcar", store.listCar);

	} 

	useEffect(() => {
		getproduct()

	}, [params.Id])
	console.log("desde detalle", store.data)

	const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

	return (
		<div className=" ">

			<NavbarGalery />

			<div className=" text-white p-8" style={{ backgroundColor: `#000000` }}>


				<div className="p-4 text-center flex flex-col overflow-hidden items-center">
					<img className="max-w-md md:max-w-xl lg:max-w-4xl cursor-pointer" src={process.env.BACKEND_URL + data.image} onClick={() => openModal(process.env.BACKEND_URL + data.image)}/>
					<p className=" text-5xl font-bold py-2">{data.title}</p>
					<p className=" text-4xl py-2">${data.price}</p>
					<button className=" text-3xl p-2 rounded-lg  bg-gray-800 hover:bg-gray-600 transition-colors"
						onClick={() => { addToCart(data) }}
					>
						Añadir al Carrito

					</button>
				</div>

				<div className="mt-8 text-center ">
					<p className="text-4xl underline underline-offset-8 ">Otros cliente compraron</p>
					<div className="flex justify-center mt-4">

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

							{randomItems.map((item, index) => (

								<div key={index} className="w-full md:max-w-xs"
								onClick={() => navigate(`/detalle/${item.id}`)}
								>  
									<img className="w-full rounded-lg h-80 object-cover rounded-lg cursor-pointer shadow-lg transition-transform transform hover:scale-105" src={process.env.BACKEND_URL + item.image} />
								</div>

							))}

							


						</div>


					</div>

				</div>

			</div>

			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>


				<FooterGalery />


			</footer>
			{selectedImage && (
                <div className="fixed inset-0 bg-black  bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="relative w-full h-full flex justify-center items-center p-4">
                        <img 
                            className=" max-w-full max-h-full  object-contain rounded-lg" 
                            src={selectedImage} 
							alt="Selected"
                        />
                  
                    </div>
                </div>
            )}

		</div>
	);
};
