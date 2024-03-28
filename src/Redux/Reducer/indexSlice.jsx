import { createSlice } from "@reduxjs/toolkit";

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
// je doisd'abord le convertir en une chaîne JSON.