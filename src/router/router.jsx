import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from '../pages/Cities'
import Main from "../layouts/Main";
import Home from "../pages/Home";
import CitiesDetails from "../pages/CitiesDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cities",
        element: <Cities />,
      },
      { path: "/cities/:id", element: <CitiesDetails /> },
      { path: "/itineraries/:id", element: <CitiesDetails /> },
      {
        path: "/signup",
        element: (
          <ProtectedRoute path="/signin">
            <SignUp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signin",
        element: (
          <ProtectedRoute path="/">
            <SignIn />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <Error /> },
      { path: "/404", element: <Error /> },
    ],
  },
]);

export default router;