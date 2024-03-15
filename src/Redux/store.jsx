import { configureStore } from '@reduxjs/toolkit'
import { reducer as authReducer } from './Reducer/authSlice.jsx';
//import indexReducer from "./Redux/Reducer/indexSlice.jsx";
import { default as indexReducer } from "./Reducer/indexSlice.jsx";


// Configuration store avec import reducer
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: indexReducer,
    },
})

export default store



