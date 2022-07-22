import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../homePage/HomePage';
import MenuRistorante from '../menuRistorante/MenuRistorante';
import Informazioni from '../informazioni/Informazioni';
import NoPage from '../noPage/NoPage';

class Router extends React.Component {

    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<MenuRistorante />} />
                    <Route path="informazioni" element={<Informazioni />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default Router;
