import React from "react";
import { faTwitter, faInstagram, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../styles/home.css";



export const HomeFooter = () => {
	 
	return (
		<footer className=" flex-1 flex justify-center items-center p-4 space-x-4"> 
		
			
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} className="text-lg md:text-xl lg:text-2xl icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className="text-lg md:text-xl lg:text-2xl icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} className="text-lg md:text-xl lg:text-2xl icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="text-lg md:text-xl lg:text-2xl icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTiktok} className="text-lg md:text-xl lg:text-2xl icon" /></a>
			
		
	</footer>
		
	);
};
