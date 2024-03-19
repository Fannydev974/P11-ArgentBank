import React, { useState } from "react"
import './login.css'
import axios from "axios";
import Button from '../../Component/Button/button.jsx';
import Formular from '../../Component/Formular/formular.jsx';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Pour la mise à jour des value
import { startSignIn } from '../../Redux/Reducer/authSlice.jsx';


function login() {

    const navigation = useNavigate() // useNavigation pour la navigation entre les pages
    const dispatch = useDispatch() // useDispatch pour dispatcher des actions Redux

    // Stockage des valeurs form
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [remember, setRemember] = useState(false)

    // Gérer l'envoie du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            email: email,
            password: password,
        }
        // Envoie requête vers l'api pour faire la connexion
        try {
            const setRequest = await axios.post("http://localhost:3001/api/v1/user/login",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

            // Vérification que la requête ai réussie
            // Si problème (IF)
            if (setRequest.status === 200) {
                const responseData = setRequest.data // récuperation données
                const token = responseData.body.token // pour prendre le token (auth)
                localStorage.setItem("authToken", token) // enregistrement du token
                dispatch(startSignIn({ token })) // envoie action au store (utilisateur connecté!)
                navigation/*.push*/("/User") // redirection vers page
            } else {
                setErrorMessage(setRequest.statusText) // Pour faire la mise à jour du message d'erreur
            }
        } catch (error) {
            // Gestion erreurs non prévues
            setErrorMessage("An error as occured.") //  Pour faire la mise à jour du message d'erreur (une erreur c'est produite)
        }
    }
    return (
        <main className="main-login">
            <section className="section-login">

                <div className="form_header">
                    <i className="fa fa-user-circle"></i>
                    <h2>Sign In</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    {errorMessage && <p className="error-login">{errorMessage}</p>}

                    <Formular label="Username" content="email" type="email" onChange={(event) => setEmail(event.target.value)} required />
                    <Formular label="Password" content="password" type="password" onChange={(event) => setPassword(event.target.value)} required />

                    <div className="login_check">
                        <input type="checkbox" id="remember" name="check-remember" onChange={() => setRemember(!remember)} checked={remember} />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <Button style={{ textDecoration: "underline" }} content="Sign In" className="btn-login" />
                </form>
            </section>
        </main>

    )
}

export default login
