import { createReducer } from "@reduxjs/toolkit";
import { user_login, user_login_google, user_logout, user_token } from "../actions/userActions";

//valor inicial
const initialState = { 
  user: null,
  token: null
}

//addCase es como un switch
export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(user_login.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(user_login_google, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(user_logout.fulfilled, (state, action) => {
      return {
        ...state,
        user: null,
        token: null,
      };
    })

    .addCase(user_token, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    })
);