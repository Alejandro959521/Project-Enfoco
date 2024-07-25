import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Services = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" ">
					
				<p className="text-6xl text-center">servicios</p>
			
		</div>
	);
};
