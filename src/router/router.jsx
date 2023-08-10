import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from '../pages/Cities'
import Main from "../layouts/Main";
import Home from "../pages/Home";



const router = createBrowserRouter([
  { path: "/", element: <Main/>,
children:[{ path: "/", element: <Home/> },
  { path: "/cities", element: <Cities/> }]
},
  
]);

export default router;