import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
   const products = useLoaderData()

   return (
      <div>
         <h2 className='text-center font-bold text-3xl  '>Our Products</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-40'>
            {
               products.map(product => <Product
                  key={product._id}
                  product={product}></Product>)
            }
         </div>
      </div>
   );
};

export default Products;