import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import "./styles/Cities.css"
import "./styles/Carousel.css"
import "./styles/Header.css"
import "./styles/Hero.css"
import "./styles/Footer.css"
import "./styles/Card.css"
import "./styles/CitiesDetails.css"
import "./styles/CardItinerary.css"
import "./App.css";
import router from './router/router';



 
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
