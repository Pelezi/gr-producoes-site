import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Layout from '../components/layout';

import Home from '../pages/home';
import Eventos from '../pages/eventos';
import FashionFilm from '../pages/fashionFilm';

const AuthRoutes: React.FC = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/fashionFilm" element={<FashionFilm />} />

            </Routes>
        </Layout>
    )
}

export default AuthRoutes;