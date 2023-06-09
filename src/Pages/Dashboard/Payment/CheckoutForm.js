import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
   const stripe = useStripe()
   const [clientSecret, setClientSecret] = useState('')
   const elements = useElements()
   const [cardError, setCardError] = useState('')
   const [success, setSuccess] = useState('')
   const [processing, setProcessing] = useState(false)
   const [transactionId, setTransactionId] = useState('')
   const { price, email, name, _id, productId } = booking

   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://mobosell-server-a12.vercel.app/create-payment-intent", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
         },

         body: JSON.stringify({ price }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [price]);
   const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
      //stripe.js has not load yet 
      if (!stripe || !elements) {
         return
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
      if (card == null) {
         return
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card
      })

      if (error) {
         // console.log(error)
         setCardError(error.message)
      }
      else {
         setCardError('')
      }
      setSuccess('')
      setProcessing(true)


      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
         {
            payment_method: {
               card: card,
               billing_details: {
                  name: name,
                  email: email
               },
            },
         },
      );
      if (confirmError) {
         setCardError(confirmError.message)
         return
      }
      if (paymentIntent.status === "succeeded") {
         // console.log('card info:', card);
         //store payment info in the database
         const payment = {
            price,
            transactionId: paymentIntent.id,
            email,
            bookingId: _id,
            productId,

         }
         fetch('https://mobosell-server-a12.vercel.app/payments', {
            method: 'POST',
            headers: {
               'content-type': 'application/json',
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
         })
            .then(res => res.json())
            .then(data => {
               // console.log(data)
               if (data.result.insertedId) {
                  setSuccess('Congrats! Your Payment Complete')
                  setTransactionId(paymentIntent.id)
               }
            })
      }
      setProcessing(false)
   };


   return (
      <div>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />
            <button type="submit" className='btn btn-sm mt-4 btn-primary' disabled={!stripe || !clientSecret || processing}>
               Pay

            </button>
         </form>
         <p className='text-red-600'>{cardError}</p>
         {
            success && <div>
               <p className='text-green-500'>{success}</p>
               <p>Your transactionId <span className='font-bold'>{transactionId}</span></p>
            </div>
         }
      </div>
   );
};

export default CheckoutForm;