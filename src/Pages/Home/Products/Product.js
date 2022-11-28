import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import PtoSGradentBtn from '../../../components/Button/PtoSGradentBtn';
const Product = ({ product }) => {
   const { _id, image, name, sellerName, location, description, originalPrice, resellPrice } = product
   return (
      <div className="card card-compact lg:w-96 w-full bg-base-100 shadow-xl mx-auto px-4 my-5  ">
         <figure>
            <PhotoProvider>
               <PhotoView src={image}>
                  <img src={image} alt="" />
               </PhotoView>
            </PhotoProvider>

         </figure>
         <div className="card-body">
            <h2 className="card-title text-2xl">{name}</h2>
            <p className='text-xl text-start truncate ...'>{description}</p>
            <p className='text-xl text-start '> Price: <span className=' text-orange-600'>$ {originalPrice}</span> </p>
            <div className="card-actions ">
               <Link to={`/product/${_id}`}>
                  <PtoSGradentBtn>Details</PtoSGradentBtn>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Product;