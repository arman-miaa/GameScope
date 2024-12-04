import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Header from "../components/Header";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Loing from "../pages/Loing";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import AllReviews from "../Private/AllReviews";
import AddReview from "../Private/AddReview";
import MyReviews from "../Private/MyReviews";
import GameWatchList from "../Private/GameWatchList";

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
        path: "allReviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "gameWatchList",
        element: <GameWatchList></GameWatchList>,
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
