import React, { useContext } from "react";
import { Context } from "../store/appContext";
import home1 from "../../img/Home1.jpeg";
import "../../styles/home.css";
import {Navbarhome} from "../component/navbarhome.jsx";
import { HomeFooter } from "../component/homeFooter.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" backimage " style={{backgroundImage: `url(${home1})`}}>
			
			<div className="row m-0 p-0">
				<div className="col m-0 p-0">

				<Navbarhome/>
				

				</div>
			</div>
			<div className="row ">
				<div className="col d-flex justify-content-center mt-4">

					<p className=" title">  Cada paisaje tiene su historia: esa que leemos, esa que soñamos, esa que creemos  </p>
				</div>
			</div>
			<div className="row">
				<div className="col ">
				<HomeFooter/>

				</div>
			</div>
			
		</div>
	);
};
