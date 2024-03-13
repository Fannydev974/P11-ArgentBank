import React from 'react'
import './header.css';
import Logo from "../../img/argentBankLogo.avif";
import { Link } from 'react-router-dom';

function header() {
    return (
        <header>
            {/* lien vers page d'accueil*/}<Link to="/">
                <img className="logo" src={Logo} alt="logo Argent Bank" />
                {/*<h1 className="hidden">Argent Bank</h1>*/}
            </Link>
            <nav>
                <Link to="/Login" className="link">
                    <i className="fa fa-user-circle icon-header"></i>
                    Sign In
                </Link>
            </nav>
        </header>
    )
}
export default header
