import { configureStore } from '@reduxjs/toolkit'
import { reducer as authReducer } from './Reducer/authSlice.jsx';
import { default as indexReducer } from "./Reducer/indexSlice.jsx";


// Configuration store avec import reducer
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: indexReducer,
    },
})

export default store

// Chaque reducer est associé à une clé spécifique dans cet objet. Dans ce cas,
// le reducer authReducer est associé à la clé 'auth' et le reducer indexReducer est associé à la clé 'user'.
//Cela signifie que le state géré par authReducer sera accessible sous la clé 'auth' dans le store Redux,
//et de même pour indexReducer sous la clé 'user'.

