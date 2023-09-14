import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import "./styles/Cities.css"
import "./styles/Carousel.css"
import "./styles/Header.css"
import "./styles/Hero.css"
import "./styles/Footer.css"
import "./styles/Card.css"
import "./styles/CitiesDetails.css"
import "./styles/CardItinerary.css"
import "./styles/SignIn.css";
import "./styles/SignUp.css"
import "./styles/Error.css"
import "./App.css";
import router from './router/router';
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { user_logout, user_token } from './store/actions/userActions'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      let headers = { headers: { Authorization: `Bearer ${token}` } }

      axios
        .post(`http://localhost:7000/api/auth/token`, null, headers)
        .then((response) => dispatch(user_token(response.data.user)))
        .catch((error) => {
          console.log(error);
        });
    }
  }, []); 

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
