import { createSlice } from "@reduxjs/toolkit";



// Voir si token auth présent dans LocalStorage
const checkToken = () => {
    console.log("checkToken authSlice : ", localStorage.getItem("authToken"))
    return localStorage.getItem("authToken") || null
}

// Etat initial slice auth
const initialState = {
    token: checkToken(), // Initier token avec valeur checkToken()
    isAuthenticated: false, // Initier par défaut
    /*error: null, //pour stocker d'éventelles erreurs
    user: null, // aucune information utilisateur n'est présente dans le store
    firstName: null, //le prénom de l'utilisateur n'est pas défini
    lastName: null, //le nom de famille de l'utilisateur n'est pas défini
    userName: null, //le nom d'utilisateur de l'utilisateur n'est pas défini
    email: null //l'adresse email de l'utilisateur n'est pas définie*/
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //  Action pour la mise à jour état pour connexion réussie
        startSignIn(state, action) {
            state.token = action.payload.token // mise à jou du token
            //console.log("authSlice state.token : ", state.token)
            state.isAuthenticated = true
            localStorage.getItem("localStorage authToken", state.token)
            state.error = null;//pour stocker les éventuelles erreurs
        },

        // mise à jour pour la de déconnexion
        setLogout(state) {
            state.token = null; // pour réinitialiser le token
            state.isAuthenticated = false;
            localStorage.removeItem("authToken")
            state.error = null;
        },
    },
},
)

export const { reducer } = authSlice;
export const { startSignIn, setLogout } = authSlice.actions;
//Exporte les actions générées automatiquement par createSlice.

export default authSlice.reducer;
