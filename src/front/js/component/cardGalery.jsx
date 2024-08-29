import React from "react";
import "../../styles/galery.css";
import { useNavigate } from "react-router-dom";



export const CardGalery = ({data,updateItems}) => {
	
	const navigate = useNavigate()


	return (
			   
			<div className= "gap-5 p-10"  >

				<div className="flex flex-col rounded-card h-[550px] bg-white  shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"> 
					<div className=" overflow-hidden rounded-card p-4">
						<img className="w-full h-full rounded-md" src={process.env.BACKEND_URL + data.image} /> 
					</div>         
				
					<p className="text-3xl my-1 text-center font-semibold text-gray-900">{data.title}</p>
					<p className="text-3xl my-1 text-center text-gray-700">$ {data.price}</p>
					<div className="text-center">
						<button className="text-4xl text-center text-white rounded-lg px-4 my-2 bg-[#0D0909] hover:bg-teal-900 hover:scale-105 transition-transform duration-300" 
						onClick={() => {
							navigate(`/Detalle/${data.id}`)
							updateItems();
						}} 
						>
							
							Detallar
						</button>
						</div>
					
				
			</div>

		</div>

	);
};
