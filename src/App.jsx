import React from 'react'
// import "redux"
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
//import { useSelector } from "react-redux" pour récuperer l'état de mon store

import Header from "./Component/Header/header.jsx";
import Footer from './Component/Footer/footer.jsx';
import Home from '../src/Component/Pages/Home/home.jsx';

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
