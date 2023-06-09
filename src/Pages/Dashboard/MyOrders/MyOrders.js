import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';
const MyOrders = () => {
   const { user } = useContext(AuthContext)
   const [deletingBooking, setDeletingBooking] = useState(null);
   const closeModal = () => {
      setDeletingBooking(null)
   }
   const url = `https://mobosell-server-a12.vercel.app/bookings?email=${user?.email}`
   const { data: bookings = [], refetch } = useQuery({
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

   const handleDeleteBooking = bookings => {
      console.log(bookings);
      fetch(`https://mobosell-server-a12.vercel.app/bookings/${bookings._id}`, {
         method: 'DELETE',
         headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
      })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
               refetch()
               toast.success(`Booking ${bookings.name} remove successfully`)
            }
         })
   }
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
                        <th>Image</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Remove</th>
                     </tr>
                  </thead>
                  <tbody className='font-semibold'>

                     {
                        bookings.length > 0 &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                           <th>{i + 1}</th>
                           <th>
                              <div className="avatar">
                                 <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={booking.image} alt="" />
                                 </div>
                              </div>
                           </th>
                           <td>{booking.productName}</td>
                           <td>{booking.price}</td>
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
                              <label onClick={() => {
                                 setDeletingBooking(booking)

                              }} htmlFor="my-modal" className="btn btn-sm btn-ghost"><FaTrash></FaTrash></label>
                           </td>

                        </tr>)
                     }
                  </tbody>

               </table>
               <div>
                  {
                     deletingBooking && <ConformationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you Remove,You Have to add it again.`}
                        closeModal={closeModal}
                        successAction={handleDeleteBooking}
                        successBtnName='Delete'
                        modalData={deletingBooking}
                     ></ConformationModal>
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrders;