import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const Payment = () => {
   const booking = useLoaderData()
   // console.log('bookingdata', booking)
   const { email, price } = booking
   return (
      <div>
         <div>
            <h3 className='text-3xl font-bold my-4'> Payment for {email}</h3>
            <p className='text-xl'>Please Pay <strong>${price}</strong>  for your Product  </p>
         </div>
         <div className='w-96 my-4'>
            <Elements
               stripe={stripePromise}>
               <CheckoutForm booking={booking} />
            </Elements>
         </div>
      </div>
   );
};

export default Payment;