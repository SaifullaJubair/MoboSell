import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';

const MyProducts = () => {
   const { user } = useContext(AuthContext)
   const [deletingProduct, setDeletingProduct] = useState(null);
   const closeModal = () => {
      setDeletingProduct(null)
   }
   const url = `http://localhost:5000/sellerProducts?email=${user?.email}`
   const { data: products = [], refetch } = useQuery({
      queryKey: ['products', user?.email],
      queryFn: async () => {
         const res = await fetch(url, {
            headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         });
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
               toast.success(`Doctor ${product.name} deleted successfully`)
            }
         })
   }


   const { data: bookings = [] } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
         const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         });
         const data = await res.json();
         return data
      }
   })
   return (
      <div>
         <h3 className="text-3xl font-bold my-5">My Products</h3>
         <div>
            {/* <h3 className="text-3xl font-bold my-5">My Appointment</h3> */}

            <div className="overflow-x-auto">
               <table className="table w-full">

                  <thead>
                     <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Payment</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>

                     {
                        products.length > 0 &&
                        products?.map((product, i) => <tr key={product._id}>
                           <th>{i + 1}</th>
                           <td>{product.name}</td>
                           <td>{product.categoryName}</td>
                           <td>{product.resellPrice}</td>
                           <td>{product.number}</td>
                           <td>
                              {
                                 product?.sold ?
                                    "sold" : <button className='btn'>Ad</button>
                              }

                           </td>
                           <td>
                              <label onClick={() => {
                                 setDeletingProduct(product)
                              }} htmlFor="my-modal" className="btn btn-sm btn-ghost"><FaTrash></FaTrash></label>
                           </td>
                        </tr>)
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
      </div>
   );
}
export default MyProducts;