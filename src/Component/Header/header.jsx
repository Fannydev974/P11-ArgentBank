import React from 'react'
import './header.css';
import Logo from "../../img/argentBankLogo.avif";
//import Link from "react route";
function header() {
    return (
        <header>
            <nav className='main-nav'>
                {/* lien vers page d'accueil*/}<Link to="/">
                    <img className="logo" src={Logo} alt="logo Argent Bank" />
                    <h1 className="hidden">Argent Bank</h1>
                </Link>


            </nav>
        </header>
    )
}
export default header
