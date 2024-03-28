/*import { createSlice } from "@reduxjs/toolkit";

// Fonction pour récupérer les informations de l'utilisateur depuis le localStorage
const getUserInfo = () => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
        return JSON.parse(userInfoString); //JSON.parse permet de convertir une chaîne JSON en objet JavaScript.
    } else {
        return {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
        };
    }
};

// Création slice 'user'
const indexSlice = createSlice({
    name: "user",

    initialState: getUserInfo(), // Utilisation de la fonction pour initialiser l'état

    // actions reducers
    reducers: {
        // Action pour les mises à jour valeurs dans champs profil user
        profileSlice: (state, action) => {
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.userName = action.payload.body.userName;
            state.email = action.payload.body.email;
            // Mettre à jour les informations dans le localStorage
            localStorage.setItem("userInfo", JSON.stringify(action.payload.body));
        },
        // mise a jour valeur champ 'userName' (Action)
        newUserName: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const { profileSlice, newUserName } = indexSlice.actions;
export default indexSlice.reducer;
// spécifie comment l'état de l'application change en réponse à des actions.
// Il prend en entrée l'état actuel de l'application et une action, puis retourne un nouvel état.
// ligne 33 le localStorage ne peut stocker que des valeurs sous forme de chaînes de texte. Donc, pour stocker un objet JavaScript dans le localStorage,
// je doisd'abord le convertir en une chaîne JSON.*/


import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fonction pour récupérer les informations de l'utilisateur depuis le localStorage
const getUserInfo = () => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
        return JSON.parse(userInfoString);
    } else {
        return {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
        };
    }
};

// Création slice 'user'
const indexSlice = createSlice({
    name: "user",

    initialState: getUserInfo(),

    reducers: {
        // Action pour les mises à jour valeurs dans champs profil user
        profileSlice: (state, action) => {
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.userName = action.payload.body.userName;
            state.email = action.payload.body.email;
            localStorage.setItem("userInfo", JSON.stringify(action.payload.body));
        },
        // mise a jour valeur champ 'userName' (Action)
        newUserName: (state, action) => {
            state.userName = action.payload;
        },
        // Action pour effectuer une requête avec le token sur l'API en utilisant Axios
        fetchUserData: async (state, action) => {
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${action.payload.token}` // Utiliser le token pour l'authentification
                    }
                };

                // Effectuer la requête à l'API avec Axios
                const response = await axios.get('http://localhost:3001/api/v1/user/profile', config);

                // Mettre à jour l'état avec les données reçues de l'API
                // extraire les données de la réponse et les mettre à jour dans l'état Redux
                state.data = response.data;

            } catch (error) {
                console.error('Erreur lors de la requête :', error);
            }
        },
    },
});

export const { profileSlice, newUserName, fetchUserData } = indexSlice.actions;
export default indexSlice.reducer;
