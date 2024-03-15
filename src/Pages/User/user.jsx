import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios" //Axios,bibliothèque JavaScript pour effectuer des requêtes HTTP.

import './user.css'

import { profileSlice } from '../../Redux/Reducer/indexSlice.jsx';


function user() {
    const dispatch = useDispatch() // récupérer la fonction de dispatch Redux.


    // récupérer les données de profil utilisateur depuis l'API
    async function fetchDataProfile(authToken) {
        // Envoie requête API
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/user/profile",
                {},
                {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            )
            if (response.status === 200) {
                const responseData = response.data
                dispatch(profileSlice(responseData)) // Pour la mise à jour de la valeur
                // + déclenche rendu
            } else {
                console.error("Error response : ", response.statusText)
            }
        } catch (error) {
            console.error("Error", error)
        }
    }

    useEffect(() => {// execute fetchDataProfile après chaque rendu du composant
        const authToken = localStorage.getItem("authToken") // récup token
        // Voir si token existe
        if (authToken) {
            fetchDataProfile(authToken)
        }
    })


    return (
        <main className="main_user">
            <section className="card">
                <h2 className="hidden">Accounts</h2>
            </section>
        </main>
    )
}

export default user
