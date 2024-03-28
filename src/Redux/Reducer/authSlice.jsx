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

}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //  Action pour la mise à jour état pour connexion réussie
        startSignIn(state, action) {
            state.token = action.payload.token // mise à jour du token
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
