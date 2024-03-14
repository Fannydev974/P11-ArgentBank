import { configureStore } from '@reduxjs/toolkit'
import { reducer as authReducer } from './Reducer/authSlice.jsx';

// Configuration store avec import reducer
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

export default store



