import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user_login, user_login_google } from '../store/actions/userActions';
import { userReducer } from '../store/reducers/userReducers';
import { GoogleSignin } from '../components/GoogleSignin';

const SignIn = () => {

 const store = useSelector(store=> store.userReducer)
 console.log(store);

  const [formData, setFormData] = useState({
    email:" ",
    password:" ",
  })

  const dispatch = useDispatch();

  const handleInput=(event)=>{
   
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })

  }

   console.log(formData);

  const handleSignIn = async (event)=>{
    event.preventDefault();
    try {
      dispatch(user_login({
        data: formData
      }))
      
    } catch (error) {
      console.log("user_action", error)
    }
  }

  return (
    <div className="signin-body d-flex ">
      <div className="signin container d-flex">
        <div className="titlePrin d-flex">
          <h1>MyTinerary</h1>
        </div>
        <form className="formsi d-flex flex-column" onSubmit={handleSignIn}>
          <h2 className="titleSignin">SIGN IN</h2>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={handleInput}
              type="password"
              name="password"
              className="form-control"
            />
          </div>
          <GoogleSignin />
          <p className="no-account d-flex">
            Don't have an account?
            <a className="underline " href="/signup">
              Sign Up
            </a>
          </p>
          <button
            type="submit"
            className="btn btn-signin"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn