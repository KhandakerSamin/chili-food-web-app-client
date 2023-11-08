import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Root/Root";
import SignIn from "../Pages/SignIn";
import Blog from "../Pages/Blog";
import AllFood from "../Pages/AllFood";
import FoodDetails from "../Pages/FoodDetails";
import CheckOut from "../Pages/CheckOut";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood";
import MyCart from "../Pages/MyCart";
import MyAddedFood from "../Pages/MyAddedFood";
import UpdateFood from "../Pages/UpdateFood";
import SignUp from "../Pages/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allFoods',
        element: <AllFood></AllFood>,
        loader: () => fetch('https://chili-food-server.vercel.app/allFoods')
      },
      {
        path: '/foodDetails/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`https://chili-food-server.vercel.app/allFoods/${params.id}`)
      },
      {
        path: '/checkOut/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chili-food-server.vercel.app/allFoods/${params.id}`)
      },
      {
        path: '/addFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/myAddedFood',
        element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/updateFoods/:id',
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chili-food-server.vercel.app/allFoods/${params.id}`)
      }

    ]
  },
]);


export default router;