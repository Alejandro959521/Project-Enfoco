import React from "react";
import { faTwitter, faInstagram, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../styles/home.css";



export const HomeFooter = () => {
	
	return (
		<footer className=" flex-1 flex justify-center items-center"> 
		
			
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} className="mx-4 icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className="mx-4 icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} className="mx-4 icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="mx-4 icon" /></a>
			<a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTiktok} className="mx-4 icon" /></a>
			
		
	</footer>
		
	);
};
