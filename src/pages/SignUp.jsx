import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { GoogleSignin } from '../components/GoogleSignin'
import Swal from "sweetalert2";

const SignUp = () => {

  const countries = [
    { value: "Alemania" },
    { value: "Andorra" },
    { value: "Argentina" },
    { value: "Austria" },
    { value: "Bolivia" },
    { value: "Brasil" },
    { value: "Canadá" },
    { value: "Chile" },
    { value: "Colombia" },
    { value: "Costa Rica" },
    { value: "Dinamarca" },
    { value: "Ecuador" },
    { value: "España" },
    { value: "Estados Unidos" },
    { value: "Francia" },
    { value: "Grecia" },
    { value: "Guatemala" },
    { value: "Honduras" },
    { value: "Irlanda" },
    { value: "Italia" },
    { value: "Jamaica" },
    { value: "México" },
    { value: "Nicaragua" },
    { value: "Noruega" },
    { value: "Países Bajos" },
    { value: "Panamá" },
    { value: "Paraguay" },
    { value: "Perú" },
    { value: "Portugal" },
    { value: "Reino Unido" },
    { value: "República Dominicana" },
    { value: "Suecia" },
    { value: "Suiza" },
    { value: "Uruguay" },
    { value: "Venezuela" },
  ];

  const user = useRef()
  const password = useRef()
  const email = useRef()
  const image = useRef();
  const country = useRef();
  const navigate = useNavigate()

  const handleSignup = async (event) =>{
     event.preventDefault()
     const data =
      {
        user: user.current.value,
        password: password.current.value,
        email: email.current.value,
        image: image.current.value,
        country: country.current.value
      }
      try {
        const res = await axios.post("http://localhost:7000/api/auth/signup", data); 
        Swal.fire({
          title: "Created user",
          text: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });   
        navigate("/signin")
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok"
        });
      }
  }

  return (
    <div className="signup-body d-flex">
      <div className="signup container d-flex ">
        <form className="formup d-flex flex-column" onSubmit={handleSignup}>
          <h2 className="titleSignup">SIGN UP</h2>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              ref={user}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              ref={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              ref={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">URL imagen profile</label>
            <input
              ref={image}
              type="text"
              className="form-control"
              id="url"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <select ref={country} id="disabledSelect" className="form-select">
              {countries.map((country) => (
                <option key={country.value}>{country.value}</option>
              ))}
            </select>
          </div>
          <GoogleSignin />
          <p className="no-account d-flex">
            Do you already have an account?
            <a className="underline " href="/signin">
              Sign In
            </a>
          </p>
          <button
            type="submit"
            className="btn btn-signup"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp