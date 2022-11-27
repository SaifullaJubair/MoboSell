import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Category = ({ product }) => {

   const { _id, name, category, image, resellPrice, location } = product

   return (
      <div>

         <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
               <PhotoProvider>
                  <PhotoView src={image}>
                     <img src={image} alt="ProductImage" />
                  </PhotoView>
               </PhotoProvider>
            </figure>
            <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Category;