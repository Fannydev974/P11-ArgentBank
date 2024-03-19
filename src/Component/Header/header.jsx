import React, { useEffect } from "react"
import './header.css';
import Logo from "../../img/argentBankLogo.avif";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { startSignIn, setLogout } from '../../Redux/Reducer/authSlice';



function header() {

    const user = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch() // màj valeur
    const userProfile = useSelector((state) => state.user) // extrait user profil

    //* Deco user
    const userSignOut = () => {
        dispatch(setLogout())
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken")
        if (token) {
            dispatch(startSignIn({ token })) // co user
        }
    }, [dispatch])

    return (
        <header>
            {/* lien vers page d'accueil*/}<Link to="/">
                <img className="logo" src={Logo} alt="logo Argent Bank" />
            </Link>
            <nav>
                {user ? (
                    <>
                        <Link to="/User" className="link">
                            <i className="fa fa-user-circle icon-header"></i>
                            {!userProfile.userName ? <>{userProfile.firstName}</> : <>{userProfile.userName}</>}
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
{/* <Link to="/Login" className="link">
                    <i className="fa fa-user-circle icon-header"></i>
                    Sign In
    </Link>*/}