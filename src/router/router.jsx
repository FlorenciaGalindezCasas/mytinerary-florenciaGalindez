import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from '../pages/Cities'
import Main from "../layouts/Main";
import Home from "../pages/Home";
import CitiesDetails from "../pages/CitiesDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <CitiesDetails/> },
    ],
  },
]);

export default router;