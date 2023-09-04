import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const filterCities = createAsyncThunk("filterCities", async (obj) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/cities?name=${obj.name}`
      );
      return {
        cities: response.data.cities
      }
    } catch (error) {
       throw new Error("City not found");
     
    } 

})

const getCities = createAsyncThunk("getCities", async () => {
  try {
    const response = await axios.get(
      "http://localhost:7000/api/cities"
    );
    return {
      cities: response.data.cities,
    };
  } catch (error) {
    console.log(error);
  } 
});

const filterActions = { filterCities, getCities }

export default filterActions

