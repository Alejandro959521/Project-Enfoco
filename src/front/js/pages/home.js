import React, { useContext } from "react";
import { Context } from "../store/appContext";
import home1 from "../../img/Home1.jpeg";
import "../../styles/home.css";
import {Navbarhome} from "../component/navbarhome.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" backimage" style={{backgroundImage: `url(${home1})`}}>
			
			<div className="row">
				<div className="col">

				<Navbarhome/>
				

				</div>
			</div>
			<div className="row">
				<div className="col">
				

				</div>
			</div>
			<div className="row">
				<div className="col">
				

				</div>
			</div>
			
		</div>
	);
};
