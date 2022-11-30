import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Loading from '../../Shared/Loading/Loading';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user?.email)
   const [isSeller, isSellerLoading] = useSeller(user?.email)
   const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
   if (isAdminLoading || isSellerLoading) {
      return <Loading></Loading>
   }

   // console.log(isAdmin)
   return (
      <div >
         <Navbar></Navbar>
         <div className="drawer drawer-mobile ">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

               <Outlet></Outlet>


            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay bg-red-900"></label>
               <ul className="menu p-4 w-56 font-bold">
                  {/* <!-- Sidebar content here --> */}
                  {
                     isBuyer && <>
                        <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                     </>
                  }
                  {
                     isSeller && <>
                        <li><Link to='/dashboard/my-products'>My Products</Link></li>
                        <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                     </>
                  }
                  {
                     isAdmin && <>
                        <li><Link to='/dashboard/add-categories'>Add Categories</Link></li>
                        <li><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/reportedProduct'>Reported Product</Link></li>
                     </>
                  }

               </ul>

            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;