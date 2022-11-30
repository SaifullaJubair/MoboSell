import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import Category from './Category';



const Categories = () => {
   const [categories, setCategories] = useState([]);
   const { loading } = useContext(AuthContext)

   useEffect(() => {
      fetch('http://localhost:5000/categories')
         .then(res => res.json())
         .then(data => setCategories(data))

   }, [])
   // console.log(categories)
   if (loading) {
      return <Loading></Loading>
   }
   return (
      <div >

         <div className="max-w-xl mt-36 mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
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