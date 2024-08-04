import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoPrueba.png";
import "../../styles/service.css";
import { faTrash } from '@fortawesome/free-brands-svg-icons';





export const Carrito = () => {
	return (
               
        
            <aside className="product-detail flex flex-col right-0 fixed bg-white border border-black rounded-lg">

            <div className="flex justify-between items-center">
                    <p className="text-4xl font-bold">Mi Carrito</p>
                   
                    <i className="cursor-pointer fa-solid fa-trash"></i>

            </div>
  

            </aside>			
		
	);
};
