import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {NavbarGalery} from "../component/navbarGalery.jsx";

import "../../styles/home.css";


export const Galery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" ">
					
					<NavbarGalery/>
				
			
		</div>
	);
};
