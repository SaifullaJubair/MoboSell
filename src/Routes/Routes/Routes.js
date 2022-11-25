import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import User from "../../Shared/User/User";
import Register from "../../Pages/Register/Register";

import UnKnownRoutes from "../UnKnownRoutes/UnKnownRoutes";
import Blog from "../../Pages/Blog/Blog";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
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
            path: '/user',
            element: <User></User>
         },

      ]
   },

   {
      path: '*',
      element: <UnKnownRoutes></UnKnownRoutes>
   }
])
export default router;