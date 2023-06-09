import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { GoAlert } from "react-icons/go";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ProductDetails = () => {
   const { user } = useContext(AuthContext);

   const product = useLoaderData()
   const { name, _id, categoryName, email, sellerName, location, originalPrice, resellPrice, number, description, image, condition, purchaseYear } = product
   // console.log(product);
   const navigate = useNavigate()


   const handleBooking = event => {


      event.preventDefault()
      const form = event.target;
      const userName = form.userName.value;
      const email = form.email.value;
      const productName = form.productName.value;
      const phone = form.phone.value;
      const price = form.price.value;
      const location = form.location.value;

      const booking = {

         userName,
         email,
         productName,
         price,
         phone,
         location,
         productId: _id,
         image,

      }
      // console.log(booking)



      // fetch('https://mobosell-server-a12.vercel.app/bookings', {
      //    method: 'POST',
      //    headers: {
      //       'content-type': 'application/json'
      //    },
      //    body: JSON.stringify(booking)
      // })

      axios.post('https://mobosell-server-a12.vercel.app/bookings', booking)
         .then(res => {
            // console.log(data);
            if (res.data.acknowledged) {
               toast.success('Booking Confirmed')
               form.reset()
               navigate('/dashboard')

            }
            else {
               toast.error(res.data.message)
            }
         })
   }


   const handleReport = () => {
      fetch(`https://mobosell-server-a12.vercel.app/report/${_id}`, {
         method: 'PUT',
         headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               toast.success('Successfully Reported.')
            }
            else {
               toast.error('You Already Report this Product')
            }
         })
   }
   return (
      <div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
               <div className="flex flex-col justify-center">
                  <div className="max-w-xl mb-6">
                     <div className='flex items-center justify-between '>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                           {name}
                        </h2>
                        <p className='text-3xl' title='Report' onClick={handleReport}><GoAlert></GoAlert></p>
                     </div>
                     <p className='font-semibold  text-xl'>Original Price: <span className='text-primary text-2xl font-bold'>TK {originalPrice}</span></p>
                     <p className='font-semibold  text-xl'>Resell Price:  <span className='text-primary text-2xl font-bold'>TK {resellPrice}</span></p>

                     <h3 className='text-xl font-bold mt-8 mb-2'>Features</h3>
                     <p className="text-base text-gray-700 md:text-base lg:text-base">
                        {description}
                     </p>
                  </div>
                  <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                     <ul className="space-y-3 font-semibold">
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Model: {name}
                        </li>
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Brand: {categoryName}

                        </li>
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Condition: {condition}
                        </li>
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Purchase Year: {purchaseYear}
                        </li>
                     </ul>
                     <ul className="space-y-3 font-semibold">
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Seller Name: {sellerName}
                        </li>
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Location: {location}
                        </li>
                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           Contact: {number}
                        </li>

                        <li className="flex">
                           <span className="mr-1">
                              <svg
                                 className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                 stroke="currentColor"
                                 viewBox="0 0 52 52"
                              >
                                 <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                 />
                              </svg>
                           </span>
                           {email}
                        </li>
                     </ul>
                  </div>
               </div>
               <div>
                  <PhotoProvider>
                     <PhotoView src={image}>
                        <img
                           className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                           src={image}
                           alt=""
                        />
                     </PhotoView>
                  </PhotoProvider>

               </div>
               <label
                  htmlFor="booking-modal"
                  className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white mt-4"
               >

                  Book Now
               </label>
            </div>
         </div>
         <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
               <div className="modal-box relative">

                  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                  <form onSubmit={handleBooking}>

                     <label className='ml-2' >User Name</label>
                     <input type="text" placeholder="Your required Name" className="input input-bordered my-2 input-primary w-full " disabled name='userName' defaultValue={user?.displayName} />


                     <label className='ml-2' >User Email</label>
                     <input type="email" placeholder="Your Email" className="input input-bordered my-2 input-primary w-full " defaultValue={user?.email} required name='email' disabled />

                     <label className='ml-2' >Model Name</label>
                     <input type="text" className="input input-bordered my-2 input-primary w-full " defaultValue={name} required name='productName' disabled />

                     <label className='ml-2' >Price</label>
                     <input type="number" className="input input-bordered my-2 input-primary w-full " defaultValue={resellPrice} required name='price' disabled />

                     <label className='ml-2' >Mobile Number</label>
                     <input type="number" placeholder="Your mobile number" className="input input-bordered my-2 input-primary w-full " required name='phone' />

                     <label className='ml-2' >Location</label>
                     <input type="text" placeholder="Where you want to meet" className="input input-bordered my-2 input-primary w-full " required name='location' />

                     <input type="submit" className='bg-gradient-to-r from-primary to-secondary my-2 p-2 rounded-lg text-white font-bold text-lg text-center w-full ' value="Submit" />
                  </form>

               </div>
            </div>

         </div>
      </div>
   );
};

export default ProductDetails;