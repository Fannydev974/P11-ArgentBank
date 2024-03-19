import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios" //Axios,bibliothèque JavaScript pour effectuer des requêtes HTTP.
import EditUserName from "../../Component/EditUserName/editUserName.jsx";
import UserMoney from "../../Component/UserMoney/userMoney.jsx";

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
    }, [])


    return (
        <main className="main_user">
            <EditUserName />
            <section className="card">
                <h2 className="hidden">Accounts</h2>
                <userMoney title="Argent Bank Checking (x8349)" content="$2,082.79" subtitle="Available Balance" />
                <userMoney title="Argent Bank Savings (x6712)" content="$10,928.42" subtitle="Available Balance" />
                <userMoney title="Argent Bank Credit Card (x8349)" content="$184.30" subtitle="Current Balance" />
            </section>
        </main>
    )
}

export default user
