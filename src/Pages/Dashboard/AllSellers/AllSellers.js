import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

   const { data: sellers = [] } = useQuery({
      queryKey: ['sellers'],
      queryFn: async () => {
         const res = await fetch('http://localhost:5000/sellers');
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
                     <th>Role</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>

                  {
                     sellers.map((user, i) => <tr key={user._id} >
                        <th>{i + 1}</th>
                        <td>  {user.name} </td>
                        <td>{user.email} </td>
                        <td>Seller</td>
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

export default AllSellers;