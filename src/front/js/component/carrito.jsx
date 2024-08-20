import React, { useContext } from "react";
import "../../styles/service.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const Carrito = () => {

        const { store, actions } = useContext(Context);
	const navigate = useNavigate()

        const deleteItem = (item) => {

                actions.deleted(item)
                actions.sumCar()
        }


        return (

                <aside className={` ${store.isCarOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 fixed bg-white border border-black rounded-lg mr-0.5 h-screen`}>

                        <div className="flex justify-around items-center mt-4 pl-20">
                                <p className="text-4xl font-bold">Mi Carrito</p>

                                <i className="fa-solid fa-xmark cursor-pointer ico "
                                        onClick={() => { actions.closeCart(),actions.setSelectIcon(null) }}
                                ></i>

                        </div>
                        <div className="flex-grow overflow-y-auto">


                                {store.listCar.length == 0 ? (
                                        <div className="flex justify-center text-4xl items-center font-bold pt-28 overflow-hidden">
                                                <p>El Carrito esta vacío</p>
                                        </div>
                                ) : (

                                        store.listCar.map((item, index) => {

                                                return (
                                                        <div key={index} className=" flex items-center justify-between px-6 py-2 ">
                                                                <div className="flex items-center gap-2">
                                                                        <figure className="w-20 h-20">
                                                                                <img className="w-full h-full rounded-lg object-contain" src={item.image} />
                                                                        </figure>
                                                                        <p className="text-xl font-medium">{item.title}</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                        <p className="text-lg font-semibold"> {item.price}&nbsp;$</p>
                                                                        <i className="fa fa-trash fa-fw text-dark cursor-pointer" onClick={() => deleteItem(item)} ></i>

                                                                </div>

                                                        </div>

                                                )

                                        })

                                )

                                }

                        </div>
 

                        <div className="border-t-2 px-4 py-2 flex justify-between text-3xl font-semibold mt-auto">
                                <p >Total  :</p>
                                <p>{store.sum} $</p>
                        </div>

                        <button className="bg-black m-4 p-3 text-2xl text-white rounded-lg" 	onClick={() => {
							navigate(`/CheckOut`)  
						}}
                                                disabled={store.listCar.length === 0} 
                                                >Finalizar Compra </button>







                </aside>

        );
};
