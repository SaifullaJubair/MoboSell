import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedProduct = () => {
   const { data: products = [] } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch('http://localhost:5000/report');
         const data = await res.json();
         return data
      }
   })
   return (
      <div>
         <h1>All Users</h1>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     products.map((product, i) => <tr key={product._id} >
                        <th>{i + 1}</th>
                        <td>  {product.name} </td>
                        <td>{product.email} </td>
                        <td><button className='btn btn-xs btn-ghost'>Delete</button></td>
                     </tr>
                     )
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ReportedProduct;