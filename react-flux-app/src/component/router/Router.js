import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../homePage/HomePage';
import Ricette from '../ricette/Ricette';
import Informazioni from '../informazioni/Informazioni';
import NoPage from '../noPage/NoPage';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="ricette" element={<Ricette />} />
                <Route path="informazioni" element={<Informazioni />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
