import React, { useEffect, useState } from 'react';
import Category from './Category';



const Categories = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch('https://mobosell-server-a12.vercel.app/categories')
         .then(res => res.json())
         .then(data => setCategories(data))

   }, [])
   console.log(categories)
   return (
      <div className='my-20'>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
               <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                  <span className="inline-block mb-1 sm:mb-4">
                     There is no must in art
                     <br className="hidden md:block" />
                     because art is free.
                  </span>
                  <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
               </h2>
               <p className="text-gray-700 lg:text-sm lg:max-w-md">
                  "Class is dead", says Foucault; however, according to Reicher, it is
                  not so much class that is dead, but rather the absurdity, and some
                  would say the paradigm, of class. However, the subject is interpolated
                  into a postpatriarchialist dialectic theory that includes
                  consciousness as a totality.
               </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
               <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                     <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        alt=""
                     />
                     <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
                        <p className="text-sm tracking-wide text-gray-300">
                           Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                           been dogged by two questions since the day it was made: Who’s
                           the subject and why is she smiling?
                        </p>
                     </div>
                  </div>
               </a>
               <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                     <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                     />
                     <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                           The Starry Night
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                           Vincent Van Gogh’s most popular painting, The Starry Night was
                           created by Van Gogh at the asylum in Saint-Rémy, where he’d
                           committed himself in 1889.
                        </p>
                     </div>
                  </div>
               </a>
               <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                     <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                     />
                     <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                        <p className="text-sm tracking-wide text-gray-300">
                           Opulently gilded and extravagantly patterned, The Kiss, Gustav
                           Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                           Symbolism and Vienna Jugendstil, the Austrian variant of Art
                           Nouveau.
                        </p>
                     </div>
                  </div>
               </a>
               <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                     <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                     />
                     <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                           The Harvesters
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                           Bruegel’s fanfare for the common man is considered one of the
                           defining works of Western art. This composition was one of six
                           created on the theme of the seasons.
                        </p>
                     </div>
                  </div>
               </a>
            </div>
            <div className="text-center">
               <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               >
                  View gallery
                  <svg
                     className="inline-block w-3 ml-2"
                     fill="currentColor"
                     viewBox="0 0 12 12"
                  >
                     <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
               </a>
            </div>
         </div>
         <div className="max-w-xl mt-20 mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            data-aos="zoom-in-up"
            data-aos-duration='1500'
            data-aos-anchor-placement="top-center">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
               <span className="relative inline-block">
                  <svg
                     viewBox="0 0 52 24"
                     fill="currentColor"
                     className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                     <defs>
                        <pattern
                           id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                           x="0"
                           y="0"
                           width=".135"
                           height=".30"
                        >
                           <circle cx="1" cy="1" r=".7" />
                        </pattern>
                     </defs>
                     <rect
                        fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                        width="52"
                        height="24"
                     />
                  </svg>
                  <span className="relative">The</span>
               </span>{' '}
               Best {categories.length} Categories Mobile Brand
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
               accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
         </div>

         <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
            {
               categories.map(category => <Category
                  key={category._id}
                  category={category}
               ></Category>)
            }

         </div>
      </div>
   );
};

export default Categories;