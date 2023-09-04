import { createReducer } from "@reduxjs/toolkit";
import { user_photo } from "../actions/userActions";

//valor inicial
const initialState = { 
  photo: "https://i.ibb.co/ft2M55S/Captura-de-pantalla-2022-06-29-193034.png",
}

//addCase es como un switch

export const userReducer = createReducer(initialState, 
    (builder) => builder
       .addCase(user_photo, 
       (state, action)=>{
         return {
            ...state,
            photo: action.payload.photo
         }
       })
    )