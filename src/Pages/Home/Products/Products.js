import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
   const products = useLoaderData()

   return (
      <div>
         <h2 className='text-center font-bold text-3xl'>Our Products</h2>
         {
            products.map(product => <Product
               key={product._id}
               product={product}></Product>)
         }
      </div>
   );
};

export default Products;