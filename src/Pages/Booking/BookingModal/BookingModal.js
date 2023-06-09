// import { format } from 'date-fns';
// import React, { useContext } from 'react';
// import { AuthContext } from '../../../Context/AuthProvider';

// const BookingModal = () => {


//    const { user } = useContext(AuthContext);

//    const handleBooking = event => {


//       // event.preventDefault()
//       // const form = event.target;
//       // const slot = form.slot.value;
//       // const patient = form.patient.value;
//       // const email = form.email.value;
//       // const phone = form.phone.value;

//       // const booking = {
//       //    appointmentDate: date,
//       //    treatment: treatmentName,
//       //    patient,
//       //    slot,
//       //    email,
//       //    phone,
//       //    price
//       // }

//       // fetch('https://mobosell-server-a12.vercel.app/bookings', {
//       //    method: 'POST',
//       //    headers: {
//       //       'content-type': 'application/json'
//       //    },
//       //    body: JSON.stringify(booking)
//       // })
//       //    .then(res => res.json())
//       //    .then(data => {
//       //       // console.log(data);
//       //       if (data.acknowledged) {
//       //          toast.success('Booking Confirmed')
//       //          refetch()
//       //       }
//       //       else {
//       //          toast.error(data.message)
//       //       }
//       //    })



//    }
//    return (
//       <>
//          <input type="checkbox" id="booking-modal" className="modal-toggle" />
//          <div className="modal">
//             <div className="modal-box relative">

//                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

//                <form onSubmit={handleBooking}>
//                   <label className='ml-2' >User Name</label>
//                   <input type="text" placeholder="Your required Name" className="input input-bordered my-2 input-primary w-full " disabled name='userName' defaultValue={user?.displayName} />


//                   <label className='ml-2' >User Email</label>
//                   <input type="email" placeholder="Your Email" className="input input-bordered my-2 input-primary w-full " defaultValue={user?.email} required name='userEmail' disabled />
//                   {/*
//                   <label className='ml-2' >Model Name</label>
//                   <input type="number" className="input input-bordered my-2 input-primary w-full " defaultValue={location} required name='price' disabled />

//                   <label className='ml-2' >Price</label>
//                   <input type="number" className="input input-bordered my-2 input-primary w-full " defaultValue={resellPrice} required name='price' disabled /> */}

//                   <label className='ml-2' >Mobile Number</label>
//                   <input type="number" placeholder="Your mobile number" className="input input-bordered my-2 input-primary w-full " required name='phone' />

//                   <label className='ml-2' >Location</label>
//                   <input type="text" placeholder="Where you want to meet" className="input input-bordered my-2 input-primary w-full " required name='location' />

//                   <input type="submit" className='bg-gradient-to-r from-primary to-secondary my-2 p-2 rounded-lg text-white font-bold text-lg text-center w-full ' value="Submit" />
//                </form>

//             </div>
//          </div>
//       </>
//    );
// };

// export default BookingModal;