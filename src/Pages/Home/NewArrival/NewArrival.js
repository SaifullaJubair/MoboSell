import React from 'react';
import { FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewArrival = () => {
   return (
      <div className='my-8'>
         <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
               <header className="text-center">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                     New Collection
                  </h2>

                  <p className="max-w-md mx-auto mt-4 text-gray-500">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                     praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                     natus?
                  </p>
               </header>

               <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                  <li>
                     <a href="#" className="relative block group">
                        <img
                           src="https://i.ibb.co/PQ4vSX4/realme8.jpg"
                           alt=""
                           className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                        />

                        <div
                           className="absolute inset-0 flex flex-col items-start justify-end p-6"
                        >
                           <h3 className="text-xl font-medium text-white">Realme 8</h3>

                           <span
                              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                           >
                              Shop Now
                           </span>
                        </div>
                     </a>
                  </li>

                  <li>
                     <a href="#" className="relative block group">
                        <img
                           src="https://i.ibb.co/wYn3cZh/samsung-s21.jpg"
                           alt=""
                           className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                        />

                        <div
                           className="absolute inset-0 flex flex-col items-start justify-end p-6"
                        >
                           <h3 className="text-xl font-medium text-white">Samsung S21</h3>

                           <span
                              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                           >
                              Shop Now
                           </span>
                        </div>
                     </a>
                  </li>

                  <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                     <a href="#" className="relative block group">
                        <img
                           src="https://i.ibb.co/26bpRBb/oppo4.jpg"
                           alt=""
                           className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                        />

                        <div
                           className="absolute inset-0 flex flex-col items-start justify-end p-6"
                        >
                           <h3 className="text-xl font-medium text-white">Oppo-4</h3>

                           <span
                              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                           >
                              Shop Now
                           </span>
                        </div>
                     </a>
                  </li>
               </ul>
            </div>
         </section>
      </div >
   );
};

export default NewArrival;