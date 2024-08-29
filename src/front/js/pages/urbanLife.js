import React, { useContext,useState,useEffect  } from "react";
import { Context } from "../store/appContext.js";
import { NavbarService } from "../component/navbarService.jsx";
import { FooterGalery } from "../component/footerGalery.jsx";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";


export const UrbanLife = () => {

	const navigate = useNavigate()
	
	const { store, actions } = useContext(Context);

	const items_per_page = 12

	const [items, setItems] =  useState([])
	
	const initialPage = parseInt(localStorage.getItem('currentPageU')) || 0;

	const [currentPageU, setCurrentPageU] = useState(initialPage);

	const updateItems = () => {
		let valor = store.category_pictures;
		setItems([...valor].splice(currentPageU * items_per_page, items_per_page))
		
	}
  
	let getinfo = async () => {
		
		await actions.geFilteredPicture("vida_urbana");
		updateItems();
   
	}       
   

	useEffect(() => {
	  getinfo()	
	  
	}, [])
       
	console.log("array en 6 ", items); 

	const nextPage = () => {

		const totalItems = store.category_pictures.length;
		const nextPage = currentPageU + 1;
		const firstIndex = nextPage * items_per_page;

		if (firstIndex >= totalItems) return;

		let valor = store.category_pictures
		setItems([...valor].splice(firstIndex, items_per_page))
		localStorage.setItem('currentPageC', nextPage);
		setCurrentPageU(nextPage);

	}
 
	const prevPage = () => {
		
		const nextPage = currentPageU - 1;
		
		if (nextPage  < 0) return;
		const firstIndex = nextPage * items_per_page;
		let valor = store.category_pictures
		setItems([...valor].splice(firstIndex, items_per_page))
		localStorage.setItem('currentPageU', nextPage);
		setCurrentPageU(nextPage);
	}   

	return (
		<div className=" w-full">

			<NavbarService />

			<div className="pb-8 bg-black" >
				<p className="text-7xl text-center text-white pt-8 font-bold">Vida Urbana</p>

			</div>

			<div className="flex items-center justify-center  mx-auto py-12 bg-black " >
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  " >

					{

						items.map((item, index) => (

							<div key={index} className="w-full md:max-w-xs px-4 py-2 md:p-0"
								onClick={() => navigate(`/detalle/${item.id}`)}
								>  
									<img className="w-full rounded-lg h-80  object-cover rounded-lg cursor-pointer shadow-lg transition-transform transform hover:scale-105" src={process.env.BACKEND_URL + item.image} />
								</div>

						))

					}
				</div>

			</div>
			<div className="flex justify-around text-3xl text-white py-3 bg-black" >
				<button className="hover:text-teal-400 hover:underline underline-offset-8" onClick={prevPage}
				>  Anterior </button>
				<p>Pag {currentPageU + 1} de {Math.ceil((store.category_pictures.length) / 12)}</p>
				<button className="hover:text-teal-400 hover:underline underline-offset-8" onClick={nextPage}
				>Siguente</button>
			</div>



			<footer className="mx-auto text-white my-auto py-10" style={{ backgroundColor: `#0D0909` }}>

				<FooterGalery />

			</footer>
		</div>
	);
};