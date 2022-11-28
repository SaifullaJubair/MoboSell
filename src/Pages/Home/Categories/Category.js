import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import PtoSGradentBtn from '../../../components/Button/PtoSGradentBtn';

const Category = ({ category }) => {

   const { _id, name, description, image } = category

   return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

         <div className="sm:text-center"
            data-aos="zoom-in-up"
            data-aos-duration='1500'
            data-aos-anchor-placement="top-center">
            <div className="flex items-center justify-center w-20 h-20 mb-7 rounded-full sm:mx-auto sm:w-24 sm:h-24">
               <img src={image} alt="" />

            </div>
            <h3 className="mb-4 text-2xl font-bold leading-5">{name}</h3>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
               {description}
            </p>
            <Link to={`category/${_id}`}><PtoSGradentBtn>View All</PtoSGradentBtn></Link>

         </div>

      </div>
   );
};

export default Category;