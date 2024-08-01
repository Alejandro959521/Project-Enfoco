import React, { Component } from "react";
import { faTwitter, faInstagram, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/galery.css";


export const FooterGalery = () => (

    <div className="flex justify-around  items-center flex-col md:flex-row py-4">

        <div className="text-left ">
            <p className="text-2xl">Logo</p>
        </div>

        <div className=" py-2 ">
            <p className="text-3xl font-bold mb-8">Acerca de Enfoce Cuadros:</p>
            <p className="text-2xl mb-8">fotografía de alta calidad y diseño <br />al alcance de tu habitación</p>

        </div>
 
        <div className=" text-left ">

            <p className="text-3xl font-bold py-2">Contacto:</p>
            <p className="text-2xl py-2">EnfoceCuadros@gmail.com <br /> +564123434567, Buenos Aires <br /> Argentina</p>

            <div className="flex justify-start space-x-4  py-2 ">
                <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} className=" icong " /></a>
                <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className=" icong " /></a>
                <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} className=" icong " /></a>
                <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className=" icong " /></a>
               

            </div>

        </div>

    </div>
);