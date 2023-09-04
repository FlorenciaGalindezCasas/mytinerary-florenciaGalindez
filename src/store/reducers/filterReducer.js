import { createReducer } from "@reduxjs/toolkit";
import filterActions from "../actions/filterActions";

const initialState = {
  cities: [],
  error: null
};

export const filterReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(filterActions.filterCities.fulfilled, (state, action) => {
      return {
        ...state,
        cities: action.payload.cities,
        error: null
      };
    })
     .addCase(filterActions.filterCities.rejected, (state, action) => {
      return {
        ...state,
        cities: [],
        error: action.error.message, 
      };
    })
    .addCase(filterActions.getCities.fulfilled, (state, action) => {
      return {
        ...state,
        cities: action.payload.cities,
        error: null
      };
    })
);
