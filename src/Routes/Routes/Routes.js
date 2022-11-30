import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import User from "../../Shared/User/User";
import Register from "../../Pages/Register/Register";

import UnKnownRoutes from "../UnKnownRoutes/UnKnownRoutes";
import Blog from "../../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AddCategories from "../../Pages/Dashboard/AddCategories/AddCategories";
import Products from "../../Pages/Home/Products/Products";
import ProductDetails from "../../Pages/Home/Home/ProductDetails/ProductDetails";
import AllUsers from "../../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import axios from "axios";
import SellerRoute from "../SellerRoutes/SellerRoutes";
import BuyerRoute from "../SellerRoutes/SellerRoutes";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import ReportedProduct from "../../Pages/Dashboard/ReportedProduct/ReportedProduct";
import DashBoard from "../../Pages/Dashboard/DashBoard/DashBoard";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <UnKnownRoutes></UnKnownRoutes>,
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
            path: '/category/:id',
            element: <PrivateRoute> <Products></Products></PrivateRoute>,
            loader: ({ params }) => axios.get(`http://localhost:5000/category/${params.id}`)
         },
         {
            path: '/product/:id',
            element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
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
      errorElement: <UnKnownRoutes></UnKnownRoutes>,
      children: [

         {
            path: '/dashboard',
            element: <DashBoard></DashBoard>
         },
         {
            path: '/dashboard/my-orders',
            element: <MyOrders></MyOrders>
         },
         {
            path: '/dashboard/my-products',
            element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
         },
         {
            path: '/dashboard/add-product',
            element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
         },
         {
            path: '/dashboard/add-categories',
            element: <AdminRoute><AddCategories></AddCategories></AdminRoute>
         },
         {
            path: '/dashboard/all-buyers',
            element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
         },
         {
            path: '/dashboard/all-sellers',
            element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
         },
         {
            path: '/dashboard/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
         },
         {
            path: '/dashboard/reportedProduct',
            element: <AdminRoute><ReportedProduct></ReportedProduct></AdminRoute>,
         },
         {
            path: '/dashboard/payment/:id',
            element: <Payment></Payment>,
            loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)

         },
      ]
   },




])
export default router;