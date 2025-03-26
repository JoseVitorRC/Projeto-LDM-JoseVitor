import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/Login/Login";
import CountryMenu from "./pages/CountryMenu/CountryMenu";

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/" />;
};

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/menu" element={<PrivateRoute element={<CountryMenu />} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
