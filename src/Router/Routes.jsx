import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Root/Root";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUP";
import Blog from "../Pages/Blog";
import AllFood from "../Pages/AllFood";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path: '/allFoods',
          element: <AllFood></AllFood>
        }
       
      ]
    },
  ]);


  export default router ;