import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';

const AllUsers = () => {
   const { user } = useContext(AuthContext)

   const [deletingUser, setDeletingUser] = useState(null);
   const closeModal = () => {
      setDeletingUser(null)
   }
   const { data: users = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await fetch('https://mobosell-server-a12.vercel.app/users');
         const data = await res.json();
         return data
      }
   })
   const handleMakeAdmin = (id) => {
      fetch(`https://mobosell-server-a12.vercel.app/users/admin/${id}`, {
         method: 'PUT',
         headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               toast.success('Make Admin Successfully')
               refetch()
            }
         })
   }

   const handleDeleteUser = user => {
      // console.log(product);
      fetch(`https://mobosell-server-a12.vercel.app/users/${user._id}`, {
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
               toast.success(`User ${user.name} deleted successfully`)
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
                     <th>Admin</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>

                  {
                     users.map((user, i) => <tr key={user._id} >
                        <th>{i + 1}</th>
                        <td>  {user.name} </td>
                        <td>{user.email} </td>
                        <td>
                           {
                              user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                           }
                        </td>
                        <td>  <label onClick={() => {
                           setDeletingUser(user)
                        }} htmlFor="my-modal" className="btn btn-sm btn-ghost"><FaTrash></FaTrash></label></td>
                     </tr>
                     )
                  }

               </tbody>
               <div>
                  {
                     deletingUser && <ConformationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete . You cannot get data back`}
                        closeModal={closeModal}
                        successAction={handleDeleteUser}
                        successBtnName='Delete'
                        modalData={deletingUser}
                     ></ConformationModal>
                  }
               </div>
            </table>
         </div>
      </div>
   );
};

export default AllUsers;