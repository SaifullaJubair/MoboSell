import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import User from "../../Shared/User/User";
import Register from "../../Pages/Register/Register";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import MyAppointment from "../../Pages/DashBoard/Dashboard/MyAppointment";
import Payment from "../../Pages/DashBoard/Dashboard/Payment/Payment";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import PrivateRoute from "../../Pages/Register/PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoutes/AdminRoutes";

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
   // {
   //    path: '/dashboard',
   //    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
   //    children: [
   //       {
   //          path: '/dashboard',
   //          element: <MyAppointment></MyAppointment>
   //       },
   //       {
   //          path: '/dashboard/allusers',
   //          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
   //       },
   //       {
   //          path: '/dashboard/managedoctors',
   //          element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
   //       },
   //       {
   //          path: '/dashboard/add_doctor',
   //          element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
   //       },
   //       {
   //          path: '/dashboard/payment/:id',
   //          element: <AdminRoute><Payment></Payment></AdminRoute>,
   //          loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)

   //       },
   //    ]
   // }
   {
      path: '*',
      element: <UnKnownRoutes></UnKnownRoutes>
   }
])
export default router;