import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from "react-icons/fa";
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageProducts = () => {

   const [deletingProduct, setDeletingProduct] = useState(null);
   const closeModal = () => {
      setDeletingProduct(null)
   }

   const { data: products, refetch } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         try {
            const res = await fetch('https://mobosell-server-a12.vercel.app/products', {
               headers: {
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
            })
            const data = await res.json()
            return data;
         }
         catch (error) { }
      }
   })

   const handleDeleteProduct = product => {

      fetch(`https://mobosell-server-a12.vercel.app/products/${product._id}`, {
         method: 'DELETE',
         headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
      })
         .then(res => res.json())
         .then(data => {
            // console.log(data)
            if (data.deletedCount > 0) {
               refetch()
               toast.success(`Product ${product.name} deleted successfully`)
            }
         })
   }


   return (
      <div>
         <h2 className='text-center text-3xl font-bold'>Manage Products: {products?.length}</h2>

         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Avatar</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Specialty</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>

                  {
                     products?.map((product, i) =>
                        <tr key={product._id}>
                           <th>{i + 1}</th>
                           <td>
                              <div className="avatar">
                                 <div className=" w-12 lg:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={product?.image} alt='' />
                                 </div>
                              </div></td>
                           <td>{product.name}</td>
                           <td>{product.email}</td>
                           <td>{product.specialty}</td>
                           <td>
                              <label onClick={() => {
                                 setDeletingProduct(product)
                              }} htmlFor="my-modal" className="btn btn-sm btn-ghost"><FaTrash></FaTrash></label>
                           </td>
                        </tr>
                     )
                  }


               </tbody>
            </table>
         </div>
         {
            deletingProduct && <ConformationModal
               title={`Are you sure you want to delete?`}
               message={`If you delete ${deletingProduct.name}. You cannot get data back`}
               closeModal={closeModal}
               successAction={handleDeleteProduct}
               successBtnName='Delete'
               modalData={deletingProduct}
            ></ConformationModal>
         }
      </div>
   );
};

export default ManageProducts;