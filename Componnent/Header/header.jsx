import React from 'react'
import './header.css';
import Logo from "../../designs/img/argentBankLogo.avif";
//import Link from "react route";
function header() {
    return (
        <header>
            {/* lien vers page d'accueil*/}<Link to="">
                <img className="logo" src={Logo} alt="logo Argent Bank" />
                <h1 className="hidden">Argent Bank</h1>
            </Link>

    )}
        </header>

            export default header
