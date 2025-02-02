import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Layout from '../components/layout';

import Home from '../pages/home';

const AuthRoutes: React.FC = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </Layout>
    )
}

export default AuthRoutes;