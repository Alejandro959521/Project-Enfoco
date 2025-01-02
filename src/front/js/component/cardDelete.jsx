import React, { useContext, useEffect }from "react";
import "../../styles/galery.css";
import { Context } from "../store/appContext";


export const CardDelete = ({data, onItemDeleted }) => {
	
	const { store, actions } = useContext(Context);

	const deleted = async (picture_id) => {
  
		await actions.deletePicture(picture_id)
		onItemDeleted();   
		console.log("desde card delete",store.data)
		
   }

	 

	return (
			
			<div className= "gap-5 p-10"  >

				<div className="flex flex-col rounded-card h-[500px] bg-white">
					<div className=" overflow-hidden rounded-card ">
						<img className="w-full h-full" src={data.image} /> 
					</div>   
 
					<p className="text-3xl my-1 text-center">{data.title}</p>
					<p className="text-3xl my-1 text-center">$ {data.price}</p>
					<div className="text-center">
						<button className="text-4xl text-center text-white rounded-lg px-4 my-2 " style={{ backgroundColor: `#0D0909` }}
						onClick={() => {
							deleted(data.id)
							
						}}
						>
										Eliminar
						</button>

					</div>
				
			</div>

		</div>

	);
};
