import React from 'react'
// import "redux"
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
//import { useSelector } from "react-redux" pour récuperer l'état de mon store

import Header from "./Componnent/Header/header";
import Footer from './Componnent/Footer/footer';
import Home from './Componnent/Pages/home';

function App() {
    //useSelector
    return (
        <div className="app">
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route>{/*Login*/}</Route>
                    <Route>{/*Erreur*/}</Route>
                </Routes>


                <Footer />
            </Router>
        </div>
    )
}

export default App
