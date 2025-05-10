import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterslice'

export const store = configureStore({ // store create karyo
    reducer: {
        counter: counterReducer
    }
})

// Steps:
// create store
// app component ne provider ma add karvu
// slice create karvu
// register reducer in store