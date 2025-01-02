import React, { useContext } from "react";
import "../../styles/service.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Carrito = () => {

        const { store, actions } =  useContext(Context);
	const navigate = useNavigate()

        const deleteItem = (item) => {

                actions.deleted(item)
                actions.sumCar()
        }


        return ( 

                <aside className={` ${store.isCarOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 fixed bg-white border border-black rounded-lg mr-0.5 h-screen
                top-0 shadow-lg w-full md:w-96 border border-gray-900
                `}> 

                        <div className="flex justify-around items-center mt-4 pl-20
                        ">
                                 <p className="text-4xl font-bold ">Mi Carrito</p>

                                <i className="fa-solid fa-xmark cursor-pointer ico hover:text-sky-700"
                                        onClick={() => { actions.closeCart(),actions.setSelectIcon(null) }}
                                ></i>

                        </div> 
                        <div className="flex-grow overflow-y-auto  p-4">


                                {store.listCar.length == 0 ? (
                                        <div className="flex justify-center flex-col items-center font-bold h-full text-center">
                                                <p className="text-4xl font-bold">El Carrito esta vacío</p>
                                        </div>
                                ) : (

                                        store.listCar.map((item, index) => {

                                                 return (
                                                        <div key={index} className=" flex items-center justify-between mb-4">
                                                                <div className="flex items-center gap-4">
                                                                        <figure className="w-16 h-16">
                                                                                <img className="w-full h-full rounded-lg object-cover border border-gray-600" src={item.image} />
                                                                        </figure>
                                                                        <p className="text-xl font-medium">{item.title}</p>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                        <p className="text-lg font-semibold"> {item.price}&nbsp;$</p>
                                                                        <i className="fa fa-trash fa-fw text-dark cursor-pointer hover:text-red-700" onClick={() => deleteItem(item)} ></i>

                                                                </div>

                                                        </div>

                                                )

                                        })

                                )

                                }

                        </div>
 

                        <div className="border-t-2 px-4 py-4 flex justify-between text-3xl font-semibold mt-auto">
                                <p >Total  :</p>
                                <p>{store.sum} $</p>
                        </div>

                        <button className="bg-black m-4 p-3  text-2xl text-white rounded-lg transform transition-transform duration-300 hover:scale-105" onClick={() => {
                                if (store.listCar.length === 0){

                                        alert("No puedes finalizar la compra sin artículos en el carrito.");
                                } else {navigate(`/CheckOut`), actions.closeCart()}
                                
							 
						}}   
                                                
                                                > Finalizar Compra </button>







                </aside>

        );
};
