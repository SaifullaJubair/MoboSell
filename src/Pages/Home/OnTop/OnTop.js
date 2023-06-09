import React from 'react';
import { FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const OnTop = () => {
   return (
      <div>

         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className='text-2xl font-bold my-6'>
               <p className='flex items-center'>Hot Deal <FaFire className='ml-2 text-yellow-500'></FaFire> </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full ">
               <Link
                  to="/product/63881b85778c5361893c8412">
                  <div className="overflow-hidden  bg-white rounded shadow-sm hover:-translate-y-2 duration-300">
                     <img
                        src="https://i.ibb.co/b3Gtc3Z/oppo-1.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                     />
                     <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                           <a
                              href="/"
                              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                              aria-label="Category"

                           >
                              Date
                           </a>
                           <span className="text-gray-600">— 28 May 2023</span>
                        </p>
                        <p

                           className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                           Oppo A1
                        </p>
                        <p className="mb-2 text-gray-700">
                           Sed ut perspiciatis unde omnis iste natus error sit sed quia
                           consequuntur magni voluptatem doloremque.
                        </p>
                        <section
                           className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                           Details
                        </section>
                     </div>
                  </div>
               </Link>

               {/* 02 */}
               <Link
                  to="/product/63881b85778c5361893c8412">
                  <div className="overflow-hidden  bg-white rounded shadow-sm hover:-translate-y-2 duration-300">
                     <img
                        src="https://i.ibb.co/3Wr7Vtv/Galaxy-Note-20-Ultra-S-Pen-on-back-scaled.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                     />
                     <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                           <a
                              href="/"
                              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                              aria-label="Category"

                           >
                              Date
                           </a>
                           <span className="text-gray-600">— 28 May 2023</span>
                        </p>
                        <p

                           className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                           Samsung S20 Ultra
                        </p>
                        <p className="mb-2 text-gray-700">
                           Sed ut perspiciatis unde omnis iste natus error sit sed quia
                           consequuntur magni voluptatem doloremque.
                        </p>
                        <section
                           className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                           Details
                        </section>
                     </div>
                  </div>
               </Link>
               {/* 03 */}
               <Link
                  to="/product/63881b85778c5361893c8412">
                  <div className="overflow-hidden  bg-white rounded shadow-sm hover:-translate-y-2 duration-300">
                     <img
                        src="https://i.ibb.co/zRxMSjs/1613709639309654.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                     />
                     <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                           <a
                              href="/"
                              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                              aria-label="Category"

                           >
                              Date
                           </a>
                           <span className="text-gray-600">— 28 May 2023</span>
                        </p>
                        <p

                           className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                           Mi Note-10
                        </p>
                        <p className="mb-2 text-gray-700">
                           Sed ut perspiciatis unde omnis iste natus error sit sed quia
                           consequuntur magni voluptatem doloremque.
                        </p>
                        <section
                           className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                           Details
                        </section>
                     </div>
                  </div>
               </Link>


            </div>
         </div>
      </div >
   );
};

export default OnTop;