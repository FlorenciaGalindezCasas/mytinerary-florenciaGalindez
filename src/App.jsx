import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import "./styles/Cities.css"
import "./styles/Carousel.css"
import "./styles/Header.css"
import "./styles/Hero.css"
import "./styles/Footer.css"
import "./App.css";
import router from './router/router';


 
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
