import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

 export const user_login = createAsyncThunk("user_login", async(obj) => {
    try {
        const {data} = await axios.post("http://localhost:7000/api/auth/signin", obj.data);
        console.log(data)   
        localStorage.setItem("token", data.response.token)
        localStorage.setItem("user", JSON.stringify(data.response.user));
        Swal.fire({
          title: "Welcome",
          text: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });

        return {
            user: data.response.user,
            token: data.response.token
        }

    } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
        return {
            user:null
        }
    }
   
 });

 export const user_login_google = createAsyncThunk("user_login", async(obj) =>{
  try {
    const { data } = await axios.post(
      "http://localhost:7000/api/auth/google",
      obj.data
    );
    console.log(data);
    // Guardar el token y el usuario en el localStorage
    if (data.response && data.response.token) {
      localStorage.setItem("token", data.response.token);
    }
    if (data.response && data.response.user) {
      localStorage.setItem("user", JSON.stringify(data.response.user));
    }
    return {
      user: data.response.user,
      token: data.response.token,
    };
  } catch (error) {
    console.log(error);
    return {
      user: null,
    };
  }
 })

 export const user_logout = createAsyncThunk(
  "user_logout",
  async (_, { dispatch }) => {
    try {
        // Elimina el token de autenticación y la información del usuario del localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(user_logout.fulfilled())
        console.log("Cierre de sesión exitoso"); // Agrega esta línea para verificar
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }
 );

 export const user_token = createAction("user_token", (user)=>{
    return {
        payload:{
            user
        }
    }
 })

 