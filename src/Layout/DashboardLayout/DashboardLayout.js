import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user?.email)
   if (isAdminLoading) {
      return <Loading></Loading>
   }
   console.log(isAdmin)
   return (
      <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

               <Outlet></Outlet>


            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <li><Link to='/dashboard'>My Orders</Link></li>

                  {
                     isAdmin && <>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/add'>Add A Doctor</Link></li>
                        <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                     </>
                  }

               </ul>

            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;