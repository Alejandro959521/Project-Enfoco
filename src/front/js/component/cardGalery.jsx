import React from "react";
import { Link } from "react-router-dom";
import image from "../../img/galeryprueba.jpeg";
import "../../styles/galery.css";




export const CardGalery = () => {
	return (
		
			<div className="grid grid-grid-cols-3 gap-3">

				<div className="flex flex-col">
					<div className="rounded ">
						<img src={image}/>
					</div>

					<p className="text-xl">dsfjñdsajfdsjfñdsa</p>
					<p className="text-xl">43434324324324</p>
					<button className="text-center text-white rounded" style={{ backgroundColor: `#0D0909` }}>
                            detallar 

					</button>



				</div>


			</div>	
		
	);
};
