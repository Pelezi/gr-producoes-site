import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from '../components/layout';

import Home from '../pages/home';
import ContentPage from '../pages/ContentPage/ContentPage';
import Contato from '../pages/contato';

const AuthRoutes: React.FC = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos" element={<ContentPage page="eventos" />} />
                <Route path="/fashionFilm" element={<ContentPage page="fashionFilm" />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Layout>
    )
}

export default AuthRoutes;