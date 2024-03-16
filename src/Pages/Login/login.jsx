import React, { useState } from "react"
import './login.css'

import Button from '../../Component/Button/button.jsx';
import Formular from '../../Component/Formular/formular.jsx';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Pour la mise à jour des value

function login() {

    const navigation = useNavigate() // useNavigation pour la navigation entre les pages
    const dispatch = useDispatch() // useDispatch pour dispatcher des actions Redux

    // Stockage des valeurs form
    const [email, goEmail] = useState("")
    const [password, goPassword] = useState("")
    const [errorMessage, goErrorMessage] = useState("")
    const [remember, goRemember] = useState(false)

    // Gérer l'envoie du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault()
        const acceptForm = {
            email: email,
            password: password,
        }

        // Envoie requête vers l'api pour faire la connexion
        try {
            const goRequest = await axios.post("'http://localhost:3001/api/v1/user/login'", acceptForm, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            // Vérification que la requête ai réussie
            // Si problème (IF)
            if (goRequest.status === 200) {
                const responseData = goRequest.data // récuperation données
                const token = responseData.body.token // pour prendre le token (auth)
                localStorage.setItem("authToken", token) // enregistrement du token
                dispatch(startSignIn({ token })) // envoie action au store (utilisateur connecté!)
                navigation.push("/User") // redirection vers page
            } else {
                goErrorMessage(goRequest.statusText) // Pour faire la mise à jour du message d'erreur
            }
        } catch {
            // Gestion erreurs non prévues
            goErrorMessage("Une erreur s’est produite.") //  Pour faire la mise à jour du message d'erreur
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

                    <Formular label="Username" content="email" type="email" onChange={(e) => goEmail(e.target.value)} required />
                    <Formular label="Password" content="password" type="password" onChange={(e) => goPassword(e.target.value)} required />

                    <div className="login_check">
                        <input type="checkbox" id="remember" name="check-remember" onChange={() => goRemember(!remember)} checked={remember} />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <Button style={{ textDecoration: "underline" }} content="Sign In" className="btn-login" />
                </form>
            </section>
        </main>

    )
}

export default login
