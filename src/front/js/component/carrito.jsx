import React, {useContext} from "react";
import "../../styles/service.css";
import { Context } from "../store/appContext";



export const Carrito = () => {

	const { store, actions } = useContext(Context);



       
	return (  
               
             
            <aside className={`${store.isCarOpen ? 'flex': 'hidden'} product-detail flex-col right-0 fixed bg-white border border-black rounded-lg`}>

            <div className="flex justify-between items-center">
                    <p className="text-4xl font-bold">Mi Carrito</p>
                   
                    <i className="fa-solid fa-xmark cursor-pointer"
                    onClick={() => {actions.closeCart()}}
                    ></i>

            </div>
  

            </aside>			
		
	);
};
