import { createSlice } from "@reduxjs/toolkit"

// Création slice 'user'
const indexSlice = createSlice({
    name: "user",

    //  champs user sur état initiale slice
    initialState: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
    },

    // actions reducers
    reducers: {
        // Action pour les mises à jour valeurs dans champs profil user
        profileSlice: (state, action) => {
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
            state.userName = action.payload.body.userName
            state.email = action.payload.body.email
        },
        // mise a jour valeur champ 'userName' (Action)
        newUserName: (state, action) => {
            state.userName = action.payload
        },
    },
})

export const { profileSlice, newUserName } = indexSlice.actions
export default indexSlice.reducer