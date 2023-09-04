import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";
import { filterReducer } from "../store/reducers/filterReducer"



export const store = configureStore({
    reducer:{
        filterReducer: filterReducer
    }
})