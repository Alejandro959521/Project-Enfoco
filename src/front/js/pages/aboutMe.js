import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const AboutMe = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" backimage full-height flex flex-col ">
					
				<p>sobre mí</p>
			
		</div>
	);
};
