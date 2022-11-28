import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
   const product = useLoaderData()
   const { name, _id, categoryName, email, sellerName, location, originalPrice, resellPrice, purchseYear, number, description, image, condition, purchaseYear } = product
   console.log(product);
   return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
               <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                     {name}

                  </h2>
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
                        Email: {email}
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={image}
                  alt=""
               />
            </div>
            <input
               type="button"
               value="Book Now"
               className="block my-4 w-full p-3 text-center rounded-lg text-white font-bold bg-gradient-to-r from-primary to-secondary " />
         </div>
      </div>
   );
};

export default ProductDetails;