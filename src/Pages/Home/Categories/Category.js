import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Category = ({ category }) => {

   const { _id, name, description, image } = category

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
               <p>{description}</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">View All</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Category;