import React from 'react';
import { Helmet } from 'react-helmet-async';
import Categories from '../../../components/Categories/Categories';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import TestCategories from '../TestCategories/TestCategories';

const Home = () => {
   return (
      <div>
         <Helmet><title>Home</title></Helmet>
         <Banner></Banner>
         <TestCategories></TestCategories>
         <Categories></Categories>
         <Care></Care>


      </div>
   );
};

export default Home;