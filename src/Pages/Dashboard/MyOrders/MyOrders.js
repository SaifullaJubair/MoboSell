import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
   const { user } = useContext(AuthContext)
   const url = `http://localhost:5000/bookings?email=${user?.email}`
   const { data: bookings = [] } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
         const res = await fetch(url, {
            headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         });
         const data = await res.json();
         return data
      }
   })
   return (
      <div>
         <h3 className="text-3xl font-bold my-5">My Orders</h3>
         <div>
            {/* <h3 className="text-3xl font-bold my-5">My Appointment</h3> */}

            <div className="overflow-x-auto">
               <table className="table w-full">

                  <thead>
                     <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Payment</th>
                        <th>Status</th>
                     </tr>
                  </thead>
                  <tbody className='font-semibold'>

                     {
                        bookings.length > 0 &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                           <th>{i + 1}</th>
                           <td>{booking.userName}</td>
                           <td>{booking.price}</td>
                           <td>{booking.phone}</td>
                           <td>{booking.email}</td>
                           <td>
                              {
                                 booking.price && !booking.paid &&
                                 <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                              }
                              {
                                 booking.price && booking.paid && <span className='text-primary'>Paid</span>
                              }
                           </td>
                           <td>
                              {
                                 booking.price && !booking.paid &&
                                 <span>Available</span>
                              }
                              {
                                 booking.price && booking.paid && <span className='text-primary'>Sold</span>
                              }
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyOrders;