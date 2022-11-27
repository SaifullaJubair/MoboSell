import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import User from "../../Shared/User/User";
import Register from "../../Pages/Register/Register";

import UnKnownRoutes from "../UnKnownRoutes/UnKnownRoutes";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../components/Categories/Categories";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";

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
            path: '/categories',
            element: <Categories></Categories>
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
            element: <PrivateRoute><User></User></PrivateRoute>
         },

      ]
   },

   {
      path: '/dashboard',
      element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
         {
            path: '/dashboard',
            element: <MyProducts></MyProducts>
         },
         {
            path: '/dashboard/add-product',
            element: <AddProduct></AddProduct>
         },
      ]
   },

   {
      path: '*',
      element: <UnKnownRoutes></UnKnownRoutes>
   }
])
export default router;