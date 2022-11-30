import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';

const ReportedProduct = () => {
   const { user } = useContext(AuthContext)
   const [deletingProduct, setDeletingProduct] = useState(null);
   const closeModal = () => {
      setDeletingProduct(null)
   }
   const { data: products = [], refetch } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch('http://localhost:5000/report');
         const data = await res.json();
         return data
      }
   })

   const handleDeleteProduct = product => {
      // console.log(product);
      fetch(`http://localhost:5000/products/${product._id}`, {
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
            <div>
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
         </div>

      </div>
   );
};

export default ReportedProduct;