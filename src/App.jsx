import React from 'react'
import './App.css';
import "redux"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux" // pour récuperer l'état de mon store

import Home from './Pages/Home/home.jsx';
import Header from "./Component/Header/header.jsx";
import Login from './Pages/Login/login.jsx';
import Error from './Pages/Error/error.jsx';
import User from './Pages/User/user.jsx';
import Footer from './Component/Footer/footer.jsx';

function App() {
  const token = useSelector((state) => state.auth.token)
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/user" element={token ? <User /> : <Error />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
// Si une variable token est définie et évaluée comme vraie, la composante <User /> est rendue.
// Sinon, la composante < Error /> est rendue.Cela permet de contrôler quelles composantes sont affichées en fonction
// de l'état de l'application.