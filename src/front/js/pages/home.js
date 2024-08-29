import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import home1 from "../../img/Home1.jpeg";
import "../../styles/home.css";
import { Navbarhome } from "../component/navbarhome.jsx";
import { HomeFooter } from "../component/homeFooter.jsx";


export const Home = () => {
	
	
	const { store, actions } = useContext(Context); 
	
	return (
		<div className=" backimage full-height flex flex-col  min-h-screen bg-black bg-cover bg-center " style={{ backgroundImage: `url(${home1})` }}>
   
			<Navbarhome />
		   
			<div className="flex-1 flex justify-center items-center  px-4 text-center">

				<p className=" title  text-lg md:text-2xl lg:text-4xl ">  Cada paisaje tiene su historia: esa que leemos, esa que soñamos, esa que creemos  </p>
 
			</div>
			   
			<HomeFooter />

		</div>
	);
};
