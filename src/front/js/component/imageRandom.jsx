import React, { useState, useEffect } from "react";
import image from "../../img/imagegalery.jpeg";
import image2 from "../../img/a.jpg";
import image3 from "../../img/detalles.jpeg";

import "../../styles/galery.css";




export const ImageRandom = () => {

    const listImage = [image, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                // Generar un índice aleatorio diferente al índice actual
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * listImage.length);
                } while (newIndex === prevIndex);

                return newIndex;
            });
        }, 5000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);

    }, [listImage, 5000]);

    return (

       
            <div className="
        relative rounded-lg overflow-hidden
         h-screen bg-cover bg-center transition-all duration-700 transform " style={{ backgroundImage: `url(${listImage[currentImageIndex]})` }}>
                <p className=" text-center text-3xl md:text-6xl mt-4 font-extrabold drop-shadow-md animate-fadeInUp" >Explora nuestro catálogo</p>

                <br />
                <p className="text-xl md:text-4xl text-center mt-4 font-light drop-shadow-sm animate-fadeInUp delay-2">Encuentra el mejor cuadro que se adecue a tu vida</p>
            
        </div>
    );
};
