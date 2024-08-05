import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import {Galery} from "./pages/galery"
import { AboutMe } from "./pages/aboutMe";
import { Services } from "./pages/services";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { GaleryDetalle } from "./pages/galeryDetalle";
import injectContext from "./store/appContext";
import {Carrito} from "./component/carrito.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                
                    <Routes>
                        <Route element={<Home/>} path="/" />
                        <Route element={<Galery/>} path="/Galeria"/>
                        <Route element={<AboutMe/>} path="/SobreMi"/>
                        <Route element={<Services/>} path="/Servicios"/>
                        <Route element={<Contact/>} path="/Contacto"/>
                        <Route element={<GaleryDetalle/>} path="/Detalle/:Id"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>   
                    <Carrito/>   
                </ScrollToTop>
            </BrowserRouter> 
        </div>
    );
};

export default injectContext(Layout);
