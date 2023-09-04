import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from '../pages/Cities'
import Main from "../layouts/Main";
import Home from "../pages/Home";
import CitiesDetails from "../pages/CitiesDetails";
import Login from "../pages/Login";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <CitiesDetails /> },
      { path: "/itineraries/:id", element: <CitiesDetails/> },
      { path: "/signin", element: <Login /> },
    ],
  },
]);

export default router;