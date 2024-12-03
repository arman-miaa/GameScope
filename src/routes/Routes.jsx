import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Header from "../components/Header";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Loing from "../pages/Loing";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/person"),
      },
      {
        path: "login",
        element: <Loing></Loing>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
