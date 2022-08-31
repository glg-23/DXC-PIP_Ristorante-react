import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../homePage/HomePage';
import MenuRistorante from '../menuRistorante/MenuRistorante';
import Informazioni from '../informazioni/Informazioni';
import NoPage from '../noPage/NoPage';

class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="home" element={<Home />} />
                    <Route path="menu" element={<MenuRistorante />} />
                    <Route path="informazioni" element={<Informazioni />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;
