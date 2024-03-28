import React, { useEffect } from "react"
import './header.css';
import Logo from "../../img/argentBankLogo.avif";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { startSignIn, setLogout } from '../../Redux/Reducer/authSlice';



function header() {

    const user = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch() // Initialise la fonction dispatch pour la gestion des actions Redux
    const userProfile = useSelector((state) => state.user) // extrait user profil
    console.log('userProfile :', userProfile);

    //  Déconnexion utilisateur (user)
    const userSignOut = () => { // Définit la fonction pour la déconnexion de l'utilisateur
        dispatch(setLogout()) // Dispatch l'action de déconnexion
    }

    useEffect(() => { // Utilise useEffect pour exécuter une action lors du rendu initial du composant
        const token = localStorage.getItem("authToken")// Récupère le token d'authentification depuis le localStorage
        if (token) {
            dispatch(startSignIn({ token })) // Dispatch l'action de connexion avec le token récupéré
        }
    }, [dispatch])// Déclenche l'effet uniquement lorsque le dispatch change

    return (
        <header>
            <Link to="/"> {/* lien vers page d'accueil*/}
                <img className="logo" src={Logo} alt="logo Argent Bank" />
            </Link>
            <nav>
                {user ? (// Condition pour vérifier si l'utilisateur est connecté
                    <>
                        <Link to="/User" className="link">
                            <i className="fa fa-user-circle icon-header"></i>
                            {!userProfile.userName ? <>{userProfile.firstName}</> : <>{userProfile.userName}</>}
                            {/* Affiche le nom d'utilisateur ou le prénom  */}
                        </Link>
                        <Link to="/Login" onClick={userSignOut} className="link">
                            <i className="fa fa-sign-out icon-header"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link to="/Login" className="link">
                        <i className="fa fa-user-circle icon-header"></i>
                        Sign In
                    </Link>
                )}
            </nav>
        </header>
    )
}
export default header
// Ce composant assure la gestion de l'authentification de l'utilisateur,
// la navigation entre les pages de l'application et l'affichage dynamique du contenu
// en fonction de l'état de connexion de l'utilisateur.