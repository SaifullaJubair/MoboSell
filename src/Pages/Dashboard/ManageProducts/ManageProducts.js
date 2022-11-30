import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from "react-icons/fa";
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageProducts = () => {

   const [deletingDoctor, setDeletingDoctor] = useState(null);
   const closeModal = () => {
      setDeletingDoctor(null)
   }

   const { data: doctors, refetch } = useQuery({
      queryKey: ['doctors'],
      queryFn: async () => {
         try {
            const res = await fetch('http://localhost:5000/doctors', {
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

   const handleDeleteDoctor = doctor => {
      // console.log(doctor);
      fetch(`http://localhost:5000/doctors/${doctor._id}`, {
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
               toast.success(`Doctor ${doctor.name} deleted successfully`)
            }
         })
   }


   return (
      <div>
         <h2 className='text-center text-3xl font-bold'>Manage Doctors: {doctors?.length}</h2>

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
                     doctors?.map((doctor, i) =>
                        <tr key={doctor._id}>
                           <th>{i + 1}</th>
                           <td>
                              <div className="avatar">
                                 <div className=" w-12 lg:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={doctor?.image} alt='' />
                                 </div>
                              </div></td>
                           <td>{doctor.name}</td>
                           <td>{doctor.email}</td>
                           <td>{doctor.specialty}</td>
                           <td>
                              <label onClick={() => {
                                 setDeletingDoctor(doctor)
                              }} htmlFor="my-modal" className="btn btn-sm btn-ghost"><FaTrash></FaTrash></label>
                           </td>
                        </tr>
                     )
                  }


               </tbody>
            </table>
         </div>
         {
            deletingDoctor && <ConformationModal
               title={`Are you sure you want to delete?`}
               message={`If you delete ${deletingDoctor.name}. You cannot get data back`}
               closeModal={closeModal}
               successAction={handleDeleteDoctor}
               successBtnName='Delete'
               modalData={deletingDoctor}
            ></ConformationModal>
         }
      </div>
   );
};

export default ManageProducts;