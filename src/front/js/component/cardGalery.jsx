import React from "react";
import { Link } from "react-router-dom";
import image from "../../img/galeryprueba.jpeg";
import "../../styles/galery.css";
import { useNavigate } from "react-router-dom";



export const CardGalery = () => {
	
	const navigate = useNavigate()


	return (
			
			<div className= "gap-5 p-10"  >

				<div className="flex flex-col rounded-card bg-white">
					<div className=" overflow-hidden rounded-card">
						<img src={image} />
					</div>

					<p className="text-3xl my-1 text-center">Paisaje solemne</p>
					<p className="text-3xl my-1 text-center">2000$-4000$</p>
					<div className="text-center">
						<button className="text-4xl text-center text-white rounded-lg px-4 my-2 " style={{ backgroundColor: `#0D0909` }}
						onClick={() => {
							navigate("/Detalle")
						}}
						>
							
							Detallar
						</button>

					</div>
				
			</div>

		</div>

	);
};
