import React from 'react'
import { useDispatch } from 'react-redux'
import { user_photo } from '../store/actions/userActions';


const Login =() => {

    const dispatch = useDispatch();

    const handleSignIn =()=>{
      //simulo que el user se logueo correctamente
      //simulo que obtengo los datos del user
      //utilizo dispatch para enviar esa info
      //y que el reducer haga el cambio de estado
    const user ={
        photo: ""
    }

    dispatch(user_photo(user))

  }

  return (
    <div><form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  <div class="col-auto">
    <button onClick={handleSignIn} type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form></div>
  )
}

export default Login