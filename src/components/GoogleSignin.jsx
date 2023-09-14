import React, { useEffect, useRef, useState} from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios'
import { user_login_google } from '../store/actions/userActions';

  export const GoogleSignin = () => {
    const [formData, setFormData] = useState({
      email: " ",
      password: " ",
    });

    const dispatch = useDispatch();
    
    const googleButton = useRef()
    
    const handleCredentialResponse = async (response) => {
        /* console.log("JWT GOOGLE: ", response.credential); */
      const data = {
        token_id: response.credential
      }

      try {
        const userResponse = await axios.post(
          "http://localhost:7000/api/auth/google",
          data
        );
        console.log(userResponse);
        window.location.href = "/";
     
        // Guardar el token y el usuario en el localStorage
        if (userResponse.data.response && userResponse.data.response.token) {
          localStorage.setItem("token", userResponse.data.response.token);
        }
        if (userResponse.data.response && userResponse.data.response.user) {
          localStorage.setItem(
            "user",
            JSON.stringify(userResponse.data.response.user)
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    const handleSignInGoogle = async (event) => {
        event.preventDefault();
        try {
          dispatch(
            user_login_google({
              data: formData,
            })
          );
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(()=>{
           if (window.google) {
             window.google.accounts.id.initialize({
               client_id:
                 "784081520071-e5c3pvfgg73b7m9rmp16cd5dkgfi4i78.apps.googleusercontent.com",
               callback: handleCredentialResponse,
             });
             window.google.accounts.id.renderButton(
               googleButton.current,
               {
                 type: "standard",
                 shape: "circle",
                 theme: "outline",
                 size: "medium",
                 text: "continue_with",
                 locale: "en",
               } // customization attributes
             );
           }
    },[])
    
  return (
    <div ref={googleButton}></div>
  )
}

