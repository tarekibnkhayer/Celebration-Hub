import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Features from "../pages/home/Features";
import ServiceDetail from "../pages/home/ServiceDetail";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/features',
          element: <PrivateRoute><Features></Features></PrivateRoute>
        },
        {
          path: "/services/:id",
          element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
          loader: () => fetch('/data.json')
        }
      ]
    },
  ]);
  export default router