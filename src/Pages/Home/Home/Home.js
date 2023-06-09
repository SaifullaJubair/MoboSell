import React from 'react';
import { Helmet } from 'react-helmet-async';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Count from '../Count/Count';
import Contact from '../../ContactUs/ContactUs';
import NewArrival from '../NewArrival/NewArrival';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import OnTop from '../OnTop/OnTop';
import Review from '../Review/Review';
import WeOffer from '../WeOffer/WeOffer';

const Home = () => {
   return (
      <div>
         <Helmet><title>Home</title></Helmet>
         <Banner></Banner>
         <NewArrival></NewArrival>

         <Categories></Categories>
         <OnTop></OnTop>
         <PhotoGallery></PhotoGallery>
         <Review></Review>
         <Care></Care>
         <Count></Count>
         <WeOffer></WeOffer>
         <Contact></Contact>



      </div>
   );
};

export default Home;