import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardDelete } from "../component/cardDelete.jsx";
import "../../styles/galery.css";

   
export const DeleteItem = () => {    
  
	const { store, actions } = useContext(Context);

	const items_per_page = 6

	const [items, setItems] =  useState([])

	const [currentPage, setCurrentPage] = useState(0);

	const updateItems = () => {
		let valor = store.data;
		setItems([...valor].splice(currentPage * items_per_page, items_per_page))
		
		

	}
  
	let getinfo = async () => {
		
		await actions.getData2();
		updateItems();
   
	}  
	     
	useEffect(() => {
	  getinfo()	
	 
	}, [])  
       
	const nextPage = () => {

		const totalItems = store.data.length;
		const nextPage = currentPage + 1;
		const firstIndex = nextPage * items_per_page;

		if (firstIndex >= totalItems) return;
		let valor = store.data 
		setItems([...valor].splice(firstIndex, items_per_page))
		setCurrentPage(nextPage);

	}
 
	const prevPage = () => {
		
		const nextPage = currentPage - 1;
		
		if (nextPage  < 0) return;
		const firstIndex = nextPage * items_per_page;
		let valor = store.data 
		setItems([...valor].splice(firstIndex, items_per_page))
		setCurrentPage(nextPage);
	}  

	return (
		<div className=" ">

			
		<div className="flex items-center justify-center  mx-auto" style={{ backgroundColor: `#7B7C81` }}>
				<div className="  grid grid-cols-1 md:grid-cols-3 gap-5 " >

					{
 
						items.map((item, index) => (

							<CardDelete data={item} key={index} onItemDeleted={updateItems}/>

						))

					}

				</div>

			</div>
			<div className="flex justify-around text-3xl text-white py-3" style={{ backgroundColor: `#7B7C81` }}>
				<button onClick={prevPage}
				>Anterior</button>
				<p>Pag {currentPage + 1}...{Math.ceil((store.data.length) / 6)}</p>
				<button onClick={nextPage}
				>Siguente</button>
			</div>
			

		</div>
	);
};
