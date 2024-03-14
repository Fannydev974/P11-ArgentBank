import React from 'react'
import './App.css';
import "redux"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useSelector } from "react-redux" // pour récuperer l'état de mon store

import Header from "./Component/Header/header.jsx";
import Footer from './Component/Footer/footer.jsx';
import Home from './Pages/Home/home.jsx';
import Login from './Pages/Login/login.jsx';
import Error from './Pages/Error/error.jsx';


function App() {
  //useSelector
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Error" element={<Error />} />
        </Routes>


        <Footer />
      </Router>
    </div>
  )
}

export default App
