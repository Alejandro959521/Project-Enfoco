import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import home1 from "../../img/Home1.jpeg";
import "../../styles/home.css";
import { Navbarhome } from "../component/navbarhome.jsx";
import { HomeFooter } from "../component/homeFooter.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	

	return (
		<div className=" backimage full-height flex flex-col " style={{ backgroundImage: `url(${home1})` }}>
 
			<Navbarhome />

			<div className="flex-1 flex justify-center items-center">

				<p className=" title">  Cada paisaje tiene su historia: esa que leemos, esa que soñamos, esa que creemos  </p>
 
			</div>
  
			<HomeFooter />

		</div>
	);
};
